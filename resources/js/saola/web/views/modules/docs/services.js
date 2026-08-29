import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.docs.services';
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



class ServicesViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class ServicesView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, ServicesViewController);
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
                            this.text('06')
                        ]),
                        this.text(' BACKEND')
                        ]),
                    this.html(`Bdoc112`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Service và tầng nghiệp vụ.')
                    ])
                ]),
                this.html(`Bdoc12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`Bdoc121`, "p", parentElement, {}, (parentElement) => [
                        this.text('Controller chỉ nhận request và trả response. Toàn bộ quy tắc nghiệp vụ nằm ở Service, và Service không bao giờ chạm thẳng vào bảng — nó đi qua Repository.')
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
                        this.text('PHÂN TẦNG')
                    ]),
                    this.text(' Bốn lớp, mỗi lớp một việc')
                    ]),
                this.html(`Bdoc22`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Mỗi tầng chỉ biết tầng ngay dưới nó.')
                ]),
                this.html(`Bdoc23`, "p", parentElement, {}, (parentElement) => [
                    this.text('Đường đi của một request luôn theo thứ tự này. Nhảy cóc một tầng là chỗ code bắt đầu rối: controller gọi thẳng model, hay service tự viết query.')
                ]),
                this.html(`Bdoc24`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`Bdoc241`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2411`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24111`, "code", parentElement, {}, (parentElement) => [
                                this.text('Controller')
                            ])
                            ]),
                        this.html(`Bdoc2412`, "span", parentElement, {}, (parentElement) => [
                            this.text('Nhận request, gọi service, trả response. Không chứa quy tắc nghiệp vụ.')
                        ]),
                        this.html(`Bdoc2413`, "b", parentElement, {}, (parentElement) => [
                            this.text('HTTP')
                        ])
                    ]),
                    this.html(`Bdoc242`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2421`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24211`, "code", parentElement, {}, (parentElement) => [
                                this.text('Service')
                            ])
                            ]),
                        this.html(`Bdoc2422`, "span", parentElement, {}, (parentElement) => [
                            this.text('Quy tắc nghiệp vụ, điều phối nhiều repository, phát sự kiện.')
                        ]),
                        this.html(`Bdoc2423`, "b", parentElement, {}, (parentElement) => [
                            this.text('nghiệp vụ')
                        ])
                    ]),
                    this.html(`Bdoc243`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2431`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24311`, "code", parentElement, {}, (parentElement) => [
                                this.text('Repository')
                            ])
                            ]),
                        this.html(`Bdoc2432`, "span", parentElement, {}, (parentElement) => [
                            this.text('Mọi truy vấn dữ liệu. Nơi duy nhất biết tới model.')
                        ]),
                        this.html(`Bdoc2433`, "b", parentElement, {}, (parentElement) => [
                            this.text('dữ liệu')
                        ])
                    ]),
                    this.html(`Bdoc244`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2441`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24411`, "code", parentElement, {}, (parentElement) => [
                                this.text('Model')
                            ])
                            ]),
                        this.html(`Bdoc2442`, "span", parentElement, {}, (parentElement) => [
                            this.text('Bảng, quan hệ, cast. Eloquent thuần cộng vài trait của core.')
                        ]),
                        this.html(`Bdoc2443`, "b", parentElement, {}, (parentElement) => [
                            this.text('ORM')
                        ])
                    ])
                    ]),
                this.html(`Bdoc25`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`Bdoc251`, "span", parentElement, {}, (parentElement) => [
                        this.text('BINDING')
                    ]),
                    this.text(' Interface trước, cài đặt sau')
                    ]),
                this.html(`Bdoc26`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Module tự bind interface của mình.')
                ]),
                this.html(`Bdoc27`, "p", parentElement, {}, (parentElement) => [
                    this.text('Controller nhận '),
                    this.html(`Bdoc271`, "code", parentElement, {}, (parentElement) => [
                        this.text('UserServiceInterface')
                    ]),
                    this.text(' qua constructor, không nhận lớp cụ thể. Đổi cài đặt chỉ sửa một dòng ở provider, không đụng chỗ dùng.')
                ]),
                this.include(`Bdoc2c1`, 'web.components.code-window', parentElement, [], (parentElement) => ({
                        "label": "PHP",
                        "title": `app/Modules/User/ModuleServiceProvider.php`,
                        "lang": "php",
                        __ONE_CHILDREN_CONTENT__: (parentElement) => [
                        this.text('public function register(): void\n{\n    $this->app->bind(UserRepositoryInterface::class, UserRepository::class);\n    $this->app->bind(UserServiceInterface::class, UserService::class);\n}')
                    ]
                    })),
                this.html(`Bdoc28`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`Bdoc281`, "span", parentElement, {}, (parentElement) => [
                        this.text('SERVICE')
                    ]),
                    this.text(' Nơi nghiệp vụ sống')
                    ]),
                this.html(`Bdoc29`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Service nhận repository, không nhận model.')
                ]),
                this.include(`Bdoc2c2`, 'web.components.code-window', parentElement, [], (parentElement) => ({
                        "label": "PHP",
                        "title": `app/Modules/User/Services/UserService.php`,
                        "lang": "php",
                        __ONE_CHILDREN_CONTENT__: (parentElement) => [
                        this.text('class UserService extends Service implements UserServiceInterface\n{\n    public function __construct(private UserRepositoryInterface $repo) {}\n\n    public function create(array $data)\n    {\n        static::on(\'user.creating\', function ($data) { return $data; });\n        $user = $this->repo->create($data);\n        static::trigger(\'user.created\', $user);\n        return $user;\n    }\n}')
                    ]
                    })),
                this.html(`Bdoc2e10_`, "p", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc2e10_1`, "code", parentElement, {}, (parentElement) => [
                        this.text('Saola\\Core\\Services\\Service')
                    ]),
                    this.text(' mang sẵn ba trait: '),
                    this.html(`Bdoc2e10_2`, "code", parentElement, {}, (parentElement) => [
                        this.text('EventMethods')
                    ]),
                    this.text(' cho '),
                    this.html(`Bdoc2e10_3`, "code", parentElement, {}, (parentElement) => [
                        this.text('on()')
                    ]),
                    this.text('/'),
                    this.html(`Bdoc2e10_4`, "code", parentElement, {}, (parentElement) => [
                        this.text('trigger()')
                    ]),
                    this.text(', '),
                    this.html(`Bdoc2e10_5`, "code", parentElement, {}, (parentElement) => [
                        this.text('MagicMethods')
                    ]),
                    this.text(' cho truy cập động, và '),
                    this.html(`Bdoc2e10_6`, "code", parentElement, {}, (parentElement) => [
                        this.text('SmartInit')
                    ]),
                    this.text(' để khởi tạo phụ thuộc mà không phải viết constructor dài.')
                ]),
                this.html(`Bdoc2e11_`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.html(`Bdoc2e11_1`, "code", parentElement, {}, (parentElement) => [
                        this.text('static::on()')
                    ]),
                    this.text(' đăng ký hook theo TÊN sự kiện chứ không theo instance — module khác nghe được '),
                    this.html(`Bdoc2e11_2`, "code", parentElement, {}, (parentElement) => [
                        this.text('user.created')
                    ]),
                    this.text(' mà không cần biết '),
                    this.html(`Bdoc2e11_3`, "code", parentElement, {}, (parentElement) => [
                        this.text('UserService')
                    ]),
                    this.text(' tồn tại. Đây là đường ghép nối giữa các module.')
                    ]),
                this.html(`Bdoc2e12_`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-sub" }] },
                    (parentElement) => [
                    this.text('Service có sẵn trong core')
                    ]),
                this.html(`Bdoc2e13_`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`Bdoc2e13_1`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e13_11`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e13_111`, "code", parentElement, {}, (parentElement) => [
                                this.text('BaseService')
                            ])
                            ]),
                        this.html(`Bdoc2e13_12`, "span", parentElement, {}, (parentElement) => [
                            this.text('Service kèm '),
                            this.html(`Bdoc2e13_121`, "code", parentElement, {}, (parentElement) => [
                                this.text('CRUDMethods')
                            ]),
                            this.text(', dùng khi module chỉ cần CRUD tiêu chuẩn.')
                        ]),
                        this.html(`Bdoc2e13_13`, "b", parentElement, {}, (parentElement) => [
                            this.text('core')
                        ])
                    ]),
                    this.html(`Bdoc2e13_2`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e13_21`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e13_211`, "code", parentElement, {}, (parentElement) => [
                                this.text('ModuleService')
                            ])
                            ]),
                        this.html(`Bdoc2e13_22`, "span", parentElement, {}, (parentElement) => [
                            this.text('Đọc registry module: slug, prefix, quyền, tiêu đề hiển thị.')
                        ]),
                        this.html(`Bdoc2e13_23`, "b", parentElement, {}, (parentElement) => [
                            this.text('core')
                        ])
                    ]),
                    this.html(`Bdoc2e13_3`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e13_31`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e13_311`, "code", parentElement, {}, (parentElement) => [
                                this.text('ViewService')
                            ])
                            ]),
                        this.html(`Bdoc2e13_32`, "span", parentElement, {}, (parentElement) => [
                            this.text('Phân giải đường dẫn view theo context đang phục vụ.')
                        ]),
                        this.html(`Bdoc2e13_33`, "b", parentElement, {}, (parentElement) => [
                            this.text('core')
                        ])
                    ]),
                    this.html(`Bdoc2e13_4`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e13_41`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e13_411`, "code", parentElement, {}, (parentElement) => [
                                this.text('ThemeService')
                            ])
                            ]),
                        this.html(`Bdoc2e13_42`, "span", parentElement, {}, (parentElement) => [
                            this.text('Chọn theme và đường dẫn asset tương ứng.')
                        ]),
                        this.html(`Bdoc2e13_43`, "b", parentElement, {}, (parentElement) => [
                            this.text('core')
                        ])
                    ])
                    ]),
                this.html(`Bdoc2e14_`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.text('Service '),
                    this.html(`Bdoc2e14_1`, "strong", parentElement, {}, (parentElement) => [
                        this.text('không')
                    ]),
                    this.text(' trả về model thô cho tầng trên. Trả Mask hoặc mảng đã lọc — xem '),
                    this.html(`Bdoc2e14_2`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "/docs/mask" } } },
                        (parentElement) => [
                        this.text('Mask & collection')
                        ]),
                    this.text('.')
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
export function WebModulesDocsServices(__data__ = {}, systemData = {}) {
    return new ServicesView(__data__, systemData);
}
export default WebModulesDocsServices;