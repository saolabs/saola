@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@wrapper
<h1 @class([$__VIEW_ID__ . '-e1'])>@startMarker('output', 'e1o1'){{ $title }}@endMarker('output', 'e1o1')</h1>
    <ul @class([$__VIEW_ID__ . '-e2'])>
        @startMarker('reactive', 'e2l1', ['stateKey' => ['posts'], 'type' => 'foreach'])
        @foreach($posts as $post)
            <li @class([$__VIEW_ID__ . "-e2l11-{$loop->index}"])>@startMarker('output', "e2l11o1-{$loop->index}"){{ $post->title }}@endMarker('output', "e2l11o1-{$loop->index}")</li>
        @endforeach
        @endMarker('reactive', 'e2l1')
    </ul>
    #test
@endWrapper
