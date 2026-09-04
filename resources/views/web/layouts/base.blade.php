@addCssLink('/static/saola/demo-site.css')
@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@pageStart
@wrapper
    <div @class([$__VIEW_ID__ . '-e1', 'saola-demo-root'])>
        @startMarker('blockoutlet', 'e1b1')
        @useBlock('shell')
        @endMarker('blockoutlet', 'e1b1')
    </div>
@endWrapper
    @pageEnd
