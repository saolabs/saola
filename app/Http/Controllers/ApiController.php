<?php

namespace App\Http\Controllers;

use Saola\Core\Http\Controllers\BaseApiController;

abstract class ApiController extends BaseApiController
{
    protected $context = 'api';
    protected $module = null;
}
