@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "base")
@once('saola-css-1vuyy6c')
<link rel="stylesheet" href="/static/saola/demo-site.css">
@endonce
    @block('shell')
        <div @class([$__VIEW_ID__ . '-c8b05ef4', 'site-frame'])>
            <header @class([$__VIEW_ID__ . '-9f2695cc', 'site-header'])>
                <div @class([$__VIEW_ID__ . '-01d00481', 'site-shell'])>
                    <div @class([$__VIEW_ID__ . '-9f34223d', 'site-header-row'])>
                        <a @class([$__VIEW_ID__ . '-8eeecdee', 'site-logo']) @attr(['href' => '/', 'aria-label' => 'Trang chủ Saola'])>
                            <span @class([$__VIEW_ID__ . '-1d2848b8', 'site-logo-mark']) @attr(['aria-hidden' => 'true'])><i @class([$__VIEW_ID__ . '-bcfa3008'])></i><i @class([$__VIEW_ID__ . '-862e33c8'])></i><i @class([$__VIEW_ID__ . '-64d27941'])></i></span>
                            <span @class([$__VIEW_ID__ . '-243f01a4'])><span @class([$__VIEW_ID__ . '-2ef62801', 'logo-saola'])>Sao</span><span @class([$__VIEW_ID__ . '-94cdf200', 'logo-labs'])>Labs</span></span>
                        </a>

                        <div @class([$__VIEW_ID__ . '-2fb3213a', 'site-header-collapse'])>
                            <nav @class([$__VIEW_ID__ . '-204de517', 'site-nav']) @attr(['aria-label' => 'Điều hướng chính'])>
                                <a @class([$__VIEW_ID__ . '-335b5477']) @attr(['href' => '/docs'])>Tài liệu</a>
                                <a @class([$__VIEW_ID__ . '-e113090f']) @attr(['href' => '/components'])>Component</a>
                                <a @class([$__VIEW_ID__ . '-a39b7ac3']) @attr(['href' => '/demo'])>Demo</a>
                                <a @class([$__VIEW_ID__ . '-cbd37804']) @attr(['href' => '/about'])>Dự án</a>
                            </nav>
                            <div @class([$__VIEW_ID__ . '-28d409a0', 'site-header-actions'])>
                                <a @class([$__VIEW_ID__ . '-d0e4541c', 'site-header-cta']) @attr(['href' => '/docs/getting-started'])>Bắt đầu <span @class([$__VIEW_ID__ . '-29a57f86'])>↗</span></a>
                            </div>
                        </div>

                        <details @class([$__VIEW_ID__ . '-f7bb58a5', 'site-mobile-menu'])>
                            <summary @class([$__VIEW_ID__ . '-be2a93ed']) @attr(['aria-label' => 'Mở menu'])>☰</summary>
                            <nav @class([$__VIEW_ID__ . '-528595cc']) @attr(['aria-label' => 'Điều hướng di động'])>
                                <a @class([$__VIEW_ID__ . '-40de4ca1']) @attr(['href' => '/docs'])>Tài liệu</a>
                                <a @class([$__VIEW_ID__ . '-40e7e83c']) @attr(['href' => '/components'])>Thư viện component</a>
                                <a @class([$__VIEW_ID__ . '-0bb0fa4a']) @attr(['href' => '/demo'])>Interactive demo</a>
                                <a @class([$__VIEW_ID__ . '-1c3fd1b3']) @attr(['href' => '/todo-list'])>Todo workspace</a>
                                <a @class([$__VIEW_ID__ . '-164d727e']) @attr(['href' => '/roster'])>Roster sync</a>
                                <a @class([$__VIEW_ID__ . '-3f1f21f7']) @attr(['href' => '/about'])>Về dự án</a>
                                <a @class([$__VIEW_ID__ . '-6edd2967', 'site-header-cta']) @attr(['href' => '/docs/getting-started'])>Bắt đầu →</a>
                            </nav>
                        </details>
                    </div>
                </div>
            </header>

            <main @class([$__VIEW_ID__ . '-045faade', 'site-main'])>
                @startMarker('blockoutlet', '20269ffe')
                @useBlock('content')
                @endMarker('blockoutlet', '20269ffe')
            </main>

            <footer @class([$__VIEW_ID__ . '-78151b5a', 'site-footer'])>
                <div @class([$__VIEW_ID__ . '-78967ff6', 'footer-intro'])>
                    <a @class([$__VIEW_ID__ . '-101959dd', 'site-logo', 'site-logo-footer']) @attr(['href' => '/', 'aria-label' => 'Trang chủ Saola'])>
                        <span @class([$__VIEW_ID__ . '-97b46bf5', 'site-logo-mark']) @attr(['aria-hidden' => 'true'])><i @class([$__VIEW_ID__ . '-79f28304'])></i><i @class([$__VIEW_ID__ . '-2de522bc'])></i><i @class([$__VIEW_ID__ . '-5199c8d1'])></i></span>
                        <span @class([$__VIEW_ID__ . '-788489b8'])><span @class([$__VIEW_ID__ . '-688e5753', 'logo-saola'])>Sao</span><span @class([$__VIEW_ID__ . '-1f828edb', 'logo-labs'])>Labs</span></span>
                    </a>
                    <p @class([$__VIEW_ID__ . '-891dca6b'])>Một nguồn giao diện cho Blade SSR và JavaScript SPA. Được thiết kế quanh Laravel, không đứng bên cạnh Laravel.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-bdc463c6', 'footer-map'])>
                    <div @class([$__VIEW_ID__ . '-540d6e73'])><span @class([$__VIEW_ID__ . '-b2fa4316'])>TÀI LIỆU</span><a @class([$__VIEW_ID__ . '-7a232c26']) @attr(['href' => '/docs'])>Mục lục</a><a @class([$__VIEW_ID__ . '-2a50561e']) @attr(['href' => '/docs/getting-started'])>Bắt đầu</a><a @class([$__VIEW_ID__ . '-efc775a9']) @attr(['href' => '/docs/directives'])>Directive</a><a @class([$__VIEW_ID__ . '-f3aa0818']) @attr(['href' => '/docs/status'])>Giới hạn đã biết</a></div>
                    <div @class([$__VIEW_ID__ . '-dd466dd6'])><span @class([$__VIEW_ID__ . '-6b4d80a6'])>THỰC HÀNH</span><a @class([$__VIEW_ID__ . '-1fe1d8a7']) @attr(['href' => '/components'])>Thư viện component</a><a @class([$__VIEW_ID__ . '-fb901a10']) @attr(['href' => '/demo'])>Interactive demo</a><a @class([$__VIEW_ID__ . '-c81f26ec']) @attr(['href' => '/roster'])>Roster sync</a><a @class([$__VIEW_ID__ . '-39c2319f']) @attr(['href' => '/about'])>Về Saola</a></div>
                    <div @class([$__VIEW_ID__ . '-2aabb1e7'])><span @class([$__VIEW_ID__ . '-21b933ba'])>PHÁP LÝ</span><a @class([$__VIEW_ID__ . '-d863e33f']) @attr(['href' => '/privacy'])>Privacy</a><a @class([$__VIEW_ID__ . '-91ec6987']) @attr(['href' => '/terms'])>Terms</a><small @class([$__VIEW_ID__ . '-d9ca2503'])>© 2026 SaoLabs</small></div>
                </div>
            </footer>
        </div>
    @endblock
