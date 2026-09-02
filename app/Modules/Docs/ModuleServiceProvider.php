<?php

namespace App\Modules\Docs;

use App\Modules\Docs\Http\Controllers\Web\DocsController;
use Saola\Core\Providers\ModuleServiceProvider as CoreModuleServiceProvider;
use Saola\Core\System;

class ModuleServiceProvider extends CoreModuleServiceProvider
{
    public function register(): void
    {
        // Tài liệu là view tĩnh — không có service nào để bind.
    }

    public function routes(): void
    {
        System::context('web')->module('docs', ['prefix' => '/docs', 'priority' => 2])
            ->controller(DocsController::class)
            ->group(function ($module) {
                $module->get('/', 'index')->name('index');

                // Mỗi mục là một route tĩnh chứ không phải một route {slug}: router
                // phía client dựng bản đồ path → component từ danh sách này, route
                // tham số không có component cố định nên bị loại khỏi bản đồ đó
                // và trang sẽ chỉ chạy SSR, không hydrate được.
                foreach (DocsController::PAGES as $slug) {
                    $module->get('/' . $slug, 'page')->name($slug);
                }
            });
    }
}
