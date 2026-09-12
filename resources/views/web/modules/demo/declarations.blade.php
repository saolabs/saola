@addCssLink('/static/saola/declarations.css')
@exec($__ONE_COMPONENT_REGISTRY__ = ['code-block' => 'web.components.code-block', 'counterobject' => 'web.modules.demo.counter-object', 'counterflat' => 'web.modules.demo.counter-flat', 'counterquick' => 'web.modules.demo.counter-quick']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($step, 1)
@extends($__layout__ . 'lab')
    @section('meta:title', 'Khai báo State & Props Demo - Saola')
    @section('meta:description', 'Demo khai báo state, props và computed trong Saola bằng script setup với TypeScript và kiểm tra kiểu dữ liệu tĩnh type-safe.')
    @section('meta:keywords', 'saola script setup, state props demo, khai bao state, type safe component, saola counter demo')

    @block('main')
        <p @class([$__VIEW_ID__ . '-Bmain1', 'kicker'])><span @class([$__VIEW_ID__ . '-Bmain11'])>CÚ PHÁP · CƠ BẢN</span></p>
        <h1 @class([$__VIEW_ID__ . '-Bmain2'])>Khai báo State & Props</h1>
        <p @class([$__VIEW_ID__ . '-Bmain3', 'lab-lead'])>
            Ví dụ cơ bản về khai báo state, props và computed trong Saola bằng
            <code @class([$__VIEW_ID__ . '-Bmain31']) @attr(['style' => 'white-space: nowrap;'])>&lt;script setup lang="ts"&gt;</code>. Đây là chuẩn khuyến nghị giúp code rõ ràng,
            trực quan và được kiểm tra kiểu dữ liệu tĩnh (type-safe) đầy đủ.
        </p>

        <div @class([$__VIEW_ID__ . '-Bmain4', 'dc-hero-container'])>
            <div @class([$__VIEW_ID__ . '-Bmain41', 'dc-step-bar'])>
                <span @class([$__VIEW_ID__ . '-Bmain411', 'dc-step-label'])>Bước tăng (mỗi lần bấm):</span>
                <div @class([$__VIEW_ID__ . '-Bmain412', 'dc-stepper'])>
                    <button @class([$__VIEW_ID__ . '-Bmain4121', 'dc-step-btn']) @attr(['id' => 'dc-slower', 'type' => 'button', 'title' => 'Giảm bước tăng'])>
                        <span @class([$__VIEW_ID__ . '-Bmain41211'])>−</span>
                    </button>
                    <div @class([$__VIEW_ID__ . '-Bmain4122', 'dc-step-display'])>
                        <strong @class([$__VIEW_ID__ . '-Bmain41221']) @attr(['id' => 'dc-step'])>@startMarker('output', 'Bmain41221o1'){{ $step }}@endMarker('output', 'Bmain41221o1')</strong>
                    </div>
                    <button @class([$__VIEW_ID__ . '-Bmain4123', 'dc-step-btn']) @attr(['id' => 'dc-faster', 'type' => 'button', 'title' => 'Tăng bước tăng'])>
                        <span @class([$__VIEW_ID__ . '-Bmain41231'])>＋</span>
                    </button>
                </div>
            </div>

            <section @class([$__VIEW_ID__ . '-Bmain42', 'dc-hero-card']) @attr(['id' => 'dc-object'])>
                <header @class([$__VIEW_ID__ . '-Bmain421', 'dc-card-badge'])>
                    <span @class([$__VIEW_ID__ . '-Bmain4211', 'badge-recommended'])>★ Chuẩn khuyến nghị</span>
                </header>
                @startMarker('component', 'Bmain42c1')
                @include('web.modules.demo.counter-object', ['step' => $step, 'label' => "Bộ đếm Counter"])
                @endMarker('component', 'Bmain42c1')
                <p @class([$__VIEW_ID__ . '-Bmain422', 'dc-col__note'])>Khai báo chuẩn TypeScript trong <code @class([$__VIEW_ID__ . '-Bmain4221'])>&lt;script setup lang="ts"&gt;</code>: IDE kiểm tra kiểu tĩnh, báo lỗi ngay khi gõ nhầm.</p>

                <div @class([$__VIEW_ID__ . '-Bmain423', 'dc-demo-code'])>
                    <span @class([$__VIEW_ID__ . '-Bmain4231', 'dc-code-label'])>Mã nguồn component (counter-object.sao):</span>
                    @startMarker('component', 'Bmain423c1')
                    @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_0'))
@verbatim
&lt;script setup lang="ts"&gt;
    &#64;props({label = 'Bộ đếm', step = 1}: {
        label: string;
        step: number;
    })
    &#64;states({count = 0, history = []}: {
        count: number;
        history: number[];
    })
    &#64;computed(doubled: number = count * 2)

    function bump() {
        setCount(count + step);
        setHistory([...history, step]);
    }
    function reset() {
        setCount(0);
        setHistory([]);
    }
&lt;/script&gt;

&lt;template&gt;
    &lt;article class="dc-card"&gt;
        &lt;span class="dc-card__label"&gt;{{ label }}&lt;/span&gt;
        &lt;strong class="dc-num"&gt;{{ count }}&lt;/strong&gt;
        &lt;span class="dc-meta"&gt;×2 = {{ doubled }} · {{ history.length }} lần bấm&lt;/span&gt;
        &lt;div class="dc-actions"&gt;
            &lt;button type="button" class="button button-primary dc-bump" &#64;click(bump())&gt;&lt;span&gt;＋ {{ step }}&lt;/span&gt;&lt;/button&gt;
            &lt;button type="button" class="button button-light dc-reset" &#64;click(reset()) title="Đặt lại về 0"&gt;&lt;span&gt;↺ Đặt lại&lt;/span&gt;&lt;/button&gt;
        &lt;/div&gt;
    &lt;/article&gt;
&lt;/template&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_0'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__0_content])
@endMarker('component', 'Bmain423c1')
                </div>
            </section>
        </div>

        <div @class([$__VIEW_ID__ . '-Bmain5', 'dc-reference-section'])>
            <div @class([$__VIEW_ID__ . '-Bmain51', 'dc-ref-header'])>
                <h2 @class([$__VIEW_ID__ . '-Bmain511'])>Cú pháp tương đương (Tham khảo)</h2>
                <p @class([$__VIEW_ID__ . '-Bmain512', 'dc-ref-subtitle'])>
                    Dành cho trường hợp viết nhanh hoặc component đơn giản. Compiler đều chuẩn hóa về cùng một kết quả:
                </p>
            </div>

            <div @class([$__VIEW_ID__ . '-Bmain52', 'dc-reference-grid'])>
                <section @class([$__VIEW_ID__ . '-Bmain521', 'dc-ref-col']) @attr(['id' => 'dc-flat'])>
                    <header @class([$__VIEW_ID__ . '-Bmain5211', 'dc-card-badge'])>
                        <span @class([$__VIEW_ID__ . '-Bmain52111', 'badge-alt'])>Cú pháp phẳng</span>
                    </header>
                    @startMarker('component', 'Bmain521c1')
                    @include('web.modules.demo.counter-flat', ['step' => $step, 'label' => "Khai báo phẳng"])
                    @endMarker('component', 'Bmain521c1')
                    <p @class([$__VIEW_ID__ . '-Bmain5212', 'dc-col__note'])>Kiểu và mặc định khai báo trên từng biến. Thích hợp khi component chỉ có 1–2 state đơn giản.</p>

                    <div @class([$__VIEW_ID__ . '-Bmain5213', 'dc-demo-code'])>
                        <span @class([$__VIEW_ID__ . '-Bmain52131', 'dc-code-label'])>Mã nguồn (counter-flat.sao):</span>
                        @startMarker('component', 'Bmain5213c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_1'))
@verbatim
&lt;script setup lang="ts"&gt;
    &#64;props(label: string = 'Khai báo phẳng', step: number = 1)
    &#64;state(count: number = 0, history: number[] = [])
    &#64;computed(doubled: number = count * 2)

    function bump() {
        setCount(count + step);
        setHistory([...history, step]);
    }
    function reset() {
        setCount(0);
        setHistory([]);
    }
&lt;/script&gt;

&lt;template&gt;
    &lt;article class="dc-card"&gt;
        &lt;span class="dc-card__label"&gt;{{ label }}&lt;/span&gt;
        &lt;strong class="dc-num"&gt;{{ count }}&lt;/strong&gt;
        &lt;span class="dc-meta"&gt;×2 = {{ doubled }} · {{ history.length }} lần bấm&lt;/span&gt;
        &lt;div class="dc-actions"&gt;
            &lt;button type="button" class="button button-primary dc-bump" &#64;click(bump())&gt;&lt;span&gt;＋ {{ step }}&lt;/span&gt;&lt;/button&gt;
            &lt;button type="button" class="button button-light dc-reset" &#64;click(reset()) title="Đặt lại về 0"&gt;&lt;span&gt;↺ Đặt lại&lt;/span&gt;&lt;/button&gt;
        &lt;/div&gt;
    &lt;/article&gt;
&lt;/template&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__1_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_1'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__1_content])
@endMarker('component', 'Bmain5213c1')
                    </div>
                </section>

                <section @class([$__VIEW_ID__ . '-Bmain522', 'dc-ref-col']) @attr(['id' => 'dc-quick'])>
                    <header @class([$__VIEW_ID__ . '-Bmain5221', 'dc-card-badge'])>
                        <span @class([$__VIEW_ID__ . '-Bmain52211', 'badge-alt'])>Cú pháp rút gọn</span>
                    </header>
                    @startMarker('component', 'Bmain522c1')
                    @include('web.modules.demo.counter-quick', ['step' => $step, 'label' => "Gõ nhanh ngoài script"])
                    @endMarker('component', 'Bmain522c1')
                    <p @class([$__VIEW_ID__ . '-Bmain5222', 'dc-col__note'])>Khai báo dạng object ngoài thẻ <code @class([$__VIEW_ID__ . '-Bmain52221'])>&lt;script&gt;</code>. Tiện gõ nhanh khi làm prototype không cần định kiểu.</p>

                    <div @class([$__VIEW_ID__ . '-Bmain5223', 'dc-demo-code'])>
                        <span @class([$__VIEW_ID__ . '-Bmain52231', 'dc-code-label'])>Mã nguồn (counter-quick.sao):</span>
                        @startMarker('component', 'Bmain5223c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_2'))
@verbatim
&#64;props({label: 'Gõ nhanh ngoài script', step: 1})
&#64;states({count: 0, history: []})
&#64;computed(doubled = count * 2)

&lt;template&gt;
    &lt;article class="dc-card"&gt;
        &lt;span class="dc-card__label"&gt;{{ label }}&lt;/span&gt;
        &lt;strong class="dc-num"&gt;{{ count }}&lt;/strong&gt;
        &lt;span class="dc-meta"&gt;×2 = {{ doubled }} · {{ history.length }} lần bấm&lt;/span&gt;
        &lt;div class="dc-actions"&gt;
            &lt;button type="button" class="button button-primary dc-bump" &#64;click(bump())&gt;&lt;span&gt;＋ {{ step }}&lt;/span&gt;&lt;/button&gt;
            &lt;button type="button" class="button button-light dc-reset" &#64;click(reset()) title="Đặt lại về 0"&gt;&lt;span&gt;↺ Đặt lại&lt;/span&gt;&lt;/button&gt;
        &lt;/div&gt;
    &lt;/article&gt;
&lt;/template&gt;

&lt;script setup&gt;
    function bump() {
        setCount(count + step);
        setHistory([...history, step]);
    }
    function reset() {
        setCount(0);
        setHistory([]);
    }
&lt;/script&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__2_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_2'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__2_content])
@endMarker('component', 'Bmain5223c1')
                    </div>
                </section>
            </div>
        </div>
    @endblock

    @block('aside')
        <h2 @class([$__VIEW_ID__ . '-Baside1'])>Tóm tắt cú pháp</h2>
        <div @class([$__VIEW_ID__ . '-Baside2', 'directive-table'])>
            <div @class([$__VIEW_ID__ . '-Baside21'])><div @class([$__VIEW_ID__ . '-Baside211', 'dt-key'])><code @class([$__VIEW_ID__ . '-Baside2111'])>{a = 1}: {a: number}</code></div><span @class([$__VIEW_ID__ . '-Baside212'])>Khai báo chuẩn trong <code @class([$__VIEW_ID__ . '-Baside2121'])>&lt;script setup lang="ts"&gt;</code>. Kiểm tra kiểu tĩnh đầy đủ, sinh setter typesafe (như <code @class([$__VIEW_ID__ . '-Baside2122'])>setCount</code>).</span><b @class([$__VIEW_ID__ . '-Baside213'])>Khuyến nghị</b></div>
            <div @class([$__VIEW_ID__ . '-Baside22'])><div @class([$__VIEW_ID__ . '-Baside221', 'dt-key'])><code @class([$__VIEW_ID__ . '-Baside2211'])>a: number = 1</code></div><span @class([$__VIEW_ID__ . '-Baside222'])>Cú pháp phẳng. Kiểu và mặc định trên từng biến riêng lẻ. Hợp khi component chỉ có 1–2 biến.</span><b @class([$__VIEW_ID__ . '-Baside223'])>Tham khảo</b></div>
            <div @class([$__VIEW_ID__ . '-Baside23'])><div @class([$__VIEW_ID__ . '-Baside231', 'dt-key'])><code @class([$__VIEW_ID__ . '-Baside2311'])>{a: 1}</code></div><span @class([$__VIEW_ID__ . '-Baside232'])>Cú pháp rút gọn ngoài script. Phù hợp viết prototype nhanh không cần định nghĩa kiểu dữ liệu.</span><b @class([$__VIEW_ID__ . '-Baside233'])>Gõ nhanh</b></div>
        </div>
        <p @class([$__VIEW_ID__ . '-Baside3', 'lab-note'])>
            <strong @class([$__VIEW_ID__ . '-Baside31'])>Khuyến nghị:</strong> Luôn ưu tiên dùng cú pháp chuẩn <code @class([$__VIEW_ID__ . '-Baside32'])>{count = 0}: {count: number}</code> trong <code @class([$__VIEW_ID__ . '-Baside33'])>&lt;script setup lang="ts"&gt;</code> để đảm bảo an toàn kiểu dữ liệu và trải nghiệm phát triển tốt nhất.
        </p>
    @endblock
