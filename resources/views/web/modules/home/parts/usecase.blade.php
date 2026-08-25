@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($activeUsecase, 0)
@wrapper
<section @class([$__VIEW_ID__ . '-bbcd3398', 'home-section']) @attr(['id' => 'usecase'])>
        <div @class([$__VIEW_ID__ . '-88b70a58', 'section-head', 'section-head-split'])>
            <div @class([$__VIEW_ID__ . '-4f95a176'])>
                <p @class([$__VIEW_ID__ . '-dd8c47b3', 'kicker'])><span @class([$__VIEW_ID__ . '-d0f3467d'])>DÀNH CHO AI</span> Hợp và chưa hợp</p>
                <h2 @class([$__VIEW_ID__ . '-3f75a3fd'])>Saola hợp nhất<br @class([$__VIEW_ID__ . '-d78bb666'])>với bốn tình huống này.</h2>
            </div>
            <p @class([$__VIEW_ID__ . '-a485d755'])>Nếu đội bạn đã đứng vững trên Laravel và đang cân nhắc thêm một frontend riêng, đây đúng là chỗ Saola tiết kiệm nhiều nhất.</p>
        </div>
        
        <div @class([$__VIEW_ID__ . '-b545b1d4', 'usecase-tab-container'])>
            <div @class([$__VIEW_ID__ . '-7a4da8ba', 'usecase-tab-list'])>
                <button @class([$__VIEW_ID__ . '-c15321c6', 'usecase-tab-item', 'active'=> $activeUsecase === 0])>
                    <span @class([$__VIEW_ID__ . '-8a519fb2', 'tab-num'])>01</span>
                    <div @class([$__VIEW_ID__ . '-16d5bbfd', 'tab-content'])>
                        <h3 @class([$__VIEW_ID__ . '-08935942'])>Ứng dụng nội bộ & admin panel</h3>
                        <p @class([$__VIEW_ID__ . '-25195ca5'])>Bảng dữ liệu, form nhiều bước, phân quyền theo vai trò. Cần tương tác mượt nhưng không cần đánh đổi bằng một frontend tách rời.</p>
                    </div>
                </button>
                <button @class([$__VIEW_ID__ . '-49064955', 'usecase-tab-item', 'active'=> $activeUsecase === 1])>
                    <span @class([$__VIEW_ID__ . '-87dc84e8', 'tab-num'])>02</span>
                    <div @class([$__VIEW_ID__ . '-8895af15', 'tab-content'])>
                        <h3 @class([$__VIEW_ID__ . '-2b0685e2'])>Sản phẩm cần cả SEO lẫn tương tác</h3>
                        <p @class([$__VIEW_ID__ . '-5b9468e7'])>Trang danh mục, chi tiết sản phẩm, blog có bộ lọc. Crawler nhận HTML đầy đủ; người dùng nhận trải nghiệm không tải lại trang.</p>
                    </div>
                </button>
                <button @class([$__VIEW_ID__ . '-dd101095', 'usecase-tab-item', 'active'=> $activeUsecase === 2])>
                    <span @class([$__VIEW_ID__ . '-5b68264c', 'tab-num'])>03</span>
                    <div @class([$__VIEW_ID__ . '-ea51b5a3', 'tab-content'])>
                        <h3 @class([$__VIEW_ID__ . '-c54f9245'])>Nhiều mặt tiền trên một backend</h3>
                        <p @class([$__VIEW_ID__ . '-b2af0475'])>Web công khai, admin, webview mobile và api dùng chung model, policy và service layer nhưng tách route, middleware lẫn bundle.</p>
                    </div>
                </button>
                <button @class([$__VIEW_ID__ . '-19fc2e6c', 'usecase-tab-item', 'active'=> $activeUsecase === 3])>
                    <span @class([$__VIEW_ID__ . '-ea5e325f', 'tab-num'])>04</span>
                    <div @class([$__VIEW_ID__ . '-f536b2ed', 'tab-content'])>
                        <h3 @class([$__VIEW_ID__ . '-2ce36924'])>Đội Laravel muốn SPA mà không đổi nghề</h3>
                        <p @class([$__VIEW_ID__ . '-6c2eca8e'])>Eloquent, middleware, policy, queue giữ nguyên. Phần mới cần học là cú pháp view và cách state chảy — không phải một hệ sinh thái build khác.</p>
                    </div>
                </button>
            </div>
            
            <div @class([$__VIEW_ID__ . '-b9e7f621', 'usecase-tab-panel'])>
                @startMarker('reactive', 'b1e07ada', ['stateKey' => ['activeUsecase'], 'type' => 'if'])
                @if($activeUsecase === 0)
                    <div @class([$__VIEW_ID__ . '-5b89913d', 'usecase-mockup', 'mockup-admin'])>
                        <div @class([$__VIEW_ID__ . '-13d8c77e', 'mockup-header'])>
                            <div @class([$__VIEW_ID__ . '-e685f513', 'dots'])><i @class([$__VIEW_ID__ . '-000ecdc2'])></i><i @class([$__VIEW_ID__ . '-696340be'])></i><i @class([$__VIEW_ID__ . '-6b3d26d1'])></i></div>
                            <div @class([$__VIEW_ID__ . '-8e84ed95', 'title'])>User Management</div>
                        </div>
                        <div @class([$__VIEW_ID__ . '-13df5404', 'mockup-body'])>
                            <div @class([$__VIEW_ID__ . '-f4159abf', 'mockup-toolbar'])>
                                <div @class([$__VIEW_ID__ . '-d180fd70', 'mockup-search'])>🔍 Search users...</div>
                                <div @class([$__VIEW_ID__ . '-9253c458', 'mockup-btn'])>Add New</div>
                            </div>
                            <div @class([$__VIEW_ID__ . '-f69380d2', 'mockup-table'])>
                                <div @class([$__VIEW_ID__ . '-4cb6dadf', 'mockup-tr', 'head'])><span @class([$__VIEW_ID__ . '-635c9862'])>Name</span><span @class([$__VIEW_ID__ . '-e1fd29ca'])>Role</span><span @class([$__VIEW_ID__ . '-6dcfa21d'])>Status</span><span @class([$__VIEW_ID__ . '-c545d225'])>Action</span></div>
                                <div @class([$__VIEW_ID__ . '-03f2b8d3', 'mockup-tr'])><span @class([$__VIEW_ID__ . '-9c34dc7f'])>John Doe</span><span @class([$__VIEW_ID__ . '-14cf525a'])>Admin</span><span @class([$__VIEW_ID__ . '-37ac4eca', 'badge', 'active'])>Active</span><span @class([$__VIEW_ID__ . '-4847441f', 'action'])>Edit</span></div>
                                <div @class([$__VIEW_ID__ . '-1be13736', 'mockup-tr'])><span @class([$__VIEW_ID__ . '-fb2acca4'])>Jane Smith</span><span @class([$__VIEW_ID__ . '-f4529ffa'])>Editor</span><span @class([$__VIEW_ID__ . '-4a46a229', 'badge', 'inactive'])>Inactive</span><span @class([$__VIEW_ID__ . '-29d6618e', 'action'])>Edit</span></div>
                                <div @class([$__VIEW_ID__ . '-72c64b5f', 'mockup-tr'])><span @class([$__VIEW_ID__ . '-8bc19666'])>Mike Ross</span><span @class([$__VIEW_ID__ . '-b2f4b28e'])>User</span><span @class([$__VIEW_ID__ . '-fccac5cc', 'badge', 'active'])>Active</span><span @class([$__VIEW_ID__ . '-eef8b83f', 'action'])>Edit</span></div>
                            </div>
                        </div>
                    </div>
                @endif
                @endMarker('reactive', 'b1e07ada')
                
                @startMarker('reactive', '988feaec', ['stateKey' => ['activeUsecase'], 'type' => 'if'])
                @if($activeUsecase === 1)
                    <div @class([$__VIEW_ID__ . '-570a9d4a', 'usecase-mockup', 'mockup-shop'])>
                        <div @class([$__VIEW_ID__ . '-f37655d8', 'mockup-header'])>
                            <div @class([$__VIEW_ID__ . '-a83b8f69', 'dots'])><i @class([$__VIEW_ID__ . '-1f7646c3'])></i><i @class([$__VIEW_ID__ . '-529dd844'])></i><i @class([$__VIEW_ID__ . '-94a13caf'])></i></div>
                            <div @class([$__VIEW_ID__ . '-ccc3732b', 'title'])>Shop / Laptops</div>
                        </div>
                        <div @class([$__VIEW_ID__ . '-8dd4d8bd', 'mockup-body', 'layout-split'])>
                            <div @class([$__VIEW_ID__ . '-402642a8', 'mockup-sidebar'])>
                                <b @class([$__VIEW_ID__ . '-57b2372f'])>Filters</b>
                                <ul @class([$__VIEW_ID__ . '-66823537'])>
                                    <li @class([$__VIEW_ID__ . '-ba258583'])><input @class([$__VIEW_ID__ . '-5735b3d3']) @attr(['type' => 'checkbox', 'checked' => true])> Apple (12)</li>
                                    <li @class([$__VIEW_ID__ . '-a1e5eca2'])><input @class([$__VIEW_ID__ . '-6e06ef78']) @attr(['type' => 'checkbox'])> Dell (8)</li>
                                    <li @class([$__VIEW_ID__ . '-33c2f43a'])><input @class([$__VIEW_ID__ . '-3286fed3']) @attr(['type' => 'checkbox'])> HP (15)</li>
                                </ul>
                                <b @class([$__VIEW_ID__ . '-f95f8d3b'])>Price</b>
                                <div @class([$__VIEW_ID__ . '-f9ad95b0', 'mockup-range'])></div>
                            </div>
                            <div @class([$__VIEW_ID__ . '-12d8c83b', 'mockup-grid'])>
                                <div @class([$__VIEW_ID__ . '-0caabca7', 'mockup-product'])>
                                    <div @class([$__VIEW_ID__ . '-a0b6fd81', 'img'])></div>
                                    <div @class([$__VIEW_ID__ . '-1d7a782a', 'name'])>MacBook Pro 16"</div>
                                    <div @class([$__VIEW_ID__ . '-7ac97c16', 'price'])>$2,499</div>
                                </div>
                                <div @class([$__VIEW_ID__ . '-66c30473', 'mockup-product'])>
                                    <div @class([$__VIEW_ID__ . '-166edb2e', 'img'])></div>
                                    <div @class([$__VIEW_ID__ . '-055a3ff9', 'name'])>MacBook Air M2</div>
                                    <div @class([$__VIEW_ID__ . '-81318e8d', 'price'])>$1,199</div>
                                </div>
                            </div>
                        </div>
                    </div>
                @endif
                @endMarker('reactive', '988feaec')
                
                @startMarker('reactive', 'bf0c77e1', ['stateKey' => ['activeUsecase'], 'type' => 'if'])
                @if($activeUsecase === 2)
                    <div @class([$__VIEW_ID__ . '-e409013b', 'usecase-mockup', 'mockup-code'])>
                        <div @class([$__VIEW_ID__ . '-3c204ca4', 'mockup-header'])>
                            <div @class([$__VIEW_ID__ . '-25e910ae', 'dots'])><i @class([$__VIEW_ID__ . '-aaac4894'])></i><i @class([$__VIEW_ID__ . '-51fc7f77'])></i><i @class([$__VIEW_ID__ . '-fc469927'])></i></div>
                            <div @class([$__VIEW_ID__ . '-80431145', 'title'])>Project Structure</div>
                        </div>
                        <div @class([$__VIEW_ID__ . '-62f331e5', 'mockup-body'])>
                            <ul @class([$__VIEW_ID__ . '-0e3dae4f', 'tree'])>
                                <li @class([$__VIEW_ID__ . '-c0ac4cde'])>📁 <b @class([$__VIEW_ID__ . '-ed51451c'])>app</b>
                                    <ul @class([$__VIEW_ID__ . '-d5f9caf1'])>
                                        <li @class([$__VIEW_ID__ . '-df7a8b8c'])>📁 <b @class([$__VIEW_ID__ . '-12464667'])>Models</b> <i @class([$__VIEW_ID__ . '-7de436da'])>(Shared)</i>
                                            <ul @class([$__VIEW_ID__ . '-9cd9b7c8'])><li @class([$__VIEW_ID__ . '-d9083f47'])>📄 User.php</li><li @class([$__VIEW_ID__ . '-711c126e'])>📄 Order.php</li></ul>
                                        </li>
                                    </ul>
                                </li>
                                <li @class([$__VIEW_ID__ . '-24e41dfd'])>📁 <b @class([$__VIEW_ID__ . '-54f7a678'])>routes</b>
                                    <ul @class([$__VIEW_ID__ . '-70ffb602'])>
                                        <li @class([$__VIEW_ID__ . '-728c045e'])>📄 web.php <i @class([$__VIEW_ID__ . '-74290c34'])>(Public site)</i></li>
                                        <li @class([$__VIEW_ID__ . '-52c6fa95'])>📄 admin.php <i @class([$__VIEW_ID__ . '-826b18f9'])>(Admin panel)</i></li>
                                        <li @class([$__VIEW_ID__ . '-14ed3270'])>📄 api.php <i @class([$__VIEW_ID__ . '-e9f450ff'])>(Mobile app)</i></li>
                                    </ul>
                                </li>
                                <li @class([$__VIEW_ID__ . '-e8cf1868'])>📁 <b @class([$__VIEW_ID__ . '-59447211'])>resources/saola</b>
                                    <ul @class([$__VIEW_ID__ . '-2778358a'])>
                                        <li @class([$__VIEW_ID__ . '-4d6f2624'])>📁 web <i @class([$__VIEW_ID__ . '-483de94a'])>(Bundle 1)</i></li>
                                        <li @class([$__VIEW_ID__ . '-54601253'])>📁 admin <i @class([$__VIEW_ID__ . '-f91aa148'])>(Bundle 2)</i></li>
                                        <li @class([$__VIEW_ID__ . '-532855b6'])>📁 mobile <i @class([$__VIEW_ID__ . '-d4a6587e'])>(Bundle 3)</i></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                @endif
                @endMarker('reactive', 'bf0c77e1')
                
                @startMarker('reactive', 'fc563741', ['stateKey' => ['activeUsecase'], 'type' => 'if'])
                @if($activeUsecase === 3)
                    <div @class([$__VIEW_ID__ . '-fe38a0c8', 'usecase-mockup', 'mockup-code'])>
                        <div @class([$__VIEW_ID__ . '-c967851e', 'mockup-header'])>
                            <div @class([$__VIEW_ID__ . '-c8fead6a', 'dots'])><i @class([$__VIEW_ID__ . '-0f3d473b'])></i><i @class([$__VIEW_ID__ . '-9647a94a'])></i><i @class([$__VIEW_ID__ . '-7241608a'])></i></div>
                            <div @class([$__VIEW_ID__ . '-b174118e', 'title'])>counter.sao</div>
                        </div>
                        <div @class([$__VIEW_ID__ . '-17daed71', 'mockup-body'])>
<div @class([$__VIEW_ID__ . '-0b59f1a5', 'mockup-code-lines']) @attr(['style' => 'font-family: monospace; font-size: 13px; line-height: 1.6;'])>
    <div @class([$__VIEW_ID__ . '-a54ba860']) @attr(['style' => 'display: block;'])><span @class([$__VIEW_ID__ . '-c49d900e', 'token', 'keyword'])><span @class([$__VIEW_ID__ . '-51ef89cc'])>@</span>states</span><span @class([$__VIEW_ID__ . '-d4764df2', 'token', 'punctuation'])>({</span><span @class([$__VIEW_ID__ . '-91645685', 'token', 'property']) @attr(['style' => 'margin-left: 0.5em;'])>count</span><span @class([$__VIEW_ID__ . '-721e12a5', 'token', 'punctuation'])>:</span><span @class([$__VIEW_ID__ . '-80ea51d4', 'token', 'number']) @attr(['style' => 'margin-left: 0.5em;'])>0</span><span @class([$__VIEW_ID__ . '-0d81341d', 'token', 'punctuation']) @attr(['style' => 'margin-left: 0.5em;'])>})</span></div>
    <div @class([$__VIEW_ID__ . '-003b36ae']) @attr(['style' => 'display: block; min-height: 1.6em;'])></div>
    <div @class([$__VIEW_ID__ . '-5489b46e']) @attr(['style' => 'display: block;'])><span @class([$__VIEW_ID__ . '-24233f2a', 'token', 'tag'])>&lt;template&gt;</span></div>
    <div @class([$__VIEW_ID__ . '-8f06dadd']) @attr(['style' => 'display: block; padding-left: 2em;'])><span @class([$__VIEW_ID__ . '-128944d7', 'token', 'tag'])>&lt;div&gt;</span></div>
    <div @class([$__VIEW_ID__ . '-0090d76f']) @attr(['style' => 'display: block; padding-left: 4em;'])><span @class([$__VIEW_ID__ . '-1bf08574', 'token', 'tag'])>&lt;h3&gt;</span>Count:<span @class([$__VIEW_ID__ . '-618d6d7a', 'token', 'punctuation']) @attr(['style' => 'margin-left: 0.5em;'])><span @class([$__VIEW_ID__ . '-fae39795'])>{</span>{</span><span @class([$__VIEW_ID__ . '-e3673c09', 'token', 'property']) @attr(['style' => 'margin-left: 0.5em;'])>count</span><span @class([$__VIEW_ID__ . '-daa58726', 'token', 'punctuation']) @attr(['style' => 'margin-left: 0.5em;'])>}<span @class([$__VIEW_ID__ . '-09c1f8e8'])>}</span></span><span @class([$__VIEW_ID__ . '-9dfe3a9d', 'token', 'tag'])>&lt;/h3&gt;</span></div>
    <div @class([$__VIEW_ID__ . '-e75fd203']) @attr(['style' => 'display: block; padding-left: 4em;'])><span @class([$__VIEW_ID__ . '-481b1d21', 'token', 'tag'])>&lt;button</span><span @class([$__VIEW_ID__ . '-7e385928', 'token', 'attr-name']) @attr(['style' => 'margin-left: 0.5em;'])><span @class([$__VIEW_ID__ . '-3ae27231'])>@</span>click</span><span @class([$__VIEW_ID__ . '-4484c179', 'token', 'punctuation'])>(</span><span @class([$__VIEW_ID__ . '-223dd67e', 'token', 'function'])>setCount</span><span @class([$__VIEW_ID__ . '-97459053', 'token', 'punctuation'])>(</span><span @class([$__VIEW_ID__ . '-2603cd5d', 'token', 'property'])>count</span><span @class([$__VIEW_ID__ . '-bdb12299', 'token', 'operator']) @attr(['style' => 'margin-left: 0.5em;'])>+</span><span @class([$__VIEW_ID__ . '-d1f33929', 'token', 'number']) @attr(['style' => 'margin-left: 0.5em;'])>1</span><span @class([$__VIEW_ID__ . '-faee9cba', 'token', 'punctuation'])>))</span><span @class([$__VIEW_ID__ . '-15d8974c', 'token', 'tag'])>&gt;</span>+<span @class([$__VIEW_ID__ . '-fd44eb46', 'token', 'tag'])>&lt;/button&gt;</span></div>
    <div @class([$__VIEW_ID__ . '-77be8e68']) @attr(['style' => 'display: block; min-height: 1.6em;'])></div>
    <div @class([$__VIEW_ID__ . '-9dcda990']) @attr(['style' => 'display: block; padding-left: 4em;'])><span @class([$__VIEW_ID__ . '-c6ec6f7a', 'token', 'keyword'])><span @class([$__VIEW_ID__ . '-ad0721ff'])>@</span>if</span><span @class([$__VIEW_ID__ . '-3e095f18', 'token', 'punctuation'])>(</span><span @class([$__VIEW_ID__ . '-46fc64a1', 'token', 'property'])>count</span><span @class([$__VIEW_ID__ . '-b3470cca', 'token', 'operator']) @attr(['style' => 'margin-left: 0.5em;'])>></span><span @class([$__VIEW_ID__ . '-450e4426', 'token', 'number']) @attr(['style' => 'margin-left: 0.5em;'])>10</span><span @class([$__VIEW_ID__ . '-fbdb1734', 'token', 'punctuation'])>)</span></div>
    <div @class([$__VIEW_ID__ . '-789e7a29']) @attr(['style' => 'display: block; padding-left: 6em;'])><span @class([$__VIEW_ID__ . '-8ffbfe5b', 'token', 'tag'])>&lt;p&gt;</span>You clicked many times!<span @class([$__VIEW_ID__ . '-32c5c445', 'token', 'tag'])>&lt;/p&gt;</span></div>
    <div @class([$__VIEW_ID__ . '-1f0afe5e']) @attr(['style' => 'display: block; padding-left: 4em;'])><span @class([$__VIEW_ID__ . '-c1375690', 'token', 'keyword'])><span @class([$__VIEW_ID__ . '-408c85c1'])>@</span>endif</span></div>
    <div @class([$__VIEW_ID__ . '-0e836a94']) @attr(['style' => 'display: block; padding-left: 2em;'])><span @class([$__VIEW_ID__ . '-1c18b56f', 'token', 'tag'])>&lt;/div&gt;</span></div>
    <div @class([$__VIEW_ID__ . '-428b7502']) @attr(['style' => 'display: block;'])><span @class([$__VIEW_ID__ . '-84321385', 'token', 'tag'])>&lt;/template&gt;</span></div>
</div>
                        </div>
                    </div>
                @endif
                @endMarker('reactive', 'fc563741')
            </div>
        </div>

        <div @class([$__VIEW_ID__ . '-c882ec26', 'ov-note', 'ov-note--warn']) @attr(['style' => 'margin-top: 30px;'])>
            <strong @class([$__VIEW_ID__ . '-afe5ed63'])>Chưa hợp khi:</strong> bạn cần một hệ sinh thái component bên thứ ba khổng lồ ngay hôm nay, hoặc đội đã chạy tốt trên React/Vue với đầy đủ tooling và người quen việc. Trong hai trường hợp đó, chi phí chuyển sang Saola lớn hơn cái nó tiết kiệm.
        </div>
    </section>
@endWrapper
