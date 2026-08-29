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
            this.html(`Bdoc1`, "section", parentElement,
                { classes: [{ type: 'static', value: "page-hero" }, { type: 'static', value: "page-hero-compiler" }] },
                (parentElement) => [
                this.html(`Bdoc11`, "div", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc111`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`Bdoc1111`, "span", parentElement, {}, (parentElement) => [
                            this.text('02 / COMPILER')
                        ]),
                        this.text(' Source synchronization')
                        ]),
                    this.html(`Bdoc112`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Một AST.'),
                        this.html(`Bdoc1121`, "br", parentElement, {}),
                        this.html(`Bdoc1122`, "em", parentElement, {}, (parentElement) => [
                            this.text('Hai output đồng bộ.')
                        ])
                    ])
                ]),
                this.html(`Bdoc12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`Bdoc121`, "p", parentElement, {}, (parentElement) => [
                        this.text('Compiler không chỉ đổi syntax. Nó bảo toàn ý nghĩa của view giữa Blade SSR và JavaScript runtime.')
                    ]),
                    this.html(`Bdoc122`, "dl", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc1221`, "div", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc12211`, "dt", parentElement, {}, (parentElement) => [
                                this.text('SOURCE')
                            ]),
                            this.html(`Bdoc12212`, "dd", parentElement, {}, (parentElement) => [
                                this.text('component.sao')
                            ])
                        ]),
                        this.html(`Bdoc1222`, "div", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc12221`, "dt", parentElement, {}, (parentElement) => [
                                this.text('TARGETS')
                            ]),
                            this.html(`Bdoc12222`, "dd", parentElement, {}, (parentElement) => [
                                this.text('.blade.php + .js')
                            ])
                        ])
                    ])
                    ])
                ]),
            this.html(`Bdoc2`, "section", parentElement,
                { classes: [{ type: 'static', value: "compiler-board" }] },
                (parentElement) => [
                this.include(`Bdoc2c1`, 'web.components.code-window', parentElement, [], (parentElement) => ({
                        "label": "SOURCE",
                        "title": `card.sao`,
                        "lang": "html",
                        __ONE_CHILDREN_CONTENT__: (parentElement) => [
                        this.text('<article class="card">\n  <h2>{{ title }}</h2>\n  @children\n</article>')
                    ]
                    })),
                this.html(`Bdoc21`, "div", parentElement,
                    { classes: [{ type: 'static', value: "compile-spine" }], attrs: { "style": { type: 'static', value: "flex-direction: column; min-height: 180px;" } } },
                    (parentElement) => [
                    this.html(`Bdoc211`, "span", parentElement, {}, (parentElement) => [
                        this.text('PARSE')
                    ]),
                    this.html(`Bdoc212`, "i", parentElement, {}, (parentElement) => [
                        this.text('↓')
                    ]),
                    this.html(`Bdoc213`, "strong", parentElement, {}, (parentElement) => [
                        this.text('AST')
                    ]),
                    this.html(`Bdoc214`, "i", parentElement,
                        { attrs: { "style": { type: 'static', value: "letter-spacing: 40px; font-size: 24px; margin-top: 10px;" } } },
                        (parentElement) => [
                        this.text('↙ ↘')
                        ]),
                    this.html(`Bdoc215`, "span", parentElement, {}, (parentElement) => [
                        this.text('GENERATE')
                    ])
                    ]),
                this.html(`Bdoc22`, "div", parentElement,
                    { classes: [{ type: 'static', value: "target-stack" }], attrs: { "style": { type: 'static', value: "grid-template-columns: 1fr 1fr; align-items: stretch;" } } },
                    (parentElement) => [
                    this.include(`Bdoc22c1`, 'web.components.code-window', parentElement, [], (parentElement) => ({
                            "label": "SERVER",
                            "title": `card.blade.php`,
                            "lang": "php",
                            __ONE_CHILDREN_CONTENT__: (parentElement) => [
                            this.text('<article class="card">\n  <h2>{{ $title }}</h2>\n  {!! $__ONE_CHILDREN_CONTENT__ !!}\n</article>')
                        ]
                        })),
                    this.include(`Bdoc22c2`, 'web.components.code-window', parentElement, [], (parentElement) => ({
                            "label": "CLIENT",
                            "title": `Card.js`,
                            "lang": "js",
                            "dark": true,
                            __ONE_CHILDREN_CONTENT__: (parentElement) => [
                            this.text('return this.wrapper([\n  this.html(\'article\', [\n    this.output(title),\n    this.children()\n  ])\n]);')
                        ]
                        }))
                    ])
                ]),
            this.html(`Bdoc3`, "section", parentElement,
                { classes: [{ type: 'static', value: "content-grid-section" }] },
                (parentElement) => [
                this.html(`Bdoc31`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }, { type: 'static', value: "compact" }] },
                    (parentElement) => [
                    this.html(`Bdoc311`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`Bdoc3111`, "span", parentElement, {}, (parentElement) => [
                            this.text('SEMANTICS')
                        ]),
                        this.text(' Những khái niệm dễ nhầm')
                        ]),
                    this.html(`Bdoc312`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Include tạo view.'),
                        this.html(`Bdoc3121`, "br", parentElement, {}),
                        this.text('Children tạo vị trí.')
                    ])
                    ]),
                this.html(`Bdoc32`, "div", parentElement,
                    { classes: [{ type: 'static', value: "compare-grid" }] },
                    (parentElement) => [
                    this.html(`Bdoc321`, "article", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc3211`, "span", parentElement, {}, (parentElement) => [
                            this.text('INCLUDE')
                        ]),
                        this.html(`Bdoc3212`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Chọn một view khác')
                        ]),
                        this.html(`Bdoc3213`, "p", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc32131`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('include')
                                ]),
                            this.text(' resolve component từ registry, tạo child ViewController và quản lý lifecycle riêng.')
                        ]),
                        this.html(`Bdoc3214`, "ul", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc32141`, "li", parentElement, {}, (parentElement) => [
                                this.text('Có identity của view')
                            ]),
                            this.html(`Bdoc32142`, "li", parentElement, {}, (parentElement) => [
                                this.text('Có data/props riêng')
                            ]),
                            this.html(`Bdoc32143`, "li", parentElement, {}, (parentElement) => [
                                this.text('Có thể lồng include')
                            ])
                        ])
                    ]),
                    this.html(`Bdoc322`, "article", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc3221`, "span", parentElement, {}, (parentElement) => [
                            this.text('CHILDREN')
                        ]),
                        this.html(`Bdoc3222`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Chọn lúc nội dung được render')
                        ]),
                        this.html(`Bdoc3223`, "p", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc32231`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('children')
                                ]),
                            this.text(' là outlet lazy. Nội dung không bị append trực tiếp; nó chỉ render khi traversal gặp đúng directive.')
                        ]),
                        this.html(`Bdoc3224`, "ul", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc32241`, "li", parentElement, {}, (parentElement) => [
                                this.text('Giữ context của caller')
                            ]),
                            this.html(`Bdoc32242`, "li", parentElement, {}, (parentElement) => [
                                this.text('Đúng thứ tự DOM')
                            ]),
                            this.html(`Bdoc32243`, "li", parentElement, {}, (parentElement) => [
                                this.text('Hydrate và rerender cùng contract')
                            ])
                        ])
                    ]),
                    this.html(`Bdoc323`, "article", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc3231`, "span", parentElement, {}, (parentElement) => [
                            this.text('ROOT AST')
                        ]),
                        this.html(`Bdoc3232`, "h3", parentElement, {}, (parentElement) => [
                            this.text('View ngoài cùng vẫn là view')
                        ]),
                        this.html(`Bdoc3233`, "p", parentElement, {}, (parentElement) => [
                            this.text('AST gốc không tự trở thành children. Khi được route hoặc include resolve, nó là một view với wrapper và lifecycle rõ ràng.')
                        ]),
                        this.html(`Bdoc3234`, "ul", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc32341`, "li", parentElement, {}, (parentElement) => [
                                this.text('Route có thể mount trực tiếp')
                            ]),
                            this.html(`Bdoc32342`, "li", parentElement, {}, (parentElement) => [
                                this.text('Include có thể mount làm con')
                            ]),
                            this.html(`Bdoc32343`, "li", parentElement, {}, (parentElement) => [
                                this.text('Ownership không nhập nhằng')
                            ])
                        ])
                    ])
                    ])
                ]),
            this.html(`Bdoc4`, "section", parentElement,
                { classes: [{ type: 'static', value: "directive-section" }] },
                (parentElement) => [
                this.html(`Bdoc41`, "div", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc411`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`Bdoc4111`, "span", parentElement, {}, (parentElement) => [
                            this.text('DIRECTIVE MAP')
                        ]),
                        this.text(' Cùng nghĩa ở cả hai phía')
                        ]),
                    this.html(`Bdoc412`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Template là contract,'),
                        this.html(`Bdoc4121`, "br", parentElement, {}),
                        this.text('không phải chuỗi HTML.')
                    ])
                ]),
                this.html(`Bdoc42`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`Bdoc421`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc4211`, "code", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc42111`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('extends')
                                ])
                        ]),
                        this.html(`Bdoc4212`, "span", parentElement, {}, (parentElement) => [
                            this.text('Resolve layout chain')
                        ]),
                        this.html(`Bdoc4213`, "b", parentElement, {}, (parentElement) => [
                            this.text('STRUCTURE')
                        ])
                    ]),
                    this.html(`Bdoc422`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc4221`, "code", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc42211`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('block')
                                ]),
                            this.text(' / '),
                            this.html(`Bdoc42212`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('useBlock')
                                ])
                        ]),
                        this.html(`Bdoc4222`, "span", parentElement, {}, (parentElement) => [
                            this.text('Đăng ký và mount nội dung vào outlet')
                        ]),
                        this.html(`Bdoc4223`, "b", parentElement, {}, (parentElement) => [
                            this.text('COMPOSITION')
                        ])
                    ]),
                    this.html(`Bdoc423`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc4231`, "code", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc42311`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('include')
                                ])
                        ]),
                        this.html(`Bdoc4232`, "span", parentElement, {}, (parentElement) => [
                            this.text('Tạo child view theo registry hiện tại')
                        ]),
                        this.html(`Bdoc4233`, "b", parentElement, {}, (parentElement) => [
                            this.text('VIEW')
                        ])
                    ]),
                    this.html(`Bdoc424`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc4241`, "code", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc42411`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('children')
                                ])
                        ]),
                        this.html(`Bdoc4242`, "span", parentElement, {}, (parentElement) => [
                            this.text('Render lazy child content tại vị trí khai báo')
                        ]),
                        this.html(`Bdoc4243`, "b", parentElement, {}, (parentElement) => [
                            this.text('CONTENT')
                        ])
                    ]),
                    this.html(`Bdoc425`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc4251`, "code", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc42511`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('if')
                                ]),
                            this.text(' / '),
                            this.html(`Bdoc42512`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('foreach')
                                ])
                        ]),
                        this.html(`Bdoc4252`, "span", parentElement, {}, (parentElement) => [
                            this.text('Tạo vùng reactive có marker ổn định')
                        ]),
                        this.html(`Bdoc4253`, "b", parentElement, {}, (parentElement) => [
                            this.text('CONTROL')
                        ])
                    ]),
                    this.html(`Bdoc426`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc4261`, "code", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc42611`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('click')
                                ]),
                            this.text(' / '),
                            this.html(`Bdoc42612`, "span", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('bind')
                                ])
                        ]),
                        this.html(`Bdoc4262`, "span", parentElement, {}, (parentElement) => [
                            this.text('Nối event và state dependency')
                        ]),
                        this.html(`Bdoc4263`, "b", parentElement, {}, (parentElement) => [
                            this.text('BEHAVIOR')
                        ])
                    ])
                    ])
                ]),
            this.html(`Bdoc5`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/docs/sao-file" } } },
                (parentElement) => [
                this.html(`Bdoc51`, "div", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc511`, "span", parentElement, {}, (parentElement) => [
                        this.text('Tiếp theo')
                    ]),
                    this.html(`Bdoc512`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Cấu trúc file .sao')
                    ])
                ]),
                this.html(`Bdoc52`, "span", parentElement,
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