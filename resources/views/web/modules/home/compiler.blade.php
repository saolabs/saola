@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "public")
    @block('content')
        <section @class([$__VIEW_ID__ . '-b4052a35', 'page-hero', 'page-hero-compiler'])>
            <div @class([$__VIEW_ID__ . '-90a6e493'])><p @class([$__VIEW_ID__ . '-f515bf66', 'kicker'])><span @class([$__VIEW_ID__ . '-e2f86203'])>02 / COMPILER</span> Source synchronization</p><h1 @class([$__VIEW_ID__ . '-9b0938cb'])>Một AST.<br @class([$__VIEW_ID__ . '-f7127348'])><em @class([$__VIEW_ID__ . '-d4f4199d'])>Hai output đồng bộ.</em></h1></div>
            <div @class([$__VIEW_ID__ . '-5f82dcd4', 'page-hero-aside'])><p @class([$__VIEW_ID__ . '-70182674'])>Compiler không chỉ đổi syntax. Nó bảo toàn ý nghĩa của view giữa Blade SSR và JavaScript runtime.</p><dl @class([$__VIEW_ID__ . '-87f0a97e'])><div @class([$__VIEW_ID__ . '-8fd0466f'])><dt @class([$__VIEW_ID__ . '-e3488b5f'])>SOURCE</dt><dd @class([$__VIEW_ID__ . '-cf7b0d19'])>component.sao</dd></div><div @class([$__VIEW_ID__ . '-a8712dd1'])><dt @class([$__VIEW_ID__ . '-fc9334e8'])>TARGETS</dt><dd @class([$__VIEW_ID__ . '-647f0f87'])>.blade.php + .js</dd></div></dl></div>
        </section>

        <section @class([$__VIEW_ID__ . '-8aa0772c', 'compiler-board'])>
            <div @class([$__VIEW_ID__ . '-301a68fc', 'code-window', 'source-window'])><div @class([$__VIEW_ID__ . '-63bd05b4', 'window-bar'])><span @class([$__VIEW_ID__ . '-16d4d140'])>SOURCE</span><b @class([$__VIEW_ID__ . '-a58f941f'])>card.sao</b><i @class([$__VIEW_ID__ . '-2a3928ec'])>● ● ●</i></div><pre @class([$__VIEW_ID__ . '-bd54a7b7'])><code @class([$__VIEW_ID__ . '-b8faa7dc'])><span @class([$__VIEW_ID__ . '-1792abd2', 'html-token'])>article class="card"</span>
  <span @class([$__VIEW_ID__ . '-23e68ff8', 'html-token'])>h2</span><span @class([$__VIEW_ID__ . '-2ed2f559', 'mustache-token'])>title</span><span @class([$__VIEW_ID__ . '-b3f8e4b3', 'html-token', 'html-token-close'])>h2</span>
  <span @class([$__VIEW_ID__ . '-cab0d57c', 'directive-token'])>children</span>
<span @class([$__VIEW_ID__ . '-e7438000', 'html-token', 'html-token-close'])>article</span></code></pre></div>
            <div @class([$__VIEW_ID__ . '-7f8af112', 'compile-spine'])><span @class([$__VIEW_ID__ . '-e507d86f'])>PARSE</span><i @class([$__VIEW_ID__ . '-1ad3c6be'])>↓</i><strong @class([$__VIEW_ID__ . '-200498a9'])>AST</strong><i @class([$__VIEW_ID__ . '-77454da5'])>↙ ↘</i><span @class([$__VIEW_ID__ . '-6555bc47'])>GENERATE</span></div>
            <div @class([$__VIEW_ID__ . '-9b976db3', 'target-stack'])>
                <div @class([$__VIEW_ID__ . '-8996a71d', 'code-window'])><div @class([$__VIEW_ID__ . '-49656332', 'window-bar'])><span @class([$__VIEW_ID__ . '-c4acd009'])>SERVER</span><b @class([$__VIEW_ID__ . '-c728543a'])>card.blade.php</b></div><pre @class([$__VIEW_ID__ . '-57dfb464'])><code @class([$__VIEW_ID__ . '-5bdf5eb2'])><span @class([$__VIEW_ID__ . '-deaf2506', 'html-token'])>article class="card"</span>
  <span @class([$__VIEW_ID__ . '-d5dc907c', 'html-token'])>h2</span><span @class([$__VIEW_ID__ . '-df3cb799', 'blade-raw-token'])>$title</span><span @class([$__VIEW_ID__ . '-6706effb', 'html-token', 'html-token-close'])>h2</span>
  <span @class([$__VIEW_ID__ . '-673c3288', 'blade-raw-token'])>$__ONE_CHILDREN_CONTENT__</span>
<span @class([$__VIEW_ID__ . '-2d1965dc', 'html-token', 'html-token-close'])>article</span></code></pre></div>
                <div @class([$__VIEW_ID__ . '-4fff86a6', 'code-window', 'code-window-dark'])><div @class([$__VIEW_ID__ . '-b6704c2a', 'window-bar'])><span @class([$__VIEW_ID__ . '-0c10b263'])>CLIENT</span><b @class([$__VIEW_ID__ . '-ea2d1051'])>Card.js</b></div><pre @class([$__VIEW_ID__ . '-ec147e69'])><code @class([$__VIEW_ID__ . '-e223d5cf'])>return this.wrapper([
  this.html('article', [
    this.output(title),
    this.children()
  ])
]);</code></pre></div>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-6c26f9b7', 'content-grid-section'])>
            <div @class([$__VIEW_ID__ . '-ce6a96bf', 'section-head', 'compact'])><p @class([$__VIEW_ID__ . '-5a71cd5f', 'kicker'])><span @class([$__VIEW_ID__ . '-f1acc65a'])>SEMANTICS</span> Những khái niệm dễ nhầm</p><h2 @class([$__VIEW_ID__ . '-98293aba'])>Include tạo view.<br @class([$__VIEW_ID__ . '-c006637c'])>Children tạo vị trí.</h2></div>
            <div @class([$__VIEW_ID__ . '-d44023e9', 'compare-grid'])>
                <article @class([$__VIEW_ID__ . '-e3e123df'])><span @class([$__VIEW_ID__ . '-5cadfa06'])>INCLUDE</span><h3 @class([$__VIEW_ID__ . '-6efb1915'])>Chọn một view khác</h3><p @class([$__VIEW_ID__ . '-4a13b743'])><code @class([$__VIEW_ID__ . '-de9b6734', 'directive-token'])>include</code> resolve component từ registry, tạo child ViewController và quản lý lifecycle riêng.</p><ul @class([$__VIEW_ID__ . '-1d3eab6b'])><li @class([$__VIEW_ID__ . '-14f29b43'])>Có identity của view</li><li @class([$__VIEW_ID__ . '-93062d03'])>Có data/props riêng</li><li @class([$__VIEW_ID__ . '-f19a282a'])>Có thể lồng include</li></ul></article>
                <article @class([$__VIEW_ID__ . '-04b24ab0'])><span @class([$__VIEW_ID__ . '-2dd4b699'])>CHILDREN</span><h3 @class([$__VIEW_ID__ . '-8d51d8aa'])>Chọn lúc nội dung được render</h3><p @class([$__VIEW_ID__ . '-53b76b5c'])><code @class([$__VIEW_ID__ . '-afefc2c3', 'directive-token'])>children</code> là outlet lazy. Nội dung không bị append trực tiếp; nó chỉ render khi traversal gặp đúng directive.</p><ul @class([$__VIEW_ID__ . '-e8a3c814'])><li @class([$__VIEW_ID__ . '-8527425f'])>Giữ context của caller</li><li @class([$__VIEW_ID__ . '-3c80e8bc'])>Đúng thứ tự DOM</li><li @class([$__VIEW_ID__ . '-422ba7e0'])>Hydrate và rerender cùng contract</li></ul></article>
                <article @class([$__VIEW_ID__ . '-ddf2d3a9'])><span @class([$__VIEW_ID__ . '-8d5d9746'])>ROOT AST</span><h3 @class([$__VIEW_ID__ . '-ad421324'])>View ngoài cùng vẫn là view</h3><p @class([$__VIEW_ID__ . '-71463dd8'])>AST gốc không tự trở thành children. Khi được route hoặc include resolve, nó là một view với wrapper và lifecycle rõ ràng.</p><ul @class([$__VIEW_ID__ . '-b2bb3d8a'])><li @class([$__VIEW_ID__ . '-0cddd143'])>Route có thể mount trực tiếp</li><li @class([$__VIEW_ID__ . '-c5971739'])>Include có thể mount làm con</li><li @class([$__VIEW_ID__ . '-c3b17da1'])>Ownership không nhập nhằng</li></ul></article>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-4e212027', 'directive-section'])>
            <div @class([$__VIEW_ID__ . '-1628defa'])><p @class([$__VIEW_ID__ . '-d621a64b', 'kicker'])><span @class([$__VIEW_ID__ . '-5f6b80a9'])>DIRECTIVE MAP</span> Cùng nghĩa ở cả hai phía</p><h2 @class([$__VIEW_ID__ . '-6560bb1b'])>Template là contract,<br @class([$__VIEW_ID__ . '-c03b5dbb'])>không phải chuỗi HTML.</h2></div>
            <div @class([$__VIEW_ID__ . '-281112e1', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-55399dd9'])><code @class([$__VIEW_ID__ . '-fccaaa32'])><span @class([$__VIEW_ID__ . '-47097878', 'directive-token'])>extends</span></code><span @class([$__VIEW_ID__ . '-a9b4242f'])>Resolve layout chain</span><b @class([$__VIEW_ID__ . '-ff9cd4e9'])>STRUCTURE</b></div>
                <div @class([$__VIEW_ID__ . '-241338ab'])><code @class([$__VIEW_ID__ . '-8f109080'])><span @class([$__VIEW_ID__ . '-4ebdfaf7', 'directive-token'])>block</span> / <span @class([$__VIEW_ID__ . '-b689ed0d', 'directive-token'])>useBlock</span></code><span @class([$__VIEW_ID__ . '-685d2446'])>Đăng ký và mount nội dung vào outlet</span><b @class([$__VIEW_ID__ . '-3917817e'])>COMPOSITION</b></div>
                <div @class([$__VIEW_ID__ . '-6bf3f602'])><code @class([$__VIEW_ID__ . '-66d22e17'])><span @class([$__VIEW_ID__ . '-1d35eb6c', 'directive-token'])>include</span></code><span @class([$__VIEW_ID__ . '-11425ac3'])>Tạo child view theo registry hiện tại</span><b @class([$__VIEW_ID__ . '-8cf9a004'])>VIEW</b></div>
                <div @class([$__VIEW_ID__ . '-ae6ec63d'])><code @class([$__VIEW_ID__ . '-c6d4861a'])><span @class([$__VIEW_ID__ . '-cb5aabd3', 'directive-token'])>children</span></code><span @class([$__VIEW_ID__ . '-55dbf3db'])>Render lazy child content tại vị trí khai báo</span><b @class([$__VIEW_ID__ . '-9a0c736d'])>CONTENT</b></div>
                <div @class([$__VIEW_ID__ . '-b5b5d5cc'])><code @class([$__VIEW_ID__ . '-3ceed0be'])><span @class([$__VIEW_ID__ . '-b5a9dc3e', 'directive-token'])>if</span> / <span @class([$__VIEW_ID__ . '-36bed60d', 'directive-token'])>foreach</span></code><span @class([$__VIEW_ID__ . '-1ecf7fe0'])>Tạo vùng reactive có marker ổn định</span><b @class([$__VIEW_ID__ . '-d2c4a765'])>CONTROL</b></div>
                <div @class([$__VIEW_ID__ . '-123ee555'])><code @class([$__VIEW_ID__ . '-45a212ad'])><span @class([$__VIEW_ID__ . '-35f4f44d', 'directive-token'])>click</span> / <span @class([$__VIEW_ID__ . '-9a37b36b', 'directive-token'])>bind</span></code><span @class([$__VIEW_ID__ . '-0e3230a0'])>Nối event và state dependency</span><b @class([$__VIEW_ID__ . '-0b5d02c3'])>BEHAVIOR</b></div>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-5d5c7d30', 'next-page'])><span @class([$__VIEW_ID__ . '-8a4c2f1f'])>Tiếp theo / 03</span><div @class([$__VIEW_ID__ . '-f94a552a'])><h2 @class([$__VIEW_ID__ . '-5d206b32'])>Output JavaScript tiếp quản DOM ra sao?</h2><a @class([$__VIEW_ID__ . '-3f927566', 'button', 'button-primary']) @attr(['href' => '/runtime'])>Runtime & Hydration <span @class([$__VIEW_ID__ . '-828421ed'])>↗</span></a></div></section>
    @endblock
