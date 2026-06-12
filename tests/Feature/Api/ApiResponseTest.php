<?php

namespace Tests\Feature\Api;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * Feature test cho API responses
 */
class ApiResponseTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test API endpoint returns correct format
     */
    public function test_api_endpoint_returns_correct_format(): void
    {
        $response = $this->getJson('/api/test');
        
        // Kiểm tra response có đúng format không
        $response->assertJsonStructure([
            'success',
            'statusCode',
            'statusText',
            'message',
            'errors',
            'data',
        ]);
    }

    /**
     * Test API validation error returns 422
     */
    public function test_api_validation_error_returns_422(): void
    {
        $response = $this->postJson('/api/test', []);
        
        // Validation errors nên trả về 422
        $response->assertStatus(422);
        $response->assertJson([
            'success' => false,
            'statusCode' => 422,
        ]);
    }

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

