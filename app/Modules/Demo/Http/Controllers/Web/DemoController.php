<?php

namespace App\Modules\Demo\Http\Controllers\Web;

use App\Http\Controllers\WebController;

class DemoController extends WebController
{
    protected $module = 'demo';

    /**
     * Các trang demo con. Giống DocsController::PAGES: mỗi slug là một route
     * TĨNH riêng, không phải một route tham số — router phía client cần bản đồ
     * path → component cố định mới hydrate được (xem /docs/response).
     */
    public const PAGES = ['foreach', 'lifecycle'];

    public function index()
    {
        return $this->response([]);
    }

    /** Dùng chung cho các trang demo không cần dữ liệu server. */
    public function page()
    {
        return $this->response([]);
    }

    /**
     * Trang `@await`: cùng method phục vụ cả hai đường.
     *
     *  - Trình duyệt tải thẳng URL  → Blade render với $data (SSR).
     *  - Runtime điều hướng SPA vào → `App.Http.get()` gọi lại CHÍNH URL này
     *    kèm header `X-Sao-Response: json`, `response()` trả $data dưới dạng JSON.
     *
     * `renderedBy` và `generatedAt` khác nhau giữa hai đường, nên nhìn vào trang
     * là biết dữ liệu đang tới từ đâu.
     *
     * stats là mảng OBJECT chứ không phải mảng kết hợp: template viết
     * `row.label`, compiler dịch sang `$row->label` phía Blade — mảng kết hợp
     * sẽ nổ khi SSR trong khi CSR vẫn chạy.
     */
    public function await()
    {
        return $this->response([
            'generatedAt' => now()->format('H:i:s.v'),
            'renderedBy' => $this->wantsJsonResponse(request()) ? 'CSR · fetch JSON' : 'SSR · Blade',
            'stats' => [
                (object) ['label' => 'View .sao trong saola/', 'value' => 64],
                (object) ['label' => 'Helper chạy được cả hai phía', 'value' => 51],
                (object) ['label' => 'Helper lệch giữa hai phía', 'value' => 41],
            ],
        ]);
    }
}
