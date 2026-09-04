<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('meta:title', 'Saola - Advanced SPA Framework')</title>
    <meta name="description" content="@yield('meta:description', 'Saola is an advanced SPA framework that seamlessly integrates Laravel backend with reactive frontend capabilities.')">
    <meta name="keywords" content="@yield('meta:keywords', 'Laravel, SPA, PHP, JavaScript, Framework, Reactive, Saola')">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="{{ $__env->yieldContent('favicon', asset('favicon.svg')) }}">
    @include($__partial__.'head')

    {{-- Saola assets (CSS + JS), dev-aware: Vite HMR khi `npm run dev`, static khi build --}}
    @include($__system__.'partials.assets')

    {{-- CSS do view khai báo (`<link rel=stylesheet>` trong .sao → `@addCssLink`).
         View con của `@extends` chạy TRƯỚC layout nên tới đây đã đăng ký xong;
         phần đăng ký muộn hơn (chính layout, block render sau <head>) được
         `_system.partials.scripts` in nốt ở cuối <body>. --}}
    {!! $__helper->renderHeadAssets('css') !!}

    @yield('styles')
</head>
<body>
    <!-- body top -->

    <!-- begin application content -->
    <div id="app-root" data-server-rendered="true">
