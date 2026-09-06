@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@vars($__ONE_CHILDREN_CONTENT__ = '')
<?php if(!array_key_exists('eyebrow', get_defined_vars())) $eyebrow = ''; if(!array_key_exists('title', get_defined_vars())) $title = ''; if(!array_key_exists('href', get_defined_vars())) $href = '#'; if(!array_key_exists('link', get_defined_vars())) $link = ''; if(!array_key_exists('variant', get_defined_vars())) $variant = ''; ?>
@wrapper
<a @class([$__VIEW_ID__ . '-e1', 'map-card', 'map-card-dark'=> $variant === 'dark']) @attr(['href'=> $href])>
        <span @class([$__VIEW_ID__ . '-e11'])>@startMarker('output', 'e11o1'){{ $eyebrow }}@endMarker('output', 'e11o1')</span>
        <h3 @class([$__VIEW_ID__ . '-e12'])>@startMarker('output', 'e12o1'){{ $title }}@endMarker('output', 'e12o1')</h3>
        {!! $__ONE_CHILDREN_CONTENT__ !!}
        <i @class([$__VIEW_ID__ . '-e13'])>@startMarker('output', 'e13o1'){{ $link }}@endMarker('output', 'e13o1')</i>
    </a>
@endWrapper
