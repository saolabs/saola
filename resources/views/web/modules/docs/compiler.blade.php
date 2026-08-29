@exec($__ONE_COMPONENT_REGISTRY__ = ['code-window' => 'web.components.code-window']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <section @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero', 'page-hero-compiler'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])><p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>02 / COMPILER</span> Source synchronization</p><h1 @class([$__VIEW_ID__ . '-Bdoc112'])>Một AST.<br @class([$__VIEW_ID__ . '-Bdoc1121'])><em @class([$__VIEW_ID__ . '-Bdoc1122'])>Hai output đồng bộ.</em></h1></div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])><p @class([$__VIEW_ID__ . '-Bdoc121'])>Compiler không chỉ đổi syntax. Nó bảo toàn ý nghĩa của view giữa Blade SSR và JavaScript runtime.</p><dl @class([$__VIEW_ID__ . '-Bdoc122'])><div @class([$__VIEW_ID__ . '-Bdoc1221'])><dt @class([$__VIEW_ID__ . '-Bdoc12211'])>SOURCE</dt><dd @class([$__VIEW_ID__ . '-Bdoc12212'])>component.sao</dd></div><div @class([$__VIEW_ID__ . '-Bdoc1222'])><dt @class([$__VIEW_ID__ . '-Bdoc12221'])>TARGETS</dt><dd @class([$__VIEW_ID__ . '-Bdoc12222'])>.blade.php + .js</dd></div></dl></div>
        </section>

        <section @class([$__VIEW_ID__ . '-Bdoc2', 'compiler-board'])>
            @startMarker('component', 'Bdoc2c1')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_0'))
@verbatim&lt;article class="card"&gt;
  &lt;h2&gt;{{ title }}&lt;/h2&gt;
  @children
&lt;/article&gt;@endverbatim
@exec($__env->stopSection())
@exec($__code_window__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_0'))
@include('web.components.code-window', ['label' => "SOURCE", 'title' => "card.sao", 'lang' => "html", '__ONE_CHILDREN_CONTENT__' => $__code_window__0_content])
@endMarker('component', 'Bdoc2c1')

            <div @class([$__VIEW_ID__ . '-Bdoc21', 'compile-spine']) @attr(['style' => 'flex-direction: column; min-height: 180px;'])><span @class([$__VIEW_ID__ . '-Bdoc211'])>PARSE</span><i @class([$__VIEW_ID__ . '-Bdoc212'])>↓</i><strong @class([$__VIEW_ID__ . '-Bdoc213'])>AST</strong><i @class([$__VIEW_ID__ . '-Bdoc214']) @attr(['style' => 'letter-spacing: 40px; font-size: 24px; margin-top: 10px;'])>↙ ↘</i><span @class([$__VIEW_ID__ . '-Bdoc215'])>GENERATE</span></div>
            <div @class([$__VIEW_ID__ . '-Bdoc22', 'target-stack']) @attr(['style' => 'grid-template-columns: 1fr 1fr; align-items: stretch;'])>
                @startMarker('component', 'Bdoc22c1')
                @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_1'))
@verbatim&lt;article class="card"&gt;
  &lt;h2&gt;{{ $title }}&lt;/h2&gt;
  {!! $__ONE_CHILDREN_CONTENT__ !!}
&lt;/article&gt;@endverbatim
@exec($__env->stopSection())
@exec($__code_window__1_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_1'))
@include('web.components.code-window', ['label' => "SERVER", 'title' => "card.blade.php", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__1_content])
@endMarker('component', 'Bdoc22c1')

                @startMarker('component', 'Bdoc22c2')
                @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_2'))
@verbatimreturn this.wrapper([
  this.html('article', [
    this.output(title),
    this.children()
  ])
]);@endverbatim
@exec($__env->stopSection())
@exec($__code_window__2_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_2'))
@include('web.components.code-window', ['label' => "CLIENT", 'title' => "Card.js", 'lang' => "js", 'dark' => true, '__ONE_CHILDREN_CONTENT__' => $__code_window__2_content])
@endMarker('component', 'Bdoc22c2')
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-Bdoc3', 'content-grid-section'])>
            <div @class([$__VIEW_ID__ . '-Bdoc31', 'section-head', 'compact'])><p @class([$__VIEW_ID__ . '-Bdoc311', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc3111'])>SEMANTICS</span> Những khái niệm dễ nhầm</p><h2 @class([$__VIEW_ID__ . '-Bdoc312'])>Include tạo view.<br @class([$__VIEW_ID__ . '-Bdoc3121'])>Children tạo vị trí.</h2></div>
            <div @class([$__VIEW_ID__ . '-Bdoc32', 'compare-grid'])>
                <article @class([$__VIEW_ID__ . '-Bdoc321'])><span @class([$__VIEW_ID__ . '-Bdoc3211'])>INCLUDE</span><h3 @class([$__VIEW_ID__ . '-Bdoc3212'])>Chọn một view khác</h3><p @class([$__VIEW_ID__ . '-Bdoc3213'])><code @class([$__VIEW_ID__ . '-Bdoc32131', 'directive-token'])>include</code> resolve component từ registry, tạo child ViewController và quản lý lifecycle riêng.</p><ul @class([$__VIEW_ID__ . '-Bdoc3214'])><li @class([$__VIEW_ID__ . '-Bdoc32141'])>Có identity của view</li><li @class([$__VIEW_ID__ . '-Bdoc32142'])>Có data/props riêng</li><li @class([$__VIEW_ID__ . '-Bdoc32143'])>Có thể lồng include</li></ul></article>
                <article @class([$__VIEW_ID__ . '-Bdoc322'])><span @class([$__VIEW_ID__ . '-Bdoc3221'])>CHILDREN</span><h3 @class([$__VIEW_ID__ . '-Bdoc3222'])>Chọn lúc nội dung được render</h3><p @class([$__VIEW_ID__ . '-Bdoc3223'])><code @class([$__VIEW_ID__ . '-Bdoc32231', 'directive-token'])>children</code> là outlet lazy. Nội dung không bị append trực tiếp; nó chỉ render khi traversal gặp đúng directive.</p><ul @class([$__VIEW_ID__ . '-Bdoc3224'])><li @class([$__VIEW_ID__ . '-Bdoc32241'])>Giữ context của caller</li><li @class([$__VIEW_ID__ . '-Bdoc32242'])>Đúng thứ tự DOM</li><li @class([$__VIEW_ID__ . '-Bdoc32243'])>Hydrate và rerender cùng contract</li></ul></article>
                <article @class([$__VIEW_ID__ . '-Bdoc323'])><span @class([$__VIEW_ID__ . '-Bdoc3231'])>ROOT AST</span><h3 @class([$__VIEW_ID__ . '-Bdoc3232'])>View ngoài cùng vẫn là view</h3><p @class([$__VIEW_ID__ . '-Bdoc3233'])>AST gốc không tự trở thành children. Khi được route hoặc include resolve, nó là một view với wrapper và lifecycle rõ ràng.</p><ul @class([$__VIEW_ID__ . '-Bdoc3234'])><li @class([$__VIEW_ID__ . '-Bdoc32341'])>Route có thể mount trực tiếp</li><li @class([$__VIEW_ID__ . '-Bdoc32342'])>Include có thể mount làm con</li><li @class([$__VIEW_ID__ . '-Bdoc32343'])>Ownership không nhập nhằng</li></ul></article>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-Bdoc4', 'directive-section'])>
            <div @class([$__VIEW_ID__ . '-Bdoc41'])><p @class([$__VIEW_ID__ . '-Bdoc411', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc4111'])>DIRECTIVE MAP</span> Cùng nghĩa ở cả hai phía</p><h2 @class([$__VIEW_ID__ . '-Bdoc412'])>Template là contract,<br @class([$__VIEW_ID__ . '-Bdoc4121'])>không phải chuỗi HTML.</h2></div>
            <div @class([$__VIEW_ID__ . '-Bdoc42', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc421'])><code @class([$__VIEW_ID__ . '-Bdoc4211'])><span @class([$__VIEW_ID__ . '-Bdoc42111', 'directive-token'])>extends</span></code><span @class([$__VIEW_ID__ . '-Bdoc4212'])>Resolve layout chain</span><b @class([$__VIEW_ID__ . '-Bdoc4213'])>STRUCTURE</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc422'])><code @class([$__VIEW_ID__ . '-Bdoc4221'])><span @class([$__VIEW_ID__ . '-Bdoc42211', 'directive-token'])>block</span> / <span @class([$__VIEW_ID__ . '-Bdoc42212', 'directive-token'])>useBlock</span></code><span @class([$__VIEW_ID__ . '-Bdoc4222'])>Đăng ký và mount nội dung vào outlet</span><b @class([$__VIEW_ID__ . '-Bdoc4223'])>COMPOSITION</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc423'])><code @class([$__VIEW_ID__ . '-Bdoc4231'])><span @class([$__VIEW_ID__ . '-Bdoc42311', 'directive-token'])>include</span></code><span @class([$__VIEW_ID__ . '-Bdoc4232'])>Tạo child view theo registry hiện tại</span><b @class([$__VIEW_ID__ . '-Bdoc4233'])>VIEW</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc424'])><code @class([$__VIEW_ID__ . '-Bdoc4241'])><span @class([$__VIEW_ID__ . '-Bdoc42411', 'directive-token'])>children</span></code><span @class([$__VIEW_ID__ . '-Bdoc4242'])>Render lazy child content tại vị trí khai báo</span><b @class([$__VIEW_ID__ . '-Bdoc4243'])>CONTENT</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc425'])><code @class([$__VIEW_ID__ . '-Bdoc4251'])><span @class([$__VIEW_ID__ . '-Bdoc42511', 'directive-token'])>if</span> / <span @class([$__VIEW_ID__ . '-Bdoc42512', 'directive-token'])>foreach</span></code><span @class([$__VIEW_ID__ . '-Bdoc4252'])>Tạo vùng reactive có marker ổn định</span><b @class([$__VIEW_ID__ . '-Bdoc4253'])>CONTROL</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc426'])><code @class([$__VIEW_ID__ . '-Bdoc4261'])><span @class([$__VIEW_ID__ . '-Bdoc42611', 'directive-token'])>click</span> / <span @class([$__VIEW_ID__ . '-Bdoc42612', 'directive-token'])>bind</span></code><span @class([$__VIEW_ID__ . '-Bdoc4262'])>Nối event và state dependency</span><b @class([$__VIEW_ID__ . '-Bdoc4263'])>BEHAVIOR</b></div>
            </div>
        </section>
        <a @class([$__VIEW_ID__ . '-Bdoc5', 'doc-next']) @attr(['href' => '/docs/sao-file'])>
            <div @class([$__VIEW_ID__ . '-Bdoc51'])><span @class([$__VIEW_ID__ . '-Bdoc511'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-Bdoc512'])>Cấu trúc file .sao</strong></div>
            <span @class([$__VIEW_ID__ . '-Bdoc52', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
