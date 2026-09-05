@addCssLink('/static/saola/market.css')
@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@vars(
    $symbol = '', $label = '', $base = '', $source = '', $generatedAt = '',
    $candles = [], $ticker = [], $book = [], $symbols = [], $sparkline = '',
    $lastText = '', $changeText = '', $highText = '', $lowText = '', $volumeText = '',
    $risingSeed = true
)
@useState($activeSymbol, $symbol)
@useState($activeLabel, $label)
@useState($priceText, $lastText)
@useState($deltaText, $changeText)
@useState($rising, $risingSeed)
@useState($deltaUp, $risingSeed)
@useState($feedSource, $source)
@useState($chartReady, false)
@useState($busy, false)
@useState($trades, [])
@useState($bids, $book['bids'])
@useState($asks, $book['asks'])
@await
@extends($__layout__ . 'lab')

    @block('main')
        <p @class([$__VIEW_ID__ . '-Bmain1', 'kicker'])><span @class([$__VIEW_ID__ . '-Bmain11'])>ỨNG DỤNG THẬT · BIỂU ĐỒ REALTIME</span></p>
        <h1 @class([$__VIEW_ID__ . '-Bmain2'])>Giá @startMarker('output', 'Bmain2o1'){{ $base }}@endMarker('output', 'Bmain2o1') theo thời gian thực.</h1>

        <div @class([$__VIEW_ID__ . '-Bmain3', 'mk-head'])>
            <div @class([$__VIEW_ID__ . '-Bmain31', 'mk-switch']) @attr(['role' => 'group', 'aria-label' => 'Chọn cặp giao dịch'])>
                @startMarker('reactive', 'Bmain31l1', ['stateKey' => ['symbols'], 'type' => 'foreach'])
                @foreach($symbols as $item)
                    <button @class([$__VIEW_ID__ . "-Bmain31l11-{$item['code']}", 'mk-chip', 'is-on'=> $activeSymbol === $item['code']]) @attr(['type' => 'button']) @disabled($busy)>@startMarker('output', "Bmain31l11o1-{$item['code']}"){{ $item['label'] }}@endMarker('output', "Bmain31l11o1-{$item['code']}")</button>
                @endforeach
                @endMarker('reactive', 'Bmain31l1')
            </div>

            <div @class([$__VIEW_ID__ . '-Bmain32', 'mk-price'])>
                <strong @class([$__VIEW_ID__ . '-Bmain321', 'mk-last', 'up'=> $rising, 'down'=> !$rising])>@startMarker('output', 'Bmain321o1'){{ $priceText }}@endMarker('output', 'Bmain321o1')</strong>
                <span @class([$__VIEW_ID__ . '-Bmain322', 'mk-delta', 'up'=> $deltaUp, 'down'=> !$deltaUp])>@startMarker('output', 'Bmain322o1'){{ $deltaText }}@endMarker('output', 'Bmain322o1')%</span>
            </div>
        </div>

        <p @class([$__VIEW_ID__ . '-Bmain4', 'mk-source'])>
            Nguồn: <strong @class([$__VIEW_ID__ . '-Bmain41'])>@startMarker('output', 'Bmain41o1'){{ $feedSource }}@endMarker('output', 'Bmain41o1')</strong> · ảnh chụp lúc @startMarker('output', 'Bmain4o1'){{ $generatedAt }}@endMarker('output', 'Bmain4o1')
            @startMarker('reactive', 'Bmain4r1', ['stateKey' => ['chartReady'], 'type' => 'if'])
            @if(!$chartReady)
                <em @class([$__VIEW_ID__ . '-Bmain4r1k11'])> · đang tải thư viện biểu đồ…</em>
            @endif
            @endMarker('reactive', 'Bmain4r1')
        </p>

        <div @class([$__VIEW_ID__ . '-Bmain5', 'mk-chart-wrap'])>
            {{-- Node của THƯ VIỆN: template để rỗng và không bao giờ đặt vùng
                 reactive vào trong. Framework tạo nó rồi thôi, nên hydrate và CSR
                 cùng một điểm bắt đầu; lightweight-charts tiếp quản sau mount. --}}
            <div @class([$__VIEW_ID__ . '-Bmain51', 'mk-chart']) @attr(['data-chart-host' => true])></div>

            {{-- Dự phòng SSR nằm ở node ANH EM chứ không nằm trong node trên —
                 hai bên cùng một parent là giành nhau. Xem được cả khi tắt JS. --}}
            @startMarker('reactive', 'Bmain5r1', ['stateKey' => ['chartReady'], 'type' => 'if'])
            @if(!$chartReady)
                <figure @class([$__VIEW_ID__ . '-Bmain5r1k11', 'mk-spark']) @attr(['aria-label' => 'Đường giá do server dựng'])>
                    <svg @class([$__VIEW_ID__ . '-Bmain5r1k111']) @attr(['viewBox' => '0 0 640 120', 'preserveAspectRatio' => 'none', 'role' => 'img'])>
                        <polyline @class([$__VIEW_ID__ . '-Bmain5r1k1111']) @attr(['points' => $sparkline, 'fill' => 'none', 'stroke' => 'currentColor', 'stroke-width' => '1.5']) />
                    </svg>
                    <figcaption @class([$__VIEW_ID__ . '-Bmain5r1k112'])>SVG do Blade render — thay bằng biểu đồ đầy đủ khi thư viện tải xong.</figcaption>
                </figure>
            @endif
            @endMarker('reactive', 'Bmain5r1')
        </div>

        <div @class([$__VIEW_ID__ . '-Bmain6', 'mk-grid'])>
            <section @class([$__VIEW_ID__ . '-Bmain61', 'mk-panel'])>
                <h2 @class([$__VIEW_ID__ . '-Bmain611'])>Sổ lệnh</h2>
                <table @class([$__VIEW_ID__ . '-Bmain612', 'mk-table'])>
                    <tbody @class([$__VIEW_ID__ . '-Bmain6121'])>
                        @startMarker('reactive', 'Bmain6121l1', ['stateKey' => ['asks'], 'type' => 'foreach'])
                        @foreach($asks as $row)
                            <tr @class([$__VIEW_ID__ . "-Bmain6121l11-{$row['priceText']}", 'ask'])><td @class([$__VIEW_ID__ . "-Bmain6121l111-{$row['priceText']}"])>@startMarker('output', "Bmain6121l111o1-{$row['priceText']}"){{ $row['priceText'] }}@endMarker('output', "Bmain6121l111o1-{$row['priceText']}")</td><td @class([$__VIEW_ID__ . "-Bmain6121l112-{$row['priceText']}"])>@startMarker('output', "Bmain6121l112o1-{$row['priceText']}"){{ $row['amountText'] }}@endMarker('output', "Bmain6121l112o1-{$row['priceText']}")</td></tr>
                        @endforeach
                        @endMarker('reactive', 'Bmain6121l1')
                        <tr @class([$__VIEW_ID__ . '-Bmain61211', 'mk-spread'])><td @class([$__VIEW_ID__ . '-Bmain612111']) @attr(['colspan' => '2'])>@startMarker('output', 'Bmain612111o1'){{ $priceText }}@endMarker('output', 'Bmain612111o1')</td></tr>
                        @startMarker('reactive', 'Bmain6121l2', ['stateKey' => ['bids'], 'type' => 'foreach'])
                        @foreach($bids as $row)
                            <tr @class([$__VIEW_ID__ . "-Bmain6121l21-{$row['priceText']}", 'bid'])><td @class([$__VIEW_ID__ . "-Bmain6121l211-{$row['priceText']}"])>@startMarker('output', "Bmain6121l211o1-{$row['priceText']}"){{ $row['priceText'] }}@endMarker('output', "Bmain6121l211o1-{$row['priceText']}")</td><td @class([$__VIEW_ID__ . "-Bmain6121l212-{$row['priceText']}"])>@startMarker('output', "Bmain6121l212o1-{$row['priceText']}"){{ $row['amountText'] }}@endMarker('output', "Bmain6121l212o1-{$row['priceText']}")</td></tr>
                        @endforeach
                        @endMarker('reactive', 'Bmain6121l2')
                    </tbody>
                </table>
            </section>

            <section @class([$__VIEW_ID__ . '-Bmain62', 'mk-panel'])>
                <h2 @class([$__VIEW_ID__ . '-Bmain621'])>Khớp gần nhất</h2>
                @startMarker('reactive', 'Bmain62r1', ['stateKey' => ['trades'], 'type' => 'if'])
                @if(count($trades) === 0)
                    <p @class([$__VIEW_ID__ . '-Bmain62r1k11', 'mk-empty'])>Chờ tick đầu tiên từ nguồn realtime…</p>
                @else
                    <table @class([$__VIEW_ID__ . '-Bmain62r1k21', 'mk-table'])>
                        <tbody @class([$__VIEW_ID__ . '-Bmain62r1k211'])>
                            @startMarker('reactive', 'Bmain62r1k211l1', ['stateKey' => ['trades'], 'type' => 'foreach'])
                            @foreach($trades as $row)
                                <tr @class([$__VIEW_ID__ . "-Bmain62r1k211l11-{$row['id']}", 'buy'=> $row['buy'], 'sell'=> !$row['buy']])>
                                    <td @class([$__VIEW_ID__ . "-Bmain62r1k211l111-{$row['id']}"])>@startMarker('output', "Bmain62r1k211l111o1-{$row['id']}"){{ $row['at'] }}@endMarker('output', "Bmain62r1k211l111o1-{$row['id']}")</td>
                                    <td @class([$__VIEW_ID__ . "-Bmain62r1k211l112-{$row['id']}"])>@startMarker('output', "Bmain62r1k211l112o1-{$row['id']}"){{ $row['priceText'] }}@endMarker('output', "Bmain62r1k211l112o1-{$row['id']}")</td>
                                    <td @class([$__VIEW_ID__ . "-Bmain62r1k211l113-{$row['id']}"])>@startMarker('output', "Bmain62r1k211l113o1-{$row['id']}"){{ $row['amountText'] }}@endMarker('output', "Bmain62r1k211l113o1-{$row['id']}")</td>
                                </tr>
                            @endforeach
                            @endMarker('reactive', 'Bmain62r1k211l1')
                        </tbody>
                    </table>
                @endif
                @endMarker('reactive', 'Bmain62r1')
            </section>

            <section @class([$__VIEW_ID__ . '-Bmain63', 'mk-panel'])>
                <h2 @class([$__VIEW_ID__ . '-Bmain631'])>24 giờ</h2>
                <dl @class([$__VIEW_ID__ . '-Bmain632', 'mk-stats'])>
                    <div @class([$__VIEW_ID__ . '-Bmain6321'])><dt @class([$__VIEW_ID__ . '-Bmain63211'])>Cao nhất</dt><dd @class([$__VIEW_ID__ . '-Bmain63212'])>@startMarker('output', 'Bmain63212o1'){{ $highText }}@endMarker('output', 'Bmain63212o1')</dd></div>
                    <div @class([$__VIEW_ID__ . '-Bmain6322'])><dt @class([$__VIEW_ID__ . '-Bmain63221'])>Thấp nhất</dt><dd @class([$__VIEW_ID__ . '-Bmain63222'])>@startMarker('output', 'Bmain63222o1'){{ $lowText }}@endMarker('output', 'Bmain63222o1')</dd></div>
                    <div @class([$__VIEW_ID__ . '-Bmain6323'])><dt @class([$__VIEW_ID__ . '-Bmain63231'])>Khối lượng</dt><dd @class([$__VIEW_ID__ . '-Bmain63232'])>@startMarker('output', 'Bmain63232o1'){{ $volumeText }}@endMarker('output', 'Bmain63232o1')</dd></div>
                    <div @class([$__VIEW_ID__ . '-Bmain6324'])><dt @class([$__VIEW_ID__ . '-Bmain63241'])>Số nến nạp sẵn</dt><dd @class([$__VIEW_ID__ . '-Bmain63242'])>@startMarker('output', 'Bmain63242o1'){{ count($candles) }}@endMarker('output', 'Bmain63242o1')</dd></div>
                </dl>
            </section>
        </div>
    @endblock

    @block('aside')
        <h2 @class([$__VIEW_ID__ . '-Baside1'])>Trang này kiểm chứng cái gì.</h2>
        <ul @class([$__VIEW_ID__ . '-Baside2', 'check-list'])>
            <li @class([$__VIEW_ID__ . '-Baside21'])>Thư viện JS tự quản DOM (<code @class([$__VIEW_ID__ . '-Baside211'])>lightweight-charts</code>) sống chung được với hydration — miễn là nó có node riêng mà template để rỗng.</li>
            <li @class([$__VIEW_ID__ . '-Baside22'])>Nội dung dự phòng cho SSR nằm ở node <strong @class([$__VIEW_ID__ . '-Baside221'])>anh em</strong>, không nằm trong node của thư viện: cùng một parent là hai bên giành nhau.</li>
            <li @class([$__VIEW_ID__ . '-Baside23'])>Kết nối sống phải đóng trong <code @class([$__VIEW_ID__ . '-Baside231'])>destroyed()</code>. Layout được tái dùng qua điều hướng SPA nên không đóng là mỗi lượt vào lại chồng thêm một socket.</li>
            <li @class([$__VIEW_ID__ . '-Baside24'])>Chuỗi hiển thị sinh ở server (<code @class([$__VIEW_ID__ . '-Baside241'])>number_format</code>), phía JS dùng đúng quy tắc đó — format trong template thì Blade và JS dễ ra hai kết quả khác nhau.</li>
            <li @class([$__VIEW_ID__ . '-Baside25'])>Đổi cặp giao dịch gọi JSON trên <strong @class([$__VIEW_ID__ . '-Baside251'])>chính URL này</strong> chứ không điều hướng: router phía client cần bản đồ path → component cố định.</li>
        </ul>
        <p @class([$__VIEW_ID__ . '-Baside3', 'await-demo-note'])>
            Mất mạng hay bị chặn WebSocket thì feed tự chuyển sang bộ phát mô phỏng và nói rõ ở dòng “Nguồn”. Một trang demo hỏng khi wifi chập là trang demo vô dụng.
        </p>
    @endblock
