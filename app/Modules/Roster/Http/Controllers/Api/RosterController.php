<?php

namespace App\Modules\Roster\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

/**
 * CRUD trần trên storage/data/users.json.
 *
 * Mỗi bản ghi có `updated_at` (epoch ms, luôn tăng) làm version. update()
 * nhận thêm `version`: lệch với bản trên đĩa nghĩa là có người khác vừa sửa
 * → 409 kèm bản hiện tại để client tự hoà giải.
 */
class RosterController extends ApiController
{
    protected $module = 'roster';

    private const GENDERS = ['male', 'female', 'other'];

    public function index(): JsonResponse
    {
        return $this->jsonSuccess($this->read());
    }

    public function store(Request $request): JsonResponse
    {
        $input = $this->validated($request);

        $users = $this->read();
        $user = $input + [
            'uuid' => (string) Str::uuid(),
            'updated_at' => $this->stamp($users),
        ];
        $users[] = $user;
        $this->write($users);

        return $this->jsonCreated($user);
    }

    public function update(Request $request, string $uuid): JsonResponse
    {
        $input = $this->validated($request);
        $version = $request->input('version');

        $users = $this->read();
        $index = $this->indexOf($users, $uuid);
        if ($index === null) {
            return $this->jsonNotFound('User đã bị xoá');
        }

        // Optimistic concurrency: client gửi version nó đang cầm.
        if ($version !== null && (int) $version !== (int) $users[$index]['updated_at']) {
            return $this->jsonConflict('User đã bị người khác sửa', $users[$index]);
        }

        $users[$index] = array_merge($users[$index], $input, [
            'updated_at' => $this->stamp($users),
        ]);
        $this->write($users);

        return $this->jsonSuccess($users[$index]);
    }

    public function destroy(string $uuid): JsonResponse
    {
        $users = $this->read();
        $index = $this->indexOf($users, $uuid);
        if ($index === null) {
            return $this->jsonNotFound('User đã bị xoá');
        }

        array_splice($users, $index, 1);
        $this->write($users);

        return $this->jsonSuccess(null, 'Đã xoá');
    }

    // ─── Storage ────────────────────────────────────────────────

    private function path(): string
    {
        return storage_path('data/users.json');
    }

    private function read(): array
    {
        $path = $this->path();
        if (!is_file($path)) {
            return [];
        }
        return json_decode(file_get_contents($path), true) ?: [];
    }

    private function write(array $users): void
    {
        $path = $this->path();
        if (!is_dir(dirname($path))) {
            mkdir(dirname($path), 0775, true);
        }
        file_put_contents($path, json_encode(array_values($users), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), LOCK_EX);
    }

    private function indexOf(array $users, string $uuid): ?int
    {
        foreach ($users as $i => $user) {
            if (($user['uuid'] ?? null) === $uuid) {
                return $i;
            }
        }
        return null;
    }

    /** Epoch ms, ép luôn tăng — hai lượt ghi trong cùng 1ms vẫn khác version. */
    private function stamp(array $users): int
    {
        $now = (int) round(microtime(true) * 1000);
        $max = 0;
        foreach ($users as $user) {
            $max = max($max, (int) ($user['updated_at'] ?? 0));
        }
        return max($now, $max + 1);
    }

    private function validated(Request $request): array
    {
        return $request->validate([
            'name' => ['required', 'string', 'max:120'],
            'email' => ['required', 'email', 'max:190'],
            'gender' => ['required', 'in:' . implode(',', self::GENDERS)],
            'birthdate' => ['required', 'date_format:Y-m-d'],
        ]);
    }
}
