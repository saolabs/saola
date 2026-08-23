@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-ff96f7a7', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-15b892a7'])>
                <p @class([$__VIEW_ID__ . '-ab74559e', 'kicker'])><span @class([$__VIEW_ID__ . '-943e8228'])>08</span> VẬN HÀNH</p>
                <h1 @class([$__VIEW_ID__ . '-9abe25a3'])>Build, CLI và cấu hình.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-f750a15d', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-2a968179'])>Hai chặng tách rời: compile view rồi bundle. Cộng thêm bốn file cấu hình, bộ kiểm thử ba tầng và hạ tầng phát triển dựng bằng một lệnh.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-e5195f55', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-a805c5cb', 'kicker'])><span @class([$__VIEW_ID__ . '-a3f20685'])>BUILD</span> Hai chặng, một lệnh</p>
            <h2 @class([$__VIEW_ID__ . '-c048d2ef'])>Compile view, rồi bundle.</h2>
            <p @class([$__VIEW_ID__ . '-1c642396'])>Chặng một biến <code @class([$__VIEW_ID__ . '-34be1ee8'])>.sao</code> thành Blade và TypeScript. Chặng hai để Vite gói TypeScript đó thành bundle của từng context. Hai chặng tách rời nên sửa template không phải build lại toàn bộ.</p>
            <div @class([$__VIEW_ID__ . '-753dcd15', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-9de53a5a'])><div @class([$__VIEW_ID__ . '-565197a0', 'dt-key'])><code @class([$__VIEW_ID__ . '-f8ca00ca'])>sao-compile web</code></div><span @class([$__VIEW_ID__ . '-082faf6b'])>Compile view của một context; <code @class([$__VIEW_ID__ . '-03c304b7'])>all</code> cho mọi context</span><b @class([$__VIEW_ID__ . '-8117b870'])>stage 1</b></div>
                <div @class([$__VIEW_ID__ . '-c8e71cd3'])><div @class([$__VIEW_ID__ . '-43777599', 'dt-key'])><code @class([$__VIEW_ID__ . '-ac254d87'])>sao-compile all --watch</code></div><span @class([$__VIEW_ID__ . '-9467ba30'])>Watch mode lúc phát triển</span><b @class([$__VIEW_ID__ . '-47abd5ae'])>stage 1</b></div>
                <div @class([$__VIEW_ID__ . '-e88f763e'])><div @class([$__VIEW_ID__ . '-a6515611', 'dt-key'])><code @class([$__VIEW_ID__ . '-a810d411'])>npm run build:web</code></div><span @class([$__VIEW_ID__ . '-eaef3113'])>Compile view rồi vite build ra <code @class([$__VIEW_ID__ . '-be44cdda'])>public/static/saola/web/js</code></span><b @class([$__VIEW_ID__ . '-4a54cc8d'])>stage 2</b></div>
                <div @class([$__VIEW_ID__ . '-094adcdf'])><div @class([$__VIEW_ID__ . '-1a29d412', 'dt-key'])><code @class([$__VIEW_ID__ . '-8a43b879'])>npm run dev:web</code></div><span @class([$__VIEW_ID__ . '-59ce3274'])>Chạy song song artisan serve, vite và watcher của client</span><b @class([$__VIEW_ID__ . '-3c958ed6'])>dev</b></div>
                <div @class([$__VIEW_ID__ . '-107c1236'])><div @class([$__VIEW_ID__ . '-ce5a01f4', 'dt-key'])><code @class([$__VIEW_ID__ . '-f325eaba'])>npm run build:web:local</code></div><span @class([$__VIEW_ID__ . '-e87f95f3'])>Build luôn cả <code @class([$__VIEW_ID__ . '-d2a5a403'])>@saolabs/client</code> từ mã nguồn cạnh bên thay vì bản đã phát hành</span><b @class([$__VIEW_ID__ . '-5d6b940a'])>monorepo</b></div>
            </div>
            <p @class([$__VIEW_ID__ . '-259642dc', 'ov-sub'])>Đường đi của một file</p>
            <div @class([$__VIEW_ID__ . '-9193afc2', 'code-window'])>
                <div @class([$__VIEW_ID__ . '-78b78df9', 'window-bar'])><span @class([$__VIEW_ID__ . '-25d09cc3'])>PIPELINE</span><b @class([$__VIEW_ID__ . '-031f9d9f'])>một view, hai đầu ra</b></div>
                <pre @class([$__VIEW_ID__ . '-3e6275c9'])><code @class([$__VIEW_ID__ . '-1b2b3f64'])><span @class([$__VIEW_ID__ . '-5d2b8152', 'code-line'])>resources/saola/web/views/modules/home/index.sao</span><span @class([$__VIEW_ID__ . '-a9ae1f3d', 'code-line', 'code-indent-1'])>├─ resources/views/web/modules/home/index.blade.php      (SSR)</span><span @class([$__VIEW_ID__ . '-4c484325', 'code-line', 'code-indent-1'])>└─ resources/js/saola/web/views/modules/home/index.ts    (runtime)</span><span @class([$__VIEW_ID__ . '-83c80266', 'code-line', 'code-gap'])></span><span @class([$__VIEW_ID__ . '-04ad3a51', 'code-line'])>resources/js/saola/web/registry.ts   ← bản đồ view path → factory</span><span @class([$__VIEW_ID__ . '-5d6d5e83', 'code-line'])>public/static/saola/web/js/app.js    ← bundle của context web</span></code></pre>
            </div>
            <p @class([$__VIEW_ID__ . '-c3983eb0', 'ov-sub'])>File cấu hình</p>
            <div @class([$__VIEW_ID__ . '-a79a05db', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-2300d833'])><div @class([$__VIEW_ID__ . '-291828af', 'dt-key'])><code @class([$__VIEW_ID__ . '-59ffb0bf'])>sao.config.json</code></div><span @class([$__VIEW_ID__ . '-e8225c75'])>Đường dẫn và khai báo context cho CLI compiler</span><b @class([$__VIEW_ID__ . '-3dba4e95'])>compiler</b></div>
                <div @class([$__VIEW_ID__ . '-f3b1517b'])><div @class([$__VIEW_ID__ . '-0fe67a4d', 'dt-key'])><code @class([$__VIEW_ID__ . '-af2847b6'])>config/sao.php</code></div><span @class([$__VIEW_ID__ . '-4f24e169'])>Cấu hình phía PHP: context, option, feature flag</span><b @class([$__VIEW_ID__ . '-c9b70ed2'])>php</b></div>
                <div @class([$__VIEW_ID__ . '-79c27fa3'])><div @class([$__VIEW_ID__ . '-17dd6dec', 'dt-key'])><code @class([$__VIEW_ID__ . '-96ce252f'])>config/spa.php</code></div><span @class([$__VIEW_ID__ . '-dbd165d1'])>Cấu hình runtime SPA: mode, debug, router</span><b @class([$__VIEW_ID__ . '-3012748d'])>runtime</b></div>
                <div @class([$__VIEW_ID__ . '-23985645'])><div @class([$__VIEW_ID__ . '-d170d57c', 'dt-key'])><code @class([$__VIEW_ID__ . '-299feb41'])>vite.config.js</code></div><span @class([$__VIEW_ID__ . '-9a81b2bf'])>Entry, alias <code @class([$__VIEW_ID__ . '-19461082'])>@saola</code> <code @class([$__VIEW_ID__ . '-cd30046d'])>@compiled</code> <code @class([$__VIEW_ID__ . '-a1a8bd03'])>@views</code>, thư mục output</span><b @class([$__VIEW_ID__ . '-6ca44e62'])>bundler</b></div>
            </div>

            <p @class([$__VIEW_ID__ . '-77f2db7f', 'kicker'])><span @class([$__VIEW_ID__ . '-2428831e'])>QUALITY</span> Kiểm thử và hạ tầng</p>
            <h2 @class([$__VIEW_ID__ . '-52002e9f'])>Contract được kiểm bằng chính contract.</h2>
            <div @class([$__VIEW_ID__ . '-0afc2ab6', 'ov-grid'])>
                <div @class([$__VIEW_ID__ . '-0dc89c8e', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-85da4ec6'])>Client</span>
                    <h3 @class([$__VIEW_ID__ . '-640fc1b7'])>Vitest trên jsdom</h3>
                    <p @class([$__VIEW_ID__ . '-2fce206e'])>Test của runtime chạy trên DOM giả lập: reconciliation của foreach, claim marker khi hydrate, dọn tài nguyên khi destroy.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-b77d83ba', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-a649f966'])>Contract</span>
                    <h3 @class([$__VIEW_ID__ . '-ca528dac'])>Compile thật rồi assert DOM</h3>
                    <p @class([$__VIEW_ID__ . '-845d4336'])>Fixture <code @class([$__VIEW_ID__ . '-175a8924'])>.sao</code> được compile bằng compiler thật, chạy trong jsdom rồi kiểm DOM đầu ra. Đây mới là nguồn chân lý thi hành của spec, không phải tài liệu.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-c88597b0', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-79b781e6'])>Server</span>
                    <h3 @class([$__VIEW_ID__ . '-47789a31'])>PHPUnit theo tầng</h3>
                    <p @class([$__VIEW_ID__ . '-101346b9'])>Bộ Unit và Feature tách riêng. Feature test gọi thẳng endpoint để kiểm hình dạng response và mã trạng thái.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-6bf531c9', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-8f7ac767'])>Hạ tầng</span>
                    <h3 @class([$__VIEW_ID__ . '-02a838c4'])>Docker Compose</h3>
                    <p @class([$__VIEW_ID__ . '-4f2aacb1'])>PostgreSQL 15 và Redis 7 kèm hai giao diện quản trị, dựng bằng một lệnh cho môi trường phát triển.</p>
                </div>
            </div>
            <div @class([$__VIEW_ID__ . '-d0822472', 'ov-note'])>
                Fixture của test giữ nguyên <em @class([$__VIEW_ID__ . '-e9d95474'])>output thật của compiler</em>. Viết tay kỳ vọng sẽ làm test mù với chính khâu sinh code mà nó phải bảo vệ.
            </div>
        </div>

        <a @class([$__VIEW_ID__ . '-ceb15976', 'doc-next']) @attr(['href' => '/docs/status'])>
            <div @class([$__VIEW_ID__ . '-60f0ac7a'])><span @class([$__VIEW_ID__ . '-b7585c3f'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-8767f8f3'])>Giới hạn đã biết</strong></div>
            <span @class([$__VIEW_ID__ . '-8287de38', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
