@exec($__ONE_COMPONENT_REGISTRY__ = ['code-window' => 'web.components.code-window']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])>
                <p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>10</span> THAM CHIẾU</p>
                <h1 @class([$__VIEW_ID__ . '-Bdoc112'])>Biến hệ thống.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-Bdoc121'])>Hai nhóm biến khác hẳn nhau: nhóm đường dẫn do context cấp để bạn viết, và nhóm định danh do compiler sinh ra để runtime khớp DOM. Nhầm nhóm là nguồn của phần lớn lỗi khó hiểu.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-Bdoc2', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-Bdoc21', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc211'])>ĐƯỜNG DẪN</span> Context cấp, bạn dùng</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc22'])>Viết đường dẫn view mà không đóng đinh context.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc23'])>Mỗi context tự khai báo thư mục của mình, rồi <code @class([$__VIEW_ID__ . '-Bdoc231'])>ViewContextManager</code> dựng bảng biến tương ứng. Cùng một dòng <code @class([$__VIEW_ID__ . '-Bdoc232'])>&#64;extends(__layout__ + 'base')</code> trỏ tới <code @class([$__VIEW_ID__ . '-Bdoc233'])>web.layouts.base</code> ở context web và <code @class([$__VIEW_ID__ . '-Bdoc234'])>admin.layouts.base</code> ở context admin — bạn không phải viết hai bản.</p>
            <div @class([$__VIEW_ID__ . '-Bdoc24', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc241'])><div @class([$__VIEW_ID__ . '-Bdoc2411', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24111'])>__base__</code></div><span @class([$__VIEW_ID__ . '-Bdoc2412'])>Gốc thư mục view của context đang phục vụ</span><b @class([$__VIEW_ID__ . '-Bdoc2413'])>web.</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc242'])><div @class([$__VIEW_ID__ . '-Bdoc2421', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24211'])>__layout__</code></div><span @class([$__VIEW_ID__ . '-Bdoc2422'])>Thư mục layout — dùng với <code @class([$__VIEW_ID__ . '-Bdoc24221'])>&#64;extends</code></span><b @class([$__VIEW_ID__ . '-Bdoc2423'])>web.layouts.</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc243'])><div @class([$__VIEW_ID__ . '-Bdoc2431', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24311'])>__module__</code></div><span @class([$__VIEW_ID__ . '-Bdoc2432'])>Thư mục module — nơi đặt trang của từng module</span><b @class([$__VIEW_ID__ . '-Bdoc2433'])>web.modules.</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc244'])><div @class([$__VIEW_ID__ . '-Bdoc2441', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24411'])>__component__</code></div><span @class([$__VIEW_ID__ . '-Bdoc2442'])>Component dùng lại — thường đi với <code @class([$__VIEW_ID__ . '-Bdoc24421'])>&#64;import</code></span><b @class([$__VIEW_ID__ . '-Bdoc2443'])>web.components.</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc245'])><div @class([$__VIEW_ID__ . '-Bdoc2451', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24511'])>__partial__</code></div><span @class([$__VIEW_ID__ . '-Bdoc2452'])>Mảnh view nhỏ, không có vòng đời riêng</span><b @class([$__VIEW_ID__ . '-Bdoc2453'])>web.partials.</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc246'])><div @class([$__VIEW_ID__ . '-Bdoc2461', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24611'])>__template__</code></div><span @class([$__VIEW_ID__ . '-Bdoc2462'])>Template dùng chung nhiều nơi</span><b @class([$__VIEW_ID__ . '-Bdoc2463'])>web.templates.</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc247'])><div @class([$__VIEW_ID__ . '-Bdoc2471', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24711'])>__page__</code></div><span @class([$__VIEW_ID__ . '-Bdoc2472'])>Trang tĩnh của context</span><b @class([$__VIEW_ID__ . '-Bdoc2473'])>web.pages.</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc248'])><div @class([$__VIEW_ID__ . '-Bdoc2481', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24811'])>__system__</code></div><span @class([$__VIEW_ID__ . '-Bdoc2482'])>View của chính hệ thống, không đổi theo context</span><b @class([$__VIEW_ID__ . '-Bdoc2483'])>_system.</b></div>
            </div>
            <p @class([$__VIEW_ID__ . '-Bdoc25', 'ov-sub'])>Cách dùng</p>
            @startMarker('component', 'Bdoc2c1')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_0'))
@verbatim
&#64;import(__component__ + 'code-window')
&#64;extends(__layout__ + 'docs')
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_0'))
@include('web.components.code-window', ['label' => "SAO", 'title' => "modules/docs/mask.sao", 'lang' => "html", '__ONE_CHILDREN_CONTENT__' => $__code_window__0_content])
@endMarker('component', 'Bdoc2c1')
            <div @class([$__VIEW_ID__ . '-Bdoc26', 'ov-note'])>
                Giá trị đã có sẵn dấu chấm ở cuối (<code @class([$__VIEW_ID__ . '-Bdoc261'])>web.layouts.</code>) nên nối trực tiếp: <code @class([$__VIEW_ID__ . '-Bdoc262'])>__layout__ + 'docs'</code>, đừng thêm dấu chấm nữa.
            </div>
            <p @class([$__VIEW_ID__ . '-Bdoc27'])>Muốn đổi thư mục, khai báo <code @class([$__VIEW_ID__ . '-Bdoc271'])>directories</code> lúc đăng ký context — bảng biến tự dựng lại theo, mọi view đang dùng biến vẫn đúng.</p>
            @startMarker('component', 'Bdoc2c2')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_1'))
@verbatim
System::context('admin', [
    'prefix' => 'admin',
    'directories' => ['layouts' => 'admin.shells'],
]);
// từ đây __layout__ của context admin là 'admin.shells.'
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__1_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_1'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "ModuleServiceProvider.php", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__1_content])
@endMarker('component', 'Bdoc2c2')

            <p @class([$__VIEW_ID__ . '-Bdoc28', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc281'])>VÒNG LẶP</span> Thứ duy nhất bạn viết</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc29'])><code @class([$__VIEW_ID__ . '-Bdoc291'])>__loop</code> có mặt trong <code @class([$__VIEW_ID__ . '-Bdoc292'])>&#64;foreach</code>.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e10_'])>Đây là biến duy nhất của nhóm này bạn gõ trực tiếp vào <code @class([$__VIEW_ID__ . '-Bdoc2e10_1'])>.sao</code>. Compiler tự map sang <code @class([$__VIEW_ID__ . '-Bdoc2e10_2'])>$loop</code> của Laravel ở nhánh Blade, nên đừng viết <code @class([$__VIEW_ID__ . '-Bdoc2e10_3'])>$loop</code> — phía JavaScript không có biến đó.</p>
            @startMarker('component', 'Bdoc2c3')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_2'))
@verbatim
&#64;foreach(items as item)
    &lt;li&gt;{{ __loop.iteration }}. {{ item['name'] }}&lt;/li&gt;
&#64;endforeach
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__2_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_2'))
@include('web.components.code-window', ['label' => "SAO", 'title' => "Trong template", 'lang' => "html", '__ONE_CHILDREN_CONTENT__' => $__code_window__2_content])
@endMarker('component', 'Bdoc2c3')

            <p @class([$__VIEW_ID__ . '-Bdoc2e11_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e11_1'])>ĐỊNH DANH</span> Compiler sinh, bạn không gõ</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e12_'])>Cùng một tên, hai dạng ở hai đầu ra.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e13_'])><strong @class([$__VIEW_ID__ . '-Bdoc2e13_1'])>Không biến nào dưới đây được viết trong <code @class([$__VIEW_ID__ . '-Bdoc2e13_11'])>.sao</code>.</strong> Chúng chỉ xuất hiện trong file đã biên dịch, và tồn tại để hai nhánh nhận ra cùng một element. Dấu <code @class([$__VIEW_ID__ . '-Bdoc2e13_2'])>$</code> là của PHP nên chỉ có ở nhánh Blade; nhánh JavaScript dùng đúng tên đó nhưng không có <code @class([$__VIEW_ID__ . '-Bdoc2e13_3'])>$</code>.</p>
            <div @class([$__VIEW_ID__ . '-Bdoc2e14_', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e14_1'])><div @class([$__VIEW_ID__ . '-Bdoc2e14_11', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e14_111'])>$__VIEW_ID__</code> · <code @class([$__VIEW_ID__ . '-Bdoc2e14_112'])>__VIEW_ID__</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e14_12'])>Định danh một <em @class([$__VIEW_ID__ . '-Bdoc2e14_121'])>instance</em> view lúc chạy (<code @class([$__VIEW_ID__ . '-Bdoc2e14_122'])>v0</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e14_123'])>v1</code>…). Ghép với id element thành class <code @class([$__VIEW_ID__ . '-Bdoc2e14_124'])>v0-e1</code> để hydrate tìm đúng node.</span><b @class([$__VIEW_ID__ . '-Bdoc2e14_13'])>blade · js</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e14_2'])><div @class([$__VIEW_ID__ . '-Bdoc2e14_21', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e14_211'])>__VIEW_PATH__</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e14_22'])>Đường dẫn view dạng chuỗi, ví dụ <code @class([$__VIEW_ID__ . '-Bdoc2e14_221'])>web.modules.docs.mask</code>. Chỉ có ở nhánh JavaScript, dùng cho registry và ref-count asset.</span><b @class([$__VIEW_ID__ . '-Bdoc2e14_23'])>js</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e14_3'])><div @class([$__VIEW_ID__ . '-Bdoc2e14_31', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e14_311'])>__VIEW_TYPE__</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e14_32'])>Loại view: trang, layout hay component. Cũng chỉ có ở nhánh JavaScript.</span><b @class([$__VIEW_ID__ . '-Bdoc2e14_33'])>js</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e14_4'])><div @class([$__VIEW_ID__ . '-Bdoc2e14_41', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e14_411'])>$__ONE_COMPONENT_REGISTRY__</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e14_42'])>Bảng tên thẻ → đường dẫn, sinh từ <code @class([$__VIEW_ID__ . '-Bdoc2e14_421'])>&#64;import</code> để thẻ tuỳ chỉnh phân giải được.</span><b @class([$__VIEW_ID__ . '-Bdoc2e14_43'])>blade</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e14_5'])><div @class([$__VIEW_ID__ . '-Bdoc2e14_51', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e14_511'])>$__ONE_CHILDREN_CONTENT__</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e14_52'])>Nội dung slot của component. Trong <code @class([$__VIEW_ID__ . '-Bdoc2e14_521'])>.sao</code> bạn viết <code @class([$__VIEW_ID__ . '-Bdoc2e14_522'])>&#64;children</code>; đây là thứ nó biến thành.</span><b @class([$__VIEW_ID__ . '-Bdoc2e14_53'])>blade · js</b></div>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc2e15_', 'ov-note'])>
                Thấy <code @class([$__VIEW_ID__ . '-Bdoc2e15_1'])>$</code> trong một file <code @class([$__VIEW_ID__ . '-Bdoc2e15_2'])>.sao</code> thì chỉ có hai khả năng: đó là mẫu code minh hoạ đầu ra Blade, hoặc file dùng wrapper <code @class([$__VIEW_ID__ . '-Bdoc2e15_3'])>&lt;blade&gt;</code> — dạng legacy được giữ nguyên cú pháp PHP. Template modern không có <code @class([$__VIEW_ID__ . '-Bdoc2e15_4'])>$</code> ở đâu cả.
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc2e16_', 'ov-note'])>
                <code @class([$__VIEW_ID__ . '-Bdoc2e16_1'])>__VIEW_ID__</code> là <strong @class([$__VIEW_ID__ . '-Bdoc2e16_2'])>theo instance</strong>, cấp lúc chạy — nên không bao giờ bake được vào file CSS hay file tĩnh. Cần một định danh ổn định theo view thì dùng class scope mà compiler sinh cho <code @class([$__VIEW_ID__ . '-Bdoc2e16_3'])>&lt;style scoped&gt;</code>, xem <a @class([$__VIEW_ID__ . '-Bdoc2e16_4']) @attr(['href' => '/docs/directives'])>tham chiếu directive</a>.
            </div>
        </div>
    @endblock
