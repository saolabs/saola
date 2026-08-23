@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-ff96f7a7', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-15b892a7'])>
                <p @class([$__VIEW_ID__ . '-ab74559e', 'kicker'])><span @class([$__VIEW_ID__ . '-943e8228'])>02</span> NỀN TẢNG</p>
                <h1 @class([$__VIEW_ID__ . '-9abe25a3'])>Context, module và controller.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-f750a15d', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-2a968179'])>Context là biên giới thật giữa web, admin, api và mobile. Module là đơn vị tổ chức code tự khai báo route của mình. Controller biết mình đang phục vụ context nào.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-e5195f55', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-a805c5cb', 'kicker'])><span @class([$__VIEW_ID__ . '-a3f20685'])>CONTEXT</span> Nhiều mặt tiền, một lõi</p>
            <h2 @class([$__VIEW_ID__ . '-c048d2ef'])>Context là biên giới thật, không phải thư mục.</h2>
            <p @class([$__VIEW_ID__ . '-1c642396'])>Mỗi context có prefix, middleware, permission, thư mục view, registry và bundle JavaScript riêng. Cùng một module có thể phục vụ cả ba mà không trộn route hay asset của nhau.</p>
            <div @class([$__VIEW_ID__ . '-753dcd15', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-9de53a5a'])><div @class([$__VIEW_ID__ . '-565197a0', 'dt-key'])><code @class([$__VIEW_ID__ . '-f8ca00ca'])>web</code></div><span @class([$__VIEW_ID__ . '-082faf6b'])>Website công khai — SSR rồi hydrate thành SPA</span><b @class([$__VIEW_ID__ . '-8117b870'])>prefix /</b></div>
                <div @class([$__VIEW_ID__ . '-c8e71cd3'])><div @class([$__VIEW_ID__ . '-43777599', 'dt-key'])><code @class([$__VIEW_ID__ . '-ac254d87'])>admin</code></div><span @class([$__VIEW_ID__ . '-9467ba30'])>Khu quản trị, middleware <code @class([$__VIEW_ID__ . '-dae24a39'])>auth</code> + <code @class([$__VIEW_ID__ . '-155c90b7'])>permission:admin</code></span><b @class([$__VIEW_ID__ . '-47abd5ae'])>prefix /admin</b></div>
                <div @class([$__VIEW_ID__ . '-e88f763e'])><div @class([$__VIEW_ID__ . '-a6515611', 'dt-key'])><code @class([$__VIEW_ID__ . '-a810d411'])>api</code></div><span @class([$__VIEW_ID__ . '-eaef3113'])>RESTful JSON, không render view</span><b @class([$__VIEW_ID__ . '-4a54cc8d'])>prefix /api</b></div>
                <div @class([$__VIEW_ID__ . '-094adcdf'])><div @class([$__VIEW_ID__ . '-1a29d412', 'dt-key'])><code @class([$__VIEW_ID__ . '-8a43b879'])>mobile</code></div><span @class([$__VIEW_ID__ . '-59ce3274'])>Context thứ tư cho webview/PWA, cùng cơ chế</span><b @class([$__VIEW_ID__ . '-3c958ed6'])>tuỳ cấu hình</b></div>
            </div>
            <p @class([$__VIEW_ID__ . '-259642dc', 'ov-sub'])>Đăng ký context</p>
            <div @class([$__VIEW_ID__ . '-9193afc2', 'code-window'])>
                <div @class([$__VIEW_ID__ . '-78b78df9', 'window-bar'])><span @class([$__VIEW_ID__ . '-25d09cc3'])>PHP</span><b @class([$__VIEW_ID__ . '-031f9d9f'])>app/Providers/ModuleServiceProvider.php</b></div>
                <pre @class([$__VIEW_ID__ . '-3e6275c9'])><code @class([$__VIEW_ID__ . '-1b2b3f64'])><span @class([$__VIEW_ID__ . '-5d2b8152', 'code-line'])>System::context('admin', [</span><span @class([$__VIEW_ID__ . '-a9ae1f3d', 'code-line', 'code-indent-1'])>'prefix' =&gt; 'admin',</span><span @class([$__VIEW_ID__ . '-4c484325', 'code-line', 'code-indent-1'])>'middleware' =&gt; ['web', 'auth', 'permission:admin'],</span><span @class([$__VIEW_ID__ . '-83c80266', 'code-line', 'code-indent-1'])>'permission' =&gt; ['admin'],</span><span @class([$__VIEW_ID__ . '-04ad3a51', 'code-line'])>]);</span></code></pre>
            </div>
            <div @class([$__VIEW_ID__ . '-f84e1dc6', 'ov-note'])>
                Context không chỉ là namespace: <code @class([$__VIEW_ID__ . '-790994b0'])>ViewContextService</code> giữ registry theo request. Worker sống lâu (Octane) không làm rò state của request trước sang request sau.
            </div>

            <p @class([$__VIEW_ID__ . '-b2544d33', 'kicker'])><span @class([$__VIEW_ID__ . '-f8a1f1e7'])>MODULES</span> Đơn vị tổ chức code</p>
            <h2 @class([$__VIEW_ID__ . '-ff399114'])>Module tự khai báo, hệ thống tự tìm.</h2>
            <p @class([$__VIEW_ID__ . '-d6184d28'])>Mỗi thư mục dưới <code @class([$__VIEW_ID__ . '-21b8210a'])>app/Modules/</code> có <code @class([$__VIEW_ID__ . '-0d4f7c5b'])>ModuleServiceProvider.php</code> sẽ được nạp tự động — đệ quy, nên module lồng module vẫn chạy. Không có file danh sách nào phải sửa khi thêm module mới.</p>
            <div @class([$__VIEW_ID__ . '-0afc2ab6', 'ov-grid'])>
                <div @class([$__VIEW_ID__ . '-0dc89c8e', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-85da4ec6'])>Cấu trúc</span>
                    <h3 @class([$__VIEW_ID__ . '-640fc1b7'])>Bên trong một module</h3>
                    <p @class([$__VIEW_ID__ . '-2fce206e'])><code @class([$__VIEW_ID__ . '-3ab33da0'])>Http/Controllers/{Web,Admin,Api}</code> · <code @class([$__VIEW_ID__ . '-2f2842f9'])>Http/Requests</code> · <code @class([$__VIEW_ID__ . '-7ad5e01b'])>Models</code> · <code @class([$__VIEW_ID__ . '-fdced362'])>Repositories</code> · <code @class([$__VIEW_ID__ . '-a365d00a'])>Services</code> · <code @class([$__VIEW_ID__ . '-5ea43863'])>Masks</code>.</p>
                    <p @class([$__VIEW_ID__ . '-81c6d8bc'])>Chỉ tạo thư mục nào thực sự cần — module chỉ có view như <code @class([$__VIEW_ID__ . '-c370c1b3'])>Ping</code> thì chỉ có một controller.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-b77d83ba', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-a649f966'])>Route</span>
                    <h3 @class([$__VIEW_ID__ . '-ca528dac'])>Fluent API theo context</h3>
                    <p @class([$__VIEW_ID__ . '-845d4336'])><code @class([$__VIEW_ID__ . '-175a8924'])>module()</code> nhận slug, prefix và priority; <code @class([$__VIEW_ID__ . '-c3e37935'])>controller()</code>, <code @class([$__VIEW_ID__ . '-2aed9ee9'])>as()</code>, <code @class([$__VIEW_ID__ . '-e17584ae'])>title()</code> rồi <code @class([$__VIEW_ID__ . '-5177612a'])>group()</code> khai báo từng verb.</p>
                    <p @class([$__VIEW_ID__ . '-8778c337'])>Route đăng ký trong <code @class([$__VIEW_ID__ . '-56feda26'])>routes()</code> của module, không dồn vào <code @class([$__VIEW_ID__ . '-ef52a1c9'])>routes/web.php</code>.</p>
                </div>
            </div>
            <div @class([$__VIEW_ID__ . '-d0822472', 'code-window'])>
                <div @class([$__VIEW_ID__ . '-bc7b11a8', 'window-bar'])><span @class([$__VIEW_ID__ . '-718f975d'])>PHP</span><b @class([$__VIEW_ID__ . '-e34367d5'])>app/Modules/Roster/ModuleServiceProvider.php</b></div>
                <pre @class([$__VIEW_ID__ . '-3aa275b8'])><code @class([$__VIEW_ID__ . '-1cbb9e1c'])><span @class([$__VIEW_ID__ . '-72753d12', 'code-line'])>System::context('api')-&gt;module('roster', ['prefix' =&gt; '/roster', 'priority' =&gt; 5])</span><span @class([$__VIEW_ID__ . '-9db2e6e2', 'code-line', 'code-indent-1'])>-&gt;controller(RosterController::class)</span><span @class([$__VIEW_ID__ . '-9d2e5639', 'code-line', 'code-indent-1'])>-&gt;group(function ($module) {</span><span @class([$__VIEW_ID__ . '-75dd94e0', 'code-line', 'code-indent-2'])>$module-&gt;get('/', 'index')-&gt;name('index');</span><span @class([$__VIEW_ID__ . '-c34c953d', 'code-line', 'code-indent-2'])>$module-&gt;post('/', 'store')-&gt;name('store');</span><span @class([$__VIEW_ID__ . '-2a7f4fd7', 'code-line', 'code-indent-2'])>$module-&gt;put('/{uuid}', 'update')-&gt;name('update');</span><span @class([$__VIEW_ID__ . '-52d66215', 'code-line', 'code-indent-2'])>$module-&gt;delete('/{uuid}', 'destroy')-&gt;name('destroy');</span><span @class([$__VIEW_ID__ . '-c72692e1', 'code-line', 'code-indent-1'])>});</span></code></pre>
            </div>

            <p @class([$__VIEW_ID__ . '-925ce00c', 'kicker'])><span @class([$__VIEW_ID__ . '-0b4f1cd2'])>CONTROLLER</span> Ba base, một hình dạng response</p>
            <h2 @class([$__VIEW_ID__ . '-8bc899a5'])>Controller biết mình đang ở context nào.</h2>
            <div @class([$__VIEW_ID__ . '-684ec138', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-1899f763'])><div @class([$__VIEW_ID__ . '-252bf87c', 'dt-key'])><code @class([$__VIEW_ID__ . '-3895f57d'])>WebController</code></div><span @class([$__VIEW_ID__ . '-d4df7935'])><code @class([$__VIEW_ID__ . '-eaa90298'])>response()</code> tự resolve blade path từ route name; request nào expect JSON thì trả JSON</span><b @class([$__VIEW_ID__ . '-bd25cdd6'])>web</b></div>
                <div @class([$__VIEW_ID__ . '-f694d03b'])><div @class([$__VIEW_ID__ . '-a2588853', 'dt-key'])><code @class([$__VIEW_ID__ . '-0f190fb7'])>AdminController</code></div><span @class([$__VIEW_ID__ . '-54295b8f'])>Sẵn index · list · detail · create · edit · trash kèm validation</span><b @class([$__VIEW_ID__ . '-7a243992'])>admin</b></div>
                <div @class([$__VIEW_ID__ . '-b61f9b85'])><div @class([$__VIEW_ID__ . '-598e00a3', 'dt-key'])><code @class([$__VIEW_ID__ . '-ff274407'])>ApiController</code></div><span @class([$__VIEW_ID__ . '-b9bf6131'])>Bộ <code @class([$__VIEW_ID__ . '-9436b5a4'])>jsonSuccess/jsonError/jsonCreated/jsonNotFound/jsonConflict/jsonValidationError</code></span><b @class([$__VIEW_ID__ . '-dfa14c54'])>api</b></div>
            </div>
            <p @class([$__VIEW_ID__ . '-e81f259e', 'ov-sub'])>Hình dạng response API</p>
            <div @class([$__VIEW_ID__ . '-1d953a43', 'code-window'])>
                <div @class([$__VIEW_ID__ . '-109e0ffb', 'window-bar'])><span @class([$__VIEW_ID__ . '-5ee42513'])>JSON</span><b @class([$__VIEW_ID__ . '-e69bdcd8'])>ApiResponse</b></div>
                <pre @class([$__VIEW_ID__ . '-ee97727c'])><code @class([$__VIEW_ID__ . '-a9e8c4fb'])><span @class([$__VIEW_ID__ . '-b5ab53cf', 'code-line'])>{</span><span @class([$__VIEW_ID__ . '-3010f8ee', 'code-line', 'code-indent-1'])>"success": true,</span><span @class([$__VIEW_ID__ . '-ef3dafe9', 'code-line', 'code-indent-1'])>"statusCode": 200,</span><span @class([$__VIEW_ID__ . '-b2c1492b', 'code-line', 'code-indent-1'])>"statusText": "ok",</span><span @class([$__VIEW_ID__ . '-73dc2e9b', 'code-line', 'code-indent-1'])>"message": "Success",</span><span @class([$__VIEW_ID__ . '-2ddf91ca', 'code-line', 'code-indent-1'])>"errors": [],</span><span @class([$__VIEW_ID__ . '-bea42ee6', 'code-line', 'code-indent-1'])>"data": {}</span><span @class([$__VIEW_ID__ . '-2be63795', 'code-line'])>}</span></code></pre>
            </div>
            <div @class([$__VIEW_ID__ . '-a04b6b4b', 'ov-note'])>
                Cùng một controller phục vụ được cả SSR lẫn SPA: <code @class([$__VIEW_ID__ . '-047a8008'])>response()</code> nhìn header <code @class([$__VIEW_ID__ . '-7d453b89'])>X-Sao-Response</code> và <code @class([$__VIEW_ID__ . '-0b552df4'])>X-Saola-View-Revision</code> do <code @class([$__VIEW_ID__ . '-1a2060eb'])>HttpService</code> tự gắn để quyết định trả HTML hay JSON payload cho view runtime.
            </div>
        </div>

        <a @class([$__VIEW_ID__ . '-ceb15976', 'doc-next']) @attr(['href' => '/docs/compiler'])>
            <div @class([$__VIEW_ID__ . '-60f0ac7a'])><span @class([$__VIEW_ID__ . '-b7585c3f'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-8767f8f3'])>Compiler & AST</strong></div>
            <span @class([$__VIEW_ID__ . '-8287de38', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
