@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($activePhase, 'hydrate')
@extends($__layout__ . "public")
    @block('content')
        <section @class([$__VIEW_ID__ . '-b4052a35', 'page-hero', 'page-hero-runtime'])>
            <div @class([$__VIEW_ID__ . '-90a6e493'])><p @class([$__VIEW_ID__ . '-f515bf66', 'kicker'])><span @class([$__VIEW_ID__ . '-e2f86203'])>03 / RUNTIME</span> DOM ownership & lifecycle</p><h1 @class([$__VIEW_ID__ . '-9b0938cb'])>Không render lại<br @class([$__VIEW_ID__ . '-f7127348'])><em @class([$__VIEW_ID__ . '-d4f4199d'])>điều đã có.</em></h1></div>
            <div @class([$__VIEW_ID__ . '-5f82dcd4', 'page-hero-aside'])><p @class([$__VIEW_ID__ . '-70182674'])>Hydration là một chế độ mount có kiểm chứng: nhận DOM server tạo, nối behavior và chỉ fallback ở vùng không khớp.</p><dl @class([$__VIEW_ID__ . '-87f0a97e'])><div @class([$__VIEW_ID__ . '-8fd0466f'])><dt @class([$__VIEW_ID__ . '-e3488b5f'])>FIRST MODE</dt><dd @class([$__VIEW_ID__ . '-cf7b0d19'])>hydrate</dd></div><div @class([$__VIEW_ID__ . '-a8712dd1'])><dt @class([$__VIEW_ID__ . '-fc9334e8'])>NEXT MODE</dt><dd @class([$__VIEW_ID__ . '-647f0f87'])>client mount</dd></div></dl></div>
        </section>

        <section @class([$__VIEW_ID__ . '-8aa0772c', 'phase-lab'])>
            <div @class([$__VIEW_ID__ . '-301a68fc', 'phase-tabs']) @attr(['role' => 'group', 'aria-label' => 'Các giai đoạn runtime'])>
                <button @class([$__VIEW_ID__ . '-f4d7b665', 'active'=> $activePhase === 'ssr'])><span @class([$__VIEW_ID__ . '-1f7cfba5'])>01</span> SSR</button>
                <button @class([$__VIEW_ID__ . '-841f8490', 'active'=> $activePhase === 'hydrate'])><span @class([$__VIEW_ID__ . '-5d54a895'])>02</span> Hydrate</button>
                <button @class([$__VIEW_ID__ . '-d84106cc', 'active'=> $activePhase === 'reactive'])><span @class([$__VIEW_ID__ . '-9b5ddd76'])>03</span> Rerender</button>
                <button @class([$__VIEW_ID__ . '-cef75304', 'active'=> $activePhase === 'cache'])><span @class([$__VIEW_ID__ . '-17600444'])>04</span> Cache</button>
            </div>
            <div @class([$__VIEW_ID__ . '-7f8af112', 'phase-display'])>
                @startMarker('reactive', '94d6f85f', ['stateKey' => ['activePhase'], 'type' => 'if'])
                @if($activePhase === 'ssr')
                    <div @class([$__VIEW_ID__ . '-60e2542d'])><span @class([$__VIEW_ID__ . '-85b44312'])>SERVER / COMPLETE</span><h2 @class([$__VIEW_ID__ . '-844ff036'])>Blade gửi HTML có nội dung.</h2><p @class([$__VIEW_ID__ . '-ffa0f7fb'])>Layout, block, include và children được đặt đúng vị trí. Boot payload mang view ID, route data và context cần cho client.</p><code @class([$__VIEW_ID__ . '-652e2794'])>created → DOM ready</code></div>
                @elseif($activePhase === 'reactive')
                    <div @class([$__VIEW_ID__ . '-cd6c32be'])><span @class([$__VIEW_ID__ . '-a5dffbf8'])>CLIENT / UPDATE</span><h2 @class([$__VIEW_ID__ . '-b64edae4'])>State chỉ đánh thức vùng phụ thuộc.</h2><p @class([$__VIEW_ID__ . '-844b262b'])>Thay đổi được batch theo frame. Reactive node render lại giữa marker của chính nó rồi start children mới và cleanup cây cũ.</p><code @class([$__VIEW_ID__ . '-640170c9'])>state change → schedule → patch</code></div>
                @elseif($activePhase === 'cache')
                    <div @class([$__VIEW_ID__ . '-4a0b6f3b'])><span @class([$__VIEW_ID__ . '-bdab0ea9'])>NAVIGATION / RESTORE</span><h2 @class([$__VIEW_ID__ . '-b3c591da'])>Back không nhất thiết render lại.</h2><p @class([$__VIEW_ID__ . '-8d923d95'])>View có thể pause, detach DOM vào PageCache, giữ state rồi resume cùng scroll position khi popstate quay lại.</p><code @class([$__VIEW_ID__ . '-6f9010ad'])>active ⇄ paused → destroyed</code></div>
                @else
                    <div @class([$__VIEW_ID__ . '-e073fe0a'])><span @class([$__VIEW_ID__ . '-81279e31'])>CLIENT / CLAIM</span><h2 @class([$__VIEW_ID__ . '-18016808'])>Runtime nhận lại DOM thay vì tạo bản sao.</h2><p @class([$__VIEW_ID__ . '-283e3d7d'])>Marker và stable identity được đối chiếu. State, event và subscriptions gắn đúng một lần; mismatch chỉ rerender cục bộ.</p><code @class([$__VIEW_ID__ . '-b0697b19'])>claim → reconcile → start</code></div>
                @endif
                @endMarker('reactive', '94d6f85f')
                <div @class([$__VIEW_ID__ . '-4cc3522d', 'marker-visual'])><span @class([$__VIEW_ID__ . '-0ea9bdf7'])>&lt;!-- view:start --&gt;</span><div @class([$__VIEW_ID__ . '-b51defe8'])><i @class([$__VIEW_ID__ . '-bed35e65'])></i><i @class([$__VIEW_ID__ . '-b74e7b12'])></i><i @class([$__VIEW_ID__ . '-c77227b5'])></i><strong @class([$__VIEW_ID__ . '-c3e1c132'])>EXISTING DOM</strong></div><span @class([$__VIEW_ID__ . '-47a63c08'])>&lt;!-- view:end --&gt;</span></div>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-6c26f9b7', 'lifecycle-section'])>
            <div @class([$__VIEW_ID__ . '-ce6a96bf', 'section-head', 'compact'])><p @class([$__VIEW_ID__ . '-5a71cd5f', 'kicker'])><span @class([$__VIEW_ID__ . '-f1acc65a'])>LIFECYCLE</span> Tài nguyên có điểm bắt đầu và kết thúc</p><h2 @class([$__VIEW_ID__ . '-98293aba'])>Một state machine<br @class([$__VIEW_ID__ . '-c006637c'])>có thể quan sát.</h2></div>
            <div @class([$__VIEW_ID__ . '-d44023e9', 'lifecycle-rail'])><article @class([$__VIEW_ID__ . '-e3e123df'])><span @class([$__VIEW_ID__ . '-5cadfa06'])>01</span><strong @class([$__VIEW_ID__ . '-f5da45b7'])>created</strong><p @class([$__VIEW_ID__ . '-4a13b743'])>Khai báo state, render factory và chain.</p></article><i @class([$__VIEW_ID__ . '-6ca8d1ac'])>→</i><article @class([$__VIEW_ID__ . '-ddf2d3a9', 'active'])><span @class([$__VIEW_ID__ . '-8d5d9746'])>02</span><strong @class([$__VIEW_ID__ . '-9c2c779f'])>active</strong><p @class([$__VIEW_ID__ . '-71463dd8'])>DOM mounted, event và subscription đang chạy.</p></article><i @class([$__VIEW_ID__ . '-d2faf6f2'])>⇄</i><article @class([$__VIEW_ID__ . '-f46ead31'])><span @class([$__VIEW_ID__ . '-7856d9b6'])>03</span><strong @class([$__VIEW_ID__ . '-2fcb6b06'])>paused</strong><p @class([$__VIEW_ID__ . '-8b20d85e'])>DOM detach, thay đổi được ghi dirty để resume.</p></article><i @class([$__VIEW_ID__ . '-68a7179f'])>→</i><article @class([$__VIEW_ID__ . '-b0e172af'])><span @class([$__VIEW_ID__ . '-5c77a0d2'])>04</span><strong @class([$__VIEW_ID__ . '-68930cae'])>destroyed</strong><p @class([$__VIEW_ID__ . '-c4f16e7a'])>Abort event, unsubscribe, huỷ RAF và release DOM.</p></article></div>
        </section>

        <section @class([$__VIEW_ID__ . '-4e212027', 'runtime-contracts'])>
            <div @class([$__VIEW_ID__ . '-1628defa'])><span @class([$__VIEW_ID__ . '-94cfb61c'])>01 / INSERTION</span><h3 @class([$__VIEW_ID__ . '-51b31959'])>Mọi node có anchor</h3><p @class([$__VIEW_ID__ . '-cbd53bdb'])>Wrapper, output, component và children đều render qua insertion point, tránh append mù vào container.</p></div>
            <div @class([$__VIEW_ID__ . '-281112e1'])><span @class([$__VIEW_ID__ . '-39f5e2a7'])>02 / OWNERSHIP</span><h3 @class([$__VIEW_ID__ . '-5a655b72'])>Mỗi view cleanup phần mình</h3><p @class([$__VIEW_ID__ . '-093ec949'])>Child view, block content và resource scoped đều theo lifecycle của owner rõ ràng.</p></div>
            <div @class([$__VIEW_ID__ . '-f95640aa'])><span @class([$__VIEW_ID__ . '-cf8d1361'])>03 / RECONCILIATION</span><h3 @class([$__VIEW_ID__ . '-80c5ddc7'])>Mismatch có phạm vi</h3><p @class([$__VIEW_ID__ . '-74790797'])>Hydration cảnh báo và thay vùng sai thay vì buộc toàn bộ document render lại.</p></div>
            <div @class([$__VIEW_ID__ . '-373f881d'])><span @class([$__VIEW_ID__ . '-32285881'])>04 / CONTEXT</span><h3 @class([$__VIEW_ID__ . '-0d3766a9'])>Registry đi cùng request</h3><p @class([$__VIEW_ID__ . '-9fe8cc02'])>Route component map được chọn theo context hiện hành, không bị static state của Octane worker làm lệch.</p></div>
        </section>

        <section @class([$__VIEW_ID__ . '-5d5c7d30', 'next-page'])><span @class([$__VIEW_ID__ . '-8a4c2f1f'])>Tiếp theo / 04</span><div @class([$__VIEW_ID__ . '-f94a552a'])><h2 @class([$__VIEW_ID__ . '-5d206b32'])>Đưa một route Saola đầu tiên vào ứng dụng.</h2><a @class([$__VIEW_ID__ . '-3f927566', 'button', 'button-primary']) @attr(['href' => '/getting-started'])>Getting started <span @class([$__VIEW_ID__ . '-828421ed'])>↗</span></a></div></section>
    @endblock
