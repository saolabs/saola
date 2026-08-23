<?php

namespace App\Modules\Components\Http\Controllers\Web;

use App\Http\Controllers\WebController;

class ComponentsController extends WebController
{
    protected $module = 'components';

    public function index()
    {
        return $this->response([]);
    }
}
