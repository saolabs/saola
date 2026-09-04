@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@vars($generatedAt = '', $renderedBy = '', $stats = [])
@await
@extends($__layout__ . 'lab')

    {{-- PHỤ THUỘC dữ liệu await → nằm trong render().
         SSR: Blade điền sẵn. CSR: chờ App.Http.get() xong mới có. --}}
    @block('main')
        <p @class([$__VIEW_ID__ . '-Bmain1', 'kicker'])><span @class([$__VIEW_ID__ . '-Bmain11'])>DỮ LIỆU · NẠP BẤT ĐỒNG BỘ</span></p>
        <h1 @class([$__VIEW_ID__ . '-Bmain2'])>Trang <code @class([$__VIEW_ID__ . '-Bmain21'])>&#64;await</code>.</h1>
        <p @class([$__VIEW_ID__ . '-Bmain3', 'await-demo-meta'])>
            Dữ liệu sinh lúc <strong @class([$__VIEW_ID__ . '-Bmain31'])>@startMarker('output', 'Bmain31o1'){{ $generatedAt }}@endMarker('output', 'Bmain31o1')</strong> · đường đi:
            <strong @class([$__VIEW_ID__ . '-Bmain32'])>@startMarker('output', 'Bmain32o1'){{ $renderedBy }}@endMarker('output', 'Bmain32o1')</strong>
        </p>
        <ul @class([$__VIEW_ID__ . '-Bmain4', 'await-demo-stats'])>
            @startMarker('reactive', 'Bmain4l1', ['stateKey' => ['stats'], 'type' => 'foreach'])
            @foreach($stats as $row)
                <li @class([$__VIEW_ID__ . "-Bmain4l11-{$loop->index}"])><span @class([$__VIEW_ID__ . "-Bmain4l111-{$loop->index}"])>@startMarker('output', "Bmain4l111o1-{$loop->index}"){{ $row->label }}@endMarker('output', "Bmain4l111o1-{$loop->index}")</span><b @class([$__VIEW_ID__ . "-Bmain4l112-{$loop->index}"])>@startMarker('output', "Bmain4l112o1-{$loop->index}"){{ $row->value }}@endMarker('output', "Bmain4l112o1-{$loop->index}")</b></li>
            @endforeach
            @endMarker('reactive', 'Bmain4l1')
        </ul>
    @endblock

    {{-- TĨNH, không đụng biến await → compiler dồn cả hai vào prerender():
         một @block (outlet thứ hai của layout) và một @section ngắn.
         Chính chỗ này từng bị đánh rơi khỏi đầu ra JS: SSR hiện, CSR mất. --}}
    @block('aside')
        <h2 @class([$__VIEW_ID__ . '-Baside1'])>Trang này kiểm chứng cái gì.</h2>
        <ul @class([$__VIEW_ID__ . '-Baside2', 'check-list'])>
            <li @class([$__VIEW_ID__ . '-Baside21'])>Tải thẳng URL: Laravel render Blade với dữ liệu sẵn, <code @class([$__VIEW_ID__ . '-Baside211'])>&#64;await</code> là no-op phía SSR.</li>
            <li @class([$__VIEW_ID__ . '-Baside22'])>Điều hướng SPA vào: runtime dựng prerender trước, rồi <code @class([$__VIEW_ID__ . '-Baside221'])>App.Http.get()</code> gọi lại chính URL này và nhận JSON.</li>
            <li @class([$__VIEW_ID__ . '-Baside23'])>Khối này nằm ở outlet THỨ HAI của layout và được khai báo trong <code @class([$__VIEW_ID__ . '-Baside231'])>prerender()</code> chứ không phải <code @class([$__VIEW_ID__ . '-Baside232'])>render()</code> — phải có mặt ở cả hai đường.</li>
        </ul>
        <p @class([$__VIEW_ID__ . '-Baside3', 'await-demo-note'])>
            Cùng một controller phục vụ cả hai: <code @class([$__VIEW_ID__ . '-Baside31'])>$this-&gt;response($data)</code> trả HTML cho trình duyệt và JSON cho <code @class([$__VIEW_ID__ . '-Baside32'])>fetch</code>, phân biệt bằng header <code @class([$__VIEW_ID__ . '-Baside33'])>X-Sao-Response</code>.
        </p>
    @endblock
