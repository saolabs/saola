@exec($__ONE_COMPONENT_REGISTRY__ = ['code-block' => 'web.components.code-block']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

<?php if(!array_key_exists('users', get_defined_vars())) $users = [
        [ 'id'=> 1, 'name'=> 'Nguyễn Văn An', 'email'=> 'an.nguyen@saola.dev', 'status'=> 'active' ],
        [ 'id'=> 2, 'name'=> 'Trần Thị Bình', 'email'=> 'binh.tran@saola.dev', 'status'=> 'inactive' ],
        [ 'id'=> 3, 'name'=> 'Lê Hoàng Cường', 'email'=> 'cuong.le@saola.dev', 'status'=> 'active' ]
    ]; ?>
@useState($userList, $users)
@useState($showForm, false)
@useState($isEdit, false)
@useState($formId, 0)
@useState($formName, '')
@useState($formEmail, '')
@useState($formStatus, 'active')
@useState($formError, '')
@useState($nextId, 4)
@extends($__layout__ . 'lab')

    @block('main')
        <p @class([$__VIEW_ID__ . '-Bmain1', 'sb5479736', 'kicker'])><span @class([$__VIEW_ID__ . '-Bmain11', 'sb5479736'])>ỨNG DỤNG THẬT · MODAL EDITOR</span></p>
        <h1 @class([$__VIEW_ID__ . '-Bmain2', 'sb5479736'])>Modal Editor &amp; Quản lý Item.</h1>
        <p @class([$__VIEW_ID__ . '-Bmain3', 'sb5479736', 'lab-lead'])>
            Quản lý danh sách thực tế với hộp thoại modal popup, liên kết dữ liệu hai chiều qua <code @class([$__VIEW_ID__ . '-Bmain31', 'sb5479736'])>&#64;bind</code>,
            thực hiện thêm mới, cập nhật, xoá và đảo thứ tự tức thì trên DOM với reconciliation <code @class([$__VIEW_ID__ . '-Bmain32', 'sb5479736'])>&#64;key</code>.
        </p>
        <div @class([$__VIEW_ID__ . '-Bmain4', 'sb5479736', 'lab-toolbar', 'editor-toolbar'])>
            <button @class([$__VIEW_ID__ . '-Bmain41', 'sb5479736', 'button', 'button-primary'])>
                <span @class([$__VIEW_ID__ . '-Bmain411', 'sb5479736'])>＋ Thêm người dùng</span>
            </button>
            <button @class([$__VIEW_ID__ . '-Bmain42', 'sb5479736', 'button'])>
                <span @class([$__VIEW_ID__ . '-Bmain421', 'sb5479736'])>⇅ Đảo thứ tự</span>
            </button>
            <button @class([$__VIEW_ID__ . '-Bmain43', 'sb5479736', 'button'])>
                <span @class([$__VIEW_ID__ . '-Bmain431', 'sb5479736'])>↺ Đặt lại</span>
            </button>
            <div @class([$__VIEW_ID__ . '-Bmain44', 'sb5479736', 'editor-pill-group'])>
                <span @class([$__VIEW_ID__ . '-Bmain441', 'sb5479736', 'editor-pill'])>Tổng: <strong @class([$__VIEW_ID__ . '-Bmain4411', 'sb5479736'])>@startMarker('output', 'Bmain4411o1'){{ count($userList) }}@endMarker('output', 'Bmain4411o1')</strong></span>
            </div>
        </div>

        @startMarker('reactive', 'Bmainr1', ['stateKey' => ['showForm'], 'type' => 'if'])
        @if($showForm)
            <div @class([$__VIEW_ID__ . '-Bmainr1k11', 'sb5479736', 'modal-overlay'])></div>
            <div @class([$__VIEW_ID__ . '-Bmainr1k12', 'sb5479736', 'modal-dialog']) @attr(['role' => 'dialog', 'aria-modal' => 'true'])>
                <div @class([$__VIEW_ID__ . '-Bmainr1k121', 'sb5479736', 'modal-content'])>
                    <div @class([$__VIEW_ID__ . '-Bmainr1k1211', 'sb5479736', 'modal-header'])>
                        <h2 @class([$__VIEW_ID__ . '-Bmainr1k12111', 'sb5479736'])>@startMarker('output', 'Bmainr1k12111o1'){{ $isEdit ? 'Chỉnh sửa' : 'Thêm mới' }}@endMarker('output', 'Bmainr1k12111o1') người dùng</h2>
                        <button @class([$__VIEW_ID__ . '-Bmainr1k12112', 'sb5479736', 'modal-close-btn']) @attr(['aria-label' => 'Đóng'])>&times;</button>
                    </div>

                    @startMarker('reactive', 'Bmainr1k121r1', ['stateKey' => ['formError'], 'type' => 'if'])
                    @if($formError !== '')
                        <div @class([$__VIEW_ID__ . '-Bmainr1k121r1k11', 'sb5479736', 'modal-alert']) @attr(['role' => 'alert'])>
                            <span @class([$__VIEW_ID__ . '-Bmainr1k121r1k111', 'sb5479736'])>⚠️</span> @startMarker('output', 'Bmainr1k121r1k11o1'){{ $formError }}@endMarker('output', 'Bmainr1k121r1k11o1')
                        </div>
                    @endif
                    @endMarker('reactive', 'Bmainr1k121r1')

                    <div @class([$__VIEW_ID__ . '-Bmainr1k1212', 'sb5479736', 'modal-body'])>
                        <form @class([$__VIEW_ID__ . '-Bmainr1k12121', 'sb5479736', 'modal-form'])>
                            <div @class([$__VIEW_ID__ . '-Bmainr1k121211', 'sb5479736', 'form-group'])>
                                <label @class([$__VIEW_ID__ . '-Bmainr1k1212111', 'sb5479736']) @attr(['for' => 'name'])>Họ và tên <span @class([$__VIEW_ID__ . '-Bmainr1k12121111', 'sb5479736', 'text-danger'])>*</span></label>
                                <input @class([$__VIEW_ID__ . '-Bmainr1k1212112', 'sb5479736']) @attr(['type' => 'text', 'id' => 'name', 'placeholder' => 'Ví dụ: Nguyễn Văn An']) @bind($formName) />
                            </div>

                            <div @class([$__VIEW_ID__ . '-Bmainr1k121212', 'sb5479736', 'form-group'])>
                                <label @class([$__VIEW_ID__ . '-Bmainr1k1212121', 'sb5479736']) @attr(['for' => 'email'])>Địa chỉ Email <span @class([$__VIEW_ID__ . '-Bmainr1k12121211', 'sb5479736', 'text-danger'])>*</span></label>
                                <input @class([$__VIEW_ID__ . '-Bmainr1k1212122', 'sb5479736']) @attr(['type' => 'email', 'id' => 'email', 'placeholder' => 'Ví dụ: an.nguyen@saola.dev']) @bind($formEmail) />
                            </div>

                            <div @class([$__VIEW_ID__ . '-Bmainr1k121213', 'sb5479736', 'form-group'])>
                                <label @class([$__VIEW_ID__ . '-Bmainr1k1212131', 'sb5479736']) @attr(['for' => 'status'])>Trạng thái tài khoản</label>
                                <select @class([$__VIEW_ID__ . '-Bmainr1k1212132', 'sb5479736']) @attr(['id' => 'status']) @bind($formStatus)>
                                    <option @class([$__VIEW_ID__ . '-Bmainr1k12121321', 'sb5479736']) @attr(['value' => 'active'])>Hoạt động (Active)</option>
                                    <option @class([$__VIEW_ID__ . '-Bmainr1k12121322', 'sb5479736']) @attr(['value' => 'inactive'])>Tạm khoá (Inactive)</option>
                                </select>
                            </div>

                            <div @class([$__VIEW_ID__ . '-Bmainr1k121214', 'sb5479736', 'modal-footer'])>
                                <button @class([$__VIEW_ID__ . '-Bmainr1k1212141', 'sb5479736', 'button']) @attr(['type' => 'button'])>Huỷ bỏ</button>
                                <button @class([$__VIEW_ID__ . '-Bmainr1k1212142', 'sb5479736', 'button', 'button-primary']) @attr(['type' => 'submit'])>@startMarker('output', 'Bmainr1k1212142o1'){{ $isEdit ? 'Cập nhật' : 'Lưu người dùng' }}@endMarker('output', 'Bmainr1k1212142o1')</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        @endif
        @endMarker('reactive', 'Bmainr1')

        <div @class([$__VIEW_ID__ . '-Bmain5', 'sb5479736', 'user-list'])>
            @startMarker('reactive', 'Bmain5l1', ['stateKey' => ['userList'], 'type' => 'foreach'])
            @foreach($userList as $user)
                <div @class([$__VIEW_ID__ . "-Bmain5l11-{$user['id']}", 'sb5479736', 'user-card'])>
                    <div @class([$__VIEW_ID__ . "-Bmain5l111-{$user['id']}", 'sb5479736', 'user-card__lead'])>
                        <div @class([$__VIEW_ID__ . "-Bmain5l1111-{$user['id']}", 'sb5479736', 'user-avatar'])>
                            <svg @class([$__VIEW_ID__ . "-Bmain5l11111-{$user['id']}", 'sb5479736']) @attr(['viewBox' => '0 0 24 24', 'width' => '20', 'height' => '20', 'fill' => 'none', 'stroke' => 'currentColor', 'stroke-width' => '2', 'stroke-linecap' => 'round', 'stroke-linejoin' => 'round'])>
                                <path @class([$__VIEW_ID__ . "-Bmain5l111111-{$user['id']}", 'sb5479736']) @attr(['d' => 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'])></path>
                                <circle @class([$__VIEW_ID__ . "-Bmain5l111112-{$user['id']}", 'sb5479736']) @attr(['cx' => '12', 'cy' => '7', 'r' => '4'])></circle>
                            </svg>
                        </div>
                        <div @class([$__VIEW_ID__ . "-Bmain5l1112-{$user['id']}", 'sb5479736', 'user-info'])>
                            <div @class([$__VIEW_ID__ . "-Bmain5l11121-{$user['id']}", 'sb5479736', 'user-title-row'])>
                                <strong @class([$__VIEW_ID__ . "-Bmain5l111211-{$user['id']}", 'sb5479736', 'user-name'])>@startMarker('output', "Bmain5l111211o1-{$user['id']}"){{ $user['name'] }}@endMarker('output', "Bmain5l111211o1-{$user['id']}")</strong>
                                <span @class([$__VIEW_ID__ . "-Bmain5l111212-{$user['id']}", 'sb5479736', 'user-id'])>#@startMarker('output', "Bmain5l111212o1-{$user['id']}"){{ $user['id'] }}@endMarker('output', "Bmain5l111212o1-{$user['id']}")</span>
                            </div>
                            <div @class([$__VIEW_ID__ . "-Bmain5l11122-{$user['id']}", 'sb5479736', 'user-email'])>@startMarker('output', "Bmain5l11122o1-{$user['id']}"){{ $user['email'] }}@endMarker('output', "Bmain5l11122o1-{$user['id']}")</div>
                        </div>
                    </div>
                    <div @class([$__VIEW_ID__ . "-Bmain5l112-{$user['id']}", 'sb5479736', 'user-card__tail'])>
                        <span @class([$__VIEW_ID__ . "-Bmain5l1121-{$user['id']}", 'sb5479736', 'status-badge', 'status-active'=> $user['status'] === 'active', 'status-inactive'=> $user['status'] !== 'active'])>
                            @startMarker('output', "Bmain5l1121o1-{$user['id']}"){{ $user['status'] === 'active' ? '● Hoạt động' : '○ Tạm khoá' }}@endMarker('output', "Bmain5l1121o1-{$user['id']}")
                        </span>
                        <div @class([$__VIEW_ID__ . "-Bmain5l1122-{$user['id']}", 'sb5479736', 'user-card__actions'])>
                            <button @class([$__VIEW_ID__ . "-Bmain5l11221-{$user['id']}", 'sb5479736', 'btn-action', 'btn-edit']) @attr(['title' => 'Chỉnh sửa'])>
                                <span @class([$__VIEW_ID__ . "-Bmain5l112211-{$user['id']}", 'sb5479736'])>Sửa</span>
                            </button>
                            <button @class([$__VIEW_ID__ . "-Bmain5l11222-{$user['id']}", 'sb5479736', 'btn-action', 'btn-delete']) @attr(['title' => 'Xoá'])>
                                <span @class([$__VIEW_ID__ . "-Bmain5l112221-{$user['id']}", 'sb5479736'])>Xoá</span>
                            </button>
                        </div>
                    </div>
                </div>
            @endforeach
            @endMarker('reactive', 'Bmain5l1')
        </div>

        @startMarker('reactive', 'Bmainr2', ['stateKey' => ['userList'], 'type' => 'if'])
        @if(count($userList) === 0)
            <div @class([$__VIEW_ID__ . '-Bmainr2k11', 'sb5479736', 'empty-state'])>
                <div @class([$__VIEW_ID__ . '-Bmainr2k111', 'sb5479736', 'empty-icon'])>👥</div>
                <h3 @class([$__VIEW_ID__ . '-Bmainr2k112', 'sb5479736'])>Chưa có người dùng nào</h3>
                <p @class([$__VIEW_ID__ . '-Bmainr2k113', 'sb5479736'])>Danh sách hiện đang trống. Hãy thêm người dùng mới hoặc bấm đặt lại.</p>
                <button @class([$__VIEW_ID__ . '-Bmainr2k114', 'sb5479736', 'button', 'button-primary'])>＋ Thêm người dùng</button>
            </div>
        @endif
        @endMarker('reactive', 'Bmainr2')
    @endblock

    @block('aside')
        <h2 @class([$__VIEW_ID__ . '-Baside1', 'sb5479736'])>Cơ chế hoạt động của Modal &amp; State.</h2>
        <ul @class([$__VIEW_ID__ . '-Baside2', 'sb5479736', 'check-list'])>
            <li @class([$__VIEW_ID__ . '-Baside21', 'sb5479736'])><strong @class([$__VIEW_ID__ . '-Baside211', 'sb5479736'])>2-Way Binding phẳng (<code @class([$__VIEW_ID__ . '-Baside2111', 'sb5479736'])>&#64;bind</code>):</strong> Ràng buộc trực tiếp với getter/setter của StateManager trên tầng khoá phẳng (<code @class([$__VIEW_ID__ . '-Baside212', 'sb5479736'])>formName</code>, <code @class([$__VIEW_ID__ . '-Baside213', 'sb5479736'])>formEmail</code>, <code @class([$__VIEW_ID__ . '-Baside214', 'sb5479736'])>formStatus</code>), giúp dữ liệu input và state đồng bộ tức thì.</li>
            <li @class([$__VIEW_ID__ . '-Baside22', 'sb5479736'])><strong @class([$__VIEW_ID__ . '-Baside221', 'sb5479736'])>Reactivity Modal với <code @class([$__VIEW_ID__ . '-Baside2211', 'sb5479736'])>&#64;if</code>:</strong> Modal được điều khiển bởi state boolean <code @class([$__VIEW_ID__ . '-Baside222', 'sb5479736'])>showForm</code>; chỉ vùng marker của modal được mount/unmount khi trạng thái thay đổi.</li>
            <li @class([$__VIEW_ID__ . '-Baside23', 'sb5479736'])><strong @class([$__VIEW_ID__ . '-Baside231', 'sb5479736'])>Danh sách Reconciliation (<code @class([$__VIEW_ID__ . '-Baside2311', 'sb5479736'])>&#64;foreach + &#64;key</code>):</strong> Giúp theo dõi danh tính từng dòng qua khoá <code @class([$__VIEW_ID__ . '-Baside232', 'sb5479736'])>user['id']</code>, bảo toàn node DOM khi thêm, sửa hoặc đảo thứ tự thay vì vẽ lại toàn bộ mảng.</li>
            <li @class([$__VIEW_ID__ . '-Baside24', 'sb5479736'])><strong @class([$__VIEW_ID__ . '-Baside241', 'sb5479736'])>Parity SSR và CSR:</strong> Cấu trúc view đồng bộ hoàn toàn giữa đầu ra Blade template (PHP) và TypeScript runtime (Client).</li>
        </ul>
        <p @class([$__VIEW_ID__ . '-Baside3', 'sb5479736', 'lab-note'])>
            Khi sử dụng form trong modal, khuyến nghị gán flat state thay vì object lồng nhau để tận dụng tối đa cơ chế setter tự động và subscriptions riêng biệt của Saola StateManager.
        </p>
    @endblock

    @block('source')
        <h2 @class([$__VIEW_ID__ . '-Bsource1', 'sb5479736', 'lab-source-title'])>Code của demo này</h2>
        <p @class([$__VIEW_ID__ . '-Bsource2', 'sb5479736', 'lab-source-note'])>Props vào, state riêng của instance, form sửa tại chỗ.</p>
        @startMarker('component', 'Bsourcec1')
        @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-block'].'_0'))
@verbatim
&#64;props({ users: [] }: { users: UserItem[] })

&#64;states({
    userList: users,
    showForm: false,
    formName: ''
})

&lt;template&gt;
    &#64;foreach(userList as user)
        &#64;key(user['id'])
        &lt;tr&gt;
            &lt;td&gt;{{ user['name'] }}&lt;/td&gt;
            &lt;td&gt;&lt;button &#64;click(showEditForm(user))&gt;Sửa&lt;/button&gt;&lt;/td&gt;
        &lt;/tr&gt;
    &#64;endforeach

    &#64;if(showForm)
        &lt;form &#64;submit.prevent(save())&gt;
            &lt;input type="text" &#64;bind(formName)&gt;
        &lt;/form&gt;
    &#64;endif
&lt;/template&gt;
@endverbatim
@exec($__env->stopSection())
@exec($__code_block__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-block'].'_0'))
@include('web.components.code-block', ['lang' => "sao", '__ONE_CHILDREN_CONTENT__' => $__code_block__0_content])
@endMarker('component', 'Bsourcec1')
    @endblock
