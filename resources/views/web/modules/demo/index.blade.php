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
        <main @class([$__VIEW_ID__ . '-71bbd51d', 'demo-page'])>
            <div @class([$__VIEW_ID__ . '-3996f6ab', 'paper-noise'])></div>

            <nav @class([$__VIEW_ID__ . '-a78834ce', 'demo-nav']) @attr(['aria-label' => 'Điều hướng trang demo'])>
                <a @class([$__VIEW_ID__ . '-1cb12447']) @attr(['href' => '/'])>SAOLABS</a>
                <div @class([$__VIEW_ID__ . '-c13c35fb'])>
                    <a @class([$__VIEW_ID__ . '-69452823']) @attr(['href' => '#playground'])>Playground</a>
                    <a @class([$__VIEW_ID__ . '-cd4d96c2']) @attr(['href' => '#coverage'])>Phạm vi hỗ trợ</a>
                    <a @class([$__VIEW_ID__ . '-22cee8fd']) @attr(['href' => '/docs/getting-started'])>Tài liệu</a>
                </div>
            </nav>

            <header @class([$__VIEW_ID__ . '-25b5853e', 'demo-hero'])>
                <div @class([$__VIEW_ID__ . '-da12442d', 'hero-stamp'])>
                    <span @class([$__VIEW_ID__ . '-6b88dd0b'])>LIVE</span>
                    <small @class([$__VIEW_ID__ . '-c8cf5bdb'])>/demo</small>
                </div>
                <div @class([$__VIEW_ID__ . '-c1c39a77'])>
                    <p @class([$__VIEW_ID__ . '-5a0bb3fc', 'overline'])>Saola single-file component</p>
                    <h1 @class([$__VIEW_ID__ . '-7d686606'])>MỘT FILE.<br @class([$__VIEW_ID__ . '-6c02ded8'])><em @class([$__VIEW_ID__ . '-a9d3960a'])>HAI RUNTIME.</em><br @class([$__VIEW_ID__ . '-2a4be3ab'])>MỌI THỨ<br @class([$__VIEW_ID__ . '-5c8d53e9'])>ĐANG CHẠY.</h1>
                    <p @class([$__VIEW_ID__ . '-682aa896', 'hero-copy'])>Trang này là fixture trực tiếp của compiler: source <code @class([$__VIEW_ID__ . '-862d4a11'])>index.sao</code> tạo Blade cho lần tải đầu và TypeScript cho các tương tác sau hydration.</p>
                </div>
                <aside @class([$__VIEW_ID__ . '-67997262', 'hero-note'])>
                    <strong @class([$__VIEW_ID__ . '-d1051098'])>{{ $featureTotal }}</strong>
                    <span @class([$__VIEW_ID__ . '-6ef066f6'])>nhóm cú pháp được tài liệu hóa</span>
                    <p @class([$__VIEW_ID__ . '-5a53f92e'])>Không dùng dữ liệu API giả. Các giá trị bên dưới là dữ liệu mẫu được ghi nhãn rõ.</p>
                </aside>
            </header>

            <section @class([$__VIEW_ID__ . '-48d182dc', 'proof-strip']) @attr(['aria-label' => 'Đầu ra của compiler'])>
                <span @class([$__VIEW_ID__ . '-103de3c0'])>INPUT</span><strong @class([$__VIEW_ID__ . '-5f0756c5'])>.sao</strong>
                <span @class([$__VIEW_ID__ . '-8ca99ec8'])>SERVER</span><strong @class([$__VIEW_ID__ . '-461ec845'])>.blade.php</strong>
                <span @class([$__VIEW_ID__ . '-4451b5a7'])>CLIENT</span><strong @class([$__VIEW_ID__ . '-03b0d6d4'])>.ts</strong>
                <span @class([$__VIEW_ID__ . '-955ebaf2'])>STYLE</span><strong @class([$__VIEW_ID__ . '-c34aff53'])>scoped CSS</strong>
            </section>

            <section @class([$__VIEW_ID__ . '-ac1ed435', 'playground']) @attr(['id' => 'playground'])>
                <div @class([$__VIEW_ID__ . '-a9964b08', 'section-title'])>
                    <p @class([$__VIEW_ID__ . '-6f013710'])>01 / Playground</p>
                    <h2 @class([$__VIEW_ID__ . '-395b70ea'])>Chạm vào cú pháp.<br @class([$__VIEW_ID__ . '-8b4e932a'])>Nhìn state đổi ngay.</h2>
                </div>

                <div @class([$__VIEW_ID__ . '-91f4f5a0', 'tab-tape']) @attr(['role' => 'tablist', 'aria-label' => 'Nhóm tính năng'])>
                    <button @class([$__VIEW_ID__ . '-10b31a87', 'is-active'=> $selectedPanel === 'state']) @attr(['data-demo-tab' => 'state'])>State & event</button>
                    <button @class([$__VIEW_ID__ . '-b9cdcb41', 'is-active'=> $selectedPanel === 'binding']) @attr(['data-demo-tab' => 'binding'])>Binding</button>
                    <button @class([$__VIEW_ID__ . '-9ead1b4b', 'is-active'=> $selectedPanel === 'flow']) @attr(['data-demo-tab' => 'flow'])>Control flow</button>
                </div>

                <div @class([$__VIEW_ID__ . '-b754a903', 'card-grid', 'is-hidden'=> $selectedPanel !== 'binding']) @attr(['data-demo-panel' => 'binding'])>
                        @startMarker('component', 'e3eb906c')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['featurecard'].'_0'))
<label @class([$__VIEW_ID__ . '-4f16c121', 'field-label']) @attr(['for' => 'demo-name'])>Tên mẫu</label>
                            <input @class([$__VIEW_ID__ . '-0c819b78']) @attr(['id' => 'demo-name', 'data-demo-name' => true, 'type' => 'text', 'placeholder' => 'Nhập một tên']) @bind($name) @required(true)>
                            <p @class([$__VIEW_ID__ . '-a1d02bec', 'live-output'])>Xin chào, <strong @class([$__VIEW_ID__ . '-1084f2dc']) @attr(['data-demo-name-output' => true])>@startMarker('output', '3dac18d4'){{ $name }}@endMarker('output', '3dac18d4')</strong>.</p>
@exec($__env->stopSection())
@exec($__featurecard__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['featurecard'].'_0'))
@include('web.modules.demo.featurecard', ['number' => "03", 'title' => "Two-way binding", 'source' => "&#64;bind(name)", 'tone' => "cyan", '__ONE_CHILDREN_CONTENT__' => $__featurecard__0_content])
@endMarker('component', 'e3eb906c')

                        @startMarker('component', '4955c300')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['featurecard'].'_1'))
<label @class([$__VIEW_ID__ . '-8ea1bfd6', 'check-row'])><input @class([$__VIEW_ID__ . '-fc0ed7b7']) @attr(['data-demo-accept' => true, 'type' => 'checkbox']) @bind($accepted) @checked($accepted)> Đã đọc tài liệu cú pháp</label>
                            <label @class([$__VIEW_ID__ . '-8202d879', 'check-row'])><input @class([$__VIEW_ID__ . '-79a83397']) @attr(['type' => 'checkbox']) @bind($isLocked) @checked($isLocked)> Khóa trường ghi chú</label>
                            <input @class([$__VIEW_ID__ . '-a6a1575d']) @attr(['type' => 'text', 'placeholder' => 'Ghi chú mẫu']) @bind($note) @readonly($isLocked)>
                            <button @class([$__VIEW_ID__ . '-3d23181b']) @attr(['data-demo-continue' => true]) @disabled(!$accepted)>Tiếp tục</button>
@exec($__env->stopSection())
@exec($__featurecard__1_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['featurecard'].'_1'))
@include('web.modules.demo.featurecard', ['number' => "04", 'title' => "Boolean attributes", 'source' => "&#64;checked · &#64;disabled · &#64;readonly", 'tone' => "yellow", '__ONE_CHILDREN_CONTENT__' => $__featurecard__1_content])
@endMarker('component', '4955c300')

                        @startMarker('component', '1a6c1cce')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['featurecard'].'_2'))
<button @class([$__VIEW_ID__ . '-587c9784']) @attr(['data-demo-visibility' => true])>Bật / tắt hai vùng</button>
                            <p @class([$__VIEW_ID__ . '-4ee781e3', 'visibility-sample', 'is-hidden'=> !$isVisible]) @attr(['data-demo-visible' => 'true'])>Vùng này hiện khi state là true.</p>
                            <p @class([$__VIEW_ID__ . '-300b4e0d', 'visibility-sample', 'is-hidden'=> $isVisible]) @attr(['data-demo-visible' => 'false'])>Vùng này hiện khi state là false.</p>
                            <a @class([$__VIEW_ID__ . '-dfe72f20']) @attr(['href'=> '/compiler', 'title'=> 'Compiler cho ' . $name])>Mở trang compiler</a>
@exec($__env->stopSection())
@exec($__featurecard__2_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['featurecard'].'_2'))
@include('web.modules.demo.featurecard', ['number' => "05", 'title' => "Visibility & attributes", 'source' => "&#64;class · &#64;attr · &#64;style", 'tone' => "pink", '__ONE_CHILDREN_CONTENT__' => $__featurecard__2_content])
@endMarker('component', '1a6c1cce')
                </div>
                <div @class([$__VIEW_ID__ . '-c9e8675f', 'card-grid', 'is-hidden'=> $selectedPanel !== 'flow']) @attr(['data-demo-panel' => 'flow'])>
                        @startMarker('component', 'af216946')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['featurecard'].'_3'))
<div @class([$__VIEW_ID__ . '-2222fffe', 'status-buttons'])>
                                <button @class([$__VIEW_ID__ . '-7d5fce38']) @attr(['data-demo-status' => 'ready'])>Ready</button>
                                <button @class([$__VIEW_ID__ . '-9afeba4e']) @attr(['data-demo-status' => 'building'])>Building</button>
                                <button @class([$__VIEW_ID__ . '-6eed4f46']) @attr(['data-demo-status' => 'error'])>Error</button>
                            </div>
                            @startMarker('reactive', '27b760b5', ['stateKey' => ['status'], 'type' => 'if'])
                            @if($status === 'ready')
                                <p @class([$__VIEW_ID__ . '-dec06fbd', 'status-card', 'status-ready']) @attr(['data-demo-status-output' => true])>Sẵn sàng biên dịch.</p>
                            @elseif($status === 'building')
                                <p @class([$__VIEW_ID__ . '-67bc53ba', 'status-card', 'status-building']) @attr(['data-demo-status-output' => true])>Đang biên dịch fixture.</p>
                            @else
                                <p @class([$__VIEW_ID__ . '-763cf105', 'status-card', 'status-error']) @attr(['data-demo-status-output' => true])>Trạng thái lỗi mẫu.</p>
                            @endif
                            @endMarker('reactive', '27b760b5')
@exec($__env->stopSection())
@exec($__featurecard__3_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['featurecard'].'_3'))
@include('web.modules.demo.featurecard', ['number' => "06", 'title' => "If / elseif / else", 'source' => "&#64;if(status === 'ready')", 'tone' => "yellow", '__ONE_CHILDREN_CONTENT__' => $__featurecard__3_content])
@endMarker('component', 'af216946')

                        @startMarker('component', '9136e09e')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['featurecard'].'_4'))
<div @class([$__VIEW_ID__ . '-d2316e9d', 'number-run'])>
                                @startMarker('reactive', '23292821', ['stateKey' => ['count'], 'type' => 'for'])
                                @for($i = 0; $i < $count; $i++)
                                    <span @class([$__VIEW_ID__ . "-7ac636e3-{$i}"])>@startMarker('output', "f06b0864-{$i}"){{ $i + 1 }}@endMarker('output', "f06b0864-{$i}")</span>
                                @endfor
                                @endMarker('reactive', '23292821')
                            </div>
                            <ul @class([$__VIEW_ID__ . '-0b863907', 'sample-list'])>
                                @startMarker('reactive', 'f3b01aa8', ['stateKey' => ['sampleItems'], 'type' => 'foreach'])
                                @foreach($sampleItems as $item)
                                    <li @class([$__VIEW_ID__ . "-fcf1116c-{$item['id']}", 'is-enabled'=> $item['enabled']])>@startMarker('output', "3f83bd5b-{$item['id']}"){{ $item['label'] }}@endMarker('output', "3f83bd5b-{$item['id']}")</li>
                                @endforeach
                                @endMarker('reactive', 'f3b01aa8')
                            </ul>
@exec($__env->stopSection())
@exec($__featurecard__4_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['featurecard'].'_4'))
@include('web.modules.demo.featurecard', ['number' => "07", 'title' => "For & foreach", 'source' => "&#64;for · &#64;foreach · &#64;key", 'tone' => "pink", '__ONE_CHILDREN_CONTENT__' => $__featurecard__4_content])
@endMarker('component', '9136e09e')

                        @startMarker('component', '2b606f21')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['featurecard'].'_5'))
<select @class([$__VIEW_ID__ . '-7f2a3c58']) @attr(['data-demo-runtime' => true]) @bind($selectedRuntime)>
                                <option @class([$__VIEW_ID__ . '-9a32bb52']) @attr(['value' => 'blade'])>Blade</option>
                                <option @class([$__VIEW_ID__ . '-f3590e60']) @attr(['value' => 'typescript'])>TypeScript</option>
                                <option @class([$__VIEW_ID__ . '-e548dc56']) @attr(['value' => 'css'])>Scoped CSS</option>
                            </select>
                            @startMarker('reactive', '261877d1', ['stateKey' => ['selectedRuntime'], 'type' => 'switch'])
                            @switch($selectedRuntime)
                                @case('typescript')
                                    <p @class([$__VIEW_ID__ . '-b4defb38', 'runtime-result']) @attr(['data-demo-runtime-output' => true])>Client output giữ state, event và lifecycle.</p>
                                    @break
                                @case('css')
                                    <p @class([$__VIEW_ID__ . '-7114a758', 'runtime-result']) @attr(['data-demo-runtime-output' => true])>Selector được gắn scope theo view.</p>
                                    @break
                                @default
                                    <p @class([$__VIEW_ID__ . '-3fbd97db', 'runtime-result']) @attr(['data-demo-runtime-output' => true])>Server output trả HTML hoàn chỉnh.</p>
                            @endswitch
                            @endMarker('reactive', '261877d1')
@exec($__env->stopSection())
@exec($__featurecard__5_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['featurecard'].'_5'))
@include('web.modules.demo.featurecard', ['number' => "08", 'title' => "Switch", 'source' => "&#64;switch(selectedRuntime)", 'tone' => "cyan", '__ONE_CHILDREN_CONTENT__' => $__featurecard__5_content])
@endMarker('component', '2b606f21')
                </div>
                <div @class([$__VIEW_ID__ . '-5783ae25', 'card-grid', 'is-hidden'=> $selectedPanel !== 'state']) @attr(['data-demo-panel' => 'state'])>
                        @startMarker('component', '0151fa95')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['featurecard'].'_6'))
<div @class([$__VIEW_ID__ . '-7ac45d3e', 'counter-row'])>
                                <button @class([$__VIEW_ID__ . '-c6a8091c']) @attr(['data-demo-count' => 'decrease', 'aria-label' => 'Giảm count']) @disabled($count === 0)>Giảm</button>
                                <strong @class([$__VIEW_ID__ . '-2a4b857b']) @attr(['data-demo-count-output' => true])>@startMarker('output', '344f0d1e'){{ $count }}@endMarker('output', '344f0d1e')</strong>
                                <button @class([$__VIEW_ID__ . '-808c6128']) @attr(['data-demo-count' => 'increase', 'aria-label' => 'Tăng count']) @disabled($count === $MAX_COUNT)>Tăng</button>
                            </div>
                            <div @class([$__VIEW_ID__ . '-8a4ec305', 'progress-track'])><i @class([$__VIEW_ID__ . '-120c4376']) @style(['width'=> $count * 10 . '%'])></i></div>
                            <small @class([$__VIEW_ID__ . '-5fe12573'])>Giới hạn mẫu: 0–{{ $MAX_COUNT }}</small>
@exec($__env->stopSection())
@exec($__featurecard__6_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['featurecard'].'_6'))
@include('web.modules.demo.featurecard', ['number' => "01", 'title' => "Reactive state", 'source' => "&#64;states({ count: 3 })", 'tone' => "pink", '__ONE_CHILDREN_CONTENT__' => $__featurecard__6_content])
@endMarker('component', '0151fa95')

                        @startMarker('component', '21cfa9f6')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['featurecard'].'_7'))
<p @class([$__VIEW_ID__ . '-29596de2'])>Event inline cập nhật state; khối setup bên dưới cũng khai báo method tái sử dụng.</p>
                            <button @class([$__VIEW_ID__ . '-3310bdda'])>Đặt lại count</button>
                            <button @class([$__VIEW_ID__ . '-b1695bf6'])>Nhấp đúp để đạt tối đa</button>
@exec($__env->stopSection())
@exec($__featurecard__7_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['featurecard'].'_7'))
@include('web.modules.demo.featurecard', ['number' => "02", 'title' => "Events & setup", 'source' => "&#64;click(setCount(3)) · &lt;script setup&gt;", 'tone' => "cyan", '__ONE_CHILDREN_CONTENT__' => $__featurecard__7_content])
@endMarker('component', '21cfa9f6')

                        @startMarker('component', '78b74471')
                        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['featurecard'].'_8'))
<p @class([$__VIEW_ID__ . '-f184ae5c'])>Chính khung này là component <code @class([$__VIEW_ID__ . '-f840c930'])>featurecard</code> được import. Tiêu đề và số là props; nội dung đoạn này đi qua slot <code @class([$__VIEW_ID__ . '-0ea168d2'])>&#64;children</code>.</p>
@exec($__env->stopSection())
@exec($__featurecard__8_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['featurecard'].'_8'))
@include('web.modules.demo.featurecard', ['number' => "09", 'title' => "Props, import & children", 'source' => "&#64;props · &#64;import · &#64;children", 'tone' => "yellow", '__ONE_CHILDREN_CONTENT__' => $__featurecard__8_content])
@endMarker('component', '78b74471')
                </div>
            </section>

            <section @class([$__VIEW_ID__ . '-09babe13', 'coverage']) @attr(['id' => 'coverage'])>
                <div @class([$__VIEW_ID__ . '-a38bd2e5', 'section-title', 'section-title--small'])>
                    <p @class([$__VIEW_ID__ . '-339663c0'])>02 / Phạm vi hỗ trợ</p>
                    <h2 @class([$__VIEW_ID__ . '-892f4d90'])>Một bản đồ cú pháp,<br @class([$__VIEW_ID__ . '-e7712337'])>không phải danh sách trang trí.</h2>
                </div>

                <div @class([$__VIEW_ID__ . '-5e6196d1', 'coverage-grid'])>
                    <article @class([$__VIEW_ID__ . '-24dd0405'])>
                        <h3 @class([$__VIEW_ID__ . '-cb9f18b2'])>Declarations</h3>
                        <p @class([$__VIEW_ID__ . '-e507f63c'])><code @class([$__VIEW_ID__ . '-0f9f3c92'])>&#64;states</code>, <code @class([$__VIEW_ID__ . '-11228f95'])>&#64;state</code>, <code @class([$__VIEW_ID__ . '-1bd83dfd'])>&#64;props</code>, <code @class([$__VIEW_ID__ . '-8476cef6'])>&#64;const</code>, <code @class([$__VIEW_ID__ . '-25d54a81'])>&#64;let</code>, <code @class([$__VIEW_ID__ . '-2e57333e'])>&#64;vars</code>, <code @class([$__VIEW_ID__ . '-eb6834cf'])>&#64;import</code>, <code @class([$__VIEW_ID__ . '-88a4d770'])>&#64;await</code></p>
                        <span @class([$__VIEW_ID__ . '-4b211548'])>Được minh họa trực tiếp hoặc dùng trong source của module.</span>
                    </article>
                    <article @class([$__VIEW_ID__ . '-5aa458e4'])>
                        <h3 @class([$__VIEW_ID__ . '-26748bcc'])>Template</h3>
                        <p @class([$__VIEW_ID__ . '-5faf36b1'])><code @class([$__VIEW_ID__ . '-2d990fba'])>&#64;extends</code>, <code @class([$__VIEW_ID__ . '-4a81cfbe'])>&#64;block</code>, <code @class([$__VIEW_ID__ . '-d7e74641'])>&#64;section</code>, <code @class([$__VIEW_ID__ . '-414c62c2'])>&#64;yield</code>, <code @class([$__VIEW_ID__ . '-c55390f6'])>&#64;include</code>, <code @class([$__VIEW_ID__ . '-24748e05'])>&#64;children</code>, <code @class([$__VIEW_ID__ . '-daffd75d'])>&#64;exec</code></p>
                        <span @class([$__VIEW_ID__ . '-01bc413c'])>Trang dùng layout, block và component slot thực.</span>
                    </article>
                    <article @class([$__VIEW_ID__ . '-d1785dfa'])>
                        <h3 @class([$__VIEW_ID__ . '-051ae83a'])>Control flow</h3>
                        <p @class([$__VIEW_ID__ . '-fdae1d56'])><code @class([$__VIEW_ID__ . '-64d42a83'])>&#64;if</code>, <code @class([$__VIEW_ID__ . '-5a202243'])>&#64;foreach</code>, <code @class([$__VIEW_ID__ . '-e3537807'])>&#64;for</code>, <code @class([$__VIEW_ID__ . '-69767f16'])>&#64;while</code>, <code @class([$__VIEW_ID__ . '-1a038ceb'])>&#64;switch</code>, <code @class([$__VIEW_ID__ . '-6137dcae'])>&#64;break</code>, <code @class([$__VIEW_ID__ . '-ce112366'])>&#64;continue</code>, <code @class([$__VIEW_ID__ . '-14d8ce2f'])>&#64;ssr</code></p>
                        <span @class([$__VIEW_ID__ . '-d956ab68'])>If, foreach, for và switch chạy trong tab Control flow.</span>
                    </article>
                    <article @class([$__VIEW_ID__ . '-b175ec3c'])>
                        <h3 @class([$__VIEW_ID__ . '-94d98784'])>Bindings</h3>
                        <p @class([$__VIEW_ID__ . '-6f5bcdbd'])><code @class([$__VIEW_ID__ . '-8e1de079'])>&#64;attr</code>, <code @class([$__VIEW_ID__ . '-5f991a41'])>&#64;class</code>, <code @class([$__VIEW_ID__ . '-e436284f'])>&#64;style</code>, <code @class([$__VIEW_ID__ . '-5a992cc4'])>&#64;bind</code>, <code @class([$__VIEW_ID__ . '-daa8e59d'])>&#64;val</code>, <code @class([$__VIEW_ID__ . '-058b8fb0'])>&#64;show</code>, <code @class([$__VIEW_ID__ . '-ac28fd2f'])>&#64;hide</code>, boolean attributes</p>
                        <span @class([$__VIEW_ID__ . '-9e5a582a'])>Tab Binding cho phép kiểm tra trực tiếp.</span>
                    </article>
                    <article @class([$__VIEW_ID__ . '-b1dffe50'])>
                        <h3 @class([$__VIEW_ID__ . '-c68584f1'])>Forms & access</h3>
                        <p @class([$__VIEW_ID__ . '-1ffcdb8e'])><code @class([$__VIEW_ID__ . '-352f19a3'])>&#64;csrf</code>, <code @class([$__VIEW_ID__ . '-1b8157dc'])>&#64;method</code>, <code @class([$__VIEW_ID__ . '-916317ad'])>&#64;auth</code>, <code @class([$__VIEW_ID__ . '-ab8b086a'])>&#64;guest</code>, <code @class([$__VIEW_ID__ . '-33fff89c'])>&#64;can</code>, <code @class([$__VIEW_ID__ . '-57bfe208'])>&#64;cannot</code>, <code @class([$__VIEW_ID__ . '-76cda61c'])>&#64;error</code></p>
                        <span @class([$__VIEW_ID__ . '-1360a086'])>Nhóm này cần request, session hoặc policy thật nên được kiểm chứng theo context ứng dụng.</span>
                    </article>
                    <article @class([$__VIEW_ID__ . '-919ac307'])>
                        <h3 @class([$__VIEW_ID__ . '-75836397'])>Component blocks</h3>
                        <p @class([$__VIEW_ID__ . '-85b8a6c1'])><code @class([$__VIEW_ID__ . '-b0861b21'])>&lt;script setup lang="ts"&gt;</code>, <code @class([$__VIEW_ID__ . '-efea05bf'])>&lt;style scoped&gt;</code>, magic variables và wrapper modern / legacy</p>
                        <span @class([$__VIEW_ID__ . '-7d5a1f72'])>Module này dùng wrapper modern, TypeScript setup và scoped CSS.</span>
                    </article>
                </div>

                    <p class="ssr-ticket">Khối này chỉ xuất hiện trong HTML từ server: <code>&#64;ssr</code> không được đưa vào JavaScript view.</p>
            </section>

            <footer @class([$__VIEW_ID__ . '-ab9ce6e7', 'demo-footer'])>
                <p @class([$__VIEW_ID__ . '-52a19f96'])>Fixture: <code @class([$__VIEW_ID__ . '-b598d4d6'])>web.modules.demo.index</code></p>
                <a @class([$__VIEW_ID__ . '-aee14460']) @attr(['href' => '/'])>Về trang chủ</a>
            </footer>
            {!! $DEMO_SCRIPT !!}
        </main>
    @endblock
