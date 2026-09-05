<?php

namespace App\Modules\Grid;

use App\Modules\Grid\Http\Controllers\Web\GridController;
use App\Modules\Grid\Services\PackageTable;
use Saola\Core\Providers\ModuleServiceProvider as CoreModuleServiceProvider;
use Saola\Core\System;

/**
 * Grid — bảng dữ liệu lọc/sắp/phân trang phía server.
 *
 * Chứng minh trang đầu tiên vẫn render được bằng Blade (đọc được khi tắt JS,
 * và bot đọc được) trong khi mọi thao tác sau đó chạy CSR trên cùng URL.
 */
class ModuleServiceProvider extends CoreModuleServiceProvider
{
    public function register(): void
    {
        $this->app->singleton(PackageTable::class);
    }

    public function routes(): void
    {
        System::context('web')->module('grid', ['prefix' => '/demo/grid', 'priority' => 5])
            ->controller(GridController::class)
            ->group(function ($module) {
                $module->get('/', 'index')->name('index');
            });
    }
}
