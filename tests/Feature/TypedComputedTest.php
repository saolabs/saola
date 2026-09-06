<?php

use Illuminate\Support\Facades\Blade;
use Saola\Compiler\CompileOptions;
use Saola\Compiler\SaolaCompiler;

test('typed computed declarations execute through Laravel and preserve zero props', function (int $price) {
    $source = <<<'SAO'
@props({price: 5}: {price: number})
@computed(doubled: number = total * 2)
@state(qty: number = 2)
@computed(total: number = price * qty)
@states({users: [{active: true, roles: ['admin']}, {active: false, roles: []}]}: {users: Array<{active: boolean; roles: string[]}>})
@computed(activeCount = users.filter(u => u.active).length)
@computed(totalRoles = users.reduce((n, u) => n + u.roles.length, 0))
<template>{{ doubled }}</template>
SAO;
    $result = (new SaolaCompiler())->compile($source, new CompileOptions(viewPath: 'test.typed'));
    // Execute the actual declaration preamble via Laravel + Saola directives.
    // Markup/hydration is covered by compile-to-mount client tests.
    $prefix = explode('@wrapper', $result->blade)[0];
    $code = Blade::compileString($prefix.'{{ $doubled }}');
    $__helper = new class {
        public function setState(...$args): void {}
    };
    $__VIEW_PATH__ = 'test.typed';
    $__VIEW_ID__ = 'test';
    ob_start();
    try {
        eval('?>'.$code);
        $output = trim(ob_get_contents());
    } finally {
        ob_end_clean();
    }
    expect($output)->toBe((string) ($price * 4));
    expect($activeCount)->toBe(1);
    expect($totalRoles)->toBe(1);
})->with([7, 0]);
