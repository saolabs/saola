<?php

namespace Tests\Feature\Api;

use Tests\TestCase;

/**
 * Roster API — CRUD trên storage/data/users.json.
 *
 * Điểm cần canh: version (`updated_at`) phải luôn tăng và update phải từ chối
 * (409) khi client cầm version cũ — toàn bộ phần hoà giải xung đột phía client
 * dựa vào đúng hai tính chất này.
 */
class RosterApiTest extends TestCase
{
    private const URL = '/api/api/roster';

    private string $path;
    private ?string $backup = null;

    protected function setUp(): void
    {
        parent::setUp();
        $this->path = storage_path('data/users.json');
        $this->backup = is_file($this->path) ? file_get_contents($this->path) : null;

        if (!is_dir(dirname($this->path))) {
            mkdir(dirname($this->path), 0775, true);
        }
        file_put_contents($this->path, json_encode([[
            'uuid' => 'test-uuid-1',
            'name' => 'Mai Lan',
            'email' => 'lan@saola.dev',
            'gender' => 'female',
            'birthdate' => '1996-04-12',
            'updated_at' => 1755900000000,
        ]]));
    }

    protected function tearDown(): void
    {
        if ($this->backup === null) {
            @unlink($this->path);
        } else {
            file_put_contents($this->path, $this->backup);
        }
        parent::tearDown();
    }

    public function test_index_returns_seeded_users(): void
    {
        $this->getJson(self::URL)
            ->assertOk()
            ->assertJsonPath('data.0.uuid', 'test-uuid-1')
            ->assertJsonPath('data.0.name', 'Mai Lan');
    }

    public function test_store_assigns_uuid_and_version(): void
    {
        $response = $this->postJson(self::URL, [
            'name' => 'Le Minh',
            'email' => 'minh@saola.dev',
            'gender' => 'male',
            'birthdate' => '1998-07-07',
        ])->assertCreated();

        $this->assertNotEmpty($response->json('data.uuid'));
        $this->assertGreaterThan(1755900000000, $response->json('data.updated_at'));
        $this->getJson(self::URL)->assertJsonCount(2, 'data');
    }

    public function test_store_rejects_invalid_payload(): void
    {
        $this->postJson(self::URL, [
            'name' => '',
            'email' => 'not-an-email',
            'gender' => 'alien',
            'birthdate' => '07/07/1998',
        ])->assertStatus(422);
    }

    public function test_update_with_current_version_succeeds_and_bumps_version(): void
    {
        $response = $this->putJson(self::URL . '/test-uuid-1', [
            'name' => 'Mai Lan 2',
            'email' => 'lan@saola.dev',
            'gender' => 'female',
            'birthdate' => '1996-04-12',
            'version' => 1755900000000,
        ])->assertOk();

        $this->assertSame('Mai Lan 2', $response->json('data.name'));
        $this->assertGreaterThan(1755900000000, $response->json('data.updated_at'));
    }

    public function test_update_with_stale_version_conflicts_and_returns_current_record(): void
    {
        $response = $this->putJson(self::URL . '/test-uuid-1', [
            'name' => 'Ghi đè',
            'email' => 'lan@saola.dev',
            'gender' => 'female',
            'birthdate' => '1996-04-12',
            'version' => 1,
        ])->assertStatus(409);

        // Client cần bản hiện tại trong body để dựng khối đối chiếu.
        $this->assertSame('Mai Lan', $response->json('data.name'));
        $this->assertSame(1755900000000, $response->json('data.updated_at'));
    }

    public function test_update_without_version_overwrites(): void
    {
        $this->putJson(self::URL . '/test-uuid-1', [
            'name' => 'Không kiểm version',
            'email' => 'lan@saola.dev',
            'gender' => 'female',
            'birthdate' => '1996-04-12',
        ])->assertOk()->assertJsonPath('data.name', 'Không kiểm version');
    }

    public function test_update_missing_user_returns_404(): void
    {
        $this->putJson(self::URL . '/khong-ton-tai', [
            'name' => 'X',
            'email' => 'x@saola.dev',
            'gender' => 'other',
            'birthdate' => '2000-01-01',
        ])->assertNotFound();
    }

    public function test_destroy_removes_then_404s(): void
    {
        $this->deleteJson(self::URL . '/test-uuid-1')->assertOk();
        $this->getJson(self::URL)->assertJsonCount(0, 'data');
        $this->deleteJson(self::URL . '/test-uuid-1')->assertNotFound();
    }
}
