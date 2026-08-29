@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($activeUsecase, 0)
@wrapper
<section @class([$__VIEW_ID__ . '-e1', 'home-section']) @attr(['id' => 'usecase'])>
        <div @class([$__VIEW_ID__ . '-e11', 'section-head', 'section-head-split'])>
            <div @class([$__VIEW_ID__ . '-e111'])>
                <p @class([$__VIEW_ID__ . '-e1111', 'kicker'])><span @class([$__VIEW_ID__ . '-e11111'])>DÀNH CHO AI</span> Phù hợp và chưa phù hợp</p>
                <h2 @class([$__VIEW_ID__ . '-e1112'])>Bốn kịch bản hoàn hảo<br @class([$__VIEW_ID__ . '-e11121'])>để chọn Saola.</h2>
            </div>
            <p @class([$__VIEW_ID__ . '-e112'])>Nếu dự án của bạn đã có nền móng vững chắc với Laravel và đang tìm kiếm trải nghiệm frontend mượt mà như SPA nhưng không muốn gánh vác độ phức tạp của một hệ thống tách rời, Saola chính là lựa chọn tối ưu.</p>
        </div>
        
        <div @class([$__VIEW_ID__ . '-e12', 'usecase-tab-container'])>
            <div @class([$__VIEW_ID__ . '-e121', 'usecase-tab-list'])>
                <button @class([$__VIEW_ID__ . '-e1211', 'usecase-tab-item', 'active'=> $activeUsecase === 0])>
                    <span @class([$__VIEW_ID__ . '-e12111', 'tab-num'])>01</span>
                    <div @class([$__VIEW_ID__ . '-e12112', 'tab-content'])>
                        <h3 @class([$__VIEW_ID__ . '-e121121'])>Ứng dụng nội bộ & Admin Panel</h3>
                        <p @class([$__VIEW_ID__ . '-e121122'])>Bảng dữ liệu phức tạp, form nhiều bước, phân quyền theo vai trò. Cần tốc độ tương tác cao mà không phải xây dựng API và Frontend riêng biệt.</p>
                    </div>
                </button>
                <button @class([$__VIEW_ID__ . '-e1212', 'usecase-tab-item', 'active'=> $activeUsecase === 1])>
                    <span @class([$__VIEW_ID__ . '-e12121', 'tab-num'])>02</span>
                    <div @class([$__VIEW_ID__ . '-e12122', 'tab-content'])>
                        <h3 @class([$__VIEW_ID__ . '-e121221'])>Sản phẩm cần SEO và tương tác mượt</h3>
                        <p @class([$__VIEW_ID__ . '-e121222'])>Trang thương mại điện tử, danh mục sản phẩm, blog... Crawler đọc được HTML đầy đủ, trong khi người dùng có trải nghiệm SPA không cần tải lại trang.</p>
                    </div>
                </button>
                <button @class([$__VIEW_ID__ . '-e1213', 'usecase-tab-item', 'active'=> $activeUsecase === 2])>
                    <span @class([$__VIEW_ID__ . '-e12131', 'tab-num'])>03</span>
                    <div @class([$__VIEW_ID__ . '-e12132', 'tab-content'])>
                        <h3 @class([$__VIEW_ID__ . '-e121321'])>Nhiều nền tảng trên chung một Backend</h3>
                        <p @class([$__VIEW_ID__ . '-e121322'])>Web public, hệ thống Admin, Webview cho Mobile App chia sẻ chung Model và Logic, nhưng được phân tách an toàn ở tầng Route và View.</p>
                    </div>
                </button>
                <button @class([$__VIEW_ID__ . '-e1214', 'usecase-tab-item', 'active'=> $activeUsecase === 3])>
                    <span @class([$__VIEW_ID__ . '-e12141', 'tab-num'])>04</span>
                    <div @class([$__VIEW_ID__ . '-e12142', 'tab-content'])>
                        <h3 @class([$__VIEW_ID__ . '-e121421'])>Đội ngũ Laravel muốn nâng cấp lên SPA</h3>
                        <p @class([$__VIEW_ID__ . '-e121422'])>Giữ nguyên kiến thức về Eloquent, Middleware, Queue. Chỉ cần học thêm cú pháp View mới — không cần vật lộn với quy trình build Frontend tách biệt.</p>
                    </div>
                </button>
            </div>
            
            <div @class([$__VIEW_ID__ . '-e122', 'usecase-tab-panel'])>
                @startMarker('reactive', 'e122r1', ['stateKey' => ['activeUsecase'], 'type' => 'if'])
                @if($activeUsecase === 0)
                    <div @class([$__VIEW_ID__ . '-e122r1k11', 'usecase-mockup', 'mockup-admin'])>
                        <div @class([$__VIEW_ID__ . '-e122r1k111', 'mockup-header'])>
                            <div @class([$__VIEW_ID__ . '-e122r1k1111', 'dots'])><i @class([$__VIEW_ID__ . '-e122r1k11111'])></i><i @class([$__VIEW_ID__ . '-e122r1k11112'])></i><i @class([$__VIEW_ID__ . '-e122r1k11113'])></i></div>
                            <div @class([$__VIEW_ID__ . '-e122r1k1112', 'title'])>User Management</div>
                        </div>
                        <div @class([$__VIEW_ID__ . '-e122r1k112', 'mockup-body'])>
                            <div @class([$__VIEW_ID__ . '-e122r1k1121', 'mockup-toolbar'])>
                                <div @class([$__VIEW_ID__ . '-e122r1k11211', 'mockup-search'])>🔍 Search users...</div>
                                <div @class([$__VIEW_ID__ . '-e122r1k11212', 'mockup-btn'])>Add New</div>
                            </div>
                            <div @class([$__VIEW_ID__ . '-e122r1k1122', 'mockup-table'])>
                                <div @class([$__VIEW_ID__ . '-e122r1k11221', 'mockup-tr', 'head'])><span @class([$__VIEW_ID__ . '-e122r1k112211'])>Name</span><span @class([$__VIEW_ID__ . '-e122r1k112212'])>Role</span><span @class([$__VIEW_ID__ . '-e122r1k112213'])>Status</span><span @class([$__VIEW_ID__ . '-e122r1k112214'])>Action</span></div>
                                <div @class([$__VIEW_ID__ . '-e122r1k11222', 'mockup-tr'])><span @class([$__VIEW_ID__ . '-e122r1k112221'])>John Doe</span><span @class([$__VIEW_ID__ . '-e122r1k112222'])>Admin</span><span @class([$__VIEW_ID__ . '-e122r1k112223', 'badge', 'active'])>Active</span><span @class([$__VIEW_ID__ . '-e122r1k112224', 'action'])>Edit</span></div>
                                <div @class([$__VIEW_ID__ . '-e122r1k11223', 'mockup-tr'])><span @class([$__VIEW_ID__ . '-e122r1k112231'])>Jane Smith</span><span @class([$__VIEW_ID__ . '-e122r1k112232'])>Editor</span><span @class([$__VIEW_ID__ . '-e122r1k112233', 'badge', 'inactive'])>Inactive</span><span @class([$__VIEW_ID__ . '-e122r1k112234', 'action'])>Edit</span></div>
                                <div @class([$__VIEW_ID__ . '-e122r1k11224', 'mockup-tr'])><span @class([$__VIEW_ID__ . '-e122r1k112241'])>Mike Ross</span><span @class([$__VIEW_ID__ . '-e122r1k112242'])>User</span><span @class([$__VIEW_ID__ . '-e122r1k112243', 'badge', 'active'])>Active</span><span @class([$__VIEW_ID__ . '-e122r1k112244', 'action'])>Edit</span></div>
                            </div>
                        </div>
                    </div>
                @endif
                @endMarker('reactive', 'e122r1')
                
                @startMarker('reactive', 'e122r2', ['stateKey' => ['activeUsecase'], 'type' => 'if'])
                @if($activeUsecase === 1)
                    <div @class([$__VIEW_ID__ . '-e122r2k11', 'usecase-mockup', 'mockup-shop'])>
                        <div @class([$__VIEW_ID__ . '-e122r2k111', 'mockup-header'])>
                            <div @class([$__VIEW_ID__ . '-e122r2k1111', 'dots'])><i @class([$__VIEW_ID__ . '-e122r2k11111'])></i><i @class([$__VIEW_ID__ . '-e122r2k11112'])></i><i @class([$__VIEW_ID__ . '-e122r2k11113'])></i></div>
                            <div @class([$__VIEW_ID__ . '-e122r2k1112', 'title'])>Shop / Laptops</div>
                        </div>
                        <div @class([$__VIEW_ID__ . '-e122r2k112', 'mockup-body', 'layout-split'])>
                            <div @class([$__VIEW_ID__ . '-e122r2k1121', 'mockup-sidebar'])>
                                <b @class([$__VIEW_ID__ . '-e122r2k11211'])>Filters</b>
                                <ul @class([$__VIEW_ID__ . '-e122r2k11212'])>
                                    <li @class([$__VIEW_ID__ . '-e122r2k112121'])><input @class([$__VIEW_ID__ . '-e122r2k1121211']) @attr(['type' => 'checkbox', 'checked' => true])> Apple (12)</li>
                                    <li @class([$__VIEW_ID__ . '-e122r2k112122'])><input @class([$__VIEW_ID__ . '-e122r2k1121221']) @attr(['type' => 'checkbox'])> Dell (8)</li>
                                    <li @class([$__VIEW_ID__ . '-e122r2k112123'])><input @class([$__VIEW_ID__ . '-e122r2k1121231']) @attr(['type' => 'checkbox'])> HP (15)</li>
                                </ul>
                                <b @class([$__VIEW_ID__ . '-e122r2k11213'])>Price</b>
                                <div @class([$__VIEW_ID__ . '-e122r2k11214', 'mockup-range'])></div>
                            </div>
                            <div @class([$__VIEW_ID__ . '-e122r2k1122', 'mockup-grid'])>
                                <div @class([$__VIEW_ID__ . '-e122r2k11221', 'mockup-product'])>
                                    <div @class([$__VIEW_ID__ . '-e122r2k112211', 'img'])></div>
                                    <div @class([$__VIEW_ID__ . '-e122r2k112212', 'name'])>MacBook Pro 16"</div>
                                    <div @class([$__VIEW_ID__ . '-e122r2k112213', 'price'])>$2,499</div>
                                </div>
                                <div @class([$__VIEW_ID__ . '-e122r2k11222', 'mockup-product'])>
                                    <div @class([$__VIEW_ID__ . '-e122r2k112221', 'img'])></div>
                                    <div @class([$__VIEW_ID__ . '-e122r2k112222', 'name'])>MacBook Air M2</div>
                                    <div @class([$__VIEW_ID__ . '-e122r2k112223', 'price'])>$1,199</div>
                                </div>
                            </div>
                        </div>
                    </div>
                @endif
                @endMarker('reactive', 'e122r2')
                
                @startMarker('reactive', 'e122r3', ['stateKey' => ['activeUsecase'], 'type' => 'if'])
                @if($activeUsecase === 2)
                    <div @class([$__VIEW_ID__ . '-e122r3k11', 'usecase-mockup', 'mockup-code'])>
                        <div @class([$__VIEW_ID__ . '-e122r3k111', 'mockup-header'])>
                            <div @class([$__VIEW_ID__ . '-e122r3k1111', 'dots'])><i @class([$__VIEW_ID__ . '-e122r3k11111'])></i><i @class([$__VIEW_ID__ . '-e122r3k11112'])></i><i @class([$__VIEW_ID__ . '-e122r3k11113'])></i></div>
                            <div @class([$__VIEW_ID__ . '-e122r3k1112', 'title'])>Project Structure</div>
                        </div>
                        <div @class([$__VIEW_ID__ . '-e122r3k112', 'mockup-body'])>
                            <ul @class([$__VIEW_ID__ . '-e122r3k1121', 'tree'])>
                                <li @class([$__VIEW_ID__ . '-e122r3k11211'])>📁 <b @class([$__VIEW_ID__ . '-e122r3k112111'])>app</b>
                                    <ul @class([$__VIEW_ID__ . '-e122r3k112112'])>
                                        <li @class([$__VIEW_ID__ . '-e122r3k1121121'])>📁 <b @class([$__VIEW_ID__ . '-e122r3k11211211'])>Models</b> <i @class([$__VIEW_ID__ . '-e122r3k11211212'])>(Shared)</i>
                                            <ul @class([$__VIEW_ID__ . '-e122r3k11211213'])><li @class([$__VIEW_ID__ . '-e122r3k112112131'])>📄 User.php</li><li @class([$__VIEW_ID__ . '-e122r3k112112132'])>📄 Order.php</li></ul>
                                        </li>
                                    </ul>
                                </li>
                                <li @class([$__VIEW_ID__ . '-e122r3k11212'])>📁 <b @class([$__VIEW_ID__ . '-e122r3k112121'])>routes</b>
                                    <ul @class([$__VIEW_ID__ . '-e122r3k112122'])>
                                        <li @class([$__VIEW_ID__ . '-e122r3k1121221'])>📄 web.php <i @class([$__VIEW_ID__ . '-e122r3k11212211'])>(Public site)</i></li>
                                        <li @class([$__VIEW_ID__ . '-e122r3k1121222'])>📄 admin.php <i @class([$__VIEW_ID__ . '-e122r3k11212221'])>(Admin panel)</i></li>
                                        <li @class([$__VIEW_ID__ . '-e122r3k1121223'])>📄 api.php <i @class([$__VIEW_ID__ . '-e122r3k11212231'])>(Mobile app)</i></li>
                                    </ul>
                                </li>
                                <li @class([$__VIEW_ID__ . '-e122r3k11213'])>📁 <b @class([$__VIEW_ID__ . '-e122r3k112131'])>resources/saola</b>
                                    <ul @class([$__VIEW_ID__ . '-e122r3k112132'])>
                                        <li @class([$__VIEW_ID__ . '-e122r3k1121321'])>📁 web <i @class([$__VIEW_ID__ . '-e122r3k11213211'])>(Bundle 1)</i></li>
                                        <li @class([$__VIEW_ID__ . '-e122r3k1121322'])>📁 admin <i @class([$__VIEW_ID__ . '-e122r3k11213221'])>(Bundle 2)</i></li>
                                        <li @class([$__VIEW_ID__ . '-e122r3k1121323'])>📁 mobile <i @class([$__VIEW_ID__ . '-e122r3k11213231'])>(Bundle 3)</i></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                @endif
                @endMarker('reactive', 'e122r3')
                
                @startMarker('reactive', 'e122r4', ['stateKey' => ['activeUsecase'], 'type' => 'if'])
                @if($activeUsecase === 3)
                    <div @class([$__VIEW_ID__ . '-e122r4k11', 'usecase-mockup', 'mockup-code'])>
                        <div @class([$__VIEW_ID__ . '-e122r4k111', 'mockup-header'])>
                            <div @class([$__VIEW_ID__ . '-e122r4k1111', 'dots'])><i @class([$__VIEW_ID__ . '-e122r4k11111'])></i><i @class([$__VIEW_ID__ . '-e122r4k11112'])></i><i @class([$__VIEW_ID__ . '-e122r4k11113'])></i></div>
                            <div @class([$__VIEW_ID__ . '-e122r4k1112', 'title'])>counter.sao</div>
                        </div>
                        <div @class([$__VIEW_ID__ . '-e122r4k112', 'mockup-body'])>
<div @class([$__VIEW_ID__ . '-e122r4k1121', 'mockup-code-lines']) @attr(['style' => 'font-family: monospace; font-size: 13px; line-height: 1.6;'])>
    <div @class([$__VIEW_ID__ . '-e122r4k11211']) @attr(['style' => 'display: block;'])><span @class([$__VIEW_ID__ . '-e122r4k112111', 'token', 'keyword'])><span @class([$__VIEW_ID__ . '-e122r4k1121111'])>@</span>states</span><span @class([$__VIEW_ID__ . '-e122r4k112112', 'token', 'punctuation'])>({</span><span @class([$__VIEW_ID__ . '-e122r4k112113', 'token', 'property']) @attr(['style' => 'margin-left: 0.5em;'])>count</span><span @class([$__VIEW_ID__ . '-e122r4k112114', 'token', 'punctuation'])>:</span><span @class([$__VIEW_ID__ . '-e122r4k112115', 'token', 'number']) @attr(['style' => 'margin-left: 0.5em;'])>0</span><span @class([$__VIEW_ID__ . '-e122r4k112116', 'token', 'punctuation']) @attr(['style' => 'margin-left: 0.5em;'])>})</span></div>
    <div @class([$__VIEW_ID__ . '-e122r4k11212']) @attr(['style' => 'display: block; min-height: 1.6em;'])></div>
    <div @class([$__VIEW_ID__ . '-e122r4k11213']) @attr(['style' => 'display: block;'])><span @class([$__VIEW_ID__ . '-e122r4k112131', 'token', 'tag'])>&lt;template&gt;</span></div>
    <div @class([$__VIEW_ID__ . '-e122r4k11214']) @attr(['style' => 'display: block; padding-left: 2em;'])><span @class([$__VIEW_ID__ . '-e122r4k112141', 'token', 'tag'])>&lt;div&gt;</span></div>
    <div @class([$__VIEW_ID__ . '-e122r4k11215']) @attr(['style' => 'display: block; padding-left: 4em;'])><span @class([$__VIEW_ID__ . '-e122r4k112151', 'token', 'tag'])>&lt;h3&gt;</span>Count:<span @class([$__VIEW_ID__ . '-e122r4k112152', 'token', 'punctuation']) @attr(['style' => 'margin-left: 0.5em;'])><span @class([$__VIEW_ID__ . '-e122r4k1121521'])>{</span>{</span><span @class([$__VIEW_ID__ . '-e122r4k112153', 'token', 'property']) @attr(['style' => 'margin-left: 0.5em;'])>count</span><span @class([$__VIEW_ID__ . '-e122r4k112154', 'token', 'punctuation']) @attr(['style' => 'margin-left: 0.5em;'])>}<span @class([$__VIEW_ID__ . '-e122r4k1121541'])>}</span></span><span @class([$__VIEW_ID__ . '-e122r4k112155', 'token', 'tag'])>&lt;/h3&gt;</span></div>
    <div @class([$__VIEW_ID__ . '-e122r4k11216']) @attr(['style' => 'display: block; padding-left: 4em;'])><span @class([$__VIEW_ID__ . '-e122r4k112161', 'token', 'tag'])>&lt;button</span><span @class([$__VIEW_ID__ . '-e122r4k112162', 'token', 'attr-name']) @attr(['style' => 'margin-left: 0.5em;'])><span @class([$__VIEW_ID__ . '-e122r4k1121621'])>@</span>click</span><span @class([$__VIEW_ID__ . '-e122r4k112163', 'token', 'punctuation'])>(</span><span @class([$__VIEW_ID__ . '-e122r4k112164', 'token', 'function'])>setCount</span><span @class([$__VIEW_ID__ . '-e122r4k112165', 'token', 'punctuation'])>(</span><span @class([$__VIEW_ID__ . '-e122r4k112166', 'token', 'property'])>count</span><span @class([$__VIEW_ID__ . '-e122r4k112167', 'token', 'operator']) @attr(['style' => 'margin-left: 0.5em;'])>+</span><span @class([$__VIEW_ID__ . '-e122r4k112168', 'token', 'number']) @attr(['style' => 'margin-left: 0.5em;'])>1</span><span @class([$__VIEW_ID__ . '-e122r4k112169', 'token', 'punctuation'])>))</span><span @class([$__VIEW_ID__ . '-e122r4k11216e10_', 'token', 'tag'])>&gt;</span>+<span @class([$__VIEW_ID__ . '-e122r4k11216e11_', 'token', 'tag'])>&lt;/button&gt;</span></div>
    <div @class([$__VIEW_ID__ . '-e122r4k11217']) @attr(['style' => 'display: block; min-height: 1.6em;'])></div>
    <div @class([$__VIEW_ID__ . '-e122r4k11218']) @attr(['style' => 'display: block; padding-left: 4em;'])><span @class([$__VIEW_ID__ . '-e122r4k112181', 'token', 'keyword'])><span @class([$__VIEW_ID__ . '-e122r4k1121811'])>@</span>if</span><span @class([$__VIEW_ID__ . '-e122r4k112182', 'token', 'punctuation'])>(</span><span @class([$__VIEW_ID__ . '-e122r4k112183', 'token', 'property'])>count</span><span @class([$__VIEW_ID__ . '-e122r4k112184', 'token', 'operator']) @attr(['style' => 'margin-left: 0.5em;'])>></span><span @class([$__VIEW_ID__ . '-e122r4k112185', 'token', 'number']) @attr(['style' => 'margin-left: 0.5em;'])>10</span><span @class([$__VIEW_ID__ . '-e122r4k112186', 'token', 'punctuation'])>)</span></div>
    <div @class([$__VIEW_ID__ . '-e122r4k11219']) @attr(['style' => 'display: block; padding-left: 6em;'])><span @class([$__VIEW_ID__ . '-e122r4k112191', 'token', 'tag'])>&lt;p&gt;</span>You clicked many times!<span @class([$__VIEW_ID__ . '-e122r4k112192', 'token', 'tag'])>&lt;/p&gt;</span></div>
    <div @class([$__VIEW_ID__ . '-e122r4k1121e10_']) @attr(['style' => 'display: block; padding-left: 4em;'])><span @class([$__VIEW_ID__ . '-e122r4k1121e10_1', 'token', 'keyword'])><span @class([$__VIEW_ID__ . '-e122r4k1121e10_11'])>@</span>endif</span></div>
    <div @class([$__VIEW_ID__ . '-e122r4k1121e11_']) @attr(['style' => 'display: block; padding-left: 2em;'])><span @class([$__VIEW_ID__ . '-e122r4k1121e11_1', 'token', 'tag'])>&lt;/div&gt;</span></div>
    <div @class([$__VIEW_ID__ . '-e122r4k1121e12_']) @attr(['style' => 'display: block;'])><span @class([$__VIEW_ID__ . '-e122r4k1121e12_1', 'token', 'tag'])>&lt;/template&gt;</span></div>
</div>
                        </div>
                    </div>
                @endif
                @endMarker('reactive', 'e122r4')
            </div>
        </div>

        <div @class([$__VIEW_ID__ . '-e13', 'ov-note', 'ov-note--warn']) @attr(['style' => 'margin-top: 30px;'])>
            <strong @class([$__VIEW_ID__ . '-e131'])>Chưa phù hợp khi:</strong> Dự án yêu cầu hệ sinh thái component UI bên thứ ba đồ sộ có sẵn, hoặc team đã quá quen thuộc với React/Vue cùng các công cụ đi kèm. Trong những trường hợp này, chi phí chuyển đổi sang Saola có thể lớn hơn những lợi ích hệ thống mang lại.
        </div>
    </section>
@endWrapper
