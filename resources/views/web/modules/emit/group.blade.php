@exec($__ONE_COMPONENT_REGISTRY__ = ['emitrow' => 'web.modules.emit.row']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

<?php if(!array_key_exists('rows', get_defined_vars())) $rows = []; if(!array_key_exists('origin', get_defined_vars())) $origin = ''; ?>
@wrapper
<ul @class([$__VIEW_ID__ . '-e1', 'em-list'])>
        @startMarker('reactive', 'e1l1', ['stateKey' => ['rows'], 'type' => 'foreach'])
        @foreach($rows as $row)
            @startMarker('component', "e1l1c1-{$row['id']}")
            @include('web.modules.emit.row', ['row' => $row, 'origin' => $origin, 'emit' => true, 'v' => true, 'view' => true, 'emit' => true, 'l' => true, 'm' => true, 't' => true, 'd' => true, 'ng' => true, 'c' => true, 'hai' => true, 'y' => true, 'cho' => true, 'th' => true, 'y' => true, 'r' => true])
            @endMarker('component', "e1l1c1-{$row['id']}")
        @endforeach
        @endMarker('reactive', 'e1l1')
    </ul>
@endWrapper
