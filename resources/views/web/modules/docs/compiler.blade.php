@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <section @class([$__VIEW_ID__ . '-7b338a08', 'page-hero', 'page-hero-compiler'])>
            <div @class([$__VIEW_ID__ . '-3bb16c04'])><p @class([$__VIEW_ID__ . '-f150187b', 'kicker'])><span @class([$__VIEW_ID__ . '-bac94b21'])>02 / COMPILER</span> Source synchronization</p><h1 @class([$__VIEW_ID__ . '-663d8ed0'])>Một AST.<br @class([$__VIEW_ID__ . '-c3c0e3f9'])><em @class([$__VIEW_ID__ . '-27038dbc'])>Hai output đồng bộ.</em></h1></div>
            <div @class([$__VIEW_ID__ . '-57baae1a', 'page-hero-aside'])><p @class([$__VIEW_ID__ . '-8695e14e'])>Compiler không chỉ đổi syntax. Nó bảo toàn ý nghĩa của view giữa Blade SSR và JavaScript runtime.</p><dl @class([$__VIEW_ID__ . '-1f0b28a5'])><div @class([$__VIEW_ID__ . '-da4a7f2f'])><dt @class([$__VIEW_ID__ . '-902aa345'])>SOURCE</dt><dd @class([$__VIEW_ID__ . '-e65d3a6b'])>component.sao</dd></div><div @class([$__VIEW_ID__ . '-e762468d'])><dt @class([$__VIEW_ID__ . '-935f1ffd'])>TARGETS</dt><dd @class([$__VIEW_ID__ . '-df3e6b57'])>.blade.php + .js</dd></div></dl></div>
        </section>

        <section @class([$__VIEW_ID__ . '-05ef4c27', 'compiler-board'])>
            <div @class([$__VIEW_ID__ . '-c9c6be59', 'code-window', 'source-window'])><div @class([$__VIEW_ID__ . '-cf53246e', 'window-bar'])><span @class([$__VIEW_ID__ . '-a7d7e741'])>SOURCE</span><b @class([$__VIEW_ID__ . '-d850f618'])>card.sao</b><i @class([$__VIEW_ID__ . '-3910e1c8'])>● ● ●</i></div><pre @class([$__VIEW_ID__ . '-4a25ca96'])><code @class([$__VIEW_ID__ . '-a2311cff'])><span @class([$__VIEW_ID__ . '-b1da30ce', 'html-token'])>article class="card"</span>
  <span @class([$__VIEW_ID__ . '-0ecc2373', 'html-token'])>h2</span><span @class([$__VIEW_ID__ . '-1599266e', 'mustache-token'])>title</span><span @class([$__VIEW_ID__ . '-da82b095', 'html-token', 'html-token-close'])>h2</span>
  <span @class([$__VIEW_ID__ . '-afbb4fc0', 'directive-token'])>children</span>
<span @class([$__VIEW_ID__ . '-bfbbd688', 'html-token', 'html-token-close'])>article</span></code></pre></div>
            <div @class([$__VIEW_ID__ . '-fbd9a84d', 'compile-spine'])><span @class([$__VIEW_ID__ . '-322ffdfc'])>PARSE</span><i @class([$__VIEW_ID__ . '-03ab72c9'])>↓</i><strong @class([$__VIEW_ID__ . '-ea150c9b'])>AST</strong><i @class([$__VIEW_ID__ . '-306ebbbe'])>↙ ↘</i><span @class([$__VIEW_ID__ . '-7a2aed05'])>GENERATE</span></div>
            <div @class([$__VIEW_ID__ . '-59819623', 'target-stack'])>
                <div @class([$__VIEW_ID__ . '-ce570522', 'code-window'])><div @class([$__VIEW_ID__ . '-1d22ed25', 'window-bar'])><span @class([$__VIEW_ID__ . '-a1813a65'])>SERVER</span><b @class([$__VIEW_ID__ . '-2d98cd15'])>card.blade.php</b></div><pre @class([$__VIEW_ID__ . '-20613ba1'])><code @class([$__VIEW_ID__ . '-4bdba3f6'])><span @class([$__VIEW_ID__ . '-962bee48', 'html-token'])>article class="card"</span>
  <span @class([$__VIEW_ID__ . '-db3e4a54', 'html-token'])>h2</span><span @class([$__VIEW_ID__ . '-62b4ddff', 'mustache-token'])>$title</span><span @class([$__VIEW_ID__ . '-9e9cf50e', 'html-token', 'html-token-close'])>h2</span>
  <span @class([$__VIEW_ID__ . '-18012c1f', 'blade-raw-token'])>$__ONE_CHILDREN_CONTENT__</span>
<span @class([$__VIEW_ID__ . '-2b9b75b4', 'html-token', 'html-token-close'])>article</span></code></pre></div>
                <div @class([$__VIEW_ID__ . '-e6d4f1bf', 'code-window', 'code-window-dark'])><div @class([$__VIEW_ID__ . '-f3b9f04a', 'window-bar'])><span @class([$__VIEW_ID__ . '-0e0eaee9'])>CLIENT</span><b @class([$__VIEW_ID__ . '-20abec46'])>Card.js</b></div><pre @class([$__VIEW_ID__ . '-5a597d38'])><code @class([$__VIEW_ID__ . '-21b589c9'])>return this.wrapper([
  this.html('article', [
    this.output(title),
    this.children()
  ])
]);</code></pre></div>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-9fd19a30', 'content-grid-section'])>
            <div @class([$__VIEW_ID__ . '-849145f1', 'section-head', 'compact'])><p @class([$__VIEW_ID__ . '-0d56026d', 'kicker'])><span @class([$__VIEW_ID__ . '-773a2605'])>SEMANTICS</span> Những khái niệm dễ nhầm</p><h2 @class([$__VIEW_ID__ . '-de7a1e42'])>Include tạo view.<br @class([$__VIEW_ID__ . '-939960ee'])>Children tạo vị trí.</h2></div>
            <div @class([$__VIEW_ID__ . '-97e5628b', 'compare-grid'])>
                <article @class([$__VIEW_ID__ . '-59ebb7c1'])><span @class([$__VIEW_ID__ . '-ce56689b'])>INCLUDE</span><h3 @class([$__VIEW_ID__ . '-274f4f3c'])>Chọn một view khác</h3><p @class([$__VIEW_ID__ . '-88e948c8'])><code @class([$__VIEW_ID__ . '-545adabf', 'directive-token'])>include</code> resolve component từ registry, tạo child ViewController và quản lý lifecycle riêng.</p><ul @class([$__VIEW_ID__ . '-7c9934be'])><li @class([$__VIEW_ID__ . '-80e8b7ea'])>Có identity của view</li><li @class([$__VIEW_ID__ . '-37814186'])>Có data/props riêng</li><li @class([$__VIEW_ID__ . '-bf3683fd'])>Có thể lồng include</li></ul></article>
                <article @class([$__VIEW_ID__ . '-2b89aa0f'])><span @class([$__VIEW_ID__ . '-71347d18'])>CHILDREN</span><h3 @class([$__VIEW_ID__ . '-83b29423'])>Chọn lúc nội dung được render</h3><p @class([$__VIEW_ID__ . '-7e978c41'])><code @class([$__VIEW_ID__ . '-f017825f', 'directive-token'])>children</code> là outlet lazy. Nội dung không bị append trực tiếp; nó chỉ render khi traversal gặp đúng directive.</p><ul @class([$__VIEW_ID__ . '-32dbace3'])><li @class([$__VIEW_ID__ . '-54329a95'])>Giữ context của caller</li><li @class([$__VIEW_ID__ . '-4c13cd3b'])>Đúng thứ tự DOM</li><li @class([$__VIEW_ID__ . '-6246d6f8'])>Hydrate và rerender cùng contract</li></ul></article>
                <article @class([$__VIEW_ID__ . '-62360ed0'])><span @class([$__VIEW_ID__ . '-96441922'])>ROOT AST</span><h3 @class([$__VIEW_ID__ . '-e635f6f7'])>View ngoài cùng vẫn là view</h3><p @class([$__VIEW_ID__ . '-a1f0c4a2'])>AST gốc không tự trở thành children. Khi được route hoặc include resolve, nó là một view với wrapper và lifecycle rõ ràng.</p><ul @class([$__VIEW_ID__ . '-ef7a0cb2'])><li @class([$__VIEW_ID__ . '-7eb3a699'])>Route có thể mount trực tiếp</li><li @class([$__VIEW_ID__ . '-27111a3b'])>Include có thể mount làm con</li><li @class([$__VIEW_ID__ . '-9cd9cab0'])>Ownership không nhập nhằng</li></ul></article>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-e3988c18', 'directive-section'])>
            <div @class([$__VIEW_ID__ . '-6f8acc56'])><p @class([$__VIEW_ID__ . '-6f07ed8c', 'kicker'])><span @class([$__VIEW_ID__ . '-ef468377'])>DIRECTIVE MAP</span> Cùng nghĩa ở cả hai phía</p><h2 @class([$__VIEW_ID__ . '-106b8ee6'])>Template là contract,<br @class([$__VIEW_ID__ . '-f7a02534'])>không phải chuỗi HTML.</h2></div>
            <div @class([$__VIEW_ID__ . '-f0346512', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-cd566459'])><code @class([$__VIEW_ID__ . '-64946eef'])><span @class([$__VIEW_ID__ . '-c0753b7e', 'directive-token'])>extends</span></code><span @class([$__VIEW_ID__ . '-d615376e'])>Resolve layout chain</span><b @class([$__VIEW_ID__ . '-6b7b4680'])>STRUCTURE</b></div>
                <div @class([$__VIEW_ID__ . '-ad9ffbb4'])><code @class([$__VIEW_ID__ . '-dcd53e34'])><span @class([$__VIEW_ID__ . '-5734e588', 'directive-token'])>block</span> / <span @class([$__VIEW_ID__ . '-f902bd90', 'directive-token'])>useBlock</span></code><span @class([$__VIEW_ID__ . '-e1393b0c'])>Đăng ký và mount nội dung vào outlet</span><b @class([$__VIEW_ID__ . '-42aeed4f'])>COMPOSITION</b></div>
                <div @class([$__VIEW_ID__ . '-8be94689'])><code @class([$__VIEW_ID__ . '-b0aa848a'])><span @class([$__VIEW_ID__ . '-abd8c411', 'directive-token'])>include</span></code><span @class([$__VIEW_ID__ . '-fef629a8'])>Tạo child view theo registry hiện tại</span><b @class([$__VIEW_ID__ . '-77fdc513'])>VIEW</b></div>
                <div @class([$__VIEW_ID__ . '-39476d41'])><code @class([$__VIEW_ID__ . '-e81a12a3'])><span @class([$__VIEW_ID__ . '-6e383be7', 'directive-token'])>children</span></code><span @class([$__VIEW_ID__ . '-ecfde18a'])>Render lazy child content tại vị trí khai báo</span><b @class([$__VIEW_ID__ . '-4cd93431'])>CONTENT</b></div>
                <div @class([$__VIEW_ID__ . '-0d913c9b'])><code @class([$__VIEW_ID__ . '-a40d9552'])><span @class([$__VIEW_ID__ . '-667631ce', 'directive-token'])>if</span> / <span @class([$__VIEW_ID__ . '-2bc70747', 'directive-token'])>foreach</span></code><span @class([$__VIEW_ID__ . '-592ba226'])>Tạo vùng reactive có marker ổn định</span><b @class([$__VIEW_ID__ . '-0ea3a518'])>CONTROL</b></div>
                <div @class([$__VIEW_ID__ . '-8a1ce9fd'])><code @class([$__VIEW_ID__ . '-6c7bc0e0'])><span @class([$__VIEW_ID__ . '-550a06b7', 'directive-token'])>click</span> / <span @class([$__VIEW_ID__ . '-a9a873bb', 'directive-token'])>bind</span></code><span @class([$__VIEW_ID__ . '-a7b3a454'])>Nối event và state dependency</span><b @class([$__VIEW_ID__ . '-025136ac'])>BEHAVIOR</b></div>
            </div>
        </section>
        <a @class([$__VIEW_ID__ . '-24b6e3d2', 'doc-next']) @attr(['href' => '/docs/sao-file'])>
            <div @class([$__VIEW_ID__ . '-587d10b8'])><span @class([$__VIEW_ID__ . '-f908d9c5'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-7e647603'])>Cấu trúc file .sao</strong></div>
            <span @class([$__VIEW_ID__ . '-50bb0184', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
