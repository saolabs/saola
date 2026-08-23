@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($count, 0)
@useState($name, 'Saola')
@useState($agree, true)
@useState($tone, 'sky')
@useState($textSize, 'md')
@useState($status, 'ready')
@useState($runtime, 'blade')
@useState($items, [
        [ 'id'=> 1, 'label'=> 'Blade SSR' ],
        [ 'id'=> 2, 'label'=> 'Hydrate' ],
        [ 'id'=> 3, 'label'=> 'SPA takeover' ]
    ])
@useState($nextId, 4)
@useState($draft, '')
@useState($visible, true)
@useState($locked, false)
@useState($clicks, 0)
@useState($onceLeft, 1)
@useState($selfHits, 0)
@useState($price, 120)
@useState($qty, 2)
@extends($__layout__ . "docs")
    @block('doc')
        <header @class([$__VIEW_ID__ . '-ff96f7a7', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-15b892a7'])>
                <p @class([$__VIEW_ID__ . '-ab74559e', 'kicker'])><span @class([$__VIEW_ID__ . '-943e8228'])>10</span> THỰC HÀNH</p>
                <h1 @class([$__VIEW_ID__ . '-9abe25a3'])>Thư viện component.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-f750a15d', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-2a968179'])>Mỗi ví dụ dưới đây đang chạy thật trên chính trang này, kèm đúng đoạn <code @class([$__VIEW_ID__ . '-1169a7fa'])>.sao</code> sinh ra nó. Bấm thử bên trái, đọc nguồn bên phải.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-e5195f55', 'cmp-page'])>
            <div @class([$__VIEW_ID__ . '-dea63217', 'cmp-groups'])>

                <section @class([$__VIEW_ID__ . '-0cfc5a01', 'cmp-group'])>
                    <div @class([$__VIEW_ID__ . '-58995b16', 'cmp-group-head'])>
                        <h2 @class([$__VIEW_ID__ . '-7f44b4eb'])>State &amp; sự kiện</h2>
                        <p @class([$__VIEW_ID__ . '-b67f547e'])>Khai báo state ở đầu file, mỗi key tự có setter; event gắn thẳng lên thẻ.</p>
                    </div>
                    <div @class([$__VIEW_ID__ . '-f9992957', 'cmp-list'])>

                        <article @class([$__VIEW_ID__ . '-028a1ce6', 'cmp-item'])>
                            <div @class([$__VIEW_ID__ . '-47228410', 'cmp-head'])>
                                <div @class([$__VIEW_ID__ . '-c9c600aa'])>
                                    <h3 @class([$__VIEW_ID__ . '-4addf75b'])>Counter</h3>
                                    <p @class([$__VIEW_ID__ . '-76108c2c'])>Setter sinh tự động từ tên state.</p>
                                </div>
                                <div @class([$__VIEW_ID__ . '-1d526c01', 'ov-tags'])><span @class([$__VIEW_ID__ . '-ac0f82ac', 'ov-tag', 'ov-tag--brand'])>&#64;states</span><span @class([$__VIEW_ID__ . '-7b117172', 'ov-tag'])>&#64;click</span></div>
                            </div>
                            <div @class([$__VIEW_ID__ . '-e1815feb', 'cmp-body'])>
                                <div @class([$__VIEW_ID__ . '-726528cb', 'cmp-preview'])>
                                    <div @class([$__VIEW_ID__ . '-5c814cf5', 'cmp-num'])>@startMarker('output', '41fb371a'){{ $count }}@endMarker('output', '41fb371a')</div>
                                    <div @class([$__VIEW_ID__ . '-0ade8a7d', 'cmp-row'])>
                                        <button @class([$__VIEW_ID__ . '-73b0356c'])>−</button>
                                        <button @class([$__VIEW_ID__ . '-27e8d656', 'is-primary'])>+</button>
                                        <button @class([$__VIEW_ID__ . '-113851b1'])>Reset</button>
                                    </div>
                                </div>
                                <div @class([$__VIEW_ID__ . '-1c69bb38', 'cmp-source'])>
                                    <pre @class([$__VIEW_ID__ . '-dbbd9b93'])><code @class([$__VIEW_ID__ . '-01c97f8b'])><span @class([$__VIEW_ID__ . '-becf0f5b', 'code-line'])>&#64;states({ count: 0 })</span><span @class([$__VIEW_ID__ . '-4dc2384b', 'code-line'])></span><span @class([$__VIEW_ID__ . '-08688933', 'code-line'])>&lt;div&gt;<span @class([$__VIEW_ID__ . '-747ca4cc', 'mustache-token'])>count</span>&lt;/div&gt;</span><span @class([$__VIEW_ID__ . '-b5504254', 'code-line'])>&lt;button &#64;click(setCount(count + 1))&gt;+&lt;/button&gt;</span><span @class([$__VIEW_ID__ . '-0feec16c', 'code-line'])>&lt;button &#64;click(setCount(0))&gt;Reset&lt;/button&gt;</span></code></pre>
                                </div>
                            </div>
                        </article>

                        <article @class([$__VIEW_ID__ . '-449631b3', 'cmp-item'])>
                            <div @class([$__VIEW_ID__ . '-f239a11f', 'cmp-head'])>
                                <div @class([$__VIEW_ID__ . '-ee944775'])>
                                    <h3 @class([$__VIEW_ID__ . '-dab19ca9'])>Modifier của event</h3>
                                    <p @class([$__VIEW_ID__ . '-f4af95ae'])><code @class([$__VIEW_ID__ . '-85074370'])>.once</code> chỉ chạy một lần; <code @class([$__VIEW_ID__ . '-022440d0'])>.self</code> bỏ qua click từ phần tử con.</p>
                                </div>
                                <div @class([$__VIEW_ID__ . '-f42d3208', 'ov-tags'])><span @class([$__VIEW_ID__ . '-e978abd9', 'ov-tag', 'ov-tag--brand'])>.once</span><span @class([$__VIEW_ID__ . '-743ac9f2', 'ov-tag', 'ov-tag--brand'])>.self</span><span @class([$__VIEW_ID__ . '-7a342e91', 'ov-tag'])>.stop</span></div>
                            </div>
                            <div @class([$__VIEW_ID__ . '-ea44e5ff', 'cmp-body'])>
                                <div @class([$__VIEW_ID__ . '-a8a9cd5d', 'cmp-preview'])>
                                    <div @class([$__VIEW_ID__ . '-d7c10902', 'cmp-row'])>
                                        <button @class([$__VIEW_ID__ . '-f10652b2']) @attr(['click.once' => true, 'setOnceLeft' => true])>Chỉ chạy 1 lần</button>
                                        <span @class([$__VIEW_ID__ . '-e14e91b1', 'cmp-chip', 'cmp-chip--slate'])>còn lại: @startMarker('output', '0bbd2803'){{ $onceLeft }}@endMarker('output', '0bbd2803')</span>
                                    </div>
                                    <div @class([$__VIEW_ID__ . '-96422564', 'cmp-box']) @attr(['click.self' => true, 'setSelfHits' => true, 'selfHits' => true])>
                                        Bấm vào nền này thì đếm tăng — bấm
                                        <button @class([$__VIEW_ID__ . '-d421a688']) @attr(['click.stop' => true, 'setClicks' => true, 'clicks' => true])>nút bên trong</button>
                                        thì không.
                                    </div>
                                    <p @class([$__VIEW_ID__ . '-d1ecc7ac', 'cmp-note'])>nền: @startMarker('output', 'a9c472bc'){{ $selfHits }}@endMarker('output', 'a9c472bc') · nút con: @startMarker('output', 'febd55ba'){{ $clicks }}@endMarker('output', 'febd55ba')</p>
                                </div>
                                <div @class([$__VIEW_ID__ . '-1174f8be', 'cmp-source'])>
                                    <pre @class([$__VIEW_ID__ . '-bf03a2e4'])><code @class([$__VIEW_ID__ . '-eccc07df'])><span @class([$__VIEW_ID__ . '-6d867883', 'code-line'])>&lt;button &#64;click.once(setOnceLeft(0))&gt;…&lt;/button&gt;</span><span @class([$__VIEW_ID__ . '-8dbb4ffd', 'code-line'])></span><span @class([$__VIEW_ID__ . '-6d31763f', 'code-line'])>&lt;div &#64;click.self(setSelfHits(selfHits + 1))&gt;</span><span @class([$__VIEW_ID__ . '-1986fda3', 'code-line'])>  &lt;button &#64;click.stop(setClicks(clicks + 1))&gt;…&lt;/button&gt;</span><span @class([$__VIEW_ID__ . '-13b89eef', 'code-line'])>&lt;/div&gt;</span></code></pre>
                                </div>
                            </div>
                        </article>

                        <article @class([$__VIEW_ID__ . '-27a667fc', 'cmp-item'])>
                            <div @class([$__VIEW_ID__ . '-a5fdd5b6', 'cmp-head'])>
                                <div @class([$__VIEW_ID__ . '-cd92d742'])>
                                    <h3 @class([$__VIEW_ID__ . '-91301c90'])>Biểu thức dẫn xuất</h3>
                                    <p @class([$__VIEW_ID__ . '-a59489da'])>Compiler suy ra vùng này phụ thuộc <code @class([$__VIEW_ID__ . '-1a002d48'])>price</code> và <code @class([$__VIEW_ID__ . '-f954a8ac'])>qty</code>, chỉ tính lại khi hai state đó đổi.</p>
                                </div>
                                <div @class([$__VIEW_ID__ . '-3241e831', 'ov-tags'])><span @class([$__VIEW_ID__ . '-7cb4b1f5', 'ov-tag', 'ov-tag--brand'])>output</span><span @class([$__VIEW_ID__ . '-4c46a41e', 'ov-tag'])>stateKeys</span></div>
                            </div>
                            <div @class([$__VIEW_ID__ . '-8d6c3fa0', 'cmp-body'])>
                                <div @class([$__VIEW_ID__ . '-bd81e151', 'cmp-preview'])>
                                    <div @class([$__VIEW_ID__ . '-ef485eb6', 'cmp-row'])>
                                        <label @class([$__VIEW_ID__ . '-c8d2069a'])>Đơn giá <input @class([$__VIEW_ID__ . '-a6e1f7cb']) @attr(['type' => 'number']) @bind($price)></label>
                                        <label @class([$__VIEW_ID__ . '-11294948'])>Số lượng <input @class([$__VIEW_ID__ . '-21d598ba']) @attr(['type' => 'number']) @bind($qty)></label>
                                    </div>
                                    <div @class([$__VIEW_ID__ . '-a751cd09', 'cmp-out'])>Thành tiền: @startMarker('output', 'fec5e072'){{ $price * $qty }}@endMarker('output', 'fec5e072')</div>
                                </div>
                                <div @class([$__VIEW_ID__ . '-7d38285f', 'cmp-source'])>
                                    <pre @class([$__VIEW_ID__ . '-0b565aac'])><code @class([$__VIEW_ID__ . '-3f74a50a'])><span @class([$__VIEW_ID__ . '-a7806060', 'code-line'])>&#64;states({ price: 120, qty: 2 })</span><span @class([$__VIEW_ID__ . '-567ca237', 'code-line'])></span><span @class([$__VIEW_ID__ . '-b63b7971', 'code-line'])>&lt;input type="number" &#64;bind(price)&gt;</span><span @class([$__VIEW_ID__ . '-56ccdf21', 'code-line'])>&lt;input type="number" &#64;bind(qty)&gt;</span><span @class([$__VIEW_ID__ . '-34b03edc', 'code-line'])>&lt;div&gt;Thành tiền: <span @class([$__VIEW_ID__ . '-16b7dede', 'mustache-token'])>price * qty</span>&lt;/div&gt;</span></code></pre>
                                </div>
                            </div>
                        </article>

                    </div>
                </section>

                <section @class([$__VIEW_ID__ . '-86de05c3', 'cmp-group'])>
                    <div @class([$__VIEW_ID__ . '-ebe35e36', 'cmp-group-head'])>
                        <h2 @class([$__VIEW_ID__ . '-775d7804'])>Binding hai chiều</h2>
                        <p @class([$__VIEW_ID__ . '-b57f859e'])>Một directive cho mọi loại input: text, number, select, checkbox, radio.</p>
                    </div>
                    <div @class([$__VIEW_ID__ . '-682c0572', 'cmp-list'])>

                        <article @class([$__VIEW_ID__ . '-2ea798f0', 'cmp-item'])>
                            <div @class([$__VIEW_ID__ . '-7ebc8749', 'cmp-head'])>
                                <div @class([$__VIEW_ID__ . '-da99aaab'])>
                                    <h3 @class([$__VIEW_ID__ . '-08151ebd'])>Text input</h3>
                                    <p @class([$__VIEW_ID__ . '-502cf0b9'])>Gõ vào ô thì state đổi, đổi state thì ô đổi theo.</p>
                                </div>
                                <div @class([$__VIEW_ID__ . '-1b6925b7', 'ov-tags'])><span @class([$__VIEW_ID__ . '-82be18c6', 'ov-tag', 'ov-tag--brand'])>&#64;bind</span></div>
                            </div>
                            <div @class([$__VIEW_ID__ . '-0f4e188d', 'cmp-body'])>
                                <div @class([$__VIEW_ID__ . '-180a929c', 'cmp-preview'])>
                                    <div @class([$__VIEW_ID__ . '-a903a09b', 'cmp-row'])>
                                        <input @class([$__VIEW_ID__ . '-fe728d1c']) @attr(['type' => 'text', 'placeholder' => 'Nhập tên…']) @bind($name)>
                                        <button @class([$__VIEW_ID__ . '-83fc0032'])>Đặt lại</button>
                                    </div>
                                    <div @class([$__VIEW_ID__ . '-c893fd21', 'cmp-out'])>Xin chào, @startMarker('output', '9d6ff5f1'){{ $name }}@endMarker('output', '9d6ff5f1').</div>
                                </div>
                                <div @class([$__VIEW_ID__ . '-cc720e33', 'cmp-source'])>
                                    <pre @class([$__VIEW_ID__ . '-5027d4a2'])><code @class([$__VIEW_ID__ . '-632c0da9'])><span @class([$__VIEW_ID__ . '-e06a62ad', 'code-line'])>&#64;states({ name: 'Saola' })</span><span @class([$__VIEW_ID__ . '-8b5f3c08', 'code-line'])></span><span @class([$__VIEW_ID__ . '-361d73e4', 'code-line'])>&lt;input type="text" &#64;bind(name)&gt;</span><span @class([$__VIEW_ID__ . '-a64f765e', 'code-line'])>&lt;div&gt;Xin chào, <span @class([$__VIEW_ID__ . '-28200908', 'mustache-token'])>name</span>.&lt;/div&gt;</span></code></pre>
                                </div>
                            </div>
                        </article>

                        <article @class([$__VIEW_ID__ . '-ff8d1ee8', 'cmp-item'])>
                            <div @class([$__VIEW_ID__ . '-3da6d332', 'cmp-head'])>
                                <div @class([$__VIEW_ID__ . '-f58c11b4'])>
                                    <h3 @class([$__VIEW_ID__ . '-fc367620'])>Select &amp; checkbox</h3>
                                    <p @class([$__VIEW_ID__ . '-f4430644'])>Cùng <code @class([$__VIEW_ID__ . '-413d4ac1', 'directive-token'])>bind</code>, runtime tự chọn <code @class([$__VIEW_ID__ . '-35fd5bb5'])>value</code> hay <code @class([$__VIEW_ID__ . '-857c4a1d'])>checked</code>.</p>
                                </div>
                                <div @class([$__VIEW_ID__ . '-8946c1da', 'ov-tags'])><span @class([$__VIEW_ID__ . '-b3e2035d', 'ov-tag', 'ov-tag--brand'])>&#64;bind</span><span @class([$__VIEW_ID__ . '-0b2fb724', 'ov-tag'])>&#64;disabled</span></div>
                            </div>
                            <div @class([$__VIEW_ID__ . '-967dd1a6', 'cmp-body'])>
                                <div @class([$__VIEW_ID__ . '-a918f1a6', 'cmp-preview'])>
                                    <div @class([$__VIEW_ID__ . '-e912527f', 'cmp-row'])>
                                        <select @class([$__VIEW_ID__ . '-9afaaa86']) @bind($tone)>
                                            <option @class([$__VIEW_ID__ . '-f12e5411']) @attr(['value' => 'sky'])>sky</option>
                                            <option @class([$__VIEW_ID__ . '-231a8148']) @attr(['value' => 'indigo'])>indigo</option>
                                            <option @class([$__VIEW_ID__ . '-af55d7e9']) @attr(['value' => 'slate'])>slate</option>
                                        </select>
                                        <label @class([$__VIEW_ID__ . '-ed7d7ab5'])><input @class([$__VIEW_ID__ . '-918507cf']) @attr(['type' => 'checkbox']) @bind($agree)> Đồng ý điều khoản</label>
                                        <button @class([$__VIEW_ID__ . '-1069ed05', 'is-primary']) @disabled(!$agree)>Gửi</button>
                                    </div>
                                    <div @class([$__VIEW_ID__ . '-5e48d35d', 'cmp-row'])>
                                        <span @class([$__VIEW_ID__ . '-d71f5396', 'cmp-chip', 'cmp-chip--sky'=> $tone === 'sky', 'cmp-chip--indigo'=> $tone === 'indigo', 'cmp-chip--slate'=> $tone === 'slate'])>tone = @startMarker('output', '812fbdd7'){{ $tone }}@endMarker('output', '812fbdd7')</span>
                                    </div>
                                </div>
                                <div @class([$__VIEW_ID__ . '-a6fb3846', 'cmp-source'])>
                                    <pre @class([$__VIEW_ID__ . '-325ada80'])><code @class([$__VIEW_ID__ . '-8bdb4b93'])><span @class([$__VIEW_ID__ . '-36e923d9', 'code-line'])>&lt;select &#64;bind(tone)&gt;…&lt;/select&gt;</span><span @class([$__VIEW_ID__ . '-415c6fa2', 'code-line'])>&lt;input type="checkbox" &#64;bind(agree)&gt;</span><span @class([$__VIEW_ID__ . '-75a7a464', 'code-line'])>&lt;button &#64;disabled(!agree)&gt;Gửi&lt;/button&gt;</span></code></pre>
                                </div>
                            </div>
                        </article>

                    </div>
                </section>

                <section @class([$__VIEW_ID__ . '-d6930dab', 'cmp-group'])>
                    <div @class([$__VIEW_ID__ . '-9bf77870', 'cmp-group-head'])>
                        <h2 @class([$__VIEW_ID__ . '-3f207c0a'])>Ràng buộc thuộc tính</h2>
                        <p @class([$__VIEW_ID__ . '-867c5663'])>Class, style và boolean attribute đều đọc thẳng từ state.</p>
                    </div>
                    <div @class([$__VIEW_ID__ . '-91d80947', 'cmp-list'])>

                        <article @class([$__VIEW_ID__ . '-286040d6', 'cmp-item'])>
                            <div @class([$__VIEW_ID__ . '-700ee53d', 'cmp-head'])>
                                <div @class([$__VIEW_ID__ . '-4522c5a0'])>
                                    <h3 @class([$__VIEW_ID__ . '-4c76778c'])>Class động</h3>
                                    <p @class([$__VIEW_ID__ . '-66d62fa3'])>Class tĩnh trộn với class có điều kiện; chỉ thuộc tính class được đụng tới, phần còn lại của thẻ giữ nguyên.</p>
                                </div>
                                <div @class([$__VIEW_ID__ . '-3beaec6d', 'ov-tags'])><span @class([$__VIEW_ID__ . '-4675652e', 'ov-tag', 'ov-tag--brand'])>&#64;class</span></div>
                            </div>
                            <div @class([$__VIEW_ID__ . '-47eae681', 'cmp-body'])>
                                <div @class([$__VIEW_ID__ . '-57778fa0', 'cmp-preview'])>
                                    <div @class([$__VIEW_ID__ . '-b8fa84d3', 'cmp-row'])>
                                        <button @class([$__VIEW_ID__ . '-885ac0e3'])>Nhỏ</button>
                                        <button @class([$__VIEW_ID__ . '-063ff429'])>Vừa</button>
                                        <button @class([$__VIEW_ID__ . '-b8688508'])>Lớn</button>
                                    </div>
                                    <div @class([$__VIEW_ID__ . '-94aaf5b0', 'cmp-box', 'txt-sm'=> $textSize === 'sm', 'txt-lg'=> $textSize === 'lg'])>Cỡ chữ hiện tại: @startMarker('output', 'd71e2674'){{ $textSize }}@endMarker('output', 'd71e2674').</div>
                                </div>
                                <div @class([$__VIEW_ID__ . '-2cf9f393', 'cmp-source'])>
                                    <pre @class([$__VIEW_ID__ . '-019fd3d2'])><code @class([$__VIEW_ID__ . '-0113a1d3'])><span @class([$__VIEW_ID__ . '-4c256f14', 'code-line'])>&#64;states({ textSize: 'md' })</span><span @class([$__VIEW_ID__ . '-db4fb527', 'code-line'])></span><span @class([$__VIEW_ID__ . '-658cfb30', 'code-line'])>&lt;div &#64;class(['box', 'txt-lg': textSize === 'lg'])&gt;…&lt;/div&gt;</span><span @class([$__VIEW_ID__ . '-33714f65', 'code-line'])>&lt;button &#64;click(setTextSize('lg'))&gt;Lớn&lt;/button&gt;</span></code></pre>
                                </div>
                            </div>
                        </article>

                        <article @class([$__VIEW_ID__ . '-d9db07ef', 'cmp-item'])>
                            <div @class([$__VIEW_ID__ . '-b4de5b4a', 'cmp-head'])>
                                <div @class([$__VIEW_ID__ . '-d379aba1'])>
                                    <h3 @class([$__VIEW_ID__ . '-ba1ef637'])>Ẩn hiện &amp; readonly</h3>
                                    <p @class([$__VIEW_ID__ . '-e19e8515'])>Bật tắt hiển thị bằng class có điều kiện — DOM vẫn nằm nguyên chỗ cũ.</p>
                                </div>
                                <div @class([$__VIEW_ID__ . '-31195cbb', 'ov-tags'])><span @class([$__VIEW_ID__ . '-70d0e397', 'ov-tag', 'ov-tag--brand'])>&#64;class</span><span @class([$__VIEW_ID__ . '-d9aa64f0', 'ov-tag', 'ov-tag--brand'])>&#64;readonly</span></div>
                            </div>
                            <div @class([$__VIEW_ID__ . '-31b8c945', 'cmp-body'])>
                                <div @class([$__VIEW_ID__ . '-7d9b12c2', 'cmp-preview'])>
                                    <div @class([$__VIEW_ID__ . '-0cc5a2ec', 'cmp-row'])>
                                        <button @class([$__VIEW_ID__ . '-d9a44bd7'])>Bật tắt khối</button>
                                        <label @class([$__VIEW_ID__ . '-0c96a5b9'])><input @class([$__VIEW_ID__ . '-cc2ab89d']) @attr(['type' => 'checkbox']) @bind($locked)> Khoá ô nhập</label>
                                    </div>
                                    <div @class([$__VIEW_ID__ . '-b28b8759', 'cmp-box', 'is-hidden'=> !$visible])>Khối này vẫn nằm trong DOM khi bị ẩn.</div>
                                    <input @class([$__VIEW_ID__ . '-3cf387fc']) @attr(['type' => 'text', 'placeholder' => 'Ghi chú…']) @bind($draft) @readonly($locked)>
                                </div>
                                <div @class([$__VIEW_ID__ . '-3db347f0', 'cmp-source'])>
                                    <pre @class([$__VIEW_ID__ . '-28d85442'])><code @class([$__VIEW_ID__ . '-3b478dbc'])><span @class([$__VIEW_ID__ . '-fd69612a', 'code-line'])>&lt;div &#64;class(['box', 'is-hidden': !visible])&gt;…&lt;/div&gt;</span><span @class([$__VIEW_ID__ . '-40a84e67', 'code-line'])>&lt;input &#64;bind(draft) &#64;readonly(locked)&gt;</span></code></pre>
                                </div>
                            </div>
                        </article>

                    </div>
                </section>

                <section @class([$__VIEW_ID__ . '-7f547314', 'cmp-group'])>
                    <div @class([$__VIEW_ID__ . '-cbc9d10b', 'cmp-group-head'])>
                        <h2 @class([$__VIEW_ID__ . '-3e5622a4'])>Điều khiển luồng</h2>
                        <p @class([$__VIEW_ID__ . '-78ab7595'])>Mỗi khối là một vùng marker độc lập, chỉ render lại khi state phụ thuộc đổi.</p>
                    </div>
                    <div @class([$__VIEW_ID__ . '-f8715d2a', 'cmp-list'])>

                        <article @class([$__VIEW_ID__ . '-db7f02f8', 'cmp-item'])>
                            <div @class([$__VIEW_ID__ . '-eb574dcf', 'cmp-head'])>
                                <div @class([$__VIEW_ID__ . '-49134726'])>
                                    <h3 @class([$__VIEW_ID__ . '-d8fe4781'])>If / elseif / else</h3>
                                    <p @class([$__VIEW_ID__ . '-ff21c0f8'])>Compiler tự suy ra state nào khiến vùng này render lại.</p>
                                </div>
                                <div @class([$__VIEW_ID__ . '-dffb6ff9', 'ov-tags'])><span @class([$__VIEW_ID__ . '-3a8410e3', 'ov-tag', 'ov-tag--brand'])>&#64;if</span><span @class([$__VIEW_ID__ . '-6cd57212', 'ov-tag'])>&#64;elseif</span><span @class([$__VIEW_ID__ . '-b969783a', 'ov-tag'])>&#64;else</span></div>
                            </div>
                            <div @class([$__VIEW_ID__ . '-a451881c', 'cmp-body'])>
                                <div @class([$__VIEW_ID__ . '-cf1ecf05', 'cmp-preview'])>
                                    <div @class([$__VIEW_ID__ . '-76f0660e', 'cmp-row'])>
                                        <button @class([$__VIEW_ID__ . '-1ce04e06'])>ready</button>
                                        <button @class([$__VIEW_ID__ . '-a139e143'])>building</button>
                                        <button @class([$__VIEW_ID__ . '-af7049ff'])>error</button>
                                    </div>
                                    @startMarker('reactive', '54bb7dbe', ['stateKey' => ['status'], 'type' => 'if'])
                                    @if($status === 'ready')
                                        <div @class([$__VIEW_ID__ . '-1aa5a2c3', 'cmp-out'])>Sẵn sàng — bundle khớp với view registry.</div>
                                    @elseif($status === 'building')
                                        <div @class([$__VIEW_ID__ . '-53821dc4', 'cmp-box'])>Đang biên dịch view cho context web…</div>
                                    @else
                                        <div @class([$__VIEW_ID__ . '-87d0b88e', 'cmp-box'])>Có lỗi khi compile. Xem log của <code @class([$__VIEW_ID__ . '-158576a8'])>sao-compile</code>.</div>
                                    @endif
                                    @endMarker('reactive', '54bb7dbe')
                                </div>
                                <div @class([$__VIEW_ID__ . '-a7126351', 'cmp-source'])>
                                    <pre @class([$__VIEW_ID__ . '-ede94b06'])><code @class([$__VIEW_ID__ . '-ce01776e'])><span @class([$__VIEW_ID__ . '-bc0ff101', 'code-line'])>&#64;if(status === 'ready')</span><span @class([$__VIEW_ID__ . '-0a46a396', 'code-line'])>    &lt;div&gt;Sẵn sàng…&lt;/div&gt;</span><span @class([$__VIEW_ID__ . '-f7ba287d', 'code-line'])>&#64;elseif(status === 'building')</span><span @class([$__VIEW_ID__ . '-5be56773', 'code-line'])>    &lt;div&gt;Đang biên dịch…&lt;/div&gt;</span><span @class([$__VIEW_ID__ . '-3d76a6fd', 'code-line'])>&#64;else</span><span @class([$__VIEW_ID__ . '-0fc09c09', 'code-line'])>    &lt;div&gt;Có lỗi…&lt;/div&gt;</span><span @class([$__VIEW_ID__ . '-5f4fcdba', 'code-line'])>&#64;endif</span></code></pre>
                                </div>
                            </div>
                        </article>

                        <article @class([$__VIEW_ID__ . '-f5d86e5d', 'cmp-item'])>
                            <div @class([$__VIEW_ID__ . '-e1d6f933', 'cmp-head'])>
                                <div @class([$__VIEW_ID__ . '-4ab27f4c'])>
                                    <h3 @class([$__VIEW_ID__ . '-f609b4eb'])>Switch</h3>
                                    <p @class([$__VIEW_ID__ . '-6e463198'])>Nhiều nhánh trong một vùng marker duy nhất.</p>
                                </div>
                                <div @class([$__VIEW_ID__ . '-0930582f', 'ov-tags'])><span @class([$__VIEW_ID__ . '-87e669cd', 'ov-tag', 'ov-tag--brand'])>&#64;switch</span><span @class([$__VIEW_ID__ . '-8d76d43d', 'ov-tag'])>&#64;case</span></div>
                            </div>
                            <div @class([$__VIEW_ID__ . '-9792afc9', 'cmp-body'])>
                                <div @class([$__VIEW_ID__ . '-9c6c0941', 'cmp-preview'])>
                                    <div @class([$__VIEW_ID__ . '-bbb76fda', 'cmp-row'])>
                                        <button @class([$__VIEW_ID__ . '-60d53076'])>Blade</button>
                                        <button @class([$__VIEW_ID__ . '-2b10e18d'])>Client</button>
                                        <button @class([$__VIEW_ID__ . '-e26ba4d1'])>API</button>
                                    </div>
                                    @startMarker('reactive', 'c086e0bf', ['stateKey' => ['runtime'], 'type' => 'switch'])
                                    @switch($runtime)
                                        @case('blade')
                                            <div @class([$__VIEW_ID__ . '-91438253', 'cmp-out'])>Server render HTML hoàn chỉnh cho request đầu.</div>
                                            @break
                                        @case('client')
                                            <div @class([$__VIEW_ID__ . '-6e6c50d4', 'cmp-out'])>Runtime claim DOM rồi tiếp quản điều hướng.</div>
                                            @break
                                        @default
                                            <div @class([$__VIEW_ID__ . '-bcfb8b30', 'cmp-out'])>Context api trả JSON, không render view.</div>
                                    @endswitch
                                    @endMarker('reactive', 'c086e0bf')
                                </div>
                                <div @class([$__VIEW_ID__ . '-f9bb4880', 'cmp-source'])>
                                    <pre @class([$__VIEW_ID__ . '-3af84f54'])><code @class([$__VIEW_ID__ . '-61b88411'])><span @class([$__VIEW_ID__ . '-69e603d1', 'code-line'])>&#64;switch(runtime)</span><span @class([$__VIEW_ID__ . '-f011590f', 'code-line'])>    &#64;case('blade')</span><span @class([$__VIEW_ID__ . '-d8f7295f', 'code-line'])>        &lt;div&gt;Server render…&lt;/div&gt;</span><span @class([$__VIEW_ID__ . '-bb375df8', 'code-line'])>        &#64;break</span><span @class([$__VIEW_ID__ . '-8638a50e', 'code-line'])>    &#64;default</span><span @class([$__VIEW_ID__ . '-49d08167', 'code-line'])>        &lt;div&gt;Context api…&lt;/div&gt;</span><span @class([$__VIEW_ID__ . '-cb39e462', 'code-line'])>&#64;endswitch</span></code></pre>
                                </div>
                            </div>
                        </article>

                        <article @class([$__VIEW_ID__ . '-1dcead62', 'cmp-item'])>
                            <div @class([$__VIEW_ID__ . '-18221d32', 'cmp-head'])>
                                <div @class([$__VIEW_ID__ . '-8589635a'])>
                                    <h3 @class([$__VIEW_ID__ . '-19dbe50e'])>Foreach có &#64;key</h3>
                                    <p @class([$__VIEW_ID__ . '-1e990b7f'])>Khoá quyết định slot nào được tái dùng khi danh sách đổi.</p>
                                </div>
                                <div @class([$__VIEW_ID__ . '-c27f85c0', 'ov-tags'])><span @class([$__VIEW_ID__ . '-2d394a8e', 'ov-tag', 'ov-tag--brand'])>&#64;foreach</span><span @class([$__VIEW_ID__ . '-a286d41f', 'ov-tag', 'ov-tag--brand'])>&#64;key</span></div>
                            </div>
                            <div @class([$__VIEW_ID__ . '-cffe608b', 'cmp-body'])>
                                <div @class([$__VIEW_ID__ . '-42b3c03f', 'cmp-preview'])>
                                    <div @class([$__VIEW_ID__ . '-75e10d9f', 'cmp-row'])>
                                        <input @class([$__VIEW_ID__ . '-f8078fee']) @attr(['type' => 'text', 'placeholder' => 'Thêm mục…']) @bind($draft)>
                                        <button @class([$__VIEW_ID__ . '-218e6c60', 'is-primary'])>Thêm</button>
                                    </div>
                                    <ul @class([$__VIEW_ID__ . '-bed93afb', 'cmp-ul'])>
                                        @startMarker('reactive', '9628ee3c', ['stateKey' => ['items'], 'type' => 'foreach'])
                                        @foreach($items as $item)
                                            <li @class([$__VIEW_ID__ . "-26c65a5d-{$item['id']}"])>
                                                <span @class([$__VIEW_ID__ . "-fcfb9974-{$item['id']}"])>@startMarker('output', "81b61b0c-{$item['id']}"){{ $item['label'] }}@endMarker('output', "81b61b0c-{$item['id']}")</span>
                                                <button @class([$__VIEW_ID__ . "-9d4dc5ab-{$item['id']}"])>Xoá</button>
                                            </li>
                                        @endforeach
                                        @endMarker('reactive', '9628ee3c')
                                    </ul>
                                    @startMarker('reactive', '8b87f58a', ['stateKey' => ['count', 'items'], 'type' => 'if'])
                                    @if(count($items) === 0)
                                        <p @class([$__VIEW_ID__ . '-952e1e66', 'cmp-note'])>Danh sách trống.</p>
                                    @endif
                                    @endMarker('reactive', '8b87f58a')
                                </div>
                                <div @class([$__VIEW_ID__ . '-7da6ab9d', 'cmp-source'])>
                                    <pre @class([$__VIEW_ID__ . '-cb21405a'])><code @class([$__VIEW_ID__ . '-675e5d1c'])><span @class([$__VIEW_ID__ . '-9586e260', 'code-line'])>&#64;foreach(items as item)</span><span @class([$__VIEW_ID__ . '-6e81adeb', 'code-line'])>    &#64;key(item['id'])</span><span @class([$__VIEW_ID__ . '-b3e4a86c', 'code-line'])>    &lt;li&gt;</span><span @class([$__VIEW_ID__ . '-bf3bdf34', 'code-line'])>        &lt;span&gt;<span @class([$__VIEW_ID__ . '-005ad910', 'mustache-token'])>item['label']</span>&lt;/span&gt;</span><span @class([$__VIEW_ID__ . '-5027564c', 'code-line'])>        &lt;button &#64;click(removeItem(item['id']))&gt;Xoá&lt;/button&gt;</span><span @class([$__VIEW_ID__ . '-f8106fca', 'code-line'])>    &lt;/li&gt;</span><span @class([$__VIEW_ID__ . '-bdf8d2a7', 'code-line'])>&#64;endforeach</span></code></pre>
                                </div>
                            </div>
                        </article>

                    </div>
                </section>

                <section @class([$__VIEW_ID__ . '-a8530d7c', 'cmp-group'])>
                    <div @class([$__VIEW_ID__ . '-d2859974', 'cmp-group-head'])>
                        <h2 @class([$__VIEW_ID__ . '-216928e8'])>Component con</h2>
                        <p @class([$__VIEW_ID__ . '-06e60348'])>Include tạo một view thật với ViewController và vòng đời riêng, không phải partial dán vào.</p>
                    </div>
                    <div @class([$__VIEW_ID__ . '-6a19328c', 'cmp-list'])>

                        <article @class([$__VIEW_ID__ . '-1aa6ba6e', 'cmp-item'])>
                            <div @class([$__VIEW_ID__ . '-cf9645c2', 'cmp-head'])>
                                <div @class([$__VIEW_ID__ . '-9fe674cd'])>
                                    <h3 @class([$__VIEW_ID__ . '-dfc54d58'])>Props &amp; children</h3>
                                    <p @class([$__VIEW_ID__ . '-6fc566a5'])>Prop đổi theo state của trang; nội dung giữa thẻ đi qua slot.</p>
                                </div>
                                <div @class([$__VIEW_ID__ . '-f0aa78d1', 'ov-tags'])><span @class([$__VIEW_ID__ . '-55fb7942', 'ov-tag', 'ov-tag--brand'])>&#64;include</span><span @class([$__VIEW_ID__ . '-7ae15fea', 'ov-tag', 'ov-tag--brand'])>&#64;props</span><span @class([$__VIEW_ID__ . '-06085777', 'ov-tag'])>&#64;children</span></div>
                            </div>
                            <div @class([$__VIEW_ID__ . '-d11cf3d8', 'cmp-body'])>
                                <div @class([$__VIEW_ID__ . '-89afc176', 'cmp-preview'])>
                                    @startMarker('component', 'cada3f15')
                                    @include('web.modules.components.statcard', ['label' => 'Số lần bấm', 'value' => $count, 'tone' => $tone])
                                    @endMarker('component', 'cada3f15')
                                    <p @class([$__VIEW_ID__ . '-f9b51032', 'cmp-note'])>Đổi counter hoặc select tone ở trên rồi nhìn thẻ này cập nhật.</p>
                                </div>
                                <div @class([$__VIEW_ID__ . '-507dda3e', 'cmp-source'])>
                                    <pre @class([$__VIEW_ID__ . '-feac8319'])><code @class([$__VIEW_ID__ . '-86e13ade'])><span @class([$__VIEW_ID__ . '-6a5c32f5', 'code-line'])>&#64;props({ label: 'Label', value: '0', tone: 'sky' })</span><span @class([$__VIEW_ID__ . '-9d53c5b0', 'code-line'])></span><span @class([$__VIEW_ID__ . '-f2b835f9', 'code-line'])>&lt;div &#64;class(['card', 'card--indigo': tone === 'indigo'])&gt;</span><span @class([$__VIEW_ID__ . '-58e91f7e', 'code-line'])>  &lt;span&gt;<span @class([$__VIEW_ID__ . '-ff2089a7', 'mustache-token'])>label</span>&lt;/span&gt;</span><span @class([$__VIEW_ID__ . '-cdb33082', 'code-line'])>  &lt;strong&gt;<span @class([$__VIEW_ID__ . '-6a7e7f47', 'mustache-token'])>value</span>&lt;/strong&gt;</span><span @class([$__VIEW_ID__ . '-b0e0d0b6', 'code-line'])>  &#64;children</span><span @class([$__VIEW_ID__ . '-d54d5467', 'code-line'])>&lt;/div&gt;</span></code></pre>
                                </div>
                            </div>
                        </article>

                    </div>
                </section>

                <section @class([$__VIEW_ID__ . '-79c1c2bf', 'cmp-group'])>
                    <div @class([$__VIEW_ID__ . '-73c97124', 'cmp-group-head'])>
                        <h2 @class([$__VIEW_ID__ . '-61d1bb88'])>Trang mẫu đầy đủ</h2>
                        <p @class([$__VIEW_ID__ . '-aa5230e5'])>Ba fixture lớn hơn, mỗi cái tập trung vào một vấn đề thật.</p>
                    </div>
                    <div @class([$__VIEW_ID__ . '-96b5d36f', 'ov-grid', 'ov-grid--3'])>
                        <a @class([$__VIEW_ID__ . '-89dc566a', 'ov-card']) @attr(['href' => '/demo'])>
                            <span @class([$__VIEW_ID__ . '-79487e10'])>Cú pháp</span>
                            <h3 @class([$__VIEW_ID__ . '-cb5160d0'])>Interactive demo →</h3>
                            <p @class([$__VIEW_ID__ . '-ff30271a'])>Chín nhóm cú pháp trong một trang, gồm cả phần chỉ chạy phía server.</p>
                        </a>
                        <a @class([$__VIEW_ID__ . '-b91eac83', 'ov-card']) @attr(['href' => '/todo-list'])>
                            <span @class([$__VIEW_ID__ . '-4aede143'])>Layout</span>
                            <h3 @class([$__VIEW_ID__ . '-3489fb76'])>Todo workspace →</h3>
                            <p @class([$__VIEW_ID__ . '-00f72b63'])>State cục bộ của trang trong khi layout giữ nguyên qua mỗi lần đổi route.</p>
                        </a>
                        <a @class([$__VIEW_ID__ . '-f7f12c25', 'ov-card']) @attr(['href' => '/roster'])>
                            <span @class([$__VIEW_ID__ . '-c1986335'])>Đồng thời</span>
                            <h3 @class([$__VIEW_ID__ . '-9ccaa738'])>Roster sync →</h3>
                            <p @class([$__VIEW_ID__ . '-4de875df'])>Poll ba mươi giây và xử lý khi người khác sửa hoặc xoá bản ghi bạn đang mở.</p>
                        </a>
                    </div>
                </section>

            </div>
        </div>

        <a @class([$__VIEW_ID__ . '-ceb15976', 'doc-next']) @attr(['href' => '/docs'])>
            <div @class([$__VIEW_ID__ . '-60f0ac7a'])><span @class([$__VIEW_ID__ . '-b7585c3f'])>Quay lại</span><strong @class([$__VIEW_ID__ . '-8767f8f3'])>Mục lục tài liệu</strong></div>
            <span @class([$__VIEW_ID__ . '-8287de38', 'button', 'button-primary'])>Mở tài liệu →</span>
        </a>
    @endblock
