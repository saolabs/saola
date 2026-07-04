@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($counter, 0)
@useState($title, 'Hello Saola')
@useState($message, 'Welcome to Saola Web')
@const($MAX_ITEMS = 10)
@extends($__layout__ . "base")
    @block('content')
        <h1 @class([$__VIEW_ID__ . '-27ee54c9'])>@startMarker('output', '38540199'){{ $title }}@endMarker('output', '38540199')</h1>
        <button @class([$__VIEW_ID__ . '-22e55677'])>Click me (@startMarker('output', '44378260'){{ $counter }}@endMarker('output', '44378260'))</button>
        <p @class([$__VIEW_ID__ . '-36f3083b'])>Counter: @startMarker('output', '12024635'){{ $counter }}@endMarker('output', '12024635')</p>
        <p @class([$__VIEW_ID__ . '-6cdf9b20'])>Max items: {{ $MAX_ITEMS }}</p>
        <div @class([$__VIEW_ID__ . '-a4a3ba18']) @attr(["data-counter"=> $counter])>
            @for($i = 1; $i <= $MAX_ITEMS; $i++)
                <p @class([$__VIEW_ID__ . "-140a77a1-{$i}"])>Item {{ $i }}</p>
            @endfor
        </div>
        <p @class([$__VIEW_ID__ . '-abe07598'])>@startMarker('output', '61ecbf40'){{ $message }}@endMarker('output', '61ecbf40')</p>
        <div @class([$__VIEW_ID__ . '-f27dc116', "input", "empty"=> $counter === 0])>
            <textarea @class([$__VIEW_ID__ . '-ac8654e7']) @attr(['placeholder' => 'Type something...', 'name' => 'message']) @bind($message)></textarea>
            <br @class([$__VIEW_ID__ . '-9690e018']) />
            <button @class([$__VIEW_ID__ . '-34c3fdb9'])>Send</button>
        </div>
    @endblock
