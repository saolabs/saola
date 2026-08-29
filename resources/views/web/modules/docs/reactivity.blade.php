@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])>
                <p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>05</span> VIẾT VIEW</p>
                <h1 @class([$__VIEW_ID__ . '-Bdoc112'])>State và element API.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-Bdoc121'])>State sống trong closure chứ không trong proxy, và mọi phụ thuộc do compiler tính sẵn. Output biên dịch chỉ gọi một tập method cố định trên ViewController.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-Bdoc2', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-Bdoc21', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc211'])>REACTIVITY</span> State và cập nhật</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc22'])>State sống trong closure, không trong proxy.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc23'])>Mỗi state được đăng ký vào StateManager và đồng thời là một biến trong closure của constructor. Render factory nằm cùng scope nên đọc thẳng biến — không có dependency tracking lúc chạy, mọi phụ thuộc do compiler tính sẵn thành <code @class([$__VIEW_ID__ . '-Bdoc231'])>stateKeys</code>.</p>
            <div @class([$__VIEW_ID__ . '-Bdoc24', 'ov-grid'])>
                <div @class([$__VIEW_ID__ . '-Bdoc241', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2411'])>Setter</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2412'])>Hai đường ghi</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2413'])><code @class([$__VIEW_ID__ . '-Bdoc24131'])>setX(v)</code> là API cho người dùng, luôn hoạt động. <code @class([$__VIEW_ID__ . '-Bdoc24132'])>update$x(v)</code> chỉ chạy trước khi khoá, dùng để nạp giá trị khởi tạo mà không kích hoạt render.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc242', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2421'])>Batching</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2422'])>Gộp theo khung hình</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2423'])>Nhiều lần set trong cùng một tick gộp lại thành một lượt flush theo <code @class([$__VIEW_ID__ . '-Bdoc24231'])>requestAnimationFrame</code>. Mỗi vùng marker chỉ render lại một lần.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc243', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2431'])>Same-ref</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2432'])>Sửa tại chỗ vẫn nhận</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2433'])>Gọi setter với cùng reference thì StateManager đối chiếu nội dung độ sâu một với bản chụp trước đó. Cách viết <code @class([$__VIEW_ID__ . '-Bdoc24331'])>list.splice(i,1); setList(list)</code> vẫn cập nhật.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc244', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2441'])>Computed</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2442'])>Memo và lười</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2443'])>Dep đổi thì đánh dấu bẩn, tính thật lúc đọc. Slot computed nằm chung bảng với state thường nên <code @class([$__VIEW_ID__ . '-Bdoc24431'])>subscribe</code> và <code @class([$__VIEW_ID__ . '-Bdoc24432'])>stateKeys</code> dùng y hệt.</p>
                </div>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc25', 'ov-note'])>
                <strong @class([$__VIEW_ID__ . '-Bdoc251'])>Không phải deep reactivity.</strong> Đây là lựa chọn có chủ đích: không Proxy, không dep tracking runtime, granularity dừng ở tầng key. Đổi lại là output biên dịch đọc được và chi phí runtime gần như bằng không.
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc26', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc261'])>RUNTIME</span> Element API</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc27'])>Compiler chỉ gọi mười mấy hàm.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc28'])>Output biên dịch không sinh chuỗi HTML. Nó gọi một tập method cố định trên ViewController, mỗi method trả về một element có vòng đời riêng.</p>
            <div @class([$__VIEW_ID__ . '-Bdoc29', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc291'])><div @class([$__VIEW_ID__ . '-Bdoc2911', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc29111'])>this.wrapper()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2912'])>Gốc của view, tạo cặp marker biên</span><b @class([$__VIEW_ID__ . '-Bdoc2913'])>container</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc292'])><div @class([$__VIEW_ID__ . '-Bdoc2921', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc29211'])>this.html()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2922'])>Element DOM kèm config attrs · props · classes · styles · events · bind</span><b @class([$__VIEW_ID__ . '-Bdoc2923'])>dom</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc293'])><div @class([$__VIEW_ID__ . '-Bdoc2931', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc29311'])>this.text()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2932'])>Text node tĩnh</span><b @class([$__VIEW_ID__ . '-Bdoc2933'])>dom</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc294'])><div @class([$__VIEW_ID__ . '-Bdoc2941', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc29411'])>this.output()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2942'])>Vùng giá trị reactive, escape hoặc raw</span><b @class([$__VIEW_ID__ . '-Bdoc2943'])>reactive</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc295'])><div @class([$__VIEW_ID__ . '-Bdoc2951', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc29511'])>this.reactive()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2952'])>Vùng điều kiện hoặc lặp, nhận <code @class([$__VIEW_ID__ . '-Bdoc29521'])>stateKeys</code> và children factory</span><b @class([$__VIEW_ID__ . '-Bdoc2953'])>reactive</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc296'])><div @class([$__VIEW_ID__ . '-Bdoc2961', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc29611'])>this.__foreach()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2962'])>Lặp có slot cache; nhận <code @class([$__VIEW_ID__ . '-Bdoc29621'])>keyFn</code> từ <code @class([$__VIEW_ID__ . '-Bdoc29622', 'directive-token'])>key</code></span><b @class([$__VIEW_ID__ . '-Bdoc2963'])>loop</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc297'])><div @class([$__VIEW_ID__ . '-Bdoc2971', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc29711'])>this.include()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2972'])>Tạo child view; <code @class([$__VIEW_ID__ . '-Bdoc29721'])>stateKeys</code> khiến prop được đẩy lại khi state đổi</span><b @class([$__VIEW_ID__ . '-Bdoc2973'])>component</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc298'])><div @class([$__VIEW_ID__ . '-Bdoc2981', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc29811'])>this.extendView()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2982'])>Trả về view cha thay cho element tree</span><b @class([$__VIEW_ID__ . '-Bdoc2983'])>layout</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc299'])><div @class([$__VIEW_ID__ . '-Bdoc2991', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc29911'])>this.block()</code> / <code @class([$__VIEW_ID__ . '-Bdoc29912'])>this.blockOutlet()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2992'])>Đăng ký nội dung và tạo chỗ trống, nối theo tên</span><b @class([$__VIEW_ID__ . '-Bdoc2993'])>layout</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc29e10_'])><div @class([$__VIEW_ID__ . '-Bdoc29e10_1', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc29e10_11'])>this.section()</code> / <code @class([$__VIEW_ID__ . '-Bdoc29e10_12'])>this.yield()</code></div><span @class([$__VIEW_ID__ . '-Bdoc29e10_2'])>Section và điểm xuất section</span><b @class([$__VIEW_ID__ . '-Bdoc29e10_3'])>layout</b></div>
            </div>
            <p @class([$__VIEW_ID__ . '-Bdoc2e10_', 'ov-sub'])>Ba quy tắc bắt buộc</p>
            <ul @class([$__VIEW_ID__ . '-Bdoc2e11_', 'check-list'])>
                <li @class([$__VIEW_ID__ . '-Bdoc2e11_1'])>Factory là lười — chỉ chạy trong <code @class([$__VIEW_ID__ . '-Bdoc2e11_11'])>render()</code> hoặc re-render, không chạy trong constructor.</li>
                <li @class([$__VIEW_ID__ . '-Bdoc2e11_2'])>Điểm chèn tường minh — element không tự <code @class([$__VIEW_ID__ . '-Bdoc2e11_21'])>appendChild</code>; vị trí do element cha cấp qua anchor.</li>
                <li @class([$__VIEW_ID__ . '-Bdoc2e11_3'])>Vòng đời đầy đủ — mỗi element có <code @class([$__VIEW_ID__ . '-Bdoc2e11_31'])>render · start · pause · resume · destroy</code>, và children sinh ra khi re-render phải được <code @class([$__VIEW_ID__ . '-Bdoc2e11_32'])>start()</code> ngay nếu vùng cha đang hoạt động.</li>
            </ul>
            <div @class([$__VIEW_ID__ . '-Bdoc2e12_', 'ov-note', 'ov-note--warn'])>
                <strong @class([$__VIEW_ID__ . '-Bdoc2e12_1'])>Ràng buộc của <code @class([$__VIEW_ID__ . '-Bdoc2e12_11', 'directive-token'])>foreach</code>:</strong> slot chỉ được tái dùng khi cache key khớp <em @class([$__VIEW_ID__ . '-Bdoc2e12_2'])>và</em> reference của item không đổi, vì compiled closure đóng gói item trực tiếp. Refetch trả object mới sẽ dựng lại hàng đó — muốn giữ state của view con qua mỗi lần đồng bộ thì lặp trên danh sách id ổn định rồi truyền dữ liệu qua props.
            </div>
        </div>

        <a @class([$__VIEW_ID__ . '-Bdoc3', 'doc-next']) @attr(['href' => '/docs/runtime'])>
            <div @class([$__VIEW_ID__ . '-Bdoc31'])><span @class([$__VIEW_ID__ . '-Bdoc311'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-Bdoc312'])>Runtime & hydration</strong></div>
            <span @class([$__VIEW_ID__ . '-Bdoc32', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
