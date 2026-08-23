import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.docs.compiler';
const __VIEW_NAMESPACE__ = 'web.modules.docs.';
const __VIEW_TYPE__ = 'view';
const __VIEW_CONFIG__ = {
    hasSuperView: true,
    viewType: 'view',
    sections: {
        "doc":{
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
    renderLongSections: ["doc"],
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
            superView: `${__layout__+"docs"}`,
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
            this.block('block-doc', 'doc', (parentElement) => [
            this.html(`7b338a08`, "section", parentElement,
                { classes: [{ type: 'static', value: "page-hero" }, { type: 'static', value: "page-hero-compiler" }] },
                (parentElement) => [
                this.html(`3bb16c04`, "div", parentElement, {}, (parentElement) => [
                    this.html(`f150187b`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`bac94b21`, "span", parentElement, {}, (parentElement) => [
                            this.text('02 / COMPILER')
                        ]),
                        this.text(' Source synchronization')
                        ]),
                    this.html(`663d8ed0`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Một AST.'),
                        this.html(`c3c0e3f9`, "br", parentElement, {}),
                        this.html(`27038dbc`, "em", parentElement, {}, (parentElement) => [
                            this.text('Hai output đồng bộ.')
                        ])
                    ])
                ]),
                this.html(`57baae1a`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`8695e14e`, "p", parentElement, {}, (parentElement) => [
                        this.text('Compiler không chỉ đổi syntax. Nó bảo toàn ý nghĩa của view giữa Blade SSR và JavaScript runtime.')
                    ]),
                    this.html(`1f0b28a5`, "dl", parentElement, {}, (parentElement) => [
                        this.html(`da4a7f2f`, "div", parentElement, {}, (parentElement) => [
                            this.html(`902aa345`, "dt", parentElement, {}, (parentElement) => [
                                this.text('SOURCE')
                            ]),
                            this.html(`e65d3a6b`, "dd", parentElement, {}, (parentElement) => [
                                this.text('component.sao')
                            ])
                        ]),
                        this.html(`e762468d`, "div", parentElement, {}, (parentElement) => [
                            this.html(`935f1ffd`, "dt", parentElement, {}, (parentElement) => [
                                this.text('TARGETS')
                            ]),
                            this.html(`df3e6b57`, "dd", parentElement, {}, (parentElement) => [
                                this.text('.blade.php + .js')
                            ])
                        ])
                    ])
                    ])
                ]),
            this.html(`05ef4c27`, "section", parentElement,
                { classes: [{ type: 'static', value: "compiler-board" }] },
                (parentElement) => [
                this.html(`c9c6be59`, "div", parentElement,
                    { classes: [{ type: 'static', value: "code-window" }, { type: 'static', value: "source-window" }] },
                    (parentElement) => [
                    this.html(`cf53246e`, "div", parentElement,
                        { classes: [{ type: 'static', value: "window-bar" }] },
                        (parentElement) => [
                        this.html(`a7d7e741`, "span", parentElement, {}, (parentElement) => [
                            this.text('SOURCE')
                        ]),
                        this.html(`d850f618`, "b", parentElement, {}, (parentElement) => [
                            this.text('card.sao')
                        ]),
                        this.html(`3910e1c8`, "i", parentElement, {}, (parentElement) => [
                            this.text('● ● ●')
                        ])
                        ]),
                    this.html(`4a25ca96`, "pre", parentElement, {}, (parentElement) => [
                        this.html(`a2311cff`, "code", parentElement, {}, (parentElement) => [
                            this.html(`b1da30ce`, "span", parentElement,
                                { classes: [{ type: 'static', value: "html-token" }] },
                                (parentElement) => [
                                this.text('article class="card"')
                                ]),
                            this.html(`0ecc2373`, "span", parentElement,
                                { classes: [{ type: 'static', value: "html-token" }] },
                                (parentElement) => [
                                this.text('h2')
                                ]),
                            this.html(`1599266e`, "span", parentElement,
                                { classes: [{ type: 'static', value: "mustache-token" }] },
                                (parentElement) => [
                                this.text('title')
                                ]),
                            this.html(`da82b095`, "span", parentElement,
                                { classes: [{ type: 'static', value: "html-token" }, { type: 'static', value: "html-token-close" }] },
                                (parentElement) => [
                                this.text('h2')
                                ]),
                            this.html(`afbb4fc0`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('children')
                                ]),
                            this.html(`bfbbd688`, "span", parentElement,
                                { classes: [{ type: 'static', value: "html-token" }, { type: 'static', value: "html-token-close" }] },
                                (parentElement) => [
                                this.text('article')
                                ])
                        ])
                    ])
                    ]),
                this.html(`fbd9a84d`, "div", parentElement,
                    { classes: [{ type: 'static', value: "compile-spine" }] },
                    (parentElement) => [
                    this.html(`322ffdfc`, "span", parentElement, {}, (parentElement) => [
                        this.text('PARSE')
                    ]),
                    this.html(`03ab72c9`, "i", parentElement, {}, (parentElement) => [
                        this.text('↓')
                    ]),
                    this.html(`ea150c9b`, "strong", parentElement, {}, (parentElement) => [
                        this.text('AST')
                    ]),
                    this.html(`306ebbbe`, "i", parentElement, {}, (parentElement) => [
                        this.text('↙ ↘')
                    ]),
                    this.html(`7a2aed05`, "span", parentElement, {}, (parentElement) => [
                        this.text('GENERATE')
                    ])
                    ]),
                this.html(`59819623`, "div", parentElement,
                    { classes: [{ type: 'static', value: "target-stack" }] },
                    (parentElement) => [
                    this.html(`ce570522`, "div", parentElement,
                        { classes: [{ type: 'static', value: "code-window" }] },
                        (parentElement) => [
                        this.html(`1d22ed25`, "div", parentElement,
                            { classes: [{ type: 'static', value: "window-bar" }] },
                            (parentElement) => [
                            this.html(`a1813a65`, "span", parentElement, {}, (parentElement) => [
                                this.text('SERVER')
                            ]),
                            this.html(`2d98cd15`, "b", parentElement, {}, (parentElement) => [
                                this.text('card.blade.php')
                            ])
                            ]),
                        this.html(`20613ba1`, "pre", parentElement, {}, (parentElement) => [
                            this.html(`4bdba3f6`, "code", parentElement, {}, (parentElement) => [
                                this.html(`962bee48`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "html-token" }] },
                                    (parentElement) => [
                                    this.text('article class="card"')
                                    ]),
                                this.html(`db3e4a54`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "html-token" }] },
                                    (parentElement) => [
                                    this.text('h2')
                                    ]),
                                this.html(`62b4ddff`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "mustache-token" }] },
                                    (parentElement) => [
                                    this.text('$title')
                                    ]),
                                this.html(`9e9cf50e`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "html-token" }, { type: 'static', value: "html-token-close" }] },
                                    (parentElement) => [
                                    this.text('h2')
                                    ]),
                                this.html(`18012c1f`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "blade-raw-token" }] },
                                    (parentElement) => [
                                    this.text('$__ONE_CHILDREN_CONTENT__')
                                    ]),
                                this.html(`2b9b75b4`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "html-token" }, { type: 'static', value: "html-token-close" }] },
                                    (parentElement) => [
                                    this.text('article')
                                    ])
                            ])
                        ])
                        ]),
                    this.html(`e6d4f1bf`, "div", parentElement,
                        { classes: [{ type: 'static', value: "code-window" }, { type: 'static', value: "code-window-dark" }] },
                        (parentElement) => [
                        this.html(`f3b9f04a`, "div", parentElement,
                            { classes: [{ type: 'static', value: "window-bar" }] },
                            (parentElement) => [
                            this.html(`0e0eaee9`, "span", parentElement, {}, (parentElement) => [
                                this.text('CLIENT')
                            ]),
                            this.html(`20abec46`, "b", parentElement, {}, (parentElement) => [
                                this.text('Card.js')
                            ])
                            ]),
                        this.html(`5a597d38`, "pre", parentElement, {}, (parentElement) => [
                            this.html(`21b589c9`, "code", parentElement, {}, (parentElement) => [
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
            this.html(`9fd19a30`, "section", parentElement,
                { classes: [{ type: 'static', value: "content-grid-section" }] },
                (parentElement) => [
                this.html(`849145f1`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }, { type: 'static', value: "compact" }] },
                    (parentElement) => [
                    this.html(`0d56026d`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`773a2605`, "span", parentElement, {}, (parentElement) => [
                            this.text('SEMANTICS')
                        ]),
                        this.text(' Những khái niệm dễ nhầm')
                        ]),
                    this.html(`de7a1e42`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Include tạo view.'),
                        this.html(`939960ee`, "br", parentElement, {}),
                        this.text('Children tạo vị trí.')
                    ])
                    ]),
                this.html(`97e5628b`, "div", parentElement,
                    { classes: [{ type: 'static', value: "compare-grid" }] },
                    (parentElement) => [
                    this.html(`59ebb7c1`, "article", parentElement, {}, (parentElement) => [
                        this.html(`ce56689b`, "span", parentElement, {}, (parentElement) => [
                            this.text('INCLUDE')
                        ]),
                        this.html(`274f4f3c`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Chọn một view khác')
                        ]),
                        this.html(`88e948c8`, "p", parentElement, {}, (parentElement) => [
                            this.html(`545adabf`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('include')
                                ]),
                            this.text(' resolve component từ registry, tạo child ViewController và quản lý lifecycle riêng.')
                        ]),
                        this.html(`7c9934be`, "ul", parentElement, {}, (parentElement) => [
                            this.html(`80e8b7ea`, "li", parentElement, {}, (parentElement) => [
                                this.text('Có identity của view')
                            ]),
                            this.html(`37814186`, "li", parentElement, {}, (parentElement) => [
                                this.text('Có data/props riêng')
                            ]),
                            this.html(`bf3683fd`, "li", parentElement, {}, (parentElement) => [
                                this.text('Có thể lồng include')
                            ])
                        ])
                    ]),
                    this.html(`2b89aa0f`, "article", parentElement, {}, (parentElement) => [
                        this.html(`71347d18`, "span", parentElement, {}, (parentElement) => [
                            this.text('CHILDREN')
                        ]),
                        this.html(`83b29423`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Chọn lúc nội dung được render')
                        ]),
                        this.html(`7e978c41`, "p", parentElement, {}, (parentElement) => [
                            this.html(`f017825f`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('children')
                                ]),
                            this.text(' là outlet lazy. Nội dung không bị append trực tiếp; nó chỉ render khi traversal gặp đúng directive.')
                        ]),
                        this.html(`32dbace3`, "ul", parentElement, {}, (parentElement) => [
                            this.html(`54329a95`, "li", parentElement, {}, (parentElement) => [
                                this.text('Giữ context của caller')
                            ]),
                            this.html(`4c13cd3b`, "li", parentElement, {}, (parentElement) => [
                                this.text('Đúng thứ tự DOM')
                            ]),
                            this.html(`6246d6f8`, "li", parentElement, {}, (parentElement) => [
                                this.text('Hydrate và rerender cùng contract')
                            ])
                        ])
                    ]),
                    this.html(`62360ed0`, "article", parentElement, {}, (parentElement) => [
                        this.html(`96441922`, "span", parentElement, {}, (parentElement) => [
                            this.text('ROOT AST')
                        ]),
                        this.html(`e635f6f7`, "h3", parentElement, {}, (parentElement) => [
                            this.text('View ngoài cùng vẫn là view')
                        ]),
                        this.html(`a1f0c4a2`, "p", parentElement, {}, (parentElement) => [
                            this.text('AST gốc không tự trở thành children. Khi được route hoặc include resolve, nó là một view với wrapper và lifecycle rõ ràng.')
                        ]),
                        this.html(`ef7a0cb2`, "ul", parentElement, {}, (parentElement) => [
                            this.html(`7eb3a699`, "li", parentElement, {}, (parentElement) => [
                                this.text('Route có thể mount trực tiếp')
                            ]),
                            this.html(`27111a3b`, "li", parentElement, {}, (parentElement) => [
                                this.text('Include có thể mount làm con')
                            ]),
                            this.html(`9cd9cab0`, "li", parentElement, {}, (parentElement) => [
                                this.text('Ownership không nhập nhằng')
                            ])
                        ])
                    ])
                    ])
                ]),
            this.html(`e3988c18`, "section", parentElement,
                { classes: [{ type: 'static', value: "directive-section" }] },
                (parentElement) => [
                this.html(`6f8acc56`, "div", parentElement, {}, (parentElement) => [
                    this.html(`6f07ed8c`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`ef468377`, "span", parentElement, {}, (parentElement) => [
                            this.text('DIRECTIVE MAP')
                        ]),
                        this.text(' Cùng nghĩa ở cả hai phía')
                        ]),
                    this.html(`106b8ee6`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Template là contract,'),
                        this.html(`f7a02534`, "br", parentElement, {}),
                        this.text('không phải chuỗi HTML.')
                    ])
                ]),
                this.html(`f0346512`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`cd566459`, "div", parentElement, {}, (parentElement) => [
                        this.html(`64946eef`, "code", parentElement, {}, (parentElement) => [
                            this.html(`c0753b7e`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('extends')
                                ])
                        ]),
                        this.html(`d615376e`, "span", parentElement, {}, (parentElement) => [
                            this.text('Resolve layout chain')
                        ]),
                        this.html(`6b7b4680`, "b", parentElement, {}, (parentElement) => [
                            this.text('STRUCTURE')
                        ])
                    ]),
                    this.html(`ad9ffbb4`, "div", parentElement, {}, (parentElement) => [
                        this.html(`dcd53e34`, "code", parentElement, {}, (parentElement) => [
                            this.html(`5734e588`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('block')
                                ]),
                            this.text(' / '),
                            this.html(`f902bd90`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('useBlock')
                                ])
                        ]),
                        this.html(`e1393b0c`, "span", parentElement, {}, (parentElement) => [
                            this.text('Đăng ký và mount nội dung vào outlet')
                        ]),
                        this.html(`42aeed4f`, "b", parentElement, {}, (parentElement) => [
                            this.text('COMPOSITION')
                        ])
                    ]),
                    this.html(`8be94689`, "div", parentElement, {}, (parentElement) => [
                        this.html(`b0aa848a`, "code", parentElement, {}, (parentElement) => [
                            this.html(`abd8c411`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('include')
                                ])
                        ]),
                        this.html(`fef629a8`, "span", parentElement, {}, (parentElement) => [
                            this.text('Tạo child view theo registry hiện tại')
                        ]),
                        this.html(`77fdc513`, "b", parentElement, {}, (parentElement) => [
                            this.text('VIEW')
                        ])
                    ]),
                    this.html(`39476d41`, "div", parentElement, {}, (parentElement) => [
                        this.html(`e81a12a3`, "code", parentElement, {}, (parentElement) => [
                            this.html(`6e383be7`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('children')
                                ])
                        ]),
                        this.html(`ecfde18a`, "span", parentElement, {}, (parentElement) => [
                            this.text('Render lazy child content tại vị trí khai báo')
                        ]),
                        this.html(`4cd93431`, "b", parentElement, {}, (parentElement) => [
                            this.text('CONTENT')
                        ])
                    ]),
                    this.html(`0d913c9b`, "div", parentElement, {}, (parentElement) => [
                        this.html(`a40d9552`, "code", parentElement, {}, (parentElement) => [
                            this.html(`667631ce`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('if')
                                ]),
                            this.text(' / '),
                            this.html(`2bc70747`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('foreach')
                                ])
                        ]),
                        this.html(`592ba226`, "span", parentElement, {}, (parentElement) => [
                            this.text('Tạo vùng reactive có marker ổn định')
                        ]),
                        this.html(`0ea3a518`, "b", parentElement, {}, (parentElement) => [
                            this.text('CONTROL')
                        ])
                    ]),
                    this.html(`8a1ce9fd`, "div", parentElement, {}, (parentElement) => [
                        this.html(`6c7bc0e0`, "code", parentElement, {}, (parentElement) => [
                            this.html(`550a06b7`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('click')
                                ]),
                            this.text(' / '),
                            this.html(`a9a873bb`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('bind')
                                ])
                        ]),
                        this.html(`a7b3a454`, "span", parentElement, {}, (parentElement) => [
                            this.text('Nối event và state dependency')
                        ]),
                        this.html(`025136ac`, "b", parentElement, {}, (parentElement) => [
                            this.text('BEHAVIOR')
                        ])
                    ])
                    ])
                ]),
            this.html(`24b6e3d2`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/docs/sao-file" } } },
                (parentElement) => [
                this.html(`587d10b8`, "div", parentElement, {}, (parentElement) => [
                    this.html(`f908d9c5`, "span", parentElement, {}, (parentElement) => [
                        this.text('Tiếp theo')
                    ]),
                    this.html(`7e647603`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Cấu trúc file .sao')
                    ])
                ]),
                this.html(`50bb0184`, "span", parentElement,
                    { classes: [{ type: 'static', value: "button" }, { type: 'static', value: "button-primary" }] },
                    (parentElement) => [
                    this.text('Đọc tiếp →')
                    ])
                ])
            ]);
            this.superViewPath = `${__layout__+"docs"}`;
            return this.extendView(this.superViewPath, {});
            }
        });

    }
}

// Export factory function
export function WebModulesDocsCompiler(__data__ = {}, systemData = {}) {
    return new CompilerView(__data__, systemData);
}
export default WebModulesDocsCompiler;
