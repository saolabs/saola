@exec($__ONE_COMPONENT_REGISTRY__ = ['code-window' => 'web.components.code-window']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])>
                <p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>07</span> BACKEND</p>
                <h1 @class([$__VIEW_ID__ . '-Bdoc112'])>Repository và Quản lý Dữ liệu.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-Bdoc121'])>Repository là lớp trừu tượng trung gian duy nhất làm việc trực tiếp với Model. Đóng gói trọn vẹn CRUD, truy vấn nâng cao, tự động lọc theo HTTP Request, phân trang, caching, quản lý phân quyền chủ sở hữu và vòng đời dữ liệu.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-Bdoc2', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-Bdoc21', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc211'])>KHỞI TẠO</span> Một dòng khai báo</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc22'])>Kế thừa <code @class([$__VIEW_ID__ . '-Bdoc221'])>BaseRepository</code>, liên kết Model.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc23'])>Không cần tự viết lại các câu lệnh SQL cơ bản hay query lặp đi lặp lại. Bạn chỉ cần kế thừa <code @class([$__VIEW_ID__ . '-Bdoc231'])>BaseRepository</code> và chỉ định class Model tương ứng:</p>
            @startMarker('component', 'Bdoc2c1')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_0'))
@verbatim
namespace App\Modules\Post\Repositories;

use Saola\Core\Repositories\BaseRepository;
use App\Modules\Post\Models\Post;

class PostRepository extends BaseRepository
{
    /**
     * Khai báo Model liên kết
     * &#64;var string
     */
    protected $model = Post::class;
}
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_0'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "app/Modules/Post/Repositories/PostRepository.php", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__0_content])
@endMarker('component', 'Bdoc2c1')

            <p @class([$__VIEW_ID__ . '-Bdoc24', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc241'])>KIẾN TRÚC</span> Tổ hợp Trait module hóa</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc25'])>Mỗi nhóm hành vi được đóng gói trong một Trait riêng biệt.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc26'])><code @class([$__VIEW_ID__ . '-Bdoc261'])>BaseRepository</code> được thiết kế theo mô hình composition (tổ hợp traits), giúp code rõ ràng, dễ bảo trì và cho phép ghi đè (override) từng phần mà không ảnh hưởng tới toàn bộ hệ thống:</p>
            <div @class([$__VIEW_ID__ . '-Bdoc27', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc271'])><div @class([$__VIEW_ID__ . '-Bdoc2711', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27111'])>GettingAction</code></div><span @class([$__VIEW_ID__ . '-Bdoc2712'])><code @class([$__VIEW_ID__ . '-Bdoc27121'])>getAll</code>, <code @class([$__VIEW_ID__ . '-Bdoc27122'])>find</code>, <code @class([$__VIEW_ID__ . '-Bdoc27123'])>findBy</code>, <code @class([$__VIEW_ID__ . '-Bdoc27124'])>getBy</code>, <code @class([$__VIEW_ID__ . '-Bdoc27125'])>first</code>, <code @class([$__VIEW_ID__ . '-Bdoc27126'])>count</code>, <code @class([$__VIEW_ID__ . '-Bdoc27127'])>pluck</code></span><b @class([$__VIEW_ID__ . '-Bdoc2713'])>đọc dữ liệu</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc272'])><div @class([$__VIEW_ID__ . '-Bdoc2721', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27211'])>CRUDAction</code></div><span @class([$__VIEW_ID__ . '-Bdoc2722'])><code @class([$__VIEW_ID__ . '-Bdoc27221'])>create</code>, <code @class([$__VIEW_ID__ . '-Bdoc27222'])>update</code>, <code @class([$__VIEW_ID__ . '-Bdoc27223'])>save</code>, <code @class([$__VIEW_ID__ . '-Bdoc27224'])>delete</code>, <code @class([$__VIEW_ID__ . '-Bdoc27225'])>createMany</code>, <code @class([$__VIEW_ID__ . '-Bdoc27226'])>restore</code>, <code @class([$__VIEW_ID__ . '-Bdoc27227'])>forceDelete</code></span><b @class([$__VIEW_ID__ . '-Bdoc2723'])>thao tác ghi</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc273'])><div @class([$__VIEW_ID__ . '-Bdoc2731', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27311'])>FilterAction</code></div><span @class([$__VIEW_ID__ . '-Bdoc2732'])><code @class([$__VIEW_ID__ . '-Bdoc27321'])>getResults($request)</code>, <code @class([$__VIEW_ID__ . '-Bdoc27322'])>countResults</code>, cấu hình <code @class([$__VIEW_ID__ . '-Bdoc27323'])>$searchable</code>, <code @class([$__VIEW_ID__ . '-Bdoc27324'])>$whereable</code>, <code @class([$__VIEW_ID__ . '-Bdoc27325'])>$sortable</code></span><b @class([$__VIEW_ID__ . '-Bdoc2733'])>lọc request</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc274'])><div @class([$__VIEW_ID__ . '-Bdoc2741', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27411'])>BaseQuery</code></div><span @class([$__VIEW_ID__ . '-Bdoc2742'])>Query builder: <code @class([$__VIEW_ID__ . '-Bdoc27421'])>where</code>, <code @class([$__VIEW_ID__ . '-Bdoc27422'])>join</code>, <code @class([$__VIEW_ID__ . '-Bdoc27423'])>select</code>, <code @class([$__VIEW_ID__ . '-Bdoc27424'])>groupBy</code>, <code @class([$__VIEW_ID__ . '-Bdoc27425'])>orderBy</code>, <code @class([$__VIEW_ID__ . '-Bdoc27426'])>with</code></span><b @class([$__VIEW_ID__ . '-Bdoc2743'])>truy vấn sql</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc275'])><div @class([$__VIEW_ID__ . '-Bdoc2751', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27511'])>BaseSearchQuery</code></div><span @class([$__VIEW_ID__ . '-Bdoc2752'])>Tìm kiếm full-text và từ khóa trên nhiều cột</span><b @class([$__VIEW_ID__ . '-Bdoc2753'])>tìm kiếm</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc276'])><div @class([$__VIEW_ID__ . '-Bdoc2761', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27611'])>OwnerAction</code></div><span @class([$__VIEW_ID__ . '-Bdoc2762'])>Ràng buộc bản ghi tự động theo Actor/Chủ sở hữu (User ID)</span><b @class([$__VIEW_ID__ . '-Bdoc2763'])>phân quyền</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc277'])><div @class([$__VIEW_ID__ . '-Bdoc2771', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27711'])>CacheAction</code></div><span @class([$__VIEW_ID__ . '-Bdoc2772'])>Cache truy vấn thông minh với <code @class([$__VIEW_ID__ . '-Bdoc27721'])>cache($seconds)</code> và tự xóa cache khi ghi</span><b @class([$__VIEW_ID__ . '-Bdoc2773'])>hiệu năng</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc278'])><div @class([$__VIEW_ID__ . '-Bdoc2781', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27811'])>DataAction</code> · <code @class([$__VIEW_ID__ . '-Bdoc27812'])>FileAction</code></div><span @class([$__VIEW_ID__ . '-Bdoc2782'])>Chuẩn hoá kiểu dữ liệu, upload và quản lý file đính kèm</span><b @class([$__VIEW_ID__ . '-Bdoc2783'])>tiện ích</b></div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc28', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc281'])>1. ĐỌC DỮ LIỆU</span> GettingAction</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc29'])>Các phương thức truy vấn và tìm kiếm bản ghi.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e10_'])>Cung cấp các hàm tiện ích lấy dữ liệu nhanh chóng và an toàn:</p>
            <div @class([$__VIEW_ID__ . '-Bdoc2e11_', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e11_1'])><div @class([$__VIEW_ID__ . '-Bdoc2e11_11', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e11_111'])>find($id)</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e11_12'])>Tìm 1 bản ghi theo Primary Key (trả về Model hoặc null)</span><b @class([$__VIEW_ID__ . '-Bdoc2e11_13'])>Tìm theo ID</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e11_2'])><div @class([$__VIEW_ID__ . '-Bdoc2e11_21', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e11_211'])>findBy($prop, $val)</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e11_22'])>Lấy bản ghi đầu tiên thỏa mãn <code @class([$__VIEW_ID__ . '-Bdoc2e11_221'])>$prop = $val</code> (VD: <code @class([$__VIEW_ID__ . '-Bdoc2e11_222'])>findBy('slug', 'bai-viet-1')</code>)</span><b @class([$__VIEW_ID__ . '-Bdoc2e11_23'])>Tìm 1 bản ghi</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e11_3'])><div @class([$__VIEW_ID__ . '-Bdoc2e11_31', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e11_311'])>getBy($prop, $val)</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e11_32'])>Lấy danh sách các bản ghi khớp giá trị cột</span><b @class([$__VIEW_ID__ . '-Bdoc2e11_33'])>Lấy danh sách</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e11_4'])><div @class([$__VIEW_ID__ . '-Bdoc2e11_41', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e11_411'])>getAll()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e11_42'])>Lấy toàn bộ bản ghi trong bảng (hỗ trợ đa ngôn ngữ nếu có multilang)</span><b @class([$__VIEW_ID__ . '-Bdoc2e11_43'])>Tất cả</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e11_5'])><div @class([$__VIEW_ID__ . '-Bdoc2e11_51', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e11_511'])>first($conditions)</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e11_52'])>Lấy bản ghi đầu tiên theo mảng điều kiện</span><b @class([$__VIEW_ID__ . '-Bdoc2e11_53'])>Bản ghi đầu</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e11_6'])><div @class([$__VIEW_ID__ . '-Bdoc2e11_61', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e11_611'])>count($conditions)</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e11_62'])>Đếm tổng số lượng bản ghi khớp điều kiện</span><b @class([$__VIEW_ID__ . '-Bdoc2e11_63'])>Đếm số lượng</b></div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc2e12_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e12_1'])>2. TRUY VẤN THÔNG MINH</span> Smart Get & Directives</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e13_'])>Truy vấn đa điều kiện cực mạnh chỉ với mảng tham số.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e14_'])>Thay vì phải viết chuỗi lệnh <code @class([$__VIEW_ID__ . '-Bdoc2e14_1'])>->where()->whereIn()->whereLike()->with()->paginate()</code> dài dòng, phương thức <code @class([$__VIEW_ID__ . '-Bdoc2e14_2'])>get($params)</code> và <code @class([$__VIEW_ID__ . '-Bdoc2e14_3'])>first($params)</code> của Saola Repository cho phép bạn mô tả toàn bộ câu truy vấn phức tạp ngay trong một mảng:</p>
            @startMarker('component', 'Bdoc2c2')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_1'))
@verbatim
// Truy vấn danh sách bài viết với bộ tham số thông minh
$posts = $postRepo->get([
    // 1. Toán tử trực tiếp trong key: >, >=, <, <=, !=, <>, like, startwith, endwith
    'status'         => 'published',           // tương đương where('status', '=', 'published')
    'views >='       => 100,                   // tương đương where('views', '>=', 100)
    'category_id'    => [1, 2, 5],             // mảng tự động chuyển thành whereIn('category_id', [1, 2, 5])
    'title like'     => '%laravel%',           // tương đương where('title', 'like', '%laravel%')
    
    // 2. Các chỉ thị đặc biệt bắt đầu bằng dấu '&#64;'
    '&#64;search'        => 'hệ sinh thái Saola',   // Tự động tìm kiếm full-text hoặc like đa cột
    '&#64;select'        => ['id', 'title', 'slug', 'category_id', 'views', 'created_at'],
    '&#64;with'          => ['category', 'author'],// Eager load quan hệ Eloquent
    '&#64;withCount'     => ['comments', 'likes'], // Đếm số quan hệ kèm theo
    '&#64;sortby'        => ['created_at' => 'desc', 'views' => 'desc'], // Sắp xếp nhiều cột
    '&#64;paginate'      => 10                     // Tự động phân trang 10 bài/trang (hoặc dùng '&#64;limit' => [0, 10])
]);
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__1_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_1'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "Ví dụ truy vấn Smart Get", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__1_content])
@endMarker('component', 'Bdoc2c2')

            <h3 @class([$__VIEW_ID__ . '-Bdoc2e15_'])>Danh sách các chỉ thị <code @class([$__VIEW_ID__ . '-Bdoc2e15_1'])>&#64;</code> thông dụng trong <code @class([$__VIEW_ID__ . '-Bdoc2e15_2'])>get($params)</code>:</h3>
            <div @class([$__VIEW_ID__ . '-Bdoc2e16_', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e16_1'])><div @class([$__VIEW_ID__ . '-Bdoc2e16_11', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e16_111'])>&#64;search</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e16_12'])>Tìm kiếm từ khoá trên các cột searchable: <code @class([$__VIEW_ID__ . '-Bdoc2e16_121'])>'&#64;search' => 'keyword'</code></span><b @class([$__VIEW_ID__ . '-Bdoc2e16_13'])>tìm kiếm</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e16_2'])><div @class([$__VIEW_ID__ . '-Bdoc2e16_21', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e16_211'])>&#64;with</code> / <code @class([$__VIEW_ID__ . '-Bdoc2e16_212'])>&#64;load</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e16_22'])>Eager load quan hệ: <code @class([$__VIEW_ID__ . '-Bdoc2e16_221'])>'&#64;with' => ['category', 'tags']</code></span><b @class([$__VIEW_ID__ . '-Bdoc2e16_23'])>quan hệ</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e16_3'])><div @class([$__VIEW_ID__ . '-Bdoc2e16_31', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e16_311'])>&#64;withCount</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e16_32'])>Đếm quan hệ: <code @class([$__VIEW_ID__ . '-Bdoc2e16_321'])>'&#64;withCount' => ['comments']</code> tạo thêm thuộc tính <code @class([$__VIEW_ID__ . '-Bdoc2e16_322'])>comments_count</code></span><b @class([$__VIEW_ID__ . '-Bdoc2e16_33'])>đếm quan hệ</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e16_4'])><div @class([$__VIEW_ID__ . '-Bdoc2e16_41', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e16_411'])>&#64;sortby</code> / <code @class([$__VIEW_ID__ . '-Bdoc2e16_412'])>&#64;order_by</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e16_42'])>Sắp xếp: <code @class([$__VIEW_ID__ . '-Bdoc2e16_421'])>'&#64;sortby' => ['views' => 'desc', 'id' => 'asc']</code></span><b @class([$__VIEW_ID__ . '-Bdoc2e16_43'])>sắp xếp</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e16_5'])><div @class([$__VIEW_ID__ . '-Bdoc2e16_51', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e16_511'])>&#64;paginate</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e16_52'])>Bật phân trang: <code @class([$__VIEW_ID__ . '-Bdoc2e16_521'])>'&#64;paginate' => 15</code> (trả về LengthAwarePaginator)</span><b @class([$__VIEW_ID__ . '-Bdoc2e16_53'])>phân trang</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e16_6'])><div @class([$__VIEW_ID__ . '-Bdoc2e16_61', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e16_611'])>&#64;limit</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e16_62'])>Giới hạn số lượng hoặc offset: <code @class([$__VIEW_ID__ . '-Bdoc2e16_621'])>'&#64;limit' => 5</code> hoặc <code @class([$__VIEW_ID__ . '-Bdoc2e16_622'])>'&#64;limit' => [10, 5]</code> (skip 10, take 5)</span><b @class([$__VIEW_ID__ . '-Bdoc2e16_63'])>giới hạn</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e16_7'])><div @class([$__VIEW_ID__ . '-Bdoc2e16_71', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e16_711'])>&#64;select</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e16_72'])>Chọn các cột cụ thể: <code @class([$__VIEW_ID__ . '-Bdoc2e16_721'])>'&#64;select' => ['id', 'name', 'avatar']</code></span><b @class([$__VIEW_ID__ . '-Bdoc2e16_73'])>chọn cột</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e16_8'])><div @class([$__VIEW_ID__ . '-Bdoc2e16_81', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e16_811'])>&#64;softdelete</code> / <code @class([$__VIEW_ID__ . '-Bdoc2e16_812'])>&#64;trashed</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e16_82'])>Lấy cả bản ghi đã xoá mềm: <code @class([$__VIEW_ID__ . '-Bdoc2e16_821'])>'&#64;trashed' => true</code></span><b @class([$__VIEW_ID__ . '-Bdoc2e16_83'])>xoá mềm</b></div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc2e17_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e17_1'])>3. MAGIC METHODS</span> Truy vấn theo tên hàm</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e18_'])>Gọi nhanh phương thức tìm kiếm động không cần khai báo.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e19_'])>Hỗ trợ Magic Methods tự động ánh xạ tên cột thành câu lệnh tìm kiếm tương ứng:</p>
            @startMarker('component', 'Bdoc2c3')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_2'))
@verbatim
// Tìm 1 bản ghi đầu tiên khớp thuộc tính
$post = $postRepo->findBySlug('gioi-thieu-saola');
$user = $userRepo->findByEmail('admin&#64;saola.dev');

// Lấy danh sách bản ghi theo thuộc tính
$activePosts = $postRepo->getByStatus('active');
$categoryPosts = $postRepo->getByCategoryId(5);

// Đếm số lượng bản ghi theo thuộc tính
$totalActive = $postRepo->countByStatus('active');
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__2_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_2'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "Ví dụ Magic Methods", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__2_content])
@endMarker('component', 'Bdoc2c3')

            <p @class([$__VIEW_ID__ . '-Bdoc2e20_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e20_1'])>4. GHI DỮ LIỆU</span> CRUDAction</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e21_'])>Thêm, sửa, xoá và kiểm soát lỗi an toàn.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e22_'])>Xử lý toàn bộ thao tác thay đổi dữ liệu kèm theo cơ chế bắt lỗi linh hoạt:</p>
            <div @class([$__VIEW_ID__ . '-Bdoc2e23_', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e23_1'])><div @class([$__VIEW_ID__ . '-Bdoc2e23_11', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e23_111'])>create($data)</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e23_12'])>Tạo mới 1 bản ghi. Tự động gọi qua <code @class([$__VIEW_ID__ . '-Bdoc2e23_121'])>beforeCreate</code>, gán owner và kích hoạt <code @class([$__VIEW_ID__ . '-Bdoc2e23_122'])>afterCreate</code></span><b @class([$__VIEW_ID__ . '-Bdoc2e23_13'])>Tạo mới</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e23_2'])><div @class([$__VIEW_ID__ . '-Bdoc2e23_21', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e23_211'])>update($id, $data)</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e23_22'])>Cập nhật bản ghi theo ID kèm lifecycle hooks</span><b @class([$__VIEW_ID__ . '-Bdoc2e23_23'])>Cập nhật</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e23_3'])><div @class([$__VIEW_ID__ . '-Bdoc2e23_31', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e23_311'])>save($data, $id = null)</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e23_32'])>Cơ chế Upsert thông minh: Nếu có ID thì update, không có ID thì tạo mới</span><b @class([$__VIEW_ID__ . '-Bdoc2e23_33'])>Lưu đa năng</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e23_4'])><div @class([$__VIEW_ID__ . '-Bdoc2e23_41', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e23_411'])>createMany($list)</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e23_42'])>Tạo hàng loạt nhiều bản ghi trong cùng một thao tác</span><b @class([$__VIEW_ID__ . '-Bdoc2e23_43'])>Tạo hàng loạt</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e23_5'])><div @class([$__VIEW_ID__ . '-Bdoc2e23_51', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e23_511'])>delete($id)</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e23_52'])>Xoá bản ghi (tự động dùng Soft Delete nếu model có khai báo)</span><b @class([$__VIEW_ID__ . '-Bdoc2e23_53'])>Xoá</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e23_6'])><div @class([$__VIEW_ID__ . '-Bdoc2e23_61', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e23_611'])>restore($id)</code> · <code @class([$__VIEW_ID__ . '-Bdoc2e23_612'])>forceDelete($id)</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e23_62'])>Khôi phục bản ghi đã xoá mềm hoặc xoá vĩnh viễn khỏi Database</span><b @class([$__VIEW_ID__ . '-Bdoc2e23_63'])>Xoá mềm/Khôi phục</b></div>
            </div>

            <div @class([$__VIEW_ID__ . '-Bdoc2e24_', 'ov-note'])>
                <strong @class([$__VIEW_ID__ . '-Bdoc2e24_1'])>Xử lý lỗi không ném Exception:</strong> Mặc định khi có lỗi, Repository sẽ ném exception. Bạn có thể gọi <code @class([$__VIEW_ID__ . '-Bdoc2e24_2'])>$repo->disableThrowException()</code> để gom lỗi qua <code @class([$__VIEW_ID__ . '-Bdoc2e24_3'])>$repo->getCrudErrorMessage()</code> hoặc <code @class([$__VIEW_ID__ . '-Bdoc2e24_4'])>$repo->getCrudException()</code> — cực kỳ hữu ích khi xử lý import dữ liệu hàng loạt.
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc2e25_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e25_1'])>5. BỘ LỌC REQUEST TỰ ĐỘNG</span> FilterAction</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e26_'])>Tự động chuyển HTTP Request thành SQL Query chuẩn.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e27_'])>Chỉ cần cấu hình các thuộc tính bộ lọc trong Repository, hàm <code @class([$__VIEW_ID__ . '-Bdoc2e27_1'])>getResults($request)</code> sẽ tự động xử lý tìm kiếm, lọc điều kiện, sắp xếp và phân trang từ Query Parameters của URL:</p>
            @startMarker('component', 'Bdoc2c4')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_3'))
@verbatim
class PostRepository extends BaseRepository
{
    protected $model = Post::class;

    // Các cột cho phép tìm kiếm qua ?search= hoặc ?keyword=
    protected $searchable = ['title', 'slug', 'description'];

    // Các cột tự động lọc chính xác qua ?status=active&category_id=5
    protected $whereable = ['status', 'category_id', 'author_id'];

    // Các cột cho phép sắp xếp qua ?sort=created_at&sort_type=desc
    protected $sortable = ['id', 'title', 'view_count', 'created_at'];

    // Các quan hệ Eloquent cho phép client eager load qua ?with=category,tags
    protected $withable = ['category', 'tags', 'author'];
}
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__3_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_3'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "Repositories/PostRepository.php", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__3_content])
@endMarker('component', 'Bdoc2c4')
            <p @class([$__VIEW_ID__ . '-Bdoc2e28_'])>Trong Controller, bạn chỉ cần gọi <code @class([$__VIEW_ID__ . '-Bdoc2e28_1'])>$this->response()</code> để phục vụ cả SSR HTML lẫn Client SPA JSON:</p>
            @startMarker('component', 'Bdoc2c5')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_4'))
@verbatim
class PostController extends WebController
{
    protected $module = 'posts';

    public function index(Request $request, PostRepository $postRepo)
    {
        // Tự động tìm kiếm, lọc theo whereable, sắp xếp và phân trang ?paginate=15
        $posts = $postRepo->getResults($request);

        // Trả dữ liệu qua $this->response (tự động thương lượng HTML cho SSR và JSON cho SPA)
        return $this->response(['posts' => $posts]);
    }
}
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__4_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_4'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "Controllers/PostController.php", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__4_content])
@endMarker('component', 'Bdoc2c5')

            <p @class([$__VIEW_ID__ . '-Bdoc2e29_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e29_1'])>6. VÒNG ĐỜI & HOOKS</span> Lifecycle Hooks</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e30_'])>Can thiệp và biến đổi dữ liệu trước/sau khi ghi.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e31_'])>Thay vì viết logic rải rác trong Controller, hãy ghi đè các hàm hook ngay trong Repository để tập trung xử lý dữ liệu:</p>
            @startMarker('component', 'Bdoc2c6')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_5'))
@verbatim
class PostRepository extends BaseRepository
{
    protected $model = Post::class;

    /**
     * Hook chạy trước khi tạo mới bản ghi
     */
    public function beforeCreate(array $data)
    {
        if (empty($data['slug'])) {
            $data['slug'] = \Illuminate\Support\Str::slug($data['title']);
        }
        $data['author_id'] = auth()->id();
        return $data;
    }

    /**
     * Hook chạy sau khi tạo mới thành công
     */
    public function afterCreate($post)
    {
        // Gửi thông báo, xóa cache danh mục hoặc ghi log hoạt động
        event(new PostCreatedEvent($post));
    }

    /**
     * Hook chạy trước khi cập nhật bản ghi
     */
    public function beforeUpdate(array $data, $id)
    {
        if (isset($data['title']) && empty($data['slug'])) {
            $data['slug'] = \Illuminate\Support\Str::slug($data['title']);
        }
        return $data;
    }
}
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__5_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_5'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "Repositories/PostRepository.php", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__5_content])
@endMarker('component', 'Bdoc2c6')

            <p @class([$__VIEW_ID__ . '-Bdoc2e32_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e32_1'])>7. PHÂN QUYỀN CHỦ SỞ HỮU</span> OwnerAction</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e33_'])>Giới hạn phạm vi dữ liệu theo Actor và User ID.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e34_'])><code @class([$__VIEW_ID__ . '-Bdoc2e34_1'])>OwnerAction</code> tự động gán điều kiện <code @class([$__VIEW_ID__ . '-Bdoc2e34_2'])>WHERE user_id = ?</code> vào tất cả các câu truy vấn Select, Update, Delete để ngăn chặn truy cập trái phép giữa các người dùng:</p>
            @startMarker('component', 'Bdoc2c7')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_6'))
@verbatim
// Chỉ xem hoặc chỉnh sửa bài viết của chính người dùng hiện tại
$userPosts = $postRepo->setActor('client')
                      ->setOwnerID(auth()->id())
                      ->getResults($request);

// Bỏ qua lọc owner khi chạy tác vụ của quản trị viên (Admin)
$allPosts = $postRepo->unOwnerQuery()->getResults($request);
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__6_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_6'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "Sử dụng OwnerAction", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__6_content])
@endMarker('component', 'Bdoc2c7')

            <p @class([$__VIEW_ID__ . '-Bdoc2e35_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e35_1'])>8. CACHING TỰ ĐỘNG</span> CacheAction</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e36_'])>Tăng tốc độ truy vấn với bộ nhớ đệm thông minh.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e37_'])>Bật cache cho các truy vấn dữ liệu ít thay đổi chỉ với method <code @class([$__VIEW_ID__ . '-Bdoc2e37_1'])>cache()</code>. Repository sẽ tự động xoá cache liên quan khi có thao tác tạo, sửa, hoặc xoá bản ghi:</p>
            @startMarker('component', 'Bdoc2c8')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_7'))
@verbatim
// Cache kết quả truy vấn trong 3600 giây (1 giờ)
$featuredPosts = $postRepo->cache(3600)->getBy('is_featured', true);
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__7_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_7'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "Sử dụng CacheAction", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__7_content])
@endMarker('component', 'Bdoc2c8')

            <div @class([$__VIEW_ID__ . '-Bdoc2e38_', 'ov-note'])>
                <strong @class([$__VIEW_ID__ . '-Bdoc2e38_1'])>Quy tắc bảo mật đầu ra:</strong> Repository trả về Model hoặc Collection. Hãy bọc dữ liệu qua <a @class([$__VIEW_ID__ . '-Bdoc2e38_2']) @attr(['href' => '/docs/mask'])>Mask</a> trước khi gửi về Client để kiểm soát danh sách các trường được phép hiển thị ra ngoài giao diện.
            </div>
        </div>
    @endblock
