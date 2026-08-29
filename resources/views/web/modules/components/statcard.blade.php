@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@vars($__ONE_CHILDREN_CONTENT__ = '')
<?php if(!isset($label) || (!$label && $label !== false)) $label = 'Label'; if(!isset($value) || (!$value && $value !== false)) $value = '0'; if(!isset($tone) || (!$tone && $tone !== false)) $tone = 'sky'; ?>
@wrapper
<div @class([$__VIEW_ID__ . '-e1', 'cmp-slot', 'cmp-slot--indigo'=> $tone === 'indigo'])>
        <span @class([$__VIEW_ID__ . '-e11'])>@startMarker('output', 'e11o1'){{ $label }}@endMarker('output', 'e11o1')</span>
        <strong @class([$__VIEW_ID__ . '-e12'])>@startMarker('output', 'e12o1'){{ $value }}@endMarker('output', 'e12o1')</strong>
        <div @class([$__VIEW_ID__ . '-e13', 'cmp-slot-body'])>
            {!! $__ONE_CHILDREN_CONTENT__ !!}
        </div>
    </div>
@endWrapper
