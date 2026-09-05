@addCssLink('/static/saola/stream.css')
@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@vars($backlog = [], $perConnection = 30)
@useState($events, $backlog)
@useState($connection, 'chưa nối')
@useState($live, true)
@useState($received, 0)
@useState($pending, 0)
@await
@extends($__layout__ . 'lab')

    @block('main')
        <p @class([$__VIEW_ID__ . '-Bmain1', 'kicker'])><span @class([$__VIEW_ID__ . '-Bmain11'])>ỨNG DỤNG THẬT · LUỒNG SỰ KIỆN</span></p>
        <h1 @class([$__VIEW_ID__ . '-Bmain2'])>Feed realtime qua SSE.</h1>
        <p @class([$__VIEW_ID__ . '-Bmain3', 'sv-lead'])>
            Server đẩy sự kiện bằng <code @class([$__VIEW_ID__ . '-Bmain31'])>text/event-stream</code>. Backlog dưới đây do
            Blade render nên trang có nội dung ngay cả khi tắt JS.
        </p>

        <div @class([$__VIEW_ID__ . '-Bmain4', 'sv-bar'])>
            <span @class([$__VIEW_ID__ . '-Bmain41', 'sv-dot', 'is-live'=> $connection === 'đang nhận'])></span>
            <span @class([$__VIEW_ID__ . '-Bmain42', 'sv-state'])>@startMarker('output', 'Bmain42o1'){{ $connection }}@endMarker('output', 'Bmain42o1')</span>
            <span @class([$__VIEW_ID__ . '-Bmain43', 'sv-count'])>@startMarker('output', 'Bmain43o1'){{ $received }}@endMarker('output', 'Bmain43o1') sự kiện đã nhận</span>
            <button @class([$__VIEW_ID__ . '-Bmain44', 'sv-btn']) @attr(['type' => 'button'])>
                @startMarker('output', 'Bmain44o1'){{ $live ? 'Tạm dừng' : 'Nối lại' }}@endMarker('output', 'Bmain44o1')
            </button>
        </div>

        @startMarker('reactive', 'Bmainr1', ['stateKey' => ['pending'], 'type' => 'if'])
        @if($pending > 0)
            <button @class([$__VIEW_ID__ . '-Bmainr1k11', 'sv-new']) @attr(['type' => 'button'])>
                @startMarker('output', 'Bmainr1k11o1'){{ $pending }}@endMarker('output', 'Bmainr1k11o1') sự kiện mới ↑
            </button>
        @endif
        @endMarker('reactive', 'Bmainr1')

        <ul @class([$__VIEW_ID__ . '-Bmain5', 'sv-feed']) @attr(['data-feed' => true])>
            @startMarker('reactive', 'Bmain5l1', ['stateKey' => ['events'], 'type' => 'foreach'])
            @foreach($events as $row)
                <li @class([$__VIEW_ID__ . "-Bmain5l11-{$row['id']}", 'sv-item', 'k-deploy'=> $row['kind'] === 'deploy', 'k-commit'=> $row['kind'] === 'commit', 'k-test'=> $row['kind'] === 'test', 'k-alert'=> $row['kind'] === 'alert', 'k-build'=> $row['kind'] === 'build'])>
                    <span @class([$__VIEW_ID__ . "-Bmain5l111-{$row['id']}", 'sv-tag'])>@startMarker('output', "Bmain5l111o1-{$row['id']}"){{ $row['label'] }}@endMarker('output', "Bmain5l111o1-{$row['id']}")</span>
                    <span @class([$__VIEW_ID__ . "-Bmain5l112-{$row['id']}", 'sv-text'])><strong @class([$__VIEW_ID__ . "-Bmain5l1121-{$row['id']}"])>@startMarker('output', "Bmain5l1121o1-{$row['id']}"){{ $row['actor'] }}@endMarker('output', "Bmain5l1121o1-{$row['id']}")</strong> @startMarker('output', "Bmain5l112o1-{$row['id']}"){{ $row['text'] }}@endMarker('output', "Bmain5l112o1-{$row['id']}")</span>
                    <span @class([$__VIEW_ID__ . "-Bmain5l113-{$row['id']}", 'sv-time'])>@startMarker('output', "Bmain5l113o1-{$row['id']}"){{ $row['at'] }}@endMarker('output', "Bmain5l113o1-{$row['id']}")</span>
                </li>
            @endforeach
            @endMarker('reactive', 'Bmain5l1')
        </ul>
    @endblock

    @block('aside')
        <h2 @class([$__VIEW_ID__ . '-Baside1'])>Trang này kiểm chứng cái gì.</h2>
        <ul @class([$__VIEW_ID__ . '-Baside2', 'check-list'])>
            <li @class([$__VIEW_ID__ . '-Baside21'])>Danh sách <strong @class([$__VIEW_ID__ . '-Baside211'])>chỉ thêm vào đầu</strong> và cắt đuôi. Khoá là <code @class([$__VIEW_ID__ . '-Baside212'])>id</code> tăng dần nên runtime chèn đúng một node thay vì dựng lại cả danh sách.</li>
            <li @class([$__VIEW_ID__ . '-Baside22'])>Kết nối sống phải đóng trong <code @class([$__VIEW_ID__ . '-Baside221'])>destroyed()</code>. Không đóng thì mỗi lượt điều hướng SPA vào lại trang là thêm một EventSource nữa.</li>
            <li @class([$__VIEW_ID__ . '-Baside23'])>Stream <strong @class([$__VIEW_ID__ . '-Baside231'])>có giới hạn @startMarker('output', 'Baside231o1'){{ $perConnection }}@endMarker('output', 'Baside231o1') sự kiện</strong> rồi tự đóng, để <code @class([$__VIEW_ID__ . '-Baside232'])>EventSource</code> nối lại. Server dev chạy <code @class([$__VIEW_ID__ . '-Baside233'])>php -S</code> với 4 worker, nên một kết nối giữ mãi ăn đứt 25% năng lực.</li>
            <li @class([$__VIEW_ID__ . '-Baside24'])><code @class([$__VIEW_ID__ . '-Baside241'])>Last-Event-ID</code> gửi kèm khi nối lại, nên dải sự kiện liền mạch chứ không nhảy số.</li>
            <li @class([$__VIEW_ID__ . '-Baside25'])>Đang cuộn xuống dưới thì sự kiện mới KHÔNG kéo trang — chỉ hiện nút “N sự kiện mới”. Feed tự nhảy khi đang đọc là lỗi khó chịu nhất của loại giao diện này.</li>
        </ul>
    @endblock
