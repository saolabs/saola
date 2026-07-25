<?php

namespace App\Modules\Home\Http\Controllers\Web;

use App\Http\Controllers\WebController;
class HomeController extends WebController
{
    protected $module = 'home';

    public function index()
    {
        return $this->response([]);
    }

    public function about()
    {
        return $this->response([]);
    }

    public function privacy()
    {
        return $this->response([]);
    }

    public function terms()
    {
        return $this->response([]);
    }

    public function contact()
    {
        return $this->response([]);
    }

    public function todo()
    {
        return $this->response([]);
    }

}
