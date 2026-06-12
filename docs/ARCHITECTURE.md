# Kiến Trúc Hệ Thống

## Tổng Quan

Saola là một Laravel SPA framework sử dụng kiến trúc modular multi-context. Hệ thống xây dựng trên Laravel 13 với:

- **`saola/core`** (Composer) — Thư viện lõi PHP: routing, controllers, services, module system
- **`@saolabs/compiler`** (npm) — Biên dịch `.sao` single-file components → Blade + TypeScript
- **`@saolabs/client`** (npm) — SPA runtime: Application, ViewController, reactive system

```
┌───────────────────────────────────────────────────────────┐
│                     Client (Browser)                      │
│  ┌───────────┐  ┌───────────┐  ┌───────────────────────┐  │
│  │    Web    │  │   Admin   │  │     API (JSON)        │  │
│  │   SPA     │  │    SPA    │  │                       │  │
│  └─────┬─────┘  └─────┬─────┘  └───────────┬───────────┘  │
└────────┼──────────────┼─────────────────────┼──────────────┘
         │              │                     │
┌────────┼──────────────┼─────────────────────┼──────────────┐
│                  Laravel 13 Backend                        │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              Routing (System::context)               │   │
│  │  ┌──────────┐  ┌───────────┐  ┌─────────────────┐   │   │
│  │  │   Web    │  │   Admin   │  │       API       │   │   │
│  │  │ prefix:/ │  │prefix:/adm│  │  prefix:/api    │   │   │
│  │  └────┬─────┘  └─────┬─────┘  └────────┬────────┘   │   │
│  └───────┼──────────────┼──────────────────┼────────────┘   │
│          │              │                  │                 │
│  ┌───────┴──────────────┴──────────────────┴────────────┐   │
│  │                     Modules                          │   │
│  │  Home/ · User/ · PWA/ · Test/ · {YourModule}/        │   │
│  │  (nested modules supported)                          │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                   saola/core                         │   │
│  │    System · BaseWebController · BaseApiController    │   │
│  │    ModuleServiceProvider · Blade Directives          │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## Cấu Trúc Thư Mục Tổng Quan

```
saola/
├── app/
│   ├── Http/Controllers/          # Base controllers (Web, Admin, Api)
│   ├── Modules/                   # Feature modules (auto-discovered)
│   │   ├── Home/
│   │   ├── User/
│   │   ├── PWA/
│   │   └── Test/
│   ├── Models/
│   └── Providers/
│       ├── AppServiceProvider.php
│       └── ModuleServiceProvider.php
│
├── resources/
│   ├── saola/                     # SOURCE: Saola .sao single-file components
│   │   ├── web/
│   │   │   ├── views/             # .sao files (pages, layouts, components)
│   │   │   └── app/               # Context-specific JS/TS code
│   │   ├── admin/
│   │   │   ├── views/
│   │   │   └── app/
│   │   ├── mobile/
│   │   │   └── views/
│   │   └── _shared/               # Cross-context shared code
│   │
│   ├── js/
│   │   ├── saola/                 # AUTO-GENERATED: Compiled output
│   │   │   ├── app.ts             # SPA entry point (typed)
│   │   │   ├── app.js             # SPA entry point (Vite input)
│   │   │   ├── views.ts           # Combined view registry
│   │   │   ├── web/registry.ts    # Web context view map
│   │   │   ├── admin/registry.ts  # Admin context view map
│   │   │   └── mobile/            # Mobile context (khi có)
│   │   ├── app.js                 # Legacy webpack entry
│   │   └── bootstrap.js           # Axios setup
│   │
│   ├── views/                     # Blade templates (compiled + manual)
│   │   ├── _system/               # System partials (begin, end, scripts)
│   │   ├── web/                   # Compiled từ saola/web/views/
│   │   ├── admin/                 # Compiled từ saola/admin/views/
│   │   ├── mobile/                # Compiled từ saola/mobile/views/
│   │   └── partials/
│   │
│   └── css/                       # Tailwind CSS
│
├── public/static/saola/           # BUILD OUTPUT: Production assets
│   ├── web/js/app.js
│   ├── admin/js/app.js
│   └── mobile/js/app.js
│
├── config/
│   ├── sao.php                    # PHP-side compiler config
│   └── spa.php                    # SPA runtime config
│
├── sao.config.json                # Compiler paths & contexts config
├── vite.config.js                 # Vite bundler config
└── package.json                   # npm dependencies & build scripts
```

## Multi-Context Architecture

Hệ thống tổ chức theo 3 context chính, mỗi context có middleware, prefix và permission riêng:

| Context | Prefix | Middleware | Mục đích |
|---------|--------|-----------|----------|
| `web` | `/` | `web` | Website công khai |
| `admin` | `/admin` | `web, auth, permission:admin` | Quản trị |
| `api` | `/api` | `api` | RESTful API |

Context đăng ký trong `app/Providers/ModuleServiceProvider.php`:

```php
System::context('admin', [
    'as' => 'admin',
    'display_name' => 'Admin',
    'slug' => 'admin',
    'prefix' => 'admin',
    'middleware' => ['web', 'auth', 'permission:admin'],
    'permission' => ['admin'],
]);

System::context('api', [
    'prefix' => 'api',
    'middleware' => ['api'],
    'as' => 'api',
]);

System::context('web', [
    'as' => 'web',
    'display_name' => 'Web',
    'slug' => 'web',
    'middleware' => ['web'],
    'prefix' => '/',
]);
```

## Module System

Mỗi module là một đơn vị tự chứa dưới `app/Modules/{Name}/`:

```
app/Modules/{Name}/
├── ModuleServiceProvider.php    # Entry provider + routes()
├── Http/
│   ├── Controllers/
│   │   ├── Web/                 # Web controllers
│   │   ├── Admin/               # Admin controllers
│   │   └── Api/                 # API controllers
│   └── Requests/                # Form requests
├── Models/                      # Eloquent models
├── Repositories/                # Repository pattern + interfaces
├── Services/                    # Business logic + interfaces
└── Masks/                       # Attribute casting/masking
```

Modules được **auto-discover đệ quy** bởi `ModuleServiceProvider` — không cần đăng ký thủ công. Bất kỳ thư mục nào dưới `app/Modules/` chứa `ModuleServiceProvider.php` đều được tự động load.

### Route Registration

Routes đăng ký trong method `routes()` của mỗi module, sử dụng fluent API:

```php
class ModuleServiceProvider extends CoreModuleServiceProvider
{
    public function routes(): void
    {
        System::context('web')->module('home', ['prefix' => '/', 'priority' => 1])
            ->controller(HomeController::class)
            ->group(function ($module) {
                $module->get('/', 'index')->name('index')->viewPage('home');
            });

        System::context('admin')
            ->module('dashboard')
            ->controller(DashboardController::class)
            ->group(function ($module) {
                $module->get('/', 'viewIndexPage')->name('index');
            });

        System::context('api')->module(['slug' => 'home', 'prefix' => '/', 'priority' => 1])
            ->controller(ApiHomeController::class)
            ->group(function ($module) {
                $module->get('/', 'index')->name('index');
            });
    }
}
```

## Request Flow

```
Request → Middleware → Context Router → Module Route → Controller → Service → Response
                                                           │
                                                    ┌──────┴──────┐
                                                    │  Web: View  │
                                                    │  API: JSON  │
                                                    └─────────────┘
```

1. Request đi qua middleware stack theo context
2. `System::context()` xác định context và match routes tương ứng
3. Controller xử lý, gọi Service layer
4. Response trả về Blade View (web/admin) hoặc JSON (api)

## Service Providers

| Provider | Vai trò |
|----------|---------|
| `AppServiceProvider` | Cấu hình mặc định (CarbonImmutable, Password rules, DB safety) |
| `ModuleServiceProvider` | Đăng ký contexts, auto-discover modules, middleware aliases |
| `BladeDirectiveServiceProvider` | Đăng ký Blade directives cho Saola View (từ `saola/core`) |
| `SaolaServiceProvider` | Core framework services (từ `saola/core`) |

## Base Controllers

3 base controller abstract trong `app/Http/Controllers/`:

| Controller | Extends | Context | Chức năng |
|-----------|---------|---------|-----------|
| `WebController` | `BaseWebController` | `web` | `response()`, `responseModule()`, index/list/detail views |
| `AdminController` | `BaseWebController` | `admin` | CRUD pages: index, list, trash, detail, create, edit + validation |
| `ApiController` | `BaseApiController` | `api` | JSON responses với format chuẩn |

### Response Format (API)

```json
{
    "success": true,
    "statusCode": 200,
    "statusText": "ok",
    "message": "Success",
    "errors": [],
    "data": {}
}
```

## Saola View System

### Kiến trúc 2 giai đoạn

Saola View sử dụng kiến trúc **2-stage build**:

```
Stage 1: sao-compile                     Stage 2: Vite
─────────────────────                    ────────────────
resources/saola/{ctx}/views/*.sao        resources/js/saola/app.js
         │                                        │
         ├──→ Blade templates                     ├──→ public/static/saola/{ctx}/js/app.js
         │    resources/views/{ctx}/               │    (production bundle)
         │                                        │
         └──→ TypeScript views                    └──→ public/static/saola/{ctx}/manifest.json
              resources/js/saola/{ctx}/views/           (Vite manifest)
              resources/js/saola/{ctx}/registry.ts
```

### Stage 1: Compiler (`@saolabs/compiler`)

Biên dịch `.sao` single-file components thành cả Blade template (server) và TypeScript (client):

```bash
# Compile theo context
npm run build:views:web      # sao-compile web
npm run build:views:admin    # sao-compile admin
npm run build:views:mobile   # sao-compile mobile
npm run build:views          # sao-compile all

# Watch mode (dev)
npm run dev:views            # sao-compile all --watch
```

**Input:** `resources/saola/{context}/views/*.sao`
**Output:**
- Blade: `resources/views/{context}/*.blade.php`
- TypeScript: `resources/js/saola/{context}/views/*.ts`
- Registry: `resources/js/saola/{context}/registry.ts`

### Stage 2: Vite Bundler

Bundle TypeScript compiled output → production JavaScript:

```bash
# Build theo context
npm run build:web     # build:views:web + VITE_CONTEXT=web vite build
npm run build:admin   # build:views:admin + VITE_CONTEXT=admin vite build

# Dev server
npm run dev:web       # build:views:web + VITE_CONTEXT=web vite
```

**Entry point:** `resources/js/saola/app.js`
**Output:** `public/static/saola/{context}/js/app.js`

### SPA Runtime (`@saolabs/client`)

Entry point khởi tạo Application instance và đăng ký views:

```typescript
import { Application, app } from '@saolabs/client';
import views from './views.js';

const App: Application = app('App');
App.View.setViewRegistry(views);
App.init();
```

### .sao Single-File Component

File `.sao` là single-file component gồm 4 phần: **Declarations** → **Template** → **`<script setup>`** → **`<style>`**.

Ví dụ nhanh:

```saola
@states({ count: 0 })

<template>
<div>
    <button @click(setCount(count + 1))>{{ count }}</button>
</div>
</template>

<script setup>
export default {
    init() { console.log('mounted'); }
}
</script>
```

> Chi tiết đầy đủ: [SAO_FILE.md](SAO_FILE.md)

### Vite Aliases

| Alias | Path | Mục đích |
|-------|------|----------|
| `@` | `resources/js` | Shared JavaScript |
| `@saola` | `resources/saola` | Source .sao files |
| `@compiled` | `resources/js/saola` | Compiled output |
| `@views` | `resources/js/saola/{context}` | Context-specific views |

### Config Files

| File | Vai trò |
|------|---------|
| `sao.config.json` | Paths & contexts cho `sao-compile` CLI |
| `config/sao.php` | PHP-side compiler config (contexts, options, features) |
| `config/spa.php` | SPA runtime config (mode, debug, router) |
| `vite.config.js` | Vite bundler: entry, aliases, output |

## Packages

| Package | Registry | Vai trò |
|---------|----------|---------|
| `saola/core` | Composer (Packagist) | PHP core: routing, controllers, services, module system |
| `@saolabs/client` | npm | SPA runtime: Application, ViewController, reactive system |
| `@saolabs/compiler` | npm | CLI compiler: `.sao` → Blade + TypeScript |

## Infrastructure

Docker Compose cung cấp:
- **Redis 7** (port 6379) — Cache & session
- **Redis Commander** (port 8081) — Redis web UI
- **PostgreSQL 15** (port 5432) — Database
- **pgAdmin** (port 8080) — Database web UI
