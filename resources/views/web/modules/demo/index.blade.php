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
@const($DEMO_SCRIPT = '<scr' . 'ipt type="module" src="/static/saola/demo-module.js"></scr' . 'ipt>')
@let($featureTotal = 32)
@extends($__layout__ . 'base')
@once('saola-css-nl4eqx')
<link rel="stylesheet" href="/static/saola/demo-site.css?v=3">
@endonce
    @block('shell')
        <main @class([$__VIEW_ID__ . '-Bshell1', 's45d147d4', 'demo-page'])>
            <div @class([$__VIEW_ID__ . '-Bshell11', 's45d147d4', 'paper-noise'])></div>

            <nav @class([$__VIEW_ID__ . '-Bshell12', 's45d147d4', 'demo-nav']) @attr(['aria-label' => 'Điều hướng trang demo'])>
                <a @class([$__VIEW_ID__ . '-Bshell121', 's45d147d4']) @attr(['href' => '/'])>SAOLABS</a>
                <div @class([$__VIEW_ID__ . '-Bshell122', 's45d147d4'])>
                    <a @class([$__VIEW_ID__ . '-Bshell1221', 's45d147d4']) @attr(['href' => '#playground'])>Playground</a>
                    <a @class([$__VIEW_ID__ . '-Bshell1222', 's45d147d4']) @attr(['href' => '#coverage'])>Phạm vi hỗ trợ</a>
                    <a @class([$__VIEW_ID__ . '-Bshell1223', 's45d147d4']) @attr(['href' => '/docs/getting-started'])>Tài liệu</a>
                </div>
            </nav>

            <header @class([$__VIEW_ID__ . '-Bshell13', 's45d147d4', 'demo-hero'])>
                <div @class([$__VIEW_ID__ . '-Bshell131', 's45d147d4', 'hero-stamp'])>
                    <span @class([$__VIEW_ID__ . '-Bshell1311', 's45d147d4'])>LIVE</span>
                    <small @class([$__VIEW_ID__ . '-Bshell1312', 's45d147d4'])>/demo</small>
                </div>
                <div @class([$__VIEW_ID__ . '-Bshell132', 's45d147d4'])>
                    <p @class([$__VIEW_ID__ . '-Bshell1321', 's45d147d4', 'overline'])>Saola single-file component</p>
                    <h1 @class([$__VIEW_ID__ . '-Bshell1322', 's45d147d4'])>MỘT FILE.<br @class([$__VIEW_ID__ . '-Bshell13221', 's45d147d4'])><em @class([$__VIEW_ID__ . '-Bshell13222', 's45d147d4'])>HAI RUNTIME.</em><br @class([$__VIEW_ID__ . '-Bshell13223', 's45d147d4'])>MỌI THỨ<br @class([$__VIEW_ID__ . '-Bshell13224', 's45d147d4'])>ĐANG CHẠY.</h1>
                    <p @class([$__VIEW_ID__ . '-Bshell1323', 's45d147d4', 'hero-copy'])>Trang này là fixture trực tiếp của compiler: source <code @class([$__VIEW_ID__ . '-Bshell13231', 's45d147d4'])>index.sao</code> tạo Blade cho lần tải đầu và TypeScript cho các tương tác sau hydration.</p>
                </div>
                <aside @class([$__VIEW_ID__ . '-Bshell133', 's45d147d4', 'hero-note'])>
                    <strong @class([$__VIEW_ID__ . '-Bshell1331', 's45d147d4'])>{{ $featureTotal }}</strong>
                    <span @class([$__VIEW_ID__ . '-Bshell1332', 's45d147d4'])>nhóm cú pháp được tài liệu hóa</span>
                    <p @class([$__VIEW_ID__ . '-Bshell1333', 's45d147d4'])>Không dùng dữ liệu API giả. Các giá trị bên dưới là dữ liệu mẫu được ghi nhãn rõ.</p>
                </aside>
            </header>

            <section @class([$__VIEW_ID__ . '-Bshell14', 's45d147d4', 'proof-strip']) @attr(['aria-label' => 'Đầu ra của compiler'])>
                <span @class([$__VIEW_ID__ . '-Bshell141', 's45d147d4'])>INPUT</span><strong @class([$__VIEW_ID__ . '-Bshell142', 's45d147d4'])>.sao</strong>
                <span @class([$__VIEW_ID__ . '-Bshell143', 's45d147d4'])>SERVER</span><strong @class([$__VIEW_ID__ . '-Bshell144', 's45d147d4'])>.blade.php</strong>
                <span @class([$__VIEW_ID__ . '-Bshell145', 's45d147d4'])>CLIENT</span><strong @class([$__VIEW_ID__ . '-Bshell146', 's45d147d4'])>.ts</strong>
                <span @class([$__VIEW_ID__ . '-Bshell147', 's45d147d4'])>STYLE</span><strong @class([$__VIEW_ID__ . '-Bshell148', 's45d147d4'])>scoped CSS</strong>
            </section>

            <section @class([$__VIEW_ID__ . '-Bshell15', 's45d147d4', 'playground']) @attr(['id' => 'playground'])>
                <div @class([$__VIEW_ID__ . '-Bshell151', 's45d147d4', 'section-title'])>
                    <p @class([$__VIEW_ID__ . '-Bshell1511', 's45d147d4'])>01 / Playground</p>
                    <h2 @class([$__VIEW_ID__ . '-Bshell1512', 's45d147d4'])>Chạm vào cú pháp.<br @class([$__VIEW_ID__ . '-Bshell15121', 's45d147d4'])>Nhìn state đổi ngay.</h2>
                </div>

                <div @class([$__VIEW_ID__ . '-Bshell152', 's45d147d4', 'tab-tape']) @attr(['role' => 'tablist', 'aria-label' => 'Nhóm tính năng'])>
                    <button @class([$__VIEW_ID__ . '-Bshell1521', 's45d147d4', 'is-active'=> $selectedPanel === 'state']) @attr(['data-demo-tab' => 'state'])>State & event</button>
                    <button @class([$__VIEW_ID__ . '-Bshell1522', 's45d147d4', 'is-active'=> $selectedPanel === 'binding']) @attr(['data-demo-tab' => 'binding'])>Binding</button>
                    <button @class([$__VIEW_ID__ . '-Bshell1523', 's45d147d4', 'is-active'=> $selectedPanel === 'flow']) @attr(['data-demo-tab' => 'flow'])>Control flow</button>
                </div>

                <div @class([$__VIEW_ID__ . '-Bshell153', 's45d147d4', 'card-grid', 'is-hidden'=> $selectedPanel !== 'binding']) @attr(['data-demo-panel' => 'binding'])>
                        @startMarker('component', 'Bshell153c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['featurecard'].'_0'))
<label @class([$__VIEW_ID__ . '-Bshell153c11', 's45d147d4', 'field-label']) @attr(['for' => 'demo-name'])>Tên mẫu</label>
                            <input @class([$__VIEW_ID__ . '-Bshell153c12', 's45d147d4']) @attr(['id' => 'demo-name', 'data-demo-name' => true, 'type' => 'text', 'placeholder' => 'Nhập một tên']) @bind($name) @required(true)>
                            <p @class([$__VIEW_ID__ . '-Bshell153c13', 's45d147d4', 'live-output'])>Xin chào, <strong @class([$__VIEW_ID__ . '-Bshell153c131', 's45d147d4']) @attr(['data-demo-name-output' => true])>@startMarker('output', 'Bshell153c131o1'){{ $name }}@endMarker('output', 'Bshell153c131o1')</strong>.</p>
@exec($__env->stopSection())
@exec($__featurecard__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['featurecard'].'_0'))
@include('web.modules.demo.featurecard', ['number' => "03", 'title' => "Two-way binding", 'source' => "&#64;bind(name)", 'tone' => "cyan", '__ONE_CHILDREN_CONTENT__' => $__featurecard__0_content])
@endMarker('component', 'Bshell153c1')

                        @startMarker('component', 'Bshell153c2')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['featurecard'].'_1'))
<label @class([$__VIEW_ID__ . '-Bshell153c21', 's45d147d4', 'check-row'])><input @class([$__VIEW_ID__ . '-Bshell153c211', 's45d147d4']) @attr(['data-demo-accept' => true, 'type' => 'checkbox']) @bind($accepted) @checked($accepted)> Đã đọc tài liệu cú pháp</label>
                            <label @class([$__VIEW_ID__ . '-Bshell153c22', 's45d147d4', 'check-row'])><input @class([$__VIEW_ID__ . '-Bshell153c221', 's45d147d4']) @attr(['type' => 'checkbox']) @bind($isLocked) @checked($isLocked)> Khóa trường ghi chú</label>
                            <input @class([$__VIEW_ID__ . '-Bshell153c23', 's45d147d4']) @attr(['type' => 'text', 'placeholder' => 'Ghi chú mẫu']) @bind($note) @readonly($isLocked)>
                            <button @class([$__VIEW_ID__ . '-Bshell153c24', 's45d147d4']) @attr(['data-demo-continue' => true]) @disabled(!$accepted)>Tiếp tục</button>
@exec($__env->stopSection())
@exec($__featurecard__1_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['featurecard'].'_1'))
@include('web.modules.demo.featurecard', ['number' => "04", 'title' => "Boolean attributes", 'source' => "&#64;checked · &#64;disabled · &#64;readonly", 'tone' => "yellow", '__ONE_CHILDREN_CONTENT__' => $__featurecard__1_content])
@endMarker('component', 'Bshell153c2')

                        @startMarker('component', 'Bshell153c3')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['featurecard'].'_2'))
<button @class([$__VIEW_ID__ . '-Bshell153c31', 's45d147d4']) @attr(['data-demo-visibility' => true])>Bật / tắt hai vùng</button>
                            <p @class([$__VIEW_ID__ . '-Bshell153c32', 's45d147d4', 'visibility-sample', 'is-hidden'=> !$isVisible]) @attr(['data-demo-visible' => 'true'])>Vùng này hiện khi state là true.</p>
                            <p @class([$__VIEW_ID__ . '-Bshell153c33', 's45d147d4', 'visibility-sample', 'is-hidden'=> $isVisible]) @attr(['data-demo-visible' => 'false'])>Vùng này hiện khi state là false.</p>
                            <a @class([$__VIEW_ID__ . '-Bshell153c34', 's45d147d4']) @attr(['href'=> '/compiler', 'title'=> 'Compiler cho ' . $name])>Mở trang compiler</a>
@exec($__env->stopSection())
@exec($__featurecard__2_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['featurecard'].'_2'))
@include('web.modules.demo.featurecard', ['number' => "05", 'title' => "Visibility & attributes", 'source' => "&#64;class · &#64;attr · &#64;style", 'tone' => "pink", '__ONE_CHILDREN_CONTENT__' => $__featurecard__2_content])
@endMarker('component', 'Bshell153c3')
                </div>
                <div @class([$__VIEW_ID__ . '-Bshell154', 's45d147d4', 'card-grid', 'is-hidden'=> $selectedPanel !== 'flow']) @attr(['data-demo-panel' => 'flow'])>
                        @startMarker('component', 'Bshell154c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['featurecard'].'_3'))
<div @class([$__VIEW_ID__ . '-Bshell154c11', 's45d147d4', 'status-buttons'])>
                                <button @class([$__VIEW_ID__ . '-Bshell154c111', 's45d147d4']) @attr(['data-demo-status' => 'ready'])>Ready</button>
                                <button @class([$__VIEW_ID__ . '-Bshell154c112', 's45d147d4']) @attr(['data-demo-status' => 'building'])>Building</button>
                                <button @class([$__VIEW_ID__ . '-Bshell154c113', 's45d147d4']) @attr(['data-demo-status' => 'error'])>Error</button>
                            </div>
                            @startMarker('reactive', 'Bshell154c1r1', ['stateKey' => ['status'], 'type' => 'if'])
                            @if($status === 'ready')
                                <p @class([$__VIEW_ID__ . '-Bshell154c1r1k11', 's45d147d4', 'status-card', 'status-ready']) @attr(['data-demo-status-output' => true])>Sẵn sàng biên dịch.</p>
                            @elseif($status === 'building')
                                <p @class([$__VIEW_ID__ . '-Bshell154c1r1k21', 's45d147d4', 'status-card', 'status-building']) @attr(['data-demo-status-output' => true])>Đang biên dịch fixture.</p>
                            @else
                                <p @class([$__VIEW_ID__ . '-Bshell154c1r1k31', 's45d147d4', 'status-card', 'status-error']) @attr(['data-demo-status-output' => true])>Trạng thái lỗi mẫu.</p>
                            @endif
                            @endMarker('reactive', 'Bshell154c1r1')
@exec($__env->stopSection())
@exec($__featurecard__3_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['featurecard'].'_3'))
@include('web.modules.demo.featurecard', ['number' => "06", 'title' => "If / elseif / else", 'source' => "&#64;if(status === 'ready')", 'tone' => "yellow", '__ONE_CHILDREN_CONTENT__' => $__featurecard__3_content])
@endMarker('component', 'Bshell154c1')

                        @startMarker('component', 'Bshell154c2')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['featurecard'].'_4'))
<div @class([$__VIEW_ID__ . '-Bshell154c21', 's45d147d4', 'number-run'])>
                                @startMarker('reactive', 'Bshell154c21l1', ['stateKey' => ['count'], 'type' => 'for'])
                                @for($i = 0; $i < $count; $i++)
                                    <span @class([$__VIEW_ID__ . "-Bshell154c21l11-{$i}", 's45d147d4'])>@startMarker('output', "Bshell154c21l11o1-{$i}"){{ $i + 1 }}@endMarker('output', "Bshell154c21l11o1-{$i}")</span>
                                @endfor
                                @endMarker('reactive', 'Bshell154c21l1')
                            </div>
                            <ul @class([$__VIEW_ID__ . '-Bshell154c22', 's45d147d4', 'sample-list'])>
                                @startMarker('reactive', 'Bshell154c22l1', ['stateKey' => ['sampleItems'], 'type' => 'foreach'])
                                @foreach($sampleItems as $item)
                                    <li @class([$__VIEW_ID__ . "-Bshell154c22l11-{$item['id']}", 's45d147d4', 'is-enabled'=> $item['enabled']])>@startMarker('output', "Bshell154c22l11o1-{$item['id']}"){{ $item['label'] }}@endMarker('output', "Bshell154c22l11o1-{$item['id']}")</li>
                                @endforeach
                                @endMarker('reactive', 'Bshell154c22l1')
                            </ul>
@exec($__env->stopSection())
@exec($__featurecard__4_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['featurecard'].'_4'))
@include('web.modules.demo.featurecard', ['number' => "07", 'title' => "For & foreach", 'source' => "&#64;for · &#64;foreach · &#64;key", 'tone' => "pink", '__ONE_CHILDREN_CONTENT__' => $__featurecard__4_content])
@endMarker('component', 'Bshell154c2')

                        @startMarker('component', 'Bshell154c3')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['featurecard'].'_5'))
<select @class([$__VIEW_ID__ . '-Bshell154c31', 's45d147d4']) @attr(['data-demo-runtime' => true]) @bind($selectedRuntime)>
                                <option @class([$__VIEW_ID__ . '-Bshell154c311', 's45d147d4']) @attr(['value' => 'blade'])>Blade</option>
                                <option @class([$__VIEW_ID__ . '-Bshell154c312', 's45d147d4']) @attr(['value' => 'typescript'])>TypeScript</option>
                                <option @class([$__VIEW_ID__ . '-Bshell154c313', 's45d147d4']) @attr(['value' => 'css'])>Scoped CSS</option>
                            </select>
                            @startMarker('reactive', 'Bshell154c3r1', ['stateKey' => ['selectedRuntime'], 'type' => 'switch'])
                            @switch($selectedRuntime)
                                @case('typescript')
                                    <p @class([$__VIEW_ID__ . '-Bshell154c3r1k11', 's45d147d4', 'runtime-result']) @attr(['data-demo-runtime-output' => true])>Client output giữ state, event và lifecycle.</p>
                                    @break
                                @case('css')
                                    <p @class([$__VIEW_ID__ . '-Bshell154c3r1k21', 's45d147d4', 'runtime-result']) @attr(['data-demo-runtime-output' => true])>Selector được gắn scope theo view.</p>
                                    @break
                                @default
                                    <p @class([$__VIEW_ID__ . '-Bshell154c3r1k31', 's45d147d4', 'runtime-result']) @attr(['data-demo-runtime-output' => true])>Server output trả HTML hoàn chỉnh.</p>
                            @endswitch
                            @endMarker('reactive', 'Bshell154c3r1')
@exec($__env->stopSection())
@exec($__featurecard__5_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['featurecard'].'_5'))
@include('web.modules.demo.featurecard', ['number' => "08", 'title' => "Switch", 'source' => "&#64;switch(selectedRuntime)", 'tone' => "cyan", '__ONE_CHILDREN_CONTENT__' => $__featurecard__5_content])
@endMarker('component', 'Bshell154c3')
                </div>
                <div @class([$__VIEW_ID__ . '-Bshell155', 's45d147d4', 'card-grid', 'is-hidden'=> $selectedPanel !== 'state']) @attr(['data-demo-panel' => 'state'])>
                        @startMarker('component', 'Bshell155c1')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['featurecard'].'_6'))
<div @class([$__VIEW_ID__ . '-Bshell155c11', 's45d147d4', 'counter-row'])>
                                <button @class([$__VIEW_ID__ . '-Bshell155c111', 's45d147d4']) @attr(['data-demo-count' => 'decrease', 'aria-label' => 'Giảm count']) @disabled($count === 0)>Giảm</button>
                                <strong @class([$__VIEW_ID__ . '-Bshell155c112', 's45d147d4']) @attr(['data-demo-count-output' => true])>@startMarker('output', 'Bshell155c112o1'){{ $count }}@endMarker('output', 'Bshell155c112o1')</strong>
                                <button @class([$__VIEW_ID__ . '-Bshell155c113', 's45d147d4']) @attr(['data-demo-count' => 'increase', 'aria-label' => 'Tăng count']) @disabled($count === $MAX_COUNT)>Tăng</button>
                            </div>
                            <div @class([$__VIEW_ID__ . '-Bshell155c12', 's45d147d4', 'progress-track'])><i @class([$__VIEW_ID__ . '-Bshell155c121', 's45d147d4']) @style(['width'=> $count * 10 . '%'])></i></div>
                            <small @class([$__VIEW_ID__ . '-Bshell155c13', 's45d147d4'])>Giới hạn mẫu: 0–{{ $MAX_COUNT }}</small>
@exec($__env->stopSection())
@exec($__featurecard__6_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['featurecard'].'_6'))
@include('web.modules.demo.featurecard', ['number' => "01", 'title' => "Reactive state", 'source' => "&#64;states({ count: 3 })", 'tone' => "pink", '__ONE_CHILDREN_CONTENT__' => $__featurecard__6_content])
@endMarker('component', 'Bshell155c1')

                        @startMarker('component', 'Bshell155c2')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['featurecard'].'_7'))
<p @class([$__VIEW_ID__ . '-Bshell155c21', 's45d147d4'])>Event inline cập nhật state; khối setup bên dưới cũng khai báo method tái sử dụng.</p>
                            <button @class([$__VIEW_ID__ . '-Bshell155c22', 's45d147d4'])>Đặt lại count</button>
                            <button @class([$__VIEW_ID__ . '-Bshell155c23', 's45d147d4'])>Nhấp đúp để đạt tối đa</button>
@exec($__env->stopSection())
@exec($__featurecard__7_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['featurecard'].'_7'))
@include('web.modules.demo.featurecard', ['number' => "02", 'title' => "Events & setup", 'source' => "&#64;click(setCount(3)) · &lt;script setup&gt;", 'tone' => "cyan", '__ONE_CHILDREN_CONTENT__' => $__featurecard__7_content])
@endMarker('component', 'Bshell155c2')

                        @startMarker('component', 'Bshell155c3')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['featurecard'].'_8'))
<p @class([$__VIEW_ID__ . '-Bshell155c31', 's45d147d4'])>Chính khung này là component <code @class([$__VIEW_ID__ . '-Bshell155c311', 's45d147d4'])>featurecard</code> được import. Tiêu đề và số là props; nội dung đoạn này đi qua slot <code @class([$__VIEW_ID__ . '-Bshell155c312', 's45d147d4'])>&#64;children</code>.</p>
@exec($__env->stopSection())
@exec($__featurecard__8_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['featurecard'].'_8'))
@include('web.modules.demo.featurecard', ['number' => "09", 'title' => "Props, import & children", 'source' => "&#64;props · &#64;import · &#64;children", 'tone' => "yellow", '__ONE_CHILDREN_CONTENT__' => $__featurecard__8_content])
@endMarker('component', 'Bshell155c3')
                </div>
            </section>

            <section @class([$__VIEW_ID__ . '-Bshell16', 's45d147d4', 'coverage']) @attr(['id' => 'coverage'])>
                <div @class([$__VIEW_ID__ . '-Bshell161', 's45d147d4', 'section-title', 'section-title--small'])>
                    <p @class([$__VIEW_ID__ . '-Bshell1611', 's45d147d4'])>02 / Phạm vi hỗ trợ</p>
                    <h2 @class([$__VIEW_ID__ . '-Bshell1612', 's45d147d4'])>Một bản đồ cú pháp,<br @class([$__VIEW_ID__ . '-Bshell16121', 's45d147d4'])>không phải danh sách trang trí.</h2>
                </div>

                <div @class([$__VIEW_ID__ . '-Bshell162', 's45d147d4', 'coverage-grid'])>
                    <article @class([$__VIEW_ID__ . '-Bshell1621', 's45d147d4'])>
                        <h3 @class([$__VIEW_ID__ . '-Bshell16211', 's45d147d4'])>Declarations</h3>
                        <p @class([$__VIEW_ID__ . '-Bshell16212', 's45d147d4'])><code @class([$__VIEW_ID__ . '-Bshell162121', 's45d147d4'])>&#64;states</code>, <code @class([$__VIEW_ID__ . '-Bshell162122', 's45d147d4'])>&#64;state</code>, <code @class([$__VIEW_ID__ . '-Bshell162123', 's45d147d4'])>&#64;props</code>, <code @class([$__VIEW_ID__ . '-Bshell162124', 's45d147d4'])>&#64;const</code>, <code @class([$__VIEW_ID__ . '-Bshell162125', 's45d147d4'])>&#64;let</code>, <code @class([$__VIEW_ID__ . '-Bshell162126', 's45d147d4'])>&#64;vars</code>, <code @class([$__VIEW_ID__ . '-Bshell162127', 's45d147d4'])>&#64;import</code>, <code @class([$__VIEW_ID__ . '-Bshell162128', 's45d147d4'])>&#64;await</code></p>
                        <span @class([$__VIEW_ID__ . '-Bshell16213', 's45d147d4'])>Được minh họa trực tiếp hoặc dùng trong source của module.</span>
                    </article>
                    <article @class([$__VIEW_ID__ . '-Bshell1622', 's45d147d4'])>
                        <h3 @class([$__VIEW_ID__ . '-Bshell16221', 's45d147d4'])>Template</h3>
                        <p @class([$__VIEW_ID__ . '-Bshell16222', 's45d147d4'])><code @class([$__VIEW_ID__ . '-Bshell162221', 's45d147d4'])>&#64;extends</code>, <code @class([$__VIEW_ID__ . '-Bshell162222', 's45d147d4'])>&#64;block</code>, <code @class([$__VIEW_ID__ . '-Bshell162223', 's45d147d4'])>&#64;section</code>, <code @class([$__VIEW_ID__ . '-Bshell162224', 's45d147d4'])>&#64;yield</code>, <code @class([$__VIEW_ID__ . '-Bshell162225', 's45d147d4'])>&#64;include</code>, <code @class([$__VIEW_ID__ . '-Bshell162226', 's45d147d4'])>&#64;children</code>, <code @class([$__VIEW_ID__ . '-Bshell162227', 's45d147d4'])>&#64;exec</code></p>
                        <span @class([$__VIEW_ID__ . '-Bshell16223', 's45d147d4'])>Trang dùng layout, block và component slot thực.</span>
                    </article>
                    <article @class([$__VIEW_ID__ . '-Bshell1623', 's45d147d4'])>
                        <h3 @class([$__VIEW_ID__ . '-Bshell16231', 's45d147d4'])>Control flow</h3>
                        <p @class([$__VIEW_ID__ . '-Bshell16232', 's45d147d4'])><code @class([$__VIEW_ID__ . '-Bshell162321', 's45d147d4'])>&#64;if</code>, <code @class([$__VIEW_ID__ . '-Bshell162322', 's45d147d4'])>&#64;foreach</code>, <code @class([$__VIEW_ID__ . '-Bshell162323', 's45d147d4'])>&#64;for</code>, <code @class([$__VIEW_ID__ . '-Bshell162324', 's45d147d4'])>&#64;while</code>, <code @class([$__VIEW_ID__ . '-Bshell162325', 's45d147d4'])>&#64;switch</code>, <code @class([$__VIEW_ID__ . '-Bshell162326', 's45d147d4'])>&#64;break</code>, <code @class([$__VIEW_ID__ . '-Bshell162327', 's45d147d4'])>&#64;continue</code>, <code @class([$__VIEW_ID__ . '-Bshell162328', 's45d147d4'])>&#64;ssr</code></p>
                        <span @class([$__VIEW_ID__ . '-Bshell16233', 's45d147d4'])>If, foreach, for và switch chạy trong tab Control flow.</span>
                    </article>
                    <article @class([$__VIEW_ID__ . '-Bshell1624', 's45d147d4'])>
                        <h3 @class([$__VIEW_ID__ . '-Bshell16241', 's45d147d4'])>Bindings</h3>
                        <p @class([$__VIEW_ID__ . '-Bshell16242', 's45d147d4'])><code @class([$__VIEW_ID__ . '-Bshell162421', 's45d147d4'])>&#64;attr</code>, <code @class([$__VIEW_ID__ . '-Bshell162422', 's45d147d4'])>&#64;class</code>, <code @class([$__VIEW_ID__ . '-Bshell162423', 's45d147d4'])>&#64;style</code>, <code @class([$__VIEW_ID__ . '-Bshell162424', 's45d147d4'])>&#64;bind</code>, <code @class([$__VIEW_ID__ . '-Bshell162425', 's45d147d4'])>&#64;val</code>, <code @class([$__VIEW_ID__ . '-Bshell162426', 's45d147d4'])>&#64;show</code>, <code @class([$__VIEW_ID__ . '-Bshell162427', 's45d147d4'])>&#64;hide</code>, boolean attributes</p>
                        <span @class([$__VIEW_ID__ . '-Bshell16243', 's45d147d4'])>Tab Binding cho phép kiểm tra trực tiếp.</span>
                    </article>
                    <article @class([$__VIEW_ID__ . '-Bshell1625', 's45d147d4'])>
                        <h3 @class([$__VIEW_ID__ . '-Bshell16251', 's45d147d4'])>Forms & access</h3>
                        <p @class([$__VIEW_ID__ . '-Bshell16252', 's45d147d4'])><code @class([$__VIEW_ID__ . '-Bshell162521', 's45d147d4'])>&#64;csrf</code>, <code @class([$__VIEW_ID__ . '-Bshell162522', 's45d147d4'])>&#64;method</code>, <code @class([$__VIEW_ID__ . '-Bshell162523', 's45d147d4'])>&#64;auth</code>, <code @class([$__VIEW_ID__ . '-Bshell162524', 's45d147d4'])>&#64;guest</code>, <code @class([$__VIEW_ID__ . '-Bshell162525', 's45d147d4'])>&#64;can</code>, <code @class([$__VIEW_ID__ . '-Bshell162526', 's45d147d4'])>&#64;cannot</code>, <code @class([$__VIEW_ID__ . '-Bshell162527', 's45d147d4'])>&#64;error</code></p>
                        <span @class([$__VIEW_ID__ . '-Bshell16253', 's45d147d4'])>Nhóm này cần request, session hoặc policy thật nên được kiểm chứng theo context ứng dụng.</span>
                    </article>
                    <article @class([$__VIEW_ID__ . '-Bshell1626', 's45d147d4'])>
                        <h3 @class([$__VIEW_ID__ . '-Bshell16261', 's45d147d4'])>Component blocks</h3>
                        <p @class([$__VIEW_ID__ . '-Bshell16262', 's45d147d4'])><code @class([$__VIEW_ID__ . '-Bshell162621', 's45d147d4'])>&lt;script setup lang="ts"&gt;</code>, <code @class([$__VIEW_ID__ . '-Bshell162622', 's45d147d4'])>&lt;style scoped&gt;</code>, magic variables và wrapper modern / legacy</p>
                        <span @class([$__VIEW_ID__ . '-Bshell16263', 's45d147d4'])>Module này dùng wrapper modern, TypeScript setup và scoped CSS.</span>
                    </article>
                </div>

                    <p class="ssr-ticket">Khối này chỉ xuất hiện trong HTML từ server: <code>&#64;ssr</code> không được đưa vào JavaScript view.</p>
            </section>

            <footer @class([$__VIEW_ID__ . '-Bshell17', 's45d147d4', 'demo-footer'])>
                <p @class([$__VIEW_ID__ . '-Bshell171', 's45d147d4'])>Fixture: <code @class([$__VIEW_ID__ . '-Bshell1711', 's45d147d4'])>web.modules.demo.index</code></p>
                <a @class([$__VIEW_ID__ . '-Bshell172', 's45d147d4']) @attr(['href' => '/'])>Về trang chủ</a>
            </footer>
            {!! $DEMO_SCRIPT !!}
        </main>
    @endblock
