@exec($__ONE_COMPONENT_REGISTRY__ = ['code-window' => 'web.components.code-window']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])>
                <p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>09</span> BACKEND</p>
                <h1 @class([$__VIEW_ID__ . '-Bdoc112'])>Validator và dữ liệu vào.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-Bdoc121'])>Validator của Saola bọc quanh validator của Laravel nhưng biết tới repository, nên kiểm tra được cả những ràng buộc phải hỏi cơ sở dữ liệu mới trả lời được.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-Bdoc2', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-Bdoc21', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc211'])>KHAI BÁO</span> Rule ở một chỗ</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc22'])>Một lớp cho một bộ ràng buộc.</h2>
            @startMarker('component', 'Bdoc2c1')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_0'))
@verbatim
class UserValidator extends Validator
{
    public function rules()
    {
        return [
            'name'  => 'required|max:255',
            'email' => 'required|email',
        ];
    }
}
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_0'))
@include('web.components.code-window', ['label' => "PHP", 'title' => "app/Modules/User/Validators/UserValidator.php", 'lang' => "php", '__ONE_CHILDREN_CONTENT__' => $__code_window__0_content])
@endMarker('component', 'Bdoc2c1')
            <p @class([$__VIEW_ID__ . '-Bdoc23'])>Constructor nhận <code @class([$__VIEW_ID__ . '-Bdoc231'])>$request</code> và <code @class([$__VIEW_ID__ . '-Bdoc232'])>$repository</code>. Nhờ vậy rule viết được điều kiện dựa trên dữ liệu đang có, không chỉ dựa trên payload.</p>

            <p @class([$__VIEW_ID__ . '-Bdoc24', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc241'])>VÒNG ĐỜI</span> Ba bước dựng rule</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc25'])>Rule mặc định trước, rule riêng sau, rồi mở rộng.</h2>
            <div @class([$__VIEW_ID__ . '-Bdoc26', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc261'])><div @class([$__VIEW_ID__ . '-Bdoc2611', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc26111'])>init()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2612'])>Gắn request và repository vào validator</span><b @class([$__VIEW_ID__ . '-Bdoc2613'])>1</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc262'])><div @class([$__VIEW_ID__ . '-Bdoc2621', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc26211'])>addDefaultRules()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2622'])>Nạp ràng buộc chung của hệ thống</span><b @class([$__VIEW_ID__ . '-Bdoc2623'])>2</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc263'])><div @class([$__VIEW_ID__ . '-Bdoc2631', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc26311'])>extends()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2632'])>Chỗ để module cắm thêm rule của riêng nó</span><b @class([$__VIEW_ID__ . '-Bdoc2633'])>3</b></div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc27', 'ov-sub'])>Method có sẵn</p>
            <div @class([$__VIEW_ID__ . '-Bdoc28', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc281'])><div @class([$__VIEW_ID__ . '-Bdoc2811', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28111'])>addRule()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2812'])>Thêm rule lẻ vào bộ đang dựng</span><b @class([$__VIEW_ID__ . '-Bdoc2813'])>rule</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc282'])><div @class([$__VIEW_ID__ . '-Bdoc2821', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28211'])>checkUniqueProp()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2822'])>Kiểm tra trùng qua repository, biết loại trừ chính bản ghi đang sửa</span><b @class([$__VIEW_ID__ . '-Bdoc2823'])>db</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc283'])><div @class([$__VIEW_ID__ . '-Bdoc2831', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28311'])>checkRef()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2832'])>Xác nhận khoá ngoại trỏ tới bản ghi có thật</span><b @class([$__VIEW_ID__ . '-Bdoc2833'])>db</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc284'])><div @class([$__VIEW_ID__ . '-Bdoc2841', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28411'])>checkArrDate()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2842'])>Ràng buộc khoảng ngày dạng mảng</span><b @class([$__VIEW_ID__ . '-Bdoc2843'])>định dạng</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc285'])><div @class([$__VIEW_ID__ . '-Bdoc2851', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc28511'])>parseInputs()</code></div><span @class([$__VIEW_ID__ . '-Bdoc2852'])>Chuẩn hoá payload trước khi đưa vào rule</span><b @class([$__VIEW_ID__ . '-Bdoc2853'])>chuẩn hoá</b></div>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc29', 'ov-note'])>
                Validator có <code @class([$__VIEW_ID__ . '-Bdoc291'])>__get</code> và <code @class([$__VIEW_ID__ . '-Bdoc292'])>__call</code> chuyển tiếp thẳng sang <code @class([$__VIEW_ID__ . '-Bdoc293'])>$request</code>, nên trong rule cứ viết <code @class([$__VIEW_ID__ . '-Bdoc294'])>$this-&gt;email</code> hay <code @class([$__VIEW_ID__ . '-Bdoc295'])>$this-&gt;input('email')</code> như đang cầm request.
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc2e10_', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc2e10_1'])>ĐẶT Ở ĐÂU</span> Request hay Validator</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e11_'])>FormRequest cho ràng buộc tĩnh, Validator cho ràng buộc cần dữ liệu.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e12_'])>Module <code @class([$__VIEW_ID__ . '-Bdoc2e12_1'])>User</code> có sẵn <code @class([$__VIEW_ID__ . '-Bdoc2e12_2'])>CreateUserRequest</code> và <code @class([$__VIEW_ID__ . '-Bdoc2e12_3'])>UpdateUserRequest</code> — dạng FormRequest quen thuộc của Laravel, hợp với ràng buộc không cần hỏi cơ sở dữ liệu. Khi rule phải tra bảng, hoặc phải dùng chung giữa nhiều context, đưa xuống Validator để service gọi lại được.</p>

            <p @class([$__VIEW_ID__ . '-Bdoc2e13_', 'ov-note'])>
                Đây mới là phần giới thiệu. Ví dụ chạy được của từng ràng buộc nằm trong <code @class([$__VIEW_ID__ . '-Bdoc2e13_1'])>examples</code> của core.
            </p>
        </div>
    @endblock
