@addScriptSrc('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js', ['data-manual' => true])
@addScriptSrc('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-typescript.min.js')
@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "public")
    @block('content')
        <div @class([$__VIEW_ID__ . '-Bcontent1', 'lab-shell'])>
            <aside @class([$__VIEW_ID__ . '-Bcontent11', 'docs-nav']) @attr(['aria-label' => 'Điều hướng trang demo'])>
                <div @class([$__VIEW_ID__ . '-Bcontent111', 'docs-nav-inner'])>
                    <p @class([$__VIEW_ID__ . '-Bcontent1111', 'docs-nav-group'])>Bắt đầu</p>
                    <a @class([$__VIEW_ID__ . '-Bcontent1112']) @attr(['href' => '/demo'])>Tổng quan &amp; playground</a>

                    <p @class([$__VIEW_ID__ . '-Bcontent1113', 'docs-nav-group'])>Dữ liệu</p>
                    <a @class([$__VIEW_ID__ . '-Bcontent1114']) @attr(['href' => '/demo/await'])>Nạp dữ liệu bất đồng bộ</a>

                    <p @class([$__VIEW_ID__ . '-Bcontent1115', 'docs-nav-group'])>Runtime</p>
                    <a @class([$__VIEW_ID__ . '-Bcontent1116']) @attr(['href' => '/demo/setup'])>Setup typesafe</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent1117']) @attr(['href' => '/demo/foreach'])>Danh sách &amp; reconciliation</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent1118']) @attr(['href' => '/demo/lifecycle'])>Vòng đời &amp; PageCache</a>

                    <p @class([$__VIEW_ID__ . '-Bcontent1119', 'docs-nav-group'])>Ứng dụng thật</p>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e10_']) @attr(['href' => '/demo/market'])>Biểu đồ giá realtime</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e11_']) @attr(['href' => '/demo/board'])>Kanban — kéo thả</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e12_']) @attr(['href' => '/demo/emit'])>Sự kiện con → cha</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e13_']) @attr(['href' => '/demo/grid'])>Bảng dữ liệu 3.800 dòng</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e14_']) @attr(['href' => '/demo/stream'])>Luồng sự kiện SSE</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e15_']) @attr(['href' => '/demo/item-editor'])>Item Editor</a>
                    {{-- Hai trang này ở shell `workspace` (sidebar tối, khung
                         kiểu app) chứ không ở shell lab — giữ nguyên vì đó là
                         một bề mặt demo có chủ đích, chỉ nối đường vào. --}}
                    <a @class([$__VIEW_ID__ . '-Bcontent111e16_']) @attr(['href' => '/roster'])>Roster — CRUD qua API</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e17_']) @attr(['href' => '/todo-list'])>Todo — state cục bộ</a>

                    <p @class([$__VIEW_ID__ . '-Bcontent111e18_', 'docs-nav-group'])>Tài liệu</p>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e19_']) @attr(['href' => '/docs/directives'])>Tham chiếu directive</a>
                    <a @class([$__VIEW_ID__ . '-Bcontent111e20_']) @attr(['href' => '/docs/status'])>Giới hạn đã biết</a>
                </div>
            </aside>

            <main @class([$__VIEW_ID__ . '-Bcontent12', 'docs-main', 'lab-main'])>
                {{-- Tên block KHÔNG được chứa dấu gạch ngang: nhánh Blade nhận
                     đúng còn nhánh JS bỏ qua, biến @useBlock thành text thô —
                     outlet biến mất khi CSR.

                     Ở đây KHÔNG dùng @yield: khi layout được tái dùng qua điều
                     hướng SPA, Yield bị dựng lại thành một cặp marker THỨ HAI
                     cùng id thay vì claim cặp có sẵn, nên nội dung section của
                     trang cũ nằm lại bên cạnh trang mới. Xem /docs/status. --}}
                @startMarker('blockoutlet', 'Bcontent12b1')
                @useBlock('main')
                @endMarker('blockoutlet', 'Bcontent12b1')
                {{-- Code ví dụ của chính trang demo, nằm ngay dưới phần chạy
                     thật: xem được thứ vừa bấm là do đoạn nào sinh ra. --}}
                @startMarker('blockoutlet', 'Bcontent12b2')
                @useBlock('source')
                @endMarker('blockoutlet', 'Bcontent12b2')
                <hr @class([$__VIEW_ID__ . '-Bcontent121', 'lab-rule'])>
                @startMarker('blockoutlet', 'Bcontent12b3')
                @useBlock('aside')
                @endMarker('blockoutlet', 'Bcontent12b3')
            </main>
        </div>
    @endblock
