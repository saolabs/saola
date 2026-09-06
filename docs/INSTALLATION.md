# Cài đặt và chạy Saola

Ứng dụng trong workspace này dùng các package sibling `core/`, `compiler/`,
`builder/`, `client/` qua Composer path và npm file dependencies. Giữ cấu trúc
workspace khi phát triển; không clone riêng `saola/` rồi kỳ vọng các đường dẫn
sibling tồn tại.

## Chạy local

Cài PHP đáp ứng `composer.lock`, Composer 2 và Node đáp ứng package dependencies.
Compiler yêu cầu PHP 8.3 trở lên; bản Laravel/dependency được khóa có thể yêu cầu
cao hơn. Dùng `composer check-platform-reqs` để kiểm môi trường thực tế.

Từ workspace root:

```bash
cd compiler
composer install
cd ../core
composer install
cd ../builder
npm install
cd ../client
npm install
npm run build
cd ../saola
composer install
npm install
composer check-platform-reqs
```

Chỉ khi chưa có `.env`, sao chép `.env.example` và tạo key:

```bash
cp .env.example .env
php artisan key:generate
```

Cấu hình database/cache/session theo môi trường của bạn trong `.env`, rồi chạy
migration cho database phát triển. Không cần PostgreSQL/Redis để hiểu cú pháp
component; chúng là lựa chọn hạ tầng của demo Docker.

```bash
php artisan migrate
npm run dev
```

`npm run dev` đã chạy Laravel server, Vite và watcher build client local.
Vite plugin quản lý watcher `.sao`; không chạy thêm `dev:views` song song với nó.
Địa chỉ mặc định local: `http://127.0.0.1:8080`. Có thể đổi `DEV_PORT`.
`composer dev` bổ sung queue worker và log viewer, dùng cùng lệnh `npm run dev`.

## Docker của workspace

```bash
docker compose up -d --build
```

Cấu hình hiện tại trong `docker-compose.yml`:

| Dịch vụ | Cổng host |
|---|---|
| Laravel | 8686 |
| Vite | 5174 |
| PostgreSQL | 5433 |
| Redis | 6382 |
| Redis Commander | 8687 |
| pgAdmin | 8688 |

Mở `http://localhost:8686`. Ứng dụng trong container kết nối bằng tên service
`postgres:5432` và `redis:6379`; ứng dụng chạy trên host dùng cổng host tương ứng.
Thông tin tài khoản phát triển nằm trong compose; cấu hình riêng cho production.

`public/hot` là cờ Vite đang hoạt động. Không xóa file này khi phiên dev còn chạy.
Để kiểm production trong lúc dev đang chạy, dùng bản sao ứng dụng và cổng riêng.

## Viết component và kiểm tra

Bắt đầu với [hướng dẫn `.sao`](SAO_FILE.md), sau đó [module](MODULES.md).

```bash
npm run check          # Compile các context và typecheck toàn ứng dụng
npm run typecheck      # Kiểm output đang có, không compile lại
npm run test:unit      # Vitest chạy một lần
php artisan test      # Pest / Laravel
npm run build         # Check rồi bundle web
npm run build:admin
npm run build:mobile
```

Build dừng khi typecheck lỗi. Sửa `.sao` nguồn, không sửa `.ts` sinh ra và không
bỏ strict để làm build xanh.

`npm run check:release` build production web (kèm check), chạy unit, Laravel và E2E bắt buộc. E2E cần ứng dụng
đã build đang phục vụ trên `E2E_BASE_URL` cùng Chromium của Playwright. Dùng server
và dữ liệu test riêng: một số E2E thực hiện tạo/sửa/xóa dữ liệu demo.
Thiếu server sẽ làm cổng release lỗi thay vì coi suite bị skip là thành công.

```bash
E2E_BASE_URL=http://127.0.0.1:8876 npm run check:release
```

Lệnh này là bộ kiểm tra tự động cho ứng dụng, chưa thay thế benchmark, kiểm tải,
package-consumer tests và việc phân loại golden/parity ở các package khác.
