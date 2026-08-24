@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($openFaq, 0)
@wrapper
<section @class([$__VIEW_ID__ . '-bbcd3398', 'faq-grid']) @attr(['id' => 'faq'])>
        <div @class([$__VIEW_ID__ . '-88b70a58', 'section-head'])>
            <p @class([$__VIEW_ID__ . '-e444cc57', 'kicker'])><span @class([$__VIEW_ID__ . '-3d2849a4'])>FAQ</span> Hỏi nhanh</p>
            <h2 @class([$__VIEW_ID__ . '-ed9d4c8f'])>Sáu câu hỏi hay gặp nhất.</h2>
        </div>
        <div @class([$__VIEW_ID__ . '-b545b1d4', 'value-accordion'])>
            <article @class([$__VIEW_ID__ . '-9575d036', 'value-item', 'open'=> $openFaq === 0])>
                <button @class([$__VIEW_ID__ . '-1bc8977d'])><span @class([$__VIEW_ID__ . '-4da627c8'])>01</span><strong @class([$__VIEW_ID__ . '-6cf9e65e'])>Saola có thay thế Laravel không?</strong><i @class([$__VIEW_ID__ . '-4b3780d1'])>+</i></button>
                @startMarker('reactive', 'c198301d', ['stateKey' => ['openFaq'], 'type' => 'if'])
                @if($openFaq === 0)
                    <p @class([$__VIEW_ID__ . '-312596ee'])>Không. Saola là lớp view và runtime chạy trên Laravel. Route, middleware, policy, Eloquent, queue và toàn bộ hệ sinh thái Laravel giữ nguyên. Cái Saola thay là cách bạn viết tầng view và cách trang đó sống tiếp sau khi tải xong.</p>
                @endif
                @endMarker('reactive', 'c198301d')
            </article>
            <article @class([$__VIEW_ID__ . '-f21a86b1', 'value-item', 'open'=> $openFaq === 1])>
                <button @class([$__VIEW_ID__ . '-f087df74'])><span @class([$__VIEW_ID__ . '-5e74edef'])>02</span><strong @class([$__VIEW_ID__ . '-ef45b241'])>Tôi có phải bỏ Blade đang có không?</strong><i @class([$__VIEW_ID__ . '-989b4085'])>+</i></button>
                @startMarker('reactive', '0b397819', ['stateKey' => ['openFaq'], 'type' => 'if'])
                @if($openFaq === 1)
                    <p @class([$__VIEW_ID__ . '-f288a437'])>Không. Đầu ra phía server của một file <code @class([$__VIEW_ID__ . '-8d27c83f'])>.sao</code> chính là Blade template, nằm cùng chỗ với view Blade bạn đang có. Bạn chuyển dần từng trang, không cần viết lại cả ứng dụng trong một lần.</p>
                @endif
                @endMarker('reactive', '0b397819')
            </article>

            <article @class([$__VIEW_ID__ . '-d292e066', 'value-item', 'open'=> $openFaq === 5])>
                <button @class([$__VIEW_ID__ . '-2eb01ab6'])><span @class([$__VIEW_ID__ . '-d2321221'])>06</span><strong @class([$__VIEW_ID__ . '-637f1eb9'])>Đã biết Blade thì học mất bao lâu?</strong><i @class([$__VIEW_ID__ . '-51cf42cd'])>+</i></button>
                @startMarker('reactive', '90cc5571', ['stateKey' => ['openFaq'], 'type' => 'if'])
                @if($openFaq === 5)
                    <p @class([$__VIEW_ID__ . '-ee5672a5'])>Cú pháp giữ hình dạng directive quen thuộc của Blade, nên phần điều khiển luồng gần như đọc được ngay. Cái mới cần nắm là ba thứ: state khai báo ở đầu file, setter sinh tự động, và ranh giới giữa giá trị reactive với giá trị tính một lần.</p>
                @endif
                @endMarker('reactive', '90cc5571')
            </article>
        </div>
    </section>
@endWrapper
