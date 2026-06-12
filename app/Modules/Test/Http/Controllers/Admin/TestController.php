<?php

namespace App\Modules\Test\Http\Controllers\Admin;

use App\Http\Controllers\AdminController;

/**
 * Test Admin Controller
 * 
 * Sử dụng convention-based routing:
 * - index() → viewIndexPage() - Hiển thị danh sách
 * - create() → viewCreatePage() hoặc create() - Tạo mới
 * - edit($id) → viewEditPage($id) - Chỉnh sửa
 * - show($id) → viewDetailPage($id) - Chi tiết
 * - destroy($id) → delete($id) - Xóa
 * 
 * Service được tự động inject thông qua SmartInit trait
 * dựa trên module name: test
 * 
 * @property \App\Services\ModuleService $service
 */
class TestController extends AdminController
{
    /**
     * Module name - dùng để tự động inject service và generate routes
     */
    protected $module = 'test';
    
    // Controller sẽ tự động có các methods:
    // - index() → viewIndexPage() - Tự động gọi service->getResults()
    // - create() → viewCreatePage() hoặc create() - Tự động gọi service->create()
    // - edit($id) → viewEditPage($id) - Tự động gọi service->getFormData()
    // - show($id) → viewDetailPage($id) - Tự động gọi service->detail()
    // - destroy($id) → delete($id) - Tự động gọi service->delete()
    
    // Nếu cần custom logic, override các methods:
    // public function index(Request $request): View|JsonResponse
    // {
    //     // Custom logic here
    //     return parent::viewIndexPage($request);
    // }
}
