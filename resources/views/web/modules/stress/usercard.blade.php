@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

<?php if(!isset($user) || (!$user && $user !== false)) $user = []; if(!isset($highlight) || (!$highlight && $highlight !== false)) $highlight = false; ?>
@wrapper
<div @class([$__VIEW_ID__ . '-d69e6b1d', 'ucard', 'ucard--hl'=> $highlight])>
        <div @class([$__VIEW_ID__ . '-6add9c13', 'ucard__id'])>#@startMarker('output', 'ca637d8a'){{ $user['id'] }}@endMarker('output', 'ca637d8a')</div>
        <div @class([$__VIEW_ID__ . '-fccc82c8', 'ucard__main'])>
            <strong @class([$__VIEW_ID__ . '-0820a58c'])>@startMarker('output', 'a11e2b83'){{ $user['name'] }}@endMarker('output', 'a11e2b83')</strong>
            <small @class([$__VIEW_ID__ . '-8fe9dc9c'])>@startMarker('output', 'c3cd4b08'){{ $user['email'] }}@endMarker('output', 'c3cd4b08')</small>
        </div>
        <div @class([$__VIEW_ID__ . '-6b7c3ec4', 'ucard__rev'])>rev @startMarker('output', '21020b82'){{ $user['rev'] }}@endMarker('output', '21020b82')</div>
    </div>
@endWrapper
