@exec($__ONE_COMPONENT_REGISTRY__ = ['code-block' => 'web.components.code-block']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
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
            <nav @class([$__VIEW_ID__ . '-Bdoc21', 'dir-toc']) @attr(['aria-label' => 'Nhóm directive'])>
                <a @class([$__VIEW_ID__ . '-Bdoc211']) @attr(['href' => '#khai-bao', 'data-nav' => 'disabled'])>Khai báo</a>
                <a @class([$__VIEW_ID__ . '-Bdoc212']) @attr(['href' => '#xuat-gia-tri', 'data-nav' => 'disabled'])>Xuất giá trị</a>
                <a @class([$__VIEW_ID__ . '-Bdoc213']) @attr(['href' => '#dieu-khien', 'data-nav' => 'disabled'])>Điều khiển luồng</a>
                <a @class([$__VIEW_ID__ . '-Bdoc214']) @attr(['href' => '#thuoc-tinh', 'data-nav' => 'disabled'])>Thuộc tính &amp; binding</a>
                <a @class([$__VIEW_ID__ . '-Bdoc215']) @attr(['href' => '#su-kien', 'data-nav' => 'disabled'])>Sự kiện</a>
                <a @class([$__VIEW_ID__ . '-Bdoc216']) @attr(['href' => '#layout', 'data-nav' => 'disabled'])>Layout &amp; component</a>
                <a @class([$__VIEW_ID__ . '-Bdoc217']) @attr(['href' => '#tien-ich', 'data-nav' => 'disabled'])>Quyền, form &amp; tiện ích</a>
                <a @class([$__VIEW_ID__ . '-Bdoc218']) @attr(['href' => '#magic', 'data-nav' => 'disabled'])>Biến ma thuật</a>
            </nav>

            <section @class([$__VIEW_ID__ . '-Bdoc22', 'dir-group']) @attr(['id' => 'khai-bao'])>
                <h2 @class([$__VIEW_ID__ . '-Bdoc221'])>Khai báo</h2>
                <p @class([$__VIEW_ID__ . '-Bdoc222'])>Nằm ở đầu file, ngoài <code @class([$__VIEW_ID__ . '-Bdoc2221'])>&lt;template&gt;</code>, và giữ nguyên thứ tự bạn viết. Đây là nơi quyết định biến nào reactive, biến nào không.</p>

                <div @class([$__VIEW_ID__ . '-Bdoc223', 'dir-list'])>

                    <article @class([$__VIEW_ID__ . '-Bdoc2231', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc22311', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc223111', 'dir-name'])>&#64;vars</span><span @class([$__VIEW_ID__ . '-Bdoc223112', 'dir-kind'])>Dữ liệu server</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc22312', 'dir-sig'])>&#64;vars(tên_1, tên_2 = mặc_định, ...)</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc22313'])>Khai báo biến do controller truyền xuống view. <strong @class([$__VIEW_ID__ . '-Bdoc223131'])>Nên khai báo 1 lần duy nhất ở đầu view</strong> (ngay sau <code @class([$__VIEW_ID__ . '-Bdoc223132'])>&#64;import</code> nếu có). Có thể khai báo nhiều biến cùng lúc cách nhau bằng dấu phẩy (<code @class([$__VIEW_ID__ . '-Bdoc223133'])>,</code>) kèm giá trị mặc định. Biến server là dữ liệu tĩnh của lần render này, không có tính reactive.</p>
                        @startMarker('component', 'Bdoc2231c1')
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
@endMarker('component', 'Bdoc2231c1')
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2232', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc22321', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc223211', 'dir-name'])>&#64;props</span><span @class([$__VIEW_ID__ . '-Bdoc223212', 'dir-kind'])>Đầu vào component</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc22322', 'dir-sig'])>&#64;props({ tên_1: mặc_định_1, tên_2: mặc_định_2, ... })</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc22323'])>Khai báo thuộc tính đầu vào của component. <strong @class([$__VIEW_ID__ . '-Bdoc223231'])>Nên khai báo 1 lần duy nhất ở đầu component</strong> dưới dạng một object chứa danh sách các prop và giá trị mặc định tương ứng. Props đóng vai trò là slot reactive: khi view cha đổi state truyền vào, runtime tự động đẩy giá trị mới vào <em @class([$__VIEW_ID__ . '-Bdoc223232'])>đúng instance con đang sống</em> mà không render lại view con.</p>
                        @startMarker('component', 'Bdoc2232c1')
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
@endMarker('component', 'Bdoc2232c1')
                        <p @class([$__VIEW_ID__ . '-Bdoc22324', 'dir-note'])>Props khi truyền ở <code @class([$__VIEW_ID__ . '-Bdoc223241'])>&lt;component-tag&gt;</code> hoặc <code @class([$__VIEW_ID__ . '-Bdoc223242'])>&#64;include</code> tuân theo cú pháp object của Saola (<code @class([$__VIEW_ID__ . '-Bdoc223243'])>khoá: giá_trị</code>), đồng bộ với <code @class([$__VIEW_ID__ . '-Bdoc223244'])>&#64;props</code> và <code @class([$__VIEW_ID__ . '-Bdoc223245'])>&#64;states</code>.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2233', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc22331', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc223311', 'dir-name'])>&#64;states</span><span @class([$__VIEW_ID__ . '-Bdoc223312', 'dir-kind'])>Reactive</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc22332', 'dir-sig'])>&#64;states({ key: giá_trị_khởi_tạo, ... })</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc22333'])>Khai báo khối state reactive cho view dưới dạng một object. <strong @class([$__VIEW_ID__ . '-Bdoc223331'])>Nên gom toàn bộ state của view vào 1 directive <code @class([$__VIEW_ID__ . '-Bdoc2233311'])>&#64;states</code> duy nhất ở đầu file</strong>. Mỗi khoá sinh ra ba thứ: biến đọc được trong template/script, hàm setter <code @class([$__VIEW_ID__ . '-Bdoc223332'])>setTênKhoá()</code>, và slot theo dõi phản ứng trong StateManager.</p>
                        <p @class([$__VIEW_ID__ . '-Bdoc22334'])>Giá trị bạn viết ở đây là giá trị khởi tạo cho <em @class([$__VIEW_ID__ . '-Bdoc223341'])>cả</em> lần render server lẫn lần hydrate client.</p>
                        @startMarker('component', 'Bdoc2233c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_2'))
@verbatim
&#64;states({ count: 0, name: 'Saola', items: [] })

&lt;button &#64;click(setCount(count + 1))&gt;{{ count }}&lt;/button&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__2_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_2'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__2_content])
@endMarker('component', 'Bdoc2233c1')
                        <p @class([$__VIEW_ID__ . '-Bdoc22335', 'dir-note'])>Tên setter là <code @class([$__VIEW_ID__ . '-Bdoc223351'])>set</code> + tên khoá viết hoa chữ đầu: <code @class([$__VIEW_ID__ . '-Bdoc223352'])>count</code> → <code @class([$__VIEW_ID__ . '-Bdoc223353'])>setCount</code>, <code @class([$__VIEW_ID__ . '-Bdoc223354'])>isOpen</code> → <code @class([$__VIEW_ID__ . '-Bdoc223355'])>setIsOpen</code>. Gọi setter với cùng reference vẫn được nhận nếu nội dung tầng một đã đổi (ví dụ: <code @class([$__VIEW_ID__ . '-Bdoc223356'])>list.splice(i,1); setList(list)</code>).</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2234', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc22341', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc223411', 'dir-name'])>&#64;state</span><span @class([$__VIEW_ID__ . '-Bdoc223412', 'dir-kind'])>Reactive</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc22342', 'dir-sig'])>&#64;state(tên = giá_trị, ...)</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc22343'])>Khai báo state reactive theo cú pháp gán đơn lẻ hoặc nhiều biến cách nhau bởi dấu phẩy (<code @class([$__VIEW_ID__ . '-Bdoc223431'])>,</code>). Dùng khi view chỉ có một vài state đơn giản mà không muốn tạo cả khối object <code @class([$__VIEW_ID__ . '-Bdoc223432'])>&#64;states</code>.</p>
                        @startMarker('component', 'Bdoc2234c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_3'))
@verbatim
&#64;state(editMode = false, page = 1, perPage = 20)
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__3_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_3'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__3_content])
@endMarker('component', 'Bdoc2234c1')
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2235', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc22351', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc223511', 'dir-name'])>&#64;const</span><span @class([$__VIEW_ID__ . '-Bdoc223512', 'dir-kind'])>Bất biến</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc22352', 'dir-sig'])>&#64;const(TÊN = giá_trị, ...)</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc22353'])>Khai báo hằng số bất biến cho view. Có thể khai báo nhiều hằng số cùng lúc trên một directive bằng dấu phẩy (<code @class([$__VIEW_ID__ . '-Bdoc223531'])>,</code>). Dạng thứ hai là destructuring kiểu React: tạo một cặp state và setter độc lập.</p>
                        @startMarker('component', 'Bdoc2235c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_4'))
@verbatim
&#64;const(API = '/api/v1', LIMIT = 20, TITLE = 'Quản trị')
&#64;const([message, setMessage] = useState('Xin chào'))
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__4_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_4'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__4_content])
@endMarker('component', 'Bdoc2235c1')
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2236', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc22361', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc223611', 'dir-name'])>&#64;let</span><span @class([$__VIEW_ID__ . '-Bdoc223612', 'dir-kind'])>Không reactive</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc22362', 'dir-sig'])>&#64;let(tên = biểu_thức, ...)</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc22363'])>Biến cục bộ có thể gán lại nhưng <strong @class([$__VIEW_ID__ . '-Bdoc223631'])>không</strong> reactive (đổi giá trị không kích hoạt render lại). Có thể khai báo nhiều biến cùng lúc bằng dấu phẩy (<code @class([$__VIEW_ID__ . '-Bdoc223632'])>,</code>). Dùng cho giá trị dẫn xuất tính một lần lúc dựng view.</p>
                        @startMarker('component', 'Bdoc2236c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_5'))
@verbatim
&#64;let(total = price * qty, greeting = `Xin chào ${name}`)
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__5_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_5'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__5_content])
@endMarker('component', 'Bdoc2236c1')
                        <p @class([$__VIEW_ID__ . '-Bdoc22364', 'dir-note', 'dir-note--warn'])>Nếu bạn muốn giá trị tự cập nhật theo state thì đừng dùng <code @class([$__VIEW_ID__ . '-Bdoc223641'])>&#64;let</code> — viết thẳng biểu thức trong template hoặc dùng <code @class([$__VIEW_ID__ . '-Bdoc223642'])>&#64;computed</code>, compiler sẽ tự động suy ra dependency graph.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2237', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc22371', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc223711', 'dir-name'])>&#64;await</span><span @class([$__VIEW_ID__ . '-Bdoc223712', 'dir-kind'])>Async</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc22372', 'dir-sig'])>&#64;await</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc22373'])>Đánh dấu view là bất đồng bộ. Compiler bật cờ <code @class([$__VIEW_ID__ . '-Bdoc223731'])>hasAwaitData</code> trong config, runtime nhờ đó biết view cần chờ dữ liệu trước khi commit state, và có thể render khối preload trong lúc chờ.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2238', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc22381', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc223811', 'dir-name'])>&#64;computed</span><span @class([$__VIEW_ID__ . '-Bdoc223812', 'dir-kind'])>Dẫn xuất</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc22382', 'dir-sig'])>&#64;computed(tên = biểu_thức)</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc22383'])>State dẫn xuất có memo hoá. Chỉ tính lại khi một trong các state phụ thuộc đổi, và tính <em @class([$__VIEW_ID__ . '-Bdoc223831'])>lười</em> — đánh dấu bẩn lúc dep đổi, tính thật lúc có người đọc. Dep đổi năm lần trong một batch thì chỉ tính một lần.</p>
                        @startMarker('component', 'Bdoc2238c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_6'))
@verbatim
&#64;states({ users: [] })
&#64;computed(activeCount = users.filter(u =&gt; u.active).length)
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__6_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_6'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__6_content])
@endMarker('component', 'Bdoc2238c1')
                        <p @class([$__VIEW_ID__ . '-Bdoc22384', 'dir-note', 'dir-note--warn'])><strong @class([$__VIEW_ID__ . '-Bdoc223841'])>Hiện chỉ chạy phía client.</strong> Directive này không được emit ở đầu ra Blade nên biến bị undefined khi render server. Trang cần SSR thì viết thẳng biểu thức trong template.</p>
                    </article>

                </div>
            </section>

            <section @class([$__VIEW_ID__ . '-Bdoc23', 'dir-group']) @attr(['id' => 'xuat-gia-tri'])>
                <h2 @class([$__VIEW_ID__ . '-Bdoc231'])>Xuất giá trị</h2>
                <p @class([$__VIEW_ID__ . '-Bdoc232'])>Mỗi chỗ nội suy được bọc trong một cặp marker riêng, nên đổi state chỉ thay đúng đoạn text đó chứ không render lại cả thẻ cha.</p>
                <div @class([$__VIEW_ID__ . '-Bdoc233', 'dir-list'])>

                    <article @class([$__VIEW_ID__ . '-Bdoc2331', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc23311', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc233111', 'dir-name'])>&#123;&#123; … &#125;&#125;</span><span @class([$__VIEW_ID__ . '-Bdoc233112', 'dir-kind'])>Escape</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc23312', 'dir-sig'])>&#123;&#123; biểu_thức &#125;&#125;</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc23313'])>In giá trị dưới dạng text an toàn. Nội dung được đặt bằng text node nên không có đường nào để chuỗi biến thành HTML.</p>
                        @startMarker('component', 'Bdoc2331c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_7'))
@verbatim
&lt;h1&gt;{{ user['name'] }}&lt;/h1&gt;
&lt;span&gt;{{ price * qty }}&lt;/span&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__7_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_7'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__7_content])
@endMarker('component', 'Bdoc2331c1')
                        <p @class([$__VIEW_ID__ . '-Bdoc23314', 'dir-note'])>Biểu thức được phép, không chỉ tên biến. Compiler đọc biểu thức để suy ra danh sách state mà vùng này phụ thuộc.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2332', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc23321', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc233211', 'dir-name'])>&#123;!! … !!&#125;</span><span @class([$__VIEW_ID__ . '-Bdoc233212', 'dir-kind'])>Raw HTML</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc23322', 'dir-sig'])>&#123;!! biểu_thức !!&#125;</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc23323'])>In nguyên HTML, không escape. Chỉ dùng cho nội dung bạn tự sinh ra hoặc đã làm sạch — đây là đường duy nhất để chuỗi từ dữ liệu trở thành thẻ thật.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2333', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc23331', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc233311', 'dir-name'])>&#123;&#123;-- … --&#125;&#125;</span><span @class([$__VIEW_ID__ . '-Bdoc233312', 'dir-kind'])>Ghi chú</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc23332', 'dir-sig'])>&#123;&#123;-- ghi chú --&#125;&#125;</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc23333'])>Ghi chú của template. Bị loại hoàn toàn khỏi cả hai đầu ra, khác với <code @class([$__VIEW_ID__ . '-Bdoc233331'])>&lt;!-- --&gt;</code> vốn đi thẳng vào HTML.</p>
                    </article>

                </div>
            </section>

            <section @class([$__VIEW_ID__ . '-Bdoc24', 'dir-group']) @attr(['id' => 'dieu-khien'])>
                <h2 @class([$__VIEW_ID__ . '-Bdoc241'])>Điều khiển luồng</h2>
                <p @class([$__VIEW_ID__ . '-Bdoc242'])>Mỗi khối trở thành một <em @class([$__VIEW_ID__ . '-Bdoc2421'])>vùng reactive</em>: một cặp marker trong DOM cộng danh sách state mà điều kiện phụ thuộc. State đổi thì chỉ nội dung giữa hai marker đó được dựng lại.</p>
                <div @class([$__VIEW_ID__ . '-Bdoc243', 'dir-list'])>

                    <article @class([$__VIEW_ID__ . '-Bdoc2431', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc24311', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc243111', 'dir-name'])>&#64;if <em @class([$__VIEW_ID__ . '-Bdoc2431111'])>· &#64;elseif · &#64;else · &#64;endif</em></span><span @class([$__VIEW_ID__ . '-Bdoc243112', 'dir-kind'])>Vùng reactive</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc24312', 'dir-sig'])>&#64;if(điều_kiện)
    …
&#64;elseif(điều_kiện_khác)
    …
&#64;else
    …
&#64;endif</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc24313'])>Compiler đọc biểu thức điều kiện, rút ra danh sách state trong đó và gắn vào vùng. Không có dependency tracking lúc chạy — phụ thuộc được tính sẵn lúc biên dịch.</p>
                        @startMarker('component', 'Bdoc2431c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_8'))
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
@exec($__code_block__8_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_8'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__8_content])
@endMarker('component', 'Bdoc2431c1')
                        <p @class([$__VIEW_ID__ . '-Bdoc24314', 'dir-note'])>Đặt <code @class([$__VIEW_ID__ . '-Bdoc243141'])>&#64;if</code> bên trong <code @class([$__VIEW_ID__ . '-Bdoc243142'])>&#64;foreach</code> thì mỗi item có vùng marker riêng, nên đổi một item không đụng các item khác.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2432', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc24321', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc243211', 'dir-name'])>&#64;foreach <em @class([$__VIEW_ID__ . '-Bdoc2432111'])>· &#64;endforeach</em></span><span @class([$__VIEW_ID__ . '-Bdoc243212', 'dir-kind'])>Vùng reactive</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc24322', 'dir-sig'])>&#64;foreach(danh_sách as item)
&#64;foreach(danh_sách as khoá =&gt; item)</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc24323'])>Lặp có <em @class([$__VIEW_ID__ . '-Bdoc243231'])>reconciliation</em>: runtime giữ một cache slot cho mỗi item. Khi danh sách đổi, item nào còn nguyên thì giữ nguyên DOM và mọi subscription của nó; item rời danh sách thì element bị destroy hẳn chứ không bỏ rơi.</p>
                        @startMarker('component', 'Bdoc2432c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_9'))
@verbatim
&#64;foreach(items as item)
    &#64;key(item['id'])
    &lt;li&gt;{{ item['label'] }}&lt;/li&gt;
&#64;endforeach
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__9_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_9'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__9_content])
@endMarker('component', 'Bdoc2432c1')
                        <p @class([$__VIEW_ID__ . '-Bdoc24324', 'dir-note', 'dir-note--warn'])>Slot chỉ được tái dùng khi khoá khớp <strong @class([$__VIEW_ID__ . '-Bdoc243241'])>và</strong> reference của item không đổi — vì output biên dịch đóng gói thẳng object item vào closure. Refetch từ server trả object mới sẽ dựng lại hàng đó. Muốn giữ state của view con qua mỗi lần đồng bộ thì lặp trên danh sách id ổn định rồi truyền dữ liệu qua props.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2433', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc24331', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc243311', 'dir-name'])>&#64;key</span><span @class([$__VIEW_ID__ . '-Bdoc243312', 'dir-kind'])>Bổ trợ vòng lặp</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc24332', 'dir-sig'])>&#64;key(biểu_thức)</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc24333'])>Đặt ngay dòng đầu thân vòng lặp. Nó cho cache biết lấy gì làm định danh của item. Không có <code @class([$__VIEW_ID__ . '-Bdoc243331'])>&#64;key</code> thì runtime dùng chính reference object làm khoá, và hậu tố id của marker rơi về chỉ số vòng lặp — phải khớp với phía SSR thì hydrate mới không lệch.</p>
                        <p @class([$__VIEW_ID__ . '-Bdoc24334'])>Khoá còn giúp phân biệt các item trùng nhau trong danh sách nguyên thuỷ, ví dụ <code @class([$__VIEW_ID__ . '-Bdoc243341'])>['a', 'b', 'a']</code>.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2434', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc24341', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc243411', 'dir-name'])>&#64;forelse <em @class([$__VIEW_ID__ . '-Bdoc2434111'])>· &#64;empty · &#64;endforelse</em></span><span @class([$__VIEW_ID__ . '-Bdoc243412', 'dir-kind'])>Vùng reactive</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc24342', 'dir-sig'])>&#64;forelse(danh_sách as item)
    …
&#64;empty
    …
&#64;endforelse</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc24343'])>Như <code @class([$__VIEW_ID__ . '-Bdoc243431'])>&#64;foreach</code> nhưng có sẵn nhánh cho danh sách rỗng, khỏi phải viết thêm một <code @class([$__VIEW_ID__ . '-Bdoc243432'])>&#64;if</code> đếm phần tử.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2435', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc24351', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc243511', 'dir-name'])>&#64;for <em @class([$__VIEW_ID__ . '-Bdoc2435111'])>· &#64;while</em></span><span @class([$__VIEW_ID__ . '-Bdoc243512', 'dir-kind'])>Vùng reactive</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc24352', 'dir-sig'])>&#64;for(i = 0; i &lt; n; i++) … &#64;endfor
&#64;while(điều_kiện) … &#64;endwhile</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc24353'])>Vòng lặp đếm và vòng lặp điều kiện. <code @class([$__VIEW_ID__ . '-Bdoc243531'])>&#64;while</code> có trần lặp ở runtime để một điều kiện sai không treo trình duyệt.</p>
                        @startMarker('component', 'Bdoc2435c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_10'))
@verbatim
&#64;for(i = 0; i &lt; count; i++)
    &lt;li&gt;Ping #{{ i + 1 }}&lt;/li&gt;
&#64;endfor
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__10_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_10'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__10_content])
@endMarker('component', 'Bdoc2435c1')
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2436', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc24361', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc243611', 'dir-name'])>&#64;switch <em @class([$__VIEW_ID__ . '-Bdoc2436111'])>· &#64;case · &#64;default · &#64;break</em></span><span @class([$__VIEW_ID__ . '-Bdoc243612', 'dir-kind'])>Vùng reactive</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc24362', 'dir-sig'])>&#64;switch(biểu_thức)
    &#64;case('a')
        …
        &#64;break
    &#64;default
        …
&#64;endswitch</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc24363'])>Nhiều nhánh gói trong một vùng marker duy nhất. Nhớ <code @class([$__VIEW_ID__ . '-Bdoc243631'])>&#64;break</code> ở cuối mỗi <code @class([$__VIEW_ID__ . '-Bdoc243632'])>&#64;case</code>, đúng ngữ nghĩa switch chứ không phải if-else.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2437', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc24371', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc243711', 'dir-name'])>&#64;continue <em @class([$__VIEW_ID__ . '-Bdoc2437111'])>· &#64;break</em></span><span @class([$__VIEW_ID__ . '-Bdoc243712', 'dir-kind'])>Điều khiển</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc24372', 'dir-sig'])>&#64;continue
&#64;break
&#64;continue(điều_kiện)</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc24373'])>Bỏ qua vòng hiện tại hoặc thoát vòng lặp. Nhận điều kiện tuỳ chọn để khỏi bọc thêm một <code @class([$__VIEW_ID__ . '-Bdoc243731'])>&#64;if</code>.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2438', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc24381', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc243811', 'dir-name'])>&#64;ssr <em @class([$__VIEW_ID__ . '-Bdoc2438111'])>· &#64;endssr</em></span><span @class([$__VIEW_ID__ . '-Bdoc243812', 'dir-kind'])>Chỉ server</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc24382', 'dir-sig'])>&#64;ssr … &#64;endssr</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc24383'])>Khối chỉ tồn tại ở đầu ra Blade. Compiler loại nó khỏi view JavaScript, nên nội dung bên trong xuất hiện trong HTML lần đầu rồi không bao giờ được runtime dựng lại. Hợp cho dữ liệu chỉ có ở server hoặc khối nặng không cần tương tác.</p>
                        <p @class([$__VIEW_ID__ . '-Bdoc24384', 'dir-note'])>Bí danh: <code @class([$__VIEW_ID__ . '-Bdoc243841'])>&#64;serverSide</code> / <code @class([$__VIEW_ID__ . '-Bdoc243842'])>&#64;endServerSide</code>, <code @class([$__VIEW_ID__ . '-Bdoc243843'])>&#64;useSSR</code> / <code @class([$__VIEW_ID__ . '-Bdoc243844'])>&#64;enduseSSR</code>.</p>
                    </article>

                </div>
            </section>

            <section @class([$__VIEW_ID__ . '-Bdoc25', 'dir-group']) @attr(['id' => 'thuoc-tinh'])>
                <h2 @class([$__VIEW_ID__ . '-Bdoc251'])>Thuộc tính &amp; binding</h2>
                <p @class([$__VIEW_ID__ . '-Bdoc252'])>Nhóm này viết <em @class([$__VIEW_ID__ . '-Bdoc2521'])>bên trong thẻ mở</em>. Runtime chia chúng thành bốn rổ khác nhau — <code @class([$__VIEW_ID__ . '-Bdoc2522'])>attrs</code>, <code @class([$__VIEW_ID__ . '-Bdoc2523'])>props</code>, <code @class([$__VIEW_ID__ . '-Bdoc2524'])>classes</code>, <code @class([$__VIEW_ID__ . '-Bdoc2525'])>styles</code> — vì đặt thuộc tính HTML và gán property của element không giống nhau.</p>
                <div @class([$__VIEW_ID__ . '-Bdoc253', 'dir-list'])>

                    <article @class([$__VIEW_ID__ . '-Bdoc2531', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc25311', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc253111', 'dir-name'])>&#64;attr</span><span @class([$__VIEW_ID__ . '-Bdoc253112', 'dir-kind'])>attrs</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc25312', 'dir-sig'])>&#64;attr({ tên: giá_trị, ... })</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc25313'])>Thuộc tính động. Giá trị <code @class([$__VIEW_ID__ . '-Bdoc253131'])>null</code>, <code @class([$__VIEW_ID__ . '-Bdoc253132'])>undefined</code> hoặc <code @class([$__VIEW_ID__ . '-Bdoc253133'])>false</code> làm runtime <em @class([$__VIEW_ID__ . '-Bdoc253134'])>gỡ hẳn</em> thuộc tính khỏi thẻ chứ không đặt chuỗi rỗng.</p>
                        @startMarker('component', 'Bdoc2531c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_11'))
@verbatim
&lt;a &#64;attr({ href: link, title: docTitle })&gt;…&lt;/a&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__11_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_11'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__11_content])
@endMarker('component', 'Bdoc2531c1')
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2532', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc25321', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc253211', 'dir-name'])>&#64;class</span><span @class([$__VIEW_ID__ . '-Bdoc253212', 'dir-kind'])>classes</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc25322', 'dir-sig'])>&#64;class({'tĩnh', 'có-điều-kiện': biểu_thức})</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc25323'])>Trộn class tĩnh với class có điều kiện. Runtime chỉ bật tắt đúng những class có điều kiện, không ghi đè cả thuộc tính <code @class([$__VIEW_ID__ . '-Bdoc253231'])>class</code> — nên class do code khác thêm vào vẫn còn.</p>
                        @startMarker('component', 'Bdoc2532c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_12'))
@verbatim
&lt;div &#64;class({'card', 'card--active': isActive, 'card--gone': record === null})&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__12_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_12'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__12_content])
@endMarker('component', 'Bdoc2532c1')
                        <p @class([$__VIEW_ID__ . '-Bdoc25324', 'dir-note', 'dir-note--warn'])>Tránh dấu <code @class([$__VIEW_ID__ . '-Bdoc253241'])>&gt;</code> hoặc <code @class([$__VIEW_ID__ . '-Bdoc253242'])>&lt;</code> trong biểu thức: bộ phân tích thẻ ở đầu ra Blade đóng thẻ sớm tại đó. Viết <code @class([$__VIEW_ID__ . '-Bdoc253243'])>count !== 0</code> thay cho <code @class([$__VIEW_ID__ . '-Bdoc253244'])>count &gt; 0</code>.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2533', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc25331', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc253311', 'dir-name'])>&#64;style</span><span @class([$__VIEW_ID__ . '-Bdoc253312', 'dir-kind'])>styles</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc25332', 'dir-sig'])>&#64;style({ 'thuộc-tính': giá_trị })</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc25333'])>Inline style theo state, đặt qua <code @class([$__VIEW_ID__ . '-Bdoc253331'])>style.setProperty</code> nên chỉ những thuộc tính bạn liệt kê bị đụng tới.</p>
                        <p @class([$__VIEW_ID__ . '-Bdoc25334', 'dir-note', 'dir-note--warn'])><strong @class([$__VIEW_ID__ . '-Bdoc253341'])>Dạng object của modern syntax hiện chưa ra đúng ở đầu ra JavaScript</strong> — nó rã thành các thuộc tính tĩnh rời rạc nên binding không chạy sau hydrate. Tạm thời dùng <code @class([$__VIEW_ID__ . '-Bdoc253342'])>&#64;class</code> với vài class dựng sẵn.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2534', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc25341', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc253411', 'dir-name'])>&#64;bind <em @class([$__VIEW_ID__ . '-Bdoc2534111'])>· &#64;val</em></span><span @class([$__VIEW_ID__ . '-Bdoc253412', 'dir-kind'])>Hai chiều</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc25342', 'dir-sig'])>&#64;bind(tên_state)</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc25343'])>Binding hai chiều. Runtime tự chọn cách đọc ghi theo loại input: <code @class([$__VIEW_ID__ . '-Bdoc253431'])>checked</code> cho checkbox, so khớp <code @class([$__VIEW_ID__ . '-Bdoc253432'])>value</code> cho radio, <code @class([$__VIEW_ID__ . '-Bdoc253433'])>valueAsNumber</code> cho number và range, còn lại là <code @class([$__VIEW_ID__ . '-Bdoc253434'])>value</code>. Với <code @class([$__VIEW_ID__ . '-Bdoc253435'])>&lt;select&gt;</code>, việc gán giá trị được hoãn một microtask vì <code @class([$__VIEW_ID__ . '-Bdoc253436'])>&lt;option&gt;</code> chưa kịp có mặt lúc thẻ vừa tạo.</p>
                        @startMarker('component', 'Bdoc2534c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_13'))
@verbatim
&lt;input type="text" &#64;bind(name)&gt;
&lt;input type="checkbox" &#64;bind(agree)&gt;
&lt;select &#64;bind(tone)&gt;…&lt;/select&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__13_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_13'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__13_content])
@endMarker('component', 'Bdoc2534c1')
                        <p @class([$__VIEW_ID__ . '-Bdoc25344', 'dir-note', 'dir-note--warn'])>Chỉ nhận khoá phẳng. <code @class([$__VIEW_ID__ . '-Bdoc253441'])>&#64;bind(user.name)</code> đọc được giá trị ban đầu nhưng không ghi ngược và không nhận thay đổi, vì setter và subscription chỉ tồn tại ở tầng khoá gốc. Tách thành state phẳng như <code @class([$__VIEW_ID__ . '-Bdoc253442'])>userName</code>.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2535', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc25351', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc253511', 'dir-name'])>Boolean attribute</span><span @class([$__VIEW_ID__ . '-Bdoc253512', 'dir-kind'])>props</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc25352', 'dir-sig'])>&#64;disabled(biểu_thức)  &#64;checked(…)  &#64;selected(…)
&#64;required(…)  &#64;readonly(…)</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc25353'])>Gán thẳng vào <em @class([$__VIEW_ID__ . '-Bdoc253531'])>property</em> của element chứ không phải thuộc tính HTML — đúng cách trình duyệt đọc trạng thái các thẻ form.</p>
                        <table @class([$__VIEW_ID__ . '-Bdoc25354', 'dir-mini'])>
                            <tr @class([$__VIEW_ID__ . '-Bdoc253541'])><td @class([$__VIEW_ID__ . '-Bdoc2535411'])>&#64;disabled</td><td @class([$__VIEW_ID__ . '-Bdoc2535412'])>khoá nút hoặc ô nhập</td></tr>
                            <tr @class([$__VIEW_ID__ . '-Bdoc253542'])><td @class([$__VIEW_ID__ . '-Bdoc2535421'])>&#64;checked</td><td @class([$__VIEW_ID__ . '-Bdoc2535422'])>trạng thái checkbox và radio</td></tr>
                            <tr @class([$__VIEW_ID__ . '-Bdoc253543'])><td @class([$__VIEW_ID__ . '-Bdoc2535431'])>&#64;selected</td><td @class([$__VIEW_ID__ . '-Bdoc2535432'])>option đang được chọn</td></tr>
                            <tr @class([$__VIEW_ID__ . '-Bdoc253544'])><td @class([$__VIEW_ID__ . '-Bdoc2535441'])>&#64;required</td><td @class([$__VIEW_ID__ . '-Bdoc2535442'])>bắt buộc nhập</td></tr>
                            <tr @class([$__VIEW_ID__ . '-Bdoc253545'])><td @class([$__VIEW_ID__ . '-Bdoc2535451'])>&#64;readonly</td><td @class([$__VIEW_ID__ . '-Bdoc2535452'])>chỉ đọc, vẫn gửi kèm form</td></tr>
                        </table>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2536', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc25361', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc253611', 'dir-name'])>&#64;show <em @class([$__VIEW_ID__ . '-Bdoc2536111'])>· &#64;hide</em></span><span @class([$__VIEW_ID__ . '-Bdoc253612', 'dir-kind'])>props</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc25362', 'dir-sig'])>&#64;show(biểu_thức)
&#64;hide(biểu_thức)</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc25363'])>Bật tắt hiển thị mà giữ nguyên DOM và state bên trong — khác <code @class([$__VIEW_ID__ . '-Bdoc253631'])>&#64;if</code> vốn dựng lại nội dung mỗi lần bật.</p>
                        <p @class([$__VIEW_ID__ . '-Bdoc25364', 'dir-note', 'dir-note--warn'])><strong @class([$__VIEW_ID__ . '-Bdoc253641'])>Đang đụng directive cùng tên của Blade.</strong> Laravel hiểu <code @class([$__VIEW_ID__ . '-Bdoc253642'])>&#64;show</code> là "kết thúc section rồi yield ngay", nên nó nuốt directive của Saola và làm hỏng section stack của cả trang. Tạm thời dùng <code @class([$__VIEW_ID__ . '-Bdoc253643'])>&#64;class</code> với một class ẩn.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2537', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc25371', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc253711', 'dir-name'])>&#64;transition</span><span @class([$__VIEW_ID__ . '-Bdoc253712', 'dir-kind'])>Hoạt ảnh</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc25372', 'dir-sig'])>&#64;transition('tên')</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc25373'])>Gắn tiền tố class enter/leave cho phần tử khi nó vào hoặc rời một vùng reactive. Bạn định nghĩa <code @class([$__VIEW_ID__ . '-Bdoc253731'])>.tên-enter-active</code>, <code @class([$__VIEW_ID__ . '-Bdoc253732'])>.tên-enter-from</code>, <code @class([$__VIEW_ID__ . '-Bdoc253733'])>.tên-leave-active</code>, <code @class([$__VIEW_ID__ . '-Bdoc253734'])>.tên-leave-to</code> trong CSS.</p>
                        @startMarker('component', 'Bdoc2537c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_14'))
@verbatim
&lt;article &#64;transition('row')&gt;…&lt;/article&gt;

.row-enter-active, .row-leave-active { transition: opacity .18s ease; }
.row-enter-from,   .row-leave-to     { opacity: 0; }
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__14_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_14'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__14_content])
@endMarker('component', 'Bdoc2537c1')
                    </article>

                </div>
            </section>

            <section @class([$__VIEW_ID__ . '-Bdoc26', 'dir-group']) @attr(['id' => 'su-kien'])>
                <h2 @class([$__VIEW_ID__ . '-Bdoc261'])>Sự kiện</h2>
                <p @class([$__VIEW_ID__ . '-Bdoc262'])>Viết <code @class([$__VIEW_ID__ . '-Bdoc2621'])>&#64;tênSựKiện(...)</code> ngay trên thẻ. Mọi listener đăng ký kèm <code @class([$__VIEW_ID__ . '-Bdoc2622'])>AbortSignal</code> của view, nên khi view bị destroy chỉ cần một lệnh <code @class([$__VIEW_ID__ . '-Bdoc2623'])>abort()</code> là gỡ sạch — không có đường nào rò listener.</p>
                <div @class([$__VIEW_ID__ . '-Bdoc263', 'dir-list'])>

                    <article @class([$__VIEW_ID__ . '-Bdoc2631', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc26311', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc263111', 'dir-name'])>&#64;click <em @class([$__VIEW_ID__ . '-Bdoc2631111'])>và họ hàng</em></span><span @class([$__VIEW_ID__ . '-Bdoc263112', 'dir-kind'])>Gắn listener</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc26312', 'dir-sig'])>&#64;click(tênMethod())            <span @class([$__VIEW_ID__ . '-Bdoc263121', 'c'])>// gọi method trong &lt;script setup&gt;</span>
&#64;click(setCount(count + 1))    <span @class([$__VIEW_ID__ . '-Bdoc263122', 'c'])>// biểu thức trực tiếp</span>
&#64;change(update(event))         <span @class([$__VIEW_ID__ . '-Bdoc263123', 'c'])>// truyền object event</span></code></div>
                        <p @class([$__VIEW_ID__ . '-Bdoc26313'])>Có hai dạng. Dạng thứ nhất là tên method: compiler ghi lại tên rồi runtime tra trên view instance và bind <code @class([$__VIEW_ID__ . '-Bdoc263131'])>this</code> về view. Dạng thứ hai là biểu thức, được gói thành closure ngay tại chỗ.</p>
                        <p @class([$__VIEW_ID__ . '-Bdoc26314'])>Biến <code @class([$__VIEW_ID__ . '-Bdoc263141'])>event</code> có sẵn trong biểu thức, truyền vào method thì nhận nguyên object sự kiện.</p>
                        @startMarker('component', 'Bdoc2631c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_15'))
@verbatim
&lt;form &#64;submit(save(event))&gt;
    &lt;input &#64;bind(name) &#64;keydown(onKey(event))&gt;
    &lt;button type="submit"&gt;Lưu&lt;/button&gt;
&lt;/form&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__15_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_15'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__15_content])
@endMarker('component', 'Bdoc2631c1')
                        <table @class([$__VIEW_ID__ . '-Bdoc26315', 'dir-mini'])>
                            <tr @class([$__VIEW_ID__ . '-Bdoc263151'])><td @class([$__VIEW_ID__ . '-Bdoc2631511'])>chuột</td><td @class([$__VIEW_ID__ . '-Bdoc2631512'])>&#64;click · &#64;dblclick · &#64;contextmenu · &#64;mouseenter</td></tr>
                            <tr @class([$__VIEW_ID__ . '-Bdoc263152'])><td @class([$__VIEW_ID__ . '-Bdoc2631521'])>form</td><td @class([$__VIEW_ID__ . '-Bdoc2631522'])>&#64;submit · &#64;change · &#64;input · &#64;focus · &#64;blur</td></tr>
                            <tr @class([$__VIEW_ID__ . '-Bdoc263153'])><td @class([$__VIEW_ID__ . '-Bdoc2631531'])>bàn phím</td><td @class([$__VIEW_ID__ . '-Bdoc2631532'])>&#64;keydown và các sự kiện bàn phím chuẩn</td></tr>
                            <tr @class([$__VIEW_ID__ . '-Bdoc263154'])><td @class([$__VIEW_ID__ . '-Bdoc2631541'])>khác</td><td @class([$__VIEW_ID__ . '-Bdoc2631542'])>&#64;wheel · &#64;scroll · &#64;resize · &#64;load</td></tr>
                        </table>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2632', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc26321', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc263211', 'dir-name'])>Modifier</span><span @class([$__VIEW_ID__ . '-Bdoc263212', 'dir-kind'])>.prevent .stop .self .once</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc26322', 'dir-sig'])>&#64;click.prevent(save())
&#64;click.stop.once(remove(id))</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc26323'])>Nối sau tên sự kiện, ghép được nhiều cái. Runtime xử lý chúng trước khi gọi handler của bạn.</p>
                        <table @class([$__VIEW_ID__ . '-Bdoc26324', 'dir-mini'])>
                            <tr @class([$__VIEW_ID__ . '-Bdoc263241'])><td @class([$__VIEW_ID__ . '-Bdoc2632411'])>.prevent</td><td @class([$__VIEW_ID__ . '-Bdoc2632412'])>gọi <code @class([$__VIEW_ID__ . '-Bdoc26324121'])>event.preventDefault()</code></td></tr>
                            <tr @class([$__VIEW_ID__ . '-Bdoc263242'])><td @class([$__VIEW_ID__ . '-Bdoc2632421'])>.stop</td><td @class([$__VIEW_ID__ . '-Bdoc2632422'])>gọi <code @class([$__VIEW_ID__ . '-Bdoc26324221'])>event.stopPropagation()</code></td></tr>
                            <tr @class([$__VIEW_ID__ . '-Bdoc263243'])><td @class([$__VIEW_ID__ . '-Bdoc2632431'])>.self</td><td @class([$__VIEW_ID__ . '-Bdoc2632432'])>chỉ chạy khi <code @class([$__VIEW_ID__ . '-Bdoc26324321'])>event.target === event.currentTarget</code> — kiểm <em @class([$__VIEW_ID__ . '-Bdoc26324322'])>trước</em> <code @class([$__VIEW_ID__ . '-Bdoc26324323'])>.prevent</code> và <code @class([$__VIEW_ID__ . '-Bdoc26324324'])>.stop</code></td></tr>
                            <tr @class([$__VIEW_ID__ . '-Bdoc263244'])><td @class([$__VIEW_ID__ . '-Bdoc2632441'])>.once</td><td @class([$__VIEW_ID__ . '-Bdoc2632442'])>chạy đúng một lần rồi tự gỡ</td></tr>
                        </table>
                        <p @class([$__VIEW_ID__ . '-Bdoc26325', 'dir-note', 'dir-note--warn'])>Modifier hiện chỉ được emit đúng ở phía JavaScript; đầu ra Blade còn sinh thuộc tính thừa. Trang cần SSR sạch thì dùng <code @class([$__VIEW_ID__ . '-Bdoc263251'])>&#64;submit(save(event))</code> rồi tự gọi <code @class([$__VIEW_ID__ . '-Bdoc263252'])>event.preventDefault()</code> trong method.</p>
                    </article>

                </div>
            </section>

            <section @class([$__VIEW_ID__ . '-Bdoc27', 'dir-group']) @attr(['id' => 'layout'])>
                <h2 @class([$__VIEW_ID__ . '-Bdoc271'])>Layout &amp; component</h2>
                <p @class([$__VIEW_ID__ . '-Bdoc272'])>Layout không phải chuỗi HTML ghép lại: mỗi tầng là một view thật có ViewController riêng. Điều hướng giữa hai trang cùng layout chỉ thay nhánh khác biệt, phần layout trùng nhau được giữ nguyên cả DOM lẫn state.</p>
                <div @class([$__VIEW_ID__ . '-Bdoc273', 'dir-list'])>

                    <article @class([$__VIEW_ID__ . '-Bdoc2731', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc27311', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc273111', 'dir-name'])>&#64;extends</span><span @class([$__VIEW_ID__ . '-Bdoc273112', 'dir-kind'])>Layout</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc27312', 'dir-sig'])>&#64;extends(__layout__ + "public")</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc27313'])>Khai báo layout cha. Hàm <code @class([$__VIEW_ID__ . '-Bdoc273131'])>render()</code> của trang sẽ trả về <em @class([$__VIEW_ID__ . '-Bdoc273132'])>view cha</em> thay vì cây element của chính nó — ViewManager nhìn kiểu trả về để rẽ nhánh. Layout lồng layout được, chuỗi phân giải đệ quy.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2732', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc27321', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc273211', 'dir-name'])>&#64;block <em @class([$__VIEW_ID__ . '-Bdoc2732111'])>· &#64;useBlock · &#64;endblock</em></span><span @class([$__VIEW_ID__ . '-Bdoc273212', 'dir-kind'])>Layout</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc27322', 'dir-sig'])><span @class([$__VIEW_ID__ . '-Bdoc273221', 'c'])>// trang:</span>
&#64;block('content') … &#64;endblock

<span @class([$__VIEW_ID__ . '-Bdoc273222', 'c'])>// layout:</span>
&#64;useBlock('content')</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc27323'])>Trang <em @class([$__VIEW_ID__ . '-Bdoc273231'])>đăng ký</em> nội dung, layout <em @class([$__VIEW_ID__ . '-Bdoc273232'])>tạo chỗ trống</em>. BlockManager nối hai bên theo tên. Nhờ tách rời như vậy, nội dung block được dựng lười đúng vị trí outlet chứ không phải append mù vào cuối thẻ chứa.</p>
                        @startMarker('component', 'Bdoc2732c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_16'))
@verbatim
&lt;!-- layouts/docs.sao --&gt;
&#64;extends(__layout__ + "public")
&#64;block('content')
    &lt;aside class="docs-nav"&gt;…&lt;/aside&gt;
    &lt;main&gt;&#64;useBlock('doc')&lt;/main&gt;
&#64;endblock
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__16_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_16'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__16_content])
@endMarker('component', 'Bdoc2732c1')
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2733', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc27331', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc273311', 'dir-name'])>&#64;section <em @class([$__VIEW_ID__ . '-Bdoc2733111'])>· &#64;yield</em></span><span @class([$__VIEW_ID__ . '-Bdoc273312', 'dir-kind'])>Layout</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc27332', 'dir-sig'])>&#64;section('tên') … &#64;endsection
&#64;yield('tên', 'mặc định')</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc27333'])>Cơ chế section quen thuộc của Blade. Section có thể khai báo kiểu render dài hoặc có preloader riêng qua config sinh ra trong <code @class([$__VIEW_ID__ . '-Bdoc273331'])>__VIEW_CONFIG__</code>.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2734', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc27341', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc273411', 'dir-name'])>&#64;import</span><span @class([$__VIEW_ID__ . '-Bdoc273412', 'dir-kind'])>Component</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc27342', 'dir-sig'])>&#64;import(__template__ + 'counter')
&#64;import(__template__ + 'card' as card)
&#64;import({ a: 'path.a', b: __template__ + 'b' })</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc27343'])>Nạp view khác vào phạm vi hiện tại và đăng ký nó vào registry component của file. Sau khi import, có thể dùng như thẻ tuỳ chỉnh trong template thay vì gọi <code @class([$__VIEW_ID__ . '-Bdoc273431'])>&#64;include</code> mỗi lần.</p>
                        @startMarker('component', 'Bdoc2734c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_17'))
@verbatim
&#64;import(__template__ + 'demo.featurecard')

&lt;featurecard number="01" title="Reactive state"&gt;…&lt;/featurecard&gt;
                        @endverbatim
@exec($__env->stopSection())
@exec($__code_block__17_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_17'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__17_content])
@endMarker('component', 'Bdoc2734c1')
                        <p @class([$__VIEW_ID__ . '-Bdoc27344', 'dir-note'])>Thuộc tính không tiền tố là chuỗi tĩnh; thêm <code @class([$__VIEW_ID__ . '-Bdoc273441'])>:</code> trước tên để truyền biểu thức (<code @class([$__VIEW_ID__ . '-Bdoc273442'])>:value="count"</code>). Dạng <code @class([$__VIEW_ID__ . '-Bdoc273443'])>:</code> sinh ra đúng cùng một lời gọi như <code @class([$__VIEW_ID__ . '-Bdoc273444'])>&#64;include</code> với object props — kể cả stateKeys, nên prop vẫn được đẩy lại khi state đổi.</p>
                        <p @class([$__VIEW_ID__ . '-Bdoc27345'])>Alias đặt bằng <code @class([$__VIEW_ID__ . '-Bdoc273451'])>as</code> còn dùng được ở chỗ khác cần đường dẫn view: <code @class([$__VIEW_ID__ . '-Bdoc273452'])>&#64;extends</code> và <code @class([$__VIEW_ID__ . '-Bdoc273453'])>&#64;include</code>. Nó là <em @class([$__VIEW_ID__ . '-Bdoc273454'])>điểm neo lúc biên dịch</em>, không phải biến — compiler thay alias bằng chính biểu thức đường dẫn trước khi sinh code, nên Blade và JS không thể trỏ hai nơi khác nhau.</p>
                        @startMarker('component', 'Bdoc2734c2')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_18'))
@verbatim
&#64;import(__layout__ + 'docs' as layout)

&#64;extends(layout)          __BLADE_COMMENT_0__
                        @endverbatim
@exec($__env->stopSection())
@exec($__code_block__18_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_18'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__18_content])
@endMarker('component', 'Bdoc2734c2')
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2735', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc27351', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc273511', 'dir-name'])>&#64;include</span><span @class([$__VIEW_ID__ . '-Bdoc273512', 'dir-kind'])>Component</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc27352', 'dir-sig'])>&#64;include('đường.dẫn.view')
&#64;include('đường.dẫn.view', {prop: biểu_thức})</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc27353'])>Tạo một view con thật: có ViewController riêng, state riêng, vòng đời riêng. Đây là khác biệt lớn với partial — view con sống độc lập, được start, pause, resume và destroy theo chính nó.</p>
                        <p @class([$__VIEW_ID__ . '-Bdoc27354'])>Compiler đọc object props để suy ra view con phụ thuộc state nào của cha. Khi state đó đổi, runtime <em @class([$__VIEW_ID__ . '-Bdoc273541'])>đẩy props mới vào đúng instance đang sống</em> chứ không dựng lại view con — nên state nội bộ của nó, ví dụ một form đang mở dở, không bị thổi bay.</p>
                        @startMarker('component', 'Bdoc2735c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_19'))
@verbatim
&#64;foreach(ids as id)
    &#64;key(id)
    &#64;include('web.modules.roster.item', {uid: id, record: records[id] ?? null})
    __BLADE_COMMENT_1__
    &lt;rosteritem :uid="id" :record="records[id] ?? null" /&gt;
&#64;endforeach
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__19_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_19'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__19_content])
@endMarker('component', 'Bdoc2735c1')
                        <p @class([$__VIEW_ID__ . '-Bdoc27355', 'dir-note'])>Props phải sống được qua SSR nên chỉ nhận giá trị tuần tự hoá được — không truyền được callback. Kênh từ con lên cha là bus sự kiện <code @class([$__VIEW_ID__ . '-Bdoc273551'])>App.Event</code>.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2736', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc27361', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc273611', 'dir-name'])>&#64;children</span><span @class([$__VIEW_ID__ . '-Bdoc273612', 'dir-kind'])>Slot</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc27362', 'dir-sig'])>&#64;children</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc27363'])>Chỗ đặt nội dung mà bên gọi truyền vào giữa hai thẻ. Nội dung được render lười đúng tại vị trí khai báo và giữ nguyên context của bên gọi — biến trong đó vẫn là biến của view cha, không phải của component.</p>
                        @startMarker('component', 'Bdoc2736c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_20'))
@verbatim
&lt;!-- card.sao --&gt;
&lt;article class="card"&gt;&lt;h3&gt;{{ title }}&lt;/h3&gt;&#64;children&lt;/article&gt;

&lt;!-- bên gọi --&gt;
&lt;card title="Ví dụ"&gt;&lt;p&gt;Nội dung này đi qua slot&lt;/p&gt;&lt;/card&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__20_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_20'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__20_content])
@endMarker('component', 'Bdoc2736c1')
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2737', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc27371', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc273711', 'dir-name'])>&#64;exec</span><span @class([$__VIEW_ID__ . '-Bdoc273712', 'dir-kind'])>Tiện ích</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc27372', 'dir-sig'])>&#64;exec(biểu_thức)</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc27373'])>Chạy một biểu thức mà không in ra gì. Dùng để gán biến trung gian hoặc gọi hàm phụ ngay trong template.</p>
                    </article>

                </div>
            </section>

            <section @class([$__VIEW_ID__ . '-Bdoc28', 'dir-group']) @attr(['id' => 'tien-ich'])>
                <h2 @class([$__VIEW_ID__ . '-Bdoc281'])>Quyền, form &amp; tiện ích</h2>
                <p @class([$__VIEW_ID__ . '-Bdoc282'])>Nhóm này giữ nguyên ngữ nghĩa Blade quen thuộc, nên nếu bạn đã viết Laravel thì không phải học lại.</p>
                <div @class([$__VIEW_ID__ . '-Bdoc283', 'dir-list'])>

                    <article @class([$__VIEW_ID__ . '-Bdoc2831', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc28311', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc283111', 'dir-name'])>&#64;csrf <em @class([$__VIEW_ID__ . '-Bdoc2831111'])>· &#64;method</em></span><span @class([$__VIEW_ID__ . '-Bdoc283112', 'dir-kind'])>Form</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc28312', 'dir-sig'])>&#64;csrf
&#64;method('PUT')</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc28313'])>Chèn ô ẩn chứa token CSRF, và giả lập HTTP method cho form vốn chỉ gửi được GET với POST.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2832', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc28321', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc283211', 'dir-name'])>&#64;auth <em @class([$__VIEW_ID__ . '-Bdoc2832111'])>· &#64;guest</em></span><span @class([$__VIEW_ID__ . '-Bdoc283212', 'dir-kind'])>Quyền</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc28322', 'dir-sig'])>&#64;auth … &#64;endauth
&#64;guest … &#64;endguest</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc28323'])>Khối hiển thị theo trạng thái đăng nhập, xét ở phía server lúc render.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2833', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc28331', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc283311', 'dir-name'])>&#64;can <em @class([$__VIEW_ID__ . '-Bdoc2833111'])>· &#64;cannot</em></span><span @class([$__VIEW_ID__ . '-Bdoc283312', 'dir-kind'])>Quyền</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc28332', 'dir-sig'])>&#64;can('quyền', $model) … &#64;endcan</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc28333'])>Khối theo policy của Laravel. Cùng cách viết, cùng cách phân giải quyền.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2834', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc28341', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc283411', 'dir-name'])>&#64;error</span><span @class([$__VIEW_ID__ . '-Bdoc283412', 'dir-kind'])>Form</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc28342', 'dir-sig'])>&#64;error('trường') … &#64;enderror</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc28343'])>Hiện lỗi validation của một trường, với biến <code @class([$__VIEW_ID__ . '-Bdoc283431'])>$message</code> sẵn trong khối.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2835', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc28351', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc283511', 'dir-name'])>&#64;hasSection</span><span @class([$__VIEW_ID__ . '-Bdoc283512', 'dir-kind'])>Layout</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc28352', 'dir-sig'])>&#64;hasSection('tên') … &#64;endhassection</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc28353'])>Kiểm tra một section đã được trang con định nghĩa chưa, để layout quyết định có dựng khung bao quanh hay không.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bdoc2836', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc28361', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc283611', 'dir-name'])>&#64;verbatim</span><span @class([$__VIEW_ID__ . '-Bdoc283612', 'dir-kind'])>Tiện ích</span></div>
                        <div @class([$__VIEW_ID__ . '-Bdoc28362', 'dir-sig'])>&#64;verbatim … &#64;endverbatim</div>
                        <p @class([$__VIEW_ID__ . '-Bdoc28363'])>Xuất nguyên văn, không biên dịch gì bên trong. Cần khi bạn muốn in ra cú pháp của chính Saola hoặc của một template engine khác.</p>
                    </article>

                </div>
            </section>

            <section @class([$__VIEW_ID__ . '-Bdoc29', 'dir-group']) @attr(['id' => 'magic'])>
                <h2 @class([$__VIEW_ID__ . '-Bdoc291'])>Biến ma thuật</h2>
                <p @class([$__VIEW_ID__ . '-Bdoc292'])>Có sẵn trong mọi view, do render context cấp. Dùng chúng thay vì viết cứng đường dẫn để view còn chuyển được giữa các context.</p>
                <div @class([$__VIEW_ID__ . '-Bdoc293', 'dir-list'])>
                    <article @class([$__VIEW_ID__ . '-Bdoc2931', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc29311', 'dir-head'])><span @class([$__VIEW_ID__ . '-Bdoc293111', 'dir-name'])>Danh sách</span><span @class([$__VIEW_ID__ . '-Bdoc293112', 'dir-kind'])>Toàn cục trong view</span></div>
                        <table @class([$__VIEW_ID__ . '-Bdoc29312', 'dir-mini'])>
                            <tr @class([$__VIEW_ID__ . '-Bdoc293121'])><td @class([$__VIEW_ID__ . '-Bdoc2931211'])>__layout__</td><td @class([$__VIEW_ID__ . '-Bdoc2931212'])>đường dẫn gốc tới thư mục layout của context hiện tại</td></tr>
                            <tr @class([$__VIEW_ID__ . '-Bdoc293122'])><td @class([$__VIEW_ID__ . '-Bdoc2931221'])>__template__</td><td @class([$__VIEW_ID__ . '-Bdoc2931222'])>đường dẫn gốc tới component dùng chung</td></tr>
                            <tr @class([$__VIEW_ID__ . '-Bdoc293123'])><td @class([$__VIEW_ID__ . '-Bdoc2931231'])>__VIEW_PATH__</td><td @class([$__VIEW_ID__ . '-Bdoc2931232'])>đường dẫn dạng chấm của chính view này, ví dụ <code @class([$__VIEW_ID__ . '-Bdoc29312321'])>web.modules.docs.index</code></td></tr>
                            <tr @class([$__VIEW_ID__ . '-Bdoc293124'])><td @class([$__VIEW_ID__ . '-Bdoc2931241'])>__VIEW_ID__</td><td @class([$__VIEW_ID__ . '-Bdoc2931242'])>định danh instance, là tiền tố của mọi class và marker dùng để hydrate</td></tr>
                            <tr @class([$__VIEW_ID__ . '-Bdoc293125'])><td @class([$__VIEW_ID__ . '-Bdoc2931251'])>__context__</td><td @class([$__VIEW_ID__ . '-Bdoc2931252'])>context đang phục vụ request: web, admin, api hay mobile</td></tr>
                            <tr @class([$__VIEW_ID__ . '-Bdoc293126'])><td @class([$__VIEW_ID__ . '-Bdoc2931261'])>__base__ · __page__<br @class([$__VIEW_ID__ . '-Bdoc29312611'])>__component__ · __partial__</td><td @class([$__VIEW_ID__ . '-Bdoc2931262'])>đường dẫn gốc theo từng loại view</td></tr>
                            <tr @class([$__VIEW_ID__ . '-Bdoc293127'])><td @class([$__VIEW_ID__ . '-Bdoc2931271'])>__system__</td><td @class([$__VIEW_ID__ . '-Bdoc2931272'])>khối system data do render context truyền xuống</td></tr>
                        </table>
                    </article>
                </div>
            </section>
        </div>

        <a @class([$__VIEW_ID__ . '-Bdoc3', 'doc-next']) @attr(['href' => '/docs/reactivity'])>
            <div @class([$__VIEW_ID__ . '-Bdoc31'])><span @class([$__VIEW_ID__ . '-Bdoc311'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-Bdoc312'])>State &amp; reactivity</strong></div>
            <span @class([$__VIEW_ID__ . '-Bdoc32', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
