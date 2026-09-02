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

export class HighlightService {
    private static _registered = false;
    private static _readyCallbacks: Array<() => void> = [];

    /**
     * Đăng ký ngữ pháp .sao vào Prism engine
     */
    static register() {
        const P = (window as any).Prism;
        if (!P) {
            this._waitForPrism();
            return;
        }

        P.languages.sao = saoGrammar;
        this._registered = true;

        while (this._readyCallbacks.length > 0) {
            const cb = this._readyCallbacks.shift();
            if (cb) cb();
        }
    }

    private static _waitForPrism() {
        if (typeof window === 'undefined') return;
        const check = setInterval(() => {
            if ((window as any).Prism) {
                clearInterval(check);
                HighlightService.register();
            }
        }, 50);
        setTimeout(() => clearInterval(check), 5000);
    }

    /**
     * Thực hiện highlight toàn bộ hoặc trong một container cụ thể
     */
    static highlight(container: ParentNode = document) {
        if (!this._registered) this.register();

        const P = (window as any).Prism;
        if (!P || !this._registered) {
            this._readyCallbacks.push(() => this.highlight(container));
            return;
        }

        const elements = container.querySelectorAll('pre code[class*="language-"]');
        elements.forEach((el) => {
            P.highlightElement(el);
        });
    }
}

export default HighlightService;
