@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-ff96f7a7', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-15b892a7'])>
                <p @class([$__VIEW_ID__ . '-ab74559e', 'kicker'])><span @class([$__VIEW_ID__ . '-943e8228'])>05</span> VIẾT VIEW</p>
                <h1 @class([$__VIEW_ID__ . '-9abe25a3'])>State và element API.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-f750a15d', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-2a968179'])>State sống trong closure chứ không trong proxy, và mọi phụ thuộc do compiler tính sẵn. Output biên dịch chỉ gọi một tập method cố định trên ViewController.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-e5195f55', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-a805c5cb', 'kicker'])><span @class([$__VIEW_ID__ . '-a3f20685'])>REACTIVITY</span> State và cập nhật</p>
            <h2 @class([$__VIEW_ID__ . '-c048d2ef'])>State sống trong closure, không trong proxy.</h2>
            <p @class([$__VIEW_ID__ . '-1c642396'])>Mỗi state được đăng ký vào StateManager và đồng thời là một biến trong closure của constructor. Render factory nằm cùng scope nên đọc thẳng biến — không có dependency tracking lúc chạy, mọi phụ thuộc do compiler tính sẵn thành <code @class([$__VIEW_ID__ . '-34be1ee8'])>stateKeys</code>.</p>
            <div @class([$__VIEW_ID__ . '-753dcd15', 'ov-grid'])>
                <div @class([$__VIEW_ID__ . '-9de53a5a', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-81bea50b'])>Setter</span>
                    <h3 @class([$__VIEW_ID__ . '-32679b94'])>Hai đường ghi</h3>
                    <p @class([$__VIEW_ID__ . '-48280560'])><code @class([$__VIEW_ID__ . '-1dc81855'])>setX(v)</code> là API cho người dùng, luôn hoạt động. <code @class([$__VIEW_ID__ . '-abb2beca'])>update$x(v)</code> chỉ chạy trước khi khoá, dùng để nạp giá trị khởi tạo mà không kích hoạt render.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-c8e71cd3', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-9c312e37'])>Batching</span>
                    <h3 @class([$__VIEW_ID__ . '-cbe9665d'])>Gộp theo khung hình</h3>
                    <p @class([$__VIEW_ID__ . '-466d0bc6'])>Nhiều lần set trong cùng một tick gộp lại thành một lượt flush theo <code @class([$__VIEW_ID__ . '-a9e93036'])>requestAnimationFrame</code>. Mỗi vùng marker chỉ render lại một lần.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-e88f763e', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-d7f6d064'])>Same-ref</span>
                    <h3 @class([$__VIEW_ID__ . '-20f8c5fb'])>Sửa tại chỗ vẫn nhận</h3>
                    <p @class([$__VIEW_ID__ . '-a7ba8f53'])>Gọi setter với cùng reference thì StateManager đối chiếu nội dung độ sâu một với bản chụp trước đó. Cách viết <code @class([$__VIEW_ID__ . '-fc3573c3'])>list.splice(i,1); setList(list)</code> vẫn cập nhật.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-094adcdf', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-12547677'])>Computed</span>
                    <h3 @class([$__VIEW_ID__ . '-c438b827'])>Memo và lười</h3>
                    <p @class([$__VIEW_ID__ . '-87dac5f0'])>Dep đổi thì đánh dấu bẩn, tính thật lúc đọc. Slot computed nằm chung bảng với state thường nên <code @class([$__VIEW_ID__ . '-db6edecc'])>subscribe</code> và <code @class([$__VIEW_ID__ . '-44746ce1'])>stateKeys</code> dùng y hệt.</p>
                </div>
            </div>
            <div @class([$__VIEW_ID__ . '-dae15694', 'ov-note'])>
                <strong @class([$__VIEW_ID__ . '-38d317d8'])>Không phải deep reactivity.</strong> Đây là lựa chọn có chủ đích: không Proxy, không dep tracking runtime, granularity dừng ở tầng key. Đổi lại là output biên dịch đọc được và chi phí runtime gần như bằng không.
            </div>

            <p @class([$__VIEW_ID__ . '-928cd295', 'kicker'])><span @class([$__VIEW_ID__ . '-3c48ef82'])>RUNTIME</span> Element API</p>
            <h2 @class([$__VIEW_ID__ . '-6017143f'])>Compiler chỉ gọi mười mấy hàm.</h2>
            <p @class([$__VIEW_ID__ . '-b2544d33'])>Output biên dịch không sinh chuỗi HTML. Nó gọi một tập method cố định trên ViewController, mỗi method trả về một element có vòng đời riêng.</p>
            <div @class([$__VIEW_ID__ . '-f42070db', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-0fd1ee4f'])><div @class([$__VIEW_ID__ . '-e948b564', 'dt-key'])><code @class([$__VIEW_ID__ . '-b67ac195'])>this.wrapper()</code></div><span @class([$__VIEW_ID__ . '-adb4b8ab'])>Gốc của view, tạo cặp marker biên</span><b @class([$__VIEW_ID__ . '-3fe72f54'])>container</b></div>
                <div @class([$__VIEW_ID__ . '-a1be91db'])><div @class([$__VIEW_ID__ . '-5e755cdc', 'dt-key'])><code @class([$__VIEW_ID__ . '-12c519b2'])>this.html()</code></div><span @class([$__VIEW_ID__ . '-58a87d66'])>Element DOM kèm config attrs · props · classes · styles · events · bind</span><b @class([$__VIEW_ID__ . '-fa7f61d0'])>dom</b></div>
                <div @class([$__VIEW_ID__ . '-f837ad24'])><div @class([$__VIEW_ID__ . '-7a13fb2d', 'dt-key'])><code @class([$__VIEW_ID__ . '-7bba29c3'])>this.text()</code></div><span @class([$__VIEW_ID__ . '-be10aa97'])>Text node tĩnh</span><b @class([$__VIEW_ID__ . '-0afb2c3f'])>dom</b></div>
                <div @class([$__VIEW_ID__ . '-f9e251ca'])><div @class([$__VIEW_ID__ . '-5ca2848e', 'dt-key'])><code @class([$__VIEW_ID__ . '-fea6b114'])>this.output()</code></div><span @class([$__VIEW_ID__ . '-ceabdeb2'])>Vùng giá trị reactive, escape hoặc raw</span><b @class([$__VIEW_ID__ . '-4a8649a4'])>reactive</b></div>
                <div @class([$__VIEW_ID__ . '-882d9ad8'])><div @class([$__VIEW_ID__ . '-8fe4137a', 'dt-key'])><code @class([$__VIEW_ID__ . '-64e9a6f6'])>this.reactive()</code></div><span @class([$__VIEW_ID__ . '-8d7c501a'])>Vùng điều kiện hoặc lặp, nhận <code @class([$__VIEW_ID__ . '-539a71ef'])>stateKeys</code> và children factory</span><b @class([$__VIEW_ID__ . '-a0990722'])>reactive</b></div>
                <div @class([$__VIEW_ID__ . '-a2275c64'])><div @class([$__VIEW_ID__ . '-a4711450', 'dt-key'])><code @class([$__VIEW_ID__ . '-acf3101f'])>this.__foreach()</code></div><span @class([$__VIEW_ID__ . '-0e68405e'])>Lặp có slot cache; nhận <code @class([$__VIEW_ID__ . '-fe251e00'])>keyFn</code> từ <code @class([$__VIEW_ID__ . '-7be97823', 'directive-token'])>key</code></span><b @class([$__VIEW_ID__ . '-822e2660'])>loop</b></div>
                <div @class([$__VIEW_ID__ . '-4171a54e'])><div @class([$__VIEW_ID__ . '-5e77d60c', 'dt-key'])><code @class([$__VIEW_ID__ . '-1f4ac1b0'])>this.include()</code></div><span @class([$__VIEW_ID__ . '-180c12c2'])>Tạo child view; <code @class([$__VIEW_ID__ . '-d7a68673'])>stateKeys</code> khiến prop được đẩy lại khi state đổi</span><b @class([$__VIEW_ID__ . '-2e56cb25'])>component</b></div>
                <div @class([$__VIEW_ID__ . '-4ce3a788'])><div @class([$__VIEW_ID__ . '-2822e2f7', 'dt-key'])><code @class([$__VIEW_ID__ . '-2ab611d4'])>this.extendView()</code></div><span @class([$__VIEW_ID__ . '-fd21a414'])>Trả về view cha thay cho element tree</span><b @class([$__VIEW_ID__ . '-e1c4bb1e'])>layout</b></div>
                <div @class([$__VIEW_ID__ . '-673044c7'])><div @class([$__VIEW_ID__ . '-fe830c99', 'dt-key'])><code @class([$__VIEW_ID__ . '-834388b6'])>this.block()</code> / <code @class([$__VIEW_ID__ . '-3e01b60c'])>this.blockOutlet()</code></div><span @class([$__VIEW_ID__ . '-71dc0c4e'])>Đăng ký nội dung và tạo chỗ trống, nối theo tên</span><b @class([$__VIEW_ID__ . '-aa806c26'])>layout</b></div>
                <div @class([$__VIEW_ID__ . '-39e967ef'])><div @class([$__VIEW_ID__ . '-5131fffa', 'dt-key'])><code @class([$__VIEW_ID__ . '-acb7d6ba'])>this.section()</code> / <code @class([$__VIEW_ID__ . '-e05407dd'])>this.yield()</code></div><span @class([$__VIEW_ID__ . '-e23c3d79'])>Section và điểm xuất section</span><b @class([$__VIEW_ID__ . '-b1d71575'])>layout</b></div>
            </div>
            <p @class([$__VIEW_ID__ . '-d6184d28', 'ov-sub'])>Ba quy tắc bắt buộc</p>
            <ul @class([$__VIEW_ID__ . '-0f13e7e3', 'check-list'])>
                <li @class([$__VIEW_ID__ . '-f02a7567'])>Factory là lười — chỉ chạy trong <code @class([$__VIEW_ID__ . '-6f1c72ce'])>render()</code> hoặc re-render, không chạy trong constructor.</li>
                <li @class([$__VIEW_ID__ . '-b05748dd'])>Điểm chèn tường minh — element không tự <code @class([$__VIEW_ID__ . '-318aa126'])>appendChild</code>; vị trí do element cha cấp qua anchor.</li>
                <li @class([$__VIEW_ID__ . '-73d1100f'])>Vòng đời đầy đủ — mỗi element có <code @class([$__VIEW_ID__ . '-2a353149'])>render · start · pause · resume · destroy</code>, và children sinh ra khi re-render phải được <code @class([$__VIEW_ID__ . '-ad0393ea'])>start()</code> ngay nếu vùng cha đang hoạt động.</li>
            </ul>
            <div @class([$__VIEW_ID__ . '-d0822472', 'ov-note', 'ov-note--warn'])>
                <strong @class([$__VIEW_ID__ . '-40a0e698'])>Ràng buộc của <code @class([$__VIEW_ID__ . '-822c5433', 'directive-token'])>foreach</code>:</strong> slot chỉ được tái dùng khi cache key khớp <em @class([$__VIEW_ID__ . '-9cebeb7e'])>và</em> reference của item không đổi, vì compiled closure đóng gói item trực tiếp. Refetch trả object mới sẽ dựng lại hàng đó — muốn giữ state của view con qua mỗi lần đồng bộ thì lặp trên danh sách id ổn định rồi truyền dữ liệu qua props.
            </div>
        </div>

        <a @class([$__VIEW_ID__ . '-ceb15976', 'doc-next']) @attr(['href' => '/docs/runtime'])>
            <div @class([$__VIEW_ID__ . '-60f0ac7a'])><span @class([$__VIEW_ID__ . '-b7585c3f'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-8767f8f3'])>Runtime & hydration</strong></div>
            <span @class([$__VIEW_ID__ . '-8287de38', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
