@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($selectedSignal, 'hydration')
@useState($email, '')
@useState($joined, false)
@extends($__layout__ . "public")
    @block('content')
        <section @class([$__VIEW_ID__ . '-b4052a35', 'hero-grid'])>
            <div @class([$__VIEW_ID__ . '-90a6e493', 'hero-copy'])>
                <p @class([$__VIEW_ID__ . '-f515bf66', 'eyebrow'])><span @class([$__VIEW_ID__ . '-e2f86203'])>01</span> A calmer way to ship</p>
                <h1 @class([$__VIEW_ID__ . '-9b0938cb'])>One view.<br @class([$__VIEW_ID__ . '-f7127348'])><em @class([$__VIEW_ID__ . '-d4f4199d'])>Every surface.</em></h1>
                <p @class([$__VIEW_ID__ . '-7718bb8d', 'hero-lead'])>Saola keeps Laravel and Blade in charge of the first response, then hydrates the exact same view into a fast, stateful SPA.</p>
                <div @class([$__VIEW_ID__ . '-ed82504f', 'hero-actions'])>
                    <a @class([$__VIEW_ID__ . '-63bde3ef', 'button', 'button-primary']) @attr(['href' => '/todo-list'])>Try the workspace <span @class([$__VIEW_ID__ . '-fee9a4ad'])>→</span></a>
                    <a @class([$__VIEW_ID__ . '-b589ca24', 'text-link']) @attr(['href' => '/about'])>Read our approach <span @class([$__VIEW_ID__ . '-c0aad52e'])>↗</span></a>
                </div>
            </div>
            <div @class([$__VIEW_ID__ . '-5f82dcd4', 'route-card']) @attr(['aria-label' => 'Saola render route'])>
                <div @class([$__VIEW_ID__ . '-01b28266', 'route-card-head'])><span @class([$__VIEW_ID__ . '-37bb2111'])>LIVE ROUTE</span><strong @class([$__VIEW_ID__ . '-1a133c3a'])>/home</strong></div>
                <div @class([$__VIEW_ID__ . '-81148f49', 'route-line'])>
                    <button @class([$__VIEW_ID__ . '-0a6e7712', 'route-node', 'active'=> $selectedSignal === 'blade'])><span @class([$__VIEW_ID__ . '-ce927f4f'])>1</span><strong @class([$__VIEW_ID__ . '-f7052e3e'])>Blade</strong><small @class([$__VIEW_ID__ . '-526cf3cc'])>server response</small></button>
                    <button @class([$__VIEW_ID__ . '-3a989139', 'route-node', 'active'=> $selectedSignal === 'hydration'])><span @class([$__VIEW_ID__ . '-05212354'])>2</span><strong @class([$__VIEW_ID__ . '-d46221bd'])>Hydrate</strong><small @class([$__VIEW_ID__ . '-d429dcc9'])>bind existing DOM</small></button>
                    <button @class([$__VIEW_ID__ . '-b3e06691', 'route-node', 'active'=> $selectedSignal === 'spa'])><span @class([$__VIEW_ID__ . '-8584e61f'])>3</span><strong @class([$__VIEW_ID__ . '-8f16b88f'])>SPA</strong><small @class([$__VIEW_ID__ . '-14861b24'])>client navigation</small></button>
                </div>
                <div @class([$__VIEW_ID__ . '-328c95ab', 'signal-readout'])>
                    @startMarker('reactive', '489f9502', ['stateKey' => ['selectedSignal'], 'type' => 'if'])
                    @if($selectedSignal === 'blade')
                        <p @class([$__VIEW_ID__ . '-91534320'])><strong @class([$__VIEW_ID__ . '-728fc54b'])>Server-first</strong> — HTML remains useful before JavaScript starts.</p>
                    @elseif($selectedSignal === 'spa')
                        <p @class([$__VIEW_ID__ . '-029a7aa7'])><strong @class([$__VIEW_ID__ . '-61237f49'])>Navigation-ready</strong> — only the changing view tree is replaced.</p>
                    @else
                        <p @class([$__VIEW_ID__ . '-4c9b0e4d'])><strong @class([$__VIEW_ID__ . '-ae8ef897'])>Hydration-safe</strong> — events and state attach to the DOM Blade already rendered.</p>
                    @endif
                    @endMarker('reactive', '489f9502')
                </div>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-8aa0772c', 'proof-strip'])>
            <p @class([$__VIEW_ID__ . '-35bf6e9d'])>BUILT FOR REAL APPLICATIONS</p>
            <div @class([$__VIEW_ID__ . '-7f8af112'])><strong @class([$__VIEW_ID__ . '-14b47dbd'])>01</strong><span @class([$__VIEW_ID__ . '-c67cd95a'])>Laravel routes</span></div>
            <div @class([$__VIEW_ID__ . '-9b976db3'])><strong @class([$__VIEW_ID__ . '-9aa2ffa8'])>02</strong><span @class([$__VIEW_ID__ . '-b5411efa'])>Blade fallback</span></div>
            <div @class([$__VIEW_ID__ . '-cfc01898'])><strong @class([$__VIEW_ID__ . '-ccc1deb9'])>03</strong><span @class([$__VIEW_ID__ . '-1edf95b4'])>Scoped assets</span></div>
            <div @class([$__VIEW_ID__ . '-f5acbbe8'])><strong @class([$__VIEW_ID__ . '-e0f722e3'])>04</strong><span @class([$__VIEW_ID__ . '-261e25b4'])>Reactive state</span></div>
        </section>

        <section @class([$__VIEW_ID__ . '-6c26f9b7', 'feature-section'])>
            <div @class([$__VIEW_ID__ . '-ce6a96bf', 'section-heading'])>
                <p @class([$__VIEW_ID__ . '-5a71cd5f', 'eyebrow'])><span @class([$__VIEW_ID__ . '-f1acc65a'])>02</span> The useful parts</p>
                <h2 @class([$__VIEW_ID__ . '-98293aba'])>Less framework<br @class([$__VIEW_ID__ . '-c006637c'])>between intent and result.</h2>
            </div>
            <div @class([$__VIEW_ID__ . '-d44023e9', 'feature-list'])>
                <article @class([$__VIEW_ID__ . '-e3e123df'])><span @class([$__VIEW_ID__ . '-5cadfa06'])>01</span><h3 @class([$__VIEW_ID__ . '-6efb1915'])>Render once</h3><p @class([$__VIEW_ID__ . '-4a13b743'])>The same `.sao` source produces server Blade and the client view contract.</p></article>
                <article @class([$__VIEW_ID__ . '-04b24ab0'])><span @class([$__VIEW_ID__ . '-2dd4b699'])>02</span><h3 @class([$__VIEW_ID__ . '-8d51d8aa'])>Keep context</h3><p @class([$__VIEW_ID__ . '-53b76b5c'])>Shared layouts survive route changes while page state follows a clear lifecycle.</p></article>
                <article @class([$__VIEW_ID__ . '-ddf2d3a9'])><span @class([$__VIEW_ID__ . '-8d5d9746'])>03</span><h3 @class([$__VIEW_ID__ . '-ad421324'])>Load precisely</h3><p @class([$__VIEW_ID__ . '-71463dd8'])>Global assets deduplicate; scoped styles stay attached to their owning view.</p></article>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-4e212027', 'newsletter-panel'])>
            <div @class([$__VIEW_ID__ . '-1628defa'])><p @class([$__VIEW_ID__ . '-d621a64b', 'eyebrow'])><span @class([$__VIEW_ID__ . '-5f6b80a9'])>03</span> Product notes</p><h2 @class([$__VIEW_ID__ . '-6560bb1b'])>Follow the build,<br @class([$__VIEW_ID__ . '-c03b5dbb'])>without the noise.</h2></div>
            <form @class([$__VIEW_ID__ . '-b8bd3cde', 'newsletter-form'])>
                @startMarker('reactive', '44cceece', ['stateKey' => ['joined'], 'type' => 'if'])
                @if($joined)
                    <div @class([$__VIEW_ID__ . '-50aeb2d9', 'success-note'])><span @class([$__VIEW_ID__ . '-a7eda2b2'])>✓</span><p @class([$__VIEW_ID__ . '-28dbecef'])><strong @class([$__VIEW_ID__ . '-61788545'])>You're on the list.</strong><br @class([$__VIEW_ID__ . '-bd39f455'])>We will write only when something useful ships.</p></div>
                @else
                    <label @class([$__VIEW_ID__ . '-fb2898e9']) @attr(['for' => 'home-email'])>Work email</label>
                    <div @class([$__VIEW_ID__ . '-d05b19b3'])><input @class([$__VIEW_ID__ . '-8c996698']) @attr(['id' => 'home-email', 'type' => 'email', 'placeholder' => 'you@company.com', 'required' => true]) @bind($email)><button @class([$__VIEW_ID__ . '-8451212a']) @attr(['type' => 'submit'])>Join <span @class([$__VIEW_ID__ . '-6a9bfaef'])>→</span></button></div>
                    <small @class([$__VIEW_ID__ . '-d3584ffa'])>No campaigns. Just meaningful release notes.</small>
                @endif
                @endMarker('reactive', '44cceece')
            </form>
        </section>
    @endblock
