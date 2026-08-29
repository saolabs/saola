@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($todos, [
        [ 'id'=> 1, 'text'=> 'Review hydration lifecycle', 'completed'=> true ],
        [ 'id'=> 2, 'text'=> 'Test shared layout transition', 'completed'=> false ],
        [ 'id'=> 3, 'text'=> 'Inspect runtime asset cleanup', 'completed'=> false ]
    ])
@useState($newTodo, '')
@useState($filter, 'all')
@useState($nextId, 4)
@useState($activeCount, 2)
@useState($completedCount, 1)
@extends($__layout__ . "workspace")
    @block('workspace')
        <header @class([$__VIEW_ID__ . '-Bworkspace1', 's3bfa2ee6', 'workspace-topbar'])>
            <div @class([$__VIEW_ID__ . '-Bworkspace11', 's3bfa2ee6'])>
                <p @class([$__VIEW_ID__ . '-Bworkspace111', 's3bfa2ee6', 'eyebrow'])><span @class([$__VIEW_ID__ . '-Bworkspace1111', 's3bfa2ee6'])>01</span> Personal queue</p>
                <h1 @class([$__VIEW_ID__ . '-Bworkspace112', 's3bfa2ee6'])>Good morning.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bworkspace12', 's3bfa2ee6', 'completion-ring'])>
                <strong @class([$__VIEW_ID__ . '-Bworkspace121', 's3bfa2ee6'])>@startMarker('output', 'Bworkspace121o1'){{ $completedCount }}@endMarker('output', 'Bworkspace121o1')/@startMarker('output', 'Bworkspace121o2'){{ count($todos) }}@endMarker('output', 'Bworkspace121o2')</strong><span @class([$__VIEW_ID__ . '-Bworkspace122', 's3bfa2ee6'])>complete</span>
            </div>
        </header>

        <section @class([$__VIEW_ID__ . '-Bworkspace2', 's3bfa2ee6', 'todo-board'])>
            <form @class([$__VIEW_ID__ . '-Bworkspace21', 's3bfa2ee6', 'todo-entry'])>
                <label @class([$__VIEW_ID__ . '-Bworkspace211', 's3bfa2ee6']) @attr(['for' => 'new-task'])>Add one clear next step</label>
                <div @class([$__VIEW_ID__ . '-Bworkspace212', 's3bfa2ee6'])>
                    <input @class([$__VIEW_ID__ . '-Bworkspace2121', 's3bfa2ee6']) @attr(['id' => 'new-task', 'type' => 'text', 'placeholder' => 'What needs your attention?']) @bind($newTodo)>
                    <button @class([$__VIEW_ID__ . '-Bworkspace2122', 's3bfa2ee6']) @attr(['type' => 'submit'])>Add task <span @class([$__VIEW_ID__ . '-Bworkspace21221', 's3bfa2ee6'])>+</span></button>
                </div>
            </form>
            <div @class([$__VIEW_ID__ . '-Bworkspace22', 's3bfa2ee6', 'todo-toolbar'])>
                <div @class([$__VIEW_ID__ . '-Bworkspace221', 's3bfa2ee6'])>
                    <button @class([$__VIEW_ID__ . '-Bworkspace2211', 's3bfa2ee6', 'active'=> $filter === 'all'])>All <span @class([$__VIEW_ID__ . '-Bworkspace22111', 's3bfa2ee6'])>@startMarker('output', 'Bworkspace22111o1'){{ count($todos) }}@endMarker('output', 'Bworkspace22111o1')</span></button>
                    <button @class([$__VIEW_ID__ . '-Bworkspace2212', 's3bfa2ee6', 'active'=> $filter === 'active'])>Active <span @class([$__VIEW_ID__ . '-Bworkspace22121', 's3bfa2ee6'])>@startMarker('output', 'Bworkspace22121o1'){{ $activeCount }}@endMarker('output', 'Bworkspace22121o1')</span></button>
                    <button @class([$__VIEW_ID__ . '-Bworkspace2213', 's3bfa2ee6', 'active'=> $filter === 'done'])>Done <span @class([$__VIEW_ID__ . '-Bworkspace22131', 's3bfa2ee6'])>@startMarker('output', 'Bworkspace22131o1'){{ $completedCount }}@endMarker('output', 'Bworkspace22131o1')</span></button>
                </div>
                <button @class([$__VIEW_ID__ . '-Bworkspace222', 's3bfa2ee6', 'clear-button']) @disabled($completedCount === 0)>Clear completed</button>
            </div>
            <div @class([$__VIEW_ID__ . '-Bworkspace23', 's3bfa2ee6', 'todo-list'])>
                @startMarker('reactive', 'Bworkspace23r1', ['stateKey' => ['todos'], 'type' => 'if'])
                @if(count($todos) === 0)
                    <div @class([$__VIEW_ID__ . '-Bworkspace23r1k11', 's3bfa2ee6', 'empty-state'])>
                        <span @class([$__VIEW_ID__ . '-Bworkspace23r1k111', 's3bfa2ee6'])>○</span>
                        <h2 @class([$__VIEW_ID__ . '-Bworkspace23r1k112', 's3bfa2ee6'])>Your queue is clear.</h2>
                        <p @class([$__VIEW_ID__ . '-Bworkspace23r1k113', 's3bfa2ee6'])>Add one meaningful task above.</p>
                    </div>
                @else
                    @startMarker('reactive', 'Bworkspace23r1k2l1', ['stateKey' => ['todos'], 'type' => 'foreach'])
                    @foreach($todos as $todo)
                        @startMarker('reactive', "Bworkspace23r1k2l1r1-{$todo['id']}", ['stateKey' => ['filter'], 'type' => 'if'])
                        @if($filter === 'all' || ($filter === 'active' && !$todo['completed']) || ($filter === 'done' && $todo['completed']))
                            <article @class([$__VIEW_ID__ . "-Bworkspace23r1k2l1r1k11-{$todo['id']}", 's3bfa2ee6', 'todo-row', 'completed'=> $todo['completed']])>
                                <button @class([$__VIEW_ID__ . "-Bworkspace23r1k2l1r1k111-{$todo['id']}", 's3bfa2ee6', 'todo-check']) @attr(['aria-label' => 'Toggle task'])>
                                    @startMarker('reactive', "Bworkspace23r1k2l1r1k111r1-{$todo['id']}", ['stateKey' => [], 'type' => 'if'])
                                    @if($todo['completed'])
                                        ✓
                                    @endif
                                    @endMarker('reactive', "Bworkspace23r1k2l1r1k111r1-{$todo['id']}")
                                </button>
                                <div @class([$__VIEW_ID__ . "-Bworkspace23r1k2l1r1k112-{$todo['id']}", 's3bfa2ee6'])><strong @class([$__VIEW_ID__ . "-Bworkspace23r1k2l1r1k1121-{$todo['id']}", 's3bfa2ee6'])>@startMarker('output', "Bworkspace23r1k2l1r1k1121o1-{$todo['id']}"){{ $todo['text'] }}@endMarker('output', "Bworkspace23r1k2l1r1k1121o1-{$todo['id']}")</strong><small @class([$__VIEW_ID__ . "-Bworkspace23r1k2l1r1k1122-{$todo['id']}", 's3bfa2ee6'])>SAOLA DEMO · TASK @startMarker('output', "Bworkspace23r1k2l1r1k1122o1-{$todo['id']}"){{ $todo['id'] }}@endMarker('output', "Bworkspace23r1k2l1r1k1122o1-{$todo['id']}")</small></div>
                                <button @class([$__VIEW_ID__ . "-Bworkspace23r1k2l1r1k113-{$todo['id']}", 's3bfa2ee6', 'todo-delete']) @attr(['aria-label' => 'Delete task'])>×</button>
                            </article>
                        @endif
                        @endMarker('reactive', "Bworkspace23r1k2l1r1-{$todo['id']}")
                    @endforeach
                    @endMarker('reactive', 'Bworkspace23r1k2l1')
                @endif
                @endMarker('reactive', 'Bworkspace23r1')
            </div>
            <footer @class([$__VIEW_ID__ . '-Bworkspace24', 's3bfa2ee6', 'todo-summary'])><p @class([$__VIEW_ID__ . '-Bworkspace241', 's3bfa2ee6'])><span @class([$__VIEW_ID__ . '-Bworkspace2411', 's3bfa2ee6'])>@startMarker('output', 'Bworkspace2411o1'){{ $activeCount }}@endMarker('output', 'Bworkspace2411o1')</span> items still need attention.</p><a @class([$__VIEW_ID__ . '-Bworkspace242', 's3bfa2ee6']) @attr(['href' => '/about'])>Why Saola handles this differently →</a></footer>
        </section>
    @endblock
