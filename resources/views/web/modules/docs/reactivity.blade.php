@exec($__ONE_COMPONENT_REGISTRY__ = ['code-block' => 'web.components.code-block']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($demoCount, 5)
@useState($demoName, 'Saola')
@extends($__layout__ . "docs")
    @section('meta:title', 'State và Element API - Hệ thống Phản ứng Saola')
    @section('meta:description', 'Cơ chế phản ứng (Reactivity) trong Saola: Khai báo @states, cập nhật trạng thái tự động, Element API và đồng bộ DOM hai chiều.')
    @section('meta:keywords', 'saola reactivity, state management, element api, states directive, phan ung du lieu')
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

            <p @class([$__VIEW_ID__ . '-Bdoc26', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc261'])>VÍ DỤ TRỰC QUAN</span> Thao tác State &amp; Binding trực tiếp</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc27'])>Ví dụ chạy thật: Bộ đếm &amp; Liên kết hai chiều.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc28'])>Widget bên dưới chạy trực tiếp trên Saola Runtime. Khi bấm nút hoặc nhập dữ liệu, runtime kích hoạt Element API và cập nhật đúng vùng marker tương ứng mà không cần render lại toàn bộ component:</p>

            <div @class([$__VIEW_ID__ . '-Bdoc29', 'ov-card']) @attr(['style' => 'margin-bottom: 2rem; border-color: var(--primary, #0284c7); padding: 1.5rem;'])>
                <div @class([$__VIEW_ID__ . '-Bdoc291']) @attr(['style' => 'display: flex; flex-wrap: wrap; gap: 2rem; align-items: flex-start;'])>
                    <div @class([$__VIEW_ID__ . '-Bdoc2911']) @attr(['style' => 'flex: 1; min-width: 260px;'])>
                        <span @class([$__VIEW_ID__ . '-Bdoc29111']) @attr(['style' => 'display: block; font-size: 0.75rem; font-weight: 700; color: var(--primary, #0284c7); margin-bottom: 0.5rem; text-transform: uppercase;'])>Live Component Sandbox</span>
                        <div @class([$__VIEW_ID__ . '-Bdoc29112']) @attr(['style' => 'margin-bottom: 1.25rem;'])>
                            <label @class([$__VIEW_ID__ . '-Bdoc291121']) @attr(['style' => 'display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.35rem;'])>1. State số đếm (<code @class([$__VIEW_ID__ . '-Bdoc2911211'])>&#64;states</code>):</label>
                            <div @class([$__VIEW_ID__ . '-Bdoc291122']) @attr(['style' => 'display: flex; align-items: center; gap: 0.75rem;'])>
                                <div @class([$__VIEW_ID__ . '-Bdoc2911221', 'sao-stepper'])>
                                    <button @class([$__VIEW_ID__ . '-Bdoc29112211', 'sao-stepper-btn']) @attr(['type' => 'button', 'aria-label' => 'Giảm'])>−</button>
                                    <span @class([$__VIEW_ID__ . '-Bdoc29112212', 'sao-stepper-val'])>@startMarker('output', 'Bdoc29112212o1'){{ $demoCount }}@endMarker('output', 'Bdoc29112212o1')</span>
                                    <button @class([$__VIEW_ID__ . '-Bdoc29112213', 'sao-stepper-btn']) @attr(['type' => 'button', 'aria-label' => 'Tăng'])>+</button>
                                </div>
                                <button @class([$__VIEW_ID__ . '-Bdoc2911222', 'button', 'button-sm', 'button-light']) @attr(['type' => 'button'])>↺ Đặt lại</button>
                            </div>
                        </div>

                        <div @class([$__VIEW_ID__ . '-Bdoc29113'])>
                            <label @class([$__VIEW_ID__ . '-Bdoc291131']) @attr(['style' => 'display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.35rem;'])>2. Liên kết 2 chiều (<code @class([$__VIEW_ID__ . '-Bdoc2911311'])>&#64;bind</code>):</label>
                            <input @class([$__VIEW_ID__ . '-Bdoc291132']) @attr(['type' => 'text', 'placeholder' => 'Nhập tên...', 'style' => 'width: 100%; max-width: 320px; padding: 0.5rem 0.75rem; border: 1px solid var(--border, #ccc); border-radius: 6px; margin-bottom: 0.5rem; font-size: 0.9rem;']) @bind($demoName) />
                            <p @class([$__VIEW_ID__ . '-Bdoc291133']) @attr(['style' => 'margin: 0; font-size: 0.95rem;'])>Xin chào, <strong @class([$__VIEW_ID__ . '-Bdoc2911331'])>@startMarker('output', 'Bdoc2911331o1'){{ $demoName }}@endMarker('output', 'Bdoc2911331o1')</strong>! 👋</p>
                        </div>
                    </div>

                    <div @class([$__VIEW_ID__ . '-Bdoc2912']) @attr(['style' => 'flex: 1; min-width: 280px;'])>
                        <span @class([$__VIEW_ID__ . '-Bdoc29121']) @attr(['style' => 'display: block; font-size: 0.75rem; font-weight: 700; color: #6b7280; margin-bottom: 0.5rem; text-transform: uppercase;'])>Mã nguồn .sao tương ứng</span>
                        @startMarker('component', 'Bdoc2912c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_0'))
@verbatim
&#64;states({ demoCount: 5, demoName: 'Saola' })

&lt;template&gt;
    &lt;!-- 1. Cập nhật state --&gt;
    &lt;button &#64;click(setDemoCount(demoCount - 1))&gt;−&lt;/button&gt;
    &lt;span&gt;{{ demoCount }}&lt;/span&gt;
    &lt;button &#64;click(setDemoCount(demoCount + 1))&gt;+&lt;/button&gt;

    &lt;!-- 2. Two-way binding --&gt;
    &lt;input type="text" &#64;bind(demoName) /&gt;
    &lt;p&gt;Xin chào, {{ demoName }}! 👋&lt;/p&gt;
&lt;/template&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_0'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__0_content])
@endMarker('component', 'Bdoc2912c1')
                    </div>
                </div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc2e10_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e10_1'])>RUNTIME</span> Element API</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e11_'])>Compiler chỉ gọi mười mấy hàm.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e12_'])>Output biên dịch không sinh chuỗi HTML. Nó gọi một tập method cố định trên ViewController, mỗi method trả về một element có vòng đời riêng.</p>
            <div @class([$__VIEW_ID__ . '-Bdoc2e13_', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e13_1'])><div @class([$__VIEW_ID__ . '-Bdoc2e13_11', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e13_111'])>this.wrapper()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e13_12'])>Gốc của view, tạo cặp marker biên</span><b @class([$__VIEW_ID__ . '-Bdoc2e13_13'])>container</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e13_2'])><div @class([$__VIEW_ID__ . '-Bdoc2e13_21', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e13_211'])>this.html()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e13_22'])>Element DOM kèm config attrs · props · classes · styles · events · bind</span><b @class([$__VIEW_ID__ . '-Bdoc2e13_23'])>dom</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e13_3'])><div @class([$__VIEW_ID__ . '-Bdoc2e13_31', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e13_311'])>this.text()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e13_32'])>Text node tĩnh</span><b @class([$__VIEW_ID__ . '-Bdoc2e13_33'])>dom</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e13_4'])><div @class([$__VIEW_ID__ . '-Bdoc2e13_41', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e13_411'])>this.output()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e13_42'])>Vùng giá trị reactive, escape hoặc raw</span><b @class([$__VIEW_ID__ . '-Bdoc2e13_43'])>reactive</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e13_5'])><div @class([$__VIEW_ID__ . '-Bdoc2e13_51', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e13_511'])>this.reactive()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e13_52'])>Vùng điều kiện hoặc lặp, nhận <code @class([$__VIEW_ID__ . '-Bdoc2e13_521'])>stateKeys</code> và children factory</span><b @class([$__VIEW_ID__ . '-Bdoc2e13_53'])>reactive</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e13_6'])><div @class([$__VIEW_ID__ . '-Bdoc2e13_61', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e13_611'])>this.__foreach()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e13_62'])>Lặp có slot cache; nhận <code @class([$__VIEW_ID__ . '-Bdoc2e13_621'])>keyFn</code> từ <code @class([$__VIEW_ID__ . '-Bdoc2e13_622', 'directive-token'])>key</code></span><b @class([$__VIEW_ID__ . '-Bdoc2e13_63'])>loop</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e13_7'])><div @class([$__VIEW_ID__ . '-Bdoc2e13_71', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e13_711'])>this.include()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e13_72'])>Tạo child view; <code @class([$__VIEW_ID__ . '-Bdoc2e13_721'])>stateKeys</code> khiến prop được đẩy lại khi state đổi</span><b @class([$__VIEW_ID__ . '-Bdoc2e13_73'])>component</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e13_8'])><div @class([$__VIEW_ID__ . '-Bdoc2e13_81', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e13_811'])>this.extendView()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e13_82'])>Trả về view cha thay cho element tree</span><b @class([$__VIEW_ID__ . '-Bdoc2e13_83'])>layout</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e13_9'])><div @class([$__VIEW_ID__ . '-Bdoc2e13_91', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e13_911'])>this.block()</code> / <code @class([$__VIEW_ID__ . '-Bdoc2e13_912'])>this.blockOutlet()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e13_92'])>Đăng ký nội dung và tạo chỗ trống, nối theo tên</span><b @class([$__VIEW_ID__ . '-Bdoc2e13_93'])>layout</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e13_e10_'])><div @class([$__VIEW_ID__ . '-Bdoc2e13_e10_1', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e13_e10_11'])>this.section()</code> / <code @class([$__VIEW_ID__ . '-Bdoc2e13_e10_12'])>this.yield()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e13_e10_2'])>Section và điểm xuất section</span><b @class([$__VIEW_ID__ . '-Bdoc2e13_e10_3'])>layout</b></div>
            </div>
            <p @class([$__VIEW_ID__ . '-Bdoc2e14_', 'ov-sub'])>Ba quy tắc bắt buộc</p>
            <ul @class([$__VIEW_ID__ . '-Bdoc2e15_', 'check-list'])>
                <li @class([$__VIEW_ID__ . '-Bdoc2e15_1'])>Factory là lười — chỉ chạy trong <code @class([$__VIEW_ID__ . '-Bdoc2e15_11'])>render()</code> hoặc re-render, không chạy trong constructor.</li>
                <li @class([$__VIEW_ID__ . '-Bdoc2e15_2'])>Điểm chèn tường minh — element không tự <code @class([$__VIEW_ID__ . '-Bdoc2e15_21'])>appendChild</code>; vị trí do element cha cấp qua anchor.</li>
                <li @class([$__VIEW_ID__ . '-Bdoc2e15_3'])>Vòng đời đầy đủ — mỗi element có <code @class([$__VIEW_ID__ . '-Bdoc2e15_31'])>render · start · pause · resume · destroy</code>, và children sinh ra khi re-render phải được <code @class([$__VIEW_ID__ . '-Bdoc2e15_32'])>start()</code> ngay nếu vùng cha đang hoạt động.</li>
            </ul>
            <div @class([$__VIEW_ID__ . '-Bdoc2e16_', 'ov-note', 'ov-note--warn'])>
                <strong @class([$__VIEW_ID__ . '-Bdoc2e16_1'])>Ràng buộc của <code @class([$__VIEW_ID__ . '-Bdoc2e16_11', 'directive-token'])>foreach</code>:</strong> slot chỉ được tái dùng khi cache key khớp <em @class([$__VIEW_ID__ . '-Bdoc2e16_2'])>và</em> reference của item không đổi, vì compiled closure đóng gói item trực tiếp. Refetch trả object mới sẽ dựng lại hàng đó — muốn giữ state của view con qua mỗi lần đồng bộ thì lặp trên danh sách id ổn định rồi truyền dữ liệu qua props.
            </div>
        </div>

        <a @class([$__VIEW_ID__ . '-Bdoc3', 'doc-next']) @attr(['href' => '/docs/lifecycle'])>
            <div @class([$__VIEW_ID__ . '-Bdoc31'])><span @class([$__VIEW_ID__ . '-Bdoc311'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-Bdoc312'])>Vòng đời &amp; marker</strong></div>
            <span @class([$__VIEW_ID__ . '-Bdoc32', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
