@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "base")
@once('saola-css-1vuyy6c')
<link rel="stylesheet" href="/static/saola/demo-site.css">
@endonce
    @block('shell')
        <div @class([$__VIEW_ID__ . '-c8b05ef4', 'workspace-frame'])>
            <aside @class([$__VIEW_ID__ . '-ae440fb1', 'workspace-sidebar'])>
                <a @class([$__VIEW_ID__ . '-ee4d154a', 'brand', 'brand-inverse']) @attr(['href' => '/'])>
                    <span @class([$__VIEW_ID__ . '-2081c39e', 'brand-mark'])>S</span>
                    <span @class([$__VIEW_ID__ . '-484b9384'])><strong @class([$__VIEW_ID__ . '-af437a03'])>SAOLA</strong><small @class([$__VIEW_ID__ . '-b04354bc'])>WORKSPACE</small></span>
                </a>
                <div @class([$__VIEW_ID__ . '-f1d88df0', 'workspace-date'])>
                    <span @class([$__VIEW_ID__ . '-bb8ce219'])>Today</span>
                    <strong @class([$__VIEW_ID__ . '-57a0cbe4'])>Make room<br @class([$__VIEW_ID__ . '-36a9e72f'])>for what matters.</strong>
                </div>
                <nav @class([$__VIEW_ID__ . '-76ddaf72', 'workspace-nav'])>
                    <a @class([$__VIEW_ID__ . '-dfaa61d0', 'active']) @attr(['href' => '/todo-list'])><span @class([$__VIEW_ID__ . '-cb4d927c'])>01</span> Tasks</a>
                    <a @class([$__VIEW_ID__ . '-2c228af7']) @attr(['href' => '/'])><span @class([$__VIEW_ID__ . '-ca7daca6'])>02</span> Back to site</a>
                    <a @class([$__VIEW_ID__ . '-937a1507']) @attr(['href' => '/about'])><span @class([$__VIEW_ID__ . '-65c71c6e'])>03</span> Philosophy</a>
                </nav>
                <p @class([$__VIEW_ID__ . '-0236cb34', 'workspace-note'])>State stays local to the page. The layout remains stable while the route changes.</p>
            </aside>
            <main @class([$__VIEW_ID__ . '-045faade', 'workspace-main'])>
                @startMarker('blockoutlet', '20269ffe')
                @useBlock('workspace')
                @endMarker('blockoutlet', '20269ffe')
            </main>
        </div>
    @endblock
