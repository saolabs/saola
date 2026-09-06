@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@vars($__ONE_CHILDREN_CONTENT__ = '')
<?php if(!array_key_exists('number', get_defined_vars())) $number = '01'; if(!array_key_exists('title', get_defined_vars())) $title = 'Feature'; if(!array_key_exists('source', get_defined_vars())) $source = ''; if(!array_key_exists('tone', get_defined_vars())) $tone = 'pink'; ?>
@wrapper
<article @class([$__VIEW_ID__ . '-e1', 'se47411f2', 'feature-card', 'feature-card--pink'=> $tone === 'pink', 'feature-card--cyan'=> $tone === 'cyan', 'feature-card--yellow'=> $tone === 'yellow'])>
        <header @class([$__VIEW_ID__ . '-e11', 'se47411f2'])>
            <span @class([$__VIEW_ID__ . '-e111', 'se47411f2'])>@startMarker('output', 'e111o1'){{ $number }}@endMarker('output', 'e111o1')</span>
            <h3 @class([$__VIEW_ID__ . '-e112', 'se47411f2'])>@startMarker('output', 'e112o1'){{ $title }}@endMarker('output', 'e112o1')</h3>
        </header>
        <code @class([$__VIEW_ID__ . '-e12', 'se47411f2'])>@startMarker('output', 'e12o1'){!! $source !!}@endMarker('output', 'e12o1')</code>
        <div @class([$__VIEW_ID__ . '-e13', 'se47411f2', 'feature-card__body'])>
            {!! $__ONE_CHILDREN_CONTENT__ !!}
        </div>
    </article>
@endWrapper
