@exec($__ONE_COMPONENT_REGISTRY__ = ['usercard' => 'web.modules.stress.usercard']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($users, [
        [ 'id'=> 1, 'name'=> 'Mai Lan',  'email'=> 'lan@saola.dev',  'rev'=> 1, 'active'=> true,  'roles'=> [[ 'name'=> 'admin' ], [ 'name'=> 'dev' ]] ],
        [ 'id'=> 2, 'name'=> 'Trần Bảo', 'email'=> 'bao@saola.dev',  'rev'=> 1, 'active'=> false, 'roles'=> [[ 'name'=> 'viewer' ]] ],
        [ 'id'=> 3, 'name'=> 'Hồ Vy',    'email'=> 'vy@saola.dev',   'rev'=> 1, 'active'=> true,  'roles'=> [] ]
    ])
@useState($tags, ['hydration', 'reactive', 'loop', 'cleanup'])
@useState($query, '')
@useState($selectedId, 0)
@useState($refreshCount, 0)
@useState($modalOpen, false)
@useState($banner, '')
@extends($__layout__ . "workspace")
    @block('workspace')
        <header @class([$__VIEW_ID__ . '-Bworkspace1', 'se4890c80', 'workspace-topbar'])>
            <div @class([$__VIEW_ID__ . '-Bworkspace11', 'se4890c80'])>
                <p @class([$__VIEW_ID__ . '-Bworkspace111', 'se4890c80', 'eyebrow'])><span @class([$__VIEW_ID__ . '-Bworkspace1111', 'se4890c80'])>04</span> Stress harness</p>
                <h1 @class([$__VIEW_ID__ . '-Bworkspace112', 'se4890c80'])>Reactive · Hydration · Loop · Cleanup</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bworkspace12', 'se4890c80', 'completion-ring'])>
                <strong @class([$__VIEW_ID__ . '-Bworkspace121', 'se4890c80'])>{{ $activeCount }}/@startMarker('output', 'Bworkspace121o1'){{ count($users) }}@endMarker('output', 'Bworkspace121o1')</strong><span @class([$__VIEW_ID__ . '-Bworkspace122', 'se4890c80'])>active</span>
            </div>
        </header>

        <section @class([$__VIEW_ID__ . '-Bworkspace2', 'se4890c80', 'stress'])>
            {{-- Event modifiers: .prevent thay cho event.preventDefault() thủ công --}}
            <form @class([$__VIEW_ID__ . '-Bworkspace21', 'se4890c80', 'stress__bar']) @attr(['submit.prevent' => true, 'applyQuery' => true])>
                <input @class([$__VIEW_ID__ . '-Bworkspace211', 'se4890c80']) @attr(['type' => 'text', 'placeholder' => 'Lọc theo tên…']) @bind($query)>
                <button @class([$__VIEW_ID__ . '-Bworkspace212', 'se4890c80']) @attr(['type' => 'submit'])>Lọc</button>
                <button @class([$__VIEW_ID__ . '-Bworkspace213', 'se4890c80']) @attr(['type' => 'button'])>
                    Refresh từ server <span @class([$__VIEW_ID__ . '-Bworkspace2131', 'se4890c80'])>(@startMarker('output', 'Bworkspace2131o1'){{ $refreshCount }}@endMarker('output', 'Bworkspace2131o1'))</span>
                </button>
                <button @class([$__VIEW_ID__ . '-Bworkspace214', 'se4890c80']) @attr(['type' => 'button', 'click.once' => true, 'showBannerOnce' => true])>Chỉ chạy 1 lần</button>
            </form>

            @startMarker('reactive', 'Bworkspace2r1', ['stateKey' => ['banner'], 'type' => 'if'])
            @if($banner !== '')
                <p @class([$__VIEW_ID__ . '-Bworkspace2r1k11', 'se4890c80', 'stress__banner'])>@startMarker('output', 'Bworkspace2r1k11o1'){{ $banner }}@endMarker('output', 'Bworkspace2r1k11o1')</p>
            @endif
            @endMarker('reactive', 'Bworkspace2r1')

            {{-- GAP-10: mỗi item include một view con; refresh sinh ref MỚI nhưng
                 @key giữ nguyên → đường bị lỗi trước đây là view con biến mất --}}
            <div @class([$__VIEW_ID__ . '-Bworkspace22', 'se4890c80', 'stress__list'])>
                @startMarker('reactive', 'Bworkspace22l1', ['stateKey' => ['users'], 'type' => 'foreach'])
                @foreach($users as $user)
                    <article @class([$__VIEW_ID__ . "-Bworkspace22l11-{$user['id']}", 'se4890c80', 'stress__row']) @transition('row')>
                        {{-- Thẻ tuỳ chỉnh nhận biểu thức qua tiền tố ':' — compiler suy stateKeys y như @include --}}
                        @startMarker('component', "Bworkspace22l11c1-{$user['id']}")
                        @include('web.modules.stress.usercard', ['user' => $user, 'highlight' => $selectedId === $user['id']])
                        @endMarker('component', "Bworkspace22l11c1-{$user['id']}")

                        {{-- @if trong loop → Reactive theo từng item (record marker riêng) --}}
                        @startMarker('reactive', "Bworkspace22l11r1-{$user['id']}", ['stateKey' => [], 'type' => 'if'])
                        @if(count($user['roles']) > 0)
                            <div @class([$__VIEW_ID__ . "-Bworkspace22l11r1k11-{$user['id']}", 'se4890c80', 'stress__roles'])>
                                {{-- @foreach lồng, bọc trong thẻ → chạy ngoài cửa sổ cache loop ngoài --}}
                                @foreach($user['roles'] as $role)
                                    <span @class([$__VIEW_ID__ . "-Bworkspace22l11r1k11l11-{$user['id']}-{$loop->index}", 'se4890c80', 'chip'])>@startMarker('output', "Bworkspace22l11r1k11l11o1-{$user['id']}-{$loop->index}"){{ $role['name'] }}@endMarker('output', "Bworkspace22l11r1k11l11o1-{$user['id']}-{$loop->index}")</span>
                                @endforeach
                            </div>
                        @else
                            <div @class([$__VIEW_ID__ . "-Bworkspace22l11r1k21-{$user['id']}", 'se4890c80', 'stress__roles', 'stress__roles--empty'])>chưa có vai trò</div>
                        @endif
                        @endMarker('reactive', "Bworkspace22l11r1-{$user['id']}")

                        {{-- .stop: bấm xoá không được kích hoạt selectUser của hàng --}}
                        <button @class([$__VIEW_ID__ . "-Bworkspace22l111-{$user['id']}", 'se4890c80', 'stress__del']) @attr(['click.stop' => true, 'removeUser' => true, 'user' => true, 'id' => true])>×</button>
                    </article>
                @endforeach
                @endMarker('reactive', 'Bworkspace22l1')
            </div>

            {{-- GAP-18: loop KHÔNG có @key — hậu tố id marker là chỉ số vòng lặp,
                 phải khớp $loop->index phía SSR thì hydrate mới không lệch --}}
            <div @class([$__VIEW_ID__ . '-Bworkspace23', 'se4890c80', 'stress__tags'])>
                @startMarker('reactive', 'Bworkspace23l1', ['stateKey' => ['tags'], 'type' => 'foreach'])
                @foreach($tags as $tag)
                    <span @class([$__VIEW_ID__ . "-Bworkspace23l11-{$loop->index}", 'se4890c80', 'chip', 'chip--tag'])>@startMarker('output', "Bworkspace23l11o1-{$loop->index}"){{ $tag }}@endMarker('output', "Bworkspace23l11o1-{$loop->index}")</span>
                @endforeach
                @endMarker('reactive', 'Bworkspace23l1')
            </div>

            <footer @class([$__VIEW_ID__ . '-Bworkspace24', 'se4890c80', 'stress__foot'])>
                <span @class([$__VIEW_ID__ . '-Bworkspace241', 'se4890c80'])>{{ $totalRoles }} vai trò</span>
                <button @class([$__VIEW_ID__ . '-Bworkspace242', 'se4890c80']) @attr(['type' => 'button'])>Mở modal</button>
            </footer>
        </section>

        {{-- .self: chỉ đóng khi bấm ĐÚNG nền, không đóng khi bấm vào hộp bên trong --}}
        @startMarker('reactive', 'Bworkspacer1', ['stateKey' => ['modalOpen'], 'type' => 'if'])
        @if($modalOpen)
            <div @class([$__VIEW_ID__ . '-Bworkspacer1k11', 'se4890c80', 'stress__backdrop']) @attr(['click.self' => true, 'closeModal' => true]) @transition('fade')>
                <div @class([$__VIEW_ID__ . '-Bworkspacer1k111', 'se4890c80', 'stress__modal'])>
                    <h2 @class([$__VIEW_ID__ . '-Bworkspacer1k1111', 'se4890c80'])>Modal</h2>
                    <p @class([$__VIEW_ID__ . '-Bworkspacer1k1112', 'se4890c80'])>Bấm ra nền để đóng. Bấm trong hộp thì không.</p>
                    <button @class([$__VIEW_ID__ . '-Bworkspacer1k1113', 'se4890c80']) @attr(['type' => 'button'])>Đóng</button>
                </div>
            </div>
        @endif
        @endMarker('reactive', 'Bworkspacer1')
    @endblock
