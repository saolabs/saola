import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.docs.contexts';
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



class ContextsViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class ContextsView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, ContextsViewController);
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
                            this.text('02')
                        ]),
                        this.text(' NỀN TẢNG')
                        ]),
                    this.html(`Bdoc112`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Context, module và controller.')
                    ])
                ]),
                this.html(`Bdoc12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`Bdoc121`, "p", parentElement, {}, (parentElement) => [
                        this.text('Context là biên giới thật giữa web, admin, api và mobile. Module là đơn vị tổ chức code tự khai báo route của mình. Controller biết mình đang phục vụ context nào.')
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
                        this.text('CONTEXT')
                    ]),
                    this.text(' Nhiều mặt tiền, một lõi')
                    ]),
                this.html(`Bdoc22`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Context là biên giới thật, không phải thư mục.')
                ]),
                this.html(`Bdoc23`, "p", parentElement, {}, (parentElement) => [
                    this.text('Mỗi context có prefix, middleware, permission, thư mục view, registry và bundle JavaScript riêng. Cùng một module có thể phục vụ cả ba mà không trộn route hay asset của nhau.')
                ]),
                this.html(`Bdoc24`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`Bdoc241`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2411`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24111`, "code", parentElement, {}, (parentElement) => [
                                this.text('web')
                            ])
                            ]),
                        this.html(`Bdoc2412`, "span", parentElement, {}, (parentElement) => [
                            this.text('Website công khai — SSR rồi hydrate thành SPA')
                        ]),
                        this.html(`Bdoc2413`, "b", parentElement, {}, (parentElement) => [
                            this.text('prefix /')
                        ])
                    ]),
                    this.html(`Bdoc242`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2421`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24211`, "code", parentElement, {}, (parentElement) => [
                                this.text('admin')
                            ])
                            ]),
                        this.html(`Bdoc2422`, "span", parentElement, {}, (parentElement) => [
                            this.text('Khu quản trị, middleware '),
                            this.html(`Bdoc24221`, "code", parentElement, {}, (parentElement) => [
                                this.text('auth')
                            ]),
                            this.text(' + '),
                            this.html(`Bdoc24222`, "code", parentElement, {}, (parentElement) => [
                                this.text('permission:admin')
                            ])
                        ]),
                        this.html(`Bdoc2423`, "b", parentElement, {}, (parentElement) => [
                            this.text('prefix /admin')
                        ])
                    ]),
                    this.html(`Bdoc243`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2431`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24311`, "code", parentElement, {}, (parentElement) => [
                                this.text('api')
                            ])
                            ]),
                        this.html(`Bdoc2432`, "span", parentElement, {}, (parentElement) => [
                            this.text('RESTful JSON, không render view')
                        ]),
                        this.html(`Bdoc2433`, "b", parentElement, {}, (parentElement) => [
                            this.text('prefix /api')
                        ])
                    ]),
                    this.html(`Bdoc244`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2441`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24411`, "code", parentElement, {}, (parentElement) => [
                                this.text('mobile')
                            ])
                            ]),
                        this.html(`Bdoc2442`, "span", parentElement, {}, (parentElement) => [
                            this.text('Context thứ tư cho webview/PWA, cùng cơ chế')
                        ]),
                        this.html(`Bdoc2443`, "b", parentElement, {}, (parentElement) => [
                            this.text('tuỳ cấu hình')
                        ])
                    ])
                    ]),
                this.html(`Bdoc25`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-sub" }] },
                    (parentElement) => [
                    this.text('Đăng ký context')
                    ]),
                this.include(`Bdoc2c1`, 'web.components.code-window', parentElement, [], (parentElement) => ({
                        "label": "PHP",
                        "title": `app/Providers/ModuleServiceProvider.php`,
                        "lang": "php",
                        __ONE_CHILDREN_CONTENT__: (parentElement) => [
                        this.text('System::context(\'admin\', [\n    \'prefix\' => \'admin\',\n    \'middleware\' => [\'web\', \'auth\', \'permission:admin\'],\n    \'permission\' => [\'admin\'],\n]);')
                    ]
                    })),
                this.html(`Bdoc26`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.text('Context không chỉ là namespace: '),
                    this.html(`Bdoc261`, "code", parentElement, {}, (parentElement) => [
                        this.text('ViewContextService')
                    ]),
                    this.text(' giữ registry theo request. Worker sống lâu (Octane) không làm rò state của request trước sang request sau.')
                    ]),
                this.html(`Bdoc27`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`Bdoc271`, "span", parentElement, {}, (parentElement) => [
                        this.text('MODULES')
                    ]),
                    this.text(' Đơn vị tổ chức code')
                    ]),
                this.html(`Bdoc28`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Module tự khai báo, hệ thống tự tìm.')
                ]),
                this.html(`Bdoc29`, "p", parentElement, {}, (parentElement) => [
                    this.text('Mỗi thư mục dưới '),
                    this.html(`Bdoc291`, "code", parentElement, {}, (parentElement) => [
                        this.text('app/Modules/')
                    ]),
                    this.text(' có '),
                    this.html(`Bdoc292`, "code", parentElement, {}, (parentElement) => [
                        this.text('ModuleServiceProvider.php')
                    ]),
                    this.text(' sẽ được nạp tự động — đệ quy, nên module lồng module vẫn chạy. Không có file danh sách nào phải sửa khi thêm module mới.')
                ]),
                this.html(`Bdoc2e10_`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-grid" }] },
                    (parentElement) => [
                    this.html(`Bdoc2e10_1`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`Bdoc2e10_11`, "span", parentElement, {}, (parentElement) => [
                            this.text('Cấu trúc')
                        ]),
                        this.html(`Bdoc2e10_12`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Bên trong một module')
                        ]),
                        this.html(`Bdoc2e10_13`, "p", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc2e10_131`, "code", parentElement, {}, (parentElement) => [
                                this.text('Http/Controllers/{Web,Admin,Api}')
                            ]),
                            this.text(' · '),
                            this.html(`Bdoc2e10_132`, "code", parentElement, {}, (parentElement) => [
                                this.text('Http/Requests')
                            ]),
                            this.text(' · '),
                            this.html(`Bdoc2e10_133`, "code", parentElement, {}, (parentElement) => [
                                this.text('Models')
                            ]),
                            this.text(' · '),
                            this.html(`Bdoc2e10_134`, "code", parentElement, {}, (parentElement) => [
                                this.text('Repositories')
                            ]),
                            this.text(' · '),
                            this.html(`Bdoc2e10_135`, "code", parentElement, {}, (parentElement) => [
                                this.text('Services')
                            ]),
                            this.text(' · '),
                            this.html(`Bdoc2e10_136`, "code", parentElement, {}, (parentElement) => [
                                this.text('Masks')
                            ]),
                            this.text('.')
                        ]),
                        this.html(`Bdoc2e10_14`, "p", parentElement, {}, (parentElement) => [
                            this.text('Chỉ tạo thư mục nào thực sự cần — module chỉ có view như '),
                            this.html(`Bdoc2e10_141`, "code", parentElement, {}, (parentElement) => [
                                this.text('Ping')
                            ]),
                            this.text(' thì chỉ có một controller.')
                        ])
                        ]),
                    this.html(`Bdoc2e10_2`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`Bdoc2e10_21`, "span", parentElement, {}, (parentElement) => [
                            this.text('Route')
                        ]),
                        this.html(`Bdoc2e10_22`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Fluent API theo context')
                        ]),
                        this.html(`Bdoc2e10_23`, "p", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc2e10_231`, "code", parentElement, {}, (parentElement) => [
                                this.text('module()')
                            ]),
                            this.text(' nhận slug, prefix và priority; '),
                            this.html(`Bdoc2e10_232`, "code", parentElement, {}, (parentElement) => [
                                this.text('controller()')
                            ]),
                            this.text(', '),
                            this.html(`Bdoc2e10_233`, "code", parentElement, {}, (parentElement) => [
                                this.text('as()')
                            ]),
                            this.text(', '),
                            this.html(`Bdoc2e10_234`, "code", parentElement, {}, (parentElement) => [
                                this.text('title()')
                            ]),
                            this.text(' rồi '),
                            this.html(`Bdoc2e10_235`, "code", parentElement, {}, (parentElement) => [
                                this.text('group()')
                            ]),
                            this.text(' khai báo từng verb.')
                        ]),
                        this.html(`Bdoc2e10_24`, "p", parentElement, {}, (parentElement) => [
                            this.text('Route đăng ký trong '),
                            this.html(`Bdoc2e10_241`, "code", parentElement, {}, (parentElement) => [
                                this.text('routes()')
                            ]),
                            this.text(' của module, không dồn vào '),
                            this.html(`Bdoc2e10_242`, "code", parentElement, {}, (parentElement) => [
                                this.text('routes/web.php')
                            ]),
                            this.text('.')
                        ])
                        ])
                    ]),
                this.include(`Bdoc2c2`, 'web.components.code-window', parentElement, [], (parentElement) => ({
                        "label": "PHP",
                        "title": `app/Modules/Roster/ModuleServiceProvider.php`,
                        "lang": "php",
                        __ONE_CHILDREN_CONTENT__: (parentElement) => [
                        this.text('System::context(\'api\')->module(\'roster\', [\'prefix\' => \'/roster\', \'priority\' => 5])\n    ->controller(RosterController::class)\n    ->group(function ($module) {\n        $module->get(\'/\', \'index\')->name(\'index\');\n        $module->post(\'/\', \'store\')->name(\'store\');\n        $module->put(\'/{uuid}\', \'update\')->name(\'update\');\n        $module->delete(\'/{uuid}\', \'destroy\')->name(\'destroy\');\n    });')
                    ]
                    })),
                this.html(`Bdoc2e11_`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`Bdoc2e11_1`, "span", parentElement, {}, (parentElement) => [
                        this.text('CONTROLLER')
                    ]),
                    this.text(' Ba base, một hình dạng response')
                    ]),
                this.html(`Bdoc2e12_`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Controller biết mình đang ở context nào.')
                ]),
                this.html(`Bdoc2e13_`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`Bdoc2e13_1`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e13_11`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e13_111`, "code", parentElement, {}, (parentElement) => [
                                this.text('WebController')
                            ])
                            ]),
                        this.html(`Bdoc2e13_12`, "span", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc2e13_121`, "code", parentElement, {}, (parentElement) => [
                                this.text('response()')
                            ]),
                            this.text(' tự resolve blade path từ route name; request nào expect JSON thì trả JSON')
                        ]),
                        this.html(`Bdoc2e13_13`, "b", parentElement, {}, (parentElement) => [
                            this.text('web')
                        ])
                    ]),
                    this.html(`Bdoc2e13_2`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e13_21`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e13_211`, "code", parentElement, {}, (parentElement) => [
                                this.text('AdminController')
                            ])
                            ]),
                        this.html(`Bdoc2e13_22`, "span", parentElement, {}, (parentElement) => [
                            this.text('Sẵn index · list · detail · create · edit · trash kèm validation')
                        ]),
                        this.html(`Bdoc2e13_23`, "b", parentElement, {}, (parentElement) => [
                            this.text('admin')
                        ])
                    ]),
                    this.html(`Bdoc2e13_3`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e13_31`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e13_311`, "code", parentElement, {}, (parentElement) => [
                                this.text('ApiController')
                            ])
                            ]),
                        this.html(`Bdoc2e13_32`, "span", parentElement, {}, (parentElement) => [
                            this.text('Bộ '),
                            this.html(`Bdoc2e13_321`, "code", parentElement, {}, (parentElement) => [
                                this.text('jsonSuccess/jsonError/jsonCreated/jsonNotFound/jsonConflict/jsonValidationError')
                            ])
                        ]),
                        this.html(`Bdoc2e13_33`, "b", parentElement, {}, (parentElement) => [
                            this.text('api')
                        ])
                    ])
                    ]),
                this.html(`Bdoc2e14_`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-sub" }] },
                    (parentElement) => [
                    this.text('Hình dạng response API')
                    ]),
                this.include(`Bdoc2c3`, 'web.components.code-window', parentElement, [], (parentElement) => ({
                        "label": "JSON",
                        "title": "ApiResponse",
                        "lang": "json",
                        __ONE_CHILDREN_CONTENT__: (parentElement) => [
                        this.text('{\n    "success": true,\n    "statusCode": 200,\n    "statusText": "ok",\n    "message": "Success",\n    "errors": [],\n    "data": {}\n}')
                    ]
                    })),
                this.html(`Bdoc2e15_`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.text('Cùng một controller phục vụ được cả SSR lẫn SPA: '),
                    this.html(`Bdoc2e15_1`, "code", parentElement, {}, (parentElement) => [
                        this.text('response()')
                    ]),
                    this.text(' nhìn header '),
                    this.html(`Bdoc2e15_2`, "code", parentElement, {}, (parentElement) => [
                        this.text('X-Sao-Response')
                    ]),
                    this.text(' và '),
                    this.html(`Bdoc2e15_3`, "code", parentElement, {}, (parentElement) => [
                        this.text('X-Saola-View-Revision')
                    ]),
                    this.text(' do '),
                    this.html(`Bdoc2e15_4`, "code", parentElement, {}, (parentElement) => [
                        this.text('HttpService')
                    ]),
                    this.text(' tự gắn để quyết định trả HTML hay JSON payload cho view runtime.')
                    ])
                ]),
            this.html(`Bdoc3`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/docs/compiler" } } },
                (parentElement) => [
                this.html(`Bdoc31`, "div", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc311`, "span", parentElement, {}, (parentElement) => [
                        this.text('Tiếp theo')
                    ]),
                    this.html(`Bdoc312`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Compiler & AST')
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
export function WebModulesDocsContexts(__data__ = {}, systemData = {}) {
    return new ContextsView(__data__, systemData);
}
export default WebModulesDocsContexts;