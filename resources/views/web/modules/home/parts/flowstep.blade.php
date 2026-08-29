@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@vars($__ONE_CHILDREN_CONTENT__ = '')
<?php if(!isset($step) || (!$step && $step !== false)) $step = ''; if(!isset($cmd) || (!$cmd && $cmd !== false)) $cmd = ''; ?>
@wrapper
<li @class([$__VIEW_ID__ . '-e1'])>
        <span @class([$__VIEW_ID__ . '-e11'])>@startMarker('output', 'e11o1'){{ $step }}@endMarker('output', 'e11o1')</span>
        <div @class([$__VIEW_ID__ . '-e12'])>
            {!! $__ONE_CHILDREN_CONTENT__ !!}
        </div>
        <code @class([$__VIEW_ID__ . '-e13'])>@startMarker('output', 'e13o1'){{ $cmd }}@endMarker('output', 'e13o1')</code>
    </li>
@endWrapper
