# Controllers & Responses

## Base Controllers

Saola cung cấp các base controller trong `app/Http/Controllers/`:

### WebController

Kế thừa `Saola\Core\Http\Controllers\BaseWebController`.

```php
use App\Http\Controllers\WebController;

class HomeController extends WebController
{
    public function index()
    {
        return $this->response([
            'title' => 'Home',
            'data' => [...],
        ]);
    }
}
```

`response()` tự động:
- Resolve blade path từ route name (vd: `home.index` → `web/home/index.blade.php`)
- Trả JSON nếu request expects JSON
- Trả View nếu request là web

### AdminController

Kế thừa `BaseWebController` với các methods CRUD sẵn:

```php
use App\Http\Controllers\AdminController;

class UserController extends AdminController
{
    public function index() { /* List page */ }
    public function list()  { /* Data listing (AJAX) */ }
    public function detail($id) { /* Detail page */ }
    public function create() { /* Create form */ }
    public function edit($id) { /* Edit form */ }
    public function trash()  { /* Trash page */ }
}
```

### ApiController

Kế thừa `Saola\Core\Http\Controllers\BaseApiController`.

```php
use App\Http\Controllers\ApiController;

class UserApiController extends ApiController
{
    public function index()
    {
        return $this->success([
            'users' => User::all(),
        ]);
    }

    public function store(Request $request)
    {
        // validate & create
        return $this->success($user, 'Created', 201);
    }

    public function destroy($id)
    {
        return $this->error('Not found', 404);
    }
}
```

## API Response Format

### Success Response
```json
{
    "success": true,
    "statusCode": 200,
    "statusText": "ok",
    "message": "Success",
    "errors": [],
    "data": { ... }
}
```

### Error Response
```json
{
    "success": false,
    "statusCode": 404,
    "statusText": "not_found",
    "message": "Not found",
    "errors": ["Resource not found"],
    "data": null
}
```

## Middleware

### WebViewManager
Middleware core cho web context. Xử lý view resolution, context binding, state injection.

### Middleware Stack

```
Web:   ValidatePathEncoding → TrustProxies → HandleCors → PreventRequests
       → TrimStrings → ConvertEmptyStrings → EncryptCookies → AddCookies
       → StartSession → ShareErrors → CSRF → SubstituteBindings → WebViewManager

API:   ValidatePathEncoding → TrustProxies → HandleCors → PreventRequests
       → TrimStrings → ConvertEmptyStrings → Sanctum::statefulApi
```
