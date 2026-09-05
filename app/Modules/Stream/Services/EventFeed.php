<?php

namespace App\Modules\Stream\Services;

/**
 * Nguồn sự kiện cho /demo/stream.
 *
 * Không có message broker: sự kiện được sinh tại chỗ từ một bộ đếm có seed, đủ
 * để demo mà không kéo theo hạ tầng. Mỗi sự kiện mang `id` tăng dần — client
 * dựa vào đó để khử trùng lặp khi EventSource nối lại.
 */
class EventFeed
{
    private const KINDS = [
        ['kind' => 'deploy', 'label' => 'Triển khai', 'text' => 'phát hành %s lên production'],
        ['kind' => 'commit', 'label' => 'Commit', 'text' => 'đẩy %s commit lên nhánh main'],
        ['kind' => 'test', 'label' => 'Kiểm thử', 'text' => 'cổng parity SSR↔CSR xanh trên %s route'],
        ['kind' => 'alert', 'label' => 'Cảnh báo', 'text' => 'độ trễ p95 tăng lên %s ms'],
        ['kind' => 'build', 'label' => 'Build', 'text' => 'biên dịch %s view .sao'],
    ];

    private const ACTORS = ['doanln', 'ci-bot', 'saoc', 'vite', 'octane'];

    /**
     * Sự kiện thứ `$seq`. Cùng `$seq` luôn ra cùng nội dung, nên backlog render
     * ở server và phần client nhận sau đó là một dải liên tục, không phải hai
     * bộ dữ liệu rời nhau.
     *
     * @return array{id: int, kind: string, label: string, actor: string, text: string, at: string}
     */
    public function at(int $seq, ?int $timestamp = null): array
    {
        $state = ($seq * 2_654_435_761) & 0x7FFFFFFF;
        $pick = static function (int $bound) use (&$state): int {
            $state = ($state * 1_103_515_245 + 12_345) & 0x7FFFFFFF;

            return intdiv($state, 11) % $bound;
        };

        // Quay không tải vài vòng trước khi lấy số. Seed của hai `$seq` liền nhau
        // chỉ khác nhau ở bit thấp, mà LCG trộn bit thấp rất kém — không có bước
        // này thì mấy sự kiện liên tiếp rơi vào cùng một loại.
        $pick(97);
        $pick(89);

        $template = self::KINDS[$pick(count(self::KINDS))];

        return [
            'id' => $seq,
            'kind' => $template['kind'],
            'label' => $template['label'],
            'actor' => self::ACTORS[$pick(count(self::ACTORS))],
            'text' => sprintf($template['text'], 1 + $pick(240)),
            'at' => date('H:i:s', $timestamp ?? time()),
        ];
    }

    /**
     * Backlog để SSR có nội dung thật — trang không được rỗng khi tắt JS.
     *
     * @return list<array<string, mixed>>
     */
    public function backlog(int $count = 12): array
    {
        $now = time();
        $events = [];
        for ($i = $count; $i >= 1; $i--) {
            $events[] = $this->at(1_000 - $i, $now - $i * 7);
        }

        return array_reverse($events);
    }
}
