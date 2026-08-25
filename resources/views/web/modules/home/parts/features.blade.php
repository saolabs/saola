@exec($__ONE_COMPONENT_REGISTRY__ = ['mapcard' => 'web.modules.home.parts.mapcard']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@wrapper
<section @class([$__VIEW_ID__ . '-bbcd3398', 'home-map']) @attr(['id' => 'features'])>
        <div @class([$__VIEW_ID__ . '-88b70a58', 'section-head'])>
            <p @class([$__VIEW_ID__ . '-e444cc57', 'kicker'])><span @class([$__VIEW_ID__ . '-3d2849a4'])>TÍNH NĂNG CỐT LÕI</span> Đơn giản hóa mọi thứ</p>
            <h2 @class([$__VIEW_ID__ . '-ed9d4c8f'])>Những gì bạn nhận được.</h2>
            <p @class([$__VIEW_ID__ . '-ecdef5b6'])>Một hệ sinh thái trọn vẹn giúp bạn tập trung vào logic sản phẩm thay vì chắp vá các công cụ lại với nhau.</p>
        </div>
        <div @class([$__VIEW_ID__ . '-b545b1d4', 'map-grid'])>
            @startMarker('component', 'c26ee094')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['mapcard'].'_0'))
<p @class([$__VIEW_ID__ . '-4d8330ac'])>Server trả về HTML hoàn chỉnh ngay lần tải đầu. Trải nghiệm tức thì cho người dùng và crawler, không có khoảng trắng khó chịu.</p>
@exec($__env->stopSection())
@exec($__mapcard__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['mapcard'].'_0'))
@include('web.modules.home.parts.mapcard', ['eyebrow' => "01 / TỐI ƯU SEO", 'title' => "SSR được cấu hình sẵn", 'href' => "/docs/lifecycle", 'link' => "Cơ chế hydration ↗", '__ONE_CHILDREN_CONTENT__' => $__mapcard__0_content])
@endMarker('component', 'c26ee094')
            @startMarker('component', 'bdd4cecc')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['mapcard'].'_1'))
<p @class([$__VIEW_ID__ . '-37aeefe2'])>Template, state, script và style hội tụ ở định dạng <code @class([$__VIEW_ID__ . '-07ae010a'])>.sao</code>. Quên việc nhảy qua lại giữa file Blade và component Vue/React.</p>
@exec($__env->stopSection())
@exec($__mapcard__1_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['mapcard'].'_1'))
@include('web.modules.home.parts.mapcard', ['eyebrow' => "02 / SINGLE FILE", 'title' => "Mọi thứ trong một file", 'href' => "/docs/sao-file", 'link' => "Xem cấu trúc .sao ↗", '__ONE_CHILDREN_CONTENT__' => $__mapcard__1_content])
@endMarker('component', 'bdd4cecc')
            @startMarker('component', '614a6be9')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['mapcard'].'_2'))
<p @class([$__VIEW_ID__ . '-397bf660'])>Saola cập nhật chính xác từng vùng DOM thay đổi thay vì so sánh toàn bộ cây. Hiệu năng vượt trội và tiết kiệm bộ nhớ.</p>
@exec($__env->stopSection())
@exec($__mapcard__2_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['mapcard'].'_2'))
@include('web.modules.home.parts.mapcard', ['eyebrow' => "03 / REACTIVE TỰ NHIÊN", 'title' => "Không Virtual DOM", 'href' => "/docs/reactivity", 'link' => "State & reactivity ↗", '__ONE_CHILDREN_CONTENT__' => $__mapcard__2_content])
@endMarker('component', '614a6be9')
            @startMarker('component', '68c75538')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['mapcard'].'_3'))
<p @class([$__VIEW_ID__ . '-e84d46d3'])>Giữ nguyên routing, controllers, middleware, auth, và state ở backend vững chãi của bạn — đúng nơi mà chúng thuộc về.</p>
@exec($__env->stopSection())
@exec($__mapcard__3_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['mapcard'].'_3'))
@include('web.modules.home.parts.mapcard', ['eyebrow' => "04 / ROUTING TỪ SERVER", 'title' => "Server-based routing", 'href' => "/docs/contexts", 'link' => "Context & module ↗", '__ONE_CHILDREN_CONTENT__' => $__mapcard__3_content])
@endMarker('component', '68c75538')
            @startMarker('component', 'd974c070')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['mapcard'].'_4'))
<p @class([$__VIEW_ID__ . '-937daedd'])>Saola là một lớp view làm cầu nối (adapter) giữa Laravel và trình duyệt. Đội ngũ của bạn không cần phải học một framework đồ sộ khác.</p>
@exec($__env->stopSection())
@exec($__mapcard__4_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['mapcard'].'_4'))
@include('web.modules.home.parts.mapcard', ['eyebrow' => "05 / KHÔNG PHẢI FRAMEWORK MỚI", 'title' => "Không đập đi xây lại", 'href' => "/docs/runtime", 'link' => "Vòng đời view ↗", '__ONE_CHILDREN_CONTENT__' => $__mapcard__4_content])
@endMarker('component', 'd974c070')
            @startMarker('component', '9a0d0d0a')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['mapcard'].'_5'))
<p @class([$__VIEW_ID__ . '-f1d41f42'])>Sử dụng ngay 43 directive mạnh mẽ. Cú pháp thân thiện, quen thuộc, giúp đội ngũ Laravel bắt nhịp chỉ trong một giờ.</p>
@exec($__env->stopSection())
@exec($__mapcard__5_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['mapcard'].'_5'))
@include('web.modules.home.parts.mapcard', ['eyebrow' => "06 / DIRECTIVE QUEN THUỘC", 'title' => "Kế thừa phong cách Blade", 'href' => "/docs/directives", 'link' => "Tham chiếu directive ↗", '__ONE_CHILDREN_CONTENT__' => $__mapcard__5_content])
@endMarker('component', '9a0d0d0a')
        </div>
    </section>
@endWrapper
