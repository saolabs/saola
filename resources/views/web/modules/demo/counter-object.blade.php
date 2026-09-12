@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

<?php if(!array_key_exists('label', get_defined_vars())) $label = 'Object · ='; if(!array_key_exists('step', get_defined_vars())) $step = 1; ?>
@useState($count, 0)
@useState($history, [])
@php($doubled = $count * 2)
@wrapper
<article @class([$__VIEW_ID__ . '-e1', 'dc-card'])>
        <span @class([$__VIEW_ID__ . '-e11', 'dc-card__label'])>@startMarker('output', 'e11o1'){{ $label }}@endMarker('output', 'e11o1')</span>
        <strong @class([$__VIEW_ID__ . '-e12', 'dc-num'])>@startMarker('output', 'e12o1'){{ $count }}@endMarker('output', 'e12o1')</strong>
        <span @class([$__VIEW_ID__ . '-e13', 'dc-meta'])>×2 = @startMarker('output', 'e13o1'){{ $doubled }}@endMarker('output', 'e13o1') · @startMarker('output', 'e13o2'){{ count($history) }}@endMarker('output', 'e13o2') lần bấm</span>
        <div @class([$__VIEW_ID__ . '-e14', 'dc-actions'])>
            <button @class([$__VIEW_ID__ . '-e141', 'button', 'button-primary', 'dc-bump']) @attr(['type' => 'button'])><span @class([$__VIEW_ID__ . '-e1411'])>＋ @startMarker('output', 'e1411o1'){{ $step }}@endMarker('output', 'e1411o1')</span></button>
            <button @class([$__VIEW_ID__ . '-e142', 'button', 'button-light', 'dc-reset']) @attr(['type' => 'button', 'title' => 'Đặt lại về 0'])><span @class([$__VIEW_ID__ . '-e1421'])>↺ Đặt lại</span></button>
        </div>
    </article>
@endWrapper
