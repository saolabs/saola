# Saola

> Laravel SPA Framework by SaoLabs Team

---

## Tổng Quan

**Saola** là một framework xây dựng trên **Laravel 13** với kiến trúc modular multi-context. Hệ thống hỗ trợ biên dịch view và runtime reactive để tạo SPA experience mà vẫn giữ nguyên workflow Laravel quen thuộc.

### Tính Năng Chính

- **Multi-Context Architecture** — Web, Admin, API với middleware và routing riêng biệt
- **Modular System** — Auto-discover modules (đệ quy), nested modules hỗ trợ lồng nhau bất kỳ độ sâu
- **API Response Format** — Chuẩn hóa JSON response cho API context
- **PWA Support** — Progressive Web App tích hợp sẵn

### Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Laravel 13, PHP 8.3+ |
| Frontend | Vite 6, Tailwind CSS 4 |
| Database | PostgreSQL 15 |
| Cache | Redis 7 |
| Testing | Pest 4 (PHP), Vitest 3 (JS) |
| Infrastructure | Docker Compose |

---

## Quick Start

```bash
# Clone & install
git clone <repo-url> saola && cd saola
composer install && npm install

# Environment
cp .env.example .env
php artisan key:generate

# Docker services (PostgreSQL, Redis)
docker-compose up -d

# Database
php artisan migrate

# Development (server + vite + view compiler watcher)
composer dev
```

Truy cập: `http://localhost:8000`

---

## Cấu Trúc Project

```
app/
├── Http/Controllers/          # Base controllers (Web, Admin, Api)
├── Models/                    # Eloquent models
├── Modules/                   # Feature modules (auto-discovered)
│   ├── Home/                  # Home module
│   ├── User/                  # User module (web + admin + api)
│   └── PWA/                   # PWA module
├── Providers/                 # Service providers
└── View/Components/           # Blade components
config/                        # Laravel + Saola configs
resources/
├── views/                     # Blade templates (per context)
├── js/                        # JavaScript + compiled view output
└── css/                       # Stylesheets
tests/                         # Pest + Vitest tests
docker/                        # Docker configs
```

---

## Tài Liệu

| Tài liệu | Nội dung |
|-----------|----------|
| [Architecture](docs/ARCHITECTURE.md) | Kiến trúc hệ thống, multi-context, request flow |
| [Installation](docs/INSTALLATION.md) | Cài đặt, cấu hình, Docker |
| [Modules](docs/MODULES.md) | Module system, nested modules, tạo module mới |
| [Controllers](docs/CONTROLLERS.md) | Base controllers, API response format |
| [Configuration](docs/CONFIGURATION.md) | Config files, environment variables |
| [Testing](docs/TESTING.md) | Pest, Vitest, test structure |

---

## Scripts

```bash
composer dev          # Dev server + Vite + view compiler watcher
composer test         # PHP tests
npm run dev           # Vite dev server
npm run build         # Production build
npm test              # JavaScript tests
```

---

## License

Proprietary — SaoLabs Team
