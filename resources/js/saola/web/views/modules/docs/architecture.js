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
            this.html(`Bdoc1`, "section", parentElement,
                { classes: [{ type: 'static', value: "page-hero" }, { type: 'static', value: "page-hero-architecture" }] },
                (parentElement) => [
                this.html(`Bdoc11`, "div", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc111`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`Bdoc1111`, "span", parentElement, {}, (parentElement) => [
                            this.text('01 / ARCHITECTURE')
                        ]),
                        this.text(' Tổng quan kiến trúc')
                        ]),
                    this.html(`Bdoc112`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Laravel ở tầng lõi.'),
                        this.html(`Bdoc1121`, "br", parentElement, {}),
                        this.html(`Bdoc1122`, "em", parentElement, {}, (parentElement) => [
                            this.text('SPA ở trải nghiệm.')
                        ])
                    ])
                ]),
                this.html(`Bdoc12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`Bdoc121`, "p", parentElement, {}, (parentElement) => [
                        this.text('Saola định nghĩa một chuỗi contract đồng nhất từ server request đến client DOM — hợp nhất sức mạnh backend Laravel với độ mượt mà của SPA mà không cần tách rời API.')
                    ]),
                    this.html(`Bdoc122`, "dl", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc1221`, "div", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc12211`, "dt", parentElement, {}, (parentElement) => [
                                this.text('INPUT')
                            ]),
                            this.html(`Bdoc12212`, "dd", parentElement, {}, (parentElement) => [
                                this.text('Route, Context & Controller')
                            ])
                        ]),
                        this.html(`Bdoc1222`, "div", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc12221`, "dt", parentElement, {}, (parentElement) => [
                                this.text('OUTPUT')
                            ]),
                            this.html(`Bdoc12222`, "dd", parentElement, {}, (parentElement) => [
                                this.text('SSR HTML → Hydrate → SPA Runtime')
                            ])
                        ])
                    ])
                    ])
                ]),
            this.html(`Bdoc2`, "section", parentElement,
                { classes: [{ type: 'static', value: "stack-section" }] },
                (parentElement) => [
                this.html(`Bdoc21`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-index" }] },
                    (parentElement) => [
                    this.html(`Bdoc211`, "span", parentElement, {}, (parentElement) => [
                        this.text('01')
                    ]),
                    this.html(`Bdoc212`, "p", parentElement, {}, (parentElement) => [
                        this.text('Kiến trúc'),
                        this.html(`Bdoc2121`, "br", parentElement, {}),
                        this.text('4 tầng lõi')
                    ])
                    ]),
                this.html(`Bdoc22`, "div", parentElement,
                    { classes: [{ type: 'static', value: "stack-diagram" }] },
                    (parentElement) => [
                    this.html(`Bdoc221`, "article", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2211`, "span", parentElement, {}, (parentElement) => [
                            this.text('APPLICATION')
                        ]),
                        this.html(`Bdoc2212`, "strong", parentElement, {}, (parentElement) => [
                            this.text('Modules & Contexts')
                        ]),
                        this.html(`Bdoc2213`, "p", parentElement, {}, (parentElement) => [
                            this.text('Phân tách Web, Admin, Mobile thành các module độc lập; quản lý route, controller và view theo đúng ngữ cảnh.')
                        ]),
                        this.html(`Bdoc2214`, "i", parentElement, {}, (parentElement) => [
                            this.text('04')
                        ])
                    ]),
                    this.html(`Bdoc222`, "article", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2221`, "span", parentElement, {}, (parentElement) => [
                            this.text('CORE')
                        ]),
                        this.html(`Bdoc2222`, "strong", parentElement, {}, (parentElement) => [
                            this.text('Laravel Integration')
                        ]),
                        this.html(`Bdoc2223`, "p", parentElement, {}, (parentElement) => [
                            this.text('Tích hợp sâu vào pipeline Laravel: điều phối context theo request, sinh SSR payload và kết nối view response.')
                        ]),
                        this.html(`Bdoc2224`, "i", parentElement, {}, (parentElement) => [
                            this.text('03')
                        ])
                    ]),
                    this.html(`Bdoc223`, "article", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2231`, "span", parentElement, {}, (parentElement) => [
                            this.text('COMPILER')
                        ]),
                        this.html(`Bdoc2232`, "strong", parentElement, {}, (parentElement) => [
                            this.text('Dual AST Engine')
                        ]),
                        this.html(`Bdoc2233`, "p", parentElement, {}, (parentElement) => [
                            this.text('Một file '),
                            this.html(`Bdoc22331`, "code", parentElement, {}, (parentElement) => [
                                this.text('.sao')
                            ]),
                            this.text(' duy nhất biên dịch đồng thời ra Blade template (SSR) và JavaScript module (SPA runtime).')
                        ]),
                        this.html(`Bdoc2234`, "i", parentElement, {}, (parentElement) => [
                            this.text('02')
                        ])
                    ]),
                    this.html(`Bdoc224`, "article", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2241`, "span", parentElement, {}, (parentElement) => [
                            this.text('CLIENT')
                        ]),
                        this.html(`Bdoc2242`, "strong", parentElement, {}, (parentElement) => [
                            this.text('Reactive SPA Runtime')
                        ]),
                        this.html(`Bdoc2243`, "p", parentElement, {}, (parentElement) => [
                            this.text('Tự động hydrate DOM có sẵn, duy trì reactive state, tái sử dụng layout và quản lý client cache thông minh.')
                        ]),
                        this.html(`Bdoc2244`, "i", parentElement, {}, (parentElement) => [
                            this.text('01')
                        ])
                    ])
                    ])
                ]),
            this.html(`Bdoc3`, "section", parentElement,
                { classes: [{ type: 'static', value: "request-section" }] },
                (parentElement) => [
                this.html(`Bdoc31`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }, { type: 'static', value: "compact" }] },
                    (parentElement) => [
                    this.html(`Bdoc311`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`Bdoc3111`, "span", parentElement, {}, (parentElement) => [
                            this.text('REQUEST FLOW')
                        ]),
                        this.text(' Vòng đời từ URL đến tương tác')
                        ]),
                    this.html(`Bdoc312`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Một mã nguồn,'),
                        this.html(`Bdoc3121`, "br", parentElement, {}),
                        this.text('hai giai đoạn vận hành.')
                    ])
                    ]),
                this.html(`Bdoc32`, "ol", parentElement,
                    { classes: [{ type: 'static', value: "flowlane" }] },
                    (parentElement) => [
                    this.html(`Bdoc321`, "li", parentElement,
                        { classes: [{ type: 'static', value: "fl-phase" }] },
                        (parentElement) => [
                        this.html(`Bdoc3211`, "span", parentElement, {}, (parentElement) => [
                            this.text('SERVER-SIDE (SSR)')
                        ])
                        ]),
                    this.html(`Bdoc322`, "li", parentElement,
                        { classes: [{ type: 'static', value: "fl" }] },
                        (parentElement) => [
                        this.html(`Bdoc3221`, "b", parentElement, {}, (parentElement) => [
                            this.text('01')
                        ]),
                        this.html(`Bdoc3222`, "strong", parentElement, {}, (parentElement) => [
                            this.text('Định tuyến & Phân giải Context')
                        ]),
                        this.html(`Bdoc3223`, "p", parentElement, {}, (parentElement) => [
                            this.text('Request đi vào đúng Context (Web/Admin/Mobile), nạp route module tương ứng mà không tải dư thừa các registry khác.')
                        ]),
                        this.html(`Bdoc3224`, "code", parentElement, {}, (parentElement) => [
                            this.text('GET /projects/42')
                        ])
                        ]),
                    this.html(`Bdoc323`, "li", parentElement,
                        { classes: [{ type: 'static', value: "fl" }] },
                        (parentElement) => [
                        this.html(`Bdoc3231`, "b", parentElement, {}, (parentElement) => [
                            this.text('02')
                        ]),
                        this.html(`Bdoc3232`, "strong", parentElement, {}, (parentElement) => [
                            this.text('Controller xử lý & tạo View Response')
                        ]),
                        this.html(`Bdoc3233`, "p", parentElement, {}, (parentElement) => [
                            this.text('Controller xử lý logic nghiệp vụ, gắn kết view component và đóng gói SSR boot payload chuẩn xác.')
                        ]),
                        this.html(`Bdoc3234`, "code", parentElement, {}, (parentElement) => [
                            this.text('context: web')
                        ])
                        ]),
                    this.html(`Bdoc324`, "li", parentElement,
                        { classes: [{ type: 'static', value: "fl" }] },
                        (parentElement) => [
                        this.html(`Bdoc3241`, "b", parentElement, {}, (parentElement) => [
                            this.text('03')
                        ]),
                        this.html(`Bdoc3242`, "strong", parentElement, {}, (parentElement) => [
                            this.text('Blade kết xuất HTML hoàn chỉnh')
                        ]),
                        this.html(`Bdoc3243`, "p", parentElement, {}, (parentElement) => [
                            this.text('Toàn bộ layout, slot, component con và dữ liệu server được render thành HTML chuẩn SEO trước khi gửi về client.')
                        ]),
                        this.html(`Bdoc3244`, "code", parentElement, {}, (parentElement) => [
                            this.text('SSR / READY')
                        ])
                        ]),
                    this.html(`Bdoc325`, "li", parentElement,
                        { classes: [{ type: 'static', value: "fl-cross" }] },
                        (parentElement) => [
                        this.html(`Bdoc3251`, "span", parentElement, {}, (parentElement) => [
                            this.text('Truyền tải HTML trọn vẹn kèm Boot Payload qua HTTP')
                        ])
                        ]),
                    this.html(`Bdoc326`, "li", parentElement,
                        { classes: [{ type: 'static', value: "fl-phase" }] },
                        (parentElement) => [
                        this.html(`Bdoc3261`, "span", parentElement, {}, (parentElement) => [
                            this.text('CLIENT-SIDE (SPA)')
                        ])
                        ]),
                    this.html(`Bdoc327`, "li", parentElement,
                        { classes: [{ type: 'static', value: "fl" }] },
                        (parentElement) => [
                        this.html(`Bdoc3271`, "b", parentElement, {}, (parentElement) => [
                            this.text('04')
                        ]),
                        this.html(`Bdoc3272`, "strong", parentElement, {}, (parentElement) => [
                            this.text('Hydration & Gắn kết Reactivity')
                        ]),
                        this.html(`Bdoc3273`, "p", parentElement, {}, (parentElement) => [
                            this.text('Client runtime tiếp quản DOM hiện hữu thông qua các marker định danh, kích hoạt event listener mà không render lại DOM có sẵn.')
                        ]),
                        this.html(`Bdoc3274`, "code", parentElement, {}, (parentElement) => [
                            this.text('HYDRATE / CLAIM')
                        ])
                        ]),
                    this.html(`Bdoc328`, "li", parentElement,
                        { classes: [{ type: 'static', value: "fl" }] },
                        (parentElement) => [
                        this.html(`Bdoc3281`, "b", parentElement, {}, (parentElement) => [
                            this.text('05')
                        ]),
                        this.html(`Bdoc3282`, "strong", parentElement, {}, (parentElement) => [
                            this.text('Client Router chuyển sang chế độ SPA')
                        ]),
                        this.html(`Bdoc3283`, "p", parentElement, {}, (parentElement) => [
                            this.text('Các lượt chuyển trang sau đó chỉ nạp delta dữ liệu, tái sử dụng layout chung và chỉ cập nhật đúng vùng view thay đổi.')
                        ]),
                        this.html(`Bdoc3284`, "code", parentElement, {}, (parentElement) => [
                            this.text('SPA / ACTIVE')
                        ])
                        ]),
                    this.html(`Bdoc329`, "li", parentElement,
                        { classes: [{ type: 'static', value: "fl-loop" }] },
                        (parentElement) => [
                        this.html(`Bdoc3291`, "span", parentElement, {}, (parentElement) => [
                            this.text('Từ thời điểm này, ứng dụng hoạt động thuần SPA — trải nghiệm mượt mà tức thì, không tải lại trang.')
                        ])
                        ])
                    ])
                ]),
            this.html(`Bdoc4`, "section", parentElement,
                { classes: [{ type: 'static', value: "context-panel" }] },
                (parentElement) => [
                this.html(`Bdoc41`, "div", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc411`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`Bdoc4111`, "span", parentElement, {}, (parentElement) => [
                            this.text('OCTANE SAFE')
                        ]),
                        this.text(' Context Isolate')
                        ]),
                    this.html(`Bdoc412`, "h2", parentElement, {}, (parentElement) => [
                        this.text('State sạch hoàn toàn'),
                        this.html(`Bdoc4121`, "br", parentElement, {}),
                        this.text('trên từng request.')
                    ])
                ]),
                this.html(`Bdoc42`, "div", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc421`, "p", parentElement, {}, (parentElement) => [
                        this.text('Trong các runtime sống lâu (Laravel Octane, FrankenPHP, Swoole), việc rò rỉ state giữa các request là rủi ro nghiêm trọng. Saola bảo vệ kiến trúc bằng cơ chế cô lập request-scoped: mỗi request nạp đúng context độc lập và tự động giải phóng bộ nhớ ngay sau khi hoàn tất chu kỳ render.')
                    ]),
                    this.html(`Bdoc422`, "div", parentElement,
                        { classes: [{ type: 'static', value: "context-cells" }] },
                        (parentElement) => [
                        this.html(`Bdoc4221`, "span", parentElement, {}, (parentElement) => [
                            this.text('WEB'),
                            this.html(`Bdoc42211`, "small", parentElement, {}, (parentElement) => [
                                this.text('public registry')
                            ])
                        ]),
                        this.html(`Bdoc4222`, "span", parentElement, {}, (parentElement) => [
                            this.text('ADMIN'),
                            this.html(`Bdoc42221`, "small", parentElement, {}, (parentElement) => [
                                this.text('admin registry')
                            ])
                        ]),
                        this.html(`Bdoc4223`, "span", parentElement, {}, (parentElement) => [
                            this.text('MOBILE'),
                            this.html(`Bdoc42231`, "small", parentElement, {}, (parentElement) => [
                                this.text('mobile registry')
                            ])
                        ])
                        ])
                ])
                ]),
            this.html(`Bdoc5`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/docs/contexts" } } },
                (parentElement) => [
                this.html(`Bdoc51`, "div", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc511`, "span", parentElement, {}, (parentElement) => [
                        this.text('Tiếp theo')
                    ]),
                    this.html(`Bdoc512`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Context, module & controller')
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
export function WebModulesDocsArchitecture(__data__ = {}, systemData = {}) {
    return new ArchitectureView(__data__, systemData);
}
export default WebModulesDocsArchitecture;