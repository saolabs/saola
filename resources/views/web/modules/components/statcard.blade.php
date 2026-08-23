@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@vars($__ONE_CHILDREN_CONTENT__ = '')
<?php if(!isset($label) || (!$label && $label !== false)) $label = 'Label'; if(!isset($value) || (!$value && $value !== false)) $value = '0'; if(!isset($tone) || (!$tone && $tone !== false)) $tone = 'sky'; ?>
@wrapper
<div @class([$__VIEW_ID__ . '-d69e6b1d', 'cmp-slot', 'cmp-slot--indigo'=> $tone === 'indigo'])>
        <span @class([$__VIEW_ID__ . '-bda2927b'])>@startMarker('output', 'eed61699'){{ $label }}@endMarker('output', 'eed61699')</span>
        <strong @class([$__VIEW_ID__ . '-c6aaed49'])>@startMarker('output', '088db3a1'){{ $value }}@endMarker('output', '088db3a1')</strong>
        <div @class([$__VIEW_ID__ . '-6b7c3ec4', 'cmp-slot-body'])>
            {!! $__ONE_CHILDREN_CONTENT__ !!}
        </div>
    </div>
@endWrapper
