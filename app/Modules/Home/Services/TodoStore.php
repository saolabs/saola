<?php

namespace App\Modules\Home\Services;

use Closure;
use RuntimeException;

/** File-backed demo data, shared by SSR and JSON requests. */
class TodoStore
{
    public function __construct(private readonly ?string $path = null) {}

    public function all(): array
    {
        return $this->access();
    }

    public function create(string $text): array
    {
        return $this->access(function (array &$data) use ($text) {
            $data['todos'][] = ['id' => $data['nextId']++, 'text' => $text, 'completed' => false];
        });
    }

    public function update(int $id, bool $completed): array
    {
        return $this->access(function (array &$data) use ($id, $completed) {
            $index = $this->indexOf($data['todos'], $id);
            $data['todos'][$index]['completed'] = $completed;
        });
    }

    public function delete(int $id): array
    {
        return $this->access(function (array &$data) use ($id) {
            array_splice($data['todos'], $this->indexOf($data['todos'], $id), 1);
        });
    }

    public function clearCompleted(): array
    {
        return $this->access(function (array &$data) {
            $data['todos'] = array_values(array_filter($data['todos'], fn ($todo) => !$todo['completed']));
        });
    }

    private function indexOf(array $todos, int $id): int
    {
        foreach ($todos as $index => $todo) {
            if ($todo['id'] === $id) return $index;
        }
        abort(404, 'Task no longer exists.');
    }

    /** Hold the lock across read/modify/write so simultaneous requests do not lose tasks. */
    private function access(?Closure $change = null): array
    {
        $path = $this->path ?? storage_path('data/todos.json');
        if (!is_dir(dirname($path)) && !@mkdir(dirname($path), 0775, true) && !is_dir(dirname($path))) {
            throw new RuntimeException('Cannot create todo storage directory.');
        }
        $file = fopen($path, 'c+');
        if ($file === false) throw new RuntimeException('Cannot open todo storage.');

        try {
            if (!flock($file, $change ? LOCK_EX : LOCK_SH)) {
                throw new RuntimeException('Cannot lock todo storage.');
            }
            $raw = stream_get_contents($file);
            $data = $raw === '' ? ['nextId' => 1, 'todos' => []] : json_decode($raw, true, 512, JSON_THROW_ON_ERROR);
            if ($change) {
                $change($data);
                $json = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
                rewind($file);
                if (fwrite($file, $json) !== strlen($json) || !ftruncate($file, strlen($json)) || !fflush($file)) {
                    throw new RuntimeException('Cannot save todo storage.');
                }
            }
            return $data['todos'];
        } finally {
            flock($file, LOCK_UN);
            fclose($file);
        }
    }
}
