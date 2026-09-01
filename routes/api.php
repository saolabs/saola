<?php

use Illuminate\Support\Facades\Route;
use Saola\Core\System;

Route::middleware(['api'])->group(function() {
    System::context('api')?->pushLaravelRoute();
});
