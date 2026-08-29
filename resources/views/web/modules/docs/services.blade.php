@exec($__ONE_COMPONENT_REGISTRY__ = ['code-window' => 'web.components.code-window']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])>
                <p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>06</span> BACKEND</p>
                <h1 @class([$__VIEW_ID__ . '-Bdoc112'])>Service và tầng nghiệp vụ.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-Bdoc121'])>Controller chỉ nhận request và trả response. Toàn bộ quy tắc nghiệp vụ nằm ở Service, và Service không bao giờ chạm thẳng vào bảng — nó đi qua Repository.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-Bdoc2', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-Bdoc21', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc211'])>PHÂN TẦNG</span> Bốn lớp, mỗi lớp một việc</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc22'])>Mỗi tầng chỉ biết tầng ngay dưới nó.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc23'])>Đường đi của một request luôn theo thứ tự này. Nhảy cóc một tầng là chỗ code bắt đầu rối: controller gọi thẳng model, hay service tự viết query.</p>
            <div @class([$__VIEW_ID__ . '-Bdoc24', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc241'])><div @class([$__VIEW_ID__ . '-Bdoc2411', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24111'])>Controller</code></div><span @class([$__VIEW_ID__ . '-Bdoc2412'])>Nhận request, gọi service, trả response. Không chứa quy tắc nghiệp vụ.</span><b @class([$__VIEW_ID__ . '-Bdoc2413'])>HTTP</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc242'])><div @class([$__VIEW_ID__ . '-Bdoc2421', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24211'])>Service</code></div><span @class([$__VIEW_ID__ . '-Bdoc2422'])>Quy tắc nghiệp vụ, điều phối nhiều repository, phát sự kiện.</span><b @class([$__VIEW_ID__ . '-Bdoc2423'])>nghiệp vụ</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc243'])><div @class([$__VIEW_ID__ . '-Bdoc2431', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24311'])>Repository</code></div><span @class([$__VIEW_ID__ . '-Bdoc2432'])>Mọi truy vấn dữ liệu. Nơi duy nhất biết tới model.</span><b @class([$__VIEW_ID__ . '-Bdoc2433'])>dữ liệu</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc244'])><div @class([$__VIEW_ID__ . '-Bdoc2441', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc24411'])>Model</code></div><span @class([$__VIEW_ID__ . '-Bdoc2442'])>Bảng, quan hệ, cast. Eloquent thuần cộng vài trait của core.</span><b @class([$__VIEW_ID__ . '-Bdoc2443'])>ORM</b></div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc25', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc251'])>BINDING</span> Interface trước, cài đặt sau</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc26'])>Module tự bind interface của mình.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc27'])>Controller nhận <code @class([$__VIEW_ID__ . '-Bdoc271'])>UserServiceInterface</code> qua constructor, không nhận lớp cụ thể. Đổi cài đặt chỉ sửa một dòng ở provider, không đụng chỗ dùng.</p>
            @startMarker('component', 'Bdoc2c1')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_0'))
@verbatim
public function register(): void
{
    $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
    $this->app->bind(UserServiceInterface::class, UserService::class);
}
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_0'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "app/Modules/User/ModuleServiceProvider.php", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__0_content])
@endMarker('component', 'Bdoc2c1')

            <p @class([$__VIEW_ID__ . '-Bdoc28', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc281'])>SERVICE</span> Nơi nghiệp vụ sống</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc29'])>Service nhận repository, không nhận model.</h2>
            @startMarker('component', 'Bdoc2c2')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_1'))
@verbatim
class UserService extends Service implements UserServiceInterface
{
    public function __construct(private UserRepositoryInterface $repo) {}

    public function create(array $data)
    {
        static::on('user.creating', function ($data) { return $data; });
        $user = $this->repo->create($data);
        static::trigger('user.created', $user);
        return $user;
    }
}
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__1_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_1'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "app/Modules/User/Services/UserService.php", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__1_content])
@endMarker('component', 'Bdoc2c2')
            <p @class([$__VIEW_ID__ . '-Bdoc2e10_'])><code @class([$__VIEW_ID__ . '-Bdoc2e10_1'])>Saola\Core\Services\Service</code> mang sẵn ba trait: <code @class([$__VIEW_ID__ . '-Bdoc2e10_2'])>EventMethods</code> cho <code @class([$__VIEW_ID__ . '-Bdoc2e10_3'])>on()</code>/<code @class([$__VIEW_ID__ . '-Bdoc2e10_4'])>trigger()</code>, <code @class([$__VIEW_ID__ . '-Bdoc2e10_5'])>MagicMethods</code> cho truy cập động, và <code @class([$__VIEW_ID__ . '-Bdoc2e10_6'])>SmartInit</code> để khởi tạo phụ thuộc mà không phải viết constructor dài.</p>
            <div @class([$__VIEW_ID__ . '-Bdoc2e11_', 'ov-note'])>
                <code @class([$__VIEW_ID__ . '-Bdoc2e11_1'])>static::on()</code> đăng ký hook theo TÊN sự kiện chứ không theo instance — module khác nghe được <code @class([$__VIEW_ID__ . '-Bdoc2e11_2'])>user.created</code> mà không cần biết <code @class([$__VIEW_ID__ . '-Bdoc2e11_3'])>UserService</code> tồn tại. Đây là đường ghép nối giữa các module.
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc2e12_', 'ov-sub'])>Service có sẵn trong core</p>
            <div @class([$__VIEW_ID__ . '-Bdoc2e13_', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc2e13_1'])><div @class([$__VIEW_ID__ . '-Bdoc2e13_11', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e13_111'])>BaseService</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e13_12'])>Service kèm <code @class([$__VIEW_ID__ . '-Bdoc2e13_121'])>CRUDMethods</code>, dùng khi module chỉ cần CRUD tiêu chuẩn.</span><b @class([$__VIEW_ID__ . '-Bdoc2e13_13'])>core</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e13_2'])><div @class([$__VIEW_ID__ . '-Bdoc2e13_21', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e13_211'])>ModuleService</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e13_22'])>Đọc registry module: slug, prefix, quyền, tiêu đề hiển thị.</span><b @class([$__VIEW_ID__ . '-Bdoc2e13_23'])>core</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e13_3'])><div @class([$__VIEW_ID__ . '-Bdoc2e13_31', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e13_311'])>ViewService</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e13_32'])>Phân giải đường dẫn view theo context đang phục vụ.</span><b @class([$__VIEW_ID__ . '-Bdoc2e13_33'])>core</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc2e13_4'])><div @class([$__VIEW_ID__ . '-Bdoc2e13_41', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc2e13_411'])>ThemeService</code></div><span @class([$__VIEW_ID__ . '-Bdoc2e13_42'])>Chọn theme và đường dẫn asset tương ứng.</span><b @class([$__VIEW_ID__ . '-Bdoc2e13_43'])>core</b></div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc2e14_', 'ov-note'])>
                Service <strong @class([$__VIEW_ID__ . '-Bdoc2e14_1'])>không</strong> trả về model thô cho tầng trên. Trả Mask hoặc mảng đã lọc — xem <a @class([$__VIEW_ID__ . '-Bdoc2e14_2']) @attr(['href' => '/docs/mask'])>Mask &amp; collection</a>.
            </p>
        </div>
    @endblock
