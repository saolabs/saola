@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($activePhase, 'hydrate')
@extends($__layout__ . "docs")
    @block('doc')
        <section @class([$__VIEW_ID__ . '-7b338a08', 'page-hero', 'page-hero-runtime'])>
            <div @class([$__VIEW_ID__ . '-3bb16c04'])><p @class([$__VIEW_ID__ . '-f150187b', 'kicker'])><span @class([$__VIEW_ID__ . '-bac94b21'])>03 / RUNTIME</span> DOM ownership & lifecycle</p><h1 @class([$__VIEW_ID__ . '-663d8ed0'])>Không render lại<br @class([$__VIEW_ID__ . '-c3c0e3f9'])><em @class([$__VIEW_ID__ . '-27038dbc'])>điều đã có.</em></h1></div>
            <div @class([$__VIEW_ID__ . '-57baae1a', 'page-hero-aside'])><p @class([$__VIEW_ID__ . '-8695e14e'])>Hydration là một chế độ mount có kiểm chứng: nhận DOM server tạo, nối behavior và chỉ fallback ở vùng không khớp.</p><dl @class([$__VIEW_ID__ . '-1f0b28a5'])><div @class([$__VIEW_ID__ . '-da4a7f2f'])><dt @class([$__VIEW_ID__ . '-902aa345'])>FIRST MODE</dt><dd @class([$__VIEW_ID__ . '-e65d3a6b'])>hydrate</dd></div><div @class([$__VIEW_ID__ . '-e762468d'])><dt @class([$__VIEW_ID__ . '-935f1ffd'])>NEXT MODE</dt><dd @class([$__VIEW_ID__ . '-df3e6b57'])>client mount</dd></div></dl></div>
        </section>

        <section @class([$__VIEW_ID__ . '-05ef4c27', 'phase-lab'])>
            <div @class([$__VIEW_ID__ . '-c9c6be59', 'phase-tabs']) @attr(['role' => 'group', 'aria-label' => 'Các giai đoạn runtime'])>
                <button @class([$__VIEW_ID__ . '-8fdfba2a', 'active'=> $activePhase === 'ssr'])><span @class([$__VIEW_ID__ . '-7c88577b'])>01</span> SSR</button>
                <button @class([$__VIEW_ID__ . '-658050f7', 'active'=> $activePhase === 'hydrate'])><span @class([$__VIEW_ID__ . '-208b7983'])>02</span> Hydrate</button>
                <button @class([$__VIEW_ID__ . '-93c2814e', 'active'=> $activePhase === 'reactive'])><span @class([$__VIEW_ID__ . '-6d8fd3f7'])>03</span> Rerender</button>
                <button @class([$__VIEW_ID__ . '-426cef1e', 'active'=> $activePhase === 'cache'])><span @class([$__VIEW_ID__ . '-4c413dd0'])>04</span> Cache</button>
            </div>
            <div @class([$__VIEW_ID__ . '-fbd9a84d', 'phase-display'])>
                @startMarker('reactive', '74173366', ['stateKey' => ['activePhase'], 'type' => 'if'])
                @if($activePhase === 'ssr')
                    <div @class([$__VIEW_ID__ . '-e7367464'])><span @class([$__VIEW_ID__ . '-5649f122'])>SERVER / COMPLETE</span><h2 @class([$__VIEW_ID__ . '-e7189715'])>Blade gửi HTML có nội dung.</h2><p @class([$__VIEW_ID__ . '-98e4965e'])>Layout, block, include và children được đặt đúng vị trí. Boot payload mang view ID, route data và context cần cho client.</p><code @class([$__VIEW_ID__ . '-02dbd94e'])>created → DOM ready</code></div>
                @elseif($activePhase === 'reactive')
                    <div @class([$__VIEW_ID__ . '-015e7fca'])><span @class([$__VIEW_ID__ . '-0ed6f8a1'])>CLIENT / UPDATE</span><h2 @class([$__VIEW_ID__ . '-c96d7dc5'])>State chỉ đánh thức vùng phụ thuộc.</h2><p @class([$__VIEW_ID__ . '-eb2a6be1'])>Thay đổi được batch theo frame. Reactive node render lại giữa marker của chính nó rồi start children mới và cleanup cây cũ.</p><code @class([$__VIEW_ID__ . '-afc5519e'])>state change → schedule → patch</code></div>
                @elseif($activePhase === 'cache')
                    <div @class([$__VIEW_ID__ . '-83874d5b'])><span @class([$__VIEW_ID__ . '-5a2eba3e'])>NAVIGATION / RESTORE</span><h2 @class([$__VIEW_ID__ . '-c7a6e6a9'])>Back không nhất thiết render lại.</h2><p @class([$__VIEW_ID__ . '-361a391f'])>View có thể pause, detach DOM vào PageCache, giữ state rồi resume cùng scroll position khi popstate quay lại.</p><code @class([$__VIEW_ID__ . '-67e22bd8'])>active ⇄ paused → destroyed</code></div>
                @else
                    <div @class([$__VIEW_ID__ . '-c652da34'])><span @class([$__VIEW_ID__ . '-2df41008'])>CLIENT / CLAIM</span><h2 @class([$__VIEW_ID__ . '-a6a0375e'])>Runtime nhận lại DOM thay vì tạo bản sao.</h2><p @class([$__VIEW_ID__ . '-e5ec980b'])>Marker và stable identity được đối chiếu. State, event và subscriptions gắn đúng một lần; mismatch chỉ rerender cục bộ.</p><code @class([$__VIEW_ID__ . '-7e4ae459'])>claim → reconcile → start</code></div>
                @endif
                @endMarker('reactive', '74173366')
                <div @class([$__VIEW_ID__ . '-bc986368', 'marker-visual'])><span @class([$__VIEW_ID__ . '-6303a5a3'])>&lt;!-- view:start --&gt;</span><div @class([$__VIEW_ID__ . '-a71a4ce1'])><i @class([$__VIEW_ID__ . '-ff74274b'])></i><i @class([$__VIEW_ID__ . '-826b6ccc'])></i><i @class([$__VIEW_ID__ . '-92ed573a'])></i><strong @class([$__VIEW_ID__ . '-796f99f4'])>EXISTING DOM</strong></div><span @class([$__VIEW_ID__ . '-4bceac81'])>&lt;!-- view:end --&gt;</span></div>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-9fd19a30', 'lifecycle-section'])>
            <div @class([$__VIEW_ID__ . '-849145f1', 'section-head', 'compact'])><p @class([$__VIEW_ID__ . '-0d56026d', 'kicker'])><span @class([$__VIEW_ID__ . '-773a2605'])>LIFECYCLE</span> Tài nguyên có điểm bắt đầu và kết thúc</p><h2 @class([$__VIEW_ID__ . '-de7a1e42'])>Một state machine<br @class([$__VIEW_ID__ . '-939960ee'])>có thể quan sát.</h2></div>
            <div @class([$__VIEW_ID__ . '-97e5628b', 'lifecycle-rail'])><article @class([$__VIEW_ID__ . '-59ebb7c1'])><span @class([$__VIEW_ID__ . '-ce56689b'])>01</span><strong @class([$__VIEW_ID__ . '-6e241d27'])>created</strong><p @class([$__VIEW_ID__ . '-88e948c8'])>Khai báo state, render factory và chain.</p></article><i @class([$__VIEW_ID__ . '-6c495396'])>→</i><article @class([$__VIEW_ID__ . '-62360ed0', 'active'])><span @class([$__VIEW_ID__ . '-96441922'])>02</span><strong @class([$__VIEW_ID__ . '-cd478644'])>active</strong><p @class([$__VIEW_ID__ . '-a1f0c4a2'])>DOM mounted, event và subscription đang chạy.</p></article><i @class([$__VIEW_ID__ . '-4ea4f516'])>⇄</i><article @class([$__VIEW_ID__ . '-279f3d92'])><span @class([$__VIEW_ID__ . '-077e8bd6'])>03</span><strong @class([$__VIEW_ID__ . '-afefe6cb'])>paused</strong><p @class([$__VIEW_ID__ . '-9edab2fa'])>DOM detach, thay đổi được ghi dirty để resume.</p></article><i @class([$__VIEW_ID__ . '-0bc0e461'])>→</i><article @class([$__VIEW_ID__ . '-b528b09c'])><span @class([$__VIEW_ID__ . '-b08ba3e0'])>04</span><strong @class([$__VIEW_ID__ . '-385c8941'])>destroyed</strong><p @class([$__VIEW_ID__ . '-586cc9e0'])>Abort event, unsubscribe, huỷ RAF và release DOM.</p></article></div>
        </section>

        <section @class([$__VIEW_ID__ . '-e3988c18', 'runtime-contracts'])>
            <div @class([$__VIEW_ID__ . '-6f8acc56'])><span @class([$__VIEW_ID__ . '-5536b886'])>01 / INSERTION</span><h3 @class([$__VIEW_ID__ . '-526a1ced'])>Mọi node có anchor</h3><p @class([$__VIEW_ID__ . '-c4bd526b'])>Wrapper, output, component và children đều render qua insertion point, tránh append mù vào container.</p></div>
            <div @class([$__VIEW_ID__ . '-f0346512'])><span @class([$__VIEW_ID__ . '-81072883'])>02 / OWNERSHIP</span><h3 @class([$__VIEW_ID__ . '-f281a161'])>Mỗi view cleanup phần mình</h3><p @class([$__VIEW_ID__ . '-76376fab'])>Child view, block content và resource scoped đều theo lifecycle của owner rõ ràng.</p></div>
            <div @class([$__VIEW_ID__ . '-417a4297'])><span @class([$__VIEW_ID__ . '-3c4049e4'])>03 / RECONCILIATION</span><h3 @class([$__VIEW_ID__ . '-2cf8c11f'])>Mismatch có phạm vi</h3><p @class([$__VIEW_ID__ . '-66c22f8e'])>Hydration cảnh báo và thay vùng sai thay vì buộc toàn bộ document render lại.</p></div>
            <div @class([$__VIEW_ID__ . '-796886d7'])><span @class([$__VIEW_ID__ . '-394badbf'])>04 / CONTEXT</span><h3 @class([$__VIEW_ID__ . '-d305e9fb'])>Registry đi cùng request</h3><p @class([$__VIEW_ID__ . '-a9cb02ef'])>Route component map được chọn theo context hiện hành, không bị static state của Octane worker làm lệch.</p></div>
        </section>
        <a @class([$__VIEW_ID__ . '-24b6e3d2', 'doc-next']) @attr(['href' => '/docs/lifecycle'])>
            <div @class([$__VIEW_ID__ . '-587d10b8'])><span @class([$__VIEW_ID__ . '-f908d9c5'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-7e647603'])>Vòng đời & marker</strong></div>
            <span @class([$__VIEW_ID__ . '-50bb0184', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
