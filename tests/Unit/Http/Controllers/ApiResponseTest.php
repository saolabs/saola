<?php

namespace Tests\Unit\Http\Controllers;

use Tests\TestCase;
use Saola\Core\Http\Controllers\Support\ApiResponse;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Helper class to test ApiResponse trait without conflicting with TestCase::json()
 */
class ApiResponseHelper
{
    use ApiResponse;
}

/**
 * Test ApiResponse trait
 */
class ApiResponseTest extends TestCase
{
    private ApiResponseHelper $apiResponse;

    protected function setUp(): void
    {
        parent::setUp();
        $this->apiResponse = new ApiResponseHelper();
    }

    /**
     * Test json success response
     */
    public function test_json_success_response(): void
    {
        $response = $this->apiResponse->jsonSuccess(['id' => 1, 'name' => 'Test'], 'Success', 200);
        
        $this->assertInstanceOf(JsonResponse::class, $response);
        $this->assertEquals(200, $response->getStatusCode());
        
        $data = json_decode($response->getContent(), true);
        $this->assertTrue($data['success']);
        $this->assertEquals(200, $data['statusCode']);
        $this->assertEquals('Success', $data['message']);
    }

    /**
     * Test json error response
     */
    public function test_json_error_response(): void
    {
        $response = $this->apiResponse->jsonError('Error occurred', ['field' => ['Error message']], null, 400);
        
        $this->assertInstanceOf(JsonResponse::class, $response);
        $this->assertEquals(400, $response->getStatusCode());
        
        $data = json_decode($response->getContent(), true);
        $this->assertFalse($data['success']);
        $this->assertEquals(400, $data['statusCode']);
        $this->assertEquals('Error occurred', $data['message']);
    }

    /**
     * Test json created response
     */
    public function test_json_created_response(): void
    {
        $response = $this->apiResponse->jsonCreated(['id' => 1, 'name' => 'Created'], 'Created successfully');
        
        $this->assertInstanceOf(JsonResponse::class, $response);
        $this->assertEquals(201, $response->getStatusCode());
        
        $data = json_decode($response->getContent(), true);
        $this->assertTrue($data['success']);
        $this->assertEquals(201, $data['statusCode']);
    }

    /**
     * Test json validation error response
     */
    public function test_json_validation_error_response(): void
    {
        $errors = ['email' => ['The email field is required.']];
        $response = $this->apiResponse->jsonValidationError($errors, 'Validation failed');
        
        $this->assertInstanceOf(JsonResponse::class, $response);
        $this->assertEquals(422, $response->getStatusCode());
        
        $data = json_decode($response->getContent(), true);
        $this->assertFalse($data['success']);
        $this->assertEquals(422, $data['statusCode']);
        $this->assertEquals($errors, $data['errors']);
    }

    /**
     * Test json not found response
     */
    public function test_json_not_found_response(): void
    {
        $response = $this->apiResponse->jsonNotFound('Resource not found', 404);
        
        $this->assertInstanceOf(JsonResponse::class, $response);
        $this->assertEquals(404, $response->getStatusCode());
        
        $data = json_decode($response->getContent(), true);
        $this->assertFalse($data['success']);
        $this->assertEquals(404, $data['statusCode']);
    }
}
