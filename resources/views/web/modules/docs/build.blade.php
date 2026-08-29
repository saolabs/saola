@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])>
                <p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>08</span> VẬN HÀNH</p>
                <h1 @class([$__VIEW_ID__ . '-Bdoc112'])>Build, CLI và cấu hình.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-Bdoc121'])>Hai chặng tách rời: compile view rồi bundle. Cộng thêm bốn file cấu hình, bộ kiểm thử ba tầng và hạ tầng phát triển dựng bằng một lệnh.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-Bdoc2', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-Bdoc21', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc211'])>BUILD</span> Hai chặng, một lệnh</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc22'])>Compile view, rồi bundle.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc23'])>Chặng một biến <code @class([$__VIEW_ID__ . '-Bdoc231'])>.sao</code> thành Blade và TypeScript. Chặng hai để Vite gói TypeScript đó thành bundle của từng context. Hai chặng tách rời nên sửa template không phải build lại toàn bộ.</p>
            <div @class([$__VIEW_ID__ . '-Bdoc24', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc241'])><div @class([$__VIEW_ID__ . '-Bdoc2411', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24111'])>sao-compile web</code></div><span @class([$__VIEW_ID__ . '-Bdoc2412'])>Compile view của một context; <code @class([$__VIEW_ID__ . '-Bdoc24121'])>all</code> cho mọi context</span><b @class([$__VIEW_ID__ . '-Bdoc2413'])>stage 1</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc242'])><div @class([$__VIEW_ID__ . '-Bdoc2421', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24211'])>sao-compile all --watch</code></div><span @class([$__VIEW_ID__ . '-Bdoc2422'])>Watch mode lúc phát triển</span><b @class([$__VIEW_ID__ . '-Bdoc2423'])>stage 1</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc243'])><div @class([$__VIEW_ID__ . '-Bdoc2431', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24311'])>npm run build:web</code></div><span @class([$__VIEW_ID__ . '-Bdoc2432'])>Compile view rồi vite build ra <code @class([$__VIEW_ID__ . '-Bdoc24321'])>public/static/saola/web/js</code></span><b @class([$__VIEW_ID__ . '-Bdoc2433'])>stage 2</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc244'])><div @class([$__VIEW_ID__ . '-Bdoc2441', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24411'])>npm run dev:web</code></div><span @class([$__VIEW_ID__ . '-Bdoc2442'])>Chạy song song artisan serve, vite và watcher của client</span><b @class([$__VIEW_ID__ . '-Bdoc2443'])>dev</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc245'])><div @class([$__VIEW_ID__ . '-Bdoc2451', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24511'])>npm run build:web:local</code></div><span @class([$__VIEW_ID__ . '-Bdoc2452'])>Build luôn cả <code @class([$__VIEW_ID__ . '-Bdoc24521'])>@saolabs/client</code> từ mã nguồn cạnh bên thay vì bản đã phát hành</span><b @class([$__VIEW_ID__ . '-Bdoc2453'])>monorepo</b></div>
            </div>
            <p @class([$__VIEW_ID__ . '-Bdoc25', 'ov-sub'])>Đường đi của một file</p>
            <div @class([$__VIEW_ID__ . '-Bdoc26', 'code-window'])>
                <div @class([$__VIEW_ID__ . '-Bdoc261', 'window-bar'])><span @class([$__VIEW_ID__ . '-Bdoc2611'])>PIPELINE</span><b @class([$__VIEW_ID__ . '-Bdoc2612'])>một view, hai đầu ra</b></div>
                <pre @class([$__VIEW_ID__ . '-Bdoc262'])><code @class([$__VIEW_ID__ . '-Bdoc2621'])><span @class([$__VIEW_ID__ . '-Bdoc26211', 'code-line'])>resources/saola/web/views/modules/home/index.sao</span><span @class([$__VIEW_ID__ . '-Bdoc26212', 'code-line', 'code-indent-1'])>├─ resources/views/web/modules/home/index.blade.php      (SSR)</span><span @class([$__VIEW_ID__ . '-Bdoc26213', 'code-line', 'code-indent-1'])>└─ resources/js/saola/web/views/modules/home/index.ts    (runtime)</span><span @class([$__VIEW_ID__ . '-Bdoc26214', 'code-line', 'code-gap'])></span><span @class([$__VIEW_ID__ . '-Bdoc26215', 'code-line'])>resources/js/saola/web/registry.ts   ← bản đồ view path → factory</span><span @class([$__VIEW_ID__ . '-Bdoc26216', 'code-line'])>public/static/saola/web/js/app.js    ← bundle của context web</span></code></pre>
            </div>
            <p @class([$__VIEW_ID__ . '-Bdoc27', 'ov-sub'])>File cấu hình</p>
            <div @class([$__VIEW_ID__ . '-Bdoc28', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc281'])><div @class([$__VIEW_ID__ . '-Bdoc2811', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28111'])>sao.config.json</code></div><span @class([$__VIEW_ID__ . '-Bdoc2812'])>Đường dẫn và khai báo context cho CLI compiler</span><b @class([$__VIEW_ID__ . '-Bdoc2813'])>compiler</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc282'])><div @class([$__VIEW_ID__ . '-Bdoc2821', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28211'])>config/sao.php</code></div><span @class([$__VIEW_ID__ . '-Bdoc2822'])>Cấu hình phía PHP: context, option, feature flag</span><b @class([$__VIEW_ID__ . '-Bdoc2823'])>php</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc283'])><div @class([$__VIEW_ID__ . '-Bdoc2831', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28311'])>config/spa.php</code></div><span @class([$__VIEW_ID__ . '-Bdoc2832'])>Cấu hình runtime SPA: mode, debug, router</span><b @class([$__VIEW_ID__ . '-Bdoc2833'])>runtime</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc284'])><div @class([$__VIEW_ID__ . '-Bdoc2841', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28411'])>vite.config.js</code></div><span @class([$__VIEW_ID__ . '-Bdoc2842'])>Entry, alias <code @class([$__VIEW_ID__ . '-Bdoc28421'])>@saola</code> <code @class([$__VIEW_ID__ . '-Bdoc28422'])>@compiled</code> <code @class([$__VIEW_ID__ . '-Bdoc28423'])>@views</code>, thư mục output</span><b @class([$__VIEW_ID__ . '-Bdoc2843'])>bundler</b></div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc29', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc291'])>QUALITY</span> Kiểm thử và hạ tầng</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e10_'])>Contract được kiểm bằng chính contract.</h2>
            <div @class([$__VIEW_ID__ . '-Bdoc2e11_', 'ov-grid'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e11_1', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e11_11'])>Client</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e11_12'])>Vitest trên jsdom</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e11_13'])>Test của runtime chạy trên DOM giả lập: reconciliation của foreach, claim marker khi hydrate, dọn tài nguyên khi destroy.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e11_2', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e11_21'])>Contract</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e11_22'])>Compile thật rồi assert DOM</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e11_23'])>Fixture <code @class([$__VIEW_ID__ . '-Bdoc2e11_231'])>.sao</code> được compile bằng compiler thật, chạy trong jsdom rồi kiểm DOM đầu ra. Đây mới là nguồn chân lý thi hành của spec, không phải tài liệu.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e11_3', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e11_31'])>Server</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e11_32'])>PHPUnit theo tầng</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e11_33'])>Bộ Unit và Feature tách riêng. Feature test gọi thẳng endpoint để kiểm hình dạng response và mã trạng thái.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e11_4', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e11_41'])>Hạ tầng</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e11_42'])>Docker Compose</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e11_43'])>PostgreSQL 15 và Redis 7 kèm hai giao diện quản trị, dựng bằng một lệnh cho môi trường phát triển.</p>
                </div>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc2e12_', 'ov-note'])>
                Fixture của test giữ nguyên <em @class([$__VIEW_ID__ . '-Bdoc2e12_1'])>output thật của compiler</em>. Viết tay kỳ vọng sẽ làm test mù với chính khâu sinh code mà nó phải bảo vệ.
            </div>
        </div>

        <a @class([$__VIEW_ID__ . '-Bdoc3', 'doc-next']) @attr(['href' => '/docs/status'])>
            <div @class([$__VIEW_ID__ . '-Bdoc31'])><span @class([$__VIEW_ID__ . '-Bdoc311'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-Bdoc312'])>Giới hạn đã biết</strong></div>
            <span @class([$__VIEW_ID__ . '-Bdoc32', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
