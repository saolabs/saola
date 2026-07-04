{{--
    Dev-aware Saola asset loader — làm cho `npm run dev[:ctx]` (Vite HMR) VÀ
    `npm run build[:ctx]` (static) cùng hoạt động mà không cần @vite.

    - DEV (`public/hot` tồn tại): laravel-vite-plugin ghi URL dev server vào
      `public/hot`. Load @vite/client (HMR) + css + js entry từ dev server; Vite
      tự inject CSS qua JS. Sửa .sao/.css/.ts → HMR reload.
    - BUILD (không có hot): đọc manifest `public/static/saola/{ctx}/manifest.json`
      (key = src path), emit <link> CSS (head, tránh FOUC) + <script type=module> JS.

    type=module ⇒ defer: chạy sau khi DOM parse + sau inline APP_CONFIGS (body)
    nên hydrate (App.start→readSSRBoot) claim được server DOM. Đặt trong <head>.
    $__context__ = web|admin|mobile (khớp VITE_CONTEXT lúc build).
--}}
@php
    $__hotFile = public_path('hot');
    $__isViteDev = is_file($__hotFile);
@endphp
@if($__isViteDev)
    @php
        $__dev = rtrim(file_get_contents($__hotFile));
        // Build URL trong PHP để tránh Blade parse literal "@vite" như directive.
        $__viteClient = $__dev . '/@vite/client';
        $__cssDev = $__dev . '/resources/css/app.css';
        $__jsDev  = $__dev . '/resources/js/saola/app.js';
    @endphp
    <script type="module" src="{{ $__viteClient }}"></script>
    <script type="module" src="{{ $__cssDev }}"></script>
    <script type="module" src="{{ $__jsDev }}"></script>
@else
    @php
        $__manifestPath = public_path("static/saola/{$__context__}/manifest.json");
        $__manifest = is_file($__manifestPath)
            ? (json_decode(file_get_contents($__manifestPath), true) ?: [])
            : [];
        $__cssFile = $__manifest['resources/css/app.css']['file'] ?? null;
        $__jsFile  = $__manifest['resources/js/saola/app.js']['file'] ?? 'js/app.js';
    @endphp
    @if($__cssFile)
        <link rel="stylesheet" href="{{ asset("static/saola/{$__context__}/{$__cssFile}") }}">
    @endif
    <script type="module" src="{{ asset("static/saola/{$__context__}/{$__jsFile}") }}"></script>
@endif
