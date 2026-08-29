@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@vars($__ONE_CHILDREN_CONTENT__ = '')
<?php if(!isset($eyebrow) || (!$eyebrow && $eyebrow !== false)) $eyebrow = ''; if(!isset($title) || (!$title && $title !== false)) $title = ''; if(!isset($href) || (!$href && $href !== false)) $href = '#'; if(!isset($link) || (!$link && $link !== false)) $link = ''; if(!isset($variant) || (!$variant && $variant !== false)) $variant = ''; ?>
@wrapper
<a @class([$__VIEW_ID__ . '-e1', 'map-card', 'map-card-dark'=> $variant === 'dark']) @attr(['href'=> $href])>
        <span @class([$__VIEW_ID__ . '-e11'])>@startMarker('output', 'e11o1'){{ $eyebrow }}@endMarker('output', 'e11o1')</span>
        <h3 @class([$__VIEW_ID__ . '-e12'])>@startMarker('output', 'e12o1'){{ $title }}@endMarker('output', 'e12o1')</h3>
        {!! $__ONE_CHILDREN_CONTENT__ !!}
        <i @class([$__VIEW_ID__ . '-e13'])>@startMarker('output', 'e13o1'){{ $link }}@endMarker('output', 'e13o1')</i>
    </a>
@endWrapper
