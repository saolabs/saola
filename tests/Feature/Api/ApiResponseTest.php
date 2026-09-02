<?php

namespace Tests\Feature\Api;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * Feature test cho API responses
 *
 * Đã bỏ test_api_endpoint_returns_correct_format và
 * test_api_validation_error_returns_422: cả hai gọi `/api/test` — route KHÔNG
 * TỒN TẠI (route thật là `api/api/{users,roster,tests}`). Cái 422 vì vậy luôn
 * đỏ với 404; cái "correct format" thì xanh NHẦM, vì envelope của chính response
 * 404 cũng có đủ các key nó assert. Muốn dựng lại test 422 thì cần một endpoint
 * validate chạy được — hiện `POST api/api/users` đang 500
 * (`User::__getModelType__()` undefined), không dùng làm mốc được.
 */
class ApiResponseTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test API not found returns 404
     */
    public function test_api_not_found_returns_404(): void
    {
        $response = $this->getJson('/api/nonexistent');

        $response->assertStatus(404);
        $response->assertJson([
            'success' => false,
            'statusCode' => 404,
        ]);
    }
}
