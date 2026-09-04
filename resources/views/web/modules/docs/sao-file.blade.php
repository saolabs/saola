@exec($__ONE_COMPONENT_REGISTRY__ = ['code-block' => 'web.components.code-block']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])>
                <p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>03</span> VIẾT VIEW</p>
                <h1 @class([$__VIEW_ID__ . '-Bdoc112'])>Cấu trúc file .sao.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-Bdoc121'])>Một file <code @class([$__VIEW_ID__ . '-Bdoc1211'])>.sao</code> là Single-File Component (SFC) gồm 4 phần theo đúng thứ tự: Khai báo đầu file, Template giao diện, Script setup xử lý logic và Style.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-Bdoc2', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-Bdoc21', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc211'])>SFC</span> Single-file component</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc22'])>Bốn phần, theo đúng thứ tự.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc23'])>Một file <code @class([$__VIEW_ID__ . '-Bdoc231'])>.sao</code> tổ chức toàn bộ khai báo ở đầu file, template giao diện, logic <code @class([$__VIEW_ID__ . '-Bdoc232'])>&lt;script setup&gt;</code> và <code @class([$__VIEW_ID__ . '-Bdoc233'])>&lt;style&gt;</code> trong cùng một file duy nhất:</p>

            <div @class([$__VIEW_ID__ . '-Bdoc24', 'stack-diagram'])>
                <article @class([$__VIEW_ID__ . '-Bdoc241'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2411'])>01 / DECLARATIONS</span>
                    <strong @class([$__VIEW_ID__ . '-Bdoc2412'])>Đầu file</strong>
                    <p @class([$__VIEW_ID__ . '-Bdoc2413'])><code @class([$__VIEW_ID__ . '-Bdoc24131', 'directive-token'])>import</code>&nbsp; <code @class([$__VIEW_ID__ . '-Bdoc24132', 'directive-token'])>vars</code>&nbsp; <code @class([$__VIEW_ID__ . '-Bdoc24133', 'directive-token'])>props</code>&nbsp; <code @class([$__VIEW_ID__ . '-Bdoc24134', 'directive-token'])>states</code>&nbsp; <code @class([$__VIEW_ID__ . '-Bdoc24135', 'directive-token'])>const</code>&nbsp; <code @class([$__VIEW_ID__ . '-Bdoc24136', 'directive-token'])>let</code>&nbsp; <code @class([$__VIEW_ID__ . '-Bdoc24137', 'directive-token'])>await</code> — giữ nguyên thứ tự khai báo chuẩn.</p>
                </article>
                <article @class([$__VIEW_ID__ . '-Bdoc242'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2421'])>02 / TEMPLATE</span>
                    <strong @class([$__VIEW_ID__ . '-Bdoc2422'])>HTML + Directives</strong>
                    <p @class([$__VIEW_ID__ . '-Bdoc2423'])><code @class([$__VIEW_ID__ . '-Bdoc24231'])>&lt;template&gt;</code> hoặc <code @class([$__VIEW_ID__ . '-Bdoc24232'])>&lt;sao:blade&gt;</code> kích hoạt <em @class([$__VIEW_ID__ . '-Bdoc24233'])>modern syntax</em> (cú pháp JS hiện đại); <code @class([$__VIEW_ID__ . '-Bdoc24234'])>&lt;blade&gt;</code> là legacy pass-through cú pháp PHP Blade truyền thống.</p>
                </article>
                <article @class([$__VIEW_ID__ . '-Bdoc243'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2431'])>03 / SCRIPT SETUP</span>
                    <strong @class([$__VIEW_ID__ . '-Bdoc2432'])>Logic Client Runtime</strong>
                    <p @class([$__VIEW_ID__ . '-Bdoc2433'])>Export default một object method. Hàm đọc/ghi trực tiếp reactive state và setter trong closure mà không cần dùng tiền tố <code @class([$__VIEW_ID__ . '-Bdoc24331'])>this.</code>.</p>
                </article>
                <article @class([$__VIEW_ID__ . '-Bdoc244'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2441'])>04 / STYLE</span>
                    <strong @class([$__VIEW_ID__ . '-Bdoc2442'])>CSS của View</strong>
                    <p @class([$__VIEW_ID__ . '-Bdoc2443'])><code @class([$__VIEW_ID__ . '-Bdoc24431'])>&lt;style scoped&gt;</code> tự động cô lập CSS theo subtree của view; <code @class([$__VIEW_ID__ . '-Bdoc24432'])>&lt;style&gt;</code> áp dụng global cho toàn trang. Cùng chỗ này khai báo được asset ngoài: <code @class([$__VIEW_ID__ . '-Bdoc24433'])>&lt;link rel="stylesheet"&gt;</code> và <code @class([$__VIEW_ID__ . '-Bdoc24434'])>&lt;script src&gt;</code> — compiler dịch sang <code @class([$__VIEW_ID__ . '-Bdoc24435'])>&#64;addCssLink</code>/<code @class([$__VIEW_ID__ . '-Bdoc24436'])>&#64;addScriptSrc</code> để thẻ ra đúng <code @class([$__VIEW_ID__ . '-Bdoc24437'])>&lt;head&gt;</code>, không trùng, và CSS được gỡ khi rời trang.</p>
                </article>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc25', 'ov-sub'])>Modern syntax so với legacy</p>
            <p @class([$__VIEW_ID__ . '-Bdoc26'])>Thẻ bao bọc template quyết định phong cách cú pháp biểu thức:</p>

            <div @class([$__VIEW_ID__ . '-Bdoc27', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc271'])><div @class([$__VIEW_ID__ . '-Bdoc2711', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27111'])>Truy cập biến</code></div><span @class([$__VIEW_ID__ . '-Bdoc2712'])>Modern: <code @class([$__VIEW_ID__ . '-Bdoc27121'])>user.name</code> &nbsp;—&nbsp; Legacy: <code @class([$__VIEW_ID__ . '-Bdoc27122'])>$user-&gt;name</code></span><b @class([$__VIEW_ID__ . '-Bdoc2713'])>expression</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc272'])><div @class([$__VIEW_ID__ . '-Bdoc2721', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27211'])>Vòng lặp</code></div><span @class([$__VIEW_ID__ . '-Bdoc2722'])>Modern: <code @class([$__VIEW_ID__ . '-Bdoc27221'])>items as item</code> &nbsp;—&nbsp; Legacy: <code @class([$__VIEW_ID__ . '-Bdoc27222'])>$items as $item</code></span><b @class([$__VIEW_ID__ . '-Bdoc2723'])>control</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc273'])><div @class([$__VIEW_ID__ . '-Bdoc2731', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27311'])>Object Literal</code></div><span @class([$__VIEW_ID__ . '-Bdoc2732'])>Modern: <code @class([$__VIEW_ID__ . '-Bdoc27321'])>&#123;key: value&#125;</code> &nbsp;—&nbsp; Legacy: <code @class([$__VIEW_ID__ . '-Bdoc27322'])>['key' =&gt; $value]</code></span><b @class([$__VIEW_ID__ . '-Bdoc2733'])>literal</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc274'])><div @class([$__VIEW_ID__ . '-Bdoc2741', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27411'])>Nối chuỗi</code></div><span @class([$__VIEW_ID__ . '-Bdoc2742'])>Modern: Template literal <code @class([$__VIEW_ID__ . '-Bdoc27421'])>`Hello ${name}`</code> &nbsp;—&nbsp; Legacy: <code @class([$__VIEW_ID__ . '-Bdoc27422'])>'Hello ' . $name</code></span><b @class([$__VIEW_ID__ . '-Bdoc2743'])>string</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc275'])><div @class([$__VIEW_ID__ . '-Bdoc2751', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc27511'])>Toán tử điều kiện</code></div><span @class([$__VIEW_ID__ . '-Bdoc2752'])>Modern: <code @class([$__VIEW_ID__ . '-Bdoc27521'])>item.isActive ? 'active' : ''</code> &nbsp;—&nbsp; Legacy: <code @class([$__VIEW_ID__ . '-Bdoc27522'])>$item-&gt;isActive ? 'active' : ''</code></span><b @class([$__VIEW_ID__ . '-Bdoc2753'])>operator</b></div>
            </div>

            <div @class([$__VIEW_ID__ . '-Bdoc28', 'ov-note'])>
                <strong @class([$__VIEW_ID__ . '-Bdoc281'])>Cơ chế Preprocessor:</strong> Trình biên dịch Saola phân tích cú pháp theo 2 lượt: Lượt 1 thu thập bảng ký hiệu định danh (bóc tách <code @class([$__VIEW_ID__ . '-Bdoc282'])>&#64;vars</code>, <code @class([$__VIEW_ID__ . '-Bdoc283'])>&#64;props</code>, <code @class([$__VIEW_ID__ . '-Bdoc284'])>&#64;states</code>). Lượt 2 biến đổi biểu thức template. Nhờ vậy, Saola tự động suy luận chính xác biến nào là Server Variable (sinh ra <code @class([$__VIEW_ID__ . '-Bdoc285'])>$var</code> ở Blade) và biến nào là Client Reactive State trước khi tạo mã.
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc29', 'kicker']) @attr(['style' => 'margin-top: 56px;'])><span @class([$__VIEW_ID__ . '-Bdoc291'])>VÍ DỤ TỔNG HỢP</span> Full Component</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc2e10_'])>Mã nguồn mẫu hoàn chỉnh</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc2e11_'])>Dưới đây là một file <code @class([$__VIEW_ID__ . '-Bdoc2e11_1'])>.sao</code> thực tế kết hợp hài hòa cả 4 phân vùng đã nêu trên:</p>

            @startMarker('component', 'Bdoc2c1')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_0'))
@verbatim
<!-- 1. KHAI BÁO ĐẦU FILE (Giữ đúng thứ tự) -->
&#64;import('web.components.user-avatar')
&#64;vars(currentUser, title = 'Hồ sơ người dùng')
&#64;props({ theme: 'dark', showBio: true })
&#64;states({ count: 0, isEditing: false })
&#64;const(MAX_BIO_LENGTH = 250)
&#64;let(canEdit = currentUser.id === 1)

<!-- 2. TEMPLATE (Giao diện + Directives) -->
&lt;template&gt;
    &#64;extends(__layout__ + "public")
    &#64;block('content')
        &lt;div class="profile-card profile-card--{{ theme }}"&gt;
            &lt;user-avatar user="{{ currentUser }}" size="large" /&gt;
            &lt;h2&gt;{{ currentUser.name }}&lt;/h2&gt;
            &lt;p class="title"&gt;{{ title }}&lt;/p&gt;

            &#64;if(showBio)
                &lt;p class="bio"&gt;{{ currentUser.bio }}&lt;/p&gt;
            &#64;endif

            &lt;div class="actions"&gt;
                &lt;button &#64;click(setCount(count + 1))&gt;
                    👍 Lượt thích: {{ count }}
                &lt;/button&gt;
                &#64;if(canEdit)
                    &lt;button &#64;click(setIsEditing(!isEditing))&gt;
                        {{ isEditing ? 'Đóng' : 'Chỉnh sửa' }}
                    &lt;/button&gt;
                &#64;endif
            &lt;/div&gt;
        &lt;/div&gt;
    &#64;endblock
&lt;/template&gt;

<!-- 3. SCRIPT SETUP (Logic tương tác Client) -->
&lt;script setup lang="ts"&gt;
    export default {
        started() {
            console.log('Component mounted for user:', currentUser.name);
        },
        customMethod() {
            setCount(0);
        }
    };
&lt;/script&gt;

<!-- 4. STYLE (CSS Scoped hoặc Global) -->
&lt;style scoped&gt;
    .profile-card {
        padding: 24px;
        border-radius: 12px;
        background: #ffffff;
    }
    .profile-card--dark {
        background: #18181b;
        color: #ffffff;
    }
    .actions {
        display: flex;
        gap: 12px;
        margin-top: 16px;
    }
&lt;/style&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_0'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__0_content])
@endMarker('component', 'Bdoc2c1')
        </div>

        <a @class([$__VIEW_ID__ . '-Bdoc3', 'doc-next']) @attr(['href' => '/docs/directives'])>
            <div @class([$__VIEW_ID__ . '-Bdoc31'])><span @class([$__VIEW_ID__ . '-Bdoc311'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-Bdoc312'])>Tham chiếu directive</strong></div>
            <span @class([$__VIEW_ID__ . '-Bdoc32', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
