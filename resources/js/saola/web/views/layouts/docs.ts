import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.layouts.docs';
const __VIEW_NAMESPACE__ = 'web.layouts.';
const __VIEW_TYPE__ = 'view';
const __VIEW_CONFIG__ = {
    hasSuperView: true,
    viewType: 'view',
    sections: {
        "content":{
            "type":"long",
            "preloader":false,
            "useVars":false,
            "script":{}
        }
    },
    wrapperConfig: { enable: false, tag: null, subscribe: true, attributes: {} },
    hasAwaitData: false,
    hasFetchData: false,
    usesVars: false,
    hasSections: true,
    hasSectionPreload: false,
    hasPrerender: false,
    renderLongSections: ["content"],
    renderSections: [],
    prerenderSections: []
};

/**
 * Props của view — sinh tự động từ @props/@vars, không sửa tay.
 * Optional hết vì khai báo nào cũng có default.
 */
export interface DocsProps {
    /** viewId server gán khi hydrate */
    __SSR_VIEW_ID__?: string;
    [key: string]: any;
}



class DocsViewController extends ViewController {
    constructor(view: View) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this as any).setStaticConfig === 'function') {
            (this as any).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this as any).config = __VIEW_CONFIG__;
        }
    }
}

class DocsView extends View {
    constructor(__data__: any = {}, systemData: any = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, DocsViewController);
        const App: Application = app("App") as Application;
        const __STATE__ = this.__ctrl__.states;
        const {__base__, __layout__, __page__, __component__, __template__, __context__, __partial__, __system__, __env = {}, __helper = {}} = systemData;
        const __VIEW_ID__ = __data__.__SSR_VIEW_ID__ || App.View.generateViewId();

        const useState = (value: any) => {
            return __STATE__.__useState(value);
        };
        const updateRealState = (state: any) => {
            __STATE__.__.updateRealState(state);
        };

        const lockUpdateRealState = () => {
            __STATE__.__.lockUpdateRealState();
        };
        const updateStateByKey = (key: string, state: any) => {
            __STATE__.__.updateStateByKey(key, state);
        };


        const __UPDATE_DATA_TRAIT__: any = {};
        const __VARIABLE_LIST__: any = [];


        this.__ctrl__.setUserDefinedConfig({
            name: 'DocsLayout',

                // Layout được tái dùng khi điều hướng giữa các trang docs (layout diff),
                // nên started() chỉ chạy một lần — phải tự đánh dấu lại sau mỗi lần chuyển route.
                // Bám vào chính lúc router thay nội dung .docs-main, đừng đoán một khoảng
                // chờ sau click: view chunk nạp lazy, mạng chậm là URL đổi sau khoảng đó và
                // highlight kẹt lại ở trang cũ vĩnh viễn.
                started() {
                    this._observer = new MutationObserver(() => {
                        cancelAnimationFrame(this._raf);
                        this._raf = requestAnimationFrame(() => this.sync());
                    });
                    this.sync();
                },

                resumed() { this.sync(); },

                stopped() { this.teardown(); },
                destroyed() { this.teardown(); },

                teardown() {
                    if (this._observer) { this._observer.disconnect(); this._observer = null; }
                    cancelAnimationFrame(this._raf);
                },

                sync() {
                    // Prism rewrites <code> innerHTML bên trong .docs-main — đúng subtree
                    // observer đang theo dõi. Không ngắt observer quanh lần highlight thì
                    // mỗi frame nó lại tự lên lịch sync() → rerender loop ghim cả tab.
                    if (this._observer) this._observer.disconnect();

                    this.markCurrent();
                    this.generateTOC();

                    const main = document.querySelector('.docs-main');
                    if (window.Prism && main) {
                        this.registerSaoLanguage();
                        // Chỉ tô khối chưa tô: sync() gọi lại (đổi route) thành gần như
                        // miễn phí và không còn gì để nuôi vòng lặp observer.
                        main.querySelectorAll('pre code[class*="language-"]:not([data-hl])').forEach((el: Element) => {
                            el.setAttribute('data-hl', '');
                            window.Prism.highlightElement(el);
                        });
                    }

                    if (this._observer && main) {
                        this._observer.observe(main, { childList: true, subtree: true });
                    }
                },

                // Grammar phải đăng ký NGAY TRƯỚC lần highlight đầu, không phải trong một
                // <script> inline: prism.min.js tải từ CDN nên `window.Prism` có thể chưa
                // tồn tại lúc thẻ inline chạy, `if (window.Prism)` im lặng bỏ qua và mọi
                // khối `language-sao` mất highlight cho tới khi reload trúng thứ tự may mắn.
                registerSaoLanguage() {
                    const P = (window as any).Prism;
                    if (!P) return;

                    const js = P.languages.javascript || P.languages.clike || {};

                    const interpolationInside = {
                        'delimiter': {
                            pattern: /^\{\{|\}\}$|^\{!!|!!\}$|^\{\{\{|\}\}\}$/,
                            alias: 'punctuation'
                        },
                        'rest': js
                    };

                    const directiveInside = {
                        'keyword': /^@[a-zA-Z0-9_]+/,
                        'punctuation': /^\(|\)$/,
                        'rest': js
                    };

                    P.languages.sao = {
                        'comment': [
                            { pattern: /\{\s*--[\s\S]*?--\s*\}/, greedy: true },
                            { pattern: /<!--[\s\S]*?-->/, greedy: true },
                            { pattern: /(^|[^\\])\/\/.*/, lookbehind: true, greedy: true }
                        ],
                        'interpolation': {
                            pattern: /\{\{[\s\S]*?\}\}|\{!![\s\S]*?!!\}|\{\{\{[\s\S]*?\}\}\}/,
                            greedy: true,
                            inside: interpolationInside
                        },
                        'directive': {
                            pattern: /@(?:import|vars|props|states|state|const|let|computed|await|if|elseif|else|endif|unless|endunless|foreach|endforeach|for|endfor|while|endwhile|switch|case|break|default|endswitch|include|extends|block|endblock|useBlock|children|click|bind|attr|class|style|submit|input|change|keyup|keydown|keypress|focus|blur|mouseenter|mouseleave|[a-zA-Z0-9_]+)(?:\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\))?/,
                            greedy: true,
                            inside: directiveInside
                        },
                        'tag': {
                            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"(?:\\.|[^\\"])*"|'(?:\\.|[^\\'])*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
                            greedy: true,
                            inside: {
                                'tag': {
                                    pattern: /^<\/?[^\s>\/]+/i,
                                    inside: {
                                        'punctuation': /^<\/?/,
                                        'namespace': /^[^\s>\/:]+:/
                                    }
                                },
                                'attr-value': {
                                    pattern: /=\s*(?:"(?:\\.|[^\\"])*"|'(?:\\.|[^\\'])*'|[^\s'">=]+)/i,
                                    inside: {
                                        'punctuation': [
                                            /^=/,
                                            {
                                                pattern: /^(\s*)["']|["']$/,
                                                lookbehind: true
                                            }
                                        ],
                                        'interpolation': {
                                            pattern: /\{\{[\s\S]*?\}\}|\{!![\s\S]*?!!\}/,
                                            inside: interpolationInside
                                        }
                                    }
                                },
                                'directive': {
                                    pattern: /@(?:click|bind|attr|class|style|submit|input|change|keyup|keydown|keypress|focus|blur|mouseenter|mouseleave|[a-zA-Z0-9_]+)(?:\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\))?/,
                                    inside: directiveInside
                                },
                                'punctuation': /\/?>/,
                                'attr-name': {
                                    pattern: /[^\s>\/]+/i,
                                    inside: {
                                        'namespace': /^[^\s>\/:]+:/
                                    }
                                }
                            }
                        },
                        'entity': /&[a-z]+;|&#\d+;|&#x[a-f\d]+;/i
                    };
                },

                markCurrent() {
                    const here = window.location.pathname.replace(/\/+$/, '') || '/';
                    document.querySelectorAll('.docs-nav a').forEach(a => {
                        a.classList.toggle('is-current', a.getAttribute('href') === here);
                    });
                },

                generateTOC() {
                    const list = document.getElementById('docs-toc-list');
                    if (!list) return;
                    list.innerHTML = '';

                    const headings = document.querySelectorAll('.docs-main h2, .docs-main h3');
                    if (headings.length === 0) {
                        list.innerHTML = '<li><span class="toc-empty">Chưa có mục lục</span></li>';
                        return;
                    }

                    headings.forEach(heading => {
                        if (!heading.id) {
                            heading.id = heading.innerText.toLowerCase().replace(/[\s\W-]+/g, '-');
                        }
                        const li = document.createElement('li');
                        li.className = 'toc-item ' + (heading.tagName.toLowerCase() === 'h3' ? 'toc-h3' : 'toc-h2');
                        const a = document.createElement('a');
                        a.href = '#' + heading.id;
                        a.innerText = heading.innerText;
                        li.appendChild(a);
                        list.appendChild(li);
                    });
                }
        });

        this.__ctrl__.setup({
            superView: `${__layout__+"public"}`,
            subscribe: true,
            fetch: null,
            data: __data__,
            viewId: __VIEW_ID__,
            path: __VIEW_PATH__,
            scripts: [{"type":"src","src":"https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js","attributes":{"data-manual":true}},{"type":"src","src":"https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-markup-templating.min.js"},{"type":"src","src":"https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-php.min.js"},{"type":"src","src":"https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-json.min.js"},{"type":"src","src":"https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-typescript.min.js"},{"type":"src","src":"https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-bash.min.js"}],
            styles: [],
            resources: [{"tag":"script","uuid":"script-0","attrs":{"src":"https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js","data-manual":true}},{"tag":"script","uuid":"script-1","attrs":{"src":"https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-markup-templating.min.js"}},{"tag":"script","uuid":"script-2","attrs":{"src":"https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-php.min.js"}},{"tag":"script","uuid":"script-3","attrs":{"src":"https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-json.min.js"}},{"tag":"script","uuid":"script-4","attrs":{"src":"https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-typescript.min.js"}},{"tag":"script","uuid":"script-5","attrs":{"src":"https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-bash.min.js"}}],
            commitConstructorData: function(this: any) {
                // Then update states from data

                // Finally lock state updates

            },
            updateVariableData: function(this: any, data: any) {
                // Update all variables first
                for (const key in data) {
                    if (data.hasOwnProperty(key)) {
                        // Call updateVariableItemData directly from config
                        if (typeof this.config.updateVariableItemData === 'function') {
                            this.config.updateVariableItemData.call(this, key, data[key]);
                        }
                    }
                }
                // Re-derive CHỈ state phụ thuộc data — state literal của instance KHÔNG reset

                // Finally lock state updates

            },
            updateVariableItemData: function(this: any, key: string, value: any) {
                this.data[key] = value;
                if (typeof __UPDATE_DATA_TRAIT__[key] === "function") {
                    __UPDATE_DATA_TRAIT__[key](value);
                }
            },
            prerender: function() {
            return null;
            },
            render: function () {
            let parentElement = this.parentElement;
            let parentReactive = null;
            this.block('block-content', 'content', (parentElement: any) => [
            this.html(`Bcontent1`, "div", parentElement,
                { classes: [{ type: 'static', value: "docs-shell" }] },
                (parentElement: any) => [
                this.html(`Bcontent11`, "aside", parentElement,
                    { classes: [{ type: 'static', value: "docs-nav" }], attrs: { "aria-label": { type: 'static', value: "Điều hướng tài liệu" } } },
                    (parentElement: any) => [
                    this.html(`Bcontent111`, "div", parentElement,
                        { classes: [{ type: 'static', value: "docs-nav-inner" }] },
                        (parentElement: any) => [
                        this.html(`Bcontent1111`, "p", parentElement,
                            { classes: [{ type: 'static', value: "docs-nav-group" }] },
                            (parentElement: any) => [
                            this.text('Bắt đầu')
                            ]),
                        this.html(`Bcontent1112`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs" } } },
                            (parentElement: any) => [
                            this.text('Giới thiệu')
                            ]),
                        this.html(`Bcontent1113`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/getting-started" } } },
                            (parentElement: any) => [
                            this.text('Cài đặt & route đầu tiên')
                            ]),
                        this.html(`Bcontent1114`, "p", parentElement,
                            { classes: [{ type: 'static', value: "docs-nav-group" }] },
                            (parentElement: any) => [
                            this.text('Nền tảng')
                            ]),
                        this.html(`Bcontent1115`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/architecture" } } },
                            (parentElement: any) => [
                            this.text('Kiến trúc hệ thống')
                            ]),
                        this.html(`Bcontent1116`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/contexts" } } },
                            (parentElement: any) => [
                            this.text('Context, module & controller')
                            ]),
                        this.html(`Bcontent1117`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/compiler" } } },
                            (parentElement: any) => [
                            this.text('Compiler & AST')
                            ]),
                        this.html(`Bcontent1118`, "p", parentElement,
                            { classes: [{ type: 'static', value: "docs-nav-group" }] },
                            (parentElement: any) => [
                            this.text('Backend')
                            ]),
                        this.html(`Bcontent1119`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/services" } } },
                            (parentElement: any) => [
                            this.text('Service & tầng nghiệp vụ')
                            ]),
                        this.html(`Bcontent111e10_`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/repository" } } },
                            (parentElement: any) => [
                            this.text('Repository & truy vấn')
                            ]),
                        this.html(`Bcontent111e11_`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/mask" } } },
                            (parentElement: any) => [
                            this.text('Mask, model & collection')
                            ]),
                        this.html(`Bcontent111e12_`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/validator" } } },
                            (parentElement: any) => [
                            this.text('Validator & dữ liệu vào')
                            ]),
                        this.html(`Bcontent111e13_`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/response" } } },
                            (parentElement: any) => [
                            this.text('Response & đầu ra')
                            ]),
                        this.html(`Bcontent111e14_`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/core-kit" } } },
                            (parentElement: any) => [
                            this.text('Hạ tầng lõi')
                            ]),
                        this.html(`Bcontent111e15_`, "p", parentElement,
                            { classes: [{ type: 'static', value: "docs-nav-group" }] },
                            (parentElement: any) => [
                            this.text('Viết view')
                            ]),
                        this.html(`Bcontent111e16_`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/sao-file" } } },
                            (parentElement: any) => [
                            this.text('Cấu trúc file .sao')
                            ]),
                        this.html(`Bcontent111e17_`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/directives" } } },
                            (parentElement: any) => [
                            this.text('Tham chiếu directive')
                            ]),
                        this.html(`Bcontent111e18_`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/reactivity" } } },
                            (parentElement: any) => [
                            this.text('State & reactivity')
                            ]),
                        this.html(`Bcontent111e19_`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/system-vars" } } },
                            (parentElement: any) => [
                            this.text('Biến hệ thống')
                            ]),
                        this.html(`Bcontent111e20_`, "p", parentElement,
                            { classes: [{ type: 'static', value: "docs-nav-group" }] },
                            (parentElement: any) => [
                            this.text('Runtime')
                            ]),
                        this.html(`Bcontent111e21_`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/runtime" } } },
                            (parentElement: any) => [
                            this.text('Runtime & hydration')
                            ]),
                        this.html(`Bcontent111e22_`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/lifecycle" } } },
                            (parentElement: any) => [
                            this.text('Vòng đời & marker')
                            ]),
                        this.html(`Bcontent111e23_`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/router" } } },
                            (parentElement: any) => [
                            this.text('Router & dịch vụ client')
                            ]),
                        this.html(`Bcontent111e24_`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/client-services" } } },
                            (parentElement: any) => [
                            this.text('Dịch vụ phía client')
                            ]),
                        this.html(`Bcontent111e25_`, "p", parentElement,
                            { classes: [{ type: 'static', value: "docs-nav-group" }] },
                            (parentElement: any) => [
                            this.text('Vận hành')
                            ]),
                        this.html(`Bcontent111e26_`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/build" } } },
                            (parentElement: any) => [
                            this.text('Build, CLI & cấu hình')
                            ]),
                        this.html(`Bcontent111e27_`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/status" } } },
                            (parentElement: any) => [
                            this.text('Giới hạn đã biết')
                            ]),
                        this.html(`Bcontent111e28_`, "p", parentElement,
                            { classes: [{ type: 'static', value: "docs-nav-group" }] },
                            (parentElement: any) => [
                            this.text('Thực hành')
                            ]),
                        this.html(`Bcontent111e29_`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/components" } } },
                            (parentElement: any) => [
                            this.text('Thư viện component')
                            ])
                        ])
                    ]),
                this.html(`Bcontent12`, "main", parentElement,
                    { classes: [{ type: 'static', value: "docs-main" }] },
                    (parentElement: any) => [
                    this.blockOutlet(`Bcontent12b`, "doc", parentElement)
                    ]),
                this.html(`Bcontent13`, "aside", parentElement,
                    { classes: [{ type: 'static', value: "docs-toc" }], attrs: { "aria-label": { type: 'static', value: "Mục lục nội dung" } } },
                    (parentElement: any) => [
                    this.html(`Bcontent131`, "div", parentElement,
                        { classes: [{ type: 'static', value: "docs-toc-inner" }] },
                        (parentElement: any) => [
                        this.html(`Bcontent1311`, "p", parentElement,
                            { classes: [{ type: 'static', value: "docs-toc-title" }] },
                            (parentElement: any) => [
                            this.text('Trên trang này')
                            ]),
                        this.html(`Bcontent1312`, "ul", parentElement, { classes: [{ type: 'static', value: "docs-toc-list" }], attrs: { "id": { type: 'static', value: "docs-toc-list" } } })
                        ])
                    ])
                ])
            ]);
            this.superViewPath = `${__layout__+"public"}`;
            return this.extendView(this.superViewPath, {});
            }
        });

    }
}

// Export factory function
export function WebLayoutsDocs(__data__ = {}, systemData = {}): DocsView {
    return new DocsView(__data__, systemData);
}
export default WebLayoutsDocs;