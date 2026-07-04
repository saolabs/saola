@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($count, 0)
@useState($name, 'Saola')
@useState($pings, [])
@extends($__layout__ . "base")
    @block('content')
        <section @class([$__VIEW_ID__ . '-b4052a35']) @attr(['ping' => true, 'active' => true, 'count' => true])> 0])>
            <h1 @class([$__VIEW_ID__ . '-ba3bf830'])>Ping Module — Hydration Test</h1>
            <p @class([$__VIEW_ID__ . '-9f45c023'])>Hello, @startMarker('output', '6e45b3ed'){{ $name }}@endMarker('output', '6e45b3ed')! 👋</p>

            <div @class([$__VIEW_ID__ . '-a1ce32e6'])>
                <button @class([$__VIEW_ID__ . '-7d44863d'])>Ping (+1)</button>
                <button @class([$__VIEW_ID__ . '-5328c8d9'])>Reset</button>
                <span @class([$__VIEW_ID__ . '-245b439b'])>Count: @startMarker('output', '3aa7ff3e'){{ $count }}@endMarker('output', '3aa7ff3e')</span>
            </div>

            <div @class([$__VIEW_ID__ . '-f2f99f39'])>
                <label @class([$__VIEW_ID__ . '-afbce0c4'])>Your name:</label>
                <input @class([$__VIEW_ID__ . '-d492e6e2']) @attr(['type' => 'text', 'name' => 'name', 'placeholder' => 'Type a name...']) @bind($name) />
            </div>

            <button @class([$__VIEW_ID__ . '-6a16652b'])>Add ping to list</button>
            <ul @class([$__VIEW_ID__ . '-304a3482'])>
                @startMarker('reactive', '63183269', ['stateKey' => ['count'], 'type' => 'for'])
                @for($i = 0; $i < $count; $i++)
                    <li @class([$__VIEW_ID__ . "-ae68a1c5-{$i}"])>Ping #{{ $i + 1 }}</li>
                @endfor
                @endMarker('reactive', '63183269')
            </ul>
        </section>
    @endblock
