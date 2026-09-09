@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

<?php if(!array_key_exists('row', get_defined_vars())) $row = null; if(!array_key_exists('origin', get_defined_vars())) $origin = ''; ?>
@wrapper
<li @class([$__VIEW_ID__ . '-e1', 'em-row'])>
        <div @class([$__VIEW_ID__ . '-e11', 'em-row-header'])>
            <span @class([$__VIEW_ID__ . '-e111', 'em-title'])>@startMarker('output', 'e111o1'){{ $origin }}@endMarker('output', 'e111o1') · @startMarker('output', 'e111o2'){{ $row['title'] }}@endMarker('output', 'e111o2')</span>
            <span @class([$__VIEW_ID__ . '-e112', 'em-row-id'])>#@startMarker('output', 'e112o1'){{ $row['id'] }}@endMarker('output', 'e112o1')</span>
        </div>

        <div @class([$__VIEW_ID__ . '-e12', 'em-row-actions'])>
            {{-- payload đơn --}}
            <button @class([$__VIEW_ID__ . '-e121', 'em-pick']) @attr(['type' => 'button'])>chọn</button>

            {{-- HAI payload — cha phải nhận đủ cả hai --}}
            <button @class([$__VIEW_ID__ . '-e122', 'em-rename']) @attr(['type' => 'button'])>sửa tên</button>

            {{-- tên sự kiện có ':' + payload là object --}}
            <button @class([$__VIEW_ID__ . '-e123', 'em-tag']) @attr(['type' => 'button'])>gắn nhãn</button>

            {{-- không payload --}}
            <button @class([$__VIEW_ID__ . '-e124', 'em-bump']) @attr(['type' => 'button'])>đếm</button>

            {{-- emit trong <script setup>, và cha trả lời được --}}
            <button @class([$__VIEW_ID__ . '-e125', 'em-close']) @attr(['type' => 'button'])>đóng</button>
        </div>
    </li>
@endWrapper
