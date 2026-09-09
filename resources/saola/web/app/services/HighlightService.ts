/**
 * HighlightService.ts
 * 
 * Service quản lý Prism.js syntax highlighting cho toàn bộ hệ sinh thái Saola Docs.
 * Hỗ trợ ngữ pháp .sao hoàn chỉnh, tự động tải/đăng ký grammar và observer SPA route changes.
 */

const jsExpr = {
    'string': [
        { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true },
        // \x60 is the backtick char, written as hex on purpose: vite-plugin-saola
        // runs an HTML-minify transform on any .ts holding a backtick literal plus
        // a <tag, which shreds these regexes. No literal backtick here = file skipped.
        { pattern: /\x60(?:\\[\s\S]|[^\\\x60])*\x60/, greedy: true }
    ],
    'comment': [
        { pattern: /\/\/.*/, greedy: true },
        { pattern: /\/\*[\s\S]*?\*\//, greedy: true }
    ],
    'boolean': /\b(?:true|false|null|undefined)\b/,
    'number': /\b\d+(?:\.\d+)?\b/,
    'constant': /\b[A-Z_][A-Z0-9_]{2,}\b/,
    'keyword': /\b(?:as|if|else|return|function|class|const|let|var|await|async|import|export|default|new|this|typeof|instanceof|void|delete|in|of|yield)\b/,
    'function': /\b[a-zA-Z_$][a-zA-Z0-9_$]*(?=\s*\()/,
    'property': [
        { pattern: /(?:\.\s*)[a-zA-Z_$][a-zA-Z0-9_$]*/, inside: { 'punctuation': /^\./ } },
        { pattern: /\b[a-zA-Z_$][a-zA-Z0-9_$]*(?=\s*:)/ }
    ],
    'variable': /\b[a-zA-Z_$][a-zA-Z0-9_$]*\b/,
    'operator': /===|!==|==|!=|<=|>=|<|>|&&|\|\||!|\+|-|\*|\/|%|\?|:|\=|\+\=|\-\=|\*|\/|=>/,
    'punctuation': /[{}[\](),;]/
};

const directiveInside = {
    'directive-name': {
        pattern: /^@[a-zA-Z0-9_]+/,
        alias: 'keyword'
    },
    'punctuation': /^\(|\)$/,
    'expression': {
        pattern: /[\s\S]+/,
        inside: jsExpr
    }
};

export const saoGrammar = {
    'comment': [
        { pattern: /\{\s*--[\s\S]*?--\s*\}/, greedy: true },
        { pattern: /<!--[\s\S]*?-->/, greedy: true },
        { pattern: /(^|[^\\])\/\/.*/, lookbehind: true, greedy: true }
    ],
    'interpolation': {
        pattern: /\{\{[\s\S]*?\}\}|\{!![\s\S]*?!!\}|\{\{\{[\s\S]*?\}\}\}/,
        greedy: true,
        inside: {
            'delimiter': {
                pattern: /^\{\{|\}\}$|^\{!!|!!\}$|^\{\{\{|\}\}\}$/,
                alias: 'punctuation'
            },
            'expression': {
                pattern: /[\s\S]+/,
                inside: jsExpr
            }
        }
    },
    'script-block': {
        pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
        lookbehind: true,
        inside: jsExpr
    },
    'style-block': {
        pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
        lookbehind: true,
        inside: {
            'comment': /\/\*[\s\S]*?\*\//,
            'selector': /[^\{\}]+(?=\{)/,
            'property': /[\w-]+(?=\s*:)/,
            'punctuation': /[{}:;]/
        }
    },
    'tag': {
        pattern: /<\/?[a-zA-Z0-9_-]+(?:\s+[^>]*?)?\/?>/,
        greedy: true,
        inside: {
            'tag-name': {
                pattern: /^<\/?[a-zA-Z0-9_-]+/i,
                inside: {
                    'punctuation': /^<\/?/
                },
                alias: 'tag'
            },
            'directive': {
                pattern: /@[a-zA-Z0-9_]+(?:\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\))?/,
                inside: directiveInside
            },
            'attr-value': {
                pattern: /=\s*(?:"(?:\\.|[^\\"])*"|'(?:\\.|[^\\'])*'|[^\s'">=]+)/i,
                inside: {
                    'punctuation': [
                        /^=/,
                        { pattern: /^(\s*)["']|["']$/, lookbehind: true }
                    ],
                    'interpolation': {
                        pattern: /\{\{[\s\S]*?\}\}|\{!![\s\S]*?!!\}/,
                        inside: {
                            'delimiter': {
                                pattern: /^\{\{|\}\}$|^\{!!|!!\}$/,
                                alias: 'punctuation'
                            },
                            'expression': {
                                pattern: /[\s\S]+/,
                                inside: jsExpr
                            }
                        }
                    }
                }
            },
            'punctuation': /\/?>$/,
            'attr-name': {
                pattern: /[^\s>\/=]+/i
            }
        }
    },
    'directive': {
        pattern: /@[a-zA-Z0-9_]+(?:\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\))?/,
        greedy: true,
        inside: directiveInside
    },
    'entity': /&[a-z]+;|&#\d+;|&#x[a-f\d]+;/i
};

/** Prism gọi những tên này là "không tô màu" — đừng đợi grammar không bao giờ tới. */
const PLAIN = ['none', 'text', 'plain', 'plaintext'];

const MAX_WAIT_MS = 5000;
const POLL_MS = 50;

const languageOf = (el: Element): string => {
    const found = [...el.classList].find((c) => c.startsWith('language-'));

    return found ? found.slice('language-'.length) : '';
};

export class HighlightService {
    /**
     * Đăng ký ngữ pháp `.sao`. Trả về Prism đã sẵn sàng chưa.
     *
     * Gán LẠI mỗi lần thiếu chứ không dùng cờ "đã đăng ký": layout docs nạp
     * `prism.min.js` bằng thẻ <script src>, và khi thẻ đó chạy hai lần thì
     * `Prism.languages` được dựng lại từ đầu, xoá mất grammar .sao. Có cờ thì
     * lần đăng ký thứ hai bị bỏ qua và mọi khối `language-sao` ra text thô.
     */
    static register(): boolean {
        const P = (window as any).Prism;
        if (!P) return false;
        if (!P.languages.sao) P.languages.sao = saoGrammar;

        return true;
    }

    /**
     * Tô màu mọi khối code trong `container`.
     *
     * Đợi ĐÚNG grammar mà từng khối cần, không phải chỉ đợi `window.Prism`.
     * Lý do: layout nạp Prism lõi ở thẻ <script> ĐẦU TIÊN rồi mới tới
     * `prism-php`, `prism-typescript`… ở các thẻ sau. `async: false` giữ được
     * thứ tự nhưng không đảm bảo chúng đã CHẠY XONG, nên có một khoảng thời
     * gian `Prism` đã có mà `Prism.languages.php` thì chưa. Gọi
     * `highlightElement` đúng lúc đó: Prism lặng lẽ để nguyên text thô và
     * KHÔNG bao giờ thử lại khi grammar tới — khối code mất màu, không lỗi,
     * không dấu vết. Cache nguội thì gặp, cache nóng thì không: đúng kiểu hỏng
     * lúc được lúc không.
     */
    static highlight(container: ParentNode = document) {
        const targets = [...container.querySelectorAll('pre code[class*="language-"]')]
            .filter((el) => !PLAIN.includes(languageOf(el)));

        if (targets.length > 0) this.flush(targets, Date.now());
    }

    private static flush(elements: Element[], startedAt: number) {
        const ready = this.register();
        const P = (window as any).Prism;
        const waiting: Element[] = [];

        for (const el of elements) {
            if (!ready || !P.languages[languageOf(el)]) {
                waiting.push(el);
                continue;
            }
            // Đã có token = đã tô rồi. Tô LẠI trên chính node đó làm NÁT khoảng
            // trắng: Prism đọc `textContent` của cây đã token hoá rồi dựng lại,
            // và xuống dòng giữa các token biến mất — trong <pre> đó là thứ
            // người dùng nhìn thấy.
            //
            // Kiểm Ở ĐÂY chứ không phải lúc lập danh sách: layout gọi
            // `highlight()` nhiều lần (đổi route, và khi `@await` thay skeleton
            // bằng nội dung thật), mỗi lần mở một vòng chờ grammar riêng. Lọc
            // lúc lập danh sách thì cả hai vòng đều chụp được element khi nó
            // CHƯA có token, rồi lần lượt tô — vẫn hai lần.
            if (el.querySelector('.token') !== null) continue;

            P.highlightElement(el);
        }

        if (waiting.length > 0 && Date.now() - startedAt < MAX_WAIT_MS) {
            setTimeout(() => this.flush(waiting, startedAt), POLL_MS);
        }
    }
}

export default HighlightService;
