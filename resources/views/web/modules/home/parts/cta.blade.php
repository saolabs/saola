@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@wrapper
<div @class([$__VIEW_ID__ . '-e1', 'cta-wrapper', 'home-section--fog'])>
        <section @class([$__VIEW_ID__ . '-e11', 'start-cta'])>
            <div @class([$__VIEW_ID__ . '-e111'])>
                <p @class([$__VIEW_ID__ . '-e1111', 'kicker'])><span @class([$__VIEW_ID__ . '-e11111'])>BẮT ĐẦU</span> Không cần tin, cứ mở ra xem</p>
                <h2 @class([$__VIEW_ID__ . '-e1112'])>Tài liệu đầy đủ và<br @class([$__VIEW_ID__ . '-e11121'])>component đang chạy thật.</h2>
            </div>
            <div @class([$__VIEW_ID__ . '-e112', 'hero-actions'])>
                <a @class([$__VIEW_ID__ . '-e1121', 'button', 'button-light']) @attr(['href' => '/docs/getting-started'])>Bắt đầu trong 4 bước <span @class([$__VIEW_ID__ . '-e11211'])>↗</span></a>
                <a @class([$__VIEW_ID__ . '-e1122', 'button', 'button-light']) @attr(['href' => '/components'])>Xem component <span @class([$__VIEW_ID__ . '-e11221'])>↗</span></a>
            </div>
        </section>
    </div>
@endWrapper
