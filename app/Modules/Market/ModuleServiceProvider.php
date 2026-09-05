<?php

namespace App\Modules\Market;

use App\Modules\Market\Http\Controllers\Web\MarketController;
use App\Modules\Market\Services\MarketFeed;
use Saola\Core\Providers\ModuleServiceProvider as CoreModuleServiceProvider;
use Saola\Core\System;

/**
 * Market — biểu đồ giá realtime, bàn thử cho INTEROP với thư viện JS bên ngoài.
 *
 * Câu hỏi mà trang này trả lời: một thư viện tự quản DOM (ở đây là
 * lightweight-charts) sống chung với hydration của Saola được không. Nến ban
 * đầu do server nạp nên SSR có dữ liệu thật; thư viện chỉ tiếp quản SAU mount,
 * trong một node mà framework không bao giờ render lại.
 */
class ModuleServiceProvider extends CoreModuleServiceProvider
{
    public function register(): void
    {
        $this->app->singleton(MarketFeed::class);
    }

    public function routes(): void
    {
        System::context('web')->module('market', ['prefix' => '/demo/market', 'priority' => 5])
            ->controller(MarketController::class)
            ->group(function ($module) {
                $module->get('/', 'index')->name('index');
            });
    }
}
