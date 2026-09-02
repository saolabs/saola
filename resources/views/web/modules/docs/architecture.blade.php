@exec($__ONE_COMPONENT_REGISTRY__ = ['code-window' => 'web.components.code-window']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@vars($__ONE_CHILDREN_CONTENT__ = '')
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
                    <div @class([$__VIEW_ID__ . '-Bdoc1223'])><dt @class([$__VIEW_ID__ . '-Bdoc12231'])>Frontend</dt><dd @class([$__VIEW_ID__ . '-Bdoc12232'])>@saolabs/client (Reactive SPA)</dd></div>
                </dl>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-Bdoc2', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-Bdoc21', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc211'])>01. TỔNG QUAN</span> Bốn tầng hệ sinh thái</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc22'])>Kiến trúc 4 tầng từ Server đến Client DOM.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc23'])>Hệ sinh thái Saola được thiết kế theo các tầng ranh giới rõ ràng, kết nối với nhau bằng các contract chặt chẽ được định nghĩa bằng spec:</p>

            <div @class([$__VIEW_ID__ . '-Bdoc24', 'ov-grid'])>
                <div @class([$__VIEW_ID__ . '-Bdoc241', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2411'])>Composer</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2412'])>saola/core</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2413'])>Thư viện lõi PHP trên nền Laravel: <code @class([$__VIEW_ID__ . '-Bdoc24131'])>System::context()</code> routing, bộ ba base controller (Web, Admin, Api), auto-discovery module, Blade directives và <code @class([$__VIEW_ID__ . '-Bdoc24132'])>ViewStorageManager</code> sinh marker SSR.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc242', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2421'])>Composer</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2422'])>saola/compiler</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2423'])>Trình biên dịch file <code @class([$__VIEW_ID__ . '-Bdoc24231'])>.sao</code> viết bằng PHP thuần. Phân tích cú pháp thành một cây AST duy nhất, sau đó emit đồng thời Blade template (SSR) và TypeScript/JavaScript component (CSR).</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc243', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2431'])>npm</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2432'])>@saolabs/builder</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2433'])>Công cụ CLI <code @class([$__VIEW_ID__ . '-Bdoc24331'])>sao-compile</code>. Đọc cấu hình context từ <code @class([$__VIEW_ID__ . '-Bdoc24332'])>sao.config.json</code>, quét thư mục view, gọi <code @class([$__VIEW_ID__ . '-Bdoc24333'])>saoc</code>, sinh <code @class([$__VIEW_ID__ . '-Bdoc24334'])>registry.ts</code> và tích hợp mượt mà vào Vite/Webpack.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc244', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2441'])>npm</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2442'])>@saolabs/client</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2443'])>SPA runtime phía browser: Application container, Router, ViewManager, ViewController, hệ thống Reactive State, PageCache và bộ client services (Http, Event, Store, Head…).</p>
                </div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc25', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc251'])>02. CẤU TRÚC THƯ MỤC</span> Tổ chức toàn bộ dự án</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc26'])>Cấu trúc thư mục chuẩn của ứng dụng Saola.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc27'])>Dự án Saola tổ chức mã nguồn theo hướng tách biệt rõ ràng giữa <strong @class([$__VIEW_ID__ . '-Bdoc271'])>Backend Modules</strong>, <strong @class([$__VIEW_ID__ . '-Bdoc272'])>Mã nguồn View gốc (.sao)</strong>, <strong @class([$__VIEW_ID__ . '-Bdoc273'])>Mã nguồn View đã biên dịch</strong> và <strong @class([$__VIEW_ID__ . '-Bdoc274'])>Tệp tĩnh phục vụ client</strong>:</p>

            @startMarker('component', 'Bdoc2c1')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_0'))
@verbatim
saola-project/
├── app/
│   ├── Http/Controllers/          # Base controllers (WebController, AdminController, ApiController)
│   ├── Modules/                   # Các Module nghiệp vụ (Auto-discovered đệ quy)
│   │   ├── Home/                  # Module trang chủ
│   │   ├── Docs/                  # Module tài liệu
│   │   ├── User/                  # Module người dùng
│   │   └── Posts/                 # Module bài viết
│   ├── Models/                    # Shared Eloquent models
│   └── Providers/
│       ├── AppServiceProvider.php
│       └── ModuleServiceProvider.php # Khai báo Contexts & discovery modules
│
├── resources/
│   ├── saola/                     # MÃ NGUỒN GỐC: Chứa các file .sao theo từng context
│   │   ├── web/                   # Context Web (Public SPA)
│   │   │   ├── views/             # Layouts, pages, components dạng .sao
│   │   │   └── app/               # Logic TS phía client (services, state, handlers)
│   │   ├── admin/                 # Context Admin (Quản trị)
│   │   │   ├── views/
│   │   │   └── app/
│   │   ├── mobile/                # Context Mobile (Webview / PWA)
│   │   │   └── views/
│   │   └── _shared/               # View và logic dùng chung đa context
│   │
│   ├── js/
│   │   └── saola/                 # MÃ BIÊN DỊCH: TypeScript/JS sinh ra từ .sao
│   │       ├── app.ts             # Entry point client SPA
│   │       ├── views.ts           # Combined view registry
│   │       ├── web/               # Registry & compiled views của Web context
│   │       └── admin/             # Registry & compiled views của Admin context
│   │
│   ├── views/                     # BLADE OUTPUT: Sinh ra từ .sao cho SSR
│   │   ├── web/                   # Blade templates của Web context
│   │   ├── admin/                 # Blade templates của Admin context
│   │   └── _system/               # System partials (boot payload, marker helpers)
│   │
│   └── css/                       # CSS toàn cục & Tailwind
│
├── public/static/saola/           # BUILD OUTPUT: Bundle JavaScript/CSS cho client
│   ├── web/js/app.js              # Bundle sản phẩm cho Web SPA
│   ├── admin/js/app.js            # Bundle sản phẩm cho Admin SPA
│   └── manifest.json              # Vite build manifest
│
├── config/
│   ├── sao.php                    # Cấu hình compiler & options phía PHP
│   └── spa.php                    # Cấu hình runtime SPA (mode, router, debug)
│
├── sao.config.json                # Cấu hình context & đường dẫn cho compiler CLI
└── vite.config.js                 # Cấu hình đóng gói Vite
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_0'))
@include('web.components.code-window', ['label' => "DIRECTORY", 'title' => "Cấu trúc thư mục dự án Saola", 'lang' => "none", '__ONE_CHILDREN_CONTENT__' => $__code_window__0_content])
@endMarker('component', 'Bdoc2c1')

            <p @class([$__VIEW_ID__ . '-Bdoc28', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc281'])>03. KIẾN TRÚC BACKEND</span> Module tự chứa &amp; Controller theo Context</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc29'])>Kiến trúc Backend: Module hóa đệ quy và Context-Aware.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e10_'])>Mỗi module trong Saola là một đơn vị kinh doanh tự chứa (Self-contained Business Domain). Trong tầng HTTP, các controller được <strong @class([$__VIEW_ID__ . '-Bdoc2e10_1'])>phân tách tường minh theo từng Context</strong> (Admin, Api, Web) với namespace và base controller chuyên biệt:</p>

            @startMarker('component', 'Bdoc2c2')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_1'))
@verbatim
app/Modules/Posts/
├── ModuleServiceProvider.php        # Khai báo bindings, dependencies & routes đa context
├── Http/
│   ├── Controllers/                 # CONTROLLER PHÂN ĐỊNH RÕ RÀNG THEO CONTEXT
│   │   ├── Admin/                   # Context 'admin' (Trang quản trị, CRUD, phân quyền)
│   │   │   └── PostController.php   # -> extends App\Http\Controllers\AdminController
│   │   ├── Api/                     # Context 'api' (RESTful JSON API chuẩn)
│   │   │   └── PostController.php   # -> extends App\Http\Controllers\ApiController
│   │   └── Web/                     # Context 'web' (Public Website, SSR + SPA)
│   │       └── PostController.php   # -> extends App\Http\Controllers\WebController
│   │
│   └── Requests/                    # Form Requests validate dữ liệu
│       ├── CreatePostRequest.php
│       └── UpdatePostRequest.php
├── Models/                          # THỰC THỂ DỮ LIỆU CƠ SỞ
│   └── Post.php                     # Eloquent Model (Cột, bảng, quan hệ database)
├── Masks/                           # MẶT NẠ DỮ LIỆU ĐẦU RA (Data Transformer)
│   ├── PostMask.php                 # Transform & bảo vệ các trường của Model khi ra ngoài
│   └── PostCollection.php           # Collection mask cho danh sách
├── Repositories/                    # TẦNG TRUY VẤN DỮ LIỆU
│   ├── PostRepositoryInterface.php  # Contract truy vấn dữ liệu
│   └── PostRepository.php           # Triển khai Repository pattern với Filter, Scope, OwnerAction
└── Services/                        # TẦNG XỬ LÝ NGHIỆP VỤ
    ├── PostServiceInterface.php     # Contract logic nghiệp vụ
    └── PostService.php              # Xử lý nghiệp vụ, giao dịch, dispatch event
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__1_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_1'))
@include('web.components.code-window', ['label' => "DIRECTORY", 'title' => "app/Modules/{ModuleName}/", 'lang' => "none", '__ONE_CHILDREN_CONTENT__' => $__code_window__1_content])
@endMarker('component', 'Bdoc2c2')

            <div @class([$__VIEW_ID__ . '-Bdoc2e11_', 'ov-note'])>
                <strong @class([$__VIEW_ID__ . '-Bdoc2e11_1'])>Model &amp; Mask:</strong> Model quản lý cấu trúc bảng và quan hệ cơ sở dữ liệu, trong khi Mask đóng vai trò là "mặt nạ" lọc — chỉ cho phép các trường được chỉ định đi ra Controller/View/API, ngăn ngừa lộ lọt dữ liệu nhạy cảm (Xem chi tiết tại <a @class([$__VIEW_ID__ . '-Bdoc2e11_2']) @attr(['href' => '/docs/mask'])>Tài liệu Mask &amp; Model</a>).
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc2e12_', 'ov-sub'])>Phân định Context rõ ràng trong Controller</p>
            <p @class([$__VIEW_ID__ . '-Bdoc2e13_'])>Sự phân chia thư mục <code @class([$__VIEW_ID__ . '-Bdoc2e13_1'])>Http/Controllers/{Admin, Api, Web}</code> đảm bảo tính tách biệt ranh giới (Separation of Concerns), mỗi controller kế thừa đúng Base Controller của context đó:</p>

            <div @class([$__VIEW_ID__ . '-Bdoc2e14_', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e14_1'])><div @class([$__VIEW_ID__ . '-Bdoc2e14_11', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e14_111'])>Controllers/Web</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e14_12'])>Kế thừa <code @class([$__VIEW_ID__ . '-Bdoc2e14_121'])>WebController</code> (từ <code @class([$__VIEW_ID__ . '-Bdoc2e14_122'])>BaseWebController</code>). Trả về view qua <code @class([$__VIEW_ID__ . '-Bdoc2e14_123'])>$this->response()</code> hoặc <code @class([$__VIEW_ID__ . '-Bdoc2e14_124'])>$this->responseModule()</code>, tự động nhận diện header <code @class([$__VIEW_ID__ . '-Bdoc2e14_125'])>X-Sao-Response</code> để render Blade SSR hoặc trả JSON boot payload cho client SPA.</span><b @class([$__VIEW_ID__ . '-Bdoc2e14_13'])>context: web</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e14_2'])><div @class([$__VIEW_ID__ . '-Bdoc2e14_21', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e14_211'])>Controllers/Admin</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e14_22'])>Kế thừa <code @class([$__VIEW_ID__ . '-Bdoc2e14_221'])>AdminController</code> (từ <code @class([$__VIEW_ID__ . '-Bdoc2e14_222'])>BaseWebController</code>). Tích hợp sẵn workflow hoàn chỉnh cho CRUD (index, list, detail, create, edit, trash, restore), middleware <code @class([$__VIEW_ID__ . '-Bdoc2e14_223'])>auth</code>, kiểm tra quyền <code @class([$__VIEW_ID__ . '-Bdoc2e14_224'])>permission:admin</code> và form validation.</span><b @class([$__VIEW_ID__ . '-Bdoc2e14_23'])>context: admin</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e14_3'])><div @class([$__VIEW_ID__ . '-Bdoc2e14_31', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e14_311'])>Controllers/Api</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e14_32'])>Kế thừa <code @class([$__VIEW_ID__ . '-Bdoc2e14_321'])>ApiController</code> (từ <code @class([$__VIEW_ID__ . '-Bdoc2e14_322'])>BaseApiController</code>). Phục vụ RESTful JSON với chuẩn <code @class([$__VIEW_ID__ . '-Bdoc2e14_323'])>ApiResponse</code> qua các helper: <code @class([$__VIEW_ID__ . '-Bdoc2e14_324'])>jsonSuccess()</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e14_325'])>jsonError()</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e14_326'])>jsonCreated()</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e14_327'])>jsonNotFound()</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e14_328'])>jsonValidationError()</code>.</span><b @class([$__VIEW_ID__ . '-Bdoc2e14_33'])>context: api</b></div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc2e15_', 'ov-sub'])>Cơ chế Auto-Discovery đệ quy</p>
            <p @class([$__VIEW_ID__ . '-Bdoc2e16_'])>Hệ thống tự động quét toàn bộ thư mục bên trong <code @class([$__VIEW_ID__ . '-Bdoc2e16_1'])>app/Modules/</code>. Bất kỳ thư mục nào chứa class <code @class([$__VIEW_ID__ . '-Bdoc2e16_2'])>ModuleServiceProvider</code> đều được nạp tự động vào chu kỳ khởi động của Laravel. Cơ chế này hỗ trợ <strong @class([$__VIEW_ID__ . '-Bdoc2e16_3'])>Nested Sub-modules</strong> lồng nhau không giới hạn:</p>

            @startMarker('component', 'Bdoc2c3')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_2'))
@verbatim
app/Modules/
├── Store/
│   ├── ModuleServiceProvider.php        # App\Modules\Store\ModuleServiceProvider
│   ├── Http/Controllers/{Admin,Api,Web}
│   └── Cart/                            # Sub-module lồng bên trong Store
│       ├── ModuleServiceProvider.php    # App\Modules\Store\Cart\ModuleServiceProvider
│       └── Http/Controllers/{Admin,Api,Web}
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__2_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_2'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "Nested Modules Example", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__2_content])
@endMarker('component', 'Bdoc2c3')

            <p @class([$__VIEW_ID__ . '-Bdoc2e17_', 'ov-sub'])>Đăng ký Route đa ngữ cảnh (Context-Aware Routing)</p>
            <p @class([$__VIEW_ID__ . '-Bdoc2e18_'])>Routes không bị dồn vào một file <code @class([$__VIEW_ID__ . '-Bdoc2e18_1'])>routes/web.php</code> khổng lồ. Thay vào đó, mỗi module tự quản lý routes của mình qua Fluent API của <code @class([$__VIEW_ID__ . '-Bdoc2e18_2'])>System::context()</code> trong method <code @class([$__VIEW_ID__ . '-Bdoc2e18_3'])>routes()</code>:</p>

            @startMarker('component', 'Bdoc2c4')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_3'))
@verbatim
namespace App\Modules\Posts;

use Saola\Core\Providers\ModuleServiceProvider as CoreServiceProvider;
use Saola\Core\System;
use App\Modules\Posts\Http\Controllers\Web\PostController as WebPostController;
use App\Modules\Posts\Http\Controllers\Admin\PostController as AdminPostController;
use App\Modules\Posts\Http\Controllers\Api\PostController as ApiPostController;

class ModuleServiceProvider extends CoreServiceProvider
{
    public function routes(): void
    {
        // 1. Web Context (Public Website)
        System::context('web')
            ->module(['slug' => 'posts', 'prefix' => '/posts', 'priority' => 10])
            ->controller(WebPostController::class)
            ->as('posts')
            ->group(function ($module) {
                $module->get('/', 'index')->name('index');
                $module->get('/{slug}', 'detail')->name('detail');
            });

        // 2. Admin Context (Quản trị CRUD)
        System::context('admin')
            ->module('posts')
            ->controller(AdminPostController::class)
            ->group(function ($module) {
                $module->get('/', 'viewIndexPage')->name('index');
                $module->get('/create', 'viewCreatePage')->name('create');
                $module->get('/{id}/edit', 'viewEditPage')->name('edit');
                $module->post('/create', 'create')->name('store');
                $module->post('/{id}/edit', 'update')->name('update');
                $module->delete('/{id}', 'destroy')->name('destroy');
            });

        // 3. API Context (RESTful JSON)
        System::context('api')
            ->module(['slug' => 'posts', 'prefix' => '/posts'])
            ->controller(ApiPostController::class)
            ->as('posts')
            ->group(function ($module) {
                $module->get('/', 'index')->name('index');
                $module->get('/{id}', 'show')->name('show');
                $module->post('/', 'store')->name('store');
            });
    }
}
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__3_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_3'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "app/Modules/Posts/ModuleServiceProvider.php", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__3_content])
@endMarker('component', 'Bdoc2c4')

            <p @class([$__VIEW_ID__ . '-Bdoc2e19_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e19_1'])>04. KIẾN TRÚC SAOLA VIEW</span> Context View &amp; Layout Composition</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e20_'])>Tổ chức View theo Context: Rõ ràng, mô-đun và tái sử dụng.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e21_'])>Mã nguồn giao diện được đặt tại <code @class([$__VIEW_ID__ . '-Bdoc2e21_1'])>resources/saola/</code> và phân chia theo từng <strong @class([$__VIEW_ID__ . '-Bdoc2e21_2'])>Context View</strong>. Điều này giúp các giao diện độc lập về layout, asset và logic mà không bị lẫn lộn:</p>

            @startMarker('component', 'Bdoc2c5')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_4'))
@verbatim
resources/saola/
├── web/
│   ├── views/
│   │   ├── layouts/               # Các khung layout của Web: base.sao, docs.sao, public.sao, workspace.sao
│   │   ├── modules/               # Page views phân theo module nghiệp vụ tương ứng:
│   │   │   ├── home/              # index.sao, about.sao, contact.sao, todo.sao
│   │   │   ├── docs/              # architecture.sao, contexts.sao, repository.sao...
│   │   │   └── posts/             # list.sao, detail.sao
│   │   ├── components/            # UI components tái sử dụng: code-window.sao, statcard.sao, modal.sao
│   │   └── partials/              # Layout snippets nhỏ: head.sao, nav.sao, footer.sao
│   └── app/                       # Mã nguồn Client Services, Stores, Handlers riêng cho Web
│
├── admin/
│   ├── views/
│   │   ├── layouts/               # Layout quản trị: master.sao, auth.sao
│   │   ├── modules/               # Views theo từng module admin: dashboard/, users/, posts/
│   │   └── components/            # Data-table, form-builder, filter-bar
│   └── app/                       # Client logic của Admin
│
├── mobile/
│   ├── views/                     # Views tối ưu cho Mobile PWA / Webview (giao diện vuốt chạm, bottom bar)
│   └── app/                       # Service PWA, offline cache
│
└── _shared/                       # Views, layouts và component dùng chung giữa nhiều context
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__4_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_4'))
@include('web.components.code-window', ['label' => "DIRECTORY", 'title' => "resources/saola/{context}/views/", 'lang' => "none", '__ONE_CHILDREN_CONTENT__' => $__code_window__4_content])
@endMarker('component', 'Bdoc2c5')

            <p @class([$__VIEW_ID__ . '-Bdoc2e22_', 'ov-sub'])>Cơ chế phân giải đường dẫn View (View Path Resolution)</p>
            <p @class([$__VIEW_ID__ . '-Bdoc2e23_'])>Saola sử dụng quy ước đường dẫn phân cấp dạng chấm (Dotted Path) và biến hệ thống <code @class([$__VIEW_ID__ . '-Bdoc2e23_1'])>__layout__</code> để đảm bảo tính linh hoạt tối đa:</p>

            <div @class([$__VIEW_ID__ . '-Bdoc2e24_', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e24_1'])><div @class([$__VIEW_ID__ . '-Bdoc2e24_11', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e24_111'])>__layout__ + 'base'</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e24_12'])>Tự động phân giải thành <code @class([$__VIEW_ID__ . '-Bdoc2e24_121'])>web.layouts.base</code> khi ở context <code @class([$__VIEW_ID__ . '-Bdoc2e24_122'])>web</code>, hoặc <code @class([$__VIEW_ID__ . '-Bdoc2e24_123'])>admin.layouts.base</code> khi ở context <code @class([$__VIEW_ID__ . '-Bdoc2e24_124'])>admin</code>.</span><b @class([$__VIEW_ID__ . '-Bdoc2e24_13'])>layout</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e24_2'])><div @class([$__VIEW_ID__ . '-Bdoc2e24_21', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e24_211'])></code></div><span @class([$__VIEW_ID__ . '-Bdoc2e24_22'])>Nhúng một component `.sao` con vào template hiện tại, hỗ trợ truyền props và slots <code @class([$__VIEW_ID__ . '-Bdoc2e24_221'])>{!! $__ONE_CHILDREN_CONTENT__ !!}</code>.</span><b @class([$__VIEW_ID__ . '-Bdoc2e24_23'])>component</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e24_3'])><div @class([$__VIEW_ID__ . '-Bdoc2e24_31', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e24_311'])>@include('web.partials.head')</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e24_32'])>Nạp một partial template tĩnh hoặc snippet dùng chung vào view.</span><b @class([$__VIEW_ID__ . '-Bdoc2e24_33'])>include</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e24_4'])><div @class([$__VIEW_ID__ . '-Bdoc2e24_41', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e24_411'])>$this->responseModule('posts.list', $data)</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e24_42'])>Controller tự động trỏ đến file view <code @class([$__VIEW_ID__ . '-Bdoc2e24_421'])>resources/saola/{context}/views/modules/posts/list.sao</code>.</span><b @class([$__VIEW_ID__ . '-Bdoc2e24_43'])>controller</b></div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc2e25_', 'ov-sub'])>Layout Composition: Block, Extend và Yield</p>
            <p @class([$__VIEW_ID__ . '-Bdoc2e26_'])>Hệ thống kế thừa layout trong Saola mô phỏng cơ chế mạnh mẽ của Blade nhưng kết nối trực tiếp với Client SPA ViewManager:</p>

            @startMarker('component', 'Bdoc2c6')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_5'))
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
@exec($__code_window__5_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_5'))
@include('web.components.code-window', ['label' => "SAOLA", 'title' => "resources/saola/web/views/modules/posts/list.sao", 'lang' => "html", '__ONE_CHILDREN_CONTENT__' => $__code_window__5_content])
@endMarker('component', 'Bdoc2c6')

            <p @class([$__VIEW_ID__ . '-Bdoc2e27_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e27_1'])>05. PIPELINE &amp; HYDRATION</span> Chu trình biên dịch &amp; Thực thi</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e28_'])>Pipeline biên dịch 2 giai đoạn (Dual-Target Pipeline).</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e29_'])>Trình biên dịch Saola xử lý file <code @class([$__VIEW_ID__ . '-Bdoc2e29_1'])>.sao</code> qua hai giai đoạn rõ ràng:</p>

            <div @class([$__VIEW_ID__ . '-Bdoc2e30_', 'ov-grid'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e30_1', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e30_11'])>Giai đoạn 1</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e30_12'])>sao-compile (PHP CLI)</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e30_13'])>Đọc file <code @class([$__VIEW_ID__ . '-Bdoc2e30_131'])>.sao</code>, phân tích AST, sinh song song file <strong @class([$__VIEW_ID__ . '-Bdoc2e30_132'])>Blade template</strong> cho server (tại <code @class([$__VIEW_ID__ . '-Bdoc2e30_133'])>resources/views/{ctx}/</code>) và <strong @class([$__VIEW_ID__ . '-Bdoc2e30_134'])>TypeScript view</strong> cho client (tại <code @class([$__VIEW_ID__ . '-Bdoc2e30_135'])>resources/js/saola/{ctx}/</code>), đồng thời tạo <code @class([$__VIEW_ID__ . '-Bdoc2e30_136'])>registry.ts</code>.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e30_2', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e30_21'])>Giai đoạn 2</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e30_22'])>Vite Bundler</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e30_23'])>Biên dịch TypeScript, nạp registry và đóng gói thành tệp bundle JavaScript tối ưu cho từng context tại <code @class([$__VIEW_ID__ . '-Bdoc2e30_231'])>public/static/saola/{ctx}/js/app.js</code>.</p>
                </div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc2e31_', 'ov-sub'])>Vòng đời Request: Từ URL đến Tương tác Reactive</p>
            <ol @class([$__VIEW_ID__ . '-Bdoc2e32_', 'flow-timeline'])>
                <li @class([$__VIEW_ID__ . '-Bdoc2e32_1'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e32_11'])>01</span>
                    <div @class([$__VIEW_ID__ . '-Bdoc2e32_12'])>
                        <strong @class([$__VIEW_ID__ . '-Bdoc2e32_121'])>Định tuyến &amp; Phân giải Context (Server)</strong>
                        <p @class([$__VIEW_ID__ . '-Bdoc2e32_122'])>Request đến, middleware context chạy trước. <code @class([$__VIEW_ID__ . '-Bdoc2e32_1221'])>System::context()</code> khớp đúng route trong module đã đăng ký mà không tải dư thừa các registry khác.</p>
                    </div>
                    <code @class([$__VIEW_ID__ . '-Bdoc2e32_13'])>GET /posts/12</code>
                </li>
                <li @class([$__VIEW_ID__ . '-Bdoc2e32_2'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e32_21'])>02</span>
                    <div @class([$__VIEW_ID__ . '-Bdoc2e32_22'])>
                        <strong @class([$__VIEW_ID__ . '-Bdoc2e32_221'])>Controller xử lý &amp; Gắn kết View (Server)</strong>
                        <p @class([$__VIEW_ID__ . '-Bdoc2e32_222'])>Controller thực hiện logic, nạp dữ liệu từ Service/Repository và tạo view response đóng gói kèm SSR boot payload.</p>
                    </div>
                    <code @class([$__VIEW_ID__ . '-Bdoc2e32_23'])>context: web</code>
                </li>
                <li @class([$__VIEW_ID__ . '-Bdoc2e32_3'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e32_31'])>03</span>
                    <div @class([$__VIEW_ID__ . '-Bdoc2e32_32'])>
                        <strong @class([$__VIEW_ID__ . '-Bdoc2e32_321'])>Blade Render HTML hoàn chỉnh (Server)</strong>
                        <p @class([$__VIEW_ID__ . '-Bdoc2e32_322'])>Mọi layout, slot, block và component con được render thành HTML hoàn chỉnh kèm các comment marker động định danh chuẩn xác.</p>
                    </div>
                    <code @class([$__VIEW_ID__ . '-Bdoc2e32_33'])>SSR / READY</code>
                </li>
                <li @class([$__VIEW_ID__ . '-Bdoc2e32_4'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e32_41'])>04</span>
                    <div @class([$__VIEW_ID__ . '-Bdoc2e32_42'])>
                        <strong @class([$__VIEW_ID__ . '-Bdoc2e32_421'])>Client Hydration &amp; Claim DOM (Browser)</strong>
                        <p @class([$__VIEW_ID__ . '-Bdoc2e32_422'])>Runtime <code @class([$__VIEW_ID__ . '-Bdoc2e32_4221'])>@saolabs/client</code> tiếp quản DOM hiện hữu qua các marker, kích hoạt event listener và reactive bindings mà <em @class([$__VIEW_ID__ . '-Bdoc2e32_4222'])>không hề render lại DOM có sẵn</em>.</p>
                    </div>
                    <code @class([$__VIEW_ID__ . '-Bdoc2e32_43'])>HYDRATE / CLAIM</code>
                </li>
                <li @class([$__VIEW_ID__ . '-Bdoc2e32_5'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e32_51'])>05</span>
                    <div @class([$__VIEW_ID__ . '-Bdoc2e32_52'])>
                        <strong @class([$__VIEW_ID__ . '-Bdoc2e32_521'])>Chuyển sang chế độ SPA hoàn toàn (Browser)</strong>
                        <p @class([$__VIEW_ID__ . '-Bdoc2e32_522'])>Các lần chuyển trang tiếp theo chỉ gọi API lấy delta data JSON, tái sử dụng layout chung (Layout Reuse) và chỉ cập nhật đúng vùng view con thay đổi.</p>
                    </div>
                    <code @class([$__VIEW_ID__ . '-Bdoc2e32_53'])>SPA / ACTIVE</code>
                </li>
            </ol>

            <div @class([$__VIEW_ID__ . '-Bdoc2e33_', 'ov-note'])>
                <strong @class([$__VIEW_ID__ . '-Bdoc2e33_1'])>Octane Safe &amp; Request Scoped:</strong> Trong các môi trường worker sống lâu (Laravel Octane, FrankenPHP, Swoole), Saola đảm bảo state được cô lập tuyệt đối theo từng request thông qua <code @class([$__VIEW_ID__ . '-Bdoc2e33_2'])>ViewContextService</code>, không làm rò rỉ dữ liệu giữa các người dùng.
            </div>
        </div>

        <a @class([$__VIEW_ID__ . '-Bdoc3', 'doc-next']) @attr(['href' => '/docs/contexts'])>
            <div @class([$__VIEW_ID__ . '-Bdoc31'])><span @class([$__VIEW_ID__ . '-Bdoc311'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-Bdoc312'])>Context, module &amp; controller</strong></div>
            <span @class([$__VIEW_ID__ . '-Bdoc32', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
