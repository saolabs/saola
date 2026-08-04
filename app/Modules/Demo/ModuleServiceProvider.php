<?php

namespace App\Modules\Demo;

use App\Modules\Demo\Http\Controllers\Web\DemoController;
use Saola\Core\Providers\ModuleServiceProvider as CoreModuleServiceProvider;
use Saola\Core\Routing\System;

class ModuleServiceProvider extends CoreModuleServiceProvider
{
    public function register(): void
    {
        // This demo has no service dependencies.
    }

    public function routes(): void
    {
        System::context('web')->module('demo', ['prefix' => '/demo', 'priority' => 5])
            ->controller(DemoController::class)
            ->group(function ($module) {
                $module->get('/', 'index')->name('index');
            });
    }
}
