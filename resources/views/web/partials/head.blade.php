@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@wrapper
{{-- <head @class([$__VIEW_ID__ . '-e1'])> meta riêng cho context web. CSS/JS load qua _system/partials/assets
         (dev-aware) trong begin.blade — KHÔNG thêm <link @class([$__VIEW_ID__ . '-e11']) @attr(['css' => true])>/<script @class([$__VIEW_ID__ . '-e12'])> cứng ở đây. --}}
    <meta @class([$__VIEW_ID__ . '-e121']) @attr(['name' => 'saola-context', 'content' => 'web'])>
@endWrapper
