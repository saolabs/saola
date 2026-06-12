# Cấu Hình

## Config Files

### config/one.php

Cấu hình core Saola framework:

```php
return [
    'name' => env('SAO_NAME', 'saola'),
    'version' => env('SAO_VERSION', '0.1.0'),
    'debug' => env('SAO_DEBUG', false),
    // ...
];
```

### config/spa.php

Cấu hình SPA behavior:

```php
return [
    'enabled' => env('SPA_ENABLED', true),
    'contexts' => ['web', 'admin'],
    // ...
];
```

### config/pwa.php

Progressive Web App settings:

```php
return [
    'name' => env('APP_NAME', 'Saola'),
    'short_name' => 'Saola',
    'start_url' => '/',
    'display' => 'standalone',
    'theme_color' => '#ffffff',
    'background_color' => '#ffffff',
    'icons' => [...],
];
```

## Environment Variables

### Application
| Variable | Default | Mô tả |
|----------|---------|--------|
| `APP_NAME` | `Saola` | Tên ứng dụng |
| `APP_ENV` | `production` | Environment |
| `APP_DEBUG` | `false` | Debug mode |
| `APP_URL` | `http://localhost` | Base URL |

### Database
| Variable | Default | Mô tả |
|----------|---------|--------|
| `DB_CONNECTION` | `pgsql` | Database driver |
| `DB_HOST` | `127.0.0.1` | Database host |
| `DB_PORT` | `5432` | Database port |
| `DB_DATABASE` | `saola` | Database name |

### Cache & Session
| Variable | Default | Mô tả |
|----------|---------|--------|
| `CACHE_STORE` | `redis` | Cache driver |
| `SESSION_DRIVER` | `redis` | Session driver |
| `REDIS_HOST` | `127.0.0.1` | Redis host |

### Saola View
| Variable | Default | Mô tả |
|----------|---------|--------|
| `ONE_NAME` | `saola` | Project name |
| `SAO_VERSION` | `0.1.0` | Project version |
| `SAO_DEBUG` | `false` | Saola View debug |
| `SPA_ENABLED` | `true` | Enable SPA mode |

## Build Config Files

| File | Mục đích |
|------|----------|
| `sao.config.json` | Saola View compiler settings |
| `build.config.json` | Build process config |
| `vite.config.js` | Vite bundler config |
| `tsconfig.json` | TypeScript config |
| `vitest.config.js` | Vitest test runner |
| `webpack.config.js` | Webpack fallback (legacy) |
