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
                <div @class([$__VIEW_ID__ . '-Bdoc273'])><div @class([$__VIEW_ID__ . '-Bdoc2731', 'dt-key'])>Khoảng trắng ở biên &#64;ssr / &#64;verbatim</div><span @class([$__VIEW_ID__ . '-Bdoc2732'])>Đầu ra JavaScript nay giữ nguyên thụt lề, xuống dòng và dòng trống đúng như Blade, nên <code @class([$__VIEW_ID__ . '-Bdoc27321'])>&lt;b&gt;a&lt;/b&gt; &lt;b&gt;b&lt;/b&gt;</code> ra giống nhau giữa SSR và render lại phía client. Còn lệch ở hai vùng biên: khối <code @class([$__VIEW_ID__ . '-Bdoc27322'])>&#64;ssr</code> (server-only theo thiết kế) và <code @class([$__VIEW_ID__ . '-Bdoc27323'])>&#64;verbatim</code> — cả hai được bóc khỏi luồng parse trước khi parser chạy.</span><b @class([$__VIEW_ID__ . '-Bdoc2733'])>compiler</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc274'])><div @class([$__VIEW_ID__ . '-Bdoc2741', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27411'])>&lt;style scoped&gt;</code> ở màn hình đầu</div><span @class([$__VIEW_ID__ . '-Bdoc2742'])>Style scoped không nằm trong HTML server trả về; nó được inject khi client hydrate, dù element đã mang sẵn class scope. Phần trên màn hình đầu vì vậy nhấp nháy một nhịp trước khi có style. Dùng CSS global cho above-the-fold cho tới khi có asset manifest SSR.</span><b @class([$__VIEW_ID__ . '-Bdoc2743'])>runtime</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc275'])><div @class([$__VIEW_ID__ . '-Bdoc2751', 'dt-key'])>Dấu <code @class([$__VIEW_ID__ . '-Bdoc27511'])>&gt;</code> trong <code @class([$__VIEW_ID__ . '-Bdoc27512', 'directive-token'])>class</code></div><span @class([$__VIEW_ID__ . '-Bdoc2752'])>Biểu thức chứa dấu lớn hơn làm bộ phân tích đóng thẻ sớm ở đầu ra Blade. Viết lại bằng phép so sánh khác là qua.</span><b @class([$__VIEW_ID__ . '-Bdoc2753'])>compiler</b></div>
            <div @class([$__VIEW_ID__ . '-Bdoc276'])><div @class([$__VIEW_ID__ . '-Bdoc2761', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27611', 'directive-token'])>show</code> đụng Blade</div><span @class([$__VIEW_ID__ . '-Bdoc2762'])>Laravel đã có <code @class([$__VIEW_ID__ . '-Bdoc27621', 'directive-token'])>show</code> nghĩa là kết thúc section rồi yield ngay, nên nó nuốt directive cùng tên của Saola và làm hỏng section stack của cả trang. Dùng <code @class([$__VIEW_ID__ . '-Bdoc27622', 'directive-token'])>class</code> với class ẩn thay thế.</span><b @class([$__VIEW_ID__ . '-Bdoc2763'])>compiler</b></div>
            <div @class([$__VIEW_ID__ . '-Bdoc277'])><div @class([$__VIEW_ID__ . '-Bdoc2771', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27711', 'directive-token'])>computed</code> khi SSR</div><span @class([$__VIEW_ID__ . '-Bdoc2772'])>Directive này chỉ được emit ở đầu ra JavaScript; phía Blade không có khai báo nào nên biến undefined khi render server. Dùng biểu thức dẫn xuất thẳng trong template là qua.</span><b @class([$__VIEW_ID__ . '-Bdoc2773'])>compiler</b></div>
            <div @class([$__VIEW_ID__ . '-Bdoc278'])><div @class([$__VIEW_ID__ . '-Bdoc2781', 'dt-key'])>Modifier ở đầu ra Blade</div><span @class([$__VIEW_ID__ . '-Bdoc2782'])>Modifier của event chỉ được emit đúng ở phía JavaScript; phía Blade còn sinh thuộc tính thừa.</span><b @class([$__VIEW_ID__ . '-Bdoc2783'])>compiler</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc279'])><div @class([$__VIEW_ID__ . '-Bdoc2791', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27911', 'directive-token'])>yield</code> lồng trong thẻ inline</div><span @class([$__VIEW_ID__ . '-Bdoc2792'])>Chỉ nhận khi là con trực tiếp của element. Đặt trong <code @class([$__VIEW_ID__ . '-Bdoc27921'])>&lt;p&gt;&lt;span&gt;</code> thì nhánh Blade vẫn đúng còn nhánh JS sinh ra text thô <code @class([$__VIEW_ID__ . '-Bdoc27922'])>&#64;yield('tên')</code> — SSR hiện nội dung section, CSR hiện chính chuỗi directive.</span><b @class([$__VIEW_ID__ . '-Bdoc2793'])>compiler</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc27e10_'])><div @class([$__VIEW_ID__ . '-Bdoc27e10_1', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27e10_11', 'directive-token'])>forelse</code> chưa được cài</div><span @class([$__VIEW_ID__ . '-Bdoc27e10_2'])>Có trong tài liệu nhưng compiler không nhận: nó bị để nguyên thành text ở cả hai nhánh, và Blade nhận một chuỗi không phải PHP hợp lệ nên trang trả 500. Dùng <code @class([$__VIEW_ID__ . '-Bdoc27e10_21', 'directive-token'])>foreach</code> cộng một dòng rỗng có điều kiện.</span><b @class([$__VIEW_ID__ . '-Bdoc27e10_3'])>compiler</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc27e11_'])><div @class([$__VIEW_ID__ . '-Bdoc27e11_1', 'dt-key'])>Tên block có dấu gạch ngang</div><span @class([$__VIEW_ID__ . '-Bdoc27e11_2'])><code @class([$__VIEW_ID__ . '-Bdoc27e11_21'])>&#64;useBlock('lab-aside')</code> được nhánh Blade nhận đúng nhưng nhánh JS bỏ qua, biến directive thành text thô — outlet biến mất khi CSR. Tên <code @class([$__VIEW_ID__ . '-Bdoc27e11_22', 'directive-token'])>yield</code> thì không sao. Đặt tên block không dấu gạch ngang.</span><b @class([$__VIEW_ID__ . '-Bdoc27e11_3'])>compiler</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc27e12_'])><div @class([$__VIEW_ID__ . '-Bdoc27e12_1', 'dt-key'])>Dấu chấm trên state dạng mảng</div><span @class([$__VIEW_ID__ . '-Bdoc27e12_2'])><code @class([$__VIEW_ID__ . '-Bdoc27e12_21'])>row.id</code> biên dịch thành <code @class([$__VIEW_ID__ . '-Bdoc27e12_22'])>$row-&gt;id</code> phía Blade, mà state khai báo trong <code @class([$__VIEW_ID__ . '-Bdoc27e12_23', 'directive-token'])>states</code> là mảng PHP — SSR nổ trong khi CSR vẫn chạy. Đọc bằng ngoặc vuông (<code @class([$__VIEW_ID__ . '-Bdoc27e12_24'])>row['id']</code>) thì đúng cả hai phía; hoặc để controller trả về object.</span><b @class([$__VIEW_ID__ . '-Bdoc27e12_3'])>compiler</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc27e13_'])><div @class([$__VIEW_ID__ . '-Bdoc27e13_1', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27e13_11', 'directive-token'])>yield</code> khi layout được tái dùng</div><span @class([$__VIEW_ID__ . '-Bdoc27e13_2'])>Điều hướng SPA giữa hai trang cùng layout dựng thêm một cặp marker yield THỨ HAI cùng id thay vì claim cặp có sẵn, nên nội dung section của trang cũ nằm lại cạnh trang mới.</span><b @class([$__VIEW_ID__ . '-Bdoc27e13_3'])>runtime</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc27e14_'])><div @class([$__VIEW_ID__ . '-Bdoc27e14_1', 'dt-key'])>Fragment chưa có marker</div><span @class([$__VIEW_ID__ . '-Bdoc27e14_2'])>Compiler chưa emit marker cho fragment ở nhánh Blade, nên loại này chưa hydrate được. Marker component thì đã có id ổn định.</span><b @class([$__VIEW_ID__ . '-Bdoc27e14_3'])>contract</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc27e15_'])><div @class([$__VIEW_ID__ . '-Bdoc27e15_1', 'dt-key'])>Prefix đôi của context API</div><span @class([$__VIEW_ID__ . '-Bdoc27e15_2'])>Prefix mặc định của Laravel cộng với prefix context làm URL thành <code @class([$__VIEW_ID__ . '-Bdoc27e15_21'])>/api/api/...</code>.</span><b @class([$__VIEW_ID__ . '-Bdoc27e15_3'])>routing</b></div>
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
