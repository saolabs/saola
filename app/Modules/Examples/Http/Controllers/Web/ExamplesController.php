<?php

namespace App\Modules\Examples\Http\Controllers\Web;

use App\Http\Controllers\WebController;

class ExamplesController extends WebController
{
    protected $module = 'examples';

    public function index()
    {
        return $this->response([]);
    }
}
