<?php

namespace App\Modules\Test\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

/**
 * Test API Controller
 * 
 * Sử dụng RESTful conventions:
 * - GET /test → index() - Danh sách
 * - POST /test → store() - Tạo mới
 * - GET /test/{id} → show($id) - Chi tiết
 * - PUT/PATCH /test/{id} → update($id) - Cập nhật
 * - DELETE /test/{id} → destroy($id) - Xóa
 * 
 * Service được tự động inject thông qua SmartInit trait
 * dựa trên module name: test
 * 
 * Sử dụng ApiResponse trait cho standardized responses:
 * - jsonSuccess($data, $message, $code) - HTTP status code đúng chuẩn RESTful
 * - jsonError($message, $errors, $data, $code) - Error responses
 * - jsonCreated($data, $message) - HTTP 201
 * - jsonNoContent() - HTTP 204
 * - jsonValidationError($errors, $message) - HTTP 422
 * 
 * @property \One\App\Services\ModuleService $service
 */
class TestController extends ApiController
{
    /**
     * Module name - dùng để tự động inject service và generate routes
     */
    protected $module = 'test';
    
    // Controller sẽ tự động có các methods từ ApiResponse trait:
    // - jsonSuccess() - Success response với HTTP status code đúng
    // - jsonError() - Error response
    // - jsonCreated() - Created response (HTTP 201)
    // - jsonNoContent() - No content (HTTP 204)
    // - jsonValidationError() - Validation error (HTTP 422)
    // - jsonNotFound() - Not found (HTTP 404)
    // - jsonUnauthorized() - Unauthorized (HTTP 401)
    // - jsonForbidden() - Forbidden (HTTP 403)
    // - jsonConflict() - Conflict (HTTP 409)
    
    // Implement RESTful methods:
    // public function index(Request $request): JsonResponse
    // {
    //     $results = $this->service->getResults($request);
    //     return $this->jsonSuccess($results);
    // }
    // 
    // public function store(Request $request): JsonResponse
    // {
    //     $validator = $this->service->validator($request);
    //     if (!$validator || !$validator->success()) {
    //         return $this->jsonValidationError($validator->getErrorObject());
    //     }
    //     $data = $this->service->create($validator->input());
    //     return $this->jsonCreated($data);
    // }
    // 
    // public function show($id): JsonResponse
    // {
    //     $item = $this->service->find($id);
    //     if (!$item) {
    //         return $this->jsonNotFound('Test not found');
    //     }
    //     return $this->jsonSuccess($item);
    // }
    // 
    // public function update(Request $request, $id): JsonResponse
    // {
    //     $validator = $this->service->validator($request);
    //     if (!$validator || !$validator->success()) {
    //         return $this->jsonValidationError($validator->getErrorObject());
    //     }
    //     $data = $this->service->update($id, $validator->input());
    //     if (!$data) {
    //         return $this->jsonNotFound('Test not found');
    //     }
    //     return $this->jsonSuccess($data);
    // }
    // 
    // public function destroy($id): JsonResponse
    // {
    //     $result = $this->service->delete($id);
    //     if (!$result) {
    //         return $this->jsonNotFound('Test not found');
    //     }
    //     return $this->jsonNoContent();
    // }
}
