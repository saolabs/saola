@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "public")
    @section('meta:title', 'Sub-Module Context Resolution Test - Saola Lab')
    @section('meta:description', 'Kiểm tra phân giải view của module con lồng nhau (Sub-Module) trong context hệ thống Saola.')
    @section('meta:keywords', 'sub module test, nested context, saola sub view, route resolution')
    @block('content')
        <section @class([$__VIEW_ID__ . '-Bcontent1', 'ping'])>
            <h1 @class([$__VIEW_ID__ . '-Bcontent11'])>abc/sub/index — base mặc định <code @class([$__VIEW_ID__ . '-Bcontent111'])>web</code></h1>
            <p @class([$__VIEW_ID__ . '-Bcontent12'])>Route <code @class([$__VIEW_ID__ . '-Bcontent121'])>web.abc.sub.index</code> → <code @class([$__VIEW_ID__ . '-Bcontent122'])>web.modules.abc.sub.index</code></p>
        </section>
    @endblock
