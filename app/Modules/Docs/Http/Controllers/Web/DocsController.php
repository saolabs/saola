<?php

namespace App\Modules\Docs\Http\Controllers\Web;

use App\Http\Controllers\WebController;

/**
 * Một controller cho toàn bộ tài liệu: mỗi mục là một view tĩnh trong
 * resources/saola/web/views/modules/docs/, đăng ký thành route riêng để
 * router phía client có component cố định mà hydrate.
 */
class DocsController extends WebController
{
    protected $module = 'docs';

    public const PAGES = [
        'getting-started', 'architecture', 'contexts', 'compiler',
        'services', 'repository', 'mask', 'validator', 'response', 'core-kit',
        'sao-file', 'directives', 'reactivity', 'system-vars', 'helpers',
        'runtime', 'lifecycle', 'router', 'client-services',
        'build', 'status',
    ];

    public function index()
    {
        return $this->response([]);
    }

    /** Dùng chung cho mọi mục — view resolve theo route name (web.docs.{slug}). */
    public function page()
    {
        return $this->response([]);
    }
}
