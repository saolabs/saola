<?php

namespace App\Modules\Roster\Http\Controllers\Web;

use App\Http\Controllers\WebController;

class RosterController extends WebController
{
    protected $module = 'roster';

    public function index()
    {
        return $this->response([]);
    }
}
