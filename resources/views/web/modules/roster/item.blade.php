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
<article @class([$__VIEW_ID__ . '-e1', 'rs-row', 'rs-row--edit'=> $editing, 'rs-row--gone'=> $record === null])>
        @startMarker('reactive', 'e1r1', ['stateKey' => ['editing'], 'type' => 'if'])
        @if($editing)
            {{-- Bị người khác XOÁ khi đang sửa: parent giữ hàng lại, record = null --}}
            @startMarker('reactive', 'e1r1k1r1', ['stateKey' => ['record'], 'type' => 'if'])
            @if($record === null)
                <div @class([$__VIEW_ID__ . '-e1r1k1r1k11', 'rs-alert', 'rs-alert--danger'])>
                    <strong @class([$__VIEW_ID__ . '-e1r1k1r1k111'])>Người khác vừa xoá người dùng này</strong>
                    <p @class([$__VIEW_ID__ . '-e1r1k1r1k112'])>Bản nháp trong form vẫn còn nguyên. Tạo lại thành người dùng mới, hay bỏ bản nháp?</p>
                    <div @class([$__VIEW_ID__ . '-e1r1k1r1k113', 'rs-alert-actions'])>
                        <button @class([$__VIEW_ID__ . '-e1r1k1r1k1131', 'rs-btn', 'rs-btn-sm', 'rs-btn-primary']) @attr(['type' => 'button'])>Tạo lại từ bản nháp</button>
                        <button @class([$__VIEW_ID__ . '-e1r1k1r1k1132', 'rs-btn', 'rs-btn-sm', 'rs-btn-plain']) @attr(['type' => 'button'])>Bỏ bản nháp</button>
                    </div>
                </div>
            {{-- Bị người khác SỬA khi đang sửa: version lệch so với lúc mở form --}}
            @elseif($base !== null && $record['updated_at'] !== $base['updated_at'])
                <div @class([$__VIEW_ID__ . '-e1r1k1r1k21', 'rs-alert'])>
                    <strong @class([$__VIEW_ID__ . '-e1r1k1r1k211'])>Người khác vừa sửa người dùng này</strong>
                    <p @class([$__VIEW_ID__ . '-e1r1k1r1k212'])>Bản nháp của bạn chưa bị đụng tới. Chọn bản muốn giữ:</p>
                    <ul @class([$__VIEW_ID__ . '-e1r1k1r1k213', 'rs-diff'])>
                        @startMarker('reactive', 'e1r1k1r1k213r1', ['stateKey' => ['base', 'record'], 'type' => 'if'])
                        @if($record['name'] !== $base['name'])
                            <li @class([$__VIEW_ID__ . '-e1r1k1r1k213r1k11'])>
                                <span @class([$__VIEW_ID__ . '-e1r1k1r1k213r1k111', 'rs-diff-key'])>name</span>
                                <span @class([$__VIEW_ID__ . '-e1r1k1r1k213r1k112', 'rs-diff-theirs'])><em @class([$__VIEW_ID__ . '-e1r1k1r1k213r1k1121'])>Của họ</em><b @class([$__VIEW_ID__ . '-e1r1k1r1k213r1k1122'])>@startMarker('output', 'e1r1k1r1k213r1k1122o1'){{ $record['name'] }}@endMarker('output', 'e1r1k1r1k213r1k1122o1')</b></span>
                                <span @class([$__VIEW_ID__ . '-e1r1k1r1k213r1k113', 'rs-diff-mine'])><em @class([$__VIEW_ID__ . '-e1r1k1r1k213r1k1131'])>Của bạn</em><b @class([$__VIEW_ID__ . '-e1r1k1r1k213r1k1132'])>@startMarker('output', 'e1r1k1r1k213r1k1132o1'){{ $fName }}@endMarker('output', 'e1r1k1r1k213r1k1132o1')</b></span>
                            </li>
                        @endif
                        @endMarker('reactive', 'e1r1k1r1k213r1')
                        @startMarker('reactive', 'e1r1k1r1k213r2', ['stateKey' => ['base', 'record'], 'type' => 'if'])
                        @if($record['email'] !== $base['email'])
                            <li @class([$__VIEW_ID__ . '-e1r1k1r1k213r2k11'])>
                                <span @class([$__VIEW_ID__ . '-e1r1k1r1k213r2k111', 'rs-diff-key'])>email</span>
                                <span @class([$__VIEW_ID__ . '-e1r1k1r1k213r2k112', 'rs-diff-theirs'])><em @class([$__VIEW_ID__ . '-e1r1k1r1k213r2k1121'])>Của họ</em><b @class([$__VIEW_ID__ . '-e1r1k1r1k213r2k1122'])>@startMarker('output', 'e1r1k1r1k213r2k1122o1'){{ $record['email'] }}@endMarker('output', 'e1r1k1r1k213r2k1122o1')</b></span>
                                <span @class([$__VIEW_ID__ . '-e1r1k1r1k213r2k113', 'rs-diff-mine'])><em @class([$__VIEW_ID__ . '-e1r1k1r1k213r2k1131'])>Của bạn</em><b @class([$__VIEW_ID__ . '-e1r1k1r1k213r2k1132'])>@startMarker('output', 'e1r1k1r1k213r2k1132o1'){{ $fEmail }}@endMarker('output', 'e1r1k1r1k213r2k1132o1')</b></span>
                            </li>
                        @endif
                        @endMarker('reactive', 'e1r1k1r1k213r2')
                        @startMarker('reactive', 'e1r1k1r1k213r3', ['stateKey' => ['base', 'record'], 'type' => 'if'])
                        @if($record['gender'] !== $base['gender'])
                            <li @class([$__VIEW_ID__ . '-e1r1k1r1k213r3k11'])>
                                <span @class([$__VIEW_ID__ . '-e1r1k1r1k213r3k111', 'rs-diff-key'])>gender</span>
                                <span @class([$__VIEW_ID__ . '-e1r1k1r1k213r3k112', 'rs-diff-theirs'])><em @class([$__VIEW_ID__ . '-e1r1k1r1k213r3k1121'])>Của họ</em><b @class([$__VIEW_ID__ . '-e1r1k1r1k213r3k1122'])>@startMarker('output', 'e1r1k1r1k213r3k1122o1'){{ $record['gender'] }}@endMarker('output', 'e1r1k1r1k213r3k1122o1')</b></span>
                                <span @class([$__VIEW_ID__ . '-e1r1k1r1k213r3k113', 'rs-diff-mine'])><em @class([$__VIEW_ID__ . '-e1r1k1r1k213r3k1131'])>Của bạn</em><b @class([$__VIEW_ID__ . '-e1r1k1r1k213r3k1132'])>@startMarker('output', 'e1r1k1r1k213r3k1132o1'){{ $fGender }}@endMarker('output', 'e1r1k1r1k213r3k1132o1')</b></span>
                            </li>
                        @endif
                        @endMarker('reactive', 'e1r1k1r1k213r3')
                        @startMarker('reactive', 'e1r1k1r1k213r4', ['stateKey' => ['base', 'record'], 'type' => 'if'])
                        @if($record['birthdate'] !== $base['birthdate'])
                            <li @class([$__VIEW_ID__ . '-e1r1k1r1k213r4k11'])>
                                <span @class([$__VIEW_ID__ . '-e1r1k1r1k213r4k111', 'rs-diff-key'])>birthdate</span>
                                <span @class([$__VIEW_ID__ . '-e1r1k1r1k213r4k112', 'rs-diff-theirs'])><em @class([$__VIEW_ID__ . '-e1r1k1r1k213r4k1121'])>Của họ</em><b @class([$__VIEW_ID__ . '-e1r1k1r1k213r4k1122'])>@startMarker('output', 'e1r1k1r1k213r4k1122o1'){{ $record['birthdate'] }}@endMarker('output', 'e1r1k1r1k213r4k1122o1')</b></span>
                                <span @class([$__VIEW_ID__ . '-e1r1k1r1k213r4k113', 'rs-diff-mine'])><em @class([$__VIEW_ID__ . '-e1r1k1r1k213r4k1131'])>Của bạn</em><b @class([$__VIEW_ID__ . '-e1r1k1r1k213r4k1132'])>@startMarker('output', 'e1r1k1r1k213r4k1132o1'){{ $fBirthdate }}@endMarker('output', 'e1r1k1r1k213r4k1132o1')</b></span>
                            </li>
                        @endif
                        @endMarker('reactive', 'e1r1k1r1k213r4')
                    </ul>
                    <div @class([$__VIEW_ID__ . '-e1r1k1r1k214', 'rs-alert-actions'])>
                        <button @class([$__VIEW_ID__ . '-e1r1k1r1k2141', 'rs-btn', 'rs-btn-sm', 'rs-btn-ghost']) @attr(['type' => 'button'])>Lấy bản của họ</button>
                        <button @class([$__VIEW_ID__ . '-e1r1k1r1k2142', 'rs-btn', 'rs-btn-sm', 'rs-btn-primary']) @attr(['type' => 'button'])>Giữ bản của tôi</button>
                    </div>
                </div>
            @endif
            @endMarker('reactive', 'e1r1k1r1')

            <form @class([$__VIEW_ID__ . '-e1r1k11', 'rs-edit-form'])>
                <div @class([$__VIEW_ID__ . '-e1r1k111', 'rs-edit-grid'])>
                    <label @class([$__VIEW_ID__ . '-e1r1k1111', 'rs-field'])>
                        <span @class([$__VIEW_ID__ . '-e1r1k11111'])>Họ tên</span>
                        <input @class([$__VIEW_ID__ . '-e1r1k11112']) @attr(['type' => 'text', 'placeholder' => 'Họ tên']) @bind($fName)>
                    </label>
                    <label @class([$__VIEW_ID__ . '-e1r1k1112', 'rs-field'])>
                        <span @class([$__VIEW_ID__ . '-e1r1k11121'])>Email</span>
                        <input @class([$__VIEW_ID__ . '-e1r1k11122']) @attr(['type' => 'email', 'placeholder' => 'Email']) @bind($fEmail)>
                    </label>
                    <label @class([$__VIEW_ID__ . '-e1r1k1113', 'rs-field'])>
                        <span @class([$__VIEW_ID__ . '-e1r1k11131'])>Giới tính</span>
                        <select @class([$__VIEW_ID__ . '-e1r1k11132']) @bind($fGender)>
                            <option @class([$__VIEW_ID__ . '-e1r1k111321']) @attr(['value' => 'male'])>male</option>
                            <option @class([$__VIEW_ID__ . '-e1r1k111322']) @attr(['value' => 'female'])>female</option>
                            <option @class([$__VIEW_ID__ . '-e1r1k111323']) @attr(['value' => 'other'])>other</option>
                        </select>
                    </label>
                    <label @class([$__VIEW_ID__ . '-e1r1k1114', 'rs-field'])>
                        <span @class([$__VIEW_ID__ . '-e1r1k11141'])>Ngày sinh</span>
                        <input @class([$__VIEW_ID__ . '-e1r1k11142']) @attr(['type' => 'date']) @bind($fBirthdate)>
                    </label>
                </div>
                <div @class([$__VIEW_ID__ . '-e1r1k112', 'rs-edit-foot'])>
                    @startMarker('reactive', 'e1r1k112r1', ['stateKey' => ['base'], 'type' => 'if'])
                    @if($base !== null)
                        <span @class([$__VIEW_ID__ . '-e1r1k112r1k11', 'rs-ver'])>base v@startMarker('output', 'e1r1k112r1k11o1'){{ $base['updated_at'] }}@endMarker('output', 'e1r1k112r1k11o1')</span>
                    @endif
                    @endMarker('reactive', 'e1r1k112r1')
                    <span @class([$__VIEW_ID__ . '-e1r1k1121', 'rs-spacer'])></span>
                    {{-- Bản ghi đã biến mất thì Lưu chỉ ăn 404 — chỉ còn đường tạo lại
                         hoặc bỏ nháp, hai nút đó nằm trong khối cảnh báo phía trên. --}}
                    @startMarker('reactive', 'e1r1k112r2', ['stateKey' => ['record'], 'type' => 'if'])
                    @if($record !== null)
                        <button @class([$__VIEW_ID__ . '-e1r1k112r2k11', 'rs-btn', 'rs-btn-sm', 'rs-btn-plain']) @attr(['type' => 'button'])>Huỷ</button>
                        <button @class([$__VIEW_ID__ . '-e1r1k112r2k12', 'rs-btn', 'rs-btn-sm', 'rs-btn-primary']) @attr(['type' => 'submit']) @disabled($busy)>Lưu thay đổi</button>
                    @endif
                    @endMarker('reactive', 'e1r1k112r2')
                </div>
            </form>
        @else
            @startMarker('reactive', 'e1r1k2r1', ['stateKey' => ['record'], 'type' => 'if'])
            @if($record === null)
                <div @class([$__VIEW_ID__ . '-e1r1k2r1k11', 'rs-row-view'])>
                    <span @class([$__VIEW_ID__ . '-e1r1k2r1k111', 'rs-avatar', 'rs-avatar--gone'])></span>
                    <div @class([$__VIEW_ID__ . '-e1r1k2r1k112', 'rs-row-id'])>
                        <strong @class([$__VIEW_ID__ . '-e1r1k2r1k1121'])>Bản ghi đã bị xoá</strong>
                        <span @class([$__VIEW_ID__ . '-e1r1k2r1k1122'])>Hàng này sẽ biến mất ở lần đồng bộ tới.</span>
                    </div>
                </div>
            @else
                <div @class([$__VIEW_ID__ . '-e1r1k2r1k21', 'rs-row-view'])>
                    <span @class([$__VIEW_ID__ . '-e1r1k2r1k211', 'rs-avatar', 'rs-avatar--f'=> $record['gender'] === 'female', 'rs-avatar--m'=> $record['gender'] === 'male'])></span>
                    <div @class([$__VIEW_ID__ . '-e1r1k2r1k212', 'rs-row-id'])>
                        <strong @class([$__VIEW_ID__ . '-e1r1k2r1k2121'])>@startMarker('output', 'e1r1k2r1k2121o1'){{ $record['name'] }}@endMarker('output', 'e1r1k2r1k2121o1')</strong>
                        <span @class([$__VIEW_ID__ . '-e1r1k2r1k2122'])>@startMarker('output', 'e1r1k2r1k2122o1'){{ $record['email'] }}@endMarker('output', 'e1r1k2r1k2122o1')</span>
                    </div>
                    <div @class([$__VIEW_ID__ . '-e1r1k2r1k213', 'rs-row-meta'])>
                        <span @class([$__VIEW_ID__ . '-e1r1k2r1k2131', 'rs-tag', 'rs-tag--brand'])>@startMarker('output', 'e1r1k2r1k2131o1'){{ $record['gender'] }}@endMarker('output', 'e1r1k2r1k2131o1')</span>
                        <span @class([$__VIEW_ID__ . '-e1r1k2r1k2132', 'rs-tag'])>@startMarker('output', 'e1r1k2r1k2132o1'){{ $record['birthdate'] }}@endMarker('output', 'e1r1k2r1k2132o1')</span>
                        <span @class([$__VIEW_ID__ . '-e1r1k2r1k2133', 'rs-ver'])>v@startMarker('output', 'e1r1k2r1k2133o1'){{ $record['updated_at'] }}@endMarker('output', 'e1r1k2r1k2133o1')</span>
                    </div>
                    <div @class([$__VIEW_ID__ . '-e1r1k2r1k214', 'rs-row-actions'])>
                        <button @class([$__VIEW_ID__ . '-e1r1k2r1k2141', 'rs-btn', 'rs-btn-sm', 'rs-btn-ghost']) @attr(['type' => 'button'])>Sửa</button>
                        <button @class([$__VIEW_ID__ . '-e1r1k2r1k2142', 'rs-btn', 'rs-btn-sm', 'rs-btn-danger']) @attr(['type' => 'button'])>Xoá</button>
                    </div>
                </div>
            @endif
            @endMarker('reactive', 'e1r1k2r1')
        @endif
        @endMarker('reactive', 'e1r1')

        @startMarker('reactive', 'e1r2', ['stateKey' => ['note'], 'type' => 'if'])
        @if($note !== '')
            <p @class([$__VIEW_ID__ . '-e1r2k11', 'rs-note'])>@startMarker('output', 'e1r2k11o1'){{ $note }}@endMarker('output', 'e1r2k11o1')</p>
        @endif
        @endMarker('reactive', 'e1r2')
    </article>
@endWrapper
