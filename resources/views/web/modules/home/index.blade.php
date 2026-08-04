@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($selectedSignal, 'source')
@extends($__layout__ . "public")
    @block('content')
        <section @class([$__VIEW_ID__ . '-b4052a35', 'home-hero'])>
            <div @class([$__VIEW_ID__ . '-90a6e493', 'home-hero-copy'])>
                <p @class([$__VIEW_ID__ . '-f515bf66', 'kicker'])><span @class([$__VIEW_ID__ . '-e2f86203'])>SAOLA / ECOSYSTEM 01</span> Laravel-native application platform</p>
                <h1 @class([$__VIEW_ID__ . '-9b0938cb'])>Một giao diện.<br @class([$__VIEW_ID__ . '-f7127348'])><em @class([$__VIEW_ID__ . '-d4f4199d'])>Hai runtime.</em><br @class([$__VIEW_ID__ . '-e95ae667'])>Không hai codebase.</h1>
                <p @class([$__VIEW_ID__ . '-7718bb8d', 'hero-lead'])>Saola biến một view <code @class([$__VIEW_ID__ . '-cbfb64a4'])>.sao</code> thành Blade cho phản hồi đầu tiên và JavaScript cho mọi tương tác tiếp theo — cùng route, cùng state contract, cùng cấu trúc.</p>
                <div @class([$__VIEW_ID__ . '-ed82504f', 'hero-actions'])>
                    <a @class([$__VIEW_ID__ . '-63bde3ef', 'button', 'button-primary']) @attr(['href' => '/architecture'])>Khám phá hệ thống <span @class([$__VIEW_ID__ . '-fee9a4ad'])>↗</span></a>
                    <a @class([$__VIEW_ID__ . '-b589ca24', 'text-link']) @attr(['href' => '/getting-started'])>Xem cách bắt đầu <span @class([$__VIEW_ID__ . '-c0aad52e'])>→</span></a>
                </div>
                <dl @class([$__VIEW_ID__ . '-5e135ba5', 'hero-facts'])>
                    <div @class([$__VIEW_ID__ . '-fe5c8eae'])><dt @class([$__VIEW_ID__ . '-d73d3967'])>BACKEND</dt><dd @class([$__VIEW_ID__ . '-3947d795'])>Laravel 13</dd></div>
                    <div @class([$__VIEW_ID__ . '-50a0f69c'])><dt @class([$__VIEW_ID__ . '-22a4978d'])>FIRST PAINT</dt><dd @class([$__VIEW_ID__ . '-8196725f'])>Blade SSR</dd></div>
                    <div @class([$__VIEW_ID__ . '-ecb37508'])><dt @class([$__VIEW_ID__ . '-4f2b888b'])>AFTER LOAD</dt><dd @class([$__VIEW_ID__ . '-0e24af22'])>Reactive SPA</dd></div>
                </dl>
            </div>

            <div @class([$__VIEW_ID__ . '-5f82dcd4', 'system-instrument']) @attr(['aria-label' => 'Luồng biên dịch và render của Saola'])>
                <div @class([$__VIEW_ID__ . '-01b28266', 'instrument-top'])><span @class([$__VIEW_ID__ . '-37bb2111'])><i @class([$__VIEW_ID__ . '-f21de37f'])></i> ROUTE / HOME</span><span @class([$__VIEW_ID__ . '-483a565a'])>CONTEXT: WEB</span></div>
                <div @class([$__VIEW_ID__ . '-81148f49', 'source-cell'])>
                    <div @class([$__VIEW_ID__ . '-f8a7486f', 'cell-label'])>01 / SOURCE OF TRUTH</div>
                    <strong @class([$__VIEW_ID__ . '-aeba9a26'])>home.sao</strong>
                    <code @class([$__VIEW_ID__ . '-19524746'])>&lt;template&gt; + state + style</code>
                </div>
                <div @class([$__VIEW_ID__ . '-328c95ab', 'branch-line'])><span @class([$__VIEW_ID__ . '-49a217a8'])>COMPILE</span></div>
                <div @class([$__VIEW_ID__ . '-ac51d251', 'runtime-pair'])>
                    <article @class([$__VIEW_ID__ . '-1db15f13'])><span @class([$__VIEW_ID__ . '-c3a538e4'])>02A / SERVER</span><strong @class([$__VIEW_ID__ . '-cd192bfa'])>Blade</strong><small @class([$__VIEW_ID__ . '-e2e22d5c'])>HTML hoàn chỉnh</small></article>
                    <article @class([$__VIEW_ID__ . '-498ed0c5'])><span @class([$__VIEW_ID__ . '-e8e4ac97'])>02B / CLIENT</span><strong @class([$__VIEW_ID__ . '-6ee7879c'])>JavaScript</strong><small @class([$__VIEW_ID__ . '-8d001972'])>View contract</small></article>
                </div>
                <div @class([$__VIEW_ID__ . '-76eb295c', 'instrument-readout'])>
                    <button @class([$__VIEW_ID__ . '-a7c0e4a6', 'active'=> $selectedSignal === 'source'])>SOURCE</button>
                    <button @class([$__VIEW_ID__ . '-d9002f86', 'active'=> $selectedSignal === 'hydrate'])>HYDRATE</button>
                    <button @class([$__VIEW_ID__ . '-c2ac9d7a', 'active'=> $selectedSignal === 'navigate'])>NAVIGATE</button>
                    @startMarker('reactive', '3bcea458', ['stateKey' => ['selectedSignal'], 'type' => 'if'])
                    @if($selectedSignal === 'hydrate')
                        <p @class([$__VIEW_ID__ . '-9851b44b'])><b @class([$__VIEW_ID__ . '-591588a3'])>DOM được nhận lại.</b> Runtime claim marker có sẵn, nối state và event mà không dựng lại toàn bộ trang.</p>
                    @elseif($selectedSignal === 'navigate')
                        <p @class([$__VIEW_ID__ . '-c9d2d458'])><b @class([$__VIEW_ID__ . '-2102ae8f'])>Layout được giữ lại.</b> Router chỉ thay nhánh view cần đổi; context route chọn đúng registry cho request hiện tại.</p>
                    @else
                        <p @class([$__VIEW_ID__ . '-0be2d6a8'])><b @class([$__VIEW_ID__ . '-704cd593'])>Một nguồn được biên dịch hai hướng.</b> Blade và JavaScript tuân theo cùng AST thay vì hai implementation song song.</p>
                    @endif
                    @endMarker('reactive', '3bcea458')
                </div>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-8aa0772c', 'orientation-strip']) @attr(['aria-label' => 'Định vị Saola'])>
            <p @class([$__VIEW_ID__ . '-35bf6e9d'])><span @class([$__VIEW_ID__ . '-b76d6580'])>Saola không thay Laravel.</span> Saola nối phần Laravel đã làm tốt với trải nghiệm SPA mà đội sản phẩm cần.</p>
            <div @class([$__VIEW_ID__ . '-7f8af112'])><strong @class([$__VIEW_ID__ . '-14b47dbd'])>SSR</strong><small @class([$__VIEW_ID__ . '-872e3af2'])>đúng ngay từ request đầu</small></div>
            <div @class([$__VIEW_ID__ . '-9b976db3'])><strong @class([$__VIEW_ID__ . '-9aa2ffa8'])>CSR</strong><small @class([$__VIEW_ID__ . '-521ea42c'])>nhanh sau hydration</small></div>
            <div @class([$__VIEW_ID__ . '-cfc01898'])><strong @class([$__VIEW_ID__ . '-ccc1deb9'])>CONTEXT</strong><small @class([$__VIEW_ID__ . '-6d1fc048'])>web · admin · mobile</small></div>
        </section>

        <section @class([$__VIEW_ID__ . '-6c26f9b7', 'home-map']) @attr(['id' => 'explore'])>
            <div @class([$__VIEW_ID__ . '-ce6a96bf', 'section-head'])>
                <p @class([$__VIEW_ID__ . '-5a71cd5f', 'kicker'])><span @class([$__VIEW_ID__ . '-f1acc65a'])>PROJECT MAP</span> Không dồn mọi thứ vào trang chủ</p>
                <h2 @class([$__VIEW_ID__ . '-98293aba'])>Đi vào đúng lớp<br @class([$__VIEW_ID__ . '-c006637c'])>mà bạn cần hiểu.</h2>
                <p @class([$__VIEW_ID__ . '-7e849715'])>Mỗi phần của Saola có một trách nhiệm rõ ràng. Các trang dưới đây giải thích sâu bằng flow, contract và ví dụ thực tế.</p>
            </div>
            <div @class([$__VIEW_ID__ . '-d44023e9', 'map-grid'])>
                <a @class([$__VIEW_ID__ . '-68691adb', 'map-card', 'map-card-wide']) @attr(['href' => '/architecture'])><span @class([$__VIEW_ID__ . '-f58a9058'])>01 / SYSTEM</span><h3 @class([$__VIEW_ID__ . '-95e8578e'])>Kiến trúc hệ sinh thái</h3><p @class([$__VIEW_ID__ . '-537c68b1'])>Core, compiler, client runtime và application gặp nhau ở đâu trong một request.</p><i @class([$__VIEW_ID__ . '-6c57319f'])>Khám phá kiến trúc ↗</i></a>
                <a @class([$__VIEW_ID__ . '-bbea58cd', 'map-card']) @attr(['href' => '/compiler'])><span @class([$__VIEW_ID__ . '-e7bcc131'])>02 / BUILD</span><h3 @class([$__VIEW_ID__ . '-2a7bc8cf'])>Compiler & AST</h3><p @class([$__VIEW_ID__ . '-703512be'])>Một cú pháp, hai output và cơ chế children/include đồng bộ.</p><i @class([$__VIEW_ID__ . '-c0e73b95'])>Mở compiler ↗</i></a>
                <a @class([$__VIEW_ID__ . '-40a53288', 'map-card', 'map-card-dark']) @attr(['href' => '/runtime'])><span @class([$__VIEW_ID__ . '-50cdd8c6'])>03 / LIVE</span><h3 @class([$__VIEW_ID__ . '-a12bc027'])>Runtime & Hydration</h3><p @class([$__VIEW_ID__ . '-c4c4f4d6'])>Claim DOM, reactive update, lifecycle, rerender và page cache.</p><i @class([$__VIEW_ID__ . '-b98affc7'])>Xem runtime ↗</i></a>
                <a @class([$__VIEW_ID__ . '-5d85b82c', 'map-card']) @attr(['href' => '/getting-started'])><span @class([$__VIEW_ID__ . '-09a33627'])>04 / START</span><h3 @class([$__VIEW_ID__ . '-13e66592'])>Bắt đầu từ một route</h3><p @class([$__VIEW_ID__ . '-2125817d'])>Cấu trúc module, view đầu tiên và quy trình compile/run.</p><i @class([$__VIEW_ID__ . '-735ec8ee'])>Bắt đầu xây ↗</i></a>
                <a @class([$__VIEW_ID__ . '-65327ce9', 'map-card']) @attr(['href' => '/todo-list'])><span @class([$__VIEW_ID__ . '-6d15c32a'])>05 / PROOF</span><h3 @class([$__VIEW_ID__ . '-2112fb7c'])>Demo tương tác</h3><p @class([$__VIEW_ID__ . '-e983f9c8'])>Một fixture nhỏ để quan sát state, event và điều hướng đang chạy.</p><i @class([$__VIEW_ID__ . '-d1abd539'])>Mở live demo ↗</i></a>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-4e212027', 'principle-band'])>
            <div @class([$__VIEW_ID__ . '-1628defa'])><p @class([$__VIEW_ID__ . '-d621a64b', 'kicker'])><span @class([$__VIEW_ID__ . '-5f6b80a9'])>DESIGN PRINCIPLE</span> Điều Saola bảo vệ</p><h2 @class([$__VIEW_ID__ . '-6560bb1b'])>Server là sự thật.<br @class([$__VIEW_ID__ . '-c03b5dbb'])>Client là sự tiếp nối.</h2></div>
            <div @class([$__VIEW_ID__ . '-281112e1', 'principle-copy'])><p @class([$__VIEW_ID__ . '-1ace0544'])>Phản hồi đầu tiên phải hoàn chỉnh và có thể hiểu được. JavaScript không “cứu” một trang rỗng; nó tiếp nhận chính view server vừa render và làm view đó sống lên.</p><a @class([$__VIEW_ID__ . '-e6526bf8', 'button', 'button-light']) @attr(['href' => '/about'])>Vì sao Saola tồn tại <span @class([$__VIEW_ID__ . '-451e22c6'])>→</span></a></div>
        </section>
    @endblock
