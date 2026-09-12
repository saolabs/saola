@exec($__ONE_COMPONENT_REGISTRY__ = ['code-block' => 'web.components.code-block']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @section('meta:title', 'Directive trên Thẻ (#) - Cú pháp Ngắn gọn | Saola Docs')
    @section('meta:description', 'Tìm hiểu cú pháp directive trên thẻ (#) của Saola: #if, #foreach, #await viết trực tiếp trên tag HTML, tinh gọn markup và tối ưu DOM marker.')
    @section('meta:keywords', 'tag directives saola, cu phap the hashtag, #if, #foreach, #await, tag syntax saola')
    @block('doc')
        <header @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])>
                <p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>05</span> VIẾT VIEW</p>
                <h1 @class([$__VIEW_ID__ . '-Bdoc112'])>Directive trên thẻ (#).</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-Bdoc121'])>Cú pháp viết thuộc tính trực tiếp trên thẻ HTML: <code @class([$__VIEW_ID__ . '-Bdoc1211'])>#if</code>, <code @class([$__VIEW_ID__ . '-Bdoc1212'])>#switch</code>, <code @class([$__VIEW_ID__ . '-Bdoc1213'])>#foreach</code>... Compiler tự động hạ cú pháp về khối tương ứng trong bước tiền xử lý — gọn hơn hai dòng, cấu trúc template phẳng hơn mà không sinh thêm phụ tải runtime hay thay đổi hợp đồng marker.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-Bdoc2', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-Bdoc21', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc211'])>BẢN CHẤT</span> Tiền xử lý &amp; Hạ AST</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc22'])>Sugar syntax thuần — Bản chất là khối directive tương ứng.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc23'])>Viết <code @class([$__VIEW_ID__ . '-Bdoc231'])>&lt;p #if="open"&gt;…&lt;/p&gt;</code> là cách viết khác của <code @class([$__VIEW_ID__ . '-Bdoc232'])>&#64;if(open) &lt;p&gt;…&lt;/p&gt; &#64;endif</code>. Hàm tiền xử lý <code @class([$__VIEW_ID__ . '-Bdoc233'])>Support\Html::expandTagDirectives()</code> quét cây template và hạ toàn bộ thuộc tính <code @class([$__VIEW_ID__ . '-Bdoc234'])>#</code> về các khối <code @class([$__VIEW_ID__ . '-Bdoc235'])>&#64;</code> tương ứng trước khi AST Parser và bộ dịch biểu thức chạy.</p>
            
            <div @class([$__VIEW_ID__ . '-Bdoc24', 'ov-grid'])>
                <div @class([$__VIEW_ID__ . '-Bdoc241', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2411'])>Không runtime mới</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2412'])>Hạ ở tầng mã nguồn</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2413'])>Bộ hạ cú pháp phát ra đúng cấu trúc <code @class([$__VIEW_ID__ . '-Bdoc24131'])>&#64;if</code>, <code @class([$__VIEW_ID__ . '-Bdoc24132'])>&#64;switch</code>, <code @class([$__VIEW_ID__ . '-Bdoc24133'])>&#64;foreach</code>. Compiler downstream không cần biết template ban đầu được viết theo kiểu nào.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc242', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2421'])>Đồng bộ 100%</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2422'])>Bảo toàn Marker &amp; ID Parity</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2423'])>Vì cùng hạ thành một cây khối trước khi sinh mã, cấu trúc comment marker (<code @class([$__VIEW_ID__ . '-Bdoc24231'])>&lt;!--s:r:...--&gt;</code>) và định danh DOM (<code @class([$__VIEW_ID__ . '-Bdoc24232'])>e1r1k11</code>) giữa Blade SSR và TypeScript Client luôn trùng khớp tuyệt đối.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc243', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2431'])>Biểu thức an toàn</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2432'])>Tự động đổi biến state</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2433'])>Biểu thức trong <code @class([$__VIEW_ID__ . '-Bdoc24331'])>#if="cond"</code> đi qua cùng bộ tiền xử lý như <code @class([$__VIEW_ID__ . '-Bdoc24332'])>&#64;if</code>: tự động gắn <code @class([$__VIEW_ID__ . '-Bdoc24333'])>$cond</code> ở Blade SSR và giữ nguyên <code @class([$__VIEW_ID__ . '-Bdoc24334'])>cond</code> ở client reactive closure.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc244', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2441'])>Tránh lỗi gõ nhầm</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2442'])>Tập đóng an toàn</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2443'])>Chỉ 10 từ khoá được phép sau <code @class([$__VIEW_ID__ . '-Bdoc24431'])>#</code>. Gõ nhầm như <code @class([$__VIEW_ID__ . '-Bdoc24432'])>#fi="x"</code> sẽ báo lỗi biên dịch ngay lập tức, không bao giờ bị lọt thành thuộc tính HTML rác.</p>
                </div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc25', 'ov-sub'])>So sánh khi nào dùng cú pháp nào</p>
            <div @class([$__VIEW_ID__ . '-Bdoc26', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc261'])>
                    <div @class([$__VIEW_ID__ . '-Bdoc2611', 'dt-key'])>Dùng cú pháp trên thẻ <code @class([$__VIEW_ID__ . '-Bdoc26111'])>#</code></div>
                    <span @class([$__VIEW_ID__ . '-Bdoc2612'])>Khi điều kiện hoặc vòng lặp áp dụng trọn vẹn cho <strong @class([$__VIEW_ID__ . '-Bdoc26121'])>đúng một phần tử HTML</strong> hoặc component (kể cả phần tử cha có cây con nhiều tầng). Giúp template phẳng, giảm thụt lề và bớt hai dòng đóng/mở.</span>
                    <b @class([$__VIEW_ID__ . '-Bdoc2613'])>Khuyến nghị</b>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc262'])>
                    <div @class([$__VIEW_ID__ . '-Bdoc2621', 'dt-key'])>Dùng cú pháp khối <code @class([$__VIEW_ID__ . '-Bdoc26211'])>&#64;</code></div>
                    <span @class([$__VIEW_ID__ . '-Bdoc2622'])>Bắt buộc khi cần bọc <strong @class([$__VIEW_ID__ . '-Bdoc26221'])>nhiều thẻ đồng cấp</strong> (sibling) mà không muốn thêm thẻ <code @class([$__VIEW_ID__ . '-Bdoc26222'])>&lt;div&gt;</code> bao ngoài thừa, khi bọc đoạn văn bản trần (raw text), hoặc khi vùng logic không trùng biên thẻ HTML.</span>
                    <b @class([$__VIEW_ID__ . '-Bdoc2623'])>Khối rộng</b>
                </div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc27', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc271'])>TẬP ĐÓNG</span> Danh mục directive hỗ trợ</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc28'])>Mười chỉ thị duy nhất được phép sau dấu #.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc29'])>Ký hiệu <code @class([$__VIEW_ID__ . '-Bdoc291'])>#</code> trên thẻ là một <strong @class([$__VIEW_ID__ . '-Bdoc292'])>tập đóng tuyệt đối (closed set)</strong>. Mọi từ khoá lạ không nằm trong bảng dưới đây đều kích hoạt <code @class([$__VIEW_ID__ . '-Bdoc293'])>CompileException</code>:</p>

            <div @class([$__VIEW_ID__ . '-Bdoc2e10_', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e10_1'])><div @class([$__VIEW_ID__ . '-Bdoc2e10_11', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e10_111'])>#if="expr"</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e10_12'])>Điều kiện rẽ nhánh đầu tiên. Bọc toàn bộ phần tử mang nó.</span><b @class([$__VIEW_ID__ . '-Bdoc2e10_13'])>rẽ nhánh</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e10_2'])><div @class([$__VIEW_ID__ . '-Bdoc2e10_21', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e10_211'])>#elseif="expr"</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e10_22'])>Nhánh rẽ tiếp theo. Bắt buộc đứng trên thẻ anh em (sibling) liền kề ngay sau <code @class([$__VIEW_ID__ . '-Bdoc2e10_221'])>#if</code> hoặc <code @class([$__VIEW_ID__ . '-Bdoc2e10_222'])>#elseif</code>.</span><b @class([$__VIEW_ID__ . '-Bdoc2e10_23'])>rẽ nhánh</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e10_3'])><div @class([$__VIEW_ID__ . '-Bdoc2e10_31', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e10_311'])>#else</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e10_32'])>Nhánh mặc định cuối cùng. Không nhận giá trị biểu thức. Bắt buộc là sibling liền kề.</span><b @class([$__VIEW_ID__ . '-Bdoc2e10_33'])>rẽ nhánh</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e10_4'])><div @class([$__VIEW_ID__ . '-Bdoc2e10_41', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e10_411'])>#switch="expr"</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e10_42'])>Rẽ nhánh đa trường hợp. <strong @class([$__VIEW_ID__ . '-Bdoc2e10_421'])>Đặc thù:</strong> Bọc ruột container (thẻ cha vẫn render bình thường).</span><b @class([$__VIEW_ID__ . '-Bdoc2e10_43'])>chọn giá trị</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e10_5'])><div @class([$__VIEW_ID__ . '-Bdoc2e10_51', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e10_511'])>#case="val"</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e10_52'])>Trường hợp cụ thể trong <code @class([$__VIEW_ID__ . '-Bdoc2e10_521'])>#switch</code>, phải là con trực tiếp. Tự động chèn <code @class([$__VIEW_ID__ . '-Bdoc2e10_522'])>&#64;break</code>.</span><b @class([$__VIEW_ID__ . '-Bdoc2e10_53'])>chọn giá trị</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e10_6'])><div @class([$__VIEW_ID__ . '-Bdoc2e10_61', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e10_611'])>#default</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e10_62'])>Trường hợp mặc định trong <code @class([$__VIEW_ID__ . '-Bdoc2e10_621'])>#switch</code>, không nhận giá trị. Tự động chèn <code @class([$__VIEW_ID__ . '-Bdoc2e10_622'])>&#64;break</code>.</span><b @class([$__VIEW_ID__ . '-Bdoc2e10_63'])>chọn giá trị</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e10_7'])><div @class([$__VIEW_ID__ . '-Bdoc2e10_71', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e10_711'])>#foreach="arr as item"</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e10_72'])>Vòng lặp duyệt mảng hoặc collection. Bọc toàn bộ thẻ mang nó.</span><b @class([$__VIEW_ID__ . '-Bdoc2e10_73'])>vòng lặp</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e10_8'])><div @class([$__VIEW_ID__ . '-Bdoc2e10_81', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e10_811'])>#for="init; cond; step"</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e10_82'])>Vòng lặp số đếm truyền thống. Bọc toàn bộ thẻ mang nó.</span><b @class([$__VIEW_ID__ . '-Bdoc2e10_83'])>vòng lặp</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e10_9'])><div @class([$__VIEW_ID__ . '-Bdoc2e10_91', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e10_911'])>#while="cond"</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e10_92'])>Vòng lặp theo điều kiện. Bọc toàn bộ thẻ mang nó.</span><b @class([$__VIEW_ID__ . '-Bdoc2e10_93'])>vòng lặp</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e10_e10_'])><div @class([$__VIEW_ID__ . '-Bdoc2e10_e10_1', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e10_e10_11'])>#key="expr"</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e10_e10_2'])>Bổ trợ vòng lặp (đi kèm <code @class([$__VIEW_ID__ . '-Bdoc2e10_e10_21'])>#foreach</code>/<code @class([$__VIEW_ID__ . '-Bdoc2e10_e10_22'])>#for</code>), khai báo khoá định danh ổn định DOM slot.</span><b @class([$__VIEW_ID__ . '-Bdoc2e10_e10_3'])>định danh</b></div>
            </div>

            <div @class([$__VIEW_ID__ . '-Bdoc2e11_', 'ov-note']) @attr(['style' => 'margin-top: 24px;'])>
                <strong @class([$__VIEW_ID__ . '-Bdoc2e11_1'])>Lưu ý về dấu <code @class([$__VIEW_ID__ . '-Bdoc2e11_11'])>#</code> trong HTML và CSS:</strong> Compiler chỉ xử lý ký tự <code @class([$__VIEW_ID__ . '-Bdoc2e11_2'])>#</code> khi nó xuất hiện ở vị trí <strong @class([$__VIEW_ID__ . '-Bdoc2e11_3'])>tên thuộc tính</strong> bắt đầu bằng <code @class([$__VIEW_ID__ . '-Bdoc2e11_4'])>#</code>. Các trường hợp như mã màu CSS (<code @class([$__VIEW_ID__ . '-Bdoc2e11_5'])>style="color: #fff"</code>), liên kết neo (<code @class([$__VIEW_ID__ . '-Bdoc2e11_6'])>href="#top"</code>), hay chuỗi văn bản bên trong biểu thức <code @class([$__VIEW_ID__ . '-Bdoc2e11_7'])>&#123;&#123; ... &#125;&#125;</code> đều được giữ nguyên 100%.
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc2e12_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e12_1'])>RẼ NHÁNH</span> #if · #elseif · #else</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e13_'])>Điều kiện linh hoạt từ thẻ đơn tới cả cây con.</h2>
            
            <p @class([$__VIEW_ID__ . '-Bdoc2e14_'])><strong @class([$__VIEW_ID__ . '-Bdoc2e14_1'])>1. Thẻ đơn giản:</strong> Bọc trọn một phần tử duy nhất.</p>
            @startMarker('component', 'Bdoc2c1')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_0'))
@verbatim
<!-- Viết trên thẻ -->
&lt;p class="notice" #if="hasError"&gt;{{ errorMessage }}&lt;/p&gt;

<!-- Compiler hạ thành -->
&#64;if(hasError)
&lt;p class="notice"&gt;{{ errorMessage }}&lt;/p&gt;
&#64;endif
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_0'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__0_content])
@endMarker('component', 'Bdoc2c1')

            <p @class([$__VIEW_ID__ . '-Bdoc2e15_'])><strong @class([$__VIEW_ID__ . '-Bdoc2e15_1'])>2. Chuỗi rẽ nhánh anh em liền kề (Sibling Chaining):</strong> Các nhánh <code @class([$__VIEW_ID__ . '-Bdoc2e15_2'])>#elseif</code> và <code @class([$__VIEW_ID__ . '-Bdoc2e15_3'])>#else</code> phải là các thẻ anh em đứng kế tiếp nhau, chỉ được phép cách nhau bởi khoảng trắng hoặc comment.</p>
            @startMarker('component', 'Bdoc2c2')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_1'))
@verbatim
&lt;div class="status-wrap"&gt;
    &lt;span class="badge success" #if="status === 'done'"&gt;Hoàn tất&lt;/span&gt;
    &lt;span class="badge warning" #elseif="status === 'pending'"&gt;Đang chờ&lt;/span&gt;
    &lt;span class="badge danger" #else&gt;Thất bại&lt;/span&gt;
&lt;/div&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__1_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_1'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__1_content])
@endMarker('component', 'Bdoc2c2')

            <p @class([$__VIEW_ID__ . '-Bdoc2e16_'])><strong @class([$__VIEW_ID__ . '-Bdoc2e16_1'])>3. Thẻ cha bao bọc cây con nhiều tầng:</strong> Khi gắn <code @class([$__VIEW_ID__ . '-Bdoc2e16_2'])>#if</code> lên thẻ bao ngoài, compiler tìm đúng thẻ đóng của chính thẻ đó và bọc toàn bộ cây. Chỉ sinh <strong @class([$__VIEW_ID__ . '-Bdoc2e16_3'])>một reactive scope duy nhất</strong> cho điều kiện ngoài cùng; các binding bên trong cây con vẫn giữ subscription độc lập mà không bị re-render thừa.</p>
            @startMarker('component', 'Bdoc2c3')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_2'))
@verbatim
&lt;div class="modal-backdrop" #if="isOpen"&gt;
    &lt;div class="modal-dialog"&gt;
        &lt;header class="modal-head"&gt;
            &lt;h3&gt;{{ modalTitle }}&lt;/h3&gt;
            &lt;button &#64;click(closeModal())&gt;✕&lt;/button&gt;
        &lt;/header&gt;
        &lt;div class="modal-body"&gt;
            &lt;p&gt;Nội dung bên trong giữ nguyên tính năng reactivity độc lập.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__2_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_2'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__2_content])
@endMarker('component', 'Bdoc2c3')

            <p @class([$__VIEW_ID__ . '-Bdoc2e17_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e17_1'])>SWITCH</span> #switch · #case · #default</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e18_'])>Bọc ruột container và tự động ngắt break.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e19_'])><code @class([$__VIEW_ID__ . '-Bdoc2e19_1'])>#switch</code> có cơ chế hoạt động khác biệt so với <code @class([$__VIEW_ID__ . '-Bdoc2e19_2'])>#if</code>: nó <strong @class([$__VIEW_ID__ . '-Bdoc2e19_3'])>không bọc chính thẻ mang nó</strong> mà bọc <strong @class([$__VIEW_ID__ . '-Bdoc2e19_4'])>phần ruột bên trong</strong>. Thẻ cha vẫn luôn render ra DOM bình thường, chỉ có các thẻ con bên trong được rẽ nhánh theo giá trị.</p>

            @startMarker('component', 'Bdoc2c4')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_3'))
@verbatim
&lt;!-- Thẻ div.tab-content luôn hiện diện trong DOM --&gt;
&lt;div class="tab-content" #switch="currentTab"&gt;
    &lt;section class="pane" #case="'overview'"&gt;Tổng quan hệ thống&lt;/section&gt;
    &lt;section class="pane" #case="'analytics'"&gt;Báo cáo số liệu&lt;/section&gt;
    &lt;section class="pane" #case="'settings'"&gt;Cấu hình tài khoản&lt;/section&gt;
    &lt;section class="pane" #default&gt;Vui lòng chọn tab hợp lệ&lt;/section&gt;
&lt;/div&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__3_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_3'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__3_content])
@endMarker('component', 'Bdoc2c4')

            <p @class([$__VIEW_ID__ . '-Bdoc2e20_'])>Sau khi hạ cú pháp, compiler tự động phát <code @class([$__VIEW_ID__ . '-Bdoc2e20_1'])>&#64;break</code> sau mỗi nhánh, bạn không bao giờ phải viết <code @class([$__VIEW_ID__ . '-Bdoc2e20_2'])>&#64;break</code> bằng tay:</p>
            @startMarker('component', 'Bdoc2c5')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_4'))
@verbatim
&lt;div class="tab-content"&gt;
    &#64;switch(currentTab)
    &#64;case('overview')
    &lt;section class="pane"&gt;Tổng quan hệ thống&lt;/section&gt;
    &#64;break
    &#64;case('analytics')
    &lt;section class="pane"&gt;Báo cáo số liệu&lt;/section&gt;
    &#64;break
    &#64;case('settings')
    &lt;section class="pane"&gt;Cấu hình tài khoản&lt;/section&gt;
    &#64;break
    &#64;default
    &lt;section class="pane"&gt;Vui lòng chọn tab hợp lệ&lt;/section&gt;
    &#64;endswitch
&lt;/div&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__4_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_4'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__4_content])
@endMarker('component', 'Bdoc2c5')

            <div @class([$__VIEW_ID__ . '-Bdoc2e21_', 'ov-note'])>
                <strong @class([$__VIEW_ID__ . '-Bdoc2e21_1'])>Ràng buộc bắt buộc của #switch:</strong> Mọi thẻ con trực tiếp của thẻ mang <code @class([$__VIEW_ID__ . '-Bdoc2e21_2'])>#switch</code> phải mang <code @class([$__VIEW_ID__ . '-Bdoc2e21_3'])>#case</code> hoặc <code @class([$__VIEW_ID__ . '-Bdoc2e21_4'])>#default</code>. Nếu để text node trần hoặc thẻ không điều kiện xen vào giữa các nhánh trong <code @class([$__VIEW_ID__ . '-Bdoc2e21_5'])>#switch</code>, compiler sẽ báo lỗi biên dịch ngay để ngăn ngừa tình trạng lệch trạng thái SSR/CSR.
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc2e22_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e22_1'])>VÒNG LẶP</span> #foreach · #for · #while và #key</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e23_'])>Duyệt danh sách ngắn gọn trên thẻ lặp.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e24_'])>Viết <code @class([$__VIEW_ID__ . '-Bdoc2e24_1'])>#foreach</code> trực tiếp trên thẻ lặp (như <code @class([$__VIEW_ID__ . '-Bdoc2e24_2'])>&lt;li&gt;</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e24_3'])>&lt;tr&gt;</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e24_4'])>&lt;div.card&gt;</code>). Đi kèm là <code @class([$__VIEW_ID__ . '-Bdoc2e24_5'])>#key</code> để chỉ định thuộc tính định danh duy nhất cho từng phần tử trong danh sách:</p>

            @startMarker('component', 'Bdoc2c6')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_5'))
@verbatim
&lt;ul class="user-list"&gt;
    &lt;li class="user-row" #foreach="users as user" #key="user['id']"&gt;
        &lt;span class="name"&gt;{{ user['name'] }}&lt;/span&gt;
        &lt;span class="role"&gt;{{ user['role'] }}&lt;/span&gt;
    &lt;/li&gt;
&lt;/ul&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__5_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_5'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__5_content])
@endMarker('component', 'Bdoc2c6')

            <div @class([$__VIEW_ID__ . '-Bdoc2e25_', 'ov-grid'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e25_1', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e25_11'])>Thứ tự tự do</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e25_12'])>#key đi trước hoặc sau</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e25_13'])>Bạn có thể viết <code @class([$__VIEW_ID__ . '-Bdoc2e25_131'])>#key</code> trước hoặc sau <code @class([$__VIEW_ID__ . '-Bdoc2e25_132'])>#foreach</code> trên cùng một thẻ: <code @class([$__VIEW_ID__ . '-Bdoc2e25_133'])>&lt;tr #key="r.id" #foreach="rows as r"&gt;</code> đều hợp lệ.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e25_2', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e25_21'])>Hiệu năng DOM</span>
                    <h3 @class([$__VIEW_ID__ . '-Bdoc2e25_22'])>ForeachSlotCache</h3>
                    <p @class([$__VIEW_ID__ . '-Bdoc2e25_23'])>Khoá <code @class([$__VIEW_ID__ . '-Bdoc2e25_231'])>#key</code> cho phép runtime giữ nguyên các node DOM cũ khi danh sách bị xáo trộn hoặc thêm mới, tránh tạo lại thẻ và giật giao diện.</p>
                </div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc2e26_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e26_1'])>QUY TẮC</span> Bốn bất biến cần ghi nhớ</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e27_'])>Thiết kế an toàn, bắt lỗi sớm lúc compile.</h2>

            <div @class([$__VIEW_ID__ . '-Bdoc2e28_', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e28_1'])>
                    <div @class([$__VIEW_ID__ . '-Bdoc2e28_11', 'dt-key'])>1. Một thẻ — Một directive điều khiển</div>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e28_12'])>Không được kết hợp <code @class([$__VIEW_ID__ . '-Bdoc2e28_121'])>#if</code> và <code @class([$__VIEW_ID__ . '-Bdoc2e28_122'])>#foreach</code> trên cùng một thẻ. Saola chủ động cấm điều này để tránh bẫy thứ tự ưu tiên khó đoán. <em @class([$__VIEW_ID__ . '-Bdoc2e28_123'])>Cách khắc phục:</em> Đưa <code @class([$__VIEW_ID__ . '-Bdoc2e28_124'])>#if</code> xuống thẻ con hoặc lọc mảng trong controller/computed trước.</span>
                    <b @class([$__VIEW_ID__ . '-Bdoc2e28_13'])>bắt buộc</b>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e28_2'])>
                    <div @class([$__VIEW_ID__ . '-Bdoc2e28_21', 'dt-key'])>2. Thẻ mang # phải có thẻ đóng tường minh</div>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e28_22'])>Thẻ mang <code @class([$__VIEW_ID__ . '-Bdoc2e28_221'])>#</code> không được bỏ lửng. Thẻ có con phải có thẻ đóng mở đầy đủ (<code @class([$__VIEW_ID__ . '-Bdoc2e28_222'])>&lt;div&gt;...&lt;/div&gt;</code>); thẻ void element phải tự đóng (<code @class([$__VIEW_ID__ . '-Bdoc2e28_223'])>&lt;img ... /&gt;</code>).</span>
                    <b @class([$__VIEW_ID__ . '-Bdoc2e28_23'])>cú pháp</b>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e28_3'])>
                    <div @class([$__VIEW_ID__ . '-Bdoc2e28_31', 'dt-key'])>3. Chuỗi rẽ nhánh phải là sibling liền kề</div>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e28_32'])>Không được chèn bất kỳ thẻ HTML nào khác vào giữa thẻ mang <code @class([$__VIEW_ID__ . '-Bdoc2e28_321'])>#if</code> và <code @class([$__VIEW_ID__ . '-Bdoc2e28_322'])>#elseif</code>/<code @class([$__VIEW_ID__ . '-Bdoc2e28_323'])>#else</code>. Chúng phải đứng sát nhau trong cùng một thẻ cha.</span>
                    <b @class([$__VIEW_ID__ . '-Bdoc2e28_33'])>cấu trúc</b>
                </div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e28_4'])>
                    <div @class([$__VIEW_ID__ . '-Bdoc2e28_41', 'dt-key'])>4. Không bắt chéo biên thẻ và biên khối</div>
                    <span @class([$__VIEW_ID__ . '-Bdoc2e28_42'])>Không được mở <code @class([$__VIEW_ID__ . '-Bdoc2e28_421'])>&#64;if</code> bên ngoài rồi đóng thẻ mang <code @class([$__VIEW_ID__ . '-Bdoc2e28_422'])>#</code> bên trong hoặc ngược lại. Cấu trúc lồng nhau phải phân tầng rõ ràng.</span>
                    <b @class([$__VIEW_ID__ . '-Bdoc2e28_43'])>lồng nhau</b>
                </div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc2e29_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e29_1'])>TRẢI NGHIỆM</span> Tương tác &amp; So sánh trực tiếp</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e30_'])>Thử nghiệm thực tế trên Interactive Demo.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e31_'])>Trang Lab đã có sẵn bài demo tương tác hai chiều kiểm tra tính tương đương của directive khối và directive trên thẻ. Bạn có thể bấm đổi trạng thái, tăng số đếm và so sánh song song mã nguồn của cả hai cách viết:</p>

            <div @class([$__VIEW_ID__ . '-Bdoc2e32_', 'ov-note']) @attr(['style' => 'margin-top: 16px; display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap;'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e32_1'])>
                    <strong @class([$__VIEW_ID__ . '-Bdoc2e32_11'])>Demo Directive viết trên thẻ:</strong> Trải nghiệm bộ nút chuyển đổi <code @class([$__VIEW_ID__ . '-Bdoc2e32_12'])>mode = a | b | x</code>, lặp bảng dữ liệu và xem cấu trúc mã nguồn đối đầu giữa cú pháp <code @class([$__VIEW_ID__ . '-Bdoc2e32_13'])>&#64;</code> và <code @class([$__VIEW_ID__ . '-Bdoc2e32_14'])>#</code>.
                </div>
                <a @class([$__VIEW_ID__ . '-Bdoc2e32_2', 'button', 'button-primary']) @attr(['href' => '/demo/tag-directives', 'style' => 'white-space: nowrap;'])>Mở Demo tương tác ↗</a>
            </div>
        </div>

        <a @class([$__VIEW_ID__ . '-Bdoc3', 'doc-next']) @attr(['href' => '/docs/reactivity'])>
            <div @class([$__VIEW_ID__ . '-Bdoc31'])><span @class([$__VIEW_ID__ . '-Bdoc311'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-Bdoc312'])>State &amp; reactivity</strong></div>
            <span @class([$__VIEW_ID__ . '-Bdoc32', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
