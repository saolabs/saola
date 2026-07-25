@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "base")
@once('saola-css-1vuyy6c')
<link rel="stylesheet" href="/static/saola/demo-site.css">
@endonce
    @block('shell')
        <div @class([$__VIEW_ID__ . '-c8b05ef4', 'site-frame'])>
            <header @class([$__VIEW_ID__ . '-9f2695cc', 'site-header'])>
                <a @class([$__VIEW_ID__ . '-138f1d60', 'brand']) @attr(['href' => '/', 'aria-label' => 'Saola Focus home'])>
                    <span @class([$__VIEW_ID__ . '-34d419ad', 'brand-mark'])>S</span>
                    <span @class([$__VIEW_ID__ . '-7ff06320'])><strong @class([$__VIEW_ID__ . '-6cf07da1'])>SAOLA</strong><small @class([$__VIEW_ID__ . '-2569eb56'])>FOCUS SYSTEM</small></span>
                </a>
                <nav @class([$__VIEW_ID__ . '-18b494db', 'site-nav']) @attr(['aria-label' => 'Main navigation'])>
                    <a @class([$__VIEW_ID__ . '-52889c2e']) @attr(['href' => '/'])>Home</a>
                    <a @class([$__VIEW_ID__ . '-eba69cb0']) @attr(['href' => '/about'])>About</a>
                    <a @class([$__VIEW_ID__ . '-9b32b734']) @attr(['href' => '/contact'])>Contact</a>
                    <a @class([$__VIEW_ID__ . '-a2ce2905', 'nav-cta']) @attr(['href' => '/todo-list'])>Open workspace <span @class([$__VIEW_ID__ . '-8409b33b'])>↗</span></a>
                </nav>
            </header>

            <main @class([$__VIEW_ID__ . '-045faade', 'site-main'])>
                @startMarker('blockoutlet', '20269ffe')
                @useBlock('content')
                @endMarker('blockoutlet', '20269ffe')
            </main>

            <footer @class([$__VIEW_ID__ . '-78151b5a', 'site-footer'])>
                <div @class([$__VIEW_ID__ . '-78967ff6'])>
                    <span @class([$__VIEW_ID__ . '-f2453137', 'brand-mark', 'brand-mark-small'])>S</span>
                    <p @class([$__VIEW_ID__ . '-891dca6b'])>A hydration-first demonstration built with Laravel, Blade and Saola views.</p>
                </div>
                <nav @class([$__VIEW_ID__ . '-0a88c436']) @attr(['aria-label' => 'Legal navigation'])>
                    <a @class([$__VIEW_ID__ . '-4534b347']) @attr(['href' => '/privacy'])>Privacy</a>
                    <a @class([$__VIEW_ID__ . '-930b2d8d']) @attr(['href' => '/terms'])>Terms</a>
                    <span @class([$__VIEW_ID__ . '-1ccde8e3'])>© 2026 SaoLabs</span>
                </nav>
            </footer>
        </div>
    @endblock
