<?php

namespace App\Modules\Home\Http\Controllers\Api;

use App\Http\Controllers\ApiController;

class HomeController extends ApiController
{
    protected $module = 'home';

    public function index()
    {
        return response()->json(['message' => 'Hello World']);
    }
}
