@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "base")
@once('saola-css-1vuyy6c')
<link rel="stylesheet" href="/static/saola/demo-site.css">
@endonce
    @block('shell')
        <div @class([$__VIEW_ID__ . '-Bshell1', 'workspace-frame'])>
            <aside @class([$__VIEW_ID__ . '-Bshell11', 'workspace-sidebar'])>
                <a @class([$__VIEW_ID__ . '-Bshell111', 'brand', 'brand-inverse']) @attr(['href' => '/'])>
                    <span @class([$__VIEW_ID__ . '-Bshell1111', 'brand-mark'])>S</span>
                    <span @class([$__VIEW_ID__ . '-Bshell1112'])><strong @class([$__VIEW_ID__ . '-Bshell11121'])>SAOLA</strong><small @class([$__VIEW_ID__ . '-Bshell11122'])>WORKSPACE</small></span>
                </a>
                <div @class([$__VIEW_ID__ . '-Bshell112', 'workspace-date'])>
                    <span @class([$__VIEW_ID__ . '-Bshell1121'])>Today</span>
                    <strong @class([$__VIEW_ID__ . '-Bshell1122'])>Make room<br @class([$__VIEW_ID__ . '-Bshell11221'])>for what matters.</strong>
                </div>
                <nav @class([$__VIEW_ID__ . '-Bshell113', 'workspace-nav'])>
                    <a @class([$__VIEW_ID__ . '-Bshell1131']) @attr(['href' => '/todo-list'])><span @class([$__VIEW_ID__ . '-Bshell11311'])>01</span> Tasks</a>
                    <a @class([$__VIEW_ID__ . '-Bshell1132']) @attr(['href' => '/roster'])><span @class([$__VIEW_ID__ . '-Bshell11321'])>02</span> Roster</a>
                    <a @class([$__VIEW_ID__ . '-Bshell1133']) @attr(['href' => '/'])><span @class([$__VIEW_ID__ . '-Bshell11331'])>03</span> Back to site</a>
                    <a @class([$__VIEW_ID__ . '-Bshell1134']) @attr(['href' => '/about'])><span @class([$__VIEW_ID__ . '-Bshell11341'])>04</span> Philosophy</a>
                </nav>
                <p @class([$__VIEW_ID__ . '-Bshell114', 'workspace-note'])>State stays local to the page. The layout remains stable while the route changes.</p>
            </aside>
            <main @class([$__VIEW_ID__ . '-Bshell12', 'workspace-main'])>
                @startMarker('blockoutlet', 'Bshell12b')
                @useBlock('workspace')
                @endMarker('blockoutlet', 'Bshell12b')
            </main>
        </div>
    @endblock
