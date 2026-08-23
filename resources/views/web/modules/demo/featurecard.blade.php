@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@vars($__ONE_CHILDREN_CONTENT__ = '')
<?php if(!isset($number) || (!$number && $number !== false)) $number = '01'; if(!isset($title) || (!$title && $title !== false)) $title = 'Feature'; if(!isset($source) || (!$source && $source !== false)) $source = ''; if(!isset($tone) || (!$tone && $tone !== false)) $tone = 'pink'; ?>
@wrapper
<article @class([$__VIEW_ID__ . '-98f36c4a', 'feature-card', 'feature-card--pink'=> $tone === 'pink', 'feature-card--cyan'=> $tone === 'cyan', 'feature-card--yellow'=> $tone === 'yellow'])>
        <header @class([$__VIEW_ID__ . '-303803c4'])>
            <span @class([$__VIEW_ID__ . '-ccb57492'])>@startMarker('output', 'b6cbe0ba'){{ $number }}@endMarker('output', 'b6cbe0ba')</span>
            <h3 @class([$__VIEW_ID__ . '-bf78161e'])>@startMarker('output', 'b7a0c11f'){{ $title }}@endMarker('output', 'b7a0c11f')</h3>
        </header>
        <code @class([$__VIEW_ID__ . '-caa3a4d0'])>@startMarker('output', '52849a7f'){!! $source !!}@endMarker('output', '52849a7f')</code>
        <div @class([$__VIEW_ID__ . '-abc599f4', 'feature-card__body'])>
            {!! $__ONE_CHILDREN_CONTENT__ !!}
        </div>
    </article>
@endWrapper
