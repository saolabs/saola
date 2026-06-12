<?php

namespace App\Services;

use Saola\Core\Routing\ModuleService;

class ApiService extends ModuleService
{
    protected $context = 'api';
    protected $module = null;
}
