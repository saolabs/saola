<?php

use Saola\Core\System;
use Saola\Core\Support\SPA;

SPA::active();
SPA::resetRoutes();
System::context('admin')?->pushLaravelRoute();
System::context('web')?->pushLaravelRoute();
SPA::inactive();
