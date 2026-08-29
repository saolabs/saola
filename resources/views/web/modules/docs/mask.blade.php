@exec($__ONE_COMPONENT_REGISTRY__ = ['code-window' => 'web.components.code-window']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])>
                <p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>08</span> BACKEND</p>
                <h1 @class([$__VIEW_ID__ . '-Bdoc112'])>Mask, model và collection.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-Bdoc121'])>Model biết mọi thứ về bảng — kể cả những cột không ai bên ngoài được thấy. Mask là lớp mặt nạ quyết định phần nào của model đi ra ngoài, và đi ra dưới hình dạng nào.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-Bdoc2', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-Bdoc21', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc211'])>MODEL</span> Eloquent cộng vài trait</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc22'])>Model của Saola vẫn là Eloquent.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc23'])><code @class([$__VIEW_ID__ . '-Bdoc231'])>Saola\Core\Models\Model</code> kế thừa thẳng Eloquent rồi gộp thêm bốn trait, nên mọi thứ bạn đã biết về Eloquent vẫn đúng.</p>
            <div @class([$__VIEW_ID__ . '-Bdoc24', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc241'])><div @class([$__VIEW_ID__ . '-Bdoc2411', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24111'])>SoftDeletes</code></div><span @class([$__VIEW_ID__ . '-Bdoc2412'])>Xoá mềm, đi kèm <code @class([$__VIEW_ID__ . '-Bdoc24121'])>trashed()</code> ở tầng repository</span><b @class([$__VIEW_ID__ . '-Bdoc2413'])>Laravel</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc242'])><div @class([$__VIEW_ID__ . '-Bdoc2421', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24211'])>Uuid</code></div><span @class([$__VIEW_ID__ . '-Bdoc2422'])>Khoá phụ dạng uuid bên cạnh id tự tăng</span><b @class([$__VIEW_ID__ . '-Bdoc2423'])>core</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc243'])><div @class([$__VIEW_ID__ . '-Bdoc2431', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24311'])>ModelEventMethods</code></div><span @class([$__VIEW_ID__ . '-Bdoc2432'])>Hook vòng đời model, ví dụ <code @class([$__VIEW_ID__ . '-Bdoc24321'])>canDelete()</code></span><b @class([$__VIEW_ID__ . '-Bdoc2433'])>core</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc244'])><div @class([$__VIEW_ID__ . '-Bdoc2441', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24411'])>ModelFileMethods</code></div><span @class([$__VIEW_ID__ . '-Bdoc2442'])>Field kiểu file: lưu, dọn, sinh đường dẫn</span><b @class([$__VIEW_ID__ . '-Bdoc2443'])>core</b></div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc25', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc251'])>MASK</span> Ranh giới ra ngoài</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc26'])>Mask biến model thành object có kiểm soát.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc27'])>Trả model thô ra response nghĩa là mọi cột mới thêm vào bảng đều tự động lộ ra API. Mask đảo lại: chỉ những gì được khai báo mới đi ra.</p>
            @startMarker('component', 'Bdoc2c1')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_0'))
@verbatim
class UserMask extends Mask
{
    public function init()
    {
        $this->map([
            'id', 'name', 'email',
            'joined_at' => 'created_at',
        ]);
    }
}
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_0'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "app/Modules/User/Masks/UserMask.php", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__0_content])
@endMarker('component', 'Bdoc2c1')
            <p @class([$__VIEW_ID__ . '-Bdoc28'])>Mask hiện thực <code @class([$__VIEW_ID__ . '-Bdoc281'])>ArrayAccess</code>, <code @class([$__VIEW_ID__ . '-Bdoc282'])>Countable</code>, <code @class([$__VIEW_ID__ . '-Bdoc283'])>IteratorAggregate</code>, <code @class([$__VIEW_ID__ . '-Bdoc284'])>JsonSerializable</code> và <code @class([$__VIEW_ID__ . '-Bdoc285'])>Arrayable</code> — nên dùng được như mảng, đếm được, lặp được, và <code @class([$__VIEW_ID__ . '-Bdoc286'])>json_encode</code> thẳng ra đúng hình dạng đã khai báo.</p>

            <p @class([$__VIEW_ID__ . '-Bdoc29', 'ov-sub'])>Vòng đời của một mask</p>
            <div @class([$__VIEW_ID__ . '-Bdoc2e10_', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e10_1'])><div @class([$__VIEW_ID__ . '-Bdoc2e10_11', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e10_111'])>init()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e10_12'])>Thiết lập trước khi nhận dữ liệu — nơi gọi <code @class([$__VIEW_ID__ . '-Bdoc2e10_121'])>map()</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e10_122'])>alias()</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e10_123'])>allow()</code></span><b @class([$__VIEW_ID__ . '-Bdoc2e10_13'])>1</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e10_2'])><div @class([$__VIEW_ID__ . '-Bdoc2e10_21', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e10_211'])>onBeforeLoadRelations()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e10_22'])>Chạy trước khi nạp quan hệ</span><b @class([$__VIEW_ID__ . '-Bdoc2e10_23'])>2</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e10_3'])><div @class([$__VIEW_ID__ . '-Bdoc2e10_31', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e10_311'])>onLoaded()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e10_32'])>Đã có dữ liệu và quan hệ — thêm field dẫn xuất ở đây</span><b @class([$__VIEW_ID__ . '-Bdoc2e10_33'])>3</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e10_4'])><div @class([$__VIEW_ID__ . '-Bdoc2e10_41', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e10_411'])>onCompleted()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e10_42'])>Chốt lại sau khi mọi thứ đã sẵn sàng</span><b @class([$__VIEW_ID__ . '-Bdoc2e10_43'])>4</b></div>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc2e11_', 'ov-note'])>
                <code @class([$__VIEW_ID__ . '-Bdoc2e11_1'])>allow()</code> mở danh sách method được gọi từ template. Mặc định chỉ vài helper an toàn như <code @class([$__VIEW_ID__ . '-Bdoc2e11_2'])>timeAgo</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e11_3'])>dateFormat</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e11_4'])>shortContent</code> — gọi method ngoài danh sách sẽ không đi qua được.
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc2e12_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e12_1'])>COLLECTION</span> Nhiều bản ghi</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e13_'])>Một mask cho một bản ghi, collection cho danh sách.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e14_'])>Khai báo <code @class([$__VIEW_ID__ . '-Bdoc2e14_1'])>$collectionClass</code> để mask biết dùng lớp nào khi bọc nhiều bản ghi. <code @class([$__VIEW_ID__ . '-Bdoc2e14_2'])>MaskCollection</code> giữ nguyên các phép quen thuộc như <code @class([$__VIEW_ID__ . '-Bdoc2e14_3'])>collect</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e14_4'])>concat</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e14_5'])>reverse</code>.</p>
            <p @class([$__VIEW_ID__ . '-Bdoc2e15_'])><code @class([$__VIEW_ID__ . '-Bdoc2e15_1'])>EmptyMask</code> và <code @class([$__VIEW_ID__ . '-Bdoc2e15_2'])>Nothing</code> là hai giá trị rỗng có kiểu — dùng thay <code @class([$__VIEW_ID__ . '-Bdoc2e15_3'])>null</code> để template khỏi phải kiểm tra tồn tại trước mỗi lần đọc.</p>

            <p @class([$__VIEW_ID__ . '-Bdoc2e16_', 'ov-note'])>
                Mask trả về mảng khi sang view, nên phía <code @class([$__VIEW_ID__ . '-Bdoc2e16_1'])>.sao</code> đọc bằng <code @class([$__VIEW_ID__ . '-Bdoc2e16_2'])>record['name']</code> chứ không phải <code @class([$__VIEW_ID__ . '-Bdoc2e16_3'])>record.name</code>. Lý do và ranh giới đầy đủ nằm ở <a @class([$__VIEW_ID__ . '-Bdoc2e16_4']) @attr(['href' => '/docs/directives'])>tham chiếu directive</a>.
            </p>
        </div>
    @endblock
