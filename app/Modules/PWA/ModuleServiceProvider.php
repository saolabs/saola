<?php

namespace App\Modules\PWA;

use App\Modules\PWA\Http\Controllers\Admin\PWAController as AdminPWAController;
use App\Modules\PWA\Http\Controllers\Web\PWAController;
use App\Modules\PWA\Services\PWAService;
use App\Modules\PWA\Services\PWAServiceInterface;
use Saola\Core\Providers\ModuleServiceProvider as CoreModuleServiceProvider;
use Saola\Core\System;

class ModuleServiceProvider extends CoreModuleServiceProvider
{
    public function register(): void
    {
        $this->app->bind(PWAServiceInterface::class, PWAService::class);
    }

    public function routes(): void
    {
        System::context('web')->module(['slug' => 'pwa', 'priority' => 1])
            ->controller(PWAController::class)
            ->as('pwa')
            ->title('PWA Configuration')
            ->description('Progressive Web App Configuration')
            ->displayName('PWA Config')
            // Chỉ ba endpoint DỮ LIỆU ở context web. Sửa cấu hình nằm ở context
            // admin bên dưới, nơi có middleware auth.
            //
            // `GET /config` và `POST /config` đã bị gỡ khỏi đây: view `pwa::config`
            // chưa từng được viết nên GET trả 500, còn POST thì cho BẤT KỲ AI đổi
            // tên app, màu và cache_version — những giá trị nuôi thẳng manifest.json
            // và service worker — mà không cần đăng nhập.
            ->group(function ($module) {
                $module->get('/manifest.json', 'manifest')->name('manifest');
                $module->get('/service-worker.js', 'serviceWorker')->name('service-worker');
                $module->get('/sw.js', 'sw')->name('sw');
            });

        System::context('admin')
            ->module(['slug' => 'pwa', 'priority' => 1])
            ->controller(AdminPWAController::class)
            ->as('pwa')
            ->title('PWA Management')
            ->description('Manage Progressive Web App Configuration')
            ->displayName('PWA Management')
            ->group(function ($module) {
                $module->get('/', 'index')->name('index');
                $module->get('/edit', 'edit')->name('edit');
                $module->put('/update', 'update')->name('update');
                $module->get('/preview/manifest', 'previewManifest')->name('preview.manifest');
                $module->get('/preview/service-worker', 'previewServiceWorker')->name('preview.service-worker');
            });
    }
}