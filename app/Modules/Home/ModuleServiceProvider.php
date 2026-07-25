<?php

namespace App\Modules\Home;

use App\Modules\Home\Http\Controllers\Admin\DashboardController;
use App\Modules\Home\Http\Controllers\Api\HomeController as ApiHomeController;
use App\Modules\Home\Http\Controllers\Web\HomeController;
use App\Modules\Home\Services\HomeService;
use App\Modules\Home\Services\HomeServiceInterface;
use Saola\Core\Providers\ModuleServiceProvider as CoreModuleServiceProvider;
use Saola\Core\Routing\System;

class ModuleServiceProvider extends CoreModuleServiceProvider
{
    public function register(): void
    {
        $this->app->bind(HomeServiceInterface::class, HomeService::class);
    }

    public function routes(): void
    {
        System::context('web')->module('home', ['prefix' => '/', 'priority' => 1])
            ->controller(HomeController::class)
            ->group(function ($module) {
                $module->get('/', 'index')->name('index');
                $module->get('/about', 'about')->name('about');
                $module->get('/privacy', 'privacy')->name('privacy');
                $module->get('/terms', 'terms')->name('terms');
                $module->get('/contact', 'contact')->name('contact');
                $module->get('/todo-list', 'todo')->name('todo');
            });

    }
}
