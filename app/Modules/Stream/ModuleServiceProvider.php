<?php

namespace App\Modules\Stream;

use App\Modules\Stream\Http\Controllers\Web\StreamController;
use App\Modules\Stream\Services\EventFeed;
use Saola\Core\Providers\ModuleServiceProvider as CoreModuleServiceProvider;
use Saola\Core\System;

/**
 * Stream — luồng sự kiện qua SSE.
 *
 * Bàn thử cho danh sách CHỈ THÊM VÀO ĐẦU và cho một kết nối SỐNG đi qua điều
 * hướng SPA: nối ở started(), đóng ở destroyed(), nếu không mỗi lượt vào lại
 * trang là thêm một kết nối nữa ăn một worker PHP.
 */
class ModuleServiceProvider extends CoreModuleServiceProvider
{
    public function register(): void
    {
        $this->app->singleton(EventFeed::class);
    }

    public function routes(): void
    {
        System::context('web')->module('stream', ['prefix' => '/demo/stream', 'priority' => 5])
            ->controller(StreamController::class)
            ->group(function ($module) {
                $module->get('/', 'index')->name('index');
                $module->get('/events', 'events')->name('events');
            });
    }
}
