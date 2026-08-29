@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@wrapper
<section @class([$__VIEW_ID__ . '-e1', 'ax']) @attr(['id' => 'architecture'])>
        <div @class([$__VIEW_ID__ . '-e11', 'ax-head'])>
            <div @class([$__VIEW_ID__ . '-e111'])>
                <p @class([$__VIEW_ID__ . '-e1111', 'ax-label'])>Kiến trúc hệ thống</p>
                <h2 @class([$__VIEW_ID__ . '-e1112'])>Bốn mặt tiền,<br @class([$__VIEW_ID__ . '-e11121'])>một lõi duy nhất.</h2>
            </div>
            <p @class([$__VIEW_ID__ . '-e112', 'ax-sub'])>Context là ranh giới thực sự, không chỉ là thư mục. Mỗi context (web, admin, api, mobile) được trang bị prefix, middleware, hệ thống phân quyền, thư mục view và bundle asset riêng. Các module linh hoạt phục vụ cả bốn context mà không lo xung đột route hay resource.</p>
        </div>

        <div @class([$__VIEW_ID__ . '-e12', 'ax-ctx'])>
            <div @class([$__VIEW_ID__ . '-e121', 'ax-row'])>
                <code @class([$__VIEW_ID__ . '-e1211'])>web</code>
                <b @class([$__VIEW_ID__ . '-e1212'])>/</b>
                <span @class([$__VIEW_ID__ . '-e1213'])>Website công khai — SSR đầy đủ rồi hydrate thành SPA.</span>
                <em @class([$__VIEW_ID__ . '-e1214'])>bundle web</em>
            </div>
            <div @class([$__VIEW_ID__ . '-e122', 'ax-row'])>
                <code @class([$__VIEW_ID__ . '-e1221'])>admin</code>
                <b @class([$__VIEW_ID__ . '-e1222'])>/admin</b>
                <span @class([$__VIEW_ID__ . '-e1223'])>Khu vực quản trị — tích hợp middleware <i @class([$__VIEW_ID__ . '-e12231'])>auth</i> + <i @class([$__VIEW_ID__ . '-e12232'])>permission</i>.</span>
                <em @class([$__VIEW_ID__ . '-e1224'])>bundle admin</em>
            </div>
            <div @class([$__VIEW_ID__ . '-e123', 'ax-row'])>
                <code @class([$__VIEW_ID__ . '-e1231'])>api</code>
                <b @class([$__VIEW_ID__ . '-e1232'])>/api</b>
                <span @class([$__VIEW_ID__ . '-e1233'])>RESTful JSON tốc độ cao, bỏ qua giai đoạn render view.</span>
                <em @class([$__VIEW_ID__ . '-e1234'])>không bundle</em>
            </div>
            <div @class([$__VIEW_ID__ . '-e124', 'ax-row'])>
                <code @class([$__VIEW_ID__ . '-e1241'])>mobile</code>
                <b @class([$__VIEW_ID__ . '-e1242'])>tuỳ cấu hình</b>
                <span @class([$__VIEW_ID__ . '-e1243'])>Webview hoặc PWA, chia sẻ chung cơ chế view và state.</span>
                <em @class([$__VIEW_ID__ . '-e1244'])>bundle mobile</em>
            </div>
        </div>

        <div @class([$__VIEW_ID__ . '-e13', 'ax-mod'])>
            <div @class([$__VIEW_ID__ . '-e131', 'ax-mod-copy'])>
                <h3 @class([$__VIEW_ID__ . '-e1311'])>Module độc lập, tự động nhận diện.</h3>
                <p @class([$__VIEW_ID__ . '-e1312'])>Kiến trúc xoay quanh <code @class([$__VIEW_ID__ . '-e13121'])>app/Modules/</code>. Mỗi module sở hữu <code @class([$__VIEW_ID__ . '-e13122'])>ModuleServiceProvider.php</code> được nạp đệ quy tự động — hỗ trợ module lồng nhau không giới hạn. Route, controller nằm gọn trong module thay vì dồn ứ tại <code @class([$__VIEW_ID__ . '-e13123'])>routes/web.php</code>.</p>
                <ul @class([$__VIEW_ID__ . '-e1313', 'ax-list'])>
                    <li @class([$__VIEW_ID__ . '-e13131'])>Thêm module mới <strong @class([$__VIEW_ID__ . '-e131311'])>không cần đụng đến file cấu hình trung tâm</strong>.</li>
                    <li @class([$__VIEW_ID__ . '-e13132'])>Sử dụng chung Model, Policy, Service; nhưng tách biệt hoàn toàn Route, Middleware, Bundle.</li>
                    <li @class([$__VIEW_ID__ . '-e13133'])><code @class([$__VIEW_ID__ . '-e131331'])>ViewContextService</code> cô lập registry <strong @class([$__VIEW_ID__ . '-e131332'])>theo từng request</strong> — loại bỏ triệt để lỗi rò rỉ state khi chạy trên Laravel Octane.</li>
                </ul>
                <a @class([$__VIEW_ID__ . '-e1314', 'ax-link']) @attr(['href' => '/docs/contexts'])>Đọc chi tiết về Context &amp; Module <span @class([$__VIEW_ID__ . '-e13141'])>→</span></a>
            </div>

            <div @class([$__VIEW_ID__ . '-e132', 'ax-win'])>
                <div @class([$__VIEW_ID__ . '-e1321', 'ax-win-bar'])><span @class([$__VIEW_ID__ . '-e13211'])>PHP</span><b @class([$__VIEW_ID__ . '-e13212'])>app/Modules/Roster/ModuleServiceProvider.php</b></div>
                <pre @class([$__VIEW_ID__ . '-e1322'])><code @class([$__VIEW_ID__ . '-e13221'])><span @class([$__VIEW_ID__ . '-e132211', 'code-line'])><span @class([$__VIEW_ID__ . '-e1322111', 'ty'])>System</span><span @class([$__VIEW_ID__ . '-e1322112', 'op'])>::</span><span @class([$__VIEW_ID__ . '-e1322113', 'fn'])>context</span><span @class([$__VIEW_ID__ . '-e1322114', 'op'])>(</span><span @class([$__VIEW_ID__ . '-e1322115', 'st'])>'api'</span><span @class([$__VIEW_ID__ . '-e1322116', 'op'])>)-&gt;</span><span @class([$__VIEW_ID__ . '-e1322117', 'fn'])>module</span><span @class([$__VIEW_ID__ . '-e1322118', 'op'])>(</span><span @class([$__VIEW_ID__ . '-e1322119', 'st'])>'roster'</span><span @class([$__VIEW_ID__ . '-e132211e10_', 'op'])>, [</span></span><span @class([$__VIEW_ID__ . '-e132212', 'code-line', 'code-indent-1'])><span @class([$__VIEW_ID__ . '-e1322121', 'st'])>'prefix'</span><span @class([$__VIEW_ID__ . '-e1322122', 'op'])> =&gt;</span><span @class([$__VIEW_ID__ . '-e1322123', 'st'])> '/roster'</span><span @class([$__VIEW_ID__ . '-e1322124', 'op'])>,</span><span @class([$__VIEW_ID__ . '-e1322125', 'st'])> 'priority'</span><span @class([$__VIEW_ID__ . '-e1322126', 'op'])> =&gt;</span><span @class([$__VIEW_ID__ . '-e1322127', 'st'])> 5</span><span @class([$__VIEW_ID__ . '-e1322128', 'op'])>,</span></span><span @class([$__VIEW_ID__ . '-e132213', 'code-line'])><span @class([$__VIEW_ID__ . '-e1322131', 'op'])>])</span></span><span @class([$__VIEW_ID__ . '-e132214', 'code-line', 'code-indent-1'])><span @class([$__VIEW_ID__ . '-e1322141', 'op'])>-&gt;</span><span @class([$__VIEW_ID__ . '-e1322142', 'fn'])>controller</span><span @class([$__VIEW_ID__ . '-e1322143', 'op'])>(</span><span @class([$__VIEW_ID__ . '-e1322144', 'ty'])>RosterController</span><span @class([$__VIEW_ID__ . '-e1322145', 'op'])>::</span><span @class([$__VIEW_ID__ . '-e1322146', 'kw'])>class</span><span @class([$__VIEW_ID__ . '-e1322147', 'op'])>)</span></span><span @class([$__VIEW_ID__ . '-e132215', 'code-line', 'code-indent-1'])><span @class([$__VIEW_ID__ . '-e1322151', 'op'])>-&gt;</span><span @class([$__VIEW_ID__ . '-e1322152', 'fn'])>group</span><span @class([$__VIEW_ID__ . '-e1322153', 'op'])>(</span><span @class([$__VIEW_ID__ . '-e1322154', 'kw'])>function</span><span @class([$__VIEW_ID__ . '-e1322155', 'op'])> (</span><span @class([$__VIEW_ID__ . '-e1322156', 'vr'])>$module</span><span @class([$__VIEW_ID__ . '-e1322157', 'op'])>) {</span></span><span @class([$__VIEW_ID__ . '-e132216', 'code-line', 'code-indent-2'])><span @class([$__VIEW_ID__ . '-e1322161', 'vr'])>$module</span><span @class([$__VIEW_ID__ . '-e1322162', 'op'])>-&gt;</span><span @class([$__VIEW_ID__ . '-e1322163', 'fn'])>get</span><span @class([$__VIEW_ID__ . '-e1322164', 'op'])>(</span><span @class([$__VIEW_ID__ . '-e1322165', 'st'])>'/'</span><span @class([$__VIEW_ID__ . '-e1322166', 'op'])>,</span><span @class([$__VIEW_ID__ . '-e1322167', 'st'])> 'index'</span><span @class([$__VIEW_ID__ . '-e1322168', 'op'])>)-&gt;</span><span @class([$__VIEW_ID__ . '-e1322169', 'fn'])>name</span><span @class([$__VIEW_ID__ . '-e132216e10_', 'op'])>(</span><span @class([$__VIEW_ID__ . '-e132216e11_', 'st'])>'index'</span><span @class([$__VIEW_ID__ . '-e132216e12_', 'op'])>);</span></span><span @class([$__VIEW_ID__ . '-e132217', 'code-line', 'code-indent-2'])><span @class([$__VIEW_ID__ . '-e1322171', 'vr'])>$module</span><span @class([$__VIEW_ID__ . '-e1322172', 'op'])>-&gt;</span><span @class([$__VIEW_ID__ . '-e1322173', 'fn'])>post</span><span @class([$__VIEW_ID__ . '-e1322174', 'op'])>(</span><span @class([$__VIEW_ID__ . '-e1322175', 'st'])>'/'</span><span @class([$__VIEW_ID__ . '-e1322176', 'op'])>,</span><span @class([$__VIEW_ID__ . '-e1322177', 'st'])> 'store'</span><span @class([$__VIEW_ID__ . '-e1322178', 'op'])>)-&gt;</span><span @class([$__VIEW_ID__ . '-e1322179', 'fn'])>name</span><span @class([$__VIEW_ID__ . '-e132217e10_', 'op'])>(</span><span @class([$__VIEW_ID__ . '-e132217e11_', 'st'])>'store'</span><span @class([$__VIEW_ID__ . '-e132217e12_', 'op'])>);</span></span><span @class([$__VIEW_ID__ . '-e132218', 'code-line', 'code-indent-2'])><span @class([$__VIEW_ID__ . '-e1322181', 'vr'])>$module</span><span @class([$__VIEW_ID__ . '-e1322182', 'op'])>-&gt;</span><span @class([$__VIEW_ID__ . '-e1322183', 'fn'])>put</span><span @class([$__VIEW_ID__ . '-e1322184', 'op'])>(</span><span @class([$__VIEW_ID__ . '-e1322185', 'st'])>'/{uuid}'</span><span @class([$__VIEW_ID__ . '-e1322186', 'op'])>,</span><span @class([$__VIEW_ID__ . '-e1322187', 'st'])> 'update'</span><span @class([$__VIEW_ID__ . '-e1322188', 'op'])>)-&gt;</span><span @class([$__VIEW_ID__ . '-e1322189', 'fn'])>name</span><span @class([$__VIEW_ID__ . '-e132218e10_', 'op'])>(</span><span @class([$__VIEW_ID__ . '-e132218e11_', 'st'])>'update'</span><span @class([$__VIEW_ID__ . '-e132218e12_', 'op'])>);</span></span><span @class([$__VIEW_ID__ . '-e132219', 'code-line', 'code-indent-1'])><span @class([$__VIEW_ID__ . '-e1322191', 'op'])>});</span></span></code></pre>
            </div>
        </div>
    </section>
@endWrapper
