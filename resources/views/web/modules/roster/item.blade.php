@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

<?php if(!isset($uid) || (!$uid && $uid !== false)) $uid = ''; if(!isset($record) || (!$record && $record !== false)) $record = null; ?>
@useState($editing, false)
@useState($base, null)
@useState($busy, false)
@useState($note, '')
@useState($fName, '')
@useState($fEmail, '')
@useState($fGender, 'other')
@useState($fBirthdate, '')
@wrapper
<article @class([$__VIEW_ID__ . '-98f36c4a', 'rs-row', 'rs-row--edit'=> $editing, 'rs-row--gone'=> $record === null])>
        @startMarker('reactive', 'ff2f222f', ['stateKey' => ['editing'], 'type' => 'if'])
        @if($editing)
            {{-- Bị người khác XOÁ khi đang sửa: parent giữ hàng lại, record = null --}}
            @startMarker('reactive', 'b692f4b0', ['stateKey' => ['record'], 'type' => 'if'])
            @if($record === null)
                <div @class([$__VIEW_ID__ . '-0c0f8951', 'rs-alert', 'rs-alert--danger'])>
                    <strong @class([$__VIEW_ID__ . '-097db133'])>Người khác vừa xoá người dùng này</strong>
                    <p @class([$__VIEW_ID__ . '-3a480c72'])>Bản nháp trong form vẫn còn nguyên. Tạo lại thành người dùng mới, hay bỏ bản nháp?</p>
                    <div @class([$__VIEW_ID__ . '-43b9856b', 'rs-alert-actions'])>
                        <button @class([$__VIEW_ID__ . '-fc2e2e92', 'rs-btn', 'rs-btn-sm', 'rs-btn-primary']) @attr(['type' => 'button'])>Tạo lại từ bản nháp</button>
                        <button @class([$__VIEW_ID__ . '-c53285eb', 'rs-btn', 'rs-btn-sm', 'rs-btn-plain']) @attr(['type' => 'button'])>Bỏ bản nháp</button>
                    </div>
                </div>
            {{-- Bị người khác SỬA khi đang sửa: version lệch so với lúc mở form --}}
            @elseif($base !== null && $record['updated_at'] !== $base['updated_at'])
                <div @class([$__VIEW_ID__ . '-45e2a7d9', 'rs-alert'])>
                    <strong @class([$__VIEW_ID__ . '-f780ab0f'])>Người khác vừa sửa người dùng này</strong>
                    <p @class([$__VIEW_ID__ . '-0673200e'])>Bản nháp của bạn chưa bị đụng tới. Chọn bản muốn giữ:</p>
                    <ul @class([$__VIEW_ID__ . '-df4b3209', 'rs-diff'])>
                        @startMarker('reactive', '341c1d09', ['stateKey' => ['base', 'record'], 'type' => 'if'])
                        @if($record['name'] !== $base['name'])
                            <li @class([$__VIEW_ID__ . '-b52c5d72'])>
                                <span @class([$__VIEW_ID__ . '-e9fc0a83', 'rs-diff-key'])>name</span>
                                <span @class([$__VIEW_ID__ . '-741fc002', 'rs-diff-theirs'])><em @class([$__VIEW_ID__ . '-eb69e58a'])>Của họ</em><b @class([$__VIEW_ID__ . '-142d846f'])>@startMarker('output', '408f7bc1'){{ $record['name'] }}@endMarker('output', '408f7bc1')</b></span>
                                <span @class([$__VIEW_ID__ . '-714be425', 'rs-diff-mine'])><em @class([$__VIEW_ID__ . '-eb812103'])>Của bạn</em><b @class([$__VIEW_ID__ . '-fb46644a'])>@startMarker('output', 'c9d3a48b'){{ $fName }}@endMarker('output', 'c9d3a48b')</b></span>
                            </li>
                        @endif
                        @endMarker('reactive', '341c1d09')
                        @startMarker('reactive', '4ef6c5c7', ['stateKey' => ['base', 'record'], 'type' => 'if'])
                        @if($record['email'] !== $base['email'])
                            <li @class([$__VIEW_ID__ . '-d3b3a836'])>
                                <span @class([$__VIEW_ID__ . '-3ab3b6f3', 'rs-diff-key'])>email</span>
                                <span @class([$__VIEW_ID__ . '-9cc24a44', 'rs-diff-theirs'])><em @class([$__VIEW_ID__ . '-5f61e8b9'])>Của họ</em><b @class([$__VIEW_ID__ . '-35246fde'])>@startMarker('output', '4ebc64ec'){{ $record['email'] }}@endMarker('output', '4ebc64ec')</b></span>
                                <span @class([$__VIEW_ID__ . '-d8f6b688', 'rs-diff-mine'])><em @class([$__VIEW_ID__ . '-e492adf7'])>Của bạn</em><b @class([$__VIEW_ID__ . '-67b309b4'])>@startMarker('output', 'a6467101'){{ $fEmail }}@endMarker('output', 'a6467101')</b></span>
                            </li>
                        @endif
                        @endMarker('reactive', '4ef6c5c7')
                        @startMarker('reactive', 'baf4cc07', ['stateKey' => ['base', 'record'], 'type' => 'if'])
                        @if($record['gender'] !== $base['gender'])
                            <li @class([$__VIEW_ID__ . '-5f24143d'])>
                                <span @class([$__VIEW_ID__ . '-e83f51d9', 'rs-diff-key'])>gender</span>
                                <span @class([$__VIEW_ID__ . '-02767d60', 'rs-diff-theirs'])><em @class([$__VIEW_ID__ . '-c2505ec9'])>Của họ</em><b @class([$__VIEW_ID__ . '-c9805ea1'])>@startMarker('output', '2bee6599'){{ $record['gender'] }}@endMarker('output', '2bee6599')</b></span>
                                <span @class([$__VIEW_ID__ . '-966d001a', 'rs-diff-mine'])><em @class([$__VIEW_ID__ . '-067fd720'])>Của bạn</em><b @class([$__VIEW_ID__ . '-4a90fcfb'])>@startMarker('output', '9236a704'){{ $fGender }}@endMarker('output', '9236a704')</b></span>
                            </li>
                        @endif
                        @endMarker('reactive', 'baf4cc07')
                        @startMarker('reactive', '62a96f50', ['stateKey' => ['base', 'record'], 'type' => 'if'])
                        @if($record['birthdate'] !== $base['birthdate'])
                            <li @class([$__VIEW_ID__ . '-16883cc9'])>
                                <span @class([$__VIEW_ID__ . '-21b4d18b', 'rs-diff-key'])>birthdate</span>
                                <span @class([$__VIEW_ID__ . '-0f6cb257', 'rs-diff-theirs'])><em @class([$__VIEW_ID__ . '-e86011c3'])>Của họ</em><b @class([$__VIEW_ID__ . '-fb91be62'])>@startMarker('output', '833625ad'){{ $record['birthdate'] }}@endMarker('output', '833625ad')</b></span>
                                <span @class([$__VIEW_ID__ . '-e1156ceb', 'rs-diff-mine'])><em @class([$__VIEW_ID__ . '-7f8a0e3d'])>Của bạn</em><b @class([$__VIEW_ID__ . '-32335cce'])>@startMarker('output', '73ccfd00'){{ $fBirthdate }}@endMarker('output', '73ccfd00')</b></span>
                            </li>
                        @endif
                        @endMarker('reactive', '62a96f50')
                    </ul>
                    <div @class([$__VIEW_ID__ . '-f56fefcc', 'rs-alert-actions'])>
                        <button @class([$__VIEW_ID__ . '-561f0a28', 'rs-btn', 'rs-btn-sm', 'rs-btn-ghost']) @attr(['type' => 'button'])>Lấy bản của họ</button>
                        <button @class([$__VIEW_ID__ . '-bacab073', 'rs-btn', 'rs-btn-sm', 'rs-btn-primary']) @attr(['type' => 'button'])>Giữ bản của tôi</button>
                    </div>
                </div>
            @endif
            @endMarker('reactive', 'b692f4b0')

            <form @class([$__VIEW_ID__ . '-5c677340', 'rs-edit-form'])>
                <div @class([$__VIEW_ID__ . '-2ad1b0a4', 'rs-edit-grid'])>
                    <label @class([$__VIEW_ID__ . '-eed3d3b6', 'rs-field'])>
                        <span @class([$__VIEW_ID__ . '-2e015e29'])>Họ tên</span>
                        <input @class([$__VIEW_ID__ . '-a9ac609f']) @attr(['type' => 'text', 'placeholder' => 'Họ tên']) @bind($fName)>
                    </label>
                    <label @class([$__VIEW_ID__ . '-a922b96a', 'rs-field'])>
                        <span @class([$__VIEW_ID__ . '-3bee35ca'])>Email</span>
                        <input @class([$__VIEW_ID__ . '-f0e0170e']) @attr(['type' => 'email', 'placeholder' => 'Email']) @bind($fEmail)>
                    </label>
                    <label @class([$__VIEW_ID__ . '-c0c2efab', 'rs-field'])>
                        <span @class([$__VIEW_ID__ . '-d1afe131'])>Giới tính</span>
                        <select @class([$__VIEW_ID__ . '-9ec2a7e8']) @bind($fGender)>
                            <option @class([$__VIEW_ID__ . '-11058280']) @attr(['value' => 'male'])>male</option>
                            <option @class([$__VIEW_ID__ . '-201de61c']) @attr(['value' => 'female'])>female</option>
                            <option @class([$__VIEW_ID__ . '-b85f9b7b']) @attr(['value' => 'other'])>other</option>
                        </select>
                    </label>
                    <label @class([$__VIEW_ID__ . '-8206f20c', 'rs-field'])>
                        <span @class([$__VIEW_ID__ . '-862bf751'])>Ngày sinh</span>
                        <input @class([$__VIEW_ID__ . '-77b826df']) @attr(['type' => 'date']) @bind($fBirthdate)>
                    </label>
                </div>
                <div @class([$__VIEW_ID__ . '-57ce7bf9', 'rs-edit-foot'])>
                    @startMarker('reactive', 'd1945de0', ['stateKey' => ['base'], 'type' => 'if'])
                    @if($base !== null)
                        <span @class([$__VIEW_ID__ . '-4959c732', 'rs-ver'])>base v@startMarker('output', '02a39936'){{ $base['updated_at'] }}@endMarker('output', '02a39936')</span>
                    @endif
                    @endMarker('reactive', 'd1945de0')
                    <span @class([$__VIEW_ID__ . '-cbbdefbf', 'rs-spacer'])></span>
                    {{-- Bản ghi đã biến mất thì Lưu chỉ ăn 404 — chỉ còn đường tạo lại
                         hoặc bỏ nháp, hai nút đó nằm trong khối cảnh báo phía trên. --}}
                    @startMarker('reactive', 'ffca4dfb', ['stateKey' => ['record'], 'type' => 'if'])
                    @if($record !== null)
                        <button @class([$__VIEW_ID__ . '-4701b367', 'rs-btn', 'rs-btn-sm', 'rs-btn-plain']) @attr(['type' => 'button'])>Huỷ</button>
                        <button @class([$__VIEW_ID__ . '-26b78bf0', 'rs-btn', 'rs-btn-sm', 'rs-btn-primary']) @attr(['type' => 'submit']) @disabled($busy)>Lưu thay đổi</button>
                    @endif
                    @endMarker('reactive', 'ffca4dfb')
                </div>
            </form>
        @else
            @startMarker('reactive', 'e7a27576', ['stateKey' => ['record'], 'type' => 'if'])
            @if($record === null)
                <div @class([$__VIEW_ID__ . '-b4f9f9f7', 'rs-row-view'])>
                    <span @class([$__VIEW_ID__ . '-aefb1ec6', 'rs-avatar', 'rs-avatar--gone'])></span>
                    <div @class([$__VIEW_ID__ . '-0d7b7c7d', 'rs-row-id'])>
                        <strong @class([$__VIEW_ID__ . '-9e00257d'])>Bản ghi đã bị xoá</strong>
                        <span @class([$__VIEW_ID__ . '-9bcc448b'])>Hàng này sẽ biến mất ở lần đồng bộ tới.</span>
                    </div>
                </div>
            @else
                <div @class([$__VIEW_ID__ . '-7971f7d4', 'rs-row-view'])>
                    <span @class([$__VIEW_ID__ . '-1e5526c0', 'rs-avatar', 'rs-avatar--f'=> $record['gender'] === 'female', 'rs-avatar--m'=> $record['gender'] === 'male'])></span>
                    <div @class([$__VIEW_ID__ . '-9453590d', 'rs-row-id'])>
                        <strong @class([$__VIEW_ID__ . '-aa010c5b'])>@startMarker('output', 'ff0a6a25'){{ $record['name'] }}@endMarker('output', 'ff0a6a25')</strong>
                        <span @class([$__VIEW_ID__ . '-7cea63bb'])>@startMarker('output', '794625f4'){{ $record['email'] }}@endMarker('output', '794625f4')</span>
                    </div>
                    <div @class([$__VIEW_ID__ . '-8b8d6bce', 'rs-row-meta'])>
                        <span @class([$__VIEW_ID__ . '-0bb6b2c8', 'rs-tag', 'rs-tag--brand'])>@startMarker('output', 'f19d2410'){{ $record['gender'] }}@endMarker('output', 'f19d2410')</span>
                        <span @class([$__VIEW_ID__ . '-2fa3851d', 'rs-tag'])>@startMarker('output', '425ab885'){{ $record['birthdate'] }}@endMarker('output', '425ab885')</span>
                        <span @class([$__VIEW_ID__ . '-60ac1e93', 'rs-ver'])>v@startMarker('output', '7fca6ba3'){{ $record['updated_at'] }}@endMarker('output', '7fca6ba3')</span>
                    </div>
                    <div @class([$__VIEW_ID__ . '-57a51cf0', 'rs-row-actions'])>
                        <button @class([$__VIEW_ID__ . '-e3ad8272', 'rs-btn', 'rs-btn-sm', 'rs-btn-ghost']) @attr(['type' => 'button'])>Sửa</button>
                        <button @class([$__VIEW_ID__ . '-a268dbad', 'rs-btn', 'rs-btn-sm', 'rs-btn-danger']) @attr(['type' => 'button'])>Xoá</button>
                    </div>
                </div>
            @endif
            @endMarker('reactive', 'e7a27576')
        @endif
        @endMarker('reactive', 'ff2f222f')

        @startMarker('reactive', '27e8eebc', ['stateKey' => ['note'], 'type' => 'if'])
        @if($note !== '')
            <p @class([$__VIEW_ID__ . '-47c052f2', 'rs-note'])>@startMarker('output', 'ba5ed646'){{ $note }}@endMarker('output', 'ba5ed646')</p>
        @endif
        @endMarker('reactive', '27e8eebc')
    </article>
@endWrapper
