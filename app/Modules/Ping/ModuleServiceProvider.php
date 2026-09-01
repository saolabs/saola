<?php

namespace App\Modules\Ping;

use App\Modules\Ping\Http\Controllers\Web\PingController;
use Saola\Core\Providers\ModuleServiceProvider as CoreModuleServiceProvider;
use Saola\Core\System;

class ModuleServiceProvider extends CoreModuleServiceProvider
{
    public function register(): void
    {
        // Module test thuần view → không cần bind service.
    }

    public function routes(): void
    {
        System::context('web')->module('ping', ['prefix' => '/ping', 'priority' => 5])
            ->controller(PingController::class)
            ->group(function ($module) {
                $module->get('/', 'index')->name('index');
            });
    }
}
