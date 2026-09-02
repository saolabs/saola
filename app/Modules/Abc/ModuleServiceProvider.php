<?php

namespace App\Modules\Abc;

use App\Modules\Abc\Http\Controllers\Web\AbcController;
use Saola\Core\Providers\ModuleServiceProvider as CoreModuleServiceProvider;
use Saola\Core\System;

/**
 * Module minh hoạ quy tắc route name → view path.
 *
 * Route `web.abc.index`: segment đầu (`web`) chỉ xác định context, phần còn lại
 * (`abc.index`) nối sau `{base}.modules.`. Đổi base của context web sang
 * `test-web.demo` thì view thành `test-web.demo.modules.abc.index`.
 */
class ModuleServiceProvider extends CoreModuleServiceProvider
{
    public function register(): void
    {
    }

    public function routes(): void
    {
        System::context('web')->module('abc', ['prefix' => '/abc', 'priority' => 9])
            ->controller(AbcController::class)
            ->group(function ($module) {
                $module->get('/', 'index')->name('index');
                $module->get('/sub', 'sub')->name('sub.index');
            });
    }
}
