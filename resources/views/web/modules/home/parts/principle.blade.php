@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@wrapper
<section @class([$__VIEW_ID__ . '-e1', 'principle-showcase'])>
        <div @class([$__VIEW_ID__ . '-e11', 'principle-content'])>
            <p @class([$__VIEW_ID__ . '-e111', 'kicker'])><span @class([$__VIEW_ID__ . '-e1111'])>DESIGN PRINCIPLE</span> Triết lý thiết kế cốt lõi</p>
            <h2 @class([$__VIEW_ID__ . '-e112', 'principle-title'])>
                <span @class([$__VIEW_ID__ . '-e1121', 'line-1'])>Server là chân lý.</span>
                <span @class([$__VIEW_ID__ . '-e1122', 'line-2'])>Client là sự tiếp nối.</span>
            </h2>
            <div @class([$__VIEW_ID__ . '-e113', 'principle-desc'])>
                <p @class([$__VIEW_ID__ . '-e1131'])>Phản hồi đầu tiên từ server phải luôn hoàn chỉnh và mang đầy đủ nội dung. JavaScript không tồn tại để "cứu vãn" một trang web rỗng; nhiệm vụ của nó là tiếp nhận cấu trúc DOM đã được render và làm cho view đó trở nên sống động.</p>
                <a @class([$__VIEW_ID__ . '-e1132', 'button']) @attr(['href' => '/about'])>Vì sao Saola tồn tại <span @class([$__VIEW_ID__ . '-e11321'])>→</span></a>
            </div>
        </div>
    </section>
@endWrapper
