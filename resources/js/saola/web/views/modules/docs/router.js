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
            this.html(`ff96f7a7`, "header", parentElement,
                { classes: [{ type: 'static', value: "page-hero" }] },
                (parentElement) => [
                this.html(`15b892a7`, "div", parentElement, {}, (parentElement) => [
                    this.html(`ab74559e`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`943e8228`, "span", parentElement, {}, (parentElement) => [
                            this.text('07')
                        ]),
                        this.text(' RUNTIME')
                        ]),
                    this.html(`9abe25a3`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Router và dịch vụ client.')
                    ])
                ]),
                this.html(`f750a15d`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`2a968179`, "p", parentElement, {}, (parentElement) => [
                        this.text('Ba cửa vào đều đổ về một hàm xử lý route, và việc đầu tiên router làm là hỏi PageCache. Application là một container service có thứ tự nạp được resolve tự động.')
                    ])
                    ])
                ]),
            this.html(`e5195f55`, "div", parentElement,
                { classes: [{ type: 'static', value: "doc-body" }] },
                (parentElement) => [
                this.html(`a805c5cb`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`a3f20685`, "span", parentElement, {}, (parentElement) => [
                        this.text('ROUTER')
                    ]),
                    this.text(' Điều hướng và cache')
                    ]),
                this.html(`c048d2ef`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Back không gọi lại API.')
                ]),
                this.html(`1c642396`, "p", parentElement, {}, (parentElement) => [
                    this.text('Ba cửa vào đều đổ về một hàm xử lý route: khởi động lần đầu, chặn click trên thẻ liên kết, và sự kiện lịch sử trình duyệt. Việc đầu tiên router làm không phải render mà là hỏi PageCache.')
                ]),
                this.html(`753dcd15`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-grid" }] },
                    (parentElement) => [
                    this.html(`9de53a5a`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`81bea50b`, "span", parentElement, {}, (parentElement) => [
                            this.text('Cache')
                        ]),
                        this.html(`32679b94`, "h3", parentElement, {}, (parentElement) => [
                            this.text('PageCache theo LRU')
                        ]),
                        this.html(`48280560`, "p", parentElement, {}, (parentElement) => [
                            this.text('Khoá là request URI gồm path và query, không gồm fragment. Điều hướng '),
                            this.html(`1dc81855`, "code", parentElement, {}, (parentElement) => [
                                this.text('pop')
                            ]),
                            this.text(' mà có entry thì đi đường restore: gắn lại DOM, resume, xong — không render, không fetch.')
                        ])
                        ]),
                    this.html(`c8e71cd3`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`9c312e37`, "span", parentElement, {}, (parentElement) => [
                            this.text('Layout')
                        ]),
                        this.html(`cbe9665d`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Diff chuỗi layout')
                        ]),
                        this.html(`466d0bc6`, "p", parentElement, {}, (parentElement) => [
                            this.text('Chuỗi layout mới được so với chuỗi đang mount. Phần trùng được giữ nguyên và không render lại, chỉ phần khác biệt bị thay.')
                        ])
                        ]),
                    this.html(`e88f763e`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`d7f6d064`, "span", parentElement, {}, (parentElement) => [
                            this.text('Guard')
                        ]),
                        this.html(`20f8c5fb`, "h3", parentElement, {}, (parentElement) => [
                            this.text('beforeEach · afterEach')
                        ]),
                        this.html(`a7ba8f53`, "p", parentElement, {}, (parentElement) => [
                            this.text('Guard chạy sau khi match route và trước khi mount, đủ để chặn hoặc chuyển hướng.')
                        ])
                        ]),
                    this.html(`094adcdf`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`12547677`, "span", parentElement, {}, (parentElement) => [
                            this.text('Escape hatch')
                        ]),
                        this.html(`c438b827`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Bỏ qua chặn liên kết')
                        ]),
                        this.html(`87dac5f0`, "p", parentElement, {}, (parentElement) => [
                            this.html(`db6edecc`, "code", parentElement, {}, (parentElement) => [
                                this.text('target')
                            ]),
                            this.text(' khác '),
                            this.html(`44746ce1`, "code", parentElement, {}, (parentElement) => [
                                this.text('_self')
                            ]),
                            this.text(', thuộc tính '),
                            this.html(`6c5abc17`, "code", parentElement, {}, (parentElement) => [
                                this.text('download')
                            ]),
                            this.text(', giao thức đặc biệt, hoặc '),
                            this.html(`7c9b8cc1`, "code", parentElement, {}, (parentElement) => [
                                this.text('data-nav="disabled"')
                            ]),
                            this.text(' — router để trình duyệt tự xử lý. Mục lục bên trái trang này dùng đúng cách đó.')
                        ])
                        ])
                    ]),
                this.html(`259642dc`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`a0de54dd`, "span", parentElement, {}, (parentElement) => [
                        this.text('SERVICES')
                    ]),
                    this.text(' Container phía client')
                    ]),
                this.html(`689f689c`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Application là một container có thứ tự.')
                ]),
                this.html(`c3983eb0`, "p", parentElement, {}, (parentElement) => [
                    this.text('Service đăng ký qua service provider có khai báo phụ thuộc, thứ tự nạp được resolve chứ không phải viết tay. Truy cập qua '),
                    this.html(`e21026d6`, "code", parentElement, {}, (parentElement) => [
                        this.text('App.<Tên>')
                    ]),
                    this.text('.')
                ]),
                this.html(`a79a05db`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`2300d833`, "div", parentElement, {}, (parentElement) => [
                        this.html(`291828af`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`59ffb0bf`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Http')
                            ])
                            ]),
                        this.html(`e8225c75`, "span", parentElement, {}, (parentElement) => [
                            this.text('Fetch client: base URL, interceptor, timeout, tự huỷ request trùng, tự gắn header revision của view')
                        ]),
                        this.html(`3dba4e95`, "b", parentElement, {}, (parentElement) => [
                            this.text('network')
                        ])
                    ]),
                    this.html(`f3b1517b`, "div", parentElement, {}, (parentElement) => [
                        this.html(`0fe67a4d`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`af2847b6`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Event')
                            ])
                            ]),
                        this.html(`4f24e169`, "span", parentElement, {}, (parentElement) => [
                            this.text('Bus sự kiện: một hoặc nhiều event, '),
                            this.html(`1dbe70c0`, "code", parentElement, {}, (parentElement) => [
                                this.text('once')
                            ]),
                            this.text(', trả về hàm huỷ đăng ký')
                        ]),
                        this.html(`c9b70ed2`, "b", parentElement, {}, (parentElement) => [
                            this.text('bus')
                        ])
                    ]),
                    this.html(`79c27fa3`, "div", parentElement, {}, (parentElement) => [
                        this.html(`17dd6dec`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`96ce252f`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Store')
                            ]),
                            this.text(' / '),
                            this.html(`640f47df`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Storage')
                            ])
                            ]),
                        this.html(`dbd165d1`, "span", parentElement, {}, (parentElement) => [
                            this.text('Kho theo khoá có TTL, subscribe theo khoá và callback lúc hết hạn')
                        ]),
                        this.html(`3012748d`, "b", parentElement, {}, (parentElement) => [
                            this.text('state')
                        ])
                    ]),
                    this.html(`23985645`, "div", parentElement, {}, (parentElement) => [
                        this.html(`d170d57c`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`299feb41`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Head')
                            ])
                            ]),
                        this.html(`9a81b2bf`, "span", parentElement, {}, (parentElement) => [
                            this.text('Quản lý thẻ head: title, meta, link theo từng view')
                        ]),
                        this.html(`6ca44e62`, "b", parentElement, {}, (parentElement) => [
                            this.text('document')
                        ])
                    ]),
                    this.html(`1ce119bd`, "div", parentElement, {}, (parentElement) => [
                        this.html(`07624417`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`e1eb2258`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Router')
                            ]),
                            this.text(' / '),
                            this.html(`eece3ced`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.View')
                            ])
                            ]),
                        this.html(`a1e6ef37`, "span", parentElement, {}, (parentElement) => [
                            this.text('Router và ViewManager — mount, hydrate, pause, resume view chain')
                        ]),
                        this.html(`821b7a5a`, "b", parentElement, {}, (parentElement) => [
                            this.text('core')
                        ])
                    ]),
                    this.html(`66bb5b14`, "div", parentElement, {}, (parentElement) => [
                        this.html(`a4526726`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`4c7bc4e4`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Helper')
                            ])
                            ]),
                        this.html(`5095681a`, "span", parentElement, {}, (parentElement) => [
                            this.text('Hàm tiện ích mà output biên dịch gọi tới, ví dụ '),
                            this.html(`eac4811b`, "code", parentElement, {}, (parentElement) => [
                                this.text('count()')
                            ])
                        ]),
                        this.html(`3420cd95`, "b", parentElement, {}, (parentElement) => [
                            this.text('utility')
                        ])
                    ]),
                    this.html(`c52c9d36`, "div", parentElement, {}, (parentElement) => [
                        this.html(`f29ce14f`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`d752c88c`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.API')
                            ])
                            ]),
                        this.html(`2dfa2f39`, "span", parentElement, {}, (parentElement) => [
                            this.text('ApiClient dựng trên HttpService cho lớp gọi API có cấu trúc')
                        ]),
                        this.html(`f066598b`, "b", parentElement, {}, (parentElement) => [
                            this.text('network')
                        ])
                    ]),
                    this.html(`9095973b`, "div", parentElement, {}, (parentElement) => [
                        this.html(`8c775755`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`49e805ed`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Logger')
                            ])
                            ]),
                        this.html(`cededf00`, "span", parentElement, {}, (parentElement) => [
                            this.text('Log theo cấp, tắt được ở production')
                        ]),
                        this.html(`4081192c`, "b", parentElement, {}, (parentElement) => [
                            this.text('diagnostics')
                        ])
                    ]),
                    this.html(`ae821b13`, "div", parentElement, {}, (parentElement) => [
                        this.html(`626be424`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`44fa6b5e`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Marker')
                            ]),
                            this.text(' / '),
                            this.html(`58b5d341`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Registry')
                            ])
                            ]),
                        this.html(`ad36bb71`, "span", parentElement, {}, (parentElement) => [
                            this.text('Truy vấn và đăng ký marker, nền của hydration')
                        ]),
                        this.html(`46eb5cae`, "b", parentElement, {}, (parentElement) => [
                            this.text('internal')
                        ])
                    ]),
                    this.html(`032939be`, "div", parentElement, {}, (parentElement) => [
                        this.html(`a7988739`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`ff3492b3`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Devtools')
                            ])
                            ]),
                        this.html(`f0f01991`, "span", parentElement, {}, (parentElement) => [
                            this.text('Phát sự kiện vòng đời view cho inspector')
                        ]),
                        this.html(`2f949820`, "b", parentElement, {}, (parentElement) => [
                            this.text('diagnostics')
                        ])
                    ])
                    ]),
                this.html(`77f2db7f`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-sub" }] },
                    (parentElement) => [
                    this.text('Dịch vụ nội bộ không nằm trên container')
                    ]),
                this.html(`6be80a2e`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-tags" }] },
                    (parentElement) => [
                    this.html(`b78cf6cc`, "span", parentElement,
                        { classes: [{ type: 'static', value: "ov-tag" }] },
                        (parentElement) => [
                        this.text('AssetManager — ref-count style & script')
                        ]),
                    this.html(`bb66a7a3`, "span", parentElement,
                        { classes: [{ type: 'static', value: "ov-tag" }] },
                        (parentElement) => [
                        this.text('BlockManager — nối block với outlet')
                        ]),
                    this.html(`fcf73bdd`, "span", parentElement,
                        { classes: [{ type: 'static', value: "ov-tag" }] },
                        (parentElement) => [
                        this.text('SectionManager')
                        ]),
                    this.html(`d12c4a93`, "span", parentElement,
                        { classes: [{ type: 'static', value: "ov-tag" }] },
                        (parentElement) => [
                        this.text('PageCache')
                        ]),
                    this.html(`7e2e01ee`, "span", parentElement,
                        { classes: [{ type: 'static', value: "ov-tag" }] },
                        (parentElement) => [
                        this.text('DomService')
                        ]),
                    this.html(`64445125`, "span", parentElement,
                        { classes: [{ type: 'static', value: "ov-tag" }] },
                        (parentElement) => [
                        this.text('ForeachSlotCache')
                        ]),
                    this.html(`79cfba99`, "span", parentElement,
                        { classes: [{ type: 'static', value: "ov-tag" }] },
                        (parentElement) => [
                        this.text('ElementManager')
                        ])
                    ])
                ]),
            this.html(`ceb15976`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/docs/build" } } },
                (parentElement) => [
                this.html(`60f0ac7a`, "div", parentElement, {}, (parentElement) => [
                    this.html(`b7585c3f`, "span", parentElement, {}, (parentElement) => [
                        this.text('Tiếp theo')
                    ]),
                    this.html(`8767f8f3`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Build, CLI & cấu hình')
                    ])
                ]),
                this.html(`8287de38`, "span", parentElement,
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
