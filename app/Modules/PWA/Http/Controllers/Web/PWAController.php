<?php

namespace App\Modules\PWA\Http\Controllers\Web;

use App\Modules\PWA\Services\PWAServiceInterface;
use App\Http\Controllers\WebController;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PWAController extends WebController
{
    protected $module = 'pwa';

    public function __construct(
        private PWAServiceInterface $pwaService
    ) {}

    public function manifest(Request $request)
    {
        $manifest = $this->pwaService->generateManifest();

        return response()
            ->json($manifest)
            ->header('Content-Type', 'application/manifest+json')
            ->header('Cache-Control', 'no-cache, no-store, must-revalidate')
            ->header('Pragma', 'no-cache')
            ->header('Expires', '0');
    }

    public function serviceWorker(Request $request): Response
    {
        $content = $this->pwaService->generateServiceWorker();

        return response($content)
            ->header('Content-Type', 'application/javascript')
            ->header('Cache-Control', 'no-cache, no-store, must-revalidate')
            ->header('Pragma', 'no-cache')
            ->header('Expires', '0');
    }

    public function sw(Request $request): Response
    {
        $content = $this->pwaService->generateSW();

        return response($content)
            ->header('Content-Type', 'application/javascript')
            ->header('Cache-Control', 'no-cache, no-store, must-revalidate')
            ->header('Pragma', 'no-cache')
            ->header('Expires', '0');
    }

    public function config(Request $request)
    {
        $config = $this->pwaService->getConfig();
        return view('pwa::config', compact('config'));
    }

    public function updateConfig(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'short_name' => 'required|string|max:50',
            'description' => 'required|string|max:500',
            'background_color' => 'required|string|regex:/^#[0-9A-F]{6}$/i',
            'theme_color' => 'required|string|regex:/^#[0-9A-F]{6}$/i',
            'cache_version' => 'required|string|max:10',
        ]);

        $updated = $this->pwaService->updateConfig($request->all());

        if ($updated) {
            return redirect()->back()->with('success', 'PWA configuration updated successfully!');
        }

        return redirect()->back()->with('error', 'Failed to update PWA configuration.');
    }
}
