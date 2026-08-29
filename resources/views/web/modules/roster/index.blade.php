@exec($__ONE_COMPONENT_REGISTRY__ = ['rosteritem' => 'web.modules.roster.item']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

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
@extends($__layout__ . "workspace")
@once('saola-css-1yz0dmk')
<link rel="stylesheet" href="/static/saola/roster.css">
@endonce
    @block('workspace')
        <div @class([$__VIEW_ID__ . '-Bworkspace1', 'rs-page'])>
            <header @class([$__VIEW_ID__ . '-Bworkspace11', 'workspace-topbar'])>
                <div @class([$__VIEW_ID__ . '-Bworkspace111'])>
                    <p @class([$__VIEW_ID__ . '-Bworkspace1111', 'eyebrow'])><span @class([$__VIEW_ID__ . '-Bworkspace11111'])>05</span> Concurrent editing</p>
                    <h1 @class([$__VIEW_ID__ . '-Bworkspace1112'])>Danh sách người dùng</h1>
                </div>
                <div @class([$__VIEW_ID__ . '-Bworkspace112', 'completion-ring'])>
                    <strong @class([$__VIEW_ID__ . '-Bworkspace1121'])>@startMarker('output', 'Bworkspace1121o1'){{ count($ids) }}@endMarker('output', 'Bworkspace1121o1')</strong><span @class([$__VIEW_ID__ . '-Bworkspace1122'])>users</span>
                </div>
            </header>

            <p @class([$__VIEW_ID__ . '-Bworkspace12', 'rs-lead'])>Danh sách tự kéo lại mỗi 30 giây. Mỗi hàng có form sửa riêng — nếu người khác sửa hoặc xoá đúng bản ghi bạn đang mở, bản nháp của bạn được giữ nguyên và bạn được hỏi trước khi mất bất cứ thứ gì.</p>

            <dl @class([$__VIEW_ID__ . '-Bworkspace13', 'rs-stats'])>
                <div @class([$__VIEW_ID__ . '-Bworkspace131', 'rs-stat'])>
                    <dt @class([$__VIEW_ID__ . '-Bworkspace1311'])>Người dùng</dt>
                    <dd @class([$__VIEW_ID__ . '-Bworkspace1312'])>@startMarker('output', 'Bworkspace1312o1'){{ count($ids) }}@endMarker('output', 'Bworkspace1312o1')</dd>
                </div>
                <div @class([$__VIEW_ID__ . '-Bworkspace132', 'rs-stat'])>
                    <dt @class([$__VIEW_ID__ . '-Bworkspace1321'])>Nhịp đồng bộ</dt>
                    <dd @class([$__VIEW_ID__ . '-Bworkspace1322'])>30 <small @class([$__VIEW_ID__ . '-Bworkspace13221'])>giây</small></dd>
                </div>
                <div @class([$__VIEW_ID__ . '-Bworkspace133', 'rs-stat'])>
                    <dt @class([$__VIEW_ID__ . '-Bworkspace1331'])>Đồng bộ lần cuối</dt>
                    @startMarker('reactive', 'Bworkspace133r1', ['stateKey' => ['lastSync'], 'type' => 'if'])
                    @if($lastSync === '')
                        <dd @class([$__VIEW_ID__ . '-Bworkspace133r1k11'])><small @class([$__VIEW_ID__ . '-Bworkspace133r1k111'])>chưa chạy</small></dd>
                    @else
                        <dd @class([$__VIEW_ID__ . '-Bworkspace133r1k21'])>@startMarker('output', 'Bworkspace133r1k21o1'){{ $lastSync }}@endMarker('output', 'Bworkspace133r1k21o1')</dd>
                    @endif
                    @endMarker('reactive', 'Bworkspace133r1')
                </div>
            </dl>

            @startMarker('reactive', 'Bworkspace1r1', ['stateKey' => ['syncError'], 'type' => 'if'])
            @if($syncError !== '')
                <p @class([$__VIEW_ID__ . '-Bworkspace1r1k11', 'rs-alert', 'rs-alert--danger', 'rs-alert--error'])>@startMarker('output', 'Bworkspace1r1k11o1'){{ $syncError }}@endMarker('output', 'Bworkspace1r1k11o1')</p>
            @endif
            @endMarker('reactive', 'Bworkspace1r1')

            <section @class([$__VIEW_ID__ . '-Bworkspace14', 'rs-card'])>
                <div @class([$__VIEW_ID__ . '-Bworkspace141', 'rs-card-head'])>
                    <h2 @class([$__VIEW_ID__ . '-Bworkspace1411'])>Thêm người dùng</h2>
                    <p @class([$__VIEW_ID__ . '-Bworkspace1412'])>Bản ghi mới được server cấp uuid và mốc version.</p>
                </div>
                <form @class([$__VIEW_ID__ . '-Bworkspace142', 'rs-form-grid'])>
                    <label @class([$__VIEW_ID__ . '-Bworkspace1421', 'rs-field'])>
                        <span @class([$__VIEW_ID__ . '-Bworkspace14211'])>Họ tên</span>
                        <input @class([$__VIEW_ID__ . '-Bworkspace14212']) @attr(['type' => 'text', 'placeholder' => 'Nguyễn Văn A']) @bind($fName)>
                    </label>
                    <label @class([$__VIEW_ID__ . '-Bworkspace1422', 'rs-field'])>
                        <span @class([$__VIEW_ID__ . '-Bworkspace14221'])>Email</span>
                        <input @class([$__VIEW_ID__ . '-Bworkspace14222']) @attr(['type' => 'email', 'placeholder' => 'a@saola.dev']) @bind($fEmail)>
                    </label>
                    <label @class([$__VIEW_ID__ . '-Bworkspace1423', 'rs-field'])>
                        <span @class([$__VIEW_ID__ . '-Bworkspace14231'])>Giới tính</span>
                        <select @class([$__VIEW_ID__ . '-Bworkspace14232']) @bind($fGender)>
                            <option @class([$__VIEW_ID__ . '-Bworkspace142321']) @attr(['value' => 'male'])>male</option>
                            <option @class([$__VIEW_ID__ . '-Bworkspace142322']) @attr(['value' => 'female'])>female</option>
                            <option @class([$__VIEW_ID__ . '-Bworkspace142323']) @attr(['value' => 'other'])>other</option>
                        </select>
                    </label>
                    <label @class([$__VIEW_ID__ . '-Bworkspace1424', 'rs-field'])>
                        <span @class([$__VIEW_ID__ . '-Bworkspace14241'])>Ngày sinh</span>
                        <input @class([$__VIEW_ID__ . '-Bworkspace14242']) @attr(['type' => 'date']) @bind($fBirthdate)>
                    </label>
                    <div @class([$__VIEW_ID__ . '-Bworkspace1425', 'rs-form-actions'])>
                        <button @class([$__VIEW_ID__ . '-Bworkspace14251', 'rs-btn', 'rs-btn-primary']) @attr(['type' => 'submit']) @disabled($creating)>Thêm người dùng</button>
                    </div>
                </form>
            </section>

            <div @class([$__VIEW_ID__ . '-Bworkspace15', 'rs-list-head'])>
                <h2 @class([$__VIEW_ID__ . '-Bworkspace151'])>Bản ghi</h2>
                <div @class([$__VIEW_ID__ . '-Bworkspace152', 'rs-list-tools'])>
                    <span @class([$__VIEW_ID__ . '-Bworkspace1521', 'rs-pulse'])><span @class([$__VIEW_ID__ . '-Bworkspace15211', 'rs-pulse-dot'])></span> Tự đồng bộ mỗi 30 giây</span>
                    <button @class([$__VIEW_ID__ . '-Bworkspace1522', 'rs-btn', 'rs-btn-sm', 'rs-btn-ghost']) @attr(['type' => 'button'])>Đồng bộ ngay</button>
                </div>
            </div>

            <div @class([$__VIEW_ID__ . '-Bworkspace16', 'rs-list'])>
                @startMarker('reactive', 'Bworkspace16l1', ['stateKey' => ['ids'], 'type' => 'foreach'])
                @foreach($ids as $id)
                    <div @class([$__VIEW_ID__ . "-Bworkspace16l11-{$id}", 'rs-slot'])>
                        {{-- record đổi ref ⇒ Component đẩy prop mới vào ĐÚNG instance con
                             đang sống, nên state form của nó không bị thổi bay. --}}
                        @startMarker('component', "Bworkspace16l11c1-{$id}")
                        @include('web.modules.roster.item', ['uid' => $id, 'record' => $records[$id] ?? null])
                        @endMarker('component', "Bworkspace16l11c1-{$id}")
                    </div>
                @endforeach
                @endMarker('reactive', 'Bworkspace16l1')
            </div>

            @startMarker('reactive', 'Bworkspace1r2', ['stateKey' => ['ids'], 'type' => 'if'])
            @if(count($ids) === 0)
                <p @class([$__VIEW_ID__ . '-Bworkspace1r2k11', 'rs-empty'])>Chưa có ai trong danh sách. Thêm người dùng đầu tiên ở form phía trên.</p>
            @endif
            @endMarker('reactive', 'Bworkspace1r2')
        </div>
    @endblock
