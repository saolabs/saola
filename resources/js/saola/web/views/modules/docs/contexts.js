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
            this.html(`ff96f7a7`, "header", parentElement,
                { classes: [{ type: 'static', value: "page-hero" }] },
                (parentElement) => [
                this.html(`15b892a7`, "div", parentElement, {}, (parentElement) => [
                    this.html(`ab74559e`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`943e8228`, "span", parentElement, {}, (parentElement) => [
                            this.text('02')
                        ]),
                        this.text(' NỀN TẢNG')
                        ]),
                    this.html(`9abe25a3`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Context, module và controller.')
                    ])
                ]),
                this.html(`f750a15d`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`2a968179`, "p", parentElement, {}, (parentElement) => [
                        this.text('Context là biên giới thật giữa web, admin, api và mobile. Module là đơn vị tổ chức code tự khai báo route của mình. Controller biết mình đang phục vụ context nào.')
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
                        this.text('CONTEXT')
                    ]),
                    this.text(' Nhiều mặt tiền, một lõi')
                    ]),
                this.html(`c048d2ef`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Context là biên giới thật, không phải thư mục.')
                ]),
                this.html(`1c642396`, "p", parentElement, {}, (parentElement) => [
                    this.text('Mỗi context có prefix, middleware, permission, thư mục view, registry và bundle JavaScript riêng. Cùng một module có thể phục vụ cả ba mà không trộn route hay asset của nhau.')
                ]),
                this.html(`753dcd15`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`9de53a5a`, "div", parentElement, {}, (parentElement) => [
                        this.html(`565197a0`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`f8ca00ca`, "code", parentElement, {}, (parentElement) => [
                                this.text('web')
                            ])
                            ]),
                        this.html(`082faf6b`, "span", parentElement, {}, (parentElement) => [
                            this.text('Website công khai — SSR rồi hydrate thành SPA')
                        ]),
                        this.html(`8117b870`, "b", parentElement, {}, (parentElement) => [
                            this.text('prefix /')
                        ])
                    ]),
                    this.html(`c8e71cd3`, "div", parentElement, {}, (parentElement) => [
                        this.html(`43777599`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`ac254d87`, "code", parentElement, {}, (parentElement) => [
                                this.text('admin')
                            ])
                            ]),
                        this.html(`9467ba30`, "span", parentElement, {}, (parentElement) => [
                            this.text('Khu quản trị, middleware '),
                            this.html(`dae24a39`, "code", parentElement, {}, (parentElement) => [
                                this.text('auth')
                            ]),
                            this.text(' + '),
                            this.html(`155c90b7`, "code", parentElement, {}, (parentElement) => [
                                this.text('permission:admin')
                            ])
                        ]),
                        this.html(`47abd5ae`, "b", parentElement, {}, (parentElement) => [
                            this.text('prefix /admin')
                        ])
                    ]),
                    this.html(`e88f763e`, "div", parentElement, {}, (parentElement) => [
                        this.html(`a6515611`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`a810d411`, "code", parentElement, {}, (parentElement) => [
                                this.text('api')
                            ])
                            ]),
                        this.html(`eaef3113`, "span", parentElement, {}, (parentElement) => [
                            this.text('RESTful JSON, không render view')
                        ]),
                        this.html(`4a54cc8d`, "b", parentElement, {}, (parentElement) => [
                            this.text('prefix /api')
                        ])
                    ]),
                    this.html(`094adcdf`, "div", parentElement, {}, (parentElement) => [
                        this.html(`1a29d412`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`8a43b879`, "code", parentElement, {}, (parentElement) => [
                                this.text('mobile')
                            ])
                            ]),
                        this.html(`59ce3274`, "span", parentElement, {}, (parentElement) => [
                            this.text('Context thứ tư cho webview/PWA, cùng cơ chế')
                        ]),
                        this.html(`3c958ed6`, "b", parentElement, {}, (parentElement) => [
                            this.text('tuỳ cấu hình')
                        ])
                    ])
                    ]),
                this.html(`259642dc`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-sub" }] },
                    (parentElement) => [
                    this.text('Đăng ký context')
                    ]),
                this.html(`9193afc2`, "div", parentElement,
                    { classes: [{ type: 'static', value: "code-window" }] },
                    (parentElement) => [
                    this.html(`78b78df9`, "div", parentElement,
                        { classes: [{ type: 'static', value: "window-bar" }] },
                        (parentElement) => [
                        this.html(`25d09cc3`, "span", parentElement, {}, (parentElement) => [
                            this.text('PHP')
                        ]),
                        this.html(`031f9d9f`, "b", parentElement, {}, (parentElement) => [
                            this.text('app/Providers/ModuleServiceProvider.php')
                        ])
                        ]),
                    this.html(`3e6275c9`, "pre", parentElement, {}, (parentElement) => [
                        this.html(`1b2b3f64`, "code", parentElement, {}, (parentElement) => [
                            this.html(`5d2b8152`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }] },
                                (parentElement) => [
                                this.text('System::context(\'admin\', [')
                                ]),
                            this.html(`a9ae1f3d`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                (parentElement) => [
                                this.text('\'prefix\' => \'admin\',')
                                ]),
                            this.html(`4c484325`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                (parentElement) => [
                                this.text('\'middleware\' => [\'web\', \'auth\', \'permission:admin\'],')
                                ]),
                            this.html(`83c80266`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                (parentElement) => [
                                this.text('\'permission\' => [\'admin\'],')
                                ]),
                            this.html(`04ad3a51`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }] },
                                (parentElement) => [
                                this.text(']);')
                                ])
                        ])
                    ])
                    ]),
                this.html(`f84e1dc6`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.text('Context không chỉ là namespace: '),
                    this.html(`790994b0`, "code", parentElement, {}, (parentElement) => [
                        this.text('ViewContextService')
                    ]),
                    this.text(' giữ registry theo request. Worker sống lâu (Octane) không làm rò state của request trước sang request sau.')
                    ]),
                this.html(`b2544d33`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`f8a1f1e7`, "span", parentElement, {}, (parentElement) => [
                        this.text('MODULES')
                    ]),
                    this.text(' Đơn vị tổ chức code')
                    ]),
                this.html(`ff399114`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Module tự khai báo, hệ thống tự tìm.')
                ]),
                this.html(`d6184d28`, "p", parentElement, {}, (parentElement) => [
                    this.text('Mỗi thư mục dưới '),
                    this.html(`21b8210a`, "code", parentElement, {}, (parentElement) => [
                        this.text('app/Modules/')
                    ]),
                    this.text(' có '),
                    this.html(`0d4f7c5b`, "code", parentElement, {}, (parentElement) => [
                        this.text('ModuleServiceProvider.php')
                    ]),
                    this.text(' sẽ được nạp tự động — đệ quy, nên module lồng module vẫn chạy. Không có file danh sách nào phải sửa khi thêm module mới.')
                ]),
                this.html(`0afc2ab6`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-grid" }] },
                    (parentElement) => [
                    this.html(`0dc89c8e`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`85da4ec6`, "span", parentElement, {}, (parentElement) => [
                            this.text('Cấu trúc')
                        ]),
                        this.html(`640fc1b7`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Bên trong một module')
                        ]),
                        this.html(`2fce206e`, "p", parentElement, {}, (parentElement) => [
                            this.html(`3ab33da0`, "code", parentElement, {}, (parentElement) => [
                                this.text('Http/Controllers/{Web,Admin,Api}')
                            ]),
                            this.text(' · '),
                            this.html(`2f2842f9`, "code", parentElement, {}, (parentElement) => [
                                this.text('Http/Requests')
                            ]),
                            this.text(' · '),
                            this.html(`7ad5e01b`, "code", parentElement, {}, (parentElement) => [
                                this.text('Models')
                            ]),
                            this.text(' · '),
                            this.html(`fdced362`, "code", parentElement, {}, (parentElement) => [
                                this.text('Repositories')
                            ]),
                            this.text(' · '),
                            this.html(`a365d00a`, "code", parentElement, {}, (parentElement) => [
                                this.text('Services')
                            ]),
                            this.text(' · '),
                            this.html(`5ea43863`, "code", parentElement, {}, (parentElement) => [
                                this.text('Masks')
                            ]),
                            this.text('.')
                        ]),
                        this.html(`81c6d8bc`, "p", parentElement, {}, (parentElement) => [
                            this.text('Chỉ tạo thư mục nào thực sự cần — module chỉ có view như '),
                            this.html(`c370c1b3`, "code", parentElement, {}, (parentElement) => [
                                this.text('Ping')
                            ]),
                            this.text(' thì chỉ có một controller.')
                        ])
                        ]),
                    this.html(`b77d83ba`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`a649f966`, "span", parentElement, {}, (parentElement) => [
                            this.text('Route')
                        ]),
                        this.html(`ca528dac`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Fluent API theo context')
                        ]),
                        this.html(`845d4336`, "p", parentElement, {}, (parentElement) => [
                            this.html(`175a8924`, "code", parentElement, {}, (parentElement) => [
                                this.text('module()')
                            ]),
                            this.text(' nhận slug, prefix và priority; '),
                            this.html(`c3e37935`, "code", parentElement, {}, (parentElement) => [
                                this.text('controller()')
                            ]),
                            this.text(', '),
                            this.html(`2aed9ee9`, "code", parentElement, {}, (parentElement) => [
                                this.text('as()')
                            ]),
                            this.text(', '),
                            this.html(`e17584ae`, "code", parentElement, {}, (parentElement) => [
                                this.text('title()')
                            ]),
                            this.text(' rồi '),
                            this.html(`5177612a`, "code", parentElement, {}, (parentElement) => [
                                this.text('group()')
                            ]),
                            this.text(' khai báo từng verb.')
                        ]),
                        this.html(`8778c337`, "p", parentElement, {}, (parentElement) => [
                            this.text('Route đăng ký trong '),
                            this.html(`56feda26`, "code", parentElement, {}, (parentElement) => [
                                this.text('routes()')
                            ]),
                            this.text(' của module, không dồn vào '),
                            this.html(`ef52a1c9`, "code", parentElement, {}, (parentElement) => [
                                this.text('routes/web.php')
                            ]),
                            this.text('.')
                        ])
                        ])
                    ]),
                this.html(`d0822472`, "div", parentElement,
                    { classes: [{ type: 'static', value: "code-window" }] },
                    (parentElement) => [
                    this.html(`bc7b11a8`, "div", parentElement,
                        { classes: [{ type: 'static', value: "window-bar" }] },
                        (parentElement) => [
                        this.html(`718f975d`, "span", parentElement, {}, (parentElement) => [
                            this.text('PHP')
                        ]),
                        this.html(`e34367d5`, "b", parentElement, {}, (parentElement) => [
                            this.text('app/Modules/Roster/ModuleServiceProvider.php')
                        ])
                        ]),
                    this.html(`3aa275b8`, "pre", parentElement, {}, (parentElement) => [
                        this.html(`1cbb9e1c`, "code", parentElement, {}, (parentElement) => [
                            this.html(`72753d12`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }] },
                                (parentElement) => [
                                this.text('System::context(\'api\')->module(\'roster\', [\'prefix\' => \'/roster\', \'priority\' => 5])')
                                ]),
                            this.html(`9db2e6e2`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                (parentElement) => [
                                this.text('->controller(RosterController::class)')
                                ]),
                            this.html(`9d2e5639`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                (parentElement) => [
                                this.text('->group(function ($module) {')
                                ]),
                            this.html(`75dd94e0`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                (parentElement) => [
                                this.text('$module->get(\'/\', \'index\')->name(\'index\');')
                                ]),
                            this.html(`c34c953d`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                (parentElement) => [
                                this.text('$module->post(\'/\', \'store\')->name(\'store\');')
                                ]),
                            this.html(`2a7f4fd7`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                (parentElement) => [
                                this.text('$module->put(\'/{uuid}\', \'update\')->name(\'update\');')
                                ]),
                            this.html(`52d66215`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                (parentElement) => [
                                this.text('$module->delete(\'/{uuid}\', \'destroy\')->name(\'destroy\');')
                                ]),
                            this.html(`c72692e1`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                (parentElement) => [
                                this.text('});')
                                ])
                        ])
                    ])
                    ]),
                this.html(`925ce00c`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`0b4f1cd2`, "span", parentElement, {}, (parentElement) => [
                        this.text('CONTROLLER')
                    ]),
                    this.text(' Ba base, một hình dạng response')
                    ]),
                this.html(`8bc899a5`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Controller biết mình đang ở context nào.')
                ]),
                this.html(`684ec138`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`1899f763`, "div", parentElement, {}, (parentElement) => [
                        this.html(`252bf87c`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`3895f57d`, "code", parentElement, {}, (parentElement) => [
                                this.text('WebController')
                            ])
                            ]),
                        this.html(`d4df7935`, "span", parentElement, {}, (parentElement) => [
                            this.html(`eaa90298`, "code", parentElement, {}, (parentElement) => [
                                this.text('response()')
                            ]),
                            this.text(' tự resolve blade path từ route name; request nào expect JSON thì trả JSON')
                        ]),
                        this.html(`bd25cdd6`, "b", parentElement, {}, (parentElement) => [
                            this.text('web')
                        ])
                    ]),
                    this.html(`f694d03b`, "div", parentElement, {}, (parentElement) => [
                        this.html(`a2588853`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`0f190fb7`, "code", parentElement, {}, (parentElement) => [
                                this.text('AdminController')
                            ])
                            ]),
                        this.html(`54295b8f`, "span", parentElement, {}, (parentElement) => [
                            this.text('Sẵn index · list · detail · create · edit · trash kèm validation')
                        ]),
                        this.html(`7a243992`, "b", parentElement, {}, (parentElement) => [
                            this.text('admin')
                        ])
                    ]),
                    this.html(`b61f9b85`, "div", parentElement, {}, (parentElement) => [
                        this.html(`598e00a3`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`ff274407`, "code", parentElement, {}, (parentElement) => [
                                this.text('ApiController')
                            ])
                            ]),
                        this.html(`b9bf6131`, "span", parentElement, {}, (parentElement) => [
                            this.text('Bộ '),
                            this.html(`9436b5a4`, "code", parentElement, {}, (parentElement) => [
                                this.text('jsonSuccess/jsonError/jsonCreated/jsonNotFound/jsonConflict/jsonValidationError')
                            ])
                        ]),
                        this.html(`dfa14c54`, "b", parentElement, {}, (parentElement) => [
                            this.text('api')
                        ])
                    ])
                    ]),
                this.html(`e81f259e`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-sub" }] },
                    (parentElement) => [
                    this.text('Hình dạng response API')
                    ]),
                this.html(`1d953a43`, "div", parentElement,
                    { classes: [{ type: 'static', value: "code-window" }] },
                    (parentElement) => [
                    this.html(`109e0ffb`, "div", parentElement,
                        { classes: [{ type: 'static', value: "window-bar" }] },
                        (parentElement) => [
                        this.html(`5ee42513`, "span", parentElement, {}, (parentElement) => [
                            this.text('JSON')
                        ]),
                        this.html(`e69bdcd8`, "b", parentElement, {}, (parentElement) => [
                            this.text('ApiResponse')
                        ])
                        ]),
                    this.html(`ee97727c`, "pre", parentElement, {}, (parentElement) => [
                        this.html(`a9e8c4fb`, "code", parentElement, {}, (parentElement) => [
                            this.html(`b5ab53cf`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }] },
                                (parentElement) => [
                                this.text('{')
                                ]),
                            this.html(`3010f8ee`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                (parentElement) => [
                                this.text('"success": true,')
                                ]),
                            this.html(`ef3dafe9`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                (parentElement) => [
                                this.text('"statusCode": 200,')
                                ]),
                            this.html(`b2c1492b`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                (parentElement) => [
                                this.text('"statusText": "ok",')
                                ]),
                            this.html(`73dc2e9b`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                (parentElement) => [
                                this.text('"message": "Success",')
                                ]),
                            this.html(`2ddf91ca`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                (parentElement) => [
                                this.text('"errors": [],')
                                ]),
                            this.html(`bea42ee6`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                (parentElement) => [
                                this.text('"data": {}')
                                ]),
                            this.html(`2be63795`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }] },
                                (parentElement) => [
                                this.text('}')
                                ])
                        ])
                    ])
                    ]),
                this.html(`a04b6b4b`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.text('Cùng một controller phục vụ được cả SSR lẫn SPA: '),
                    this.html(`047a8008`, "code", parentElement, {}, (parentElement) => [
                        this.text('response()')
                    ]),
                    this.text(' nhìn header '),
                    this.html(`7d453b89`, "code", parentElement, {}, (parentElement) => [
                        this.text('X-Sao-Response')
                    ]),
                    this.text(' và '),
                    this.html(`0b552df4`, "code", parentElement, {}, (parentElement) => [
                        this.text('X-Saola-View-Revision')
                    ]),
                    this.text(' do '),
                    this.html(`1a2060eb`, "code", parentElement, {}, (parentElement) => [
                        this.text('HttpService')
                    ]),
                    this.text(' tự gắn để quyết định trả HTML hay JSON payload cho view runtime.')
                    ])
                ]),
            this.html(`ceb15976`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/docs/compiler" } } },
                (parentElement) => [
                this.html(`60f0ac7a`, "div", parentElement, {}, (parentElement) => [
                    this.html(`b7585c3f`, "span", parentElement, {}, (parentElement) => [
                        this.text('Tiếp theo')
                    ]),
                    this.html(`8767f8f3`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Compiler & AST')
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
export function WebModulesDocsContexts(__data__ = {}, systemData = {}) {
    return new ContextsView(__data__, systemData);
}
export default WebModulesDocsContexts;
