<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Saola\Core\Routing\System;

class ModuleServiceProvider extends ServiceProvider
{
    /**
     * Register contexts and discover module providers.
     */
    public function register(): void
    {
        // 1. Define contexts (configuration only)
        System::context('admin', [
            'as' => 'admin',
            'display_name' => 'Admin',
            'slug' => 'admin',
            'prefix' => 'admin',
            'middleware' => ['web', 'auth', 'permission:admin'],
            'permission' => ['admin'],
        ]);
        System::context('api', [
            'prefix' => 'api',
            'middleware' => ['api'],
            'as' => 'api',
        ]);


        System::context('web', [
            'as' => 'web',
            'display_name' => 'Web',
            'slug' => 'web',
            'middleware' => ['web'],
            'prefix' => '/',
        ]);

        // 2. Auto-discover and register module providers
        $this->registerModuleProviders();
    }

    public function boot(): void
    {
        // Register middleware aliases
        $router = $this->app['router'];
        $router->aliasMiddleware('admin.context', \App\Http\Middleware\AdminMiddleware::class);
        $router->aliasMiddleware('web.context', \App\Http\Middleware\WebMiddleware::class);
        $router->aliasMiddleware('api.context', \App\Http\Middleware\ApiMiddleware::class);
        // Routes are registered by each module's ModuleServiceProvider::routes()
        // via Saola\Core\Providers\ModuleServiceProvider::boot().
    }

    /**
     * Directories that are internal to a module and should not be
     * treated as sub-module containers.
     */
    protected const INTERNAL_DIRS = [
        'Http', 'Models', 'Repositories', 'Services', 'Masks',
        'Commands', 'Jobs', 'Events', 'Listeners', 'Notifications',
        'Policies', 'Rules', 'Observers', 'Resources', 'Requests',
        'Providers', 'Controllers', 'Middleware', 'Views',
    ];

    /**
     * Register module service providers under app/Modules/ recursively.
     */
    protected function registerModuleProviders(): void
    {
        $modulesPath = app_path('Modules');

        if (!is_dir($modulesPath)) {
            return;
        }

        $this->registerModuleProvidersInPath($modulesPath, 'App\\Modules');
    }

    /**
     * Recursively register module providers within a given path.
     *
     * @param string $path      Filesystem path to scan
     * @param string $namespace PHP namespace prefix for this level
     */
    protected function registerModuleProvidersInPath(string $path, string $namespace): void
    {
        foreach (glob($path . '/*', GLOB_ONLYDIR) as $moduleDir) {
            $moduleName = basename($moduleDir);

            // Skip known internal directories
            if ($this->isInternalDirectory($moduleName)) {
                continue;
            }

            $moduleNamespace = $namespace . '\\' . $moduleName;

            // Register the module entry provider if present.
            $providerClass = $moduleNamespace . '\\ModuleServiceProvider';
            if (class_exists($providerClass)) {
                $this->app->register($providerClass);
            }

            // Recurse into sub-modules
            $this->registerModuleProvidersInPath($moduleDir, $moduleNamespace);
        }
    }

    protected function isInternalDirectory(string $directoryName): bool
    {
        return in_array($directoryName, static::INTERNAL_DIRS, true);
    }
}
