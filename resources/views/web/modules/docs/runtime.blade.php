@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($activePhase, 'hydrate')
@extends($__layout__ . "docs")
    @block('doc')
        <section @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero', 'page-hero-runtime'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])><p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>03 / RUNTIME</span> DOM ownership & lifecycle</p><h1 @class([$__VIEW_ID__ . '-Bdoc112'])>Không render lại<br @class([$__VIEW_ID__ . '-Bdoc1121'])><em @class([$__VIEW_ID__ . '-Bdoc1122'])>điều đã có.</em></h1></div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])><p @class([$__VIEW_ID__ . '-Bdoc121'])>Hydration là một chế độ mount có kiểm chứng: nhận DOM server tạo, nối behavior và chỉ fallback ở vùng không khớp.</p><dl @class([$__VIEW_ID__ . '-Bdoc122'])><div @class([$__VIEW_ID__ . '-Bdoc1221'])><dt @class([$__VIEW_ID__ . '-Bdoc12211'])>FIRST MODE</dt><dd @class([$__VIEW_ID__ . '-Bdoc12212'])>hydrate</dd></div><div @class([$__VIEW_ID__ . '-Bdoc1222'])><dt @class([$__VIEW_ID__ . '-Bdoc12221'])>NEXT MODE</dt><dd @class([$__VIEW_ID__ . '-Bdoc12222'])>client mount</dd></div></dl></div>
        </section>

        <section @class([$__VIEW_ID__ . '-Bdoc2', 'phase-lab'])>
            <div @class([$__VIEW_ID__ . '-Bdoc21', 'phase-tabs']) @attr(['role' => 'group', 'aria-label' => 'Các giai đoạn runtime'])>
                <button @class([$__VIEW_ID__ . '-Bdoc211', 'active'=> $activePhase === 'ssr'])><span @class([$__VIEW_ID__ . '-Bdoc2111'])>01</span> SSR</button>
                <button @class([$__VIEW_ID__ . '-Bdoc212', 'active'=> $activePhase === 'hydrate'])><span @class([$__VIEW_ID__ . '-Bdoc2121'])>02</span> Hydrate</button>
                <button @class([$__VIEW_ID__ . '-Bdoc213', 'active'=> $activePhase === 'reactive'])><span @class([$__VIEW_ID__ . '-Bdoc2131'])>03</span> Rerender</button>
                <button @class([$__VIEW_ID__ . '-Bdoc214', 'active'=> $activePhase === 'cache'])><span @class([$__VIEW_ID__ . '-Bdoc2141'])>04</span> Cache</button>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc22', 'phase-display'])>
                @startMarker('reactive', 'Bdoc22r1', ['stateKey' => ['activePhase'], 'type' => 'if'])
                @if($activePhase === 'ssr')
                    <div @class([$__VIEW_ID__ . '-Bdoc22r1k11'])><span @class([$__VIEW_ID__ . '-Bdoc22r1k111'])>SERVER / COMPLETE</span><h2 @class([$__VIEW_ID__ . '-Bdoc22r1k112'])>Blade gửi HTML có nội dung.</h2><p @class([$__VIEW_ID__ . '-Bdoc22r1k113'])>Layout, block, include và children được đặt đúng vị trí. Boot payload mang view ID, route data và context cần cho client.</p><code @class([$__VIEW_ID__ . '-Bdoc22r1k114'])>created → DOM ready</code></div>
                @elseif($activePhase === 'reactive')
                    <div @class([$__VIEW_ID__ . '-Bdoc22r1k21'])><span @class([$__VIEW_ID__ . '-Bdoc22r1k211'])>CLIENT / UPDATE</span><h2 @class([$__VIEW_ID__ . '-Bdoc22r1k212'])>State chỉ đánh thức vùng phụ thuộc.</h2><p @class([$__VIEW_ID__ . '-Bdoc22r1k213'])>Thay đổi được batch theo frame. Reactive node render lại giữa marker của chính nó rồi start children mới và cleanup cây cũ.</p><code @class([$__VIEW_ID__ . '-Bdoc22r1k214'])>state change → schedule → patch</code></div>
                @elseif($activePhase === 'cache')
                    <div @class([$__VIEW_ID__ . '-Bdoc22r1k31'])><span @class([$__VIEW_ID__ . '-Bdoc22r1k311'])>NAVIGATION / RESTORE</span><h2 @class([$__VIEW_ID__ . '-Bdoc22r1k312'])>Back không nhất thiết render lại.</h2><p @class([$__VIEW_ID__ . '-Bdoc22r1k313'])>View có thể pause, detach DOM vào PageCache, giữ state rồi resume cùng scroll position khi popstate quay lại.</p><code @class([$__VIEW_ID__ . '-Bdoc22r1k314'])>active ⇄ paused → destroyed</code></div>
                @else
                    <div @class([$__VIEW_ID__ . '-Bdoc22r1k41'])><span @class([$__VIEW_ID__ . '-Bdoc22r1k411'])>CLIENT / CLAIM</span><h2 @class([$__VIEW_ID__ . '-Bdoc22r1k412'])>Runtime nhận lại DOM thay vì tạo bản sao.</h2><p @class([$__VIEW_ID__ . '-Bdoc22r1k413'])>Marker và stable identity được đối chiếu. State, event và subscriptions gắn đúng một lần; mismatch chỉ rerender cục bộ.</p><code @class([$__VIEW_ID__ . '-Bdoc22r1k414'])>claim → reconcile → start</code></div>
                @endif
                @endMarker('reactive', 'Bdoc22r1')
                <div @class([$__VIEW_ID__ . '-Bdoc221', 'marker-visual'])><span @class([$__VIEW_ID__ . '-Bdoc2211'])>&lt;!-- view:start --&gt;</span><div @class([$__VIEW_ID__ . '-Bdoc2212'])><i @class([$__VIEW_ID__ . '-Bdoc22121'])></i><i @class([$__VIEW_ID__ . '-Bdoc22122'])></i><i @class([$__VIEW_ID__ . '-Bdoc22123'])></i><strong @class([$__VIEW_ID__ . '-Bdoc22124'])>EXISTING DOM</strong></div><span @class([$__VIEW_ID__ . '-Bdoc2213'])>&lt;!-- view:end --&gt;</span></div>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-Bdoc3', 'lifecycle-section'])>
            <div @class([$__VIEW_ID__ . '-Bdoc31', 'section-head', 'compact'])><p @class([$__VIEW_ID__ . '-Bdoc311', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc3111'])>LIFECYCLE</span> Tài nguyên có điểm bắt đầu và kết thúc</p><h2 @class([$__VIEW_ID__ . '-Bdoc312'])>Một state machine<br @class([$__VIEW_ID__ . '-Bdoc3121'])>có thể quan sát.</h2></div>
            <div @class([$__VIEW_ID__ . '-Bdoc32', 'lifecycle-rail'])><article @class([$__VIEW_ID__ . '-Bdoc321'])><span @class([$__VIEW_ID__ . '-Bdoc3211'])>01</span><strong @class([$__VIEW_ID__ . '-Bdoc3212'])>created</strong><p @class([$__VIEW_ID__ . '-Bdoc3213'])>Khai báo state, render factory và chain.</p></article><i @class([$__VIEW_ID__ . '-Bdoc322'])>→</i><article @class([$__VIEW_ID__ . '-Bdoc323', 'active'])><span @class([$__VIEW_ID__ . '-Bdoc3231'])>02</span><strong @class([$__VIEW_ID__ . '-Bdoc3232'])>active</strong><p @class([$__VIEW_ID__ . '-Bdoc3233'])>DOM mounted, event và subscription đang chạy.</p></article><i @class([$__VIEW_ID__ . '-Bdoc324'])>⇄</i><article @class([$__VIEW_ID__ . '-Bdoc325'])><span @class([$__VIEW_ID__ . '-Bdoc3251'])>03</span><strong @class([$__VIEW_ID__ . '-Bdoc3252'])>paused</strong><p @class([$__VIEW_ID__ . '-Bdoc3253'])>DOM detach, thay đổi được ghi dirty để resume.</p></article><i @class([$__VIEW_ID__ . '-Bdoc326'])>→</i><article @class([$__VIEW_ID__ . '-Bdoc327'])><span @class([$__VIEW_ID__ . '-Bdoc3271'])>04</span><strong @class([$__VIEW_ID__ . '-Bdoc3272'])>destroyed</strong><p @class([$__VIEW_ID__ . '-Bdoc3273'])>Abort event, unsubscribe, huỷ RAF và release DOM.</p></article></div>
        </section>

        <section @class([$__VIEW_ID__ . '-Bdoc4', 'runtime-contracts'])>
            <div @class([$__VIEW_ID__ . '-Bdoc41'])><span @class([$__VIEW_ID__ . '-Bdoc411'])>01 / INSERTION</span><h3 @class([$__VIEW_ID__ . '-Bdoc412'])>Mọi node có anchor</h3><p @class([$__VIEW_ID__ . '-Bdoc413'])>Wrapper, output, component và children đều render qua insertion point, tránh append mù vào container.</p></div>
            <div @class([$__VIEW_ID__ . '-Bdoc42'])><span @class([$__VIEW_ID__ . '-Bdoc421'])>02 / OWNERSHIP</span><h3 @class([$__VIEW_ID__ . '-Bdoc422'])>Mỗi view cleanup phần mình</h3><p @class([$__VIEW_ID__ . '-Bdoc423'])>Child view, block content và resource scoped đều theo lifecycle của owner rõ ràng.</p></div>
            <div @class([$__VIEW_ID__ . '-Bdoc43'])><span @class([$__VIEW_ID__ . '-Bdoc431'])>03 / RECONCILIATION</span><h3 @class([$__VIEW_ID__ . '-Bdoc432'])>Mismatch có phạm vi</h3><p @class([$__VIEW_ID__ . '-Bdoc433'])>Hydration cảnh báo và thay vùng sai thay vì buộc toàn bộ document render lại.</p></div>
            <div @class([$__VIEW_ID__ . '-Bdoc44'])><span @class([$__VIEW_ID__ . '-Bdoc441'])>04 / CONTEXT</span><h3 @class([$__VIEW_ID__ . '-Bdoc442'])>Registry đi cùng request</h3><p @class([$__VIEW_ID__ . '-Bdoc443'])>Route component map được chọn theo context hiện hành, không bị static state của Octane worker làm lệch.</p></div>
        </section>
        <a @class([$__VIEW_ID__ . '-Bdoc5', 'doc-next']) @attr(['href' => '/docs/lifecycle'])>
            <div @class([$__VIEW_ID__ . '-Bdoc51'])><span @class([$__VIEW_ID__ . '-Bdoc511'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-Bdoc512'])>Vòng đời & marker</strong></div>
            <span @class([$__VIEW_ID__ . '-Bdoc52', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
