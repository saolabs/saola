@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @section('meta:title', 'Router & PageCache - Điều hướng Client mượt mà | Saola Docs')
    @section('meta:description', 'Hệ thống điều hướng Router và bộ đệm trang PageCache của Saola: Chuyển trang tức thì không reload, giữ nguyên trạng thái view và quản lý history.')
    @section('meta:keywords', 'saola router, pagecache, dieu huong spa, client navigation, spa routing, history state')
    @block('doc')
        <header @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])>
                <p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>07</span> RUNTIME</p>
                <h1 @class([$__VIEW_ID__ . '-Bdoc112'])>Router &amp; PageCache.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-Bdoc121'])>Ba cửa vào đều đổ về một hàm xử lý route: nạp trang đầu, click link SPA và lịch sử browser. PageCache LRU và Layout Diffing đảm bảo chuyển trang mượt mà không re-render dư thừa.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-Bdoc2', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-Bdoc21', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc211'])>ROUTER</span> Điều hướng và cache</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc22'])>Back không gọi lại API.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc23'])>Ba cửa vào đều đổ về một hàm xử lý route: khởi động lần đầu, chặn click trên thẻ liên kết, và sự kiện lịch sử trình duyệt. Việc đầu tiên router làm không phải render mà là hỏi PageCache.</p>
            <div @class([$__VIEW_ID__ . '-Bdoc24', 'ov-grid'])>
                <div @class([$__VIEW_ID__ . '-Bdoc241', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2411'])>Cache</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2412'])>PageCache theo LRU</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2413'])>Khoá là request URI gồm path và query, không gồm fragment. Điều hướng <code @class([$__VIEW_ID__ . '-Bdoc24131'])>pop</code> mà có entry thì đi đường restore: gắn lại DOM, resume, xong — không render, không fetch.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc242', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2421'])>Layout</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2422'])>Diff chuỗi layout</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2423'])>Chuỗi layout mới được so với chuỗi đang mount. Phần trùng được giữ nguyên và không render lại, chỉ phần khác biệt bị thay.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc243', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2431'])>Guard</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2432'])>beforeEach · afterEach</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2433'])>Guard chạy sau khi match route và trước khi mount, đủ để chặn hoặc chuyển hướng.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc244', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2441'])>Escape hatch</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2442'])>Bỏ qua chặn liên kết</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2443'])><code @class([$__VIEW_ID__ . '-Bdoc24431'])>target</code> khác <code @class([$__VIEW_ID__ . '-Bdoc24432'])>_self</code>, thuộc tính <code @class([$__VIEW_ID__ . '-Bdoc24433'])>download</code>, giao thức đặc biệt, hoặc <code @class([$__VIEW_ID__ . '-Bdoc24434'])>data-nav="disabled"</code> — router để trình duyệt tự xử lý. Mục lục bên trái trang này dùng đúng cách đó.</p>
                </div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc25', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc251'])>NAVIGATION API</span> Điều khiển chương trình</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc26'])>Phương thức chính của <code @class([$__VIEW_ID__ . '-Bdoc261'])>App.Router</code></h2>
            <p @class([$__VIEW_ID__ . '-Bdoc27'])>Trong controller hoặc hàm tương tác, bạn có thể chủ động chuyển trang hoặc can thiệp luồng điều hướng:</p>
            <div @class([$__VIEW_ID__ . '-Bdoc28', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc281'])><div @class([$__VIEW_ID__ . '-Bdoc2811', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28111'])>App.Router.push(url)</code></div><span @class([$__VIEW_ID__ . '-Bdoc2812'])>Chuyển tới URL mới, đẩy vào lịch sử trình duyệt và kích hoạt tải/render view.</span><b @class([$__VIEW_ID__ . '-Bdoc2813'])>navigate</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc282'])><div @class([$__VIEW_ID__ . '-Bdoc2821', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28211'])>App.Router.replace(url)</code></div><span @class([$__VIEW_ID__ . '-Bdoc2822'])>Thay thế URL hiện tại trên thanh địa chỉ mà không tạo thêm bước lùi lịch sử (history entry).</span><b @class([$__VIEW_ID__ . '-Bdoc2823'])>navigate</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc283'])><div @class([$__VIEW_ID__ . '-Bdoc2831', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28311'])>App.Router.back()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2832'])>Quay lại trang trước, tự động ưu tiên lấy view từ PageCache LRU.</span><b @class([$__VIEW_ID__ . '-Bdoc2833'])>history</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc284'])><div @class([$__VIEW_ID__ . '-Bdoc2841', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28411'])>App.Router.beforeEach(fn)</code></div><span @class([$__VIEW_ID__ . '-Bdoc2842'])>Đăng ký navigation guard toàn cục, nhận <code @class([$__VIEW_ID__ . '-Bdoc28421'])>(to, from)</code>, trả về <code @class([$__VIEW_ID__ . '-Bdoc28422'])>false</code> để chặn hoặc URL để redirect.</span><b @class([$__VIEW_ID__ . '-Bdoc2843'])>guard</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc285'])><div @class([$__VIEW_ID__ . '-Bdoc2851', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28511'])>App.Router.afterEach(fn)</code></div><span @class([$__VIEW_ID__ . '-Bdoc2852'])>Chạy sau khi trang đã mount/resume thành công (dùng để cuộn trang, gắn tracking hoặc đồng bộ highlight).</span><b @class([$__VIEW_ID__ . '-Bdoc2853'])>hook</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc286'])><div @class([$__VIEW_ID__ . '-Bdoc2861', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28611'])>App.Router.current()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2862'])>Trả về thông tin route hiện hành: <code @class([$__VIEW_ID__ . '-Bdoc28621'])>path</code>, <code @class([$__VIEW_ID__ . '-Bdoc28622'])>params</code>, <code @class([$__VIEW_ID__ . '-Bdoc28623'])>query</code>.</span><b @class([$__VIEW_ID__ . '-Bdoc2863'])>state</b></div>
            </div>

            <div @class([$__VIEW_ID__ . '-Bdoc29', 'ov-note']) @attr(['style' => 'margin-top: 32px;'])>
                <strong @class([$__VIEW_ID__ . '-Bdoc291'])>Hệ sinh thái dịch vụ client:</strong> Ngoài Router, runtime của Saola cung cấp sẵn các dịch vụ dùng chung như <code @class([$__VIEW_ID__ . '-Bdoc292'])>App.Event</code>, <code @class([$__VIEW_ID__ . '-Bdoc293'])>App.Store</code>, <code @class([$__VIEW_ID__ . '-Bdoc294'])>App.Storage</code>, <code @class([$__VIEW_ID__ . '-Bdoc295'])>App.Http</code>, <code @class([$__VIEW_ID__ . '-Bdoc296'])>App.Head</code>... Xem danh mục đầy đủ và hướng dẫn sử dụng chi tiết ở trang kế tiếp.
            </div>
        </div>

        <a @class([$__VIEW_ID__ . '-Bdoc3', 'doc-next']) @attr(['href' => '/docs/client-services'])>
            <div @class([$__VIEW_ID__ . '-Bdoc31'])><span @class([$__VIEW_ID__ . '-Bdoc311'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-Bdoc312'])>Dịch vụ phía client</strong></div>
            <span @class([$__VIEW_ID__ . '-Bdoc32', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
