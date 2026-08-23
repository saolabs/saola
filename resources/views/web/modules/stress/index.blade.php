@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

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
        <header @class([$__VIEW_ID__ . '-33ba6fc5', 'workspace-topbar'])>
            <div @class([$__VIEW_ID__ . '-74083b07'])>
                <p @class([$__VIEW_ID__ . '-6066db4b', 'eyebrow'])><span @class([$__VIEW_ID__ . '-6cf41081'])>04</span> Stress harness</p>
                <h1 @class([$__VIEW_ID__ . '-0ddacfc5'])>Reactive · Hydration · Loop · Cleanup</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-8d6a301b', 'completion-ring'])>
                <strong @class([$__VIEW_ID__ . '-07fe4995'])>{{ $activeCount }}/@startMarker('output', '54916756'){{ count($users) }}@endMarker('output', '54916756')</strong><span @class([$__VIEW_ID__ . '-55822db1'])>active</span>
            </div>
        </header>

        <section @class([$__VIEW_ID__ . '-2532706c', 'stress'])>
            {{-- Event modifiers: .prevent thay cho event.preventDefault() thủ công --}}
            <form @class([$__VIEW_ID__ . '-9a7a2c94', 'stress__bar']) @attr(['submit.prevent' => true, 'applyQuery' => true])>
                <input @class([$__VIEW_ID__ . '-f9037cca']) @attr(['type' => 'text', 'placeholder' => 'Lọc theo tên…']) @bind($query)>
                <button @class([$__VIEW_ID__ . '-14a49981']) @attr(['type' => 'submit'])>Lọc</button>
                <button @class([$__VIEW_ID__ . '-c0852b38']) @attr(['type' => 'button'])>
                    Refresh từ server <span @class([$__VIEW_ID__ . '-06cc3708'])>(@startMarker('output', 'a147163d'){{ $refreshCount }}@endMarker('output', 'a147163d'))</span>
                </button>
                <button @class([$__VIEW_ID__ . '-c58ff588']) @attr(['type' => 'button', 'click.once' => true, 'showBannerOnce' => true])>Chỉ chạy 1 lần</button>
            </form>

            @startMarker('reactive', '51d5eb06', ['stateKey' => ['banner'], 'type' => 'if'])
            @if($banner !== '')
                <p @class([$__VIEW_ID__ . '-8392c73c', 'stress__banner'])>@startMarker('output', '736b3ca4'){{ $banner }}@endMarker('output', '736b3ca4')</p>
            @endif
            @endMarker('reactive', '51d5eb06')

            {{-- GAP-10: mỗi item include một view con; refresh sinh ref MỚI nhưng
                 @key giữ nguyên → đường bị lỗi trước đây là view con biến mất --}}
            <div @class([$__VIEW_ID__ . '-aa5f781d', 'stress__list'])>
                @startMarker('reactive', '15e184f6', ['stateKey' => ['users'], 'type' => 'foreach'])
                @foreach($users as $user)
                    <article @class([$__VIEW_ID__ . "-c32f6f5f-{$user['id']}", 'stress__row']) @transition('row')>
                        {{-- @include truyền BIỂU THỨC; attribute của custom tag chỉ nhận chuỗi tĩnh --}}
                        @startMarker('component', "b74c6015-{$user['id']}")
                        @include('web.modules.stress.usercard', ['user' => $user, 'highlight' => $selectedId === $user['id']])
                        @endMarker('component', "b74c6015-{$user['id']}")

                        {{-- @if trong loop → Reactive theo từng item (record marker riêng) --}}
                        @startMarker('reactive', "8d968fa6-{$user['id']}", ['stateKey' => [], 'type' => 'if'])
                        @if(count($user['roles']) > 0)
                            <div @class([$__VIEW_ID__ . "-e9f93fe3-{$user['id']}", 'stress__roles'])>
                                {{-- @foreach lồng, bọc trong thẻ → chạy ngoài cửa sổ cache loop ngoài --}}
                                @foreach($user['roles'] as $role)
                                    <span @class([$__VIEW_ID__ . "-673116ff-{$user['id']}-{$loop->index}", 'chip'])>@startMarker('output', "9c9f7633-{$user['id']}-{$loop->index}"){{ $role['name'] }}@endMarker('output', "9c9f7633-{$user['id']}-{$loop->index}")</span>
                                @endforeach
                            </div>
                        @else
                            <div @class([$__VIEW_ID__ . "-0e517e1d-{$user['id']}", 'stress__roles', 'stress__roles--empty'])>chưa có vai trò</div>
                        @endif
                        @endMarker('reactive', "8d968fa6-{$user['id']}")

                        {{-- .stop: bấm xoá không được kích hoạt selectUser của hàng --}}
                        <button @class([$__VIEW_ID__ . "-d5531dfa-{$user['id']}", 'stress__del']) @attr(['click.stop' => true, 'removeUser' => true, 'user' => true, 'id' => true])>×</button>
                    </article>
                @endforeach
                @endMarker('reactive', '15e184f6')
            </div>

            {{-- GAP-18: loop KHÔNG có @key — hậu tố id marker là chỉ số vòng lặp,
                 phải khớp $loop->index phía SSR thì hydrate mới không lệch --}}
            <div @class([$__VIEW_ID__ . '-a734d4f3', 'stress__tags'])>
                @startMarker('reactive', 'a01b0e23', ['stateKey' => ['tags'], 'type' => 'foreach'])
                @foreach($tags as $tag)
                    <span @class([$__VIEW_ID__ . "-f57689da-{$loop->index}", 'chip', 'chip--tag'])>@startMarker('output', "0fa7832f-{$loop->index}"){{ $tag }}@endMarker('output', "0fa7832f-{$loop->index}")</span>
                @endforeach
                @endMarker('reactive', 'a01b0e23')
            </div>

            <footer @class([$__VIEW_ID__ . '-f34c97bb', 'stress__foot'])>
                <span @class([$__VIEW_ID__ . '-3c60daf7'])>{{ $totalRoles }} vai trò</span>
                <button @class([$__VIEW_ID__ . '-2ff70b01']) @attr(['type' => 'button'])>Mở modal</button>
            </footer>
        </section>

        {{-- .self: chỉ đóng khi bấm ĐÚNG nền, không đóng khi bấm vào hộp bên trong --}}
        @startMarker('reactive', 'db01f7b0', ['stateKey' => ['modalOpen'], 'type' => 'if'])
        @if($modalOpen)
            <div @class([$__VIEW_ID__ . '-ad12d7d5', 'stress__backdrop']) @attr(['click.self' => true, 'closeModal' => true]) @transition('fade')>
                <div @class([$__VIEW_ID__ . '-642d2222', 'stress__modal'])>
                    <h2 @class([$__VIEW_ID__ . '-794917d8'])>Modal</h2>
                    <p @class([$__VIEW_ID__ . '-7c01517b'])>Bấm ra nền để đóng. Bấm trong hộp thì không.</p>
                    <button @class([$__VIEW_ID__ . '-d97a0d93']) @attr(['type' => 'button'])>Đóng</button>
                </div>
            </div>
        @endif
        @endMarker('reactive', 'db01f7b0')
    @endblock
