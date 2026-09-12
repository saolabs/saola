@addScriptSrc('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js', ['data-manual' => true])
@addScriptSrc('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-markup-templating.min.js')
@addScriptSrc('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-php.min.js')
@addScriptSrc('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-json.min.js')
@addScriptSrc('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-typescript.min.js')
@addScriptSrc('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-bash.min.js')
@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "public")
    @block('content')
        <div @class([$__VIEW_ID__ . '-Bcontent1', 'docs-shell'])>
            <aside @class([$__VIEW_ID__ . '-Bcontent11', 'docs-nav']) @attr(['aria-label' => 'Điều hướng tài liệu'])>
                <div @class([$__VIEW_ID__ . '-Bcontent111', 'docs-nav-inner'])>
                    <p @class([$__VIEW_ID__ . '-Bcontent1111', 'docs-nav-group'])>Bắt đầu &amp; Nền tảng</p>
                    <a @class([$__VIEW_ID__ . '-Bcontent1112']) @attr(['href' => '/docs'])>Tổng quan &amp; Hợp đồng</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent1113']) @attr(['href' => '/docs/getting-started'])>Cài đặt &amp; route đầu tiên</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent1114']) @attr(['href' => '/docs/architecture'])>Kiến trúc hệ thống 4 tầng</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent1115']) @attr(['href' => '/docs/sao-file'])>Cấu trúc file .sao</a>

                    <p @class([$__VIEW_ID__ . '-Bcontent1116', 'docs-nav-group'])>Cú pháp View &amp; Template</p>
                    <a @class([$__VIEW_ID__ . '-Bcontent1117']) @attr(['href' => '/docs/directives'])>Tham chiếu directive (@)</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent1118']) @attr(['href' => '/docs/tag-directives'])>Directive trên thẻ (#)</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent1119']) @attr(['href' => '/docs/system-vars'])>Biến hệ thống</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e10_']) @attr(['href' => '/docs/helpers'])>Hàm dùng trong biểu thức</a>

                    <p @class([$__VIEW_ID__ . '-Bcontent111e11_', 'docs-nav-group'])>Reactivity &amp; Client Runtime</p>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e12_']) @attr(['href' => '/docs/reactivity'])>State &amp; Reactivity</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e13_']) @attr(['href' => '/docs/lifecycle'])>Vòng đời View &amp; Marker</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e14_']) @attr(['href' => '/docs/runtime'])>Runtime &amp; Hydration</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e15_']) @attr(['href' => '/docs/router'])>Router &amp; PageCache</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e16_']) @attr(['href' => '/docs/client-services'])>Dịch vụ phía client</a>

                    <p @class([$__VIEW_ID__ . '-Bcontent111e17_', 'docs-nav-group'])>Kiến trúc Backend Laravel</p>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e18_']) @attr(['href' => '/docs/contexts'])>Context, module &amp; controller</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e19_']) @attr(['href' => '/docs/services'])>Service &amp; tầng nghiệp vụ</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e20_']) @attr(['href' => '/docs/repository'])>Repository &amp; truy vấn</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e21_']) @attr(['href' => '/docs/mask'])>Mask, model &amp; collection</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e22_']) @attr(['href' => '/docs/validator'])>Validator &amp; dữ liệu vào</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e23_']) @attr(['href' => '/docs/response'])>Response &amp; thương lượng đầu ra</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e24_']) @attr(['href' => '/docs/core-kit'])>Hạ tầng lõi Core Kit</a>

                    <p @class([$__VIEW_ID__ . '-Bcontent111e25_', 'docs-nav-group'])>Công cụ &amp; Vận hành</p>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e26_']) @attr(['href' => '/docs/compiler'])>Compiler &amp; AST Engine</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e27_']) @attr(['href' => '/docs/build'])>Build, CLI &amp; cấu hình</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e28_']) @attr(['href' => '/components'])>Thư viện component</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e29_']) @attr(['href' => '/docs/status'])>Giới hạn kỹ thuật &amp; Roadmap</a>
                </div>
            </aside>

            <main @class([$__VIEW_ID__ . '-Bcontent12', 'docs-main'])>
                @startMarker('blockoutlet', 'Bcontent12b1')
                @useBlock('doc')
                @endMarker('blockoutlet', 'Bcontent12b1')
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
    @endblock
