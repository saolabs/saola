@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($activeValue, 0)
@extends($__layout__ . "public")
    @block('content')
        <section @class([$__VIEW_ID__ . '-Bcontent1', 'page-intro', 'page-intro-split'])>
            <div @class([$__VIEW_ID__ . '-Bcontent11'])><p @class([$__VIEW_ID__ . '-Bcontent111', 'eyebrow'])><span @class([$__VIEW_ID__ . '-Bcontent1111'])>PROJECT / SAOLA</span> Vì sao dự án tồn tại</p><h1 @class([$__VIEW_ID__ . '-Bcontent112'])>Web hiện đại không nên<br @class([$__VIEW_ID__ . '-Bcontent1121'])><em @class([$__VIEW_ID__ . '-Bcontent1122'])>đòi hai hệ thống.</em></h1></div>
            <p @class([$__VIEW_ID__ . '-Bcontent12'])>Saola bắt đầu từ một câu hỏi thực dụng: làm sao giữ độ tin cậy và năng suất của Laravel, nhưng vẫn tạo được trải nghiệm ứng dụng nhanh, liên tục và có lifecycle rõ ràng?</p>
        </section>

        <section @class([$__VIEW_ID__ . '-Bcontent2', 'manifesto-grid'])>
            <div @class([$__VIEW_ID__ . '-Bcontent21', 'manifesto-number'])>01—04 / PRINCIPLES</div>
            <div @class([$__VIEW_ID__ . '-Bcontent22', 'value-accordion'])>
                <article @class([$__VIEW_ID__ . '-Bcontent221', 'value-item', 'open'=> $activeValue === 0])>
                    <button @class([$__VIEW_ID__ . '-Bcontent2211'])><span @class([$__VIEW_ID__ . '-Bcontent22111'])>01</span><strong @class([$__VIEW_ID__ . '-Bcontent22112'])>Một nguồn là điều kiện, không phải khẩu hiệu</strong><i @class([$__VIEW_ID__ . '-Bcontent22113'])>+</i></button>
                    @startMarker('reactive', 'Bcontent221r1', ['stateKey' => ['activeValue'], 'type' => 'if'])
                    @if($activeValue === 0)
                        <p @class([$__VIEW_ID__ . '-Bcontent221r1k11'])>Nếu Blade và JavaScript được viết riêng, chúng sẽ lệch nhau. Saola đặt compiler và AST ở giữa để structure, directive, children và marker được sinh từ cùng một view.</p>
                    @endif
                    @endMarker('reactive', 'Bcontent221r1')
                </article>
                <article @class([$__VIEW_ID__ . '-Bcontent222', 'value-item', 'open'=> $activeValue === 1])>
                    <button @class([$__VIEW_ID__ . '-Bcontent2221'])><span @class([$__VIEW_ID__ . '-Bcontent22211'])>02</span><strong @class([$__VIEW_ID__ . '-Bcontent22212'])>Server phải hoàn thành trách nhiệm trước</strong><i @class([$__VIEW_ID__ . '-Bcontent22213'])>+</i></button>
                    @startMarker('reactive', 'Bcontent222r1', ['stateKey' => ['activeValue'], 'type' => 'if'])
                    @if($activeValue === 1)
                        <p @class([$__VIEW_ID__ . '-Bcontent222r1k11'])>Phản hồi đầu tiên phải có nội dung, có cấu trúc và hoạt động như một tài liệu web. Hydration nâng cấp nó thành ứng dụng; hydration không che giấu một server response rỗng.</p>
                    @endif
                    @endMarker('reactive', 'Bcontent222r1')
                </article>
                <article @class([$__VIEW_ID__ . '-Bcontent223', 'value-item', 'open'=> $activeValue === 2])>
                    <button @class([$__VIEW_ID__ . '-Bcontent2231'])><span @class([$__VIEW_ID__ . '-Bcontent22311'])>03</span><strong @class([$__VIEW_ID__ . '-Bcontent22312'])>Lifecycle phải nhìn thấy được</strong><i @class([$__VIEW_ID__ . '-Bcontent22313'])>+</i></button>
                    @startMarker('reactive', 'Bcontent223r1', ['stateKey' => ['activeValue'], 'type' => 'if'])
                    @if($activeValue === 2)
                        <p @class([$__VIEW_ID__ . '-Bcontent223r1k11'])>Mount, active, pause, resume và destroy là những trạng thái có contract. Event, subscription, async resource và cache phải đi theo owner của chúng.</p>
                    @endif
                    @endMarker('reactive', 'Bcontent223r1')
                </article>
                <article @class([$__VIEW_ID__ . '-Bcontent224', 'value-item', 'open'=> $activeValue === 3])>
                    <button @class([$__VIEW_ID__ . '-Bcontent2241'])><span @class([$__VIEW_ID__ . '-Bcontent22411'])>04</span><strong @class([$__VIEW_ID__ . '-Bcontent22412'])>Đa nền tảng bắt đầu từ context đúng</strong><i @class([$__VIEW_ID__ . '-Bcontent22413'])>+</i></button>
                    @startMarker('reactive', 'Bcontent224r1', ['stateKey' => ['activeValue'], 'type' => 'if'])
                    @if($activeValue === 3)
                        <p @class([$__VIEW_ID__ . '-Bcontent224r1k11'])>Web, admin và mobile có thể dùng route map và registry riêng. Context được resolve theo request để worker dài hạn như Octane không làm rò trạng thái giữa người dùng.</p>
                    @endif
                    @endMarker('reactive', 'Bcontent224r1')
                </article>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-Bcontent3', 'quote-panel'])><p @class([$__VIEW_ID__ . '-Bcontent31'])>“Framework đáng tin khi hành vi runtime khớp với cấu trúc mà lập trình viên nhìn thấy trong source.”</p><span @class([$__VIEW_ID__ . '-Bcontent32'])>SAOLA DESIGN PRINCIPLE / 2026</span></section>
        <section @class([$__VIEW_ID__ . '-Bcontent4', 'closing-cta'])><h2 @class([$__VIEW_ID__ . '-Bcontent41'])>Xem các nguyên tắc này chạy trên một route thật.</h2><a @class([$__VIEW_ID__ . '-Bcontent42', 'button', 'button-primary']) @attr(['href' => '/todo-list'])>Mở interactive demo <span @class([$__VIEW_ID__ . '-Bcontent421'])>↗</span></a></section>
    @endblock
