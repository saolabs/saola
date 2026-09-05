<?php

namespace App\Modules\Market\Http\Controllers\Web;

use App\Http\Controllers\WebController;
use App\Modules\Market\Services\MarketFeed;
use Illuminate\Http\Request;

class MarketController extends WebController
{
    protected $module = 'market';

    public function __construct(private readonly MarketFeed $feed) {}

    /**
     * Một method phục vụ cả hai đường, giống DemoController::await():
     *  - trình duyệt tải thẳng  → Blade render kèm dữ liệu (SSR, xem được khi tắt JS)
     *  - runtime điều hướng vào → cùng URL trả JSON nhờ header X-Sao-Response
     *
     * `?symbol=` cho phép đổi cặp mà KHÔNG cần route tham số: router phía client
     * cần bản đồ path → component cố định mới hydrate được (xem /docs/response).
     */
    public function index(Request $request)
    {
        $snapshot = $this->feed->snapshot($request->query('symbol'));

        // array_merge chứ KHÔNG phải `$snapshot + [...]`: toán tử union giữ vế
        // TRÁI khi trùng khoá, nên `book` đã enrich ở dưới sẽ bị chính bản thô
        // trong $snapshot đè mất.
        return $this->response(array_merge($snapshot, [
            'symbols' => array_map(
                static fn (string $code, array $meta): array => ['code' => $code] + $meta,
                array_keys(MarketFeed::SYMBOLS),
                MarketFeed::SYMBOLS,
            ),
            'sparkline' => $this->sparkline($snapshot['candles']),
            // Chuỗi hiển thị sinh ở SERVER, không format trong template.
            // `number_format($v, 2)` ở đây và `toLocaleString('en-US', {…2 chữ số})`
            // phía JS cho ra cùng một chuỗi; format bằng helper trong template thì
            // Blade và JS dễ ra hai kết quả khác nhau (xem /docs/status).
            // Chiều tăng/giảm tính ở SERVER: seed `true` cứng thì SSR tô xanh
            // trong khi số là âm, và lệch đó sống tới tick đầu tiên.
            'risingSeed' => $snapshot['ticker']['change'] >= 0,
            'lastText' => number_format($snapshot['ticker']['last'], 2),
            'changeText' => sprintf('%+.2f', $snapshot['ticker']['change']),
            'highText' => number_format($snapshot['ticker']['high'], 2),
            'lowText' => number_format($snapshot['ticker']['low'], 2),
            'volumeText' => number_format($snapshot['ticker']['volume'], 0),
            'book' => [
                'bids' => $this->withText($snapshot['book']['bids']),
                'asks' => $this->withText($snapshot['book']['asks']),
            ],
        ]));
    }

    /**
     * Gắn chuỗi hiển thị vào từng mức giá của sổ lệnh.
     *
     * @param list<array<string, float>> $levels
     * @return list<array<string, float|string>>
     */
    private function withText(array $levels): array
    {
        return array_map(static fn (array $row): array => $row + [
            'priceText' => number_format($row['price'], 2),
            'amountText' => number_format($row['amount'], 3),
        ], $levels);
    }

    /**
     * Đường polyline cho SVG dự phòng render phía server.
     *
     * Có nó thì trang KHÔNG rỗng trước khi thư viện biểu đồ tải xong, và vẫn đọc
     * được khi tắt JS — thứ mà một canvas do client dựng không bao giờ làm được.
     *
     * @param list<array<string, float|int>> $candles
     */
    private function sparkline(array $candles, int $width = 640, int $height = 120): string
    {
        $closes = array_column($candles, 'close');
        if (count($closes) < 2) {
            return '';
        }

        $min = min($closes);
        $span = max(max($closes) - $min, 0.00001);
        $step = $width / (count($closes) - 1);

        $points = [];
        foreach (array_values($closes) as $i => $close) {
            $x = round($i * $step, 2);
            $y = round($height - (($close - $min) / $span) * ($height - 8) - 4, 2);
            $points[] = "{$x},{$y}";
        }

        return implode(' ', $points);
    }
}
