@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

<?php if(!isset($card) || (!$card && $card !== false)) $card = null; if(!isset($column) || (!$column && $column !== false)) $column = ''; if(!isset($busy) || (!$busy && $busy !== false)) $busy = false; if(!isset($editing) || (!$editing && $editing !== false)) $editing = false; if(!isset($draftSeed) || (!$draftSeed && $draftSeed !== false)) $draftSeed = ''; ?>
@useState($draft, '')
@wrapper
<article @class([$__VIEW_ID__ . '-e1', 'kb-card']) @attr(['draggable' => 'true'])>
        @startMarker('reactive', 'e1r1', ['stateKey' => ['editing'], 'type' => 'if'])
        @if($editing)
            <form @class([$__VIEW_ID__ . '-e1r1k11', 'kb-edit'])>
                <input @class([$__VIEW_ID__ . '-e1r1k111']) @attr(['type' => 'text', 'maxlength' => '120', 'aria-label' => 'Tiêu đề thẻ']) @bind($draft)>
                <div @class([$__VIEW_ID__ . '-e1r1k112', 'kb-edit-actions'])>
                    <button @class([$__VIEW_ID__ . '-e1r1k1121', 'kb-mini']) @attr(['type' => 'submit']) @disabled($busy)>Lưu</button>
                    <button @class([$__VIEW_ID__ . '-e1r1k1122', 'kb-mini', 'kb-ghost']) @attr(['type' => 'button'])>Huỷ</button>
                </div>
            </form>
        @else
            <p @class([$__VIEW_ID__ . '-e1r1k21', 'kb-title'])>@startMarker('output', 'e1r1k21o1'){{ $card['title'] }}@endMarker('output', 'e1r1k21o1')</p>
            <div @class([$__VIEW_ID__ . '-e1r1k22', 'kb-card-actions'])>
                <button @class([$__VIEW_ID__ . '-e1r1k221', 'kb-mini', 'kb-ghost']) @attr(['type' => 'button'])>Sửa</button>
                <button @class([$__VIEW_ID__ . '-e1r1k222', 'kb-mini', 'kb-ghost']) @attr(['type' => 'button']) @disabled($busy)>Xoá</button>
            </div>
        @endif
        @endMarker('reactive', 'e1r1')
    </article>
@endWrapper
