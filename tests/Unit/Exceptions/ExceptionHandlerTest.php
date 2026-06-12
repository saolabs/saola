<?php

namespace Tests\Unit\Exceptions;

use Tests\TestCase;
use Saola\Core\Exceptions\ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\Access\AuthorizationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Illuminate\Http\Request;
use Illuminate\Validation\Validator;
use Illuminate\Support\Facades\Validator as ValidatorFacade;

/**
 * Test ExceptionHandler
 */
class ExceptionHandlerTest extends TestCase
{
    /**
     * Test handle validation exception
     */
    public function test_handle_validation_exception(): void
    {
        $request = Request::create('/api/test', 'POST');
        $validator = ValidatorFacade::make([], ['email' => 'required']);
        $exception = new ValidationException($validator);
        
        $response = ExceptionHandler::handleApiException($request, $exception);
        
        $this->assertEquals(422, $response->getStatusCode());
        $data = json_decode($response->getContent(), true);
        $this->assertFalse($data['success']);
        $this->assertEquals(422, $data['statusCode']);
    }

    /**
     * Test handle model not found exception
     */
    public function test_handle_model_not_found_exception(): void
    {
        $request = Request::create('/api/test', 'GET');
        $exception = new ModelNotFoundException();
        $exception->setModel('User', 1);
        
        $response = ExceptionHandler::handleApiException($request, $exception);
        
        $this->assertEquals(404, $response->getStatusCode());
        $data = json_decode($response->getContent(), true);
        $this->assertFalse($data['success']);
        $this->assertEquals(404, $data['statusCode']);
    }

    /**
     * Test handle authentication exception
     */
    public function test_handle_authentication_exception(): void
    {
        $request = Request::create('/api/test', 'GET');
        $exception = new AuthenticationException();
        
        $response = ExceptionHandler::handleApiException($request, $exception);
        
        $this->assertEquals(401, $response->getStatusCode());
        $data = json_decode($response->getContent(), true);
        $this->assertFalse($data['success']);
        $this->assertEquals(401, $data['statusCode']);
    }

    /**
     * Test handle authorization exception
     */
    public function test_handle_authorization_exception(): void
    {
        $request = Request::create('/api/test', 'GET');
        $exception = new AuthorizationException('Forbidden');
        
        $response = ExceptionHandler::handleApiException($request, $exception);
        
        $this->assertEquals(403, $response->getStatusCode());
        $data = json_decode($response->getContent(), true);
        $this->assertFalse($data['success']);
        $this->assertEquals(403, $data['statusCode']);
    }

    /**
     * Test handle not found http exception
     */
    public function test_handle_not_found_http_exception(): void
    {
        $request = Request::create('/api/test', 'GET');
        $exception = new NotFoundHttpException('Not found');
        
        $response = ExceptionHandler::handleApiException($request, $exception);
        
        $this->assertEquals(404, $response->getStatusCode());
        $data = json_decode($response->getContent(), true);
        $this->assertFalse($data['success']);
        $this->assertEquals(404, $data['statusCode']);
    }

    /**
     * Test should report method
     */
    public function test_should_report(): void
    {
        $validationException = new ValidationException(ValidatorFacade::make([], []));
        $this->assertFalse(ExceptionHandler::shouldReport($validationException));
        
        $genericException = new \Exception('Generic error');
        $this->assertTrue(ExceptionHandler::shouldReport($genericException));
    }
}

