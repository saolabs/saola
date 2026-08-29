@exec($__ONE_COMPONENT_REGISTRY__ = ['code-window' => 'web.components.code-window']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
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

            <p @class([$__VIEW_ID__ . '-Bdoc25', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc251'])>PHÂN GIẢI</span> View đến từ tên route</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc26'])>Không truyền đường dẫn thì nó tự tra.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc27'])>Khi không đưa <code @class([$__VIEW_ID__ . '-Bdoc271'])>$bladePath</code>, <code @class([$__VIEW_ID__ . '-Bdoc272'])>response()</code> hỏi <code @class([$__VIEW_ID__ . '-Bdoc273'])>ViewContextManager::routeToViewPathConfig()</code> xem route tên đó ứng với view nào trong context hiện tại. Nhờ vậy một method phục vụ được nhiều route.</p>
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
            <div @class([$__VIEW_ID__ . '-Bdoc28', 'ov-note'])>
                Vì view suy từ <strong @class([$__VIEW_ID__ . '-Bdoc281'])>tên route</strong>, route có tham số (<code @class([$__VIEW_ID__ . '-Bdoc282'])>/docs/{slug}</code>) sẽ không có view cố định — và router phía client cũng không dựng được bản đồ path → component cho nó. Đó là lý do tài liệu khai báo 16 route tĩnh thay vì một route tham số.
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc29', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc291'])>THAM SỐ</span> Khi cần ép</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e10_'])>Ba tham số, phần lớn thời gian chỉ dùng tham số đầu.</h2>
            @startMarker('component', 'Bdoc2c3')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_2'))
@verbatim
$this->response(array $data = [], ?string $bladePath = null, array $options = [])
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__2_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_2'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "Chữ ký", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__2_content])
@endMarker('component', 'Bdoc2c3')
            <div @class([$__VIEW_ID__ . '-Bdoc2e11_', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e11_1'])><div @class([$__VIEW_ID__ . '-Bdoc2e11_11', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e11_111'])>$data</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e11_12'])>Dữ liệu đưa sang view, đồng thời là payload JSON</span><b @class([$__VIEW_ID__ . '-Bdoc2e11_13'])>mảng</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e11_2'])><div @class([$__VIEW_ID__ . '-Bdoc2e11_21', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e11_211'])>$bladePath</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e11_22'])>Chỉ định view thay vì để tra theo route name</span><b @class([$__VIEW_ID__ . '-Bdoc2e11_23'])>chuỗi</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e11_3'])><div @class([$__VIEW_ID__ . '-Bdoc2e11_31', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e11_311'])>status</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e11_32'])>Mã HTTP, mặc định 200</span><b @class([$__VIEW_ID__ . '-Bdoc2e11_33'])>option</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e11_4'])><div @class([$__VIEW_ID__ . '-Bdoc2e11_41', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e11_411'])>headers</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e11_42'])>Header thêm vào response</span><b @class([$__VIEW_ID__ . '-Bdoc2e11_43'])>option</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e11_5'])><div @class([$__VIEW_ID__ . '-Bdoc2e11_51', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e11_511'])>forceJson</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e11_52'])>Luôn trả JSON dù request muốn HTML</span><b @class([$__VIEW_ID__ . '-Bdoc2e11_53'])>option</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e11_6'])><div @class([$__VIEW_ID__ . '-Bdoc2e11_61', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e11_611'])>forceView</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e11_62'])>Luôn render view</span><b @class([$__VIEW_ID__ . '-Bdoc2e11_63'])>option</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e11_7'])><div @class([$__VIEW_ID__ . '-Bdoc2e11_71', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e11_711'])>includeView</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e11_72'])>Kèm thông tin view vào payload JSON — router client dùng để biết cần nạp component nào</span><b @class([$__VIEW_ID__ . '-Bdoc2e11_73'])>option</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e11_8'])><div @class([$__VIEW_ID__ . '-Bdoc2e11_81', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e11_811'])>jsonOptions</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e11_82'])>Cờ cho <code @class([$__VIEW_ID__ . '-Bdoc2e11_821'])>json_encode</code>, mặc định <code @class([$__VIEW_ID__ . '-Bdoc2e11_822'])>JSON_UNESCAPED_UNICODE</code></span><b @class([$__VIEW_ID__ . '-Bdoc2e11_83'])>option</b></div>
            </div>
            <p @class([$__VIEW_ID__ . '-Bdoc2e12_'])><code @class([$__VIEW_ID__ . '-Bdoc2e12_1'])>wantsJsonResponse()</code> là nơi quyết định, và <code @class([$__VIEW_ID__ . '-Bdoc2e12_2'])>autoResponse()</code> dùng khi bạn muốn tự gọi lại logic thương lượng đó ở chỗ khác.</p>

            <p @class([$__VIEW_ID__ . '-Bdoc2e13_', 'ov-note'])>
                Đừng đẩy model thô vào <code @class([$__VIEW_ID__ . '-Bdoc2e13_1'])>$data</code>: nó vừa là dữ liệu view vừa là payload JSON, nên mọi cột của bảng sẽ lộ ra API. Bọc <a @class([$__VIEW_ID__ . '-Bdoc2e13_2']) @attr(['href' => '/docs/mask'])>Mask</a> trước.
            </p>
        </div>
    @endblock
