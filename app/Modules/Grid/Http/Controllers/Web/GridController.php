<?php

namespace App\Modules\Grid\Http\Controllers\Web;

use App\Http\Controllers\WebController;
use App\Modules\Grid\Services\PackageTable;
use Illuminate\Http\Request;

class GridController extends WebController
{
    protected $module = 'grid';

    public function __construct(private readonly PackageTable $table) {}

    /**
     * Một method cho cả hai đường: trình duyệt tải thẳng thì Blade render trang
     * đầu, runtime gọi lại chính URL này kèm query mới và nhận JSON.
     *
     * Tham số đi qua query string chứ KHÔNG qua route tham số: router phía
     * client cần bản đồ path → component cố định mới hydrate được.
     */
    public function index(Request $request)
    {
        $result = $this->table->query(
            trim((string) $request->query('q', '')),
            (string) $request->query('status', ''),
            (string) $request->query('sort', 'downloads'),
            (string) $request->query('dir', 'desc'),
            max(1, (int) $request->query('page', 1)),
        );

        return $this->response($result + [
            'search' => trim((string) $request->query('q', '')),
            'status' => (string) $request->query('status', ''),
            'sort' => (string) $request->query('sort', 'downloads'),
            'dir' => (string) $request->query('dir', 'desc'),
            'statuses' => array_map(
                static fn (string $key, string $label): array => ['key' => $key, 'label' => $label],
                array_keys(PackageTable::STATUSES),
                PackageTable::STATUSES,
            ),
        ]);
    }
}
