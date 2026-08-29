@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])>
                <p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>07</span> RUNTIME</p>
                <h1 @class([$__VIEW_ID__ . '-Bdoc112'])>Router và dịch vụ client.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-Bdoc121'])>Ba cửa vào đều đổ về một hàm xử lý route, và việc đầu tiên router làm là hỏi PageCache. Application là một container service có thứ tự nạp được resolve tự động.</p>
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

            <p @class([$__VIEW_ID__ . '-Bdoc25', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc251'])>SERVICES</span> Container phía client</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc26'])>Application là một container có thứ tự.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc27'])>Service đăng ký qua service provider có khai báo phụ thuộc, thứ tự nạp được resolve chứ không phải viết tay. Truy cập qua <code @class([$__VIEW_ID__ . '-Bdoc271'])>App.&lt;Tên&gt;</code>.</p>
            <div @class([$__VIEW_ID__ . '-Bdoc28', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc281'])><div @class([$__VIEW_ID__ . '-Bdoc2811', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28111'])>App.Http</code></div><span @class([$__VIEW_ID__ . '-Bdoc2812'])>Fetch client: base URL, interceptor, timeout, tự huỷ request trùng, tự gắn header revision của view</span><b @class([$__VIEW_ID__ . '-Bdoc2813'])>network</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc282'])><div @class([$__VIEW_ID__ . '-Bdoc2821', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28211'])>App.Event</code></div><span @class([$__VIEW_ID__ . '-Bdoc2822'])>Bus sự kiện: một hoặc nhiều event, <code @class([$__VIEW_ID__ . '-Bdoc28221'])>once</code>, trả về hàm huỷ đăng ký</span><b @class([$__VIEW_ID__ . '-Bdoc2823'])>bus</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc283'])><div @class([$__VIEW_ID__ . '-Bdoc2831', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28311'])>App.Store</code> / <code @class([$__VIEW_ID__ . '-Bdoc28312'])>App.Storage</code></div><span @class([$__VIEW_ID__ . '-Bdoc2832'])>Kho theo khoá có TTL, subscribe theo khoá và callback lúc hết hạn</span><b @class([$__VIEW_ID__ . '-Bdoc2833'])>state</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc284'])><div @class([$__VIEW_ID__ . '-Bdoc2841', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28411'])>App.Head</code></div><span @class([$__VIEW_ID__ . '-Bdoc2842'])>Quản lý thẻ head: title, meta, link theo từng view</span><b @class([$__VIEW_ID__ . '-Bdoc2843'])>document</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc285'])><div @class([$__VIEW_ID__ . '-Bdoc2851', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28511'])>App.Router</code> / <code @class([$__VIEW_ID__ . '-Bdoc28512'])>App.View</code></div><span @class([$__VIEW_ID__ . '-Bdoc2852'])>Router và ViewManager — mount, hydrate, pause, resume view chain</span><b @class([$__VIEW_ID__ . '-Bdoc2853'])>core</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc286'])><div @class([$__VIEW_ID__ . '-Bdoc2861', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28611'])>App.Helper</code></div><span @class([$__VIEW_ID__ . '-Bdoc2862'])>Hàm tiện ích mà output biên dịch gọi tới, ví dụ <code @class([$__VIEW_ID__ . '-Bdoc28621'])>count()</code></span><b @class([$__VIEW_ID__ . '-Bdoc2863'])>utility</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc287'])><div @class([$__VIEW_ID__ . '-Bdoc2871', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28711'])>App.API</code></div><span @class([$__VIEW_ID__ . '-Bdoc2872'])>ApiClient dựng trên HttpService cho lớp gọi API có cấu trúc</span><b @class([$__VIEW_ID__ . '-Bdoc2873'])>network</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc288'])><div @class([$__VIEW_ID__ . '-Bdoc2881', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28811'])>App.Logger</code></div><span @class([$__VIEW_ID__ . '-Bdoc2882'])>Log theo cấp, tắt được ở production</span><b @class([$__VIEW_ID__ . '-Bdoc2883'])>diagnostics</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc289'])><div @class([$__VIEW_ID__ . '-Bdoc2891', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28911'])>App.Marker</code> / <code @class([$__VIEW_ID__ . '-Bdoc28912'])>App.Registry</code></div><span @class([$__VIEW_ID__ . '-Bdoc2892'])>Truy vấn và đăng ký marker, nền của hydration</span><b @class([$__VIEW_ID__ . '-Bdoc2893'])>internal</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc28e10_'])><div @class([$__VIEW_ID__ . '-Bdoc28e10_1', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28e10_11'])>App.Devtools</code></div><span @class([$__VIEW_ID__ . '-Bdoc28e10_2'])>Phát sự kiện vòng đời view cho inspector</span><b @class([$__VIEW_ID__ . '-Bdoc28e10_3'])>diagnostics</b></div>
            </div>
            <p @class([$__VIEW_ID__ . '-Bdoc29', 'ov-sub'])>Dịch vụ nội bộ không nằm trên container</p>
            <div @class([$__VIEW_ID__ . '-Bdoc2e10_', 'ov-tags'])>
                <span @class([$__VIEW_ID__ . '-Bdoc2e10_1', 'ov-tag'])>AssetManager — ref-count style &amp; script</span>
                <span @class([$__VIEW_ID__ . '-Bdoc2e10_2', 'ov-tag'])>BlockManager — nối block với outlet</span>
                <span @class([$__VIEW_ID__ . '-Bdoc2e10_3', 'ov-tag'])>SectionManager</span>
                <span @class([$__VIEW_ID__ . '-Bdoc2e10_4', 'ov-tag'])>PageCache</span>
                <span @class([$__VIEW_ID__ . '-Bdoc2e10_5', 'ov-tag'])>DomService</span>
                <span @class([$__VIEW_ID__ . '-Bdoc2e10_6', 'ov-tag'])>ForeachSlotCache</span>
                <span @class([$__VIEW_ID__ . '-Bdoc2e10_7', 'ov-tag'])>ElementManager</span>
            </div>
        </div>

        <a @class([$__VIEW_ID__ . '-Bdoc3', 'doc-next']) @attr(['href' => '/docs/build'])>
            <div @class([$__VIEW_ID__ . '-Bdoc31'])><span @class([$__VIEW_ID__ . '-Bdoc311'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-Bdoc312'])>Build, CLI & cấu hình</strong></div>
            <span @class([$__VIEW_ID__ . '-Bdoc32', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
