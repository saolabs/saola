<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Compiler Configuration
    |--------------------------------------------------------------------------
    |
    | Multi-context compiler configuration for Saola framework.
    | Each context can have its own view directories, output paths, and settings.
    |
    */
    'compiler' => [
        // Web context (default)
        'web' => [
            'views' => [
                resource_path('views/web'),
                resource_path('views/_system'),
            ],
            'output' => resource_path('js/saola/web/views'),
            'target' => 'typescript',
            'cache' => storage_path('framework/views/compiled/web'),
            'minify' => env('APP_ENV') === 'production',
            'sourcemap' => env('APP_DEBUG', false),
            'preserve_comments' => false,
            'strict_mode' => true,
        ],
        
        // Admin context
        'admin' => [
            'views' => [
                resource_path('views/admin'),
                resource_path('views/_system')
            ],
            'output' => resource_path('js/saola/admin/views'),
            'target' => 'typescript',
            'cache' => storage_path('framework/views/compiled/admin'),
            'minify' => env('APP_ENV') === 'production',
            'sourcemap' => env('APP_DEBUG', false),
            'preserve_comments' => false,
            'strict_mode' => true,
        ]
    ],
    
    /*
    |--------------------------------------------------------------------------
    | Global Compiler Options
    |--------------------------------------------------------------------------
    */
    'options' => [
        // Performance
        'parallel' => true,
        'cache_enabled' => true,
        'cache_ttl' => 3600, // seconds
        
        // Code generation
        'indent' => '    ', // 4 spaces
        'line_ending' => PHP_EOL,
        'quote_style' => 'single', // 'single' or 'double'
        
        // Optimization
        'tree_shaking' => true,
        'dead_code_elimination' => true,
        'constant_folding' => true,
        
        // Features
        'reactive_system' => 'proxy', // 'proxy' or 'observer'
        'virtual_dom' => true,
        'ssr_support' => true,
        'hydration' => true,
        
        // Directives
        'custom_directives' => [
            // Register custom directives here
            // 'myDirective' => \App\Compilers\Directives\MyDirective::class,
        ],
    ],
    
    /*
    |--------------------------------------------------------------------------
    | File Extensions
    |--------------------------------------------------------------------------
    */
    'extensions' => [
        'blade' => '.blade.php',
        'typescript' => '.ts',
        'javascript' => '.js',
    ],
    
    /*
    |--------------------------------------------------------------------------
    | Error Handling
    |--------------------------------------------------------------------------
    */
    'errors' => [
        'throw_on_error' => env('APP_DEBUG', false),
        'log_errors' => true,
        'log_channel' => 'daily',
    ],
    
    /*
    |--------------------------------------------------------------------------
    | Watch Mode (Development)
    |--------------------------------------------------------------------------
    */
    'watch' => [
        'enabled' => env('APP_DEBUG', false),
        'poll_interval' => 1000, // milliseconds
        'ignored' => [
            'vendor',
            'node_modules',
            'storage',
            'public',
        ],
    ],

    'hydration' => [
        'enabled' => true,
        'mode' => 'automatic', // 'automatic' or 'manual'
        'selector' => '[data-hydrate]', // CSS selector for hydration targets
        'attrKeys' => [
            'hydrate' => 'data-hydrate',
            'id' => 'data-sao-id',
            'props' => 'data-sao-props',
            'events' => 'data-sao-events',
            'ssr' => 'data-sao-ssr',
        ]
    ],
];
