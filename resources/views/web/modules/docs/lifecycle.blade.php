@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-ff96f7a7', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-15b892a7'])>
                <p @class([$__VIEW_ID__ . '-ab74559e', 'kicker'])><span @class([$__VIEW_ID__ . '-943e8228'])>06</span> RUNTIME</p>
                <h1 @class([$__VIEW_ID__ . '-9abe25a3'])>Vòng đời và marker.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-f750a15d', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-2a968179'])>ViewController là một state machine bảy chuyển trạng thái. Marker comment là hợp đồng để client nhận lại DOM server đã render thay vì dựng lại từ đầu.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-e5195f55', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-a805c5cb', 'kicker'])><span @class([$__VIEW_ID__ . '-a3f20685'])>LIFECYCLE</span> Trạng thái quan sát được</p>
            <h2 @class([$__VIEW_ID__ . '-c048d2ef'])>Bảy chuyển trạng thái, mỗi cái một cặp hook.</h2>
            <p @class([$__VIEW_ID__ . '-1c642396'])>ViewController là một state machine: <code @class([$__VIEW_ID__ . '-34be1ee8'])>created → active ⇄ paused → destroyed</code>. Mỗi chuyển trạng thái bắn ra một cặp hook trước và sau, khai báo thẳng trong <code @class([$__VIEW_ID__ . '-f254a2ba'])>&lt;script setup&gt;</code>.</p>
            <div @class([$__VIEW_ID__ . '-753dcd15', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-9de53a5a'])><div @class([$__VIEW_ID__ . '-565197a0', 'dt-key'])><code @class([$__VIEW_ID__ . '-f8ca00ca'])>mounting · mounted</code></div><span @class([$__VIEW_ID__ . '-082faf6b'])>DOM gắn vào tài liệu thật, style và script của view được acquire</span><b @class([$__VIEW_ID__ . '-8117b870'])>mount</b></div>
                <div @class([$__VIEW_ID__ . '-c8e71cd3'])><div @class([$__VIEW_ID__ . '-43777599', 'dt-key'])><code @class([$__VIEW_ID__ . '-ac254d87'])>starting · started</code></div><span @class([$__VIEW_ID__ . '-9467ba30'])>Subscribe reactive và gắn event; chạy sau render và commit data</span><b @class([$__VIEW_ID__ . '-47abd5ae'])>start</b></div>
                <div @class([$__VIEW_ID__ . '-e88f763e'])><div @class([$__VIEW_ID__ . '-a6515611', 'dt-key'])><code @class([$__VIEW_ID__ . '-a810d411'])>pausing · paused</code></div><span @class([$__VIEW_ID__ . '-eaef3113'])>Rời DOM để vào PageCache; state chuyển sang chế độ ghi dirty</span><b @class([$__VIEW_ID__ . '-4a54cc8d'])>pause</b></div>
                <div @class([$__VIEW_ID__ . '-094adcdf'])><div @class([$__VIEW_ID__ . '-1a29d412', 'dt-key'])><code @class([$__VIEW_ID__ . '-8a43b879'])>resuming · resumed</code></div><span @class([$__VIEW_ID__ . '-59ce3274'])>Quay lại từ PageCache; flush dirty rồi gắn lại DOM</span><b @class([$__VIEW_ID__ . '-3c958ed6'])>resume</b></div>
                <div @class([$__VIEW_ID__ . '-107c1236'])><div @class([$__VIEW_ID__ . '-ce5a01f4', 'dt-key'])><code @class([$__VIEW_ID__ . '-f325eaba'])>stopping · stopped</code></div><span @class([$__VIEW_ID__ . '-e87f95f3'])>Huỷ subscribe, DOM vẫn còn nguyên</span><b @class([$__VIEW_ID__ . '-5d6b940a'])>stop</b></div>
                <div @class([$__VIEW_ID__ . '-9bd93313'])><div @class([$__VIEW_ID__ . '-216126f0', 'dt-key'])><code @class([$__VIEW_ID__ . '-f7fcf92c'])>unmounting · unmounted</code></div><span @class([$__VIEW_ID__ . '-c512c480'])>Gỡ DOM khỏi tài liệu, release asset theo ref-count</span><b @class([$__VIEW_ID__ . '-86a3fdfd'])>unmount</b></div>
                <div @class([$__VIEW_ID__ . '-26af8a4f'])><div @class([$__VIEW_ID__ . '-6e702ff2', 'dt-key'])><code @class([$__VIEW_ID__ . '-b2ed6d4a'])>destroying · destroyed</code></div><span @class([$__VIEW_ID__ . '-fcd984ca'])>Dọn toàn bộ: abort event, huỷ subscription, destroy con theo thứ tự ngược</span><b @class([$__VIEW_ID__ . '-1c68e2d8'])>destroy</b></div>
            </div>
            <div @class([$__VIEW_ID__ . '-dae15694', 'ov-note'])>
                Alias tương thích bản cũ vẫn chạy: <code @class([$__VIEW_ID__ . '-3c40d554'])>onMounted</code> ≈ <code @class([$__VIEW_ID__ . '-7e4fc105'])>started</code>, <code @class([$__VIEW_ID__ . '-60d074e3'])>onPause</code> ≈ <code @class([$__VIEW_ID__ . '-340d56a1'])>paused</code>, <code @class([$__VIEW_ID__ . '-c1290c1b'])>onResume</code> ≈ <code @class([$__VIEW_ID__ . '-749bd840'])>resumed</code>, <code @class([$__VIEW_ID__ . '-ef75d7d8'])>onDeactivated</code> ≈ <code @class([$__VIEW_ID__ . '-3e849ce1'])>stopped</code>, <code @class([$__VIEW_ID__ . '-a6469a44'])>onDestroy</code> ≈ <code @class([$__VIEW_ID__ . '-e497fd64'])>destroyed</code>. Hook async không chặn điều hướng nhưng promise bị reject vẫn được log.
            </div>

            <p @class([$__VIEW_ID__ . '-928cd295', 'kicker'])><span @class([$__VIEW_ID__ . '-3c48ef82'])>HYDRATION</span> Nhận DOM thay vì dựng lại</p>
            <h2 @class([$__VIEW_ID__ . '-6017143f'])>Marker là hợp đồng giữa hai bên.</h2>
            <p @class([$__VIEW_ID__ . '-b2544d33'])>Server bọc mỗi vùng động bằng comment marker; client tìm đúng cặp marker đó để claim. Format được định nghĩa ở đúng hai nơi và bắt buộc phải khớp: <code @class([$__VIEW_ID__ . '-4bbcc3f6'])>MarkerRegistry</code> phía client và <code @class([$__VIEW_ID__ . '-5b736351'])>ViewStorageManager</code> phía server.</p>
            <div @class([$__VIEW_ID__ . '-f42070db', 'code-window', 'code-window-dark'])>
                <div @class([$__VIEW_ID__ . '-0fd1ee4f', 'window-bar'])><span @class([$__VIEW_ID__ . '-c0214d95'])>MARKER</span><b @class([$__VIEW_ID__ . '-1cffa586'])>format</b></div>
                <pre @class([$__VIEW_ID__ . '-b1601701'])><code @class([$__VIEW_ID__ . '-1588f021'])><span @class([$__VIEW_ID__ . '-19250bb5', 'code-line'])>&lt;!--s:{type}:{id}-s--&gt;   ...nội dung...   &lt;!--s:{type}:{id}-e--&gt;</span></code></pre>
            </div>
            <div @class([$__VIEW_ID__ . '-6be80a2e', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-4df8c743'])><div @class([$__VIEW_ID__ . '-d0fc03d9', 'dt-key'])><code @class([$__VIEW_ID__ . '-8897a0fb'])>v</code></div><span @class([$__VIEW_ID__ . '-c4cc43d7'])>Wrapper — biên của một view, id là <code @class([$__VIEW_ID__ . '-2f66bb27'])>viewId</code></span><b @class([$__VIEW_ID__ . '-5c55ca78'])>view</b></div>
                <div @class([$__VIEW_ID__ . '-86d7603e'])><div @class([$__VIEW_ID__ . '-5f7b81fa', 'dt-key'])><code @class([$__VIEW_ID__ . '-ff410334'])>r</code></div><span @class([$__VIEW_ID__ . '-b73b4e2f'])>Reactive — vùng if, foreach, switch</span><b @class([$__VIEW_ID__ . '-590fa3af'])>reactive</b></div>
                <div @class([$__VIEW_ID__ . '-e1317a7d'])><div @class([$__VIEW_ID__ . '-8d40970c', 'dt-key'])><code @class([$__VIEW_ID__ . '-ab0a2dc8'])>o</code></div><span @class([$__VIEW_ID__ . '-c3fdf70c'])>Output — giá trị nội suy</span><b @class([$__VIEW_ID__ . '-dce8b2c4'])>output</b></div>
                <div @class([$__VIEW_ID__ . '-f3162679'])><div @class([$__VIEW_ID__ . '-ea6d4528', 'dt-key'])><code @class([$__VIEW_ID__ . '-6dbba0f0'])>b</code> / <code @class([$__VIEW_ID__ . '-2afab1d5'])>bo</code></div><span @class([$__VIEW_ID__ . '-479b49c7'])>Block và BlockOutlet</span><b @class([$__VIEW_ID__ . '-e313d0ea'])>layout</b></div>
                <div @class([$__VIEW_ID__ . '-9293338c'])><div @class([$__VIEW_ID__ . '-efe1d5ee', 'dt-key'])><code @class([$__VIEW_ID__ . '-8c851268'])>c</code> / <code @class([$__VIEW_ID__ . '-71028711'])>frg</code> / <code @class([$__VIEW_ID__ . '-42a4d423'])>y</code></div><span @class([$__VIEW_ID__ . '-7f0b6751'])>Component, Fragment, Yield</span><b @class([$__VIEW_ID__ . '-e93586b1'])>structure</b></div>
                <div @class([$__VIEW_ID__ . '-e331531e'])><div @class([$__VIEW_ID__ . '-1c77ddc2', 'dt-key'])><code @class([$__VIEW_ID__ . '-313dba7b'])>fe</code> / <code @class([$__VIEW_ID__ . '-312737c9'])>fls</code> / <code @class([$__VIEW_ID__ . '-046458ca'])>ea</code></div><span @class([$__VIEW_ID__ . '-ae8434ff'])>Marker của foreach, forelse, each</span><b @class([$__VIEW_ID__ . '-40911e96'])>loop</b></div>
            </div>
            <p @class([$__VIEW_ID__ . '-b45f8fde', 'ov-sub'])>Thứ tự khi hydrate</p>
            <p @class([$__VIEW_ID__ . '-5398cccb'])>Khác CSR ở chỗ state được commit <em @class([$__VIEW_ID__ . '-e3d3f3f5'])>trước</em> khi render, vì factory của vùng điều kiện phụ thuộc state — sai state thì sinh sai element và claim trượt DOM.</p>
            <ul @class([$__VIEW_ID__ . '-6cefedfb', 'check-list'])>
                <li @class([$__VIEW_ID__ . '-d07f5414'])><code @class([$__VIEW_ID__ . '-b3529956'])>commitData()</code> khôi phục state đúng bằng giá trị server.</li>
                <li @class([$__VIEW_ID__ . '-bdaa75e6'])><code @class([$__VIEW_ID__ . '-28302729'])>flushNow()</code> khi chưa subscribe — bỏ pending để không render lại phá DOM vừa claim.</li>
                <li @class([$__VIEW_ID__ . '-6d63f6b1'])><code @class([$__VIEW_ID__ . '-a7e49bb8'])>render()</code> tạo cây object và claim DOM, tuyệt đối không <code @class([$__VIEW_ID__ . '-72e4c874'])>appendChild</code>.</li>
                <li @class([$__VIEW_ID__ . '-9f24c3a0'])>Đổi <code @class([$__VIEW_ID__ . '-35d4f044'])>initMode</code> sang <code @class([$__VIEW_ID__ . '-943a8210'])>create</code> — từ đây mọi re-render là CSR bình thường.</li>
                <li @class([$__VIEW_ID__ . '-cd08545a'])><code @class([$__VIEW_ID__ . '-72fa303a'])>start()</code> gắn subscription và event, rồi kích hoạt vùng.</li>
            </ul>
            <div @class([$__VIEW_ID__ . '-1e866e3d', 'ov-note'])>
                Html claim bằng class <code @class([$__VIEW_ID__ . '-cc220ce8'])>{viewId}-{hash}</code>, các element dạng marker claim bằng cặp comment. Không tìm thấy thì element tự tạo mới — hydration một phần vẫn chạy chứ không vỡ trang.
            </div>
        </div>

        <a @class([$__VIEW_ID__ . '-ceb15976', 'doc-next']) @attr(['href' => '/docs/router'])>
            <div @class([$__VIEW_ID__ . '-60f0ac7a'])><span @class([$__VIEW_ID__ . '-b7585c3f'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-8767f8f3'])>Router & dịch vụ client</strong></div>
            <span @class([$__VIEW_ID__ . '-8287de38', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
