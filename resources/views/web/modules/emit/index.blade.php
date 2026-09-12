@addCssLink('/static/saola/emit.css')
@exec($__ONE_COMPONENT_REGISTRY__ = ['code-block' => 'web.components.code-block', 'emitrow' => 'web.modules.emit.row', 'emitgroup' => 'web.modules.emit.group']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@vars($rows =  [])
@useState($picked, 0)
@useState($note, 'chưa có gì')
@useState($bumps, 0)
@useState($tags, '')
@useState($log, [])
@await
@extends($__layout__ . 'lab')
    @section('meta:title', 'Sự kiện Component Con → Cha (Emit) - Saola Lab')
    @section('meta:description', 'Truyền sự kiện từ component con lên component cha với event emit trong Saola: Hỗ trợ thẻ component tự đóng và cú pháp @include với on$.')
    @section('meta:keywords', 'saola emit, su kien component, child to parent event, event handler, on$ event prop')

    @block('main')
        <p @class([$__VIEW_ID__ . '-Bmain1', 'kicker'])><span @class([$__VIEW_ID__ . '-Bmain11'])>SỰ KIỆN CON → CHA</span></p>
        <h1 @class([$__VIEW_ID__ . '-Bmain2'])>Con báo, cha nghe.</h1>
        <p @class([$__VIEW_ID__ . '-Bmain3', 'kb-lead'])>
            Cùng một view con, dựng bằng <strong @class([$__VIEW_ID__ . '-Bmain31'])>hai mặt chữ</strong>: thẻ component
            và <code @class([$__VIEW_ID__ . '-Bmain32'])>&#64;include</code> với khoá <code @class([$__VIEW_ID__ . '-Bmain33'])>on$</code>. Hai cột phải cư xử
            giống hệt nhau.
        </p>

        <dl @class([$__VIEW_ID__ . '-Bmain4', 'em-readout'])>
            <div @class([$__VIEW_ID__ . '-Bmain41', 'em-readout-card'])>
                <dt @class([$__VIEW_ID__ . '-Bmain411'])><span @class([$__VIEW_ID__ . '-Bmain4111', 'em-icon'])>🎯</span> picked</dt>
                <dd @class([$__VIEW_ID__ . '-Bmain412']) @attr(['id' => 'out-picked'])>@startMarker('output', 'Bmain412o1'){{ $picked }}@endMarker('output', 'Bmain412o1')</dd>
            </div>
            <div @class([$__VIEW_ID__ . '-Bmain42', 'em-readout-card'])>
                <dt @class([$__VIEW_ID__ . '-Bmain421'])><span @class([$__VIEW_ID__ . '-Bmain4211', 'em-icon'])>📝</span> note</dt>
                <dd @class([$__VIEW_ID__ . '-Bmain422']) @attr(['id' => 'out-note'])>@startMarker('output', 'Bmain422o1'){{ $note }}@endMarker('output', 'Bmain422o1')</dd>
            </div>
            <div @class([$__VIEW_ID__ . '-Bmain43', 'em-readout-card'])>
                <dt @class([$__VIEW_ID__ . '-Bmain431'])><span @class([$__VIEW_ID__ . '-Bmain4311', 'em-icon'])>⚡</span> bumps</dt>
                <dd @class([$__VIEW_ID__ . '-Bmain432']) @attr(['id' => 'out-bumps'])>@startMarker('output', 'Bmain432o1'){{ $bumps }}@endMarker('output', 'Bmain432o1')</dd>
            </div>
            <div @class([$__VIEW_ID__ . '-Bmain44', 'em-readout-card'])>
                <dt @class([$__VIEW_ID__ . '-Bmain441'])><span @class([$__VIEW_ID__ . '-Bmain4411', 'em-icon'])>🏷️</span> tags</dt>
                <dd @class([$__VIEW_ID__ . '-Bmain442']) @attr(['id' => 'out-tags'])>@startMarker('output', 'Bmain442o1'){{ $tags }}@endMarker('output', 'Bmain442o1')</dd>
            </div>
        </dl>

        <div @class([$__VIEW_ID__ . '-Bmain5', 'em-cols'])>
            <section @class([$__VIEW_ID__ . '-Bmain51', 'em-col']) @attr(['id' => 'viaTag'])>
                <header @class([$__VIEW_ID__ . '-Bmain511', 'em-col-head'])>
                    <span @class([$__VIEW_ID__ . '-Bmain5111', 'em-col-tag', 'tag-orange'])>Thẻ Component</span>
                    <h2 @class([$__VIEW_ID__ . '-Bmain5112'])>Thẻ component</h2>
                    <p @class([$__VIEW_ID__ . '-Bmain5113', 'em-col-sub'])>Cú pháp &lt;emitrow&gt; với các directive &#64;event</p>
                </header>
                <ul @class([$__VIEW_ID__ . '-Bmain512', 'em-list'])>
                    @startMarker('reactive', 'Bmain512l1', ['stateKey' => ['rows'], 'type' => 'foreach'])
                    @foreach($rows as $row)
                        @startMarker('component', "Bmain512l1c1-{$row['id']}")
                        @include('web.modules.emit.row', ['row' => $row, 'origin' => "thẻ"])
                        @endMarker('component', "Bmain512l1c1-{$row['id']}")
                    @endforeach
                    @endMarker('reactive', 'Bmain512l1')
                </ul>
            </section>

            <section @class([$__VIEW_ID__ . '-Bmain52', 'em-col']) @attr(['id' => 'viaGrandchild'])>
                <header @class([$__VIEW_ID__ . '-Bmain521', 'em-col-head'])>
                    <span @class([$__VIEW_ID__ . '-Bmain5211', 'em-col-tag', 'tag-green'])>Qua tầng giữa</span>
                    <h2 @class([$__VIEW_ID__ . '-Bmain5212'])>Cháu → ông</h2>
                    <p @class([$__VIEW_ID__ . '-Bmain5213', 'em-col-sub'])>Tầng giữa <code @class([$__VIEW_ID__ . '-Bmain52131'])>&#64;pick($view.emit)</code> chuyển tiếp, không xử lý gì</p>
                </header>
                @startMarker('component', 'Bmain52c1')
                @include('web.modules.emit.group', ['rows' => $rows, 'origin' => "cháu"])
                @endMarker('component', 'Bmain52c1')
            </section>

            <section @class([$__VIEW_ID__ . '-Bmain53', 'em-col']) @attr(['id' => 'viaInclude'])>
                <header @class([$__VIEW_ID__ . '-Bmain531', 'em-col-head'])>
                    <span @class([$__VIEW_ID__ . '-Bmain5311', 'em-col-tag', 'tag-blue'])>&#64;include Helper</span>
                    <h2 @class([$__VIEW_ID__ . '-Bmain5312'])>&#64;include với khoá on$</h2>
                    <p @class([$__VIEW_ID__ . '-Bmain5313', 'em-col-sub'])>Khai báo listener trong object data qua on$</p>
                </header>
                <ul @class([$__VIEW_ID__ . '-Bmain532', 'em-list'])>
                    @startMarker('reactive', 'Bmain532l1', ['stateKey' => ['rows'], 'type' => 'foreach'])
                    @foreach($rows as $row)
                        @startMarker('component', "Bmain532l1c1-{$row['id']}")
                        @include('web.modules.emit.row', ['row'=> $row, 'origin'=> 'include'])
                        @endMarker('component', "Bmain532l1c1-{$row['id']}")
                    @endforeach
                    @endMarker('reactive', 'Bmain532l1')
                </ul>
            </section>
        </div>

        <div @class([$__VIEW_ID__ . '-Bmain6', 'em-log-box'])>
            <header @class([$__VIEW_ID__ . '-Bmain61', 'em-log-head'])>
                <div @class([$__VIEW_ID__ . '-Bmain611', 'em-terminal-dots'])>
                    <span @class([$__VIEW_ID__ . '-Bmain6111', 'dot', 'red'])></span>
                    <span @class([$__VIEW_ID__ . '-Bmain6112', 'dot', 'yellow'])></span>
                    <span @class([$__VIEW_ID__ . '-Bmain6113', 'dot', 'green'])></span>
                </div>
                <h2 @class([$__VIEW_ID__ . '-Bmain612'])>Nhật ký sự kiện (Event Log)</h2>
                <span @class([$__VIEW_ID__ . '-Bmain613', 'em-log-counter'])>@startMarker('output', 'Bmain613o1'){{ count($log) }}@endMarker('output', 'Bmain613o1') bản ghi</span>
            </header>
            <ol @class([$__VIEW_ID__ . '-Bmain62', 'em-log']) @attr(['id' => 'out-log'])>
                @startMarker('reactive', 'Bmain62l1', ['stateKey' => ['log'], 'type' => 'foreach'])
                @foreach($log as $line)
                    <li @class([$__VIEW_ID__ . "-Bmain62l11-{$loop->index}"])>@startMarker('output', "Bmain62l11o1-{$loop->index}"){{ $line }}@endMarker('output', "Bmain62l11o1-{$loop->index}")</li>
                @endforeach
                @endMarker('reactive', 'Bmain62l1')
            </ol>
        </div>
    @endblock

    @block('aside')
        <h2 @class([$__VIEW_ID__ . '-Baside1'])>Trang này kiểm chứng cái gì.</h2>
        <ul @class([$__VIEW_ID__ . '-Baside2', 'check-list'])>
            <li @class([$__VIEW_ID__ . '-Baside21'])>Handler viết được cả ba dạng: gọi (<code @class([$__VIEW_ID__ . '-Baside211'])>&#64;pick(setPicked(event))</code>), tham chiếu trần (<code @class([$__VIEW_ID__ . '-Baside212'])>&#64;bump(bump)</code>), và arrow tự khai báo arity.</li>
            <li @class([$__VIEW_ID__ . '-Baside22'])><code @class([$__VIEW_ID__ . '-Baside221'])>emit</code> nhiều đối số tới đủ tham số: <code @class([$__VIEW_ID__ . '-Baside222'])>$view.emit('rename', id, title)</code> → <code @class([$__VIEW_ID__ . '-Baside223'])>(id, title) =&gt; …</code>.</li>
            <li @class([$__VIEW_ID__ . '-Baside23'])>Arrow kiểu gì cũng được — gỡ rối <code @class([$__VIEW_ID__ . '-Baside231'])>({id, tag}) =&gt; …</code>, rest <code @class([$__VIEW_ID__ . '-Baside232'])>(...args) =&gt; …</code>, thân khối <code @class([$__VIEW_ID__ . '-Baside233'])>=&gt; { a(); b() }</code>.</li>
            <li @class([$__VIEW_ID__ . '-Baside24'])>Tên sự kiện không phải định danh dùng <code @class([$__VIEW_ID__ . '-Baside241'])>&#64;on('row:tagged', …)</code>.</li>
            <li @class([$__VIEW_ID__ . '-Baside25'])><code @class([$__VIEW_ID__ . '-Baside251'])>emit</code> TRẢ VỀ giá trị listener: hàng #3 bị cha từ chối đóng, con dừng lại và báo <code @class([$__VIEW_ID__ . '-Baside252'])>refused</code>.</li>
            <li @class([$__VIEW_ID__ . '-Baside26'])>Hai cột đi hai mặt chữ khác nhau nhưng ra cùng một biểu diễn — kết quả phải trùng nhau.</li>
        </ul>
    @endblock

    @block('source')
        <h2 @class([$__VIEW_ID__ . '-Bsource1', 'lab-source-title'])>Code của demo này</h2>
        <p @class([$__VIEW_ID__ . '-Bsource2', 'lab-source-note'])>Hai mặt chữ, một cơ chế: thẻ component và &#64;include với khoá on$.</p>
        @startMarker('component', 'Bsourcec1')
        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_0'))
@verbatim
{{-- Cách 1 — thẻ component --}}
&lt;emitrow :num="num"
         &#64;edit(setPicked(event))
         &#64;pair((a, b) =&gt; setPicked(a + b))
         &#64;on('row:tagged', ({id, tag}) =&gt; addTag(id, tag)) /&gt;

{{-- Cách 2 — &#64;include, listener nằm CÙNG object data --}}
&#64;include('web.modules.emit.row', {
    num: num,
    on$edit: takeOne,
    on$close: (v) =&gt; setPicked(v + 1),
    on$pair: (a, b) =&gt; { setPicked(a); setPicked(a + b) }
})

{{-- Con phát, và ĐỌC ĐƯỢC câu trả lời của cha --}}
&lt;button &#64;click($view.emit('pick', row['id']))&gt;chọn&lt;/button&gt;
&lt;script setup&gt;
    function ask() {
        if ($view.emit('confirm', row['id']) === false) return;
        $view.emit('close', row['id']);
    }
&lt;/script&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_0'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__0_content])
@endMarker('component', 'Bsourcec1')
    @endblock
