@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@wrapper
<section @class([$__VIEW_ID__ . '-bbcd3398', 'home-section', 'home-section--fog']) @attr(['id' => 'compare'])>
        <div @class([$__VIEW_ID__ . '-88b70a58', 'section-head', 'section-head-split'])>
            <div @class([$__VIEW_ID__ . '-4f95a176'])>
                <p @class([$__VIEW_ID__ . '-dd8c47b3', 'kicker'])><span @class([$__VIEW_ID__ . '-d0f3467d'])>SO SÁNH</span> Khác gì lựa chọn quen thuộc</p>
                <h2 @class([$__VIEW_ID__ . '-3f75a3fd'])>Cùng một bài toán,<br @class([$__VIEW_ID__ . '-d78bb666'])>năm cách trả lời khác nhau.</h2>
            </div>
            <p @class([$__VIEW_ID__ . '-a485d755'])>Bảng này không nói cách nào tốt hơn tuyệt đối. Nó nói mỗi cách đặt chi phí ở đâu — và Saola đặt chi phí vào bước biên dịch để đổi lấy việc không phải giữ hai bản template đồng bộ bằng tay.</p>
        </div>
        <div @class([$__VIEW_ID__ . '-b545b1d4', 'compare-table'])>
            <table @class([$__VIEW_ID__ . '-1153644d'])>
                <thead @class([$__VIEW_ID__ . '-dd0a490a'])>
                    <tr @class([$__VIEW_ID__ . '-49ec586f'])>
                        <th @class([$__VIEW_ID__ . '-79f9ff93']) @attr(['scope' => 'col'])>Tiêu chí</th>
                        <th @class([$__VIEW_ID__ . '-e8508ec8', 'col-sao']) @attr(['scope' => 'col'])>Saola</th>
                        <th @class([$__VIEW_ID__ . '-2eeb73ff']) @attr(['scope' => 'col'])>Blade + Alpine</th>
                        <th @class([$__VIEW_ID__ . '-babaf958']) @attr(['scope' => 'col'])>Livewire</th>
                        <th @class([$__VIEW_ID__ . '-326678f8']) @attr(['scope' => 'col'])>Inertia + Vue/React</th>
                        <th @class([$__VIEW_ID__ . '-9fb18ae5']) @attr(['scope' => 'col'])>SPA + REST API</th>
                    </tr>
                </thead>
                <tbody @class([$__VIEW_ID__ . '-7f65604e'])>
                    <tr @class([$__VIEW_ID__ . '-8dad2439'])>
                        <th @class([$__VIEW_ID__ . '-301bc4e9']) @attr(['scope' => 'row'])>HTML của lần tải đầu</th>
                        <td @class([$__VIEW_ID__ . '-ce75cd42', 'col-sao'])>Đầy đủ nội dung</td>
                        <td @class([$__VIEW_ID__ . '-457c955f'])>Đầy đủ nội dung</td>
                        <td @class([$__VIEW_ID__ . '-45f02287'])>Đầy đủ nội dung</td>
                        <td @class([$__VIEW_ID__ . '-b955e6d2'])>Đầy đủ nếu bật SSR</td>
                        <td @class([$__VIEW_ID__ . '-083b33c1'])><span @class([$__VIEW_ID__ . '-0997092a', 'cmp-no'])>Div rỗng</span></td>
                    </tr>
                    <tr @class([$__VIEW_ID__ . '-882d5cab'])>
                        <th @class([$__VIEW_ID__ . '-ba550c5b']) @attr(['scope' => 'row'])>Tương tác sau khi tải</th>
                        <td @class([$__VIEW_ID__ . '-54dffeda', 'col-sao'])>Chạy tại client, không round-trip</td>
                        <td @class([$__VIEW_ID__ . '-c722ea5d'])>Chạy tại client, phạm vi hẹp</td>
                        <td @class([$__VIEW_ID__ . '-3e7423f9'])><span @class([$__VIEW_ID__ . '-4cde2420', 'cmp-no'])>Mỗi tương tác một request</span></td>
                        <td @class([$__VIEW_ID__ . '-ca7e945f'])>Chạy tại client</td>
                        <td @class([$__VIEW_ID__ . '-6787453d'])>Chạy tại client</td>
                    </tr>
                    <tr @class([$__VIEW_ID__ . '-ac7b9f93'])>
                        <th @class([$__VIEW_ID__ . '-0abb521a']) @attr(['scope' => 'row'])>Nguồn sinh HTML và JS</th>
                        <td @class([$__VIEW_ID__ . '-ec937c06', 'col-sao'])><span @class([$__VIEW_ID__ . '-be27755a', 'cmp-yes'])>Cùng một AST</span></td>
                        <td @class([$__VIEW_ID__ . '-bae9ebd3'])>Hai nguồn viết tay</td>
                        <td @class([$__VIEW_ID__ . '-ce00eb8b'])>Server sinh HTML, JS chỉ vá DOM</td>
                        <td @class([$__VIEW_ID__ . '-d07dce1b'])>Hai nguồn viết tay</td>
                        <td @class([$__VIEW_ID__ . '-011532cb'])>Một nguồn, chỉ ở client</td>
                    </tr>
                    <tr @class([$__VIEW_ID__ . '-f4637881'])>
                        <th @class([$__VIEW_ID__ . '-464845f2']) @attr(['scope' => 'row'])>Ngôn ngữ viết view</th>
                        <td @class([$__VIEW_ID__ . '-6bda1edc', 'col-sao'])>Một cú pháp <code @class([$__VIEW_ID__ . '-7d1782a7'])>.sao</code></td>
                        <td @class([$__VIEW_ID__ . '-8a30856c'])>Blade cộng JavaScript rời</td>
                        <td @class([$__VIEW_ID__ . '-a3e1c81d'])>Blade cộng PHP class</td>
                        <td @class([$__VIEW_ID__ . '-91720c5f'])>Vue hoặc React, tách khỏi Blade</td>
                        <td @class([$__VIEW_ID__ . '-91dd8fc1'])>Framework JavaScript</td>
                    </tr>
                    <tr @class([$__VIEW_ID__ . '-6597edba'])>
                        <th @class([$__VIEW_ID__ . '-2122cc93']) @attr(['scope' => 'row'])>Cần tầng API riêng</th>
                        <td @class([$__VIEW_ID__ . '-45190744', 'col-sao'])>Không bắt buộc</td>
                        <td @class([$__VIEW_ID__ . '-d531e344'])>Không</td>
                        <td @class([$__VIEW_ID__ . '-d713d184'])>Không</td>
                        <td @class([$__VIEW_ID__ . '-e3533c6a'])>Không, props đi qua adapter</td>
                        <td @class([$__VIEW_ID__ . '-dd5f8b83'])><span @class([$__VIEW_ID__ . '-6cd7c5eb', 'cmp-no'])>Bắt buộc</span></td>
                    </tr>
                    <tr @class([$__VIEW_ID__ . '-8df5b560'])>
                        <th @class([$__VIEW_ID__ . '-45c45f5a']) @attr(['scope' => 'row'])>Đa mặt tiền, tách bundle</th>
                        <td @class([$__VIEW_ID__ . '-2f6bc071', 'col-sao'])><span @class([$__VIEW_ID__ . '-503211cd', 'cmp-yes'])>Sẵn bốn context</span></td>
                        <td @class([$__VIEW_ID__ . '-ddc611c2'])>Tự dựng</td>
                        <td @class([$__VIEW_ID__ . '-eb85c516'])>Tự dựng</td>
                        <td @class([$__VIEW_ID__ . '-5fc6e73f'])>Tự dựng</td>
                        <td @class([$__VIEW_ID__ . '-c9c288b0'])>Tự dựng</td>
                    </tr>
                    <tr @class([$__VIEW_ID__ . '-c5a9e0e7'])>
                        <th @class([$__VIEW_ID__ . '-a057896d']) @attr(['scope' => 'row'])>Vòng đời view có contract</th>
                        <td @class([$__VIEW_ID__ . '-d4977128', 'col-sao'])>Bảy trạng thái, dọn theo ref-count</td>
                        <td @class([$__VIEW_ID__ . '-fee9cde8'])>Không có</td>
                        <td @class([$__VIEW_ID__ . '-9c519129'])>Theo component phía server</td>
                        <td @class([$__VIEW_ID__ . '-97814582'])>Theo framework JavaScript</td>
                        <td @class([$__VIEW_ID__ . '-9fe906a2'])>Theo framework JavaScript</td>
                    </tr>
                    <tr @class([$__VIEW_ID__ . '-71b332b4'])>
                        <th @class([$__VIEW_ID__ . '-e2fe5cbc']) @attr(['scope' => 'row'])>Độ chín và cộng đồng</th>
                        <td @class([$__VIEW_ID__ . '-8ca96ddc', 'col-sao'])><span @class([$__VIEW_ID__ . '-d18ad838', 'cmp-no'])>Đang dựng nền</span></td>
                        <td @class([$__VIEW_ID__ . '-4fab05e4'])>Rất chín</td>
                        <td @class([$__VIEW_ID__ . '-d781159c'])>Rất chín</td>
                        <td @class([$__VIEW_ID__ . '-8700b8fc'])>Rất chín</td>
                        <td @class([$__VIEW_ID__ . '-9ad17705'])>Rất chín</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </section>
@endWrapper
