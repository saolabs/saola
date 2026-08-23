@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <section @class([$__VIEW_ID__ . '-7b338a08', 'page-hero', 'page-hero-architecture'])>
            <div @class([$__VIEW_ID__ . '-3bb16c04'])>
                <p @class([$__VIEW_ID__ . '-f150187b', 'kicker'])><span @class([$__VIEW_ID__ . '-bac94b21'])>01 / ARCHITECTURE</span> Toàn cảnh hệ sinh thái</p>
                <h1 @class([$__VIEW_ID__ . '-663d8ed0'])>Laravel ở lõi.<br @class([$__VIEW_ID__ . '-c3c0e3f9'])><em @class([$__VIEW_ID__ . '-27038dbc'])>SPA ở trải nghiệm.</em></h1>
            </div>
            <div @class([$__VIEW_ID__ . '-57baae1a', 'page-hero-aside'])><p @class([$__VIEW_ID__ . '-8695e14e'])>Saola là một chuỗi contract từ request tới DOM, không phải một frontend framework đặt cạnh Laravel.</p><dl @class([$__VIEW_ID__ . '-1f0b28a5'])><div @class([$__VIEW_ID__ . '-da4a7f2f'])><dt @class([$__VIEW_ID__ . '-902aa345'])>INPUT</dt><dd @class([$__VIEW_ID__ . '-e65d3a6b'])>Route + context + data</dd></div><div @class([$__VIEW_ID__ . '-e762468d'])><dt @class([$__VIEW_ID__ . '-935f1ffd'])>OUTPUT</dt><dd @class([$__VIEW_ID__ . '-df3e6b57'])>SSR → hydrate → SPA</dd></div></dl></div>
        </section>

        <section @class([$__VIEW_ID__ . '-05ef4c27', 'stack-section'])>
            <div @class([$__VIEW_ID__ . '-c9c6be59', 'section-index'])><span @class([$__VIEW_ID__ . '-d20fe697'])>01</span><p @class([$__VIEW_ID__ . '-5b38df9e'])>Bốn lớp<br @class([$__VIEW_ID__ . '-27786653'])>một luồng</p></div>
            <div @class([$__VIEW_ID__ . '-fbd9a84d', 'stack-diagram'])>
                <article @class([$__VIEW_ID__ . '-13e1b7a4'])><span @class([$__VIEW_ID__ . '-d32c987e'])>APPLICATION</span><strong @class([$__VIEW_ID__ . '-e55d5e26'])>Modules & contexts</strong><p @class([$__VIEW_ID__ . '-5cec9be9'])>Web, admin và mobile tổ chức route, controller, view theo cùng một mô hình module.</p><i @class([$__VIEW_ID__ . '-579935c7'])>04</i></article>
                <article @class([$__VIEW_ID__ . '-7610ec67'])><span @class([$__VIEW_ID__ . '-d55ac7a6'])>CORE</span><strong @class([$__VIEW_ID__ . '-1bd2dff9'])>Laravel integration</strong><p @class([$__VIEW_ID__ . '-f0fe8469'])>Route map, view response, SSR boot payload và request-scoped context.</p><i @class([$__VIEW_ID__ . '-5f64ec0a'])>03</i></article>
                <article @class([$__VIEW_ID__ . '-f6357ac6'])><span @class([$__VIEW_ID__ . '-28f6beb4'])>COMPILER</span><strong @class([$__VIEW_ID__ . '-fcb0dc8c'])>.sao → Blade + JS</strong><p @class([$__VIEW_ID__ . '-011d29bc'])>Một AST tạo hai output có cùng structure, directive và marker contract.</p><i @class([$__VIEW_ID__ . '-bd17e466'])>02</i></article>
                <article @class([$__VIEW_ID__ . '-436566c4'])><span @class([$__VIEW_ID__ . '-752758aa'])>CLIENT</span><strong @class([$__VIEW_ID__ . '-1586ebf6'])>Router & view runtime</strong><p @class([$__VIEW_ID__ . '-6bc6e8e4'])>Hydration, lifecycle, reactivity, layout reuse và page cache phía trình duyệt.</p><i @class([$__VIEW_ID__ . '-fd309693'])>01</i></article>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-9fd19a30', 'request-section'])>
            <div @class([$__VIEW_ID__ . '-849145f1', 'section-head', 'compact'])><p @class([$__VIEW_ID__ . '-0d56026d', 'kicker'])><span @class([$__VIEW_ID__ . '-773a2605'])>REQUEST FLOW</span> Từ URL tới tương tác</p><h2 @class([$__VIEW_ID__ . '-de7a1e42'])>Một đường đi,<br @class([$__VIEW_ID__ . '-939960ee'])>hai giai đoạn.</h2></div>
            <ol @class([$__VIEW_ID__ . '-2d39fc18', 'flow-timeline'])>
                <li @class([$__VIEW_ID__ . '-be8bd502'])><span @class([$__VIEW_ID__ . '-8afd3452'])>01</span><div @class([$__VIEW_ID__ . '-613b7042'])><strong @class([$__VIEW_ID__ . '-c87ec5a4'])>Route chọn module và context</strong><p @class([$__VIEW_ID__ . '-4e45348f'])>Request web, admin hoặc mobile được resolve trong phạm vi hiện tại thay vì đọc một static map dùng chung cho mọi request.</p></div><code @class([$__VIEW_ID__ . '-c67dbd27'])>GET /projects/42</code></li>
                <li @class([$__VIEW_ID__ . '-0484a3fa'])><span @class([$__VIEW_ID__ . '-2ab0b8e2'])>02</span><div @class([$__VIEW_ID__ . '-fecbf7d0'])><strong @class([$__VIEW_ID__ . '-ba78e364'])>Controller trả view response</strong><p @class([$__VIEW_ID__ . '-bf0ed161'])>Core xác định component route tương ứng, render Blade và tạo boot payload cho đúng context.</p></div><code @class([$__VIEW_ID__ . '-5a0b689d'])>context: web</code></li>
                <li @class([$__VIEW_ID__ . '-d568b3c9'])><span @class([$__VIEW_ID__ . '-46531af3'])>03</span><div @class([$__VIEW_ID__ . '-a609ba77'])><strong @class([$__VIEW_ID__ . '-04bc65b3'])>Blade tạo HTML hoàn chỉnh</strong><p @class([$__VIEW_ID__ . '-7f41f114'])>Layout, block, include và children đã có nội dung trước khi runtime phía client khởi động.</p></div><code @class([$__VIEW_ID__ . '-fbe5077b'])>SSR / READY</code></li>
                <li @class([$__VIEW_ID__ . '-19e157e5'])><span @class([$__VIEW_ID__ . '-9f97a795'])>04</span><div @class([$__VIEW_ID__ . '-e359a748'])><strong @class([$__VIEW_ID__ . '-cd91ff6f'])>Runtime claim DOM có sẵn</strong><p @class([$__VIEW_ID__ . '-3c0416e8'])>Marker ổn định nối ViewController, state và event vào vùng DOM tương ứng.</p></div><code @class([$__VIEW_ID__ . '-5c17a8f3'])>HYDRATE / CLAIM</code></li>
                <li @class([$__VIEW_ID__ . '-42b3e167'])><span @class([$__VIEW_ID__ . '-397a18a7'])>05</span><div @class([$__VIEW_ID__ . '-945efd31'])><strong @class([$__VIEW_ID__ . '-df2fd867'])>Router tiếp quản điều hướng</strong><p @class([$__VIEW_ID__ . '-521ab148'])>Navigation tiếp theo resolve view chain, reuse layout chung và chỉ mount phần thay đổi.</p></div><code @class([$__VIEW_ID__ . '-8c73e47a'])>SPA / ACTIVE</code></li>
            </ol>
        </section>

        <section @class([$__VIEW_ID__ . '-e3988c18', 'context-panel'])>
            <div @class([$__VIEW_ID__ . '-6f8acc56'])><p @class([$__VIEW_ID__ . '-6f07ed8c', 'kicker'])><span @class([$__VIEW_ID__ . '-ef468377'])>OCTANE SAFE</span> Context thuộc request</p><h2 @class([$__VIEW_ID__ . '-106b8ee6'])>Không để request sau<br @class([$__VIEW_ID__ . '-f7a02534'])>kế thừa request trước.</h2></div>
            <div @class([$__VIEW_ID__ . '-f0346512'])><p @class([$__VIEW_ID__ . '-8669e717'])>Worker sống lâu không đồng nghĩa state ứng dụng được phép sống lâu. Saola resolve route component theo context đang hoạt động và cô lập dữ liệu request-scoped, kể cả khi response là HTML hay JSON.</p><div @class([$__VIEW_ID__ . '-ad9ffbb4', 'context-cells'])><span @class([$__VIEW_ID__ . '-c629c188'])>WEB<small @class([$__VIEW_ID__ . '-968ff10e'])>public registry</small></span><span @class([$__VIEW_ID__ . '-e1393b0c'])>ADMIN<small @class([$__VIEW_ID__ . '-be776094'])>admin registry</small></span><span @class([$__VIEW_ID__ . '-7dd510e0'])>MOBILE<small @class([$__VIEW_ID__ . '-400cdb5d'])>mobile registry</small></span></div></div>
        </section>
        <a @class([$__VIEW_ID__ . '-24b6e3d2', 'doc-next']) @attr(['href' => '/docs/contexts'])>
            <div @class([$__VIEW_ID__ . '-587d10b8'])><span @class([$__VIEW_ID__ . '-f908d9c5'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-7e647603'])>Context, module & controller</strong></div>
            <span @class([$__VIEW_ID__ . '-50bb0184', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
