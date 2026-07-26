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
                            <span @class([$__VIEW_ID__ . '-243f01a4'])><span @class([$__VIEW_ID__ . '-2ef62801', 'logo-saola'])>Saola</span><span @class([$__VIEW_ID__ . '-94cdf200', 'logo-labs'])>Labs</span></span>
                        </a>

                        <div @class([$__VIEW_ID__ . '-2fb3213a', 'site-header-collapse'])>
                            <nav @class([$__VIEW_ID__ . '-204de517', 'site-nav']) @attr(['aria-label' => 'Điều hướng chính'])>
                                <a @class([$__VIEW_ID__ . '-335b5477']) @attr(['href' => '/about'])>Giải pháp</a>
                                <a @class([$__VIEW_ID__ . '-e113090f']) @attr(['href' => '/#workflow'])>Quy trình</a>
                                <a @class([$__VIEW_ID__ . '-a39b7ac3']) @attr(['href' => '/todo-list'])>Demo</a>
                                <a @class([$__VIEW_ID__ . '-cbd37804']) @attr(['href' => '/contact'])>Liên hệ</a>
                            </nav>
                            <div @class([$__VIEW_ID__ . '-28d409a0', 'site-header-actions'])>
                                <a @class([$__VIEW_ID__ . '-d0e4541c', 'site-login-link']) @attr(['href' => '/about'])>Tài liệu</a>
                                <a @class([$__VIEW_ID__ . '-3a993caf', 'site-header-cta']) @attr(['href' => '/todo-list'])>Dùng thử miễn phí <span @class([$__VIEW_ID__ . '-5e766cf2'])>→</span></a>
                            </div>
                        </div>

                        <details @class([$__VIEW_ID__ . '-f7bb58a5', 'site-mobile-menu'])>
                            <summary @class([$__VIEW_ID__ . '-be2a93ed']) @attr(['aria-label' => 'Mở menu'])>☰</summary>
                            <nav @class([$__VIEW_ID__ . '-528595cc']) @attr(['aria-label' => 'Điều hướng di động'])>
                                <a @class([$__VIEW_ID__ . '-40de4ca1']) @attr(['href' => '/about'])>Giải pháp</a>
                                <a @class([$__VIEW_ID__ . '-40e7e83c']) @attr(['href' => '/#workflow'])>Quy trình</a>
                                <a @class([$__VIEW_ID__ . '-0bb0fa4a']) @attr(['href' => '/todo-list'])>Demo</a>
                                <a @class([$__VIEW_ID__ . '-1c3fd1b3']) @attr(['href' => '/contact'])>Liên hệ</a>
                                <a @class([$__VIEW_ID__ . '-164d727e', 'site-header-cta']) @attr(['href' => '/todo-list'])>Dùng thử miễn phí →</a>
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
                <div @class([$__VIEW_ID__ . '-78967ff6'])>
                    <span @class([$__VIEW_ID__ . '-f2453137', 'brand-mark', 'brand-mark-small'])>S</span>
                    <p @class([$__VIEW_ID__ . '-891dca6b'])>Demo hydration-first được xây dựng bằng Laravel, Blade và Saola views.</p>
                </div>
                <nav @class([$__VIEW_ID__ . '-0a88c436']) @attr(['aria-label' => 'Legal navigation'])>
                    <a @class([$__VIEW_ID__ . '-4534b347']) @attr(['href' => '/privacy'])>Privacy</a>
                    <a @class([$__VIEW_ID__ . '-930b2d8d']) @attr(['href' => '/terms'])>Terms</a>
                    <span @class([$__VIEW_ID__ . '-1ccde8e3'])>© 2026 SaoLabs</span>
                </nav>
            </footer>
        </div>
    @endblock
