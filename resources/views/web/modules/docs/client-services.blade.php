@exec($__ONE_COMPONENT_REGISTRY__ = ['code-window' => 'web.components.code-window']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])>
                <p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>12</span> RUNTIME</p>
                <h1 @class([$__VIEW_ID__ . '-Bdoc112'])>Dịch vụ phía client.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-Bdoc121'])>Runtime gom mọi dịch vụ dùng chung vào một namespace <code @class([$__VIEW_ID__ . '-Bdoc1211'])>App</code>. Trong <code @class([$__VIEW_ID__ . '-Bdoc1212'])>&lt;script setup&gt;</code> của bất kỳ view nào cũng gọi thẳng được, không phải import.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-Bdoc2', 'doc-body'])>
            <p @class([$__VIEW_ID__ . '-Bdoc21', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc211'])>BẢNG TRA</span> Có gì trong App</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc22'])>Mười ba dịch vụ, mỗi cái một việc.</h2>
            <div @class([$__VIEW_ID__ . '-Bdoc23', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc231'])><div @class([$__VIEW_ID__ . '-Bdoc2311', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc23111'])>App.Event</code></div><span @class([$__VIEW_ID__ . '-Bdoc2312'])>Bus pub/sub. Kênh duy nhất để view con nói chuyện với view cha mà không cần tham chiếu lẫn nhau.</span><b @class([$__VIEW_ID__ . '-Bdoc2313'])>giao tiếp</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc232'])><div @class([$__VIEW_ID__ . '-Bdoc2321', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc23211'])>App.Store</code></div><span @class([$__VIEW_ID__ . '-Bdoc2322'])>Kho key-value reactive trong bộ nhớ, chia sẻ giữa các view. Khác state của view ở chỗ không chết theo view.</span><b @class([$__VIEW_ID__ . '-Bdoc2323'])>state</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc233'])><div @class([$__VIEW_ID__ . '-Bdoc2331', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc23311'])>App.Storage</code></div><span @class([$__VIEW_ID__ . '-Bdoc2332'])>Bọc <code @class([$__VIEW_ID__ . '-Bdoc23321'])>localStorage</code>: có TTL, phát sự kiện khi đổi, xuất/nhập cả kho.</span><b @class([$__VIEW_ID__ . '-Bdoc2333'])>lưu trữ</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc234'])><div @class([$__VIEW_ID__ . '-Bdoc2341', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc23411'])>App.Http</code></div><span @class([$__VIEW_ID__ . '-Bdoc2342'])>HTTP client trên nền <code @class([$__VIEW_ID__ . '-Bdoc23421'])>fetch</code>.</span><b @class([$__VIEW_ID__ . '-Bdoc2343'])>mạng</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc235'])><div @class([$__VIEW_ID__ . '-Bdoc2351', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc23511'])>App.API</code></div><span @class([$__VIEW_ID__ . '-Bdoc2352'])>Lớp trên <code @class([$__VIEW_ID__ . '-Bdoc23521'])>App.Http</code>, biết prefix và quy ước response của context <code @class([$__VIEW_ID__ . '-Bdoc23522'])>api</code>.</span><b @class([$__VIEW_ID__ . '-Bdoc2353'])>mạng</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc236'])><div @class([$__VIEW_ID__ . '-Bdoc2361', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc23611'])>App.Router</code></div><span @class([$__VIEW_ID__ . '-Bdoc2362'])>Điều hướng SPA: khớp path → component, đẩy history, giữ cache trang.</span><b @class([$__VIEW_ID__ . '-Bdoc2363'])>điều hướng</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc237'])><div @class([$__VIEW_ID__ . '-Bdoc2371', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc23711'])>App.View</code></div><span @class([$__VIEW_ID__ . '-Bdoc2372'])>Tra và dựng view theo đường dẫn, dùng khi cần mount thủ công.</span><b @class([$__VIEW_ID__ . '-Bdoc2373'])>view</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc238'])><div @class([$__VIEW_ID__ . '-Bdoc2381', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc23811'])>App.Registry</code></div><span @class([$__VIEW_ID__ . '-Bdoc2382'])>Bản đồ đường dẫn view → factory, do compiler sinh lúc build.</span><b @class([$__VIEW_ID__ . '-Bdoc2383'])>view</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc239'])><div @class([$__VIEW_ID__ . '-Bdoc2391', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc23911'])>App.Head</code></div><span @class([$__VIEW_ID__ . '-Bdoc2392'])>Nơi duy nhất được ghi vào <code @class([$__VIEW_ID__ . '-Bdoc23921'])>&lt;head&gt;</code>: title, meta, link. Tự hoàn tác tag của trang cũ khi chuyển trang.</span><b @class([$__VIEW_ID__ . '-Bdoc2393'])>tài liệu</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc23e10_'])><div @class([$__VIEW_ID__ . '-Bdoc23e10_1', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc23e10_11'])>App.Marker</code></div><span @class([$__VIEW_ID__ . '-Bdoc23e10_2'])>Sổ đăng ký marker — các comment node đánh dấu vùng reactive để hydrate bám vào.</span><b @class([$__VIEW_ID__ . '-Bdoc23e10_3'])>hydrate</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc23e11_'])><div @class([$__VIEW_ID__ . '-Bdoc23e11_1', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc23e11_11'])>App.Helper</code></div><span @class([$__VIEW_ID__ . '-Bdoc23e11_2'])>Bản JavaScript của các helper PHP, để cùng một biểu thức chạy giống nhau ở hai đầu.</span><b @class([$__VIEW_ID__ . '-Bdoc23e11_3'])>tiện ích</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc23e12_'])><div @class([$__VIEW_ID__ . '-Bdoc23e12_1', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc23e12_11'])>App.Logger</code></div><span @class([$__VIEW_ID__ . '-Bdoc23e12_2'])>Log theo cấp, tắt được ở production.</span><b @class([$__VIEW_ID__ . '-Bdoc23e12_3'])>tiện ích</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc23e13_'])><div @class([$__VIEW_ID__ . '-Bdoc23e13_1', 'dt-key'])><code @class([$__VIEW_ID__ . '-Bdoc23e13_11'])>App.Devtools</code></div><span @class([$__VIEW_ID__ . '-Bdoc23e13_2'])>Phát sự kiện nội bộ cho công cụ debug: state đổi, view mount, marker khớp.</span><b @class([$__VIEW_ID__ . '-Bdoc23e13_3'])>tiện ích</b></div>
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc24', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc241'])>DÙNG THẬT</span> Con nói với cha</p>
            <h2 @class([$__VIEW_ID__ . '-Bdoc25'])><code @class([$__VIEW_ID__ . '-Bdoc251'])>App.Event</code> là đường đi ngược duy nhất.</h2>
            <p @class([$__VIEW_ID__ . '-Bdoc26'])>Props chỉ chảy từ cha xuống con. Muốn con báo ngược lên, dùng bus — cha đăng ký lúc mount và huỷ đăng ký lúc destroy.</p>
            @startMarker('component', 'Bdoc2c1')
            @exec($__env->startSection($__ONE_COMPONENT_REGISTRY__['code-window'].'_0'))
@verbatim
mounted() {
    this._off = [
        App.Event.on('roster:editing', (uid, on) => { /* … */ }),
        App.Event.on('roster:refresh', () => this.load()),
    ];
}

destroyed() {
    (this._off || []).forEach(off => off());
}
@endverbatim
@exec($__env->stopSection())
@exec($__code_window__0_content = $__env->yieldContent($__ONE_COMPONENT_REGISTRY__['code-window'].'_0'))
@include('web.components.code-window', ['label' => "TS", 'title' => "modules/roster/index.sao — &lt;script setup&gt;", 'lang' => "js", '__ONE_CHILDREN_CONTENT__' => $__code_window__0_content])
@endMarker('component', 'Bdoc2c1')
            <div @class([$__VIEW_ID__ . '-Bdoc27', 'ov-note'])>
                <code @class([$__VIEW_ID__ . '-Bdoc271'])>on()</code> trả về hàm huỷ đăng ký. Không gọi nó lúc destroy thì listener của view cũ vẫn sống sau khi chuyển trang — rò rỉ này rất khó truy vì trang trông vẫn chạy.
            </div>

            <p @class([$__VIEW_ID__ . '-Bdoc28', 'ov-sub'])>Khi nào dùng cái nào</p>
            <div @class([$__VIEW_ID__ . '-Bdoc29', 'directive-table'])>
                <div @class([$__VIEW_ID__ . '-Bdoc291'])><div @class([$__VIEW_ID__ . '-Bdoc2911', 'dt-key'])>Dữ liệu chỉ của một view</div><span @class([$__VIEW_ID__ . '-Bdoc2912'])><code @class([$__VIEW_ID__ . '-Bdoc29121'])>&#64;states</code> — chết theo view, đúng ý</span><b @class([$__VIEW_ID__ . '-Bdoc2913'])>state</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc292'])><div @class([$__VIEW_ID__ . '-Bdoc2921', 'dt-key'])>Dùng chung nhiều view, mất khi tải lại</div><span @class([$__VIEW_ID__ . '-Bdoc2922'])><code @class([$__VIEW_ID__ . '-Bdoc29221'])>App.Store</code></span><b @class([$__VIEW_ID__ . '-Bdoc2923'])>store</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc293'])><div @class([$__VIEW_ID__ . '-Bdoc2931', 'dt-key'])>Phải sống qua lần tải lại</div><span @class([$__VIEW_ID__ . '-Bdoc2932'])><code @class([$__VIEW_ID__ . '-Bdoc29321'])>App.Storage</code></span><b @class([$__VIEW_ID__ . '-Bdoc2933'])>storage</b></div>
                <div @class([$__VIEW_ID__ . '-Bdoc294'])><div @class([$__VIEW_ID__ . '-Bdoc2941', 'dt-key'])>Báo một sự việc, không giữ giá trị</div><span @class([$__VIEW_ID__ . '-Bdoc2942'])><code @class([$__VIEW_ID__ . '-Bdoc29421'])>App.Event</code></span><b @class([$__VIEW_ID__ . '-Bdoc2943'])>event</b></div>
            </div>
        </div>
    @endblock
