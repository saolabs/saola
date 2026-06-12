<?php

namespace App\Http\Controllers;

use Saola\Core\Http\Controllers\BaseWebController;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Illuminate\Http\JsonResponse;

abstract class WebController extends BaseWebController
{
    protected $context = 'web';
    protected $module = null;

    public function responseModule(array $data = [], ?string $bladePath = null, array $options = []): View|JsonResponse
    {
        return $this->response($data, $bladePath ? '@module.' . $bladePath : null, $options);
    }

    public function viewIndexPage(Request $request): View|JsonResponse
    {
        if (!$this->service) {
            throw new \RuntimeException('Service not initialized');
        }
        return $this->responseModule([
            'results' => $this->service->getResults($request) ?? []
        ], 'index');
    }

    public function viewListPage(Request $request): View|JsonResponse
    {
        if (!$this->service) {
            throw new \RuntimeException('Service not initialized');
        }
        return $this->responseModule([
            'results' => $this->service->getResults($request) ?? []
        ], 'list');
    }

    public function viewDetailPage(Request $request, $id = null): View|JsonResponse
    {
        if (!$this->service) {
            throw new \RuntimeException('Service not initialized');
        }
        if ($id && ($detail = $this->service->detail($id))) {
            return $this->responseModule(['detail' => $detail], 'detail');
        }
        return $this->response([], '@base.modules.errors.404', ['status' => 404]);
    }
}
