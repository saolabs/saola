@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])>
                <p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>01</span> TÀI LIỆU</p>
                <h1 @class([$__VIEW_ID__ . '-Bdoc112'])>Bắt đầu từ đây.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-Bdoc121'])>Saola biến một file <code @class([$__VIEW_ID__ . '-Bdoc1211'])>.sao</code> thành Blade cho lần render đầu và JavaScript cho mọi tương tác sau đó — cùng một AST, cùng marker, cùng state contract. Tài liệu này đi từ bức tranh tổng tới từng contract cụ thể.</p>
                <dl @class([$__VIEW_ID__ . '-Bdoc122'])>
                    <div @class([$__VIEW_ID__ . '-Bdoc1221'])><dt @class([$__VIEW_ID__ . '-Bdoc12211'])>Backend</dt><dd @class([$__VIEW_ID__ . '-Bdoc12212'])>Laravel 13</dd></div>
                    <div @class([$__VIEW_ID__ . '-Bdoc1222'])><dt @class([$__VIEW_ID__ . '-Bdoc12221'])>Runtime</dt><dd @class([$__VIEW_ID__ . '-Bdoc12222'])>&#64;saolabs/client</dd></div>
                </dl>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-Bdoc2', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-Bdoc21', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc211'])>PACKAGES</span> Bốn gói, một hợp đồng</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc22'])>Bốn mảnh ghép, một contract chung.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc23'])>Hệ sinh thái chia làm bốn gói phát hành độc lập — hai qua Composer, hai qua npm. Điểm nối giữa chúng không phải là quy ước ngầm mà là một spec viết ra giấy: <code @class([$__VIEW_ID__ . '-Bdoc231'])>RUNTIME_CONTRACT</code> mô tả chính xác compiler được phép emit gì và client phải hiểu gì.</p>
            <div @class([$__VIEW_ID__ . '-Bdoc24', 'ov-grid'])>
                <div @class([$__VIEW_ID__ . '-Bdoc241', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2411'])>Composer</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2412'])>saola/core</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2413'])>Lõi PHP: <code @class([$__VIEW_ID__ . '-Bdoc24131'])>System::context()</code> routing, base controller cho web/admin/api, module service provider, Blade directive và ViewStorageManager — nơi duy nhất sinh marker phía server.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc242', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2421'])>Composer</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2422'])>saola/compiler</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2423'])>Trình biên dịch <code @class([$__VIEW_ID__ . '-Bdoc24231'])>.sao</code> viết bằng PHP thuần. Một lần parse ra AST, emit song song Blade cho SSR và JavaScript/TypeScript cho CSR. CLI <code @class([$__VIEW_ID__ . '-Bdoc24232'])>saoc</code> chạy được không cần Node.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc243', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2431'])>npm</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2432'])>&#64;saolabs/builder</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2433'])>CLI <code @class([$__VIEW_ID__ . '-Bdoc24331'])>sao-compile</code>. Đọc <code @class([$__VIEW_ID__ . '-Bdoc24332'])>sao.config.json</code>, quét view, gọi <code @class([$__VIEW_ID__ . '-Bdoc24333'])>saola/compiler</code> qua <code @class([$__VIEW_ID__ . '-Bdoc24334'])>vendor/bin/saoc</code>, rồi ghi output, sinh registry và cắm vào Vite/Webpack. Builder không tự biên dịch.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc244', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2441'])>npm</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2442'])>&#64;saolabs/client</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2443'])>Runtime SPA: Application container, Router, ViewManager, ViewController, hệ element reactive, PageCache và bộ service (Http, Event, Store, Head…).</p>
                </div>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc25', 'ov-note'])>
                <strong @class([$__VIEW_ID__ . '-Bdoc251'])>Vì sao tách ba gói:</strong> compiler và client có thể phát hành lệch nhau, nên contract mang version. Compiler ghi <code @class([$__VIEW_ID__ . '-Bdoc252'])>__CONTRACT_VERSION__</code> vào output, client kiểm lúc load view — lệch major thì cảnh báo rõ ràng thay vì lỗi khó lần.
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc26', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc261'])>REQUEST</span> Từ URL tới tương tác</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc27'])>Một đường đi, hai giai đoạn.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc28'])>Lần tải đầu là SSR thật: Laravel trả HTML hoàn chỉnh có sẵn nội dung. Runtime phía client không dựng lại DOM đó — nó <em @class([$__VIEW_ID__ . '-Bdoc281'])>nhận</em> (claim) DOM có sẵn qua marker rồi gắn state và event lên. Từ lần điều hướng thứ hai trở đi, mọi thứ là CSR.</p>
            <ol @class([$__VIEW_ID__ . '-Bdoc29', 'flow-timeline'])>
                <li @class([$__VIEW_ID__ . '-Bdoc291'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2911'])>01</span>
                    <div @class([$__VIEW_ID__ . '-Bdoc2912'])>
                        <strong @class([$__VIEW_ID__ . '-Bdoc29121'])>Route chọn context và module</strong>
                        <p @class([$__VIEW_ID__ . '-Bdoc29122'])>Middleware theo context chạy trước, <code @class([$__VIEW_ID__ . '-Bdoc291221'])>System::context()</code> match route trong phạm vi module đã đăng ký.</p>
                    </div>
                    <code @class([$__VIEW_ID__ . '-Bdoc2913'])>GET /roster</code>
                </li>
                <li @class([$__VIEW_ID__ . '-Bdoc292'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2921'])>02</span>
                    <div @class([$__VIEW_ID__ . '-Bdoc2922'])>
                        <strong @class([$__VIEW_ID__ . '-Bdoc29221'])>Controller trả view response</strong>
                        <p @class([$__VIEW_ID__ . '-Bdoc29222'])>Core resolve component ứng với route, render Blade và nhúng boot payload (viewId, registry, systemData) cho đúng context.</p>
                    </div>
                    <code @class([$__VIEW_ID__ . '-Bdoc2923'])>context: web</code>
                </li>
                <li @class([$__VIEW_ID__ . '-Bdoc293'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2931'])>03</span>
                    <div @class([$__VIEW_ID__ . '-Bdoc2932'])>
                        <strong @class([$__VIEW_ID__ . '-Bdoc29321'])>Blade tạo HTML hoàn chỉnh</strong>
                        <p @class([$__VIEW_ID__ . '-Bdoc29322'])>Layout, block, include và children đã có nội dung trước khi một dòng JavaScript nào chạy. Mỗi vùng động được bọc bằng comment marker ổn định.</p>
                    </div>
                    <code @class([$__VIEW_ID__ . '-Bdoc2933'])>SSR / READY</code>
                </li>
                <li @class([$__VIEW_ID__ . '-Bdoc294'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2941'])>04</span>
                    <div @class([$__VIEW_ID__ . '-Bdoc2942'])>
                        <strong @class([$__VIEW_ID__ . '-Bdoc29421'])>Runtime claim DOM có sẵn</strong>
                        <p @class([$__VIEW_ID__ . '-Bdoc29422'])>State được commit về đúng giá trị server <em @class([$__VIEW_ID__ . '-Bdoc294221'])>trước</em> khi render, để factory của <code @class([$__VIEW_ID__ . '-Bdoc294222', 'directive-token'])>if</code> và <code @class([$__VIEW_ID__ . '-Bdoc294223', 'directive-token'])>foreach</code> sinh đúng element claim đúng node.</p>
                    </div>
                    <code @class([$__VIEW_ID__ . '-Bdoc2943'])>HYDRATE / CLAIM</code>
                </li>
                <li @class([$__VIEW_ID__ . '-Bdoc295'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2951'])>05</span>
                    <div @class([$__VIEW_ID__ . '-Bdoc2952'])>
                        <strong @class([$__VIEW_ID__ . '-Bdoc29521'])>Router tiếp quản điều hướng</strong>
                        <p @class([$__VIEW_ID__ . '-Bdoc29522'])>Điều hướng sau đó resolve view chain, diff layout và chỉ mount lại phần thay đổi. Back/forward đọc PageCache thay vì gọi lại API.</p>
                    </div>
                    <code @class([$__VIEW_ID__ . '-Bdoc2953'])>SPA / ACTIVE</code>
                </li>
            </ol>

            <p @class([$__VIEW_ID__ . '-Bdoc2e10_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e10_1'])>MỤC LỤC</span> Đi thẳng tới phần bạn cần</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e11_'])>Tài liệu chia theo lớp.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e12_'])>Bốn nhóm, mỗi nhóm trả lời một loại câu hỏi khác nhau. Nếu bạn mới bắt đầu, đi theo thứ tự; nếu đang tìm một directive cụ thể, nhảy thẳng vào tham chiếu.</p>
            <div @class([$__VIEW_ID__ . '-Bdoc2e13_', 'ov-grid'])>
                <a @class([$__VIEW_ID__ . '-Bdoc2e13_1', 'ov-card']) @attr(['href' => '/docs/getting-started'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e13_11'])>Bắt đầu</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e13_12'])>Cài đặt &amp; route đầu tiên →</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e13_13'])>Bốn bước từ khai báo module tới kiểm tra cả SSR lẫn SPA.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-Bdoc2e13_2', 'ov-card']) @attr(['href' => '/docs/architecture'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e13_21'])>Nền tảng</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e13_22'])>Kiến trúc hệ thống →</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e13_23'])>Bốn lớp và một luồng: application, core, compiler, client.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-Bdoc2e13_3', 'ov-card']) @attr(['href' => '/docs/contexts'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e13_31'])>Nền tảng</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e13_32'])>Context, module &amp; controller →</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e13_33'])>Biên giới giữa web, admin, api; auto-discovery và fluent routing.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-Bdoc2e13_4', 'ov-card']) @attr(['href' => '/docs/compiler'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e13_41'])>Nền tảng</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e13_42'])>Compiler &amp; AST →</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e13_43'])>Một cú pháp, hai output, cơ chế include và children đồng bộ.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-Bdoc2e13_5', 'ov-card']) @attr(['href' => '/docs/sao-file'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e13_51'])>Viết view</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e13_52'])>Cấu trúc file .sao →</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e13_53'])>Bốn phần của một single-file component và hai chế độ cú pháp.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-Bdoc2e13_6', 'ov-card']) @attr(['href' => '/docs/directives'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e13_61'])>Viết view</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e13_62'])>Tham chiếu directive →</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e13_63'])>Bảy nhóm directive, từ khai báo tới quyền và biến ma thuật.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-Bdoc2e13_7', 'ov-card']) @attr(['href' => '/docs/reactivity'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e13_71'])>Viết view</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e13_72'])>State &amp; reactivity →</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e13_73'])>Setter, batching theo khung hình, computed và element API.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-Bdoc2e13_8', 'ov-card']) @attr(['href' => '/docs/runtime'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e13_81'])>Runtime</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e13_82'])>Runtime &amp; hydration →</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e13_83'])>Claim DOM, reactive update, page cache và dọn tài nguyên.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-Bdoc2e13_9', 'ov-card']) @attr(['href' => '/docs/lifecycle'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e13_91'])>Runtime</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e13_92'])>Vòng đời &amp; marker →</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e13_93'])>Bảy chuyển trạng thái và hợp đồng marker giữa server với client.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-Bdoc2e13_e10_', 'ov-card']) @attr(['href' => '/docs/router'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e13_e10_1'])>Runtime</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e13_e10_2'])>Router &amp; dịch vụ client →</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e13_e10_3'])>PageCache, layout diff và bộ service trên Application container.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-Bdoc2e13_e11_', 'ov-card']) @attr(['href' => '/docs/build'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e13_e11_1'])>Vận hành</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e13_e11_2'])>Build, CLI &amp; cấu hình →</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e13_e11_3'])>Hai chặng build, bốn file cấu hình và bộ kiểm thử.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-Bdoc2e13_e12_', 'ov-card']) @attr(['href' => '/docs/status'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e13_e12_1'])>Vận hành</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e13_e12_2'])>Giới hạn đã biết →</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e13_e12_3'])>Cái gì đang chạy đầy đủ, cái gì còn dở và cách đi vòng.</p>
                </a>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc2e14_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e14_1'])>LIVE</span> Không chỉ đọc sơ đồ</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e15_'])>Bốn trang đang chạy thật.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e16_'])>Mỗi trang dưới đây là một fixture có chủ đích, không phải ảnh chụp. Mở DevTools xem HTML lần đầu để thấy nội dung đã có sẵn trước khi JavaScript chạy.</p>
            <div @class([$__VIEW_ID__ . '-Bdoc2e17_', 'ov-grid'])>
                <a @class([$__VIEW_ID__ . '-Bdoc2e17_1', 'ov-card']) @attr(['href' => '/demo'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e17_11'])>Fixture cú pháp</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e17_12'])>Interactive demo →</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e17_13'])>Chín nhóm cú pháp trong một trang: state, event, binding, điều kiện, vòng lặp, switch, props, import và children.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-Bdoc2e17_2', 'ov-card']) @attr(['href' => '/todo-list'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e17_21'])>Layout dùng chung</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e17_22'])>Todo workspace →</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e17_23'])>State cục bộ của trang trong khi layout giữ nguyên qua mỗi lần đổi route.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-Bdoc2e17_3', 'ov-card']) @attr(['href' => '/roster'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e17_31'])>Sửa đồng thời</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e17_32'])>Roster sync →</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e17_33'])>Poll ba mươi giây, diff giữ reference, và xử lý khi người khác sửa hoặc xoá đúng bản ghi bạn đang mở form.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-Bdoc2e17_4', 'ov-card']) @attr(['href' => '/ping'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e17_41'])>Hydration trần</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e17_42'])>Ping →</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e17_43'])>Fixture nhỏ nhất: state, event, binding và một vòng lặp — đủ để soi marker bằng mắt.</p>
                </a>
            </div>
        </div>

        <a @class([$__VIEW_ID__ . '-Bdoc3', 'doc-next']) @attr(['href' => '/docs/getting-started'])>
            <div @class([$__VIEW_ID__ . '-Bdoc31'])><span @class([$__VIEW_ID__ . '-Bdoc311'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-Bdoc312'])>Cài đặt &amp; route đầu tiên</strong></div>
            <span @class([$__VIEW_ID__ . '-Bdoc32', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
