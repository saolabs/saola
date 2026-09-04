@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@vars($initialTodos = [], $initialActiveCount = 0, $initialCompletedCount = 0)
@useState($todos, $initialTodos)
@useState($newTodo, '')
@useState($filter, 'all')
@useState($activeCount, $initialActiveCount)
@useState($completedCount, $initialCompletedCount)
@useState($busy, false)
@useState($syncError, '')
@await
@extends($__layout__ . "workspace")
    @block('workspace')
        <header @class([$__VIEW_ID__ . '-Bworkspace1', 's65ba99a8', 'workspace-topbar'])>
            <div @class([$__VIEW_ID__ . '-Bworkspace11', 's65ba99a8'])>
                <p @class([$__VIEW_ID__ . '-Bworkspace111', 's65ba99a8', 'eyebrow'])><span @class([$__VIEW_ID__ . '-Bworkspace1111', 's65ba99a8'])>01</span> Personal queue</p>
                <h1 @class([$__VIEW_ID__ . '-Bworkspace112', 's65ba99a8'])>Good morning.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bworkspace12', 's65ba99a8', 'completion-ring'])>
                <strong @class([$__VIEW_ID__ . '-Bworkspace121', 's65ba99a8'])>@startMarker('output', 'Bworkspace121o1'){{ $completedCount }}@endMarker('output', 'Bworkspace121o1')/@startMarker('output', 'Bworkspace121o2'){{ count($todos) }}@endMarker('output', 'Bworkspace121o2')</strong><span @class([$__VIEW_ID__ . '-Bworkspace122', 's65ba99a8'])>complete</span>
            </div>
        </header>

        <section @class([$__VIEW_ID__ . '-Bworkspace2', 's65ba99a8', 'todo-board'])>
            @startMarker('reactive', 'Bworkspace2r1', ['stateKey' => ['syncError'], 'type' => 'if'])
            @if($syncError !== '')
                <p @class([$__VIEW_ID__ . '-Bworkspace2r1k11', 's65ba99a8']) @attr(['role' => 'alert'])>@startMarker('output', 'Bworkspace2r1k11o1'){{ $syncError }}@endMarker('output', 'Bworkspace2r1k11o1')</p>
            @endif
            @endMarker('reactive', 'Bworkspace2r1')
            <form @class([$__VIEW_ID__ . '-Bworkspace21', 's65ba99a8', 'todo-entry'])>
                <label @class([$__VIEW_ID__ . '-Bworkspace211', 's65ba99a8']) @attr(['for' => 'new-task'])>Add one clear next step</label>
                <div @class([$__VIEW_ID__ . '-Bworkspace212', 's65ba99a8'])>
                    <input @class([$__VIEW_ID__ . '-Bworkspace2121', 's65ba99a8']) @attr(['id' => 'new-task', 'type' => 'text', 'maxlength' => '500', 'placeholder' => 'What needs your attention?']) @bind($newTodo)>
                    <button @class([$__VIEW_ID__ . '-Bworkspace2122', 's65ba99a8']) @attr(['type' => 'submit']) @disabled($busy)>Add task <span @class([$__VIEW_ID__ . '-Bworkspace21221', 's65ba99a8'])>+</span></button>
                </div>
            </form>
            <div @class([$__VIEW_ID__ . '-Bworkspace22', 's65ba99a8', 'todo-toolbar'])>
                <div @class([$__VIEW_ID__ . '-Bworkspace221', 's65ba99a8'])>
                    <button @class([$__VIEW_ID__ . '-Bworkspace2211', 's65ba99a8', 'active'=> $filter === 'all'])>All <span @class([$__VIEW_ID__ . '-Bworkspace22111', 's65ba99a8'])>@startMarker('output', 'Bworkspace22111o1'){{ count($todos) }}@endMarker('output', 'Bworkspace22111o1')</span></button>
                    <button @class([$__VIEW_ID__ . '-Bworkspace2212', 's65ba99a8', 'active'=> $filter === 'active'])>Active <span @class([$__VIEW_ID__ . '-Bworkspace22121', 's65ba99a8'])>@startMarker('output', 'Bworkspace22121o1'){{ $activeCount }}@endMarker('output', 'Bworkspace22121o1')</span></button>
                    <button @class([$__VIEW_ID__ . '-Bworkspace2213', 's65ba99a8', 'active'=> $filter === 'done'])>Done <span @class([$__VIEW_ID__ . '-Bworkspace22131', 's65ba99a8'])>@startMarker('output', 'Bworkspace22131o1'){{ $completedCount }}@endMarker('output', 'Bworkspace22131o1')</span></button>
                </div>
                <button @class([$__VIEW_ID__ . '-Bworkspace222', 's65ba99a8', 'clear-button']) @disabled($busy)>Refresh list</button>
                <button @class([$__VIEW_ID__ . '-Bworkspace223', 's65ba99a8', 'clear-button']) @disabled($busy || $completedCount === 0)>Clear completed</button>
            </div>
            <div @class([$__VIEW_ID__ . '-Bworkspace23', 's65ba99a8', 'todo-list'])>
                @startMarker('reactive', 'Bworkspace23r1', ['stateKey' => ['todos'], 'type' => 'if'])
                @if(count($todos) === 0)
                    <div @class([$__VIEW_ID__ . '-Bworkspace23r1k11', 's65ba99a8', 'empty-state'])>
                        <span @class([$__VIEW_ID__ . '-Bworkspace23r1k111', 's65ba99a8'])>○</span>
                        <h2 @class([$__VIEW_ID__ . '-Bworkspace23r1k112', 's65ba99a8'])>Your queue is clear.</h2>
                        <p @class([$__VIEW_ID__ . '-Bworkspace23r1k113', 's65ba99a8'])>Add one meaningful task above.</p>
                    </div>
                @else
                    @startMarker('reactive', 'Bworkspace23r1k2l1', ['stateKey' => ['todos'], 'type' => 'foreach'])
                    @foreach($todos as $todo)
                        @startMarker('reactive', "Bworkspace23r1k2l1r1-{$todo['id']}", ['stateKey' => ['filter'], 'type' => 'if'])
                        @if($filter === 'all' || ($filter === 'active' && !$todo['completed']) || ($filter === 'done' && $todo['completed']))
                            <article @class([$__VIEW_ID__ . "-Bworkspace23r1k2l1r1k11-{$todo['id']}", 's65ba99a8', 'todo-row', 'completed'=> $todo['completed']])>
                                <button @class([$__VIEW_ID__ . "-Bworkspace23r1k2l1r1k111-{$todo['id']}", 's65ba99a8', 'todo-check']) @attr(['aria-label' => 'Toggle task']) @disabled($busy)>
                                    @startMarker('reactive', "Bworkspace23r1k2l1r1k111r1-{$todo['id']}", ['stateKey' => [], 'type' => 'if'])
                                    @if($todo['completed'])
                                        ✓
                                    @endif
                                    @endMarker('reactive', "Bworkspace23r1k2l1r1k111r1-{$todo['id']}")
                                </button>
                                <div @class([$__VIEW_ID__ . "-Bworkspace23r1k2l1r1k112-{$todo['id']}", 's65ba99a8'])><strong @class([$__VIEW_ID__ . "-Bworkspace23r1k2l1r1k1121-{$todo['id']}", 's65ba99a8'])>@startMarker('output', "Bworkspace23r1k2l1r1k1121o1-{$todo['id']}"){{ $todo['text'] }}@endMarker('output', "Bworkspace23r1k2l1r1k1121o1-{$todo['id']}")</strong><small @class([$__VIEW_ID__ . "-Bworkspace23r1k2l1r1k1122-{$todo['id']}", 's65ba99a8'])>SAOLA DEMO · TASK @startMarker('output', "Bworkspace23r1k2l1r1k1122o1-{$todo['id']}"){{ $todo['id'] }}@endMarker('output', "Bworkspace23r1k2l1r1k1122o1-{$todo['id']}")</small></div>
                                <button @class([$__VIEW_ID__ . "-Bworkspace23r1k2l1r1k113-{$todo['id']}", 's65ba99a8', 'todo-delete']) @attr(['aria-label' => 'Delete task']) @disabled($busy)>×</button>
                            </article>
                        @endif
                        @endMarker('reactive', "Bworkspace23r1k2l1r1-{$todo['id']}")
                    @endforeach
                    @endMarker('reactive', 'Bworkspace23r1k2l1')
                @endif
                @endMarker('reactive', 'Bworkspace23r1')
            </div>
            <footer @class([$__VIEW_ID__ . '-Bworkspace24', 's65ba99a8', 'todo-summary'])><p @class([$__VIEW_ID__ . '-Bworkspace241', 's65ba99a8'])><span @class([$__VIEW_ID__ . '-Bworkspace2411', 's65ba99a8'])>@startMarker('output', 'Bworkspace2411o1'){{ $activeCount }}@endMarker('output', 'Bworkspace2411o1')</span> items still need attention.</p><a @class([$__VIEW_ID__ . '-Bworkspace242', 's65ba99a8']) @attr(['href' => '/about'])>Why Saola handles this differently →</a></footer>
        </section>
    @endblock
