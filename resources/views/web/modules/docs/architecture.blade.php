@exec($__ONE_COMPONENT_REGISTRY__ = ['code-window' => 'web.components.code-window']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])>
                <p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>01</span> NỀN TẢNG</p>
                <h1 @class([$__VIEW_ID__ . '-Bdoc112'])>Kiến trúc hệ thống Saola.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-Bdoc121'])>Saola hợp nhất sức mạnh backend Laravel 13 với trải nghiệm mượt mà của SPA hiện đại. Một mã nguồn <code @class([$__VIEW_ID__ . '-Bdoc1211'])>.sao</code> duy nhất được biên dịch song song cho cả SSR phía máy chủ và reactive runtime phía trình duyệt.</p>
                <dl @class([$__VIEW_ID__ . '-Bdoc122'])>
                    <div @class([$__VIEW_ID__ . '-Bdoc1221'])><dt @class([$__VIEW_ID__ . '-Bdoc12211'])>Backend</dt><dd @class([$__VIEW_ID__ . '-Bdoc12212'])>Laravel 13 &amp; saola/core</dd></div>
                    <div @class([$__VIEW_ID__ . '-Bdoc1222'])><dt @class([$__VIEW_ID__ . '-Bdoc12221'])>Compiler</dt><dd @class([$__VIEW_ID__ . '-Bdoc12222'])>saola/compiler (PHP AST)</dd></div>
                    <div @class([$__VIEW_ID__ . '-Bdoc1223'])><dt @class([$__VIEW_ID__ . '-Bdoc12231'])>Builder</dt><dd @class([$__VIEW_ID__ . '-Bdoc12232'])>@saolabs/builder (CLI &amp; Bundler)</dd></div>
                    <div @class([$__VIEW_ID__ . '-Bdoc1224'])><dt @class([$__VIEW_ID__ . '-Bdoc12241'])>Frontend</dt><dd @class([$__VIEW_ID__ . '-Bdoc12242'])>@saolabs/client (Reactive SPA)</dd></div>
                </dl>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-Bdoc2', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-Bdoc21', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc211'])>01. TỔNG QUAN</span> Bốn tầng hệ sinh thái &amp; Ba vòng đời</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc22'])>Kiến trúc 4 tầng từ Server đến Client DOM.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc23'])>Hệ sinh thái Saola được thiết kế theo các tầng ranh giới rõ ràng, kết nối với nhau bằng các contract chặt chẽ được định nghĩa bằng spec:</p>

            <div @class([$__VIEW_ID__ . '-Bdoc24', 'ov-grid'])>
                <div @class([$__VIEW_ID__ . '-Bdoc241', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2411'])>Composer</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2412'])>saola/core</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2413'])>Thư viện lõi PHP trên nền Laravel: <code @class([$__VIEW_ID__ . '-Bdoc24131'])>System::context()</code> routing ủy quyền cho Registry (zero-static state), base controllers (Web, Admin, Api), auto-discovery module đệ quy, ViewContext phân cấp 3 tầng, Theme fallback engine và <code @class([$__VIEW_ID__ . '-Bdoc24132'])>ViewStorageManager</code> sinh marker SSR.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc242', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2421'])>Composer</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2422'])>saola/compiler</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2423'])>Trình biên dịch file <code @class([$__VIEW_ID__ . '-Bdoc24231'])>.sao</code> thuần PHP dựa trên cây AST duy nhất. Phân tích cú pháp template, directive, script và style; emit đồng thời Blade template (SSR) và TypeScript/JavaScript component (CSR) bảo đảm đồng bộ ngữ nghĩa hoàn hảo.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc243', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2431'])>npm</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2432'])>@saolabs/builder</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2433'])>Tầng điều phối build CLI (<code @class([$__VIEW_ID__ . '-Bdoc24331'])>sao-compile</code>). Đọc <code @class([$__VIEW_ID__ . '-Bdoc24332'])>sao.config.json</code>, quét view, gọi <code @class([$__VIEW_ID__ . '-Bdoc24333'])>vendor/bin/saoc</code>, sinh <code @class([$__VIEW_ID__ . '-Bdoc24334'])>registry.ts</code>, tự động tổng hợp entry <code @class([$__VIEW_ID__ . '-Bdoc24335'])>app.{ctx}.js</code> từ các bundle <code @class([$__VIEW_ID__ . '-Bdoc24336'])>bootstrap.ts</code> và tích hợp Vite.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc244', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2441'])>npm</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2442'])>@saolabs/client</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2443'])>SPA runtime phía browser: Application container, Router hỗ trợ fallback từ theme về base, ViewManager, claim DOM Hydration không re-render, hệ thống Reactive State, PageCache và bộ client services (Http, Event, Store, Head…).</p>
                </div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc25', 'ov-sub'])>Nguyên tắc cốt lõi: Phân định Ba Vòng Đời (Three Lifecycles)</p>
            <p @class([$__VIEW_ID__ . '-Bdoc26'])>Mỗi thư mục trong dự án Saola tuân thủ nghiêm ngặt đúng một trong ba vòng đời, loại bỏ triệt để tình trạng mã viết tay bị lẫn vào mã máy sinh:</p>

            <div @class([$__VIEW_ID__ . '-Bdoc27', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc271'])><div @class([$__VIEW_ID__ . '-Bdoc2711', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27111'])>Authored</code></div><span @class([$__VIEW_ID__ . '-Bdoc2712'])>Mã nguồn do con người viết: đặt tại <code @class([$__VIEW_ID__ . '-Bdoc27121'])>resources/saola/</code> (và ngoại lệ duy nhất <code @class([$__VIEW_ID__ . '-Bdoc27122'])>resources/views/_system/</code> cho Blade hệ thống). Đây là nơi duy nhất lập trình viên mở ra để phát triển giao diện và logic client.</span><b @class([$__VIEW_ID__ . '-Bdoc2713'])>con người</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc272'])><div @class([$__VIEW_ID__ . '-Bdoc2721', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27211'])>Generated</code></div><span @class([$__VIEW_ID__ . '-Bdoc2722'])>Mã do máy sinh 100%: <code @class([$__VIEW_ID__ . '-Bdoc27221'])>resources/views/{web,admin}/</code> (Blade), <code @class([$__VIEW_ID__ . '-Bdoc27222'])>resources/js/saola/</code> (TypeScript/Registry), <code @class([$__VIEW_ID__ . '-Bdoc27223'])>public/static/saola/{ctx}/</code> (Bundle). Có thể xóa sạch bất kỳ lúc nào, chạy build là tái tạo lại nguyên vẹn.</span><b @class([$__VIEW_ID__ . '-Bdoc2723'])>máy sinh</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc273'])><div @class([$__VIEW_ID__ . '-Bdoc2731', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27311'])>Installed</code></div><span @class([$__VIEW_ID__ . '-Bdoc2732'])>Gói mở rộng/theme cài đặt độc lập: nằm tại <code @class([$__VIEW_ID__ . '-Bdoc27321'])>themes/{slug}/</code> ở gốc dự án. Tự chứa đầy đủ cấu hình, view và asset; thêm, đổi hoặc gỡ bỏ theme mà không cần build lại ứng dụng web.</span><b @class([$__VIEW_ID__ . '-Bdoc2733'])>tự chứa</b></div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc28', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc281'])>02. CẤU TRÚC THƯ MỤC</span> Tổ chức toàn bộ dự án</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc29'])>Cấu trúc thư mục chuẩn của ứng dụng Saola.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e10_'])>Dự án Saola tổ chức mã nguồn theo hướng tách biệt tuyệt đối giữa <strong @class([$__VIEW_ID__ . '-Bdoc2e10_1'])>Backend Modules</strong>, <strong @class([$__VIEW_ID__ . '-Bdoc2e10_2'])>Mã nguồn Authored (resources/saola/)</strong>, <strong @class([$__VIEW_ID__ . '-Bdoc2e10_3'])>Gói Themes độc lập (themes/)</strong>, <strong @class([$__VIEW_ID__ . '-Bdoc2e10_4'])>Mã nguồn Generated</strong> và <strong @class([$__VIEW_ID__ . '-Bdoc2e10_5'])>Tệp tĩnh phục vụ client</strong>:</p>

            @startMarker('component', 'Bdoc2c1')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_0'))
@verbatim
saola-project/
├── app/
│   ├── Http/Controllers/          # Base controllers (WebController, AdminController, ApiController)
│   ├── Modules/                   # Các Module nghiệp vụ tự chứa (Auto-discovered đệ quy)
│   │   ├── Home/                  # Module trang chủ
│   │   ├── Docs/                  # Module tài liệu
│   │   ├── Roster/                # Module danh sách nhân sự
│   │   └── User/                  # Module quản lý người dùng (Model, Mask, Repo, Service)
│   ├── Models/                    # Shared Eloquent models
│   └── Providers/
│       ├── AppServiceProvider.php    # Đăng ký view context ứng dụng (configureViews trong booted)
│       └── ModuleServiceProvider.php # Auto-discovery modules đệ quy từ Saola Core
│
├── resources/
│   ├── saola/                     # AUTHORED: Nơi duy nhất con người viết code frontend
│   │   ├── _app/                  # LOGIC DÙNG CHUNG TOÀN HỆ THỐNG
│   │   │   ├── bootstrap.ts       # export default defineBundle({...}) - providers, services chung
│   │   │   ├── providers/
│   │   │   ├── services/
│   │   │   └── helpers/
│   │   ├── web/                   # CONTEXT 'web' (Public Website SSR + Hydrate)
│   │   │   ├── app/
│   │   │   │   ├── bootstrap.ts   # export default defineBundle({...}) riêng cho web
│   │   │   │   └── services/
│   │   │   ├── views/             # Views .sao: layouts/, modules/, components/, partials/
│   │   │   └── assets/            # CSS, images riêng cho web
│   │   ├── admin/                 # CONTEXT 'admin' (Trang quản trị)
│   │   │   ├── app/bootstrap.ts   # Bundle riêng cho admin
│   │   │   └── views/
│   │   └── mobile/                # CONTEXT 'mobile' (Webview / PWA CSR thuần)
│   │       ├── app/bootstrap.ts
│   │       └── views/
│   │
│   ├── views/                     # BLADE TEMPLATES (Địa hạt Laravel)
│   │   ├── _system/               # Blade hệ thống viết tay (page/begin, page/end, scripts)
│   │   ├── web/                   # GENERATED: Blade templates của context web do saoc sinh
│   │   └── admin/                 # GENERATED: Blade templates của context admin do saoc sinh
│   │
│   ├── js/
│   │   └── saola/                 # GENERATED 100%: TypeScript sinh ra từ .sao (đã gitignore)
│   │       ├── app.web.js         # Entry point sinh tự động: gộp _app + web/app + registry
│   │       ├── views.ts           # Combined view registry
│   │       └── web/               # Registry & compiled views của Web context
│   │
│   └── css/                       # CSS toàn cục & Tailwind
│
├── themes/                        # INSTALLED: CÁC GÓI THEME ĐỘC LẬP (Nằm ngoài outDir của Vite)
│   ├── aurora/                    # Gói theme 'aurora' (build độc lập, nạp động theo request)
│   │   ├── sao.config.json        # Cấu hình compiler riêng của theme
│   │   ├── vite.config.js         # Build asset riêng của theme
│   │   ├── src/                   # Mã nguồn theme: src/views/, src/app/bootstrap.ts
│   │   └── dist/                  # Output biên dịch: dist/views (Blade) & dist/public (JS/CSS bundle)
│   └── demo/                      # Gói theme 'demo'
│
├── public/static/saola/           # BUILD OUTPUT: Tệp tĩnh phục vụ browser
│   ├── web/js/app.web.js          # Bundle JavaScript của Web SPA do Vite đóng gói
│   ├── web/css/app.css            # Stylesheet của Web SPA
│   ├── themes/                    # Symlink hoặc thư mục publish assets của các themes
│   └── manifest.json              # Vite build manifest
│
├── config/
│   ├── sao.php                    # Cấu hình themes path, compiler & options phía PHP
│   └── spa.php                    # Cấu hình runtime SPA (mode, router, debug)
│
├── sao.config.json                # Cấu hình context & đường dẫn cho compiler CLI
└── vite.config.js                 # Cấu hình đóng gói Vite
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_0'))
@include('web.components.code-window', ['label' => "DIRECTORY", 'title' => "Cấu trúc thư mục dự án Saola chuẩn xác", 'lang' => "none", '__ONE_CHILDREN_CONTENT__' => $__code_window__0_content])
@endMarker('component', 'Bdoc2c1')

            <p @class([$__VIEW_ID__ . '-Bdoc2e11_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e11_1'])>03. KIẾN TRÚC BACKEND &amp; CONTEXT</span> Module tự chứa &amp; Controller theo Context</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e12_'])>Kiến trúc Backend: Module hóa đệ quy và Context-Aware.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e13_'])>Mỗi module trong Saola là một đơn vị kinh doanh tự chứa (Self-contained Business Domain). Trong tầng HTTP, các controller được <strong @class([$__VIEW_ID__ . '-Bdoc2e13_1'])>phân tách tường minh theo từng Context</strong> (Admin, Api, Web) với namespace và base controller chuyên biệt:</p>

            @startMarker('component', 'Bdoc2c2')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_1'))
@verbatim
app/Modules/User/
├── ModuleServiceProvider.php        # Khai báo bindings, dependencies & routes đa context
├── Http/
│   ├── Controllers/                 # CONTROLLER PHÂN ĐỊNH RÕ RÀNG THEO CONTEXT
│   │   ├── Admin/                   # Context 'admin' (Trang quản trị, CRUD, phân quyền)
│   │   │   └── UserController.php   # -> extends App\Http\Controllers\AdminController
│   │   ├── Api/                     # Context 'api' (RESTful JSON API chuẩn)
│   │   │   └── UserController.php   # -> extends App\Http\Controllers\ApiController
│   │   └── Web/                     # Context 'web' (Public Website, SSR + SPA)
│   │       └── UserController.php   # -> extends App\Http\Controllers\WebController
│   │
│   └── Requests/                    # Form Requests validate dữ liệu
│       ├── CreateUserRequest.php
│       └── UpdateUserRequest.php
├── Models/                          # THỰC THỂ DỮ LIỆU CƠ SỞ
│   └── User.php                     # Eloquent Model (Cột, bảng, quan hệ database)
├── Masks/                           # MẶT NẠ DỮ LIỆU ĐẦU RA (Data Transformer)
│   ├── UserMask.php                 # Transform & bảo vệ các trường của Model khi ra ngoài
│   └── UserCollection.php           # Collection mask cho danh sách
├── Repositories/                    # TẦNG TRUY VẤN DỮ LIỆU
│   ├── UserRepositoryInterface.php  # Contract truy vấn dữ liệu
│   └── UserRepository.php           # Triển khai Repository pattern với Filter, Scope, OwnerAction
└── Services/                        # TẦNG XỬ LÝ NGHIỆP VỤ
    ├── UserServiceInterface.php     # Contract logic nghiệp vụ
    └── UserService.php              # Xử lý nghiệp vụ, giao dịch, dispatch event
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__1_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_1'))
@include('web.components.code-window', ['label' => "DIRECTORY", 'title' => "app/Modules/{ModuleName}/", 'lang' => "none", '__ONE_CHILDREN_CONTENT__' => $__code_window__1_content])
@endMarker('component', 'Bdoc2c2')

            <div @class([$__VIEW_ID__ . '-Bdoc2e14_', 'ov-note'])>
                <strong @class([$__VIEW_ID__ . '-Bdoc2e14_1'])>Linh hoạt theo nhu cầu:</strong> Cấu trúc trên là mô hình đầy đủ. Một module không nhất thiết phải tạo đủ 7 thư mục — các module chỉ có view (như <code @class([$__VIEW_ID__ . '-Bdoc2e14_2'])>Ping</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e14_3'])>Docs</code>) hoặc chỉ có API (như <code @class([$__VIEW_ID__ . '-Bdoc2e14_4'])>Roster</code>) chỉ cần khai báo controller và route tương ứng.
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc2e15_', 'ov-sub'])>Sự Bất Đối Xứng Của Bốn Context</p>
            <p @class([$__VIEW_ID__ . '-Bdoc2e16_'])>Context là khái niệm kiến trúc xuyên suốt cả backend và frontend. Tập backend-context và frontend-context giao nhau chứ không nhất thiết đối xứng hoàn toàn:</p>

            <div @class([$__VIEW_ID__ . '-Bdoc2e17_', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e17_1'])><div @class([$__VIEW_ID__ . '-Bdoc2e17_11', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e17_111'])>web</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e17_12'])>Full-stack hoàn chỉnh: Backend route + Blade SSR + Hydration thành reactive SPA client. Khai báo đủ cả backend lẫn frontend views.</span><b @class([$__VIEW_ID__ . '-Bdoc2e17_13'])>prefix /</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e17_2'])><div @class([$__VIEW_ID__ . '-Bdoc2e17_21', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e17_211'])>admin</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e17_22'])>Quản trị nghiệp vụ: Tích hợp sẵn workflow CRUD, middleware <code @class([$__VIEW_ID__ . '-Bdoc2e17_221'])>auth</code>, kiểm tra quyền <code @class([$__VIEW_ID__ . '-Bdoc2e17_222'])>permission:admin</code> và form validation.</span><b @class([$__VIEW_ID__ . '-Bdoc2e17_23'])>prefix /admin</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e17_3'])><div @class([$__VIEW_ID__ . '-Bdoc2e17_31', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e17_311'])>api</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e17_32'])>Context chỉ-backend: Phục vụ RESTful JSON tốc độ cao qua <code @class([$__VIEW_ID__ . '-Bdoc2e17_321'])>ApiResponse</code>, không render view, không sinh Blade hay bundle frontend.</span><b @class([$__VIEW_ID__ . '-Bdoc2e17_33'])>prefix /api</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e17_4'])><div @class([$__VIEW_ID__ . '-Bdoc2e17_41', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e17_411'])>mobile</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e17_42'])>Context chỉ-frontend: Ứng dụng Webview/PWA chạy CSR thuần túy, không Blade template, không SSR boot, gọi API vào context <code @class([$__VIEW_ID__ . '-Bdoc2e17_421'])>api</code>.</span><b @class([$__VIEW_ID__ . '-Bdoc2e17_43'])>CSR thuần</b></div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc2e18_', 'ov-sub'])>Kiến trúc Registry không giữ trạng thái tĩnh (Zero-Static State)</p>
            <p @class([$__VIEW_ID__ . '-Bdoc2e19_'])>Class <code @class([$__VIEW_ID__ . '-Bdoc2e19_1'])>System</code> hoạt động như một Façade thuần túy, hoàn toàn không lưu trữ bất kỳ trạng thái nào trong các static property (<code @class([$__VIEW_ID__ . '-Bdoc2e19_2'])>getStaticProperties()</code> luôn rỗng). Toàn bộ trạng thái module, routes, menu và quyền được lưu trong <code @class([$__VIEW_ID__ . '-Bdoc2e19_3'])>Registry</code> được quản lý bởi Service Container của Laravel:</p>

            <div @class([$__VIEW_ID__ . '-Bdoc2e20_', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e20_1'])><div @class([$__VIEW_ID__ . '-Bdoc2e20_11', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e20_111'])>System::context($name)</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e20_12'])>Khởi tạo fluent context builder, đăng ký route và gán middleware riêng cho từng context.</span><b @class([$__VIEW_ID__ . '-Bdoc2e20_13'])>routing</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e20_2'])><div @class([$__VIEW_ID__ . '-Bdoc2e20_21', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e20_211'])>$module->sub($slug, $opts)</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e20_22'])>Tạo sub-module con phân cấp đệ quy, duy trì quan hệ cha-con (parent, depth) và kế thừa prefix đường dẫn.</span><b @class([$__VIEW_ID__ . '-Bdoc2e20_23'])>sub-module</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e20_3'])><div @class([$__VIEW_ID__ . '-Bdoc2e20_31', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e20_311'])>->title() / ->display_name()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e20_32'])>Gán nhãn hiển thị và tiêu đề trang phục vụ sinh menu hệ thống tự động qua <code @class([$__VIEW_ID__ . '-Bdoc2e20_321'])>System::menu($context)</code>.</span><b @class([$__VIEW_ID__ . '-Bdoc2e20_33'])>metadata</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e20_4'])><div @class([$__VIEW_ID__ . '-Bdoc2e20_41', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e20_411'])>->permission($name)</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e20_42'])>Gán quyền truy cập cho module hoặc route action; tổng hợp danh sách quyền qua <code @class([$__VIEW_ID__ . '-Bdoc2e20_421'])>System::permissions($context)</code>.</span><b @class([$__VIEW_ID__ . '-Bdoc2e20_43'])>security</b></div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc2e21_', 'ov-sub'])>Đăng ký Route đa ngữ cảnh (Context-Aware Routing)</p>
            <p @class([$__VIEW_ID__ . '-Bdoc2e22_'])>Routes không bị dồn vào một file <code @class([$__VIEW_ID__ . '-Bdoc2e22_1'])>routes/web.php</code> khổng lồ. Thay vào đó, mỗi module tự quản lý routes của mình qua Fluent API của <code @class([$__VIEW_ID__ . '-Bdoc2e22_2'])>System::context()</code> trong method <code @class([$__VIEW_ID__ . '-Bdoc2e22_3'])>routes()</code>:</p>

            @startMarker('component', 'Bdoc2c3')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_2'))
@verbatim
namespace App\Modules\User;

use Saola\Core\Providers\ModuleServiceProvider as CoreServiceProvider;
use Saola\Core\System;
use App\Modules\User\Http\Controllers\Web\UserController as WebUserController;
use App\Modules\User\Http\Controllers\Admin\UserController as AdminUserController;
use App\Modules\User\Http\Controllers\Api\UserController as ApiUserController;

class ModuleServiceProvider extends CoreServiceProvider
{
    public function routes(): void
    {
        // 1. Web Context (Public Website)
        System::context('web')
            ->module(['slug' => 'user', 'prefix' => '/user', 'priority' => 10])
            ->title('Hồ sơ người dùng')
            ->display_name('Tài khoản')
            ->controller(WebUserController::class)
            ->as('user')
            ->group(function ($module) {
                $module->get('/profile', 'profile')->name('profile');
                $module->get('/settings', 'settings')->name('settings');
            });

        // 2. Admin Context (Quản trị CRUD & Phân quyền)
        System::context('admin')
            ->module('users')
            ->display_name('Quản lý người dùng')
            ->permission('users.manage')
            ->controller(AdminUserController::class)
            ->group(function ($module) {
                $module->get('/', 'viewIndexPage')->name('index')->permission('users.view');
                $module->get('/create', 'viewCreatePage')->name('create')->permission('users.create');
                $module->get('/{id}/edit', 'viewEditPage')->name('edit')->permission('users.edit');
                $module->post('/create', 'create')->name('store')->permission('users.create');
                $module->post('/{id}/edit', 'update')->name('update')->permission('users.edit');
                $module->delete('/{id}', 'destroy')->name('destroy')->permission('users.delete');
            });

        // 3. API Context (RESTful JSON)
        System::context('api')
            ->module(['slug' => 'users', 'prefix' => '/users'])
            ->controller(ApiUserController::class)
            ->as('users')
            ->group(function ($module) {
                $module->get('/', 'index')->name('index');
                $module->get('/{id}', 'show')->name('show');
                $module->post('/', 'store')->name('store');
            });
    }
}
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__2_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_2'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "app/Modules/User/ModuleServiceProvider.php", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__2_content])
@endMarker('component', 'Bdoc2c3')

            <p @class([$__VIEW_ID__ . '-Bdoc2e23_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e23_1'])>04. KIẾN TRÚC SAOLA VIEW &amp; THEME</span> Bundle Contract &amp; Theming Fallback</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e24_'])>Tổ chức View theo Context, Hợp đồng Bundle &amp; Themes.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e25_'])>Mã nguồn giao diện con người viết chỉ nằm tại <code @class([$__VIEW_ID__ . '-Bdoc2e25_1'])>resources/saola/</code> và các gói theme độc lập tại <code @class([$__VIEW_ID__ . '-Bdoc2e25_2'])>themes/</code>:</p>

            @startMarker('component', 'Bdoc2c4')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_3'))
@verbatim
resources/saola/
├── _app/                          # LOGIC DÙNG CHUNG CỦA TOÀN BỘ ỨNG DỤNG
│   ├── bootstrap.ts               # Khai báo bundle chung cho mọi context: defineBundle({...})
│   ├── providers/                 # Client service providers chung
│   ├── services/                  # Các service client dùng chung (Http, Event, Storage...)
│   └── helpers/                   # Utility helpers
│
├── web/                           # CONTEXT 'web' (Giao diện chính)
│   ├── app/
│   │   ├── bootstrap.ts           # Khai báo bundle riêng cho context web
│   │   └── services/              # HighlightService, NavigationService...
│   ├── views/
│   │   ├── layouts/               # base.sao, docs.sao, public.sao, workspace.sao
│   │   ├── modules/               # Page views: home/, docs/, roster/, user/...
│   │   ├── components/            # UI components tái sử dụng: code-window.sao, statcard.sao
│   │   └── partials/              # Snippets nhỏ: head.sao, nav.sao
│   └── assets/                    # Static assets riêng của web
│
├── admin/                         # CONTEXT 'admin'
│   ├── app/bootstrap.ts
│   └── views/
│
└── mobile/                        # CONTEXT 'mobile'
    ├── app/bootstrap.ts
    └── views/

themes/                            # GÓI THEME ĐỘC LẬP (Không đụng vào cây mã nguồn app)
├── aurora/
│   ├── sao.config.json            # Cấu hình compiler riêng của theme
│   ├── vite.config.js             # Build bundle JS/CSS riêng của theme
│   ├── src/
│   │   ├── app/bootstrap.ts       # defineBundle của theme
│   │   └── views/modules/
│   │       └── ping/index.sao     # Chỉ ghi đè view này, các view khác tự fallback về web base
│   └── dist/                      # dist/views (Blade) và dist/public (JS/CSS bundle)
└── demo/
    ├── sao.config.json
    ├── src/views/modules/abc/
    └── dist/
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__3_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_3'))
@include('web.components.code-window', ['label' => "DIRECTORY", 'title' => "Tổ chức mã nguồn Authored và Gói Themes độc lập", 'lang' => "none", '__ONE_CHILDREN_CONTENT__' => $__code_window__3_content])
@endMarker('component', 'Bdoc2c4')

            <p @class([$__VIEW_ID__ . '-Bdoc2e26_', 'ov-sub'])>Hợp đồng Bundle Phía Client (defineBundle Contract)</p>
            <p @class([$__VIEW_ID__ . '-Bdoc2e27_'])>Điểm cấu hình và mở rộng logic client duy nhất của ứng dụng là qua hợp đồng <code @class([$__VIEW_ID__ . '-Bdoc2e27_1'])>defineBundle</code> trong các file <code @class([$__VIEW_ID__ . '-Bdoc2e27_2'])>bootstrap.ts</code>. Lập trình viên không phải viết tay entry <code @class([$__VIEW_ID__ . '-Bdoc2e27_3'])>app.js</code>; builder tự động gộp bundle chung và bundle context thành entry chuẩn:</p>

            @startMarker('component', 'Bdoc2c5')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_4'))
@verbatim
import { defineBundle } from '@saolabs/client';

export default defineBundle({
    name: 'app',
    providers: [
        // Đăng ký ServiceProvider client theo thứ tự phụ thuộc topo
    ],
    services: {
        // Đăng ký các service client vào Application container
    },
    helpers: {
        // Đăng ký global helpers
    },
});
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__4_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_4'))
@include('web.components.code-window', ['label' => "TYPESCRIPT", 'title' => "resources/saola/_app/bootstrap.ts", 'lang' => "typescript", '__ONE_CHILDREN_CONTENT__' => $__code_window__4_content])
@endMarker('component', 'Bdoc2c5')

            <p @class([$__VIEW_ID__ . '-Bdoc2e28_', 'ov-sub'])>Cơ chế phân giải đường dẫn View (View Path Resolution)</p>
            <p @class([$__VIEW_ID__ . '-Bdoc2e29_'])>Saola sử dụng quy ước đường dẫn phân cấp dạng chấm (Dotted Path) và biến hệ thống <code @class([$__VIEW_ID__ . '-Bdoc2e29_1'])>__layout__</code> để đảm bảo tính linh hoạt tối đa:</p>

            <div @class([$__VIEW_ID__ . '-Bdoc2e30_', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e30_1'])><div @class([$__VIEW_ID__ . '-Bdoc2e30_11', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e30_111'])>__layout__ + 'base'</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e30_12'])>Tự động phân giải thành <code @class([$__VIEW_ID__ . '-Bdoc2e30_121'])>web.layouts.base</code> khi ở context <code @class([$__VIEW_ID__ . '-Bdoc2e30_122'])>web</code>, hoặc <code @class([$__VIEW_ID__ . '-Bdoc2e30_123'])>admin.layouts.base</code> khi ở context <code @class([$__VIEW_ID__ . '-Bdoc2e30_124'])>admin</code>.</span><b @class([$__VIEW_ID__ . '-Bdoc2e30_13'])>layout</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e30_2'])><div @class([$__VIEW_ID__ . '-Bdoc2e30_21', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e30_211'])>&#64;import('web.components.code-window')</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e30_22'])>Nhúng một component `.sao` con vào template hiện tại, hỗ trợ truyền props và slots <code @class([$__VIEW_ID__ . '-Bdoc2e30_221'])>&#64;children</code>.</span><b @class([$__VIEW_ID__ . '-Bdoc2e30_23'])>component</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e30_3'])><div @class([$__VIEW_ID__ . '-Bdoc2e30_31', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e30_311'])>&#64;include('web.partials.head')</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e30_32'])>Nạp một partial template tĩnh hoặc snippet dùng chung vào view.</span><b @class([$__VIEW_ID__ . '-Bdoc2e30_33'])>include</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e30_4'])><div @class([$__VIEW_ID__ . '-Bdoc2e30_41', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e30_411'])>$this->responseModule('user.profile', $data)</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e30_42'])>Controller tự động trỏ đến file view <code @class([$__VIEW_ID__ . '-Bdoc2e30_421'])>resources/saola/{context}/views/modules/user/profile.sao</code>.</span><b @class([$__VIEW_ID__ . '-Bdoc2e30_43'])>controller</b></div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc2e31_', 'ov-sub'])>Cơ chế Phân cấp View Context 3 Tầng (View Precedence)</p>
            <p @class([$__VIEW_ID__ . '-Bdoc2e32_'])>Mỗi context (web/admin/api…) quản lý cấu hình thư mục view hoàn toàn độc lập với nhau. Thứ tự ưu tiên xác định view được giải quyết theo 3 tầng:</p>

            <div @class([$__VIEW_ID__ . '-Bdoc2e33_', 'ov-grid'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e33_1', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e33_11'])>Tầng 1 (Thấp nhất)</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e33_12'])>Core Defaults</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e33_13'])>Được thiết lập bởi <code @class([$__VIEW_ID__ . '-Bdoc2e33_131'])>ViewContextServiceProvider</code>, quy ước thư mục cơ sở <code @class([$__VIEW_ID__ . '-Bdoc2e33_132'])>base = slug context</code> (ví dụ: <code @class([$__VIEW_ID__ . '-Bdoc2e33_133'])>web</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e33_134'])>admin</code>).</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e33_2', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e33_21'])>Tầng 2 (Ứng dụng)</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e33_22'])>App Registration</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e33_23'])>Khai báo tại <code @class([$__VIEW_ID__ . '-Bdoc2e33_231'])>AppServiceProvider::configureViews()</code> chạy trong <code @class([$__VIEW_ID__ . '-Bdoc2e33_232'])>$this->app->booted(...)</code>, ghi đè ở cấp worker không phụ thuộc thứ tự nạp package.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e33_3', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e33_31'])>Tầng 3 (Cao nhất)</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e33_32'])>Theme (Per-request)</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e33_33'])>Do <code @class([$__VIEW_ID__ . '-Bdoc2e33_331'])>ThemeService</code> kích hoạt thông qua middleware <code @class([$__VIEW_ID__ . '-Bdoc2e33_332'])>ApplyTheme</code> theo từng request, cho phép đổi giao diện động mà không ảnh hưởng request khác.</p>
                </div>
            </div>

            @startMarker('component', 'Bdoc2c6')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_5'))
@verbatim
public function boot(): void
{
    // booted() luôn chạy sau MỌI provider, tránh tình trạng core merge đè lên app
    $this->app->booted(fn () => $this->configureViews());
}

public function configureViews(): void
{
    // Khai báo base là đủ: sáu thư mục con tự động suy luận theo nó
    app(ViewContextManager::class)->registerContext('web', [
        'base' => 'web',
    ]);

    app(ViewContextManager::class)->registerContext('admin', [
        'base' => 'admin',
    ]);
}
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__5_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_5'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "app/Providers/AppServiceProvider.php", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__5_content])
@endMarker('component', 'Bdoc2c6')

            <p @class([$__VIEW_ID__ . '-Bdoc2e34_', 'ov-sub'])>Cơ chế Theme Fallback 4 Tầng Đồng Bộ (Zero-Rebuild Theming)</p>
            <p @class([$__VIEW_ID__ . '-Bdoc2e35_'])>Khi áp dụng Theme, theme không cần sao chép toàn bộ dự án mà <strong @class([$__VIEW_ID__ . '-Bdoc2e35_1'])>chỉ cần chứa những view muốn thay đổi</strong>. Bốn tầng hệ thống đồng bộ tự động rơi về (fallback) view gốc của context:</p>

            <ol @class([$__VIEW_ID__ . '-Bdoc2e36_', 'flow-timeline'])>
                <li @class([$__VIEW_ID__ . '-Bdoc2e36_1'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e36_11'])>01</span>
                    <div @class([$__VIEW_ID__ . '-Bdoc2e36_12'])>
                        <strong @class([$__VIEW_ID__ . '-Bdoc2e36_121'])>ThemeAwareViewFinder (SSR Engine)</strong>
                        <p @class([$__VIEW_ID__ . '-Bdoc2e36_122'])>Khi render Blade phía máy chủ (<code @class([$__VIEW_ID__ . '-Bdoc2e36_1221'])>&#64;extends</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e36_1222'])>&#64;include</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e36_1223'])>view()</code>), finder tự động tìm view trong theme trước; nếu không có, tự động chuyển về view trong context base gốc.</p>
                    </div>
                    <code @class([$__VIEW_ID__ . '-Bdoc2e36_13'])>SSR FINDER</code>
                </li>
                <li @class([$__VIEW_ID__ . '-Bdoc2e36_2'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e36_21'])>02</span>
                    <div @class([$__VIEW_ID__ . '-Bdoc2e36_22'])>
                        <strong @class([$__VIEW_ID__ . '-Bdoc2e36_221'])>Component Resolution</strong>
                        <p @class([$__VIEW_ID__ . '-Bdoc2e36_222'])>Hàm <code @class([$__VIEW_ID__ . '-Bdoc2e36_2221'])>resolveRouteComponent</code> và <code @class([$__VIEW_ID__ . '-Bdoc2e36_2222'])>resolveClientViewKey</code> xác định key component chuẩn xác gửi cho client, trỏ tới đúng view thực tế đang phục vụ.</p>
                    </div>
                    <code @class([$__VIEW_ID__ . '-Bdoc2e36_23'])>ROUTE MAPPING</code>
                </li>
                <li @class([$__VIEW_ID__ . '-Bdoc2e36_3'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e36_31'])>03</span>
                    <div @class([$__VIEW_ID__ . '-Bdoc2e36_32'])>
                        <strong @class([$__VIEW_ID__ . '-Bdoc2e36_321'])>Global View Composer</strong>
                        <p @class([$__VIEW_ID__ . '-Bdoc2e36_322'])>Composer <code @class([$__VIEW_ID__ . '-Bdoc2e36_3221'])>*</code> chuẩn hóa tên view một lần tập trung thay vì vá víu riêng lẻ tại từng điểm phát response.</p>
                    </div>
                    <code @class([$__VIEW_ID__ . '-Bdoc2e36_33'])>VIEW COMPOSER</code>
                </li>
                <li @class([$__VIEW_ID__ . '-Bdoc2e36_4'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e36_41'])>04</span>
                    <div @class([$__VIEW_ID__ . '-Bdoc2e36_42'])>
                        <strong @class([$__VIEW_ID__ . '-Bdoc2e36_421'])>Client Runtime Fallback</strong>
                        <p @class([$__VIEW_ID__ . '-Bdoc2e36_422'])>Cặp khóa <code @class([$__VIEW_ID__ . '-Bdoc2e36_4221'])>__view_fallback_from__</code> và <code @class([$__VIEW_ID__ . '-Bdoc2e36_4222'])>__view_fallback_to__</code> trong <code @class([$__VIEW_ID__ . '-Bdoc2e36_4223'])>systemData</code> cho phép router và ViewManager phía client biết view nào được thay thế để nạp bundle tương ứng.</p>
                    </div>
                    <code @class([$__VIEW_ID__ . '-Bdoc2e36_43'])>CLIENT FALLBACK</code>
                </li>
            </ol>

            <p @class([$__VIEW_ID__ . '-Bdoc2e37_', 'ov-sub'])>Layout Composition: Block, Extend và Yield</p>
            <p @class([$__VIEW_ID__ . '-Bdoc2e38_'])>Hệ thống kế thừa layout trong Saola mô phỏng cơ chế mạnh mẽ của Blade nhưng kết nối trực tiếp với Client SPA ViewManager:</p>

            @startMarker('component', 'Bdoc2c7')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_6'))
@verbatim
&#64;props({
    title: 'Danh sách bài viết',
    posts: []
})
&#64;states({
    search: '',
    page: 1
})

&lt;template&gt;
    &#64;extends(__layout__ + "public")

    &#64;block('content')
        &lt;main class="posts-page"&gt;
            &lt;header&gt;
                &lt;h1&gt;&#123;&#123; title &#125;&#125;&lt;/h1&gt;
                &lt;input type="text" placeholder="Tìm kiếm..." &#64;bind(search)&gt;
            &lt;/header&gt;

            &lt;section class="posts-grid"&gt;
                &#64;foreach(posts as post)
                    &#64;key(post['id'])
                    &lt;article class="post-card"&gt;
                        &lt;h2&gt;&#123;&#123; post['title'] &#125;&#125;&lt;/h2&gt;
                        &lt;p&gt;&#123;&#123; post['summary'] &#125;&#125;&lt;/p&gt;
                    &lt;/article&gt;
                &#64;endforeach
            &lt;/section&gt;
        &lt;/main&gt;
    &#64;endblock
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
    export default {
        mounted() {
            console.log('Posts list view is active in SPA mode');
        }
    };
&lt;/script&gt;

&lt;style scoped&gt;
    .posts-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
    .post-card { padding: 20px; border: 1px solid var(--line); border-radius: 8px; background: white; }
&lt;/style&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__6_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_6'))
@include('web.components.code-window', ['label' => "SAOLA", 'title' => "resources/saola/web/views/modules/posts/list.sao", 'lang' => "html", '__ONE_CHILDREN_CONTENT__' => $__code_window__6_content])
@endMarker('component', 'Bdoc2c7')

            <p @class([$__VIEW_ID__ . '-Bdoc2e39_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e39_1'])>05. PIPELINE &amp; HYDRATION</span> Chu trình biên dịch &amp; Thực thi</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e40_'])>Pipeline biên dịch 2 giai đoạn (Dual-Target Pipeline).</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e41_'])>Trình biên dịch Saola xử lý file <code @class([$__VIEW_ID__ . '-Bdoc2e41_1'])>.sao</code> qua hai giai đoạn rõ ràng:</p>

            <div @class([$__VIEW_ID__ . '-Bdoc2e42_', 'ov-grid'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e42_1', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e42_11'])>Giai đoạn 1</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e42_12'])>sao-compile (PHP CLI)</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e42_13'])>Đọc file <code @class([$__VIEW_ID__ . '-Bdoc2e42_131'])>.sao</code>, phân tích AST, sinh song song file <strong @class([$__VIEW_ID__ . '-Bdoc2e42_132'])>Blade template</strong> cho server (tại <code @class([$__VIEW_ID__ . '-Bdoc2e42_133'])>resources/views/{ctx}/</code> và <code @class([$__VIEW_ID__ . '-Bdoc2e42_134'])>themes/{theme}/dist/views/</code>) và <strong @class([$__VIEW_ID__ . '-Bdoc2e42_135'])>TypeScript view</strong> cho client (tại <code @class([$__VIEW_ID__ . '-Bdoc2e42_136'])>resources/js/saola/{ctx}/</code>), tự động tạo <code @class([$__VIEW_ID__ . '-Bdoc2e42_137'])>registry.ts</code> và entry <code @class([$__VIEW_ID__ . '-Bdoc2e42_138'])>app.{ctx}.js</code>.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e42_2', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e42_21'])>Giai đoạn 2</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e42_22'])>Vite Bundler</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e42_23'])>Biên dịch TypeScript, nạp entry và đóng gói thành tệp bundle JavaScript tối ưu cho từng context tại <code @class([$__VIEW_ID__ . '-Bdoc2e42_231'])>public/static/saola/{ctx}/js/app.{ctx}.js</code>.</p>
                </div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc2e43_', 'ov-sub'])>Vòng đời Request: Từ URL đến Tương tác Reactive</p>
            <ol @class([$__VIEW_ID__ . '-Bdoc2e44_', 'flow-timeline'])>
                <li @class([$__VIEW_ID__ . '-Bdoc2e44_1'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e44_11'])>01</span>
                    <div @class([$__VIEW_ID__ . '-Bdoc2e44_12'])>
                        <strong @class([$__VIEW_ID__ . '-Bdoc2e44_121'])>Định tuyến &amp; Phân giải Context (Server)</strong>
                        <p @class([$__VIEW_ID__ . '-Bdoc2e44_122'])>Request đến, middleware <code @class([$__VIEW_ID__ . '-Bdoc2e44_1221'])>ApplyTheme</code> và context chạy trước. <code @class([$__VIEW_ID__ . '-Bdoc2e44_1222'])>System::context()</code> khớp đúng route trong module đã đăng ký mà không tải dư thừa các registry khác.</p>
                    </div>
                    <code @class([$__VIEW_ID__ . '-Bdoc2e44_13'])>GET /user/profile</code>
                </li>
                <li @class([$__VIEW_ID__ . '-Bdoc2e44_2'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e44_21'])>02</span>
                    <div @class([$__VIEW_ID__ . '-Bdoc2e44_22'])>
                        <strong @class([$__VIEW_ID__ . '-Bdoc2e44_221'])>Controller xử lý &amp; Gắn kết View (Server)</strong>
                        <p @class([$__VIEW_ID__ . '-Bdoc2e44_222'])>Controller thực hiện logic, nạp dữ liệu từ Service/Repository và tạo view response đóng gói kèm SSR boot payload.</p>
                    </div>
                    <code @class([$__VIEW_ID__ . '-Bdoc2e44_23'])>context: web</code>
                </li>
                <li @class([$__VIEW_ID__ . '-Bdoc2e44_3'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e44_31'])>03</span>
                    <div @class([$__VIEW_ID__ . '-Bdoc2e44_32'])>
                        <strong @class([$__VIEW_ID__ . '-Bdoc2e44_321'])>Blade Render HTML hoàn chỉnh (Server)</strong>
                        <p @class([$__VIEW_ID__ . '-Bdoc2e44_322'])>Mọi layout, slot, block và component con được render thành HTML hoàn chỉnh kèm các comment marker động định danh chuẩn xác và injection của <code @class([$__VIEW_ID__ . '-Bdoc2e44_3221'])>$__helper</code>.</p>
                    </div>
                    <code @class([$__VIEW_ID__ . '-Bdoc2e44_33'])>SSR / READY</code>
                </li>
                <li @class([$__VIEW_ID__ . '-Bdoc2e44_4'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e44_41'])>04</span>
                    <div @class([$__VIEW_ID__ . '-Bdoc2e44_42'])>
                        <strong @class([$__VIEW_ID__ . '-Bdoc2e44_421'])>Client Hydration &amp; Claim DOM (Browser)</strong>
                        <p @class([$__VIEW_ID__ . '-Bdoc2e44_422'])>Runtime <code @class([$__VIEW_ID__ . '-Bdoc2e44_4221'])>@saolabs/client</code> tiếp quản DOM hiện hữu qua các marker và dữ liệu từ SSR Boot script, kích hoạt event listener và reactive bindings mà <em @class([$__VIEW_ID__ . '-Bdoc2e44_4222'])>không hề render lại DOM có sẵn</em>.</p>
                    </div>
                    <code @class([$__VIEW_ID__ . '-Bdoc2e44_43'])>HYDRATE / CLAIM</code>
                </li>
                <li @class([$__VIEW_ID__ . '-Bdoc2e44_5'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e44_51'])>05</span>
                    <div @class([$__VIEW_ID__ . '-Bdoc2e44_52'])>
                        <strong @class([$__VIEW_ID__ . '-Bdoc2e44_521'])>Chuyển sang chế độ SPA hoàn toàn (Browser)</strong>
                        <p @class([$__VIEW_ID__ . '-Bdoc2e44_522'])>Các lần chuyển trang tiếp theo chỉ gọi API lấy delta data JSON, tái sử dụng layout chung (Layout Reuse) và chỉ cập nhật đúng vùng view con thay đổi.</p>
                    </div>
                    <code @class([$__VIEW_ID__ . '-Bdoc2e44_53'])>SPA / ACTIVE</code>
                </li>
            </ol>

            <p @class([$__VIEW_ID__ . '-Bdoc2e45_', 'ov-sub'])>Tối ưu hóa Boot Payload (window.APP_CONFIGS)</p>
            <p @class([$__VIEW_ID__ . '-Bdoc2e46_'])>Payload khởi động SPA được tinh gọn triệt để (giảm hơn 62% kích thước truyền tải, từ 17.4KB xuống ~6.6KB), chỉ chứa các trường client thực sự sử dụng:</p>

            @startMarker('component', 'Bdoc2c8')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_7'))
@verbatim
&lt;script&gt;
window.APP_CONFIGS = {
    container: "#app-root",
    router: {
        mode: "history",
        base: "/",
        routes: [...] // Một danh sách route duy nhất; route nào có view thì component != null
    },
    bundles: [...],   // Bundle nạp rời: server quyết định theme nào đang kích hoạt
    view: {
        contextViews: { ... },
        revision: "v1",
        systemData: { ... },
        ssrData: { ... }
    }
};
&lt;/script&gt;
{!! $__helper-&gt;renderSSRBoot($__VIEW_PATH__ ?? '', $__VIEW_ID__ ?? '') !!}
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__7_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_7'))
@include('web.components.code-window', ['label' => "HTML", 'title' => "resources/views/_system/page/end.blade.php", 'lang' => "html", '__ONE_CHILDREN_CONTENT__' => $__code_window__7_content])
@endMarker('component', 'Bdoc2c8')

            <div @class([$__VIEW_ID__ . '-Bdoc2e47_', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e47_1'])><div @class([$__VIEW_ID__ . '-Bdoc2e47_11', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e47_111'])>router.routes</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e47_12'])>Một danh sách route duy nhất thay vì tách <code @class([$__VIEW_ID__ . '-Bdoc2e47_121'])>allRoutes</code> và <code @class([$__VIEW_ID__ . '-Bdoc2e47_122'])>routes</code>, loại bỏ trùng lặp đăng ký trong Router client.</span><b @class([$__VIEW_ID__ . '-Bdoc2e47_13'])>tối ưu</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e47_2'])><div @class([$__VIEW_ID__ . '-Bdoc2e47_21', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e47_211'])>bundles</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e47_22'])>Chỉ nạp bundle của active theme do server chỉ định, client không cần phỏng đoán hay nạp dư thừa asset.</span><b @class([$__VIEW_ID__ . '-Bdoc2e47_23'])>tối ưu</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e47_3'])><div @class([$__VIEW_ID__ . '-Bdoc2e47_31', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e47_311'])>csrf-token</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e47_32'])>Được đọc trực tiếp từ <code @class([$__VIEW_ID__ . '-Bdoc2e47_321'])>&lt;meta name="csrf-token"&gt;</code> tại <code @class([$__VIEW_ID__ . '-Bdoc2e47_322'])>page.begin</code> thay vì nhồi nhét vào cấu hình JSON.</span><b @class([$__VIEW_ID__ . '-Bdoc2e47_33'])>tối ưu</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e47_4'])><div @class([$__VIEW_ID__ . '-Bdoc2e47_41', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e47_411'])>renderSSRBoot</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e47_42'])>Xuất boot script định danh viewId và view path để client claim DOM và hydrate ngay lập tức.</span><b @class([$__VIEW_ID__ . '-Bdoc2e47_43'])>hydration</b></div>
            </div>

            <div @class([$__VIEW_ID__ . '-Bdoc2e48_', 'ov-note'])>
                <strong @class([$__VIEW_ID__ . '-Bdoc2e48_1'])>Octane Safe &amp; Request Scoped:</strong> Trong các môi trường worker sống lâu (Laravel Octane, FrankenPHP, Swoole), Saola đảm bảo state được cô lập tuyệt đối theo từng request thông qua <code @class([$__VIEW_ID__ . '-Bdoc2e48_2'])>ViewContextManager</code> và <code @class([$__VIEW_ID__ . '-Bdoc2e48_3'])>ViewHelperService</code> (được nạp tự động qua View Composer vào mọi view), loại bỏ triệt để hiện tượng rò rỉ dữ liệu hoặc dùng lại helper cũ giữa các request.
            </div>
        </div>

        <a @class([$__VIEW_ID__ . '-Bdoc3', 'doc-next']) @attr(['href' => '/docs/contexts'])>
            <div @class([$__VIEW_ID__ . '-Bdoc31'])><span @class([$__VIEW_ID__ . '-Bdoc311'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-Bdoc312'])>Context, module &amp; controller</strong></div>
            <span @class([$__VIEW_ID__ . '-Bdoc32', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
