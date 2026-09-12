@addCssLink('/static/saola/tag-directives.css')
@exec($__ONE_COMPONENT_REGISTRY__ = ['code-block' => 'web.components.code-block']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($mode, 'a')
@useState($n, 0)
@useState($rows, [
            [ 'id'=> 'r1', 'name'=> 'Hàng một', 'on'=> true ],
            [ 'id'=> 'r2', 'name'=> 'Hàng hai', 'on'=> false ],
            [ 'id'=> 'r3', 'name'=> 'Hàng ba', 'on'=> true ]
        ])
@extends($__layout__ . 'lab')
    @section('meta:title', 'So sánh Directive trên Thẻ (#) & Khối (@) - Saola Lab')
    @section('meta:description', 'So sánh trực quan hai phong cách viết directive trong Saola: Cú pháp khối @if/@foreach và cú pháp trực tiếp trên thẻ #if/#foreach chạy song song.')
    @section('meta:keywords', 'tag directives lab, so sanh directive, #if vs @if, hashtag directives, saola lab')

    @block('main')
        <p @class([$__VIEW_ID__ . '-Bmain1', 'kicker'])><span @class([$__VIEW_ID__ . '-Bmain11'])>DIRECTIVE VIẾT TRÊN THẺ</span></p>
        <h1 @class([$__VIEW_ID__ . '-Bmain2'])>Cùng một nội dung, hai cách viết.</h1>
        <p @class([$__VIEW_ID__ . '-Bmain3', 'kb-lead'])>
            Cột trái dùng directive khối (&#64;if, &#64;switch...), cột phải dùng directive viết trực tiếp trên thẻ (#if, #switch...).
            Compiler tự động hạ cú pháp viết trên thẻ về dạng khối, nên hai cột hoạt động và hiển thị giống hệt nhau.
        </p>

        <div @class([$__VIEW_ID__ . '-Bmain4', 'td-toolbar'])>
            <div @class([$__VIEW_ID__ . '-Bmain41', 'td-control-group'])>
                <span @class([$__VIEW_ID__ . '-Bmain411', 'td-group-label'])>Chọn mode:</span>
                <div @class([$__VIEW_ID__ . '-Bmain412', 'td-segmented'])>
                    <button @class([$__VIEW_ID__ . '-Bmain4121', 'td-seg-btn'=> true, 'is-active'=> $mode === 'a']) @attr(['id' => 'btn-a', 'type' => 'button'])>
                        <span @class([$__VIEW_ID__ . '-Bmain41211'])>mode = a</span>
                    </button>
                    <button @class([$__VIEW_ID__ . '-Bmain4122', 'td-seg-btn'=> true, 'is-active'=> $mode === 'b']) @attr(['id' => 'btn-b', 'type' => 'button'])>
                        <span @class([$__VIEW_ID__ . '-Bmain41221'])>mode = b</span>
                    </button>
                    <button @class([$__VIEW_ID__ . '-Bmain4123', 'td-seg-btn'=> true, 'is-active'=> $mode === 'x']) @attr(['id' => 'btn-x', 'type' => 'button'])>
                        <span @class([$__VIEW_ID__ . '-Bmain41231'])>mode = x</span>
                    </button>
                </div>
            </div>

            <div @class([$__VIEW_ID__ . '-Bmain42', 'td-control-group'])>
                <span @class([$__VIEW_ID__ . '-Bmain421', 'td-group-label'])>Tác vụ:</span>
                <div @class([$__VIEW_ID__ . '-Bmain422', 'td-actions'])>
                    <button @class([$__VIEW_ID__ . '-Bmain4221', 'td-btn']) @attr(['id' => 'btn-bump', 'type' => 'button'])>
                        <span @class([$__VIEW_ID__ . '-Bmain42211'])>＋ n + 1</span>
                    </button>
                    <button @class([$__VIEW_ID__ . '-Bmain4222', 'td-btn']) @attr(['id' => 'btn-toggle', 'type' => 'button'])>
                        <span @class([$__VIEW_ID__ . '-Bmain42221'])>⇄ Đảo hàng một</span>
                    </button>
                </div>
            </div>

            <div @class([$__VIEW_ID__ . '-Bmain43', 'td-status-pill'])>
                <span @class([$__VIEW_ID__ . '-Bmain431'])>mode = <b @class([$__VIEW_ID__ . '-Bmain4311']) @attr(['id' => 'out-mode'])>@startMarker('output', 'Bmain4311o1'){{ $mode }}@endMarker('output', 'Bmain4311o1')</b></span>
                <span @class([$__VIEW_ID__ . '-Bmain432', 'td-status-sep'])>·</span>
                <span @class([$__VIEW_ID__ . '-Bmain433'])>n = <b @class([$__VIEW_ID__ . '-Bmain4331']) @attr(['id' => 'out-n'])>@startMarker('output', 'Bmain4331o1'){{ $n }}@endMarker('output', 'Bmain4331o1')</b></span>
            </div>
        </div>

        <div @class([$__VIEW_ID__ . '-Bmain5', 'td-grid'])>
            <div @class([$__VIEW_ID__ . '-Bmain51', 'td-col-wrap'])>
                <header @class([$__VIEW_ID__ . '-Bmain511', 'td-col-header'])>
                    <span @class([$__VIEW_ID__ . '-Bmain5111', 'badge-alt'])>&#64; Cú pháp dạng khối</span>
                </header>

                <section @class([$__VIEW_ID__ . '-Bmain512', 'td-col']) @attr(['id' => 'viaBlock'])>
                    <h2 @class([$__VIEW_ID__ . '-Bmain5121'])>&#64;if / &#64;switch / &#64;foreach</h2>

                    @startMarker('reactive', 'Bmain512r1', ['stateKey' => ['mode'], 'type' => 'if'])
                    @if($mode === 'a')
                    <p @class([$__VIEW_ID__ . '-Bmain512r1k11', 'td-branch'])>nhánh A</p>
                    @elseif($mode === 'b')
                    <p @class([$__VIEW_ID__ . '-Bmain512r1k21', 'td-branch'])>nhánh B</p>
                    @else
                    <p @class([$__VIEW_ID__ . '-Bmain512r1k31', 'td-branch'])>nhánh khác</p>
                    @endif
                    @endMarker('reactive', 'Bmain512r1')

                    <div @class([$__VIEW_ID__ . '-Bmain5122', 'td-tabs'])>
                        @startMarker('reactive', 'Bmain5122r1', ['stateKey' => ['mode'], 'type' => 'switch'])
                        @switch($mode)
                        @case('a')
                        <span @class([$__VIEW_ID__ . '-Bmain5122r1k11', 'td-tab'])>tab A</span>
                        @break
                        @case('b')
                        <span @class([$__VIEW_ID__ . '-Bmain5122r1k21', 'td-tab'])>tab B</span>
                        @break
                        @default
                        <span @class([$__VIEW_ID__ . '-Bmain5122r1k31', 'td-tab'])>tab mặc định</span>
                        @endswitch
                        @endMarker('reactive', 'Bmain5122r1')
                    </div>

                    <ul @class([$__VIEW_ID__ . '-Bmain5123', 'td-list'])>
                        @startMarker('reactive', 'Bmain5123l1', ['stateKey' => ['rows'], 'type' => 'foreach'])
                        @foreach($rows as $row)
                        <li @class([$__VIEW_ID__ . "-Bmain5123l11-{$row['id']}", 'td-row'])>
                            <span @class([$__VIEW_ID__ . "-Bmain5123l111-{$row['id']}"])>@startMarker('output', "Bmain5123l111o1-{$row['id']}"){{ $row['name'] }}@endMarker('output', "Bmain5123l111o1-{$row['id']}")</span>
                            @startMarker('reactive', "Bmain5123l11r1-{$row['id']}", ['stateKey' => [], 'type' => 'if'])
                            @if($row['on'])
                            <b @class([$__VIEW_ID__ . "-Bmain5123l11r1k11-{$row['id']}", 'td-flag'])>bật</b>
                            @endif
                            @endMarker('reactive', "Bmain5123l11r1-{$row['id']}")
                        </li>
                        @endforeach
                        @endMarker('reactive', 'Bmain5123l1')
                    </ul>

                    <p @class([$__VIEW_ID__ . '-Bmain5124', 'td-count'])>
                        @startMarker('reactive', 'Bmain5124l1', ['stateKey' => ['n'], 'type' => 'for'])
                        @for($i = 0; $i < $n; $i++)
                        <i @class([$__VIEW_ID__ . "-Bmain5124l11-{$i}", 'td-dot'])>•</i>
                        @endfor
                        @endMarker('reactive', 'Bmain5124l1')
                    </p>
                </section>

                <div @class([$__VIEW_ID__ . '-Bmain513', 'td-demo-code'])>
                    <span @class([$__VIEW_ID__ . '-Bmain5131', 'dc-code-label'])>Mã nguồn template dạng khối (&#64;):</span>
                    @startMarker('component', 'Bmain513c1')
                    @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_0'))
@verbatim
&lt;template&gt;
    {{-- 1. Rẽ nhánh @if --}}
    &#64;if(mode === 'a')
        &lt;p class="td-branch"&gt;nhánh A&lt;/p&gt;
    &#64;elseif(mode === 'b')
        &lt;p class="td-branch"&gt;nhánh B&lt;/p&gt;
    &#64;else
        &lt;p class="td-branch"&gt;nhánh khác&lt;/p&gt;
    &#64;endif

    {{-- 2. Chọn nhánh @switch --}}
    &lt;div class="td-tabs"&gt;
        &#64;switch(mode)
            &#64;case('a')
                &lt;span class="td-tab"&gt;tab A&lt;/span&gt;
                &#64;break
            &#64;case('b')
                &lt;span class="td-tab"&gt;tab B&lt;/span&gt;
                &#64;break
            &#64;default
                &lt;span class="td-tab"&gt;tab mặc định&lt;/span&gt;
        &#64;endswitch
    &lt;/div&gt;

    {{-- 3. Vòng lặp @foreach có @key --}}
    &lt;ul class="td-list"&gt;
        &#64;foreach(rows as row)
            &#64;key(row['id'])
            &lt;li class="td-row"&gt;
                &lt;span&gt;{{ row['name'] }}&lt;/span&gt;
                &#64;if(row['on'])
                    &lt;b class="td-flag"&gt;bật&lt;/b&gt;
                &#64;endif
            &lt;/li&gt;
        &#64;endforeach
    &lt;/ul&gt;

    {{-- 4. Vòng lặp @for --}}
    &lt;p class="td-count"&gt;
        &#64;for(i = 0; i &lt; n; i++)
            &lt;i class="td-dot"&gt;•&lt;/i&gt;
        &#64;endfor
    &lt;/p&gt;
&lt;/template&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_0'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__0_content])
@endMarker('component', 'Bmain513c1')
                </div>
            </div>

            <div @class([$__VIEW_ID__ . '-Bmain52', 'td-col-wrap'])>
                <header @class([$__VIEW_ID__ . '-Bmain521', 'td-col-header'])>
                    <span @class([$__VIEW_ID__ . '-Bmain5211', 'badge-recommended'])>★ # Cú pháp trên thẻ (Mới)</span>
                </header>

                <section @class([$__VIEW_ID__ . '-Bmain522', 'td-col', 'td-col--highlight']) @attr(['id' => 'viaTag'])>
                    <h2 @class([$__VIEW_ID__ . '-Bmain5221'])>#if / #switch / #foreach</h2>

                    @startMarker('reactive', 'Bmain522r1', ['stateKey' => ['mode'], 'type' => 'if'])
                    @if($mode === 'a')
<p @class([$__VIEW_ID__ . '-Bmain522r1k11', 'td-branch'])>nhánh A</p>
                    @elseif($mode === 'b')
<p @class([$__VIEW_ID__ . '-Bmain522r1k21', 'td-branch'])>nhánh B</p>
                    @else
<p @class([$__VIEW_ID__ . '-Bmain522r1k31', 'td-branch'])>nhánh khác</p>
@endif
@endMarker('reactive', 'Bmain522r1')

                    <div @class([$__VIEW_ID__ . '-Bmain5222', 'td-tabs'])>
@startMarker('reactive', 'Bmain5222r1', ['stateKey' => ['mode'], 'type' => 'switch'])
@switch($mode)
@case('a')
<span @class([$__VIEW_ID__ . '-Bmain5222r1k11', 'td-tab'])>tab A</span>
@break
@case('b')
<span @class([$__VIEW_ID__ . '-Bmain5222r1k21', 'td-tab'])>tab B</span>
@break
@default
<span @class([$__VIEW_ID__ . '-Bmain5222r1k31', 'td-tab'])>tab mặc định</span>
@endswitch
@endMarker('reactive', 'Bmain5222r1')
</div>

                    <ul @class([$__VIEW_ID__ . '-Bmain5223', 'td-list'])>
                        @startMarker('reactive', 'Bmain5223l1', ['stateKey' => ['rows'], 'type' => 'foreach'])
                        @foreach($rows as $row)
<li @class([$__VIEW_ID__ . "-Bmain5223l11-{$row['id']}", 'td-row'])>
                            <span @class([$__VIEW_ID__ . "-Bmain5223l111-{$row['id']}"])>@startMarker('output', "Bmain5223l111o1-{$row['id']}"){{ $row['name'] }}@endMarker('output', "Bmain5223l111o1-{$row['id']}")</span>
                            @startMarker('reactive', "Bmain5223l11r1-{$row['id']}", ['stateKey' => [], 'type' => 'if'])
                            @if($row['on'])
<b @class([$__VIEW_ID__ . "-Bmain5223l11r1k11-{$row['id']}", 'td-flag'])>bật</b>
@endif
@endMarker('reactive', "Bmain5223l11r1-{$row['id']}")
                        </li>
@endforeach
@endMarker('reactive', 'Bmain5223l1')
                    </ul>

                    <p @class([$__VIEW_ID__ . '-Bmain5224', 'td-count'])>
                        @startMarker('reactive', 'Bmain5224l1', ['stateKey' => ['n'], 'type' => 'for'])
                        @for($i = 0; $i < $n; $i++)
<i @class([$__VIEW_ID__ . "-Bmain5224l11-{$i}", 'td-dot'])>•</i>
@endfor
@endMarker('reactive', 'Bmain5224l1')
                    </p>
                </section>

                <div @class([$__VIEW_ID__ . '-Bmain523', 'td-demo-code'])>
                    <span @class([$__VIEW_ID__ . '-Bmain5231', 'dc-code-label'])>Mã nguồn template trên thẻ (#):</span>
                    @startMarker('component', 'Bmain523c1')
                    @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_1'))
@verbatim
&lt;template&gt;
    {{-- 1. Rẽ nhánh #if trên thẻ --}}
    &lt;p class="td-branch" #if="mode === 'a'"&gt;nhánh A&lt;/p&gt;
    &lt;p class="td-branch" #elseif="mode === 'b'"&gt;nhánh B&lt;/p&gt;
    &lt;p class="td-branch" #else&gt;nhánh khác&lt;/p&gt;

    {{-- 2. Chọn nhánh #switch trên thẻ cha --}}
    &lt;div class="td-tabs" #switch="mode"&gt;
        &lt;span class="td-tab" #case="'a'"&gt;tab A&lt;/span&gt;
        &lt;span class="td-tab" #case="'b'"&gt;tab B&lt;/span&gt;
        &lt;span class="td-tab" #default&gt;tab mặc định&lt;/span&gt;
    &lt;/div&gt;

    {{-- 3. Vòng lặp #foreach và #key trên thẻ con --}}
    &lt;ul class="td-list"&gt;
        &lt;li class="td-row" #foreach="rows as row" #key="row['id']"&gt;
            &lt;span&gt;{{ row['name'] }}&lt;/span&gt;
            &lt;b class="td-flag" #if="row['on']"&gt;bật&lt;/b&gt;
        &lt;/li&gt;
    &lt;/ul&gt;

    {{-- 4. Vòng lặp #for trên thẻ --}}
    &lt;p class="td-count"&gt;
        &lt;i class="td-dot" #for="i = 0; i &lt; n; i++"&gt;•&lt;/i&gt;
    &lt;/p&gt;
&lt;/template&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__1_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_1'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__1_content])
@endMarker('component', 'Bmain523c1')
                </div>
            </div>
        </div>

        <div @class([$__VIEW_ID__ . '-Bmain6', 'td-shared-script'])>
            <span @class([$__VIEW_ID__ . '-Bmain61', 'dc-code-label'])>Mã nguồn logic dùng chung (&lt;script setup lang="ts"&gt;):</span>
            @startMarker('component', 'Bmain6c1')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_2'))
@verbatim
&lt;script setup lang="ts"&gt;
    interface Row {
        id: string;
        name: string;
        on: boolean;
    }

    &#64;states({
        mode = 'a',
        n = 0,
        rows = [
            { id: 'r1', name: 'Hàng một', on: true },
            { id: 'r2', name: 'Hàng hai', on: false },
            { id: 'r3', name: 'Hàng ba', on: true }
        ]
    }: {
        mode: string;
        n: number;
        rows: Row[];
    })

    function pickA() { setMode('a'); }
    function pickB() { setMode('b'); }
    function pickX() { setMode('x'); }
    function bump()  { setN(n + 1); }
    function toggleFirst() {
        setRows(rows.map((r, i) => i === 0 ? { ...r, on: !r['on'] } : r));
    }
&lt;/script&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__2_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_2'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__2_content])
@endMarker('component', 'Bmain6c1')
        </div>
    @endblock

    @block('aside')
        <h2 @class([$__VIEW_ID__ . '-Baside1'])>Quy ước Directive trên thẻ (#)</h2>
        <div @class([$__VIEW_ID__ . '-Baside2', 'directive-table'])>
            <div @class([$__VIEW_ID__ . '-Baside21'])><div @class([$__VIEW_ID__ . '-Baside211', 'dt-key'])><code @class([$__VIEW_ID__ . '-Baside2111'])>#if #elseif #else</code></div><span @class([$__VIEW_ID__ . '-Baside212'])>Bọc cả thẻ. Chuỗi nhánh phải là các sibling liền kề, chỉ cách nhau bởi khoảng trắng.</span><b @class([$__VIEW_ID__ . '-Baside213'])>rẽ nhánh</b></div>
            <div @class([$__VIEW_ID__ . '-Baside22'])><div @class([$__VIEW_ID__ . '-Baside221', 'dt-key'])><code @class([$__VIEW_ID__ . '-Baside2211'])>#switch #case #default</code></div><span @class([$__VIEW_ID__ . '-Baside222'])><code @class([$__VIEW_ID__ . '-Baside2221'])>#switch</code> bọc <strong @class([$__VIEW_ID__ . '-Baside2222'])>ruột thẻ</strong> (thẻ cha vẫn render). Các con mang <code @class([$__VIEW_ID__ . '-Baside2223'])>#case</code>/<code @class([$__VIEW_ID__ . '-Baside2224'])>#default</code>; <code @class([$__VIEW_ID__ . '-Baside2225'])>&#64;break</code> do compiler tự chèn.</span><b @class([$__VIEW_ID__ . '-Baside223'])>chọn nhánh</b></div>
            <div @class([$__VIEW_ID__ . '-Baside23'])><div @class([$__VIEW_ID__ . '-Baside231', 'dt-key'])><code @class([$__VIEW_ID__ . '-Baside2311'])>#foreach #for #while</code></div><span @class([$__VIEW_ID__ . '-Baside232'])>Bọc cả thẻ. Nhận kèm <code @class([$__VIEW_ID__ . '-Baside2321'])>#key</code> để định danh identity trong DOM reconciliation.</span><b @class([$__VIEW_ID__ . '-Baside233'])>vòng lặp</b></div>
            <div @class([$__VIEW_ID__ . '-Baside24'])><div @class([$__VIEW_ID__ . '-Baside241', 'dt-key'])><code @class([$__VIEW_ID__ . '-Baside2411'])>#key</code></div><span @class([$__VIEW_ID__ . '-Baside242'])>Ngoại lệ duy nhất đi kèm directive lặp trên cùng một thẻ.</span><b @class([$__VIEW_ID__ . '-Baside243'])>khoá</b></div>
        </div>
        <p @class([$__VIEW_ID__ . '-Baside3', 'lab-note'])>
            <strong @class([$__VIEW_ID__ . '-Baside31'])>Tập đóng:</strong> Namespace <code @class([$__VIEW_ID__ . '-Baside32'])>#</code> là tập đóng (E-07 RFC). Gõ sai như <code @class([$__VIEW_ID__ . '-Baside33'])>#fi="x"</code> sẽ báo lỗi biên dịch ngay lập tức để tránh rò rỉ thành thuộc tính HTML rác. Dấu <code @class([$__VIEW_ID__ . '-Baside34'])>#</code> ở thuộc tính thường như <code @class([$__VIEW_ID__ . '-Baside35'])>style="color: #fff"</code> hoặc <code @class([$__VIEW_ID__ . '-Baside36'])>href="#top"</code> không bị ảnh hưởng.
        </p>
    @endblock
