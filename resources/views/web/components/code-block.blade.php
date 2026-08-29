@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@vars($__ONE_CHILDREN_CONTENT__ = '')
<?php if(!isset($lang) || (!$lang && $lang !== false)) $lang = 'none'; if(!isset($dark) || (!$dark && $dark !== false)) $dark = true; ?>
@wrapper
<div @class([$__VIEW_ID__ . '-e1', 'code-block', 'code-block-dark'=> $dark])>
        <pre @class([$__VIEW_ID__ . '-e11'])><code @class([$__VIEW_ID__ . '-e111', 'language-'.($lang)])>{!! $__ONE_CHILDREN_CONTENT__ !!}</code></pre>
    </div>
@endWrapper
