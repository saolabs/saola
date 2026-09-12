<?php

namespace App\Modules\Examples;

use App\Modules\Examples\Http\Controllers\Web\ExamplesController;
use Saola\Core\Providers\ModuleServiceProvider as CoreModuleServiceProvider;
use Saola\Core\System;

class ModuleServiceProvider extends CoreModuleServiceProvider
{
    public function register(): void
    {
    }

    public function routes(): void
    {
        System::context('web')->module('examples', ['prefix' => '/examples', 'priority' => 5])
            ->controller(ExamplesController::class)
            ->group(function ($module) {
                $module->get('/', 'index')->name('index');
                $module->get('/board', fn() => redirect('/demo/board'))->name('board');
                $module->get('/grid', fn() => redirect('/demo/grid'))->name('grid');
                $module->get('/item-editor', fn() => redirect('/demo/item-editor'))->name('item-editor');
                $module->get('/market', fn() => redirect('/demo/market'))->name('market');
                $module->get('/stream', fn() => redirect('/demo/stream'))->name('stream');
                $module->get('/roster', fn() => redirect('/roster'))->name('roster');
                $module->get('/todo', fn() => redirect('/todo-list'))->name('todo');
                $module->get('/todo-list', fn() => redirect('/todo-list'))->name('todo-list');
            });
    }
}
