@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@vars($__ONE_CHILDREN_CONTENT__ = '')
<?php if(!isset($eyebrow) || (!$eyebrow && $eyebrow !== false)) $eyebrow = ''; if(!isset($title) || (!$title && $title !== false)) $title = ''; ?>
@wrapper
<div @class([$__VIEW_ID__ . '-d69e6b1d', 'ov-card'])>
        <span @class([$__VIEW_ID__ . '-bda2927b'])>@startMarker('output', 'eed61699'){{ $eyebrow }}@endMarker('output', 'eed61699')</span>
        <h3 @class([$__VIEW_ID__ . '-743a1357'])>@startMarker('output', 'f58f8f3a'){{ $title }}@endMarker('output', 'f58f8f3a')</h3>
        {!! $__ONE_CHILDREN_CONTENT__ !!}
    </div>
@endWrapper
