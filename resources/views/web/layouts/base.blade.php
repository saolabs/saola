@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@pageStart
@once('saola-css-1vuyy6c')
<link rel="stylesheet" href="/static/saola/demo-site.css">
@endonce
@wrapper
    <div @class([$__VIEW_ID__ . '-e1', 'saola-demo-root'])>
        @startMarker('blockoutlet', 'e1b')
        @useBlock('shell')
        @endMarker('blockoutlet', 'e1b')
    </div>
@endWrapper
    @pageEnd
