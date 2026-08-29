@exec($__ONE_COMPONENT_REGISTRY__ = ['code-window' => 'web.components.code-window']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])>
                <p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>07</span> BACKEND</p>
                <h1 @class([$__VIEW_ID__ . '-Bdoc112'])>Repository và truy vấn.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-Bdoc121'])>Repository là nơi duy nhất trong ứng dụng biết tới model. Khai báo một dòng <code @class([$__VIEW_ID__ . '-Bdoc1211'])>$model</code> là có sẵn CRUD, filter, cache, soft delete và chủ sở hữu bản ghi.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-Bdoc2', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-Bdoc21', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc211'])>KHAI BÁO</span> Một dòng là đủ</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc22'])>Kế thừa <code @class([$__VIEW_ID__ . '-Bdoc221'])>BaseRepository</code>, trỏ vào model.</h2>
            @startMarker('component', 'Bdoc2c1')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_0'))
@verbatim
class UserRepository extends BaseRepository
{
    protected $model = User::class;
}
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_0'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "app/Modules/User/Repositories/UserRepository.php", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__0_content])
@endMarker('component', 'Bdoc2c1')
            <p @class([$__VIEW_ID__ . '-Bdoc23'])>Không cần viết <code @class([$__VIEW_ID__ . '-Bdoc231'])>all()</code>, <code @class([$__VIEW_ID__ . '-Bdoc232'])>find()</code>, <code @class([$__VIEW_ID__ . '-Bdoc233'])>create()</code>, <code @class([$__VIEW_ID__ . '-Bdoc234'])>update()</code>, <code @class([$__VIEW_ID__ . '-Bdoc235'])>delete()</code> — chúng đến từ các trait mà <code @class([$__VIEW_ID__ . '-Bdoc236'])>BaseRepository</code> gộp sẵn.</p>

            <p @class([$__VIEW_ID__ . '-Bdoc24', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc241'])>THÀNH PHẦN</span> Repository là tổ hợp trait</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc25'])>Mỗi nhóm hành vi là một trait riêng.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc26'])>Nhờ tách như vậy, một repository chỉ cần ghi đè đúng nhóm nó muốn đổi thay vì kế thừa một lớp khổng lồ.</p>
            <div @class([$__VIEW_ID__ . '-Bdoc27', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc271'])><div @class([$__VIEW_ID__ . '-Bdoc2711', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27111'])>BaseQuery</code></div><span @class([$__VIEW_ID__ . '-Bdoc2712'])>Dựng query gốc, join, select, sắp xếp</span><b @class([$__VIEW_ID__ . '-Bdoc2713'])>truy vấn</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc272'])><div @class([$__VIEW_ID__ . '-Bdoc2721', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27211'])>BaseSearchQuery</code></div><span @class([$__VIEW_ID__ . '-Bdoc2722'])>Tìm kiếm theo từ khoá trên nhiều cột</span><b @class([$__VIEW_ID__ . '-Bdoc2723'])>truy vấn</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc273'])><div @class([$__VIEW_ID__ . '-Bdoc2731', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27311'])>GettingAction</code></div><span @class([$__VIEW_ID__ . '-Bdoc2732'])><code @class([$__VIEW_ID__ . '-Bdoc27321'])>getAll</code>, <code @class([$__VIEW_ID__ . '-Bdoc27322'])>find</code>, <code @class([$__VIEW_ID__ . '-Bdoc27323'])>findBy</code>, <code @class([$__VIEW_ID__ . '-Bdoc27324'])>getBy</code>, hook <code @class([$__VIEW_ID__ . '-Bdoc27325'])>beforeGetData</code></span><b @class([$__VIEW_ID__ . '-Bdoc2733'])>đọc</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc274'])><div @class([$__VIEW_ID__ . '-Bdoc2741', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27411'])>CRUDAction</code></div><span @class([$__VIEW_ID__ . '-Bdoc2742'])><code @class([$__VIEW_ID__ . '-Bdoc27421'])>create</code>, <code @class([$__VIEW_ID__ . '-Bdoc27422'])>createMany</code>, <code @class([$__VIEW_ID__ . '-Bdoc27423'])>save</code>, hook <code @class([$__VIEW_ID__ . '-Bdoc27424'])>beforeCreate</code>/<code @class([$__VIEW_ID__ . '-Bdoc27425'])>beforeUpdate</code></span><b @class([$__VIEW_ID__ . '-Bdoc2743'])>ghi</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc275'])><div @class([$__VIEW_ID__ . '-Bdoc2751', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27511'])>FilterAction</code></div><span @class([$__VIEW_ID__ . '-Bdoc2752'])><code @class([$__VIEW_ID__ . '-Bdoc27521'])>getResults</code>, <code @class([$__VIEW_ID__ . '-Bdoc27522'])>countResults</code>, <code @class([$__VIEW_ID__ . '-Bdoc27523'])>trashed</code>, <code @class([$__VIEW_ID__ . '-Bdoc27524'])>buildFilter</code></span><b @class([$__VIEW_ID__ . '-Bdoc2753'])>lọc</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc276'])><div @class([$__VIEW_ID__ . '-Bdoc2761', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27611'])>CacheAction</code></div><span @class([$__VIEW_ID__ . '-Bdoc2762'])><code @class([$__VIEW_ID__ . '-Bdoc27621'])>cache()</code> và đăng ký method nào được cache</span><b @class([$__VIEW_ID__ . '-Bdoc2763'])>cache</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc277'])><div @class([$__VIEW_ID__ . '-Bdoc2771', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27711'])>OwnerAction</code></div><span @class([$__VIEW_ID__ . '-Bdoc2772'])>Ràng buộc bản ghi theo chủ sở hữu đang đăng nhập</span><b @class([$__VIEW_ID__ . '-Bdoc2773'])>quyền</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc278'])><div @class([$__VIEW_ID__ . '-Bdoc2781', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27811'])>DataAction</code> · <code @class([$__VIEW_ID__ . '-Bdoc27812'])>FileAction</code></div><span @class([$__VIEW_ID__ . '-Bdoc2782'])>Chuẩn hoá dữ liệu vào và xử lý field kiểu file</span><b @class([$__VIEW_ID__ . '-Bdoc2783'])>phụ trợ</b></div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc28', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc281'])>HOOK</span> Chèn vào giữa vòng đời</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc29'])>Ghi đè hook thay vì viết lại cả method.</h2>
            @startMarker('component', 'Bdoc2c2')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_1'))
@verbatim
class UserRepository extends BaseRepository
{
    protected $model = User::class;

    public function beforeCreate($data)
    {
        $data['password'] = bcrypt($data['password']);
        return $data;
    }
}
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__1_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_1'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "Repositories/UserRepository.php", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__1_content])
@endMarker('component', 'Bdoc2c2')
            <div @class([$__VIEW_ID__ . '-Bdoc2e10_', 'ov-note'])>
                <code @class([$__VIEW_ID__ . '-Bdoc2e10_1'])>CRUDAction</code> có công tắc ném lỗi: <code @class([$__VIEW_ID__ . '-Bdoc2e10_2'])>disableThrowException()</code> để lấy lỗi qua <code @class([$__VIEW_ID__ . '-Bdoc2e10_3'])>getCrudErrorMessage()</code> thay vì để exception bay lên. Hữu ích khi ghi hàng loạt và muốn gom lỗi.
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc2e11_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e11_1'])>QUYỀN</span> Bản ghi của ai</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e12_'])><code @class([$__VIEW_ID__ . '-Bdoc2e12_1'])>OwnerAction</code> ràng buộc theo actor.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e13_'])><code @class([$__VIEW_ID__ . '-Bdoc2e13_1'])>setActor()</code> cho biết ai đang thao tác; <code @class([$__VIEW_ID__ . '-Bdoc2e13_2'])>setOwnerID()</code> giới hạn query trong phạm vi bản ghi của người đó. Dùng <code @class([$__VIEW_ID__ . '-Bdoc2e13_3'])>unOwnerQuery()</code> khi cần cố tình vượt phạm vi, ví dụ trong màn hình quản trị.</p>

            <p @class([$__VIEW_ID__ . '-Bdoc2e14_', 'ov-note'])>
                Repository trả model. Đừng đẩy thẳng model đó ra response — bọc bằng <a @class([$__VIEW_ID__ . '-Bdoc2e14_1']) @attr(['href' => '/docs/mask'])>Mask</a> để kiểm soát field nào lộ ra ngoài.
            </p>
        </div>
    @endblock
