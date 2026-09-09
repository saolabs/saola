<?php

namespace App\Modules\Emit\Http\Controllers\Web;

use App\Http\Controllers\WebController;

class EmitController extends WebController
{
    protected $module = 'emit';

    public function index()
    {
        return $this->response(['rows' => [
            ['id' => 1, 'title' => 'Hàng một'],
            ['id' => 2, 'title' => 'Hàng hai'],
            ['id' => 3, 'title' => 'Hàng ba (cha từ chối đóng)'],
        ]]);
    }
}
