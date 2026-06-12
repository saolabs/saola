<?php

use Illuminate\Support\Facades\Route;
use Saola\Core\Routing\System;
use Saola\Core\Support\SPA;

Route::middleware(['webview'])->group(function () {
    SPA::active();
    SPA::resetRoutes();
    System::context('admin')?->pushLaravelRoute();
    System::context('web')?->pushLaravelRoute();
    SPA::inactive();
});
