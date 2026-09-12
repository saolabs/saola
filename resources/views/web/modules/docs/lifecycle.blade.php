@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($hookCount, 1)
@extends($__layout__ . "docs")
    @section('meta:title', 'Vòng đời View và DOM Marker - Saola Docs')
    @section('meta:description', 'Tìm hiểu vòng đời view (View Lifecycle) và cơ chế DOM Marker trong Saola: init, mount, update, destroy và cách marker giữ vị trí cấu trúc DOM.')
    @section('meta:keywords', 'saola lifecycle, view lifecycle, dom marker, mount update destroy, marker hydration')
    @block('doc')
        <header @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])>
                <p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>06</span> RUNTIME</p>
                <h1 @class([$__VIEW_ID__ . '-Bdoc112'])>Vòng đời và marker.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-Bdoc121'])>ViewController là một state machine bảy chuyển trạng thái. Marker comment là hợp đồng để client nhận lại DOM server đã render thay vì dựng lại từ đầu.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-Bdoc2', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-Bdoc21', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc211'])>LIFECYCLE</span> Trạng thái quan sát được</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc22'])>Bảy chuyển trạng thái, mỗi cái một cặp hook.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc23'])>ViewController là một state machine: <code @class([$__VIEW_ID__ . '-Bdoc231'])>created → active ⇄ paused → destroyed</code>. Mỗi chuyển trạng thái bắn ra một cặp hook trước và sau, khai báo thẳng trong <code @class([$__VIEW_ID__ . '-Bdoc232'])>&lt;script setup&gt;</code>.</p>
            <div @class([$__VIEW_ID__ . '-Bdoc24', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc241'])><div @class([$__VIEW_ID__ . '-Bdoc2411', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24111'])>mounting · mounted</code></div><span @class([$__VIEW_ID__ . '-Bdoc2412'])>DOM gắn vào tài liệu thật, style và script của view được acquire</span><b @class([$__VIEW_ID__ . '-Bdoc2413'])>mount</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc242'])><div @class([$__VIEW_ID__ . '-Bdoc2421', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24211'])>starting · started</code></div><span @class([$__VIEW_ID__ . '-Bdoc2422'])>Subscribe reactive và gắn event; chạy sau render và commit data</span><b @class([$__VIEW_ID__ . '-Bdoc2423'])>start</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc243'])><div @class([$__VIEW_ID__ . '-Bdoc2431', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24311'])>pausing · paused</code></div><span @class([$__VIEW_ID__ . '-Bdoc2432'])>Rời DOM để vào PageCache; state chuyển sang chế độ ghi dirty</span><b @class([$__VIEW_ID__ . '-Bdoc2433'])>pause</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc244'])><div @class([$__VIEW_ID__ . '-Bdoc2441', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24411'])>resuming · resumed</code></div><span @class([$__VIEW_ID__ . '-Bdoc2442'])>Quay lại từ PageCache; flush dirty rồi gắn lại DOM</span><b @class([$__VIEW_ID__ . '-Bdoc2443'])>resume</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc245'])><div @class([$__VIEW_ID__ . '-Bdoc2451', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24511'])>stopping · stopped</code></div><span @class([$__VIEW_ID__ . '-Bdoc2452'])>Huỷ subscribe, DOM vẫn còn nguyên</span><b @class([$__VIEW_ID__ . '-Bdoc2453'])>stop</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc246'])><div @class([$__VIEW_ID__ . '-Bdoc2461', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24611'])>unmounting · unmounted</code></div><span @class([$__VIEW_ID__ . '-Bdoc2462'])>Gỡ DOM khỏi tài liệu, release asset theo ref-count</span><b @class([$__VIEW_ID__ . '-Bdoc2463'])>unmount</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc247'])><div @class([$__VIEW_ID__ . '-Bdoc2471', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24711'])>destroying · destroyed</code></div><span @class([$__VIEW_ID__ . '-Bdoc2472'])>Dọn toàn bộ: abort event, huỷ subscription, destroy con theo thứ tự ngược</span><b @class([$__VIEW_ID__ . '-Bdoc2473'])>destroy</b></div>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc25', 'ov-note'])>
                <strong @class([$__VIEW_ID__ . '-Bdoc251'])>Cú pháp chuẩn:</strong> Các hook được khai báo trực tiếp dưới dạng <code @class([$__VIEW_ID__ . '-Bdoc252'])>function</code> ở cấp ngoài cùng của <code @class([$__VIEW_ID__ . '-Bdoc253'])>&lt;script setup lang="ts"&gt;</code> (ví dụ: <code @class([$__VIEW_ID__ . '-Bdoc254'])>function started() &#123; ... &#125;</code>), không cần bọc trong <code @class([$__VIEW_ID__ . '-Bdoc255'])>export default</code>.<br @class([$__VIEW_ID__ . '-Bdoc256'])><br @class([$__VIEW_ID__ . '-Bdoc257'])>
                Alias tương thích bản cũ vẫn chạy: <code @class([$__VIEW_ID__ . '-Bdoc258'])>onMounted</code> ≈ <code @class([$__VIEW_ID__ . '-Bdoc259'])>started</code>, <code @class([$__VIEW_ID__ . '-Bdoc25e10_'])>onPause</code> ≈ <code @class([$__VIEW_ID__ . '-Bdoc25e11_'])>paused</code>, <code @class([$__VIEW_ID__ . '-Bdoc25e12_'])>onResume</code> ≈ <code @class([$__VIEW_ID__ . '-Bdoc25e13_'])>resumed</code>, <code @class([$__VIEW_ID__ . '-Bdoc25e14_'])>onDeactivated</code> ≈ <code @class([$__VIEW_ID__ . '-Bdoc25e15_'])>stopped</code>, <code @class([$__VIEW_ID__ . '-Bdoc25e16_'])>onDestroy</code> ≈ <code @class([$__VIEW_ID__ . '-Bdoc25e17_'])>destroyed</code>. Hook async không chặn điều hướng nhưng promise bị reject vẫn được log.
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc26', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc261'])>VÍ DỤ TRỰC QUAN</span> State Machine trong thực tế</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc27'])>Quan sát Vòng đời View tương tác.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc28'])>View bạn đang đọc chính là một instance của <code @class([$__VIEW_ID__ . '-Bdoc281'])>ViewController</code> đang ở trạng thái <code @class([$__VIEW_ID__ . '-Bdoc282'])>active</code>. Khi bấm nút kích hoạt re-render, Element API chỉ cập nhật đúng node nội suy và kích hoạt micro-tick:</p>

            <div @class([$__VIEW_ID__ . '-Bdoc29', 'ov-card']) @attr(['style' => 'margin-bottom: 2rem; border-color: var(--primary, #0284c7); padding: 1.5rem;'])>
                <span @class([$__VIEW_ID__ . '-Bdoc291']) @attr(['style' => 'display: block; font-size: 0.75rem; font-weight: 700; color: var(--primary, #0284c7); margin-bottom: 0.5rem; text-transform: uppercase;'])>Trạng thái View Instance Hiện Tại</span>
                <div @class([$__VIEW_ID__ . '-Bdoc292']) @attr(['style' => 'display: flex; flex-wrap: wrap; gap: 1.5rem; align-items: center; justify-content: space-between;'])>
                    <div @class([$__VIEW_ID__ . '-Bdoc2921'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc29211']) @attr(['style' => 'display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;'])>
                            <span @class([$__VIEW_ID__ . '-Bdoc292111']) @attr(['style' => 'display: inline-block; width: 10px; height: 10px; border-radius: 50%; background: #10b981;'])></span>
                            <strong @class([$__VIEW_ID__ . '-Bdoc292112']) @attr(['style' => 'font-size: 1.05rem;'])>Trạng thái: <code @class([$__VIEW_ID__ . '-Bdoc2921121'])>active</code></strong>
                            <span @class([$__VIEW_ID__ . '-Bdoc292113']) @attr(['style' => 'font-size: 0.8rem; color: #6b7280;'])>(DOM mounted &amp; subscribed)</span>
                        </div>
                        <p @class([$__VIEW_ID__ . '-Bdoc29212']) @attr(['style' => 'margin: 0; font-size: 0.88rem; color: var(--text-secondary, #4b5563);'])>
                            Số lượt tương tác: <strong @class([$__VIEW_ID__ . '-Bdoc292121'])>@startMarker('output', 'Bdoc292121o1'){{ $hookCount }}@endMarker('output', 'Bdoc292121o1')</strong> · Vùng marker: <code @class([$__VIEW_ID__ . '-Bdoc292122'])>&lt;!--s:o:...-s--&gt;</code> được cập nhật tức thì.
                        </p>
                    </div>
                    <div @class([$__VIEW_ID__ . '-Bdoc2922'])>
                        <button @class([$__VIEW_ID__ . '-Bdoc29221', 'button', 'button-sm', 'button-primary']) @attr(['type' => 'button'])>
                            <span @class([$__VIEW_ID__ . '-Bdoc292211'])>Bắn sự kiện update (+1)</span>
                        </button>
                    </div>
                </div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc2e10_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e10_1'])>HYDRATION</span> Nhận DOM thay vì dựng lại</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e11_'])>Marker là hợp đồng giữa hai bên.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e12_'])>Server bọc mỗi vùng động bằng comment marker; client tìm đúng cặp marker đó để claim. Format được định nghĩa ở đúng hai nơi và bắt buộc phải khớp: <code @class([$__VIEW_ID__ . '-Bdoc2e12_1'])>MarkerRegistry</code> phía client và <code @class([$__VIEW_ID__ . '-Bdoc2e12_2'])>ViewStorageManager</code> phía server.</p>
            <div @class([$__VIEW_ID__ . '-Bdoc2e13_', 'code-window', 'code-window-dark'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e13_1', 'window-bar'])><span @class([$__VIEW_ID__ . '-Bdoc2e13_11'])>MARKER</span><b @class([$__VIEW_ID__ . '-Bdoc2e13_12'])>format</b></div>
                <pre @class([$__VIEW_ID__ . '-Bdoc2e13_2'])><code @class([$__VIEW_ID__ . '-Bdoc2e13_21'])><span @class([$__VIEW_ID__ . '-Bdoc2e13_211', 'code-line'])>&lt;!--s:{type}:{id}-s--&gt;   ...nội dung...   &lt;!--s:{type}:{id}-e--&gt;</span></code></pre>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc2e14_', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e14_1'])><div @class([$__VIEW_ID__ . '-Bdoc2e14_11', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e14_111'])>v</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e14_12'])>Wrapper — biên của một view, id là <code @class([$__VIEW_ID__ . '-Bdoc2e14_121'])>viewId</code></span><b @class([$__VIEW_ID__ . '-Bdoc2e14_13'])>view</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e14_2'])><div @class([$__VIEW_ID__ . '-Bdoc2e14_21', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e14_211'])>r</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e14_22'])>Reactive — vùng if, foreach, switch</span><b @class([$__VIEW_ID__ . '-Bdoc2e14_23'])>reactive</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e14_3'])><div @class([$__VIEW_ID__ . '-Bdoc2e14_31', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e14_311'])>o</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e14_32'])>Output — giá trị nội suy</span><b @class([$__VIEW_ID__ . '-Bdoc2e14_33'])>output</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e14_4'])><div @class([$__VIEW_ID__ . '-Bdoc2e14_41', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e14_411'])>b</code> / <code @class([$__VIEW_ID__ . '-Bdoc2e14_412'])>bo</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e14_42'])>Block và BlockOutlet</span><b @class([$__VIEW_ID__ . '-Bdoc2e14_43'])>layout</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e14_5'])><div @class([$__VIEW_ID__ . '-Bdoc2e14_51', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e14_511'])>c</code> / <code @class([$__VIEW_ID__ . '-Bdoc2e14_512'])>frg</code> / <code @class([$__VIEW_ID__ . '-Bdoc2e14_513'])>y</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e14_52'])>Component, Fragment, Yield</span><b @class([$__VIEW_ID__ . '-Bdoc2e14_53'])>structure</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e14_6'])><div @class([$__VIEW_ID__ . '-Bdoc2e14_61', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e14_611'])>fe</code> / <code @class([$__VIEW_ID__ . '-Bdoc2e14_612'])>fls</code> / <code @class([$__VIEW_ID__ . '-Bdoc2e14_613'])>ea</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e14_62'])>Marker của foreach, forelse, each</span><b @class([$__VIEW_ID__ . '-Bdoc2e14_63'])>loop</b></div>
            </div>
            <p @class([$__VIEW_ID__ . '-Bdoc2e15_', 'ov-sub'])>Thứ tự khi hydrate</p>
            <p @class([$__VIEW_ID__ . '-Bdoc2e16_'])>Khác CSR ở chỗ state được commit <em @class([$__VIEW_ID__ . '-Bdoc2e16_1'])>trước</em> khi render, vì factory của vùng điều kiện phụ thuộc state — sai state thì sinh sai element và claim trượt DOM.</p>
            <ul @class([$__VIEW_ID__ . '-Bdoc2e17_', 'check-list'])>
                <li @class([$__VIEW_ID__ . '-Bdoc2e17_1'])><code @class([$__VIEW_ID__ . '-Bdoc2e17_11'])>commitData()</code> khôi phục state đúng bằng giá trị server.</li>
                <li @class([$__VIEW_ID__ . '-Bdoc2e17_2'])><code @class([$__VIEW_ID__ . '-Bdoc2e17_21'])>flushNow()</code> khi chưa subscribe — bỏ pending để không render lại phá DOM vừa claim.</li>
                <li @class([$__VIEW_ID__ . '-Bdoc2e17_3'])><code @class([$__VIEW_ID__ . '-Bdoc2e17_31'])>render()</code> tạo cây object và claim DOM, tuyệt đối không <code @class([$__VIEW_ID__ . '-Bdoc2e17_32'])>appendChild</code>.</li>
                <li @class([$__VIEW_ID__ . '-Bdoc2e17_4'])>Đổi <code @class([$__VIEW_ID__ . '-Bdoc2e17_41'])>initMode</code> sang <code @class([$__VIEW_ID__ . '-Bdoc2e17_42'])>create</code> — từ đây mọi re-render là CSR bình thường.</li>
                <li @class([$__VIEW_ID__ . '-Bdoc2e17_5'])><code @class([$__VIEW_ID__ . '-Bdoc2e17_51'])>start()</code> gắn subscription và event, rồi kích hoạt vùng.</li>
            </ul>
            <div @class([$__VIEW_ID__ . '-Bdoc2e18_', 'ov-note'])>
                Html claim bằng class <code @class([$__VIEW_ID__ . '-Bdoc2e18_1'])>{viewId}-{hash}</code>, các element dạng marker claim bằng cặp comment. Không tìm thấy thì element tự tạo mới — hydration một phần vẫn chạy chứ không vỡ trang.
            </div>
        </div>

        <a @class([$__VIEW_ID__ . '-Bdoc3', 'doc-next']) @attr(['href' => '/docs/router'])>
            <div @class([$__VIEW_ID__ . '-Bdoc31'])><span @class([$__VIEW_ID__ . '-Bdoc311'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-Bdoc312'])>Router & PageCache</strong></div>
            <span @class([$__VIEW_ID__ . '-Bdoc32', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
