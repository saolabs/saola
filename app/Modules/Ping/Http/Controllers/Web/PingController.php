<?php

namespace App\Modules\Ping\Http\Controllers\Web;

use App\Http\Controllers\WebController;

/**
 * Ping Web Controller — module test cho context web (Saola SPA hydration).
 *
 * index() trả $this->response([]) (giống HomeController): không truyền bladePath,
 * nên ResponseMethods::response() tự resolve route 'web.ping.index'
 * → view 'web.modules.ping.index' (blade do sao-compile sinh ra).
 */
class PingController extends WebController
{
    protected $module = 'ping';

    public function index()
    {
        return $this->response([]);
    }
}
