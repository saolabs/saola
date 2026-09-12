<?php

namespace App\Modules\TagDirectives\Http\Controllers\Web;

use App\Http\Controllers\WebController;

class TagDirectivesController extends WebController
{
    protected $module = 'tagdirectives';

    public function index()
    {
        return $this->response();
    }
}
