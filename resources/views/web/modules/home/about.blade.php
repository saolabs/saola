@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($activeValue, 0)
@extends($__layout__ . "public")
    @block('content')
        <section @class([$__VIEW_ID__ . '-b4052a35', 'page-intro', 'page-intro-split'])>
            <div @class([$__VIEW_ID__ . '-90a6e493'])><p @class([$__VIEW_ID__ . '-f515bf66', 'eyebrow'])><span @class([$__VIEW_ID__ . '-e2f86203'])>PROJECT / SAOLA</span> Vì sao dự án tồn tại</p><h1 @class([$__VIEW_ID__ . '-9b0938cb'])>Web hiện đại không nên<br @class([$__VIEW_ID__ . '-f7127348'])><em @class([$__VIEW_ID__ . '-d4f4199d'])>đòi hai hệ thống.</em></h1></div>
            <p @class([$__VIEW_ID__ . '-9f45c023'])>Saola bắt đầu từ một câu hỏi thực dụng: làm sao giữ độ tin cậy và năng suất của Laravel, nhưng vẫn tạo được trải nghiệm ứng dụng nhanh, liên tục và có lifecycle rõ ràng?</p>
        </section>

        <section @class([$__VIEW_ID__ . '-8aa0772c', 'manifesto-grid'])>
            <div @class([$__VIEW_ID__ . '-301a68fc', 'manifesto-number'])>01—04 / PRINCIPLES</div>
            <div @class([$__VIEW_ID__ . '-7f8af112', 'value-accordion'])>
                <article @class([$__VIEW_ID__ . '-1f6b5560', 'value-item', 'open'=> $activeValue === 0])>
                    <button @class([$__VIEW_ID__ . '-ff5e7d64'])><span @class([$__VIEW_ID__ . '-87b2c1c6'])>01</span><strong @class([$__VIEW_ID__ . '-772aefab'])>Một nguồn là điều kiện, không phải khẩu hiệu</strong><i @class([$__VIEW_ID__ . '-83d2d00c'])>+</i></button>
                    @startMarker('reactive', '787d96d6', ['stateKey' => ['activeValue'], 'type' => 'if'])
                    @if($activeValue === 0)
                        <p @class([$__VIEW_ID__ . '-5bd50f04'])>Nếu Blade và JavaScript được viết riêng, chúng sẽ lệch nhau. Saola đặt compiler và AST ở giữa để structure, directive, children và marker được sinh từ cùng một view.</p>
                    @endif
                    @endMarker('reactive', '787d96d6')
                </article>
                <article @class([$__VIEW_ID__ . '-e6209cd3', 'value-item', 'open'=> $activeValue === 1])>
                    <button @class([$__VIEW_ID__ . '-d9283f12'])><span @class([$__VIEW_ID__ . '-6a26ad34'])>02</span><strong @class([$__VIEW_ID__ . '-54e0b6eb'])>Server phải hoàn thành trách nhiệm trước</strong><i @class([$__VIEW_ID__ . '-b0246e5b'])>+</i></button>
                    @startMarker('reactive', '9eb9af90', ['stateKey' => ['activeValue'], 'type' => 'if'])
                    @if($activeValue === 1)
                        <p @class([$__VIEW_ID__ . '-4606aa95'])>Phản hồi đầu tiên phải có nội dung, có cấu trúc và hoạt động như một tài liệu web. Hydration nâng cấp nó thành ứng dụng; hydration không che giấu một server response rỗng.</p>
                    @endif
                    @endMarker('reactive', '9eb9af90')
                </article>
                <article @class([$__VIEW_ID__ . '-d548dd48', 'value-item', 'open'=> $activeValue === 2])>
                    <button @class([$__VIEW_ID__ . '-237c0a46'])><span @class([$__VIEW_ID__ . '-a953a291'])>03</span><strong @class([$__VIEW_ID__ . '-cbd31918'])>Lifecycle phải nhìn thấy được</strong><i @class([$__VIEW_ID__ . '-ee477f05'])>+</i></button>
                    @startMarker('reactive', '6376662d', ['stateKey' => ['activeValue'], 'type' => 'if'])
                    @if($activeValue === 2)
                        <p @class([$__VIEW_ID__ . '-bcf58435'])>Mount, active, pause, resume và destroy là những trạng thái có contract. Event, subscription, async resource và cache phải đi theo owner của chúng.</p>
                    @endif
                    @endMarker('reactive', '6376662d')
                </article>
                <article @class([$__VIEW_ID__ . '-641beadb', 'value-item', 'open'=> $activeValue === 3])>
                    <button @class([$__VIEW_ID__ . '-f655ded1'])><span @class([$__VIEW_ID__ . '-3d9a38c6'])>04</span><strong @class([$__VIEW_ID__ . '-aa413e39'])>Đa nền tảng bắt đầu từ context đúng</strong><i @class([$__VIEW_ID__ . '-51937053'])>+</i></button>
                    @startMarker('reactive', 'ef215791', ['stateKey' => ['activeValue'], 'type' => 'if'])
                    @if($activeValue === 3)
                        <p @class([$__VIEW_ID__ . '-edf80019'])>Web, admin và mobile có thể dùng route map và registry riêng. Context được resolve theo request để worker dài hạn như Octane không làm rò trạng thái giữa người dùng.</p>
                    @endif
                    @endMarker('reactive', 'ef215791')
                </article>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-6c26f9b7', 'quote-panel'])><p @class([$__VIEW_ID__ . '-d2bc3963'])>“Framework đáng tin khi hành vi runtime khớp với cấu trúc mà lập trình viên nhìn thấy trong source.”</p><span @class([$__VIEW_ID__ . '-b19e2c09'])>SAOLA DESIGN PRINCIPLE / 2026</span></section>
        <section @class([$__VIEW_ID__ . '-4e212027', 'closing-cta'])><h2 @class([$__VIEW_ID__ . '-8ef866a8'])>Xem các nguyên tắc này chạy trên một route thật.</h2><a @class([$__VIEW_ID__ . '-8f1c0163', 'button', 'button-primary']) @attr(['href' => '/todo-list'])>Mở interactive demo <span @class([$__VIEW_ID__ . '-4f37196e'])>↗</span></a></section>
    @endblock
