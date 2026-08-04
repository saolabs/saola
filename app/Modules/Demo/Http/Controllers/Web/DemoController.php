<?php

namespace App\Modules\Demo\Http\Controllers\Web;

use App\Http\Controllers\WebController;

class DemoController extends WebController
{
    protected $module = 'demo';

    public function index()
    {
        return $this->response([]);
    }
}
