@exec($__ONE_COMPONENT_REGISTRY__ = ['statcard' => 'web.modules.components.statcard']) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

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
        <header @class([$__VIEW_ID__ . '-Bdoc1', 'page-hero'])>
            <div @class([$__VIEW_ID__ . '-Bdoc11'])>
                <p @class([$__VIEW_ID__ . '-Bdoc111', 'kicker'])><span @class([$__VIEW_ID__ . '-Bdoc1111'])>10</span> THỰC HÀNH</p>
                <h1 @class([$__VIEW_ID__ . '-Bdoc112'])>Thư viện component.</h1>
            </div>
            <div @class([$__VIEW_ID__ . '-Bdoc12', 'page-hero-aside'])>
                <p @class([$__VIEW_ID__ . '-Bdoc121'])>Mỗi ví dụ dưới đây đang chạy thật trên chính trang này, kèm đúng đoạn <code @class([$__VIEW_ID__ . '-Bdoc1211'])>.sao</code> sinh ra nó. Bấm thử bên trái, đọc nguồn bên phải.</p>
            </div>
        </header>

        <div @class([$__VIEW_ID__ . '-Bdoc2', 'cmp-page'])>
            <div @class([$__VIEW_ID__ . '-Bdoc21', 'cmp-groups'])>

                <section @class([$__VIEW_ID__ . '-Bdoc211', 'cmp-group'])>
                    <div @class([$__VIEW_ID__ . '-Bdoc2111', 'cmp-group-head'])>
                        <h2 @class([$__VIEW_ID__ . '-Bdoc21111'])>State &amp; sự kiện</h2>
                        <p @class([$__VIEW_ID__ . '-Bdoc21112'])>Khai báo state ở đầu file, mỗi key tự có setter; event gắn thẳng lên thẻ.</p>
                    </div>
                    <div @class([$__VIEW_ID__ . '-Bdoc2112', 'cmp-list'])>

                        <article @class([$__VIEW_ID__ . '-Bdoc21121', 'cmp-item'])>
                            <div @class([$__VIEW_ID__ . '-Bdoc211211', 'cmp-head'])>
                                <div @class([$__VIEW_ID__ . '-Bdoc2112111'])>
                                    <h3 @class([$__VIEW_ID__ . '-Bdoc21121111'])>Counter</h3>
                                    <p @class([$__VIEW_ID__ . '-Bdoc21121112'])>Setter sinh tự động từ tên state.</p>
                                </div>
                                <div @class([$__VIEW_ID__ . '-Bdoc2112112', 'ov-tags'])><span @class([$__VIEW_ID__ . '-Bdoc21121121', 'ov-tag', 'ov-tag--brand'])>&#64;states</span><span @class([$__VIEW_ID__ . '-Bdoc21121122', 'ov-tag'])>&#64;click</span></div>
                            </div>
                            <div @class([$__VIEW_ID__ . '-Bdoc211212', 'cmp-body'])>
                                <div @class([$__VIEW_ID__ . '-Bdoc2112121', 'cmp-preview'])>
                                    <div @class([$__VIEW_ID__ . '-Bdoc21121211', 'cmp-num'])>@startMarker('output', 'Bdoc21121211o1'){{ $count }}@endMarker('output', 'Bdoc21121211o1')</div>
                                    <div @class([$__VIEW_ID__ . '-Bdoc21121212', 'cmp-row'])>
                                        <button @class([$__VIEW_ID__ . '-Bdoc211212121'])>−</button>
                                        <button @class([$__VIEW_ID__ . '-Bdoc211212122', 'is-primary'])>+</button>
                                        <button @class([$__VIEW_ID__ . '-Bdoc211212123'])>Reset</button>
                                    </div>
                                </div>
                                <div @class([$__VIEW_ID__ . '-Bdoc2112122', 'cmp-source'])>
                                    <pre @class([$__VIEW_ID__ . '-Bdoc21121221'])><code @class([$__VIEW_ID__ . '-Bdoc211212211'])><span @class([$__VIEW_ID__ . '-Bdoc2112122111', 'code-line'])>&#64;states({ count: 0 })</span><span @class([$__VIEW_ID__ . '-Bdoc2112122112', 'code-line'])></span><span @class([$__VIEW_ID__ . '-Bdoc2112122113', 'code-line'])>&lt;div&gt;<span @class([$__VIEW_ID__ . '-Bdoc21121221131', 'mustache-token'])>count</span>&lt;/div&gt;</span><span @class([$__VIEW_ID__ . '-Bdoc2112122114', 'code-line'])>&lt;button &#64;click(setCount(count + 1))&gt;+&lt;/button&gt;</span><span @class([$__VIEW_ID__ . '-Bdoc2112122115', 'code-line'])>&lt;button &#64;click(setCount(0))&gt;Reset&lt;/button&gt;</span></code></pre>
                                </div>
                            </div>
                        </article>

                        <article @class([$__VIEW_ID__ . '-Bdoc21122', 'cmp-item'])>
                            <div @class([$__VIEW_ID__ . '-Bdoc211221', 'cmp-head'])>
                                <div @class([$__VIEW_ID__ . '-Bdoc2112211'])>
                                    <h3 @class([$__VIEW_ID__ . '-Bdoc21122111'])>Modifier của event</h3>
                                    <p @class([$__VIEW_ID__ . '-Bdoc21122112'])><code @class([$__VIEW_ID__ . '-Bdoc211221121'])>.once</code> chỉ chạy một lần; <code @class([$__VIEW_ID__ . '-Bdoc211221122'])>.self</code> bỏ qua click từ phần tử con.</p>
                                </div>
                                <div @class([$__VIEW_ID__ . '-Bdoc2112212', 'ov-tags'])><span @class([$__VIEW_ID__ . '-Bdoc21122121', 'ov-tag', 'ov-tag--brand'])>.once</span><span @class([$__VIEW_ID__ . '-Bdoc21122122', 'ov-tag', 'ov-tag--brand'])>.self</span><span @class([$__VIEW_ID__ . '-Bdoc21122123', 'ov-tag'])>.stop</span></div>
                            </div>
                            <div @class([$__VIEW_ID__ . '-Bdoc211222', 'cmp-body'])>
                                <div @class([$__VIEW_ID__ . '-Bdoc2112221', 'cmp-preview'])>
                                    <div @class([$__VIEW_ID__ . '-Bdoc21122211', 'cmp-row'])>
                                        <button @class([$__VIEW_ID__ . '-Bdoc211222111'])>Chỉ chạy 1 lần</button>
                                        <span @class([$__VIEW_ID__ . '-Bdoc211222112', 'cmp-chip', 'cmp-chip--slate'])>còn lại: @startMarker('output', 'Bdoc211222112o1'){{ $onceLeft }}@endMarker('output', 'Bdoc211222112o1')</span>
                                    </div>
                                    <div @class([$__VIEW_ID__ . '-Bdoc21122212', 'cmp-box'])>
                                        Bấm vào nền này thì đếm tăng — bấm
                                        <button @class([$__VIEW_ID__ . '-Bdoc211222121'])>nút bên trong</button>
                                        thì không.
                                    </div>
                                    <p @class([$__VIEW_ID__ . '-Bdoc21122213', 'cmp-note'])>nền: @startMarker('output', 'Bdoc21122213o1'){{ $selfHits }}@endMarker('output', 'Bdoc21122213o1') · nút con: @startMarker('output', 'Bdoc21122213o2'){{ $clicks }}@endMarker('output', 'Bdoc21122213o2')</p>
                                </div>
                                <div @class([$__VIEW_ID__ . '-Bdoc2112222', 'cmp-source'])>
                                    <pre @class([$__VIEW_ID__ . '-Bdoc21122221'])><code @class([$__VIEW_ID__ . '-Bdoc211222211'])><span @class([$__VIEW_ID__ . '-Bdoc2112222111', 'code-line'])>&lt;button &#64;click.once(setOnceLeft(0))&gt;…&lt;/button&gt;</span><span @class([$__VIEW_ID__ . '-Bdoc2112222112', 'code-line'])></span><span @class([$__VIEW_ID__ . '-Bdoc2112222113', 'code-line'])>&lt;div &#64;click.self(setSelfHits(selfHits + 1))&gt;</span><span @class([$__VIEW_ID__ . '-Bdoc2112222114', 'code-line'])>  &lt;button &#64;click.stop(setClicks(clicks + 1))&gt;…&lt;/button&gt;</span><span @class([$__VIEW_ID__ . '-Bdoc2112222115', 'code-line'])>&lt;/div&gt;</span></code></pre>
                                </div>
                            </div>
                        </article>

                        <article @class([$__VIEW_ID__ . '-Bdoc21123', 'cmp-item'])>
                            <div @class([$__VIEW_ID__ . '-Bdoc211231', 'cmp-head'])>
                                <div @class([$__VIEW_ID__ . '-Bdoc2112311'])>
                                    <h3 @class([$__VIEW_ID__ . '-Bdoc21123111'])>Biểu thức dẫn xuất</h3>
                                    <p @class([$__VIEW_ID__ . '-Bdoc21123112'])>Compiler suy ra vùng này phụ thuộc <code @class([$__VIEW_ID__ . '-Bdoc211231121'])>price</code> và <code @class([$__VIEW_ID__ . '-Bdoc211231122'])>qty</code>, chỉ tính lại khi hai state đó đổi.</p>
                                </div>
                                <div @class([$__VIEW_ID__ . '-Bdoc2112312', 'ov-tags'])><span @class([$__VIEW_ID__ . '-Bdoc21123121', 'ov-tag', 'ov-tag--brand'])>output</span><span @class([$__VIEW_ID__ . '-Bdoc21123122', 'ov-tag'])>stateKeys</span></div>
                            </div>
                            <div @class([$__VIEW_ID__ . '-Bdoc211232', 'cmp-body'])>
                                <div @class([$__VIEW_ID__ . '-Bdoc2112321', 'cmp-preview'])>
                                    <div @class([$__VIEW_ID__ . '-Bdoc21123211', 'cmp-row'])>
                                        <label @class([$__VIEW_ID__ . '-Bdoc211232111'])>Đơn giá <input @class([$__VIEW_ID__ . '-Bdoc2112321111']) @attr(['type' => 'number']) @bind($price)></label>
                                        <label @class([$__VIEW_ID__ . '-Bdoc211232112'])>Số lượng <input @class([$__VIEW_ID__ . '-Bdoc2112321121']) @attr(['type' => 'number']) @bind($qty)></label>
                                    </div>
                                    <div @class([$__VIEW_ID__ . '-Bdoc21123212', 'cmp-out'])>Thành tiền: @startMarker('output', 'Bdoc21123212o1'){{ $price * $qty }}@endMarker('output', 'Bdoc21123212o1')</div>
                                </div>
                                <div @class([$__VIEW_ID__ . '-Bdoc2112322', 'cmp-source'])>
                                    <pre @class([$__VIEW_ID__ . '-Bdoc21123221'])><code @class([$__VIEW_ID__ . '-Bdoc211232211'])><span @class([$__VIEW_ID__ . '-Bdoc2112322111', 'code-line'])>&#64;states({ price: 120, qty: 2 })</span><span @class([$__VIEW_ID__ . '-Bdoc2112322112', 'code-line'])></span><span @class([$__VIEW_ID__ . '-Bdoc2112322113', 'code-line'])>&lt;input type="number" &#64;bind(price)&gt;</span><span @class([$__VIEW_ID__ . '-Bdoc2112322114', 'code-line'])>&lt;input type="number" &#64;bind(qty)&gt;</span><span @class([$__VIEW_ID__ . '-Bdoc2112322115', 'code-line'])>&lt;div&gt;Thành tiền: <span @class([$__VIEW_ID__ . '-Bdoc21123221151', 'mustache-token'])>price * qty</span>&lt;/div&gt;</span></code></pre>
                                </div>
                            </div>
                        </article>

                    </div>
                </section>

                <section @class([$__VIEW_ID__ . '-Bdoc212', 'cmp-group'])>
                    <div @class([$__VIEW_ID__ . '-Bdoc2121', 'cmp-group-head'])>
                        <h2 @class([$__VIEW_ID__ . '-Bdoc21211'])>Binding hai chiều</h2>
                        <p @class([$__VIEW_ID__ . '-Bdoc21212'])>Một directive cho mọi loại input: text, number, select, checkbox, radio.</p>
                    </div>
                    <div @class([$__VIEW_ID__ . '-Bdoc2122', 'cmp-list'])>

                        <article @class([$__VIEW_ID__ . '-Bdoc21221', 'cmp-item'])>
                            <div @class([$__VIEW_ID__ . '-Bdoc212211', 'cmp-head'])>
                                <div @class([$__VIEW_ID__ . '-Bdoc2122111'])>
                                    <h3 @class([$__VIEW_ID__ . '-Bdoc21221111'])>Text input</h3>
                                    <p @class([$__VIEW_ID__ . '-Bdoc21221112'])>Gõ vào ô thì state đổi, đổi state thì ô đổi theo.</p>
                                </div>
                                <div @class([$__VIEW_ID__ . '-Bdoc2122112', 'ov-tags'])><span @class([$__VIEW_ID__ . '-Bdoc21221121', 'ov-tag', 'ov-tag--brand'])>&#64;bind</span></div>
                            </div>
                            <div @class([$__VIEW_ID__ . '-Bdoc212212', 'cmp-body'])>
                                <div @class([$__VIEW_ID__ . '-Bdoc2122121', 'cmp-preview'])>
                                    <div @class([$__VIEW_ID__ . '-Bdoc21221211', 'cmp-row'])>
                                        <input @class([$__VIEW_ID__ . '-Bdoc212212111']) @attr(['type' => 'text', 'placeholder' => 'Nhập tên…']) @bind($name)>
                                        <button @class([$__VIEW_ID__ . '-Bdoc212212112'])>Đặt lại</button>
                                    </div>
                                    <div @class([$__VIEW_ID__ . '-Bdoc21221212', 'cmp-out'])>Xin chào, @startMarker('output', 'Bdoc21221212o1'){{ $name }}@endMarker('output', 'Bdoc21221212o1').</div>
                                </div>
                                <div @class([$__VIEW_ID__ . '-Bdoc2122122', 'cmp-source'])>
                                    <pre @class([$__VIEW_ID__ . '-Bdoc21221221'])><code @class([$__VIEW_ID__ . '-Bdoc212212211'])><span @class([$__VIEW_ID__ . '-Bdoc2122122111', 'code-line'])>&#64;states({ name: 'Saola' })</span><span @class([$__VIEW_ID__ . '-Bdoc2122122112', 'code-line'])></span><span @class([$__VIEW_ID__ . '-Bdoc2122122113', 'code-line'])>&lt;input type="text" &#64;bind(name)&gt;</span><span @class([$__VIEW_ID__ . '-Bdoc2122122114', 'code-line'])>&lt;div&gt;Xin chào, <span @class([$__VIEW_ID__ . '-Bdoc21221221141', 'mustache-token'])>name</span>.&lt;/div&gt;</span></code></pre>
                                </div>
                            </div>
                        </article>

                        <article @class([$__VIEW_ID__ . '-Bdoc21222', 'cmp-item'])>
                            <div @class([$__VIEW_ID__ . '-Bdoc212221', 'cmp-head'])>
                                <div @class([$__VIEW_ID__ . '-Bdoc2122211'])>
                                    <h3 @class([$__VIEW_ID__ . '-Bdoc21222111'])>Select &amp; checkbox</h3>
                                    <p @class([$__VIEW_ID__ . '-Bdoc21222112'])>Cùng <code @class([$__VIEW_ID__ . '-Bdoc212221121', 'directive-token'])>bind</code>, runtime tự chọn <code @class([$__VIEW_ID__ . '-Bdoc212221122'])>value</code> hay <code @class([$__VIEW_ID__ . '-Bdoc212221123'])>checked</code>.</p>
                                </div>
                                <div @class([$__VIEW_ID__ . '-Bdoc2122212', 'ov-tags'])><span @class([$__VIEW_ID__ . '-Bdoc21222121', 'ov-tag', 'ov-tag--brand'])>&#64;bind</span><span @class([$__VIEW_ID__ . '-Bdoc21222122', 'ov-tag'])>&#64;disabled</span></div>
                            </div>
                            <div @class([$__VIEW_ID__ . '-Bdoc212222', 'cmp-body'])>
                                <div @class([$__VIEW_ID__ . '-Bdoc2122221', 'cmp-preview'])>
                                    <div @class([$__VIEW_ID__ . '-Bdoc21222211', 'cmp-row'])>
                                        <select @class([$__VIEW_ID__ . '-Bdoc212222111']) @bind($tone)>
                                            <option @class([$__VIEW_ID__ . '-Bdoc2122221111']) @attr(['value' => 'sky'])>sky</option>
                                            <option @class([$__VIEW_ID__ . '-Bdoc2122221112']) @attr(['value' => 'indigo'])>indigo</option>
                                            <option @class([$__VIEW_ID__ . '-Bdoc2122221113']) @attr(['value' => 'slate'])>slate</option>
                                        </select>
                                        <label @class([$__VIEW_ID__ . '-Bdoc212222112'])><input @class([$__VIEW_ID__ . '-Bdoc2122221121']) @attr(['type' => 'checkbox']) @bind($agree)> Đồng ý điều khoản</label>
                                        <button @class([$__VIEW_ID__ . '-Bdoc212222113', 'is-primary']) @disabled(!$agree)>Gửi</button>
                                    </div>
                                    <div @class([$__VIEW_ID__ . '-Bdoc21222212', 'cmp-row'])>
                                        <span @class([$__VIEW_ID__ . '-Bdoc212222121', 'cmp-chip', 'cmp-chip--sky'=> $tone === 'sky', 'cmp-chip--indigo'=> $tone === 'indigo', 'cmp-chip--slate'=> $tone === 'slate'])>tone = @startMarker('output', 'Bdoc212222121o1'){{ $tone }}@endMarker('output', 'Bdoc212222121o1')</span>
                                    </div>
                                </div>
                                <div @class([$__VIEW_ID__ . '-Bdoc2122222', 'cmp-source'])>
                                    <pre @class([$__VIEW_ID__ . '-Bdoc21222221'])><code @class([$__VIEW_ID__ . '-Bdoc212222211'])><span @class([$__VIEW_ID__ . '-Bdoc2122222111', 'code-line'])>&lt;select &#64;bind(tone)&gt;…&lt;/select&gt;</span><span @class([$__VIEW_ID__ . '-Bdoc2122222112', 'code-line'])>&lt;input type="checkbox" &#64;bind(agree)&gt;</span><span @class([$__VIEW_ID__ . '-Bdoc2122222113', 'code-line'])>&lt;button &#64;disabled(!agree)&gt;Gửi&lt;/button&gt;</span></code></pre>
                                </div>
                            </div>
                        </article>

                    </div>
                </section>

                <section @class([$__VIEW_ID__ . '-Bdoc213', 'cmp-group'])>
                    <div @class([$__VIEW_ID__ . '-Bdoc2131', 'cmp-group-head'])>
                        <h2 @class([$__VIEW_ID__ . '-Bdoc21311'])>Ràng buộc thuộc tính</h2>
                        <p @class([$__VIEW_ID__ . '-Bdoc21312'])>Class, style và boolean attribute đều đọc thẳng từ state.</p>
                    </div>
                    <div @class([$__VIEW_ID__ . '-Bdoc2132', 'cmp-list'])>

                        <article @class([$__VIEW_ID__ . '-Bdoc21321', 'cmp-item'])>
                            <div @class([$__VIEW_ID__ . '-Bdoc213211', 'cmp-head'])>
                                <div @class([$__VIEW_ID__ . '-Bdoc2132111'])>
                                    <h3 @class([$__VIEW_ID__ . '-Bdoc21321111'])>Class động</h3>
                                    <p @class([$__VIEW_ID__ . '-Bdoc21321112'])>Class tĩnh trộn với class có điều kiện; chỉ thuộc tính class được đụng tới, phần còn lại của thẻ giữ nguyên.</p>
                                </div>
                                <div @class([$__VIEW_ID__ . '-Bdoc2132112', 'ov-tags'])><span @class([$__VIEW_ID__ . '-Bdoc21321121', 'ov-tag', 'ov-tag--brand'])>&#64;class</span></div>
                            </div>
                            <div @class([$__VIEW_ID__ . '-Bdoc213212', 'cmp-body'])>
                                <div @class([$__VIEW_ID__ . '-Bdoc2132121', 'cmp-preview'])>
                                    <div @class([$__VIEW_ID__ . '-Bdoc21321211', 'cmp-row'])>
                                        <button @class([$__VIEW_ID__ . '-Bdoc213212111'])>Nhỏ</button>
                                        <button @class([$__VIEW_ID__ . '-Bdoc213212112'])>Vừa</button>
                                        <button @class([$__VIEW_ID__ . '-Bdoc213212113'])>Lớn</button>
                                    </div>
                                    <div @class([$__VIEW_ID__ . '-Bdoc21321212', 'cmp-box', 'txt-sm'=> $textSize === 'sm', 'txt-lg'=> $textSize === 'lg'])>Cỡ chữ hiện tại: @startMarker('output', 'Bdoc21321212o1'){{ $textSize }}@endMarker('output', 'Bdoc21321212o1').</div>
                                </div>
                                <div @class([$__VIEW_ID__ . '-Bdoc2132122', 'cmp-source'])>
                                    <pre @class([$__VIEW_ID__ . '-Bdoc21321221'])><code @class([$__VIEW_ID__ . '-Bdoc213212211'])><span @class([$__VIEW_ID__ . '-Bdoc2132122111', 'code-line'])>&#64;states({ textSize: 'md' })</span><span @class([$__VIEW_ID__ . '-Bdoc2132122112', 'code-line'])></span><span @class([$__VIEW_ID__ . '-Bdoc2132122113', 'code-line'])>&lt;div &#64;class({'box', 'txt-lg': textSize === 'lg'})&gt;…&lt;/div&gt;</span><span @class([$__VIEW_ID__ . '-Bdoc2132122114', 'code-line'])>&lt;button &#64;click(setTextSize('lg'))&gt;Lớn&lt;/button&gt;</span></code></pre>
                                </div>
                            </div>
                        </article>

                        <article @class([$__VIEW_ID__ . '-Bdoc21322', 'cmp-item'])>
                            <div @class([$__VIEW_ID__ . '-Bdoc213221', 'cmp-head'])>
                                <div @class([$__VIEW_ID__ . '-Bdoc2132211'])>
                                    <h3 @class([$__VIEW_ID__ . '-Bdoc21322111'])>Ẩn hiện &amp; readonly</h3>
                                    <p @class([$__VIEW_ID__ . '-Bdoc21322112'])>Bật tắt hiển thị bằng class có điều kiện — DOM vẫn nằm nguyên chỗ cũ.</p>
                                </div>
                                <div @class([$__VIEW_ID__ . '-Bdoc2132212', 'ov-tags'])><span @class([$__VIEW_ID__ . '-Bdoc21322121', 'ov-tag', 'ov-tag--brand'])>&#64;class</span><span @class([$__VIEW_ID__ . '-Bdoc21322122', 'ov-tag', 'ov-tag--brand'])>&#64;readonly</span></div>
                            </div>
                            <div @class([$__VIEW_ID__ . '-Bdoc213222', 'cmp-body'])>
                                <div @class([$__VIEW_ID__ . '-Bdoc2132221', 'cmp-preview'])>
                                    <div @class([$__VIEW_ID__ . '-Bdoc21322211', 'cmp-row'])>
                                        <button @class([$__VIEW_ID__ . '-Bdoc213222111'])>Bật tắt khối</button>
                                        <label @class([$__VIEW_ID__ . '-Bdoc213222112'])><input @class([$__VIEW_ID__ . '-Bdoc2132221121']) @attr(['type' => 'checkbox']) @bind($locked)> Khoá ô nhập</label>
                                    </div>
                                    <div @class([$__VIEW_ID__ . '-Bdoc21322212', 'cmp-box', 'is-hidden'=> !$visible])>Khối này vẫn nằm trong DOM khi bị ẩn.</div>
                                    <input @class([$__VIEW_ID__ . '-Bdoc21322213']) @attr(['type' => 'text', 'placeholder' => 'Ghi chú…']) @bind($draft) @readonly($locked)>
                                </div>
                                <div @class([$__VIEW_ID__ . '-Bdoc2132222', 'cmp-source'])>
                                    <pre @class([$__VIEW_ID__ . '-Bdoc21322221'])><code @class([$__VIEW_ID__ . '-Bdoc213222211'])><span @class([$__VIEW_ID__ . '-Bdoc2132222111', 'code-line'])>&lt;div &#64;class({'box', 'is-hidden': !visible})&gt;…&lt;/div&gt;</span><span @class([$__VIEW_ID__ . '-Bdoc2132222112', 'code-line'])>&lt;input &#64;bind(draft) &#64;readonly(locked)&gt;</span></code></pre>
                                </div>
                            </div>
                        </article>

                    </div>
                </section>

                <section @class([$__VIEW_ID__ . '-Bdoc214', 'cmp-group'])>
                    <div @class([$__VIEW_ID__ . '-Bdoc2141', 'cmp-group-head'])>
                        <h2 @class([$__VIEW_ID__ . '-Bdoc21411'])>Điều khiển luồng</h2>
                        <p @class([$__VIEW_ID__ . '-Bdoc21412'])>Mỗi khối là một vùng marker độc lập, chỉ render lại khi state phụ thuộc đổi.</p>
                    </div>
                    <div @class([$__VIEW_ID__ . '-Bdoc2142', 'cmp-list'])>

                        <article @class([$__VIEW_ID__ . '-Bdoc21421', 'cmp-item'])>
                            <div @class([$__VIEW_ID__ . '-Bdoc214211', 'cmp-head'])>
                                <div @class([$__VIEW_ID__ . '-Bdoc2142111'])>
                                    <h3 @class([$__VIEW_ID__ . '-Bdoc21421111'])>If / elseif / else</h3>
                                    <p @class([$__VIEW_ID__ . '-Bdoc21421112'])>Compiler tự suy ra state nào khiến vùng này render lại.</p>
                                </div>
                                <div @class([$__VIEW_ID__ . '-Bdoc2142112', 'ov-tags'])><span @class([$__VIEW_ID__ . '-Bdoc21421121', 'ov-tag', 'ov-tag--brand'])>&#64;if</span><span @class([$__VIEW_ID__ . '-Bdoc21421122', 'ov-tag'])>&#64;elseif</span><span @class([$__VIEW_ID__ . '-Bdoc21421123', 'ov-tag'])>&#64;else</span></div>
                            </div>
                            <div @class([$__VIEW_ID__ . '-Bdoc214212', 'cmp-body'])>
                                <div @class([$__VIEW_ID__ . '-Bdoc2142121', 'cmp-preview'])>
                                    <div @class([$__VIEW_ID__ . '-Bdoc21421211', 'cmp-row'])>
                                        <button @class([$__VIEW_ID__ . '-Bdoc214212111'])>ready</button>
                                        <button @class([$__VIEW_ID__ . '-Bdoc214212112'])>building</button>
                                        <button @class([$__VIEW_ID__ . '-Bdoc214212113'])>error</button>
                                    </div>
                                    @startMarker('reactive', 'Bdoc2142121r1', ['stateKey' => ['status'], 'type' => 'if'])
                                    @if($status === 'ready')
                                        <div @class([$__VIEW_ID__ . '-Bdoc2142121r1k11', 'cmp-out'])>Sẵn sàng — bundle khớp với view registry.</div>
                                    @elseif($status === 'building')
                                        <div @class([$__VIEW_ID__ . '-Bdoc2142121r1k21', 'cmp-box'])>Đang biên dịch view cho context web…</div>
                                    @else
                                        <div @class([$__VIEW_ID__ . '-Bdoc2142121r1k31', 'cmp-box'])>Có lỗi khi compile. Xem log của <code @class([$__VIEW_ID__ . '-Bdoc2142121r1k311'])>sao-compile</code>.</div>
                                    @endif
                                    @endMarker('reactive', 'Bdoc2142121r1')
                                </div>
                                <div @class([$__VIEW_ID__ . '-Bdoc2142122', 'cmp-source'])>
                                    <pre @class([$__VIEW_ID__ . '-Bdoc21421221'])><code @class([$__VIEW_ID__ . '-Bdoc214212211'])><span @class([$__VIEW_ID__ . '-Bdoc2142122111', 'code-line'])>&#64;if(status === 'ready')</span><span @class([$__VIEW_ID__ . '-Bdoc2142122112', 'code-line'])>    &lt;div&gt;Sẵn sàng…&lt;/div&gt;</span><span @class([$__VIEW_ID__ . '-Bdoc2142122113', 'code-line'])>&#64;elseif(status === 'building')</span><span @class([$__VIEW_ID__ . '-Bdoc2142122114', 'code-line'])>    &lt;div&gt;Đang biên dịch…&lt;/div&gt;</span><span @class([$__VIEW_ID__ . '-Bdoc2142122115', 'code-line'])>&#64;else</span><span @class([$__VIEW_ID__ . '-Bdoc2142122116', 'code-line'])>    &lt;div&gt;Có lỗi…&lt;/div&gt;</span><span @class([$__VIEW_ID__ . '-Bdoc2142122117', 'code-line'])>&#64;endif</span></code></pre>
                                </div>
                            </div>
                        </article>

                        <article @class([$__VIEW_ID__ . '-Bdoc21422', 'cmp-item'])>
                            <div @class([$__VIEW_ID__ . '-Bdoc214221', 'cmp-head'])>
                                <div @class([$__VIEW_ID__ . '-Bdoc2142211'])>
                                    <h3 @class([$__VIEW_ID__ . '-Bdoc21422111'])>Switch</h3>
                                    <p @class([$__VIEW_ID__ . '-Bdoc21422112'])>Nhiều nhánh trong một vùng marker duy nhất.</p>
                                </div>
                                <div @class([$__VIEW_ID__ . '-Bdoc2142212', 'ov-tags'])><span @class([$__VIEW_ID__ . '-Bdoc21422121', 'ov-tag', 'ov-tag--brand'])>&#64;switch</span><span @class([$__VIEW_ID__ . '-Bdoc21422122', 'ov-tag'])>&#64;case</span></div>
                            </div>
                            <div @class([$__VIEW_ID__ . '-Bdoc214222', 'cmp-body'])>
                                <div @class([$__VIEW_ID__ . '-Bdoc2142221', 'cmp-preview'])>
                                    <div @class([$__VIEW_ID__ . '-Bdoc21422211', 'cmp-row'])>
                                        <button @class([$__VIEW_ID__ . '-Bdoc214222111'])>Blade</button>
                                        <button @class([$__VIEW_ID__ . '-Bdoc214222112'])>Client</button>
                                        <button @class([$__VIEW_ID__ . '-Bdoc214222113'])>API</button>
                                    </div>
                                    @startMarker('reactive', 'Bdoc2142221r1', ['stateKey' => ['runtime'], 'type' => 'switch'])
                                    @switch($runtime)
                                        @case('blade')
                                            <div @class([$__VIEW_ID__ . '-Bdoc2142221r1k11', 'cmp-out'])>Server render HTML hoàn chỉnh cho request đầu.</div>
                                            @break
                                        @case('client')
                                            <div @class([$__VIEW_ID__ . '-Bdoc2142221r1k21', 'cmp-out'])>Runtime claim DOM rồi tiếp quản điều hướng.</div>
                                            @break
                                        @default
                                            <div @class([$__VIEW_ID__ . '-Bdoc2142221r1k31', 'cmp-out'])>Context api trả JSON, không render view.</div>
                                    @endswitch
                                    @endMarker('reactive', 'Bdoc2142221r1')
                                </div>
                                <div @class([$__VIEW_ID__ . '-Bdoc2142222', 'cmp-source'])>
                                    <pre @class([$__VIEW_ID__ . '-Bdoc21422221'])><code @class([$__VIEW_ID__ . '-Bdoc214222211'])><span @class([$__VIEW_ID__ . '-Bdoc2142222111', 'code-line'])>&#64;switch(runtime)</span><span @class([$__VIEW_ID__ . '-Bdoc2142222112', 'code-line'])>    &#64;case('blade')</span><span @class([$__VIEW_ID__ . '-Bdoc2142222113', 'code-line'])>        &lt;div&gt;Server render…&lt;/div&gt;</span><span @class([$__VIEW_ID__ . '-Bdoc2142222114', 'code-line'])>        &#64;break</span><span @class([$__VIEW_ID__ . '-Bdoc2142222115', 'code-line'])>    &#64;default</span><span @class([$__VIEW_ID__ . '-Bdoc2142222116', 'code-line'])>        &lt;div&gt;Context api…&lt;/div&gt;</span><span @class([$__VIEW_ID__ . '-Bdoc2142222117', 'code-line'])>&#64;endswitch</span></code></pre>
                                </div>
                            </div>
                        </article>

                        <article @class([$__VIEW_ID__ . '-Bdoc21423', 'cmp-item'])>
                            <div @class([$__VIEW_ID__ . '-Bdoc214231', 'cmp-head'])>
                                <div @class([$__VIEW_ID__ . '-Bdoc2142311'])>
                                    <h3 @class([$__VIEW_ID__ . '-Bdoc21423111'])>Foreach có &#64;key</h3>
                                    <p @class([$__VIEW_ID__ . '-Bdoc21423112'])>Khoá quyết định slot nào được tái dùng khi danh sách đổi.</p>
                                </div>
                                <div @class([$__VIEW_ID__ . '-Bdoc2142312', 'ov-tags'])><span @class([$__VIEW_ID__ . '-Bdoc21423121', 'ov-tag', 'ov-tag--brand'])>&#64;foreach</span><span @class([$__VIEW_ID__ . '-Bdoc21423122', 'ov-tag', 'ov-tag--brand'])>&#64;key</span></div>
                            </div>
                            <div @class([$__VIEW_ID__ . '-Bdoc214232', 'cmp-body'])>
                                <div @class([$__VIEW_ID__ . '-Bdoc2142321', 'cmp-preview'])>
                                    <div @class([$__VIEW_ID__ . '-Bdoc21423211', 'cmp-row'])>
                                        <input @class([$__VIEW_ID__ . '-Bdoc214232111']) @attr(['type' => 'text', 'placeholder' => 'Thêm mục…']) @bind($draft)>
                                        <button @class([$__VIEW_ID__ . '-Bdoc214232112', 'is-primary'])>Thêm</button>
                                    </div>
                                    <ul @class([$__VIEW_ID__ . '-Bdoc21423212', 'cmp-ul'])>
                                        @startMarker('reactive', 'Bdoc21423212l1', ['stateKey' => ['items'], 'type' => 'foreach'])
                                        @foreach($items as $item)
                                            <li @class([$__VIEW_ID__ . "-Bdoc21423212l11-{$item['id']}"])>
                                                <span @class([$__VIEW_ID__ . "-Bdoc21423212l111-{$item['id']}"])>@startMarker('output', "Bdoc21423212l111o1-{$item['id']}"){{ $item['label'] }}@endMarker('output', "Bdoc21423212l111o1-{$item['id']}")</span>
                                                <button @class([$__VIEW_ID__ . "-Bdoc21423212l112-{$item['id']}"])>Xoá</button>
                                            </li>
                                        @endforeach
                                        @endMarker('reactive', 'Bdoc21423212l1')
                                    </ul>
                                    @startMarker('reactive', 'Bdoc2142321r1', ['stateKey' => ['count', 'items'], 'type' => 'if'])
                                    @if(count($items) === 0)
                                        <p @class([$__VIEW_ID__ . '-Bdoc2142321r1k11', 'cmp-note'])>Danh sách trống.</p>
                                    @endif
                                    @endMarker('reactive', 'Bdoc2142321r1')
                                </div>
                                <div @class([$__VIEW_ID__ . '-Bdoc2142322', 'cmp-source'])>
                                    <pre @class([$__VIEW_ID__ . '-Bdoc21423221'])><code @class([$__VIEW_ID__ . '-Bdoc214232211'])><span @class([$__VIEW_ID__ . '-Bdoc2142322111', 'code-line'])>&#64;foreach(items as item)</span><span @class([$__VIEW_ID__ . '-Bdoc2142322112', 'code-line'])>    &#64;key(item['id'])</span><span @class([$__VIEW_ID__ . '-Bdoc2142322113', 'code-line'])>    &lt;li&gt;</span><span @class([$__VIEW_ID__ . '-Bdoc2142322114', 'code-line'])>        &lt;span&gt;<span @class([$__VIEW_ID__ . '-Bdoc21423221141', 'mustache-token'])>item['label']</span>&lt;/span&gt;</span><span @class([$__VIEW_ID__ . '-Bdoc2142322115', 'code-line'])>        &lt;button &#64;click(removeItem(item['id']))&gt;Xoá&lt;/button&gt;</span><span @class([$__VIEW_ID__ . '-Bdoc2142322116', 'code-line'])>    &lt;/li&gt;</span><span @class([$__VIEW_ID__ . '-Bdoc2142322117', 'code-line'])>&#64;endforeach</span></code></pre>
                                </div>
                            </div>
                        </article>

                    </div>
                </section>

                <section @class([$__VIEW_ID__ . '-Bdoc215', 'cmp-group'])>
                    <div @class([$__VIEW_ID__ . '-Bdoc2151', 'cmp-group-head'])>
                        <h2 @class([$__VIEW_ID__ . '-Bdoc21511'])>Component con</h2>
                        <p @class([$__VIEW_ID__ . '-Bdoc21512'])>Include tạo một view thật với ViewController và vòng đời riêng, không phải partial dán vào.</p>
                    </div>
                    <div @class([$__VIEW_ID__ . '-Bdoc2152', 'cmp-list'])>

                        <article @class([$__VIEW_ID__ . '-Bdoc21521', 'cmp-item'])>
                            <div @class([$__VIEW_ID__ . '-Bdoc215211', 'cmp-head'])>
                                <div @class([$__VIEW_ID__ . '-Bdoc2152111'])>
                                    <h3 @class([$__VIEW_ID__ . '-Bdoc21521111'])>Props &amp; children</h3>
                                    <p @class([$__VIEW_ID__ . '-Bdoc21521112'])>Prop đổi theo state của trang; nội dung giữa thẻ đi qua slot.</p>
                                </div>
                                <div @class([$__VIEW_ID__ . '-Bdoc2152112', 'ov-tags'])><span @class([$__VIEW_ID__ . '-Bdoc21521121', 'ov-tag', 'ov-tag--brand'])>&#64;include</span><span @class([$__VIEW_ID__ . '-Bdoc21521122', 'ov-tag', 'ov-tag--brand'])>&#64;props</span><span @class([$__VIEW_ID__ . '-Bdoc21521123', 'ov-tag'])>&#64;children</span></div>
                            </div>
                            <div @class([$__VIEW_ID__ . '-Bdoc215212', 'cmp-body'])>
                                <div @class([$__VIEW_ID__ . '-Bdoc2152121', 'cmp-preview'])>
                                    @startMarker('component', 'Bdoc2152121c1')
                                    @include('web.modules.components.statcard', ['label' => "Số lần bấm", 'value' => $count, 'tone' => $tone])
                                    @endMarker('component', 'Bdoc2152121c1')
                                    <p @class([$__VIEW_ID__ . '-Bdoc21521211', 'cmp-note'])>Đổi counter hoặc select tone ở trên rồi nhìn thẻ này cập nhật.</p>
                                </div>
                                <div @class([$__VIEW_ID__ . '-Bdoc2152122', 'cmp-source'])>
                                    <pre @class([$__VIEW_ID__ . '-Bdoc21521221'])><code @class([$__VIEW_ID__ . '-Bdoc215212211'])><span @class([$__VIEW_ID__ . '-Bdoc2152122111', 'code-line'])>&#64;props({ label: 'Label', value: '0', tone: 'sky' })</span><span @class([$__VIEW_ID__ . '-Bdoc2152122112', 'code-line'])></span><span @class([$__VIEW_ID__ . '-Bdoc2152122113', 'code-line'])>&lt;div &#64;class({'card', 'card--indigo': tone === 'indigo'})&gt;</span><span @class([$__VIEW_ID__ . '-Bdoc2152122114', 'code-line'])>  &lt;span&gt;<span @class([$__VIEW_ID__ . '-Bdoc21521221141', 'mustache-token'])>label</span>&lt;/span&gt;</span><span @class([$__VIEW_ID__ . '-Bdoc2152122115', 'code-line'])>  &lt;strong&gt;<span @class([$__VIEW_ID__ . '-Bdoc21521221151', 'mustache-token'])>value</span>&lt;/strong&gt;</span><span @class([$__VIEW_ID__ . '-Bdoc2152122116', 'code-line'])>  &#64;children</span><span @class([$__VIEW_ID__ . '-Bdoc2152122117', 'code-line'])>&lt;/div&gt;</span></code></pre>
                                </div>
                            </div>
                        </article>

                    </div>
                </section>

                <section @class([$__VIEW_ID__ . '-Bdoc216', 'cmp-group'])>
                    <div @class([$__VIEW_ID__ . '-Bdoc2161', 'cmp-group-head'])>
                        <h2 @class([$__VIEW_ID__ . '-Bdoc21611'])>Trang mẫu đầy đủ</h2>
                        <p @class([$__VIEW_ID__ . '-Bdoc21612'])>Ba fixture lớn hơn, mỗi cái tập trung vào một vấn đề thật.</p>
                    </div>
                    <div @class([$__VIEW_ID__ . '-Bdoc2162', 'ov-grid', 'ov-grid--3'])>
                        <a @class([$__VIEW_ID__ . '-Bdoc21621', 'ov-card']) @attr(['href' => '/demo'])>
                            <span @class([$__VIEW_ID__ . '-Bdoc216211'])>Cú pháp</span>
                            <h3 @class([$__VIEW_ID__ . '-Bdoc216212'])>Interactive demo →</h3>
                            <p @class([$__VIEW_ID__ . '-Bdoc216213'])>Chín nhóm cú pháp trong một trang, gồm cả phần chỉ chạy phía server.</p>
                        </a>
                        <a @class([$__VIEW_ID__ . '-Bdoc21622', 'ov-card']) @attr(['href' => '/todo-list'])>
                            <span @class([$__VIEW_ID__ . '-Bdoc216221'])>Layout</span>
                            <h3 @class([$__VIEW_ID__ . '-Bdoc216222'])>Todo workspace →</h3>
                            <p @class([$__VIEW_ID__ . '-Bdoc216223'])>State cục bộ của trang trong khi layout giữ nguyên qua mỗi lần đổi route.</p>
                        </a>
                        <a @class([$__VIEW_ID__ . '-Bdoc21623', 'ov-card']) @attr(['href' => '/roster'])>
                            <span @class([$__VIEW_ID__ . '-Bdoc216231'])>Đồng thời</span>
                            <h3 @class([$__VIEW_ID__ . '-Bdoc216232'])>Roster sync →</h3>
                            <p @class([$__VIEW_ID__ . '-Bdoc216233'])>Poll ba mươi giây và xử lý khi người khác sửa hoặc xoá bản ghi bạn đang mở.</p>
                        </a>
                    </div>
                </section>

            </div>
        </div>

        <a @class([$__VIEW_ID__ . '-Bdoc3', 'doc-next']) @attr(['href' => '/docs'])>
            <div @class([$__VIEW_ID__ . '-Bdoc31'])><span @class([$__VIEW_ID__ . '-Bdoc311'])>Quay lại</span><strong @class([$__VIEW_ID__ . '-Bdoc312'])>Mục lục tài liệu</strong></div>
            <span @class([$__VIEW_ID__ . '-Bdoc32', 'button', 'button-primary'])>Mở tài liệu →</span>
        </a>
    @endblock
