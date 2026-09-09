@addCssLink('/static/saola/board.css')
@exec($__ONE_COMPONENT_REGISTRY__ = ['code-block' => 'web.components.code-block', 'boardcard' => 'web.modules.board.card']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@vars($columns =  [])
@useState($board, $columns)
@useState($dragId, 0)
@useState($overColumn, '')
@useState($busy, false)
@useState($note, '')
@useState($error, '')
@useState($editingId, 0)
@useState($draftText, '')
@await
@extends($__layout__ . 'lab')

    @block('main')
        <p @class([$__VIEW_ID__ . '-Bmain1', 'kicker'])><span @class([$__VIEW_ID__ . '-Bmain11'])>ỨNG DỤNG THẬT · KÉO THẢ</span></p>
        <h1 @class([$__VIEW_ID__ . '-Bmain2'])>Bảng Kanban.</h1>
        <p @class([$__VIEW_ID__ . '-Bmain3', 'kb-lead'])>
            Kéo một thẻ sang cột khác. Khoá của thẻ <strong @class([$__VIEW_ID__ . '-Bmain31'])>di chuyển giữa hai vùng
            <code @class([$__VIEW_ID__ . '-Bmain311'])>&#64;foreach</code> khác nhau</strong> — ca khó nhất của danh sách có khoá.
        </p>

        <form @class([$__VIEW_ID__ . '-Bmain4', 'kb-new'])>
            <input @class([$__VIEW_ID__ . '-Bmain41']) @attr(['type' => 'text', 'maxlength' => '120', 'placeholder' => 'Thêm thẻ vào cột Cần làm', 'aria-label' => 'Tiêu đề thẻ mới']) @bind($note)>
            <button @class([$__VIEW_ID__ . '-Bmain42', 'kb-mini']) @attr(['type' => 'submit']) @disabled($busy || trim($note) === '')>Thêm</button>
        </form>

        @startMarker('reactive', 'Bmainr1', ['stateKey' => ['error'], 'type' => 'if'])
        @if($error !== '')
            <p @class([$__VIEW_ID__ . '-Bmainr1k11', 'kb-error']) @attr(['role' => 'alert'])>@startMarker('output', 'Bmainr1k11o1'){{ $error }}@endMarker('output', 'Bmainr1k11o1')</p>
        @endif
        @endMarker('reactive', 'Bmainr1')

        <div @class([$__VIEW_ID__ . '-Bmain5', 'kb-board'])>
            @startMarker('reactive', 'Bmain5l1', ['stateKey' => ['board'], 'type' => 'foreach'])
            @foreach($board as $col)
                <section @class([$__VIEW_ID__ . "-Bmain5l11-{$col['key']}", 'kb-col', 'is-over'=> $overColumn === $col['key']]) @attr(['data-col' => $col['key']])>
                    <header @class([$__VIEW_ID__ . "-Bmain5l111-{$col['key']}", 'kb-col-head'])>
                        <h2 @class([$__VIEW_ID__ . "-Bmain5l1111-{$col['key']}"])>@startMarker('output', "Bmain5l1111o1-{$col['key']}"){{ $col['label'] }}@endMarker('output', "Bmain5l1111o1-{$col['key']}")</h2>
                        <span @class([$__VIEW_ID__ . "-Bmain5l1112-{$col['key']}", 'kb-count'])>@startMarker('output', "Bmain5l1112o1-{$col['key']}"){{ count($col['cards']) }}@endMarker('output', "Bmain5l1112o1-{$col['key']}")</span>
                    </header>

                    <div @class([$__VIEW_ID__ . "-Bmain5l112-{$col['key']}", 'kb-col-body'])>
                        @foreach($col['cards'] as $card)
                            @startMarker('component', "Bmain5l112l1c1-{$col['key']}-{$card['id']}")
                            @include('web.modules.board.card', ['card' => $card, 'column' => $col['key'], 'busy' => $busy, 'editing' => $editingId === $card['id'], 'draftSeed' => $draftText])
                            @endMarker('component', "Bmain5l112l1c1-{$col['key']}-{$card['id']}")
                        @endforeach

                        @startMarker('reactive', "Bmain5l112r2-{$col['key']}", ['stateKey' => [], 'type' => 'if'])
                        @if(count($col['cards']) === 0)
                            <p @class([$__VIEW_ID__ . "-Bmain5l112r2k11-{$col['key']}", 'kb-empty'])>Thả thẻ vào đây</p>
                        @endif
                        @endMarker('reactive', "Bmain5l112r2-{$col['key']}")
                    </div>
                </section>
            @endforeach
            @endMarker('reactive', 'Bmain5l1')
        </div>
    @endblock

    @block('aside')
        <h2 @class([$__VIEW_ID__ . '-Baside1'])>Trang này kiểm chứng cái gì.</h2>
        <ul @class([$__VIEW_ID__ . '-Baside2', 'check-list'])>
            <li @class([$__VIEW_ID__ . '-Baside21'])>Khoá <code @class([$__VIEW_ID__ . '-Baside211'])>&#64;key(card['id'])</code> rời vùng <code @class([$__VIEW_ID__ . '-Baside212'])>&#64;foreach</code> này sang vùng khác. Runtime phải nhận ra vẫn là một thẻ, không dựng lại node mới.</li>
            <li @class([$__VIEW_ID__ . '-Baside22'])>Instance con <strong @class([$__VIEW_ID__ . '-Baside221'])>bị dựng lại</strong> khi thẻ đổi cột — React và Vue cũng vậy, đây không phải giới hạn của Saola. Nên bản nháp phải do <strong @class([$__VIEW_ID__ . '-Baside222'])>cha</strong> giữ, con chỉ <code @class([$__VIEW_ID__ . '-Baside223'])>&#64;bind</code> vào prop và không giữ state nào. Mở ô <strong @class([$__VIEW_ID__ . '-Baside224'])>Sửa</strong>, gõ dở, rồi kéo thẻ sang cột khác: nội dung đang gõ vẫn còn.</li>
            <li @class([$__VIEW_ID__ . '-Baside23'])><code @class([$__VIEW_ID__ . '-Baside231'])>&#64;foreach</code> lồng nhau: cột lặp ngoài, thẻ lặp trong — từng có bug thiếu spread khi lồng.</li>
            <li @class([$__VIEW_ID__ . '-Baside24'])>Cập nhật lạc quan: bảng đổi ngay khi thả, server trả về trạng thái sau cùng; hỏng thì quay lui về ảnh chụp trước đó.</li>
            <li @class([$__VIEW_ID__ . '-Baside25'])>Con không tự gọi API. Nó <code @class([$__VIEW_ID__ . '-Baside251'])>$view.emit()</code> lên thẳng cha qua listener khai báo tại thẻ (<code @class([$__VIEW_ID__ . '-Baside252'])>&#64;edit(openEditor)</code>) — không qua event bus, nên không phải gỡ đăng ký và hai thẻ không nghe nhầm của nhau. Chỉ cha mới giữ đủ trạng thái để quay lui.</li>
        </ul>
    @endblock

    @block('source')
        <h2 @class([$__VIEW_ID__ . '-Bsource1', 'lab-source-title'])>Code của demo này</h2>
        <p @class([$__VIEW_ID__ . '-Bsource2', 'lab-source-note'])>Kéo thả + thẻ con báo sự kiện lên cha.</p>
        @startMarker('component', 'Bsourcec1')
        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_0'))
@verbatim
&#64;import('web.modules.board.card' as boardcard)

&lt;template&gt;
    &#64;foreach(col['cards'] as card)
        &#64;key(card['id'])
        &lt;boardcard :card="card" :busy="busy" :editing="editingId === card['id']"
                   &#64;drag(setDragId) &#64;edit(openEditor) &#64;draft(setDraftText)
                   &#64;cancel(closeEditor) &#64;rename(rename) &#64;delete(remove) /&gt;
    &#64;endforeach
&lt;/template&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_0'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__0_content])
@endMarker('component', 'Bsourcec1')
    @endblock
