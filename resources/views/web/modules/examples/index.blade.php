@exec($__ONE_COMPONENT_REGISTRY__ = ['code-block' => 'web.components.code-block']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . 'lab')
    @section('meta:title', 'Ví dụ Thực tế (Examples) - Saola Ecosystem')
    @section('meta:description', 'Tuyển tập các ứng dụng web thực tế xây dựng trên nền tảng Saola: Data Grid 3.800 dòng, Kanban kéo thả, Modal CRUD, Realtime Ticker, Event Stream SSE, Roster Sync và Todo Workspace.')
    @section('meta:keywords', 'saola examples, vi du thuc te, kanban board, data grid, realtime market, event stream, roster sync, modal crud')

    @block('main')
        <div @class([$__VIEW_ID__ . '-Bmain1', 'ex-hero'])>
            <p @class([$__VIEW_ID__ . '-Bmain11', 'kicker'])><span @class([$__VIEW_ID__ . '-Bmain111'])>ỨNG DỤNG THỰC TẾ · SHOWCASE</span></p>
            <h1 @class([$__VIEW_ID__ . '-Bmain12'])>Tuyển tập Ví dụ Ứng dụng Thực tế</h1>
            <p @class([$__VIEW_ID__ . '-Bmain13', 'lab-lead'])>
                Không phải là những đoạn code demo cú pháp nhỏ lẻ, các ví dụ dưới đây là những mô hình bài toán thực tế
                thường gặp khi xây dựng ứng dụng web hiện đại: xử lý dữ liệu lớn, tương tác kéo thả, đồng bộ ngầm đa người dùng,
                và kết nối thời gian thực — tất cả vận hành trên cùng một kiến trúc <strong @class([$__VIEW_ID__ . '-Bmain131'])>Laravel Backend + Saola SPA Client</strong>.
            </p>
        </div>

        <div @class([$__VIEW_ID__ . '-Bmain2', 'ex-sections'])>
            {{-- Nhóm 1: Quản trị Dữ liệu & Bảng biểu --}}
            <section @class([$__VIEW_ID__ . '-Bmain21', 'ex-group'])>
                <div @class([$__VIEW_ID__ . '-Bmain211', 'ex-group-header'])>
                    <span @class([$__VIEW_ID__ . '-Bmain2111', 'ex-badge'])>01 / DỮ LIỆU LỚN &amp; CRUD</span>
                    <h2 @class([$__VIEW_ID__ . '-Bmain2112'])>Quản trị Dữ liệu &amp; Bảng biểu</h2>
                    <p @class([$__VIEW_ID__ . '-Bmain2113'])>Giải quyết bài toán hiển thị và thao tác trên khối lượng dữ liệu lớn mà vẫn duy trì tốc độ tức thì.</p>
                </div>

                <div @class([$__VIEW_ID__ . '-Bmain212', 'ex-cards-grid'])>
                    <article @class([$__VIEW_ID__ . '-Bmain2121', 'ex-card'])>
                        <div @class([$__VIEW_ID__ . '-Bmain21211', 'ex-card-body'])>
                            <span @class([$__VIEW_ID__ . '-Bmain212111', 'ex-tag'])>Server-side Filtering &amp; URL Sync</span>
                            <h3 @class([$__VIEW_ID__ . '-Bmain212112'])>Data Grid 3.800 Dòng</h3>
                            <p @class([$__VIEW_ID__ . '-Bmain212113'])>Bảng dữ liệu hàng ngàn bản ghi với bộ lọc từ khóa, lọc theo trạng thái và phân trang. SSR render tức thì cho lần tải đầu, các thao tác sau chỉ lấy JSON và cập nhật DOM mượt mà, đồng bộ state lên URL.</p>
                            <div @class([$__VIEW_ID__ . '-Bmain212114', 'ex-card-specs'])>
                                <span @class([$__VIEW_ID__ . '-Bmain2121141'])><b @class([$__VIEW_ID__ . '-Bmain21211411'])>Dữ liệu:</b> 3.800 packages</span>
                                <span @class([$__VIEW_ID__ . '-Bmain2121142'])><b @class([$__VIEW_ID__ . '-Bmain21211421'])>Cơ chế:</b> SSR + JSON SPA update</span>
                            </div>
                        </div>
                        <div @class([$__VIEW_ID__ . '-Bmain21212', 'ex-card-footer'])>
                            <a @class([$__VIEW_ID__ . '-Bmain212121', 'button', 'button-primary']) @attr(['href' => '/demo/grid'])>Mở ứng dụng Data Grid →</a>
                        </div>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bmain2122', 'ex-card'])>
                        <div @class([$__VIEW_ID__ . '-Bmain21221', 'ex-card-body'])>
                            <span @class([$__VIEW_ID__ . '-Bmain212211', 'ex-tag'])>Modal Popup &amp; Two-way Binding</span>
                            <h3 @class([$__VIEW_ID__ . '-Bmain212212'])>Item Editor &amp; Modal CRUD</h3>
                            <p @class([$__VIEW_ID__ . '-Bmain212213'])>Hệ thống quản lý danh bạ với popup modal thêm/sửa, liên kết dữ liệu hai chiều qua <code @class([$__VIEW_ID__ . '-Bmain2122131'])>&#64;bind</code>, kiểm tra hợp lệ dữ liệu (validation) và cập nhật DOM tức thì với reconciliation <code @class([$__VIEW_ID__ . '-Bmain2122132'])>&#64;key</code>.</p>
                            <div @class([$__VIEW_ID__ . '-Bmain212214', 'ex-card-specs'])>
                                <span @class([$__VIEW_ID__ . '-Bmain2122141'])><b @class([$__VIEW_ID__ . '-Bmain21221411'])>Thao tác:</b> Thêm, Sửa, Xóa, Đổi thứ tự</span>
                                <span @class([$__VIEW_ID__ . '-Bmain2122142'])><b @class([$__VIEW_ID__ . '-Bmain21221421'])>Kỹ thuật:</b> Modal, &#64;bind, &#64;key</span>
                            </div>
                        </div>
                        <div @class([$__VIEW_ID__ . '-Bmain21222', 'ex-card-footer'])>
                            <a @class([$__VIEW_ID__ . '-Bmain212221', 'button', 'button-primary']) @attr(['href' => '/demo/item-editor'])>Mở Item Editor →</a>
                        </div>
                    </article>
                </div>
            </section>

            {{-- Nhóm 2: Tương tác & Quy trình --}}
            <section @class([$__VIEW_ID__ . '-Bmain22', 'ex-group'])>
                <div @class([$__VIEW_ID__ . '-Bmain221', 'ex-group-header'])>
                    <span @class([$__VIEW_ID__ . '-Bmain2211', 'ex-badge'])>02 / WORKFLOW &amp; INTERACTION</span>
                    <h2 @class([$__VIEW_ID__ . '-Bmain2212'])>Tương tác Phức tạp &amp; Quy trình</h2>
                    <p @class([$__VIEW_ID__ . '-Bmain2213'])>Mô hình tương tác trực quan cao độ: kéo thả giữa các danh sách và bộ đệm trạng thái client.</p>
                </div>

                <div @class([$__VIEW_ID__ . '-Bmain222', 'ex-cards-grid'])>
                    <article @class([$__VIEW_ID__ . '-Bmain2221', 'ex-card'])>
                        <div @class([$__VIEW_ID__ . '-Bmain22211', 'ex-card-body'])>
                            <span @class([$__VIEW_ID__ . '-Bmain222111', 'ex-tag'])>Drag &amp; Drop · Cross-list Reconciliation</span>
                            <h3 @class([$__VIEW_ID__ . '-Bmain222112'])>Bảng Kanban Kéo Thả</h3>
                            <p @class([$__VIEW_ID__ . '-Bmain222113'])>Bảng quản lý công việc nhiều cột kiểu Jira/Trello. Thẻ công việc di chuyển qua lại giữa các vòng lặp <code @class([$__VIEW_ID__ . '-Bmain2221131'])>&#64;foreach</code> khác nhau — ca xử lý phức tạp nhất của danh sách có khoá, đồng bộ server ngầm tối ưu.</p>
                            <div @class([$__VIEW_ID__ . '-Bmain222114', 'ex-card-specs'])>
                                <span @class([$__VIEW_ID__ . '-Bmain2221141'])><b @class([$__VIEW_ID__ . '-Bmain22211411'])>Tương tác:</b> Kéo thả native HTML5</span>
                                <span @class([$__VIEW_ID__ . '-Bmain2221142'])><b @class([$__VIEW_ID__ . '-Bmain22211421'])>Xử lý:</b> Optimistic UI + Server Commit</span>
                            </div>
                        </div>
                        <div @class([$__VIEW_ID__ . '-Bmain22212', 'ex-card-footer'])>
                            <a @class([$__VIEW_ID__ . '-Bmain222121', 'button', 'button-primary']) @attr(['href' => '/demo/board'])>Mở Bảng Kanban →</a>
                        </div>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bmain2222', 'ex-card'])>
                        <div @class([$__VIEW_ID__ . '-Bmain22221', 'ex-card-body'])>
                            <span @class([$__VIEW_ID__ . '-Bmain222211', 'ex-tag'])>Client State &amp; PageCache LRU</span>
                            <h3 @class([$__VIEW_ID__ . '-Bmain222212'])>Todo Workspace</h3>
                            <p @class([$__VIEW_ID__ . '-Bmain222213'])>Ứng dụng quản lý tác vụ với lọc hoàn thành, tính toán computed và lưu trữ. Đặc biệt: bảo toàn 100% form và dữ liệu khi người dùng điều hướng sang trang khác rồi bấm Back/Forward nhờ bộ đệm PageCache.</p>
                            <div @class([$__VIEW_ID__ . '-Bmain222214', 'ex-card-specs'])>
                                <span @class([$__VIEW_ID__ . '-Bmain2222141'])><b @class([$__VIEW_ID__ . '-Bmain22221411'])>Trạng thái:</b> State cục bộ ở instance</span>
                                <span @class([$__VIEW_ID__ . '-Bmain2222142'])><b @class([$__VIEW_ID__ . '-Bmain22221421'])>Độ bền:</b> PageCache LRU không reload</span>
                            </div>
                        </div>
                        <div @class([$__VIEW_ID__ . '-Bmain22222', 'ex-card-footer'])>
                            <a @class([$__VIEW_ID__ . '-Bmain222221', 'button', 'button-primary']) @attr(['href' => '/todo-list'])>Mở Todo Workspace →</a>
                        </div>
                    </article>
                </div>
            </section>

            {{-- Nhóm 3: Thời gian thực & Luồng --}}
            <section @class([$__VIEW_ID__ . '-Bmain23', 'ex-group'])>
                <div @class([$__VIEW_ID__ . '-Bmain231', 'ex-group-header'])>
                    <span @class([$__VIEW_ID__ . '-Bmain2311', 'ex-badge'])>03 / REALTIME &amp; STREAMING</span>
                    <h2 @class([$__VIEW_ID__ . '-Bmain2312'])>Thời Gian Thực &amp; Luồng Dữ Liệu</h2>
                    <p @class([$__VIEW_ID__ . '-Bmain2313'])>Giao tiếp liên tục hai chiều với máy chủ, cập nhật dữ liệu tài chính và sự kiện từng giây.</p>
                </div>

                <div @class([$__VIEW_ID__ . '-Bmain232', 'ex-cards-grid'])>
                    <article @class([$__VIEW_ID__ . '-Bmain2321', 'ex-card'])>
                        <div @class([$__VIEW_ID__ . '-Bmain23211', 'ex-card-body'])>
                            <span @class([$__VIEW_ID__ . '-Bmain232111', 'ex-tag'])>Live Ticker &amp; Order Book</span>
                            <h3 @class([$__VIEW_ID__ . '-Bmain232112'])>Bảng Giá &amp; Biểu Đồ Realtime</h3>
                            <p @class([$__VIEW_ID__ . '-Bmain232113'])>Bảng theo dõi thị trường tài chính với biểu đồ nến thời gian thực, sổ lệnh Order Book biến động từng mili-giây, tính toán chênh lệch giá và khớp lệnh tức thì.</p>
                            <div @class([$__VIEW_ID__ . '-Bmain232114', 'ex-card-specs'])>
                                <span @class([$__VIEW_ID__ . '-Bmain2321141'])><b @class([$__VIEW_ID__ . '-Bmain23211411'])>Giao diện:</b> Biểu đồ Canvas + Sổ lệnh</span>
                                <span @class([$__VIEW_ID__ . '-Bmain2321142'])><b @class([$__VIEW_ID__ . '-Bmain23211421'])>Tần suất:</b> Cập nhật liên tục theo tick</span>
                            </div>
                        </div>
                        <div @class([$__VIEW_ID__ . '-Bmain23212', 'ex-card-footer'])>
                            <a @class([$__VIEW_ID__ . '-Bmain232121', 'button', 'button-primary']) @attr(['href' => '/demo/market'])>Mở Thị Trường Realtime →</a>
                        </div>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bmain2322', 'ex-card'])>
                        <div @class([$__VIEW_ID__ . '-Bmain23221', 'ex-card-body'])>
                            <span @class([$__VIEW_ID__ . '-Bmain232211', 'ex-tag'])>Server-Sent Events (SSE)</span>
                            <h3 @class([$__VIEW_ID__ . '-Bmain232212'])>Luồng Sự Kiện SSE Stream</h3>
                            <p @class([$__VIEW_ID__ . '-Bmain232213'])>Nhận luồng tin tức liên tục từ server bằng <code @class([$__VIEW_ID__ . '-Bmain2322131'])>text/event-stream</code>. Tự động kết nối lại khi mất mạng, backlog SSR được render sẵn giúp trang có nội dung ngay cả khi chưa kết nối.</p>
                            <div @class([$__VIEW_ID__ . '-Bmain232214', 'ex-card-specs'])>
                                <span @class([$__VIEW_ID__ . '-Bmain2322141'])><b @class([$__VIEW_ID__ . '-Bmain23221411'])>Giao thức:</b> HTTP SSE EventStream</span>
                                <span @class([$__VIEW_ID__ . '-Bmain2322142'])><b @class([$__VIEW_ID__ . '-Bmain23221421'])>Đặc tính:</b> Auto-reconnect &amp; Timeline Feed</span>
                            </div>
                        </div>
                        <div @class([$__VIEW_ID__ . '-Bmain23222', 'ex-card-footer'])>
                            <a @class([$__VIEW_ID__ . '-Bmain232221', 'button', 'button-primary']) @attr(['href' => '/demo/stream'])>Mở Luồng Sự Kiện SSE →</a>
                        </div>
                    </article>
                </div>
            </section>

            {{-- Nhóm 4: Đồng bộ Đa người dùng & Sự kiện --}}
            <section @class([$__VIEW_ID__ . '-Bmain24', 'ex-group'])>
                <div @class([$__VIEW_ID__ . '-Bmain241', 'ex-group-header'])>
                    <span @class([$__VIEW_ID__ . '-Bmain2411', 'ex-badge'])>04 / CONCURRENCY &amp; EVENTS</span>
                    <h2 @class([$__VIEW_ID__ . '-Bmain2412'])>Đồng Bộ Đa Người Dùng &amp; Sự Kiện</h2>
                    <p @class([$__VIEW_ID__ . '-Bmain2413'])>Giải quyết bài toán nhiều người cùng chỉnh sửa dữ liệu và kiến trúc giao tiếp phân tầng.</p>
                </div>

                <div @class([$__VIEW_ID__ . '-Bmain242', 'ex-cards-grid'])>
                    <article @class([$__VIEW_ID__ . '-Bmain2421', 'ex-card'])>
                        <div @class([$__VIEW_ID__ . '-Bmain24211', 'ex-card-body'])>
                            <span @class([$__VIEW_ID__ . '-Bmain242111', 'ex-tag'])>Concurrent Editing · Conflict Lock</span>
                            <h3 @class([$__VIEW_ID__ . '-Bmain242112'])>Roster Concurrent Sync</h3>
                            <p @class([$__VIEW_ID__ . '-Bmain242113'])>Quản lý nhân sự đồng bộ ngầm qua API định kỳ 30s. Form nháp ở component con không bị mất khi danh sách cha refetch ngầm, hỗ trợ phát hiện xung đột phiên bản (optimistic locking).</p>
                            <div @class([$__VIEW_ID__ . '-Bmain242114', 'ex-card-specs'])>
                                <span @class([$__VIEW_ID__ . '-Bmain2421141'])><b @class([$__VIEW_ID__ . '-Bmain24211411'])>Đồng bộ:</b> 30s background polling</span>
                                <span @class([$__VIEW_ID__ . '-Bmain2421142'])><b @class([$__VIEW_ID__ . '-Bmain24211421'])>An toàn:</b> State isolation &amp; Version check</span>
                            </div>
                        </div>
                        <div @class([$__VIEW_ID__ . '-Bmain24212', 'ex-card-footer'])>
                            <a @class([$__VIEW_ID__ . '-Bmain242121', 'button', 'button-primary']) @attr(['href' => '/roster'])>Mở Roster Sync →</a>
                        </div>
                    </article>

                    <article @class([$__VIEW_ID__ . '-Bmain2422', 'ex-card'])>
                        <div @class([$__VIEW_ID__ . '-Bmain24221', 'ex-card-body'])>
                            <span @class([$__VIEW_ID__ . '-Bmain242211', 'ex-tag'])>Child-to-Parent Event Emission</span>
                            <h3 @class([$__VIEW_ID__ . '-Bmain242212'])>Sự Kiện Component Con → Cha</h3>
                            <p @class([$__VIEW_ID__ . '-Bmain242213'])>Kiến trúc giao tiếp giữa các tầng component: component con phát sự kiện qua event emit, component cha lắng nghe và cập nhật state tổng thể, hỗ trợ cả thẻ component tự đóng và <code @class([$__VIEW_ID__ . '-Bmain2422131'])>&#64;include</code>.</p>
                            <div @class([$__VIEW_ID__ . '-Bmain242214', 'ex-card-specs'])>
                                <span @class([$__VIEW_ID__ . '-Bmain2422141'])><b @class([$__VIEW_ID__ . '-Bmain24221411'])>Mô hình:</b> Emit dispatching</span>
                                <span @class([$__VIEW_ID__ . '-Bmain2422142'])><b @class([$__VIEW_ID__ . '-Bmain24221421'])>Cú pháp:</b> Tag event handler &amp; on$ props</span>
                            </div>
                        </div>
                        <div @class([$__VIEW_ID__ . '-Bmain24222', 'ex-card-footer'])>
                            <a @class([$__VIEW_ID__ . '-Bmain242221', 'button', 'button-primary']) @attr(['href' => '/demo/emit'])>Mở Demo Emit Sự Kiện →</a>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    @endblock
