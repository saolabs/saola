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
            ->group(function ($module) {
                $module->get('/manifest.json', 'manifest')->name('manifest');
                $module->get('/service-worker.js', 'serviceWorker')->name('service-worker');
                $module->get('/sw.js', 'sw')->name('sw');
                $module->get('/config', 'config')->name('config');
                $module->post('/config', 'updateConfig')->name('update-config');
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