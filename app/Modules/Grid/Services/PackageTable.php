<?php

namespace App\Modules\Grid\Services;

/**
 * Bộ dữ liệu TẤT ĐỊNH cho /demo/grid — không cần database.
 *
 * Sinh bằng LCG có seed cố định nên mọi máy, mọi request đều ra đúng một bảng.
 * Nhờ vậy SSR và CSR khớp nhau và trang đưa được vào cổng parity SSR↔CSR.
 *
 * Lọc/sắp/phân trang làm ở SERVER. Đó không phải chuyện lười: gửi cả 3.800 dòng
 * xuống rồi để client tự lo là biến một bảng thành một bài kiểm tra bộ nhớ, và
 * trang đầu tiên sẽ không còn render được phía server cho SEO.
 */
class PackageTable
{
    public const STATUSES = ['stable' => 'Ổn định', 'beta' => 'Beta', 'deprecated' => 'Ngừng hỗ trợ'];

    private const SCOPES = ['saola', 'saolabs', 'laravel', 'vite', 'vue', 'node', 'php', 'ts'];
    private const NOUNS = ['core', 'compiler', 'client', 'builder', 'router', 'cache', 'queue', 'mask',
        'repository', 'validator', 'runtime', 'devtools', 'bridge', 'adapter', 'schema', 'stream'];
    private const SUFFIX = ['', '-kit', '-plugin', '-preset', '-loader', '-utils', '-testing'];

    public const SORTABLE = ['name', 'downloads', 'updated', 'status'];

    /** @var list<array<string, mixed>>|null */
    private ?array $rows = null;

    /** @return list<array<string, mixed>> */
    public function all(): array
    {
        if ($this->rows !== null) {
            return $this->rows;
        }

        $state = 20260905;
        $next = static function (int $bound) use (&$state): int {
            $state = ($state * 1_103_515_245 + 12_345) & 0x7FFFFFFF;

            return intdiv($state, 7) % $bound;
        };

        $rows = [];
        $statuses = array_keys(self::STATUSES);
        for ($i = 0; $i < 3_800; $i++) {
            $name = self::SCOPES[$next(count(self::SCOPES))] . '/'
                . self::NOUNS[$next(count(self::NOUNS))]
                . self::SUFFIX[$next(count(self::SUFFIX))];

            $rows[] = [
                'id' => $i + 1,
                'name' => $name . ($i > 120 ? '-' . ($i + 1) : ''),
                'downloads' => 120 + $next(1_480_000),
                // Ngày cố định theo chỉ số, KHÔNG dùng now(): mốc thời gian trôi
                // theo đồng hồ thì SSR và CSR chụp ở hai thời điểm sẽ lệch nhau.
                'updated' => date('Y-m-d', mktime(0, 0, 0, 9, 5, 2026) - $next(400) * 86400),
                'status' => $statuses[$next(3)],
            ];
        }

        return $this->rows = $rows;
    }

    /**
     * @return array{rows: list<array<string, mixed>>, total: int, page: int, pages: int, from: int, to: int}
     */
    public function query(string $search, string $status, string $sort, string $dir, int $page, int $perPage = 25): array
    {
        $rows = $this->all();

        if ($search !== '') {
            $needle = mb_strtolower($search);
            $rows = array_values(array_filter(
                $rows,
                static fn (array $row): bool => str_contains(mb_strtolower($row['name']), $needle),
            ));
        }

        if (isset(self::STATUSES[$status])) {
            $rows = array_values(array_filter($rows, static fn (array $row): bool => $row['status'] === $status));
        }

        $sort = in_array($sort, self::SORTABLE, true) ? $sort : 'downloads';
        $descending = $dir !== 'asc';
        usort($rows, static function (array $a, array $b) use ($sort, $descending): int {
            $result = is_int($a[$sort]) ? $a[$sort] <=> $b[$sort] : strcmp((string) $a[$sort], (string) $b[$sort]);

            return $descending ? -$result : $result;
        });

        $total = count($rows);
        $pages = max(1, (int) ceil($total / $perPage));
        $page = max(1, min($page, $pages));
        $slice = array_slice($rows, ($page - 1) * $perPage, $perPage);

        return [
            'rows' => array_map(static fn (array $row): array => $row + [
                'downloadsText' => number_format($row['downloads']),
                'statusText' => self::STATUSES[$row['status']],
            ], $slice),
            'total' => $total,
            'totalText' => number_format($total),
            'page' => $page,
            'pages' => $pages,
            'from' => $total === 0 ? 0 : ($page - 1) * $perPage + 1,
            'to' => $total === 0 ? 0 : ($page - 1) * $perPage + count($slice),
        ];
    }
}
