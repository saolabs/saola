@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($rows, [
        [ 'id'=> 1, 'name'=> 'Blade output', 'hits'=> 0 ],
        [ 'id'=> 2, 'name'=> 'JavaScript view', 'hits'=> 0 ],
        [ 'id'=> 3, 'name'=> 'Scoped CSS', 'hits'=> 0 ]
    ])
@useState($nextId, 4)
@useState($log, [])
@extends($__layout__ . 'lab')

    @block('main')
        <p @class([$__VIEW_ID__ . '-Bmain1', 'kicker'])><span @class([$__VIEW_ID__ . '-Bmain11'])>RUNTIME · DANH SÁCH</span></p>
        <h1 @class([$__VIEW_ID__ . '-Bmain2'])>Danh sách và reconciliation.</h1>
        <p @class([$__VIEW_ID__ . '-Bmain3', 'lab-lead'])>
            Vùng <code @class([$__VIEW_ID__ . '-Bmain31'])>&#64;foreach</code> render lại giữa cặp marker của chính nó. Slot chỉ
            được tái dùng khi khoá <code @class([$__VIEW_ID__ . '-Bmain32'])>&#64;key</code> khớp <em @class([$__VIEW_ID__ . '-Bmain33'])>và</em> reference của item
            không đổi — bấm thử từng nút để thấy chỗ nào giữ được DOM, chỗ nào dựng lại.
        </p>

        <div @class([$__VIEW_ID__ . '-Bmain4', 'lab-toolbar'])>
            <button @class([$__VIEW_ID__ . '-Bmain41', 'button', 'button-primary'])>Thêm dòng</button>
            <button @class([$__VIEW_ID__ . '-Bmain42', 'button'])>Đảo thứ tự</button>
            <button @class([$__VIEW_ID__ . '-Bmain43', 'button'])>Đổi tên dòng đầu</button>
            <button @class([$__VIEW_ID__ . '-Bmain44', 'button'])>Refetch (object mới)</button>
            <button @class([$__VIEW_ID__ . '-Bmain45', 'button'])>Xoá nhật ký</button>
        </div>

        {{-- Đọc bằng NGOẶC VUÔNG, không phải dấu chấm: `row.id` biên dịch thành
             `$row->id` phía Blade, mà state khai báo trong @states là MẢNG PHP
             nên SSR nổ trong khi CSR vẫn chạy. `row['id']` ra `$row['id']` /
             `row['id']` — đúng ở cả hai phía. --}}
        <ul @class([$__VIEW_ID__ . '-Bmain5', 'lab-rows'])>
            @startMarker('reactive', 'Bmain5l1', ['stateKey' => ['rows'], 'type' => 'foreach'])
            @foreach($rows as $row)
                <li @class([$__VIEW_ID__ . "-Bmain5l11-{$row['id']}"])>
                    <span @class([$__VIEW_ID__ . "-Bmain5l111-{$row['id']}", 'lab-row-id'])>#@startMarker('output', "Bmain5l111o1-{$row['id']}"){{ $row['id'] }}@endMarker('output', "Bmain5l111o1-{$row['id']}")</span>
                    <span @class([$__VIEW_ID__ . "-Bmain5l112-{$row['id']}", 'lab-row-name'])>@startMarker('output', "Bmain5l112o1-{$row['id']}"){{ $row['name'] }}@endMarker('output', "Bmain5l112o1-{$row['id']}")</span>
                    <span @class([$__VIEW_ID__ . "-Bmain5l113-{$row['id']}", 'lab-row-hits'])>@startMarker('output', "Bmain5l113o1-{$row['id']}"){{ $row['hits'] }}@endMarker('output', "Bmain5l113o1-{$row['id']}") lượt</span>
                    <button @class([$__VIEW_ID__ . "-Bmain5l114-{$row['id']}", 'button', 'button-small'])>+1</button>
                    <button @class([$__VIEW_ID__ . "-Bmain5l115-{$row['id']}", 'button', 'button-small'])>Xoá</button>
                </li>
            @endforeach
            @endMarker('reactive', 'Bmain5l1')
        </ul>

        {{-- KHÔNG dùng @show: Laravel đã có directive cùng tên (kết thúc section
             rồi yield ngay) và nó nuốt mất bản của Saola. Xem /docs/status. --}}
        <p @class([$__VIEW_ID__ . '-Bmain6', 'lab-empty', 'is-hidden'=> count($rows) !== 0])>Danh sách rỗng — bấm “Thêm dòng”.</p>

        <h2 @class([$__VIEW_ID__ . '-Bmain7'])>Nhật ký thao tác</h2>
        {{-- @forelse có trong tài liệu nhưng compiler CHƯA cài: nó bị để nguyên
             thành text, và nhánh Blade sinh ra PHP không hợp lệ → 500.
             Dùng @foreach + một dòng rỗng có điều kiện. Xem /docs/status. --}}
        <ol @class([$__VIEW_ID__ . '-Bmain8', 'lab-log'])>
            @startMarker('reactive', 'Bmain8l1', ['stateKey' => ['log'], 'type' => 'foreach'])
            @foreach($log as $entry)
                <li @class([$__VIEW_ID__ . "-Bmain8l11-{$loop->index}"])>@startMarker('output', "Bmain8l11o1-{$loop->index}"){{ $entry }}@endMarker('output', "Bmain8l11o1-{$loop->index}")</li>
            @endforeach
            @endMarker('reactive', 'Bmain8l1')
            <li @class([$__VIEW_ID__ . '-Bmain81', 'is-muted', 'is-hidden'=> count($log) !== 0])>Chưa có thao tác nào.</li>
        </ol>
    @endblock

    @block('aside')
        <h2 @class([$__VIEW_ID__ . '-Baside1'])>Điều đang được chứng minh.</h2>
        <ul @class([$__VIEW_ID__ . '-Baside2', 'check-list'])>
            <li @class([$__VIEW_ID__ . '-Baside21'])><strong @class([$__VIEW_ID__ . '-Baside211'])>Thêm / xoá</strong> chỉ đụng đúng dòng bị đổi; các dòng còn lại giữ nguyên node DOM.</li>
            <li @class([$__VIEW_ID__ . '-Baside22'])><strong @class([$__VIEW_ID__ . '-Baside221'])>Đảo thứ tự</strong> với <code @class([$__VIEW_ID__ . '-Baside222'])>&#64;key</code> thì slot được di chuyển chứ không dựng lại.</li>
            <li @class([$__VIEW_ID__ . '-Baside23'])><strong @class([$__VIEW_ID__ . '-Baside231'])>Refetch</strong> trả object MỚI cho cùng một id — khoá vẫn khớp nhưng reference đổi, nên hàng đó bị dựng lại. Đây là ràng buộc có thật, không phải lỗi: closure biên dịch đóng gói thẳng object item.</li>
        </ul>
        <p @class([$__VIEW_ID__ . '-Baside3', 'lab-note'])>
            Muốn state của view con sống sót qua mỗi lần đồng bộ thì lặp trên danh sách <em @class([$__VIEW_ID__ . '-Baside31'])>id ổn định</em> rồi truyền dữ liệu xuống bằng props, đừng lặp thẳng trên mảng vừa fetch về.
        </p>
    @endblock
