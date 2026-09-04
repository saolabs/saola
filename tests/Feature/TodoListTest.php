<?php

namespace Tests\Feature;

use App\Modules\Home\Services\TodoStore;
use Tests\TestCase;

class TodoListTest extends TestCase
{
    private string $todoPath;

    protected function setUp(): void
    {
        parent::setUp();
        $this->todoPath = tempnam(sys_get_temp_dir(), 'saola-todos-');
        $this->app->instance(TodoStore::class, new TodoStore($this->todoPath));
    }

    protected function tearDown(): void
    {
        if (isset($this->todoPath)) unlink($this->todoPath);
        parent::tearDown();
    }

    public function test_same_url_serves_persisted_tasks_as_ssr_and_json(): void
    {
        $this->postJson('/todo-list', ['text' => 'Saved <task>'])
            ->assertCreated()->assertJsonPath('data.initialTodos.0.text', 'Saved <task>');

        $this->assertSame('Saved <task>', (new TodoStore($this->todoPath))->all()[0]['text']);
        $this->get('/todo-list', ['Accept' => 'text/html'])
            ->assertOk()->assertSee('Saved &lt;task&gt;', false)->assertSee('todo-row');

        $this->get('/todo-list', ['Accept' => 'text/html', 'X-Sao-Response' => 'json'])
            ->assertOk()->assertHeader('Content-Type', 'application/json; charset=utf-8')
            ->assertJsonPath('data.initialTodos.0.text', 'Saved <task>')
            ->assertJsonPath('data.initialActiveCount', 1)
            ->assertJsonPath('data.initialCompletedCount', 0);
    }

    public function test_mutations_persist_and_clear_only_completed_tasks(): void
    {
        $first = $this->postJson('/todo-list', ['text' => 'First'])->json('data.initialTodos.0.id');
        $second = $this->postJson('/todo-list', ['text' => 'Second'])->json('data.initialTodos.1.id');
        $this->putJson('/todo-list/'.$first, ['completed' => true])
            ->assertOk()->assertJsonPath('data.initialCompletedCount', 1);
        $this->deleteJson('/todo-list/completed')->assertOk()
            ->assertJsonCount(1, 'data.initialTodos')
            ->assertJsonPath('data.initialTodos.0.id', $second)
            ->assertJsonPath('data.initialActiveCount', 1);
        $this->deleteJson('/todo-list/'.$second)->assertOk()->assertJsonPath('data.initialTodos', []);
        $this->assertSame([], (new TodoStore($this->todoPath))->all());
        $third = $this->postJson('/todo-list', ['text' => 'Third'])->assertCreated()->json('data.initialTodos.0.id');
        $this->assertGreaterThan($second, $third);
    }

    public function test_task_text_cannot_close_the_ssr_boot_script(): void
    {
        $text = '</script><script>window.injected=true</script>';
        $this->postJson('/todo-list', ['text' => $text])->assertCreated();
        $this->get('/todo-list')->assertOk()
            ->assertSee(htmlspecialchars($text, ENT_QUOTES, 'UTF-8'), false)
            ->assertDontSee($text, false);
        $this->getJson('/todo-list')->assertJsonPath('data.initialTodos.0.text', $text);
    }

    public function test_invalid_and_missing_tasks_do_not_change_saved_data(): void
    {
        $this->postJson('/todo-list', ['text' => '   '])->assertUnprocessable();
        $this->postJson('/todo-list', ['text' => str_repeat('x', 501)])->assertUnprocessable();
        $this->postJson('/todo-list', ['text' => 'Keep me'])->assertCreated();
        $this->putJson('/todo-list/1', ['completed' => 'invalid'])->assertUnprocessable();
        $this->putJson('/todo-list/999', ['completed' => true])->assertNotFound();
        $this->deleteJson('/todo-list/999')->assertNotFound();
        $this->getJson('/todo-list')->assertOk()->assertJsonCount(1, 'data.initialTodos')
            ->assertJsonPath('data.initialTodos.0.completed', false);
    }
}
