@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])>
                <p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>03</span> VIẾT VIEW</p>
                <h1 @class([$__VIEW_ID__ . '-Bdoc112'])>Cấu trúc file .sao.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-Bdoc121'])>Bốn phần theo đúng thứ tự: khai báo, template, script setup và style. Wrapper của template quyết định bạn viết cú pháp kiểu JavaScript hay kiểu PHP.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-Bdoc2', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-Bdoc21', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc211'])>SFC</span> Single-file component</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc22'])>Bốn phần, theo đúng thứ tự.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc23'])>Một file <code @class([$__VIEW_ID__ . '-Bdoc231'])>.sao</code> gồm khai báo ở đầu file, template, <code @class([$__VIEW_ID__ . '-Bdoc232'])>&lt;script setup&gt;</code> và <code @class([$__VIEW_ID__ . '-Bdoc233'])>&lt;style&gt;</code>. Wrapper của template quyết định syntax mode.</p>
            <div @class([$__VIEW_ID__ . '-Bdoc24', 'stack-diagram'])>
                <article @class([$__VIEW_ID__ . '-Bdoc241'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2411'])>01 / DECLARATIONS</span>
                    <strong @class([$__VIEW_ID__ . '-Bdoc2412'])>Đầu file</strong>
                    <p @class([$__VIEW_ID__ . '-Bdoc2413'])><code @class([$__VIEW_ID__ . '-Bdoc24131', 'directive-token'])>import</code>&nbsp; <code @class([$__VIEW_ID__ . '-Bdoc24132', 'directive-token'])>vars</code>&nbsp; <code @class([$__VIEW_ID__ . '-Bdoc24133', 'directive-token'])>props</code>&nbsp; <code @class([$__VIEW_ID__ . '-Bdoc24134', 'directive-token'])>states</code>&nbsp; <code @class([$__VIEW_ID__ . '-Bdoc24135', 'directive-token'])>const</code>&nbsp; <code @class([$__VIEW_ID__ . '-Bdoc24136', 'directive-token'])>let</code>&nbsp; <code @class([$__VIEW_ID__ . '-Bdoc24137', 'directive-token'])>await</code> — giữ nguyên thứ tự khai báo.</p>
                </article>
                <article @class([$__VIEW_ID__ . '-Bdoc242'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2421'])>02 / TEMPLATE</span>
                    <strong @class([$__VIEW_ID__ . '-Bdoc2422'])>HTML + directive</strong>
                    <p @class([$__VIEW_ID__ . '-Bdoc2423'])><code @class([$__VIEW_ID__ . '-Bdoc24231'])>&lt;template&gt;</code> hoặc <code @class([$__VIEW_ID__ . '-Bdoc24232'])>&lt;sao:blade&gt;</code> bật <em @class([$__VIEW_ID__ . '-Bdoc24233'])>modern syntax</em> kiểu JS; <code @class([$__VIEW_ID__ . '-Bdoc24234'])>&lt;blade&gt;</code> là legacy pass-through cú pháp PHP.</p>
                </article>
                <article @class([$__VIEW_ID__ . '-Bdoc243'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2431'])>03 / SCRIPT SETUP</span>
                    <strong @class([$__VIEW_ID__ . '-Bdoc2432'])>Logic phía client</strong>
                    <p @class([$__VIEW_ID__ . '-Bdoc2433'])>Export default một object method. Method đọc thẳng state và setter trong closure, không cần <code @class([$__VIEW_ID__ . '-Bdoc24331'])>this.</code>. <code @class([$__VIEW_ID__ . '-Bdoc24332'])>lang="ts"</code> thì output ra <code @class([$__VIEW_ID__ . '-Bdoc24333'])>.ts</code>.</p>
                </article>
                <article @class([$__VIEW_ID__ . '-Bdoc244'])>
                    <span @class([$__VIEW_ID__ . '-Bdoc2441'])>04 / STYLE</span>
                    <strong @class([$__VIEW_ID__ . '-Bdoc2442'])>CSS của view</strong>
                    <p @class([$__VIEW_ID__ . '-Bdoc2443'])><code @class([$__VIEW_ID__ . '-Bdoc24431'])>&lt;style scoped&gt;</code> gắn theo subtree của view, <code @class([$__VIEW_ID__ . '-Bdoc24432'])>&lt;style&gt;</code> là global. <code @class([$__VIEW_ID__ . '-Bdoc24433'])>&lt;link rel="stylesheet"&gt;</code> ở cấp file thành asset có ref-count.</p>
                </article>
            </div>
            <p @class([$__VIEW_ID__ . '-Bdoc25', 'ov-sub'])>Modern syntax so với legacy</p>
            <div @class([$__VIEW_ID__ . '-Bdoc26', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc261'])><div @class([$__VIEW_ID__ . '-Bdoc2611', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc26111'])>Biến</code></div><span @class([$__VIEW_ID__ . '-Bdoc2612'])>modern <code @class([$__VIEW_ID__ . '-Bdoc26121'])>user.name</code> — legacy <code @class([$__VIEW_ID__ . '-Bdoc26122'])>$user-&gt;name</code></span><b @class([$__VIEW_ID__ . '-Bdoc2613'])>expression</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc262'])><div @class([$__VIEW_ID__ . '-Bdoc2621', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc26211'])>Vòng lặp</code></div><span @class([$__VIEW_ID__ . '-Bdoc2622'])>modern <code @class([$__VIEW_ID__ . '-Bdoc26221'])>items as item</code> — legacy <code @class([$__VIEW_ID__ . '-Bdoc26222'])>$items as $item</code></span><b @class([$__VIEW_ID__ . '-Bdoc2623'])>control</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc263'])><div @class([$__VIEW_ID__ . '-Bdoc2631', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc26311'])>Object</code></div><span @class([$__VIEW_ID__ . '-Bdoc2632'])>modern <code @class([$__VIEW_ID__ . '-Bdoc26321'])>&#123;key: value&#125;</code> — legacy <code @class([$__VIEW_ID__ . '-Bdoc26322'])>['key' =&gt; $value]</code></span><b @class([$__VIEW_ID__ . '-Bdoc2633'])>literal</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc264'])><div @class([$__VIEW_ID__ . '-Bdoc2641', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc26411'])>Nối chuỗi</code></div><span @class([$__VIEW_ID__ . '-Bdoc2642'])>modern template literal — legacy toán tử <code @class([$__VIEW_ID__ . '-Bdoc26421'])>.</code></span><b @class([$__VIEW_ID__ . '-Bdoc2643'])>string</b></div>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc27', 'ov-note'])>
                Preprocessor chạy hai lượt: lượt một thu thập bảng ký hiệu, lượt hai biến đổi biểu thức. Nhờ vậy nó biết <code @class([$__VIEW_ID__ . '-Bdoc271'])>user</code> là state hay biến vòng lặp trước khi quyết định dịch thành <code @class([$__VIEW_ID__ . '-Bdoc272'])>$user</code> hay giữ nguyên.
            </div>
        </div>

        <a @class([$__VIEW_ID__ . '-Bdoc3', 'doc-next']) @attr(['href' => '/docs/directives'])>
            <div @class([$__VIEW_ID__ . '-Bdoc31'])><span @class([$__VIEW_ID__ . '-Bdoc311'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-Bdoc312'])>Tham chiếu directive</strong></div>
            <span @class([$__VIEW_ID__ . '-Bdoc32', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
