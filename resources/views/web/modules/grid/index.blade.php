@addCssLink('/static/saola/grid.css')
@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@vars(
    $rows = [], $total = 0, $totalText = '0', $page = 1, $pages = 1, $from = 0, $to = 0,
    $search = '', $status = '', $sort = 'downloads', $dir = 'desc', $statuses = []
)
@useState($items, $rows)
@useState($query, $search)
@useState($activeStatus, $status)
@useState($sortKey, $sort)
@useState($sortDir, $dir)
@useState($pageNo, $page)
@useState($pageCount, $pages)
@useState($rangeFrom, $from)
@useState($rangeTo, $to)
@useState($countText, $totalText)
@useState($busy, false)
@useState($failed, '')
@await
@extends($__layout__ . 'lab')

    @block('main')
        <p @class([$__VIEW_ID__ . '-Bmain1', 'kicker'])><span @class([$__VIEW_ID__ . '-Bmain11'])>ỨNG DỤNG THẬT · BẢNG DỮ LIỆU</span></p>
        <h1 @class([$__VIEW_ID__ . '-Bmain2'])>3.800 gói, lọc ở phía server.</h1>
        <p @class([$__VIEW_ID__ . '-Bmain3', 'gr-lead'])>
            Trang đầu do Blade render nên đọc được khi tắt JS. Mọi thao tác sau đó
            gọi JSON trên <strong @class([$__VIEW_ID__ . '-Bmain31'])>chính URL này</strong> và chỉ thay phần thân bảng.
        </p>

        <div @class([$__VIEW_ID__ . '-Bmain4', 'gr-controls'])>
            <input @class([$__VIEW_ID__ . '-Bmain41', 'gr-search']) @attr(['type' => 'search', 'placeholder' => 'Tìm theo tên gói…', 'aria-label' => 'Tìm gói']) @bind($query)>

            <div @class([$__VIEW_ID__ . '-Bmain42', 'gr-filters']) @attr(['role' => 'group', 'aria-label' => 'Lọc theo trạng thái'])>
                <button @class([$__VIEW_ID__ . '-Bmain421', 'gr-chip', 'is-on'=> $activeStatus === '']) @attr(['type' => 'button'])>Tất cả</button>
                @startMarker('reactive', 'Bmain42l1', ['stateKey' => ['statuses'], 'type' => 'foreach'])
                @foreach($statuses as $item)
                    <button @class([$__VIEW_ID__ . "-Bmain42l11-{$item['key']}", 'gr-chip', 'is-on'=> $activeStatus === $item['key']]) @attr(['type' => 'button'])>@startMarker('output', "Bmain42l11o1-{$item['key']}"){{ $item['label'] }}@endMarker('output', "Bmain42l11o1-{$item['key']}")</button>
                @endforeach
                @endMarker('reactive', 'Bmain42l1')
            </div>
        </div>

        @startMarker('reactive', 'Bmainr1', ['stateKey' => ['failed'], 'type' => 'if'])
        @if($failed !== '')
            <p @class([$__VIEW_ID__ . '-Bmainr1k11', 'gr-error']) @attr(['role' => 'alert'])>@startMarker('output', 'Bmainr1k11o1'){{ $failed }}@endMarker('output', 'Bmainr1k11o1')</p>
        @endif
        @endMarker('reactive', 'Bmainr1')

        <div @class([$__VIEW_ID__ . '-Bmain5', 'gr-wrap', 'is-busy'=> $busy])>
            <table @class([$__VIEW_ID__ . '-Bmain51', 'gr-table'])>
                <thead @class([$__VIEW_ID__ . '-Bmain511'])>
                    <tr @class([$__VIEW_ID__ . '-Bmain5111'])>
                        <th @class([$__VIEW_ID__ . '-Bmain51111'])><button @class([$__VIEW_ID__ . '-Bmain511111', 'gr-sort']) @attr(['type' => 'button'])>Gói @startMarker('output', 'Bmain511111o1'){{ $sortKey === 'name' ? ($sortDir === 'asc' ? '▲' : '▼') : '' }}@endMarker('output', 'Bmain511111o1')</button></th>
                        <th @class([$__VIEW_ID__ . '-Bmain51112'])><button @class([$__VIEW_ID__ . '-Bmain511121', 'gr-sort']) @attr(['type' => 'button'])>Lượt tải @startMarker('output', 'Bmain511121o1'){{ $sortKey === 'downloads' ? ($sortDir === 'asc' ? '▲' : '▼') : '' }}@endMarker('output', 'Bmain511121o1')</button></th>
                        <th @class([$__VIEW_ID__ . '-Bmain51113'])><button @class([$__VIEW_ID__ . '-Bmain511131', 'gr-sort']) @attr(['type' => 'button'])>Cập nhật @startMarker('output', 'Bmain511131o1'){{ $sortKey === 'updated' ? ($sortDir === 'asc' ? '▲' : '▼') : '' }}@endMarker('output', 'Bmain511131o1')</button></th>
                        <th @class([$__VIEW_ID__ . '-Bmain51114'])><button @class([$__VIEW_ID__ . '-Bmain511141', 'gr-sort']) @attr(['type' => 'button'])>Trạng thái @startMarker('output', 'Bmain511141o1'){{ $sortKey === 'status' ? ($sortDir === 'asc' ? '▲' : '▼') : '' }}@endMarker('output', 'Bmain511141o1')</button></th>
                    </tr>
                </thead>
                <tbody @class([$__VIEW_ID__ . '-Bmain512'])>
                    @startMarker('reactive', 'Bmain512l1', ['stateKey' => ['items'], 'type' => 'foreach'])
                    @foreach($items as $row)
                        <tr @class([$__VIEW_ID__ . "-Bmain512l11-{$row['id']}"])>
                            <td @class([$__VIEW_ID__ . "-Bmain512l111-{$row['id']}", 'gr-name'])>@startMarker('output', "Bmain512l111o1-{$row['id']}"){{ $row['name'] }}@endMarker('output', "Bmain512l111o1-{$row['id']}")</td>
                            <td @class([$__VIEW_ID__ . "-Bmain512l112-{$row['id']}", 'gr-num'])>@startMarker('output', "Bmain512l112o1-{$row['id']}"){{ $row['downloadsText'] }}@endMarker('output', "Bmain512l112o1-{$row['id']}")</td>
                            <td @class([$__VIEW_ID__ . "-Bmain512l113-{$row['id']}", 'gr-num'])>@startMarker('output', "Bmain512l113o1-{$row['id']}"){{ $row['updated'] }}@endMarker('output', "Bmain512l113o1-{$row['id']}")</td>
                            <td @class([$__VIEW_ID__ . "-Bmain512l114-{$row['id']}"])><span @class([$__VIEW_ID__ . "-Bmain512l1141-{$row['id']}", 'gr-tag', 'is-stable'=> $row['status'] === 'stable', 'is-beta'=> $row['status'] === 'beta', 'is-old'=> $row['status'] === 'deprecated'])>@startMarker('output', "Bmain512l1141o1-{$row['id']}"){{ $row['statusText'] }}@endMarker('output', "Bmain512l1141o1-{$row['id']}")</span></td>
                        </tr>
                    @endforeach
                    @endMarker('reactive', 'Bmain512l1')
                </tbody>
            </table>

            @startMarker('reactive', 'Bmain5r1', ['stateKey' => ['items'], 'type' => 'if'])
            @if(count($items) === 0)
                <p @class([$__VIEW_ID__ . '-Bmain5r1k11', 'gr-empty'])>Không có gói nào khớp bộ lọc hiện tại.</p>
            @endif
            @endMarker('reactive', 'Bmain5r1')
        </div>

        <div @class([$__VIEW_ID__ . '-Bmain6', 'gr-foot'])>
            <p @class([$__VIEW_ID__ . '-Bmain61', 'gr-range'])>@startMarker('output', 'Bmain61o1'){{ $rangeFrom }}@endMarker('output', 'Bmain61o1')–@startMarker('output', 'Bmain61o2'){{ $rangeTo }}@endMarker('output', 'Bmain61o2') trên @startMarker('output', 'Bmain61o3'){{ $countText }}@endMarker('output', 'Bmain61o3') gói</p>
            <div @class([$__VIEW_ID__ . '-Bmain62', 'gr-pager'])>
                <button @class([$__VIEW_ID__ . '-Bmain621', 'gr-chip']) @attr(['type' => 'button']) @disabled($busy || $pageNo <= 1)>‹ Trước</button>
                <span @class([$__VIEW_ID__ . '-Bmain622', 'gr-page'])>Trang @startMarker('output', 'Bmain622o1'){{ $pageNo }}@endMarker('output', 'Bmain622o1') / @startMarker('output', 'Bmain622o2'){{ $pageCount }}@endMarker('output', 'Bmain622o2')</span>
                <button @class([$__VIEW_ID__ . '-Bmain623', 'gr-chip']) @attr(['type' => 'button']) @disabled($busy || $pageNo >= $pageCount)>Sau ›</button>
            </div>
        </div>
    @endblock

    @block('aside')
        <h2 @class([$__VIEW_ID__ . '-Baside1'])>Trang này kiểm chứng cái gì.</h2>
        <ul @class([$__VIEW_ID__ . '-Baside2', 'check-list'])>
            <li @class([$__VIEW_ID__ . '-Baside21'])>Lọc, sắp và phân trang chạy ở <strong @class([$__VIEW_ID__ . '-Baside211'])>server</strong>. Gửi cả 3.800 dòng xuống rồi để client tự lo là biến bảng thành bài kiểm tra bộ nhớ, và trang đầu mất khả năng render phía server.</li>
            <li @class([$__VIEW_ID__ . '-Baside22'])>Cùng một URL phục vụ hai đường: Blade cho lần tải đầu, JSON cho mọi thao tác sau. Tham số đi qua query string chứ không qua route tham số.</li>
            <li @class([$__VIEW_ID__ . '-Baside23'])>Ô tìm kiếm <strong @class([$__VIEW_ID__ . '-Baside231'])>hoãn 250ms</strong> và bỏ kết quả về trễ. Không có bước này thì gõ nhanh sẽ để một phản hồi cũ đè lên phản hồi mới.</li>
            <li @class([$__VIEW_ID__ . '-Baside24'])>Dữ liệu sinh bằng bộ đếm có seed cố định, và mốc ngày KHÔNG lấy từ đồng hồ — nhờ vậy SSR và CSR cho ra đúng một bảng.</li>
        </ul>
    @endblock
