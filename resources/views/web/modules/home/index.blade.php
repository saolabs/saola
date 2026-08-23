@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($selectedSignal, 'source')
@useState($openFaq, 0)
@extends($__layout__ . "public")
    @block('content')
        <section @class([$__VIEW_ID__ . '-b4052a35', 'home-hero'])>
            <div @class([$__VIEW_ID__ . '-90a6e493', 'home-hero-copy'])>
                <p @class([$__VIEW_ID__ . '-f515bf66', 'kicker'])><span @class([$__VIEW_ID__ . '-e2f86203'])>SAOLA / ECOSYSTEM 01</span> Nền tảng ứng dụng Laravel-native</p>
                <h1 @class([$__VIEW_ID__ . '-9b0938cb'])>Một codebase.<br @class([$__VIEW_ID__ . '-f7127348'])><em @class([$__VIEW_ID__ . '-d4f4199d'])>Hai runtime.</em><br @class([$__VIEW_ID__ . '-e95ae667'])>Bốn mặt tiền.</h1>
                <p @class([$__VIEW_ID__ . '-7718bb8d', 'hero-lead'])>Saola biên dịch một view <code @class([$__VIEW_ID__ . '-cbfb64a4'])>.sao</code> thành Blade cho phản hồi đầu tiên và TypeScript cho mọi tương tác sau đó — cùng một AST, cùng marker, cùng state contract. Server và client không thể kể hai câu chuyện khác nhau.</p>
                <div @class([$__VIEW_ID__ . '-ed82504f', 'hero-actions'])>
                    <a @class([$__VIEW_ID__ . '-63bde3ef', 'button', 'button-primary']) @attr(['href' => '/docs/getting-started'])>Bắt đầu trong 4 bước <span @class([$__VIEW_ID__ . '-fee9a4ad'])>↗</span></a>
                    <a @class([$__VIEW_ID__ . '-b589ca24', 'text-link']) @attr(['href' => '#compare'])>Khác gì Livewire &amp; Inertia <span @class([$__VIEW_ID__ . '-c0aad52e'])>→</span></a>
                </div>
                <dl @class([$__VIEW_ID__ . '-5e135ba5', 'hero-facts'])>
                    <div @class([$__VIEW_ID__ . '-fe5c8eae'])><dt @class([$__VIEW_ID__ . '-d73d3967'])>BACKEND</dt><dd @class([$__VIEW_ID__ . '-3947d795'])>Laravel 12 · 13</dd></div>
                    <div @class([$__VIEW_ID__ . '-50a0f69c'])><dt @class([$__VIEW_ID__ . '-22a4978d'])>FIRST PAINT</dt><dd @class([$__VIEW_ID__ . '-8196725f'])>Blade SSR</dd></div>
                    <div @class([$__VIEW_ID__ . '-ecb37508'])><dt @class([$__VIEW_ID__ . '-4f2b888b'])>SAU HYDRATE</dt><dd @class([$__VIEW_ID__ . '-0e24af22'])>Reactive SPA</dd></div>
                </dl>
            </div>

            <div @class([$__VIEW_ID__ . '-5f82dcd4', 'system-instrument']) @attr(['aria-label' => 'Luồng biên dịch và render của Saola'])>
                <div @class([$__VIEW_ID__ . '-01b28266', 'instrument-top'])><span @class([$__VIEW_ID__ . '-37bb2111'])><i @class([$__VIEW_ID__ . '-f21de37f'])></i> ROUTE / HOME</span><span @class([$__VIEW_ID__ . '-483a565a'])>CONTEXT: WEB</span></div>
                <div @class([$__VIEW_ID__ . '-81148f49', 'source-cell'])>
                    <div @class([$__VIEW_ID__ . '-f8a7486f', 'cell-label'])>01 / SOURCE OF TRUTH</div>
                    <strong @class([$__VIEW_ID__ . '-aeba9a26'])>home.sao</strong>
                    <code @class([$__VIEW_ID__ . '-19524746'])>&lt;template&gt; + state + style</code>
                </div>
                <div @class([$__VIEW_ID__ . '-328c95ab', 'branch-line'])><span @class([$__VIEW_ID__ . '-49a217a8'])>COMPILE</span></div>
                <div @class([$__VIEW_ID__ . '-ac51d251', 'runtime-pair'])>
                    <article @class([$__VIEW_ID__ . '-1db15f13'])><span @class([$__VIEW_ID__ . '-c3a538e4'])>02A / SERVER</span><strong @class([$__VIEW_ID__ . '-cd192bfa'])>Blade</strong><small @class([$__VIEW_ID__ . '-e2e22d5c'])>HTML hoàn chỉnh</small></article>
                    <article @class([$__VIEW_ID__ . '-498ed0c5'])><span @class([$__VIEW_ID__ . '-e8e4ac97'])>02B / CLIENT</span><strong @class([$__VIEW_ID__ . '-6ee7879c'])>JavaScript</strong><small @class([$__VIEW_ID__ . '-8d001972'])>View contract</small></article>
                </div>
                <div @class([$__VIEW_ID__ . '-76eb295c', 'instrument-readout'])>
                    <button @class([$__VIEW_ID__ . '-a7c0e4a6', 'active'=> $selectedSignal === 'source'])>SOURCE</button>
                    <button @class([$__VIEW_ID__ . '-d9002f86', 'active'=> $selectedSignal === 'hydrate'])>HYDRATE</button>
                    <button @class([$__VIEW_ID__ . '-c2ac9d7a', 'active'=> $selectedSignal === 'navigate'])>NAVIGATE</button>
                    @startMarker('reactive', '3bcea458', ['stateKey' => ['selectedSignal'], 'type' => 'if'])
                    @if($selectedSignal === 'hydrate')
                        <p @class([$__VIEW_ID__ . '-9851b44b'])><b @class([$__VIEW_ID__ . '-591588a3'])>DOM được nhận lại.</b> Runtime claim marker có sẵn, nối state và event mà không dựng lại toàn bộ trang.</p>
                    @elseif($selectedSignal === 'navigate')
                        <p @class([$__VIEW_ID__ . '-c9d2d458'])><b @class([$__VIEW_ID__ . '-2102ae8f'])>Layout được giữ lại.</b> Router chỉ thay nhánh view cần đổi; context route chọn đúng registry cho request hiện tại.</p>
                    @else
                        <p @class([$__VIEW_ID__ . '-0be2d6a8'])><b @class([$__VIEW_ID__ . '-704cd593'])>Một nguồn được biên dịch hai hướng.</b> Blade và JavaScript tuân theo cùng AST thay vì hai implementation song song.</p>
                    @endif
                    @endMarker('reactive', '3bcea458')
                </div>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-8aa0772c', 'orientation-strip']) @attr(['aria-label' => 'Định vị Saola'])>
            <p @class([$__VIEW_ID__ . '-35bf6e9d'])><span @class([$__VIEW_ID__ . '-b76d6580'])>Saola không thay Laravel.</span> Saola nối phần Laravel đã làm tốt với trải nghiệm SPA mà đội sản phẩm cần.</p>
            <div @class([$__VIEW_ID__ . '-7f8af112'])><strong @class([$__VIEW_ID__ . '-14b47dbd'])>SSR</strong><small @class([$__VIEW_ID__ . '-872e3af2'])>đúng ngay từ request đầu</small></div>
            <div @class([$__VIEW_ID__ . '-9b976db3'])><strong @class([$__VIEW_ID__ . '-9aa2ffa8'])>CSR</strong><small @class([$__VIEW_ID__ . '-521ea42c'])>nhanh sau hydration</small></div>
            <div @class([$__VIEW_ID__ . '-cfc01898'])><strong @class([$__VIEW_ID__ . '-ccc1deb9'])>CONTEXT</strong><small @class([$__VIEW_ID__ . '-6d1fc048'])>web · admin · api · mobile</small></div>
        </section>

        <section @class([$__VIEW_ID__ . '-6c26f9b7', 'home-section', 'home-section--fog']) @attr(['id' => 'pain'])>
            <div @class([$__VIEW_ID__ . '-ce6a96bf', 'section-head', 'section-head-split'])>
                <div @class([$__VIEW_ID__ . '-6eb86fdc'])>
                    <p @class([$__VIEW_ID__ . '-61e46bff', 'kicker'])><span @class([$__VIEW_ID__ . '-8c6cc72b'])>NỖI ĐAU</span> Vì sao chuyện này đáng sửa</p>
                    <h2 @class([$__VIEW_ID__ . '-9701c99f'])>Chẻ đôi một sản phẩm web<br @class([$__VIEW_ID__ . '-9d020169'])>tốn nhiều hơn bạn nghĩ.</h2>
                </div>
                <p @class([$__VIEW_ID__ . '-6cc41004'])>Không phải vì lập trình viên làm ẩu. Vì kiến trúc phổ biến hôm nay bắt một tính năng phải tồn tại ở hai nơi, viết bằng hai ngôn ngữ, hỏng theo hai kiểu khác nhau — và chi phí đó không nằm trong ước lượng ban đầu bao giờ.</p>
            </div>
            <div @class([$__VIEW_ID__ . '-d44023e9', 'pain-grid'])>
                <article @class([$__VIEW_ID__ . '-e3e123df', 'pain-card'])>
                    <span @class([$__VIEW_ID__ . '-5cadfa06'])>01 / TRÙNG LẶP</span>
                    <h3 @class([$__VIEW_ID__ . '-6efb1915'])>Một tính năng, hai lần viết</h3>
                    <p @class([$__VIEW_ID__ . '-4a13b743'])>Form đăng ký sống hai lần: validate ở Laravel, rồi validate lại ở frontend. Sửa một quy tắc là mở hai pull request và mong không ai quên nửa còn lại.</p>
                </article>
                <article @class([$__VIEW_ID__ . '-04b24ab0', 'pain-card'])>
                    <span @class([$__VIEW_ID__ . '-2dd4b699'])>02 / TRANG RỖNG</span>
                    <h3 @class([$__VIEW_ID__ . '-8d51d8aa'])>SEO đổi lấy trải nghiệm</h3>
                    <p @class([$__VIEW_ID__ . '-53b76b5c'])>SPA thuần trả về một <code @class([$__VIEW_ID__ . '-afefc2c3'])>div</code> trống rồi chờ JavaScript. Crawler, share preview và người dùng mạng chậm nhận cùng một thứ: chưa có gì cả.</p>
                </article>
                <article @class([$__VIEW_ID__ . '-ddf2d3a9', 'pain-card'])>
                    <span @class([$__VIEW_ID__ . '-8d5d9746'])>03 / API THỪA</span>
                    <h3 @class([$__VIEW_ID__ . '-ad421324'])>Tầng REST chỉ để tự nói chuyện</h3>
                    <p @class([$__VIEW_ID__ . '-71463dd8'])>Bạn dựng endpoint, resource, transformer, phân trang, versioning — cho đúng một client duy nhất là frontend của chính mình.</p>
                </article>
                <article @class([$__VIEW_ID__ . '-b80fdbe5', 'pain-card'])>
                    <span @class([$__VIEW_ID__ . '-24bc2336'])>04 / LỆCH PHA</span>
                    <h3 @class([$__VIEW_ID__ . '-4ba8c07a'])>Server một đằng, client một nẻo</h3>
                    <p @class([$__VIEW_ID__ . '-042aaf2c'])>Khi HTML server và cây component client được viết riêng, chúng sẽ trôi khỏi nhau. Triệu chứng là nhấp nháy, mất state, hoặc DOM nhân đôi sau hydrate.</p>
                </article>
                <article @class([$__VIEW_ID__ . '-f46ead31', 'pain-card'])>
                    <span @class([$__VIEW_ID__ . '-7856d9b6'])>05 / BA THẾ GIỚI</span>
                    <h3 @class([$__VIEW_ID__ . '-59b0f418'])>Mỗi mặt tiền một stack</h3>
                    <p @class([$__VIEW_ID__ . '-8b20d85e'])>Admin dùng một framework, web công khai dùng framework khác, webview mobile lại một bản riêng. Ba build, ba lần vá cùng một lỗi bảo mật.</p>
                </article>
                <article @class([$__VIEW_ID__ . '-e7557b2e', 'pain-card'])>
                    <span @class([$__VIEW_ID__ . '-789688c6'])>06 / RÒ RỈ</span>
                    <h3 @class([$__VIEW_ID__ . '-998f8903'])>Không ai biết view chết lúc nào</h3>
                    <p @class([$__VIEW_ID__ . '-43fa3052'])>Điều hướng SPA mà không có contract dọn dẹp thì subscription, interval và request treo cứ tích lại, cho tới khi tab nặng dần rồi giật.</p>
                </article>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-4e212027', 'home-section']) @attr(['id' => 'solution'])>
            <div @class([$__VIEW_ID__ . '-1628defa', 'section-head', 'section-head-split'])>
                <div @class([$__VIEW_ID__ . '-5fb363e4'])>
                    <p @class([$__VIEW_ID__ . '-ab6a4acc', 'kicker'])><span @class([$__VIEW_ID__ . '-586f8010'])>GIẢI PHÁP</span> Trả lời từng cái một</p>
                    <h2 @class([$__VIEW_ID__ . '-79277e05'])>Mỗi nỗi đau ở trên<br @class([$__VIEW_ID__ . '-90ec7758'])>có một cơ chế đối ứng.</h2>
                </div>
                <p @class([$__VIEW_ID__ . '-24ea6ba9'])>Saola không giải quyết bằng quy ước hay kỷ luật đội ngũ. Mỗi dòng dưới đây tương ứng với một cơ chế cụ thể trong compiler hoặc runtime, có tài liệu và có thể kiểm chứng bằng cách mở DevTools trên chính trang này.</p>
            </div>
            <div @class([$__VIEW_ID__ . '-281112e1', 'solution-rows'])>
                <article @class([$__VIEW_ID__ . '-3fbdfc8e', 'solution-row'])>
                    <div @class([$__VIEW_ID__ . '-a24493e4', 'sr-pain'])><span @class([$__VIEW_ID__ . '-c2e5c53c', 'sr-label'])>Nỗi đau 01</span><p @class([$__VIEW_ID__ . '-6c970d3b'])>Một tính năng phải viết hai lần, hai nơi.</p></div>
                    <i @class([$__VIEW_ID__ . '-94413243'])>→</i>
                    <div @class([$__VIEW_ID__ . '-a563f4da', 'sr-fix'])>
                        <span @class([$__VIEW_ID__ . '-b0003dbb', 'sr-label'])>Cơ chế</span>
                        <strong @class([$__VIEW_ID__ . '-35cfb9ab'])>Một file <code @class([$__VIEW_ID__ . '-afae2ada'])>.sao</code>, hai đầu ra</strong>
                        <p @class([$__VIEW_ID__ . '-13cd0b94'])>Compiler parse một lần thành AST rồi emit Blade và TypeScript từ cùng cây đó. Không có bản dịch tay nào ở giữa để trôi lệch.</p>
                    </div>
                    <a @class([$__VIEW_ID__ . '-14dabfc4', 'sr-link']) @attr(['href' => '/docs/compiler'])>Compiler &amp; AST ↗</a>
                </article>
                <article @class([$__VIEW_ID__ . '-933ef651', 'solution-row'])>
                    <div @class([$__VIEW_ID__ . '-45ff2ebb', 'sr-pain'])><span @class([$__VIEW_ID__ . '-473eb5e9', 'sr-label'])>Nỗi đau 02</span><p @class([$__VIEW_ID__ . '-48be5b5e'])>Trang rỗng chờ JavaScript tải xong.</p></div>
                    <i @class([$__VIEW_ID__ . '-e79d298b'])>→</i>
                    <div @class([$__VIEW_ID__ . '-7d819f93', 'sr-fix'])>
                        <span @class([$__VIEW_ID__ . '-a9ebb148', 'sr-label'])>Cơ chế</span>
                        <strong @class([$__VIEW_ID__ . '-69cb5c3f'])>SSR thật, không phải prerender</strong>
                        <p @class([$__VIEW_ID__ . '-a52c499d'])>Laravel render HTML đầy đủ có nội dung và cấu trúc. JavaScript đến sau để nâng cấp trang đó, không phải để dựng nó lên từ đầu.</p>
                    </div>
                    <a @class([$__VIEW_ID__ . '-b73de009', 'sr-link']) @attr(['href' => '/docs/lifecycle'])>Vòng đời &amp; marker ↗</a>
                </article>
                <article @class([$__VIEW_ID__ . '-2bed8055', 'solution-row'])>
                    <div @class([$__VIEW_ID__ . '-bd0a3f86', 'sr-pain'])><span @class([$__VIEW_ID__ . '-369417b0', 'sr-label'])>Nỗi đau 03</span><p @class([$__VIEW_ID__ . '-bd920f3d'])>Tầng API sinh ra chỉ để phục vụ chính mình.</p></div>
                    <i @class([$__VIEW_ID__ . '-f37738b3'])>→</i>
                    <div @class([$__VIEW_ID__ . '-fcca5910', 'sr-fix'])>
                        <span @class([$__VIEW_ID__ . '-6026da1c', 'sr-label'])>Cơ chế</span>
                        <strong @class([$__VIEW_ID__ . '-d0046f7b'])>Controller trả thẳng view response</strong>
                        <p @class([$__VIEW_ID__ . '-2f2ee7f3'])>Dữ liệu đi vào view qua <code @class([$__VIEW_ID__ . '-f65cfaa1'])>&#64;vars</code> ngay trong lần render đầu. API chỉ cần tồn tại khi thật sự có client thứ hai.</p>
                    </div>
                    <a @class([$__VIEW_ID__ . '-285969ef', 'sr-link']) @attr(['href' => '/docs/contexts'])>Context &amp; controller ↗</a>
                </article>
                <article @class([$__VIEW_ID__ . '-7dc584af', 'solution-row'])>
                    <div @class([$__VIEW_ID__ . '-8023e810', 'sr-pain'])><span @class([$__VIEW_ID__ . '-e18a1449', 'sr-label'])>Nỗi đau 04</span><p @class([$__VIEW_ID__ . '-25d469c5'])>Hydration lệch giữa HTML server và cây client.</p></div>
                    <i @class([$__VIEW_ID__ . '-10be1764'])>→</i>
                    <div @class([$__VIEW_ID__ . '-94621ce2', 'sr-fix'])>
                        <span @class([$__VIEW_ID__ . '-c4b9d13e', 'sr-label'])>Cơ chế</span>
                        <strong @class([$__VIEW_ID__ . '-aaa1d1dc'])>Marker do một nơi duy nhất sinh ra</strong>
                        <p @class([$__VIEW_ID__ . '-a6ff1062'])>ViewStorageManager phía server và runtime phía client dùng chung một bộ id. Runtime claim DOM có sẵn thay vì render lại rồi so sánh.</p>
                    </div>
                    <a @class([$__VIEW_ID__ . '-cb79db45', 'sr-link']) @attr(['href' => '/docs/runtime'])>Runtime &amp; hydration ↗</a>
                </article>
                <article @class([$__VIEW_ID__ . '-76c961ad', 'solution-row'])>
                    <div @class([$__VIEW_ID__ . '-4b14f4ba', 'sr-pain'])><span @class([$__VIEW_ID__ . '-d51d8117', 'sr-label'])>Nỗi đau 05</span><p @class([$__VIEW_ID__ . '-8a3dff26'])>Web, admin và mobile mỗi cái một stack riêng.</p></div>
                    <i @class([$__VIEW_ID__ . '-f15fb8a5'])>→</i>
                    <div @class([$__VIEW_ID__ . '-3d74b8e1', 'sr-fix'])>
                        <span @class([$__VIEW_ID__ . '-a0c86f5b', 'sr-label'])>Cơ chế</span>
                        <strong @class([$__VIEW_ID__ . '-66464ee7'])>Bốn context, một lõi</strong>
                        <p @class([$__VIEW_ID__ . '-ce24d8cc'])>Mỗi context có prefix, middleware, registry và bundle riêng nhưng dùng chung module, model và service layer. Context được resolve theo từng request.</p>
                    </div>
                    <a @class([$__VIEW_ID__ . '-02b07bac', 'sr-link']) @attr(['href' => '/docs/contexts'])>Bốn mặt tiền ↗</a>
                </article>
                <article @class([$__VIEW_ID__ . '-1818bdf1', 'solution-row'])>
                    <div @class([$__VIEW_ID__ . '-9b3a3463', 'sr-pain'])><span @class([$__VIEW_ID__ . '-46163f77', 'sr-label'])>Nỗi đau 06</span><p @class([$__VIEW_ID__ . '-b3f9900c'])>Listener, timer và request treo rò dần theo thời gian.</p></div>
                    <i @class([$__VIEW_ID__ . '-c0a9873c'])>→</i>
                    <div @class([$__VIEW_ID__ . '-9e5a7a8b', 'sr-fix'])>
                        <span @class([$__VIEW_ID__ . '-6e27be5a', 'sr-label'])>Cơ chế</span>
                        <strong @class([$__VIEW_ID__ . '-1f9964ae'])>Vòng đời có contract</strong>
                        <p @class([$__VIEW_ID__ . '-46890a55'])>Bảy chuyển trạng thái với hook trước và sau. Tài nguyên của view được dọn theo ref-count đúng lúc view rời màn hình.</p>
                    </div>
                    <a @class([$__VIEW_ID__ . '-ed024506', 'sr-link']) @attr(['href' => '/docs/lifecycle'])>Bảy trạng thái ↗</a>
                </article>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-5d5c7d30', 'request-section']) @attr(['id' => 'how'])>
            <div @class([$__VIEW_ID__ . '-c070e15f', 'section-head', 'compact'])>
                <p @class([$__VIEW_ID__ . '-1744a884', 'kicker'])><span @class([$__VIEW_ID__ . '-ae75696d'])>HOW IT WORKS</span> Ba bước, không phép màu</p>
                <h2 @class([$__VIEW_ID__ . '-e48f2631'])>Từ một file tới một trang sống.</h2>
            </div>
            <ol @class([$__VIEW_ID__ . '-0b6b725b', 'flow-timeline'])>
                <li @class([$__VIEW_ID__ . '-1c1eecb4'])>
                    <span @class([$__VIEW_ID__ . '-0a83df8c'])>01</span>
                    <div @class([$__VIEW_ID__ . '-5c4be8c7'])>
                        <strong @class([$__VIEW_ID__ . '-3eb8a1df'])>Viết một view <code @class([$__VIEW_ID__ . '-e8f93c36'])>.sao</code></strong>
                        <p @class([$__VIEW_ID__ . '-6bbe2fd3'])>Khai báo state ở đầu file, viết template bằng cú pháp kiểu JavaScript, đặt method trong <code @class([$__VIEW_ID__ . '-c8c8fe58'])>&lt;script setup&gt;</code>.</p>
                    </div>
                    <code @class([$__VIEW_ID__ . '-d28560ed'])>home.sao</code>
                </li>
                <li @class([$__VIEW_ID__ . '-15fb496b'])>
                    <span @class([$__VIEW_ID__ . '-8cb806c6'])>02</span>
                    <div @class([$__VIEW_ID__ . '-a7a9ad7e'])>
                        <strong @class([$__VIEW_ID__ . '-d6950877'])>Compiler sinh hai đầu ra</strong>
                        <p @class([$__VIEW_ID__ . '-822589b0'])>Một lệnh tạo ra Blade template cho server và view TypeScript cho client, kèm registry ánh xạ view path tới factory.</p>
                    </div>
                    <code @class([$__VIEW_ID__ . '-b5cedd7a'])>sao-compile web</code>
                </li>
                <li @class([$__VIEW_ID__ . '-8b943b5f'])>
                    <span @class([$__VIEW_ID__ . '-a71770b6'])>03</span>
                    <div @class([$__VIEW_ID__ . '-486e1b00'])>
                        <strong @class([$__VIEW_ID__ . '-092d412d'])>Trang render rồi sống lên</strong>
                        <p @class([$__VIEW_ID__ . '-c8b8a457'])>Laravel trả HTML đầy đủ; runtime claim đúng DOM đó qua marker rồi tiếp quản state, event và điều hướng.</p>
                    </div>
                    <code @class([$__VIEW_ID__ . '-7b3ea94a'])>SSR → hydrate → SPA</code>
                </li>
            </ol>
        </section>

        <section @class([$__VIEW_ID__ . '-23947dcc', 'home-map']) @attr(['id' => 'features'])>
            <div @class([$__VIEW_ID__ . '-792dd906', 'section-head'])>
                <p @class([$__VIEW_ID__ . '-43f0bf54', 'kicker'])><span @class([$__VIEW_ID__ . '-7a1057dd'])>FEATURES</span> Cái bạn thật sự nhận được</p>
                <h2 @class([$__VIEW_ID__ . '-2845409d'])>Viết một lần.<br @class([$__VIEW_ID__ . '-defee44a'])>Chạy đúng ở cả hai đầu.</h2>
                <p @class([$__VIEW_ID__ . '-978b7826'])>Không phải một thư viện UI đặt cạnh Laravel, mà là một đường biên dịch: cùng một template sinh ra HTML server trả về và view runtime chạy trên trình duyệt.</p>
            </div>
            <div @class([$__VIEW_ID__ . '-984dea9b', 'map-grid'])>
                <a @class([$__VIEW_ID__ . '-98381fbc', 'map-card']) @attr(['href' => '/docs/sao-file'])>
                    <span @class([$__VIEW_ID__ . '-0c25e4e8'])>01 / SINGLE SOURCE</span>
                    <h3 @class([$__VIEW_ID__ . '-d0197c91'])>Một file, hai đầu ra</h3>
                    <p @class([$__VIEW_ID__ . '-8122473c'])>Template, state, script và style nằm cùng một file. Compiler sinh Blade và TypeScript từ cùng một AST nên hai bên không thể lệch nghĩa.</p>
                    <i @class([$__VIEW_ID__ . '-d371ce78'])>Xem cấu trúc .sao ↗</i>
                </a>
                <a @class([$__VIEW_ID__ . '-4edd761c', 'map-card']) @attr(['href' => '/docs/lifecycle'])>
                    <span @class([$__VIEW_ID__ . '-9fa40c8c'])>02 / SSR THẬT</span>
                    <h3 @class([$__VIEW_ID__ . '-d5865fb1'])>Nội dung có trước JavaScript</h3>
                    <p @class([$__VIEW_ID__ . '-14f05824'])>Lần tải đầu là HTML hoàn chỉnh. Runtime nhận lại DOM đó qua marker thay vì dựng lại từ trang rỗng.</p>
                    <i @class([$__VIEW_ID__ . '-de828156'])>Cơ chế hydration ↗</i>
                </a>
                <a @class([$__VIEW_ID__ . '-c1e4061f', 'map-card', 'map-card-dark']) @attr(['href' => '/docs/reactivity'])>
                    <span @class([$__VIEW_ID__ . '-4275c618'])>03 / REACTIVE</span>
                    <h3 @class([$__VIEW_ID__ . '-928830c0'])>Cập nhật theo vùng marker</h3>
                    <p @class([$__VIEW_ID__ . '-5f9096d4'])>Mỗi <code @class([$__VIEW_ID__ . '-d439c7cd', 'directive-token'])>if</code>, <code @class([$__VIEW_ID__ . '-7a10eab4', 'directive-token'])>foreach</code> và giá trị nội suy là một vùng độc lập. Đổi state chỉ render lại đúng vùng phụ thuộc.</p>
                    <i @class([$__VIEW_ID__ . '-d94e6678'])>State &amp; reactivity ↗</i>
                </a>
                <a @class([$__VIEW_ID__ . '-43d99182', 'map-card']) @attr(['href' => '/docs/contexts'])>
                    <span @class([$__VIEW_ID__ . '-a3b7421a'])>04 / ROUTING</span>
                    <h3 @class([$__VIEW_ID__ . '-b24babf7'])>Route khai báo theo module</h3>
                    <p @class([$__VIEW_ID__ . '-7a565795'])>Module tự đăng ký route trong context của nó. Không có file route khổng lồ, không cần sửa danh sách khi thêm tính năng.</p>
                    <i @class([$__VIEW_ID__ . '-28d3f6bc'])>Context &amp; module ↗</i>
                </a>
                <a @class([$__VIEW_ID__ . '-fab54877', 'map-card']) @attr(['href' => '/docs/runtime'])>
                    <span @class([$__VIEW_ID__ . '-36b0f2cd'])>05 / LIFECYCLE</span>
                    <h3 @class([$__VIEW_ID__ . '-88bcf139'])>Vòng đời quan sát được</h3>
                    <p @class([$__VIEW_ID__ . '-969ebf3a'])>Bảy chuyển trạng thái với hook trước và sau. Tài nguyên của view được dọn theo ref-count, không rò khi điều hướng.</p>
                    <i @class([$__VIEW_ID__ . '-ff30475d'])>Vòng đời view ↗</i>
                </a>
                <a @class([$__VIEW_ID__ . '-1fe733c5', 'map-card']) @attr(['href' => '/docs/directives'])>
                    <span @class([$__VIEW_ID__ . '-64c0b447'])>06 / DIRECTIVE</span>
                    <h3 @class([$__VIEW_ID__ . '-e77c76cc'])>Bốn mươi ba directive</h3>
                    <p @class([$__VIEW_ID__ . '-699ee186'])>Từ khai báo state tới điều khiển luồng, binding hai chiều, quyền và biến ma thuật — chia tám nhóm, mỗi cái có tham chiếu riêng.</p>
                    <i @class([$__VIEW_ID__ . '-5e099072'])>Tham chiếu directive ↗</i>
                </a>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-e071d13d', 'compiler-board'])>
            <div @class([$__VIEW_ID__ . '-780a1efa', 'code-window', 'source-window'])>
                <div @class([$__VIEW_ID__ . '-45ec8f08', 'window-bar'])><span @class([$__VIEW_ID__ . '-254985bd'])>SOURCE</span><b @class([$__VIEW_ID__ . '-83cd4a1c'])>counter.sao</b><i @class([$__VIEW_ID__ . '-e21f34c8'])>● ● ●</i></div>
                <pre @class([$__VIEW_ID__ . '-9e91dc75'])><code @class([$__VIEW_ID__ . '-fa6be824'])><span @class([$__VIEW_ID__ . '-8e18857d', 'code-line'])>&#64;states({ count: 0 })</span><span @class([$__VIEW_ID__ . '-04021efb', 'code-line', 'code-line-gap'])></span><span @class([$__VIEW_ID__ . '-b4c5df43', 'code-line'])>&lt;template&gt;</span><span @class([$__VIEW_ID__ . '-974e4b64', 'code-line', 'code-indent-1'])>&lt;button &#64;click(setCount(count + 1))&gt;</span><span @class([$__VIEW_ID__ . '-2435ce77', 'code-line', 'code-indent-2'])>Đã bấm <span @class([$__VIEW_ID__ . '-b19b55bc', 'mustache-token'])>count</span> lần</span><span @class([$__VIEW_ID__ . '-9a84bc09', 'code-line', 'code-indent-1'])>&lt;/button&gt;</span><span @class([$__VIEW_ID__ . '-f66d241f', 'code-line'])>&lt;/template&gt;</span></code></pre>
            </div>
            <div @class([$__VIEW_ID__ . '-0d205ad9', 'compile-spine'])>
                <span @class([$__VIEW_ID__ . '-f943d231'])>PARSE</span>
                <i @class([$__VIEW_ID__ . '-79f999c6'])>↓</i>
                <strong @class([$__VIEW_ID__ . '-257a75d0'])>AST</strong>
                <i @class([$__VIEW_ID__ . '-1e6c9b9c'])>↙ ↘</i>
                <span @class([$__VIEW_ID__ . '-2456f194'])>GENERATE</span>
            </div>
            <div @class([$__VIEW_ID__ . '-1e297643', 'target-stack'])>
                <div @class([$__VIEW_ID__ . '-999e2fe9', 'code-window'])>
                    <div @class([$__VIEW_ID__ . '-fa1b9030', 'window-bar'])><span @class([$__VIEW_ID__ . '-271d42b9'])>SERVER</span><b @class([$__VIEW_ID__ . '-97883b31'])>counter.blade.php</b></div>
                    <pre @class([$__VIEW_ID__ . '-51fa646e'])><code @class([$__VIEW_ID__ . '-570d80c9'])><span @class([$__VIEW_ID__ . '-04a634d5', 'code-line'])>&lt;button class="v_1a2b-a1b2"&gt;</span><span @class([$__VIEW_ID__ . '-cda8719a', 'code-line', 'code-indent-1'])>Đã bấm <span @class([$__VIEW_ID__ . '-7f036c4a', 'mustache-token'])>$count</span> lần</span><span @class([$__VIEW_ID__ . '-ec2b6a0b', 'code-line'])>&lt;/button&gt;</span></code></pre>
                </div>
                <div @class([$__VIEW_ID__ . '-29f247ff', 'code-window', 'code-window-dark'])>
                    <div @class([$__VIEW_ID__ . '-31dc8055', 'window-bar'])><span @class([$__VIEW_ID__ . '-a57dd2b9'])>CLIENT</span><b @class([$__VIEW_ID__ . '-073ce9a1'])>counter.ts</b></div>
                    <pre @class([$__VIEW_ID__ . '-4b465285'])><code @class([$__VIEW_ID__ . '-85dd7eef'])><span @class([$__VIEW_ID__ . '-59b8971b', 'code-line'])>this.html('a1b2', 'button', p, {</span><span @class([$__VIEW_ID__ . '-9a89f4b3', 'code-line', 'code-indent-1'])>events: { click: [() =&gt; setCount(count + 1)] }</span><span @class([$__VIEW_ID__ . '-94a532d8', 'code-line'])>}, p =&gt; [</span><span @class([$__VIEW_ID__ . '-089752a5', 'code-line', 'code-indent-1'])>this.text('Đã bấm '),</span><span @class([$__VIEW_ID__ . '-d43ab60c', 'code-line', 'code-indent-1'])>this.output('c3d4', p, true, ['count'], () =&gt; count)</span><span @class([$__VIEW_ID__ . '-302e82cf', 'code-line'])>])</span></code></pre>
                </div>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-dd321251', 'scale-band']) @attr(['id' => 'scale'])>
            <header @class([$__VIEW_ID__ . '-10305a51'])>
                <div @class([$__VIEW_ID__ . '-b84a5a92'])>
                    <p @class([$__VIEW_ID__ . '-d16990bf', 'kicker'])><span @class([$__VIEW_ID__ . '-be2e9f31'])>QUY MÔ</span> Không phải prototype cuối tuần</p>
                    <h2 @class([$__VIEW_ID__ . '-df80b144'])>Một hệ thống có bề mặt<br @class([$__VIEW_ID__ . '-5b9c6484'])>đủ lớn để làm việc thật.</h2>
                </div>
                <p @class([$__VIEW_ID__ . '-c7e11a87'])>Những con số dưới đây đếm được từ chính source và tài liệu trong repo — không phải chỉ tiêu marketing. Mỗi con số đều có một trang tài liệu tương ứng để bạn kiểm lại.</p>
            </header>
            <div @class([$__VIEW_ID__ . '-ed177389', 'scale-figures'])>
                <div @class([$__VIEW_ID__ . '-247d55b2'])>
                    <strong @class([$__VIEW_ID__ . '-abac467c'])>43</strong>
                    <b @class([$__VIEW_ID__ . '-a80514dd'])>Directive</b>
                    <small @class([$__VIEW_ID__ . '-a8d53f4e'])>Chia tám nhóm: khai báo, xuất giá trị, điều khiển luồng, thuộc tính, sự kiện, layout, tiện ích và biến ma thuật.</small>
                </div>
                <div @class([$__VIEW_ID__ . '-f3dd3539'])>
                    <strong @class([$__VIEW_ID__ . '-76112d80'])>04</strong>
                    <b @class([$__VIEW_ID__ . '-4f87ab24'])>Context độc lập</b>
                    <small @class([$__VIEW_ID__ . '-1cda2b84'])>web · admin · api · mobile, mỗi cái có route map, middleware, registry và bundle riêng.</small>
                </div>
                <div @class([$__VIEW_ID__ . '-d23250ab'])>
                    <strong @class([$__VIEW_ID__ . '-98530341'])>03</strong>
                    <b @class([$__VIEW_ID__ . '-297c2213'])>Gói phát hành + 1 extension</b>
                    <small @class([$__VIEW_ID__ . '-a3bd1312'])>saola/core trên Composer, compiler và client trên npm, cùng một extension VS Code cho cú pháp <code @class([$__VIEW_ID__ . '-bf7ecd3b'])>.sao</code>.</small>
                </div>
                <div @class([$__VIEW_ID__ . '-98d1a9d6'])>
                    <strong @class([$__VIEW_ID__ . '-a991befb'])>07</strong>
                    <b @class([$__VIEW_ID__ . '-848123e2'])>Chuyển trạng thái vòng đời</b>
                    <small @class([$__VIEW_ID__ . '-b7cadab3'])>Mount, active, pause, resume và destroy, mỗi bước có hook trước và sau, dọn tài nguyên theo ref-count.</small>
                </div>
                <div @class([$__VIEW_ID__ . '-593db01c'])>
                    <strong @class([$__VIEW_ID__ . '-60bcc5be'])>12</strong>
                    <b @class([$__VIEW_ID__ . '-a21084a2'])>Chương tài liệu</b>
                    <small @class([$__VIEW_ID__ . '-672c7929'])>Từ kiến trúc tới tham chiếu directive, kèm một chương ghi thẳng giới hạn đã biết thay vì giấu đi.</small>
                </div>
                <div @class([$__VIEW_ID__ . '-a72e6ab3'])>
                    <strong @class([$__VIEW_ID__ . '-d3a1b587'])>11</strong>
                    <b @class([$__VIEW_ID__ . '-2c7b4feb'])>Component mẫu chạy thật</b>
                    <small @class([$__VIEW_ID__ . '-88c94d8d'])>Sáu nhóm cú pháp trên route thật, cộng bốn fixture để soi marker và hydration bằng mắt.</small>
                </div>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-eee04c64', 'home-section', 'home-section--tight']) @attr(['id' => 'ecosystem'])>
            <div @class([$__VIEW_ID__ . '-4fd2a23b', 'section-head', 'section-head-split'])>
                <div @class([$__VIEW_ID__ . '-d94207b9'])>
                    <p @class([$__VIEW_ID__ . '-33b65a03', 'kicker'])><span @class([$__VIEW_ID__ . '-04921d5d'])>HỆ SINH THÁI</span> Bốn mảnh, một contract</p>
                    <h2 @class([$__VIEW_ID__ . '-6f34e4f3'])>Các gói phát hành độc lập,<br @class([$__VIEW_ID__ . '-80e22d30'])>nối nhau bằng spec có version.</h2>
                </div>
                <p @class([$__VIEW_ID__ . '-6a1bed36'])>Compiler và client có thể phát hành lệch nhau, nên contract giữa chúng mang số phiên bản. Compiler ghi <code @class([$__VIEW_ID__ . '-0dac2c73'])>__CONTRACT_VERSION__</code> vào output, client kiểm lúc load view — lệch major thì cảnh báo rõ ràng thay vì lỗi khó lần.</p>
            </div>
            <div @class([$__VIEW_ID__ . '-22fead1a', 'ecosystem-grid'])>
                <div @class([$__VIEW_ID__ . '-6802cb6a', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-ca21f370'])>Composer</span>
                    <h3 @class([$__VIEW_ID__ . '-dfd82839'])>saola/core</h3>
                    <p @class([$__VIEW_ID__ . '-88df7512'])>Lõi PHP: routing theo context, base controller cho web/admin/api, module service provider, Blade directive và ViewStorageManager — nơi duy nhất sinh marker phía server.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-ef13a811', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-fbf3e24b'])>npm</span>
                    <h3 @class([$__VIEW_ID__ . '-ca3adebf'])>&#64;saolabs/compiler</h3>
                    <p @class([$__VIEW_ID__ . '-155d58d0'])>CLI <code @class([$__VIEW_ID__ . '-443d1357'])>sao-compile</code>. Parse <code @class([$__VIEW_ID__ . '-2b787b78'])>.sao</code> thành AST rồi emit hai đầu ra từ cùng một cây: Blade cho SSR và TypeScript cho view runtime, kèm registry.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-2538c2eb', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-7fd5bc3d'])>npm</span>
                    <h3 @class([$__VIEW_ID__ . '-05da575f'])>&#64;saolabs/client</h3>
                    <p @class([$__VIEW_ID__ . '-d4d73533'])>Runtime SPA: Application container, Router, ViewManager, ViewController, hệ element reactive, PageCache và bộ service Http, Event, Store, Head.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-1c3a3973', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-0f055f16'])>VS Code</span>
                    <h3 @class([$__VIEW_ID__ . '-7358fa44'])>Language Support</h3>
                    <p @class([$__VIEW_ID__ . '-cfcc0b0b'])>Highlight cú pháp, snippet và autocomplete cho <code @class([$__VIEW_ID__ . '-ec97be8e'])>.sao</code>, hiểu cả directive lẫn phần <code @class([$__VIEW_ID__ . '-a1e9416b'])>&lt;script setup&gt;</code> trong cùng một file.</p>
                </div>
            </div>
            <div @class([$__VIEW_ID__ . '-f280a5b1', 'ov-note'])>
                <strong @class([$__VIEW_ID__ . '-d5ac3b75'])>Vì sao tách nhiều gói:</strong> mỗi tầng có nhịp phát hành riêng. Một bản vá compiler không buộc bạn nâng lõi PHP, và ngược lại — miễn contract còn khớp major.
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-114e42e1', 'home-section', 'home-section--fog']) @attr(['id' => 'compare'])>
            <div @class([$__VIEW_ID__ . '-a9d97314', 'section-head', 'section-head-split'])>
                <div @class([$__VIEW_ID__ . '-fff5d02c'])>
                    <p @class([$__VIEW_ID__ . '-ba6f1386', 'kicker'])><span @class([$__VIEW_ID__ . '-24e5fa79'])>SO SÁNH</span> Khác gì lựa chọn quen thuộc</p>
                    <h2 @class([$__VIEW_ID__ . '-bdcb57ae'])>Cùng một bài toán,<br @class([$__VIEW_ID__ . '-1b84be55'])>năm cách trả lời khác nhau.</h2>
                </div>
                <p @class([$__VIEW_ID__ . '-ce1229bd'])>Bảng này không nói cách nào tốt hơn tuyệt đối. Nó nói mỗi cách đặt chi phí ở đâu — và Saola đặt chi phí vào bước biên dịch để đổi lấy việc không phải giữ hai bản template đồng bộ bằng tay.</p>
            </div>
            <div @class([$__VIEW_ID__ . '-da16056c', 'compare-table'])>
                <table @class([$__VIEW_ID__ . '-620d389f'])>
                    <thead @class([$__VIEW_ID__ . '-311a6161'])>
                        <tr @class([$__VIEW_ID__ . '-771ced3f'])>
                            <th @class([$__VIEW_ID__ . '-960f23b4']) @attr(['scope' => 'col'])>Tiêu chí</th>
                            <th @class([$__VIEW_ID__ . '-e3a39996', 'col-sao']) @attr(['scope' => 'col'])>Saola</th>
                            <th @class([$__VIEW_ID__ . '-8fe745df']) @attr(['scope' => 'col'])>Blade + Alpine</th>
                            <th @class([$__VIEW_ID__ . '-d4352de3']) @attr(['scope' => 'col'])>Livewire</th>
                            <th @class([$__VIEW_ID__ . '-09415ec6']) @attr(['scope' => 'col'])>Inertia + Vue/React</th>
                            <th @class([$__VIEW_ID__ . '-2b62ef43']) @attr(['scope' => 'col'])>SPA + REST API</th>
                        </tr>
                    </thead>
                    <tbody @class([$__VIEW_ID__ . '-13181df4'])>
                        <tr @class([$__VIEW_ID__ . '-721f85dc'])>
                            <th @class([$__VIEW_ID__ . '-cbe5710f']) @attr(['scope' => 'row'])>HTML của lần tải đầu</th>
                            <td @class([$__VIEW_ID__ . '-2147c796', 'col-sao'])>Đầy đủ nội dung</td>
                            <td @class([$__VIEW_ID__ . '-972b8e77'])>Đầy đủ nội dung</td>
                            <td @class([$__VIEW_ID__ . '-0963f57b'])>Đầy đủ nội dung</td>
                            <td @class([$__VIEW_ID__ . '-dadd8a9b'])>Đầy đủ nếu bật SSR</td>
                            <td @class([$__VIEW_ID__ . '-e394cee0'])><span @class([$__VIEW_ID__ . '-70cdeb75', 'cmp-no'])>Div rỗng</span></td>
                        </tr>
                        <tr @class([$__VIEW_ID__ . '-787d59aa'])>
                            <th @class([$__VIEW_ID__ . '-adcfc51f']) @attr(['scope' => 'row'])>Tương tác sau khi tải</th>
                            <td @class([$__VIEW_ID__ . '-ee100fe1', 'col-sao'])>Chạy tại client, không round-trip</td>
                            <td @class([$__VIEW_ID__ . '-798a2e81'])>Chạy tại client, phạm vi hẹp</td>
                            <td @class([$__VIEW_ID__ . '-bdd38d47'])><span @class([$__VIEW_ID__ . '-9150ce85', 'cmp-no'])>Mỗi tương tác một request</span></td>
                            <td @class([$__VIEW_ID__ . '-c60037ad'])>Chạy tại client</td>
                            <td @class([$__VIEW_ID__ . '-43b33e6f'])>Chạy tại client</td>
                        </tr>
                        <tr @class([$__VIEW_ID__ . '-41560e49'])>
                            <th @class([$__VIEW_ID__ . '-94eeff01']) @attr(['scope' => 'row'])>Nguồn sinh HTML và JS</th>
                            <td @class([$__VIEW_ID__ . '-d38f77d1', 'col-sao'])><span @class([$__VIEW_ID__ . '-80a9e6b5', 'cmp-yes'])>Cùng một AST</span></td>
                            <td @class([$__VIEW_ID__ . '-a5f71cd2'])>Hai nguồn viết tay</td>
                            <td @class([$__VIEW_ID__ . '-84162efc'])>Server sinh HTML, JS chỉ vá DOM</td>
                            <td @class([$__VIEW_ID__ . '-d4d052f4'])>Hai nguồn viết tay</td>
                            <td @class([$__VIEW_ID__ . '-ac8d04bb'])>Một nguồn, chỉ ở client</td>
                        </tr>
                        <tr @class([$__VIEW_ID__ . '-04acd695'])>
                            <th @class([$__VIEW_ID__ . '-f9973209']) @attr(['scope' => 'row'])>Ngôn ngữ viết view</th>
                            <td @class([$__VIEW_ID__ . '-65519fc8', 'col-sao'])>Một cú pháp <code @class([$__VIEW_ID__ . '-f904cfa7'])>.sao</code></td>
                            <td @class([$__VIEW_ID__ . '-72596dc3'])>Blade cộng JavaScript rời</td>
                            <td @class([$__VIEW_ID__ . '-4de435c3'])>Blade cộng PHP class</td>
                            <td @class([$__VIEW_ID__ . '-13cabf64'])>Vue hoặc React, tách khỏi Blade</td>
                            <td @class([$__VIEW_ID__ . '-5987b23a'])>Framework JavaScript</td>
                        </tr>
                        <tr @class([$__VIEW_ID__ . '-7a95683a'])>
                            <th @class([$__VIEW_ID__ . '-40e37da4']) @attr(['scope' => 'row'])>Cần tầng API riêng</th>
                            <td @class([$__VIEW_ID__ . '-9a097c60', 'col-sao'])>Không bắt buộc</td>
                            <td @class([$__VIEW_ID__ . '-01f3c244'])>Không</td>
                            <td @class([$__VIEW_ID__ . '-127378b2'])>Không</td>
                            <td @class([$__VIEW_ID__ . '-19ff0dd5'])>Không, props đi qua adapter</td>
                            <td @class([$__VIEW_ID__ . '-5b86c562'])><span @class([$__VIEW_ID__ . '-211a687a', 'cmp-no'])>Bắt buộc</span></td>
                        </tr>
                        <tr @class([$__VIEW_ID__ . '-249a4f8f'])>
                            <th @class([$__VIEW_ID__ . '-88a8322e']) @attr(['scope' => 'row'])>Đa mặt tiền, tách bundle</th>
                            <td @class([$__VIEW_ID__ . '-8acfea46', 'col-sao'])><span @class([$__VIEW_ID__ . '-39072bb5', 'cmp-yes'])>Sẵn bốn context</span></td>
                            <td @class([$__VIEW_ID__ . '-6eee9c20'])>Tự dựng</td>
                            <td @class([$__VIEW_ID__ . '-8d6481ec'])>Tự dựng</td>
                            <td @class([$__VIEW_ID__ . '-46491d91'])>Tự dựng</td>
                            <td @class([$__VIEW_ID__ . '-ed2b3402'])>Tự dựng</td>
                        </tr>
                        <tr @class([$__VIEW_ID__ . '-4a0be818'])>
                            <th @class([$__VIEW_ID__ . '-da1b045d']) @attr(['scope' => 'row'])>Vòng đời view có contract</th>
                            <td @class([$__VIEW_ID__ . '-0d351c59', 'col-sao'])>Bảy trạng thái, dọn theo ref-count</td>
                            <td @class([$__VIEW_ID__ . '-ff525146'])>Không có</td>
                            <td @class([$__VIEW_ID__ . '-184a31bc'])>Theo component phía server</td>
                            <td @class([$__VIEW_ID__ . '-2c2c78b7'])>Theo framework JavaScript</td>
                            <td @class([$__VIEW_ID__ . '-a9815521'])>Theo framework JavaScript</td>
                        </tr>
                        <tr @class([$__VIEW_ID__ . '-6e592c9a'])>
                            <th @class([$__VIEW_ID__ . '-e7ac53fa']) @attr(['scope' => 'row'])>Độ chín và cộng đồng</th>
                            <td @class([$__VIEW_ID__ . '-69a9fe1c', 'col-sao'])><span @class([$__VIEW_ID__ . '-cddcd4fd', 'cmp-no'])>Đang dựng nền</span></td>
                            <td @class([$__VIEW_ID__ . '-94f6e379'])>Rất chín</td>
                            <td @class([$__VIEW_ID__ . '-3411fd5f'])>Rất chín</td>
                            <td @class([$__VIEW_ID__ . '-12d3d20b'])>Rất chín</td>
                            <td @class([$__VIEW_ID__ . '-40db3541'])>Rất chín</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p @class([$__VIEW_ID__ . '-fba509d8', 'compare-note'])>Dòng cuối là dòng thật lòng nhất: Saola trẻ hơn tất cả những lựa chọn còn lại. Đổi lại, giới hạn của nó được ghi công khai trên <a @class([$__VIEW_ID__ . '-936377ea', 'text-link']) @attr(['href' => '/docs/status'])>trang trạng thái</a> chứ không nằm rải rác trong issue.</p>
        </section>

        <section @class([$__VIEW_ID__ . '-8ec1daad', 'home-section']) @attr(['id' => 'usecase'])>
            <div @class([$__VIEW_ID__ . '-84cb8d89', 'section-head', 'section-head-split'])>
                <div @class([$__VIEW_ID__ . '-b405bd65'])>
                    <p @class([$__VIEW_ID__ . '-7ae63b54', 'kicker'])><span @class([$__VIEW_ID__ . '-7040c9bf'])>DÀNH CHO AI</span> Hợp và chưa hợp</p>
                    <h2 @class([$__VIEW_ID__ . '-b892fb19'])>Saola hợp nhất<br @class([$__VIEW_ID__ . '-9414f83d'])>với bốn tình huống này.</h2>
                </div>
                <p @class([$__VIEW_ID__ . '-5ba75714'])>Nếu đội bạn đã đứng vững trên Laravel và đang cân nhắc thêm một frontend riêng, đây đúng là chỗ Saola tiết kiệm nhiều nhất.</p>
            </div>
            <div @class([$__VIEW_ID__ . '-a2009f43', 'ov-grid'])>
                <div @class([$__VIEW_ID__ . '-442b05d8', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-2584514b'])>01 / NỘI BỘ</span>
                    <h3 @class([$__VIEW_ID__ . '-89c9a25c'])>Ứng dụng nội bộ &amp; admin panel</h3>
                    <p @class([$__VIEW_ID__ . '-6fb28ef1'])>Bảng dữ liệu, form nhiều bước, phân quyền theo vai trò. Cần tương tác mượt nhưng không cần đánh đổi bằng một frontend tách rời.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-159cec22', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-542732d2'])>02 / SEO + UX</span>
                    <h3 @class([$__VIEW_ID__ . '-91f8b1cf'])>Sản phẩm cần cả SEO lẫn tương tác</h3>
                    <p @class([$__VIEW_ID__ . '-f1413b93'])>Trang danh mục, chi tiết sản phẩm, blog có bộ lọc. Crawler nhận HTML đầy đủ; người dùng nhận trải nghiệm không tải lại trang.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-732888e1', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-da98f276'])>03 / ĐA MẶT TIỀN</span>
                    <h3 @class([$__VIEW_ID__ . '-5718b31f'])>Nhiều mặt tiền trên một backend</h3>
                    <p @class([$__VIEW_ID__ . '-5626ab1e'])>Web công khai, admin, webview mobile và api dùng chung model, policy và service layer nhưng tách route, middleware lẫn bundle.</p>
                </div>
                <div @class([$__VIEW_ID__ . '-57689130', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-289f10c2'])>04 / ĐỘI LARAVEL</span>
                    <h3 @class([$__VIEW_ID__ . '-870548ec'])>Đội Laravel muốn SPA mà không đổi nghề</h3>
                    <p @class([$__VIEW_ID__ . '-f754811e'])>Eloquent, middleware, policy, queue giữ nguyên. Phần mới cần học là cú pháp view và cách state chảy — không phải một hệ sinh thái build khác.</p>
                </div>
            </div>
            <div @class([$__VIEW_ID__ . '-d01a79ab', 'ov-note', 'ov-note--warn'])>
                <strong @class([$__VIEW_ID__ . '-4543aca9'])>Chưa hợp khi:</strong> bạn cần một hệ sinh thái component bên thứ ba khổng lồ ngay hôm nay, hoặc đội đã chạy tốt trên React/Vue với đầy đủ tooling và người quen việc. Trong hai trường hợp đó, chi phí chuyển sang Saola lớn hơn cái nó tiết kiệm.
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-259c5faa', 'context-panel']) @attr(['id' => 'vision'])>
            <div @class([$__VIEW_ID__ . '-9ea535ef'])>
                <p @class([$__VIEW_ID__ . '-3dd76a16', 'kicker'])><span @class([$__VIEW_ID__ . '-34e600e7'])>TẦM NHÌN</span> Nơi Saola muốn tới</p>
                <h2 @class([$__VIEW_ID__ . '-ac007219'])>Viết một lần.<br @class([$__VIEW_ID__ . '-e5c43645'])>Chạy đúng ở mọi mặt tiền.</h2>
            </div>
            <div @class([$__VIEW_ID__ . '-75409ec1'])>
                <p @class([$__VIEW_ID__ . '-b7b88a45'])><strong @class([$__VIEW_ID__ . '-0f41735e'])>Sứ mệnh:</strong> xoá khoảng cách giữa “trang web render ở server” và “ứng dụng chạy ở client” — không bằng cách chọn một bên, mà bằng cách để một nguồn duy nhất sinh ra cả hai, được bảo đảm bằng contract có version chứ không bằng quy ước ngầm và kỷ luật đội ngũ.</p>
                <div @class([$__VIEW_ID__ . '-45115932', 'context-cells'])>
                    <span @class([$__VIEW_ID__ . '-0631a8f4'])>CAM KẾT 01<small @class([$__VIEW_ID__ . '-eb95fb2d'])>Contract viết ra giấy, có version, kiểm được lúc chạy.</small></span>
                    <span @class([$__VIEW_ID__ . '-0aa86a56'])>CAM KẾT 02<small @class([$__VIEW_ID__ . '-66674ea6'])>Giới hạn ghi công khai, không giấu trong backlog.</small></span>
                    <span @class([$__VIEW_ID__ . '-7e17cbd4'])>CAM KẾT 03<small @class([$__VIEW_ID__ . '-25ea7b13'])>Không khoá bạn khỏi Laravel: Eloquent, policy, middleware giữ nguyên.</small></span>
                </div>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-523c8662', 'home-section', 'home-section--fog']) @attr(['id' => 'status'])>
            <div @class([$__VIEW_ID__ . '-c7f6aa47', 'section-head', 'section-head-split'])>
                <div @class([$__VIEW_ID__ . '-a00fd107'])>
                    <p @class([$__VIEW_ID__ . '-bad74da2', 'kicker'])><span @class([$__VIEW_ID__ . '-4a3ad661'])>TRẠNG THÁI</span> Trung thực về hiện trạng</p>
                    <h2 @class([$__VIEW_ID__ . '-4d7848a1'])>Cái gì đang chạy,<br @class([$__VIEW_ID__ . '-f09d9b5f'])>cái gì còn dở.</h2>
                </div>
                <p @class([$__VIEW_ID__ . '-ee09561a'])>Dự án đang ở giai đoạn dựng nền. Danh sách này lấy từ tài liệu contract và những gì kiểm chứng được khi chạy thật, không phải phỏng đoán — mục nào sửa xong sẽ rời khỏi bảng.</p>
            </div>
            <div @class([$__VIEW_ID__ . '-3c3cf628', 'ov-grid'])>
                <div @class([$__VIEW_ID__ . '-d7a61812', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-4c0de9da'])>Đang chạy đầy đủ</span>
                    <h3 @class([$__VIEW_ID__ . '-2acdf910'])>Nền tảng đã đứng được</h3>
                    <ul @class([$__VIEW_ID__ . '-c99d2655', 'check-list'])>
                        <li @class([$__VIEW_ID__ . '-b72dc32b'])>SSR bằng Blade rồi hydrate, kèm layout chain và block outlet.</li>
                        <li @class([$__VIEW_ID__ . '-99eda077'])>Reactive theo vùng marker: điều kiện, vòng lặp, output, binding hai chiều.</li>
                        <li @class([$__VIEW_ID__ . '-9ccfb13c'])>Reconciliation của vòng lặp theo slot, dọn element khi item rời danh sách.</li>
                        <li @class([$__VIEW_ID__ . '-88a7e01c'])>Điều hướng SPA, layout diff và PageCache cho back/forward.</li>
                        <li @class([$__VIEW_ID__ . '-94ad6198'])>Vòng đời view đầy đủ với dọn tài nguyên theo ref-count.</li>
                        <li @class([$__VIEW_ID__ . '-42ac1cdf'])>Bốn context với route, registry và bundle tách bạch.</li>
                    </ul>
                </div>
                <div @class([$__VIEW_ID__ . '-14452c19', 'ov-card'])>
                    <span @class([$__VIEW_ID__ . '-3ec54072'])>Giới hạn đã biết</span>
                    <h3 @class([$__VIEW_ID__ . '-61c35bb1'])>Chỗ còn phải đi vòng</h3>
                    <ul @class([$__VIEW_ID__ . '-fe4e3f89', 'check-list'])>
                        <li @class([$__VIEW_ID__ . '-3db1e5b3'])>Vòng lặp đổi reference thì dựng lại hàng — lặp theo id ổn định để tránh.</li>
                        <li @class([$__VIEW_ID__ . '-856f1d82'])><code @class([$__VIEW_ID__ . '-aa9e4362'])>bind</code> lồng cấp đọc được nhưng chưa ghi ngược.</li>
                        <li @class([$__VIEW_ID__ . '-8977fbcd'])><code @class([$__VIEW_ID__ . '-72ddb92b'])>style</code> dạng object chưa binding được sau hydrate.</li>
                        <li @class([$__VIEW_ID__ . '-dd342575'])><code @class([$__VIEW_ID__ . '-5de66567'])>computed</code> chỉ có ở đầu ra JavaScript, chưa có phía Blade.</li>
                        <li @class([$__VIEW_ID__ . '-a874ede5'])>Marker của fragment và component chưa có id ổn định.</li>
                    </ul>
                </div>
            </div>
            <div @class([$__VIEW_ID__ . '-937f5f23', 'ov-note'])>
                Bảng đầy đủ, kèm nguyên nhân và cách đi vòng cho từng mục, nằm ở <a @class([$__VIEW_ID__ . '-13d48aaa', 'text-link']) @attr(['href' => '/docs/status'])>Giới hạn đã biết</a>.
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-fe586bb5', 'faq-grid']) @attr(['id' => 'faq'])>
            <div @class([$__VIEW_ID__ . '-f955acdf', 'section-head'])>
                <p @class([$__VIEW_ID__ . '-4ba093cc', 'kicker'])><span @class([$__VIEW_ID__ . '-a7782bdf'])>FAQ</span> Hỏi nhanh</p>
                <h2 @class([$__VIEW_ID__ . '-de7a1423'])>Sáu câu hỏi hay gặp nhất.</h2>
            </div>
            <div @class([$__VIEW_ID__ . '-40f19f7f', 'value-accordion'])>
                <article @class([$__VIEW_ID__ . '-f862c8b4', 'value-item', 'open'=> $openFaq === 0])>
                    <button @class([$__VIEW_ID__ . '-59fa23cb'])><span @class([$__VIEW_ID__ . '-10c5441e'])>01</span><strong @class([$__VIEW_ID__ . '-20c104b1'])>Saola có thay thế Laravel không?</strong><i @class([$__VIEW_ID__ . '-7a0a1686'])>+</i></button>
                    @startMarker('reactive', '4a1fbaf2', ['stateKey' => ['openFaq'], 'type' => 'if'])
                    @if($openFaq === 0)
                        <p @class([$__VIEW_ID__ . '-97c27682'])>Không. Saola là lớp view và runtime chạy trên Laravel. Route, middleware, policy, Eloquent, queue và toàn bộ hệ sinh thái Laravel giữ nguyên. Cái Saola thay là cách bạn viết tầng view và cách trang đó sống tiếp sau khi tải xong.</p>
                    @endif
                    @endMarker('reactive', '4a1fbaf2')
                </article>
                <article @class([$__VIEW_ID__ . '-0e7bf027', 'value-item', 'open'=> $openFaq === 1])>
                    <button @class([$__VIEW_ID__ . '-be29f0aa'])><span @class([$__VIEW_ID__ . '-756caddb'])>02</span><strong @class([$__VIEW_ID__ . '-5fca77a4'])>Tôi có phải bỏ Blade đang có không?</strong><i @class([$__VIEW_ID__ . '-9081ee23'])>+</i></button>
                    @startMarker('reactive', '00e4e7c0', ['stateKey' => ['openFaq'], 'type' => 'if'])
                    @if($openFaq === 1)
                        <p @class([$__VIEW_ID__ . '-bcd7b879'])>Không. Đầu ra phía server của một file <code @class([$__VIEW_ID__ . '-90e1a8aa'])>.sao</code> chính là Blade template, nằm cùng chỗ với view Blade bạn đang có. Bạn chuyển dần từng trang, không cần viết lại cả ứng dụng trong một lần.</p>
                    @endif
                    @endMarker('reactive', '00e4e7c0')
                </article>
                <article @class([$__VIEW_ID__ . '-1932a70c', 'value-item', 'open'=> $openFaq === 2])>
                    <button @class([$__VIEW_ID__ . '-916cfc07'])><span @class([$__VIEW_ID__ . '-7bb66395'])>03</span><strong @class([$__VIEW_ID__ . '-9e4d635b'])>Có bắt buộc dùng TypeScript không?</strong><i @class([$__VIEW_ID__ . '-3e30b9db'])>+</i></button>
                    @startMarker('reactive', 'e75ce5d6', ['stateKey' => ['openFaq'], 'type' => 'if'])
                    @if($openFaq === 2)
                        <p @class([$__VIEW_ID__ . '-71eaff93'])>Compiler emit TypeScript vì nó cho kiểm tra kiểu ở ranh giới giữa view và runtime. Nhưng phần bạn viết nằm trong <code @class([$__VIEW_ID__ . '-cd7e8be4'])>&lt;script setup&gt;</code> và JavaScript thuần vẫn chạy — kiểu là tuỳ chọn, không phải điều kiện.</p>
                    @endif
                    @endMarker('reactive', 'e75ce5d6')
                </article>
                <article @class([$__VIEW_ID__ . '-7e31a088', 'value-item', 'open'=> $openFaq === 3])>
                    <button @class([$__VIEW_ID__ . '-4f51d3af'])><span @class([$__VIEW_ID__ . '-e8da36da'])>04</span><strong @class([$__VIEW_ID__ . '-7fda6bfa'])>SEO và chia sẻ link thì sao?</strong><i @class([$__VIEW_ID__ . '-9493720a'])>+</i></button>
                    @startMarker('reactive', '5a1ce36b', ['stateKey' => ['openFaq'], 'type' => 'if'])
                    @if($openFaq === 3)
                        <p @class([$__VIEW_ID__ . '-dde77212'])>Lần tải đầu là HTML hoàn chỉnh do Laravel trả về, không phải khung rỗng chờ JavaScript. Mở DevTools trên chính trang này, xem tab Network ở request đầu tiên: nội dung đã nằm sẵn trong response.</p>
                    @endif
                    @endMarker('reactive', '5a1ce36b')
                </article>
                <article @class([$__VIEW_ID__ . '-0b654ec2', 'value-item', 'open'=> $openFaq === 4])>
                    <button @class([$__VIEW_ID__ . '-07a81616'])><span @class([$__VIEW_ID__ . '-ce93f80e'])>05</span><strong @class([$__VIEW_ID__ . '-8e72e1fa'])>Đã dùng được cho production chưa?</strong><i @class([$__VIEW_ID__ . '-c2c8d3a4'])>+</i></button>
                    @startMarker('reactive', 'a148ae33', ['stateKey' => ['openFaq'], 'type' => 'if'])
                    @if($openFaq === 4)
                        <p @class([$__VIEW_ID__ . '-210bc2d1'])>Dự án đang ở giai đoạn dựng nền. Phần lõi — SSR, hydration, reactivity, router, vòng đời, context — đã chạy đầy đủ; những chỗ còn dở được liệt kê công khai kèm cách đi vòng. Hãy đọc trang giới hạn đã biết trước khi quyết định.</p>
                    @endif
                    @endMarker('reactive', 'a148ae33')
                </article>
                <article @class([$__VIEW_ID__ . '-09af52a1', 'value-item', 'open'=> $openFaq === 5])>
                    <button @class([$__VIEW_ID__ . '-44584cc4'])><span @class([$__VIEW_ID__ . '-05292501'])>06</span><strong @class([$__VIEW_ID__ . '-b48e60dc'])>Đã biết Blade thì học mất bao lâu?</strong><i @class([$__VIEW_ID__ . '-e02304bf'])>+</i></button>
                    @startMarker('reactive', '1ec2fe17', ['stateKey' => ['openFaq'], 'type' => 'if'])
                    @if($openFaq === 5)
                        <p @class([$__VIEW_ID__ . '-ab7212cf'])>Cú pháp giữ hình dạng directive quen thuộc của Blade, nên phần điều khiển luồng gần như đọc được ngay. Cái mới cần nắm là ba thứ: state khai báo ở đầu file, setter sinh tự động, và ranh giới giữa giá trị reactive với giá trị tính một lần.</p>
                    @endif
                    @endMarker('reactive', '1ec2fe17')
                </article>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-30585955', 'principle-band'])>
            <div @class([$__VIEW_ID__ . '-660b8c06'])><p @class([$__VIEW_ID__ . '-eddf0761', 'kicker'])><span @class([$__VIEW_ID__ . '-552c9f54'])>DESIGN PRINCIPLE</span> Điều Saola bảo vệ</p><h2 @class([$__VIEW_ID__ . '-fbfa04c7'])>Server là sự thật.<br @class([$__VIEW_ID__ . '-f3632095'])>Client là sự tiếp nối.</h2></div>
            <div @class([$__VIEW_ID__ . '-545e05cc', 'principle-copy'])><p @class([$__VIEW_ID__ . '-4d155382'])>Phản hồi đầu tiên phải hoàn chỉnh và có thể hiểu được. JavaScript không “cứu” một trang rỗng; nó tiếp nhận chính view server vừa render và làm view đó sống lên.</p><a @class([$__VIEW_ID__ . '-fe875078', 'button', 'button-light']) @attr(['href' => '/about'])>Vì sao Saola tồn tại <span @class([$__VIEW_ID__ . '-a7febb67'])>→</span></a></div>
        </section>

        <section @class([$__VIEW_ID__ . '-aa586911', 'start-cta'])>
            <div @class([$__VIEW_ID__ . '-969379d4'])>
                <p @class([$__VIEW_ID__ . '-2739f309', 'kicker'])><span @class([$__VIEW_ID__ . '-29b2e3d2'])>BẮT ĐẦU</span> Không cần tin, cứ mở ra xem</p>
                <h2 @class([$__VIEW_ID__ . '-51b5e03f'])>Tài liệu đầy đủ và<br @class([$__VIEW_ID__ . '-89704fc6'])>component đang chạy thật.</h2>
            </div>
            <div @class([$__VIEW_ID__ . '-4a80fe82', 'hero-actions'])>
                <a @class([$__VIEW_ID__ . '-c655de15', 'button', 'button-light']) @attr(['href' => '/docs/getting-started'])>Bắt đầu trong 4 bước <span @class([$__VIEW_ID__ . '-201c8c41'])>↗</span></a>
                <a @class([$__VIEW_ID__ . '-930ea1e7', 'button', 'button-light']) @attr(['href' => '/components'])>Xem component <span @class([$__VIEW_ID__ . '-91c7775b'])>↗</span></a>
            </div>
        </section>
    @endblock
