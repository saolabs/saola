<?php

namespace App\Modules\PWA\Services;

use Illuminate\Support\Facades\Cache;

class PWAService implements PWAServiceInterface
{
    protected array $defaultConfig;

    public function __construct()
    {
        $this->defaultConfig = [
            'name' => 'LeanEZ Chat Widget',
            'short_name' => 'LeanEZ Chat',
            'description' => 'AI Chat Widget for customer support with real-time messaging',
            'start_url' => '/',
            'display' => 'standalone',
            'background_color' => '#667eea',
            'theme_color' => '#667eea',
            'scope' => '/',
            'orientation' => 'portrait',
            'categories' => ['business', 'productivity', 'communication'],
            'lang' => 'vi',
            'dir' => 'ltr',
            'prefer_related_applications' => false,
            'cache_version' => 'v2',
            'static_cache' => 'static-v2',
            'dynamic_cache' => 'dynamic-v2'
        ];
    }

    public function generateManifest(): array
    {
        $config = $this->getConfig();

        return [
            'name' => $config['name'],
            'short_name' => $config['short_name'],
            'description' => $config['description'],
            'start_url' => $config['start_url'],
            'display' => $config['display'],
            'background_color' => $config['background_color'],
            'theme_color' => $config['theme_color'],
            'scope' => $config['scope'],
            'orientation' => $config['orientation'],
            'categories' => $config['categories'],
            'lang' => $config['lang'],
            'dir' => $config['dir'],
            'prefer_related_applications' => $config['prefer_related_applications'],
            'icons' => $this->generateIcons(),
            'screenshots' => $this->generateScreenshots(),
            'shortcuts' => $this->generateShortcuts(),
        ];
    }

    public function generateServiceWorker(): string
    {
        $config = $this->getConfig();

        return <<<JS
const CACHE_NAME = 'leanez-chat-{$config['cache_version']}';
const STATIC_CACHE = '{$config['static_cache']}';
const DYNAMIC_CACHE = '{$config['dynamic_cache']}';

const urlsToCache = [
  '/',
  '/chat/',
  '/assets/avatar.png',
  '/manifest.json',
  '/static/js/main.js',
  '/static/css/main.css',
  '/favicon.ico'
];

const STATIC_ASSETS = [
  '/assets/avatar.png',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then(cache => cache.addAll(STATIC_ASSETS)),
      caches.open(DYNAMIC_CACHE).then(cache => cache.addAll(urlsToCache))
    ]).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET') return;

  if (STATIC_ASSETS.some(asset => url.pathname.includes(asset))) {
    event.respondWith(
      caches.match(request).then(response => {
        return response || fetch(request).then(fetchResponse => {
          return caches.open(STATIC_CACHE).then(cache => {
            cache.put(request, fetchResponse.clone());
            return fetchResponse;
          });
        });
      })
    );
    return;
  }

  event.respondWith(
    fetch(request)
      .then(response => {
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE).then(cache => {
            cache.put(request, responseClone);
          });
        }
        return response;
      })
      .catch(() => caches.match(request))
  );
});

self.addEventListener('sync', (event) => {
  console.log('Background sync:', event.tag);
});

self.addEventListener('push', (event) => {
  const options = {
    body: 'Bạn có tin nhắn mới!',
    icon: '/assets/avatar.png',
    badge: '/assets/avatar.png',
    vibrate: [100, 50, 100],
    data: { dateOfArrival: Date.now(), primaryKey: 1 }
  };

  event.waitUntil(
    self.registration.showNotification('{$config['name']}', options)
  );
});
JS;
    }

    public function generateSW(): string
    {
        return <<<JS
self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
JS;
    }

    public function getConfig(): array
    {
        return Cache::remember('pwa_config', 3600, function () {
            return array_merge($this->defaultConfig, config('pwa', []));
        });
    }

    public function updateConfig(array $config): bool
    {
        $mergedConfig = array_merge($this->getConfig(), $config);
        Cache::forget('pwa_config');
        Cache::put('pwa_config', $mergedConfig, 3600);
        return true;
    }

    protected function generateIcons(): array
    {
        $sizes = [72, 96, 128, 144, 152, 192, 384, 512];
        $icons = [];

        foreach ($sizes as $size) {
            $icons[] = [
                'src' => "/assets/avatar.png",
                'sizes' => "{$size}x{$size}",
                'type' => 'image/png',
                'purpose' => 'any maskable'
            ];
        }

        return $icons;
    }

    protected function generateScreenshots(): array
    {
        return [
            [
                'src' => '/assets/avatar.png',
                'sizes' => '1280x720',
                'type' => 'image/png',
                'form_factor' => 'wide',
                'label' => 'Chat Widget Interface'
            ],
            [
                'src' => '/assets/avatar.png',
                'sizes' => '750x1334',
                'type' => 'image/png',
                'form_factor' => 'narrow',
                'label' => 'Mobile Chat Interface'
            ]
        ];
    }

    protected function generateShortcuts(): array
    {
        return [
            [
                'name' => 'Open Chat',
                'short_name' => 'Chat',
                'description' => 'Open the chat widget',
                'url' => '/chat',
                'icons' => [['src' => '/assets/avatar.png', 'sizes' => '96x96']]
            ],
            [
                'name' => 'Home',
                'short_name' => 'Home',
                'description' => 'Go to homepage',
                'url' => '/',
                'icons' => [['src' => '/assets/avatar.png', 'sizes' => '96x96']]
            ]
        ];
    }
}
