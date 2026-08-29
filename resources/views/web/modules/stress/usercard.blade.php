@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

<?php if(!isset($user) || (!$user && $user !== false)) $user = []; if(!isset($highlight) || (!$highlight && $highlight !== false)) $highlight = false; ?>
@wrapper
<div @class([$__VIEW_ID__ . '-e1', 'sf3a5649b', 'ucard', 'ucard--hl'=> $highlight])>
        <div @class([$__VIEW_ID__ . '-e11', 'sf3a5649b', 'ucard__id'])>#@startMarker('output', 'e11o1'){{ $user['id'] }}@endMarker('output', 'e11o1')</div>
        <div @class([$__VIEW_ID__ . '-e12', 'sf3a5649b', 'ucard__main'])>
            <strong @class([$__VIEW_ID__ . '-e121', 'sf3a5649b'])>@startMarker('output', 'e121o1'){{ $user['name'] }}@endMarker('output', 'e121o1')</strong>
            <small @class([$__VIEW_ID__ . '-e122', 'sf3a5649b'])>@startMarker('output', 'e122o1'){{ $user['email'] }}@endMarker('output', 'e122o1')</small>
        </div>
        <div @class([$__VIEW_ID__ . '-e13', 'sf3a5649b', 'ucard__rev'])>rev @startMarker('output', 'e13o1'){{ $user['rev'] }}@endMarker('output', 'e13o1')</div>
    </div>
@endWrapper
