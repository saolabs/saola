@exec($__ONE_COMPONENT_REGISTRY__ = ['ovcard' => 'web.modules.home.parts.ovcard']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@wrapper
<section @class([$__VIEW_ID__ . '-bbcd3398', 'home-section']) @attr(['id' => 'usecase'])>
        <div @class([$__VIEW_ID__ . '-88b70a58', 'section-head', 'section-head-split'])>
            <div @class([$__VIEW_ID__ . '-4f95a176'])>
                <p @class([$__VIEW_ID__ . '-dd8c47b3', 'kicker'])><span @class([$__VIEW_ID__ . '-d0f3467d'])>DÀNH CHO AI</span> Hợp và chưa hợp</p>
                <h2 @class([$__VIEW_ID__ . '-3f75a3fd'])>Saola hợp nhất<br @class([$__VIEW_ID__ . '-d78bb666'])>với bốn tình huống này.</h2>
            </div>
            <p @class([$__VIEW_ID__ . '-a485d755'])>Nếu đội bạn đã đứng vững trên Laravel và đang cân nhắc thêm một frontend riêng, đây đúng là chỗ Saola tiết kiệm nhiều nhất.</p>
        </div>
        <div @class([$__VIEW_ID__ . '-b545b1d4', 'ov-grid'])>
            @startMarker('component', 'c26ee094')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['ovcard'].'_0'))
<p @class([$__VIEW_ID__ . '-4d8330ac'])>Bảng dữ liệu, form nhiều bước, phân quyền theo vai trò. Cần tương tác mượt nhưng không cần đánh đổi bằng một frontend tách rời.</p>
@exec($__env->stopSection())
@exec($__ovcard__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['ovcard'].'_0'))
@include('web.modules.home.parts.ovcard', ['eyebrow' => "01 / NỘI BỘ", 'title' => "Ứng dụng nội bộ & admin panel", '__ONE_CHILDREN_CONTENT__' => $__ovcard__0_content])
@endMarker('component', 'c26ee094')
            @startMarker('component', 'bdd4cecc')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['ovcard'].'_1'))
<p @class([$__VIEW_ID__ . '-37aeefe2'])>Trang danh mục, chi tiết sản phẩm, blog có bộ lọc. Crawler nhận HTML đầy đủ; người dùng nhận trải nghiệm không tải lại trang.</p>
@exec($__env->stopSection())
@exec($__ovcard__1_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['ovcard'].'_1'))
@include('web.modules.home.parts.ovcard', ['eyebrow' => "02 / SEO + UX", 'title' => "Sản phẩm cần cả SEO lẫn tương tác", '__ONE_CHILDREN_CONTENT__' => $__ovcard__1_content])
@endMarker('component', 'bdd4cecc')
            @startMarker('component', '614a6be9')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['ovcard'].'_2'))
<p @class([$__VIEW_ID__ . '-397bf660'])>Web công khai, admin, webview mobile và api dùng chung model, policy và service layer nhưng tách route, middleware lẫn bundle.</p>
@exec($__env->stopSection())
@exec($__ovcard__2_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['ovcard'].'_2'))
@include('web.modules.home.parts.ovcard', ['eyebrow' => "03 / ĐA MẶT TIỀN", 'title' => "Nhiều mặt tiền trên một backend", '__ONE_CHILDREN_CONTENT__' => $__ovcard__2_content])
@endMarker('component', '614a6be9')
            @startMarker('component', '68c75538')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['ovcard'].'_3'))
<p @class([$__VIEW_ID__ . '-e84d46d3'])>Eloquent, middleware, policy, queue giữ nguyên. Phần mới cần học là cú pháp view và cách state chảy — không phải một hệ sinh thái build khác.</p>
@exec($__env->stopSection())
@exec($__ovcard__3_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['ovcard'].'_3'))
@include('web.modules.home.parts.ovcard', ['eyebrow' => "04 / ĐỘI LARAVEL", 'title' => "Đội Laravel muốn SPA mà không đổi nghề", '__ONE_CHILDREN_CONTENT__' => $__ovcard__3_content])
@endMarker('component', '68c75538')
        </div>
        <div @class([$__VIEW_ID__ . '-c882ec26', 'ov-note', 'ov-note--warn'])>
            <strong @class([$__VIEW_ID__ . '-afe5ed63'])>Chưa hợp khi:</strong> bạn cần một hệ sinh thái component bên thứ ba khổng lồ ngay hôm nay, hoặc đội đã chạy tốt trên React/Vue với đầy đủ tooling và người quen việc. Trong hai trường hợp đó, chi phí chuyển sang Saola lớn hơn cái nó tiết kiệm.
        </div>
    </section>
@endWrapper
