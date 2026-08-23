@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "public")
    @block('content')
        <div @class([$__VIEW_ID__ . '-e085b222', 'docs-shell'])>
            <aside @class([$__VIEW_ID__ . '-6dd03995', 'docs-nav']) @attr(['aria-label' => 'Điều hướng tài liệu'])>
                <div @class([$__VIEW_ID__ . '-b74bada5', 'docs-nav-inner'])>
                    <p @class([$__VIEW_ID__ . '-ab54234c', 'docs-nav-group'])>Bắt đầu</p>
                    <a @class([$__VIEW_ID__ . '-062914f4']) @attr(['href' => '/docs'])>Giới thiệu</a>
                    <a @class([$__VIEW_ID__ . '-0a893371']) @attr(['href' => '/docs/getting-started'])>Cài đặt &amp; route đầu tiên</a>

                    <p @class([$__VIEW_ID__ . '-c065c4e8', 'docs-nav-group'])>Nền tảng</p>
                    <a @class([$__VIEW_ID__ . '-3ce1f1c8']) @attr(['href' => '/docs/architecture'])>Kiến trúc hệ thống</a>
                    <a @class([$__VIEW_ID__ . '-1552bec6']) @attr(['href' => '/docs/contexts'])>Context, module &amp; controller</a>
                    <a @class([$__VIEW_ID__ . '-3465a2f6']) @attr(['href' => '/docs/compiler'])>Compiler &amp; AST</a>

                    <p @class([$__VIEW_ID__ . '-a2d73862', 'docs-nav-group'])>Viết view</p>
                    <a @class([$__VIEW_ID__ . '-1056807b']) @attr(['href' => '/docs/sao-file'])>Cấu trúc file .sao</a>
                    <a @class([$__VIEW_ID__ . '-aaf2bb19']) @attr(['href' => '/docs/directives'])>Tham chiếu directive</a>
                    <a @class([$__VIEW_ID__ . '-845643d8']) @attr(['href' => '/docs/reactivity'])>State &amp; reactivity</a>

                    <p @class([$__VIEW_ID__ . '-7b830f85', 'docs-nav-group'])>Runtime</p>
                    <a @class([$__VIEW_ID__ . '-7c745152']) @attr(['href' => '/docs/runtime'])>Runtime &amp; hydration</a>
                    <a @class([$__VIEW_ID__ . '-95c8cced']) @attr(['href' => '/docs/lifecycle'])>Vòng đời &amp; marker</a>
                    <a @class([$__VIEW_ID__ . '-8f7edaa9']) @attr(['href' => '/docs/router'])>Router &amp; dịch vụ client</a>

                    <p @class([$__VIEW_ID__ . '-d9d2333b', 'docs-nav-group'])>Vận hành</p>
                    <a @class([$__VIEW_ID__ . '-d0dcf667']) @attr(['href' => '/docs/build'])>Build, CLI &amp; cấu hình</a>
                    <a @class([$__VIEW_ID__ . '-154b13f1']) @attr(['href' => '/docs/status'])>Giới hạn đã biết</a>

                    <p @class([$__VIEW_ID__ . '-841d8c6d', 'docs-nav-group'])>Thực hành</p>
                    <a @class([$__VIEW_ID__ . '-76df8a6b']) @attr(['href' => '/components'])>Thư viện component</a>
                </div>
            </aside>

            <main @class([$__VIEW_ID__ . '-8f86a03a', 'docs-main'])>
                @startMarker('blockoutlet', '5dfc1d0d')
                @useBlock('doc')
                @endMarker('blockoutlet', '5dfc1d0d')
            </main>
        </div>
    @endblock
