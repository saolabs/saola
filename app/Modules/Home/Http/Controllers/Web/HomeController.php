<?php

namespace App\Modules\Home\Http\Controllers\Web;

use App\Http\Controllers\WebController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Saola\Core\Support\SPA;

class HomeController extends WebController
{
    protected $module = 'home';

    public function index()
    {
        return $this->response([]);
    }

    public function demo()
    {
        return $this->response([]);
    }


}
