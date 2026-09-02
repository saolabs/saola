@exec($__ONE_COMPONENT_REGISTRY__ = ['code-window' => 'web.components.code-window']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])>
                <p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>08</span> BACKEND</p>
                <h1 @class([$__VIEW_ID__ . '-Bdoc112'])>Mask, model và collection.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-Bdoc121'])>Model quản lý cấu trúc bảng và truy vấn cơ sở dữ liệu. Mask là lớp mặt nạ đại diện (Proxy/Decorator) bọc ngoài Model để kiểm soát dữ liệu xuất ra ngoài, map các quan hệ sang Mask tương ứng và cung cấp các hàm tiện ích an toàn cho View.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-Bdoc2', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-Bdoc21', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc211'])>01. BẢN CHẤT KIẾN TRÚC</span> Model vs Mask</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc22'])>Mask là lớp mặt nạ đại diện bảo vệ Model.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc23'])>Trong kiến trúc Saola, Model không bao giờ được trả thô trực tiếp ra View hoặc API. Thay vào đó, <strong @class([$__VIEW_ID__ . '-Bdoc231'])>Mask</strong> đóng vai trò là một Proxy an toàn bao bọc lấy Model:</p>

            <div @class([$__VIEW_ID__ . '-Bdoc24', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc241'])><div @class([$__VIEW_ID__ . '-Bdoc2411', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24111'])>Model (Eloquent)</code></div><span @class([$__VIEW_ID__ . '-Bdoc2412'])>Tầng dữ liệu nội bộ. Quản lý schema bảng, fillable, hidden, relationships và query builder. Chỉ hoạt động trong tầng Backend / Repository.</span><b @class([$__VIEW_ID__ . '-Bdoc2413'])>Internal Data</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc242'])><div @class([$__VIEW_ID__ . '-Bdoc2421', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24211'])>Mask (Proxy/Decorator)</code></div><span @class([$__VIEW_ID__ . '-Bdoc2422'])>Mặt nạ đại diện cho một bản ghi Model. Mở quyền gọi các method an toàn qua <code @class([$__VIEW_ID__ . '-Bdoc24221'])>allow()</code>, chuyển đổi quan hệ liên kết qua <code @class([$__VIEW_ID__ . '-Bdoc24222'])>map()</code>, và thêm trường dẫn xuất qua <code @class([$__VIEW_ID__ . '-Bdoc24223'])>onLoaded()</code>.</span><b @class([$__VIEW_ID__ . '-Bdoc2423'])>Safe View Model</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc243'])><div @class([$__VIEW_ID__ . '-Bdoc2431', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24311'])>MaskCollection</code></div><span @class([$__VIEW_ID__ . '-Bdoc2432'])>Tập hợp bọc danh sách nhiều Mask bản ghi, hỗ trợ duyệt mảng, phân trang và tương thích hoàn hảo với JSON Serialization.</span><b @class([$__VIEW_ID__ . '-Bdoc2433'])>List Wrapper</b></div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc25', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc251'])>02. VÒNG ĐỜI MASK</span> 4 Hook quan trọng</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc26'])>Chu kỳ khởi tạo và nạp dữ liệu của Mask.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc27'])>Khi một Model được nạp vào Mask, chu trình xử lý diễn ra theo 4 bước tuần tự:</p>

            <div @class([$__VIEW_ID__ . '-Bdoc28', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc281'])><div @class([$__VIEW_ID__ . '-Bdoc2811', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28111'])>init()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2812'])>Chạy đầu tiên — nơi gọi <code @class([$__VIEW_ID__ . '-Bdoc28121'])>$this->allow(...)</code> để mở quyền truy cập method an toàn của Model, và <code @class([$__VIEW_ID__ . '-Bdoc28122'])>$this->map(...)</code> để định nghĩa Mask cho các quan hệ liên kết (Relations).</span><b @class([$__VIEW_ID__ . '-Bdoc2813'])>Bước 1</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc282'])><div @class([$__VIEW_ID__ . '-Bdoc2821', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28211'])>onBeforeLoadRelations()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2822'])>Chạy trước khi nạp các quan hệ dữ liệu liên kết.</span><b @class([$__VIEW_ID__ . '-Bdoc2823'])>Bước 2</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc283'])><div @class([$__VIEW_ID__ . '-Bdoc2831', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28311'])>onLoaded()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2832'])>Chạy sau khi dữ liệu Model và các relation đã được nạp xong — nơi tính toán trường dẫn xuất, format chuỗi, decode JSON metadata.</span><b @class([$__VIEW_ID__ . '-Bdoc2833'])>Bước 3</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc284'])><div @class([$__VIEW_ID__ . '-Bdoc2841', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28411'])>onCompleted() / __lock()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2842'])>Chốt lại đối tượng và khoá bảo vệ (Lock). Không cho phép thay đổi dữ liệu sau bước này.</span><b @class([$__VIEW_ID__ . '-Bdoc2843'])>Bước 4</b></div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc29', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc291'])>03. VÍ DỤ THỰC TẾ</span> Định nghĩa một Mask hoàn chỉnh</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e10_'])>Cấu trúc của một lớp Mask trong Module.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e11_'])>Dưới đây là ví dụ thực tế của <code @class([$__VIEW_ID__ . '-Bdoc2e11_1'])>PostMask</code> xử lý quan hệ Category, Author, Tags, Metadata và các hàm tính toán nghiệp vụ:</p>

            @startMarker('component', 'Bdoc2c1')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_0'))
@verbatim
namespace App\Modules\Posts\Masks;

use Saola\Core\Masks\Mask;
use App\Modules\Categories\Masks\CategoryMask;
use App\Modules\Users\Masks\AuthorMask;
use App\Modules\Tags\Masks\TagCollection;
use App\Modules\Comments\Masks\CommentCollection;
use App\Modules\Posts\Repositories\PostRepository;

class PostMask extends Mask
{
    public $meta = [];

    /**
     * 1. init(): Khai báo quyền truy cập và map quan hệ
     */
    protected function init()
    {
        // Cho phép View gọi trực tiếp các method an toàn từ Model
        $this->allow([
            'getViewUrl', 'getFullTitle', 'getSeoKeywords', 
            'getFeaturedImage', 'getThumbnail', 'timeAgo', 'dateFormat'
        ]);

        // Map các quan hệ (Eloquent Relations) sang Mask / Collection tương ứng
        $this->map([
            'category'        => CategoryMask::class,
            'author'          => AuthorMask::class,
            'tags'            => TagCollection::class,
            'comments'        => CommentCollection::class,
            'publishComments' => CommentCollection::class,
        ]);
    }

    /**
     * 2. onLoaded(): Xử lý sau khi dữ liệu & quan hệ đã nạp
     */
    protected function onLoaded()
    {
        $this->name = $this->title;

        // Xử lý metadata JSON nếu có
        if ($metadatas = $this->relation('metadatas')) {
            $jsf = $this->model->getJsonFields();
            foreach ($metadatas as $m) {
                $value = in_array($m->name, $jsf) ? json_decode($m->value, true) : $m->value;
                $this->meta[$m->name] = $value;
            }
        }

        // Tính toán các trường dẫn xuất
        $this->image_url = $this->getFeaturedImage();
        $this->reading_time = max(1, ceil(str_word_count(strip_tags($this->content ?? '')) / 200)) . ' phút đọc';
    }

    /**
     * 3. Các method nghiệp vụ tiện ích trực tiếp trên Mask
     */
    public function getRelated(int $limit = 6)
    {
        return app(PostRepository::class)
            ->mode('mask')
            ->where('id', '!=', $this->id)
            ->where('category_id', $this->category_id)
            ->limit($limit)
            ->get();
    }

    public function next()
    {
        return app(PostRepository::class)
            ->mode('mask')
            ->where('id', '>', $this->id)
            ->where('category_id', $this->category_id)
            ->orderBy('id', 'ASC')
            ->first();
    }
}
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_0'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "app/Modules/Posts/Masks/PostMask.php", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__0_content])
@endMarker('component', 'Bdoc2c1')

            <p @class([$__VIEW_ID__ . '-Bdoc2e12_', 'ov-sub'])>Khai báo MaskCollection cho danh sách</p>
            <p @class([$__VIEW_ID__ . '-Bdoc2e13_'])>Khi truy vấn danh sách nhiều bài viết, <code @class([$__VIEW_ID__ . '-Bdoc2e13_1'])>PostCollection</code> tự động quản lý từng phần tử dưới dạng <code @class([$__VIEW_ID__ . '-Bdoc2e13_2'])>PostMask</code>:</p>

            @startMarker('component', 'Bdoc2c2')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_1'))
@verbatim
namespace App\Modules\Posts\Masks;

use Saola\Core\Masks\MaskCollection;

class PostCollection extends MaskCollection
{
    // Chỉ định Mask đại diện cho mỗi phần tử
    protected $mask = PostMask::class;
}
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__1_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_1'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "app/Modules/Posts/Masks/PostCollection.php", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__1_content])
@endMarker('component', 'Bdoc2c2')

            <p @class([$__VIEW_ID__ . '-Bdoc2e14_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e14_1'])>04. TÍCH HỢP REPOSITORY</span> Chế độ mode('mask')</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e15_'])>Khai báo và kích hoạt Mask trong Repository.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e16_'])>Repository quản lý việc chuyển đổi giữa Eloquent Model gốc và Mask thông qua thuộc tính <code @class([$__VIEW_ID__ . '-Bdoc2e16_1'])>$maskClass</code> và phương thức <code @class([$__VIEW_ID__ . '-Bdoc2e16_2'])>mode('mask')</code>:</p>

            @startMarker('component', 'Bdoc2c3')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_2'))
@verbatim
namespace App\Modules\Posts\Repositories;

use Saola\Core\Repositories\BaseRepository;
use App\Modules\Posts\Models\Post;
use App\Modules\Posts\Masks\PostMask;
use App\Modules\Posts\Masks\PostCollection;

class PostRepository extends BaseRepository
{
    /**
     * Khai báo Mask và Collection tương ứng cho Repository
     */
    protected $maskClass = PostMask::class;
    protected $maskCollectionClass = PostCollection::class;

    public function getModel(): string
    {
        return Post::class;
    }
}
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__2_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_2'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "app/Modules/Posts/Repositories/PostRepository.php", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__2_content])
@endMarker('component', 'Bdoc2c3')

            <p @class([$__VIEW_ID__ . '-Bdoc2e17_', 'ov-sub'])>Cách Controller truy vấn và trả về Mask</p>
            <p @class([$__VIEW_ID__ . '-Bdoc2e18_'])>Trong Controller, chỉ cần kích hoạt <code @class([$__VIEW_ID__ . '-Bdoc2e18_1'])>->mode('mask')</code> để mọi kết quả trả về đều là Mask an toàn sẵn sàng đưa sang View:</p>

            @startMarker('component', 'Bdoc2c4')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_3'))
@verbatim
namespace App\Modules\Posts\Http\Controllers\Web;

use App\Http\Controllers\WebController;
use App\Modules\Posts\Repositories\PostRepository;
use Illuminate\Http\Request;

class PostController extends WebController
{
    public function __construct(
        protected PostRepository $postRepository
    ) {
        // Kích hoạt mode mask cho toàn bộ repository trong controller
        $this->postRepository->mode('mask');
    }

    public function index()
    {
        // Trả về PostCollection chứa danh sách các PostMask
        $posts = $this->postRepository->paginate(12);

        return $this->response([
            'title' => 'Tin tức mới nhất',
            'posts' => $posts,
        ]);
    }

    public function detail(string $slug)
    {
        // Trả về một instance PostMask
        $post = $this->postRepository->detail(['slug' => $slug]);

        if (!$post) {
            return $this->view('errors.404');
        }

        return $this->response([
            'title' => $post->title,
            'post'  => $post,
        ]);
    }
}
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__3_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_3'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "app/Modules/Posts/Http/Controllers/Web/PostController.php", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__3_content])
@endMarker('component', 'Bdoc2c4')

            <p @class([$__VIEW_ID__ . '-Bdoc2e19_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e19_1'])>05. TIÊU THỤ TRONG VIEW</span> Sử dụng Mask trong file .sao</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e20_'])>Truy cập thuộc tính, quan hệ và gọi method trên View.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e21_'])>Do Mask hiện thực <code @class([$__VIEW_ID__ . '-Bdoc2e21_1'])>ArrayAccess</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e21_2'])>Countable</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e21_3'])>IteratorAggregate</code> và <code @class([$__VIEW_ID__ . '-Bdoc2e21_4'])>JsonSerializable</code>, template <code @class([$__VIEW_ID__ . '-Bdoc2e21_5'])>.sao</code> có thể đọc dữ liệu và gọi hàm rất tự nhiên:</p>

            @startMarker('component', 'Bdoc2c5')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_4'))
@verbatim
&#64;props({
    title: '',
    post: {}
})

&lt;template&gt;
    &#64;extends(__layout__ + "public")

    &#64;block('content')
        &lt;article class="post-detail"&gt;
            &lt;header&gt;
                &lt;h1&gt;&#123;&#123; post.title &#125;&#125;&lt;/h1&gt;
                
                &lt;div class="meta"&gt;
                    &lt;span&gt;Tác giả: &#123;&#123; post.author.name &#125;&#125;&lt;/span&gt;
                    &lt;span&gt;Chuyên mục: &#123;&#123; post.category.name &#125;&#125;&lt;/span&gt;
                    &lt;span&gt;&#123;&#123; post.reading_time &#125;&#125;&lt;/span&gt;
                    &lt;span&gt;Đăng &#123;&#123; post.timeAgo() &#125;&#125;&lt;/span&gt;
                &lt;/div&gt;
            &lt;/header&gt;

            &lt;div class="content"&gt;
                &#123;!! post.content !!&#125;
            &lt;/div&gt;

            &lt;!-- Lấy danh sách bài viết liên quan trực tiếp từ helper của Mask --&gt;
            &lt;section class="related"&gt;
                &lt;h3&gt;Bài viết cùng chuyên mục&lt;/h3&gt;
                &lt;div class="grid"&gt;
                    &#64;foreach(post.getRelated(4) as item)
                        &#64;key(item.id)
                        &lt;a href="&#123;&#123; item.getViewUrl() &#125;&#125;" class="card"&gt;
                            &lt;img src="&#123;&#123; item.image_url &#125;&#125;" alt="&#123;&#123; item.title &#125;&#125;" /&gt;
                            &lt;h4&gt;&#123;&#123; item.title &#125;&#125;&lt;/h4&gt;
                        &lt;/a&gt;
                    &#64;endforeach
                &lt;/div&gt;
            &lt;/section&gt;
        &lt;/article&gt;
    &#64;endblock
&lt;/template&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__4_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_4'))
@include('web.components.code-window', ['label' => "SAOLA", 'title' => "resources/saola/web/views/modules/posts/detail.sao", 'lang' => "html", '__ONE_CHILDREN_CONTENT__' => $__code_window__4_content])
@endMarker('component', 'Bdoc2c5')

            <div @class([$__VIEW_ID__ . '-Bdoc2e22_', 'ov-note'])>
                <strong @class([$__VIEW_ID__ . '-Bdoc2e22_1'])>Null-Safety với EmptyMask &amp; Nothing:</strong> Nếu quan hệ hoặc bản ghi không tồn tại (ví dụ <code @class([$__VIEW_ID__ . '-Bdoc2e22_2'])>$post->author</code> là null), Mask tự động trả về <code @class([$__VIEW_ID__ . '-Bdoc2e22_3'])>EmptyMask</code> hoặc <code @class([$__VIEW_ID__ . '-Bdoc2e22_4'])>Nothing</code> thay vì <code @class([$__VIEW_ID__ . '-Bdoc2e22_5'])>null</code>. Điều này giúp các biểu thức như <code @class([$__VIEW_ID__ . '-Bdoc2e22_6'])>&#123;&#123; post.author.name &#125;&#125;</code> trên template không bao giờ bị crash với lỗi <em @class([$__VIEW_ID__ . '-Bdoc2e22_7'])>"Call to a member function on null"</em>.
            </div>
        </div>

        <a @class([$__VIEW_ID__ . '-Bdoc3', 'doc-next']) @attr(['href' => '/docs/validator'])>
            <div @class([$__VIEW_ID__ . '-Bdoc31'])><span @class([$__VIEW_ID__ . '-Bdoc311'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-Bdoc312'])>Form Request &amp; Validation</strong></div>
            <span @class([$__VIEW_ID__ . '-Bdoc32', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
