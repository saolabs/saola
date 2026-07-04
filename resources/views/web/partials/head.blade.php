@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@wrapper
{{-- <head @class([$__VIEW_ID__ . '-d12fcd69'])> meta riêng cho context web. CSS/JS load qua _system/partials/assets
         (dev-aware) trong begin.blade — KHÔNG thêm <link @class([$__VIEW_ID__ . '-d9aed345']) @attr(['css' => true])>/<script @class([$__VIEW_ID__ . '-f6f607e6'])> cứng ở đây. --}}
    <meta @class([$__VIEW_ID__ . '-4ca14989']) @attr(['name' => 'saola-context', 'content' => 'web'])>
@endWrapper
