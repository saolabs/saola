@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "public")
    @block('content')
        <section @class([$__VIEW_ID__ . '-b4052a35', 'page-hero', 'page-hero-architecture'])>
            <div @class([$__VIEW_ID__ . '-90a6e493'])>
                <p @class([$__VIEW_ID__ . '-f515bf66', 'kicker'])><span @class([$__VIEW_ID__ . '-e2f86203'])>01 / ARCHITECTURE</span> Toàn cảnh hệ sinh thái</p>
                <h1 @class([$__VIEW_ID__ . '-9b0938cb'])>Laravel ở lõi.<br @class([$__VIEW_ID__ . '-f7127348'])><em @class([$__VIEW_ID__ . '-d4f4199d'])>SPA ở trải nghiệm.</em></h1>
            </div>
            <div @class([$__VIEW_ID__ . '-5f82dcd4', 'page-hero-aside'])><p @class([$__VIEW_ID__ . '-70182674'])>Saola là một chuỗi contract từ request tới DOM, không phải một frontend framework đặt cạnh Laravel.</p><dl @class([$__VIEW_ID__ . '-87f0a97e'])><div @class([$__VIEW_ID__ . '-8fd0466f'])><dt @class([$__VIEW_ID__ . '-e3488b5f'])>INPUT</dt><dd @class([$__VIEW_ID__ . '-cf7b0d19'])>Route + context + data</dd></div><div @class([$__VIEW_ID__ . '-a8712dd1'])><dt @class([$__VIEW_ID__ . '-fc9334e8'])>OUTPUT</dt><dd @class([$__VIEW_ID__ . '-647f0f87'])>SSR → hydrate → SPA</dd></div></dl></div>
        </section>

        <section @class([$__VIEW_ID__ . '-8aa0772c', 'stack-section'])>
            <div @class([$__VIEW_ID__ . '-301a68fc', 'section-index'])><span @class([$__VIEW_ID__ . '-a8c2239f'])>01</span><p @class([$__VIEW_ID__ . '-2e4e3d1a'])>Bốn lớp<br @class([$__VIEW_ID__ . '-99fbdc6e'])>một luồng</p></div>
            <div @class([$__VIEW_ID__ . '-7f8af112', 'stack-diagram'])>
                <article @class([$__VIEW_ID__ . '-1f6b5560'])><span @class([$__VIEW_ID__ . '-47d8cb11'])>APPLICATION</span><strong @class([$__VIEW_ID__ . '-4bfffa65'])>Modules & contexts</strong><p @class([$__VIEW_ID__ . '-e4e4138f'])>Web, admin và mobile tổ chức route, controller, view theo cùng một mô hình module.</p><i @class([$__VIEW_ID__ . '-8af1b554'])>04</i></article>
                <article @class([$__VIEW_ID__ . '-e6209cd3'])><span @class([$__VIEW_ID__ . '-ae8d7665'])>CORE</span><strong @class([$__VIEW_ID__ . '-a3a489cb'])>Laravel integration</strong><p @class([$__VIEW_ID__ . '-4ba2c3e5'])>Route map, view response, SSR boot payload và request-scoped context.</p><i @class([$__VIEW_ID__ . '-f68c0895'])>03</i></article>
                <article @class([$__VIEW_ID__ . '-d548dd48'])><span @class([$__VIEW_ID__ . '-89739934'])>COMPILER</span><strong @class([$__VIEW_ID__ . '-06409e07'])>.sao → Blade + JS</strong><p @class([$__VIEW_ID__ . '-c8e8fc9f'])>Một AST tạo hai output có cùng structure, directive và marker contract.</p><i @class([$__VIEW_ID__ . '-34e51b5a'])>02</i></article>
                <article @class([$__VIEW_ID__ . '-641beadb'])><span @class([$__VIEW_ID__ . '-cfb82249'])>CLIENT</span><strong @class([$__VIEW_ID__ . '-4574d0e0'])>Router & view runtime</strong><p @class([$__VIEW_ID__ . '-58a5508e'])>Hydration, lifecycle, reactivity, layout reuse và page cache phía trình duyệt.</p><i @class([$__VIEW_ID__ . '-b22003c2'])>01</i></article>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-6c26f9b7', 'request-section'])>
            <div @class([$__VIEW_ID__ . '-ce6a96bf', 'section-head', 'compact'])><p @class([$__VIEW_ID__ . '-5a71cd5f', 'kicker'])><span @class([$__VIEW_ID__ . '-f1acc65a'])>REQUEST FLOW</span> Từ URL tới tương tác</p><h2 @class([$__VIEW_ID__ . '-98293aba'])>Một đường đi,<br @class([$__VIEW_ID__ . '-c006637c'])>hai giai đoạn.</h2></div>
            <ol @class([$__VIEW_ID__ . '-84e769c2', 'flow-timeline'])>
                <li @class([$__VIEW_ID__ . '-6ebee66f'])><span @class([$__VIEW_ID__ . '-1d71bcfc'])>01</span><div @class([$__VIEW_ID__ . '-261cc0e9'])><strong @class([$__VIEW_ID__ . '-c62e8b62'])>Route chọn module và context</strong><p @class([$__VIEW_ID__ . '-8a2e4d03'])>Request web, admin hoặc mobile được resolve trong phạm vi hiện tại thay vì đọc một static map dùng chung cho mọi request.</p></div><code @class([$__VIEW_ID__ . '-d09f2788'])>GET /projects/42</code></li>
                <li @class([$__VIEW_ID__ . '-0ca1ebc7'])><span @class([$__VIEW_ID__ . '-b95370f1'])>02</span><div @class([$__VIEW_ID__ . '-39430ed2'])><strong @class([$__VIEW_ID__ . '-b2d238f3'])>Controller trả view response</strong><p @class([$__VIEW_ID__ . '-48687a4b'])>Core xác định component route tương ứng, render Blade và tạo boot payload cho đúng context.</p></div><code @class([$__VIEW_ID__ . '-268ae1cb'])>context: web</code></li>
                <li @class([$__VIEW_ID__ . '-f7cc678d'])><span @class([$__VIEW_ID__ . '-0b5b2b8f'])>03</span><div @class([$__VIEW_ID__ . '-d9be0a5a'])><strong @class([$__VIEW_ID__ . '-e5cbbfa7'])>Blade tạo HTML hoàn chỉnh</strong><p @class([$__VIEW_ID__ . '-48645a4b'])>Layout, block, include và children đã có nội dung trước khi runtime phía client khởi động.</p></div><code @class([$__VIEW_ID__ . '-bf27d58f'])>SSR / READY</code></li>
                <li @class([$__VIEW_ID__ . '-b9946a39'])><span @class([$__VIEW_ID__ . '-eafd54b2'])>04</span><div @class([$__VIEW_ID__ . '-d4a9d637'])><strong @class([$__VIEW_ID__ . '-aeeae784'])>Runtime claim DOM có sẵn</strong><p @class([$__VIEW_ID__ . '-255c6fe8'])>Marker ổn định nối ViewController, state và event vào vùng DOM tương ứng.</p></div><code @class([$__VIEW_ID__ . '-12cae39e'])>HYDRATE / CLAIM</code></li>
                <li @class([$__VIEW_ID__ . '-bf373253'])><span @class([$__VIEW_ID__ . '-ee000eea'])>05</span><div @class([$__VIEW_ID__ . '-97e47235'])><strong @class([$__VIEW_ID__ . '-3d026307'])>Router tiếp quản điều hướng</strong><p @class([$__VIEW_ID__ . '-62d02799'])>Navigation tiếp theo resolve view chain, reuse layout chung và chỉ mount phần thay đổi.</p></div><code @class([$__VIEW_ID__ . '-5a6ebb37'])>SPA / ACTIVE</code></li>
            </ol>
        </section>

        <section @class([$__VIEW_ID__ . '-4e212027', 'context-panel'])>
            <div @class([$__VIEW_ID__ . '-1628defa'])><p @class([$__VIEW_ID__ . '-d621a64b', 'kicker'])><span @class([$__VIEW_ID__ . '-5f6b80a9'])>OCTANE SAFE</span> Context thuộc request</p><h2 @class([$__VIEW_ID__ . '-6560bb1b'])>Không để request sau<br @class([$__VIEW_ID__ . '-c03b5dbb'])>kế thừa request trước.</h2></div>
            <div @class([$__VIEW_ID__ . '-281112e1'])><p @class([$__VIEW_ID__ . '-1ace0544'])>Worker sống lâu không đồng nghĩa state ứng dụng được phép sống lâu. Saola resolve route component theo context đang hoạt động và cô lập dữ liệu request-scoped, kể cả khi response là HTML hay JSON.</p><div @class([$__VIEW_ID__ . '-241338ab', 'context-cells'])><span @class([$__VIEW_ID__ . '-03830c07'])>WEB<small @class([$__VIEW_ID__ . '-4ade19b9'])>public registry</small></span><span @class([$__VIEW_ID__ . '-685d2446'])>ADMIN<small @class([$__VIEW_ID__ . '-ff0031ec'])>admin registry</small></span><span @class([$__VIEW_ID__ . '-95aa3e21'])>MOBILE<small @class([$__VIEW_ID__ . '-d71b6a7c'])>mobile registry</small></span></div></div>
        </section>

        <section @class([$__VIEW_ID__ . '-5d5c7d30', 'next-page'])><span @class([$__VIEW_ID__ . '-8a4c2f1f'])>Tiếp theo / 02</span><div @class([$__VIEW_ID__ . '-f94a552a'])><h2 @class([$__VIEW_ID__ . '-5d206b32'])>Compiler biến một nguồn thành hai runtime thế nào?</h2><a @class([$__VIEW_ID__ . '-3f927566', 'button', 'button-primary']) @attr(['href' => '/compiler'])>Compiler & AST <span @class([$__VIEW_ID__ . '-828421ed'])>↗</span></a></div></section>
    @endblock
