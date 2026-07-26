@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($selectedSignal, 'hydration')
@useState($email, '')
@useState($joined, false)
@extends($__layout__ . "public")
    @block('content')
        <section @class([$__VIEW_ID__ . '-b4052a35', 'hero-grid', 'hero-studio']) @attr(['id' => 'hero-section'])>
            <div @class([$__VIEW_ID__ . '-90a6e493', 'hero-copy'])>
                <p @class([$__VIEW_ID__ . '-f515bf66', 'hero-eyebrow'])>Nền tảng SPA thế hệ mới cho Laravel</p>
                <h1 @class([$__VIEW_ID__ . '-9b0938cb'])>Viết một lần.<br @class([$__VIEW_ID__ . '-f7127348'])><em @class([$__VIEW_ID__ . '-d4f4199d'])>Vận hành mọi nơi.</em></h1>
                <p @class([$__VIEW_ID__ . '-7718bb8d', 'hero-lead'])>Saola giữ Laravel và Blade cho phản hồi đầu tiên, sau đó hydrate chính xác view đó thành một SPA nhanh, reactive và an toàn.</p>
                <div @class([$__VIEW_ID__ . '-ed82504f', 'hero-actions'])>
                    <a @class([$__VIEW_ID__ . '-63bde3ef', 'button', 'button-primary']) @attr(['href' => '/todo-list'])>Trải nghiệm demo <span @class([$__VIEW_ID__ . '-fee9a4ad'])>→</span></a>
                    <a @class([$__VIEW_ID__ . '-b589ca24', 'button', 'button-secondary']) @attr(['href' => '/about'])>Khám phá kiến trúc</a>
                </div>
                <div @class([$__VIEW_ID__ . '-1959f375', 'hero-proof-row']) @attr(['aria-label' => 'Saola capabilities'])>
                    <span @class([$__VIEW_ID__ . '-840df5fc'])>✓ SSR bằng Blade</span>
                    <span @class([$__VIEW_ID__ . '-72aed0dd'])>✓ Hydration không duplicate</span>
                    <span @class([$__VIEW_ID__ . '-4a9f4e30'])>✓ Reactive theo state</span>
                </div>
            </div>
            <div @class([$__VIEW_ID__ . '-5f82dcd4', 'route-card']) @attr(['aria-label' => 'Saola render route'])>
                <div @class([$__VIEW_ID__ . '-01b28266', 'route-card-head'])>
                    <div @class([$__VIEW_ID__ . '-17fdbbc3'])><span @class([$__VIEW_ID__ . '-8f494a03', 'runtime-dot'])></span><strong @class([$__VIEW_ID__ . '-49d1a08b'])>Runtime overview</strong></div>
                    <span @class([$__VIEW_ID__ . '-483a565a', 'live-badge'])>Live · /home</span>
                </div>
                <div @class([$__VIEW_ID__ . '-81148f49', 'runtime-metrics'])>
                    <div @class([$__VIEW_ID__ . '-f8a7486f'])><small @class([$__VIEW_ID__ . '-3f6f4d1a'])>Render source</small><strong @class([$__VIEW_ID__ . '-26663c5d'])>1 view</strong><span @class([$__VIEW_ID__ . '-f298ae77'])>.sao</span></div>
                    <div @class([$__VIEW_ID__ . '-3ecbdb6f'])><small @class([$__VIEW_ID__ . '-790075db'])>Current phase</small><strong @class([$__VIEW_ID__ . '-60b7e503'])>Hydrate</strong><span @class([$__VIEW_ID__ . '-25f9faa5'])>DOM reuse</span></div>
                    <div @class([$__VIEW_ID__ . '-e3b84133'])><small @class([$__VIEW_ID__ . '-d3ffa7cd'])>Listeners</small><strong @class([$__VIEW_ID__ . '-49c0a9c0'])>1×</strong><span @class([$__VIEW_ID__ . '-02b0031a'])>deduplicated</span></div>
                </div>
                <div @class([$__VIEW_ID__ . '-328c95ab', 'route-line']) @attr(['role' => 'group', 'aria-label' => 'Chọn giai đoạn render'])>
                    <button @class([$__VIEW_ID__ . '-5c74ea59', 'route-node', 'active'=> $selectedSignal === 'blade']) @attr(['aria-label' => 'Xem giai đoạn Blade'])><span @class([$__VIEW_ID__ . '-1ecedf4d'])>01</span><strong @class([$__VIEW_ID__ . '-20c5c596'])>Blade</strong><small @class([$__VIEW_ID__ . '-f3d3caed'])>server response</small></button>
                    <button @class([$__VIEW_ID__ . '-819175ee', 'route-node', 'active'=> $selectedSignal === 'hydration']) @attr(['aria-label' => 'Xem giai đoạn hydration'])><span @class([$__VIEW_ID__ . '-28771293'])>02</span><strong @class([$__VIEW_ID__ . '-1755efaf'])>Hydrate</strong><small @class([$__VIEW_ID__ . '-2335456c'])>bind existing DOM</small></button>
                    <button @class([$__VIEW_ID__ . '-f0ce158d', 'route-node', 'active'=> $selectedSignal === 'spa']) @attr(['aria-label' => 'Xem giai đoạn SPA'])><span @class([$__VIEW_ID__ . '-afd5a05b'])>03</span><strong @class([$__VIEW_ID__ . '-1e6f4d27'])>SPA</strong><small @class([$__VIEW_ID__ . '-d7a1c7ef'])>client navigation</small></button>
                </div>
                <div @class([$__VIEW_ID__ . '-ac51d251', 'signal-readout'])>
                    @startMarker('reactive', 'c4fa93f3', ['stateKey' => ['selectedSignal'], 'type' => 'if'])
                    @if($selectedSignal === 'blade')
                        <p @class([$__VIEW_ID__ . '-a6a5695c'])><strong @class([$__VIEW_ID__ . '-f0caada4'])>Server-first</strong><span @class([$__VIEW_ID__ . '-be381f48'])>HTML có nội dung ngay cả trước khi JavaScript khởi chạy.</span></p>
                    @elseif($selectedSignal === 'spa')
                        <p @class([$__VIEW_ID__ . '-b7a84ebe'])><strong @class([$__VIEW_ID__ . '-5cde38e9'])>Navigation-ready</strong><span @class([$__VIEW_ID__ . '-8f12d23b'])>Chỉ nhánh view thay đổi được cập nhật, layout dùng lại.</span></p>
                    @else
                        <p @class([$__VIEW_ID__ . '-67b613a4'])><strong @class([$__VIEW_ID__ . '-3ffa7209'])>Hydration-safe</strong><span @class([$__VIEW_ID__ . '-dd25ae50'])>State và event gắn vào DOM có sẵn, không nhân đôi listener.</span></p>
                    @endif
                    @endMarker('reactive', 'c4fa93f3')
                </div>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-8aa0772c', 'proof-strip'])>
            <p @class([$__VIEW_ID__ . '-35bf6e9d'])>NỀN TẢNG CHO ỨNG DỤNG THỰC TẾ</p>
            <div @class([$__VIEW_ID__ . '-7f8af112'])><strong @class([$__VIEW_ID__ . '-14b47dbd'])>01</strong><span @class([$__VIEW_ID__ . '-c67cd95a'])>Laravel routes</span></div>
            <div @class([$__VIEW_ID__ . '-9b976db3'])><strong @class([$__VIEW_ID__ . '-9aa2ffa8'])>02</strong><span @class([$__VIEW_ID__ . '-b5411efa'])>Blade fallback</span></div>
            <div @class([$__VIEW_ID__ . '-cfc01898'])><strong @class([$__VIEW_ID__ . '-ccc1deb9'])>03</strong><span @class([$__VIEW_ID__ . '-1edf95b4'])>Scoped assets</span></div>
            <div @class([$__VIEW_ID__ . '-f5acbbe8'])><strong @class([$__VIEW_ID__ . '-e0f722e3'])>04</strong><span @class([$__VIEW_ID__ . '-261e25b4'])>Reactive state</span></div>
        </section>

        <section @class([$__VIEW_ID__ . '-6c26f9b7', 'feature-section']) @attr(['id' => 'workflow'])>
            <div @class([$__VIEW_ID__ . '-ce6a96bf', 'section-heading'])>
                <p @class([$__VIEW_ID__ . '-5a71cd5f', 'eyebrow'])><span @class([$__VIEW_ID__ . '-f1acc65a'])>Workflow</span> Từ route đến tương tác</p>
                <h2 @class([$__VIEW_ID__ . '-98293aba'])>Một quy trình.<br @class([$__VIEW_ID__ . '-c006637c'])>Không có bước thừa.</h2>
            </div>
            <div @class([$__VIEW_ID__ . '-d44023e9', 'feature-list'])>
                <article @class([$__VIEW_ID__ . '-e3e123df'])><span @class([$__VIEW_ID__ . '-5cadfa06'])>01</span><h3 @class([$__VIEW_ID__ . '-6efb1915'])>Render một nguồn</h3><p @class([$__VIEW_ID__ . '-4a13b743'])>Cùng một file `.sao` sinh Blade phía server và view contract phía client.</p></article>
                <article @class([$__VIEW_ID__ . '-04b24ab0'])><span @class([$__VIEW_ID__ . '-2dd4b699'])>02</span><h3 @class([$__VIEW_ID__ . '-8d51d8aa'])>Hydrate DOM có sẵn</h3><p @class([$__VIEW_ID__ . '-53b76b5c'])>Element được đối chiếu theo ID ổn định; attributes và events được reconcile thay vì gắn chồng.</p></article>
                <article @class([$__VIEW_ID__ . '-ddf2d3a9'])><span @class([$__VIEW_ID__ . '-8d5d9746'])>03</span><h3 @class([$__VIEW_ID__ . '-ad421324'])>Reactive đúng phạm vi</h3><p @class([$__VIEW_ID__ . '-71463dd8'])>State chỉ cập nhật nhánh phụ thuộc, đồng thời cleanup resource khi view bị hủy.</p></article>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-4e212027', 'newsletter-panel'])>
            <div @class([$__VIEW_ID__ . '-1628defa'])><p @class([$__VIEW_ID__ . '-d621a64b', 'eyebrow'])><span @class([$__VIEW_ID__ . '-5f6b80a9'])>Release notes</span> Theo dõi Saola</p><h2 @class([$__VIEW_ID__ . '-6560bb1b'])>Nhận cập nhật.<br @class([$__VIEW_ID__ . '-c03b5dbb'])>Không nhận spam.</h2></div>
            <form @class([$__VIEW_ID__ . '-b8bd3cde', 'newsletter-form'])>
                @startMarker('reactive', '44cceece', ['stateKey' => ['joined'], 'type' => 'if'])
                @if($joined)
                    <div @class([$__VIEW_ID__ . '-50aeb2d9', 'success-note'])><span @class([$__VIEW_ID__ . '-a7eda2b2'])>✓</span><p @class([$__VIEW_ID__ . '-28dbecef'])><strong @class([$__VIEW_ID__ . '-61788545'])>Đã ghi nhận email.</strong><br @class([$__VIEW_ID__ . '-bd39f455'])>Saola chỉ gửi khi có bản phát hành đáng chú ý.</p></div>
                @else
                    <label @class([$__VIEW_ID__ . '-fb2898e9']) @attr(['for' => 'home-email'])>Email công việc</label>
                    <div @class([$__VIEW_ID__ . '-d05b19b3'])><input @class([$__VIEW_ID__ . '-8c996698']) @attr(['id' => 'home-email', 'type' => 'email', 'placeholder' => 'you@company.com', 'required' => true]) @bind($email)><button @class([$__VIEW_ID__ . '-8451212a']) @attr(['type' => 'submit'])>Join <span @class([$__VIEW_ID__ . '-6a9bfaef'])>→</span></button></div>
                    <small @class([$__VIEW_ID__ . '-d3584ffa'])>Chỉ có release notes và cập nhật kỹ thuật quan trọng.</small>
                @endif
                @endMarker('reactive', '44cceece')
            </form>
        </section>
    @endblock
