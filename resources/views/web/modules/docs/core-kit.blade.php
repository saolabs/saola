@exec($__ONE_COMPONENT_REGISTRY__ = ['code-window' => 'web.components.code-window']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])>
                <p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>13</span> BACKEND</p>
                <h1 @class([$__VIEW_ID__ . '-Bdoc112'])>Hạ tầng lõi.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-Bdoc121'])>Ngoài bốn tầng nghiệp vụ, core còn mang sẵn một bộ hạ tầng: view engine, cache, hàng đợi, mail, đa ngôn ngữ, HTTP client, file và tác vụ bất đồng bộ.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-Bdoc2', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-Bdoc21', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc211'])>ENGINES</span> Nơi view được phân giải</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc22'])>Engine là phần chạy dưới mọi request.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc23'])>Đây là nhóm bạn hiếm khi gọi trực tiếp nhưng luôn phụ thuộc vào. <code @class([$__VIEW_ID__ . '-Bdoc231'])>ViewContextManager</code> chính là thứ cấp bảng <a @class([$__VIEW_ID__ . '-Bdoc232']) @attr(['href' => '/docs/system-vars'])>biến hệ thống</a>, còn <code @class([$__VIEW_ID__ . '-Bdoc233'])>ViewPathResolver</code> là thứ biến <code @class([$__VIEW_ID__ . '-Bdoc234'])>__layout__ + 'docs'</code> thành file thật.</p>
            <div @class([$__VIEW_ID__ . '-Bdoc24', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc241'])><div @class([$__VIEW_ID__ . '-Bdoc2411', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24111'])>ViewContextManager</code></div><span @class([$__VIEW_ID__ . '-Bdoc2412'])>Giữ cấu hình từng context và dựng bảng biến đường dẫn</span><b @class([$__VIEW_ID__ . '-Bdoc2413'])>view</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc242'])><div @class([$__VIEW_ID__ . '-Bdoc2421', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24211'])>ViewContextRegistry</code></div><span @class([$__VIEW_ID__ . '-Bdoc2422'])>Sổ context theo request — Octane không rò state sang request sau</span><b @class([$__VIEW_ID__ . '-Bdoc2423'])>view</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc243'])><div @class([$__VIEW_ID__ . '-Bdoc2431', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24311'])>ViewPathResolver</code></div><span @class([$__VIEW_ID__ . '-Bdoc2432'])>Biến biến đường dẫn thành file view thật</span><b @class([$__VIEW_ID__ . '-Bdoc2433'])>view</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc244'])><div @class([$__VIEW_ID__ . '-Bdoc2441', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24411'])>ViewEngine</code> · <code @class([$__VIEW_ID__ . '-Bdoc24412'])>ViewManager</code></div><span @class([$__VIEW_ID__ . '-Bdoc2442'])>Render view và quản lý vòng đời phía server</span><b @class([$__VIEW_ID__ . '-Bdoc2443'])>view</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc245'])><div @class([$__VIEW_ID__ . '-Bdoc2451', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24511'])>ViewDataEngine</code></div><span @class([$__VIEW_ID__ . '-Bdoc2452'])>Gom dữ liệu đưa xuống view, gồm cả phần cho hydrate</span><b @class([$__VIEW_ID__ . '-Bdoc2453'])>view</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc246'])><div @class([$__VIEW_ID__ . '-Bdoc2461', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24611'])>CacheEngine</code></div><span @class([$__VIEW_ID__ . '-Bdoc2462'])>Cache theo domain và key chuẩn hoá — nền cho <code @class([$__VIEW_ID__ . '-Bdoc24621'])>CacheAction</code> của repository</span><b @class([$__VIEW_ID__ . '-Bdoc2463'])>cache</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc247'])><div @class([$__VIEW_ID__ . '-Bdoc2471', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24711'])>ShortCode</code></div><span @class([$__VIEW_ID__ . '-Bdoc2472'])>Thẻ ngắn trong nội dung do người dùng nhập: <code @class([$__VIEW_ID__ . '-Bdoc24721'])>add</code>, <code @class([$__VIEW_ID__ . '-Bdoc24722'])>remove</code>, <code @class([$__VIEW_ID__ . '-Bdoc24723'])>apply</code></span><b @class([$__VIEW_ID__ . '-Bdoc2473'])>nội dung</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc248'])><div @class([$__VIEW_ID__ . '-Bdoc2481', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24811'])>DCryptEngine</code></div><span @class([$__VIEW_ID__ . '-Bdoc2482'])>Mã hoá/giải mã hai chiều cho dữ liệu cần giấu mà vẫn phải đọc lại</span><b @class([$__VIEW_ID__ . '-Bdoc2483'])>bảo mật</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc249'])><div @class([$__VIEW_ID__ . '-Bdoc2491', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24911'])>JsonData</code></div><span @class([$__VIEW_ID__ . '-Bdoc2492'])>Đọc ghi cấu trúc JSON như một kho dữ liệu nhỏ</span><b @class([$__VIEW_ID__ . '-Bdoc2493'])>dữ liệu</b></div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc25', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc251'])>NỀN TẢNG</span> Việc chạy ngoài request</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc26'])>Hàng đợi, mail và tác vụ bất đồng bộ.</h2>
            <div @class([$__VIEW_ID__ . '-Bdoc27', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc271'])><div @class([$__VIEW_ID__ . '-Bdoc2711', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27111'])>Queue</code></div><span @class([$__VIEW_ID__ . '-Bdoc2712'])><code @class([$__VIEW_ID__ . '-Bdoc27121'])>add()</code> đẩy việc vào hàng đợi, <code @class([$__VIEW_ID__ . '-Bdoc27122'])>delay()</code> hoãn, <code @class([$__VIEW_ID__ . '-Bdoc27123'])>setTimeout()</code> giới hạn thời gian chạy, <code @class([$__VIEW_ID__ . '-Bdoc27124'])>enabled()</code> để tắt trong môi trường không có worker</span><b @class([$__VIEW_ID__ . '-Bdoc2713'])>hàng đợi</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc272'])><div @class([$__VIEW_ID__ . '-Bdoc2721', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27211'])>QueueWork</code></div><span @class([$__VIEW_ID__ . '-Bdoc2722'])>Đơn vị công việc mà worker nhặt lên xử lý</span><b @class([$__VIEW_ID__ . '-Bdoc2723'])>hàng đợi</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc273'])><div @class([$__VIEW_ID__ . '-Bdoc2731', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27311'])>Email</code></div><span @class([$__VIEW_ID__ . '-Bdoc2732'])>Dựng và gửi mail: <code @class([$__VIEW_ID__ . '-Bdoc27321'])>addAddress()</code> rồi gửi; <code @class([$__VIEW_ID__ . '-Bdoc27322'])>__call</code> chuyển tiếp sang message của mailer bên dưới</span><b @class([$__VIEW_ID__ . '-Bdoc2733'])>mail</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc274'])><div @class([$__VIEW_ID__ . '-Bdoc2741', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27411'])>Mailer\Job</code></div><span @class([$__VIEW_ID__ . '-Bdoc2742'])>Gửi mail qua hàng đợi thay vì chặn request</span><b @class([$__VIEW_ID__ . '-Bdoc2743'])>mail</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc275'])><div @class([$__VIEW_ID__ . '-Bdoc2751', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27511'])>Await</code></div><span @class([$__VIEW_ID__ . '-Bdoc2752'])>Chờ kết quả bất đồng bộ trong luồng PHP đồng bộ</span><b @class([$__VIEW_ID__ . '-Bdoc2753'])>async</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc276'])><div @class([$__VIEW_ID__ . '-Bdoc2761', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27611'])>Promise</code></div><span @class([$__VIEW_ID__ . '-Bdoc2762'])>Ghép nhiều tác vụ chạy song song rồi gom kết quả</span><b @class([$__VIEW_ID__ . '-Bdoc2763'])>async</b></div>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc28', 'ov-note'])>
                <code @class([$__VIEW_ID__ . '-Bdoc281'])>Queue::enabled()</code> tồn tại để cùng một đoạn code chạy được ở máy dev không bật worker: hàng đợi tắt thì việc chạy đồng bộ ngay, không cần rẽ nhánh trong nghiệp vụ.
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc29', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc291'])>RA NGOÀI</span> Mạng, file, ngôn ngữ</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e10_'])>Ba nhóm còn lại.</h2>
            <div @class([$__VIEW_ID__ . '-Bdoc2e11_', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e11_1'])><div @class([$__VIEW_ID__ . '-Bdoc2e11_11', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e11_111'])>Http\Client</code> · <code @class([$__VIEW_ID__ . '-Bdoc2e11_112'])>Curl</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e11_12'])>Gọi API bên ngoài; <code @class([$__VIEW_ID__ . '-Bdoc2e11_121'])>HttpPromise</code> cho nhiều request song song</span><b @class([$__VIEW_ID__ . '-Bdoc2e11_13'])>mạng</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e11_2'])><div @class([$__VIEW_ID__ . '-Bdoc2e11_21', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e11_211'])>Http\BaseApi</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e11_22'])>Lớp nền để bọc một API bên thứ ba thành service của dự án</span><b @class([$__VIEW_ID__ . '-Bdoc2e11_23'])>mạng</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e11_3'])><div @class([$__VIEW_ID__ . '-Bdoc2e11_31', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e11_311'])>Crawler</code> · <code @class([$__VIEW_ID__ . '-Bdoc2e11_312'])>Crawl</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e11_32'])>Lấy và bóc tách nội dung trang ngoài</span><b @class([$__VIEW_ID__ . '-Bdoc2e11_33'])>mạng</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e11_4'])><div @class([$__VIEW_ID__ . '-Bdoc2e11_41', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e11_411'])>Files\File</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e11_42'])><code @class([$__VIEW_ID__ . '-Bdoc2e11_421'])>setPath</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e11_422'])>setContent</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e11_423'])>pull</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e11_424'])>push</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e11_425'])>update</code> — thao tác file theo đối tượng</span><b @class([$__VIEW_ID__ . '-Bdoc2e11_43'])>file</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e11_5'])><div @class([$__VIEW_ID__ . '-Bdoc2e11_51', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e11_511'])>FileConverter</code> · <code @class([$__VIEW_ID__ . '-Bdoc2e11_512'])>FileType</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e11_52'])>Chuyển định dạng và nhận dạng loại file</span><b @class([$__VIEW_ID__ . '-Bdoc2e11_53'])>file</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e11_6'])><div @class([$__VIEW_ID__ . '-Bdoc2e11_61', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e11_611'])>FileUploaded</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e11_62'])>File người dùng tải lên — đi cùng <code @class([$__VIEW_ID__ . '-Bdoc2e11_621'])>ModelFileMethods</code> ở tầng model</span><b @class([$__VIEW_ID__ . '-Bdoc2e11_63'])>file</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e11_7'])><div @class([$__VIEW_ID__ . '-Bdoc2e11_71', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e11_711'])>Locale</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e11_72'])><code @class([$__VIEW_ID__ . '-Bdoc2e11_721'])>set</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e11_722'])>get</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e11_723'])>setDefault</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e11_724'])>setCurrent</code> — ngôn ngữ hiện hành của request</span><b @class([$__VIEW_ID__ . '-Bdoc2e11_73'])>ngôn ngữ</b></div>
            </div>
            <p @class([$__VIEW_ID__ . '-Bdoc2e12_'])>Chuỗi dạng <code @class([$__VIEW_ID__ . '-Bdoc2e12_1'])>@text:admin.users.module.title</code> trong khai báo module đi qua đúng tầng <code @class([$__VIEW_ID__ . '-Bdoc2e12_2'])>Locale</code> này — nhờ vậy tiêu đề module dịch được mà không phải viết code rẽ nhánh.</p>

            <p @class([$__VIEW_ID__ . '-Bdoc2e13_', 'ov-note'])>
                Trang này chỉ điểm mặt để bạn biết cái gì có sẵn. Cách dùng chi tiết của từng nhóm nằm trong <code @class([$__VIEW_ID__ . '-Bdoc2e13_1'])>core/docs</code> và thư mục <code @class([$__VIEW_ID__ . '-Bdoc2e13_2'])>examples</code>.
            </p>
        </div>
    @endblock
