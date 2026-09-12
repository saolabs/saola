@exec($__ONE_COMPONENT_REGISTRY__ = ['code-window' => 'web.components.code-window']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($clientMode, 'browser')
@extends($__layout__ . "docs")
    @section('meta:title', 'Response và Thương lượng Đầu ra - Saola Docs')
    @section('meta:description', 'Xử lý phản hồi và thương lượng nội dung (Content Negotiation) trong Saola: Tự động trả về HTML cho SSR hoặc JSON cho SPA và API.')
    @section('meta:keywords', 'saola response, content negotiation, ssr html, spa json, response factory')
    @block('doc')
        <header @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])>
                <p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>11</span> BACKEND</p>
                <h1 @class([$__VIEW_ID__ . '-Bdoc112'])>Response và thương lượng đầu ra.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-Bdoc121'])>Một controller phục vụ được cả trình duyệt lẫn API mà không rẽ nhánh: <code @class([$__VIEW_ID__ . '-Bdoc1211'])>$this-&gt;response()</code> tự quyết trả HTML hay JSON dựa trên chính request.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-Bdoc2', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-Bdoc21', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc211'])>MỘT HÀM</span> Hai kiểu đầu ra</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc22'])>Controller không cần biết ai đang gọi.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc23'])>Đây là lý do gần như mọi controller trong dự án chỉ có một dòng thân hàm. Cùng route đó, trình duyệt nhận trang đã render sẵn, còn <code @class([$__VIEW_ID__ . '-Bdoc231'])>fetch</code> nhận JSON.</p>
            @startMarker('component', 'Bdoc2c1')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_0'))
@verbatim
class RosterController extends WebController
{
    protected $module = 'roster';

    public function index()
    {
        return $this->response([]);
    }
}
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_0'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "app/Modules/Roster/Http/Controllers/Web/RosterController.php", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__0_content])
@endMarker('component', 'Bdoc2c1')
            <div @class([$__VIEW_ID__ . '-Bdoc24', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc241'])><div @class([$__VIEW_ID__ . '-Bdoc2411', 'dt-key'])>Trình duyệt</div><span @class([$__VIEW_ID__ . '-Bdoc2412'])>Accept là HTML → render Blade của route rồi trả trang</span><b @class([$__VIEW_ID__ . '-Bdoc2413'])>view</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc242'])><div @class([$__VIEW_ID__ . '-Bdoc2421', 'dt-key'])>Fetch / API</div><span @class([$__VIEW_ID__ . '-Bdoc2422'])>Accept là JSON, hoặc context <code @class([$__VIEW_ID__ . '-Bdoc24221'])>api</code> không có view → trả JSON</span><b @class([$__VIEW_ID__ . '-Bdoc2423'])>json</b></div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc25', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc251'])>MINH HỌA TRỰC QUAN</span> Content Negotiation trong thực tế</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc26'])>Mô phỏng cơ chế phản hồi theo ngữ cảnh gọi.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc27'])>Hãy bấm chuyển chế độ bên dưới để xem cách <code @class([$__VIEW_ID__ . '-Bdoc271'])>$this->response($data)</code> tự động biến hoá payload phù hợp:</p>

            <div @class([$__VIEW_ID__ . '-Bdoc28', 'ov-card']) @attr(['style' => 'margin-bottom: 2.5rem; border-color: var(--primary, #0284c7); padding: 1.5rem;'])>
                <div @class([$__VIEW_ID__ . '-Bdoc281']) @attr(['style' => 'display: flex; gap: 0.5rem; margin-bottom: 1.25rem; flex-wrap: wrap;'])>
                    <button @class([$__VIEW_ID__ . '-Bdoc2811', 'button', 'button-sm', 'button-primary'=> $clientMode === 'browser']) @attr(['type' => 'button'])>
                        Trình duyệt (Initial Page Load / SSR)
                    </button>
                    <button @class([$__VIEW_ID__ . '-Bdoc2812', 'button', 'button-sm', 'button-primary'=> $clientMode === 'spa']) @attr(['type' => 'button'])>
                        SPA Client Fetch (Navigation)
                    </button>
                    <button @class([$__VIEW_ID__ . '-Bdoc2813', 'button', 'button-sm', 'button-primary'=> $clientMode === 'api']) @attr(['type' => 'button'])>
                        API Client / Mobile App (forceJson)
                    </button>
                </div>

                @startMarker('reactive', 'Bdoc28r1', ['stateKey' => ['clientMode'], 'type' => 'if'])
                @if($clientMode === 'browser')
                    <div @class([$__VIEW_ID__ . '-Bdoc28r1k11']) @attr(['style' => 'background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc28r1k111']) @attr(['style' => 'color: #38bdf8; font-family: monospace; font-size: 0.85rem; margin-bottom: 0.5rem; font-weight: 600;'])>[REQUEST HEADERS TỪ BROWSER]</div>
                        <pre @class([$__VIEW_ID__ . '-Bdoc28r1k112']) @attr(['style' => 'margin: 0; font-size: 0.82rem; color: #94a3b8; font-family: monospace; white-space: pre-wrap;'])>GET /products/42 HTTP/1.1
Host: saola.test
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
User-Agent: Mozilla/5.0 ... Chrome/128.0</pre>
                    </div>
                    <div @class([$__VIEW_ID__ . '-Bdoc28r1k12']) @attr(['style' => 'background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; padding: 1rem;'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc28r1k121']) @attr(['style' => 'color: #34d399; font-family: monospace; font-size: 0.85rem; margin-bottom: 0.5rem; font-weight: 600;'])>[RESPONSE TỪ SAOLA: 200 OK — Rendered HTML]</div>
                        <pre @class([$__VIEW_ID__ . '-Bdoc28r1k122']) @attr(['style' => 'margin: 0; font-size: 0.82rem; color: #cbd5e1; font-family: monospace; white-space: pre-wrap;'])>HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8

&lt;!DOCTYPE html&gt;
&lt;html lang="vi"&gt;
  &lt;head&gt;&lt;title&gt;Sản phẩm #42 - Saola Ecosystem&lt;/title&gt;&lt;/head&gt;
  &lt;body&gt;
    &lt;div id="app"&gt;
      &lt;!--s:v:web.products.show-s--&gt;
      &lt;div class="product-detail"&gt;
        &lt;h1&gt;Bàn phím cơ Saola Pro&lt;/h1&gt;
        &lt;span class="badge"&gt;120.00 USD&lt;/span&gt;
      &lt;/div&gt;
      &lt;!--s:v:web.products.show-e--&gt;
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
                    </div>
                @elseif($clientMode === 'spa')
                    <div @class([$__VIEW_ID__ . '-Bdoc28r1k21']) @attr(['style' => 'background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc28r1k211']) @attr(['style' => 'color: #38bdf8; font-family: monospace; font-size: 0.85rem; margin-bottom: 0.5rem; font-weight: 600;'])>[REQUEST HEADERS TỪ SPA ROUTER]</div>
                        <pre @class([$__VIEW_ID__ . '-Bdoc28r1k212']) @attr(['style' => 'margin: 0; font-size: 0.82rem; color: #94a3b8; font-family: monospace; white-space: pre-wrap;'])>GET /products/42 HTTP/1.1
Host: saola.test
Accept: application/json
X-Requested-With: XMLHttpRequest
X-Saola-Navigation: true</pre>
                    </div>
                    <div @class([$__VIEW_ID__ . '-Bdoc28r1k22']) @attr(['style' => 'background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; padding: 1rem;'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc28r1k221']) @attr(['style' => 'color: #34d399; font-family: monospace; font-size: 0.85rem; margin-bottom: 0.5rem; font-weight: 600;'])>[RESPONSE TỪ SAOLA: 200 OK — JSON Data + View metadata]</div>
                        <pre @class([$__VIEW_ID__ . '-Bdoc28r1k222']) @attr(['style' => 'margin: 0; font-size: 0.82rem; color: #cbd5e1; font-family: monospace; white-space: pre-wrap;'])>HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8

{
  "code": 200,
  "view": "web.products.show",
  "data": {
    "item": {
      "id": 42,
      "title": "Bàn phím cơ Saola Pro",
      "price": 120.00
    }
  },
  "meta": {
    "title": "Sản phẩm #42 - Saola Ecosystem"
  }
}</pre>
                    </div>
                @else
                    <div @class([$__VIEW_ID__ . '-Bdoc28r1k31']) @attr(['style' => 'background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc28r1k311']) @attr(['style' => 'color: #38bdf8; font-family: monospace; font-size: 0.85rem; margin-bottom: 0.5rem; font-weight: 600;'])>[REQUEST HEADERS TỪ API CLIENT]</div>
                        <pre @class([$__VIEW_ID__ . '-Bdoc28r1k312']) @attr(['style' => 'margin: 0; font-size: 0.82rem; color: #94a3b8; font-family: monospace; white-space: pre-wrap;'])>GET /api/v1/products/42 HTTP/1.1
Host: saola.test
Accept: application/json
Authorization: Bearer saola_token_xyz</pre>
                    </div>
                    <div @class([$__VIEW_ID__ . '-Bdoc28r1k32']) @attr(['style' => 'background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; padding: 1rem;'])>
                        <div @class([$__VIEW_ID__ . '-Bdoc28r1k321']) @attr(['style' => 'color: #34d399; font-family: monospace; font-size: 0.85rem; margin-bottom: 0.5rem; font-weight: 600;'])>[RESPONSE TỪ SAOLA: 200 OK — Pure JSON Payload]</div>
                        <pre @class([$__VIEW_ID__ . '-Bdoc28r1k322']) @attr(['style' => 'margin: 0; font-size: 0.82rem; color: #cbd5e1; font-family: monospace; white-space: pre-wrap;'])>HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8

{
  "code": 200,
  "message": "success",
  "data": {
    "item": {
      "id": 42,
      "title": "Bàn phím cơ Saola Pro",
      "price": 120.00
    }
  }
}</pre>
                    </div>
                @endif
                @endMarker('reactive', 'Bdoc28r1')
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc29', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc291'])>PHÂN GIẢI</span> View đến từ tên route</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e10_'])>Không truyền đường dẫn thì nó tự tra.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e11_'])>Khi không đưa <code @class([$__VIEW_ID__ . '-Bdoc2e11_1'])>$bladePath</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e11_2'])>response()</code> hỏi <code @class([$__VIEW_ID__ . '-Bdoc2e11_3'])>ViewContextManager::routeToViewPathConfig()</code> xem route tên đó ứng với view nào trong context hiện tại. Nhờ vậy một method phục vụ được nhiều route.</p>
            @startMarker('component', 'Bdoc2c2')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_1'))
@verbatim
// 16 route /docs/* dùng chung đúng method này;
// view resolve theo route name web.docs.{slug}
public function page()
{
    return $this->response([]);
}
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__1_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_1'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "app/Modules/Docs/.../DocsController.php", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__1_content])
@endMarker('component', 'Bdoc2c2')
            <div @class([$__VIEW_ID__ . '-Bdoc2e12_', 'ov-note'])>
                Vì view suy từ <strong @class([$__VIEW_ID__ . '-Bdoc2e12_1'])>tên route</strong>, route có tham số (<code @class([$__VIEW_ID__ . '-Bdoc2e12_2'])>/docs/{slug}</code>) sẽ không có view cố định — và router phía client cũng không dựng được bản đồ path → component cho nó. Đó là lý do tài liệu khai báo 16 route tĩnh thay vì một route tham số.
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc2e13_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e13_1'])>THAM SỐ</span> Khi cần ép</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e14_'])>Ba tham số, phần lớn thời gian chỉ dùng tham số đầu.</h2>
            @startMarker('component', 'Bdoc2c3')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_2'))
@verbatim
$this->response(array $data = [], ?string $bladePath = null, array $options = [])
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__2_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_2'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "Chữ ký", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__2_content])
@endMarker('component', 'Bdoc2c3')
            <div @class([$__VIEW_ID__ . '-Bdoc2e15_', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e15_1'])><div @class([$__VIEW_ID__ . '-Bdoc2e15_11', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e15_111'])>$data</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e15_12'])>Dữ liệu đưa sang view, đồng thời là payload JSON</span><b @class([$__VIEW_ID__ . '-Bdoc2e15_13'])>mảng</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e15_2'])><div @class([$__VIEW_ID__ . '-Bdoc2e15_21', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e15_211'])>$bladePath</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e15_22'])>Chỉ định view thay vì để tra theo route name</span><b @class([$__VIEW_ID__ . '-Bdoc2e15_23'])>chuỗi</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e15_3'])><div @class([$__VIEW_ID__ . '-Bdoc2e15_31', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e15_311'])>status</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e15_32'])>Mã HTTP, mặc định 200</span><b @class([$__VIEW_ID__ . '-Bdoc2e15_33'])>option</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e15_4'])><div @class([$__VIEW_ID__ . '-Bdoc2e15_41', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e15_411'])>headers</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e15_42'])>Header thêm vào response</span><b @class([$__VIEW_ID__ . '-Bdoc2e15_43'])>option</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e15_5'])><div @class([$__VIEW_ID__ . '-Bdoc2e15_51', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e15_511'])>forceJson</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e15_52'])>Luôn trả JSON dù request muốn HTML</span><b @class([$__VIEW_ID__ . '-Bdoc2e15_53'])>option</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e15_6'])><div @class([$__VIEW_ID__ . '-Bdoc2e15_61', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e15_611'])>forceView</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e15_62'])>Luôn render view</span><b @class([$__VIEW_ID__ . '-Bdoc2e15_63'])>option</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e15_7'])><div @class([$__VIEW_ID__ . '-Bdoc2e15_71', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e15_711'])>includeView</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e15_72'])>Kèm thông tin view vào payload JSON — router client dùng để biết cần nạp component nào</span><b @class([$__VIEW_ID__ . '-Bdoc2e15_73'])>option</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e15_8'])><div @class([$__VIEW_ID__ . '-Bdoc2e15_81', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e15_811'])>jsonOptions</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e15_82'])>Cờ cho <code @class([$__VIEW_ID__ . '-Bdoc2e15_821'])>json_encode</code>, mặc định <code @class([$__VIEW_ID__ . '-Bdoc2e15_822'])>JSON_UNESCAPED_UNICODE</code></span><b @class([$__VIEW_ID__ . '-Bdoc2e15_83'])>option</b></div>
            </div>
            <p @class([$__VIEW_ID__ . '-Bdoc2e16_'])><code @class([$__VIEW_ID__ . '-Bdoc2e16_1'])>wantsJsonResponse()</code> là nơi quyết định, và <code @class([$__VIEW_ID__ . '-Bdoc2e16_2'])>autoResponse()</code> dùng khi bạn muốn tự gọi lại logic thương lượng đó ở chỗ khác.</p>

            <p @class([$__VIEW_ID__ . '-Bdoc2e17_', 'ov-note'])>
                Đừng đẩy model thô vào <code @class([$__VIEW_ID__ . '-Bdoc2e17_1'])>$data</code>: nó vừa là dữ liệu view vừa là payload JSON, nên mọi cột của bảng sẽ lộ ra API. Bọc <a @class([$__VIEW_ID__ . '-Bdoc2e17_2']) @attr(['href' => '/docs/mask'])>Mask</a> trước.
            </p>
        </div>
    @endblock
