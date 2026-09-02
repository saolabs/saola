<?php

namespace App\Modules\Components;

use App\Modules\Components\Http\Controllers\Web\ComponentsController;
use Saola\Core\Providers\ModuleServiceProvider as CoreModuleServiceProvider;
use Saola\Core\System;

class ModuleServiceProvider extends CoreModuleServiceProvider
{
    public function register(): void
    {
        // Trang ví dụ — không có service.
    }

    public function routes(): void
    {
        System::context('web')->module('components', ['prefix' => '/components', 'priority' => 2])
            ->controller(ComponentsController::class)
            ->group(function ($module) {
                $module->get('/', 'index')->name('index');
            });
    }
}
