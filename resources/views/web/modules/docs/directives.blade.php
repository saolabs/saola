@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-ff96f7a7', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-15b892a7'])>
                <p @class([$__VIEW_ID__ . '-ab74559e', 'kicker'])><span @class([$__VIEW_ID__ . '-943e8228'])>04</span> THAM CHIẾU</p>
                <h1 @class([$__VIEW_ID__ . '-9abe25a3'])>Toàn bộ directive.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-f750a15d', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-2a968179'])>Mỗi directive dưới đây có cú pháp, giải thích nó thật sự làm gì, một ví dụ chạy được và ghi chú khi có cạm bẫy. Trừ khi ghi khác, directive có mặt ở cả hai đầu ra: Blade cho SSR và JavaScript cho runtime.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-e5195f55', 'doc-body'])>
            <nav @class([$__VIEW_ID__ . '-a2bed458', 'dir-toc']) @attr(['aria-label' => 'Nhóm directive'])>
                <a @class([$__VIEW_ID__ . '-3d2697d4']) @attr(['href' => '#khai-bao', 'data-nav' => 'disabled'])>Khai báo</a>
                <a @class([$__VIEW_ID__ . '-68b7f49c']) @attr(['href' => '#xuat-gia-tri', 'data-nav' => 'disabled'])>Xuất giá trị</a>
                <a @class([$__VIEW_ID__ . '-93807d96']) @attr(['href' => '#dieu-khien', 'data-nav' => 'disabled'])>Điều khiển luồng</a>
                <a @class([$__VIEW_ID__ . '-fd371e97']) @attr(['href' => '#thuoc-tinh', 'data-nav' => 'disabled'])>Thuộc tính &amp; binding</a>
                <a @class([$__VIEW_ID__ . '-cadf2c04']) @attr(['href' => '#su-kien', 'data-nav' => 'disabled'])>Sự kiện</a>
                <a @class([$__VIEW_ID__ . '-65325fb5']) @attr(['href' => '#layout', 'data-nav' => 'disabled'])>Layout &amp; component</a>
                <a @class([$__VIEW_ID__ . '-2a74a48b']) @attr(['href' => '#tien-ich', 'data-nav' => 'disabled'])>Quyền, form &amp; tiện ích</a>
                <a @class([$__VIEW_ID__ . '-4d55683c']) @attr(['href' => '#magic', 'data-nav' => 'disabled'])>Biến ma thuật</a>
            </nav>

            <section @class([$__VIEW_ID__ . '-7b363c80', 'dir-group']) @attr(['id' => 'khai-bao'])>
                <h2 @class([$__VIEW_ID__ . '-2dbc958a'])>Khai báo</h2>
                <p @class([$__VIEW_ID__ . '-9823b6be'])>Nằm ở đầu file, ngoài <code @class([$__VIEW_ID__ . '-4ed78b66'])>&lt;template&gt;</code>, và giữ nguyên thứ tự bạn viết. Đây là nơi quyết định biến nào reactive, biến nào không.</p>

                <div @class([$__VIEW_ID__ . '-febe6d23', 'dir-list'])>

                    <article @class([$__VIEW_ID__ . '-c0504995', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-9a5a37f1', 'dir-head'])><span @class([$__VIEW_ID__ . '-0ce5059c', 'dir-name'])>&#64;states</span><span @class([$__VIEW_ID__ . '-718aaef8', 'dir-kind'])>Reactive</span></div>
                        <div @class([$__VIEW_ID__ . '-c2832320', 'dir-sig'])>&#64;states({ key: giá_trị, ... })</div>
                        <p @class([$__VIEW_ID__ . '-c88c8002'])>Khai báo một khối state reactive. Mỗi khoá sinh ra ba thứ: biến đọc được trong template và trong <code @class([$__VIEW_ID__ . '-2249e151'])>&lt;script setup&gt;</code>, một setter <code @class([$__VIEW_ID__ . '-b67efe19'])>setTênKhoá()</code>, và một slot trong StateManager để các vùng marker đăng ký phụ thuộc.</p>
                        <p @class([$__VIEW_ID__ . '-5bb007b4'])>Giá trị bạn viết ở đây là giá trị khởi tạo cho <em @class([$__VIEW_ID__ . '-398e6b69'])>cả</em> lần render server lẫn lần hydrate — nhờ vậy HTML server trả về và cây element client dựng ra khớp nhau.</p>
                        <div @class([$__VIEW_ID__ . '-96994fd4', 'dir-ex'])><pre @class([$__VIEW_ID__ . '-c10b144d'])><code @class([$__VIEW_ID__ . '-c7b6782b'])><span @class([$__VIEW_ID__ . '-20d86a40', 'code-line'])>&#64;states({ count: 0, name: 'Saola', items: [] })</span><span @class([$__VIEW_ID__ . '-ac823719', 'code-line'])></span><span @class([$__VIEW_ID__ . '-53e01d76', 'code-line'])>&lt;button &#64;click(setCount(count + 1))&gt;<span @class([$__VIEW_ID__ . '-3fefed06', 'mustache-token'])>count</span>&lt;/button&gt;</span></code></pre></div>
                        <p @class([$__VIEW_ID__ . '-def1bf1d', 'dir-note'])>Tên setter là <code @class([$__VIEW_ID__ . '-7746856b'])>set</code> + tên khoá viết hoa chữ đầu: <code @class([$__VIEW_ID__ . '-b2ced8d0'])>count</code> → <code @class([$__VIEW_ID__ . '-f6057b99'])>setCount</code>, <code @class([$__VIEW_ID__ . '-9c739405'])>isOpen</code> → <code @class([$__VIEW_ID__ . '-0fbc0cae'])>setIsOpen</code>. Gọi setter với cùng reference vẫn được nhận nếu nội dung tầng một đã đổi, nên <code @class([$__VIEW_ID__ . '-6d1d1e8a'])>list.splice(i,1); setList(list)</code> hoạt động.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-3d787248', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-5e9c59e0', 'dir-head'])><span @class([$__VIEW_ID__ . '-db0335eb', 'dir-name'])>&#64;state</span><span @class([$__VIEW_ID__ . '-f8e529e7', 'dir-kind'])>Reactive</span></div>
                        <div @class([$__VIEW_ID__ . '-de7a92e5', 'dir-sig'])>&#64;state(tên = giá_trị)
&#64;state(a = 1, b = 2)</div>
                        <p @class([$__VIEW_ID__ . '-173b5e61'])>Giống <code @class([$__VIEW_ID__ . '-18c37f0a'])>&#64;states</code> nhưng viết theo kiểu gán từng biến. Dùng khi chỉ có một hai state và khối object trông rườm rà.</p>
                        <div @class([$__VIEW_ID__ . '-2ae45ff6', 'dir-ex'])><pre @class([$__VIEW_ID__ . '-0eef282a'])><code @class([$__VIEW_ID__ . '-d478c883'])><span @class([$__VIEW_ID__ . '-8c2a7cd0', 'code-line'])>&#64;state(editMode = false)</span><span @class([$__VIEW_ID__ . '-ff2a33ed', 'code-line'])>&#64;state(page = 1, perPage = 20)</span></code></pre></div>
                    </article>

                    <article @class([$__VIEW_ID__ . '-fd7c262c', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-54484be9', 'dir-head'])><span @class([$__VIEW_ID__ . '-22ec2bdb', 'dir-name'])>&#64;props</span><span @class([$__VIEW_ID__ . '-f1eea502', 'dir-kind'])>Đầu vào component</span></div>
                        <div @class([$__VIEW_ID__ . '-1616bb46', 'dir-sig'])>&#64;props({ tên: mặc_định, ... })
&#64;props(tên, khác = 'mặc định')</div>
                        <p @class([$__VIEW_ID__ . '-86231383'])>Khai báo dữ liệu view này nhận từ bên gọi. Prop cũng là slot reactive: khi view cha đổi state mà biểu thức prop phụ thuộc vào, runtime đẩy giá trị mới vào <em @class([$__VIEW_ID__ . '-d6d25cf0'])>đúng instance con đang sống</em> chứ không dựng lại view con.</p>
                        <p @class([$__VIEW_ID__ . '-c5047964'])>Giá trị trong ngoặc là mặc định, dùng khi bên gọi không truyền khoá đó.</p>
                        <div @class([$__VIEW_ID__ . '-d5d3cae1', 'dir-ex'])><pre @class([$__VIEW_ID__ . '-115a4bbc'])><code @class([$__VIEW_ID__ . '-0fcd79b4'])><span @class([$__VIEW_ID__ . '-80706d2c', 'code-line', 'c'])>&lt;!-- statcard.sao --&gt;</span><span @class([$__VIEW_ID__ . '-3da21273', 'code-line'])>&#64;props({ label: 'Label', value: '0', tone: 'sky' })</span><span @class([$__VIEW_ID__ . '-caa7737e', 'code-line'])></span><span @class([$__VIEW_ID__ . '-5d6a806b', 'code-line', 'c'])>&lt;!-- bên gọi --&gt;</span><span @class([$__VIEW_ID__ . '-4a5835db', 'code-line'])>&#64;include('web.modules.demo.statcard', ['label' =&gt; 'Lượt bấm', 'value' =&gt; count])</span></code></pre></div>
                        <p @class([$__VIEW_ID__ . '-28c43291', 'dir-note'])>Mảng props ở <code @class([$__VIEW_ID__ . '-05effbaa'])>&#64;include</code> viết theo cú pháp mảng PHP (<code @class([$__VIEW_ID__ . '-eae67c17'])>'khoá' =&gt; giá_trị</code>) ngay cả trong template modern syntax.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-83d889cb', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-c3ef1970', 'dir-head'])><span @class([$__VIEW_ID__ . '-dc9b4e8e', 'dir-name'])>&#64;const</span><span @class([$__VIEW_ID__ . '-37c14877', 'dir-kind'])>Bất biến</span></div>
                        <div @class([$__VIEW_ID__ . '-307303df', 'dir-sig'])>&#64;const(TÊN = giá_trị)
&#64;const([x, setX] = useState(0))</div>
                        <p @class([$__VIEW_ID__ . '-8fc547ed'])>Hằng số cho view. Dạng thứ hai là destructuring kiểu React: tạo một cặp state và setter mà không cần khai báo trong <code @class([$__VIEW_ID__ . '-4e15b89b'])>&#64;states</code>.</p>
                        <div @class([$__VIEW_ID__ . '-16be4987', 'dir-ex'])><pre @class([$__VIEW_ID__ . '-fb2557c5'])><code @class([$__VIEW_ID__ . '-af782a8d'])><span @class([$__VIEW_ID__ . '-6170d1a0', 'code-line'])>&#64;const(API = '/api/api/roster')</span><span @class([$__VIEW_ID__ . '-0ace4141', 'code-line'])>&#64;const([message, setMessage] = useState('Xin chào'))</span></code></pre></div>
                    </article>

                    <article @class([$__VIEW_ID__ . '-b1107cc0', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-85b259a0', 'dir-head'])><span @class([$__VIEW_ID__ . '-56cf7406', 'dir-name'])>&#64;let</span><span @class([$__VIEW_ID__ . '-73742b8d', 'dir-kind'])>Không reactive</span></div>
                        <div @class([$__VIEW_ID__ . '-bcda96bd', 'dir-sig'])>&#64;let(tên = biểu_thức)</div>
                        <p @class([$__VIEW_ID__ . '-73714aea'])>Biến cục bộ có thể gán lại nhưng <strong @class([$__VIEW_ID__ . '-59a38aa4'])>không</strong> reactive: đổi nó không làm vùng nào render lại. Dùng cho giá trị dẫn xuất tính một lần lúc dựng view.</p>
                        <div @class([$__VIEW_ID__ . '-af0e2725', 'dir-ex'])><pre @class([$__VIEW_ID__ . '-110912f4'])><code @class([$__VIEW_ID__ . '-69f63eb9'])><span @class([$__VIEW_ID__ . '-4dc0b107', 'code-line'])>&#64;let(total = price * qty)</span><span @class([$__VIEW_ID__ . '-057b09f5', 'code-line'])>&#64;let(greeting = `Xin chào ${name}`)</span></code></pre></div>
                        <p @class([$__VIEW_ID__ . '-f45025b2', 'dir-note', 'dir-note--warn'])>Nếu bạn muốn giá trị tự cập nhật theo state thì đừng dùng <code @class([$__VIEW_ID__ . '-6f9da4c6'])>&#64;let</code> — viết thẳng biểu thức trong template, compiler sẽ tự suy ra vùng đó phụ thuộc state nào.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-e795b51e', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-3250a955', 'dir-head'])><span @class([$__VIEW_ID__ . '-4b03eaf5', 'dir-name'])>&#64;vars</span><span @class([$__VIEW_ID__ . '-6eaf45ec', 'dir-kind'])>Dữ liệu server</span></div>
                        <div @class([$__VIEW_ID__ . '-792f417a', 'dir-sig'])>&#64;vars(users, posts)
&#64;vars(users = [])</div>
                        <p @class([$__VIEW_ID__ . '-d7811a8d'])>Khai báo biến do controller truyền xuống. Không reactive — nó là dữ liệu của lần render này, không phải state người dùng thay đổi được.</p>
                        <div @class([$__VIEW_ID__ . '-3283c735', 'dir-ex'])><pre @class([$__VIEW_ID__ . '-c4ab92e7'])><code @class([$__VIEW_ID__ . '-47dadeae'])><span @class([$__VIEW_ID__ . '-c3051487', 'code-line', 'c'])>// controller: return $this-&gt;response(['results' =&gt; $rows]);</span><span @class([$__VIEW_ID__ . '-a86b2ef8', 'code-line'])>&#64;vars(results = [])</span><span @class([$__VIEW_ID__ . '-20d60465', 'code-line'])></span><span @class([$__VIEW_ID__ . '-e50aec1a', 'code-line'])>&#64;foreach(results as row) … &#64;endforeach</span></code></pre></div>
                    </article>

                    <article @class([$__VIEW_ID__ . '-5d35f307', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-d02155b3', 'dir-head'])><span @class([$__VIEW_ID__ . '-81892e49', 'dir-name'])>&#64;import</span><span @class([$__VIEW_ID__ . '-40a432bc', 'dir-kind'])>Component</span></div>
                        <div @class([$__VIEW_ID__ . '-4350ea8c', 'dir-sig'])>&#64;import(__template__ + 'counter')
&#64;import(__template__ + 'card' as card)
&#64;import({ a: 'path.a', b: __template__ + 'b' })</div>
                        <p @class([$__VIEW_ID__ . '-b07e8773'])>Nạp view khác vào phạm vi hiện tại và đăng ký nó vào registry component của file. Sau khi import, có thể dùng như thẻ tuỳ chỉnh trong template thay vì gọi <code @class([$__VIEW_ID__ . '-b370a49b'])>&#64;include</code> mỗi lần.</p>
                        <div @class([$__VIEW_ID__ . '-2a45159a', 'dir-ex'])><pre @class([$__VIEW_ID__ . '-b66cbfc4'])><code @class([$__VIEW_ID__ . '-ea641abd'])><span @class([$__VIEW_ID__ . '-a35ce5bc', 'code-line'])>&#64;import(__template__ + 'demo.featurecard')</span><span @class([$__VIEW_ID__ . '-90b6f58f', 'code-line'])></span><span @class([$__VIEW_ID__ . '-50bfe3bc', 'code-line'])>&lt;featurecard number="01" title="Reactive state"&gt;…&lt;/featurecard&gt;</span></code></pre></div>
                        <p @class([$__VIEW_ID__ . '-8b9ab279', 'dir-note'])>Thuộc tính của thẻ tuỳ chỉnh chỉ nhận chuỗi tĩnh. Cần truyền biểu thức thì dùng <code @class([$__VIEW_ID__ . '-7c194122'])>&#64;include</code> với mảng props.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-c34105bf', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-b2245115', 'dir-head'])><span @class([$__VIEW_ID__ . '-a6d77433', 'dir-name'])>&#64;await</span><span @class([$__VIEW_ID__ . '-f758db86', 'dir-kind'])>Async</span></div>
                        <div @class([$__VIEW_ID__ . '-bf57529e', 'dir-sig'])>&#64;await</div>
                        <p @class([$__VIEW_ID__ . '-702f4b51'])>Đánh dấu view là bất đồng bộ. Compiler bật cờ <code @class([$__VIEW_ID__ . '-7ec1a6da'])>hasAwaitData</code> trong config, runtime nhờ đó biết view cần chờ dữ liệu trước khi commit state, và có thể render khối preload trong lúc chờ.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-4865f51d', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-108b4a57', 'dir-head'])><span @class([$__VIEW_ID__ . '-3dbcf56e', 'dir-name'])>&#64;computed</span><span @class([$__VIEW_ID__ . '-b5847f54', 'dir-kind'])>Dẫn xuất</span></div>
                        <div @class([$__VIEW_ID__ . '-4d9835d2', 'dir-sig'])>&#64;computed(tên = biểu_thức)</div>
                        <p @class([$__VIEW_ID__ . '-556db163'])>State dẫn xuất có memo hoá. Chỉ tính lại khi một trong các state phụ thuộc đổi, và tính <em @class([$__VIEW_ID__ . '-3a5bcfe8'])>lười</em> — đánh dấu bẩn lúc dep đổi, tính thật lúc có người đọc. Dep đổi năm lần trong một batch thì chỉ tính một lần.</p>
                        <div @class([$__VIEW_ID__ . '-b4a1206d', 'dir-ex'])><pre @class([$__VIEW_ID__ . '-8f3f40b2'])><code @class([$__VIEW_ID__ . '-aa750c03'])><span @class([$__VIEW_ID__ . '-3e53f80e', 'code-line'])>&#64;states({ users: [] })</span><span @class([$__VIEW_ID__ . '-a943a895', 'code-line'])>&#64;computed(activeCount = users.filter(u =&gt; u.active).length)</span></code></pre></div>
                        <p @class([$__VIEW_ID__ . '-537cb1cb', 'dir-note', 'dir-note--warn'])><strong @class([$__VIEW_ID__ . '-07c44b25'])>Hiện chỉ chạy phía client.</strong> Directive này không được emit ở đầu ra Blade nên biến bị undefined khi render server. Trang cần SSR thì viết thẳng biểu thức trong template.</p>
                    </article>

                </div>
            </section>

            <section @class([$__VIEW_ID__ . '-7ca20070', 'dir-group']) @attr(['id' => 'xuat-gia-tri'])>
                <h2 @class([$__VIEW_ID__ . '-2dc7e3c6'])>Xuất giá trị</h2>
                <p @class([$__VIEW_ID__ . '-92f71855'])>Mỗi chỗ nội suy được bọc trong một cặp marker riêng, nên đổi state chỉ thay đúng đoạn text đó chứ không render lại cả thẻ cha.</p>
                <div @class([$__VIEW_ID__ . '-d2a00c7c', 'dir-list'])>

                    <article @class([$__VIEW_ID__ . '-0e64342c', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-f7886ed8', 'dir-head'])><span @class([$__VIEW_ID__ . '-c81125df', 'dir-name'])>&#123;&#123; … &#125;&#125;</span><span @class([$__VIEW_ID__ . '-29d9e968', 'dir-kind'])>Escape</span></div>
                        <div @class([$__VIEW_ID__ . '-48fbf3a0', 'dir-sig'])>&#123;&#123; biểu_thức &#125;&#125;</div>
                        <p @class([$__VIEW_ID__ . '-75aba0b6'])>In giá trị dưới dạng text an toàn. Nội dung được đặt bằng text node nên không có đường nào để chuỗi biến thành HTML.</p>
                        <div @class([$__VIEW_ID__ . '-6a915306', 'dir-ex'])><pre @class([$__VIEW_ID__ . '-dbab82de'])><code @class([$__VIEW_ID__ . '-93699c78'])><span @class([$__VIEW_ID__ . '-e63087bb', 'code-line'])>&lt;h1&gt;<span @class([$__VIEW_ID__ . '-9e8905c5', 'mustache-token'])>user['name']</span>&lt;/h1&gt;</span><span @class([$__VIEW_ID__ . '-59e46756', 'code-line'])>&lt;span&gt;<span @class([$__VIEW_ID__ . '-71cb58e0', 'mustache-token'])>price * qty</span>&lt;/span&gt;</span></code></pre></div>
                        <p @class([$__VIEW_ID__ . '-6918997d', 'dir-note'])>Biểu thức được phép, không chỉ tên biến. Compiler đọc biểu thức để suy ra danh sách state mà vùng này phụ thuộc.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-939929f2', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-c092affd', 'dir-head'])><span @class([$__VIEW_ID__ . '-47cfde79', 'dir-name'])>&#123;!! … !!&#125;</span><span @class([$__VIEW_ID__ . '-031a0b4e', 'dir-kind'])>Raw HTML</span></div>
                        <div @class([$__VIEW_ID__ . '-e396f3cc', 'dir-sig'])>&#123;!! biểu_thức !!&#125;</div>
                        <p @class([$__VIEW_ID__ . '-f2140a6f'])>In nguyên HTML, không escape. Chỉ dùng cho nội dung bạn tự sinh ra hoặc đã làm sạch — đây là đường duy nhất để chuỗi từ dữ liệu trở thành thẻ thật.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-5696d351', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-bd24c0a5', 'dir-head'])><span @class([$__VIEW_ID__ . '-9618f0f5', 'dir-name'])>&#123;&#123;-- … --&#125;&#125;</span><span @class([$__VIEW_ID__ . '-607160dd', 'dir-kind'])>Ghi chú</span></div>
                        <div @class([$__VIEW_ID__ . '-bbf3a125', 'dir-sig'])>&#123;&#123;-- ghi chú --&#125;&#125;</div>
                        <p @class([$__VIEW_ID__ . '-3c1bc63d'])>Ghi chú của template. Bị loại hoàn toàn khỏi cả hai đầu ra, khác với <code @class([$__VIEW_ID__ . '-5cafcb14'])>&lt;!-- --&gt;</code> vốn đi thẳng vào HTML.</p>
                    </article>

                </div>
            </section>

            <section @class([$__VIEW_ID__ . '-81538925', 'dir-group']) @attr(['id' => 'dieu-khien'])>
                <h2 @class([$__VIEW_ID__ . '-0276d452'])>Điều khiển luồng</h2>
                <p @class([$__VIEW_ID__ . '-82ba506a'])>Mỗi khối trở thành một <em @class([$__VIEW_ID__ . '-d8c4b8b3'])>vùng reactive</em>: một cặp marker trong DOM cộng danh sách state mà điều kiện phụ thuộc. State đổi thì chỉ nội dung giữa hai marker đó được dựng lại.</p>
                <div @class([$__VIEW_ID__ . '-83dc733d', 'dir-list'])>

                    <article @class([$__VIEW_ID__ . '-c5b32f9a', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-00342b7a', 'dir-head'])><span @class([$__VIEW_ID__ . '-000a3202', 'dir-name'])>&#64;if <em @class([$__VIEW_ID__ . '-f38ede75'])>· &#64;elseif · &#64;else · &#64;endif</em></span><span @class([$__VIEW_ID__ . '-f4fa844b', 'dir-kind'])>Vùng reactive</span></div>
                        <div @class([$__VIEW_ID__ . '-d2de34d1', 'dir-sig'])>&#64;if(điều_kiện)
    …
&#64;elseif(điều_kiện_khác)
    …
&#64;else
    …
&#64;endif</div>
                        <p @class([$__VIEW_ID__ . '-3791ac56'])>Compiler đọc biểu thức điều kiện, rút ra danh sách state trong đó và gắn vào vùng. Không có dependency tracking lúc chạy — phụ thuộc được tính sẵn lúc biên dịch.</p>
                        <div @class([$__VIEW_ID__ . '-fa052da7', 'dir-ex'])><pre @class([$__VIEW_ID__ . '-0574ae16'])><code @class([$__VIEW_ID__ . '-bd9a439c'])><span @class([$__VIEW_ID__ . '-cc6f33d0', 'code-line'])>&#64;if(status === 'ready')</span><span @class([$__VIEW_ID__ . '-5c1dfe7a', 'code-line'])>    &lt;p&gt;Sẵn sàng&lt;/p&gt;</span><span @class([$__VIEW_ID__ . '-5633f937', 'code-line'])>&#64;elseif(status === 'building')</span><span @class([$__VIEW_ID__ . '-ef54f40d', 'code-line'])>    &lt;p&gt;Đang biên dịch…&lt;/p&gt;</span><span @class([$__VIEW_ID__ . '-ef47bd36', 'code-line'])>&#64;else</span><span @class([$__VIEW_ID__ . '-c87be6f7', 'code-line'])>    &lt;p&gt;Có lỗi&lt;/p&gt;</span><span @class([$__VIEW_ID__ . '-7349d62e', 'code-line'])>&#64;endif</span></code></pre></div>
                        <p @class([$__VIEW_ID__ . '-cd1ac0f3', 'dir-note'])>Đặt <code @class([$__VIEW_ID__ . '-11942a7b'])>&#64;if</code> bên trong <code @class([$__VIEW_ID__ . '-006b6801'])>&#64;foreach</code> thì mỗi item có vùng marker riêng, nên đổi một item không đụng các item khác.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-b7dd5e32', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-2a1ea910', 'dir-head'])><span @class([$__VIEW_ID__ . '-71b22405', 'dir-name'])>&#64;foreach <em @class([$__VIEW_ID__ . '-29476e33'])>· &#64;endforeach</em></span><span @class([$__VIEW_ID__ . '-0a428bef', 'dir-kind'])>Vùng reactive</span></div>
                        <div @class([$__VIEW_ID__ . '-d37af779', 'dir-sig'])>&#64;foreach(danh_sách as item)
&#64;foreach(danh_sách as khoá =&gt; item)</div>
                        <p @class([$__VIEW_ID__ . '-5cc7bc46'])>Lặp có <em @class([$__VIEW_ID__ . '-962f95ea'])>reconciliation</em>: runtime giữ một cache slot cho mỗi item. Khi danh sách đổi, item nào còn nguyên thì giữ nguyên DOM và mọi subscription của nó; item rời danh sách thì element bị destroy hẳn chứ không bỏ rơi.</p>
                        <div @class([$__VIEW_ID__ . '-cf9009a8', 'dir-ex'])><pre @class([$__VIEW_ID__ . '-e23fe4a8'])><code @class([$__VIEW_ID__ . '-9666500c'])><span @class([$__VIEW_ID__ . '-093918d0', 'code-line'])>&#64;foreach(items as item)</span><span @class([$__VIEW_ID__ . '-5e5c69bd', 'code-line'])>    &#64;key(item['id'])</span><span @class([$__VIEW_ID__ . '-b6f21849', 'code-line'])>    &lt;li&gt;<span @class([$__VIEW_ID__ . '-b3c03dfe', 'mustache-token'])>item['label']</span>&lt;/li&gt;</span><span @class([$__VIEW_ID__ . '-5cb84256', 'code-line'])>&#64;endforeach</span></code></pre></div>
                        <p @class([$__VIEW_ID__ . '-30344ac5', 'dir-note', 'dir-note--warn'])>Slot chỉ được tái dùng khi khoá khớp <strong @class([$__VIEW_ID__ . '-5defb3b7'])>và</strong> reference của item không đổi — vì output biên dịch đóng gói thẳng object item vào closure. Refetch từ server trả object mới sẽ dựng lại hàng đó. Muốn giữ state của view con qua mỗi lần đồng bộ thì lặp trên danh sách id ổn định rồi truyền dữ liệu qua props.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-a15a7978', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-f98a5d91', 'dir-head'])><span @class([$__VIEW_ID__ . '-808472d6', 'dir-name'])>&#64;key</span><span @class([$__VIEW_ID__ . '-538309b3', 'dir-kind'])>Bổ trợ vòng lặp</span></div>
                        <div @class([$__VIEW_ID__ . '-ac8272ab', 'dir-sig'])>&#64;key(biểu_thức)</div>
                        <p @class([$__VIEW_ID__ . '-3e2ed5cd'])>Đặt ngay dòng đầu thân vòng lặp. Nó cho cache biết lấy gì làm định danh của item. Không có <code @class([$__VIEW_ID__ . '-c50100cd'])>&#64;key</code> thì runtime dùng chính reference object làm khoá, và hậu tố id của marker rơi về chỉ số vòng lặp — phải khớp với phía SSR thì hydrate mới không lệch.</p>
                        <p @class([$__VIEW_ID__ . '-0be8a8d9'])>Khoá còn giúp phân biệt các item trùng nhau trong danh sách nguyên thuỷ, ví dụ <code @class([$__VIEW_ID__ . '-6d80f9be'])>['a', 'b', 'a']</code>.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-50d33f67', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-e87bce70', 'dir-head'])><span @class([$__VIEW_ID__ . '-26f2978c', 'dir-name'])>&#64;forelse <em @class([$__VIEW_ID__ . '-04e9817f'])>· &#64;empty · &#64;endforelse</em></span><span @class([$__VIEW_ID__ . '-f80386ac', 'dir-kind'])>Vùng reactive</span></div>
                        <div @class([$__VIEW_ID__ . '-1b968a83', 'dir-sig'])>&#64;forelse(danh_sách as item)
    …
&#64;empty
    …
&#64;endforelse</div>
                        <p @class([$__VIEW_ID__ . '-6d51ee08'])>Như <code @class([$__VIEW_ID__ . '-be6f74c4'])>&#64;foreach</code> nhưng có sẵn nhánh cho danh sách rỗng, khỏi phải viết thêm một <code @class([$__VIEW_ID__ . '-1109e010'])>&#64;if</code> đếm phần tử.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-f6cd85ed', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-7daea718', 'dir-head'])><span @class([$__VIEW_ID__ . '-762dee9a', 'dir-name'])>&#64;for <em @class([$__VIEW_ID__ . '-a8bd2cf2'])>· &#64;while</em></span><span @class([$__VIEW_ID__ . '-10e62249', 'dir-kind'])>Vùng reactive</span></div>
                        <div @class([$__VIEW_ID__ . '-ef03fe27', 'dir-sig'])>&#64;for(i = 0; i &lt; n; i++) … &#64;endfor
&#64;while(điều_kiện) … &#64;endwhile</div>
                        <p @class([$__VIEW_ID__ . '-4d29a0f3'])>Vòng lặp đếm và vòng lặp điều kiện. <code @class([$__VIEW_ID__ . '-0ed930da'])>&#64;while</code> có trần lặp ở runtime để một điều kiện sai không treo trình duyệt.</p>
                        <div @class([$__VIEW_ID__ . '-2e59adf6', 'dir-ex'])><pre @class([$__VIEW_ID__ . '-04034e2b'])><code @class([$__VIEW_ID__ . '-c81b3e6d'])><span @class([$__VIEW_ID__ . '-efe7108c', 'code-line'])>&#64;for(i = 0; i &lt; count; i++)</span><span @class([$__VIEW_ID__ . '-a88b67da', 'code-line'])>    &lt;li&gt;Ping #<span @class([$__VIEW_ID__ . '-3c7af653', 'mustache-token'])>i + 1</span>&lt;/li&gt;</span><span @class([$__VIEW_ID__ . '-54ecbbb6', 'code-line'])>&#64;endfor</span></code></pre></div>
                    </article>

                    <article @class([$__VIEW_ID__ . '-9f5ec9e1', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-1180bc95', 'dir-head'])><span @class([$__VIEW_ID__ . '-0582875d', 'dir-name'])>&#64;switch <em @class([$__VIEW_ID__ . '-cf3ae1b4'])>· &#64;case · &#64;default · &#64;break</em></span><span @class([$__VIEW_ID__ . '-672a76e1', 'dir-kind'])>Vùng reactive</span></div>
                        <div @class([$__VIEW_ID__ . '-9070aab7', 'dir-sig'])>&#64;switch(biểu_thức)
    &#64;case('a')
        …
        &#64;break
    &#64;default
        …
&#64;endswitch</div>
                        <p @class([$__VIEW_ID__ . '-37be610c'])>Nhiều nhánh gói trong một vùng marker duy nhất. Nhớ <code @class([$__VIEW_ID__ . '-fb7473e4'])>&#64;break</code> ở cuối mỗi <code @class([$__VIEW_ID__ . '-3fe179df'])>&#64;case</code>, đúng ngữ nghĩa switch chứ không phải if-else.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-9a687aec', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-f3b9ac39', 'dir-head'])><span @class([$__VIEW_ID__ . '-d63767f6', 'dir-name'])>&#64;continue <em @class([$__VIEW_ID__ . '-2fecea57'])>· &#64;break</em></span><span @class([$__VIEW_ID__ . '-84db2453', 'dir-kind'])>Điều khiển</span></div>
                        <div @class([$__VIEW_ID__ . '-001f181d', 'dir-sig'])>&#64;continue
&#64;break
&#64;continue(điều_kiện)</div>
                        <p @class([$__VIEW_ID__ . '-3a6ee617'])>Bỏ qua vòng hiện tại hoặc thoát vòng lặp. Nhận điều kiện tuỳ chọn để khỏi bọc thêm một <code @class([$__VIEW_ID__ . '-6dde8a7d'])>&#64;if</code>.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-9f6c672a', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-5c78d224', 'dir-head'])><span @class([$__VIEW_ID__ . '-f53b3266', 'dir-name'])>&#64;ssr <em @class([$__VIEW_ID__ . '-1aa9453e'])>· &#64;endssr</em></span><span @class([$__VIEW_ID__ . '-9c4906c4', 'dir-kind'])>Chỉ server</span></div>
                        <div @class([$__VIEW_ID__ . '-9fab42ce', 'dir-sig'])>&#64;ssr … &#64;endssr</div>
                        <p @class([$__VIEW_ID__ . '-fc9c455f'])>Khối chỉ tồn tại ở đầu ra Blade. Compiler loại nó khỏi view JavaScript, nên nội dung bên trong xuất hiện trong HTML lần đầu rồi không bao giờ được runtime dựng lại. Hợp cho dữ liệu chỉ có ở server hoặc khối nặng không cần tương tác.</p>
                        <p @class([$__VIEW_ID__ . '-c41458ab', 'dir-note'])>Bí danh: <code @class([$__VIEW_ID__ . '-15added7'])>&#64;serverSide</code> / <code @class([$__VIEW_ID__ . '-16b48f86'])>&#64;endServerSide</code>, <code @class([$__VIEW_ID__ . '-46d57d28'])>&#64;useSSR</code> / <code @class([$__VIEW_ID__ . '-8284089f'])>&#64;enduseSSR</code>.</p>
                    </article>

                </div>
            </section>

            <section @class([$__VIEW_ID__ . '-559c6681', 'dir-group']) @attr(['id' => 'thuoc-tinh'])>
                <h2 @class([$__VIEW_ID__ . '-76543416'])>Thuộc tính &amp; binding</h2>
                <p @class([$__VIEW_ID__ . '-ef3b6fc2'])>Nhóm này viết <em @class([$__VIEW_ID__ . '-ccaceaaf'])>bên trong thẻ mở</em>. Runtime chia chúng thành bốn rổ khác nhau — <code @class([$__VIEW_ID__ . '-7cd2ceea'])>attrs</code>, <code @class([$__VIEW_ID__ . '-978bbd74'])>props</code>, <code @class([$__VIEW_ID__ . '-9886cb8f'])>classes</code>, <code @class([$__VIEW_ID__ . '-f51e41e7'])>styles</code> — vì đặt thuộc tính HTML và gán property của element không giống nhau.</p>
                <div @class([$__VIEW_ID__ . '-0ebccd3a', 'dir-list'])>

                    <article @class([$__VIEW_ID__ . '-11e4ca08', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-d6f1bf4e', 'dir-head'])><span @class([$__VIEW_ID__ . '-6918e402', 'dir-name'])>&#64;attr</span><span @class([$__VIEW_ID__ . '-11b50edb', 'dir-kind'])>attrs</span></div>
                        <div @class([$__VIEW_ID__ . '-0042349f', 'dir-sig'])>&#64;attr({ tên: giá_trị, ... })</div>
                        <p @class([$__VIEW_ID__ . '-81a4b397'])>Thuộc tính động. Giá trị <code @class([$__VIEW_ID__ . '-f406e75f'])>null</code>, <code @class([$__VIEW_ID__ . '-ec8e3496'])>undefined</code> hoặc <code @class([$__VIEW_ID__ . '-08a44caf'])>false</code> làm runtime <em @class([$__VIEW_ID__ . '-af04dabe'])>gỡ hẳn</em> thuộc tính khỏi thẻ chứ không đặt chuỗi rỗng.</p>
                        <div @class([$__VIEW_ID__ . '-a87b098d', 'dir-ex'])><pre @class([$__VIEW_ID__ . '-5f381251'])><code @class([$__VIEW_ID__ . '-4121ad86'])><span @class([$__VIEW_ID__ . '-aec9e679', 'code-line'])>&lt;a &#64;attr({ href: link, title: docTitle })&gt;…&lt;/a&gt;</span></code></pre></div>
                    </article>

                    <article @class([$__VIEW_ID__ . '-a09a68f7', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-48100381', 'dir-head'])><span @class([$__VIEW_ID__ . '-6fb6a0fb', 'dir-name'])>&#64;class</span><span @class([$__VIEW_ID__ . '-3201f933', 'dir-kind'])>classes</span></div>
                        <div @class([$__VIEW_ID__ . '-41a7d38c', 'dir-sig'])>&#64;class(['tĩnh', 'có-điều-kiện': biểu_thức])</div>
                        <p @class([$__VIEW_ID__ . '-a79501d8'])>Trộn class tĩnh với class có điều kiện. Runtime chỉ bật tắt đúng những class có điều kiện, không ghi đè cả thuộc tính <code @class([$__VIEW_ID__ . '-e8daf62c'])>class</code> — nên class do code khác thêm vào vẫn còn.</p>
                        <div @class([$__VIEW_ID__ . '-c736443d', 'dir-ex'])><pre @class([$__VIEW_ID__ . '-21e0bf02'])><code @class([$__VIEW_ID__ . '-d66ae629'])><span @class([$__VIEW_ID__ . '-f2940aa9', 'code-line'])>&lt;div &#64;class(['card', 'card--active': isActive, 'card--gone': record === null])&gt;</span></code></pre></div>
                        <p @class([$__VIEW_ID__ . '-ef3e4e2d', 'dir-note', 'dir-note--warn'])>Tránh dấu <code @class([$__VIEW_ID__ . '-7242f58f'])>&gt;</code> hoặc <code @class([$__VIEW_ID__ . '-ed3d93be'])>&lt;</code> trong biểu thức: bộ phân tích thẻ ở đầu ra Blade đóng thẻ sớm tại đó. Viết <code @class([$__VIEW_ID__ . '-72f3238b'])>count !== 0</code> thay cho <code @class([$__VIEW_ID__ . '-f4d60bfd'])>count &gt; 0</code>.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-56ab6a0e', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-bf4dbf94', 'dir-head'])><span @class([$__VIEW_ID__ . '-ac52260e', 'dir-name'])>&#64;style</span><span @class([$__VIEW_ID__ . '-3f551781', 'dir-kind'])>styles</span></div>
                        <div @class([$__VIEW_ID__ . '-3ec0282a', 'dir-sig'])>&#64;style({ 'thuộc-tính': giá_trị })</div>
                        <p @class([$__VIEW_ID__ . '-3c1b3faa'])>Inline style theo state, đặt qua <code @class([$__VIEW_ID__ . '-330caf3f'])>style.setProperty</code> nên chỉ những thuộc tính bạn liệt kê bị đụng tới.</p>
                        <p @class([$__VIEW_ID__ . '-eff0876b', 'dir-note', 'dir-note--warn'])><strong @class([$__VIEW_ID__ . '-326c1462'])>Dạng object của modern syntax hiện chưa ra đúng ở đầu ra JavaScript</strong> — nó rã thành các thuộc tính tĩnh rời rạc nên binding không chạy sau hydrate. Tạm thời dùng <code @class([$__VIEW_ID__ . '-8964adb2'])>&#64;class</code> với vài class dựng sẵn.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-a184a443', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-c952b1d2', 'dir-head'])><span @class([$__VIEW_ID__ . '-aebe6012', 'dir-name'])>&#64;bind <em @class([$__VIEW_ID__ . '-512be0a0'])>· &#64;val</em></span><span @class([$__VIEW_ID__ . '-dba2eaf7', 'dir-kind'])>Hai chiều</span></div>
                        <div @class([$__VIEW_ID__ . '-a9ddaf33', 'dir-sig'])>&#64;bind(tên_state)</div>
                        <p @class([$__VIEW_ID__ . '-2c52e7a4'])>Binding hai chiều. Runtime tự chọn cách đọc ghi theo loại input: <code @class([$__VIEW_ID__ . '-5dadcd5f'])>checked</code> cho checkbox, so khớp <code @class([$__VIEW_ID__ . '-824edd5a'])>value</code> cho radio, <code @class([$__VIEW_ID__ . '-74843df9'])>valueAsNumber</code> cho number và range, còn lại là <code @class([$__VIEW_ID__ . '-d33e2e13'])>value</code>. Với <code @class([$__VIEW_ID__ . '-3da27ea2'])>&lt;select&gt;</code>, việc gán giá trị được hoãn một microtask vì <code @class([$__VIEW_ID__ . '-19bfd15d'])>&lt;option&gt;</code> chưa kịp có mặt lúc thẻ vừa tạo.</p>
                        <div @class([$__VIEW_ID__ . '-e14b7c22', 'dir-ex'])><pre @class([$__VIEW_ID__ . '-dad59b15'])><code @class([$__VIEW_ID__ . '-964a4652'])><span @class([$__VIEW_ID__ . '-21d6f77e', 'code-line'])>&lt;input type="text" &#64;bind(name)&gt;</span><span @class([$__VIEW_ID__ . '-6cb1c001', 'code-line'])>&lt;input type="checkbox" &#64;bind(agree)&gt;</span><span @class([$__VIEW_ID__ . '-7506ed8c', 'code-line'])>&lt;select &#64;bind(tone)&gt;…&lt;/select&gt;</span></code></pre></div>
                        <p @class([$__VIEW_ID__ . '-0e302240', 'dir-note', 'dir-note--warn'])>Chỉ nhận khoá phẳng. <code @class([$__VIEW_ID__ . '-83162413'])>&#64;bind(user.name)</code> đọc được giá trị ban đầu nhưng không ghi ngược và không nhận thay đổi, vì setter và subscription chỉ tồn tại ở tầng khoá gốc. Tách thành state phẳng như <code @class([$__VIEW_ID__ . '-01a8fe18'])>userName</code>.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-cebad952', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-c1acb0dc', 'dir-head'])><span @class([$__VIEW_ID__ . '-16be6f0e', 'dir-name'])>Boolean attribute</span><span @class([$__VIEW_ID__ . '-31602339', 'dir-kind'])>props</span></div>
                        <div @class([$__VIEW_ID__ . '-30fd12e0', 'dir-sig'])>&#64;disabled(biểu_thức)  &#64;checked(…)  &#64;selected(…)
&#64;required(…)  &#64;readonly(…)</div>
                        <p @class([$__VIEW_ID__ . '-0ece8474'])>Gán thẳng vào <em @class([$__VIEW_ID__ . '-11172aee'])>property</em> của element chứ không phải thuộc tính HTML — đúng cách trình duyệt đọc trạng thái các thẻ form.</p>
                        <table @class([$__VIEW_ID__ . '-c26627ea', 'dir-mini'])>
                            <tr @class([$__VIEW_ID__ . '-1b28a6df'])><td @class([$__VIEW_ID__ . '-9c4712fb'])>&#64;disabled</td><td @class([$__VIEW_ID__ . '-f086657e'])>khoá nút hoặc ô nhập</td></tr>
                            <tr @class([$__VIEW_ID__ . '-9a797c17'])><td @class([$__VIEW_ID__ . '-a9c41c3b'])>&#64;checked</td><td @class([$__VIEW_ID__ . '-6456eb56'])>trạng thái checkbox và radio</td></tr>
                            <tr @class([$__VIEW_ID__ . '-15f2d6c1'])><td @class([$__VIEW_ID__ . '-946eb7dc'])>&#64;selected</td><td @class([$__VIEW_ID__ . '-4c5473d8'])>option đang được chọn</td></tr>
                            <tr @class([$__VIEW_ID__ . '-11628f8b'])><td @class([$__VIEW_ID__ . '-48bed7ca'])>&#64;required</td><td @class([$__VIEW_ID__ . '-8e410df2'])>bắt buộc nhập</td></tr>
                            <tr @class([$__VIEW_ID__ . '-3c8728fc'])><td @class([$__VIEW_ID__ . '-a33bfcdb'])>&#64;readonly</td><td @class([$__VIEW_ID__ . '-a8c17fc3'])>chỉ đọc, vẫn gửi kèm form</td></tr>
                        </table>
                    </article>

                    <article @class([$__VIEW_ID__ . '-e8461865', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-59d5c36f', 'dir-head'])><span @class([$__VIEW_ID__ . '-9ef0080d', 'dir-name'])>&#64;show <em @class([$__VIEW_ID__ . '-527d7d1f'])>· &#64;hide</em></span><span @class([$__VIEW_ID__ . '-a14cce3b', 'dir-kind'])>props</span></div>
                        <div @class([$__VIEW_ID__ . '-f9f2d192', 'dir-sig'])>&#64;show(biểu_thức)
&#64;hide(biểu_thức)</div>
                        <p @class([$__VIEW_ID__ . '-2d531ed1'])>Bật tắt hiển thị mà giữ nguyên DOM và state bên trong — khác <code @class([$__VIEW_ID__ . '-b2d30bc9'])>&#64;if</code> vốn dựng lại nội dung mỗi lần bật.</p>
                        <p @class([$__VIEW_ID__ . '-fed6eb81', 'dir-note', 'dir-note--warn'])><strong @class([$__VIEW_ID__ . '-f367194c'])>Đang đụng directive cùng tên của Blade.</strong> Laravel hiểu <code @class([$__VIEW_ID__ . '-46e483e9'])>&#64;show</code> là "kết thúc section rồi yield ngay", nên nó nuốt directive của Saola và làm hỏng section stack của cả trang. Tạm thời dùng <code @class([$__VIEW_ID__ . '-f438c24b'])>&#64;class</code> với một class ẩn.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-27242a28', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-600c7333', 'dir-head'])><span @class([$__VIEW_ID__ . '-ab1da05d', 'dir-name'])>&#64;transition</span><span @class([$__VIEW_ID__ . '-a8d582bd', 'dir-kind'])>Hoạt ảnh</span></div>
                        <div @class([$__VIEW_ID__ . '-5b7ebcf9', 'dir-sig'])>&#64;transition('tên')</div>
                        <p @class([$__VIEW_ID__ . '-524b1849'])>Gắn tiền tố class enter/leave cho phần tử khi nó vào hoặc rời một vùng reactive. Bạn định nghĩa <code @class([$__VIEW_ID__ . '-d1238590'])>.tên-enter-active</code>, <code @class([$__VIEW_ID__ . '-c1762f8c'])>.tên-enter-from</code>, <code @class([$__VIEW_ID__ . '-0228bd36'])>.tên-leave-active</code>, <code @class([$__VIEW_ID__ . '-f795ccf7'])>.tên-leave-to</code> trong CSS.</p>
                        <div @class([$__VIEW_ID__ . '-ffeb6722', 'dir-ex'])><pre @class([$__VIEW_ID__ . '-d989d515'])><code @class([$__VIEW_ID__ . '-d04fb5a2'])><span @class([$__VIEW_ID__ . '-681b45bc', 'code-line'])>&lt;article &#64;transition('row')&gt;…&lt;/article&gt;</span><span @class([$__VIEW_ID__ . '-2aabe9a4', 'code-line'])></span><span @class([$__VIEW_ID__ . '-1fbba688', 'code-line'])>.row-enter-active, .row-leave-active { transition: opacity .18s ease; }</span><span @class([$__VIEW_ID__ . '-64146625', 'code-line'])>.row-enter-from,   .row-leave-to     { opacity: 0; }</span></code></pre></div>
                    </article>

                </div>
            </section>

            <section @class([$__VIEW_ID__ . '-47d2e784', 'dir-group']) @attr(['id' => 'su-kien'])>
                <h2 @class([$__VIEW_ID__ . '-35b8eb33'])>Sự kiện</h2>
                <p @class([$__VIEW_ID__ . '-2186d734'])>Viết <code @class([$__VIEW_ID__ . '-e339df41'])>&#64;tênSựKiện(...)</code> ngay trên thẻ. Mọi listener đăng ký kèm <code @class([$__VIEW_ID__ . '-119907f7'])>AbortSignal</code> của view, nên khi view bị destroy chỉ cần một lệnh <code @class([$__VIEW_ID__ . '-5ea2bfc5'])>abort()</code> là gỡ sạch — không có đường nào rò listener.</p>
                <div @class([$__VIEW_ID__ . '-460b1be1', 'dir-list'])>

                    <article @class([$__VIEW_ID__ . '-dcbc315d', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-e14078fc', 'dir-head'])><span @class([$__VIEW_ID__ . '-8a43abd9', 'dir-name'])>&#64;click <em @class([$__VIEW_ID__ . '-7bffb7fc'])>và họ hàng</em></span><span @class([$__VIEW_ID__ . '-5a887408', 'dir-kind'])>Gắn listener</span></div>
                        <div @class([$__VIEW_ID__ . '-0c819773', 'dir-sig'])>&#64;click(tênMethod())            <span @class([$__VIEW_ID__ . '-607e89c7', 'c'])>// gọi method trong &lt;script setup&gt;</span>
&#64;click(setCount(count + 1))    <span @class([$__VIEW_ID__ . '-ac937be7', 'c'])>// biểu thức trực tiếp</span>
&#64;change(update(event))         <span @class([$__VIEW_ID__ . '-a707c2cb', 'c'])>// truyền object event</span></code></div>
                        <p @class([$__VIEW_ID__ . '-c15ac42c'])>Có hai dạng. Dạng thứ nhất là tên method: compiler ghi lại tên rồi runtime tra trên view instance và bind <code @class([$__VIEW_ID__ . '-9711a8d0'])>this</code> về view. Dạng thứ hai là biểu thức, được gói thành closure ngay tại chỗ.</p>
                        <p @class([$__VIEW_ID__ . '-a818ad5a'])>Biến <code @class([$__VIEW_ID__ . '-b6cee2c8'])>event</code> có sẵn trong biểu thức, truyền vào method thì nhận nguyên object sự kiện.</p>
                        <div @class([$__VIEW_ID__ . '-327bc505', 'dir-ex'])><pre @class([$__VIEW_ID__ . '-0968b5d3'])><code @class([$__VIEW_ID__ . '-01df1266'])><span @class([$__VIEW_ID__ . '-0bd1d031', 'code-line'])>&lt;form &#64;submit(save(event))&gt;</span><span @class([$__VIEW_ID__ . '-3e1a8190', 'code-line'])>    &lt;input &#64;bind(name) &#64;keydown(onKey(event))&gt;</span><span @class([$__VIEW_ID__ . '-cb6c216c', 'code-line'])>    &lt;button type="submit"&gt;Lưu&lt;/button&gt;</span><span @class([$__VIEW_ID__ . '-e8e96d0e', 'code-line'])>&lt;/form&gt;</span></code></pre></div>
                        <table @class([$__VIEW_ID__ . '-eb01d78d', 'dir-mini'])>
                            <tr @class([$__VIEW_ID__ . '-bc2122c7'])><td @class([$__VIEW_ID__ . '-db24c668'])>chuột</td><td @class([$__VIEW_ID__ . '-9a39cf85'])>&#64;click · &#64;dblclick · &#64;contextmenu · &#64;mouseenter</td></tr>
                            <tr @class([$__VIEW_ID__ . '-efdde8db'])><td @class([$__VIEW_ID__ . '-7f75f876'])>form</td><td @class([$__VIEW_ID__ . '-51326a7e'])>&#64;submit · &#64;change · &#64;input · &#64;focus · &#64;blur</td></tr>
                            <tr @class([$__VIEW_ID__ . '-174d292b'])><td @class([$__VIEW_ID__ . '-5d33a546'])>bàn phím</td><td @class([$__VIEW_ID__ . '-cf2a0e70'])>&#64;keydown và các sự kiện bàn phím chuẩn</td></tr>
                            <tr @class([$__VIEW_ID__ . '-538b2772'])><td @class([$__VIEW_ID__ . '-cc161d78'])>khác</td><td @class([$__VIEW_ID__ . '-0424ec92'])>&#64;wheel · &#64;scroll · &#64;resize · &#64;load</td></tr>
                        </table>
                    </article>

                    <article @class([$__VIEW_ID__ . '-7212a9b6', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-9b6216a0', 'dir-head'])><span @class([$__VIEW_ID__ . '-be11512f', 'dir-name'])>Modifier</span><span @class([$__VIEW_ID__ . '-b09ffaeb', 'dir-kind'])>.prevent .stop .self .once</span></div>
                        <div @class([$__VIEW_ID__ . '-4e7613c5', 'dir-sig'])>&#64;click.prevent(save())
&#64;click.stop.once(remove(id))</div>
                        <p @class([$__VIEW_ID__ . '-46ab002b'])>Nối sau tên sự kiện, ghép được nhiều cái. Runtime xử lý chúng trước khi gọi handler của bạn.</p>
                        <table @class([$__VIEW_ID__ . '-03265921', 'dir-mini'])>
                            <tr @class([$__VIEW_ID__ . '-11eac2ad'])><td @class([$__VIEW_ID__ . '-2f2a8616'])>.prevent</td><td @class([$__VIEW_ID__ . '-086a22e9'])>gọi <code @class([$__VIEW_ID__ . '-9adcda52'])>event.preventDefault()</code></td></tr>
                            <tr @class([$__VIEW_ID__ . '-9004de51'])><td @class([$__VIEW_ID__ . '-c7817b8b'])>.stop</td><td @class([$__VIEW_ID__ . '-745cd25a'])>gọi <code @class([$__VIEW_ID__ . '-1eff3467'])>event.stopPropagation()</code></td></tr>
                            <tr @class([$__VIEW_ID__ . '-4d3011ba'])><td @class([$__VIEW_ID__ . '-a285498e'])>.self</td><td @class([$__VIEW_ID__ . '-e51d2a77'])>chỉ chạy khi <code @class([$__VIEW_ID__ . '-275ad46b'])>event.target === event.currentTarget</code> — kiểm <em @class([$__VIEW_ID__ . '-12c3f479'])>trước</em> <code @class([$__VIEW_ID__ . '-61675e13'])>.prevent</code> và <code @class([$__VIEW_ID__ . '-2d0fbe21'])>.stop</code></td></tr>
                            <tr @class([$__VIEW_ID__ . '-e47edba6'])><td @class([$__VIEW_ID__ . '-b18fb418'])>.once</td><td @class([$__VIEW_ID__ . '-2b94dff8'])>chạy đúng một lần rồi tự gỡ</td></tr>
                        </table>
                        <p @class([$__VIEW_ID__ . '-89427023', 'dir-note', 'dir-note--warn'])>Modifier hiện chỉ được emit đúng ở phía JavaScript; đầu ra Blade còn sinh thuộc tính thừa. Trang cần SSR sạch thì dùng <code @class([$__VIEW_ID__ . '-39a5a9c4'])>&#64;submit(save(event))</code> rồi tự gọi <code @class([$__VIEW_ID__ . '-c26ac696'])>event.preventDefault()</code> trong method.</p>
                    </article>

                </div>
            </section>

            <section @class([$__VIEW_ID__ . '-ef03a83f', 'dir-group']) @attr(['id' => 'layout'])>
                <h2 @class([$__VIEW_ID__ . '-42e404db'])>Layout &amp; component</h2>
                <p @class([$__VIEW_ID__ . '-8d90aa45'])>Layout không phải chuỗi HTML ghép lại: mỗi tầng là một view thật có ViewController riêng. Điều hướng giữa hai trang cùng layout chỉ thay nhánh khác biệt, phần layout trùng nhau được giữ nguyên cả DOM lẫn state.</p>
                <div @class([$__VIEW_ID__ . '-ea5097a5', 'dir-list'])>

                    <article @class([$__VIEW_ID__ . '-36e5164f', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-ebce2b5b', 'dir-head'])><span @class([$__VIEW_ID__ . '-5f651445', 'dir-name'])>&#64;extends</span><span @class([$__VIEW_ID__ . '-c9b33a79', 'dir-kind'])>Layout</span></div>
                        <div @class([$__VIEW_ID__ . '-71d3ab38', 'dir-sig'])>&#64;extends(__layout__ + "public")</div>
                        <p @class([$__VIEW_ID__ . '-7ac0d2dc'])>Khai báo layout cha. Hàm <code @class([$__VIEW_ID__ . '-7ac734a9'])>render()</code> của trang sẽ trả về <em @class([$__VIEW_ID__ . '-15be5b84'])>view cha</em> thay vì cây element của chính nó — ViewManager nhìn kiểu trả về để rẽ nhánh. Layout lồng layout được, chuỗi phân giải đệ quy.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-e5f274d4', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-9d1a0400', 'dir-head'])><span @class([$__VIEW_ID__ . '-68e763f8', 'dir-name'])>&#64;block <em @class([$__VIEW_ID__ . '-9f7d307a'])>· &#64;useBlock · &#64;endblock</em></span><span @class([$__VIEW_ID__ . '-ab2e4ab2', 'dir-kind'])>Layout</span></div>
                        <div @class([$__VIEW_ID__ . '-3da11e9e', 'dir-sig'])><span @class([$__VIEW_ID__ . '-21b1386b', 'c'])>// trang:</span>
&#64;block('content') … &#64;endblock

<span @class([$__VIEW_ID__ . '-2439b41d', 'c'])>// layout:</span>
&#64;useBlock('content')</div>
                        <p @class([$__VIEW_ID__ . '-560b5c59'])>Trang <em @class([$__VIEW_ID__ . '-4c4b09d3'])>đăng ký</em> nội dung, layout <em @class([$__VIEW_ID__ . '-9d8f0c5b'])>tạo chỗ trống</em>. BlockManager nối hai bên theo tên. Nhờ tách rời như vậy, nội dung block được dựng lười đúng vị trí outlet chứ không phải append mù vào cuối thẻ chứa.</p>
                        <div @class([$__VIEW_ID__ . '-d434f7df', 'dir-ex'])><pre @class([$__VIEW_ID__ . '-1aa824c4'])><code @class([$__VIEW_ID__ . '-b13bace0'])><span @class([$__VIEW_ID__ . '-a970be8d', 'code-line', 'c'])>&lt;!-- layouts/docs.sao --&gt;</span><span @class([$__VIEW_ID__ . '-19aae7bc', 'code-line'])>&#64;extends(__layout__ + "public")</span><span @class([$__VIEW_ID__ . '-faa36059', 'code-line'])>&#64;block('content')</span><span @class([$__VIEW_ID__ . '-62e1c37d', 'code-line'])>    &lt;aside class="docs-nav"&gt;…&lt;/aside&gt;</span><span @class([$__VIEW_ID__ . '-07038368', 'code-line'])>    &lt;main&gt;&#64;useBlock('doc')&lt;/main&gt;</span><span @class([$__VIEW_ID__ . '-909ff899', 'code-line'])>&#64;endblock</span></code></pre></div>
                    </article>

                    <article @class([$__VIEW_ID__ . '-6a7bcba5', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-f84188d9', 'dir-head'])><span @class([$__VIEW_ID__ . '-36345494', 'dir-name'])>&#64;section <em @class([$__VIEW_ID__ . '-bb3868c5'])>· &#64;yield</em></span><span @class([$__VIEW_ID__ . '-4336fb40', 'dir-kind'])>Layout</span></div>
                        <div @class([$__VIEW_ID__ . '-8cd0d656', 'dir-sig'])>&#64;section('tên') … &#64;endsection
&#64;yield('tên', 'mặc định')</div>
                        <p @class([$__VIEW_ID__ . '-3e74f879'])>Cơ chế section quen thuộc của Blade. Section có thể khai báo kiểu render dài hoặc có preloader riêng qua config sinh ra trong <code @class([$__VIEW_ID__ . '-40b9d58b'])>__VIEW_CONFIG__</code>.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-dfe00f0f', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-1655d6d2', 'dir-head'])><span @class([$__VIEW_ID__ . '-16f3a413', 'dir-name'])>&#64;include</span><span @class([$__VIEW_ID__ . '-2710c0b8', 'dir-kind'])>Component</span></div>
                        <div @class([$__VIEW_ID__ . '-5117da60', 'dir-sig'])>&#64;include('đường.dẫn.view')
&#64;include('đường.dẫn.view', ['prop' =&gt; biểu_thức])</div>
                        <p @class([$__VIEW_ID__ . '-ad41be4b'])>Tạo một view con thật: có ViewController riêng, state riêng, vòng đời riêng. Đây là khác biệt lớn với partial — view con sống độc lập, được start, pause, resume và destroy theo chính nó.</p>
                        <p @class([$__VIEW_ID__ . '-cd71649c'])>Compiler đọc mảng props để suy ra view con phụ thuộc state nào của cha. Khi state đó đổi, runtime <em @class([$__VIEW_ID__ . '-2effed65'])>đẩy props mới vào đúng instance đang sống</em> chứ không dựng lại view con — nên state nội bộ của nó, ví dụ một form đang mở dở, không bị thổi bay.</p>
                        <div @class([$__VIEW_ID__ . '-0cb9e251', 'dir-ex'])><pre @class([$__VIEW_ID__ . '-1cb031b3'])><code @class([$__VIEW_ID__ . '-ae239c89'])><span @class([$__VIEW_ID__ . '-ed6070cf', 'code-line'])>&#64;foreach(ids as id)</span><span @class([$__VIEW_ID__ . '-0b105503', 'code-line'])>    &#64;key(id)</span><span @class([$__VIEW_ID__ . '-c589d13a', 'code-line'])>    &#64;include('web.modules.roster.item', ['uid' =&gt; id, 'record' =&gt; records[id] ?? null])</span><span @class([$__VIEW_ID__ . '-c1472e54', 'code-line'])>&#64;endforeach</span></code></pre></div>
                        <p @class([$__VIEW_ID__ . '-16464f5d', 'dir-note'])>Props phải sống được qua SSR nên chỉ nhận giá trị tuần tự hoá được — không truyền được callback. Kênh từ con lên cha là bus sự kiện <code @class([$__VIEW_ID__ . '-0f2bd5f7'])>App.Event</code>.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-03643112', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-24eecd94', 'dir-head'])><span @class([$__VIEW_ID__ . '-664b8788', 'dir-name'])>&#64;children</span><span @class([$__VIEW_ID__ . '-5fa974ec', 'dir-kind'])>Slot</span></div>
                        <div @class([$__VIEW_ID__ . '-57137665', 'dir-sig'])>&#64;children</div>
                        <p @class([$__VIEW_ID__ . '-f8f0bb7a'])>Chỗ đặt nội dung mà bên gọi truyền vào giữa hai thẻ. Nội dung được render lười đúng tại vị trí khai báo và giữ nguyên context của bên gọi — biến trong đó vẫn là biến của view cha, không phải của component.</p>
                        <div @class([$__VIEW_ID__ . '-5fc4b06a', 'dir-ex'])><pre @class([$__VIEW_ID__ . '-58e77aac'])><code @class([$__VIEW_ID__ . '-5799c363'])><span @class([$__VIEW_ID__ . '-e9aef28e', 'code-line', 'c'])>&lt;!-- card.sao --&gt;</span><span @class([$__VIEW_ID__ . '-73479c82', 'code-line'])>&lt;article class="card"&gt;&lt;h3&gt;<span @class([$__VIEW_ID__ . '-0c0f0f8b', 'mustache-token'])>title</span>&lt;/h3&gt;&#64;children&lt;/article&gt;</span><span @class([$__VIEW_ID__ . '-cca24043', 'code-line'])></span><span @class([$__VIEW_ID__ . '-0ba496f3', 'code-line', 'c'])>&lt;!-- bên gọi --&gt;</span><span @class([$__VIEW_ID__ . '-22fcc1d7', 'code-line'])>&lt;card title="Ví dụ"&gt;&lt;p&gt;Nội dung này đi qua slot&lt;/p&gt;&lt;/card&gt;</span></code></pre></div>
                    </article>

                    <article @class([$__VIEW_ID__ . '-1eed14c9', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-e81b37f0', 'dir-head'])><span @class([$__VIEW_ID__ . '-6f769607', 'dir-name'])>&#64;exec</span><span @class([$__VIEW_ID__ . '-0ebb409c', 'dir-kind'])>Tiện ích</span></div>
                        <div @class([$__VIEW_ID__ . '-d1a338e5', 'dir-sig'])>&#64;exec(biểu_thức)</div>
                        <p @class([$__VIEW_ID__ . '-f8067988'])>Chạy một biểu thức mà không in ra gì. Dùng để gán biến trung gian hoặc gọi hàm phụ ngay trong template.</p>
                    </article>

                </div>
            </section>

            <section @class([$__VIEW_ID__ . '-1df6b4ad', 'dir-group']) @attr(['id' => 'tien-ich'])>
                <h2 @class([$__VIEW_ID__ . '-ed5a3a19'])>Quyền, form &amp; tiện ích</h2>
                <p @class([$__VIEW_ID__ . '-13a6cc37'])>Nhóm này giữ nguyên ngữ nghĩa Blade quen thuộc, nên nếu bạn đã viết Laravel thì không phải học lại.</p>
                <div @class([$__VIEW_ID__ . '-1d9ee324', 'dir-list'])>

                    <article @class([$__VIEW_ID__ . '-2f1af9a9', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-e72fdbe1', 'dir-head'])><span @class([$__VIEW_ID__ . '-511dd3b2', 'dir-name'])>&#64;csrf <em @class([$__VIEW_ID__ . '-225ea8c0'])>· &#64;method</em></span><span @class([$__VIEW_ID__ . '-f8b231cd', 'dir-kind'])>Form</span></div>
                        <div @class([$__VIEW_ID__ . '-10241f7e', 'dir-sig'])>&#64;csrf
&#64;method('PUT')</div>
                        <p @class([$__VIEW_ID__ . '-05b9d3d1'])>Chèn ô ẩn chứa token CSRF, và giả lập HTTP method cho form vốn chỉ gửi được GET với POST.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-65b84cc0', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-14407428', 'dir-head'])><span @class([$__VIEW_ID__ . '-1c7c91f7', 'dir-name'])>&#64;auth <em @class([$__VIEW_ID__ . '-44e990a0'])>· &#64;guest</em></span><span @class([$__VIEW_ID__ . '-2203c7bd', 'dir-kind'])>Quyền</span></div>
                        <div @class([$__VIEW_ID__ . '-467e2c52', 'dir-sig'])>&#64;auth … &#64;endauth
&#64;guest … &#64;endguest</div>
                        <p @class([$__VIEW_ID__ . '-6eafdb70'])>Khối hiển thị theo trạng thái đăng nhập, xét ở phía server lúc render.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-9922419a', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-a5bb4e03', 'dir-head'])><span @class([$__VIEW_ID__ . '-f015d15e', 'dir-name'])>&#64;can <em @class([$__VIEW_ID__ . '-c391dd5f'])>· &#64;cannot</em></span><span @class([$__VIEW_ID__ . '-b34f9341', 'dir-kind'])>Quyền</span></div>
                        <div @class([$__VIEW_ID__ . '-5b0e64f1', 'dir-sig'])>&#64;can('quyền', $model) … &#64;endcan</div>
                        <p @class([$__VIEW_ID__ . '-5f7d0604'])>Khối theo policy của Laravel. Cùng cách viết, cùng cách phân giải quyền.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-f9fbc0e3', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-136991ba', 'dir-head'])><span @class([$__VIEW_ID__ . '-ad0ed4af', 'dir-name'])>&#64;error</span><span @class([$__VIEW_ID__ . '-12deb963', 'dir-kind'])>Form</span></div>
                        <div @class([$__VIEW_ID__ . '-abacf0f5', 'dir-sig'])>&#64;error('trường') … &#64;enderror</div>
                        <p @class([$__VIEW_ID__ . '-4318de85'])>Hiện lỗi validation của một trường, với biến <code @class([$__VIEW_ID__ . '-acf2d4eb'])>$message</code> sẵn trong khối.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-ce58863a', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-425ce103', 'dir-head'])><span @class([$__VIEW_ID__ . '-8205eb8c', 'dir-name'])>&#64;hasSection</span><span @class([$__VIEW_ID__ . '-f77d5eb3', 'dir-kind'])>Layout</span></div>
                        <div @class([$__VIEW_ID__ . '-97df675a', 'dir-sig'])>&#64;hasSection('tên') … &#64;endhassection</div>
                        <p @class([$__VIEW_ID__ . '-72c6a4d8'])>Kiểm tra một section đã được trang con định nghĩa chưa, để layout quyết định có dựng khung bao quanh hay không.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-48ff5e10', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-b73c872f', 'dir-head'])><span @class([$__VIEW_ID__ . '-d2a24e60', 'dir-name'])>&#64;verbatim</span><span @class([$__VIEW_ID__ . '-280c27b3', 'dir-kind'])>Tiện ích</span></div>
                        <div @class([$__VIEW_ID__ . '-083bde20', 'dir-sig'])>&#64;verbatim … &#64;endverbatim</div>
                        <p @class([$__VIEW_ID__ . '-9c1d8eaf'])>Xuất nguyên văn, không biên dịch gì bên trong. Cần khi bạn muốn in ra cú pháp của chính Saola hoặc của một template engine khác.</p>
                    </article>

                    <article @class([$__VIEW_ID__ . '-cd912944', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-d0102a6a', 'dir-head'])><span @class([$__VIEW_ID__ . '-bd1ddb41', 'dir-name'])>&#64;register</span><span @class([$__VIEW_ID__ . '-328870a8', 'dir-kind'])>Tiện ích</span></div>
                        <div @class([$__VIEW_ID__ . '-24c62c3b', 'dir-sig'])>&#64;register … &#64;endregister</div>
                        <p @class([$__VIEW_ID__ . '-d157b0b4'])>Khối JavaScript thô được đưa thẳng vào view đã biên dịch, không qua preprocessor. Dùng cho đoạn cần chạy nguyên trạng.</p>
                    </article>

                </div>
            </section>

            <section @class([$__VIEW_ID__ . '-53e64ea9', 'dir-group']) @attr(['id' => 'magic'])>
                <h2 @class([$__VIEW_ID__ . '-db3b86f1'])>Biến ma thuật</h2>
                <p @class([$__VIEW_ID__ . '-51cc8a04'])>Có sẵn trong mọi view, do render context cấp. Dùng chúng thay vì viết cứng đường dẫn để view còn chuyển được giữa các context.</p>
                <div @class([$__VIEW_ID__ . '-cb3502d0', 'dir-list'])>
                    <article @class([$__VIEW_ID__ . '-7331773a', 'dir'])>
                        <div @class([$__VIEW_ID__ . '-f00fc073', 'dir-head'])><span @class([$__VIEW_ID__ . '-5f4247e4', 'dir-name'])>Danh sách</span><span @class([$__VIEW_ID__ . '-08c68f86', 'dir-kind'])>Toàn cục trong view</span></div>
                        <table @class([$__VIEW_ID__ . '-d09c3360', 'dir-mini'])>
                            <tr @class([$__VIEW_ID__ . '-a5f0a5d4'])><td @class([$__VIEW_ID__ . '-ee67ec3c'])>__layout__</td><td @class([$__VIEW_ID__ . '-a497e5c6'])>đường dẫn gốc tới thư mục layout của context hiện tại</td></tr>
                            <tr @class([$__VIEW_ID__ . '-f4a4b0a6'])><td @class([$__VIEW_ID__ . '-b2dd2208'])>__template__</td><td @class([$__VIEW_ID__ . '-bad48f68'])>đường dẫn gốc tới component dùng chung</td></tr>
                            <tr @class([$__VIEW_ID__ . '-95506989'])><td @class([$__VIEW_ID__ . '-2d95f218'])>__VIEW_PATH__</td><td @class([$__VIEW_ID__ . '-3b9e87b2'])>đường dẫn dạng chấm của chính view này, ví dụ <code @class([$__VIEW_ID__ . '-cd3483f9'])>web.modules.docs.index</code></td></tr>
                            <tr @class([$__VIEW_ID__ . '-9c893ce8'])><td @class([$__VIEW_ID__ . '-e52dd93c'])>__VIEW_ID__</td><td @class([$__VIEW_ID__ . '-77b3e45e'])>định danh instance, là tiền tố của mọi class và marker dùng để hydrate</td></tr>
                            <tr @class([$__VIEW_ID__ . '-4f66e215'])><td @class([$__VIEW_ID__ . '-cc8202ab'])>__context__</td><td @class([$__VIEW_ID__ . '-117251b4'])>context đang phục vụ request: web, admin, api hay mobile</td></tr>
                            <tr @class([$__VIEW_ID__ . '-1395480d'])><td @class([$__VIEW_ID__ . '-9752c146'])>__base__ · __page__<br @class([$__VIEW_ID__ . '-c5312f83'])>__component__ · __partial__</td><td @class([$__VIEW_ID__ . '-1de32490'])>đường dẫn gốc theo từng loại view</td></tr>
                            <tr @class([$__VIEW_ID__ . '-96f34c8d'])><td @class([$__VIEW_ID__ . '-8d3a2c6b'])>__system__</td><td @class([$__VIEW_ID__ . '-15e39f19'])>khối system data do render context truyền xuống</td></tr>
                        </table>
                    </article>
                </div>
            </section>
        </div>

        <a @class([$__VIEW_ID__ . '-ceb15976', 'doc-next']) @attr(['href' => '/docs/reactivity'])>
            <div @class([$__VIEW_ID__ . '-60f0ac7a'])><span @class([$__VIEW_ID__ . '-b7585c3f'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-8767f8f3'])>State &amp; reactivity</strong></div>
            <span @class([$__VIEW_ID__ . '-8287de38', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
