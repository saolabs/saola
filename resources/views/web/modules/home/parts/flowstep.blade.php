@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@vars($__ONE_CHILDREN_CONTENT__ = '')
<?php if(!isset($step) || (!$step && $step !== false)) $step = ''; if(!isset($cmd) || (!$cmd && $cmd !== false)) $cmd = ''; ?>
@wrapper
<li @class([$__VIEW_ID__ . '-8b0931c9'])>
        <span @class([$__VIEW_ID__ . '-45171ab8'])>@startMarker('output', 'f1b4ad5a'){{ $step }}@endMarker('output', 'f1b4ad5a')</span>
        <div @class([$__VIEW_ID__ . '-83b23b6f'])>
            {!! $__ONE_CHILDREN_CONTENT__ !!}
        </div>
        <code @class([$__VIEW_ID__ . '-fc67aca8'])>@startMarker('output', 'f25bfef9'){{ $cmd }}@endMarker('output', 'f25bfef9')</code>
    </li>
@endWrapper
