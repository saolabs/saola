<?php

namespace App\Modules\Market\Services;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Throwable;

/**
 * Nguồn dữ liệu cho trang /demo/market.
 *
 * Dữ liệu THẬT lấy từ Binance REST công khai (không cần khoá). Mất mạng, bị
 * chặn rate, hay Binance đổi shape → tự rơi sang feed MÔ PHỎNG tất định thay vì
 * để trang vỡ: một trang demo hỏng khi wifi chập là trang demo vô dụng.
 *
 * Mô phỏng dùng seed suy từ symbol nên cùng một symbol luôn ra cùng một chuỗi
 * nến — SSR và CSR vì thế khớp nhau, đưa vào test tự động được.
 *
 * Mọi số trả về là FLOAT/INT thuần và mọi hàng là MẢNG (truy cập bằng
 * `row['close']`). Đây không phải chuyện thẩm mỹ: template `.sao` viết
 * `row['close']` chạy được cả hai phía, còn `row.close` thì Blade dịch thành
 * `$row->close` và nổ khi SSR trong lúc CSR vẫn chạy — đúng lớp lệch SSR/CSR
 * mà dự án đang chống.
 */
class MarketFeed
{
    /** Cặp giao dịch được phép. Chốt danh sách để symbol từ URL không đi thẳng vào lời gọi HTTP. */
    public const SYMBOLS = [
        'BTCUSDT' => ['label' => 'BTC / USDT', 'base' => 'Bitcoin', 'seed' => 68_400.0],
        'ETHUSDT' => ['label' => 'ETH / USDT', 'base' => 'Ethereum', 'seed' => 3_540.0],
        'SOLUSDT' => ['label' => 'SOL / USDT', 'base' => 'Solana', 'seed' => 172.0],
    ];

    private const API = 'https://api.binance.com/api/v3';

    /** Cache ngắn: đủ để một lần tải trang không gọi Binance nhiều lần, không đủ để dữ liệu cũ. */
    private const TTL = 15;

    public function symbol(?string $requested): string
    {
        $symbol = strtoupper((string) $requested);

        return isset(self::SYMBOLS[$symbol]) ? $symbol : array_key_first(self::SYMBOLS);
    }

    /**
     * Nến + tóm tắt 24h + sổ lệnh, gói trong MỘT payload để trang chỉ cần một vòng.
     *
     * @return array{symbol: string, label: string, base: string, source: string, candles: list<array<string, float|int>>, ticker: array<string, float|string>, book: array{bids: list<array<string, float>>, asks: list<array<string, float>>}, generatedAt: string}
     */
    public function snapshot(?string $requested, int $limit = 120): array
    {
        $symbol = $this->symbol($requested);

        return Cache::remember("market:{$symbol}:{$limit}", self::TTL, function () use ($symbol, $limit) {
            $live = $this->fromBinance($symbol, $limit);
            $data = $live ?? $this->simulated($symbol, $limit);

            return $data + [
                'symbol' => $symbol,
                'label' => self::SYMBOLS[$symbol]['label'],
                'base' => self::SYMBOLS[$symbol]['base'],
                'source' => $live === null ? 'mô phỏng' : 'Binance REST',
                'generatedAt' => now()->format('H:i:s'),
            ];
        });
    }

    /** @return array{candles: list<array<string, float|int>>, ticker: array<string, float|string>, book: array{bids: list<array<string, float>>, asks: list<array<string, float>>}}|null */
    private function fromBinance(string $symbol, int $limit): ?array
    {
        try {
            $responses = Http::pool(fn ($pool) => [
                $pool->as('klines')->timeout(5)->get(self::API . '/klines', [
                    'symbol' => $symbol, 'interval' => '1m', 'limit' => $limit,
                ]),
                $pool->as('ticker')->timeout(5)->get(self::API . '/ticker/24hr', ['symbol' => $symbol]),
                $pool->as('depth')->timeout(5)->get(self::API . '/depth', ['symbol' => $symbol, 'limit' => 12]),
            ]);

            foreach (['klines', 'ticker', 'depth'] as $key) {
                if (! isset($responses[$key]) || ! $responses[$key]->successful()) {
                    return null;
                }
            }

            $klines = $responses['klines']->json();
            $ticker = $responses['ticker']->json();
            $depth = $responses['depth']->json();

            // Shape của Binance có thể đổi; thiếu field nào thì rơi sang mô phỏng
            // chứ đừng để null lọt vào template rồi hỏng ở giữa trang.
            if (! is_array($klines) || $klines === [] || ! isset($ticker['lastPrice'], $depth['bids'], $depth['asks'])) {
                return null;
            }

            return [
                'candles' => array_map(static fn (array $k): array => [
                    'time' => (int) ($k[0] / 1000),
                    'open' => (float) $k[1],
                    'high' => (float) $k[2],
                    'low' => (float) $k[3],
                    'close' => (float) $k[4],
                    'volume' => (float) $k[5],
                ], $klines),
                'ticker' => [
                    'last' => (float) $ticker['lastPrice'],
                    'change' => (float) ($ticker['priceChangePercent'] ?? 0),
                    'high' => (float) ($ticker['highPrice'] ?? 0),
                    'low' => (float) ($ticker['lowPrice'] ?? 0),
                    'volume' => (float) ($ticker['quoteVolume'] ?? 0),
                ],
                'book' => [
                    'bids' => $this->levels($depth['bids']),
                    'asks' => $this->levels($depth['asks']),
                ],
            ];
        } catch (Throwable) {
            return null;
        }
    }

    /** @param list<array{0: string, 1: string}> $rows @return list<array<string, float>> */
    private function levels(array $rows): array
    {
        return array_values(array_map(static fn (array $row): array => [
            'price' => (float) $row[0],
            'amount' => (float) $row[1],
        ], array_slice($rows, 0, 10)));
    }

    /**
     * Random walk TẤT ĐỊNH: seed suy từ symbol nên cùng symbol ra cùng chuỗi.
     * Nhờ vậy trang mô phỏng vẫn đưa được vào cổng parity SSR↔CSR.
     *
     * @return array{candles: list<array<string, float|int>>, ticker: array<string, float|string>, book: array{bids: list<array<string, float>>, asks: list<array<string, float>>}}
     */
    private function simulated(string $symbol, int $limit): array
    {
        $price = self::SYMBOLS[$symbol]['seed'];
        $state = crc32($symbol);
        $next = static function () use (&$state): float {
            // LCG nhỏ thay cho mt_rand: không đụng vào bộ sinh toàn cục và
            // KHÔNG phụ thuộc phiên bản PHP, nên chuỗi cố định qua mọi máy.
            $state = ($state * 1_103_515_245 + 12_345) & 0x7FFFFFFF;

            return $state / 0x7FFFFFFF;
        };

        $minute = (int) floor(time() / 60) * 60;
        $candles = [];
        for ($i = $limit - 1; $i >= 0; $i--) {
            $open = $price;
            $drift = ($next() - 0.5) * $price * 0.004;
            $close = max(0.01, $open + $drift);
            $wick = $price * 0.0015;
            $candles[] = [
                'time' => $minute - $i * 60,
                'open' => round($open, 2),
                'high' => round(max($open, $close) + $next() * $wick, 2),
                'low' => round(max(0.01, min($open, $close) - $next() * $wick), 2),
                'close' => round($close, 2),
                'volume' => round(10 + $next() * 90, 3),
            ];
            $price = $close;
        }

        $first = $candles[0]['open'];
        $last = end($candles)['close'];
        $bids = [];
        $asks = [];
        for ($i = 1; $i <= 10; $i++) {
            $bids[] = ['price' => round($last - $i * $last * 0.0002, 2), 'amount' => round(0.05 + $next() * 2, 3)];
            $asks[] = ['price' => round($last + $i * $last * 0.0002, 2), 'amount' => round(0.05 + $next() * 2, 3)];
        }

        return [
            'candles' => $candles,
            'ticker' => [
                'last' => $last,
                'change' => $first > 0 ? round(($last - $first) / $first * 100, 2) : 0.0,
                'high' => round(max(array_column($candles, 'high')), 2),
                'low' => round(min(array_column($candles, 'low')), 2),
                'volume' => round(array_sum(array_column($candles, 'volume')), 2),
            ],
            'book' => ['bids' => $bids, 'asks' => $asks],
        ];
    }
}
