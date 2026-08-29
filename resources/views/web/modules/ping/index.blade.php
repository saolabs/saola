@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($count, 0)
@useState($name, 'Saola')
@useState($pings, [])
@extends($__layout__ . "public")
    @block('content')
        <section @class([$__VIEW_ID__ . '-Bcontent1', 'ping', 'active'=> $count !== 0])>
            <h1 @class([$__VIEW_ID__ . '-Bcontent11'])>Ping Module — Hydration Test</h1>
            <p @class([$__VIEW_ID__ . '-Bcontent12'])>Hello, @startMarker('output', 'Bcontent12o1'){{ $name }}@endMarker('output', 'Bcontent12o1')! 👋</p>

            <div @class([$__VIEW_ID__ . '-Bcontent13'])>
                <button @class([$__VIEW_ID__ . '-Bcontent131'])>Ping (+1)</button>
                <button @class([$__VIEW_ID__ . '-Bcontent132'])>Reset</button>
                <span @class([$__VIEW_ID__ . '-Bcontent133'])>Count: @startMarker('output', 'Bcontent133o1'){{ $count }}@endMarker('output', 'Bcontent133o1')</span>
            </div>

            <div @class([$__VIEW_ID__ . '-Bcontent14'])>
                <label @class([$__VIEW_ID__ . '-Bcontent141'])>Your name:</label>
                <input @class([$__VIEW_ID__ . '-Bcontent142']) @attr(['type' => 'text', 'name' => 'name', 'placeholder' => 'Type a name...']) @bind($name) />
            </div>

            <button @class([$__VIEW_ID__ . '-Bcontent15'])>Add ping to list</button>
            <ul @class([$__VIEW_ID__ . '-Bcontent16'])>
                @startMarker('reactive', 'Bcontent16l1', ['stateKey' => ['count'], 'type' => 'for'])
                @for($i = 0; $i < $count; $i++)
                    <li @class([$__VIEW_ID__ . "-Bcontent16l11-{$i}"])>Ping #@startMarker('output', "Bcontent16l11o1-{$i}"){{ $i + 1 }}@endMarker('output', "Bcontent16l11o1-{$i}")</li>
                @endfor
                @endMarker('reactive', 'Bcontent16l1')
            </ul>
        </section>
    @endblock
