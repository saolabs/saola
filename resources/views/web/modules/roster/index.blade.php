@addCssLink('/static/saola/roster.css')
@exec($__ONE_COMPONENT_REGISTRY__ = ['code-block' => 'web.components.code-block', 'rosteritem' => 'web.modules.roster.item']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($ids, [])
@useState($records, [])
@useState($editing, [])
@useState($lastSync, '')
@useState($syncError, '')
@useState($creating, false)
@useState($fName, '')
@useState($fEmail, '')
@useState($fGender, 'other')
@useState($fBirthdate, '')
@extends($__layout__ . 'lab')
    @section('meta:title', 'Roster CRUD & Concurrent Sync Demo - Saola Lab')
    @section('meta:description', 'Ứng dụng mẫu Roster quản lý người dùng qua API: Đồng bộ ngầm định kỳ, biên tập đồng thời với state cô lập ở component con không bị gián đoạn.')
    @section('meta:keywords', 'roster demo, concurrent editing, saola crud, api sync, component state isolation')

    @block('main')
        <div @class([$__VIEW_ID__ . '-Bmain1', 'rs-page'])>
            <p @class([$__VIEW_ID__ . '-Bmain11', 'kicker'])><span @class([$__VIEW_ID__ . '-Bmain111'])>ỨNG DỤNG THẬT · ĐỒNG BỘ CONCURRENT</span></p>
            <div @class([$__VIEW_ID__ . '-Bmain12', 'workspace-topbar'])>
                <div @class([$__VIEW_ID__ . '-Bmain121'])>
                    <h1 @class([$__VIEW_ID__ . '-Bmain1211'])>Roster — CRUD qua API.</h1>
                    <p @class([$__VIEW_ID__ . '-Bmain1212', 'lab-lead'])>Danh sách đồng bộ ngầm định kỳ 30 giây, hỗ trợ concurrent editing: view con giữ form nháp riêng không bị mất khi view cha refetch.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-Bmain122', 'completion-ring'])>
                    <strong @class([$__VIEW_ID__ . '-Bmain1221'])>@startMarker('output', 'Bmain1221o1'){{ count($ids) }}@endMarker('output', 'Bmain1221o1')</strong><span @class([$__VIEW_ID__ . '-Bmain1222'])>users</span>
                </div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bmain13', 'rs-lead'])>Danh sách tự kéo lại mỗi 30 giây. Mỗi hàng có form sửa riêng — nếu người khác sửa hoặc xoá đúng bản ghi bạn đang mở, bản nháp của bạn được giữ nguyên và bạn được hỏi trước khi mất bất cứ thứ gì.</p>

            <dl @class([$__VIEW_ID__ . '-Bmain14', 'rs-stats'])>
                <div @class([$__VIEW_ID__ . '-Bmain141', 'rs-stat'])>
                    <dt @class([$__VIEW_ID__ . '-Bmain1411'])>Người dùng</dt>
                    <dd @class([$__VIEW_ID__ . '-Bmain1412'])>@startMarker('output', 'Bmain1412o1'){{ count($ids) }}@endMarker('output', 'Bmain1412o1')</dd>
                </div>
                <div @class([$__VIEW_ID__ . '-Bmain142', 'rs-stat'])>
                    <dt @class([$__VIEW_ID__ . '-Bmain1421'])>Nhịp đồng bộ</dt>
                    <dd @class([$__VIEW_ID__ . '-Bmain1422'])>30 <small @class([$__VIEW_ID__ . '-Bmain14221'])>giây</small></dd>
                </div>
                <div @class([$__VIEW_ID__ . '-Bmain143', 'rs-stat'])>
                    <dt @class([$__VIEW_ID__ . '-Bmain1431'])>Đồng bộ lần cuối</dt>
                    @startMarker('reactive', 'Bmain143r1', ['stateKey' => ['lastSync'], 'type' => 'if'])
                    @if($lastSync === '')
                        <dd @class([$__VIEW_ID__ . '-Bmain143r1k11'])><small @class([$__VIEW_ID__ . '-Bmain143r1k111'])>chưa chạy</small></dd>
                    @else
                        <dd @class([$__VIEW_ID__ . '-Bmain143r1k21'])>@startMarker('output', 'Bmain143r1k21o1'){{ $lastSync }}@endMarker('output', 'Bmain143r1k21o1')</dd>
                    @endif
                    @endMarker('reactive', 'Bmain143r1')
                </div>
            </dl>

            @startMarker('reactive', 'Bmain1r1', ['stateKey' => ['syncError'], 'type' => 'if'])
            @if($syncError !== '')
                <p @class([$__VIEW_ID__ . '-Bmain1r1k11', 'rs-alert', 'rs-alert--danger', 'rs-alert--error'])>@startMarker('output', 'Bmain1r1k11o1'){{ $syncError }}@endMarker('output', 'Bmain1r1k11o1')</p>
            @endif
            @endMarker('reactive', 'Bmain1r1')

            <section @class([$__VIEW_ID__ . '-Bmain15', 'rs-card'])>
                <div @class([$__VIEW_ID__ . '-Bmain151', 'rs-card-head'])>
                    <h2 @class([$__VIEW_ID__ . '-Bmain1511'])>Thêm người dùng</h2>
                    <p @class([$__VIEW_ID__ . '-Bmain1512'])>Bản ghi mới được server cấp uuid và mốc version.</p>
                </div>
                <form @class([$__VIEW_ID__ . '-Bmain152', 'rs-form-grid'])>
                    <label @class([$__VIEW_ID__ . '-Bmain1521', 'rs-field'])>
                        <span @class([$__VIEW_ID__ . '-Bmain15211'])>Họ tên</span>
                        <input @class([$__VIEW_ID__ . '-Bmain15212']) @attr(['type' => 'text', 'placeholder' => 'Nguyễn Văn A']) @bind($fName)>
                    </label>
                    <label @class([$__VIEW_ID__ . '-Bmain1522', 'rs-field'])>
                        <span @class([$__VIEW_ID__ . '-Bmain15221'])>Email</span>
                        <input @class([$__VIEW_ID__ . '-Bmain15222']) @attr(['type' => 'email', 'placeholder' => 'a@saola.dev']) @bind($fEmail)>
                    </label>
                    <label @class([$__VIEW_ID__ . '-Bmain1523', 'rs-field'])>
                        <span @class([$__VIEW_ID__ . '-Bmain15231'])>Giới tính</span>
                        <select @class([$__VIEW_ID__ . '-Bmain15232']) @bind($fGender)>
                            <option @class([$__VIEW_ID__ . '-Bmain152321']) @attr(['value' => 'male'])>male</option>
                            <option @class([$__VIEW_ID__ . '-Bmain152322']) @attr(['value' => 'female'])>female</option>
                            <option @class([$__VIEW_ID__ . '-Bmain152323']) @attr(['value' => 'other'])>other</option>
                        </select>
                    </label>
                    <label @class([$__VIEW_ID__ . '-Bmain1524', 'rs-field'])>
                        <span @class([$__VIEW_ID__ . '-Bmain15241'])>Ngày sinh</span>
                        <input @class([$__VIEW_ID__ . '-Bmain15242']) @attr(['type' => 'date']) @bind($fBirthdate)>
                    </label>
                    <div @class([$__VIEW_ID__ . '-Bmain1525', 'rs-form-actions'])>
                        <button @class([$__VIEW_ID__ . '-Bmain15251', 'rs-btn', 'rs-btn-primary']) @attr(['type' => 'submit']) @disabled($creating)>Thêm người dùng</button>
                    </div>
                </form>
            </section>

            <div @class([$__VIEW_ID__ . '-Bmain16', 'rs-list-head'])>
                <h2 @class([$__VIEW_ID__ . '-Bmain161'])>Bản ghi</h2>
                <div @class([$__VIEW_ID__ . '-Bmain162', 'rs-list-tools'])>
                    <span @class([$__VIEW_ID__ . '-Bmain1621', 'rs-pulse'])><span @class([$__VIEW_ID__ . '-Bmain16211', 'rs-pulse-dot'])></span> Tự đồng bộ mỗi 30 giây</span>
                    <button @class([$__VIEW_ID__ . '-Bmain1622', 'rs-btn', 'rs-btn-sm', 'rs-btn-ghost']) @attr(['type' => 'button'])>Đồng bộ ngay</button>
                </div>
            </div>

            <div @class([$__VIEW_ID__ . '-Bmain17', 'rs-list'])>
                @startMarker('reactive', 'Bmain17l1', ['stateKey' => ['ids'], 'type' => 'foreach'])
                @foreach($ids as $id)
                    <div @class([$__VIEW_ID__ . "-Bmain17l11-{$id}", 'rs-slot'])>
                        {{-- record đổi ref ⇒ Component đẩy prop mới vào ĐÚNG instance con
                             đang sống, nên state form của nó không bị thổi bay. --}}
                        @startMarker('component', "Bmain17l11c1-{$id}")
                        @include('web.modules.roster.item', ['uid' => $id, 'record' => $records[$id] ?? null])
                        @endMarker('component', "Bmain17l11c1-{$id}")
                    </div>
                @endforeach
                @endMarker('reactive', 'Bmain17l1')
            </div>

            @startMarker('reactive', 'Bmain1r2', ['stateKey' => ['ids'], 'type' => 'if'])
            @if(count($ids) === 0)
                <p @class([$__VIEW_ID__ . '-Bmain1r2k11', 'rs-empty'])>Chưa có ai trong danh sách. Thêm người dùng đầu tiên ở form phía trên.</p>
            @endif
            @endMarker('reactive', 'Bmain1r2')
        </div>
    @endblock

    @block('source')
        <h2 @class([$__VIEW_ID__ . '-Bsource1', 'lab-source-title'])>Code của demo này</h2>
        <p @class([$__VIEW_ID__ . '-Bsource2', 'lab-source-note'])>Parent quản lý danh sách ID, view con giữ form sửa và state riêng.</p>
        @startMarker('component', 'Bsourcec1')
        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_0'))
@verbatim
@import('web.modules.roster.item' as rosteritem)
@states({ ids: [], records: {} })

<template>
    <div class="rs-list">
        @foreach(ids as id)
            @key(id)
            <div class="rs-slot">
                {{-- Prop mới truyền vào đúng instance con đang sống --}}
                @include('web.modules.roster.item', ['uid' => id, 'record' => records[id] ?? null])
            </div>
        @endforeach
    </div>
</template>
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_0'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__0_content])
@endMarker('component', 'Bsourcec1')
    @endblock

    @block('aside')
        <h2 @class([$__VIEW_ID__ . '-Baside1'])>Trang này kiểm chứng cái gì.</h2>
        <ul @class([$__VIEW_ID__ . '-Baside2', 'check-list'])>
            <li @class([$__VIEW_ID__ . '-Baside21'])><strong @class([$__VIEW_ID__ . '-Baside211'])>ForeachSlotCache &amp; Identity:</strong> Vòng lặp dựa trên <code @class([$__VIEW_ID__ . '-Baside212'])>ids</code> với <code @class([$__VIEW_ID__ . '-Baside213'])>
</code>. Khi bấm "Đồng bộ ngay", server trả về tham chiếu object mới nhưng runtime tái dùng đúng component con tương ứng.</li>
            <li @class([$__VIEW_ID__ . '-Baside22'])><strong @class([$__VIEW_ID__ . '-Baside221'])>Bảo toàn bản nháp (Draft Preservation):</strong> Mỗi hàng nhúng một view con mang <code @class([$__VIEW_ID__ . '-Baside222'])>@states</code> form riêng. Dù cha có fetch dữ liệu mới, form đang mở dở của con không bị reset.</li>
            <li @class([$__VIEW_ID__ . '-Baside23'])><strong @class([$__VIEW_ID__ . '-Baside231'])>Sự kiện vòng đời:</strong> Tự động kích hoạt timer polling 30s trong <code @class([$__VIEW_ID__ . '-Baside232'])>started()</code> và dọn dẹp trong <code @class([$__VIEW_ID__ . '-Baside233'])>stopped()</code> / <code @class([$__VIEW_ID__ . '-Baside234'])>destroyed()</code>.</li>
            <li @class([$__VIEW_ID__ . '-Baside24'])><strong @class([$__VIEW_ID__ . '-Baside241'])>Optimistic Update &amp; Conflict Handling:</strong> Cha lắng nghe sự kiện <code @class([$__VIEW_ID__ . '-Baside242'])>roster:editing</code> để không bao giờ xoá nhầm bản ghi mà người dùng đang thao tác dở.</li>
        </ul>
    @endblock
