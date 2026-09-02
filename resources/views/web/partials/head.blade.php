@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@wrapper
{{-- <head> meta riêng cho context web. CSS/JS load qua _system/partials/assets
         (dev-aware) trong begin.blade — KHÔNG thêm <link css>/<script> cứng ở đây. --}}
    <meta @class([$__VIEW_ID__ . '-e1']) @attr(['name' => 'saola-context', 'content' => 'web'])>
@endWrapper
