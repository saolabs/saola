import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.home.compiler';
const __VIEW_NAMESPACE__ = 'web.modules.home.';
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



class CompilerViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class CompilerView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, CompilerViewController);
        const App = app("App");
        const __STATE__ = this.__ctrl__.states;
        const {__base__, __layout__, __page__, __component__, __template__, __context__, __partial__, __system__, __env = {}, __helper = {}} = systemData;
        const __VIEW_ID__ = __data__.__SSR_VIEW_ID__ || App.View.generateViewId();

        const useState = (value) => {
            return __STATE__.__useState(value);
        };
        const updateRealState = (state) => {
            __STATE__.__.updateRealState(state);
        };

        const lockUpdateRealState = () => {
            __STATE__.__.lockUpdateRealState();
        };
        const updateStateByKey = (key, state) => {
            __STATE__.__.updateStateByKey(key, state);
        };


        const __UPDATE_DATA_TRAIT__ = {};
        const __VARIABLE_LIST__ = [];


        this.__ctrl__.setUserDefinedConfig({

        });

        this.__ctrl__.setup({
            superView: `${__layout__+"public"}`,
            subscribe: true,
            fetch: null,
            data: __data__,
            viewId: __VIEW_ID__,
            path: __VIEW_PATH__,
            scripts: [],
            styles: [],
            resources: [],
            commitConstructorData: function() {
                // Then update states from data

                // Finally lock state updates

            },
            updateVariableData: function(data) {
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
            updateVariableItemData: function(key, value) {
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
            this.block('block-content', 'content', (parentElement) => [
            this.html(`b4052a35`, "section", parentElement,
                { classes: [{ type: 'static', value: "page-hero" }, { type: 'static', value: "page-hero-compiler" }] },
                (parentElement) => [
                this.html(`90a6e493`, "div", parentElement, {}, (parentElement) => [
                    this.html(`f515bf66`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`e2f86203`, "span", parentElement, {}, (parentElement) => [
                            this.text('02 / COMPILER')
                        ]),
                        this.text(' Source synchronization')
                        ]),
                    this.html(`9b0938cb`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Một AST.'),
                        this.html(`f7127348`, "br", parentElement, {}),
                        this.html(`d4f4199d`, "em", parentElement, {}, (parentElement) => [
                            this.text('Hai output đồng bộ.')
                        ])
                    ])
                ]),
                this.html(`5f82dcd4`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`70182674`, "p", parentElement, {}, (parentElement) => [
                        this.text('Compiler không chỉ đổi syntax. Nó bảo toàn ý nghĩa của view giữa Blade SSR và JavaScript runtime.')
                    ]),
                    this.html(`87f0a97e`, "dl", parentElement, {}, (parentElement) => [
                        this.html(`8fd0466f`, "div", parentElement, {}, (parentElement) => [
                            this.html(`e3488b5f`, "dt", parentElement, {}, (parentElement) => [
                                this.text('SOURCE')
                            ]),
                            this.html(`cf7b0d19`, "dd", parentElement, {}, (parentElement) => [
                                this.text('component.sao')
                            ])
                        ]),
                        this.html(`a8712dd1`, "div", parentElement, {}, (parentElement) => [
                            this.html(`fc9334e8`, "dt", parentElement, {}, (parentElement) => [
                                this.text('TARGETS')
                            ]),
                            this.html(`647f0f87`, "dd", parentElement, {}, (parentElement) => [
                                this.text('.blade.php + .js')
                            ])
                        ])
                    ])
                    ])
                ]),
            this.html(`8aa0772c`, "section", parentElement,
                { classes: [{ type: 'static', value: "compiler-board" }] },
                (parentElement) => [
                this.html(`301a68fc`, "div", parentElement,
                    { classes: [{ type: 'static', value: "code-window" }, { type: 'static', value: "source-window" }] },
                    (parentElement) => [
                    this.html(`63bd05b4`, "div", parentElement,
                        { classes: [{ type: 'static', value: "window-bar" }] },
                        (parentElement) => [
                        this.html(`16d4d140`, "span", parentElement, {}, (parentElement) => [
                            this.text('SOURCE')
                        ]),
                        this.html(`a58f941f`, "b", parentElement, {}, (parentElement) => [
                            this.text('card.sao')
                        ]),
                        this.html(`2a3928ec`, "i", parentElement, {}, (parentElement) => [
                            this.text('● ● ●')
                        ])
                        ]),
                    this.html(`bd54a7b7`, "pre", parentElement, {}, (parentElement) => [
                        this.html(`b8faa7dc`, "code", parentElement, {}, (parentElement) => [
                            this.html(`1792abd2`, "span", parentElement,
                                { classes: [{ type: 'static', value: "html-token" }] },
                                (parentElement) => [
                                this.text('article class="card"')
                                ]),
                            this.html(`23e68ff8`, "span", parentElement,
                                { classes: [{ type: 'static', value: "html-token" }] },
                                (parentElement) => [
                                this.text('h2')
                                ]),
                            this.html(`2ed2f559`, "span", parentElement,
                                { classes: [{ type: 'static', value: "mustache-token" }] },
                                (parentElement) => [
                                this.text('title')
                                ]),
                            this.html(`b3f8e4b3`, "span", parentElement,
                                { classes: [{ type: 'static', value: "html-token" }, { type: 'static', value: "html-token-close" }] },
                                (parentElement) => [
                                this.text('h2')
                                ]),
                            this.html(`cab0d57c`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('children')
                                ]),
                            this.html(`e7438000`, "span", parentElement,
                                { classes: [{ type: 'static', value: "html-token" }, { type: 'static', value: "html-token-close" }] },
                                (parentElement) => [
                                this.text('article')
                                ])
                        ])
                    ])
                    ]),
                this.html(`7f8af112`, "div", parentElement,
                    { classes: [{ type: 'static', value: "compile-spine" }] },
                    (parentElement) => [
                    this.html(`e507d86f`, "span", parentElement, {}, (parentElement) => [
                        this.text('PARSE')
                    ]),
                    this.html(`1ad3c6be`, "i", parentElement, {}, (parentElement) => [
                        this.text('↓')
                    ]),
                    this.html(`200498a9`, "strong", parentElement, {}, (parentElement) => [
                        this.text('AST')
                    ]),
                    this.html(`77454da5`, "i", parentElement, {}, (parentElement) => [
                        this.text('↙ ↘')
                    ]),
                    this.html(`6555bc47`, "span", parentElement, {}, (parentElement) => [
                        this.text('GENERATE')
                    ])
                    ]),
                this.html(`9b976db3`, "div", parentElement,
                    { classes: [{ type: 'static', value: "target-stack" }] },
                    (parentElement) => [
                    this.html(`8996a71d`, "div", parentElement,
                        { classes: [{ type: 'static', value: "code-window" }] },
                        (parentElement) => [
                        this.html(`49656332`, "div", parentElement,
                            { classes: [{ type: 'static', value: "window-bar" }] },
                            (parentElement) => [
                            this.html(`c4acd009`, "span", parentElement, {}, (parentElement) => [
                                this.text('SERVER')
                            ]),
                            this.html(`c728543a`, "b", parentElement, {}, (parentElement) => [
                                this.text('card.blade.php')
                            ])
                            ]),
                        this.html(`57dfb464`, "pre", parentElement, {}, (parentElement) => [
                            this.html(`5bdf5eb2`, "code", parentElement, {}, (parentElement) => [
                                this.html(`deaf2506`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "html-token" }] },
                                    (parentElement) => [
                                    this.text('article class="card"')
                                    ]),
                                this.html(`d5dc907c`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "html-token" }] },
                                    (parentElement) => [
                                    this.text('h2')
                                    ]),
                                this.html(`df3cb799`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "blade-raw-token" }] },
                                    (parentElement) => [
                                    this.text('$title')
                                    ]),
                                this.html(`6706effb`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "html-token" }, { type: 'static', value: "html-token-close" }] },
                                    (parentElement) => [
                                    this.text('h2')
                                    ]),
                                this.html(`673c3288`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "blade-raw-token" }] },
                                    (parentElement) => [
                                    this.text('$__ONE_CHILDREN_CONTENT__')
                                    ]),
                                this.html(`2d1965dc`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "html-token" }, { type: 'static', value: "html-token-close" }] },
                                    (parentElement) => [
                                    this.text('article')
                                    ])
                            ])
                        ])
                        ]),
                    this.html(`4fff86a6`, "div", parentElement,
                        { classes: [{ type: 'static', value: "code-window" }, { type: 'static', value: "code-window-dark" }] },
                        (parentElement) => [
                        this.html(`b6704c2a`, "div", parentElement,
                            { classes: [{ type: 'static', value: "window-bar" }] },
                            (parentElement) => [
                            this.html(`0c10b263`, "span", parentElement, {}, (parentElement) => [
                                this.text('CLIENT')
                            ]),
                            this.html(`ea2d1051`, "b", parentElement, {}, (parentElement) => [
                                this.text('Card.js')
                            ])
                            ]),
                        this.html(`ec147e69`, "pre", parentElement, {}, (parentElement) => [
                            this.html(`e223d5cf`, "code", parentElement, {}, (parentElement) => [
                                this.text('return this.wrapper(['),
                                this.text('this.html(\'article\', ['),
                                this.text('this.output(title),'),
                                this.text('this.children()'),
                                this.text('])'),
                                this.text(']);')
                            ])
                        ])
                        ])
                    ])
                ]),
            this.html(`6c26f9b7`, "section", parentElement,
                { classes: [{ type: 'static', value: "content-grid-section" }] },
                (parentElement) => [
                this.html(`ce6a96bf`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }, { type: 'static', value: "compact" }] },
                    (parentElement) => [
                    this.html(`5a71cd5f`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`f1acc65a`, "span", parentElement, {}, (parentElement) => [
                            this.text('SEMANTICS')
                        ]),
                        this.text(' Những khái niệm dễ nhầm')
                        ]),
                    this.html(`98293aba`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Include tạo view.'),
                        this.html(`c006637c`, "br", parentElement, {}),
                        this.text('Children tạo vị trí.')
                    ])
                    ]),
                this.html(`d44023e9`, "div", parentElement,
                    { classes: [{ type: 'static', value: "compare-grid" }] },
                    (parentElement) => [
                    this.html(`e3e123df`, "article", parentElement, {}, (parentElement) => [
                        this.html(`5cadfa06`, "span", parentElement, {}, (parentElement) => [
                            this.text('INCLUDE')
                        ]),
                        this.html(`6efb1915`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Chọn một view khác')
                        ]),
                        this.html(`4a13b743`, "p", parentElement, {}, (parentElement) => [
                            this.html(`de9b6734`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('include')
                                ]),
                            this.text(' resolve component từ registry, tạo child ViewController và quản lý lifecycle riêng.')
                        ]),
                        this.html(`1d3eab6b`, "ul", parentElement, {}, (parentElement) => [
                            this.html(`14f29b43`, "li", parentElement, {}, (parentElement) => [
                                this.text('Có identity của view')
                            ]),
                            this.html(`93062d03`, "li", parentElement, {}, (parentElement) => [
                                this.text('Có data/props riêng')
                            ]),
                            this.html(`f19a282a`, "li", parentElement, {}, (parentElement) => [
                                this.text('Có thể lồng include')
                            ])
                        ])
                    ]),
                    this.html(`04b24ab0`, "article", parentElement, {}, (parentElement) => [
                        this.html(`2dd4b699`, "span", parentElement, {}, (parentElement) => [
                            this.text('CHILDREN')
                        ]),
                        this.html(`8d51d8aa`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Chọn lúc nội dung được render')
                        ]),
                        this.html(`53b76b5c`, "p", parentElement, {}, (parentElement) => [
                            this.html(`afefc2c3`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('children')
                                ]),
                            this.text(' là outlet lazy. Nội dung không bị append trực tiếp; nó chỉ render khi traversal gặp đúng directive.')
                        ]),
                        this.html(`e8a3c814`, "ul", parentElement, {}, (parentElement) => [
                            this.html(`8527425f`, "li", parentElement, {}, (parentElement) => [
                                this.text('Giữ context của caller')
                            ]),
                            this.html(`3c80e8bc`, "li", parentElement, {}, (parentElement) => [
                                this.text('Đúng thứ tự DOM')
                            ]),
                            this.html(`422ba7e0`, "li", parentElement, {}, (parentElement) => [
                                this.text('Hydrate và rerender cùng contract')
                            ])
                        ])
                    ]),
                    this.html(`ddf2d3a9`, "article", parentElement, {}, (parentElement) => [
                        this.html(`8d5d9746`, "span", parentElement, {}, (parentElement) => [
                            this.text('ROOT AST')
                        ]),
                        this.html(`ad421324`, "h3", parentElement, {}, (parentElement) => [
                            this.text('View ngoài cùng vẫn là view')
                        ]),
                        this.html(`71463dd8`, "p", parentElement, {}, (parentElement) => [
                            this.text('AST gốc không tự trở thành children. Khi được route hoặc include resolve, nó là một view với wrapper và lifecycle rõ ràng.')
                        ]),
                        this.html(`b2bb3d8a`, "ul", parentElement, {}, (parentElement) => [
                            this.html(`0cddd143`, "li", parentElement, {}, (parentElement) => [
                                this.text('Route có thể mount trực tiếp')
                            ]),
                            this.html(`c5971739`, "li", parentElement, {}, (parentElement) => [
                                this.text('Include có thể mount làm con')
                            ]),
                            this.html(`c3b17da1`, "li", parentElement, {}, (parentElement) => [
                                this.text('Ownership không nhập nhằng')
                            ])
                        ])
                    ])
                    ])
                ]),
            this.html(`4e212027`, "section", parentElement,
                { classes: [{ type: 'static', value: "directive-section" }] },
                (parentElement) => [
                this.html(`1628defa`, "div", parentElement, {}, (parentElement) => [
                    this.html(`d621a64b`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`5f6b80a9`, "span", parentElement, {}, (parentElement) => [
                            this.text('DIRECTIVE MAP')
                        ]),
                        this.text(' Cùng nghĩa ở cả hai phía')
                        ]),
                    this.html(`6560bb1b`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Template là contract,'),
                        this.html(`c03b5dbb`, "br", parentElement, {}),
                        this.text('không phải chuỗi HTML.')
                    ])
                ]),
                this.html(`281112e1`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`55399dd9`, "div", parentElement, {}, (parentElement) => [
                        this.html(`fccaaa32`, "code", parentElement, {}, (parentElement) => [
                            this.html(`47097878`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('extends')
                                ])
                        ]),
                        this.html(`a9b4242f`, "span", parentElement, {}, (parentElement) => [
                            this.text('Resolve layout chain')
                        ]),
                        this.html(`ff9cd4e9`, "b", parentElement, {}, (parentElement) => [
                            this.text('STRUCTURE')
                        ])
                    ]),
                    this.html(`241338ab`, "div", parentElement, {}, (parentElement) => [
                        this.html(`8f109080`, "code", parentElement, {}, (parentElement) => [
                            this.html(`4ebdfaf7`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('block')
                                ]),
                            this.text(' / '),
                            this.html(`b689ed0d`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('useBlock')
                                ])
                        ]),
                        this.html(`685d2446`, "span", parentElement, {}, (parentElement) => [
                            this.text('Đăng ký và mount nội dung vào outlet')
                        ]),
                        this.html(`3917817e`, "b", parentElement, {}, (parentElement) => [
                            this.text('COMPOSITION')
                        ])
                    ]),
                    this.html(`6bf3f602`, "div", parentElement, {}, (parentElement) => [
                        this.html(`66d22e17`, "code", parentElement, {}, (parentElement) => [
                            this.html(`1d35eb6c`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('include')
                                ])
                        ]),
                        this.html(`11425ac3`, "span", parentElement, {}, (parentElement) => [
                            this.text('Tạo child view theo registry hiện tại')
                        ]),
                        this.html(`8cf9a004`, "b", parentElement, {}, (parentElement) => [
                            this.text('VIEW')
                        ])
                    ]),
                    this.html(`ae6ec63d`, "div", parentElement, {}, (parentElement) => [
                        this.html(`c6d4861a`, "code", parentElement, {}, (parentElement) => [
                            this.html(`cb5aabd3`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('children')
                                ])
                        ]),
                        this.html(`55dbf3db`, "span", parentElement, {}, (parentElement) => [
                            this.text('Render lazy child content tại vị trí khai báo')
                        ]),
                        this.html(`9a0c736d`, "b", parentElement, {}, (parentElement) => [
                            this.text('CONTENT')
                        ])
                    ]),
                    this.html(`b5b5d5cc`, "div", parentElement, {}, (parentElement) => [
                        this.html(`3ceed0be`, "code", parentElement, {}, (parentElement) => [
                            this.html(`b5a9dc3e`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('if')
                                ]),
                            this.text(' / '),
                            this.html(`36bed60d`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('foreach')
                                ])
                        ]),
                        this.html(`1ecf7fe0`, "span", parentElement, {}, (parentElement) => [
                            this.text('Tạo vùng reactive có marker ổn định')
                        ]),
                        this.html(`d2c4a765`, "b", parentElement, {}, (parentElement) => [
                            this.text('CONTROL')
                        ])
                    ]),
                    this.html(`123ee555`, "div", parentElement, {}, (parentElement) => [
                        this.html(`45a212ad`, "code", parentElement, {}, (parentElement) => [
                            this.html(`35f4f44d`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('click')
                                ]),
                            this.text(' / '),
                            this.html(`9a37b36b`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('bind')
                                ])
                        ]),
                        this.html(`0e3230a0`, "span", parentElement, {}, (parentElement) => [
                            this.text('Nối event và state dependency')
                        ]),
                        this.html(`0b5d02c3`, "b", parentElement, {}, (parentElement) => [
                            this.text('BEHAVIOR')
                        ])
                    ])
                    ])
                ]),
            this.html(`5d5c7d30`, "section", parentElement,
                { classes: [{ type: 'static', value: "next-page" }] },
                (parentElement) => [
                this.html(`8a4c2f1f`, "span", parentElement, {}, (parentElement) => [
                    this.text('Tiếp theo / 03')
                ]),
                this.html(`f94a552a`, "div", parentElement, {}, (parentElement) => [
                    this.html(`5d206b32`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Output JavaScript tiếp quản DOM ra sao?')
                    ]),
                    this.html(`3f927566`, "a", parentElement,
                        { classes: [{ type: 'static', value: "button" }, { type: 'static', value: "button-primary" }], attrs: { "href": { type: 'static', value: "/runtime" } } },
                        (parentElement) => [
                        this.text('Runtime & Hydration '),
                        this.html(`828421ed`, "span", parentElement, {}, (parentElement) => [
                            this.text('↗')
                        ])
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
export function WebModulesHomeCompiler(__data__ = {}, systemData = {}) {
    return new CompilerView(__data__, systemData);
}
export default WebModulesHomeCompiler;
