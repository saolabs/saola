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
        <header @class([$__VIEW_ID__ . '-33ba6fc5', 'workspace-topbar'])><div @class([$__VIEW_ID__ . '-74083b07'])><p @class([$__VIEW_ID__ . '-6066db4b', 'eyebrow'])><span @class([$__VIEW_ID__ . '-6cf41081'])>01</span> Personal queue</p><h1 @class([$__VIEW_ID__ . '-0ddacfc5'])>Good morning.</h1></div><div @class([$__VIEW_ID__ . '-8d6a301b', 'completion-ring'])><strong @class([$__VIEW_ID__ . '-07fe4995'])>@startMarker('output', '54916756'){{ $completedCount }}@endMarker('output', '54916756')/@startMarker('output', '29b9d7bb'){{ count($todos) }}@endMarker('output', '29b9d7bb')</strong><span @class([$__VIEW_ID__ . '-55822db1'])>complete</span></div></header>

        <section @class([$__VIEW_ID__ . '-2532706c', 'todo-board'])>
            <form @class([$__VIEW_ID__ . '-9a7a2c94', 'todo-entry'])><label @class([$__VIEW_ID__ . '-1239dd2e']) @attr(['for' => 'new-task'])>Add one clear next step</label><div @class([$__VIEW_ID__ . '-f5a4866b'])><input @class([$__VIEW_ID__ . '-14eae2aa']) @attr(['id' => 'new-task', 'type' => 'text', 'placeholder' => 'What needs your attention?']) @bind($newTodo)><button @class([$__VIEW_ID__ . '-42ff8191']) @attr(['type' => 'submit'])>Add task <span @class([$__VIEW_ID__ . '-49fa209a'])>+</span></button></div></form>
            <div @class([$__VIEW_ID__ . '-aa5f781d', 'todo-toolbar'])>
                <div @class([$__VIEW_ID__ . '-47c6ff27'])><button @class([$__VIEW_ID__ . '-c0ff40d6', 'active'=> $filter === 'all'])>All <span @class([$__VIEW_ID__ . '-56d021bb'])>@startMarker('output', 'ba497928'){{ count($todos) }}@endMarker('output', 'ba497928')</span></button><button @class([$__VIEW_ID__ . '-47caf5de', 'active'=> $filter === 'active'])>Active <span @class([$__VIEW_ID__ . '-c1808610'])>@startMarker('output', 'fd013c02'){{ $activeCount }}@endMarker('output', 'fd013c02')</span></button><button @class([$__VIEW_ID__ . '-f0106f39', 'active'=> $filter === 'done'])>Done <span @class([$__VIEW_ID__ . '-b8a215c9'])>@startMarker('output', '5a677e1d'){{ $completedCount }}@endMarker('output', '5a677e1d')</span></button></div>
                <button @class([$__VIEW_ID__ . '-c99f5306', 'clear-button']) @disabled($completedCount === 0)>Clear completed</button>
            </div>
            <div @class([$__VIEW_ID__ . '-a734d4f3', 'todo-list'])>
                @startMarker('reactive', '05835365', ['stateKey' => ['todos'], 'type' => 'if'])
                @if(count($todos) === 0)
                    <div @class([$__VIEW_ID__ . '-b75e5ca7', 'empty-state'])><span @class([$__VIEW_ID__ . '-25a80dd0'])>○</span><h2 @class([$__VIEW_ID__ . '-7d094694'])>Your queue is clear.</h2><p @class([$__VIEW_ID__ . '-f32d7c84'])>Add one meaningful task above.</p></div>
                @else
                    @startMarker('reactive', 'a1afe760', ['stateKey' => ['todos'], 'type' => 'foreach'])
                    @foreach($todos as $todo)
                        @startMarker('reactive', "8dd28e28-{$todo['id']}", ['stateKey' => ['filter'], 'type' => 'if'])
                        @if($filter === 'all' || ($filter === 'active' && !$todo['completed']) || ($filter === 'done' && $todo['completed']))
                            <article @class([$__VIEW_ID__ . "-da9a7a8e-{$todo['id']}", 'todo-row', 'completed'=> $todo['completed']])>
                                <button @class([$__VIEW_ID__ . "-3b156e92-{$todo['id']}", 'todo-check']) @attr(['aria-label' => 'Toggle task'])>
                                    @startMarker('reactive', "aba5abe7-{$todo['id']}", ['stateKey' => [], 'type' => 'if'])
                                    @if($todo['completed'])
                                        ✓
                                    @endif
                                    @endMarker('reactive', "aba5abe7-{$todo['id']}")
                                </button>
                                <div @class([$__VIEW_ID__ . "-82692654-{$todo['id']}"])><strong @class([$__VIEW_ID__ . "-0185855c-{$todo['id']}"])>@startMarker('output', "70d19571-{$todo['id']}"){{ $todo['text'] }}@endMarker('output', "70d19571-{$todo['id']}")</strong><small @class([$__VIEW_ID__ . "-3e7229d0-{$todo['id']}"])>SAOLA DEMO · TASK @startMarker('output', "4e67dbd4-{$todo['id']}"){{ $todo['id'] }}@endMarker('output', "4e67dbd4-{$todo['id']}")</small></div>
                                <button @class([$__VIEW_ID__ . "-09d56e46-{$todo['id']}", 'todo-delete']) @attr(['aria-label' => 'Delete task'])>×</button>
                            </article>
                        @endif
                        @endMarker('reactive', "8dd28e28-{$todo['id']}")
                    @endforeach
                    @endMarker('reactive', 'a1afe760')
                @endif
                @endMarker('reactive', '05835365')
            </div>
            <footer @class([$__VIEW_ID__ . '-f34c97bb', 'todo-summary'])><p @class([$__VIEW_ID__ . '-903fa463'])><span @class([$__VIEW_ID__ . '-ee3f8d27'])>@startMarker('output', '372a21ea'){{ $activeCount }}@endMarker('output', '372a21ea')</span> items still need attention.</p><a @class([$__VIEW_ID__ . '-f3e92dce']) @attr(['href' => '/about'])>Why Saola handles this differently →</a></footer>
        </section>
    @endblock
