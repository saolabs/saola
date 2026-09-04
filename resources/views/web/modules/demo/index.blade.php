@exec($__ONE_COMPONENT_REGISTRY__ = ['featurecard' => 'web.modules.demo.featurecard']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($count, 3)
@useState($name, 'Saola')
@useState($selectedPanel, 'state')
@useState($status, 'ready')
@useState($isVisible, true)
@useState($isLocked, false)
@useState($accepted, false)
@useState($selectedRuntime, 'blade')
@useState($note, '')
@useState($sampleItems, [
        [ 'id'=> 1, 'label'=> 'Blade output', 'enabled'=> true ],
        [ 'id'=> 2, 'label'=> 'JavaScript view', 'enabled'=> true ],
        [ 'id'=> 3, 'label'=> 'Scoped CSS', 'enabled'=> false ]
    ])
@const($MAX_COUNT = 10)
@extends($__layout__ . 'lab')

    @block('main')
        <p @class([$__VIEW_ID__ . '-Bmain1', 'kicker'])><span @class([$__VIEW_ID__ . '-Bmain11'])>DEMO · TỔNG QUAN</span></p>
        <h1 @class([$__VIEW_ID__ . '-Bmain2'])>Cú pháp đang chạy thật.</h1>
        <p @class([$__VIEW_ID__ . '-Bmain3', 'lab-lead'])>
            Trang này là fixture trực tiếp của compiler: cùng một file <code @class([$__VIEW_ID__ . '-Bmain31'])>index.sao</code>
            sinh Blade cho lần tải đầu và TypeScript cho mọi tương tác sau hydration.
        </p>

        <div @class([$__VIEW_ID__ . '-Bmain4', 'lab-index'])>
            <a @class([$__VIEW_ID__ . '-Bmain41']) @attr(['href' => '/demo/await'])>
                <span @class([$__VIEW_ID__ . '-Bmain411'])>Dữ liệu</span>
                <strong @class([$__VIEW_ID__ . '-Bmain412'])>Nạp bất đồng bộ</strong>
                <p @class([$__VIEW_ID__ . '-Bmain413'])>Cùng một URL trả HTML cho trình duyệt và JSON cho fetch. So sánh đường SSR với đường CSR.</p>
            </a>
            <a @class([$__VIEW_ID__ . '-Bmain42']) @attr(['href' => '/demo/foreach'])>
                <span @class([$__VIEW_ID__ . '-Bmain421'])>Runtime</span>
                <strong @class([$__VIEW_ID__ . '-Bmain422'])>Danh sách &amp; reconciliation</strong>
                <p @class([$__VIEW_ID__ . '-Bmain423'])>Thêm, xoá, đảo thứ tự, refetch — xem chỗ nào giữ được DOM và chỗ nào bị dựng lại.</p>
            </a>
            <a @class([$__VIEW_ID__ . '-Bmain43']) @attr(['href' => '/demo/lifecycle'])>
                <span @class([$__VIEW_ID__ . '-Bmain431'])>Runtime</span>
                <strong @class([$__VIEW_ID__ . '-Bmain432'])>Vòng đời &amp; PageCache</strong>
                <p @class([$__VIEW_ID__ . '-Bmain433'])>Bảy chuyển trạng thái, và state sống sót qua back/forward nhờ PageCache.</p>
            </a>
            <a @class([$__VIEW_ID__ . '-Bmain44']) @attr(['href' => '/roster'])>
                <span @class([$__VIEW_ID__ . '-Bmain441'])>Ứng dụng thật</span>
                <strong @class([$__VIEW_ID__ . '-Bmain442'])>Roster — CRUD qua API</strong>
                <p @class([$__VIEW_ID__ . '-Bmain443'])>Danh sách sửa được, gọi API thật, view con báo ngược lên cha bằng <code @class([$__VIEW_ID__ . '-Bmain4431'])>App.Event</code>. Chạy trong shell <code @class([$__VIEW_ID__ . '-Bmain4432'])>workspace</code>.</p>
            </a>
        </div>

        <h2 @class([$__VIEW_ID__ . '-Bmain5'])>Playground</h2>
        <div @class([$__VIEW_ID__ . '-Bmain6', 'tab-tape']) @attr(['role' => 'tablist', 'aria-label' => 'Nhóm tính năng'])>
            <button @class([$__VIEW_ID__ . '-Bmain61', 'is-active'=> $selectedPanel === 'state']) @attr(['data-demo-tab' => 'state'])>State &amp; event</button>
            <button @class([$__VIEW_ID__ . '-Bmain62', 'is-active'=> $selectedPanel === 'binding']) @attr(['data-demo-tab' => 'binding'])>Binding</button>
            <button @class([$__VIEW_ID__ . '-Bmain63', 'is-active'=> $selectedPanel === 'flow']) @attr(['data-demo-tab' => 'flow'])>Control flow</button>
        </div>

        <div @class([$__VIEW_ID__ . '-Bmain7', 'card-grid', 'is-hidden'=> $selectedPanel !== 'state']) @attr(['data-demo-panel' => 'state'])>
            @startMarker('component', 'Bmain7c1')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['featurecard'].'_0'))
<div @class([$__VIEW_ID__ . '-Bmain7c11', 'counter-row'])>
                    <button @class([$__VIEW_ID__ . '-Bmain7c111']) @attr(['data-demo-count' => 'decrease', 'aria-label' => 'Giảm count']) @disabled($count === 0)>Giảm</button>
                    <strong @class([$__VIEW_ID__ . '-Bmain7c112']) @attr(['data-demo-count-output' => true])>@startMarker('output', 'Bmain7c112o1'){{ $count }}@endMarker('output', 'Bmain7c112o1')</strong>
                    <button @class([$__VIEW_ID__ . '-Bmain7c113']) @attr(['data-demo-count' => 'increase', 'aria-label' => 'Tăng count']) @disabled($count === $MAX_COUNT)>Tăng</button>
                </div>
                <div @class([$__VIEW_ID__ . '-Bmain7c12', 'progress-track'])><i @class([$__VIEW_ID__ . '-Bmain7c121']) @style(['width'=> $count * 10 . '%'])></i></div>
                <small @class([$__VIEW_ID__ . '-Bmain7c13'])>Giới hạn mẫu: 0–{{ $MAX_COUNT }}</small>
@exec($__env->stopSection())
@exec($__featurecard__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['featurecard'].'_0'))
@include('web.modules.demo.featurecard', ['number' => "01", 'title' => "Reactive state", 'source' => "&#64;states({ count: 3 })", 'tone' => "pink", '__ONE_CHILDREN_CONTENT__' => $__featurecard__0_content])
@endMarker('component', 'Bmain7c1')

            @startMarker('component', 'Bmain7c2')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['featurecard'].'_1'))
<p @class([$__VIEW_ID__ . '-Bmain7c21'])>Event inline cập nhật state; khối <code @class([$__VIEW_ID__ . '-Bmain7c211'])>&lt;script setup&gt;</code> khai báo method tái sử dụng.</p>
                <button @class([$__VIEW_ID__ . '-Bmain7c22'])>Đặt lại count</button>
                <button @class([$__VIEW_ID__ . '-Bmain7c23'])>Nhấp đúp để đạt tối đa</button>
@exec($__env->stopSection())
@exec($__featurecard__1_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['featurecard'].'_1'))
@include('web.modules.demo.featurecard', ['number' => "02", 'title' => "Events &amp; setup", 'source' => "&#64;click(setCount(3))", 'tone' => "cyan", '__ONE_CHILDREN_CONTENT__' => $__featurecard__1_content])
@endMarker('component', 'Bmain7c2')

            @startMarker('component', 'Bmain7c3')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['featurecard'].'_2'))
<p @class([$__VIEW_ID__ . '-Bmain7c31'])>Chính khung này là component <code @class([$__VIEW_ID__ . '-Bmain7c311'])>featurecard</code> được import. Tiêu đề và số là props; đoạn văn này đi qua slot <code @class([$__VIEW_ID__ . '-Bmain7c312'])>&#64;children</code>.</p>
@exec($__env->stopSection())
@exec($__featurecard__2_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['featurecard'].'_2'))
@include('web.modules.demo.featurecard', ['number' => "09", 'title' => "Props, import &amp; children", 'source' => "&#64;props · &#64;import · &#64;children", 'tone' => "yellow", '__ONE_CHILDREN_CONTENT__' => $__featurecard__2_content])
@endMarker('component', 'Bmain7c3')
        </div>

        <div @class([$__VIEW_ID__ . '-Bmain8', 'card-grid', 'is-hidden'=> $selectedPanel !== 'binding']) @attr(['data-demo-panel' => 'binding'])>
            @startMarker('component', 'Bmain8c1')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['featurecard'].'_3'))
<label @class([$__VIEW_ID__ . '-Bmain8c11', 'field-label']) @attr(['for' => 'demo-name'])>Tên mẫu</label>
                <input @class([$__VIEW_ID__ . '-Bmain8c12']) @attr(['id' => 'demo-name', 'data-demo-name' => true, 'type' => 'text', 'placeholder' => 'Nhập một tên']) @bind($name) @required(true)>
                <p @class([$__VIEW_ID__ . '-Bmain8c13', 'live-output'])>Xin chào, <strong @class([$__VIEW_ID__ . '-Bmain8c131']) @attr(['data-demo-name-output' => true])>@startMarker('output', 'Bmain8c131o1'){{ $name }}@endMarker('output', 'Bmain8c131o1')</strong>.</p>
@exec($__env->stopSection())
@exec($__featurecard__3_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['featurecard'].'_3'))
@include('web.modules.demo.featurecard', ['number' => "03", 'title' => "Two-way binding", 'source' => "&#64;bind(name)", 'tone' => "cyan", '__ONE_CHILDREN_CONTENT__' => $__featurecard__3_content])
@endMarker('component', 'Bmain8c1')

            @startMarker('component', 'Bmain8c2')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['featurecard'].'_4'))
<label @class([$__VIEW_ID__ . '-Bmain8c21', 'check-row'])><input @class([$__VIEW_ID__ . '-Bmain8c211']) @attr(['data-demo-accept' => true, 'type' => 'checkbox']) @bind($accepted) @checked($accepted)> Đã đọc tài liệu cú pháp</label>
                <label @class([$__VIEW_ID__ . '-Bmain8c22', 'check-row'])><input @class([$__VIEW_ID__ . '-Bmain8c221']) @attr(['type' => 'checkbox']) @bind($isLocked) @checked($isLocked)> Khoá trường ghi chú</label>
                <input @class([$__VIEW_ID__ . '-Bmain8c23']) @attr(['type' => 'text', 'placeholder' => 'Ghi chú mẫu']) @bind($note) @readonly($isLocked)>
                <button @class([$__VIEW_ID__ . '-Bmain8c24']) @attr(['data-demo-continue' => true]) @disabled(!$accepted)>Tiếp tục</button>
@exec($__env->stopSection())
@exec($__featurecard__4_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['featurecard'].'_4'))
@include('web.modules.demo.featurecard', ['number' => "04", 'title' => "Boolean attributes", 'source' => "&#64;checked · &#64;disabled · &#64;readonly", 'tone' => "yellow", '__ONE_CHILDREN_CONTENT__' => $__featurecard__4_content])
@endMarker('component', 'Bmain8c2')

            @startMarker('component', 'Bmain8c3')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['featurecard'].'_5'))
<button @class([$__VIEW_ID__ . '-Bmain8c31']) @attr(['data-demo-visibility' => true])>Bật / tắt hai vùng</button>
                <p @class([$__VIEW_ID__ . '-Bmain8c32', 'visibility-sample', 'is-hidden'=> !$isVisible]) @attr(['data-demo-visible' => 'true'])>Vùng này hiện khi state là true.</p>
                <p @class([$__VIEW_ID__ . '-Bmain8c33', 'visibility-sample', 'is-hidden'=> $isVisible]) @attr(['data-demo-visible' => 'false'])>Vùng này hiện khi state là false.</p>
                <a @class([$__VIEW_ID__ . '-Bmain8c34']) @attr(['href'=> '/docs/compiler', 'title'=> 'Compiler cho ' . $name])>Mở trang compiler</a>
@exec($__env->stopSection())
@exec($__featurecard__5_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['featurecard'].'_5'))
@include('web.modules.demo.featurecard', ['number' => "05", 'title' => "Visibility &amp; attributes", 'source' => "&#64;class · &#64;attr · &#64;style", 'tone' => "pink", '__ONE_CHILDREN_CONTENT__' => $__featurecard__5_content])
@endMarker('component', 'Bmain8c3')
        </div>

        <div @class([$__VIEW_ID__ . '-Bmain9', 'card-grid', 'is-hidden'=> $selectedPanel !== 'flow']) @attr(['data-demo-panel' => 'flow'])>
            @startMarker('component', 'Bmain9c1')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['featurecard'].'_6'))
<div @class([$__VIEW_ID__ . '-Bmain9c11', 'status-buttons'])>
                    <button @class([$__VIEW_ID__ . '-Bmain9c111']) @attr(['data-demo-status' => 'ready'])>Ready</button>
                    <button @class([$__VIEW_ID__ . '-Bmain9c112']) @attr(['data-demo-status' => 'building'])>Building</button>
                    <button @class([$__VIEW_ID__ . '-Bmain9c113']) @attr(['data-demo-status' => 'error'])>Error</button>
                </div>
                @startMarker('reactive', 'Bmain9c1r1', ['stateKey' => ['status'], 'type' => 'if'])
                @if($status === 'ready')
                    <p @class([$__VIEW_ID__ . '-Bmain9c1r1k11', 'status-card', 'status-ready']) @attr(['data-demo-status-output' => true])>Sẵn sàng biên dịch.</p>
                @elseif($status === 'building')
                    <p @class([$__VIEW_ID__ . '-Bmain9c1r1k21', 'status-card', 'status-building']) @attr(['data-demo-status-output' => true])>Đang biên dịch fixture.</p>
                @else
                    <p @class([$__VIEW_ID__ . '-Bmain9c1r1k31', 'status-card', 'status-error']) @attr(['data-demo-status-output' => true])>Trạng thái lỗi mẫu.</p>
                @endif
                @endMarker('reactive', 'Bmain9c1r1')
@exec($__env->stopSection())
@exec($__featurecard__6_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['featurecard'].'_6'))
@include('web.modules.demo.featurecard', ['number' => "06", 'title' => "If / elseif / else", 'source' => "&#64;if(status === 'ready')", 'tone' => "yellow", '__ONE_CHILDREN_CONTENT__' => $__featurecard__6_content])
@endMarker('component', 'Bmain9c1')

            @startMarker('component', 'Bmain9c2')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['featurecard'].'_7'))
<div @class([$__VIEW_ID__ . '-Bmain9c21', 'number-run'])>
                    @startMarker('reactive', 'Bmain9c21l1', ['stateKey' => ['count'], 'type' => 'for'])
                    @for($i = 0; $i < $count; $i++)
                        <span @class([$__VIEW_ID__ . "-Bmain9c21l11-{$i}"])>@startMarker('output', "Bmain9c21l11o1-{$i}"){{ $i + 1 }}@endMarker('output', "Bmain9c21l11o1-{$i}")</span>
                    @endfor
                    @endMarker('reactive', 'Bmain9c21l1')
                </div>
                <ul @class([$__VIEW_ID__ . '-Bmain9c22', 'sample-list'])>
                    @startMarker('reactive', 'Bmain9c22l1', ['stateKey' => ['sampleItems'], 'type' => 'foreach'])
                    @foreach($sampleItems as $item)
                        <li @class([$__VIEW_ID__ . "-Bmain9c22l11-{$item['id']}", 'is-enabled'=> $item['enabled']])>@startMarker('output', "Bmain9c22l11o1-{$item['id']}"){{ $item['label'] }}@endMarker('output', "Bmain9c22l11o1-{$item['id']}")</li>
                    @endforeach
                    @endMarker('reactive', 'Bmain9c22l1')
                </ul>
@exec($__env->stopSection())
@exec($__featurecard__7_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['featurecard'].'_7'))
@include('web.modules.demo.featurecard', ['number' => "07", 'title' => "For &amp; foreach", 'source' => "&#64;for · &#64;foreach · &#64;key", 'tone' => "pink", '__ONE_CHILDREN_CONTENT__' => $__featurecard__7_content])
@endMarker('component', 'Bmain9c2')

            @startMarker('component', 'Bmain9c3')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['featurecard'].'_8'))
<select @class([$__VIEW_ID__ . '-Bmain9c31']) @attr(['data-demo-runtime' => true]) @bind($selectedRuntime)>
                    <option @class([$__VIEW_ID__ . '-Bmain9c311']) @attr(['value' => 'blade'])>Blade</option>
                    <option @class([$__VIEW_ID__ . '-Bmain9c312']) @attr(['value' => 'typescript'])>TypeScript</option>
                    <option @class([$__VIEW_ID__ . '-Bmain9c313']) @attr(['value' => 'css'])>Scoped CSS</option>
                </select>
                @startMarker('reactive', 'Bmain9c3r1', ['stateKey' => ['selectedRuntime'], 'type' => 'switch'])
                @switch($selectedRuntime)
                    @case('typescript')
                        <p @class([$__VIEW_ID__ . '-Bmain9c3r1k11', 'runtime-result']) @attr(['data-demo-runtime-output' => true])>Client output giữ state, event và lifecycle.</p>
                        @break
                    @case('css')
                        <p @class([$__VIEW_ID__ . '-Bmain9c3r1k21', 'runtime-result']) @attr(['data-demo-runtime-output' => true])>Selector được gắn scope theo view.</p>
                        @break
                    @default
                        <p @class([$__VIEW_ID__ . '-Bmain9c3r1k31', 'runtime-result']) @attr(['data-demo-runtime-output' => true])>Server output trả HTML hoàn chỉnh.</p>
                @endswitch
                @endMarker('reactive', 'Bmain9c3r1')
@exec($__env->stopSection())
@exec($__featurecard__8_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['featurecard'].'_8'))
@include('web.modules.demo.featurecard', ['number' => "08", 'title' => "Switch", 'source' => "&#64;switch(selectedRuntime)", 'tone' => "cyan", '__ONE_CHILDREN_CONTENT__' => $__featurecard__8_content])
@endMarker('component', 'Bmain9c3')
        </div>
    @endblock

    @block('aside')
        <h2 @class([$__VIEW_ID__ . '-Baside1'])>Phạm vi cú pháp.</h2>
        <div @class([$__VIEW_ID__ . '-Baside2', 'directive-table'])>
            <div @class([$__VIEW_ID__ . '-Baside21'])><div @class([$__VIEW_ID__ . '-Baside211', 'dt-key'])>Khai báo</div><span @class([$__VIEW_ID__ . '-Baside212'])><code @class([$__VIEW_ID__ . '-Baside2121'])>&#64;states</code> <code @class([$__VIEW_ID__ . '-Baside2122'])>&#64;props</code> <code @class([$__VIEW_ID__ . '-Baside2123'])>&#64;const</code> <code @class([$__VIEW_ID__ . '-Baside2124'])>&#64;let</code> <code @class([$__VIEW_ID__ . '-Baside2125'])>&#64;vars</code> <code @class([$__VIEW_ID__ . '-Baside2126'])>&#64;import</code> <code @class([$__VIEW_ID__ . '-Baside2127'])>&#64;await</code></span><b @class([$__VIEW_ID__ . '-Baside213'])>declaration</b></div>
            <div @class([$__VIEW_ID__ . '-Baside22'])><div @class([$__VIEW_ID__ . '-Baside221', 'dt-key'])>Template</div><span @class([$__VIEW_ID__ . '-Baside222'])><code @class([$__VIEW_ID__ . '-Baside2221'])>&#64;extends</code> <code @class([$__VIEW_ID__ . '-Baside2222'])>&#64;block</code> <code @class([$__VIEW_ID__ . '-Baside2223'])>&#64;section</code> <code @class([$__VIEW_ID__ . '-Baside2224'])>&#64;yield</code> <code @class([$__VIEW_ID__ . '-Baside2225'])>&#64;include</code> <code @class([$__VIEW_ID__ . '-Baside2226'])>&#64;children</code> <code @class([$__VIEW_ID__ . '-Baside2227'])>&#64;exec</code></span><b @class([$__VIEW_ID__ . '-Baside223'])>template</b></div>
            <div @class([$__VIEW_ID__ . '-Baside23'])><div @class([$__VIEW_ID__ . '-Baside231', 'dt-key'])>Điều khiển</div><span @class([$__VIEW_ID__ . '-Baside232'])><code @class([$__VIEW_ID__ . '-Baside2321'])>&#64;if</code> <code @class([$__VIEW_ID__ . '-Baside2322'])>&#64;foreach</code> <code @class([$__VIEW_ID__ . '-Baside2323'])>&#64;for</code> <code @class([$__VIEW_ID__ . '-Baside2324'])>&#64;while</code> <code @class([$__VIEW_ID__ . '-Baside2325'])>&#64;switch</code> <code @class([$__VIEW_ID__ . '-Baside2326'])>&#64;break</code> <code @class([$__VIEW_ID__ . '-Baside2327'])>&#64;continue</code> <code @class([$__VIEW_ID__ . '-Baside2328'])>&#64;ssr</code></span><b @class([$__VIEW_ID__ . '-Baside233'])>control flow</b></div>
            <div @class([$__VIEW_ID__ . '-Baside24'])><div @class([$__VIEW_ID__ . '-Baside241', 'dt-key'])>Ràng buộc</div><span @class([$__VIEW_ID__ . '-Baside242'])><code @class([$__VIEW_ID__ . '-Baside2421'])>&#64;attr</code> <code @class([$__VIEW_ID__ . '-Baside2422'])>&#64;class</code> <code @class([$__VIEW_ID__ . '-Baside2423'])>&#64;style</code> <code @class([$__VIEW_ID__ . '-Baside2424'])>&#64;bind</code> <code @class([$__VIEW_ID__ . '-Baside2425'])>&#64;val</code> và các thuộc tính boolean</span><b @class([$__VIEW_ID__ . '-Baside243'])>binding</b></div>
            <div @class([$__VIEW_ID__ . '-Baside25'])><div @class([$__VIEW_ID__ . '-Baside251', 'dt-key'])>Form &amp; quyền</div><span @class([$__VIEW_ID__ . '-Baside252'])><code @class([$__VIEW_ID__ . '-Baside2521'])>&#64;csrf</code> <code @class([$__VIEW_ID__ . '-Baside2522'])>&#64;method</code> <code @class([$__VIEW_ID__ . '-Baside2523'])>&#64;auth</code> <code @class([$__VIEW_ID__ . '-Baside2524'])>&#64;guest</code> <code @class([$__VIEW_ID__ . '-Baside2525'])>&#64;can</code> <code @class([$__VIEW_ID__ . '-Baside2526'])>&#64;error</code> — cần request, session hoặc policy thật</span><b @class([$__VIEW_ID__ . '-Baside253'])>form</b></div>
            <div @class([$__VIEW_ID__ . '-Baside26'])><div @class([$__VIEW_ID__ . '-Baside261', 'dt-key'])>Khối component</div><span @class([$__VIEW_ID__ . '-Baside262'])><code @class([$__VIEW_ID__ . '-Baside2621'])>&lt;script setup lang="ts"&gt;</code>, <code @class([$__VIEW_ID__ . '-Baside2622'])>&lt;style scoped&gt;</code>, biến hệ thống, wrapper</span><b @class([$__VIEW_ID__ . '-Baside263'])>block</b></div>
        </div>

            <p class="lab-note"><strong>Chỉ có trong HTML từ server:</strong> khối này nằm trong <code>&#64;ssr</code> nên compiler không đưa sang JavaScript view — điều hướng SPA vào lại trang sẽ không còn thấy nó.</p>

        <p @class([$__VIEW_ID__ . '-Baside3', 'lab-note'])>Fixture: <code @class([$__VIEW_ID__ . '-Baside31'])>web.modules.demo.index</code> · chữ ký đầy đủ ở <a @class([$__VIEW_ID__ . '-Baside32']) @attr(['href' => '/docs/directives'])>tham chiếu directive</a>.</p>
    @endblock
