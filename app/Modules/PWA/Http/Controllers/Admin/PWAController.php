<?php

namespace App\Modules\PWA\Http\Controllers\Admin;

use App\Http\Controllers\AdminController;
use App\Modules\PWA\Services\PWAServiceInterface;
use Illuminate\Http\Request;

class PWAController extends AdminController
{
    public function __construct(
        private PWAServiceInterface $pwaService
    ) {}

    public function index()
    {
        $config = $this->pwaService->getConfig();
        return view('pwa::admin.index', compact('config'));
    }

    public function edit()
    {
        $config = $this->pwaService->getConfig();
        return view('pwa::admin.edit', compact('config'));
    }

    public function update(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'short_name' => 'required|string|max:50',
            'description' => 'required|string|max:500',
            'start_url' => 'required|string|max:255',
            'display' => 'required|in:standalone,fullscreen,minimal-ui,browser',
            'background_color' => 'required|string|regex:/^#[0-9A-F]{6}$/i',
            'theme_color' => 'required|string|regex:/^#[0-9A-F]{6}$/i',
            'orientation' => 'required|in:portrait,landscape,any',
            'lang' => 'required|string|max:5',
            'cache_version' => 'required|string|max:10',
        ]);

        $updated = $this->pwaService->updateConfig($request->all());

        if ($updated) {
            return redirect()->route('admin.pwa.index')
                ->with('success', 'PWA configuration updated successfully!');
        }

        return redirect()->back()
            ->with('error', 'Failed to update PWA configuration.')
            ->withInput();
    }

    public function previewManifest()
    {
        $manifest = $this->pwaService->generateManifest();
        return response()->json($manifest, 200, [
            'Content-Type' => 'application/json',
            'Cache-Control' => 'no-cache'
        ]);
    }

    public function previewServiceWorker()
    {
        $content = $this->pwaService->generateServiceWorker();
        return response($content, 200, [
            'Content-Type' => 'text/plain',
            'Cache-Control' => 'no-cache'
        ]);
    }
}
