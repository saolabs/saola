# Testing

## Stack

- **PHP**: [Pest 4](https://pestphp.com/) (trên PHPUnit 12)
- **JavaScript**: [Vitest 3](https://vitest.dev/)

## Chạy Tests

```bash
# Tất cả PHP tests
php artisan test

# Hoặc trực tiếp Pest
./vendor/bin/pest

# Chỉ unit tests
./vendor/bin/pest --group=unit
# hoặc
./vendor/bin/pest tests/Unit

# Chỉ feature tests
./vendor/bin/pest tests/Feature

# JavaScript tests
npm test
```

## Cấu Trúc Test

```
tests/
├── Pest.php              # Pest configuration
├── TestCase.php          # Base test case
├── CreatesApplication.php
├── setup.js              # Vitest setup
├── Unit/
│   ├── Exceptions/
│   ├── Http/
│   │   └── Controllers/
│   ├── Middleware/
│   └── Services/
├── Feature/
│   └── ExampleTest.php
├── core/                 # Core framework tests
├── Helpers/              # Test helpers
└── performance/          # Performance tests
```

## Viết PHP Test

Sử dụng Pest syntax:

```php
<?php

use App\Models\User;

test('user can be created', function () {
    $user = User::factory()->create();

    expect($user)->toBeInstanceOf(User::class);
    expect($user->id)->toBeInt();
});

test('homepage returns 200', function () {
    $response = $this->get('/');

    $response->assertStatus(200);
});
```

## Viết JavaScript Test

Sử dụng Vitest:

```js
import { describe, it, expect } from 'vitest';

describe('Component', () => {
    it('should render correctly', () => {
        expect(true).toBe(true);
    });
});
```

## Configuration

### phpunit.xml

```xml
<env name="APP_ENV" value="testing"/>
<env name="CACHE_STORE" value="array"/>
<env name="DB_CONNECTION" value="sqlite"/>
<env name="DB_DATABASE" value=":memory:"/>
<env name="MAIL_MAILER" value="array"/>
<env name="PULSE_ENABLED" value="false"/>
<env name="QUEUE_CONNECTION" value="sync"/>
<env name="SESSION_DRIVER" value="array"/>
<env name="BROADCAST_CONNECTION" value="null"/>
<env name="DB_URL" value=""/>
```

### vitest.config.js

Test JavaScript files tại `tests/` với setup file `tests/setup.js`.
