<?php

namespace App\Services;

use Saola\Core\Routing\ModuleService;

class AdminModuleService extends ModuleService
{
    protected $context = 'admin';
    protected $module = null;
}
