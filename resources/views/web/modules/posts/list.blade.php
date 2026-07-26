@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@wrapper
<h1 @class([$__VIEW_ID__ . '-bca678f9'])>{{ $title }}</h1>
    <ul @class([$__VIEW_ID__ . '-6de958cf'])>
        @foreach($posts as $post)
            <li @class([$__VIEW_ID__ . "-27454eba-{$loop->index}"])>@startMarker('output', "abe48791-{$loop->index}"){{ $post->title }}@endMarker('output', "abe48791-{$loop->index}")</li>
        @endforeach
    </ul>
    #test
@endWrapper
