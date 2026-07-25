@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@pageStart
@once('saola-css-1vuyy6c')
<link rel="stylesheet" href="/static/saola/demo-site.css">
@endonce
@wrapper
    <div @class([$__VIEW_ID__ . '-d69e6b1d', 'saola-demo-root'])>
        @startMarker('blockoutlet', 'd9c86768')
        @useBlock('shell')
        @endMarker('blockoutlet', 'd9c86768')
    </div>
@endWrapper
    @pageEnd
