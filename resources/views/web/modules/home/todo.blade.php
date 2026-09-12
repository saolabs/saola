@exec($__ONE_COMPONENT_REGISTRY__ = ['code-block' => 'web.components.code-block']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@vars($initialTodos =  [], $initialActiveCount = 0, $initialCompletedCount = 0)
@useState($todos, $initialTodos)
@useState($newTodo, '')
@useState($filter, 'all')
@useState($activeCount, $initialActiveCount)
@useState($completedCount, $initialCompletedCount)
@useState($busy, false)
@useState($syncError, '')
@await
@extends($__layout__ . 'lab')
    @section('meta:title', 'Todo App Demo - State Cục bộ & Phản ứng Tức thì | Saola')
    @section('meta:description', 'Trải nghiệm ứng dụng Todo mẫu xây dựng trên Saola: State cục bộ ở client instance, cập nhật tức thì với @bind, giữ nguyên qua điều hướng back/forward.')
    @section('meta:keywords', 'saola todo demo, quan ly cong viec, reactive state, bind directive, pagecache')
    @block('main')
        <p @class([$__VIEW_ID__ . '-Bmain1', 's65ba99a8', 'kicker'])><span @class([$__VIEW_ID__ . '-Bmain11', 's65ba99a8'])>ỨNG DỤNG THẬT · STATE CỤC BỘ</span></p>
        <div @class([$__VIEW_ID__ . '-Bmain2', 's65ba99a8', 'workspace-topbar'])>
            <div @class([$__VIEW_ID__ . '-Bmain21', 's65ba99a8'])>
                <h1 @class([$__VIEW_ID__ . '-Bmain211', 's65ba99a8'])>Todo — State cục bộ.</h1>
                <p @class([$__VIEW_ID__ . '-Bmain212', 's65ba99a8', 'lab-lead'])>State nằm trọn vẹn ở client instance, cập nhật tức thì với <code @class([$__VIEW_ID__ . '-Bmain2121', 's65ba99a8'])>&#64;bind</code> và giữ nguyên qua điều hướng back/forward nhờ PageCache.</p>
            </div>
            <div @class([$__VIEW_ID__ . '-Bmain22', 's65ba99a8', 'completion-ring'])>
                <strong @class([$__VIEW_ID__ . '-Bmain221', 's65ba99a8'])>@startMarker('output', 'Bmain221o1'){{ $completedCount }}@endMarker('output', 'Bmain221o1')/@startMarker('output', 'Bmain221o2'){{ count($todos) }}@endMarker('output', 'Bmain221o2')</strong><span @class([$__VIEW_ID__ . '-Bmain222', 's65ba99a8'])>complete</span>
            </div>
        </div>

        <section @class([$__VIEW_ID__ . '-Bmain3', 's65ba99a8', 'todo-board'])>
            @startMarker('reactive', 'Bmain3r1', ['stateKey' => ['syncError'], 'type' => 'if'])
            @if($syncError !== '')
                <p @class([$__VIEW_ID__ . '-Bmain3r1k11', 's65ba99a8']) @attr(['role' => 'alert'])>@startMarker('output', 'Bmain3r1k11o1'){{ $syncError }}@endMarker('output', 'Bmain3r1k11o1')</p>
            @endif
            @endMarker('reactive', 'Bmain3r1')
            <form @class([$__VIEW_ID__ . '-Bmain31', 's65ba99a8', 'todo-entry'])>
                <label @class([$__VIEW_ID__ . '-Bmain311', 's65ba99a8']) @attr(['for' => 'new-task'])>Add one clear next step</label>
                <div @class([$__VIEW_ID__ . '-Bmain312', 's65ba99a8'])>
                    <input @class([$__VIEW_ID__ . '-Bmain3121', 's65ba99a8']) @attr(['id' => 'new-task', 'type' => 'text', 'maxlength' => '500', 'placeholder' => 'What needs your attention?']) @bind($newTodo)>
                    <button @class([$__VIEW_ID__ . '-Bmain3122', 's65ba99a8']) @attr(['type' => 'submit']) @disabled($busy)>Add task <span @class([$__VIEW_ID__ . '-Bmain31221', 's65ba99a8'])>+</span></button>
                </div>
            </form>
            <div @class([$__VIEW_ID__ . '-Bmain32', 's65ba99a8', 'todo-toolbar'])>
                <div @class([$__VIEW_ID__ . '-Bmain321', 's65ba99a8'])>
                    <button @class([$__VIEW_ID__ . '-Bmain3211', 's65ba99a8', 'active'=> $filter === 'all'])>All <span @class([$__VIEW_ID__ . '-Bmain32111', 's65ba99a8'])>@startMarker('output', 'Bmain32111o1'){{ count($todos) }}@endMarker('output', 'Bmain32111o1')</span></button>
                    <button @class([$__VIEW_ID__ . '-Bmain3212', 's65ba99a8', 'active'=> $filter === 'active'])>Active <span @class([$__VIEW_ID__ . '-Bmain32121', 's65ba99a8'])>@startMarker('output', 'Bmain32121o1'){{ $activeCount }}@endMarker('output', 'Bmain32121o1')</span></button>
                    <button @class([$__VIEW_ID__ . '-Bmain3213', 's65ba99a8', 'active'=> $filter === 'done'])>Done <span @class([$__VIEW_ID__ . '-Bmain32131', 's65ba99a8'])>@startMarker('output', 'Bmain32131o1'){{ $completedCount }}@endMarker('output', 'Bmain32131o1')</span></button>
                </div>
                <button @class([$__VIEW_ID__ . '-Bmain322', 's65ba99a8', 'clear-button']) @disabled($busy)>Refresh list</button>
                <button @class([$__VIEW_ID__ . '-Bmain323', 's65ba99a8', 'clear-button']) @disabled($busy || $completedCount === 0)>Clear completed</button>
            </div>
            <div @class([$__VIEW_ID__ . '-Bmain33', 's65ba99a8', 'todo-list'])>
                @startMarker('reactive', 'Bmain33r1', ['stateKey' => ['todos'], 'type' => 'if'])
                @if(count($todos) === 0)
                    <div @class([$__VIEW_ID__ . '-Bmain33r1k11', 's65ba99a8', 'empty-state'])>
                        <span @class([$__VIEW_ID__ . '-Bmain33r1k111', 's65ba99a8'])>○</span>
                        <h2 @class([$__VIEW_ID__ . '-Bmain33r1k112', 's65ba99a8'])>Your queue is clear.</h2>
                        <p @class([$__VIEW_ID__ . '-Bmain33r1k113', 's65ba99a8'])>Add one meaningful task above.</p>
                    </div>
                @else
                    @startMarker('reactive', 'Bmain33r1k2l1', ['stateKey' => ['todos'], 'type' => 'foreach'])
                    @foreach($todos as $todo)
                        @startMarker('reactive', "Bmain33r1k2l1r1-{$todo['id']}", ['stateKey' => ['filter'], 'type' => 'if'])
                        @if($filter === 'all' || ($filter === 'active' && !$todo['completed']) || ($filter === 'done' && $todo['completed']))
                            <article @class([$__VIEW_ID__ . "-Bmain33r1k2l1r1k11-{$todo['id']}", 's65ba99a8', 'todo-row', 'completed'=> $todo['completed']])>
                                <button @class([$__VIEW_ID__ . "-Bmain33r1k2l1r1k111-{$todo['id']}", 's65ba99a8', 'todo-check']) @attr(['aria-label' => 'Toggle task']) @disabled($busy)>
                                    @startMarker('reactive', "Bmain33r1k2l1r1k111r1-{$todo['id']}", ['stateKey' => [], 'type' => 'if'])
                                    @if($todo['completed'])
                                        ✓
                                    @endif
                                    @endMarker('reactive', "Bmain33r1k2l1r1k111r1-{$todo['id']}")
                                </button>
                                <div @class([$__VIEW_ID__ . "-Bmain33r1k2l1r1k112-{$todo['id']}", 's65ba99a8'])><strong @class([$__VIEW_ID__ . "-Bmain33r1k2l1r1k1121-{$todo['id']}", 's65ba99a8'])>@startMarker('output', "Bmain33r1k2l1r1k1121o1-{$todo['id']}"){{ $todo['text'] }}@endMarker('output', "Bmain33r1k2l1r1k1121o1-{$todo['id']}")</strong><small @class([$__VIEW_ID__ . "-Bmain33r1k2l1r1k1122-{$todo['id']}", 's65ba99a8'])>SAOLA DEMO · TASK @startMarker('output', "Bmain33r1k2l1r1k1122o1-{$todo['id']}"){{ $todo['id'] }}@endMarker('output', "Bmain33r1k2l1r1k1122o1-{$todo['id']}")</small></div>
                                <button @class([$__VIEW_ID__ . "-Bmain33r1k2l1r1k113-{$todo['id']}", 's65ba99a8', 'todo-delete']) @attr(['aria-label' => 'Delete task']) @disabled($busy)>×</button>
                            </article>
                        @endif
                        @endMarker('reactive', "Bmain33r1k2l1r1-{$todo['id']}")
                    @endforeach
                    @endMarker('reactive', 'Bmain33r1k2l1')
                @endif
                @endMarker('reactive', 'Bmain33r1')
            </div>
            <footer @class([$__VIEW_ID__ . '-Bmain34', 's65ba99a8', 'todo-summary'])><p @class([$__VIEW_ID__ . '-Bmain341', 's65ba99a8'])><span @class([$__VIEW_ID__ . '-Bmain3411', 's65ba99a8'])>@startMarker('output', 'Bmain3411o1'){{ $activeCount }}@endMarker('output', 'Bmain3411o1')</span> items still need attention.</p><a @class([$__VIEW_ID__ . '-Bmain342', 's65ba99a8']) @attr(['href' => '/about'])>Why Saola handles this differently →</a></footer>
        </section>
    @endblock

    @block('source')
        <h2 @class([$__VIEW_ID__ . '-Bsource1', 's65ba99a8', 'lab-source-title'])>Code của demo này</h2>
        <p @class([$__VIEW_ID__ . '-Bsource2', 's65ba99a8', 'lab-source-note'])>Tương tác hai chiều, cập nhật lạc quan và quản lý danh sách có khoá.</p>
        @startMarker('component', 'Bsourcec1')
        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_0'))
@verbatim
&#64;vars(initialTodos: Todo[] = [])
&#64;await
&#64;states({
    todos: initialTodos,
    newTodo: '',
    filter: 'all'
})

&lt;template&gt;
    &lt;form &#64;submit(addTodo(event))&gt;
        &lt;input type="text" &#64;bind(newTodo)&gt;
        &lt;button type="submit"&gt;Add task +&lt;/button&gt;
    &lt;/form&gt;

    &#64;foreach(todos as todo)
        &#64;key(todo['id'])
        &lt;article &#64;class({'completed': todo['completed']})&gt;
            &lt;button &#64;click(toggleTodo(todo['id']))&gt;✓&lt;/button&gt;
            &lt;strong&gt;{{ todo['text'] }}&lt;/strong&gt;
            &lt;button &#64;click(deleteTodo(todo['id']))&gt;×&lt;/button&gt;
        &lt;/article&gt;
    &#64;endforeach
&lt;/template&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_0'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__0_content])
@endMarker('component', 'Bsourcec1')
    @endblock

    @block('aside')
        <h2 @class([$__VIEW_ID__ . '-Baside1', 's65ba99a8'])>Trang này kiểm chứng cái gì.</h2>
        <ul @class([$__VIEW_ID__ . '-Baside2', 's65ba99a8', 'check-list'])>
            <li @class([$__VIEW_ID__ . '-Baside21', 's65ba99a8'])><strong @class([$__VIEW_ID__ . '-Baside211', 's65ba99a8'])>Nạp bất đồng bộ với <code @class([$__VIEW_ID__ . '-Baside2111', 's65ba99a8'])>&#64;await</code>:</strong> Lần đầu tải trang SSR trả về HTML đầy đủ từ cơ sở dữ liệu. Khi điều hướng SPA, client gọi API lấy JSON và hydrate vào view.</li>
            <li @class([$__VIEW_ID__ . '-Baside22', 's65ba99a8'])><strong @class([$__VIEW_ID__ . '-Baside221', 's65ba99a8'])>Two-way binding (<code @class([$__VIEW_ID__ . '-Baside2211', 's65ba99a8'])>&#64;bind</code>):</strong> Ô nhập gắn trực tiếp với state <code @class([$__VIEW_ID__ . '-Baside222', 's65ba99a8'])>newTodo</code>, tự đồng bộ khi gõ.</li>
            <li @class([$__VIEW_ID__ . '-Baside23', 's65ba99a8'])><strong @class([$__VIEW_ID__ . '-Baside231', 's65ba99a8'])>Danh sách có khoá (<code @class([$__VIEW_ID__ . '-Baside2311', 's65ba99a8'])>&#64;key(todo['id'])</code>):</strong> Thêm/xóa task chỉ thay đổi đúng DOM node tương ứng, không dựng lại cả danh sách.</li>
            <li @class([$__VIEW_ID__ . '-Baside24', 's65ba99a8'])><strong @class([$__VIEW_ID__ . '-Baside241', 's65ba99a8'])>Lưu trữ qua PageCache:</strong> Khi điều hướng sang trang khác rồi bấm Back, trạng thái danh sách và form đang gõ dở vẫn được bảo toàn nguyên vẹn.</li>
        </ul>
    @endblock
