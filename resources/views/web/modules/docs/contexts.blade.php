@exec($__ONE_COMPONENT_REGISTRY__ = ['code-window' => 'web.components.code-window']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])>
                <p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>02</span> NỀN TẢNG</p>
                <h1 @class([$__VIEW_ID__ . '-Bdoc112'])>Context, module và controller.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-Bdoc121'])>Context là biên giới thật giữa web, admin, api và mobile. Module là đơn vị tổ chức code tự khai báo route của mình. Controller biết mình đang phục vụ context nào.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-Bdoc2', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-Bdoc21', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc211'])>CONTEXT</span> Nhiều mặt tiền, một lõi</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc22'])>Context là biên giới thật, không phải thư mục.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc23'])>Mỗi context có prefix, middleware, permission, thư mục view, registry và bundle JavaScript riêng. Cùng một module có thể phục vụ cả ba mà không trộn route hay asset của nhau.</p>
            <div @class([$__VIEW_ID__ . '-Bdoc24', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc241'])><div @class([$__VIEW_ID__ . '-Bdoc2411', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24111'])>web</code></div><span @class([$__VIEW_ID__ . '-Bdoc2412'])>Website công khai — SSR rồi hydrate thành SPA</span><b @class([$__VIEW_ID__ . '-Bdoc2413'])>prefix /</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc242'])><div @class([$__VIEW_ID__ . '-Bdoc2421', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24211'])>admin</code></div><span @class([$__VIEW_ID__ . '-Bdoc2422'])>Khu quản trị, middleware <code @class([$__VIEW_ID__ . '-Bdoc24221'])>auth</code> + <code @class([$__VIEW_ID__ . '-Bdoc24222'])>permission:admin</code></span><b @class([$__VIEW_ID__ . '-Bdoc2423'])>prefix /admin</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc243'])><div @class([$__VIEW_ID__ . '-Bdoc2431', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24311'])>api</code></div><span @class([$__VIEW_ID__ . '-Bdoc2432'])>RESTful JSON, không render view</span><b @class([$__VIEW_ID__ . '-Bdoc2433'])>prefix /api</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc244'])><div @class([$__VIEW_ID__ . '-Bdoc2441', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24411'])>mobile</code></div><span @class([$__VIEW_ID__ . '-Bdoc2442'])>Context thứ tư cho webview/PWA, cùng cơ chế</span><b @class([$__VIEW_ID__ . '-Bdoc2443'])>tuỳ cấu hình</b></div>
            </div>
            <p @class([$__VIEW_ID__ . '-Bdoc25', 'ov-sub'])>Đăng ký context</p>
            @startMarker('component', 'Bdoc2c1')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_0'))
@verbatim
System::context('admin', [
    'prefix' => 'admin',
    'middleware' => ['web', 'auth', 'permission:admin'],
    'permission' => ['admin'],
]);
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_0'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "app/Providers/ModuleServiceProvider.php", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__0_content])
@endMarker('component', 'Bdoc2c1')
            <div @class([$__VIEW_ID__ . '-Bdoc26', 'ov-note'])>
                Context không chỉ là namespace: <code @class([$__VIEW_ID__ . '-Bdoc261'])>ViewContextService</code> giữ registry theo request. Worker sống lâu (Octane) không làm rò state của request trước sang request sau.
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc27', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc271'])>MODULES</span> Đơn vị tổ chức code</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc28'])>Module tự khai báo, hệ thống tự tìm.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc29'])>Mỗi thư mục dưới <code @class([$__VIEW_ID__ . '-Bdoc291'])>app/Modules/</code> có <code @class([$__VIEW_ID__ . '-Bdoc292'])>ModuleServiceProvider.php</code> sẽ được nạp tự động — đệ quy, nên module lồng module vẫn chạy. Không có file danh sách nào phải sửa khi thêm module mới.</p>
            <div @class([$__VIEW_ID__ . '-Bdoc2e10_', 'ov-grid'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e10_1', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e10_11'])>Cấu trúc</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e10_12'])>Bên trong một module</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e10_13'])><code @class([$__VIEW_ID__ . '-Bdoc2e10_131'])>Http/Controllers/{Web,Admin,Api}</code> · <code @class([$__VIEW_ID__ . '-Bdoc2e10_132'])>Http/Requests</code> · <code @class([$__VIEW_ID__ . '-Bdoc2e10_133'])>Models</code> · <code @class([$__VIEW_ID__ . '-Bdoc2e10_134'])>Repositories</code> · <code @class([$__VIEW_ID__ . '-Bdoc2e10_135'])>Services</code> · <code @class([$__VIEW_ID__ . '-Bdoc2e10_136'])>Masks</code>.</p>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e10_14'])>Chỉ tạo thư mục nào thực sự cần — module chỉ có view như <code @class([$__VIEW_ID__ . '-Bdoc2e10_141'])>Ping</code> thì chỉ có một controller.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e10_2', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e10_21'])>Route</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e10_22'])>Fluent API theo context</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e10_23'])><code @class([$__VIEW_ID__ . '-Bdoc2e10_231'])>module()</code> nhận slug, prefix và priority; <code @class([$__VIEW_ID__ . '-Bdoc2e10_232'])>controller()</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e10_233'])>as()</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e10_234'])>title()</code> rồi <code @class([$__VIEW_ID__ . '-Bdoc2e10_235'])>group()</code> khai báo từng verb.</p>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e10_24'])>Route đăng ký trong <code @class([$__VIEW_ID__ . '-Bdoc2e10_241'])>routes()</code> của module, không dồn vào <code @class([$__VIEW_ID__ . '-Bdoc2e10_242'])>routes/web.php</code>.</p>
                </div>
            </div>
            @startMarker('component', 'Bdoc2c2')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_1'))
@verbatim
System::context('api')->module('roster', ['prefix' => '/roster', 'priority' => 5])
    ->controller(RosterController::class)
    ->group(function ($module) {
        $module->get('/', 'index')->name('index');
        $module->post('/', 'store')->name('store');
        $module->put('/{uuid}', 'update')->name('update');
        $module->delete('/{uuid}', 'destroy')->name('destroy');
    });
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__1_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_1'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "app/Modules/Roster/ModuleServiceProvider.php", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__1_content])
@endMarker('component', 'Bdoc2c2')

            <p @class([$__VIEW_ID__ . '-Bdoc2e11_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e11_1'])>CONTROLLER</span> Ba base, một hình dạng response</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e12_'])>Controller biết mình đang ở context nào.</h2>
            <div @class([$__VIEW_ID__ . '-Bdoc2e13_', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e13_1'])><div @class([$__VIEW_ID__ . '-Bdoc2e13_11', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e13_111'])>WebController</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e13_12'])><code @class([$__VIEW_ID__ . '-Bdoc2e13_121'])>response()</code> tự resolve blade path từ route name; request nào expect JSON thì trả JSON</span><b @class([$__VIEW_ID__ . '-Bdoc2e13_13'])>web</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e13_2'])><div @class([$__VIEW_ID__ . '-Bdoc2e13_21', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e13_211'])>AdminController</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e13_22'])>Sẵn index · list · detail · create · edit · trash kèm validation</span><b @class([$__VIEW_ID__ . '-Bdoc2e13_23'])>admin</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e13_3'])><div @class([$__VIEW_ID__ . '-Bdoc2e13_31', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e13_311'])>ApiController</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e13_32'])>Bộ <code @class([$__VIEW_ID__ . '-Bdoc2e13_321'])>jsonSuccess/jsonError/jsonCreated/jsonNotFound/jsonConflict/jsonValidationError</code></span><b @class([$__VIEW_ID__ . '-Bdoc2e13_33'])>api</b></div>
            </div>
            <p @class([$__VIEW_ID__ . '-Bdoc2e14_', 'ov-sub'])>Hình dạng response API</p>
            @startMarker('component', 'Bdoc2c3')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_2'))
@verbatim
{
    "success": true,
    "statusCode": 200,
    "statusText": "ok",
    "message": "Success",
    "errors": [],
    "data": {}
}
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__2_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_2'))
@include('web.components.code-window', ['label' => "JSON", 'title' => "ApiResponse", 'lang' => "json", '__ONE_CHILDREN_CONTENT__' => $__code_window__2_content])
@endMarker('component', 'Bdoc2c3')
            <div @class([$__VIEW_ID__ . '-Bdoc2e15_', 'ov-note'])>
                Cùng một controller phục vụ được cả SSR lẫn SPA: <code @class([$__VIEW_ID__ . '-Bdoc2e15_1'])>response()</code> nhìn header <code @class([$__VIEW_ID__ . '-Bdoc2e15_2'])>X-Sao-Response</code> và <code @class([$__VIEW_ID__ . '-Bdoc2e15_3'])>X-Saola-View-Revision</code> do <code @class([$__VIEW_ID__ . '-Bdoc2e15_4'])>HttpService</code> tự gắn để quyết định trả HTML hay JSON payload cho view runtime.
            </div>
        </div>

        <a @class([$__VIEW_ID__ . '-Bdoc3', 'doc-next']) @attr(['href' => '/docs/compiler'])>
            <div @class([$__VIEW_ID__ . '-Bdoc31'])><span @class([$__VIEW_ID__ . '-Bdoc311'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-Bdoc312'])>Compiler & AST</strong></div>
            <span @class([$__VIEW_ID__ . '-Bdoc32', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
