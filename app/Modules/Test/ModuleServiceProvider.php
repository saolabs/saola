<?php

namespace App\Modules\Test;

use Saola\Core\Providers\ModuleServiceProvider as CoreModuleServiceProvider;
use Saola\Core\System;
use App\Modules\Test\Http\Controllers\Admin\TestController as AdminTestController;
use App\Modules\Test\Http\Controllers\Api\TestController as ApiTestController;
use App\Modules\Test\Http\Controllers\Web\TestController as WebTestController;
use App\Modules\Test\Services\TestService;

class ModuleServiceProvider extends CoreModuleServiceProvider
{
    public function register(): void
    {
        $this->app->singleton(TestService::class, TestService::class);
    }

    // public function boot(): void
    // {
    //     parent::boot();
    //     // Các logic boot khác nếu cần
    // }

    public function routes(): void
    {
        System::context('admin')
            ->module('tests')
            ->controller(AdminTestController::class)
            ->prefix('tests')
            ->as('tests')
            ->group(function ($module) {
                $module->get('/', 'index')->name('index');
            });

        System::context('api')
            ->module(['slug' => 'tests', 'prefix' => '/tests', 'priority' => 1])
            ->controller(ApiTestController::class)
            ->as('tests')
            ->group(function ($module) {
                $module->get('/', 'index')->name('index');
            });

        System::context('web')
            ->module(['slug' => 'tests', 'prefix' => '/tests', 'priority' => 1])
            ->controller(WebTestController::class)
            ->as('tests')
            ->group(function ($module) {
                $module->get('/', 'index')->name('index');
            });
    }
}
