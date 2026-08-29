@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "base")
@once('saola-css-1vuyy6c')
<link rel="stylesheet" href="/static/saola/demo-site.css">
@endonce
    @block('shell')
        <div @class([$__VIEW_ID__ . '-Bshell1', 'site-frame'])>
            <header @class([$__VIEW_ID__ . '-Bshell11', 'site-header'])>
                <div @class([$__VIEW_ID__ . '-Bshell111', 'site-shell'])>
                    <div @class([$__VIEW_ID__ . '-Bshell1111', 'site-header-row'])>
                        <a @class([$__VIEW_ID__ . '-Bshell11111', 'site-logo']) @attr(['href' => '/', 'aria-label' => 'Trang chủ Saola'])>
                            <span @class([$__VIEW_ID__ . '-Bshell111111', 'site-logo-mark']) @attr(['aria-hidden' => 'true'])><img @class([$__VIEW_ID__ . '-Bshell1111111']) @attr(['src' => '/static/saola/brand/saola-mark.svg', 'alt' => ''])></span>
                            <span @class([$__VIEW_ID__ . '-Bshell111112'])><span @class([$__VIEW_ID__ . '-Bshell1111121', 'logo-saola'])>Sao</span><span @class([$__VIEW_ID__ . '-Bshell1111122', 'logo-labs'])>Labs</span></span>
                        </a>

                        <div @class([$__VIEW_ID__ . '-Bshell11112', 'site-header-collapse'])>
                            <nav @class([$__VIEW_ID__ . '-Bshell111121', 'site-nav']) @attr(['aria-label' => 'Điều hướng chính'])>
                                <a @class([$__VIEW_ID__ . '-Bshell1111211']) @attr(['href' => '/docs'])>Tài liệu</a>
                                <a @class([$__VIEW_ID__ . '-Bshell1111212']) @attr(['href' => '/demo'])>Demo</a>
                                <a @class([$__VIEW_ID__ . '-Bshell1111213']) @attr(['href' => '/about'])>Dự án</a>
                            </nav>
                            <div @class([$__VIEW_ID__ . '-Bshell111122', 'site-header-actions'])>
                                <a @class([$__VIEW_ID__ . '-Bshell1111221', 'site-header-cta']) @attr(['href' => '/docs/getting-started'])>Bắt đầu <span @class([$__VIEW_ID__ . '-Bshell11112211'])>↗</span></a>
                            </div>
                        </div>

                        <details @class([$__VIEW_ID__ . '-Bshell11113', 'site-mobile-menu'])>
                            <summary @class([$__VIEW_ID__ . '-Bshell111131']) @attr(['aria-label' => 'Mở menu'])>☰</summary>
                            <nav @class([$__VIEW_ID__ . '-Bshell111132']) @attr(['aria-label' => 'Điều hướng di động'])>
                                <a @class([$__VIEW_ID__ . '-Bshell1111321']) @attr(['href' => '/docs'])>Tài liệu</a>
                                <a @class([$__VIEW_ID__ . '-Bshell1111322']) @attr(['href' => '/demo'])>Interactive demo</a>
                                <a @class([$__VIEW_ID__ . '-Bshell1111323']) @attr(['href' => '/todo-list'])>Todo workspace</a>
                                <a @class([$__VIEW_ID__ . '-Bshell1111324']) @attr(['href' => '/roster'])>Roster sync</a>
                                <a @class([$__VIEW_ID__ . '-Bshell1111325']) @attr(['href' => '/about'])>Về dự án</a>
                                <a @class([$__VIEW_ID__ . '-Bshell1111326', 'site-header-cta']) @attr(['href' => '/docs/getting-started'])>Bắt đầu →</a>
                            </nav>
                        </details>
                    </div>
                </div>
            </header>

            <main @class([$__VIEW_ID__ . '-Bshell12', 'site-main'])>
                @startMarker('blockoutlet', 'Bshell12b')
                @useBlock('content')
                @endMarker('blockoutlet', 'Bshell12b')
            </main>

            <footer @class([$__VIEW_ID__ . '-Bshell13', 'site-footer'])>
                <div @class([$__VIEW_ID__ . '-Bshell131', 'footer-intro'])>
                    <a @class([$__VIEW_ID__ . '-Bshell1311', 'site-logo', 'site-logo-footer']) @attr(['href' => '/', 'aria-label' => 'Trang chủ Saola'])>
                        <span @class([$__VIEW_ID__ . '-Bshell13111', 'site-logo-mark']) @attr(['aria-hidden' => 'true'])><img @class([$__VIEW_ID__ . '-Bshell131111']) @attr(['src' => '/static/saola/brand/saola-mark.svg', 'alt' => ''])></span>
                        <span @class([$__VIEW_ID__ . '-Bshell13112'])><span @class([$__VIEW_ID__ . '-Bshell131121', 'logo-saola'])>Sao</span><span @class([$__VIEW_ID__ . '-Bshell131122', 'logo-labs'])>Labs</span></span>
                    </a>
                    <p @class([$__VIEW_ID__ . '-Bshell1312'])>Kiến trúc multi-context modular trên Laravel: module tự khai báo route, context tách middleware và bundle, view sinh cả Blade lẫn JavaScript.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bshell132', 'footer-map'])>
                    <div @class([$__VIEW_ID__ . '-Bshell1321'])><span @class([$__VIEW_ID__ . '-Bshell13211'])>TÀI LIỆU</span><a @class([$__VIEW_ID__ . '-Bshell13212']) @attr(['href' => '/docs'])>Mục lục</a><a @class([$__VIEW_ID__ . '-Bshell13213']) @attr(['href' => '/docs/getting-started'])>Bắt đầu</a><a @class([$__VIEW_ID__ . '-Bshell13214']) @attr(['href' => '/docs/directives'])>Directive</a><a @class([$__VIEW_ID__ . '-Bshell13215']) @attr(['href' => '/docs/status'])>Giới hạn đã biết</a></div>
                    <div @class([$__VIEW_ID__ . '-Bshell1322'])><span @class([$__VIEW_ID__ . '-Bshell13221'])>THỰC HÀNH</span><a @class([$__VIEW_ID__ . '-Bshell13222']) @attr(['href' => '/components'])>Thư viện component</a><a @class([$__VIEW_ID__ . '-Bshell13223']) @attr(['href' => '/demo'])>Interactive demo</a><a @class([$__VIEW_ID__ . '-Bshell13224']) @attr(['href' => '/roster'])>Roster sync</a><a @class([$__VIEW_ID__ . '-Bshell13225']) @attr(['href' => '/about'])>Về Saola</a></div>
                    <div @class([$__VIEW_ID__ . '-Bshell1323'])><span @class([$__VIEW_ID__ . '-Bshell13231'])>PHÁP LÝ</span><a @class([$__VIEW_ID__ . '-Bshell13232']) @attr(['href' => '/privacy'])>Privacy</a><a @class([$__VIEW_ID__ . '-Bshell13233']) @attr(['href' => '/terms'])>Terms</a><small @class([$__VIEW_ID__ . '-Bshell13234'])>© 2026 SaoLabs</small></div>
                </div>
            </footer>
        </div>
    @endblock
