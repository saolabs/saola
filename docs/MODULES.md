# Module System

## Tổng Quan

Module là đơn vị tổ chức code chính trong Saola. Mỗi module chứa controllers, services, models, repositories cho một business domain cụ thể. Routes được đăng ký trực tiếp trong `ModuleServiceProvider::routes()` thông qua fluent API của `System::context()`.

## Cấu Trúc Module

```
app/Modules/{Name}/
├── ModuleServiceProvider.php        # Entry provider + routes()
├── Http/
│   ├── Controllers/
│   │   ├── Web/{Name}Controller.php
│   │   ├── Admin/{Name}Controller.php
│   │   └── Api/{Name}Controller.php
│   └── Requests/
│       ├── Create{Name}Request.php
│       └── Update{Name}Request.php
├── Models/{Name}.php
├── Repositories/
│   ├── {Name}Repository.php
│   └── {Name}RepositoryInterface.php
├── Services/
│   ├── {Name}Service.php
│   └── {Name}ServiceInterface.php
└── Masks/
    ├── {Name}Mask.php
    └── {Name}Collection.php
```

> **Lưu ý:** Không phải module nào cũng cần tất cả thư mục. Chỉ tạo những gì cần thiết.

## Auto-Discovery

Modules được tự động phát hiện bởi `ModuleServiceProvider::registerModuleProvidersInPath()` — **đệ quy**, hỗ trợ nested modules.

Quy tắc:
- Quét tất cả thư mục dưới `app/Modules/`
- Bỏ qua các thư mục thuộc `INTERNAL_DIRS`
- Nếu có class `{Namespace}\ModuleServiceProvider` → đăng ký provider
- Đệ quy vào các sub-directory để tìm nested modules

```php
protected const INTERNAL_DIRS = [
    'Http', 'Models', 'Repositories', 'Services', 'Masks',
    'Commands', 'Jobs', 'Events', 'Listeners', 'Notifications',
    'Policies', 'Rules', 'Observers', 'Resources', 'Requests',
    'Providers', 'Controllers', 'Middleware', 'Views',
];
```

## ModuleServiceProvider

Mỗi module kế thừa `Saola\Core\Providers\ModuleServiceProvider` và override 2 methods chính:

```php
<?php

namespace App\Modules\Product;

use Saola\Core\Providers\ModuleServiceProvider as CoreModuleServiceProvider;
use Saola\Core\Routing\System;

class ModuleServiceProvider extends CoreModuleServiceProvider
{
    /**
     * Đăng ký bindings, singletons, interfaces.
     */
    public function register(): void
    {
        $this->app->bind(ProductServiceInterface::class, ProductService::class);
    }

    /**
     * Đăng ký routes cho tất cả contexts.
     */
    public function routes(): void
    {
        // Web routes
        System::context('web')
            ->module(['slug' => 'products', 'prefix' => '/products', 'priority' => 1])
            ->controller(WebProductController::class)
            ->as('products')
            ->group(function ($module) {
                $module->get('/', 'index')->name('index');
                $module->get('/{id}', 'detail')->name('detail');
            });

        // Admin routes
        System::context('admin')
            ->module('products')
            ->controller(AdminProductController::class)
            ->group(function ($module) {
                $module->get('/', 'viewIndexPage')->name('index');
                $module->get('/create', 'viewCreatePage')->name('create');
                $module->get('/{id}', 'viewDetailPage')->name('detail');
                $module->get('/{id}/edit', 'viewEditPage')->name('edit');
                $module->post('/create', 'create')->name('store');
            });

        // API routes
        System::context('api')
            ->module(['slug' => 'products', 'prefix' => '/products'])
            ->controller(ApiProductController::class)
            ->as('products')
            ->group(function ($module) {
                $module->get('/', 'index')->name('index');
                $module->get('/{id}', 'detail')->name('detail');
            });
    }
}
```

### Route Registration API

```php
System::context('web')                           // Chọn context
    ->module('products')                          // Tên module (string hoặc array config)
    ->module(['slug' => 'products',               // Config dạng array:
              'prefix' => '/products',            //   slug, prefix, priority
              'priority' => 1])
    ->controller(ProductController::class)        // Default controller
    ->prefix('products')                          // URL prefix
    ->as('products')                              // Route name prefix
    ->group(function ($module) {                  // Route definitions
        $module->get('/', 'index')
            ->name('index')                       // Route name: products.index
            ->viewPage('home');                   // Bind to view page
    });
```

## Nested Modules

Modules có thể lồng nhau bất kỳ độ sâu. Sub-module đặt trong thư mục con:

```
app/Modules/
├── Home/
│   ├── ModuleServiceProvider.php        # App\Modules\Home\ModuleServiceProvider
│   ├── Http/ Services/
│   └── About/                           # Sub-module
│       ├── ModuleServiceProvider.php    # App\Modules\Home\About\ModuleServiceProvider
│       ├── Http/
│       └── Demo/                        # Sub-sub-module
│           ├── ModuleServiceProvider.php
│           └── Http/
├── User/
├── PWA/
└── Test/
```

Namespace tự động theo cấu trúc thư mục:
- `App\Modules\Home\ModuleServiceProvider`
- `App\Modules\Home\About\ModuleServiceProvider`
- `App\Modules\Home\About\Demo\ModuleServiceProvider`

## Base Controllers

Module controllers kế thừa base controllers tương ứng:

| Context | Base Controller | Features |
|---------|----------------|----------|
| Web | `App\Http\Controllers\WebController` | `response()`, `responseModule()`, index/list/detail |
| Admin | `App\Http\Controllers\AdminController` | CRUD: index, list, trash, detail, create, edit + validation |
| Api | `App\Http\Controllers\ApiController` | JSON response format chuẩn |

**Ví dụ Web Controller:**

```php
<?php

namespace App\Modules\Product\Http\Controllers\Web;

use App\Http\Controllers\WebController;

class ProductController extends WebController
{
    public function index()
    {
        return $this->response([
            'title' => 'Products',
            'products' => [],
        ]);
    }

    public function detail($id)
    {
        return $this->response([
            'title' => 'Product Detail',
            'product' => [],
        ]);
    }
}
```

**Admin Controller** — Kế thừa sẵn CRUD views, chỉ cần set `$service`:

```php
<?php

namespace App\Modules\Product\Http\Controllers\Admin;

use App\Http\Controllers\AdminController;
use App\Modules\Product\Services\ProductService;

class ProductController extends AdminController
{
    public function __construct(ProductService $service)
    {
        $this->service = $service;
    }

    // Kế thừa sẵn: viewIndexPage, viewListPage, viewTrashPage,
    //              viewDetailPage, viewCreatePage, viewEditPage, create
}
```

## Tạo Module Mới

### Cách nhanh: Artisan command

```bash
php artisan make:module Product
```

Scaffold đầy đủ cấu trúc module với namespace và provider.

### Cách thủ công

1. Tạo thư mục `app/Modules/{Name}/`
2. Tạo `ModuleServiceProvider.php` kế thừa `CoreModuleServiceProvider`
3. Implement `register()` và `routes()`
4. Tạo controllers trong `Http/Controllers/{Context}/`
5. Module tự động được discover — không cần đăng ký ở đâu

## Modules Hiện Có

### Home

| Context | Route | Controller | Chức năng |
|---------|-------|-----------|-----------|
| web | `GET /` | `HomeController@index` | Trang chủ |
| admin | `GET /admin/` | `DashboardController@viewIndexPage` | Dashboard |
| api | `GET /api/` | `HomeController@index` | API endpoint |

- Service: `HomeService` (bind qua `HomeServiceInterface`)

### User

| Context | Route | Controller | Chức năng |
|---------|-------|-----------|-----------|
| web | `/user/*` | `UserController` | Profile, auth |
| admin | `/admin/user/*` | `UserController` | Quản lý users |
| api | `/api/user/*` | `UserController` | User API |

- Model: `User` (custom, trong module)
- Service: `UserService` → `UserServiceInterface`
- Repository: `UserRepository` → `UserRepositoryInterface`
- Requests: `CreateUserRequest`, `UpdateUserRequest`
- Mask: `UserMask`

### Test

| Context | Route | Controller | Chức năng |
|---------|-------|-----------|-----------|
| web | `GET /tests/` | `TestController@index` | Test page |
| admin | `GET /admin/tests/` | `TestController@index` | Admin test |
| api | `GET /api/tests/` | `TestController@index` | Test API |

- Model: `Test`
- Service: `TestService` (singleton)
- Repository: `TestRepository`
- Masks: `TestMask`, `TestCollection`

### PWA

| Context | Route | Controller | Chức năng |
|---------|-------|-----------|-----------|
| web | `/manifest.json` | `PWAController` | Manifest |
| web | `/service-worker.js` | `PWAController` | Service Worker |
| admin | PWA admin | `PWAController` | PWA settings |

- Service: `PWAService` → `PWAServiceInterface`
- Config: `config/pwa.php`
