@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@wrapper
<section @class([$__VIEW_ID__ . '-e1', 'home-section', 'home-section--fog']) @attr(['id' => 'compare'])>
        <div @class([$__VIEW_ID__ . '-e11', 'section-head', 'section-head-split'])>
            <div @class([$__VIEW_ID__ . '-e111'])>
                <p @class([$__VIEW_ID__ . '-e1111', 'kicker'])><span @class([$__VIEW_ID__ . '-e11111'])>SO SÁNH</span> Khác biệt so với các lựa chọn quen thuộc</p>
                <h2 @class([$__VIEW_ID__ . '-e1112'])>Cùng một bài toán,<br @class([$__VIEW_ID__ . '-e11121'])>năm cách giải quyết.</h2>
            </div>
            <p @class([$__VIEW_ID__ . '-e112'])>Bảng so sánh này không nhằm mục đích khẳng định giải pháp nào tốt nhất tuyệt đối. Nó đánh giá sự khác biệt ở hai khía cạnh: kiến trúc hệ thống và cơ chế hiển thị. Saola tập trung giải quyết độ khó ở trình biên dịch nội bộ và mô hình module, để đổi lấy một kiến trúc phân tách rõ ràng và loại bỏ gánh nặng bảo trì hai phiên bản template (server và client).</p>
        </div>
        <div @class([$__VIEW_ID__ . '-e12', 'compare-table'])>
            <table @class([$__VIEW_ID__ . '-e121'])>
                <thead @class([$__VIEW_ID__ . '-e1211'])>
                    <tr @class([$__VIEW_ID__ . '-e12111'])>
                        <th @class([$__VIEW_ID__ . '-e121111']) @attr(['scope' => 'col'])>Tiêu chí</th>
                        <th @class([$__VIEW_ID__ . '-e121112', 'col-sao']) @attr(['scope' => 'col'])>Saola</th>
                        <th @class([$__VIEW_ID__ . '-e121113']) @attr(['scope' => 'col'])>Blade + Alpine</th>
                        <th @class([$__VIEW_ID__ . '-e121114']) @attr(['scope' => 'col'])>Livewire</th>
                        <th @class([$__VIEW_ID__ . '-e121115']) @attr(['scope' => 'col'])>Inertia + Vue/React</th>
                        <th @class([$__VIEW_ID__ . '-e121116']) @attr(['scope' => 'col'])>SPA + REST API</th>
                    </tr>
                </thead>
                <tbody @class([$__VIEW_ID__ . '-e1212'])>
                    <tr @class([$__VIEW_ID__ . '-e12121', 'cmp-band'])><th @class([$__VIEW_ID__ . '-e121211']) @attr(['scope' => 'row', 'colspan' => '6'])>Tầng kiến trúc ứng dụng</th></tr>
                    <tr @class([$__VIEW_ID__ . '-e12122'])>
                        <th @class([$__VIEW_ID__ . '-e121221']) @attr(['scope' => 'row'])>Tổ chức code và route</th>
                        <td @class([$__VIEW_ID__ . '-e121222', 'col-sao'])><span @class([$__VIEW_ID__ . '-e1212221', 'cmp-yes'])>Module tự nạp, route trong module</span></td>
                        <td @class([$__VIEW_ID__ . '-e121223'])>Tự tổ chức, route tập trung</td>
                        <td @class([$__VIEW_ID__ . '-e121224'])>Tự tổ chức, route tập trung</td>
                        <td @class([$__VIEW_ID__ . '-e121225'])>Tự tổ chức, route tập trung</td>
                        <td @class([$__VIEW_ID__ . '-e121226'])>Tự tổ chức ở hai phía</td>
                    </tr>
                    <tr @class([$__VIEW_ID__ . '-e12123'])>
                        <th @class([$__VIEW_ID__ . '-e121231']) @attr(['scope' => 'row'])>Đa mặt tiền, tách bundle</th>
                        <td @class([$__VIEW_ID__ . '-e121232', 'col-sao'])><span @class([$__VIEW_ID__ . '-e1212321', 'cmp-yes'])>Sẵn bốn context</span></td>
                        <td @class([$__VIEW_ID__ . '-e121233'])>Tự dựng</td>
                        <td @class([$__VIEW_ID__ . '-e121234'])>Tự dựng</td>
                        <td @class([$__VIEW_ID__ . '-e121235'])>Tự dựng</td>
                        <td @class([$__VIEW_ID__ . '-e121236'])>Tự dựng</td>
                    </tr>
                    <tr @class([$__VIEW_ID__ . '-e12124'])>
                        <th @class([$__VIEW_ID__ . '-e121241']) @attr(['scope' => 'row'])>Context theo request (Octane)</th>
                        <td @class([$__VIEW_ID__ . '-e121242', 'col-sao'])><span @class([$__VIEW_ID__ . '-e1212421', 'cmp-yes'])>Registry request-scoped</span></td>
                        <td @class([$__VIEW_ID__ . '-e121243'])>Tự lo</td>
                        <td @class([$__VIEW_ID__ . '-e121244'])>Tự lo</td>
                        <td @class([$__VIEW_ID__ . '-e121245'])>Tự lo</td>
                        <td @class([$__VIEW_ID__ . '-e121246'])>Không áp dụng</td>
                    </tr>
                    <tr @class([$__VIEW_ID__ . '-e12125'])>
                        <th @class([$__VIEW_ID__ . '-e121251']) @attr(['scope' => 'row'])>Hình dạng response chung</th>
                        <td @class([$__VIEW_ID__ . '-e121252', 'col-sao'])>Một controller trả được cả HTML và JSON</td>
                        <td @class([$__VIEW_ID__ . '-e121253'])>Tự quy ước</td>
                        <td @class([$__VIEW_ID__ . '-e121254'])>Component phía server</td>
                        <td @class([$__VIEW_ID__ . '-e121255'])>Props qua adapter</td>
                        <td @class([$__VIEW_ID__ . '-e121256'])>Tự quy ước ở tầng API</td>
                    </tr>

                    <tr @class([$__VIEW_ID__ . '-e12126', 'cmp-band'])><th @class([$__VIEW_ID__ . '-e121261']) @attr(['scope' => 'row', 'colspan' => '6'])>Tầng view và runtime</th></tr>
                    <tr @class([$__VIEW_ID__ . '-e12127'])>
                        <th @class([$__VIEW_ID__ . '-e121271']) @attr(['scope' => 'row'])>Nguồn sinh HTML và JS</th>
                        <td @class([$__VIEW_ID__ . '-e121272', 'col-sao'])><span @class([$__VIEW_ID__ . '-e1212721', 'cmp-yes'])>Cùng một AST</span></td>
                        <td @class([$__VIEW_ID__ . '-e121273'])>Hai nguồn viết tay</td>
                        <td @class([$__VIEW_ID__ . '-e121274'])>Server sinh HTML, JS chỉ vá DOM</td>
                        <td @class([$__VIEW_ID__ . '-e121275'])>Hai nguồn viết tay</td>
                        <td @class([$__VIEW_ID__ . '-e121276'])>Một nguồn, chỉ ở client</td>
                    </tr>
                    <tr @class([$__VIEW_ID__ . '-e12128'])>
                        <th @class([$__VIEW_ID__ . '-e121281']) @attr(['scope' => 'row'])>HTML của lần tải đầu</th>
                        <td @class([$__VIEW_ID__ . '-e121282', 'col-sao'])>Đầy đủ nội dung</td>
                        <td @class([$__VIEW_ID__ . '-e121283'])>Đầy đủ nội dung</td>
                        <td @class([$__VIEW_ID__ . '-e121284'])>Đầy đủ nội dung</td>
                        <td @class([$__VIEW_ID__ . '-e121285'])>Đầy đủ nếu bật SSR</td>
                        <td @class([$__VIEW_ID__ . '-e121286'])><span @class([$__VIEW_ID__ . '-e1212861', 'cmp-no'])>Div rỗng</span></td>
                    </tr>
                    <tr @class([$__VIEW_ID__ . '-e12129'])>
                        <th @class([$__VIEW_ID__ . '-e121291']) @attr(['scope' => 'row'])>Tương tác sau khi tải</th>
                        <td @class([$__VIEW_ID__ . '-e121292', 'col-sao'])>Chạy tại client, không round-trip</td>
                        <td @class([$__VIEW_ID__ . '-e121293'])>Chạy tại client, phạm vi hẹp</td>
                        <td @class([$__VIEW_ID__ . '-e121294'])><span @class([$__VIEW_ID__ . '-e1212941', 'cmp-no'])>Mỗi tương tác một request</span></td>
                        <td @class([$__VIEW_ID__ . '-e121295'])>Chạy tại client</td>
                        <td @class([$__VIEW_ID__ . '-e121296'])>Chạy tại client</td>
                    </tr>
                    <tr @class([$__VIEW_ID__ . '-e1212e10_'])>
                        <th @class([$__VIEW_ID__ . '-e1212e10_1']) @attr(['scope' => 'row'])>Ngôn ngữ viết view</th>
                        <td @class([$__VIEW_ID__ . '-e1212e10_2', 'col-sao'])>Một cú pháp <code @class([$__VIEW_ID__ . '-e1212e10_21'])>.sao</code></td>
                        <td @class([$__VIEW_ID__ . '-e1212e10_3'])>Blade cộng JavaScript rời</td>
                        <td @class([$__VIEW_ID__ . '-e1212e10_4'])>Blade cộng PHP class</td>
                        <td @class([$__VIEW_ID__ . '-e1212e10_5'])>Vue hoặc React, tách khỏi Blade</td>
                        <td @class([$__VIEW_ID__ . '-e1212e10_6'])>Framework JavaScript</td>
                    </tr>
                    <tr @class([$__VIEW_ID__ . '-e1212e11_'])>
                        <th @class([$__VIEW_ID__ . '-e1212e11_1']) @attr(['scope' => 'row'])>Cần tầng API riêng</th>
                        <td @class([$__VIEW_ID__ . '-e1212e11_2', 'col-sao'])>Không bắt buộc</td>
                        <td @class([$__VIEW_ID__ . '-e1212e11_3'])>Không</td>
                        <td @class([$__VIEW_ID__ . '-e1212e11_4'])>Không</td>
                        <td @class([$__VIEW_ID__ . '-e1212e11_5'])>Không, props đi qua adapter</td>
                        <td @class([$__VIEW_ID__ . '-e1212e11_6'])><span @class([$__VIEW_ID__ . '-e1212e11_61', 'cmp-no'])>Bắt buộc</span></td>
                    </tr>
                    <tr @class([$__VIEW_ID__ . '-e1212e12_'])>
                        <th @class([$__VIEW_ID__ . '-e1212e12_1']) @attr(['scope' => 'row'])>Vòng đời view có contract</th>
                        <td @class([$__VIEW_ID__ . '-e1212e12_2', 'col-sao'])>Bảy trạng thái, dọn dẹp theo ref-count</td>
                        <td @class([$__VIEW_ID__ . '-e1212e12_3'])>Không có</td>
                        <td @class([$__VIEW_ID__ . '-e1212e12_4'])>Theo component phía server</td>
                        <td @class([$__VIEW_ID__ . '-e1212e12_5'])>Theo framework JavaScript</td>
                        <td @class([$__VIEW_ID__ . '-e1212e12_6'])>Theo framework JavaScript</td>
                    </tr>
                    <tr @class([$__VIEW_ID__ . '-e1212e13_'])>
                        <th @class([$__VIEW_ID__ . '-e1212e13_1']) @attr(['scope' => 'row'])>Độ chín và cộng đồng</th>
                        <td @class([$__VIEW_ID__ . '-e1212e13_2', 'col-sao'])><span @class([$__VIEW_ID__ . '-e1212e13_21', 'cmp-no'])>Đang xây dựng nền móng</span></td>
                        <td @class([$__VIEW_ID__ . '-e1212e13_3'])>Rất chín</td>
                        <td @class([$__VIEW_ID__ . '-e1212e13_4'])>Rất chín</td>
                        <td @class([$__VIEW_ID__ . '-e1212e13_5'])>Rất chín</td>
                        <td @class([$__VIEW_ID__ . '-e1212e13_6'])>Rất chín</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </section>
@endWrapper
