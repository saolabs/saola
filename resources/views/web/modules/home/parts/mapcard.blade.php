@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@vars($__ONE_CHILDREN_CONTENT__ = '')
<?php if(!isset($eyebrow) || (!$eyebrow && $eyebrow !== false)) $eyebrow = ''; if(!isset($title) || (!$title && $title !== false)) $title = ''; if(!isset($href) || (!$href && $href !== false)) $href = '#'; if(!isset($link) || (!$link && $link !== false)) $link = ''; if(!isset($variant) || (!$variant && $variant !== false)) $variant = ''; ?>
@wrapper
<a @class([$__VIEW_ID__ . '-737c191a', 'map-card', 'map-card-dark'=> $variant === 'dark']) @attr(['href'=> $href])>
        <span @class([$__VIEW_ID__ . '-2b9057b1'])>@startMarker('output', '946033b9'){{ $eyebrow }}@endMarker('output', '946033b9')</span>
        <h3 @class([$__VIEW_ID__ . '-2f7d4292'])>@startMarker('output', '2534df8d'){{ $title }}@endMarker('output', '2534df8d')</h3>
        {!! $__ONE_CHILDREN_CONTENT__ !!}
        <i @class([$__VIEW_ID__ . '-288850ca'])>@startMarker('output', '7223fa5e'){{ $link }}@endMarker('output', '7223fa5e')</i>
    </a>
@endWrapper
