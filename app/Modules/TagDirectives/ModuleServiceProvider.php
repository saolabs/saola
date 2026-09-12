<?php

namespace App\Modules\TagDirectives;

use App\Modules\TagDirectives\Http\Controllers\Web\TagDirectivesController;
use Saola\Core\Providers\ModuleServiceProvider as CoreModuleServiceProvider;
use Saola\Core\System;

/**
 * Tag directives — bàn thử cho `#if`/`#switch`/`#foreach` viết trên thẻ.
 *
 * Cùng một nội dung được dựng bằng CẢ HAI mặt chữ trên cùng một trang: cột
 * trái dùng directive khối (`@if`…`@endif`), cột phải dùng directive viết trên
 * thẻ (`#if="..."`). Compiler hạ cái sau về cái trước, nên hai cột PHẢI render
 * ra chữ giống hệt nhau — lệch là đỏ, không cần biết vì sao.
 *
 * Xem docs/SAO_ELEMENT_DIRECTIVES_RFC.md.
 */
class ModuleServiceProvider extends CoreModuleServiceProvider
{
    public function register(): void
    {
        // Thuần view, không cần service.
    }

    public function routes(): void
    {
        System::context('web')->module('tagdirectives', ['prefix' => '/demo/tag-directives', 'priority' => 5])
            ->controller(TagDirectivesController::class)
            ->group(function ($module) {
                $module->get('/', 'index')->name('index');
            });
    }
}
