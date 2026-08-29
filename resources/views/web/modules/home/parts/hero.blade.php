@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@wrapper
<section @class([$__VIEW_ID__ . '-e1', 'hx-hero'])>
        <div @class([$__VIEW_ID__ . '-e11', 'hx-copy'])>
            <h1 @class([$__VIEW_ID__ . '-e111'])>
                <span @class([$__VIEW_ID__ . '-e1111', 'hx-punch'])>Một</span> lõi Laravel.<br @class([$__VIEW_ID__ . '-e1112'])>
                <span @class([$__VIEW_ID__ . '-e1113', 'hx-punch'])>Không</span> tách rời frontend.<br @class([$__VIEW_ID__ . '-e1114'])>
                <span @class([$__VIEW_ID__ . '-e1115', 'hx-punch'])>Hai</span> đầu ra liền mạch.<br @class([$__VIEW_ID__ . '-e1116'])>
            </h1>
            <p @class([$__VIEW_ID__ . '-e112', 'hx-lead'])>Không phải một giải pháp chắp vá, Saola là hệ sinh thái toàn diện nâng tầm kiến trúc Laravel. Phân tách logic rành mạch với hệ thống Module và Context độc lập. Hợp nhất trải nghiệm hiển thị bằng một trình biên dịch đột phá — nơi chỉ một file <code @class([$__VIEW_ID__ . '-e1121'])>.sao</code> duy nhất tự động kiến tạo cả HTML chuẩn SEO lẫn ứng dụng SPA mượt mà. Tất cả nằm trong một luồng chảy xuyên suốt.</p>
            <div @class([$__VIEW_ID__ . '-e113', 'hx-actions'])>
                <a @class([$__VIEW_ID__ . '-e1131', 'hx-btn', 'hx-btn-primary']) @attr(['href' => '/docs/getting-started'])>Bắt đầu trong 4 bước</a>
                <a @class([$__VIEW_ID__ . '-e1132', 'hx-btn', 'hx-btn-ghost']) @attr(['href' => '#features'])>Tìm hiểu thêm</a>
            </div>
        </div>

        <figure @class([$__VIEW_ID__ . '-e12', 'hx-object']) @attr(['aria-label' => 'Một nguồn .sao sinh ra hai đầu ra'])>
            <div @class([$__VIEW_ID__ . '-e121', 'hx-node', 'hx-node-source'])>
                <span @class([$__VIEW_ID__ . '-e1211', 'hx-node-tag'])>NGUỒN</span>
                <strong @class([$__VIEW_ID__ . '-e1212'])>user.sao</strong>
                <small @class([$__VIEW_ID__ . '-e1213'])>state · template · script setup</small>
                <pre @class([$__VIEW_ID__ . '-e1214', 'hx-mini']) @attr(['aria-hidden' => 'true'])><span @class([$__VIEW_ID__ . '-e12141', 'code-line'])><span @class([$__VIEW_ID__ . '-e121411', 'kw'])>&#64;states</span><span @class([$__VIEW_ID__ . '-e121412', 'op'])>({</span><span @class([$__VIEW_ID__ . '-e121413', 'vr'])> likes</span><span @class([$__VIEW_ID__ . '-e121414', 'op'])>:</span><span @class([$__VIEW_ID__ . '-e121415', 'st'])> 12</span><span @class([$__VIEW_ID__ . '-e121416', 'op'])> })</span></span><span @class([$__VIEW_ID__ . '-e12142', 'code-line'])><span @class([$__VIEW_ID__ . '-e121421', 'op'])>&lt;</span><span @class([$__VIEW_ID__ . '-e121422', 'kw'])>template</span><span @class([$__VIEW_ID__ . '-e121423', 'op'])>&gt;</span></span><span @class([$__VIEW_ID__ . '-e12143', 'code-line', 'code-indent-1'])><span @class([$__VIEW_ID__ . '-e121431', 'op'])>&lt;</span><span @class([$__VIEW_ID__ . '-e121432', 'fn'])>article</span><span @class([$__VIEW_ID__ . '-e121433', 'vr'])> class</span><span @class([$__VIEW_ID__ . '-e121434', 'op'])>=</span><span @class([$__VIEW_ID__ . '-e121435', 'st'])>"card"</span><span @class([$__VIEW_ID__ . '-e121436', 'op'])>&gt;</span></span><span @class([$__VIEW_ID__ . '-e12144', 'code-line', 'code-indent-2'])><span @class([$__VIEW_ID__ . '-e121441', 'op'])>&lt;</span><span @class([$__VIEW_ID__ . '-e121442', 'fn'])>button</span><span @class([$__VIEW_ID__ . '-e121443', 'kw'])> &#64;click</span><span @class([$__VIEW_ID__ . '-e121444', 'op'])>(</span><span @class([$__VIEW_ID__ . '-e121445', 'fn'])>setLikes</span><span @class([$__VIEW_ID__ . '-e121446', 'op'])>(</span><span @class([$__VIEW_ID__ . '-e121447', 'vr'])>likes</span><span @class([$__VIEW_ID__ . '-e121448', 'op'])>+</span><span @class([$__VIEW_ID__ . '-e121449', 'st'])>1</span><span @class([$__VIEW_ID__ . '-e12144e10_', 'op'])>))&gt;</span></span><span @class([$__VIEW_ID__ . '-e12145', 'code-line', 'code-indent-3'])>♥ <span @class([$__VIEW_ID__ . '-e121451', 'mustache-token'])><span @class([$__VIEW_ID__ . '-e1214511', 'vr'])>likes</span></span></span></pre>
            </div>

            <div @class([$__VIEW_ID__ . '-e122', 'hx-split']) @attr(['aria-hidden' => 'true'])><span @class([$__VIEW_ID__ . '-e1221'])>sao-compile &lt;context&gt;</span></div>

            <div @class([$__VIEW_ID__ . '-e123', 'hx-outs'])>
                <span @class([$__VIEW_ID__ . '-e1231', 'hx-arm', 'hx-arm-l']) @attr(['aria-hidden' => 'true'])>SSR</span>
                <span @class([$__VIEW_ID__ . '-e1232', 'hx-arm', 'hx-arm-r']) @attr(['aria-hidden' => 'true'])>hydrate</span>

                <div @class([$__VIEW_ID__ . '-e1233', 'hx-node'])>
                    <span @class([$__VIEW_ID__ . '-e12331', 'hx-node-tag'])>SERVER</span>
                    <strong @class([$__VIEW_ID__ . '-e12332'])>user.blade.php</strong>
                    <small @class([$__VIEW_ID__ . '-e12333'])>HTML đầy đủ ở lần tải đầu</small>
                    <pre @class([$__VIEW_ID__ . '-e12334', 'hx-mini']) @attr(['aria-hidden' => 'true'])><span @class([$__VIEW_ID__ . '-e123341', 'code-line'])><span @class([$__VIEW_ID__ . '-e1233411', 'kw'])>&#64;wrapper</span></span><span @class([$__VIEW_ID__ . '-e123342', 'code-line'])><span @class([$__VIEW_ID__ . '-e1233421', 'op'])>&lt;</span><span @class([$__VIEW_ID__ . '-e1233422', 'fn'])>article</span><span @class([$__VIEW_ID__ . '-e1233423', 'kw'])> &#64;class</span><span @class([$__VIEW_ID__ . '-e1233424', 'op'])>([</span><span @class([$__VIEW_ID__ . '-e1233425', 'vr'])>$__VIEW_ID__</span><span @class([$__VIEW_ID__ . '-e1233426', 'op'])>,</span><span @class([$__VIEW_ID__ . '-e1233427', 'st'])> 'card'</span><span @class([$__VIEW_ID__ . '-e1233428', 'op'])>])&gt;</span></span><span @class([$__VIEW_ID__ . '-e123343', 'code-line', 'code-indent-1'])><span @class([$__VIEW_ID__ . '-e1233431', 'op'])>&lt;</span><span @class([$__VIEW_ID__ . '-e1233432', 'fn'])>button</span><span @class([$__VIEW_ID__ . '-e1233433', 'op'])>&gt;</span>♥</span><span @class([$__VIEW_ID__ . '-e123344', 'code-line', 'code-indent-2'])><span @class([$__VIEW_ID__ . '-e1233441', 'kw'])>&#64;startMarker</span><span @class([$__VIEW_ID__ . '-e1233442', 'op'])>(</span><span @class([$__VIEW_ID__ . '-e1233443', 'st'])>'output'</span><span @class([$__VIEW_ID__ . '-e1233444', 'op'])>,</span><span @class([$__VIEW_ID__ . '-e1233445', 'st'])> 'k2f1'</span><span @class([$__VIEW_ID__ . '-e1233446', 'op'])>)</span></span><span @class([$__VIEW_ID__ . '-e123345', 'code-line', 'code-indent-2'])><span @class([$__VIEW_ID__ . '-e1233451', 'mustache-token'])><span @class([$__VIEW_ID__ . '-e12334511', 'vr'])>$likes</span></span></span></pre>
                </div>

                <div @class([$__VIEW_ID__ . '-e1234', 'hx-node'])>
                    <span @class([$__VIEW_ID__ . '-e12341', 'hx-node-tag'])>CLIENT</span>
                    <strong @class([$__VIEW_ID__ . '-e12342'])>user.js</strong>
                    <small @class([$__VIEW_ID__ . '-e12343'])>Claim lại đúng DOM đó</small>
                    <pre @class([$__VIEW_ID__ . '-e12344', 'hx-mini']) @attr(['aria-hidden' => 'true'])><span @class([$__VIEW_ID__ . '-e123441', 'code-line'])><span @class([$__VIEW_ID__ . '-e1234411', 'kw'])>const</span><span @class([$__VIEW_ID__ . '-e1234412', 'fn'])> set$likes</span><span @class([$__VIEW_ID__ . '-e1234413', 'op'])> =</span></span><span @class([$__VIEW_ID__ . '-e123442', 'code-line', 'code-indent-1'])><span @class([$__VIEW_ID__ . '-e1234421', 'vr'])>__STATE__</span><span @class([$__VIEW_ID__ . '-e1234422', 'op'])>.</span><span @class([$__VIEW_ID__ . '-e1234423', 'fn'])>register</span><span @class([$__VIEW_ID__ . '-e1234424', 'op'])>(</span><span @class([$__VIEW_ID__ . '-e1234425', 'st'])>'likes'</span><span @class([$__VIEW_ID__ . '-e1234426', 'op'])>)</span></span><span @class([$__VIEW_ID__ . '-e123443', 'code-line'])><span @class([$__VIEW_ID__ . '-e1234431', 'kw'])>const</span><span @class([$__VIEW_ID__ . '-e1234432', 'fn'])> setLikes</span><span @class([$__VIEW_ID__ . '-e1234433', 'op'])> = (</span><span @class([$__VIEW_ID__ . '-e1234434', 'vr'])>v</span><span @class([$__VIEW_ID__ . '-e1234435', 'op'])>) =&gt; {</span></span><span @class([$__VIEW_ID__ . '-e123444', 'code-line', 'code-indent-1'])><span @class([$__VIEW_ID__ . '-e1234441', 'vr'])>likes</span><span @class([$__VIEW_ID__ . '-e1234442', 'op'])> =</span><span @class([$__VIEW_ID__ . '-e1234443', 'vr'])> v</span><span @class([$__VIEW_ID__ . '-e1234444', 'op'])>;</span></span><span @class([$__VIEW_ID__ . '-e123445', 'code-line', 'code-indent-1'])><span @class([$__VIEW_ID__ . '-e1234451', 'fn'])>set$likes</span><span @class([$__VIEW_ID__ . '-e1234452', 'op'])>(</span><span @class([$__VIEW_ID__ . '-e1234453', 'vr'])>v</span><span @class([$__VIEW_ID__ . '-e1234454', 'op'])>);</span></span></pre>
                </div>
            </div>
        </figure>
    </section>

    <div @class([$__VIEW_ID__ . '-e2', 'hx-strip'])>
        <dl @class([$__VIEW_ID__ . '-e21', 'hx-strip-grid'])>
            <div @class([$__VIEW_ID__ . '-e211'])><dt @class([$__VIEW_ID__ . '-e2111'])>4</dt><dd @class([$__VIEW_ID__ . '-e2112'])>context: web · admin · api · mobile</dd></div>
            <div @class([$__VIEW_ID__ . '-e212'])><dt @class([$__VIEW_ID__ . '-e2121'])>0</dt><dd @class([$__VIEW_ID__ . '-e2122'])>file cấu hình route trung tâm cần sửa</dd></div>
            <div @class([$__VIEW_ID__ . '-e213'])><dt @class([$__VIEW_ID__ . '-e2131'])>2</dt><dd @class([$__VIEW_ID__ . '-e2132'])>đầu ra được biên dịch từ một file .sao</dd></div>
            <div @class([$__VIEW_ID__ . '-e214'])><dt @class([$__VIEW_ID__ . '-e2141'])>43</dt><dd @class([$__VIEW_ID__ . '-e2142'])>directive giữ nguyên cú pháp Blade quen thuộc</dd></div>
        </dl>
    </div>
@endWrapper
