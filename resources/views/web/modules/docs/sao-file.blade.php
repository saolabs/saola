@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-ff96f7a7', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-15b892a7'])>
                <p @class([$__VIEW_ID__ . '-ab74559e', 'kicker'])><span @class([$__VIEW_ID__ . '-943e8228'])>03</span> VIẾT VIEW</p>
                <h1 @class([$__VIEW_ID__ . '-9abe25a3'])>Cấu trúc file .sao.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-f750a15d', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-2a968179'])>Bốn phần theo đúng thứ tự: khai báo, template, script setup và style. Wrapper của template quyết định bạn viết cú pháp kiểu JavaScript hay kiểu PHP.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-e5195f55', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-a805c5cb', 'kicker'])><span @class([$__VIEW_ID__ . '-a3f20685'])>SFC</span> Single-file component</p>
            <h2 @class([$__VIEW_ID__ . '-c048d2ef'])>Bốn phần, theo đúng thứ tự.</h2>
            <p @class([$__VIEW_ID__ . '-1c642396'])>Một file <code @class([$__VIEW_ID__ . '-34be1ee8'])>.sao</code> gồm khai báo ở đầu file, template, <code @class([$__VIEW_ID__ . '-f254a2ba'])>&lt;script setup&gt;</code> và <code @class([$__VIEW_ID__ . '-81d773d6'])>&lt;style&gt;</code>. Wrapper của template quyết định syntax mode.</p>
            <div @class([$__VIEW_ID__ . '-753dcd15', 'stack-diagram'])>
                <article @class([$__VIEW_ID__ . '-91304c91'])>
                    <span @class([$__VIEW_ID__ . '-7e885331'])>01 / DECLARATIONS</span>
                    <strong @class([$__VIEW_ID__ . '-e84a05ad'])>Đầu file</strong>
                    <p @class([$__VIEW_ID__ . '-43d2830b'])><code @class([$__VIEW_ID__ . '-34b3779f', 'directive-token'])>states</code> <code @class([$__VIEW_ID__ . '-e47da07c', 'directive-token'])>props</code> <code @class([$__VIEW_ID__ . '-abc16b03', 'directive-token'])>const</code> <code @class([$__VIEW_ID__ . '-3141f2c4', 'directive-token'])>let</code> <code @class([$__VIEW_ID__ . '-4965dad1', 'directive-token'])>vars</code> <code @class([$__VIEW_ID__ . '-6b7d6a55', 'directive-token'])>import</code> <code @class([$__VIEW_ID__ . '-d9474672', 'directive-token'])>await</code> — giữ nguyên thứ tự khai báo.</p>
                </article>
                <article @class([$__VIEW_ID__ . '-ccbf766b'])>
                    <span @class([$__VIEW_ID__ . '-d3853391'])>02 / TEMPLATE</span>
                    <strong @class([$__VIEW_ID__ . '-933b627f'])>HTML + directive</strong>
                    <p @class([$__VIEW_ID__ . '-347737c6'])><code @class([$__VIEW_ID__ . '-18a57c95'])>&lt;template&gt;</code> hoặc <code @class([$__VIEW_ID__ . '-9a40eb70'])>&lt;sao:blade&gt;</code> bật <em @class([$__VIEW_ID__ . '-8e4d622a'])>modern syntax</em> kiểu JS; <code @class([$__VIEW_ID__ . '-a97c7615'])>&lt;blade&gt;</code> là legacy pass-through cú pháp PHP.</p>
                </article>
                <article @class([$__VIEW_ID__ . '-bc8cd56a'])>
                    <span @class([$__VIEW_ID__ . '-d2d215a2'])>03 / SCRIPT SETUP</span>
                    <strong @class([$__VIEW_ID__ . '-0561a0b0'])>Logic phía client</strong>
                    <p @class([$__VIEW_ID__ . '-14ae7e44'])>Export default một object method. Method đọc thẳng state và setter trong closure, không cần <code @class([$__VIEW_ID__ . '-00cdbd05'])>this.</code>. <code @class([$__VIEW_ID__ . '-b3ac98d8'])>lang="ts"</code> thì output ra <code @class([$__VIEW_ID__ . '-bc9a5b57'])>.ts</code>.</p>
                </article>
                <article @class([$__VIEW_ID__ . '-fbd955a6'])>
                    <span @class([$__VIEW_ID__ . '-45aeb3d1'])>04 / STYLE</span>
                    <strong @class([$__VIEW_ID__ . '-227f35b3'])>CSS của view</strong>
                    <p @class([$__VIEW_ID__ . '-c06bbe94'])><code @class([$__VIEW_ID__ . '-5b10d6fc'])>&lt;style scoped&gt;</code> gắn theo subtree của view, <code @class([$__VIEW_ID__ . '-587bb499'])>&lt;style&gt;</code> là global. <code @class([$__VIEW_ID__ . '-f43e1601'])>&lt;link rel="stylesheet"&gt;</code> ở cấp file thành asset có ref-count.</p>
                </article>
            </div>
            <p @class([$__VIEW_ID__ . '-259642dc', 'ov-sub'])>Modern syntax so với legacy</p>
            <div @class([$__VIEW_ID__ . '-9193afc2', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-78b78df9'])><div @class([$__VIEW_ID__ . '-258a4832', 'dt-key'])><code @class([$__VIEW_ID__ . '-36abf79b'])>Biến</code></div><span @class([$__VIEW_ID__ . '-7cb74155'])>modern <code @class([$__VIEW_ID__ . '-63060364'])>user.name</code> — legacy <code @class([$__VIEW_ID__ . '-81f88407'])>$user-&gt;name</code></span><b @class([$__VIEW_ID__ . '-bd54b8c0'])>expression</b></div>
                <div @class([$__VIEW_ID__ . '-9203d8dc'])><div @class([$__VIEW_ID__ . '-80a7c663', 'dt-key'])><code @class([$__VIEW_ID__ . '-79141976'])>Vòng lặp</code></div><span @class([$__VIEW_ID__ . '-e3ab42f9'])>modern <code @class([$__VIEW_ID__ . '-ac7eb163'])>items as item</code> — legacy <code @class([$__VIEW_ID__ . '-456bf3b7'])>$items as $item</code></span><b @class([$__VIEW_ID__ . '-af479ec9'])>control</b></div>
                <div @class([$__VIEW_ID__ . '-4fd3ae28'])><div @class([$__VIEW_ID__ . '-81e37a12', 'dt-key'])><code @class([$__VIEW_ID__ . '-e9cc96f9'])>Object</code></div><span @class([$__VIEW_ID__ . '-8ce379a0'])>modern <code @class([$__VIEW_ID__ . '-f0a42fe3'])>&#123;key: value&#125;</code> — legacy <code @class([$__VIEW_ID__ . '-345ed42b'])>['key' =&gt; $value]</code></span><b @class([$__VIEW_ID__ . '-cf4e812d'])>literal</b></div>
                <div @class([$__VIEW_ID__ . '-ab2ed1c2'])><div @class([$__VIEW_ID__ . '-888db24f', 'dt-key'])><code @class([$__VIEW_ID__ . '-40d02c2c'])>Nối chuỗi</code></div><span @class([$__VIEW_ID__ . '-a670a34e'])>modern template literal — legacy toán tử <code @class([$__VIEW_ID__ . '-0adc99dd'])>.</code></span><b @class([$__VIEW_ID__ . '-4ff63249'])>string</b></div>
            </div>
            <div @class([$__VIEW_ID__ . '-f84e1dc6', 'ov-note'])>
                Preprocessor chạy hai lượt: lượt một thu thập bảng ký hiệu, lượt hai biến đổi biểu thức. Nhờ vậy nó biết <code @class([$__VIEW_ID__ . '-790994b0'])>user</code> là state hay biến vòng lặp trước khi quyết định dịch thành <code @class([$__VIEW_ID__ . '-ca7a84d7'])>$user</code> hay giữ nguyên.
            </div>
        </div>

        <a @class([$__VIEW_ID__ . '-ceb15976', 'doc-next']) @attr(['href' => '/docs/directives'])>
            <div @class([$__VIEW_ID__ . '-60f0ac7a'])><span @class([$__VIEW_ID__ . '-b7585c3f'])>Tiếp theo</span><strong @class([$__VIEW_ID__ . '-8767f8f3'])>Tham chiếu directive</strong></div>
            <span @class([$__VIEW_ID__ . '-8287de38', 'button', 'button-primary'])>Đọc tiếp →</span>
        </a>
    @endblock
