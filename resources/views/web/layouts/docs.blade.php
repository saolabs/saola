@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "public")
    @block('content')
        <div @class([$__VIEW_ID__ . '-Bcontent1', 'docs-shell'])>
            <aside @class([$__VIEW_ID__ . '-Bcontent11', 'docs-nav']) @attr(['aria-label' => 'Điều hướng tài liệu'])>
                <div @class([$__VIEW_ID__ . '-Bcontent111', 'docs-nav-inner'])>
                    <p @class([$__VIEW_ID__ . '-Bcontent1111', 'docs-nav-group'])>Bắt đầu</p>
                    <a @class([$__VIEW_ID__ . '-Bcontent1112']) @attr(['href' => '/docs'])>Giới thiệu</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent1113']) @attr(['href' => '/docs/getting-started'])>Cài đặt &amp; route đầu tiên</a>

                    <p @class([$__VIEW_ID__ . '-Bcontent1114', 'docs-nav-group'])>Nền tảng</p>
                    <a @class([$__VIEW_ID__ . '-Bcontent1115']) @attr(['href' => '/docs/architecture'])>Kiến trúc hệ thống</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent1116']) @attr(['href' => '/docs/contexts'])>Context, module &amp; controller</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent1117']) @attr(['href' => '/docs/compiler'])>Compiler &amp; AST</a>

                    <p @class([$__VIEW_ID__ . '-Bcontent1118', 'docs-nav-group'])>Backend</p>
                    <a @class([$__VIEW_ID__ . '-Bcontent1119']) @attr(['href' => '/docs/services'])>Service &amp; tầng nghiệp vụ</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e10_']) @attr(['href' => '/docs/repository'])>Repository &amp; truy vấn</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e11_']) @attr(['href' => '/docs/mask'])>Mask, model &amp; collection</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e12_']) @attr(['href' => '/docs/validator'])>Validator &amp; dữ liệu vào</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e13_']) @attr(['href' => '/docs/response'])>Response &amp; đầu ra</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e14_']) @attr(['href' => '/docs/core-kit'])>Hạ tầng lõi</a>

                    <p @class([$__VIEW_ID__ . '-Bcontent111e15_', 'docs-nav-group'])>Viết view</p>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e16_']) @attr(['href' => '/docs/sao-file'])>Cấu trúc file .sao</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e17_']) @attr(['href' => '/docs/directives'])>Tham chiếu directive</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e18_']) @attr(['href' => '/docs/reactivity'])>State &amp; reactivity</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e19_']) @attr(['href' => '/docs/system-vars'])>Biến hệ thống</a>

                    <p @class([$__VIEW_ID__ . '-Bcontent111e20_', 'docs-nav-group'])>Runtime</p>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e21_']) @attr(['href' => '/docs/runtime'])>Runtime &amp; hydration</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e22_']) @attr(['href' => '/docs/lifecycle'])>Vòng đời &amp; marker</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e23_']) @attr(['href' => '/docs/router'])>Router &amp; dịch vụ client</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e24_']) @attr(['href' => '/docs/client-services'])>Dịch vụ phía client</a>

                    <p @class([$__VIEW_ID__ . '-Bcontent111e25_', 'docs-nav-group'])>Vận hành</p>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e26_']) @attr(['href' => '/docs/build'])>Build, CLI &amp; cấu hình</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e27_']) @attr(['href' => '/docs/status'])>Giới hạn đã biết</a>

                    <p @class([$__VIEW_ID__ . '-Bcontent111e28_', 'docs-nav-group'])>Thực hành</p>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e29_']) @attr(['href' => '/components'])>Thư viện component</a>
                </div>
            </aside>

            <main @class([$__VIEW_ID__ . '-Bcontent12', 'docs-main'])>
                @startMarker('blockoutlet', 'Bcontent12b')
                @useBlock('doc')
                @endMarker('blockoutlet', 'Bcontent12b')
            </main>

            <aside @class([$__VIEW_ID__ . '-Bcontent13', 'docs-toc']) @attr(['aria-label' => 'Mục lục nội dung'])>
                <div @class([$__VIEW_ID__ . '-Bcontent131', 'docs-toc-inner'])>
                    <p @class([$__VIEW_ID__ . '-Bcontent1311', 'docs-toc-title'])>Trên trang này</p>
                    <ul @class([$__VIEW_ID__ . '-Bcontent1312', 'docs-toc-list']) @attr(['id' => 'docs-toc-list'])>
                        <!-- Sẽ được populate tự động bằng script hoặc khai báo trong trang -->
                    </ul>
                </div>
            </aside>
        </div>
        <script @class([$__VIEW_ID__ . '-Bcontent2']) @attr(['src' => 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js', 'data-manual' => true])></script>
        <script @class([$__VIEW_ID__ . '-Bcontent3']) @attr(['src' => 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-markup-templating.min.js'])></script>
        <script @class([$__VIEW_ID__ . '-Bcontent4']) @attr(['src' => 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-php.min.js'])></script>
        <script @class([$__VIEW_ID__ . '-Bcontent5']) @attr(['src' => 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-json.min.js'])></script>
        <script @class([$__VIEW_ID__ . '-Bcontent6']) @attr(['src' => 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-typescript.min.js'])></script>
        <script @class([$__VIEW_ID__ . '-Bcontent7']) @attr(['src' => 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-bash.min.js'])></script>
    @endblock
