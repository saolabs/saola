<?php

namespace Tests\Unit\Http\Controllers;

use Tests\TestCase;
use Saola\Core\Http\Controllers\Support\WebResponse;
use Illuminate\Http\JsonResponse;

/**
 * Helper class to test WebResponse trait without conflicting with TestCase::json()
 */
class WebResponseHelper
{
    use WebResponse;
}

/**
 * Test WebResponse trait
 */
class WebResponseTest extends TestCase
{
    private WebResponseHelper $webResponse;

    protected function setUp(): void
    {
        parent::setUp();
        $this->webResponse = new WebResponseHelper();
    }

    /**
     * Test json success response - HTTP 200 với status code trong body
     */
    public function test_json_success_response_always_200(): void
    {
        $response = $this->webResponse->jsonSuccess(['id' => 1], 'Success', 201);
        
        $this->assertInstanceOf(JsonResponse::class, $response);
        // HTTP status code luôn là 200
        $this->assertEquals(200, $response->getStatusCode());
        
        $data = json_decode($response->getContent(), true);
        $this->assertTrue($data['success']);
        // Status code thực tế trong body
        $this->assertEquals(201, $data['statusCode']);
    }

    /**
     * Test json error response - HTTP 200 với status code trong body
     */
    public function test_json_error_response_always_200(): void
    {
        $response = $this->webResponse->jsonError('Error', ['field' => ['Error']], null, 400);
        
        $this->assertInstanceOf(JsonResponse::class, $response);
        // HTTP status code luôn là 200
        $this->assertEquals(200, $response->getStatusCode());
        
        $data = json_decode($response->getContent(), true);
        $this->assertFalse($data['success']);
        // Status code thực tế trong body
        $this->assertEquals(400, $data['statusCode']);
    }

    /**
     * Test json created response
     */
    public function test_json_created_response(): void
    {
        $response = $this->webResponse->jsonCreated(['id' => 1], 'Created');
        
        $this->assertInstanceOf(JsonResponse::class, $response);
        $this->assertEquals(200, $response->getStatusCode());
        
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
        $response = $this->webResponse->jsonValidationError($errors);
        
        $this->assertInstanceOf(JsonResponse::class, $response);
        $this->assertEquals(200, $response->getStatusCode());
        
        $data = json_decode($response->getContent(), true);
        $this->assertFalse($data['success']);
        $this->assertEquals(422, $data['statusCode']);
    }
}
