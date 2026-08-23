<?php

namespace App\Modules\Roster;

use App\Modules\Roster\Http\Controllers\Api\RosterController as ApiRosterController;
use App\Modules\Roster\Http\Controllers\Web\RosterController as WebRosterController;
use Saola\Core\Providers\ModuleServiceProvider as CoreModuleServiceProvider;
use Saola\Core\Routing\System;

/**
 * Roster — bàn thử nghiệm cho vòng đời dữ liệu phía client.
 *
 * Backend cố tình mỏng: CRUD trên storage/data/users.json, mỗi bản ghi mang
 * một mốc `updated_at` (ms) đóng vai trò version. Toàn bộ phần thú vị —
 * poll 30s, diff, giữ form đang sửa khi bản ghi đổi hoặc bị xoá — nằm ở
 * resources/saola/web/views/modules/roster/*.sao.
 */
class ModuleServiceProvider extends CoreModuleServiceProvider
{
    public function register(): void
    {
        // Không có service/repository: dữ liệu nằm trong một file JSON.
    }

    public function routes(): void
    {
        System::context('web')->module('roster', ['prefix' => '/roster', 'priority' => 5])
            ->controller(WebRosterController::class)
            ->group(function ($module) {
                $module->get('/', 'index')->name('index');
            });

        System::context('api')->module('roster', ['prefix' => '/roster', 'priority' => 5])
            ->controller(ApiRosterController::class)
            ->group(function ($module) {
                $module->get('/', 'index')->name('index');
                $module->post('/', 'store')->name('store');
                $module->put('/{uuid}', 'update')->name('update');
                $module->delete('/{uuid}', 'destroy')->name('destroy');
            });
    }
}
