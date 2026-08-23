@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-ff96f7a7', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-15b892a7'])>
                <p @class([$__VIEW_ID__ . '-ab74559e', 'kicker'])><span @class([$__VIEW_ID__ . '-943e8228'])>07</span> RUNTIME</p>
                <h1 @class([$__VIEW_ID__ . '-9abe25a3'])>Router và dịch vụ client.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-f750a15d', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-2a968179'])>Ba cửa vào đều đổ về một hàm xử lý route, và việc đầu tiên router làm là hỏi PageCache. Application là một container service có thứ tự nạp được resolve tự động.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-e5195f55', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-a805c5cb', 'kicker'])><span @class([$__VIEW_ID__ . '-a3f20685'])>ROUTER</span> Điều hướng và cache</p>
            <h2 @class([$__VIEW_ID__ . '-c048d2ef'])>Back không gọi lại API.</h2>
            <p @class([$__VIEW_ID__ . '-1c642396'])>Ba cửa vào đều đổ về một hàm xử lý route: khởi động lần đầu, chặn click trên thẻ liên kết, và sự kiện lịch sử trình duyệt. Việc đầu tiên router làm không phải render mà là hỏi PageCache.</p>
            <div @class([$__VIEW_ID__ . '-753dcd15', 'ov-grid'])>
                <div @class([$__VIEW_ID__ . '-9de53a5a', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-81bea50b'])>Cache</span>
                    <h3 @class([$__VIEW_ID__ . '-32679b94'])>PageCache theo LRU</h3>
                    <p @class([$__VIEW_ID__ . '-48280560'])>Khoá là request URI gồm path và query, không gồm fragment. Điều hướng <code @class([$__VIEW_ID__ . '-1dc81855'])>pop</code> mà có entry thì đi đường restore: gắn lại DOM, resume, xong — không render, không fetch.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-c8e71cd3', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-9c312e37'])>Layout</span>
                    <h3 @class([$__VIEW_ID__ . '-cbe9665d'])>Diff chuỗi layout</h3>
                    <p @class([$__VIEW_ID__ . '-466d0bc6'])>Chuỗi layout mới được so với chuỗi đang mount. Phần trùng được giữ nguyên và không render lại, chỉ phần khác biệt bị thay.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-e88f763e', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-d7f6d064'])>Guard</span>
                    <h3 @class([$__VIEW_ID__ . '-20f8c5fb'])>beforeEach · afterEach</h3>
                    <p @class([$__VIEW_ID__ . '-a7ba8f53'])>Guard chạy sau khi match route và trước khi mount, đủ để chặn hoặc chuyển hướng.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-094adcdf', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-12547677'])>Escape hatch</span>
                    <h3 @class([$__VIEW_ID__ . '-c438b827'])>Bỏ qua chặn liên kết</h3>
                    <p @class([$__VIEW_ID__ . '-87dac5f0'])><code @class([$__VIEW_ID__ . '-db6edecc'])>target</code> khác <code @class([$__VIEW_ID__ . '-44746ce1'])>_self</code>, thuộc tính <code @class([$__VIEW_ID__ . '-6c5abc17'])>download</code>, giao thức đặc biệt, hoặc <code @class([$__VIEW_ID__ . '-7c9b8cc1'])>data-nav="disabled"</code> — router để trình duyệt tự xử lý. Mục lục bên trái trang này dùng đúng cách đó.</p>
                </div>
            </div>

            <p @class([$__VIEW_ID__ . '-259642dc', 'kicker'])><span @class([$__VIEW_ID__ . '-a0de54dd'])>SERVICES</span> Container phía client</p>
            <h2 @class([$__VIEW_ID__ . '-689f689c'])>Application là một container có thứ tự.</h2>
            <p @class([$__VIEW_ID__ . '-c3983eb0'])>Service đăng ký qua service provider có khai báo phụ thuộc, thứ tự nạp được resolve chứ không phải viết tay. Truy cập qua <code @class([$__VIEW_ID__ . '-e21026d6'])>App.&lt;Tên&gt;</code>.</p>
            <div @class([$__VIEW_ID__ . '-a79a05db', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-2300d833'])><div @class([$__VIEW_ID__ . '-291828af', 'dt-key'])><code @class([$__VIEW_ID__ . '-59ffb0bf'])>App.Http</code></div><span @class([$__VIEW_ID__ . '-e8225c75'])>Fetch client: base URL, interceptor, timeout, tự huỷ request trùng, tự gắn header revision của view</span><b @class([$__VIEW_ID__ . '-3dba4e95'])>network</b></div>
                <div @class([$__VIEW_ID__ . '-f3b1517b'])><div @class([$__VIEW_ID__ . '-0fe67a4d', 'dt-key'])><code @class([$__VIEW_ID__ . '-af2847b6'])>App.Event</code></div><span @class([$__VIEW_ID__ . '-4f24e169'])>Bus sự kiện: một hoặc nhiều event, <code @class([$__VIEW_ID__ . '-1dbe70c0'])>once</code>, trả về hàm huỷ đăng ký</span><b @class([$__VIEW_ID__ . '-c9b70ed2'])>bus</b></div>
                <div @class([$__VIEW_ID__ . '-79c27fa3'])><div @class([$__VIEW_ID__ . '-17dd6dec', 'dt-key'])><code @class([$__VIEW_ID__ . '-96ce252f'])>App.Store</code> / <code @class([$__VIEW_ID__ . '-640f47df'])>App.Storage</code></div><span @class([$__VIEW_ID__ . '-dbd165d1'])>Kho theo khoá có TTL, subscribe theo khoá và callback lúc hết hạn</span><b @class([$__VIEW_ID__ . '-3012748d'])>state</b></div>
                <div @class([$__VIEW_ID__ . '-23985645'])><div @class([$__VIEW_ID__ . '-d170d57c', 'dt-key'])><code @class([$__VIEW_ID__ . '-299feb41'])>App.Head</code></div><span @class([$__VIEW_ID__ . '-9a81b2bf'])>Quản lý thẻ head: title, meta, link theo từng view</span><b @class([$__VIEW_ID__ . '-6ca44e62'])>document</b></div>
                <div @class([$__VIEW_ID__ . '-1ce119bd'])><div @class([$__VIEW_ID__ . '-07624417', 'dt-key'])><code @class([$__VIEW_ID__ . '-e1eb2258'])>App.Router</code> / <code @class([$__VIEW_ID__ . '-eece3ced'])>App.View</code></div><span @class([$__VIEW_ID__ . '-a1e6ef37'])>Router và ViewManager — mount, hydrate, pause, resume view chain</span><b @class([$__VIEW_ID__ . '-821b7a5a'])>core</b></div>
                <div @class([$__VIEW_ID__ . '-66bb5b14'])><div @class([$__VIEW_ID__ . '-a4526726', 'dt-key'])><code @class([$__VIEW_ID__ . '-4c7bc4e4'])>App.Helper</code></div><span @class([$__VIEW_ID__ . '-5095681a'])>Hàm tiện ích mà output biên dịch gọi tới, ví dụ <code @class([$__VIEW_ID__ . '-eac4811b'])>count()</code></span><b @class([$__VIEW_ID__ . '-3420cd95'])>utility</b></div>
                <div @class([$__VIEW_ID__ . '-c52c9d36'])><div @class([$__VIEW_ID__ . '-f29ce14f', 'dt-key'])><code @class([$__VIEW_ID__ . '-d752c88c'])>App.API</code></div><span @class([$__VIEW_ID__ . '-2dfa2f39'])>ApiClient dựng trên HttpService cho lớp gọi API có cấu trúc</span><b @class([$__VIEW_ID__ . '-f066598b'])>network</b></div>
                <div @class([$__VIEW_ID__ . '-9095973b'])><div @class([$__VIEW_ID__ . '-8c775755', 'dt-key'])><code @class([$__VIEW_ID__ . '-49e805ed'])>App.Logger</code></div><span @class([$__VIEW_ID__ . '-cededf00'])>Log theo cấp, tắt được ở production</span><b @class([$__VIEW_ID__ . '-4081192c'])>diagnostics</b></div>
                <div @class([$__VIEW_ID__ . '-ae821b13'])><div @class([$__VIEW_ID__ . '-626be424', 'dt-key'])><code @class([$__VIEW_ID__ . '-44fa6b5e'])>App.Marker</code> / <code @class([$__VIEW_ID__ . '-58b5d341'])>App.Registry</code></div><span @class([$__VIEW_ID__ . '-ad36bb71'])>Truy vấn và đăng ký marker, nền của hydration</span><b @class([$__VIEW_ID__ . '-46eb5cae'])>internal</b></div>
                <div @class([$__VIEW_ID__ . '-032939be'])><div @class([$__VIEW_ID__ . '-a7988739', 'dt-key'])><code @class([$__VIEW_ID__ . '-ff3492b3'])>App.Devtools</code></div><span @class([$__VIEW_ID__ . '-f0f01991'])>Phát sự kiện vòng đời view cho inspector</span><b @class([$__VIEW_ID__ . '-2f949820'])>diagnostics</b></div>
            </div>
            <p @class([$__VIEW_ID__ . '-77f2db7f', 'ov-sub'])>Dịch vụ nội bộ không nằm trên container</p>
            <div @class([$__VIEW_ID__ . '-6be80a2e', 'ov-tags'])>
                <span @class([$__VIEW_ID__ . '-b78cf6cc', 'ov-tag'])>AssetManager — ref-count style &amp; script</span>
                <span @class([$__VIEW_ID__ . '-bb66a7a3', 'ov-tag'])>BlockManager — nối block với outlet</span>
                <span @class([$__VIEW_ID__ . '-fcf73bdd', 'ov-tag'])>SectionManager</span>
                <span @class([$__VIEW_ID__ . '-d12c4a93', 'ov-tag'])>PageCache</span>
                <span @class([$__VIEW_ID__ . '-7e2e01ee', 'ov-tag'])>DomService</span>
                <span @class([$__VIEW_ID__ . '-64445125', 'ov-tag'])>ForeachSlotCache</span>
                <span @class([$__VIEW_ID__ . '-79cfba99', 'ov-tag'])>ElementManager</span>
            </div>
        </div>

        <a @class([$__VIEW_ID__ . '-ceb15976', 'doc-next']) @attr(['href' => '/docs/build'])>
            <div @class([$__VIEW_ID__ . '-60f0ac7a'])><span @class([$__VIEW_ID__ . '-b7585c3f'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-8767f8f3'])>Build, CLI & cấu hình</strong></div>
            <span @class([$__VIEW_ID__ . '-8287de38', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
