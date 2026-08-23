import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.docs.architecture';
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



class ArchitectureViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class ArchitectureView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, ArchitectureViewController);
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
                { classes: [{ type: 'static', value: "page-hero" }, { type: 'static', value: "page-hero-architecture" }] },
                (parentElement) => [
                this.html(`3bb16c04`, "div", parentElement, {}, (parentElement) => [
                    this.html(`f150187b`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`bac94b21`, "span", parentElement, {}, (parentElement) => [
                            this.text('01 / ARCHITECTURE')
                        ]),
                        this.text(' Toàn cảnh hệ sinh thái')
                        ]),
                    this.html(`663d8ed0`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Laravel ở lõi.'),
                        this.html(`c3c0e3f9`, "br", parentElement, {}),
                        this.html(`27038dbc`, "em", parentElement, {}, (parentElement) => [
                            this.text('SPA ở trải nghiệm.')
                        ])
                    ])
                ]),
                this.html(`57baae1a`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`8695e14e`, "p", parentElement, {}, (parentElement) => [
                        this.text('Saola là một chuỗi contract từ request tới DOM, không phải một frontend framework đặt cạnh Laravel.')
                    ]),
                    this.html(`1f0b28a5`, "dl", parentElement, {}, (parentElement) => [
                        this.html(`da4a7f2f`, "div", parentElement, {}, (parentElement) => [
                            this.html(`902aa345`, "dt", parentElement, {}, (parentElement) => [
                                this.text('INPUT')
                            ]),
                            this.html(`e65d3a6b`, "dd", parentElement, {}, (parentElement) => [
                                this.text('Route + context + data')
                            ])
                        ]),
                        this.html(`e762468d`, "div", parentElement, {}, (parentElement) => [
                            this.html(`935f1ffd`, "dt", parentElement, {}, (parentElement) => [
                                this.text('OUTPUT')
                            ]),
                            this.html(`df3e6b57`, "dd", parentElement, {}, (parentElement) => [
                                this.text('SSR → hydrate → SPA')
                            ])
                        ])
                    ])
                    ])
                ]),
            this.html(`05ef4c27`, "section", parentElement,
                { classes: [{ type: 'static', value: "stack-section" }] },
                (parentElement) => [
                this.html(`c9c6be59`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-index" }] },
                    (parentElement) => [
                    this.html(`d20fe697`, "span", parentElement, {}, (parentElement) => [
                        this.text('01')
                    ]),
                    this.html(`5b38df9e`, "p", parentElement, {}, (parentElement) => [
                        this.text('Bốn lớp'),
                        this.html(`27786653`, "br", parentElement, {}),
                        this.text('một luồng')
                    ])
                    ]),
                this.html(`fbd9a84d`, "div", parentElement,
                    { classes: [{ type: 'static', value: "stack-diagram" }] },
                    (parentElement) => [
                    this.html(`13e1b7a4`, "article", parentElement, {}, (parentElement) => [
                        this.html(`d32c987e`, "span", parentElement, {}, (parentElement) => [
                            this.text('APPLICATION')
                        ]),
                        this.html(`e55d5e26`, "strong", parentElement, {}, (parentElement) => [
                            this.text('Modules & contexts')
                        ]),
                        this.html(`5cec9be9`, "p", parentElement, {}, (parentElement) => [
                            this.text('Web, admin và mobile tổ chức route, controller, view theo cùng một mô hình module.')
                        ]),
                        this.html(`579935c7`, "i", parentElement, {}, (parentElement) => [
                            this.text('04')
                        ])
                    ]),
                    this.html(`7610ec67`, "article", parentElement, {}, (parentElement) => [
                        this.html(`d55ac7a6`, "span", parentElement, {}, (parentElement) => [
                            this.text('CORE')
                        ]),
                        this.html(`1bd2dff9`, "strong", parentElement, {}, (parentElement) => [
                            this.text('Laravel integration')
                        ]),
                        this.html(`f0fe8469`, "p", parentElement, {}, (parentElement) => [
                            this.text('Route map, view response, SSR boot payload và request-scoped context.')
                        ]),
                        this.html(`5f64ec0a`, "i", parentElement, {}, (parentElement) => [
                            this.text('03')
                        ])
                    ]),
                    this.html(`f6357ac6`, "article", parentElement, {}, (parentElement) => [
                        this.html(`28f6beb4`, "span", parentElement, {}, (parentElement) => [
                            this.text('COMPILER')
                        ]),
                        this.html(`fcb0dc8c`, "strong", parentElement, {}, (parentElement) => [
                            this.text('.sao → Blade + JS')
                        ]),
                        this.html(`011d29bc`, "p", parentElement, {}, (parentElement) => [
                            this.text('Một AST tạo hai output có cùng structure, directive và marker contract.')
                        ]),
                        this.html(`bd17e466`, "i", parentElement, {}, (parentElement) => [
                            this.text('02')
                        ])
                    ]),
                    this.html(`436566c4`, "article", parentElement, {}, (parentElement) => [
                        this.html(`752758aa`, "span", parentElement, {}, (parentElement) => [
                            this.text('CLIENT')
                        ]),
                        this.html(`1586ebf6`, "strong", parentElement, {}, (parentElement) => [
                            this.text('Router & view runtime')
                        ]),
                        this.html(`6bc6e8e4`, "p", parentElement, {}, (parentElement) => [
                            this.text('Hydration, lifecycle, reactivity, layout reuse và page cache phía trình duyệt.')
                        ]),
                        this.html(`fd309693`, "i", parentElement, {}, (parentElement) => [
                            this.text('01')
                        ])
                    ])
                    ])
                ]),
            this.html(`9fd19a30`, "section", parentElement,
                { classes: [{ type: 'static', value: "request-section" }] },
                (parentElement) => [
                this.html(`849145f1`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }, { type: 'static', value: "compact" }] },
                    (parentElement) => [
                    this.html(`0d56026d`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`773a2605`, "span", parentElement, {}, (parentElement) => [
                            this.text('REQUEST FLOW')
                        ]),
                        this.text(' Từ URL tới tương tác')
                        ]),
                    this.html(`de7a1e42`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Một đường đi,'),
                        this.html(`939960ee`, "br", parentElement, {}),
                        this.text('hai giai đoạn.')
                    ])
                    ]),
                this.html(`2d39fc18`, "ol", parentElement,
                    { classes: [{ type: 'static', value: "flow-timeline" }] },
                    (parentElement) => [
                    this.html(`be8bd502`, "li", parentElement, {}, (parentElement) => [
                        this.html(`8afd3452`, "span", parentElement, {}, (parentElement) => [
                            this.text('01')
                        ]),
                        this.html(`613b7042`, "div", parentElement, {}, (parentElement) => [
                            this.html(`c87ec5a4`, "strong", parentElement, {}, (parentElement) => [
                                this.text('Route chọn module và context')
                            ]),
                            this.html(`4e45348f`, "p", parentElement, {}, (parentElement) => [
                                this.text('Request web, admin hoặc mobile được resolve trong phạm vi hiện tại thay vì đọc một static map dùng chung cho mọi request.')
                            ])
                        ]),
                        this.html(`c67dbd27`, "code", parentElement, {}, (parentElement) => [
                            this.text('GET /projects/42')
                        ])
                    ]),
                    this.html(`0484a3fa`, "li", parentElement, {}, (parentElement) => [
                        this.html(`2ab0b8e2`, "span", parentElement, {}, (parentElement) => [
                            this.text('02')
                        ]),
                        this.html(`fecbf7d0`, "div", parentElement, {}, (parentElement) => [
                            this.html(`ba78e364`, "strong", parentElement, {}, (parentElement) => [
                                this.text('Controller trả view response')
                            ]),
                            this.html(`bf0ed161`, "p", parentElement, {}, (parentElement) => [
                                this.text('Core xác định component route tương ứng, render Blade và tạo boot payload cho đúng context.')
                            ])
                        ]),
                        this.html(`5a0b689d`, "code", parentElement, {}, (parentElement) => [
                            this.text('context: web')
                        ])
                    ]),
                    this.html(`d568b3c9`, "li", parentElement, {}, (parentElement) => [
                        this.html(`46531af3`, "span", parentElement, {}, (parentElement) => [
                            this.text('03')
                        ]),
                        this.html(`a609ba77`, "div", parentElement, {}, (parentElement) => [
                            this.html(`04bc65b3`, "strong", parentElement, {}, (parentElement) => [
                                this.text('Blade tạo HTML hoàn chỉnh')
                            ]),
                            this.html(`7f41f114`, "p", parentElement, {}, (parentElement) => [
                                this.text('Layout, block, include và children đã có nội dung trước khi runtime phía client khởi động.')
                            ])
                        ]),
                        this.html(`fbe5077b`, "code", parentElement, {}, (parentElement) => [
                            this.text('SSR / READY')
                        ])
                    ]),
                    this.html(`19e157e5`, "li", parentElement, {}, (parentElement) => [
                        this.html(`9f97a795`, "span", parentElement, {}, (parentElement) => [
                            this.text('04')
                        ]),
                        this.html(`e359a748`, "div", parentElement, {}, (parentElement) => [
                            this.html(`cd91ff6f`, "strong", parentElement, {}, (parentElement) => [
                                this.text('Runtime claim DOM có sẵn')
                            ]),
                            this.html(`3c0416e8`, "p", parentElement, {}, (parentElement) => [
                                this.text('Marker ổn định nối ViewController, state và event vào vùng DOM tương ứng.')
                            ])
                        ]),
                        this.html(`5c17a8f3`, "code", parentElement, {}, (parentElement) => [
                            this.text('HYDRATE / CLAIM')
                        ])
                    ]),
                    this.html(`42b3e167`, "li", parentElement, {}, (parentElement) => [
                        this.html(`397a18a7`, "span", parentElement, {}, (parentElement) => [
                            this.text('05')
                        ]),
                        this.html(`945efd31`, "div", parentElement, {}, (parentElement) => [
                            this.html(`df2fd867`, "strong", parentElement, {}, (parentElement) => [
                                this.text('Router tiếp quản điều hướng')
                            ]),
                            this.html(`521ab148`, "p", parentElement, {}, (parentElement) => [
                                this.text('Navigation tiếp theo resolve view chain, reuse layout chung và chỉ mount phần thay đổi.')
                            ])
                        ]),
                        this.html(`8c73e47a`, "code", parentElement, {}, (parentElement) => [
                            this.text('SPA / ACTIVE')
                        ])
                    ])
                    ])
                ]),
            this.html(`e3988c18`, "section", parentElement,
                { classes: [{ type: 'static', value: "context-panel" }] },
                (parentElement) => [
                this.html(`6f8acc56`, "div", parentElement, {}, (parentElement) => [
                    this.html(`6f07ed8c`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`ef468377`, "span", parentElement, {}, (parentElement) => [
                            this.text('OCTANE SAFE')
                        ]),
                        this.text(' Context thuộc request')
                        ]),
                    this.html(`106b8ee6`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Không để request sau'),
                        this.html(`f7a02534`, "br", parentElement, {}),
                        this.text('kế thừa request trước.')
                    ])
                ]),
                this.html(`f0346512`, "div", parentElement, {}, (parentElement) => [
                    this.html(`8669e717`, "p", parentElement, {}, (parentElement) => [
                        this.text('Worker sống lâu không đồng nghĩa state ứng dụng được phép sống lâu. Saola resolve route component theo context đang hoạt động và cô lập dữ liệu request-scoped, kể cả khi response là HTML hay JSON.')
                    ]),
                    this.html(`ad9ffbb4`, "div", parentElement,
                        { classes: [{ type: 'static', value: "context-cells" }] },
                        (parentElement) => [
                        this.html(`c629c188`, "span", parentElement, {}, (parentElement) => [
                            this.text('WEB'),
                            this.html(`968ff10e`, "small", parentElement, {}, (parentElement) => [
                                this.text('public registry')
                            ])
                        ]),
                        this.html(`e1393b0c`, "span", parentElement, {}, (parentElement) => [
                            this.text('ADMIN'),
                            this.html(`be776094`, "small", parentElement, {}, (parentElement) => [
                                this.text('admin registry')
                            ])
                        ]),
                        this.html(`7dd510e0`, "span", parentElement, {}, (parentElement) => [
                            this.text('MOBILE'),
                            this.html(`400cdb5d`, "small", parentElement, {}, (parentElement) => [
                                this.text('mobile registry')
                            ])
                        ])
                        ])
                ])
                ]),
            this.html(`24b6e3d2`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/docs/contexts" } } },
                (parentElement) => [
                this.html(`587d10b8`, "div", parentElement, {}, (parentElement) => [
                    this.html(`f908d9c5`, "span", parentElement, {}, (parentElement) => [
                        this.text('Tiếp theo')
                    ]),
                    this.html(`7e647603`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Context, module & controller')
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
export function WebModulesDocsArchitecture(__data__ = {}, systemData = {}) {
    return new ArchitectureView(__data__, systemData);
}
export default WebModulesDocsArchitecture;
