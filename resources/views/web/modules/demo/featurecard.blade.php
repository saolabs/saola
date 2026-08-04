@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@vars($__ONE_CHILDREN_CONTENT__ = '')
<?php if(!isset($number) || (!$number && $number !== false)) $number = '01'; if(!isset($title) || (!$title && $title !== false)) $title = 'Feature'; if(!isset($source) || (!$source && $source !== false)) $source = ''; if(!isset($tone) || (!$tone && $tone !== false)) $tone = 'pink'; ?>
@wrapper
<article @class([$__VIEW_ID__ . '-98f36c4a', 'feature-card', 'feature-card--pink'=> $tone === 'pink', 'feature-card--cyan'=> $tone === 'cyan', 'feature-card--yellow'=> $tone === 'yellow'])>
        <header @class([$__VIEW_ID__ . '-303803c4'])>
            <span @class([$__VIEW_ID__ . '-ccb57492'])>{{ $number }}</span>
            <h3 @class([$__VIEW_ID__ . '-bf78161e'])>{{ $title }}</h3>
        </header>
        <code @class([$__VIEW_ID__ . '-caa3a4d0'])>{!! $source !!}</code>
        <div @class([$__VIEW_ID__ . '-abc599f4', 'feature-card__body'])>
            {!! $__ONE_CHILDREN_CONTENT__ !!}
        </div>
    </article>
@endWrapper
