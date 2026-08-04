import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.home.architecture';
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
                { classes: [{ type: 'static', value: "page-hero" }, { type: 'static', value: "page-hero-architecture" }] },
                (parentElement) => [
                this.html(`90a6e493`, "div", parentElement, {}, (parentElement) => [
                    this.html(`f515bf66`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`e2f86203`, "span", parentElement, {}, (parentElement) => [
                            this.text('01 / ARCHITECTURE')
                        ]),
                        this.text(' Toàn cảnh hệ sinh thái')
                        ]),
                    this.html(`9b0938cb`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Laravel ở lõi.'),
                        this.html(`f7127348`, "br", parentElement, {}),
                        this.html(`d4f4199d`, "em", parentElement, {}, (parentElement) => [
                            this.text('SPA ở trải nghiệm.')
                        ])
                    ])
                ]),
                this.html(`5f82dcd4`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`70182674`, "p", parentElement, {}, (parentElement) => [
                        this.text('Saola là một chuỗi contract từ request tới DOM, không phải một frontend framework đặt cạnh Laravel.')
                    ]),
                    this.html(`87f0a97e`, "dl", parentElement, {}, (parentElement) => [
                        this.html(`8fd0466f`, "div", parentElement, {}, (parentElement) => [
                            this.html(`e3488b5f`, "dt", parentElement, {}, (parentElement) => [
                                this.text('INPUT')
                            ]),
                            this.html(`cf7b0d19`, "dd", parentElement, {}, (parentElement) => [
                                this.text('Route + context + data')
                            ])
                        ]),
                        this.html(`a8712dd1`, "div", parentElement, {}, (parentElement) => [
                            this.html(`fc9334e8`, "dt", parentElement, {}, (parentElement) => [
                                this.text('OUTPUT')
                            ]),
                            this.html(`647f0f87`, "dd", parentElement, {}, (parentElement) => [
                                this.text('SSR → hydrate → SPA')
                            ])
                        ])
                    ])
                    ])
                ]),
            this.html(`8aa0772c`, "section", parentElement,
                { classes: [{ type: 'static', value: "stack-section" }] },
                (parentElement) => [
                this.html(`301a68fc`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-index" }] },
                    (parentElement) => [
                    this.html(`a8c2239f`, "span", parentElement, {}, (parentElement) => [
                        this.text('01')
                    ]),
                    this.html(`2e4e3d1a`, "p", parentElement, {}, (parentElement) => [
                        this.text('Bốn lớp'),
                        this.html(`99fbdc6e`, "br", parentElement, {}),
                        this.text('một luồng')
                    ])
                    ]),
                this.html(`7f8af112`, "div", parentElement,
                    { classes: [{ type: 'static', value: "stack-diagram" }] },
                    (parentElement) => [
                    this.html(`1f6b5560`, "article", parentElement, {}, (parentElement) => [
                        this.html(`47d8cb11`, "span", parentElement, {}, (parentElement) => [
                            this.text('APPLICATION')
                        ]),
                        this.html(`4bfffa65`, "strong", parentElement, {}, (parentElement) => [
                            this.text('Modules & contexts')
                        ]),
                        this.html(`e4e4138f`, "p", parentElement, {}, (parentElement) => [
                            this.text('Web, admin và mobile tổ chức route, controller, view theo cùng một mô hình module.')
                        ]),
                        this.html(`8af1b554`, "i", parentElement, {}, (parentElement) => [
                            this.text('04')
                        ])
                    ]),
                    this.html(`e6209cd3`, "article", parentElement, {}, (parentElement) => [
                        this.html(`ae8d7665`, "span", parentElement, {}, (parentElement) => [
                            this.text('CORE')
                        ]),
                        this.html(`a3a489cb`, "strong", parentElement, {}, (parentElement) => [
                            this.text('Laravel integration')
                        ]),
                        this.html(`4ba2c3e5`, "p", parentElement, {}, (parentElement) => [
                            this.text('Route map, view response, SSR boot payload và request-scoped context.')
                        ]),
                        this.html(`f68c0895`, "i", parentElement, {}, (parentElement) => [
                            this.text('03')
                        ])
                    ]),
                    this.html(`d548dd48`, "article", parentElement, {}, (parentElement) => [
                        this.html(`89739934`, "span", parentElement, {}, (parentElement) => [
                            this.text('COMPILER')
                        ]),
                        this.html(`06409e07`, "strong", parentElement, {}, (parentElement) => [
                            this.text('.sao → Blade + JS')
                        ]),
                        this.html(`c8e8fc9f`, "p", parentElement, {}, (parentElement) => [
                            this.text('Một AST tạo hai output có cùng structure, directive và marker contract.')
                        ]),
                        this.html(`34e51b5a`, "i", parentElement, {}, (parentElement) => [
                            this.text('02')
                        ])
                    ]),
                    this.html(`641beadb`, "article", parentElement, {}, (parentElement) => [
                        this.html(`cfb82249`, "span", parentElement, {}, (parentElement) => [
                            this.text('CLIENT')
                        ]),
                        this.html(`4574d0e0`, "strong", parentElement, {}, (parentElement) => [
                            this.text('Router & view runtime')
                        ]),
                        this.html(`58a5508e`, "p", parentElement, {}, (parentElement) => [
                            this.text('Hydration, lifecycle, reactivity, layout reuse và page cache phía trình duyệt.')
                        ]),
                        this.html(`b22003c2`, "i", parentElement, {}, (parentElement) => [
                            this.text('01')
                        ])
                    ])
                    ])
                ]),
            this.html(`6c26f9b7`, "section", parentElement,
                { classes: [{ type: 'static', value: "request-section" }] },
                (parentElement) => [
                this.html(`ce6a96bf`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }, { type: 'static', value: "compact" }] },
                    (parentElement) => [
                    this.html(`5a71cd5f`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`f1acc65a`, "span", parentElement, {}, (parentElement) => [
                            this.text('REQUEST FLOW')
                        ]),
                        this.text(' Từ URL tới tương tác')
                        ]),
                    this.html(`98293aba`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Một đường đi,'),
                        this.html(`c006637c`, "br", parentElement, {}),
                        this.text('hai giai đoạn.')
                    ])
                    ]),
                this.html(`84e769c2`, "ol", parentElement,
                    { classes: [{ type: 'static', value: "flow-timeline" }] },
                    (parentElement) => [
                    this.html(`6ebee66f`, "li", parentElement, {}, (parentElement) => [
                        this.html(`1d71bcfc`, "span", parentElement, {}, (parentElement) => [
                            this.text('01')
                        ]),
                        this.html(`261cc0e9`, "div", parentElement, {}, (parentElement) => [
                            this.html(`c62e8b62`, "strong", parentElement, {}, (parentElement) => [
                                this.text('Route chọn module và context')
                            ]),
                            this.html(`8a2e4d03`, "p", parentElement, {}, (parentElement) => [
                                this.text('Request web, admin hoặc mobile được resolve trong phạm vi hiện tại thay vì đọc một static map dùng chung cho mọi request.')
                            ])
                        ]),
                        this.html(`d09f2788`, "code", parentElement, {}, (parentElement) => [
                            this.text('GET /projects/42')
                        ])
                    ]),
                    this.html(`0ca1ebc7`, "li", parentElement, {}, (parentElement) => [
                        this.html(`b95370f1`, "span", parentElement, {}, (parentElement) => [
                            this.text('02')
                        ]),
                        this.html(`39430ed2`, "div", parentElement, {}, (parentElement) => [
                            this.html(`b2d238f3`, "strong", parentElement, {}, (parentElement) => [
                                this.text('Controller trả view response')
                            ]),
                            this.html(`48687a4b`, "p", parentElement, {}, (parentElement) => [
                                this.text('Core xác định component route tương ứng, render Blade và tạo boot payload cho đúng context.')
                            ])
                        ]),
                        this.html(`268ae1cb`, "code", parentElement, {}, (parentElement) => [
                            this.text('context: web')
                        ])
                    ]),
                    this.html(`f7cc678d`, "li", parentElement, {}, (parentElement) => [
                        this.html(`0b5b2b8f`, "span", parentElement, {}, (parentElement) => [
                            this.text('03')
                        ]),
                        this.html(`d9be0a5a`, "div", parentElement, {}, (parentElement) => [
                            this.html(`e5cbbfa7`, "strong", parentElement, {}, (parentElement) => [
                                this.text('Blade tạo HTML hoàn chỉnh')
                            ]),
                            this.html(`48645a4b`, "p", parentElement, {}, (parentElement) => [
                                this.text('Layout, block, include và children đã có nội dung trước khi runtime phía client khởi động.')
                            ])
                        ]),
                        this.html(`bf27d58f`, "code", parentElement, {}, (parentElement) => [
                            this.text('SSR / READY')
                        ])
                    ]),
                    this.html(`b9946a39`, "li", parentElement, {}, (parentElement) => [
                        this.html(`eafd54b2`, "span", parentElement, {}, (parentElement) => [
                            this.text('04')
                        ]),
                        this.html(`d4a9d637`, "div", parentElement, {}, (parentElement) => [
                            this.html(`aeeae784`, "strong", parentElement, {}, (parentElement) => [
                                this.text('Runtime claim DOM có sẵn')
                            ]),
                            this.html(`255c6fe8`, "p", parentElement, {}, (parentElement) => [
                                this.text('Marker ổn định nối ViewController, state và event vào vùng DOM tương ứng.')
                            ])
                        ]),
                        this.html(`12cae39e`, "code", parentElement, {}, (parentElement) => [
                            this.text('HYDRATE / CLAIM')
                        ])
                    ]),
                    this.html(`bf373253`, "li", parentElement, {}, (parentElement) => [
                        this.html(`ee000eea`, "span", parentElement, {}, (parentElement) => [
                            this.text('05')
                        ]),
                        this.html(`97e47235`, "div", parentElement, {}, (parentElement) => [
                            this.html(`3d026307`, "strong", parentElement, {}, (parentElement) => [
                                this.text('Router tiếp quản điều hướng')
                            ]),
                            this.html(`62d02799`, "p", parentElement, {}, (parentElement) => [
                                this.text('Navigation tiếp theo resolve view chain, reuse layout chung và chỉ mount phần thay đổi.')
                            ])
                        ]),
                        this.html(`5a6ebb37`, "code", parentElement, {}, (parentElement) => [
                            this.text('SPA / ACTIVE')
                        ])
                    ])
                    ])
                ]),
            this.html(`4e212027`, "section", parentElement,
                { classes: [{ type: 'static', value: "context-panel" }] },
                (parentElement) => [
                this.html(`1628defa`, "div", parentElement, {}, (parentElement) => [
                    this.html(`d621a64b`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`5f6b80a9`, "span", parentElement, {}, (parentElement) => [
                            this.text('OCTANE SAFE')
                        ]),
                        this.text(' Context thuộc request')
                        ]),
                    this.html(`6560bb1b`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Không để request sau'),
                        this.html(`c03b5dbb`, "br", parentElement, {}),
                        this.text('kế thừa request trước.')
                    ])
                ]),
                this.html(`281112e1`, "div", parentElement, {}, (parentElement) => [
                    this.html(`1ace0544`, "p", parentElement, {}, (parentElement) => [
                        this.text('Worker sống lâu không đồng nghĩa state ứng dụng được phép sống lâu. Saola resolve route component theo context đang hoạt động và cô lập dữ liệu request-scoped, kể cả khi response là HTML hay JSON.')
                    ]),
                    this.html(`241338ab`, "div", parentElement,
                        { classes: [{ type: 'static', value: "context-cells" }] },
                        (parentElement) => [
                        this.html(`03830c07`, "span", parentElement, {}, (parentElement) => [
                            this.text('WEB'),
                            this.html(`4ade19b9`, "small", parentElement, {}, (parentElement) => [
                                this.text('public registry')
                            ])
                        ]),
                        this.html(`685d2446`, "span", parentElement, {}, (parentElement) => [
                            this.text('ADMIN'),
                            this.html(`ff0031ec`, "small", parentElement, {}, (parentElement) => [
                                this.text('admin registry')
                            ])
                        ]),
                        this.html(`95aa3e21`, "span", parentElement, {}, (parentElement) => [
                            this.text('MOBILE'),
                            this.html(`d71b6a7c`, "small", parentElement, {}, (parentElement) => [
                                this.text('mobile registry')
                            ])
                        ])
                        ])
                ])
                ]),
            this.html(`5d5c7d30`, "section", parentElement,
                { classes: [{ type: 'static', value: "next-page" }] },
                (parentElement) => [
                this.html(`8a4c2f1f`, "span", parentElement, {}, (parentElement) => [
                    this.text('Tiếp theo / 02')
                ]),
                this.html(`f94a552a`, "div", parentElement, {}, (parentElement) => [
                    this.html(`5d206b32`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Compiler biến một nguồn thành hai runtime thế nào?')
                    ]),
                    this.html(`3f927566`, "a", parentElement,
                        { classes: [{ type: 'static', value: "button" }, { type: 'static', value: "button-primary" }], attrs: { "href": { type: 'static', value: "/compiler" } } },
                        (parentElement) => [
                        this.text('Compiler & AST '),
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
export function WebModulesHomeArchitecture(__data__ = {}, systemData = {}) {
    return new ArchitectureView(__data__, systemData);
}
export default WebModulesHomeArchitecture;
