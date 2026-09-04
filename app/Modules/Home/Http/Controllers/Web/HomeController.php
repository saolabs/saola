<?php

namespace App\Modules\Home\Http\Controllers\Web;

use App\Http\Controllers\WebController;
use App\Modules\Home\Services\TodoStore;
use Illuminate\Http\Request;
class HomeController extends WebController
{
    protected $module = 'home';

    public function index()
    {
        return $this->response([]);
    }


    public function about()
    {
        return $this->response([]);
    }





    public function privacy()
    {
        return $this->response([]);
    }

    public function terms()
    {
        return $this->response([]);
    }

    public function contact()
    {
        return $this->response([]);
    }

    public function todo(TodoStore $store)
    {
        return $this->response($this->todoData($store->all()));
    }

    public function storeTodo(Request $request, TodoStore $store)
    {
        $input = $request->validate(['text' => ['required', 'string', 'max:500']]);
        return $this->response($this->todoData($store->create($input['text'])), null, ['forceJson' => true, 'status' => 201]);
    }

    public function updateTodo(Request $request, TodoStore $store, int $id)
    {
        $input = $request->validate(['completed' => ['required', 'boolean']]);
        return $this->response($this->todoData($store->update($id, (bool) $input['completed'])), null, ['forceJson' => true]);
    }

    public function deleteTodo(TodoStore $store, int $id)
    {
        return $this->response($this->todoData($store->delete($id)), null, ['forceJson' => true]);
    }

    public function clearCompletedTodos(TodoStore $store)
    {
        return $this->response($this->todoData($store->clearCompleted()), null, ['forceJson' => true]);
    }

    private function todoData(array $todos): array
    {
        $completed = count(array_filter($todos, fn ($todo) => $todo['completed']));
        return [
            'initialTodos' => $todos,
            'initialActiveCount' => count($todos) - $completed,
            'initialCompletedCount' => $completed,
        ];
    }

}
