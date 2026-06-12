<?php

namespace App\Modules\PWA\Services;

interface PWAServiceInterface
{
    public function generateManifest(): array;
    public function generateServiceWorker(): string;
    public function generateSW(): string;
    public function getConfig(): array;
    public function updateConfig(array $config): bool;
}
