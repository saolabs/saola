<?php

namespace App\Modules\Board\Services;

use Closure;
use RuntimeException;

/**
 * Kho thẻ Kanban, lưu trong một file JSON — demo này KHÔNG cần database.
 *
 * Giữ khoá suốt cả chu trình đọc/sửa/ghi giống TodoStore: hai request kéo thả
 * gần nhau mà không khoá thì một nước đi bị nuốt, và đó đúng là thứ trang này
 * dùng để chứng minh cập nhật lạc quan có quay lui được hay không.
 */
class BoardStore
{
    public const COLUMNS = [
        'todo' => 'Cần làm',
        'doing' => 'Đang làm',
        'done' => 'Xong',
    ];

    private const SEED = [
        ['title' => 'Cổng parity SSR↔CSR', 'column' => 'done'],
        ['title' => 'Sửa marker s:b: phía CSR', 'column' => 'done'],
        ['title' => 'Giữ whitespace khi sinh JS', 'column' => 'done'],
        ['title' => 'Biểu đồ giá realtime', 'column' => 'doing'],
        ['title' => 'Bảng dữ liệu lọc/sắp/phân trang', 'column' => 'doing'],
        ['title' => 'Luồng sự kiện SSE', 'column' => 'todo'],
        ['title' => 'Chốt RUNTIME_CONTRACT lên v1', 'column' => 'todo'],
        ['title' => 'Dọn 8 cổng parity đỏ sẵn', 'column' => 'todo'],
    ];

    public function __construct(private readonly ?string $path = null) {}

    /** @return list<array{key: string, label: string, cards: list<array<string, mixed>>}> */
    public function board(): array
    {
        return $this->group($this->access()['cards']);
    }

    /**
     * Chuyển thẻ sang cột khác, chèn vào đúng vị trí.
     *
     * `$index` là vị trí MONG MUỐN trong cột đích. Kẹp lại thay vì báo lỗi:
     * client tính vị trí từ DOM, mà DOM có thể đã đổi giữa lúc thả và lúc
     * request tới nơi — từ chối nước đi vì lệch một ô là hành xử tệ.
     */
    public function move(int $id, string $column, int $index): array
    {
        if (! isset(self::COLUMNS[$column])) {
            abort(422, 'Cột không hợp lệ.');
        }

        return $this->group($this->access(function (array &$data) use ($id, $column, $index) {
            $position = $this->indexOf($data['cards'], $id);
            $card = $data['cards'][$position];
            array_splice($data['cards'], $position, 1);

            $card['column'] = $column;
            $targets = array_keys(array_filter(
                $data['cards'],
                static fn (array $c): bool => $c['column'] === $column,
            ));

            $at = count($data['cards']);
            if ($targets !== []) {
                $clamped = max(0, min($index, count($targets)));
                $at = $clamped === count($targets) ? $targets[count($targets) - 1] + 1 : $targets[$clamped];
            }
            array_splice($data['cards'], $at, 0, [$card]);
        })['cards']);
    }

    public function create(string $title): array
    {
        return $this->group($this->access(function (array &$data) use ($title) {
            array_unshift($data['cards'], [
                'id' => $data['nextId']++,
                'title' => $title,
                'column' => 'todo',
            ]);
        })['cards']);
    }

    public function rename(int $id, string $title): array
    {
        return $this->group($this->access(function (array &$data) use ($id, $title) {
            $data['cards'][$this->indexOf($data['cards'], $id)]['title'] = $title;
        })['cards']);
    }

    public function destroy(int $id): array
    {
        return $this->group($this->access(function (array &$data) use ($id) {
            array_splice($data['cards'], $this->indexOf($data['cards'], $id), 1);
        })['cards']);
    }

    /** @param list<array<string, mixed>> $cards @return list<array{key: string, label: string, cards: list<array<string, mixed>>}> */
    private function group(array $cards): array
    {
        $columns = [];
        foreach (self::COLUMNS as $key => $label) {
            $columns[] = [
                'key' => $key,
                'label' => $label,
                'cards' => array_values(array_filter($cards, static fn (array $c): bool => $c['column'] === $key)),
            ];
        }

        return $columns;
    }

    /** @param list<array<string, mixed>> $cards */
    private function indexOf(array $cards, int $id): int
    {
        foreach ($cards as $index => $card) {
            if ($card['id'] === $id) return $index;
        }
        abort(404, 'Thẻ không còn tồn tại.');
    }

    private function access(?Closure $change = null): array
    {
        $path = $this->path ?? storage_path('data/board.json');
        if (! is_dir(dirname($path)) && ! @mkdir(dirname($path), 0775, true) && ! is_dir(dirname($path))) {
            throw new RuntimeException('Không tạo được thư mục lưu bảng.');
        }
        $file = fopen($path, 'c+');
        if ($file === false) throw new RuntimeException('Không mở được file bảng.');

        try {
            if (! flock($file, $change ? LOCK_EX : LOCK_SH)) {
                throw new RuntimeException('Không khoá được file bảng.');
            }
            $raw = stream_get_contents($file);
            $data = $raw === '' ? $this->seed() : json_decode($raw, true, 512, JSON_THROW_ON_ERROR);

            if ($change) {
                $change($data);
                $json = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
                rewind($file);
                if (fwrite($file, $json) !== strlen($json) || ! ftruncate($file, strlen($json)) || ! fflush($file)) {
                    throw new RuntimeException('Không ghi được file bảng.');
                }
            } elseif ($raw === '') {
                // Lần đầu: ghi seed xuống để mọi request sau thấy cùng một bảng.
                $json = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
                @file_put_contents($path, $json);
            }

            return $data;
        } finally {
            flock($file, LOCK_UN);
            fclose($file);
        }
    }

    private function seed(): array
    {
        $cards = [];
        $id = 1;
        foreach (self::SEED as $card) {
            $cards[] = ['id' => $id++, 'title' => $card['title'], 'column' => $card['column']];
        }

        return ['nextId' => $id, 'cards' => $cards];
    }
}
