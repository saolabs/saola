@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($n, 0)
@extends($__layout__ . "public")
    @block('content')
        <section @class([$__VIEW_ID__ . '-Bcontent1', 'ping'])>
            <h1 @class([$__VIEW_ID__ . '-Bcontent11'])>abc/index — theme <code @class([$__VIEW_ID__ . '-Bcontent111'])>demo</code></h1>
            <p @class([$__VIEW_ID__ . '-Bcontent12'])>Route <code @class([$__VIEW_ID__ . '-Bcontent121'])>web.abc.index</code> → <code @class([$__VIEW_ID__ . '-Bcontent122'])>themes.demo.modules.abc.index</code></p>
            <button @class([$__VIEW_ID__ . '-Bcontent13'])>n = @startMarker('output', 'Bcontent13o1'){{ $n }}@endMarker('output', 'Bcontent13o1')</button>
        </section>
    @endblock
