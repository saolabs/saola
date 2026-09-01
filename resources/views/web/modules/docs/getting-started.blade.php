@exec($__ONE_COMPONENT_REGISTRY__ = ['code-block' => 'web.components.code-block']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <section @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero', 'page-hero-start'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])><p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>04 / GETTING STARTED</span> Từ route đầu tiên</p><h1 @class([$__VIEW_ID__ . '-Bdoc112'])>Giữ cách Laravel nghĩ.<br @class([$__VIEW_ID__ . '-Bdoc1121'])><em @class([$__VIEW_ID__ . '-Bdoc1122'])>Thêm cách SPA chạy.</em></h1></div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])><p @class([$__VIEW_ID__ . '-Bdoc121'])>Bắt đầu từ module, route và controller quen thuộc; Saola thêm view source và pipeline biên dịch phía trên chúng.</p><dl @class([$__VIEW_ID__ . '-Bdoc122'])><div @class([$__VIEW_ID__ . '-Bdoc1221'])><dt @class([$__VIEW_ID__ . '-Bdoc12211'])>TIME TO MODEL</dt><dd @class([$__VIEW_ID__ . '-Bdoc12212'])>5 bước</dd></div><div @class([$__VIEW_ID__ . '-Bdoc1222'])><dt @class([$__VIEW_ID__ . '-Bdoc12221'])>REQUIRES</dt><dd @class([$__VIEW_ID__ . '-Bdoc12222'])>PHP 8.3+ và Node.js</dd></div></dl></div>
        </section>

        <section @class([$__VIEW_ID__ . '-Bdoc2', 'start-layout'])>
            <aside @class([$__VIEW_ID__ . '-Bdoc21'])><span @class([$__VIEW_ID__ . '-Bdoc211'])>TRÊN TRANG NÀY</span><a @class([$__VIEW_ID__ . '-Bdoc212']) @attr(['href' => '#install'])>00 / Cài đặt</a><a @class([$__VIEW_ID__ . '-Bdoc213']) @attr(['href' => '#module'])>01 / Module</a><a @class([$__VIEW_ID__ . '-Bdoc214']) @attr(['href' => '#view'])>02 / View</a><a @class([$__VIEW_ID__ . '-Bdoc215']) @attr(['href' => '#compile'])>03 / Compile</a><a @class([$__VIEW_ID__ . '-Bdoc216']) @attr(['href' => '#verify'])>04 / Verify</a></aside>
            <div @class([$__VIEW_ID__ . '-Bdoc22', 'start-steps'])>
                <article @class([$__VIEW_ID__ . '-Bdoc221']) @attr(['id' => 'install'])><span @class([$__VIEW_ID__ . '-Bdoc2211'])>00</span><div @class([$__VIEW_ID__ . '-Bdoc2212'])><p @class([$__VIEW_ID__ . '-Bdoc22121', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc221211'])>INSTALL</span> Hai trình quản lý gói</p><h2 @class([$__VIEW_ID__ . '-Bdoc22122'])>Compiler qua Composer, builder qua npm.</h2><p @class([$__VIEW_ID__ . '-Bdoc22123'])>Trình biên dịch là package PHP nên đi bằng Composer; lớp điều phối build là package Node nên đi bằng npm. Composer tạo <code @class([$__VIEW_ID__ . '-Bdoc221231'])>vendor/bin/saoc</code> và builder tự dò tới đó — không cần cấu hình gì thêm.</p>
                    @startMarker('component', 'Bdoc2212c1')
                    @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_0'))
@verbatim
composer require saola/core saola/compiler
npm install --save-dev @saolabs/builder
npm install @saolabs/client
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_0'))
@include('web.components.code-block', ['lang' => "bash", '__ONE_CHILDREN_CONTENT__' => $__code_block__0_content])
@endMarker('component', 'Bdoc2212c1')
                    <p @class([$__VIEW_ID__ . '-Bdoc22124'])>Muốn trỏ tới bản khác thì đặt <code @class([$__VIEW_ID__ . '-Bdoc221241'])>SAOLA_PHP_COMPILER</code> (đường dẫn tới <code @class([$__VIEW_ID__ . '-Bdoc221242'])>saoc</code>) hoặc <code @class([$__VIEW_ID__ . '-Bdoc221243'])>SAOLA_PHP_BINARY</code> (chọn bản PHP).</p>
                </div></article>
                <article @class([$__VIEW_ID__ . '-Bdoc222']) @attr(['id' => 'module'])><span @class([$__VIEW_ID__ . '-Bdoc2221'])>01</span><div @class([$__VIEW_ID__ . '-Bdoc2222'])><p @class([$__VIEW_ID__ . '-Bdoc22221', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc222211'])>ROUTE</span> Module first</p><h2 @class([$__VIEW_ID__ . '-Bdoc22222'])>Khai báo route trong context.</h2><p @class([$__VIEW_ID__ . '-Bdoc22223'])>Module giữ controller, service và route gần nhau. Context quyết định registry và asset bundle nào phục vụ request.</p>
                    @startMarker('component', 'Bdoc2222c1')
                    @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_1'))
@verbatim
System::context('web')
    -&gt;module('home', ['prefix' =&gt; '/'])
    -&gt;controller(HomeController::class)
    -&gt;group(function ($module) {
        $module-&gt;get('/', 'index')-&gt;name('index');
    });
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__1_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_1'))
@include('web.components.code-block', ['lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_block__1_content])
@endMarker('component', 'Bdoc2222c1')
                </div></article>
                <article @class([$__VIEW_ID__ . '-Bdoc223']) @attr(['id' => 'view'])><span @class([$__VIEW_ID__ . '-Bdoc2231'])>02</span><div @class([$__VIEW_ID__ . '-Bdoc2232'])><p @class([$__VIEW_ID__ . '-Bdoc22321', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc223211'])>VIEW</span> One source</p><h2 @class([$__VIEW_ID__ . '-Bdoc22322'])>Tạo view <code @class([$__VIEW_ID__ . '-Bdoc223221'])>.sao</code>.</h2><p @class([$__VIEW_ID__ . '-Bdoc22323'])>Template có thể extends layout, điền block, khai báo state và gắn event. Compiler dùng cùng nguồn để tạo Blade và JavaScript.</p>
                    @startMarker('component', 'Bdoc2232c1')
                    @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_2'))
@verbatim
&#64;states({ count: 0 })

&lt;template&gt;
    &#64;extends(__layout__ + "public")
    &#64;block('content')
        &lt;button &#64;click(setCount(count + 1))&gt;
            Count: {{ count }}
        &lt;/button&gt;
    &#64;endblock
&lt;/template&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__2_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_2'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__2_content])
@endMarker('component', 'Bdoc2232c1')
                </div></article>
                <article @class([$__VIEW_ID__ . '-Bdoc224']) @attr(['id' => 'compile'])><span @class([$__VIEW_ID__ . '-Bdoc2241'])>03</span><div @class([$__VIEW_ID__ . '-Bdoc2242'])><p @class([$__VIEW_ID__ . '-Bdoc22421', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc224211'])>BUILD</span> Dual output</p><h2 @class([$__VIEW_ID__ . '-Bdoc22422'])>Compile đúng context.</h2><p @class([$__VIEW_ID__ . '-Bdoc22423'])>Build tạo Blade view, JavaScript view registry và bundle client tương ứng. Watch mode giữ hai output đồng bộ trong lúc phát triển.</p>
                    @startMarker('component', 'Bdoc2242c1')
                    @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_3'))
@verbatim
npm run build:views:web
npm run build:web

# development
npm run dev:web
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__3_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_3'))
@include('web.components.code-block', ['lang' => "bash", '__ONE_CHILDREN_CONTENT__' => $__code_block__3_content])
@endMarker('component', 'Bdoc2242c1')
                </div></article>
                <article @class([$__VIEW_ID__ . '-Bdoc225']) @attr(['id' => 'verify'])><span @class([$__VIEW_ID__ . '-Bdoc2251'])>04</span><div @class([$__VIEW_ID__ . '-Bdoc2252'])><p @class([$__VIEW_ID__ . '-Bdoc22521', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc225211'])>VERIFY</span> Both paths</p><h2 @class([$__VIEW_ID__ . '-Bdoc22522'])>Kiểm tra SSR lẫn SPA.</h2><p @class([$__VIEW_ID__ . '-Bdoc22523'])>Tải trực tiếp URL để xác nhận HTML đầu tiên, sau đó điều hướng nội bộ, tương tác state, back/forward và kiểm tra không có listener trùng.</p><ul @class([$__VIEW_ID__ . '-Bdoc22524', 'check-list'])><li @class([$__VIEW_ID__ . '-Bdoc225241'])>View có nội dung khi JavaScript chưa chạy</li><li @class([$__VIEW_ID__ . '-Bdoc225242'])>Hydration không tạo DOM hoặc event lần hai</li><li @class([$__VIEW_ID__ . '-Bdoc225243'])>Route context đúng với web/admin/mobile</li><li @class([$__VIEW_ID__ . '-Bdoc225244'])>Rerender chỉ thay vùng reactive liên quan</li></ul></div></article>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-Bdoc3', 'start-cta'])><div @class([$__VIEW_ID__ . '-Bdoc31'])><p @class([$__VIEW_ID__ . '-Bdoc311', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc3111'])>WORKING FIXTURE</span> Đừng chỉ đọc sơ đồ</p><h2 @class([$__VIEW_ID__ . '-Bdoc312'])>Xem state và navigation<br @class([$__VIEW_ID__ . '-Bdoc3121'])>trên một view đang chạy.</h2></div><a @class([$__VIEW_ID__ . '-Bdoc32', 'button', 'button-light']) @attr(['href' => '/todo-list'])>Mở Todo demo <span @class([$__VIEW_ID__ . '-Bdoc321'])>↗</span></a></section>
        <a @class([$__VIEW_ID__ . '-Bdoc4', 'doc-next']) @attr(['href' => '/docs/architecture'])>
            <div @class([$__VIEW_ID__ . '-Bdoc41'])><span @class([$__VIEW_ID__ . '-Bdoc411'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-Bdoc412'])>Kiến trúc hệ thống</strong></div>
            <span @class([$__VIEW_ID__ . '-Bdoc42', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
