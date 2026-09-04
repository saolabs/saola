@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($counter, 0)
@useState($note, '')
@useState($events, [])
@extends($__layout__ . 'lab')

    @block('main')
        <p @class([$__VIEW_ID__ . '-Bmain1', 'kicker'])><span @class([$__VIEW_ID__ . '-Bmain11'])>RUNTIME · VÒNG ĐỜI</span></p>
        <h1 @class([$__VIEW_ID__ . '-Bmain2'])>Vòng đời và PageCache.</h1>
        <p @class([$__VIEW_ID__ . '-Bmain3', 'lab-lead'])>
            <code @class([$__VIEW_ID__ . '-Bmain31'])>ViewController</code> là một state machine: <code @class([$__VIEW_ID__ . '-Bmain32'])>created → active ⇄ paused → destroyed</code>.
            Trang này ghi lại từng hook khi nó bắn ra, và giữ state qua điều hướng
            back/forward để bạn thấy PageCache làm gì.
        </p>

        <div @class([$__VIEW_ID__ . '-Bmain4', 'lab-counter'])>
            <button @class([$__VIEW_ID__ . '-Bmain41', 'button'])>−</button>
            <strong @class([$__VIEW_ID__ . '-Bmain42'])>@startMarker('output', 'Bmain42o1'){{ $counter }}@endMarker('output', 'Bmain42o1')</strong>
            <button @class([$__VIEW_ID__ . '-Bmain43', 'button'])>+</button>
        </div>

        <label @class([$__VIEW_ID__ . '-Bmain5', 'lab-field'])>
            <span @class([$__VIEW_ID__ . '-Bmain51'])>Ghi chú (giữ qua pause/resume)</span>
            <input @class([$__VIEW_ID__ . '-Bmain52']) @attr(['type' => 'text', 'placeholder' => 'Gõ gì đó rồi bấm Rời trang']) @bind($note)>
        </label>

        <div @class([$__VIEW_ID__ . '-Bmain6', 'lab-toolbar'])>
            <a @class([$__VIEW_ID__ . '-Bmain61', 'button', 'button-primary']) @attr(['href' => '/demo/foreach'])>Rời trang (sang Danh sách)</a>
            <button @class([$__VIEW_ID__ . '-Bmain62', 'button'])>Quay lại bằng history.back()</button>
        </div>

        <p @class([$__VIEW_ID__ . '-Bmain7', 'lab-note'])>
            Đổi bộ đếm và gõ ghi chú, rời trang, rồi bấm <em @class([$__VIEW_ID__ . '-Bmain71'])>Back</em> của trình duyệt.
            Điều hướng <code @class([$__VIEW_ID__ . '-Bmain72'])>pop</code> mà PageCache còn entry thì view được
            <code @class([$__VIEW_ID__ . '-Bmain73'])>resume</code> — DOM gắn lại, state còn nguyên, không render lại và
            không gọi API.
        </p>

        <h2 @class([$__VIEW_ID__ . '-Bmain8'])>Hook đã bắn</h2>
        {{-- @forelse chưa được compiler cài (xem /docs/status) — dùng @foreach. --}}
        <ol @class([$__VIEW_ID__ . '-Bmain9', 'lab-log'])>
            @startMarker('reactive', 'Bmain9l1', ['stateKey' => ['events'], 'type' => 'foreach'])
            @foreach($events as $entry)
                <li @class([$__VIEW_ID__ . "-Bmain9l11-{$loop->index}"])>@startMarker('output', "Bmain9l11o1-{$loop->index}"){{ $entry }}@endMarker('output', "Bmain9l11o1-{$loop->index}")</li>
            @endforeach
            @endMarker('reactive', 'Bmain9l1')
            <li @class([$__VIEW_ID__ . '-Bmain91', 'is-muted', 'is-hidden'=> count($events) !== 0])>Chưa có hook nào được ghi.</li>
        </ol>
    @endblock

    @block('aside')
        <h2 @class([$__VIEW_ID__ . '-Baside1'])>Bảy chuyển trạng thái.</h2>
        <div @class([$__VIEW_ID__ . '-Baside2', 'directive-table'])>
            <div @class([$__VIEW_ID__ . '-Baside21'])><div @class([$__VIEW_ID__ . '-Baside211', 'dt-key'])><code @class([$__VIEW_ID__ . '-Baside2111'])>mounting · mounted</code></div><span @class([$__VIEW_ID__ . '-Baside212'])>DOM gắn vào tài liệu thật</span><b @class([$__VIEW_ID__ . '-Baside213'])>mount</b></div>
            <div @class([$__VIEW_ID__ . '-Baside22'])><div @class([$__VIEW_ID__ . '-Baside221', 'dt-key'])><code @class([$__VIEW_ID__ . '-Baside2211'])>starting · started</code></div><span @class([$__VIEW_ID__ . '-Baside222'])>Subscribe reactive và gắn event</span><b @class([$__VIEW_ID__ . '-Baside223'])>start</b></div>
            <div @class([$__VIEW_ID__ . '-Baside23'])><div @class([$__VIEW_ID__ . '-Baside231', 'dt-key'])><code @class([$__VIEW_ID__ . '-Baside2311'])>pausing · paused</code></div><span @class([$__VIEW_ID__ . '-Baside232'])>Rời DOM vào PageCache; state ghi dirty</span><b @class([$__VIEW_ID__ . '-Baside233'])>pause</b></div>
            <div @class([$__VIEW_ID__ . '-Baside24'])><div @class([$__VIEW_ID__ . '-Baside241', 'dt-key'])><code @class([$__VIEW_ID__ . '-Baside2411'])>resuming · resumed</code></div><span @class([$__VIEW_ID__ . '-Baside242'])>Quay lại từ PageCache; flush dirty</span><b @class([$__VIEW_ID__ . '-Baside243'])>resume</b></div>
            <div @class([$__VIEW_ID__ . '-Baside25'])><div @class([$__VIEW_ID__ . '-Baside251', 'dt-key'])><code @class([$__VIEW_ID__ . '-Baside2511'])>stopping · stopped</code></div><span @class([$__VIEW_ID__ . '-Baside252'])>Huỷ subscribe, DOM vẫn còn</span><b @class([$__VIEW_ID__ . '-Baside253'])>stop</b></div>
            <div @class([$__VIEW_ID__ . '-Baside26'])><div @class([$__VIEW_ID__ . '-Baside261', 'dt-key'])><code @class([$__VIEW_ID__ . '-Baside2611'])>unmounting · unmounted</code></div><span @class([$__VIEW_ID__ . '-Baside262'])>Gỡ DOM, release asset theo ref-count</span><b @class([$__VIEW_ID__ . '-Baside263'])>unmount</b></div>
            <div @class([$__VIEW_ID__ . '-Baside27'])><div @class([$__VIEW_ID__ . '-Baside271', 'dt-key'])><code @class([$__VIEW_ID__ . '-Baside2711'])>destroying · destroyed</code></div><span @class([$__VIEW_ID__ . '-Baside272'])>Dọn hết, destroy con theo thứ tự ngược</span><b @class([$__VIEW_ID__ . '-Baside273'])>destroy</b></div>
        </div>
        <p @class([$__VIEW_ID__ . '-Baside3', 'lab-note'])>
            Nhật ký ở trên chỉ giữ được các hook xảy ra <em @class([$__VIEW_ID__ . '-Baside31'])>trong khi view còn sống</em>.
            <code @class([$__VIEW_ID__ . '-Baside32'])>destroyed</code> không bao giờ hiện ra vì lúc nó chạy thì DOM đã đi rồi —
            muốn thấy nó thì mở console.
        </p>
    @endblock
