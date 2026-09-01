@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])>
                <p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>09</span> TRẠNG THÁI</p>
                <h1 @class([$__VIEW_ID__ . '-Bdoc112'])>Giới hạn đã biết.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-Bdoc121'])>Dự án đang ở giai đoạn dựng nền. Trang này ghi thẳng cái gì chạy được và cái gì còn dở, để người đọc không mất thời gian tự phát hiện lại.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-Bdoc2', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-Bdoc21', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc211'])>STATUS</span> Trung thực về hiện trạng</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc22'])>Cái gì đang chạy, cái gì còn dở.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc23'])>Dự án đang ở giai đoạn dựng nền. Những mục dưới đây là giới hạn đã biết, ghi ra để người đọc không mất thời gian tự phát hiện lại.</p>

            <p @class([$__VIEW_ID__ . '-Bdoc24', 'ov-sub'])>Đang chạy đầy đủ</p>
            <ul @class([$__VIEW_ID__ . '-Bdoc25', 'check-list'])>
                <li @class([$__VIEW_ID__ . '-Bdoc251'])>SSR bằng Blade rồi hydrate, kèm layout chain và block outlet.</li>
                <li @class([$__VIEW_ID__ . '-Bdoc252'])>Reactive theo vùng marker: điều kiện, vòng lặp, output, binding hai chiều.</li>
                <li @class([$__VIEW_ID__ . '-Bdoc253'])>Reconciliation của <code @class([$__VIEW_ID__ . '-Bdoc2531', 'directive-token'])>foreach</code> theo slot, có dọn element khi item rời danh sách.</li>
                <li @class([$__VIEW_ID__ . '-Bdoc254'])>Điều hướng SPA, layout diff và PageCache cho back/forward.</li>
                <li @class([$__VIEW_ID__ . '-Bdoc255'])>Vòng đời view đầy đủ với dọn tài nguyên theo ref-count.</li>
                <li @class([$__VIEW_ID__ . '-Bdoc256'])>Bốn context với route, registry và bundle tách bạch.</li>
            </ul>

            <p @class([$__VIEW_ID__ . '-Bdoc26', 'ov-sub'])>Giới hạn đã biết</p>
            <div @class([$__VIEW_ID__ . '-Bdoc27', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc271'])><div @class([$__VIEW_ID__ . '-Bdoc2711', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27111', 'directive-token'])>foreach</code> đổi reference</div><span @class([$__VIEW_ID__ . '-Bdoc2712'])>Slot chỉ tái dùng khi reference item không đổi, nên refetch dựng lại hàng đó. Cách đi vòng: lặp trên id ổn định và truyền dữ liệu qua props.</span><b @class([$__VIEW_ID__ . '-Bdoc2713'])>runtime</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc272'])><div @class([$__VIEW_ID__ . '-Bdoc2721', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27211', 'directive-token'])>bind</code> lồng cấp</div><span @class([$__VIEW_ID__ . '-Bdoc2722'])><code @class([$__VIEW_ID__ . '-Bdoc27221'])>bind(a.b)</code> đọc được giá trị nhưng không ghi ngược và không nhận thay đổi — setter và subscription chỉ có ở tầng khoá phẳng.</span><b @class([$__VIEW_ID__ . '-Bdoc2723'])>runtime</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc273'])><div @class([$__VIEW_ID__ . '-Bdoc2731', 'dt-key'])>Khoảng trắng giữa hai thẻ</div><span @class([$__VIEW_ID__ . '-Bdoc2732'])>Text node chỉ chứa khoảng trắng bị bỏ khi sinh đầu ra JavaScript, còn Blade thì giữ nguyên — nên <code @class([$__VIEW_ID__ . '-Bdoc27321'])>&lt;b&gt;a&lt;/b&gt; &lt;b&gt;b&lt;/b&gt;</code> ra khác nhau giữa SSR và lần render lại phía client. Thấy rõ nhất ở code block dùng <code @class([$__VIEW_ID__ . '-Bdoc27322'])>white-space: pre</code>. Cách đi vòng: đưa dấu cách vào bên trong thẻ liền kề để nó thành text node có nội dung.</span><b @class([$__VIEW_ID__ . '-Bdoc2733'])>compiler</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc274'])><div @class([$__VIEW_ID__ . '-Bdoc2741', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27411'])>&lt;style scoped&gt;</code> ở màn hình đầu</div><span @class([$__VIEW_ID__ . '-Bdoc2742'])>Style scoped không nằm trong HTML server trả về; nó được inject khi client hydrate, dù element đã mang sẵn class scope. Phần trên màn hình đầu vì vậy nhấp nháy một nhịp trước khi có style. Dùng CSS global cho above-the-fold cho tới khi có asset manifest SSR.</span><b @class([$__VIEW_ID__ . '-Bdoc2743'])>runtime</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc275'])><div @class([$__VIEW_ID__ . '-Bdoc2751', 'dt-key'])>Dấu <code @class([$__VIEW_ID__ . '-Bdoc27511'])>&gt;</code> trong <code @class([$__VIEW_ID__ . '-Bdoc27512', 'directive-token'])>class</code></div><span @class([$__VIEW_ID__ . '-Bdoc2752'])>Biểu thức chứa dấu lớn hơn làm bộ phân tích đóng thẻ sớm ở đầu ra Blade. Viết lại bằng phép so sánh khác là qua.</span><b @class([$__VIEW_ID__ . '-Bdoc2753'])>compiler</b></div>
            <div @class([$__VIEW_ID__ . '-Bdoc276'])><div @class([$__VIEW_ID__ . '-Bdoc2761', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27611', 'directive-token'])>show</code> đụng Blade</div><span @class([$__VIEW_ID__ . '-Bdoc2762'])>Laravel đã có <code @class([$__VIEW_ID__ . '-Bdoc27621', 'directive-token'])>show</code> nghĩa là kết thúc section rồi yield ngay, nên nó nuốt directive cùng tên của Saola và làm hỏng section stack của cả trang. Dùng <code @class([$__VIEW_ID__ . '-Bdoc27622', 'directive-token'])>class</code> với class ẩn thay thế.</span><b @class([$__VIEW_ID__ . '-Bdoc2763'])>compiler</b></div>
            <div @class([$__VIEW_ID__ . '-Bdoc277'])><div @class([$__VIEW_ID__ . '-Bdoc2771', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27711', 'directive-token'])>computed</code> khi SSR</div><span @class([$__VIEW_ID__ . '-Bdoc2772'])>Directive này chỉ được emit ở đầu ra JavaScript; phía Blade không có khai báo nào nên biến undefined khi render server. Dùng biểu thức dẫn xuất thẳng trong template là qua.</span><b @class([$__VIEW_ID__ . '-Bdoc2773'])>compiler</b></div>
            <div @class([$__VIEW_ID__ . '-Bdoc278'])><div @class([$__VIEW_ID__ . '-Bdoc2781', 'dt-key'])>Modifier ở đầu ra Blade</div><span @class([$__VIEW_ID__ . '-Bdoc2782'])>Modifier của event chỉ được emit đúng ở phía JavaScript; phía Blade còn sinh thuộc tính thừa.</span><b @class([$__VIEW_ID__ . '-Bdoc2783'])>compiler</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc279'])><div @class([$__VIEW_ID__ . '-Bdoc2791', 'dt-key'])>Fragment chưa có marker</div><span @class([$__VIEW_ID__ . '-Bdoc2792'])>Compiler chưa emit marker cho fragment ở nhánh Blade, nên loại này chưa hydrate được. Marker component thì đã có id ổn định.</span><b @class([$__VIEW_ID__ . '-Bdoc2793'])>contract</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc27e10_'])><div @class([$__VIEW_ID__ . '-Bdoc27e10_1', 'dt-key'])>Prefix đôi của context API</div><span @class([$__VIEW_ID__ . '-Bdoc27e10_2'])>Prefix mặc định của Laravel cộng với prefix context làm URL thành <code @class([$__VIEW_ID__ . '-Bdoc27e10_21'])>/api/api/...</code>.</span><b @class([$__VIEW_ID__ . '-Bdoc27e10_3'])>routing</b></div>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc28', 'ov-note', 'ov-note--warn'])>
                Danh sách này lấy từ chính tài liệu contract và những gì kiểm chứng được khi chạy thật, không phải phỏng đoán. Mục nào sửa xong sẽ rời khỏi bảng.
            </div>
        </div>

        <a @class([$__VIEW_ID__ . '-Bdoc3', 'doc-next']) @attr(['href' => '/components'])>
            <div @class([$__VIEW_ID__ . '-Bdoc31'])><span @class([$__VIEW_ID__ . '-Bdoc311'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-Bdoc312'])>Thư viện component</strong></div>
            <span @class([$__VIEW_ID__ . '-Bdoc32', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
