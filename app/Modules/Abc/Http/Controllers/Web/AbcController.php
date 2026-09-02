<?php

namespace App\Modules\Abc\Http\Controllers\Web;

use App\Http\Controllers\WebController;

class AbcController extends WebController
{
    protected $module = 'abc';

    /** route `web.abc.index` → `{base}.modules.abc.index` */
    public function index()
    {
        return $this->response([]);
    }

    /** route `web.abc.sub.index` → `{base}.modules.abc.sub.index` */
    public function sub()
    {
        return $this->response([]);
    }
}
