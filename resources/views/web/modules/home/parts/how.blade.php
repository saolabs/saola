@exec($__ONE_COMPONENT_REGISTRY__ = ['flowstep' => 'web.modules.home.parts.flowstep']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@wrapper
<section @class([$__VIEW_ID__ . '-bbcd3398', 'request-section']) @attr(['id' => 'how'])>
        <div @class([$__VIEW_ID__ . '-88b70a58', 'section-head'])>
            <p @class([$__VIEW_ID__ . '-e444cc57', 'kicker'])><span @class([$__VIEW_ID__ . '-3d2849a4'])>HOW IT WORKS</span> Ba bước, không phép màu</p>
            <h2 @class([$__VIEW_ID__ . '-ed9d4c8f'])>Từ một file tới một trang sống.</h2>
        </div>
        <ol @class([$__VIEW_ID__ . '-d9e57f79', 'flow-timeline', 'flow-timeline--grid'])>
            @startMarker('component', 'de60e7d9')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['flowstep'].'_0'))
<strong @class([$__VIEW_ID__ . '-b774fa17'])>Viết một view <code @class([$__VIEW_ID__ . '-e3fdcfca'])>.sao</code></strong>
                <p @class([$__VIEW_ID__ . '-df06a4c2'])>Khai báo state ở đầu file, viết template bằng cú pháp kiểu JavaScript, đặt method trong <code @class([$__VIEW_ID__ . '-5b74baa5'])>&lt;script setup&gt;</code>.</p>
@exec($__env->stopSection())
@exec($__flowstep__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['flowstep'].'_0'))
@include('web.modules.home.parts.flowstep', ['step' => "01", 'cmd' => "home.sao", '__ONE_CHILDREN_CONTENT__' => $__flowstep__0_content])
@endMarker('component', 'de60e7d9')
            @startMarker('component', '4a00ac1c')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['flowstep'].'_1'))
<strong @class([$__VIEW_ID__ . '-f6420130'])>Compiler sinh hai đầu ra</strong>
                <p @class([$__VIEW_ID__ . '-a3ba2907'])>Một lệnh tạo ra Blade template cho server và view TypeScript cho client, kèm registry ánh xạ view path tới factory.</p>
@exec($__env->stopSection())
@exec($__flowstep__1_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['flowstep'].'_1'))
@include('web.modules.home.parts.flowstep', ['step' => "02", 'cmd' => "sao-compile web", '__ONE_CHILDREN_CONTENT__' => $__flowstep__1_content])
@endMarker('component', '4a00ac1c')
            @startMarker('component', 'a1a98dac')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['flowstep'].'_2'))
<strong @class([$__VIEW_ID__ . '-8da23c0e'])>Trang render rồi sống lên</strong>
                <p @class([$__VIEW_ID__ . '-9a8eb630'])>Laravel trả HTML đầy đủ; runtime claim đúng DOM đó qua marker rồi tiếp quản state, event và điều hướng.</p>
@exec($__env->stopSection())
@exec($__flowstep__2_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['flowstep'].'_2'))
@include('web.modules.home.parts.flowstep', ['step' => "03", 'cmd' => "SSR → hydrate → SPA", '__ONE_CHILDREN_CONTENT__' => $__flowstep__2_content])
@endMarker('component', 'a1a98dac')
        </ol>
    </section>
@endWrapper
