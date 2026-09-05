<?php

namespace App\Modules\Board;

use App\Modules\Board\Http\Controllers\Web\BoardController;
use App\Modules\Board\Services\BoardStore;
use Saola\Core\Providers\ModuleServiceProvider as CoreModuleServiceProvider;
use Saola\Core\System;

/**
 * Board — bàn thử cho ca KHÓ NHẤT của danh sách có khoá: khoá DI CHUYỂN giữa
 * hai vùng `@foreach` khác nhau khi kéo thẻ sang cột khác.
 *
 * Runtime phải nhận ra đó là cùng một thẻ để giữ nguyên state con (ô sửa tiêu
 * đề đang mở) thay vì dựng lại node mới.
 */
class ModuleServiceProvider extends CoreModuleServiceProvider
{
    public function register(): void
    {
        $this->app->singleton(BoardStore::class);
    }

    public function routes(): void
    {
        System::context('web')->module('board', ['prefix' => '/demo/board', 'priority' => 5])
            ->controller(BoardController::class)
            ->group(function ($module) {
                $module->get('/', 'index')->name('index');
                $module->post('/move', 'move')->name('move');
                $module->post('/card', 'store')->name('store');
                $module->put('/card/{id}', 'rename')->name('rename');
                $module->delete('/card/{id}', 'destroy')->name('destroy');
            });
    }
}
