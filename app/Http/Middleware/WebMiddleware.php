<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class WebMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        $response->headers->set('X-Context', 'web');

        return $response;
    }
}
