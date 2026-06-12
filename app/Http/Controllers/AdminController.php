<?php

namespace App\Http\Controllers;

use Saola\Core\Http\Controllers\BaseWebController;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

abstract class AdminController extends BaseWebController
{
    protected $context = 'admin';

    public function viewIndexPage(Request $request): View|JsonResponse
    {
        if (!$this->service) {
            throw new \RuntimeException('Service not initialized');
        }
        return $this->response([
            'results' => $this->service->getResults($request) ?? []
        ], '@module.index');
    }

    public function viewListPage(Request $request): View|JsonResponse
    {
        if (!$this->service) {
            throw new \RuntimeException('Service not initialized');
        }
        return $this->response([
            'results' => $this->service->getResults($request) ?? []
        ], '@module.list');
    }

    public function viewTrashPage(Request $request): View|JsonResponse
    {
        if (!$this->service) {
            throw new \RuntimeException('Service not initialized');
        }
        return $this->response([
            'results' => $this->service->getResults($request, ['@trashed' => true]) ?? []
        ], '@module.trash');
    }

    public function viewDetailPage(Request $request, $id = null): View|JsonResponse
    {
        if (!$this->service) {
            throw new \RuntimeException('Service not initialized');
        }
        if ($id && ($detail = $this->service->detail($id))) {
            return $this->response(['detail' => $detail], '@module.detail');
        }
        return $this->response([], '@base.errors.404', ['status' => 404]);
    }

    public function viewCreatePage(Request $request): View|JsonResponse
    {
        return $this->response([], '@base.form.create');
    }

    public function viewEditPage(Request $request, $id = null): View|JsonResponse
    {
        if (!$this->service) {
            throw new \RuntimeException('Service not initialized');
        }
        if ($id && ($data = $this->service->getFormData(['id' => $id]))) {
            return $this->response(['data' => $data], '@base.form.edit');
        }
        return $this->response([], '@base.errors.404', ['status' => 404]);
    }

    public function create(Request $request): View|JsonResponse
    {
        if (!$this->service) {
            throw new \RuntimeException('Service not initialized');
        }

        try {
            $validator = $this->service->validator($request);
            if (!$validator || !$validator->success()) {
                return $this->jsonError(
                    text($this->moduleKey('create.validation-failed'), 'Dữ liệu không hợp lệ'),
                    $validator ? $validator->getErrorObject() : [],
                    null,
                    422
                );
            }

            $data = $this->service->create($validator->input());
            if (!$data) {
                return $this->jsonError(
                    text($this->moduleKey('create.failed'), 'Tạo dữ liệu thất bại'),
                    [],
                    null,
                    500
                );
            }

            return $this->response(['data' => $data], '@base.form.create', ['status' => 201]);
        } catch (\Exception $e) {
            Log::error('Create failed', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            return $this->jsonError(
                text($this->moduleKey('create.error'), 'Có lỗi xảy ra khi tạo dữ liệu'),
                [],
                null,
                500
            );
        }
    }

    public function __call($method, $parameters)
    {
        $viewMethod = 'view' . ucfirst($method) . 'Page';

        if (method_exists($this->service, $viewMethod)) {
            $request = $parameters[0] ?? request();
            $id = $parameters[1] ?? ($parameters[0] ?? null);

            if ($request instanceof Request) {
                return $this->service->{$viewMethod}($request, $id);
            }

            return $this->service->{$viewMethod}(request(), $id);
        }

        throw new \BadMethodCallException("Method [{$method}] does not exist on " . static::class);
    }
}
