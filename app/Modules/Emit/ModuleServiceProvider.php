<?php

namespace App\Modules\Emit;

use App\Modules\Emit\Http\Controllers\Web\EmitController;
use Saola\Core\Providers\ModuleServiceProvider as CoreModuleServiceProvider;
use Saola\Core\System;

/**
 * Emit — bàn thử cho kênh sự kiện con→cha.
 *
 * Cùng một view con được dựng bằng CẢ HAI mặt chữ (thẻ component và `@include`
 * với khoá `on$`) trên cùng một trang, để mọi khác biệt giữa hai đường lộ ra
 * ngay cạnh nhau thay vì phải so hai trang.
 */
class ModuleServiceProvider extends CoreModuleServiceProvider
{
    public function register(): void
    {
        // Thuần view, không cần service.
    }

    public function routes(): void
    {
        System::context('web')->module('emit', ['prefix' => '/demo/emit', 'priority' => 5])
            ->controller(EmitController::class)
            ->group(function ($module) {
                $module->get('/', 'index')->name('index');
            });
    }
}
