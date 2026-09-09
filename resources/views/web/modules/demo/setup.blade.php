
<?php if(!array_key_exists('initial', get_defined_vars())) $initial = 0; if(!array_key_exists('title', get_defined_vars())) $title = 'Khai báo trong setup'; ?>
@let($cardPath = $__base__ . 'modules.components.statcard')
@useState($count, $initial)
@useState($status, '')
@const($step = 1)
@php($doubled = $count * 2)
@exec($__ONE_COMPONENT_REGISTRY__ = ['code-block' => 'web.components.code-block', 'StatCard' => $cardPath, 'CodeBlock' => $__base__ . 'components.code-block']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}
@extends($__layout__ . 'lab')

    @block('main')
        <p @class([$__VIEW_ID__ . '-Bmain1', 'sfea88e94', 'kicker'])><span @class([$__VIEW_ID__ . '-Bmain11', 'sfea88e94'])>CÚ PHÁP · SETUP</span></p>
        <h1 @class([$__VIEW_ID__ . '-Bmain2', 'sfea88e94'])>@startMarker('output', 'Bmain2o1'){{ $title }}@endMarker('output', 'Bmain2o1')</h1>
        <p @class([$__VIEW_ID__ . '-Bmain3', 'sfea88e94', 'lab-lead'])>Props, state, computed, asset và import view nằm trong script setup. Hằng số bước tăng được khai báo bên ngoài.</p>

        <div @class([$__VIEW_ID__ . '-Bmain4', 'sfea88e94', 'lab-toolbar'])>
            <button @class([$__VIEW_ID__ . '-Bmain41', 'sfea88e94', 'button', 'button-primary']) @attr(['id' => 'setup-increment'])>
                <span @class([$__VIEW_ID__ . '-Bmain411', 'sfea88e94'])>＋ Tăng (count + 1)</span>
            </button>
            <button @class([$__VIEW_ID__ . '-Bmain42', 'sfea88e94', 'button']) @attr(['id' => 'setup-reset'])>
                <span @class([$__VIEW_ID__ . '-Bmain421', 'sfea88e94'])>↺ Đặt lại</span>
            </button>
            <button @class([$__VIEW_ID__ . '-Bmain43', 'sfea88e94', 'button']) @attr(['id' => 'setup-stable'])>
                <span @class([$__VIEW_ID__ . '-Bmain431', 'sfea88e94'])>Filter: stable</span>
            </button>
        </div>

        <div @class([$__VIEW_ID__ . '-Bmain5', 'sfea88e94', 'setup-grid'])>
            <div @class([$__VIEW_ID__ . '-Bmain51', 'sfea88e94', 'setup-card'])>
                <span @class([$__VIEW_ID__ . '-Bmain511', 'sfea88e94', 'setup-card__label'])>State · Counter</span>
                <div @class([$__VIEW_ID__ . '-Bmain512', 'sfea88e94', 'setup-card__value'])>
                    <strong @class([$__VIEW_ID__ . '-Bmain5121', 'sfea88e94', 'setup-num']) @attr(['id' => 'setup-count'])>@startMarker('output', 'Bmain5121o1'){{ $count }}@endMarker('output', 'Bmain5121o1')</strong>
                </div>
                <span @class([$__VIEW_ID__ . '-Bmain513', 'sfea88e94', 'setup-card__hint'])>Khởi tạo từ prop <code @class([$__VIEW_ID__ . '-Bmain5131', 'sfea88e94'])>initial: 0</code></span>
            </div>

            <div @class([$__VIEW_ID__ . '-Bmain52', 'sfea88e94', 'setup-card'])>
                <span @class([$__VIEW_ID__ . '-Bmain521', 'sfea88e94', 'setup-card__label'])>Computed · x2</span>
                <div @class([$__VIEW_ID__ . '-Bmain522', 'sfea88e94', 'setup-card__value'])>
                    <strong @class([$__VIEW_ID__ . '-Bmain5221', 'sfea88e94', 'setup-num', 'setup-num--accent']) @attr(['id' => 'setup-doubled'])>@startMarker('output', 'Bmain5221o1'){{ $doubled }}@endMarker('output', 'Bmain5221o1')</strong>
                </div>
                <span @class([$__VIEW_ID__ . '-Bmain523', 'sfea88e94', 'setup-card__hint'])>Tự động tính: <code @class([$__VIEW_ID__ . '-Bmain5231', 'sfea88e94'])>count * 2</code></span>
            </div>

            <div @class([$__VIEW_ID__ . '-Bmain53', 'sfea88e94', 'setup-card'])>
                <span @class([$__VIEW_ID__ . '-Bmain531', 'sfea88e94', 'setup-card__label'])>Trạng thái filter</span>
                <div @class([$__VIEW_ID__ . '-Bmain532', 'sfea88e94', 'setup-card__value'])>
                    <span @class([$__VIEW_ID__ . '-Bmain5321', 'sfea88e94', 'setup-chip'=> true, 'setup-chip--active'=> $status === 'stable']) @attr(['id' => 'setup-status'])>@startMarker('output', 'Bmain5321o1'){{ $status === '' ? 'Tất cả' : $status }}@endMarker('output', 'Bmain5321o1')</span>
                </div>
                <span @class([$__VIEW_ID__ . '-Bmain533', 'sfea88e94', 'setup-card__hint'])>Kiểu dữ liệu <code @class([$__VIEW_ID__ . '-Bmain5331', 'sfea88e94'])>GridStatusFilter</code></span>
            </div>

            <div @class([$__VIEW_ID__ . '-Bmain54', 'sfea88e94', 'setup-card'])>
                <span @class([$__VIEW_ID__ . '-Bmain541', 'sfea88e94', 'setup-card__label'])>Asset phân giải</span>
                <div @class([$__VIEW_ID__ . '-Bmain542', 'sfea88e94', 'setup-card__value'])>
                    <code @class([$__VIEW_ID__ . '-Bmain5421', 'sfea88e94', 'setup-asset-code']) @attr(['id' => 'setup-asset'])>{{ asset('static/saola/web/assets/images/logo.svg') }}</code>
                </div>
                <span @class([$__VIEW_ID__ . '-Bmain543', 'sfea88e94', 'setup-card__hint'])>Directive <code @class([$__VIEW_ID__ . '-Bmain5431', 'sfea88e94'])>&#64;asset('images/logo.svg')</code></span>
            </div>
        </div>

        <div @class([$__VIEW_ID__ . '-Bmain6', 'sfea88e94', 'setup-import-preview'])>
            @startMarker('component', 'Bmain6c1')
            @include($cardPath, ['label' => "View được import qua biến hệ thống", 'value' => "SSR + client"])
            @endMarker('component', 'Bmain6c1')
        </div>

        <div @class([$__VIEW_ID__ . '-Bmain7', 'sfea88e94', 'setup-code-section'])>
            <h2 @class([$__VIEW_ID__ . '-Bmain71', 'sfea88e94'])>Mã nguồn demo</h2>
            <p @class([$__VIEW_ID__ . '-Bmain72', 'sfea88e94', 'lab-lead'])>Phần trên đang chạy trực tiếp từ cấu trúc typesafe bên dưới.</p>
            @startMarker('component', 'Bmain7c1')
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

    function increment() { setCount(count + step); }
    function reset() { setCount(initial); setStatus(''); }
    function showStable() { setStatus('stable'); }
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
@endMarker('component', 'Bmain7c1')
        </div>
    @endblock

    @block('aside')
        <h2 @class([$__VIEW_ID__ . '-Baside1', 'sfea88e94'])>Đặc tính typesafe trong setup</h2>
        <div @class([$__VIEW_ID__ . '-Baside2', 'sfea88e94', 'directive-table'])>
            <div @class([$__VIEW_ID__ . '-Baside21', 'sfea88e94'])><div @class([$__VIEW_ID__ . '-Baside211', 'sfea88e94', 'dt-key'])><code @class([$__VIEW_ID__ . '-Baside2111', 'sfea88e94'])>&#64;props</code></div><span @class([$__VIEW_ID__ . '-Baside212', 'sfea88e94'])>Khai báo tham số nhận vào với kiểu dữ liệu TypeScript và giá trị mặc định.</span><b @class([$__VIEW_ID__ . '-Baside213', 'sfea88e94'])>props</b></div>
            <div @class([$__VIEW_ID__ . '-Baside22', 'sfea88e94'])><div @class([$__VIEW_ID__ . '-Baside221', 'sfea88e94', 'dt-key'])><code @class([$__VIEW_ID__ . '-Baside2211', 'sfea88e94'])>&#64;state</code></div><span @class([$__VIEW_ID__ . '-Baside222', 'sfea88e94'])>Tạo biến state kèm setter tự động (<code @class([$__VIEW_ID__ . '-Baside2221', 'sfea88e94'])>setCount</code>, <code @class([$__VIEW_ID__ . '-Baside2222', 'sfea88e94'])>setStatus</code>).</span><b @class([$__VIEW_ID__ . '-Baside223', 'sfea88e94'])>reactivity</b></div>
            <div @class([$__VIEW_ID__ . '-Baside23', 'sfea88e94'])><div @class([$__VIEW_ID__ . '-Baside231', 'sfea88e94', 'dt-key'])><code @class([$__VIEW_ID__ . '-Baside2311', 'sfea88e94'])>&#64;computed</code></div><span @class([$__VIEW_ID__ . '-Baside232', 'sfea88e94'])>Biến tính toán phụ thuộc state, tự động cache và cập nhật reactive.</span><b @class([$__VIEW_ID__ . '-Baside233', 'sfea88e94'])>computed</b></div>
            <div @class([$__VIEW_ID__ . '-Baside24', 'sfea88e94'])><div @class([$__VIEW_ID__ . '-Baside241', 'sfea88e94', 'dt-key'])><code @class([$__VIEW_ID__ . '-Baside2411', 'sfea88e94'])>&#64;let · &#64;const</code></div><span @class([$__VIEW_ID__ . '-Baside242', 'sfea88e94'])>Khai báo biến cục bộ hoặc hằng số có thể dùng chung ngoài template.</span><b @class([$__VIEW_ID__ . '-Baside243', 'sfea88e94'])>scope</b></div>
            <div @class([$__VIEW_ID__ . '-Baside25', 'sfea88e94'])><div @class([$__VIEW_ID__ . '-Baside251', 'sfea88e94', 'dt-key'])><code @class([$__VIEW_ID__ . '-Baside2511', 'sfea88e94'])>&#64;importView</code></div><span @class([$__VIEW_ID__ . '-Baside252', 'sfea88e94'])>Nạp component động qua biến hoặc tĩnh qua chuỗi namespace.</span><b @class([$__VIEW_ID__ . '-Baside253', 'sfea88e94'])>components</b></div>
            <div @class([$__VIEW_ID__ . '-Baside26', 'sfea88e94'])><div @class([$__VIEW_ID__ . '-Baside261', 'sfea88e94', 'dt-key'])><code @class([$__VIEW_ID__ . '-Baside2611', 'sfea88e94'])>&#64;asset</code></div><span @class([$__VIEW_ID__ . '-Baside262', 'sfea88e94'])>Tự động phân giải đường dẫn tài nguyên tĩnh theo context hiện hành.</span><b @class([$__VIEW_ID__ . '-Baside263', 'sfea88e94'])>assets</b></div>
        </div>

        <p @class([$__VIEW_ID__ . '-Baside3', 'sfea88e94', 'lab-note'])>
            Cấu trúc <code @class([$__VIEW_ID__ . '-Baside31', 'sfea88e94'])>&lt;script setup lang="ts"&gt;</code> được Saola Compiler biên dịch đồng thời:
            sinh ra Blade Template (SSR) an toàn không eval và TypeScript Controller (CSR) tương ứng.
        </p>
    @endblock

    @block('source')
        <h2 @class([$__VIEW_ID__ . '-Bsource1', 'sfea88e94', 'lab-source-title'])>Code của demo này</h2>
        <p @class([$__VIEW_ID__ . '-Bsource2', 'sfea88e94', 'lab-source-note'])>Mọi khai báo nằm gọn trong &lt;script setup&gt;, giữ nguyên kiểu TypeScript.</p>
        @startMarker('component', 'Bsourcec1')
        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_1'))
@verbatim
&lt;script setup lang="ts"&gt;
    &#64;props({initial: 0}: {initial: number})
    &#64;state(count: number = initial)
    &#64;computed(doubled: number = count * 2)
    &#64;const(step: number = 1)

    function increment() { setCount(count + step); }
&lt;/script&gt;

&lt;template&gt;
    &lt;button &#64;click(increment())&gt;+{{ step }}&lt;/button&gt;
    &lt;p&gt;{{ count }} × 2 = {{ doubled }}&lt;/p&gt;
&lt;/template&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__1_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_1'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__1_content])
@endMarker('component', 'Bsourcec1')
    @endblock
