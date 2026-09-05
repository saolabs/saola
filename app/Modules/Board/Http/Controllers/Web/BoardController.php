<?php

namespace App\Modules\Board\Http\Controllers\Web;

use App\Http\Controllers\WebController;
use App\Modules\Board\Services\BoardStore;
use Illuminate\Http\Request;

class BoardController extends WebController
{
    protected $module = 'board';

    public function __construct(private readonly BoardStore $store) {}

    public function index()
    {
        return $this->response(['columns' => $this->store->board()]);
    }

    /**
     * Mọi mutation trả về TOÀN BỘ bảng, không phải delta.
     *
     * Bảng này nhỏ, và trả nguyên trạng thái sau cùng thì client không phải tự
     * suy ra thứ tự — chính chỗ suy ra ấy là nơi cập nhật lạc quan hay lệch với
     * server rồi trôi dần.
     */
    public function move(Request $request)
    {
        $data = $request->validate([
            'id' => 'required|integer',
            'column' => 'required|string',
            'index' => 'required|integer|min:0',
        ]);

        return $this->jsonSuccess(['columns' => $this->store->move($data['id'], $data['column'], $data['index'])]);
    }

    public function store(Request $request)
    {
        $data = $request->validate(['title' => 'required|string|max:120']);

        return $this->jsonSuccess(['columns' => $this->store->create(trim($data['title']))]);
    }

    public function rename(Request $request, $id)
    {
        $data = $request->validate(['title' => 'required|string|max:120']);

        return $this->jsonSuccess(['columns' => $this->store->rename((int) $id, trim($data['title']))]);
    }

    public function destroy($id)
    {
        return $this->jsonSuccess(['columns' => $this->store->destroy((int) $id)]);
    }
}
