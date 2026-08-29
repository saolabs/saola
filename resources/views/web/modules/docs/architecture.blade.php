@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <section @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero', 'page-hero-architecture'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])>
                <p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>01 / ARCHITECTURE</span> Tổng quan kiến trúc</p>
                <h1 @class([$__VIEW_ID__ . '-Bdoc112'])>Laravel ở tầng lõi.<br @class([$__VIEW_ID__ . '-Bdoc1121'])><em @class([$__VIEW_ID__ . '-Bdoc1122'])>SPA ở trải nghiệm.</em></h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])><p @class([$__VIEW_ID__ . '-Bdoc121'])>Saola định nghĩa một chuỗi contract đồng nhất từ server request đến client DOM — hợp nhất sức mạnh backend Laravel với độ mượt mà của SPA mà không cần tách rời API.</p><dl @class([$__VIEW_ID__ . '-Bdoc122'])><div @class([$__VIEW_ID__ . '-Bdoc1221'])><dt @class([$__VIEW_ID__ . '-Bdoc12211'])>INPUT</dt><dd @class([$__VIEW_ID__ . '-Bdoc12212'])>Route, Context & Controller</dd></div><div @class([$__VIEW_ID__ . '-Bdoc1222'])><dt @class([$__VIEW_ID__ . '-Bdoc12221'])>OUTPUT</dt><dd @class([$__VIEW_ID__ . '-Bdoc12222'])>SSR HTML → Hydrate → SPA Runtime</dd></div></dl></div>
        </section>

        <section @class([$__VIEW_ID__ . '-Bdoc2', 'stack-section'])>
            <div @class([$__VIEW_ID__ . '-Bdoc21', 'section-index'])><span @class([$__VIEW_ID__ . '-Bdoc211'])>01</span><p @class([$__VIEW_ID__ . '-Bdoc212'])>Kiến trúc<br @class([$__VIEW_ID__ . '-Bdoc2121'])>4 tầng lõi</p></div>
            <div @class([$__VIEW_ID__ . '-Bdoc22', 'stack-diagram'])>
                <article @class([$__VIEW_ID__ . '-Bdoc221'])><span @class([$__VIEW_ID__ . '-Bdoc2211'])>APPLICATION</span><strong @class([$__VIEW_ID__ . '-Bdoc2212'])>Modules & Contexts</strong><p @class([$__VIEW_ID__ . '-Bdoc2213'])>Phân tách Web, Admin, Mobile thành các module độc lập; quản lý route, controller và view theo đúng ngữ cảnh.</p><i @class([$__VIEW_ID__ . '-Bdoc2214'])>04</i></article>
                <article @class([$__VIEW_ID__ . '-Bdoc222'])><span @class([$__VIEW_ID__ . '-Bdoc2221'])>CORE</span><strong @class([$__VIEW_ID__ . '-Bdoc2222'])>Laravel Integration</strong><p @class([$__VIEW_ID__ . '-Bdoc2223'])>Tích hợp sâu vào pipeline Laravel: điều phối context theo request, sinh SSR payload và kết nối view response.</p><i @class([$__VIEW_ID__ . '-Bdoc2224'])>03</i></article>
                <article @class([$__VIEW_ID__ . '-Bdoc223'])><span @class([$__VIEW_ID__ . '-Bdoc2231'])>COMPILER</span><strong @class([$__VIEW_ID__ . '-Bdoc2232'])>Dual AST Engine</strong><p @class([$__VIEW_ID__ . '-Bdoc2233'])>Một file <code @class([$__VIEW_ID__ . '-Bdoc22331'])>.sao</code> duy nhất biên dịch đồng thời ra Blade template (SSR) và JavaScript module (SPA runtime).</p><i @class([$__VIEW_ID__ . '-Bdoc2234'])>02</i></article>
                <article @class([$__VIEW_ID__ . '-Bdoc224'])><span @class([$__VIEW_ID__ . '-Bdoc2241'])>CLIENT</span><strong @class([$__VIEW_ID__ . '-Bdoc2242'])>Reactive SPA Runtime</strong><p @class([$__VIEW_ID__ . '-Bdoc2243'])>Tự động hydrate DOM có sẵn, duy trì reactive state, tái sử dụng layout và quản lý client cache thông minh.</p><i @class([$__VIEW_ID__ . '-Bdoc2244'])>01</i></article>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-Bdoc3', 'request-section'])>
            <div @class([$__VIEW_ID__ . '-Bdoc31', 'section-head', 'compact'])><p @class([$__VIEW_ID__ . '-Bdoc311', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc3111'])>REQUEST FLOW</span> Vòng đời từ URL đến tương tác</p><h2 @class([$__VIEW_ID__ . '-Bdoc312'])>Một mã nguồn,<br @class([$__VIEW_ID__ . '-Bdoc3121'])>hai giai đoạn vận hành.</h2></div>
            <ol @class([$__VIEW_ID__ . '-Bdoc32', 'flowlane'])>
                <li @class([$__VIEW_ID__ . '-Bdoc321', 'fl-phase'])><span @class([$__VIEW_ID__ . '-Bdoc3211'])>SERVER-SIDE (SSR)</span></li>
                <li @class([$__VIEW_ID__ . '-Bdoc322', 'fl'])><b @class([$__VIEW_ID__ . '-Bdoc3221'])>01</b><strong @class([$__VIEW_ID__ . '-Bdoc3222'])>Định tuyến & Phân giải Context</strong><p @class([$__VIEW_ID__ . '-Bdoc3223'])>Request đi vào đúng Context (Web/Admin/Mobile), nạp route module tương ứng mà không tải dư thừa các registry khác.</p><code @class([$__VIEW_ID__ . '-Bdoc3224'])>GET /projects/42</code></li>
                <li @class([$__VIEW_ID__ . '-Bdoc323', 'fl'])><b @class([$__VIEW_ID__ . '-Bdoc3231'])>02</b><strong @class([$__VIEW_ID__ . '-Bdoc3232'])>Controller xử lý & tạo View Response</strong><p @class([$__VIEW_ID__ . '-Bdoc3233'])>Controller xử lý logic nghiệp vụ, gắn kết view component và đóng gói SSR boot payload chuẩn xác.</p><code @class([$__VIEW_ID__ . '-Bdoc3234'])>context: web</code></li>
                <li @class([$__VIEW_ID__ . '-Bdoc324', 'fl'])><b @class([$__VIEW_ID__ . '-Bdoc3241'])>03</b><strong @class([$__VIEW_ID__ . '-Bdoc3242'])>Blade kết xuất HTML hoàn chỉnh</strong><p @class([$__VIEW_ID__ . '-Bdoc3243'])>Toàn bộ layout, slot, component con và dữ liệu server được render thành HTML chuẩn SEO trước khi gửi về client.</p><code @class([$__VIEW_ID__ . '-Bdoc3244'])>SSR / READY</code></li>
                <li @class([$__VIEW_ID__ . '-Bdoc325', 'fl-cross'])><span @class([$__VIEW_ID__ . '-Bdoc3251'])>Truyền tải HTML trọn vẹn kèm Boot Payload qua HTTP</span></li>
                <li @class([$__VIEW_ID__ . '-Bdoc326', 'fl-phase'])><span @class([$__VIEW_ID__ . '-Bdoc3261'])>CLIENT-SIDE (SPA)</span></li>
                <li @class([$__VIEW_ID__ . '-Bdoc327', 'fl'])><b @class([$__VIEW_ID__ . '-Bdoc3271'])>04</b><strong @class([$__VIEW_ID__ . '-Bdoc3272'])>Hydration & Gắn kết Reactivity</strong><p @class([$__VIEW_ID__ . '-Bdoc3273'])>Client runtime tiếp quản DOM hiện hữu thông qua các marker định danh, kích hoạt event listener mà không render lại DOM có sẵn.</p><code @class([$__VIEW_ID__ . '-Bdoc3274'])>HYDRATE / CLAIM</code></li>
                <li @class([$__VIEW_ID__ . '-Bdoc328', 'fl'])><b @class([$__VIEW_ID__ . '-Bdoc3281'])>05</b><strong @class([$__VIEW_ID__ . '-Bdoc3282'])>Client Router chuyển sang chế độ SPA</strong><p @class([$__VIEW_ID__ . '-Bdoc3283'])>Các lượt chuyển trang sau đó chỉ nạp delta dữ liệu, tái sử dụng layout chung và chỉ cập nhật đúng vùng view thay đổi.</p><code @class([$__VIEW_ID__ . '-Bdoc3284'])>SPA / ACTIVE</code></li>
                <li @class([$__VIEW_ID__ . '-Bdoc329', 'fl-loop'])><span @class([$__VIEW_ID__ . '-Bdoc3291'])>Từ thời điểm này, ứng dụng hoạt động thuần SPA — trải nghiệm mượt mà tức thì, không tải lại trang.</span></li>
            </ol>
        </section>

        <section @class([$__VIEW_ID__ . '-Bdoc4', 'context-panel'])>
            <div @class([$__VIEW_ID__ . '-Bdoc41'])>
                <p @class([$__VIEW_ID__ . '-Bdoc411', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc4111'])>OCTANE SAFE</span> Context Isolate</p>
                <h2 @class([$__VIEW_ID__ . '-Bdoc412'])>State sạch hoàn toàn<br @class([$__VIEW_ID__ . '-Bdoc4121'])>trên từng request.</h2>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc42'])>
                <p @class([$__VIEW_ID__ . '-Bdoc421'])>Trong các runtime sống lâu (Laravel Octane, FrankenPHP, Swoole), việc rò rỉ state giữa các request là rủi ro nghiêm trọng. Saola bảo vệ kiến trúc bằng cơ chế cô lập request-scoped: mỗi request nạp đúng context độc lập và tự động giải phóng bộ nhớ ngay sau khi hoàn tất chu kỳ render.</p>
                <div @class([$__VIEW_ID__ . '-Bdoc422', 'context-cells'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc4221'])>WEB<small @class([$__VIEW_ID__ . '-Bdoc42211'])>public registry</small></span>
                    <span @class([$__VIEW_ID__ . '-Bdoc4222'])>ADMIN<small @class([$__VIEW_ID__ . '-Bdoc42221'])>admin registry</small></span>
                    <span @class([$__VIEW_ID__ . '-Bdoc4223'])>MOBILE<small @class([$__VIEW_ID__ . '-Bdoc42231'])>mobile registry</small></span>
                </div>
            </div>
        </section>
        <a @class([$__VIEW_ID__ . '-Bdoc5', 'doc-next']) @attr(['href' => '/docs/contexts'])>
            <div @class([$__VIEW_ID__ . '-Bdoc51'])><span @class([$__VIEW_ID__ . '-Bdoc511'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-Bdoc512'])>Context, module & controller</strong></div>
            <span @class([$__VIEW_ID__ . '-Bdoc52', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
