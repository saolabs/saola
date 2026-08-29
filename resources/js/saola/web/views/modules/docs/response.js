import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.docs.response';
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



class ResponseViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class ResponseView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, ResponseViewController);
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
                            this.text('11')
                        ]),
                        this.text(' BACKEND')
                        ]),
                    this.html(`Bdoc112`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Response và thương lượng đầu ra.')
                    ])
                ]),
                this.html(`Bdoc12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`Bdoc121`, "p", parentElement, {}, (parentElement) => [
                        this.text('Một controller phục vụ được cả trình duyệt lẫn API mà không rẽ nhánh: '),
                        this.html(`Bdoc1211`, "code", parentElement, {}, (parentElement) => [
                            this.text('$this->response()')
                        ]),
                        this.text(' tự quyết trả HTML hay JSON dựa trên chính request.')
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
                        this.text('MỘT HÀM')
                    ]),
                    this.text(' Hai kiểu đầu ra')
                    ]),
                this.html(`Bdoc22`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Controller không cần biết ai đang gọi.')
                ]),
                this.html(`Bdoc23`, "p", parentElement, {}, (parentElement) => [
                    this.text('Đây là lý do gần như mọi controller trong dự án chỉ có một dòng thân hàm. Cùng route đó, trình duyệt nhận trang đã render sẵn, còn '),
                    this.html(`Bdoc231`, "code", parentElement, {}, (parentElement) => [
                        this.text('fetch')
                    ]),
                    this.text(' nhận JSON.')
                ]),
                this.include(`Bdoc2c1`, 'web.components.code-window', parentElement, [], (parentElement) => ({
                        "label": "PHP",
                        "title": `app/Modules/Roster/Http/Controllers/Web/RosterController.php`,
                        "lang": "php",
                        __ONE_CHILDREN_CONTENT__: (parentElement) => [
                        this.text('class RosterController extends WebController\n{\n    protected $module = \'roster\';\n\n    public function index()\n    {\n        return $this->response([]);\n    }\n}')
                    ]
                    })),
                this.html(`Bdoc24`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`Bdoc241`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2411`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.text('Trình duyệt')
                            ]),
                        this.html(`Bdoc2412`, "span", parentElement, {}, (parentElement) => [
                            this.text('Accept là HTML → render Blade của route rồi trả trang')
                        ]),
                        this.html(`Bdoc2413`, "b", parentElement, {}, (parentElement) => [
                            this.text('view')
                        ])
                    ]),
                    this.html(`Bdoc242`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2421`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.text('Fetch / API')
                            ]),
                        this.html(`Bdoc2422`, "span", parentElement, {}, (parentElement) => [
                            this.text('Accept là JSON, hoặc context '),
                            this.html(`Bdoc24221`, "code", parentElement, {}, (parentElement) => [
                                this.text('api')
                            ]),
                            this.text(' không có view → trả JSON')
                        ]),
                        this.html(`Bdoc2423`, "b", parentElement, {}, (parentElement) => [
                            this.text('json')
                        ])
                    ])
                    ]),
                this.html(`Bdoc25`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`Bdoc251`, "span", parentElement, {}, (parentElement) => [
                        this.text('PHÂN GIẢI')
                    ]),
                    this.text(' View đến từ tên route')
                    ]),
                this.html(`Bdoc26`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Không truyền đường dẫn thì nó tự tra.')
                ]),
                this.html(`Bdoc27`, "p", parentElement, {}, (parentElement) => [
                    this.text('Khi không đưa '),
                    this.html(`Bdoc271`, "code", parentElement, {}, (parentElement) => [
                        this.text('$bladePath')
                    ]),
                    this.text(', '),
                    this.html(`Bdoc272`, "code", parentElement, {}, (parentElement) => [
                        this.text('response()')
                    ]),
                    this.text(' hỏi '),
                    this.html(`Bdoc273`, "code", parentElement, {}, (parentElement) => [
                        this.text('ViewContextManager::routeToViewPathConfig()')
                    ]),
                    this.text(' xem route tên đó ứng với view nào trong context hiện tại. Nhờ vậy một method phục vụ được nhiều route.')
                ]),
                this.include(`Bdoc2c2`, 'web.components.code-window', parentElement, [], (parentElement) => ({
                        "label": "PHP",
                        "title": `app/Modules/Docs/.../DocsController.php`,
                        "lang": "php",
                        __ONE_CHILDREN_CONTENT__: (parentElement) => [
                        this.text('// 16 route /docs/* dùng chung đúng method này;\n// view resolve theo route name web.docs.{slug}\npublic function page()\n{\n    return $this->response([]);\n}')
                    ]
                    })),
                this.html(`Bdoc28`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.text('Vì view suy từ '),
                    this.html(`Bdoc281`, "strong", parentElement, {}, (parentElement) => [
                        this.text('tên route')
                    ]),
                    this.text(', route có tham số ('),
                    this.html(`Bdoc282`, "code", parentElement, {}, (parentElement) => [
                        this.text('/docs/{slug}')
                    ]),
                    this.text(') sẽ không có view cố định — và router phía client cũng không dựng được bản đồ path → component cho nó. Đó là lý do tài liệu khai báo 16 route tĩnh thay vì một route tham số.')
                    ]),
                this.html(`Bdoc29`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`Bdoc291`, "span", parentElement, {}, (parentElement) => [
                        this.text('THAM SỐ')
                    ]),
                    this.text(' Khi cần ép')
                    ]),
                this.html(`Bdoc2e10_`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Ba tham số, phần lớn thời gian chỉ dùng tham số đầu.')
                ]),
                this.include(`Bdoc2c3`, 'web.components.code-window', parentElement, [], (parentElement) => ({
                        "label": "PHP",
                        "title": "Chữ ký",
                        "lang": "php",
                        __ONE_CHILDREN_CONTENT__: (parentElement) => [
                        this.text('$this->response(array $data = [], ?string $bladePath = null, array $options = [])')
                    ]
                    })),
                this.html(`Bdoc2e11_`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`Bdoc2e11_1`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e11_11`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e11_111`, "code", parentElement, {}, (parentElement) => [
                                this.text('$data')
                            ])
                            ]),
                        this.html(`Bdoc2e11_12`, "span", parentElement, {}, (parentElement) => [
                            this.text('Dữ liệu đưa sang view, đồng thời là payload JSON')
                        ]),
                        this.html(`Bdoc2e11_13`, "b", parentElement, {}, (parentElement) => [
                            this.text('mảng')
                        ])
                    ]),
                    this.html(`Bdoc2e11_2`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e11_21`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e11_211`, "code", parentElement, {}, (parentElement) => [
                                this.text('$bladePath')
                            ])
                            ]),
                        this.html(`Bdoc2e11_22`, "span", parentElement, {}, (parentElement) => [
                            this.text('Chỉ định view thay vì để tra theo route name')
                        ]),
                        this.html(`Bdoc2e11_23`, "b", parentElement, {}, (parentElement) => [
                            this.text('chuỗi')
                        ])
                    ]),
                    this.html(`Bdoc2e11_3`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e11_31`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e11_311`, "code", parentElement, {}, (parentElement) => [
                                this.text('status')
                            ])
                            ]),
                        this.html(`Bdoc2e11_32`, "span", parentElement, {}, (parentElement) => [
                            this.text('Mã HTTP, mặc định 200')
                        ]),
                        this.html(`Bdoc2e11_33`, "b", parentElement, {}, (parentElement) => [
                            this.text('option')
                        ])
                    ]),
                    this.html(`Bdoc2e11_4`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e11_41`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e11_411`, "code", parentElement, {}, (parentElement) => [
                                this.text('headers')
                            ])
                            ]),
                        this.html(`Bdoc2e11_42`, "span", parentElement, {}, (parentElement) => [
                            this.text('Header thêm vào response')
                        ]),
                        this.html(`Bdoc2e11_43`, "b", parentElement, {}, (parentElement) => [
                            this.text('option')
                        ])
                    ]),
                    this.html(`Bdoc2e11_5`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e11_51`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e11_511`, "code", parentElement, {}, (parentElement) => [
                                this.text('forceJson')
                            ])
                            ]),
                        this.html(`Bdoc2e11_52`, "span", parentElement, {}, (parentElement) => [
                            this.text('Luôn trả JSON dù request muốn HTML')
                        ]),
                        this.html(`Bdoc2e11_53`, "b", parentElement, {}, (parentElement) => [
                            this.text('option')
                        ])
                    ]),
                    this.html(`Bdoc2e11_6`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e11_61`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e11_611`, "code", parentElement, {}, (parentElement) => [
                                this.text('forceView')
                            ])
                            ]),
                        this.html(`Bdoc2e11_62`, "span", parentElement, {}, (parentElement) => [
                            this.text('Luôn render view')
                        ]),
                        this.html(`Bdoc2e11_63`, "b", parentElement, {}, (parentElement) => [
                            this.text('option')
                        ])
                    ]),
                    this.html(`Bdoc2e11_7`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e11_71`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e11_711`, "code", parentElement, {}, (parentElement) => [
                                this.text('includeView')
                            ])
                            ]),
                        this.html(`Bdoc2e11_72`, "span", parentElement, {}, (parentElement) => [
                            this.text('Kèm thông tin view vào payload JSON — router client dùng để biết cần nạp component nào')
                        ]),
                        this.html(`Bdoc2e11_73`, "b", parentElement, {}, (parentElement) => [
                            this.text('option')
                        ])
                    ]),
                    this.html(`Bdoc2e11_8`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e11_81`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e11_811`, "code", parentElement, {}, (parentElement) => [
                                this.text('jsonOptions')
                            ])
                            ]),
                        this.html(`Bdoc2e11_82`, "span", parentElement, {}, (parentElement) => [
                            this.text('Cờ cho '),
                            this.html(`Bdoc2e11_821`, "code", parentElement, {}, (parentElement) => [
                                this.text('json_encode')
                            ]),
                            this.text(', mặc định '),
                            this.html(`Bdoc2e11_822`, "code", parentElement, {}, (parentElement) => [
                                this.text('JSON_UNESCAPED_UNICODE')
                            ])
                        ]),
                        this.html(`Bdoc2e11_83`, "b", parentElement, {}, (parentElement) => [
                            this.text('option')
                        ])
                    ])
                    ]),
                this.html(`Bdoc2e12_`, "p", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc2e12_1`, "code", parentElement, {}, (parentElement) => [
                        this.text('wantsJsonResponse()')
                    ]),
                    this.text(' là nơi quyết định, và '),
                    this.html(`Bdoc2e12_2`, "code", parentElement, {}, (parentElement) => [
                        this.text('autoResponse()')
                    ]),
                    this.text(' dùng khi bạn muốn tự gọi lại logic thương lượng đó ở chỗ khác.')
                ]),
                this.html(`Bdoc2e13_`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.text('Đừng đẩy model thô vào '),
                    this.html(`Bdoc2e13_1`, "code", parentElement, {}, (parentElement) => [
                        this.text('$data')
                    ]),
                    this.text(': nó vừa là dữ liệu view vừa là payload JSON, nên mọi cột của bảng sẽ lộ ra API. Bọc '),
                    this.html(`Bdoc2e13_2`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "/docs/mask" } } },
                        (parentElement) => [
                        this.text('Mask')
                        ]),
                    this.text(' trước.')
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
export function WebModulesDocsResponse(__data__ = {}, systemData = {}) {
    return new ResponseView(__data__, systemData);
}
export default WebModulesDocsResponse;