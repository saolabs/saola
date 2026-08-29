import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.docs.router';
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



class RouterViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class RouterView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, RouterViewController);
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
            this.html(`Bdoc1`, "header", parentElement,
                { classes: [{ type: 'static', value: "page-hero" }] },
                (parentElement) => [
                this.html(`Bdoc11`, "div", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc111`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`Bdoc1111`, "span", parentElement, {}, (parentElement) => [
                            this.text('07')
                        ]),
                        this.text(' RUNTIME')
                        ]),
                    this.html(`Bdoc112`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Router và dịch vụ client.')
                    ])
                ]),
                this.html(`Bdoc12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`Bdoc121`, "p", parentElement, {}, (parentElement) => [
                        this.text('Ba cửa vào đều đổ về một hàm xử lý route, và việc đầu tiên router làm là hỏi PageCache. Application là một container service có thứ tự nạp được resolve tự động.')
                    ])
                    ])
                ]),
            this.html(`Bdoc2`, "div", parentElement,
                { classes: [{ type: 'static', value: "doc-body" }] },
                (parentElement) => [
                this.html(`Bdoc21`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`Bdoc211`, "span", parentElement, {}, (parentElement) => [
                        this.text('ROUTER')
                    ]),
                    this.text(' Điều hướng và cache')
                    ]),
                this.html(`Bdoc22`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Back không gọi lại API.')
                ]),
                this.html(`Bdoc23`, "p", parentElement, {}, (parentElement) => [
                    this.text('Ba cửa vào đều đổ về một hàm xử lý route: khởi động lần đầu, chặn click trên thẻ liên kết, và sự kiện lịch sử trình duyệt. Việc đầu tiên router làm không phải render mà là hỏi PageCache.')
                ]),
                this.html(`Bdoc24`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-grid" }] },
                    (parentElement) => [
                    this.html(`Bdoc241`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`Bdoc2411`, "span", parentElement, {}, (parentElement) => [
                            this.text('Cache')
                        ]),
                        this.html(`Bdoc2412`, "h3", parentElement, {}, (parentElement) => [
                            this.text('PageCache theo LRU')
                        ]),
                        this.html(`Bdoc2413`, "p", parentElement, {}, (parentElement) => [
                            this.text('Khoá là request URI gồm path và query, không gồm fragment. Điều hướng '),
                            this.html(`Bdoc24131`, "code", parentElement, {}, (parentElement) => [
                                this.text('pop')
                            ]),
                            this.text(' mà có entry thì đi đường restore: gắn lại DOM, resume, xong — không render, không fetch.')
                        ])
                        ]),
                    this.html(`Bdoc242`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`Bdoc2421`, "span", parentElement, {}, (parentElement) => [
                            this.text('Layout')
                        ]),
                        this.html(`Bdoc2422`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Diff chuỗi layout')
                        ]),
                        this.html(`Bdoc2423`, "p", parentElement, {}, (parentElement) => [
                            this.text('Chuỗi layout mới được so với chuỗi đang mount. Phần trùng được giữ nguyên và không render lại, chỉ phần khác biệt bị thay.')
                        ])
                        ]),
                    this.html(`Bdoc243`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`Bdoc2431`, "span", parentElement, {}, (parentElement) => [
                            this.text('Guard')
                        ]),
                        this.html(`Bdoc2432`, "h3", parentElement, {}, (parentElement) => [
                            this.text('beforeEach · afterEach')
                        ]),
                        this.html(`Bdoc2433`, "p", parentElement, {}, (parentElement) => [
                            this.text('Guard chạy sau khi match route và trước khi mount, đủ để chặn hoặc chuyển hướng.')
                        ])
                        ]),
                    this.html(`Bdoc244`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`Bdoc2441`, "span", parentElement, {}, (parentElement) => [
                            this.text('Escape hatch')
                        ]),
                        this.html(`Bdoc2442`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Bỏ qua chặn liên kết')
                        ]),
                        this.html(`Bdoc2443`, "p", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc24431`, "code", parentElement, {}, (parentElement) => [
                                this.text('target')
                            ]),
                            this.text(' khác '),
                            this.html(`Bdoc24432`, "code", parentElement, {}, (parentElement) => [
                                this.text('_self')
                            ]),
                            this.text(', thuộc tính '),
                            this.html(`Bdoc24433`, "code", parentElement, {}, (parentElement) => [
                                this.text('download')
                            ]),
                            this.text(', giao thức đặc biệt, hoặc '),
                            this.html(`Bdoc24434`, "code", parentElement, {}, (parentElement) => [
                                this.text('data-nav="disabled"')
                            ]),
                            this.text(' — router để trình duyệt tự xử lý. Mục lục bên trái trang này dùng đúng cách đó.')
                        ])
                        ])
                    ]),
                this.html(`Bdoc25`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`Bdoc251`, "span", parentElement, {}, (parentElement) => [
                        this.text('SERVICES')
                    ]),
                    this.text(' Container phía client')
                    ]),
                this.html(`Bdoc26`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Application là một container có thứ tự.')
                ]),
                this.html(`Bdoc27`, "p", parentElement, {}, (parentElement) => [
                    this.text('Service đăng ký qua service provider có khai báo phụ thuộc, thứ tự nạp được resolve chứ không phải viết tay. Truy cập qua '),
                    this.html(`Bdoc271`, "code", parentElement, {}, (parentElement) => [
                        this.text('App.<Tên>')
                    ]),
                    this.text('.')
                ]),
                this.html(`Bdoc28`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`Bdoc281`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2811`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc28111`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Http')
                            ])
                            ]),
                        this.html(`Bdoc2812`, "span", parentElement, {}, (parentElement) => [
                            this.text('Fetch client: base URL, interceptor, timeout, tự huỷ request trùng, tự gắn header revision của view')
                        ]),
                        this.html(`Bdoc2813`, "b", parentElement, {}, (parentElement) => [
                            this.text('network')
                        ])
                    ]),
                    this.html(`Bdoc282`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2821`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc28211`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Event')
                            ])
                            ]),
                        this.html(`Bdoc2822`, "span", parentElement, {}, (parentElement) => [
                            this.text('Bus sự kiện: một hoặc nhiều event, '),
                            this.html(`Bdoc28221`, "code", parentElement, {}, (parentElement) => [
                                this.text('once')
                            ]),
                            this.text(', trả về hàm huỷ đăng ký')
                        ]),
                        this.html(`Bdoc2823`, "b", parentElement, {}, (parentElement) => [
                            this.text('bus')
                        ])
                    ]),
                    this.html(`Bdoc283`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2831`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc28311`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Store')
                            ]),
                            this.text(' / '),
                            this.html(`Bdoc28312`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Storage')
                            ])
                            ]),
                        this.html(`Bdoc2832`, "span", parentElement, {}, (parentElement) => [
                            this.text('Kho theo khoá có TTL, subscribe theo khoá và callback lúc hết hạn')
                        ]),
                        this.html(`Bdoc2833`, "b", parentElement, {}, (parentElement) => [
                            this.text('state')
                        ])
                    ]),
                    this.html(`Bdoc284`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2841`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc28411`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Head')
                            ])
                            ]),
                        this.html(`Bdoc2842`, "span", parentElement, {}, (parentElement) => [
                            this.text('Quản lý thẻ head: title, meta, link theo từng view')
                        ]),
                        this.html(`Bdoc2843`, "b", parentElement, {}, (parentElement) => [
                            this.text('document')
                        ])
                    ]),
                    this.html(`Bdoc285`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2851`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc28511`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Router')
                            ]),
                            this.text(' / '),
                            this.html(`Bdoc28512`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.View')
                            ])
                            ]),
                        this.html(`Bdoc2852`, "span", parentElement, {}, (parentElement) => [
                            this.text('Router và ViewManager — mount, hydrate, pause, resume view chain')
                        ]),
                        this.html(`Bdoc2853`, "b", parentElement, {}, (parentElement) => [
                            this.text('core')
                        ])
                    ]),
                    this.html(`Bdoc286`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2861`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc28611`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Helper')
                            ])
                            ]),
                        this.html(`Bdoc2862`, "span", parentElement, {}, (parentElement) => [
                            this.text('Hàm tiện ích mà output biên dịch gọi tới, ví dụ '),
                            this.html(`Bdoc28621`, "code", parentElement, {}, (parentElement) => [
                                this.text('count()')
                            ])
                        ]),
                        this.html(`Bdoc2863`, "b", parentElement, {}, (parentElement) => [
                            this.text('utility')
                        ])
                    ]),
                    this.html(`Bdoc287`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2871`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc28711`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.API')
                            ])
                            ]),
                        this.html(`Bdoc2872`, "span", parentElement, {}, (parentElement) => [
                            this.text('ApiClient dựng trên HttpService cho lớp gọi API có cấu trúc')
                        ]),
                        this.html(`Bdoc2873`, "b", parentElement, {}, (parentElement) => [
                            this.text('network')
                        ])
                    ]),
                    this.html(`Bdoc288`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2881`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc28811`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Logger')
                            ])
                            ]),
                        this.html(`Bdoc2882`, "span", parentElement, {}, (parentElement) => [
                            this.text('Log theo cấp, tắt được ở production')
                        ]),
                        this.html(`Bdoc2883`, "b", parentElement, {}, (parentElement) => [
                            this.text('diagnostics')
                        ])
                    ]),
                    this.html(`Bdoc289`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2891`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc28911`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Marker')
                            ]),
                            this.text(' / '),
                            this.html(`Bdoc28912`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Registry')
                            ])
                            ]),
                        this.html(`Bdoc2892`, "span", parentElement, {}, (parentElement) => [
                            this.text('Truy vấn và đăng ký marker, nền của hydration')
                        ]),
                        this.html(`Bdoc2893`, "b", parentElement, {}, (parentElement) => [
                            this.text('internal')
                        ])
                    ]),
                    this.html(`Bdoc28e10_`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc28e10_1`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc28e10_11`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Devtools')
                            ])
                            ]),
                        this.html(`Bdoc28e10_2`, "span", parentElement, {}, (parentElement) => [
                            this.text('Phát sự kiện vòng đời view cho inspector')
                        ]),
                        this.html(`Bdoc28e10_3`, "b", parentElement, {}, (parentElement) => [
                            this.text('diagnostics')
                        ])
                    ])
                    ]),
                this.html(`Bdoc29`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-sub" }] },
                    (parentElement) => [
                    this.text('Dịch vụ nội bộ không nằm trên container')
                    ]),
                this.html(`Bdoc2e10_`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-tags" }] },
                    (parentElement) => [
                    this.html(`Bdoc2e10_1`, "span", parentElement,
                        { classes: [{ type: 'static', value: "ov-tag" }] },
                        (parentElement) => [
                        this.text('AssetManager — ref-count style & script')
                        ]),
                    this.html(`Bdoc2e10_2`, "span", parentElement,
                        { classes: [{ type: 'static', value: "ov-tag" }] },
                        (parentElement) => [
                        this.text('BlockManager — nối block với outlet')
                        ]),
                    this.html(`Bdoc2e10_3`, "span", parentElement,
                        { classes: [{ type: 'static', value: "ov-tag" }] },
                        (parentElement) => [
                        this.text('SectionManager')
                        ]),
                    this.html(`Bdoc2e10_4`, "span", parentElement,
                        { classes: [{ type: 'static', value: "ov-tag" }] },
                        (parentElement) => [
                        this.text('PageCache')
                        ]),
                    this.html(`Bdoc2e10_5`, "span", parentElement,
                        { classes: [{ type: 'static', value: "ov-tag" }] },
                        (parentElement) => [
                        this.text('DomService')
                        ]),
                    this.html(`Bdoc2e10_6`, "span", parentElement,
                        { classes: [{ type: 'static', value: "ov-tag" }] },
                        (parentElement) => [
                        this.text('ForeachSlotCache')
                        ]),
                    this.html(`Bdoc2e10_7`, "span", parentElement,
                        { classes: [{ type: 'static', value: "ov-tag" }] },
                        (parentElement) => [
                        this.text('ElementManager')
                        ])
                    ])
                ]),
            this.html(`Bdoc3`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/docs/build" } } },
                (parentElement) => [
                this.html(`Bdoc31`, "div", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc311`, "span", parentElement, {}, (parentElement) => [
                        this.text('Tiếp theo')
                    ]),
                    this.html(`Bdoc312`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Build, CLI & cấu hình')
                    ])
                ]),
                this.html(`Bdoc32`, "span", parentElement,
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
export function WebModulesDocsRouter(__data__ = {}, systemData = {}) {
    return new RouterView(__data__, systemData);
}
export default WebModulesDocsRouter;