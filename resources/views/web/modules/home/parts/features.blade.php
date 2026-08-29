@exec($__ONE_COMPONENT_REGISTRY__ = ['mapcard' => 'web.modules.home.parts.mapcard']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@wrapper
<section @class([$__VIEW_ID__ . '-e1', 'home-map']) @attr(['id' => 'features'])>
        <div @class([$__VIEW_ID__ . '-e11', 'section-head'])>
            <p @class([$__VIEW_ID__ . '-e111', 'kicker'])><span @class([$__VIEW_ID__ . '-e1111'])>BỐN LỚP</span> Một luồng từ request tới DOM</p>
            <h2 @class([$__VIEW_ID__ . '-e112'])>Không chỉ là thư viện.<br @class([$__VIEW_ID__ . '-e1121'])>Là hệ sinh thái có hợp đồng rõ ràng.</h2>
            <p @class([$__VIEW_ID__ . '-e113'])>Mỗi lớp giải quyết một bài toán riêng và liên kết với lớp kế tiếp bằng một cấu trúc chặt chẽ (contract), chứ không dựa trên quy ước ngầm định.</p>
        </div>
        <div @class([$__VIEW_ID__ . '-e12', 'map-grid'])>
            @startMarker('component', 'e12c1')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['mapcard'].'_0'))
<p @class([$__VIEW_ID__ . '-e12c11'])>Mỗi thư mục trong <code @class([$__VIEW_ID__ . '-e12c111'])>app/Modules/</code> có <code @class([$__VIEW_ID__ . '-e12c112'])>ModuleServiceProvider</code> được tự động nhận diện. Việc thêm hoặc lồng ghép module mới hoàn toàn không yêu cầu sửa file cấu hình trung tâm nào.</p>
@exec($__env->stopSection())
@exec($__mapcard__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['mapcard'].'_0'))
@include('web.modules.home.parts.mapcard', ['eyebrow' => "APPLICATION / 01", 'title' => "Module tự khai báo, hệ thống tự tìm", 'href' => "/docs/contexts", 'link' => "Context &amp; module ↗", '__ONE_CHILDREN_CONTENT__' => $__mapcard__0_content])
@endMarker('component', 'e12c1')
            @startMarker('component', 'e12c2')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['mapcard'].'_1'))
<p @class([$__VIEW_ID__ . '-e12c21'])>Môi trường Web, Admin, API và Mobile sở hữu prefix, middleware, permission và bundle JavaScript hoàn toàn tách biệt. Trong khi đó, Model, Policy và Service layer vẫn dùng chung một lõi Laravel duy nhất.</p>
@exec($__env->stopSection())
@exec($__mapcard__1_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['mapcard'].'_1'))
@include('web.modules.home.parts.mapcard', ['eyebrow' => "APPLICATION / 02", 'title' => "Bốn mặt tiền, bốn bundle", 'href' => "/docs/contexts", 'link' => "Đăng ký context ↗", '__ONE_CHILDREN_CONTENT__' => $__mapcard__1_content])
@endMarker('component', 'e12c2')
            @startMarker('component', 'e12c3')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['mapcard'].'_2'))
<p @class([$__VIEW_ID__ . '-e12c31'])>Các thành phần route được resolve theo ngữ cảnh (context) của từng request. Thiết kế này đảm bảo các worker sống lâu như Laravel Octane không bao giờ bị rò rỉ state từ request trước sang request sau.</p>
@exec($__env->stopSection())
@exec($__mapcard__2_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['mapcard'].'_2'))
@include('web.modules.home.parts.mapcard', ['eyebrow' => "CORE / 03", 'title' => "Context gắn liền với request", 'href' => "/docs/architecture", 'link' => "Toàn cảnh kiến trúc ↗", '__ONE_CHILDREN_CONTENT__' => $__mapcard__2_content])
@endMarker('component', 'e12c3')
            @startMarker('component', 'e12c4')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['mapcard'].'_3'))
<p @class([$__VIEW_ID__ . '-e12c41'])>Chỉ từ một mã nguồn <code @class([$__VIEW_ID__ . '-e12c411'])>.sao</code>, trình biên dịch tự động sinh ra mã Blade cho Server và TypeScript cho Client. Cả hai phiên bản đều đồng nhất về cấu trúc và marker, giúp bạn không phải viết tay mã nào hai lần.</p>
@exec($__env->stopSection())
@exec($__mapcard__3_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['mapcard'].'_3'))
@include('web.modules.home.parts.mapcard', ['eyebrow' => "COMPILER / 04", 'title' => "Một cây AST, hai đầu ra", 'href' => "/docs/compiler", 'link' => "Compiler &amp; AST ↗", '__ONE_CHILDREN_CONTENT__' => $__mapcard__3_content])
@endMarker('component', 'e12c4')
            @startMarker('component', 'e12c5')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['mapcard'].'_4'))
<p @class([$__VIEW_ID__ . '-e12c51'])>Server trả về HTML đầy đủ nội dung ngay từ byte đầu tiên để tối ưu SEO. Sau đó, Runtime phía client sử dụng marker để nhận diện và tiếp quản đúng vùng DOM đó, chỉ cập nhật những phần thay đổi thay vì dựng lại toàn bộ cây.</p>
@exec($__env->stopSection())
@exec($__mapcard__4_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['mapcard'].'_4'))
@include('web.modules.home.parts.mapcard', ['eyebrow' => "CLIENT / 05", 'title' => "Nhận lại DOM, không dựng lại", 'href' => "/docs/lifecycle", 'link' => "Vòng đời &amp; marker ↗", '__ONE_CHILDREN_CONTENT__' => $__mapcard__4_content])
@endMarker('component', 'e12c5')
            @startMarker('component', 'e12c6')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['mapcard'].'_5'))
<p @class([$__VIEW_ID__ . '-e12c61'])>Với 43 directive kế thừa nguyên vẹn từ Blade, cấu trúc điều khiển luồng của bạn vẫn vô cùng quen thuộc. Bạn chỉ cần làm quen thêm với cách khai báo state và ranh giới giữa giá trị phản ứng (reactive) và giá trị tĩnh.</p>
@exec($__env->stopSection())
@exec($__mapcard__5_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['mapcard'].'_5'))
@include('web.modules.home.parts.mapcard', ['eyebrow' => "COMPILER / 06", 'title' => "Giữ nguyên hình dạng Blade", 'href' => "/docs/directives", 'link' => "Tham chiếu directive ↗", '__ONE_CHILDREN_CONTENT__' => $__mapcard__5_content])
@endMarker('component', 'e12c6')
        </div>
    </section>
@endWrapper
