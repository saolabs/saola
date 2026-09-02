@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($count, 0)
@useState($name, 'Aurora')
{{-- __layout__ là biến của CẢ context nên nó trỏ themes.aurora.layouts.*
         khi theme đang bật. Vì vậy theme phải mang đủ chuỗi layout của mình —
         xem ghi chú "giới hạn" trong báo cáo. --}}
    @extends($__layout__ . "public")
    @block('content')
        <section @class([$__VIEW_ID__ . '-Bcontent1', 'ping'])>
            <h1 @class([$__VIEW_ID__ . '-Bcontent11'])>Ping — theme Aurora</h1>
            <p @class([$__VIEW_ID__ . '-Bcontent12'])>Xin chào, @startMarker('output', 'Bcontent12o1'){{ $name }}@endMarker('output', 'Bcontent12o1'). Trang này đến từ themes/aurora.</p>
            <button @class([$__VIEW_ID__ . '-Bcontent13'])>Ping (+1)</button>
            <span @class([$__VIEW_ID__ . '-Bcontent14'])>Count: @startMarker('output', 'Bcontent14o1'){{ $count }}@endMarker('output', 'Bcontent14o1')</span>
        </section>
    @endblock
