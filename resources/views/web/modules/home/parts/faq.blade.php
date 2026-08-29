@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($openFaq, 0)
@wrapper
<section @class([$__VIEW_ID__ . '-e1', 'faq-grid', 'home-section--fog']) @attr(['id' => 'faq'])>
        <div @class([$__VIEW_ID__ . '-e11', 'section-head'])>
            <p @class([$__VIEW_ID__ . '-e111', 'kicker'])><span @class([$__VIEW_ID__ . '-e1111'])>FAQ</span> Hỏi đáp nhanh</p>
            <h2 @class([$__VIEW_ID__ . '-e112'])>Những câu hỏi thường gặp nhất.</h2>
        </div>
        <div @class([$__VIEW_ID__ . '-e12', 'value-accordion'])>
            <article @class([$__VIEW_ID__ . '-e121', 'value-item', 'open'=> $openFaq === 0])>
                <button @class([$__VIEW_ID__ . '-e1211'])><span @class([$__VIEW_ID__ . '-e12111'])>01</span><strong @class([$__VIEW_ID__ . '-e12112'])>Saola có thay thế Laravel không?</strong><i @class([$__VIEW_ID__ . '-e12113'])>+</i></button>
                @startMarker('reactive', 'e121r1', ['stateKey' => ['openFaq'], 'type' => 'if'])
                @if($openFaq === 0)
                    <p @class([$__VIEW_ID__ . '-e121r1k11'])>Không. Saola coi Laravel là nền tảng vững chắc. Eloquent, middleware, policy, queue vẫn giữ nguyên. Saola mang đến hai cải tiến: cách tổ chức mã nguồn (module tự động khai báo, context phân tách môi trường) và cơ chế View (một file <code @class([$__VIEW_ID__ . '-e121r1k111'])>.sao</code> sinh mã cho cả Server và Client, biến trang web thành SPA sau lần tải đầu tiên).</p>
                @endif
                @endMarker('reactive', 'e121r1')
            </article>
            <article @class([$__VIEW_ID__ . '-e122', 'value-item', 'open'=> $openFaq === 1])>
                <button @class([$__VIEW_ID__ . '-e1221'])><span @class([$__VIEW_ID__ . '-e12211'])>02</span><strong @class([$__VIEW_ID__ . '-e12212'])>Tôi có phải bỏ các file Blade hiện có không?</strong><i @class([$__VIEW_ID__ . '-e12213'])>+</i></button>
                @startMarker('reactive', 'e122r1', ['stateKey' => ['openFaq'], 'type' => 'if'])
                @if($openFaq === 1)
                    <p @class([$__VIEW_ID__ . '-e122r1k11'])>Không. Khi biên dịch, đầu ra phía server của file <code @class([$__VIEW_ID__ . '-e122r1k111'])>.sao</code> chính là một file Blade template, có thể cùng tồn tại với các view cũ. Bạn có thể chuyển đổi dần từng trang mà không cần đập đi xây lại toàn bộ hệ thống.</p>
                @endif
                @endMarker('reactive', 'e122r1')
            </article>

            <article @class([$__VIEW_ID__ . '-e123', 'value-item', 'open'=> $openFaq === 2])>
                <button @class([$__VIEW_ID__ . '-e1231'])><span @class([$__VIEW_ID__ . '-e12311'])>03</span><strong @class([$__VIEW_ID__ . '-e12312'])>Đã rành Blade thì học Saola mất bao lâu?</strong><i @class([$__VIEW_ID__ . '-e12313'])>+</i></button>
                @startMarker('reactive', 'e123r1', ['stateKey' => ['openFaq'], 'type' => 'if'])
                @if($openFaq === 2)
                    <p @class([$__VIEW_ID__ . '-e123r1k11'])>Cú pháp Saola giữ nguyên hình dạng directive quen thuộc của Blade, nên bạn gần như có thể đọc hiểu ngay lập tức. Điều duy nhất cần nắm thêm là cách khai báo state ở đầu file, các hàm setter tự sinh, và ranh giới giữa giá trị phản ứng (reactive) với giá trị tĩnh.</p>
                @endif
                @endMarker('reactive', 'e123r1')
            </article>
        </div>
    </section>
@endWrapper
