# Hướng Dẫn Cài Đặt

## Yêu Cầu

- PHP >= 8.3
- Composer 2.x
- Node.js >= 18
- Docker & Docker Compose (cho Redis, PostgreSQL)

## Cài Đặt

### 1. Clone project

```bash
git clone <repo-url> saola
cd saola
```

### 2. Cài dependencies

```bash
composer install
npm install
```

### 3. Cấu hình environment

```bash
cp .env.example .env
php artisan key:generate
```

Cấu hình `.env`:

```env
APP_NAME=Saola
APP_URL=http://localhost:8000

DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=saola
DB_USERNAME=saola
DB_PASSWORD=secret

CACHE_STORE=redis
SESSION_DRIVER=redis
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```

### 4. Khởi động Docker services

```bash
docker-compose up -d
```

Services:
| Service | Port | Mô tả |
|---------|------|--------|
| PostgreSQL | 5432 | Database |
| pgAdmin | 8080 | Database UI |
| Redis | 6379 | Cache & Session |
| Redis Commander | 8081 | Redis UI |

### 5. Migration

```bash
php artisan migrate
php artisan db:seed  # (optional)
```

### 6. Build assets

```bash
# Development (watch mode)
npm run dev

# Production
npm run build
```

### 7. Chạy server

```bash
php artisan serve
```

Truy cập: `http://localhost:8000`

## Development Script

`composer dev` chạy đồng thời:
- `php artisan serve` - Laravel server
- `npx vite` - Vite dev server  
- `npm run dev:views` - Saola view compiler watch mode

```bash
composer dev
```

## Testing

```bash
# PHP tests (Pest)
php artisan test
# hoặc
./vendor/bin/pest

# JavaScript tests (Vitest)
npm test
```

### Scripts chính (NPM)

- `npm run build:views` - Compile views cho tất cả contexts
- `npm run build:views:web` - Compile views context web
- `npm run dev:views` - Watch mode cho compiler
- `npm run saola:compile` - Compile qua CLI compiler

## Docker Chi Tiết

File `docker-compose.yml` định nghĩa:

```yaml
# PostgreSQL
services:
  pgsql:
    image: postgres:15
    ports: ["5432:5432"]
    environment:
      POSTGRES_DB: saola
      POSTGRES_USER: saola
      POSTGRES_PASSWORD: secret

  # Redis
  redis:
    image: redis:7-alpine
    ports: ["6379:6379"]
```

Volumes được persist tại `./docker/`:
- `./docker/mysql/my.cnf` - MySQL config (nếu dùng MySQL)
- `./docker/redis/redis.conf` - Redis config
