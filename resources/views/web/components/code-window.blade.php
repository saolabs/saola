@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@vars($__ONE_CHILDREN_CONTENT__ = '')
<?php if(!isset($label) || (!$label && $label !== false)) $label = ''; if(!isset($title) || (!$title && $title !== false)) $title = ''; if(!isset($lang) || (!$lang && $lang !== false)) $lang = 'none'; if(!isset($dark) || (!$dark && $dark !== false)) $dark = false; ?>
@wrapper
<div @class([$__VIEW_ID__ . '-e1', 'code-window', 'code-window-dark'=> $dark, 'code-window-plain'=> !$label && !$title])>
        @startMarker('reactive', 'e1r1', ['stateKey' => ['label', 'title'], 'type' => 'if'])
        @if($label || $title)
            <div @class([$__VIEW_ID__ . '-e1r1k11', 'window-bar'])>
                <span @class([$__VIEW_ID__ . '-e1r1k111'])>@startMarker('output', 'e1r1k111o1'){{ $label }}@endMarker('output', 'e1r1k111o1')</span>
                <b @class([$__VIEW_ID__ . '-e1r1k112'])>@startMarker('output', 'e1r1k112o1'){{ $title }}@endMarker('output', 'e1r1k112o1')</b>
                @startMarker('reactive', 'e1r1k11r1', ['stateKey' => ['dark'], 'type' => 'if'])
                @if(!$dark)
                    <i @class([$__VIEW_ID__ . '-e1r1k11r1k11'])>● ● ●</i>
                @endif
                @endMarker('reactive', 'e1r1k11r1')
            </div>
        @endif
        @endMarker('reactive', 'e1r1')
        <pre @class([$__VIEW_ID__ . '-e11'])><code @class([$__VIEW_ID__ . '-e111', 'language-'.($lang)])>{!! $__ONE_CHILDREN_CONTENT__ !!}</code></pre>
    </div>
@endWrapper
