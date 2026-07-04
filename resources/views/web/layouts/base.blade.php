@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@pageStart
@wrapper
    <header @class([$__VIEW_ID__ . '-32a9c14a'])>
        <h1 @class([$__VIEW_ID__ . '-34e8407e'])>Base Layout</h1>
    </header>
    <main @class([$__VIEW_ID__ . '-c226aaa1'])>
        @startMarker('blockoutlet', 'ec9040ed')
        @useBlock('content')
        @endMarker('blockoutlet', 'ec9040ed')
    </main>
    <footer @class([$__VIEW_ID__ . '-524f4445'])>
        <p @class([$__VIEW_ID__ . '-25def5fd'])>&copy; 2026 SaoLabs. All rights reserved.</p>
    </footer>
@endWrapper
    @pageEnd
