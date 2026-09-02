<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->alias([
            'admin' => \Saola\Core\Http\Middleware\AdminMiddleware::class,
            'next' => \Saola\Core\Http\Middleware\Next::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        // Custom exception handling cho API requests
        $exceptions->render(function (Throwable $e, $request) {
            if ($request->expectsJson() || $request->is('api/*')) {
                return \Saola\Core\Exceptions\ExceptionHandler::handleApiException($request, $e);
            }
        });
        
        // Log tất cả exceptions
        $exceptions->report(function (Throwable $e) {
            if (\Saola\Core\Exceptions\ExceptionHandler::shouldReport($e)) {
                \Illuminate\Support\Facades\Log::error('Exception reported', [
                    'exception' => get_class($e),
                    'message' => $e->getMessage(),
                    'file' => $e->getFile(),
                    'line' => $e->getLine(),
                ]);
            }
        });
    })->create();
