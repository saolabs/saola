@exec($__ONE_COMPONENT_REGISTRY__ = ['code-block' => 'web.components.code-block']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($activeTab, 'all')
@extends($__layout__ . "docs")
    @section('meta:title', 'Toàn bộ Directive trong Saola - Hướng dẫn Chi tiết')
    @section('meta:description', 'Cẩm nang tra cứu toàn diện các directive trong Saola: Điều kiện @if, vòng lặp @foreach, event @click, binding @bind, layout @extends và @block.')
    @section('meta:keywords', 'saola directives, huong dan directive, if foreach bind click, blade directives, template syntax')
    @block('doc')
        <header @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])>
                <p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>04</span> THAM CHIẾU</p>
                <h1 @class([$__VIEW_ID__ . '-Bdoc112'])>Toàn bộ directive.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-Bdoc121'])>Mỗi directive dưới đây có cú pháp, giải thích nó thật sự làm gì, một ví dụ chạy được và ghi chú khi có cạm bẫy. Trừ khi ghi khác, directive có mặt ở cả hai đầu ra: Blade cho SSR và JavaScript cho runtime.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-Bdoc2', 'doc-body'])>
            <div @class([$__VIEW_ID__ . '-Bdoc21', 'ov-card']) @attr(['style' => 'margin-bottom: 2rem; border-color: var(--primary, #0284c7); padding: 1.5rem;'])>
                <span @class([$__VIEW_ID__ . '-Bdoc211']) @attr(['style' => 'display: block; font-size: 0.75rem; font-weight: 700; color: var(--primary, #0284c7); margin-bottom: 0.5rem; text-transform: uppercase;'])>Ví dụ Trực quan: Thao tác &#64;if, &#64;click &amp; &#64;class</span>
                <h3 @class([$__VIEW_ID__ . '-Bdoc212']) @attr(['style' => 'margin: 0 0 0.5rem 0; font-size: 1.15rem;'])>Trải nghiệm các directive cốt lõi trực tiếp</h3>
                <p @class([$__VIEW_ID__ . '-Bdoc213']) @attr(['style' => 'font-size: 0.9rem; margin-bottom: 1rem; color: var(--text-secondary, #4b5563);'])>Bấm thử các nút tab bên dưới để quan sát cách <code @class([$__VIEW_ID__ . '-Bdoc2131'])>&#64;click</code>, <code @class([$__VIEW_ID__ . '-Bdoc2132'])>&#64;class</code> và <code @class([$__VIEW_ID__ . '-Bdoc2133'])>&#64;if</code> cùng nhau kiểm soát vùng hiển thị:</p>

                <div @class([$__VIEW_ID__ . '-Bdoc214']) @attr(['style' => 'display: flex; gap: 0.5rem; margin-bottom: 1rem;'])>
                    <button @class([$__VIEW_ID__ . '-Bdoc2141', 'button', 'button-sm', 'button-primary'=> $activeTab === 'all']) @attr(['type' => 'button'])>Tất cả</button>
                    <button @class([$__VIEW_ID__ . '-Bdoc2142', 'button', 'button-sm', 'button-primary'=> $activeTab === 'ssr']) @attr(['type' => 'button'])>Nhóm Server (SSR)</button>
                    <button @class([$__VIEW_ID__ . '-Bdoc2143', 'button', 'button-sm', 'button-primary'=> $activeTab === 'csr']) @attr(['type' => 'button'])>Nhóm Client (SPA)</button>
                </div>

                <div @class([$__VIEW_ID__ . '-Bdoc215']) @attr(['style' => 'background: rgba(0,0,0,0.03); border-radius: 8px; padding: 1rem; font-size: 0.9rem;'])>
                    @startMarker('reactive', 'Bdoc215r1', ['stateKey' => ['activeTab'], 'type' => 'if'])
                    @if($activeTab === 'all')
                        <p @class([$__VIEW_ID__ . '-Bdoc215r1k11']) @attr(['style' => 'margin: 0;'])>🌐 <strong @class([$__VIEW_ID__ . '-Bdoc215r1k111'])>Tất cả Directive:</strong> Toàn bộ 43 directive có hiệu lực đồng bộ ở cả SSR (Server Blade) và CSR (Client SPA).</p>
                    @elseif($activeTab === 'ssr')
                        <p @class([$__VIEW_ID__ . '-Bdoc215r1k21']) @attr(['style' => 'margin: 0;'])>🖥️ <strong @class([$__VIEW_ID__ . '-Bdoc215r1k211'])>Phía Server (Blade):</strong> <code @class([$__VIEW_ID__ . '-Bdoc215r1k212'])>&#64;extends</code>, <code @class([$__VIEW_ID__ . '-Bdoc215r1k213'])>&#64;block</code>, <code @class([$__VIEW_ID__ . '-Bdoc215r1k214'])>&#64;include</code> dựng sẵn khung HTML ban đầu chuẩn SEO và khả năng truy cập ngay khi chưa tải JS.</p>
                    @else
                        <p @class([$__VIEW_ID__ . '-Bdoc215r1k31']) @attr(['style' => 'margin: 0;'])>⚡ <strong @class([$__VIEW_ID__ . '-Bdoc215r1k311'])>Phía Client (Runtime):</strong> <code @class([$__VIEW_ID__ . '-Bdoc215r1k312'])>&#64;bind</code>, <code @class([$__VIEW_ID__ . '-Bdoc215r1k313'])>&#64;click</code>, <code @class([$__VIEW_ID__ . '-Bdoc215r1k314'])>&#64;class</code> tiếp quản DOM và cập nhật tức thì theo micro-tick mà không cần tải lại trang.</p>
                    @endif
                    @endMarker('reactive', 'Bdoc215r1')
                </div>
            </div>

            <nav @class([$__VIEW_ID__ . '-Bdoc22', 'dir-toc']) @attr(['aria-label' => 'Nhóm directive'])>
                <a @class([$__VIEW_ID__ . '-Bdoc221']) @attr(['href' => '#khai-bao', 'data-nav' => 'disabled'])>Khai báo</a>
                <a @class([$__VIEW_ID__ . '-Bdoc222']) @attr(['href' => '#xuat-gia-tri', 'data-nav' => 'disabled'])>Xuất giá trị</a>
                <a @class([$__VIEW_ID__ . '-Bdoc223']) @attr(['href' => '#dieu-khien', 'data-nav' => 'disabled'])>Điều khiển luồng</a>
                <a @class([$__VIEW_ID__ . '-Bdoc224']) @attr(['href' => '#thuoc-tinh', 'data-nav' => 'disabled'])>Thuộc tính &amp; binding</a>
                <a @class([$__VIEW_ID__ . '-Bdoc225']) @attr(['href' => '#su-kien', 'data-nav' => 'disabled'])>Sự kiện</a>
                <a @class([$__VIEW_ID__ . '-Bdoc226']) @attr(['href' => '#layout', 'data-nav' => 'disabled'])>Layout &amp; component</a>
                <a @class([$__VIEW_ID__ . '-Bdoc227']) @attr(['href' => '#asset', 'data-nav' => 'disabled'])>Asset của trang</a>
                <a @class([$__VIEW_ID__ . '-Bdoc228']) @attr(['href' => '#tien-ich', 'data-nav' => 'disabled'])>Quyền, form &amp; tiện ích</a>
                <a @class([$__VIEW_ID__ . '-Bdoc229']) @attr(['href' => '#magic', 'data-nav' => 'disabled'])>Biến ma thuật</a>
            </nav>

            <section @class([$__VIEW_ID__ . '-Bdoc23', 'dir-group']) @attr(['id' => 'khai-bao'])>
                <h2 @class([$__VIEW_ID__ . '-Bdoc231'])>Khai báo</h2>
                <p @class([$__VIEW_ID__ . '-Bdoc232'])>Quyết định biến nào reactive, biến nào không. Giữ nguyên thứ tự bạn viết.</p>
                <p @class([$__VIEW_ID__ . '-Bdoc233'])>Viết được ở <strong @class([$__VIEW_ID__ . '-Bdoc2331'])>hai chỗ</strong>, cùng một phạm vi: ngoài <code @class([$__VIEW_ID__ . '-Bdoc2332'])>&lt;template&gt;</code> như trước, hoặc <strong @class([$__VIEW_ID__ . '-Bdoc2333'])>bên trong <code @class([$__VIEW_ID__ . '-Bdoc23331'])>&lt;script setup&gt;</code></strong> — chỗ sau cho phép chú kiểu TypeScript và dùng luôn <code @class([$__VIEW_ID__ . '-Bdoc2334'])>import type</code> ở ngay trên. Xem <a @class([$__VIEW_ID__ . '-Bdoc2335']) @attr(['href' => '/demo/setup'])>bản demo setup</a>.</p>

                <div @class([$__VIEW_ID__ . '-Bdoc234', 'dir-list'])>

                    <article @class([$__VIEW_ID__ . '-Bdoc2341', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc23411', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc234111', 'dir-name'])>&#64;vars</span><span @class([$__VIEW_ID__ . '-Bdoc234112', 'dir-kind'])>Dữ liệu server</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc23412', 'dir-sig'])>&#64;vars(tên_1, tên_2 = mặc_định, ...)</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc23413'])>Khai báo biến do controller truyền xuống view. <strong @class([$__VIEW_ID__ . '-Bdoc234131'])>Nên khai báo 1 lần duy nhất ở đầu view</strong> (ngay sau <code @class([$__VIEW_ID__ . '-Bdoc234132'])>&#64;import</code> nếu có). Có thể khai báo nhiều biến cùng lúc cách nhau bằng dấu phẩy (<code @class([$__VIEW_ID__ . '-Bdoc234133'])>,</code>) kèm giá trị mặc định. Biến server là dữ liệu tĩnh của lần render này, không có tính reactive.</p>
                        @startMarker('component', 'Bdoc2341c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_0'))
@verbatim
// controller: return $this-&gt;response(['results' =&gt; $rows, 'total' =&gt; 100]);
&#64;vars(results = [], total = 0, filter = 'all')

&lt;p&gt;Tổng số: {{ total }}&lt;/p&gt;
&#64;foreach(results as row)
    &lt;li&gt;{{ row.title }}&lt;/li&gt;
&#64;endforeach
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_0'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__0_content])
@endMarker('component', 'Bdoc2341c1')
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2342', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc23421', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc234211', 'dir-name'])>&#64;props</span><span @class([$__VIEW_ID__ . '-Bdoc234212', 'dir-kind'])>Đầu vào component</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc23422', 'dir-sig'])>&#64;props({ tên_1: mặc_định_1, tên_2: mặc_định_2, ... })</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc23423'])>Khai báo thuộc tính đầu vào của component. <strong @class([$__VIEW_ID__ . '-Bdoc234231'])>Nên khai báo 1 lần duy nhất ở đầu component</strong> dưới dạng một object chứa danh sách các prop và giá trị mặc định tương ứng. Props đóng vai trò là slot reactive: khi view cha đổi state truyền vào, runtime tự động đẩy giá trị mới vào <em @class([$__VIEW_ID__ . '-Bdoc234232'])>đúng instance con đang sống</em> mà không render lại view con.</p>
                        @startMarker('component', 'Bdoc2342c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_1'))
@verbatim
&lt;!-- components/statcard.sao --&gt;
&#64;props({ label: 'Thống kê', value: 0, tone: 'sky' })

&lt;div class="card card--{{ tone }}"&gt;
    &lt;span&gt;{{ label }}&lt;/span&gt;
    &lt;strong&gt;{{ value }}&lt;/strong&gt;
&lt;/div&gt;

&lt;!-- Bên view cha gọi sang: --&gt;
&lt;statcard label="Lượt bấm" value="{{ count }}" tone="emerald" /&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__1_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_1'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__1_content])
@endMarker('component', 'Bdoc2342c1')
                        <p @class([$__VIEW_ID__ . '-Bdoc23424', 'dir-note'])>Props khi truyền ở <code @class([$__VIEW_ID__ . '-Bdoc234241'])>&lt;component-tag&gt;</code> hoặc <code @class([$__VIEW_ID__ . '-Bdoc234242'])>&#64;include</code> tuân theo cú pháp object của Saola (<code @class([$__VIEW_ID__ . '-Bdoc234243'])>khoá: giá_trị</code>), đồng bộ với <code @class([$__VIEW_ID__ . '-Bdoc234244'])>&#64;props</code> và <code @class([$__VIEW_ID__ . '-Bdoc234245'])>&#64;states</code>.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2343', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc23431', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc234311', 'dir-name'])>&#64;states</span><span @class([$__VIEW_ID__ . '-Bdoc234312', 'dir-kind'])>Reactive</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc23432', 'dir-sig'])>&#64;states({ key: giá_trị_khởi_tạo, ... })</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc23433'])>Khai báo khối state reactive cho view dưới dạng một object. <strong @class([$__VIEW_ID__ . '-Bdoc234331'])>Nên gom toàn bộ state của view vào 1 directive <code @class([$__VIEW_ID__ . '-Bdoc2343311'])>&#64;states</code> duy nhất ở đầu file</strong>. Mỗi khoá sinh ra ba thứ: biến đọc được trong template/script, hàm setter <code @class([$__VIEW_ID__ . '-Bdoc234332'])>setTênKhoá()</code>, và slot theo dõi phản ứng trong StateManager.</p>
                        <p @class([$__VIEW_ID__ . '-Bdoc23434'])>Giá trị bạn viết ở đây là giá trị khởi tạo cho <em @class([$__VIEW_ID__ . '-Bdoc234341'])>cả</em> lần render server lẫn lần hydrate client.</p>
                        @startMarker('component', 'Bdoc2343c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_2'))
@verbatim
&#64;states({ count: 0, name: 'Saola', items: [] })

&lt;button &#64;click(setCount(count + 1))&gt;{{ count }}&lt;/button&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__2_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_2'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__2_content])
@endMarker('component', 'Bdoc2343c1')
                        <p @class([$__VIEW_ID__ . '-Bdoc23435', 'dir-note'])>Tên setter là <code @class([$__VIEW_ID__ . '-Bdoc234351'])>set</code> + tên khoá viết hoa chữ đầu: <code @class([$__VIEW_ID__ . '-Bdoc234352'])>count</code> → <code @class([$__VIEW_ID__ . '-Bdoc234353'])>setCount</code>, <code @class([$__VIEW_ID__ . '-Bdoc234354'])>isOpen</code> → <code @class([$__VIEW_ID__ . '-Bdoc234355'])>setIsOpen</code>. Gọi setter với cùng reference vẫn được nhận nếu nội dung tầng một đã đổi (ví dụ: <code @class([$__VIEW_ID__ . '-Bdoc234356'])>list.splice(i,1); setList(list)</code>).</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2344', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc23441', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc234411', 'dir-name'])>&#64;state</span><span @class([$__VIEW_ID__ . '-Bdoc234412', 'dir-kind'])>Reactive</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc23442', 'dir-sig'])>&#64;state(tên = giá_trị, ...)</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc23443'])>Khai báo state reactive theo cú pháp gán đơn lẻ hoặc nhiều biến cách nhau bởi dấu phẩy (<code @class([$__VIEW_ID__ . '-Bdoc234431'])>,</code>). Dùng khi view chỉ có một vài state đơn giản mà không muốn tạo cả khối object <code @class([$__VIEW_ID__ . '-Bdoc234432'])>&#64;states</code>.</p>
                        @startMarker('component', 'Bdoc2344c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_3'))
@verbatim
&#64;state(editMode = false, page = 1, perPage = 20)
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__3_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_3'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__3_content])
@endMarker('component', 'Bdoc2344c1')
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2345', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc23451', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc234511', 'dir-name'])>&#64;const</span><span @class([$__VIEW_ID__ . '-Bdoc234512', 'dir-kind'])>Bất biến</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc23452', 'dir-sig'])>&#64;const(TÊN = giá_trị, ...)</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc23453'])>Khai báo hằng số bất biến cho view. Có thể khai báo nhiều hằng số cùng lúc trên một directive bằng dấu phẩy (<code @class([$__VIEW_ID__ . '-Bdoc234531'])>,</code>). Dạng thứ hai là destructuring kiểu React: tạo một cặp state và setter độc lập.</p>
                        @startMarker('component', 'Bdoc2345c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_4'))
@verbatim
&#64;const(API = '/api/v1', LIMIT = 20, TITLE = 'Quản trị')
&#64;const([message, setMessage] = useState('Xin chào'))
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__4_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_4'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__4_content])
@endMarker('component', 'Bdoc2345c1')
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2346', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc23461', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc234611', 'dir-name'])>&#64;let</span><span @class([$__VIEW_ID__ . '-Bdoc234612', 'dir-kind'])>Không reactive</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc23462', 'dir-sig'])>&#64;let(tên = biểu_thức, ...)</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc23463'])>Biến cục bộ có thể gán lại nhưng <strong @class([$__VIEW_ID__ . '-Bdoc234631'])>không</strong> reactive (đổi giá trị không kích hoạt render lại). Có thể khai báo nhiều biến cùng lúc bằng dấu phẩy (<code @class([$__VIEW_ID__ . '-Bdoc234632'])>,</code>). Dùng cho giá trị dẫn xuất tính một lần lúc dựng view.</p>
                        @startMarker('component', 'Bdoc2346c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_5'))
@verbatim
&#64;let(total = price * qty, greeting = `Xin chào ${name}`)
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__5_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_5'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__5_content])
@endMarker('component', 'Bdoc2346c1')
                        <p @class([$__VIEW_ID__ . '-Bdoc23464', 'dir-note', 'dir-note--warn'])>Nếu bạn muốn giá trị tự cập nhật theo state thì đừng dùng <code @class([$__VIEW_ID__ . '-Bdoc234641'])>&#64;let</code> — viết thẳng biểu thức trong template hoặc dùng <code @class([$__VIEW_ID__ . '-Bdoc234642'])>&#64;computed</code>, compiler sẽ tự động suy ra dependency graph.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2347', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc23471', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc234711', 'dir-name'])>&#64;await</span><span @class([$__VIEW_ID__ . '-Bdoc234712', 'dir-kind'])>Async</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc23472', 'dir-sig'])>&#64;await</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc23473'])>Đánh dấu view là bất đồng bộ. Compiler bật cờ <code @class([$__VIEW_ID__ . '-Bdoc234731'])>hasAwaitData</code> trong config, runtime nhờ đó biết view cần chờ dữ liệu trước khi commit state, và có thể render khối preload trong lúc chờ.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2348', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc23481', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc234811', 'dir-name'])>&#64;fetch</span><span @class([$__VIEW_ID__ . '-Bdoc234812', 'dir-kind'])>Nạp dữ liệu</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc23482', 'dir-sig'])>&#64;fetch('/duong-dan', 'GET')</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc23483'])>Khai báo một lần nạp dữ liệu để runtime tự gọi khi view khởi động. Khác <code @class([$__VIEW_ID__ . '-Bdoc234831'])>&#64;await</code> ở chỗ <code @class([$__VIEW_ID__ . '-Bdoc234832'])>&#64;await</code> gọi lại <strong @class([$__VIEW_ID__ . '-Bdoc234833'])>chính URL của trang</strong> để lấy JSON, còn <code @class([$__VIEW_ID__ . '-Bdoc234834'])>&#64;fetch</code> trỏ tới một URL bạn chỉ định.</p>
                        <p @class([$__VIEW_ID__ . '-Bdoc23484', 'dir-note'])>Cấu hình đi vào view dưới dạng <code @class([$__VIEW_ID__ . '-Bdoc234841'])>fetch: {url, method}</code> và bật cờ <code @class([$__VIEW_ID__ . '-Bdoc234842'])>hasFetchData</code>. Chỉ chạy phía client — SSR đã có sẵn dữ liệu từ controller.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2349', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc23491', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc234911', 'dir-name'])>&#64;computed</span><span @class([$__VIEW_ID__ . '-Bdoc234912', 'dir-kind'])>Dẫn xuất</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc23492', 'dir-sig'])>&#64;computed(tên = biểu_thức)</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc23493'])>State dẫn xuất có memo hoá. Chỉ tính lại khi một trong các state phụ thuộc đổi, và tính <em @class([$__VIEW_ID__ . '-Bdoc234931'])>lười</em> — đánh dấu bẩn lúc dep đổi, tính thật lúc có người đọc. Dep đổi năm lần trong một batch thì chỉ tính một lần.</p>
                        @startMarker('component', 'Bdoc2349c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_6'))
@verbatim
&#64;states({ users: [] })
&#64;computed(activeCount = users.filter(u =&gt; u.active).length)
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__6_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_6'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__6_content])
@endMarker('component', 'Bdoc2349c1')
                        <p @class([$__VIEW_ID__ . '-Bdoc23494', 'dir-note', 'dir-note--warn'])><strong @class([$__VIEW_ID__ . '-Bdoc234941'])>Hiện chỉ chạy phía client.</strong> Directive này không được emit ở đầu ra Blade nên biến bị undefined khi render server. Trang cần SSR thì viết thẳng biểu thức trong template.</p>
                    </article>

                </div>
            </section>

            <section @class([$__VIEW_ID__ . '-Bdoc24', 'dir-group']) @attr(['id' => 'xuat-gia-tri'])>
                <h2 @class([$__VIEW_ID__ . '-Bdoc241'])>Xuất giá trị</h2>
                <p @class([$__VIEW_ID__ . '-Bdoc242'])>Mỗi chỗ nội suy được bọc trong một cặp marker riêng, nên đổi state chỉ thay đúng đoạn text đó chứ không render lại cả thẻ cha.</p>
                <div @class([$__VIEW_ID__ . '-Bdoc243', 'dir-list'])>

                    <article @class([$__VIEW_ID__ . '-Bdoc2431', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc24311', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc243111', 'dir-name'])>&#123;&#123; … &#125;&#125;</span><span @class([$__VIEW_ID__ . '-Bdoc243112', 'dir-kind'])>Escape</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc24312', 'dir-sig'])>&#123;&#123; biểu_thức &#125;&#125;</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc24313'])>In giá trị dưới dạng text an toàn. Nội dung được đặt bằng text node nên không có đường nào để chuỗi biến thành HTML.</p>
                        @startMarker('component', 'Bdoc2431c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_7'))
@verbatim
&lt;h1&gt;{{ user['name'] }}&lt;/h1&gt;
&lt;span&gt;{{ price * qty }}&lt;/span&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__7_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_7'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__7_content])
@endMarker('component', 'Bdoc2431c1')
                        <p @class([$__VIEW_ID__ . '-Bdoc24314', 'dir-note'])>Biểu thức được phép, không chỉ tên biến. Compiler đọc biểu thức để suy ra danh sách state mà vùng này phụ thuộc.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2432', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc24321', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc243211', 'dir-name'])>&#123;!! … !!&#125;</span><span @class([$__VIEW_ID__ . '-Bdoc243212', 'dir-kind'])>Raw HTML</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc24322', 'dir-sig'])>&#123;!! biểu_thức !!&#125;</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc24323'])>In nguyên HTML, không escape. Chỉ dùng cho nội dung bạn tự sinh ra hoặc đã làm sạch — đây là đường duy nhất để chuỗi từ dữ liệu trở thành thẻ thật.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2433', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc24331', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc243311', 'dir-name'])>&#123;&#123;-- … --&#125;&#125;</span><span @class([$__VIEW_ID__ . '-Bdoc243312', 'dir-kind'])>Ghi chú</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc24332', 'dir-sig'])>&#123;&#123;-- ghi chú --&#125;&#125;</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc24333'])>Ghi chú của template. Bị loại hoàn toàn khỏi cả hai đầu ra, khác với <code @class([$__VIEW_ID__ . '-Bdoc243331'])>&lt;!-- --&gt;</code> vốn đi thẳng vào HTML.</p>
                    </article>

                </div>
            </section>

            <section @class([$__VIEW_ID__ . '-Bdoc25', 'dir-group']) @attr(['id' => 'dieu-khien'])>
                <h2 @class([$__VIEW_ID__ . '-Bdoc251'])>Điều khiển luồng</h2>
                <p @class([$__VIEW_ID__ . '-Bdoc252'])>Mỗi khối trở thành một <em @class([$__VIEW_ID__ . '-Bdoc2521'])>vùng reactive</em>: một cặp marker trong DOM cộng danh sách state mà điều kiện phụ thuộc. State đổi thì chỉ nội dung giữa hai marker đó được dựng lại.</p>
                <div @class([$__VIEW_ID__ . '-Bdoc253', 'dir-list'])>

                    <article @class([$__VIEW_ID__ . '-Bdoc2531', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc25311', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc253111', 'dir-name'])>#if <em @class([$__VIEW_ID__ . '-Bdoc2531111'])>· viết thẳng trên thẻ</em></span><span @class([$__VIEW_ID__ . '-Bdoc253112', 'dir-kind'])>Cách viết gọn</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc25312', 'dir-sig'])>&lt;p #if="điều_kiện"&gt;…&lt;/p&gt;</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc25313'])>Khi khối chỉ bọc đúng <strong @class([$__VIEW_ID__ . '-Bdoc253131'])>một thẻ</strong>, viết directive thành thuộc tính của thẻ đó cho gọn. Compiler hạ nó về đúng khối tương ứng trước khi biên dịch, nên ngữ nghĩa, marker và cách hoạt động <em @class([$__VIEW_ID__ . '-Bdoc253132'])>y hệt</em> — chỉ là hai cách viết của cùng một thứ. Xem <a @class([$__VIEW_ID__ . '-Bdoc253133']) @attr(['href' => '/demo/tag-directives'])>bản demo directive trên thẻ</a>.</p>
                        @startMarker('component', 'Bdoc2531c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_8'))
@verbatim
&lt;!-- hai đoạn này biên dịch ra như nhau --&gt;

&#64;if(open)
    &lt;p class="msg"&gt;{{ label }}&lt;/p&gt;
&#64;endif

&lt;p class="msg" #if="open"&gt;{{ label }}&lt;/p&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__8_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_8'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__8_content])
@endMarker('component', 'Bdoc2531c1')
                        <p @class([$__VIEW_ID__ . '-Bdoc25314'])>Chuỗi nhánh viết trên các thẻ <strong @class([$__VIEW_ID__ . '-Bdoc253141'])>sibling liền kề</strong>, chỉ được cách nhau bởi khoảng trắng:</p>
                        @startMarker('component', 'Bdoc2531c2')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_9'))
@verbatim
&lt;a href="#" #if="a"&gt;A&lt;/a&gt;
&lt;p #elseif="b"&gt;B&lt;/p&gt;
&lt;span #else&gt;C&lt;/span&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__9_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_9'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__9_content])
@endMarker('component', 'Bdoc2531c2')
                        <p @class([$__VIEW_ID__ . '-Bdoc25315'])><code @class([$__VIEW_ID__ . '-Bdoc253151'])>#switch</code> là ngoại lệ duy nhất — nó bọc <strong @class([$__VIEW_ID__ . '-Bdoc253152'])>ruột</strong> thẻ, không bọc thẻ. Thẻ cha vẫn render bình thường, các con phải toàn là <code @class([$__VIEW_ID__ . '-Bdoc253153'])>#case</code>/<code @class([$__VIEW_ID__ . '-Bdoc253154'])>#default</code>. <code @class([$__VIEW_ID__ . '-Bdoc253155'])>&#64;break</code> do compiler tự chèn:</p>
                        @startMarker('component', 'Bdoc2531c3')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_10'))
@verbatim
&lt;div class="tabs" #switch="tab"&gt;
    &lt;p #case="'a'"&gt;Tab A&lt;/p&gt;
    &lt;p #case="'b'"&gt;Tab B&lt;/p&gt;
    &lt;span #default&gt;Chưa chọn&lt;/span&gt;
&lt;/div&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__10_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_10'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__10_content])
@endMarker('component', 'Bdoc2531c3')
                        <p @class([$__VIEW_ID__ . '-Bdoc25316'])>Vòng lặp nhận kèm <code @class([$__VIEW_ID__ . '-Bdoc253161'])>#key</code>, thứ tự viết không quan trọng:</p>
                        @startMarker('component', 'Bdoc2531c4')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_11'))
@verbatim
&lt;li class="row" #foreach="items as item" #key="item['id']"&gt;
    {{ item['label'] }}
&lt;/li&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__11_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_11'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__11_content])
@endMarker('component', 'Bdoc2531c4')
                        <table @class([$__VIEW_ID__ . '-Bdoc25317', 'dir-table'])>
                            <thead @class([$__VIEW_ID__ . '-Bdoc253171'])><tr @class([$__VIEW_ID__ . '-Bdoc2531711'])><th @class([$__VIEW_ID__ . '-Bdoc25317111'])>Viết trên thẻ</th><th @class([$__VIEW_ID__ . '-Bdoc25317112'])>Tương đương</th><th @class([$__VIEW_ID__ . '-Bdoc25317113'])>Bọc gì</th></tr></thead>
                            <tbody @class([$__VIEW_ID__ . '-Bdoc253172'])>
                                <tr @class([$__VIEW_ID__ . '-Bdoc2531721'])><td @class([$__VIEW_ID__ . '-Bdoc25317211'])><code @class([$__VIEW_ID__ . '-Bdoc253172111'])>#if</code> <code @class([$__VIEW_ID__ . '-Bdoc253172112'])>#elseif</code> <code @class([$__VIEW_ID__ . '-Bdoc253172113'])>#else</code></td><td @class([$__VIEW_ID__ . '-Bdoc25317212'])><code @class([$__VIEW_ID__ . '-Bdoc253172121'])>&#64;if</code> <code @class([$__VIEW_ID__ . '-Bdoc253172122'])>&#64;elseif</code> <code @class([$__VIEW_ID__ . '-Bdoc253172123'])>&#64;else</code></td><td @class([$__VIEW_ID__ . '-Bdoc25317213'])>cả thẻ</td></tr>
                                <tr @class([$__VIEW_ID__ . '-Bdoc2531722'])><td @class([$__VIEW_ID__ . '-Bdoc25317221'])><code @class([$__VIEW_ID__ . '-Bdoc253172211'])>#switch</code></td><td @class([$__VIEW_ID__ . '-Bdoc25317222'])><code @class([$__VIEW_ID__ . '-Bdoc253172221'])>&#64;switch</code></td><td @class([$__VIEW_ID__ . '-Bdoc25317223'])><strong @class([$__VIEW_ID__ . '-Bdoc253172231'])>ruột</strong> thẻ</td></tr>
                                <tr @class([$__VIEW_ID__ . '-Bdoc2531723'])><td @class([$__VIEW_ID__ . '-Bdoc25317231'])><code @class([$__VIEW_ID__ . '-Bdoc253172311'])>#case</code> <code @class([$__VIEW_ID__ . '-Bdoc253172312'])>#default</code></td><td @class([$__VIEW_ID__ . '-Bdoc25317232'])><code @class([$__VIEW_ID__ . '-Bdoc253172321'])>&#64;case</code> <code @class([$__VIEW_ID__ . '-Bdoc253172322'])>&#64;default</code></td><td @class([$__VIEW_ID__ . '-Bdoc25317233'])>cả thẻ con</td></tr>
                                <tr @class([$__VIEW_ID__ . '-Bdoc2531724'])><td @class([$__VIEW_ID__ . '-Bdoc25317241'])><code @class([$__VIEW_ID__ . '-Bdoc253172411'])>#foreach</code> <code @class([$__VIEW_ID__ . '-Bdoc253172412'])>#for</code> <code @class([$__VIEW_ID__ . '-Bdoc253172413'])>#while</code></td><td @class([$__VIEW_ID__ . '-Bdoc25317242'])><code @class([$__VIEW_ID__ . '-Bdoc253172421'])>&#64;foreach</code> <code @class([$__VIEW_ID__ . '-Bdoc253172422'])>&#64;for</code> <code @class([$__VIEW_ID__ . '-Bdoc253172423'])>&#64;while</code></td><td @class([$__VIEW_ID__ . '-Bdoc25317243'])>cả thẻ</td></tr>
                                <tr @class([$__VIEW_ID__ . '-Bdoc2531725'])><td @class([$__VIEW_ID__ . '-Bdoc25317251'])><code @class([$__VIEW_ID__ . '-Bdoc253172511'])>#key</code></td><td @class([$__VIEW_ID__ . '-Bdoc25317252'])><code @class([$__VIEW_ID__ . '-Bdoc253172521'])>&#64;key</code></td><td @class([$__VIEW_ID__ . '-Bdoc25317253'])>bổ trợ cho vòng lặp</td></tr>
                            </tbody>
                        </table>
                        <p @class([$__VIEW_ID__ . '-Bdoc25318', 'dir-note'])>Dùng dạng khối khi cần bọc <strong @class([$__VIEW_ID__ . '-Bdoc253181'])>nhiều thẻ</strong>, bọc chữ trần, hoặc bọc một vùng không trùng biên thẻ — dạng viết trên thẻ không làm được những việc đó.</p>
                        <p @class([$__VIEW_ID__ . '-Bdoc25319', 'dir-note', 'dir-note--warn'])>Tên sau <code @class([$__VIEW_ID__ . '-Bdoc253191'])>#</code> là <strong @class([$__VIEW_ID__ . '-Bdoc253192'])>tập đóng</strong> — gõ sai như <code @class([$__VIEW_ID__ . '-Bdoc253193'])>#fi="x"</code> cho lỗi biên dịch ngay, không âm thầm thành thuộc tính HTML. Dấu <code @class([$__VIEW_ID__ . '-Bdoc253194'])>#</code> ở chỗ khác vẫn bình thường: <code @class([$__VIEW_ID__ . '-Bdoc253195'])>style="color: #fff"</code> hay <code @class([$__VIEW_ID__ . '-Bdoc253196'])>href="#dau-trang"</code> không bị đụng tới.</p>
                        <p @class([$__VIEW_ID__ . '-Bdoc2531e10_', 'dir-note'])>Một thẻ chỉ mang <strong @class([$__VIEW_ID__ . '-Bdoc2531e10_1'])>một</strong> directive điều khiển (<code @class([$__VIEW_ID__ . '-Bdoc2531e10_2'])>#key</code> là ngoại lệ, nó đi kèm vòng lặp). <code @class([$__VIEW_ID__ . '-Bdoc2531e10_3'])>#if</code> và <code @class([$__VIEW_ID__ . '-Bdoc2531e10_4'])>#foreach</code> cùng thẻ cho lỗi biên dịch thay vì đoán thứ tự — muốn vừa lặp vừa lọc thì đưa <code @class([$__VIEW_ID__ . '-Bdoc2531e10_5'])>#if</code> xuống thẻ con, hoặc lọc mảng trước.</p>
                        <p @class([$__VIEW_ID__ . '-Bdoc2531e11_', 'dir-note']) @attr(['style' => 'background: rgba(37, 99, 235, 0.08); border-left: 3px solid #2563eb; color: var(--ink);'])>
                            📖 <strong @class([$__VIEW_ID__ . '-Bdoc2531e11_1'])>Xem tài liệu chuyên sâu:</strong> Cú pháp trên thẻ đã có trang tài liệu chi tiết riêng với đầy đủ quy tắc AST, 10 directive tập đóng, cơ chế switch/foreach và các bẫy cần tránh. Xem tại <a @class([$__VIEW_ID__ . '-Bdoc2531e11_2']) @attr(['href' => '/docs/tag-directives', 'style' => 'font-weight: 600; text-decoration: underline;'])>Tài liệu Directive trên thẻ (#) →</a>
                        </p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2532', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc25321', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc253211', 'dir-name'])>&#64;if <em @class([$__VIEW_ID__ . '-Bdoc2532111'])>· &#64;elseif · &#64;else · &#64;endif</em></span><span @class([$__VIEW_ID__ . '-Bdoc253212', 'dir-kind'])>Vùng reactive</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc25322', 'dir-sig'])>&#64;if(điều_kiện)
    …
&#64;elseif(điều_kiện_khác)
    …
&#64;else
    …
&#64;endif</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc25323'])>Compiler đọc biểu thức điều kiện, rút ra danh sách state trong đó và gắn vào vùng. Không có dependency tracking lúc chạy — phụ thuộc được tính sẵn lúc biên dịch.</p>
                        @startMarker('component', 'Bdoc2532c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_12'))
@verbatim
&#64;if(status === 'ready')
    &lt;p&gt;Sẵn sàng&lt;/p&gt;
&#64;elseif(status === 'building')
    &lt;p&gt;Đang biên dịch…&lt;/p&gt;
&#64;else
    &lt;p&gt;Có lỗi&lt;/p&gt;
&#64;endif
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__12_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_12'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__12_content])
@endMarker('component', 'Bdoc2532c1')
                        <p @class([$__VIEW_ID__ . '-Bdoc25324', 'dir-note'])>Đặt <code @class([$__VIEW_ID__ . '-Bdoc253241'])>&#64;if</code> bên trong <code @class([$__VIEW_ID__ . '-Bdoc253242'])>&#64;foreach</code> thì mỗi item có vùng marker riêng, nên đổi một item không đụng các item khác.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2533', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc25331', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc253311', 'dir-name'])>&#64;foreach <em @class([$__VIEW_ID__ . '-Bdoc2533111'])>· &#64;endforeach</em></span><span @class([$__VIEW_ID__ . '-Bdoc253312', 'dir-kind'])>Vùng reactive</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc25332', 'dir-sig'])>&#64;foreach(danh_sách as item)
&#64;foreach(danh_sách as khoá =&gt; item)</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc25333'])>Lặp có <em @class([$__VIEW_ID__ . '-Bdoc253331'])>reconciliation</em>: runtime giữ một cache slot cho mỗi item. Khi danh sách đổi, item nào còn nguyên thì giữ nguyên DOM và mọi subscription của nó; item rời danh sách thì element bị destroy hẳn chứ không bỏ rơi.</p>
                        @startMarker('component', 'Bdoc2533c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_13'))
@verbatim
&#64;foreach(items as item)
    &#64;key(item['id'])
    &lt;li&gt;{{ item['label'] }}&lt;/li&gt;
&#64;endforeach
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__13_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_13'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__13_content])
@endMarker('component', 'Bdoc2533c1')
                        <p @class([$__VIEW_ID__ . '-Bdoc25334', 'dir-note', 'dir-note--warn'])>Slot chỉ được tái dùng khi khoá khớp <strong @class([$__VIEW_ID__ . '-Bdoc253341'])>và</strong> reference của item không đổi — vì output biên dịch đóng gói thẳng object item vào closure. Refetch từ server trả object mới sẽ dựng lại hàng đó. Muốn giữ state của view con qua mỗi lần đồng bộ thì lặp trên danh sách id ổn định rồi truyền dữ liệu qua props.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2534', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc25341', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc253411', 'dir-name'])>&#64;key</span><span @class([$__VIEW_ID__ . '-Bdoc253412', 'dir-kind'])>Bổ trợ vòng lặp</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc25342', 'dir-sig'])>&#64;key(biểu_thức)</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc25343'])>Đặt ngay dòng đầu thân vòng lặp. Nó cho cache biết lấy gì làm định danh của item. Không có <code @class([$__VIEW_ID__ . '-Bdoc253431'])>&#64;key</code> thì runtime dùng chính reference object làm khoá, và hậu tố id của marker rơi về chỉ số vòng lặp — phải khớp với phía SSR thì hydrate mới không lệch.</p>
                        <p @class([$__VIEW_ID__ . '-Bdoc25344'])>Khoá còn giúp phân biệt các item trùng nhau trong danh sách nguyên thuỷ, ví dụ <code @class([$__VIEW_ID__ . '-Bdoc253441'])>['a', 'b', 'a']</code>.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2535', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc25351', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc253511', 'dir-name'])>&#64;forelse <em @class([$__VIEW_ID__ . '-Bdoc2535111'])>· &#64;empty · &#64;endforelse</em></span><span @class([$__VIEW_ID__ . '-Bdoc253512', 'dir-kind'])>Vùng reactive</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc25352', 'dir-sig'])>&#64;forelse(danh_sách as item)
    …
&#64;empty
    …
&#64;endforelse</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc25353'])>Như <code @class([$__VIEW_ID__ . '-Bdoc253531'])>&#64;foreach</code> nhưng có sẵn nhánh cho danh sách rỗng, khỏi phải viết thêm một <code @class([$__VIEW_ID__ . '-Bdoc253532'])>&#64;if</code> đếm phần tử.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2536', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc25361', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc253611', 'dir-name'])>&#64;for <em @class([$__VIEW_ID__ . '-Bdoc2536111'])>· &#64;while</em></span><span @class([$__VIEW_ID__ . '-Bdoc253612', 'dir-kind'])>Vùng reactive</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc25362', 'dir-sig'])>&#64;for(i = 0; i &lt; n; i++) … &#64;endfor
&#64;while(điều_kiện) … &#64;endwhile</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc25363'])>Vòng lặp đếm và vòng lặp điều kiện. <code @class([$__VIEW_ID__ . '-Bdoc253631'])>&#64;while</code> có trần lặp ở runtime để một điều kiện sai không treo trình duyệt.</p>
                        @startMarker('component', 'Bdoc2536c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_14'))
@verbatim
&#64;for(i = 0; i &lt; count; i++)
    &lt;li&gt;Ping #{{ i + 1 }}&lt;/li&gt;
&#64;endfor
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__14_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_14'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__14_content])
@endMarker('component', 'Bdoc2536c1')
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2537', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc25371', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc253711', 'dir-name'])>&#64;switch <em @class([$__VIEW_ID__ . '-Bdoc2537111'])>· &#64;case · &#64;default · &#64;break</em></span><span @class([$__VIEW_ID__ . '-Bdoc253712', 'dir-kind'])>Vùng reactive</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc25372', 'dir-sig'])>&#64;switch(biểu_thức)
    &#64;case('a')
        …
        &#64;break
    &#64;default
        …
&#64;endswitch</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc25373'])>Nhiều nhánh gói trong một vùng marker duy nhất. Nhớ <code @class([$__VIEW_ID__ . '-Bdoc253731'])>&#64;break</code> ở cuối mỗi <code @class([$__VIEW_ID__ . '-Bdoc253732'])>&#64;case</code>, đúng ngữ nghĩa switch chứ không phải if-else.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2538', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc25381', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc253811', 'dir-name'])>&#64;continue <em @class([$__VIEW_ID__ . '-Bdoc2538111'])>· &#64;break</em></span><span @class([$__VIEW_ID__ . '-Bdoc253812', 'dir-kind'])>Điều khiển</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc25382', 'dir-sig'])>&#64;continue
&#64;break
&#64;continue(điều_kiện)</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc25383'])>Bỏ qua vòng hiện tại hoặc thoát vòng lặp. Nhận điều kiện tuỳ chọn để khỏi bọc thêm một <code @class([$__VIEW_ID__ . '-Bdoc253831'])>&#64;if</code>.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2539', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc25391', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc253911', 'dir-name'])>&#64;ssr <em @class([$__VIEW_ID__ . '-Bdoc2539111'])>· &#64;endssr</em></span><span @class([$__VIEW_ID__ . '-Bdoc253912', 'dir-kind'])>Chỉ server</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc25392', 'dir-sig'])>&#64;ssr … &#64;endssr</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc25393'])>Khối chỉ tồn tại ở đầu ra Blade. Compiler loại nó khỏi view JavaScript, nên nội dung bên trong xuất hiện trong HTML lần đầu rồi không bao giờ được runtime dựng lại. Hợp cho dữ liệu chỉ có ở server hoặc khối nặng không cần tương tác.</p>
                        <p @class([$__VIEW_ID__ . '-Bdoc25394', 'dir-note'])>Bí danh: <code @class([$__VIEW_ID__ . '-Bdoc253941'])>&#64;serverSide</code> / <code @class([$__VIEW_ID__ . '-Bdoc253942'])>&#64;endServerSide</code>, <code @class([$__VIEW_ID__ . '-Bdoc253943'])>&#64;useSSR</code> / <code @class([$__VIEW_ID__ . '-Bdoc253944'])>&#64;enduseSSR</code>.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc253e10_', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc253e10_1', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc253e10_11', 'dir-name'])>&#64;csr <em @class([$__VIEW_ID__ . '-Bdoc253e10_111'])>· &#64;endcsr</em></span><span @class([$__VIEW_ID__ . '-Bdoc253e10_12', 'dir-kind'])>Chỉ client</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc253e10_2', 'dir-sig'])>&#64;csr … &#64;endcsr</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc253e10_3'])>Ảnh gương của <code @class([$__VIEW_ID__ . '-Bdoc253e10_31'])>&#64;ssr</code>: khối chỉ tồn tại ở view JavaScript. Blade bỏ qua nó nên nội dung không có trong HTML lần đầu, chỉ xuất hiện sau khi runtime dựng. Hợp cho thứ chỉ có nghĩa khi đã có JS — nút phụ thuộc tương tác, widget của thư viện ngoài.</p>
                        <p @class([$__VIEW_ID__ . '-Bdoc253e10_4', 'dir-note'])>Bí danh: <code @class([$__VIEW_ID__ . '-Bdoc253e10_41'])>&#64;clientSide</code> / <code @class([$__VIEW_ID__ . '-Bdoc253e10_42'])>&#64;endClientSide</code>. Cặp <code @class([$__VIEW_ID__ . '-Bdoc253e10_43'])>&#64;ssr</code>/<code @class([$__VIEW_ID__ . '-Bdoc253e10_44'])>&#64;csr</code> là hai chỗ SSR và CSR được phép khác nhau <strong @class([$__VIEW_ID__ . '-Bdoc253e10_45'])>có chủ đích</strong> — mọi khác biệt còn lại đều bị cổng parity coi là lỗi.</p>
                    </article>

                </div>
            </section>

            <section @class([$__VIEW_ID__ . '-Bdoc26', 'dir-group']) @attr(['id' => 'thuoc-tinh'])>
                <h2 @class([$__VIEW_ID__ . '-Bdoc261'])>Thuộc tính &amp; binding</h2>
                <p @class([$__VIEW_ID__ . '-Bdoc262'])>Nhóm này viết <em @class([$__VIEW_ID__ . '-Bdoc2621'])>bên trong thẻ mở</em>. Runtime chia chúng thành bốn rổ khác nhau — <code @class([$__VIEW_ID__ . '-Bdoc2622'])>attrs</code>, <code @class([$__VIEW_ID__ . '-Bdoc2623'])>props</code>, <code @class([$__VIEW_ID__ . '-Bdoc2624'])>classes</code>, <code @class([$__VIEW_ID__ . '-Bdoc2625'])>styles</code> — vì đặt thuộc tính HTML và gán property của element không giống nhau.</p>
                <div @class([$__VIEW_ID__ . '-Bdoc263', 'dir-list'])>

                    <article @class([$__VIEW_ID__ . '-Bdoc2631', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc26311', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc263111', 'dir-name'])>&#64;attr</span><span @class([$__VIEW_ID__ . '-Bdoc263112', 'dir-kind'])>attrs</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc26312', 'dir-sig'])>&#64;attr({ tên: giá_trị, ... })</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc26313'])>Thuộc tính động. Giá trị <code @class([$__VIEW_ID__ . '-Bdoc263131'])>null</code>, <code @class([$__VIEW_ID__ . '-Bdoc263132'])>undefined</code> hoặc <code @class([$__VIEW_ID__ . '-Bdoc263133'])>false</code> làm runtime <em @class([$__VIEW_ID__ . '-Bdoc263134'])>gỡ hẳn</em> thuộc tính khỏi thẻ chứ không đặt chuỗi rỗng.</p>
                        @startMarker('component', 'Bdoc2631c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_15'))
@verbatim
&lt;a &#64;attr({ href: link, title: docTitle })&gt;…&lt;/a&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__15_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_15'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__15_content])
@endMarker('component', 'Bdoc2631c1')
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2632', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc26321', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc263211', 'dir-name'])>&#64;class</span><span @class([$__VIEW_ID__ . '-Bdoc263212', 'dir-kind'])>classes</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc26322', 'dir-sig'])>&#64;class({'tĩnh', 'có-điều-kiện': biểu_thức})</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc26323'])>Trộn class tĩnh với class có điều kiện. Runtime chỉ bật tắt đúng những class có điều kiện, không ghi đè cả thuộc tính <code @class([$__VIEW_ID__ . '-Bdoc263231'])>class</code> — nên class do code khác thêm vào vẫn còn.</p>
                        @startMarker('component', 'Bdoc2632c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_16'))
@verbatim
&lt;div &#64;class({'card', 'card--active': isActive, 'card--gone': record === null})&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__16_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_16'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__16_content])
@endMarker('component', 'Bdoc2632c1')
                        <p @class([$__VIEW_ID__ . '-Bdoc26324', 'dir-note', 'dir-note--warn'])>Tránh dấu <code @class([$__VIEW_ID__ . '-Bdoc263241'])>&gt;</code> hoặc <code @class([$__VIEW_ID__ . '-Bdoc263242'])>&lt;</code> trong biểu thức: bộ phân tích thẻ ở đầu ra Blade đóng thẻ sớm tại đó. Viết <code @class([$__VIEW_ID__ . '-Bdoc263243'])>count !== 0</code> thay cho <code @class([$__VIEW_ID__ . '-Bdoc263244'])>count &gt; 0</code>.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2633', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc26331', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc263311', 'dir-name'])>&#64;style</span><span @class([$__VIEW_ID__ . '-Bdoc263312', 'dir-kind'])>styles</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc26332', 'dir-sig'])>&#64;style({ 'thuộc-tính': giá_trị })</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc26333'])>Inline style theo state, đặt qua <code @class([$__VIEW_ID__ . '-Bdoc263331'])>style.setProperty</code> nên chỉ những thuộc tính bạn liệt kê bị đụng tới.</p>
                        <p @class([$__VIEW_ID__ . '-Bdoc26334', 'dir-note', 'dir-note--warn'])><strong @class([$__VIEW_ID__ . '-Bdoc263341'])>Dạng object của modern syntax hiện chưa ra đúng ở đầu ra JavaScript</strong> — nó rã thành các thuộc tính tĩnh rời rạc nên binding không chạy sau hydrate. Tạm thời dùng <code @class([$__VIEW_ID__ . '-Bdoc263342'])>&#64;class</code> với vài class dựng sẵn.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2634', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc26341', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc263411', 'dir-name'])>&#64;bind <em @class([$__VIEW_ID__ . '-Bdoc2634111'])>· &#64;val</em></span><span @class([$__VIEW_ID__ . '-Bdoc263412', 'dir-kind'])>Hai chiều</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc26342', 'dir-sig'])>&#64;bind(tên_state)</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc26343'])>Binding hai chiều. Runtime tự chọn cách đọc ghi theo loại input: <code @class([$__VIEW_ID__ . '-Bdoc263431'])>checked</code> cho checkbox, so khớp <code @class([$__VIEW_ID__ . '-Bdoc263432'])>value</code> cho radio, <code @class([$__VIEW_ID__ . '-Bdoc263433'])>valueAsNumber</code> cho number và range, còn lại là <code @class([$__VIEW_ID__ . '-Bdoc263434'])>value</code>. Với <code @class([$__VIEW_ID__ . '-Bdoc263435'])>&lt;select&gt;</code>, việc gán giá trị được hoãn một microtask vì <code @class([$__VIEW_ID__ . '-Bdoc263436'])>&lt;option&gt;</code> chưa kịp có mặt lúc thẻ vừa tạo.</p>
                        @startMarker('component', 'Bdoc2634c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_17'))
@verbatim
&lt;input type="text" &#64;bind(name)&gt;
&lt;input type="checkbox" &#64;bind(agree)&gt;
&lt;select &#64;bind(tone)&gt;…&lt;/select&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__17_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_17'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__17_content])
@endMarker('component', 'Bdoc2634c1')
                        <p @class([$__VIEW_ID__ . '-Bdoc26344', 'dir-note', 'dir-note--warn'])>Chỉ nhận khoá phẳng. <code @class([$__VIEW_ID__ . '-Bdoc263441'])>&#64;bind(user.name)</code> đọc được giá trị ban đầu nhưng không ghi ngược và không nhận thay đổi, vì setter và subscription chỉ tồn tại ở tầng khoá gốc. Tách thành state phẳng như <code @class([$__VIEW_ID__ . '-Bdoc263442'])>userName</code>.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2635', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc26351', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc263511', 'dir-name'])>Boolean attribute</span><span @class([$__VIEW_ID__ . '-Bdoc263512', 'dir-kind'])>props</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc26352', 'dir-sig'])>&#64;disabled(biểu_thức)  &#64;checked(…)  &#64;selected(…)
&#64;required(…)  &#64;readonly(…)</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc26353'])>Gán thẳng vào <em @class([$__VIEW_ID__ . '-Bdoc263531'])>property</em> của element chứ không phải thuộc tính HTML — đúng cách trình duyệt đọc trạng thái các thẻ form.</p>
                        <table @class([$__VIEW_ID__ . '-Bdoc26354', 'dir-mini'])>
                            <tbody @class([$__VIEW_ID__ . '-Bdoc263541'])>
                                <tr @class([$__VIEW_ID__ . '-Bdoc2635411'])><td @class([$__VIEW_ID__ . '-Bdoc26354111'])>&#64;disabled</td><td @class([$__VIEW_ID__ . '-Bdoc26354112'])>khoá nút hoặc ô nhập</td></tr>
                                <tr @class([$__VIEW_ID__ . '-Bdoc2635412'])><td @class([$__VIEW_ID__ . '-Bdoc26354121'])>&#64;checked</td><td @class([$__VIEW_ID__ . '-Bdoc26354122'])>trạng thái checkbox và radio</td></tr>
                                <tr @class([$__VIEW_ID__ . '-Bdoc2635413'])><td @class([$__VIEW_ID__ . '-Bdoc26354131'])>&#64;selected</td><td @class([$__VIEW_ID__ . '-Bdoc26354132'])>option đang được chọn</td></tr>
                                <tr @class([$__VIEW_ID__ . '-Bdoc2635414'])><td @class([$__VIEW_ID__ . '-Bdoc26354141'])>&#64;required</td><td @class([$__VIEW_ID__ . '-Bdoc26354142'])>bắt buộc nhập</td></tr>
                                <tr @class([$__VIEW_ID__ . '-Bdoc2635415'])><td @class([$__VIEW_ID__ . '-Bdoc26354151'])>&#64;readonly</td><td @class([$__VIEW_ID__ . '-Bdoc26354152'])>chỉ đọc, vẫn gửi kèm form</td></tr>
                            </tbody>
                        </table>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2636', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc26361', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc263611', 'dir-name'])>&#64;show <em @class([$__VIEW_ID__ . '-Bdoc2636111'])>· &#64;hide</em></span><span @class([$__VIEW_ID__ . '-Bdoc263612', 'dir-kind'])>props</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc26362', 'dir-sig'])>&#64;show(biểu_thức)
&#64;hide(biểu_thức)</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc26363'])>Bật tắt hiển thị mà giữ nguyên DOM và state bên trong — khác <code @class([$__VIEW_ID__ . '-Bdoc263631'])>&#64;if</code> vốn dựng lại nội dung mỗi lần bật.</p>
                        <p @class([$__VIEW_ID__ . '-Bdoc26364', 'dir-note', 'dir-note--warn'])><strong @class([$__VIEW_ID__ . '-Bdoc263641'])>Đang đụng directive cùng tên của Blade.</strong> Laravel hiểu <code @class([$__VIEW_ID__ . '-Bdoc263642'])>&#64;show</code> là "kết thúc section rồi yield ngay", nên nó nuốt directive của Saola và làm hỏng section stack của cả trang. Tạm thời dùng <code @class([$__VIEW_ID__ . '-Bdoc263643'])>&#64;class</code> với một class ẩn.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2637', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc26371', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc263711', 'dir-name'])>&#64;transition</span><span @class([$__VIEW_ID__ . '-Bdoc263712', 'dir-kind'])>Hoạt ảnh</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc26372', 'dir-sig'])>&#64;transition('tên')</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc26373'])>Gắn tiền tố class enter/leave cho phần tử khi nó vào hoặc rời một vùng reactive. Bạn định nghĩa <code @class([$__VIEW_ID__ . '-Bdoc263731'])>.tên-enter-active</code>, <code @class([$__VIEW_ID__ . '-Bdoc263732'])>.tên-enter-from</code>, <code @class([$__VIEW_ID__ . '-Bdoc263733'])>.tên-leave-active</code>, <code @class([$__VIEW_ID__ . '-Bdoc263734'])>.tên-leave-to</code> trong CSS.</p>
                        @startMarker('component', 'Bdoc2637c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_18'))
@verbatim
&lt;article &#64;transition('row')&gt;…&lt;/article&gt;

.row-enter-active, .row-leave-active { transition: opacity .18s ease; }
.row-enter-from,   .row-leave-to     { opacity: 0; }
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__18_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_18'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__18_content])
@endMarker('component', 'Bdoc2637c1')
                    </article>

                </div>
            </section>

            <section @class([$__VIEW_ID__ . '-Bdoc27', 'dir-group']) @attr(['id' => 'su-kien'])>
                <h2 @class([$__VIEW_ID__ . '-Bdoc271'])>Sự kiện</h2>
                <p @class([$__VIEW_ID__ . '-Bdoc272'])>Viết <code @class([$__VIEW_ID__ . '-Bdoc2721'])>&#64;tênSựKiện(...)</code> ngay trên thẻ. Mọi listener đăng ký kèm <code @class([$__VIEW_ID__ . '-Bdoc2722'])>AbortSignal</code> của view, nên khi view bị destroy chỉ cần một lệnh <code @class([$__VIEW_ID__ . '-Bdoc2723'])>abort()</code> là gỡ sạch — không có đường nào rò listener.</p>
                <div @class([$__VIEW_ID__ . '-Bdoc273', 'dir-list'])>

                    <article @class([$__VIEW_ID__ . '-Bdoc2731', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc27311', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc273111', 'dir-name'])>&#64;click <em @class([$__VIEW_ID__ . '-Bdoc2731111'])>và họ hàng</em></span><span @class([$__VIEW_ID__ . '-Bdoc273112', 'dir-kind'])>Gắn listener</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc27312', 'dir-sig'])>&#64;click(tênMethod())            <span @class([$__VIEW_ID__ . '-Bdoc273121', 'c'])>// gọi method trong &lt;script setup&gt;</span>
&#64;click(setCount(count + 1))    <span @class([$__VIEW_ID__ . '-Bdoc273122', 'c'])>// biểu thức trực tiếp</span>
&#64;change(update(event))         <span @class([$__VIEW_ID__ . '-Bdoc273123', 'c'])>// truyền object event</span></code></div>
                        <p @class([$__VIEW_ID__ . '-Bdoc27313'])>Có hai dạng. Dạng thứ nhất là tên method: compiler ghi lại tên rồi runtime tra trên view instance và bind <code @class([$__VIEW_ID__ . '-Bdoc273131'])>this</code> về view. Dạng thứ hai là biểu thức, được gói thành closure ngay tại chỗ.</p>
                        <p @class([$__VIEW_ID__ . '-Bdoc27314'])>Biến <code @class([$__VIEW_ID__ . '-Bdoc273141'])>event</code> có sẵn trong biểu thức, truyền vào method thì nhận nguyên object sự kiện.</p>
                        @startMarker('component', 'Bdoc2731c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_19'))
@verbatim
&lt;form &#64;submit(save(event))&gt;
    &lt;input &#64;bind(name) &#64;keydown(onKey(event))&gt;
    &lt;button type="submit"&gt;Lưu&lt;/button&gt;
&lt;/form&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__19_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_19'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__19_content])
@endMarker('component', 'Bdoc2731c1')
                        <table @class([$__VIEW_ID__ . '-Bdoc27315', 'dir-mini'])>
                            <tbody @class([$__VIEW_ID__ . '-Bdoc273151'])>
                                <tr @class([$__VIEW_ID__ . '-Bdoc2731511'])><td @class([$__VIEW_ID__ . '-Bdoc27315111'])>chuột</td><td @class([$__VIEW_ID__ . '-Bdoc27315112'])>&#64;click · &#64;dblclick · &#64;contextmenu · &#64;mouseenter</td></tr>
                                <tr @class([$__VIEW_ID__ . '-Bdoc2731512'])><td @class([$__VIEW_ID__ . '-Bdoc27315121'])>form</td><td @class([$__VIEW_ID__ . '-Bdoc27315122'])>&#64;submit · &#64;change · &#64;input · &#64;focus · &#64;blur</td></tr>
                                <tr @class([$__VIEW_ID__ . '-Bdoc2731513'])><td @class([$__VIEW_ID__ . '-Bdoc27315131'])>bàn phím</td><td @class([$__VIEW_ID__ . '-Bdoc27315132'])>&#64;keydown và các sự kiện bàn phím chuẩn</td></tr>
                                <tr @class([$__VIEW_ID__ . '-Bdoc2731514'])><td @class([$__VIEW_ID__ . '-Bdoc27315141'])>khác</td><td @class([$__VIEW_ID__ . '-Bdoc27315142'])>&#64;wheel · &#64;scroll · &#64;resize · &#64;load</td></tr>
                            </tbody>
                        </table>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2732', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc27321', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc273211', 'dir-name'])>Modifier</span><span @class([$__VIEW_ID__ . '-Bdoc273212', 'dir-kind'])>.prevent .stop .self .once</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc27322', 'dir-sig'])>&#64;click.prevent(save())
&#64;click.stop.once(remove(id))</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc27323'])>Nối sau tên sự kiện, ghép được nhiều cái. Runtime xử lý chúng trước khi gọi handler của bạn.</p>
                        <table @class([$__VIEW_ID__ . '-Bdoc27324', 'dir-mini'])>
                            <tbody @class([$__VIEW_ID__ . '-Bdoc273241'])>
                                <tr @class([$__VIEW_ID__ . '-Bdoc2732411'])><td @class([$__VIEW_ID__ . '-Bdoc27324111'])>.prevent</td><td @class([$__VIEW_ID__ . '-Bdoc27324112'])>gọi <code @class([$__VIEW_ID__ . '-Bdoc273241121'])>event.preventDefault()</code></td></tr>
                                <tr @class([$__VIEW_ID__ . '-Bdoc2732412'])><td @class([$__VIEW_ID__ . '-Bdoc27324121'])>.stop</td><td @class([$__VIEW_ID__ . '-Bdoc27324122'])>gọi <code @class([$__VIEW_ID__ . '-Bdoc273241221'])>event.stopPropagation()</code></td></tr>
                                <tr @class([$__VIEW_ID__ . '-Bdoc2732413'])><td @class([$__VIEW_ID__ . '-Bdoc27324131'])>.self</td><td @class([$__VIEW_ID__ . '-Bdoc27324132'])>chỉ chạy khi <code @class([$__VIEW_ID__ . '-Bdoc273241321'])>event.target === event.currentTarget</code> — kiểm <em @class([$__VIEW_ID__ . '-Bdoc273241322'])>trước</em> <code @class([$__VIEW_ID__ . '-Bdoc273241323'])>.prevent</code> và <code @class([$__VIEW_ID__ . '-Bdoc273241324'])>.stop</code></td></tr>
                                <tr @class([$__VIEW_ID__ . '-Bdoc2732414'])><td @class([$__VIEW_ID__ . '-Bdoc27324141'])>.once</td><td @class([$__VIEW_ID__ . '-Bdoc27324142'])>chạy đúng một lần rồi tự gỡ</td></tr>
                            </tbody>
                        </table>
                        <p @class([$__VIEW_ID__ . '-Bdoc27325', 'dir-note', 'dir-note--warn'])>Modifier hiện chỉ được emit đúng ở phía JavaScript; đầu ra Blade còn sinh thuộc tính thừa. Trang cần SSR sạch thì dùng <code @class([$__VIEW_ID__ . '-Bdoc273251'])>&#64;submit(save(event))</code> rồi tự gọi <code @class([$__VIEW_ID__ . '-Bdoc273252'])>event.preventDefault()</code> trong method.</p>
                    </article>

                </div>
            </section>

            <section @class([$__VIEW_ID__ . '-Bdoc28', 'dir-group']) @attr(['id' => 'layout'])>
                <h2 @class([$__VIEW_ID__ . '-Bdoc281'])>Layout &amp; component</h2>
                <p @class([$__VIEW_ID__ . '-Bdoc282'])>Layout không phải chuỗi HTML ghép lại: mỗi tầng là một view thật có ViewController riêng. Điều hướng giữa hai trang cùng layout chỉ thay nhánh khác biệt, phần layout trùng nhau được giữ nguyên cả DOM lẫn state.</p>
                <div @class([$__VIEW_ID__ . '-Bdoc283', 'dir-list'])>

                    <article @class([$__VIEW_ID__ . '-Bdoc2831', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc28311', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc283111', 'dir-name'])>&#64;extends</span><span @class([$__VIEW_ID__ . '-Bdoc283112', 'dir-kind'])>Layout</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc28312', 'dir-sig'])>&#64;extends(__layout__ + "public")</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc28313'])>Khai báo layout cha. Hàm <code @class([$__VIEW_ID__ . '-Bdoc283131'])>render()</code> của trang sẽ trả về <em @class([$__VIEW_ID__ . '-Bdoc283132'])>view cha</em> thay vì cây element của chính nó — ViewManager nhìn kiểu trả về để rẽ nhánh. Layout lồng layout được, chuỗi phân giải đệ quy.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2832', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc28321', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc283211', 'dir-name'])>&#64;block <em @class([$__VIEW_ID__ . '-Bdoc2832111'])>· &#64;useBlock · &#64;endblock</em></span><span @class([$__VIEW_ID__ . '-Bdoc283212', 'dir-kind'])>Layout</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc28322', 'dir-sig'])><span @class([$__VIEW_ID__ . '-Bdoc283221', 'c'])>// trang:</span>
&#64;block('content') … &#64;endblock

<span @class([$__VIEW_ID__ . '-Bdoc283222', 'c'])>// layout:</span>
&#64;useBlock('content')</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc28323'])>Trang <em @class([$__VIEW_ID__ . '-Bdoc283231'])>đăng ký</em> nội dung, layout <em @class([$__VIEW_ID__ . '-Bdoc283232'])>tạo chỗ trống</em>. BlockManager nối hai bên theo tên. Nhờ tách rời như vậy, nội dung block được dựng lười đúng vị trí outlet chứ không phải append mù vào cuối thẻ chứa.</p>
                        @startMarker('component', 'Bdoc2832c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_20'))
@verbatim
&lt;!-- layouts/docs.sao --&gt;
&#64;extends(__layout__ + "public")
&#64;block('content')
    &lt;aside class="docs-nav"&gt;…&lt;/aside&gt;
    &lt;main&gt;&#64;useBlock('doc')&lt;/main&gt;
&#64;endblock
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__20_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_20'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__20_content])
@endMarker('component', 'Bdoc2832c1')
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2833', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc28331', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc283311', 'dir-name'])>&#64;section <em @class([$__VIEW_ID__ . '-Bdoc2833111'])>· &#64;yield</em></span><span @class([$__VIEW_ID__ . '-Bdoc283312', 'dir-kind'])>Layout</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc28332', 'dir-sig'])>&#64;section('tên') … &#64;endsection
&#64;yield('tên', 'mặc định')</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc28333'])>Cơ chế section quen thuộc của Blade. Section có thể khai báo kiểu render dài hoặc có preloader riêng qua config sinh ra trong <code @class([$__VIEW_ID__ . '-Bdoc283331'])>__VIEW_CONFIG__</code>.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2834', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc28341', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc283411', 'dir-name'])>&#64;import</span><span @class([$__VIEW_ID__ . '-Bdoc283412', 'dir-kind'])>Component</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc28342', 'dir-sig'])>&#64;import(__template__ + 'counter')
&#64;import(__template__ + 'card' as card)
&#64;import({ a: 'path.a', b: __template__ + 'b' })</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc28343'])>Nạp view khác vào phạm vi hiện tại và đăng ký nó vào registry component của file. Sau khi import, có thể dùng như thẻ tuỳ chỉnh trong template thay vì gọi <code @class([$__VIEW_ID__ . '-Bdoc283431'])>&#64;include</code> mỗi lần.</p>
                        @startMarker('component', 'Bdoc2834c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_21'))
@verbatim
&#64;import(__template__ + 'demo.featurecard')

&lt;featurecard number="01" title="Reactive state"&gt;…&lt;/featurecard&gt;
                        @endverbatim
@exec($__env->stopSection())
@exec($__code_block__21_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_21'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__21_content])
@endMarker('component', 'Bdoc2834c1')
                        <p @class([$__VIEW_ID__ . '-Bdoc28344', 'dir-note'])>Thuộc tính không tiền tố là chuỗi tĩnh; thêm <code @class([$__VIEW_ID__ . '-Bdoc283441'])>:</code> trước tên để truyền biểu thức (<code @class([$__VIEW_ID__ . '-Bdoc283442'])>:value="count"</code>). Dạng <code @class([$__VIEW_ID__ . '-Bdoc283443'])>:</code> sinh ra đúng cùng một lời gọi như <code @class([$__VIEW_ID__ . '-Bdoc283444'])>&#64;include</code> với object props — kể cả stateKeys, nên prop vẫn được đẩy lại khi state đổi.</p>
                        <p @class([$__VIEW_ID__ . '-Bdoc28345'])>Alias đặt bằng <code @class([$__VIEW_ID__ . '-Bdoc283451'])>as</code> còn dùng được ở chỗ khác cần đường dẫn view: <code @class([$__VIEW_ID__ . '-Bdoc283452'])>&#64;extends</code> và <code @class([$__VIEW_ID__ . '-Bdoc283453'])>&#64;include</code>. Nó là <em @class([$__VIEW_ID__ . '-Bdoc283454'])>điểm neo lúc biên dịch</em>, không phải biến — compiler thay alias bằng chính biểu thức đường dẫn trước khi sinh code, nên Blade và JS không thể trỏ hai nơi khác nhau.</p>
                        @startMarker('component', 'Bdoc2834c2')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_22'))
@verbatim
&#64;import(__layout__ + 'docs' as layout)

&#64;extends(layout)          {{-- y hệt &#64;extends(__layout__ + 'docs') --}}
                        @endverbatim
@exec($__env->stopSection())
@exec($__code_block__22_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_22'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__22_content])
@endMarker('component', 'Bdoc2834c2')
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2835', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc28351', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc283511', 'dir-name'])>&#64;importView</span><span @class([$__VIEW_ID__ . '-Bdoc283512', 'dir-kind'])>Trong script setup</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc28352', 'dir-sig'])>&#64;importView(__base__ + 'components.card' as Card)</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc28353'])>Bản dùng <strong @class([$__VIEW_ID__ . '-Bdoc283531'])>bên trong <code @class([$__VIEW_ID__ . '-Bdoc2835311'])>&lt;script setup&gt;</code></strong> của <code @class([$__VIEW_ID__ . '-Bdoc283532'])>&#64;import</code>. Cùng kết quả: đăng ký component vào registry để dùng thẻ <code @class([$__VIEW_ID__ . '-Bdoc283533'])>&lt;Card /&gt;</code> trong template.</p>
                        <p @class([$__VIEW_ID__ . '-Bdoc28354', 'dir-note'])>Đường dẫn nhận cả biến: khai <code @class([$__VIEW_ID__ . '-Bdoc283541'])>&#64;let(cardPath: string = __base__ + '…')</code> rồi <code @class([$__VIEW_ID__ . '-Bdoc283542'])>&#64;importView(cardPath as Card)</code>.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2836', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc28361', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc283611', 'dir-name'])>&#64;importInclude</span><span @class([$__VIEW_ID__ . '-Bdoc283612', 'dir-kind'])>Include kèm props</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc28362', 'dir-sig'])>&#64;importInclude(Card, ['title' =&gt; 'Xin chào'])</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc28363'])>Chèn component đã <code @class([$__VIEW_ID__ . '-Bdoc283631'])>&#64;import</code> và truyền props cho nó. Thẻ <code @class([$__VIEW_ID__ . '-Bdoc283632'])>&lt;Card /&gt;</code> là dạng rút gọn không props; cần truyền dữ liệu động thì dùng dạng này hoặc <code @class([$__VIEW_ID__ . '-Bdoc283633'])>:prop="biểu_thức"</code> trên thẻ.</p>
                        <p @class([$__VIEW_ID__ . '-Bdoc28364', 'dir-note'])>Attribute chuỗi trên thẻ component là <strong @class([$__VIEW_ID__ . '-Bdoc283641'])>tĩnh</strong>, không nội suy — <code @class([$__VIEW_ID__ . '-Bdoc283642'])>&lt;Card title="&#123;&#123; x &#125;&#125;"&gt;</code> không truyền giá trị của <code @class([$__VIEW_ID__ . '-Bdoc283643'])>x</code>.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2837', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc28371', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc283711', 'dir-name'])>&#64;include</span><span @class([$__VIEW_ID__ . '-Bdoc283712', 'dir-kind'])>Component</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc28372', 'dir-sig'])>&#64;include('đường.dẫn.view')
&#64;include('đường.dẫn.view', {prop: biểu_thức})</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc28373'])>Tạo một view con thật: có ViewController riêng, state riêng, vòng đời riêng. Đây là khác biệt lớn với partial — view con sống độc lập, được start, pause, resume và destroy theo chính nó.</p>
                        <p @class([$__VIEW_ID__ . '-Bdoc28374'])>Compiler đọc object props để suy ra view con phụ thuộc state nào của cha. Khi state đó đổi, runtime <em @class([$__VIEW_ID__ . '-Bdoc283741'])>đẩy props mới vào đúng instance đang sống</em> chứ không dựng lại view con — nên state nội bộ của nó, ví dụ một form đang mở dở, không bị thổi bay.</p>
                        @startMarker('component', 'Bdoc2837c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_23'))
@verbatim
&#64;foreach(ids as id)
    &#64;key(id)
    &#64;include('web.modules.roster.item', {uid: id, record: records[id] ?? null})
    {{-- hoặc, sau &#64;import(... as rosteritem): --}}
    &lt;rosteritem :uid="id" :record="records[id] ?? null" /&gt;
&#64;endforeach
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__23_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_23'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__23_content])
@endMarker('component', 'Bdoc2837c1')
                        <p @class([$__VIEW_ID__ . '-Bdoc28375', 'dir-note'])>Props phải sống được qua SSR nên chỉ nhận giá trị tuần tự hoá được — không truyền được callback. Kênh từ con lên cha là bus sự kiện <code @class([$__VIEW_ID__ . '-Bdoc283751'])>App.Event</code>.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2838', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc28381', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc283811', 'dir-name'])>&#64;children</span><span @class([$__VIEW_ID__ . '-Bdoc283812', 'dir-kind'])>Slot</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc28382', 'dir-sig'])>&#64;children</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc28383'])>Chỗ đặt nội dung mà bên gọi truyền vào giữa hai thẻ. Nội dung được render lười đúng tại vị trí khai báo và giữ nguyên context của bên gọi — biến trong đó vẫn là biến của view cha, không phải của component.</p>
                        @startMarker('component', 'Bdoc2838c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_24'))
@verbatim
&lt;!-- card.sao --&gt;
&lt;article class="card"&gt;&lt;h3&gt;{{ title }}&lt;/h3&gt;&#64;children&lt;/article&gt;

&lt;!-- bên gọi --&gt;
&lt;card title="Ví dụ"&gt;&lt;p&gt;Nội dung này đi qua slot&lt;/p&gt;&lt;/card&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__24_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_24'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__24_content])
@endMarker('component', 'Bdoc2838c1')
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2839', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc28391', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc283911', 'dir-name'])>&#64;exec</span><span @class([$__VIEW_ID__ . '-Bdoc283912', 'dir-kind'])>Tiện ích</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc28392', 'dir-sig'])>&#64;exec(biểu_thức)</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc28393'])>Chạy một biểu thức mà không in ra gì. Dùng để gán biến trung gian hoặc gọi hàm phụ ngay trong template.</p>
                    </article>

                </div>
            </section>

            <section @class([$__VIEW_ID__ . '-Bdoc29', 'dir-group']) @attr(['id' => 'asset'])>
                <h2 @class([$__VIEW_ID__ . '-Bdoc291'])>Asset của trang</h2>
                <p @class([$__VIEW_ID__ . '-Bdoc292'])>Trong <code @class([$__VIEW_ID__ . '-Bdoc2921'])>.sao</code> bạn <strong @class([$__VIEW_ID__ . '-Bdoc2922'])>không gọi hai directive này</strong> — cứ khai báo <code @class([$__VIEW_ID__ . '-Bdoc2923'])>&lt;link rel="stylesheet"&gt;</code> hoặc <code @class([$__VIEW_ID__ . '-Bdoc2924'])>&lt;script src&gt;</code> ở cuối file, ngoài <code @class([$__VIEW_ID__ . '-Bdoc2925'])>&lt;template&gt;</code>, compiler tự dịch sang chúng cho nhánh Blade và sang <code @class([$__VIEW_ID__ . '-Bdoc2926'])>styles</code>/<code @class([$__VIEW_ID__ . '-Bdoc2927'])>scripts</code> cho nhánh JavaScript. Chúng là API cho Blade viết tay: layout của bạn, partial hệ thống, hay gói mở rộng.</p>
                <p @class([$__VIEW_ID__ . '-Bdoc293'])>Điểm mấu chốt: hai directive này <em @class([$__VIEW_ID__ . '-Bdoc2931'])>đăng ký</em> chứ không in thẻ tại chỗ. In tại chỗ là cách cũ và nó hỏng thật — với trang <code @class([$__VIEW_ID__ . '-Bdoc2932'])>&#64;extends</code>, phần nằm ngoài block được in TRƯỚC khi layout in <code @class([$__VIEW_ID__ . '-Bdoc2933'])>&lt;!DOCTYPE html&gt;</code>, mà doctype đứng sau nội dung thì trình duyệt bỏ luôn, cả trang rơi vào quirks mode.</p>
                <div @class([$__VIEW_ID__ . '-Bdoc294', 'dir-list'])>

                    <article @class([$__VIEW_ID__ . '-Bdoc2941', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc29411', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc294111', 'dir-name'])>&#64;asset <em @class([$__VIEW_ID__ . '-Bdoc2941111'])>· &#64;assets</em></span><span @class([$__VIEW_ID__ . '-Bdoc294112', 'dir-kind'])>Đường dẫn asset</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc29412', 'dir-sig'])>&#64;asset(logo = 'images/logo.svg')<br @class([$__VIEW_ID__ . '-Bdoc294121'])>&#64;assets({icon: 'images/icon.svg', banner: 'images/b.png'})</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc29413'])>Khai báo một biến trỏ tới file trong thư mục asset của context. Dùng như biến thường trong template: <code @class([$__VIEW_ID__ . '-Bdoc294131'])>&lt;img src="&#123;&#123; logo &#125;&#125;"&gt;</code>.</p>
                        <p @class([$__VIEW_ID__ . '-Bdoc29414'])>Giá trị được giải cùng một tiền tố ở cả hai phía — Blade gọi <code @class([$__VIEW_ID__ . '-Bdoc294141'])>asset()</code>, JavaScript gọi <code @class([$__VIEW_ID__ . '-Bdoc294142'])>App.Helper.asset()</code> — nên đường dẫn không bao giờ lệch giữa SSR và CSR. Viết tay chuỗi đường dẫn thì mất bảo chứng đó.</p>
                        <p @class([$__VIEW_ID__ . '-Bdoc29415', 'dir-note'])><code @class([$__VIEW_ID__ . '-Bdoc294151'])>&#64;assets</code> là dạng nhiều biến của <code @class([$__VIEW_ID__ . '-Bdoc294152'])>&#64;asset</code>. Cả hai khai báo được bên trong <code @class([$__VIEW_ID__ . '-Bdoc294153'])>&lt;script setup&gt;</code>.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2942', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc29421', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc294211', 'dir-name'])>&#64;addCssLink</span><span @class([$__VIEW_ID__ . '-Bdoc294212', 'dir-kind'])>Asset</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc29422', 'dir-sig'])>&#64;addCssLink($href, $attributes = [])</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc29423'])>Đăng ký một stylesheet. Thẻ được in trong <code @class([$__VIEW_ID__ . '-Bdoc294231'])>&lt;head&gt;</code>. Trùng thì chỉ ra một thẻ — khoá so trùng là <code @class([$__VIEW_ID__ . '-Bdoc294232'])>id</code> nếu bạn đưa vào, không thì chính <code @class([$__VIEW_ID__ . '-Bdoc294233'])>href</code>; nhờ vậy layout, trang và component cùng khai báo một file cũng chỉ tốn một <code @class([$__VIEW_ID__ . '-Bdoc294234'])>&lt;link&gt;</code>.</p>
                        @startMarker('component', 'Bdoc2942c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_25'))
@verbatim
&#64;addCssLink('/static/saola/roster.css')
&#64;addCssLink(asset('css/theme.css'), ['id' =&gt; 'theme', 'media' =&gt; 'print'])
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__25_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_25'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__25_content])
@endMarker('component', 'Bdoc2942c1')
                        <p @class([$__VIEW_ID__ . '-Bdoc29424', 'dir-note'])>Đăng ký sau khi <code @class([$__VIEW_ID__ . '-Bdoc294241'])>&lt;head&gt;</code> đã render thì thẻ ra cuối <code @class([$__VIEW_ID__ . '-Bdoc294242'])>&lt;body&gt;</code> — vẫn hợp lệ và vẫn áp dụng, chỉ muộn hơn một nhịp. Đó là đường của chính layout, vì layout render sau trang con.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2943', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc29431', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc294311', 'dir-name'])>&#64;addScriptSrc</span><span @class([$__VIEW_ID__ . '-Bdoc294312', 'dir-kind'])>Asset</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc29432', 'dir-sig'])>&#64;addScriptSrc($src, $attributes = [])</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc29433'])>Đăng ký một script ngoài. Thẻ được in ở cuối <code @class([$__VIEW_ID__ . '-Bdoc294331'])>&lt;body&gt;</code>, theo đúng thứ tự đăng ký, cùng cách so trùng như trên. Attribute cờ viết <code @class([$__VIEW_ID__ . '-Bdoc294332'])>true</code>.</p>
                        @startMarker('component', 'Bdoc2943c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_26'))
@verbatim
&#64;addScriptSrc('https://cdn.example.com/prism.min.js', ['data-manual' =&gt; true])
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__26_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_26'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__26_content])
@endMarker('component', 'Bdoc2943c1')
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2944', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc29441', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc294411', 'dir-name'])>Vòng đời</span><span @class([$__VIEW_ID__ . '-Bdoc294412', 'dir-kind'])>SSR · hydrate · SPA</span></div>
                        <p @class([$__VIEW_ID__ . '-Bdoc29442'])>Thẻ do server in ra được runtime <strong @class([$__VIEW_ID__ . '-Bdoc294421'])>nhận nuôi</strong> (adopt) lúc hydrate chứ không chèn bản thứ hai. Sau đó nó đi theo vòng đời view, đếm tham chiếu:</p>
                        <table @class([$__VIEW_ID__ . '-Bdoc29443', 'dir-mini'])>
                            <tbody @class([$__VIEW_ID__ . '-Bdoc294431'])>
                                <tr @class([$__VIEW_ID__ . '-Bdoc2944311'])><td @class([$__VIEW_ID__ . '-Bdoc29443111'])>mount / resume</td><td @class([$__VIEW_ID__ . '-Bdoc29443112'])>chèn khi tham chiếu 0 → 1</td></tr>
                                <tr @class([$__VIEW_ID__ . '-Bdoc2944312'])><td @class([$__VIEW_ID__ . '-Bdoc29443121'])>unmount / pause / destroy</td><td @class([$__VIEW_ID__ . '-Bdoc29443122'])>gỡ khi tham chiếu 1 → 0</td></tr>
                            </tbody>
                        </table>
                        <p @class([$__VIEW_ID__ . '-Bdoc29444'])>Nên rời trang là CSS của trang đó biến khỏi <code @class([$__VIEW_ID__ . '-Bdoc294441'])>&lt;head&gt;</code>: hai trang dùng chung selector với CSS khác nhau không đè lên nhau. CSS mà nhiều view cùng khai báo chỉ đi khi view cuối rời đi.</p>
                        <p @class([$__VIEW_ID__ . '-Bdoc29445', 'dir-note'])><code @class([$__VIEW_ID__ . '-Bdoc294451'])>&lt;script&gt;</code> thì <strong @class([$__VIEW_ID__ . '-Bdoc294452'])>giữ lại</strong>. Gỡ thẻ script không hoàn tác side effect của nó, còn chèn lại là chạy lần hai — nạp lại một thư viện là xoá sạch những gì đã đăng ký vào nó giữa hai lần.</p>
                    </article>

                </div>
            </section>

            <section @class([$__VIEW_ID__ . '-Bdoc2e10_', 'dir-group']) @attr(['id' => 'tien-ich'])>
                <h2 @class([$__VIEW_ID__ . '-Bdoc2e10_1'])>Quyền, form &amp; tiện ích</h2>
                <p @class([$__VIEW_ID__ . '-Bdoc2e10_2'])>Nhóm này giữ nguyên ngữ nghĩa Blade quen thuộc, nên nếu bạn đã viết Laravel thì không phải học lại.</p>
                <div @class([$__VIEW_ID__ . '-Bdoc2e10_3', 'dir-list'])>

                    <article @class([$__VIEW_ID__ . '-Bdoc2e10_31', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc2e10_311', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc2e10_3111', 'dir-name'])>&#64;csrf <em @class([$__VIEW_ID__ . '-Bdoc2e10_31111'])>· &#64;method</em></span><span @class([$__VIEW_ID__ . '-Bdoc2e10_3112', 'dir-kind'])>Form</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc2e10_312', 'dir-sig'])>&#64;csrf
&#64;method('PUT')</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc2e10_313'])>Chèn ô ẩn chứa token CSRF, và giả lập HTTP method cho form vốn chỉ gửi được GET với POST.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2e10_32', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc2e10_321', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc2e10_3211', 'dir-name'])>&#64;auth <em @class([$__VIEW_ID__ . '-Bdoc2e10_32111'])>· &#64;guest</em></span><span @class([$__VIEW_ID__ . '-Bdoc2e10_3212', 'dir-kind'])>Quyền</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc2e10_322', 'dir-sig'])>&#64;auth … &#64;endauth
&#64;guest … &#64;endguest</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc2e10_323'])>Khối hiển thị theo trạng thái đăng nhập, xét ở phía server lúc render.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2e10_33', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc2e10_331', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc2e10_3311', 'dir-name'])>&#64;can <em @class([$__VIEW_ID__ . '-Bdoc2e10_33111'])>· &#64;cannot</em></span><span @class([$__VIEW_ID__ . '-Bdoc2e10_3312', 'dir-kind'])>Quyền</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc2e10_332', 'dir-sig'])>&#64;can('quyền', $model) … &#64;endcan</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc2e10_333'])>Khối theo policy của Laravel. Cùng cách viết, cùng cách phân giải quyền.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2e10_34', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc2e10_341', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc2e10_3411', 'dir-name'])>&#64;error</span><span @class([$__VIEW_ID__ . '-Bdoc2e10_3412', 'dir-kind'])>Form</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc2e10_342', 'dir-sig'])>&#64;error('trường') … &#64;enderror</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc2e10_343'])>Hiện lỗi validation của một trường, với biến <code @class([$__VIEW_ID__ . '-Bdoc2e10_3431'])>$message</code> sẵn trong khối.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2e10_35', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc2e10_351', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc2e10_3511', 'dir-name'])>&#64;hasSection</span><span @class([$__VIEW_ID__ . '-Bdoc2e10_3512', 'dir-kind'])>Layout</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc2e10_352', 'dir-sig'])>&#64;hasSection('tên') … &#64;endhassection</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc2e10_353'])>Kiểm tra một section đã được trang con định nghĩa chưa, để layout quyết định có dựng khung bao quanh hay không.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2e10_36', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc2e10_361', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc2e10_3611', 'dir-name'])>&#64;verbatim</span><span @class([$__VIEW_ID__ . '-Bdoc2e10_3612', 'dir-kind'])>Tiện ích</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc2e10_362', 'dir-sig'])>&#64;verbatim … &#64;endverbatim</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc2e10_363'])>Xuất nguyên văn, không biên dịch gì bên trong. Cần khi bạn muốn in ra cú pháp của chính Saola hoặc của một template engine khác.</p>
                    </article>

                </div>
            </section>

            <section @class([$__VIEW_ID__ . '-Bdoc2e11_', 'dir-group']) @attr(['id' => 'magic'])>
                <h2 @class([$__VIEW_ID__ . '-Bdoc2e11_1'])>Biến ma thuật</h2>
                <p @class([$__VIEW_ID__ . '-Bdoc2e11_2'])>Có sẵn trong mọi view, do render context cấp. Dùng chúng thay vì viết cứng đường dẫn để view còn chuyển được giữa các context.</p>
                <div @class([$__VIEW_ID__ . '-Bdoc2e11_3', 'dir-list'])>
                    <article @class([$__VIEW_ID__ . '-Bdoc2e11_31', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc2e11_311', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc2e11_3111', 'dir-name'])>Danh sách</span><span @class([$__VIEW_ID__ . '-Bdoc2e11_3112', 'dir-kind'])>Toàn cục trong view</span></div>
                        <table @class([$__VIEW_ID__ . '-Bdoc2e11_312', 'dir-mini'])>
                            <tbody @class([$__VIEW_ID__ . '-Bdoc2e11_3121'])>
                                <tr @class([$__VIEW_ID__ . '-Bdoc2e11_31211'])><td @class([$__VIEW_ID__ . '-Bdoc2e11_312111'])>__layout__</td><td @class([$__VIEW_ID__ . '-Bdoc2e11_312112'])>đường dẫn gốc tới thư mục layout của context hiện tại</td></tr>
                                <tr @class([$__VIEW_ID__ . '-Bdoc2e11_31212'])><td @class([$__VIEW_ID__ . '-Bdoc2e11_312121'])>__template__</td><td @class([$__VIEW_ID__ . '-Bdoc2e11_312122'])>đường dẫn gốc tới component dùng chung</td></tr>
                                <tr @class([$__VIEW_ID__ . '-Bdoc2e11_31213'])><td @class([$__VIEW_ID__ . '-Bdoc2e11_312131'])>__VIEW_PATH__</td><td @class([$__VIEW_ID__ . '-Bdoc2e11_312132'])>đường dẫn dạng chấm của chính view này, ví dụ <code @class([$__VIEW_ID__ . '-Bdoc2e11_3121321'])>web.modules.docs.index</code></td></tr>
                                <tr @class([$__VIEW_ID__ . '-Bdoc2e11_31214'])><td @class([$__VIEW_ID__ . '-Bdoc2e11_312141'])>__VIEW_ID__</td><td @class([$__VIEW_ID__ . '-Bdoc2e11_312142'])>định danh instance, là tiền tố của mọi class và marker dùng để hydrate</td></tr>
                                <tr @class([$__VIEW_ID__ . '-Bdoc2e11_31215'])><td @class([$__VIEW_ID__ . '-Bdoc2e11_312151'])>__context__</td><td @class([$__VIEW_ID__ . '-Bdoc2e11_312152'])>context đang phục vụ request: web, admin, api hay mobile</td></tr>
                                <tr @class([$__VIEW_ID__ . '-Bdoc2e11_31216'])><td @class([$__VIEW_ID__ . '-Bdoc2e11_312161'])>__base__ · __page__<br @class([$__VIEW_ID__ . '-Bdoc2e11_3121611'])>__component__ · __partial__</td><td @class([$__VIEW_ID__ . '-Bdoc2e11_312162'])>đường dẫn gốc theo từng loại view</td></tr>
                                <tr @class([$__VIEW_ID__ . '-Bdoc2e11_31217'])><td @class([$__VIEW_ID__ . '-Bdoc2e11_312171'])>__system__</td><td @class([$__VIEW_ID__ . '-Bdoc2e11_312172'])>khối system data do render context truyền xuống</td></tr>
                            </tbody>
                        </table>
                    </article>
                </div>
            </section>
        </div>

        <a @class([$__VIEW_ID__ . '-Bdoc3', 'doc-next']) @attr(['href' => '/docs/tag-directives'])>
            <div @class([$__VIEW_ID__ . '-Bdoc31'])><span @class([$__VIEW_ID__ . '-Bdoc311'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-Bdoc312'])>Directive trên thẻ (#)</strong></div>
            <span @class([$__VIEW_ID__ . '-Bdoc32', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
