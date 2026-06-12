<?php

use Illuminate\Support\Facades\Route;
use Saola\Core\Routing\System;

Route::middleware(['api'])->group(function() {
    System::context('api')?->pushLaravelRoute();
});
