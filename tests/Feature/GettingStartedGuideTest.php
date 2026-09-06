<?php

use Illuminate\Support\Facades\Blade;
use Saola\Compiler\CompileOptions;
use Saola\Compiler\SaolaCompiler;

test('the getting started guide initializes props state and computed through Laravel', function (int $initial) {
    $guide = file_get_contents(base_path('docs/SAO_FILE.md'));
    expect(preg_match('/```sao\R([\s\S]*?)```/', $guide, $match))->toBe(1);
    $result = (new SaolaCompiler())->compile($match[1], new CompileOptions(viewPath: 'test.guide'));
    $prefix = explode('@wrapper', $result->blade)[0];
    $code = Blade::compileString($prefix.'{{ $count }}:{{ $doubled }}');
    $__helper = new class {
        public function setState(...$args): void {}
    };
    $__VIEW_PATH__ = 'test.guide';
    $__VIEW_ID__ = 'guide';
    ob_start();
    try {
        eval('?>'.$code);
        $output = trim(ob_get_contents());
    } finally {
        ob_end_clean();
    }
    expect($output)->toBe($initial.':'.($initial * 2));
})->with([0, 3]);
