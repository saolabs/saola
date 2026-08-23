@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

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
        <div @class([$__VIEW_ID__ . '-c8b7faeb', 'rs-page'])>
            <header @class([$__VIEW_ID__ . '-e119038b', 'workspace-topbar'])>
                <div @class([$__VIEW_ID__ . '-c8936e79'])>
                    <p @class([$__VIEW_ID__ . '-f9e776bb', 'eyebrow'])><span @class([$__VIEW_ID__ . '-f2f48eff'])>05</span> Concurrent editing</p>
                    <h1 @class([$__VIEW_ID__ . '-d92792e4'])>Danh sách người dùng</h1>
                </div>
                <div @class([$__VIEW_ID__ . '-897e00f8', 'completion-ring'])>
                    <strong @class([$__VIEW_ID__ . '-a3eed2b2'])>@startMarker('output', '41061130'){{ count($ids) }}@endMarker('output', '41061130')</strong><span @class([$__VIEW_ID__ . '-0b59a853'])>users</span>
                </div>
            </header>

            <p @class([$__VIEW_ID__ . '-6f74f47b', 'rs-lead'])>Danh sách tự kéo lại mỗi 30 giây. Mỗi hàng có form sửa riêng — nếu người khác sửa hoặc xoá đúng bản ghi bạn đang mở, bản nháp của bạn được giữ nguyên và bạn được hỏi trước khi mất bất cứ thứ gì.</p>

            <dl @class([$__VIEW_ID__ . '-104b20bc', 'rs-stats'])>
                <div @class([$__VIEW_ID__ . '-75c6d6e5', 'rs-stat'])>
                    <dt @class([$__VIEW_ID__ . '-c229123b'])>Người dùng</dt>
                    <dd @class([$__VIEW_ID__ . '-e3692efa'])>@startMarker('output', 'b0791b50'){{ count($ids) }}@endMarker('output', 'b0791b50')</dd>
                </div>
                <div @class([$__VIEW_ID__ . '-26b5312f', 'rs-stat'])>
                    <dt @class([$__VIEW_ID__ . '-cd79626d'])>Nhịp đồng bộ</dt>
                    <dd @class([$__VIEW_ID__ . '-50d328ab'])>30 <small @class([$__VIEW_ID__ . '-a1666907'])>giây</small></dd>
                </div>
                <div @class([$__VIEW_ID__ . '-4ae38d63', 'rs-stat'])>
                    <dt @class([$__VIEW_ID__ . '-91535bfa'])>Đồng bộ lần cuối</dt>
                    @startMarker('reactive', 'cd47fd2d', ['stateKey' => ['lastSync'], 'type' => 'if'])
                    @if($lastSync === '')
                        <dd @class([$__VIEW_ID__ . '-5b1cb922'])><small @class([$__VIEW_ID__ . '-65d17739'])>chưa chạy</small></dd>
                    @else
                        <dd @class([$__VIEW_ID__ . '-24cf537a'])>@startMarker('output', '70f32d66'){{ $lastSync }}@endMarker('output', '70f32d66')</dd>
                    @endif
                    @endMarker('reactive', 'cd47fd2d')
                </div>
            </dl>

            @startMarker('reactive', '42fb5132', ['stateKey' => ['syncError'], 'type' => 'if'])
            @if($syncError !== '')
                <p @class([$__VIEW_ID__ . '-1cdbd625', 'rs-alert', 'rs-alert--danger', 'rs-alert--error'])>@startMarker('output', '6f62b64d'){{ $syncError }}@endMarker('output', '6f62b64d')</p>
            @endif
            @endMarker('reactive', '42fb5132')

            <section @class([$__VIEW_ID__ . '-f6270387', 'rs-card'])>
                <div @class([$__VIEW_ID__ . '-e2cc2ae7', 'rs-card-head'])>
                    <h2 @class([$__VIEW_ID__ . '-0f5cdd44'])>Thêm người dùng</h2>
                    <p @class([$__VIEW_ID__ . '-1da2b2f2'])>Bản ghi mới được server cấp uuid và mốc version.</p>
                </div>
                <form @class([$__VIEW_ID__ . '-d7b5a55b', 'rs-form-grid'])>
                    <label @class([$__VIEW_ID__ . '-04aa4b26', 'rs-field'])>
                        <span @class([$__VIEW_ID__ . '-b131c8f0'])>Họ tên</span>
                        <input @class([$__VIEW_ID__ . '-12cde304']) @attr(['type' => 'text', 'placeholder' => 'Nguyễn Văn A']) @bind($fName)>
                    </label>
                    <label @class([$__VIEW_ID__ . '-d0c040be', 'rs-field'])>
                        <span @class([$__VIEW_ID__ . '-6e28684d'])>Email</span>
                        <input @class([$__VIEW_ID__ . '-ec2a98e8']) @attr(['type' => 'email', 'placeholder' => 'a@saola.dev']) @bind($fEmail)>
                    </label>
                    <label @class([$__VIEW_ID__ . '-2d4af879', 'rs-field'])>
                        <span @class([$__VIEW_ID__ . '-ae0f4dbb'])>Giới tính</span>
                        <select @class([$__VIEW_ID__ . '-82a9a211']) @bind($fGender)>
                            <option @class([$__VIEW_ID__ . '-2d1688f4']) @attr(['value' => 'male'])>male</option>
                            <option @class([$__VIEW_ID__ . '-b5f58e12']) @attr(['value' => 'female'])>female</option>
                            <option @class([$__VIEW_ID__ . '-d268cba8']) @attr(['value' => 'other'])>other</option>
                        </select>
                    </label>
                    <label @class([$__VIEW_ID__ . '-cbec9003', 'rs-field'])>
                        <span @class([$__VIEW_ID__ . '-5a533df8'])>Ngày sinh</span>
                        <input @class([$__VIEW_ID__ . '-71a38338']) @attr(['type' => 'date']) @bind($fBirthdate)>
                    </label>
                    <div @class([$__VIEW_ID__ . '-e3cb4688', 'rs-form-actions'])>
                        <button @class([$__VIEW_ID__ . '-fa6c2549', 'rs-btn', 'rs-btn-primary']) @attr(['type' => 'submit']) @disabled($creating)>Thêm người dùng</button>
                    </div>
                </form>
            </section>

            <div @class([$__VIEW_ID__ . '-f0d5e13c', 'rs-list-head'])>
                <h2 @class([$__VIEW_ID__ . '-efd60c51'])>Bản ghi</h2>
                <div @class([$__VIEW_ID__ . '-49788e3c', 'rs-list-tools'])>
                    <span @class([$__VIEW_ID__ . '-e34b2b31', 'rs-pulse'])><span @class([$__VIEW_ID__ . '-de8aeefd', 'rs-pulse-dot'])></span> Tự đồng bộ mỗi 30 giây</span>
                    <button @class([$__VIEW_ID__ . '-3e233acb', 'rs-btn', 'rs-btn-sm', 'rs-btn-ghost']) @attr(['type' => 'button'])>Đồng bộ ngay</button>
                </div>
            </div>

            <div @class([$__VIEW_ID__ . '-4b9d0221', 'rs-list'])>
                @startMarker('reactive', 'b8a49f95', ['stateKey' => ['ids'], 'type' => 'foreach'])
                @foreach($ids as $id)
                    <div @class([$__VIEW_ID__ . "-ed4efd01-{$id}", 'rs-slot'])>
                        {{-- record đổi ref ⇒ Component đẩy prop mới vào ĐÚNG instance con
                             đang sống, nên state form của nó không bị thổi bay. --}}
                        @startMarker('component', "e63baf7d-{$id}")
                        @include('web.modules.roster.item', ['uid' => $id, 'record' => $records[$id] ?? null])
                        @endMarker('component', "e63baf7d-{$id}")
                    </div>
                @endforeach
                @endMarker('reactive', 'b8a49f95')
            </div>

            @startMarker('reactive', '651d95e9', ['stateKey' => ['ids'], 'type' => 'if'])
            @if(count($ids) === 0)
                <p @class([$__VIEW_ID__ . '-c7a5e719', 'rs-empty'])>Chưa có ai trong danh sách. Thêm người dùng đầu tiên ở form phía trên.</p>
            @endif
            @endMarker('reactive', '651d95e9')
        </div>
    @endblock
