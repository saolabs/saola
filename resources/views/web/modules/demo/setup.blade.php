
<?php if(!array_key_exists('initial', get_defined_vars())) $initial = 0; if(!array_key_exists('title', get_defined_vars())) $title = 'Khai báo trong setup'; ?>
@let($cardPath = $__base__ . 'modules.components.statcard')
@useState($count, $initial)
@useState($status, '')
@const($step = 1)
@php($doubled = $count * 2)
@exec($__ONE_COMPONENT_REGISTRY__ = ['StatCard' => $cardPath, 'CodeBlock' => $__base__ . 'components.code-block']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}
@extends($__layout__ . 'lab')

    @block('main')
        <p @class([$__VIEW_ID__ . '-Bmain1', 'kicker'])><span @class([$__VIEW_ID__ . '-Bmain11'])>CÚ PHÁP · SETUP</span></p>
        <h1 @class([$__VIEW_ID__ . '-Bmain2'])>@startMarker('output', 'Bmain2o1'){{ $title }}@endMarker('output', 'Bmain2o1')</h1>
        <p @class([$__VIEW_ID__ . '-Bmain3', 'lab-lead'])>Props, state, computed, asset và import view nằm trong script setup. Hằng số bước tăng được khai báo bên ngoài.</p>

        <div @class([$__VIEW_ID__ . '-Bmain4', 'lab-toolbar'])>
            <button @class([$__VIEW_ID__ . '-Bmain41', 'button', 'button-primary']) @attr(['id' => 'setup-increment'])>Tăng</button>
            <button @class([$__VIEW_ID__ . '-Bmain42', 'button']) @attr(['id' => 'setup-reset'])>Đặt lại</button>
            <button @class([$__VIEW_ID__ . '-Bmain43', 'button']) @attr(['id' => 'setup-stable'])>Chọn stable</button>
        </div>

        <p @class([$__VIEW_ID__ . '-Bmain5'])>Số lần bấm: <strong @class([$__VIEW_ID__ . '-Bmain51']) @attr(['id' => 'setup-count'])>@startMarker('output', 'Bmain51o1'){{ $count }}@endMarker('output', 'Bmain51o1')</strong></p>
        <p @class([$__VIEW_ID__ . '-Bmain6'])>Nhân đôi: <strong @class([$__VIEW_ID__ . '-Bmain61']) @attr(['id' => 'setup-doubled'])>@startMarker('output', 'Bmain61o1'){{ $doubled }}@endMarker('output', 'Bmain61o1')</strong></p>
        <p @class([$__VIEW_ID__ . '-Bmain7'])>Trạng thái: <span @class([$__VIEW_ID__ . '-Bmain71']) @attr(['id' => 'setup-status'])>@startMarker('output', 'Bmain71o1'){{ $status === '' ? 'Tất cả' : $status }}@endMarker('output', 'Bmain71o1')</span></p>
        <p @class([$__VIEW_ID__ . '-Bmain8'])>Đường dẫn asset được phân giải: <code @class([$__VIEW_ID__ . '-Bmain81']) @attr(['id' => 'setup-asset'])>{{ asset('static/saola/web/assets/images/logo.svg') }}</code></p>
        @startMarker('component', 'Bmainc1')
        @include($cardPath, ['label' => "View được import qua biến hệ thống", 'value' => "SSR + client"])
        @endMarker('component', 'Bmainc1')

        <h2 @class([$__VIEW_ID__ . '-Bmain9'])>Mã nguồn demo</h2>
        <p @class([$__VIEW_ID__ . '-Bmaine10_'])>Phần trên đang chạy trực tiếp từ cấu trúc typesafe bên dưới.</p>
        @startMarker('component', 'Bmainc2')
        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['CodeBlock'].'_0'))
@verbatim
&lt;script setup lang="ts"&gt;
    import type { GridStatusFilter } from '@web/app/services/GridData';

    &#64;props({initial: 0, title: 'Khai báo trong setup'}: {
        initial: number;
        title: string;
    })
    &#64;let(cardPath: string = __base__ + 'modules.components.statcard')
    &#64;importView(cardPath as StatCard)
    &#64;asset(logo = 'images/logo.svg')
    &#64;state(count: number = initial, status: GridStatusFilter = '')
    &#64;computed(doubled: number = count * 2)

    export default {
        increment() { setCount(count + step); },
        reset() { setCount(initial); setStatus(''); },
        showStable() { setStatus('stable'); },
    };
&lt;/script&gt;

{{-- Khai báo bên ngoài vẫn dùng chung phạm vi với setup. --}}
&#64;const(step: number = 1)

&lt;template&gt;
    &#64;extends(__layout__ + 'lab')
    &#64;block('main')
        &lt;h1&gt;{{ title }}&lt;/h1&gt;
        &lt;button &#64;click(increment())&gt;Tăng&lt;/button&gt;
        &lt;button &#64;click(reset())&gt;Đặt lại&lt;/button&gt;
        &lt;button &#64;click(showStable())&gt;Chọn stable&lt;/button&gt;

        &lt;p&gt;Số lần bấm: {{ count }}&lt;/p&gt;
        &lt;p&gt;Nhân đôi: {{ doubled }}&lt;/p&gt;
        &lt;p&gt;Trạng thái: {{ status === '' ? 'Tất cả' : status }}&lt;/p&gt;
        &lt;p&gt;Asset: {{ logo }}&lt;/p&gt;
        &lt;StatCard label="View import qua biến" value="SSR + client" /&gt;
    &#64;endblock
&lt;/template&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__CodeBlock__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['CodeBlock'].'_0'))
@include($__base__ . 'components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__CodeBlock__0_content])
@endMarker('component', 'Bmainc2')
    @endblock
