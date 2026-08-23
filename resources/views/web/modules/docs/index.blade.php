@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-ff96f7a7', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-15b892a7'])>
                <p @class([$__VIEW_ID__ . '-ab74559e', 'kicker'])><span @class([$__VIEW_ID__ . '-943e8228'])>01</span> TÀI LIỆU</p>
                <h1 @class([$__VIEW_ID__ . '-9abe25a3'])>Bắt đầu từ đây.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-f750a15d', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-2a968179'])>Saola biến một file <code @class([$__VIEW_ID__ . '-1169a7fa'])>.sao</code> thành Blade cho lần render đầu và JavaScript cho mọi tương tác sau đó — cùng một AST, cùng marker, cùng state contract. Tài liệu này đi từ bức tranh tổng tới từng contract cụ thể.</p>
                <dl @class([$__VIEW_ID__ . '-3111c9ed'])>
                    <div @class([$__VIEW_ID__ . '-97abdc51'])><dt @class([$__VIEW_ID__ . '-71fa6733'])>Backend</dt><dd @class([$__VIEW_ID__ . '-dab7e845'])>Laravel 13</dd></div>
                    <div @class([$__VIEW_ID__ . '-93744265'])><dt @class([$__VIEW_ID__ . '-c1fb4c49'])>Runtime</dt><dd @class([$__VIEW_ID__ . '-6ccb67d0'])>&#64;saolabs/client</dd></div>
                </dl>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-e5195f55', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-a805c5cb', 'kicker'])><span @class([$__VIEW_ID__ . '-a3f20685'])>PACKAGES</span> Ba gói, một hợp đồng</p>
            <h2 @class([$__VIEW_ID__ . '-c048d2ef'])>Ba mảnh ghép, một contract chung.</h2>
            <p @class([$__VIEW_ID__ . '-1c642396'])>Hệ sinh thái chia làm ba gói phát hành độc lập. Điểm nối giữa chúng không phải là quy ước ngầm mà là một spec viết ra giấy: <code @class([$__VIEW_ID__ . '-34be1ee8'])>RUNTIME_CONTRACT</code> mô tả chính xác compiler được phép emit gì và client phải hiểu gì.</p>
            <div @class([$__VIEW_ID__ . '-753dcd15', 'ov-grid', 'ov-grid--3'])>
                <div @class([$__VIEW_ID__ . '-9de53a5a', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-81bea50b'])>Composer</span>
                    <h3 @class([$__VIEW_ID__ . '-32679b94'])>saola/core</h3>
                    <p @class([$__VIEW_ID__ . '-48280560'])>Lõi PHP: <code @class([$__VIEW_ID__ . '-1dc81855'])>System::context()</code> routing, base controller cho web/admin/api, module service provider, Blade directive và ViewStorageManager — nơi duy nhất sinh marker phía server.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-c8e71cd3', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-9c312e37'])>npm</span>
                    <h3 @class([$__VIEW_ID__ . '-cbe9665d'])>&#64;saolabs/compiler</h3>
                    <p @class([$__VIEW_ID__ . '-466d0bc6'])>CLI <code @class([$__VIEW_ID__ . '-a9e93036'])>sao-compile</code>. Parse <code @class([$__VIEW_ID__ . '-d9edf7d0'])>.sao</code> thành AST rồi emit hai đầu ra từ cùng một cây: Blade cho SSR và TypeScript cho view runtime, kèm registry.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-e88f763e', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-d7f6d064'])>npm</span>
                    <h3 @class([$__VIEW_ID__ . '-20f8c5fb'])>&#64;saolabs/client</h3>
                    <p @class([$__VIEW_ID__ . '-a7ba8f53'])>Runtime SPA: Application container, Router, ViewManager, ViewController, hệ element reactive, PageCache và bộ service (Http, Event, Store, Head…).</p>
                </div>
            </div>
            <div @class([$__VIEW_ID__ . '-dae15694', 'ov-note'])>
                <strong @class([$__VIEW_ID__ . '-38d317d8'])>Vì sao tách ba gói:</strong> compiler và client có thể phát hành lệch nhau, nên contract mang version. Compiler ghi <code @class([$__VIEW_ID__ . '-7e4fc105'])>__CONTRACT_VERSION__</code> vào output, client kiểm lúc load view — lệch major thì cảnh báo rõ ràng thay vì lỗi khó lần.
            </div>

            <p @class([$__VIEW_ID__ . '-928cd295', 'kicker'])><span @class([$__VIEW_ID__ . '-3c48ef82'])>REQUEST</span> Từ URL tới tương tác</p>
            <h2 @class([$__VIEW_ID__ . '-6017143f'])>Một đường đi, hai giai đoạn.</h2>
            <p @class([$__VIEW_ID__ . '-b2544d33'])>Lần tải đầu là SSR thật: Laravel trả HTML hoàn chỉnh có sẵn nội dung. Runtime phía client không dựng lại DOM đó — nó <em @class([$__VIEW_ID__ . '-b8d16007'])>nhận</em> (claim) DOM có sẵn qua marker rồi gắn state và event lên. Từ lần điều hướng thứ hai trở đi, mọi thứ là CSR.</p>
            <ol @class([$__VIEW_ID__ . '-063d0abf', 'flow-timeline'])>
                <li @class([$__VIEW_ID__ . '-122400f7'])>
                    <span @class([$__VIEW_ID__ . '-f55747ab'])>01</span>
                    <div @class([$__VIEW_ID__ . '-e16d36d8'])>
                        <strong @class([$__VIEW_ID__ . '-29eadfa3'])>Route chọn context và module</strong>
                        <p @class([$__VIEW_ID__ . '-59c04f6e'])>Middleware theo context chạy trước, <code @class([$__VIEW_ID__ . '-97d29790'])>System::context()</code> match route trong phạm vi module đã đăng ký.</p>
                    </div>
                    <code @class([$__VIEW_ID__ . '-4088135a'])>GET /roster</code>
                </li>
                <li @class([$__VIEW_ID__ . '-d6c664b0'])>
                    <span @class([$__VIEW_ID__ . '-32b04801'])>02</span>
                    <div @class([$__VIEW_ID__ . '-5712c3a6'])>
                        <strong @class([$__VIEW_ID__ . '-9a5fe5b8'])>Controller trả view response</strong>
                        <p @class([$__VIEW_ID__ . '-b658f38f'])>Core resolve component ứng với route, render Blade và nhúng boot payload (viewId, registry, systemData) cho đúng context.</p>
                    </div>
                    <code @class([$__VIEW_ID__ . '-1602ba3c'])>context: web</code>
                </li>
                <li @class([$__VIEW_ID__ . '-fa4fc4bb'])>
                    <span @class([$__VIEW_ID__ . '-54fda6ec'])>03</span>
                    <div @class([$__VIEW_ID__ . '-0a6fb356'])>
                        <strong @class([$__VIEW_ID__ . '-d0b19d09'])>Blade tạo HTML hoàn chỉnh</strong>
                        <p @class([$__VIEW_ID__ . '-7fc98806'])>Layout, block, include và children đã có nội dung trước khi một dòng JavaScript nào chạy. Mỗi vùng động được bọc bằng comment marker ổn định.</p>
                    </div>
                    <code @class([$__VIEW_ID__ . '-8037480f'])>SSR / READY</code>
                </li>
                <li @class([$__VIEW_ID__ . '-ea648272'])>
                    <span @class([$__VIEW_ID__ . '-5d80ca80'])>04</span>
                    <div @class([$__VIEW_ID__ . '-b845f58a'])>
                        <strong @class([$__VIEW_ID__ . '-f60fdf6c'])>Runtime claim DOM có sẵn</strong>
                        <p @class([$__VIEW_ID__ . '-d2c7176a'])>State được commit về đúng giá trị server <em @class([$__VIEW_ID__ . '-0f62299d'])>trước</em> khi render, để factory của <code @class([$__VIEW_ID__ . '-b1f6f5bf', 'directive-token'])>if</code> và <code @class([$__VIEW_ID__ . '-e3dd97a5', 'directive-token'])>foreach</code> sinh đúng element claim đúng node.</p>
                    </div>
                    <code @class([$__VIEW_ID__ . '-78a0b950'])>HYDRATE / CLAIM</code>
                </li>
                <li @class([$__VIEW_ID__ . '-87aa9539'])>
                    <span @class([$__VIEW_ID__ . '-23cd0823'])>05</span>
                    <div @class([$__VIEW_ID__ . '-fe32cb47'])>
                        <strong @class([$__VIEW_ID__ . '-638ad41c'])>Router tiếp quản điều hướng</strong>
                        <p @class([$__VIEW_ID__ . '-23c3340c'])>Điều hướng sau đó resolve view chain, diff layout và chỉ mount lại phần thay đổi. Back/forward đọc PageCache thay vì gọi lại API.</p>
                    </div>
                    <code @class([$__VIEW_ID__ . '-da14a877'])>SPA / ACTIVE</code>
                </li>
            </ol>

            <p @class([$__VIEW_ID__ . '-d6184d28', 'kicker'])><span @class([$__VIEW_ID__ . '-01999fac'])>MỤC LỤC</span> Đi thẳng tới phần bạn cần</p>
            <h2 @class([$__VIEW_ID__ . '-6e14ce93'])>Tài liệu chia theo lớp.</h2>
            <p @class([$__VIEW_ID__ . '-5398cccb'])>Bốn nhóm, mỗi nhóm trả lời một loại câu hỏi khác nhau. Nếu bạn mới bắt đầu, đi theo thứ tự; nếu đang tìm một directive cụ thể, nhảy thẳng vào tham chiếu.</p>
            <div @class([$__VIEW_ID__ . '-80df339a', 'ov-grid'])>
                <a @class([$__VIEW_ID__ . '-f4d5b425', 'ov-card']) @attr(['href' => '/docs/getting-started'])>
                    <span @class([$__VIEW_ID__ . '-a3354437'])>Bắt đầu</span>
                    <h3 @class([$__VIEW_ID__ . '-6ead5b82'])>Cài đặt &amp; route đầu tiên →</h3>
                    <p @class([$__VIEW_ID__ . '-47283206'])>Bốn bước từ khai báo module tới kiểm tra cả SSR lẫn SPA.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-85abe3c6', 'ov-card']) @attr(['href' => '/docs/architecture'])>
                    <span @class([$__VIEW_ID__ . '-f4c4c3cf'])>Nền tảng</span>
                    <h3 @class([$__VIEW_ID__ . '-c922b52e'])>Kiến trúc hệ thống →</h3>
                    <p @class([$__VIEW_ID__ . '-9a4089e3'])>Bốn lớp và một luồng: application, core, compiler, client.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-c6361774', 'ov-card']) @attr(['href' => '/docs/contexts'])>
                    <span @class([$__VIEW_ID__ . '-be312917'])>Nền tảng</span>
                    <h3 @class([$__VIEW_ID__ . '-0ee840e5'])>Context, module &amp; controller →</h3>
                    <p @class([$__VIEW_ID__ . '-34d12ce0'])>Biên giới giữa web, admin, api; auto-discovery và fluent routing.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-f7f8c606', 'ov-card']) @attr(['href' => '/docs/compiler'])>
                    <span @class([$__VIEW_ID__ . '-9264060e'])>Nền tảng</span>
                    <h3 @class([$__VIEW_ID__ . '-7ef211eb'])>Compiler &amp; AST →</h3>
                    <p @class([$__VIEW_ID__ . '-d8acb95e'])>Một cú pháp, hai output, cơ chế include và children đồng bộ.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-26a8cc25', 'ov-card']) @attr(['href' => '/docs/sao-file'])>
                    <span @class([$__VIEW_ID__ . '-0c3cb021'])>Viết view</span>
                    <h3 @class([$__VIEW_ID__ . '-245410bf'])>Cấu trúc file .sao →</h3>
                    <p @class([$__VIEW_ID__ . '-81493a81'])>Bốn phần của một single-file component và hai chế độ cú pháp.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-f9b8547f', 'ov-card']) @attr(['href' => '/docs/directives'])>
                    <span @class([$__VIEW_ID__ . '-bc4f736c'])>Viết view</span>
                    <h3 @class([$__VIEW_ID__ . '-26b50979'])>Tham chiếu directive →</h3>
                    <p @class([$__VIEW_ID__ . '-cf927f87'])>Bảy nhóm directive, từ khai báo tới quyền và biến ma thuật.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-36457108', 'ov-card']) @attr(['href' => '/docs/reactivity'])>
                    <span @class([$__VIEW_ID__ . '-686a1f19'])>Viết view</span>
                    <h3 @class([$__VIEW_ID__ . '-1b5d3067'])>State &amp; reactivity →</h3>
                    <p @class([$__VIEW_ID__ . '-8a36e6f1'])>Setter, batching theo khung hình, computed và element API.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-9e97b488', 'ov-card']) @attr(['href' => '/docs/runtime'])>
                    <span @class([$__VIEW_ID__ . '-bf975475'])>Runtime</span>
                    <h3 @class([$__VIEW_ID__ . '-36bfa77e'])>Runtime &amp; hydration →</h3>
                    <p @class([$__VIEW_ID__ . '-2085ecfa'])>Claim DOM, reactive update, page cache và dọn tài nguyên.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-2ade4378', 'ov-card']) @attr(['href' => '/docs/lifecycle'])>
                    <span @class([$__VIEW_ID__ . '-84b5f3db'])>Runtime</span>
                    <h3 @class([$__VIEW_ID__ . '-902cacf3'])>Vòng đời &amp; marker →</h3>
                    <p @class([$__VIEW_ID__ . '-7e800569'])>Bảy chuyển trạng thái và hợp đồng marker giữa server với client.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-03600615', 'ov-card']) @attr(['href' => '/docs/router'])>
                    <span @class([$__VIEW_ID__ . '-5eb52472'])>Runtime</span>
                    <h3 @class([$__VIEW_ID__ . '-edc1ad53'])>Router &amp; dịch vụ client →</h3>
                    <p @class([$__VIEW_ID__ . '-676d1978'])>PageCache, layout diff và bộ service trên Application container.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-4d5e98af', 'ov-card']) @attr(['href' => '/docs/build'])>
                    <span @class([$__VIEW_ID__ . '-ac4f1e06'])>Vận hành</span>
                    <h3 @class([$__VIEW_ID__ . '-0e5e2a5c'])>Build, CLI &amp; cấu hình →</h3>
                    <p @class([$__VIEW_ID__ . '-b2bb31ad'])>Hai chặng build, bốn file cấu hình và bộ kiểm thử.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-e79e65ec', 'ov-card']) @attr(['href' => '/docs/status'])>
                    <span @class([$__VIEW_ID__ . '-6938fd40'])>Vận hành</span>
                    <h3 @class([$__VIEW_ID__ . '-bda0b470'])>Giới hạn đã biết →</h3>
                    <p @class([$__VIEW_ID__ . '-3216ecc8'])>Cái gì đang chạy đầy đủ, cái gì còn dở và cách đi vòng.</p>
                </a>
            </div>

            <p @class([$__VIEW_ID__ . '-a2564ef8', 'kicker'])><span @class([$__VIEW_ID__ . '-40949b1e'])>LIVE</span> Không chỉ đọc sơ đồ</p>
            <h2 @class([$__VIEW_ID__ . '-e8cbe06f'])>Bốn trang đang chạy thật.</h2>
            <p @class([$__VIEW_ID__ . '-e81f259e'])>Mỗi trang dưới đây là một fixture có chủ đích, không phải ảnh chụp. Mở DevTools xem HTML lần đầu để thấy nội dung đã có sẵn trước khi JavaScript chạy.</p>
            <div @class([$__VIEW_ID__ . '-1d953a43', 'ov-grid'])>
                <a @class([$__VIEW_ID__ . '-8767a4ad', 'ov-card']) @attr(['href' => '/demo'])>
                    <span @class([$__VIEW_ID__ . '-e26fec16'])>Fixture cú pháp</span>
                    <h3 @class([$__VIEW_ID__ . '-e468fa2e'])>Interactive demo →</h3>
                    <p @class([$__VIEW_ID__ . '-7e9cbc96'])>Chín nhóm cú pháp trong một trang: state, event, binding, điều kiện, vòng lặp, switch, props, import và children.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-9181e823', 'ov-card']) @attr(['href' => '/todo-list'])>
                    <span @class([$__VIEW_ID__ . '-a4dd383e'])>Layout dùng chung</span>
                    <h3 @class([$__VIEW_ID__ . '-6f84077d'])>Todo workspace →</h3>
                    <p @class([$__VIEW_ID__ . '-1e043e54'])>State cục bộ của trang trong khi layout giữ nguyên qua mỗi lần đổi route.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-421ed208', 'ov-card']) @attr(['href' => '/roster'])>
                    <span @class([$__VIEW_ID__ . '-00ca029a'])>Sửa đồng thời</span>
                    <h3 @class([$__VIEW_ID__ . '-86aa4e60'])>Roster sync →</h3>
                    <p @class([$__VIEW_ID__ . '-41bb2dda'])>Poll ba mươi giây, diff giữ reference, và xử lý khi người khác sửa hoặc xoá đúng bản ghi bạn đang mở form.</p>
                </a>
                <a @class([$__VIEW_ID__ . '-4744234c', 'ov-card']) @attr(['href' => '/ping'])>
                    <span @class([$__VIEW_ID__ . '-234c0225'])>Hydration trần</span>
                    <h3 @class([$__VIEW_ID__ . '-2564cd1d'])>Ping →</h3>
                    <p @class([$__VIEW_ID__ . '-f74ab401'])>Fixture nhỏ nhất: state, event, binding và một vòng lặp — đủ để soi marker bằng mắt.</p>
                </a>
            </div>
        </div>

        <a @class([$__VIEW_ID__ . '-ceb15976', 'doc-next']) @attr(['href' => '/docs/getting-started'])>
            <div @class([$__VIEW_ID__ . '-60f0ac7a'])><span @class([$__VIEW_ID__ . '-b7585c3f'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-8767f8f3'])>Cài đặt &amp; route đầu tiên</strong></div>
            <span @class([$__VIEW_ID__ . '-8287de38', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
