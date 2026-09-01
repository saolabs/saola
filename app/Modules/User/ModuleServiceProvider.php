<?php

namespace App\Modules\User;

use App\Modules\User\Http\Controllers\Admin\UserController as AdminUserController;
use App\Modules\User\Http\Controllers\Api\UserController as ApiUserController;
use App\Modules\User\Http\Controllers\Web\UserController;
use App\Modules\User\Repositories\UserRepository;
use App\Modules\User\Repositories\UserRepositoryInterface;
use App\Modules\User\Services\UserService;
use App\Modules\User\Services\UserServiceInterface;
use Saola\Core\Providers\ModuleServiceProvider as CoreModuleServiceProvider;
use Saola\Core\System;

class ModuleServiceProvider extends CoreModuleServiceProvider
{
    public function register(): void
    {
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
        $this->app->bind(UserServiceInterface::class, UserService::class);
    }

    public function routes(): void
    {
        System::context('web')->module(['slug' => 'users', 'prefix' => 'users', 'priority' => 1])
            ->controller(UserController::class)
            ->as('users')
            ->title('Users')
            ->description('User profile management')
            ->displayName('Users')
            ->group(function ($module) {
                $module->get('/profile', 'profile')->name('profile')->viewPage('profile');
                $module->put('/profile', 'updateProfile')->name('update-profile');
            });

        System::context('admin')
            ->module('users')
            ->controller(AdminUserController::class)
            ->prefix('users')->as('users')
            ->title('@text:admin.users.module.title')
            ->description('@text:admin.users.module.description')
            ->displayName('@text:admin.users.module.display_name')
            ->group(function ($module) {
                $module->get('/', 'index')->name('index');
                $module->get('/create', 'create')->name('create');
                $module->post('/store', 'store')->name('store');
                $module->get('/{id}', 'show')->name('show');
                $module->get('/{id}/edit', 'edit')->name('edit');
            });

        System::context('api')->module(['slug' => 'users', 'prefix' => 'users', 'priority' => 1])
            ->controller(ApiUserController::class)
            ->as('users')
            ->title('Users API')
            ->description('User management API')
            ->displayName('Users')
            ->group(function ($module) {
                $module->get('/', 'index')->name('index');
                $module->post('/', 'store')->name('store');
                $module->get('/{id}', 'show')->name('show');
                $module->put('/{id}', 'update')->name('update');
                $module->delete('/{id}', 'destroy')->name('destroy');
            });
    }
}