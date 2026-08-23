@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-ff96f7a7', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-15b892a7'])>
                <p @class([$__VIEW_ID__ . '-ab74559e', 'kicker'])><span @class([$__VIEW_ID__ . '-943e8228'])>09</span> TRẠNG THÁI</p>
                <h1 @class([$__VIEW_ID__ . '-9abe25a3'])>Giới hạn đã biết.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-f750a15d', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-2a968179'])>Dự án đang ở giai đoạn dựng nền. Trang này ghi thẳng cái gì chạy được và cái gì còn dở, để người đọc không mất thời gian tự phát hiện lại.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-e5195f55', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-a805c5cb', 'kicker'])><span @class([$__VIEW_ID__ . '-a3f20685'])>STATUS</span> Trung thực về hiện trạng</p>
            <h2 @class([$__VIEW_ID__ . '-c048d2ef'])>Cái gì đang chạy, cái gì còn dở.</h2>
            <p @class([$__VIEW_ID__ . '-1c642396'])>Dự án đang ở giai đoạn dựng nền. Những mục dưới đây là giới hạn đã biết, ghi ra để người đọc không mất thời gian tự phát hiện lại.</p>

            <p @class([$__VIEW_ID__ . '-33facdd5', 'ov-sub'])>Đang chạy đầy đủ</p>
            <ul @class([$__VIEW_ID__ . '-1e7af0c3', 'check-list'])>
                <li @class([$__VIEW_ID__ . '-66f3100e'])>SSR bằng Blade rồi hydrate, kèm layout chain và block outlet.</li>
                <li @class([$__VIEW_ID__ . '-2deb49d1'])>Reactive theo vùng marker: điều kiện, vòng lặp, output, binding hai chiều.</li>
                <li @class([$__VIEW_ID__ . '-83b02649'])>Reconciliation của <code @class([$__VIEW_ID__ . '-c3650608', 'directive-token'])>foreach</code> theo slot, có dọn element khi item rời danh sách.</li>
                <li @class([$__VIEW_ID__ . '-ac549061'])>Điều hướng SPA, layout diff và PageCache cho back/forward.</li>
                <li @class([$__VIEW_ID__ . '-01cee6cc'])>Vòng đời view đầy đủ với dọn tài nguyên theo ref-count.</li>
                <li @class([$__VIEW_ID__ . '-2d178424'])>Bốn context với route, registry và bundle tách bạch.</li>
            </ul>

            <p @class([$__VIEW_ID__ . '-928cd295', 'ov-sub'])>Giới hạn đã biết</p>
            <div @class([$__VIEW_ID__ . '-f84e1dc6', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-e9e672d8'])><div @class([$__VIEW_ID__ . '-3ea65109', 'dt-key'])><code @class([$__VIEW_ID__ . '-a110bc84', 'directive-token'])>foreach</code> đổi reference</div><span @class([$__VIEW_ID__ . '-b8d27790'])>Slot chỉ tái dùng khi reference item không đổi, nên refetch dựng lại hàng đó. Cách đi vòng: lặp trên id ổn định và truyền dữ liệu qua props.</span><b @class([$__VIEW_ID__ . '-adda57ca'])>runtime</b></div>
                <div @class([$__VIEW_ID__ . '-0bc39c9b'])><div @class([$__VIEW_ID__ . '-af63ff53', 'dt-key'])><code @class([$__VIEW_ID__ . '-6a1805ad', 'directive-token'])>bind</code> lồng cấp</div><span @class([$__VIEW_ID__ . '-317ee151'])><code @class([$__VIEW_ID__ . '-157fb3a9'])>bind(a.b)</code> đọc được giá trị nhưng không ghi ngược và không nhận thay đổi — setter và subscription chỉ có ở tầng khoá phẳng.</span><b @class([$__VIEW_ID__ . '-d28f6a58'])>runtime</b></div>
                <div @class([$__VIEW_ID__ . '-d469964c'])><div @class([$__VIEW_ID__ . '-1c0267a0', 'dt-key'])><code @class([$__VIEW_ID__ . '-5ee4d1b4'])>&lt;style scoped&gt;</code> trong layout</div><span @class([$__VIEW_ID__ . '-76a036c6'])>Trang render qua block của layout không có wrapper riêng nên style scoped không tìm được subtree để gắn. Dùng stylesheet chung cho những trang đó.</span><b @class([$__VIEW_ID__ . '-4911be7c'])>runtime</b></div>
                <div @class([$__VIEW_ID__ . '-48e9d809'])><div @class([$__VIEW_ID__ . '-b5d26d7f', 'dt-key'])>Dấu <code @class([$__VIEW_ID__ . '-9a13e47e'])>&gt;</code> trong <code @class([$__VIEW_ID__ . '-0e8ec033', 'directive-token'])>class</code></div><span @class([$__VIEW_ID__ . '-f1c4cc3c'])>Biểu thức chứa dấu lớn hơn làm bộ phân tích đóng thẻ sớm ở đầu ra Blade. Viết lại bằng phép so sánh khác là qua.</span><b @class([$__VIEW_ID__ . '-3922147e'])>compiler</b></div>
                <div @class([$__VIEW_ID__ . '-be972177'])><div @class([$__VIEW_ID__ . '-8f7d399f', 'dt-key'])><code @class([$__VIEW_ID__ . '-e1755aea', 'directive-token'])>style</code> dạng object</div><span @class([$__VIEW_ID__ . '-940f1081'])>Viết <code @class([$__VIEW_ID__ . '-4190057b'])>&#64;style({'font-size': x})</code> theo cú pháp modern chỉ ra đúng ở đầu ra Blade; phía JavaScript nó rã thành các thuộc tính tĩnh rời rạc nên binding không chạy sau hydrate.</span><b @class([$__VIEW_ID__ . '-f4ee73fe'])>compiler</b></div>
            <div @class([$__VIEW_ID__ . '-e2ed1722'])><div @class([$__VIEW_ID__ . '-756afe1d', 'dt-key'])><code @class([$__VIEW_ID__ . '-6a32ca01', 'directive-token'])>show</code> đụng Blade</div><span @class([$__VIEW_ID__ . '-729bb206'])>Laravel đã có <code @class([$__VIEW_ID__ . '-35176025', 'directive-token'])>show</code> nghĩa là kết thúc section rồi yield ngay, nên nó nuốt directive cùng tên của Saola và làm hỏng section stack của cả trang. Dùng <code @class([$__VIEW_ID__ . '-1c03242d', 'directive-token'])>class</code> với class ẩn thay thế.</span><b @class([$__VIEW_ID__ . '-229bc295'])>compiler</b></div>
            <div @class([$__VIEW_ID__ . '-6a802913'])><div @class([$__VIEW_ID__ . '-6f132da0', 'dt-key'])><code @class([$__VIEW_ID__ . '-0abc40c7', 'directive-token'])>computed</code> khi SSR</div><span @class([$__VIEW_ID__ . '-be4dcacd'])>Directive này chỉ được emit ở đầu ra JavaScript; phía Blade không có khai báo nào nên biến undefined khi render server. Dùng biểu thức dẫn xuất thẳng trong template là qua.</span><b @class([$__VIEW_ID__ . '-5db3460a'])>compiler</b></div>
            <div @class([$__VIEW_ID__ . '-558ccc5e'])><div @class([$__VIEW_ID__ . '-1febf2ea', 'dt-key'])>Modifier ở đầu ra Blade</div><span @class([$__VIEW_ID__ . '-29923b9f'])>Modifier của event chỉ được emit đúng ở phía JavaScript; phía Blade còn sinh thuộc tính thừa.</span><b @class([$__VIEW_ID__ . '-06a376ed'])>compiler</b></div>
                <div @class([$__VIEW_ID__ . '-bb11c6f6'])><div @class([$__VIEW_ID__ . '-9d90189a', 'dt-key'])>Fragment và Component chưa có id</div><span @class([$__VIEW_ID__ . '-956335d2'])>Hai loại marker này còn thiếu id ổn định nên chưa hydrate được như các loại khác.</span><b @class([$__VIEW_ID__ . '-a6418980'])>contract</b></div>
                <div @class([$__VIEW_ID__ . '-bd77f452'])><div @class([$__VIEW_ID__ . '-f7042ef6', 'dt-key'])>Prefix đôi của context API</div><span @class([$__VIEW_ID__ . '-b0ada4d1'])>Prefix mặc định của Laravel cộng với prefix context làm URL thành <code @class([$__VIEW_ID__ . '-868b8270'])>/api/api/...</code>.</span><b @class([$__VIEW_ID__ . '-0c124cbe'])>routing</b></div>
            </div>
            <div @class([$__VIEW_ID__ . '-a79a05db', 'ov-note', 'ov-note--warn'])>
                Danh sách này lấy từ chính tài liệu contract và những gì kiểm chứng được khi chạy thật, không phải phỏng đoán. Mục nào sửa xong sẽ rời khỏi bảng.
            </div>
        </div>

        <a @class([$__VIEW_ID__ . '-ceb15976', 'doc-next']) @attr(['href' => '/components'])>
            <div @class([$__VIEW_ID__ . '-60f0ac7a'])><span @class([$__VIEW_ID__ . '-b7585c3f'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-8767f8f3'])>Thư viện component</strong></div>
            <span @class([$__VIEW_ID__ . '-8287de38', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
