@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($activeSection, 'collection')
@extends($__layout__ . "public")
    @block('content')
        <section @class([$__VIEW_ID__ . '-Bcontent1', 'legal-hero'])>
            <p @class([$__VIEW_ID__ . '-Bcontent11', 'eyebrow'])><span @class([$__VIEW_ID__ . '-Bcontent111'])>01</span> Legal / Privacy</p>
            <h1 @class([$__VIEW_ID__ . '-Bcontent12'])>Privacy in<br @class([$__VIEW_ID__ . '-Bcontent121'])>plain language.</h1>
            <p @class([$__VIEW_ID__ . '-Bcontent13'])>Last updated July 21, 2026 · Demo policy</p>
        </section>
        <section @class([$__VIEW_ID__ . '-Bcontent2', 'legal-layout'])>
            <aside @class([$__VIEW_ID__ . '-Bcontent21'])>
                <button @class([$__VIEW_ID__ . '-Bcontent211', 'active'=> $activeSection === 'collection'])>01 Information</button>
                <button @class([$__VIEW_ID__ . '-Bcontent212', 'active'=> $activeSection === 'use'])>02 How we use it</button>
                <button @class([$__VIEW_ID__ . '-Bcontent213', 'active'=> $activeSection === 'control'])>03 Your control</button>
            </aside>
            <div @class([$__VIEW_ID__ . '-Bcontent22', 'legal-copy'])>
                @startMarker('reactive', 'Bcontent22r1', ['stateKey' => ['activeSection'], 'type' => 'if'])
                @if($activeSection === 'collection')
                    <article @class([$__VIEW_ID__ . '-Bcontent22r1k11'])><span @class([$__VIEW_ID__ . '-Bcontent22r1k111'])>01</span><h2 @class([$__VIEW_ID__ . '-Bcontent22r1k112'])>Information we collect</h2><p @class([$__VIEW_ID__ . '-Bcontent22r1k113'])>This demonstration stores Todo items only in the active client view. The contact and newsletter forms do not send data to a server.</p><p @class([$__VIEW_ID__ . '-Bcontent22r1k114'])>In a production application, data collection should be stated next to the interaction that causes it—not hidden in a long policy.</p></article>
                @elseif($activeSection === 'use')
                    <article @class([$__VIEW_ID__ . '-Bcontent22r1k21'])><span @class([$__VIEW_ID__ . '-Bcontent22r1k211'])>02</span><h2 @class([$__VIEW_ID__ . '-Bcontent22r1k212'])>How information is used</h2><p @class([$__VIEW_ID__ . '-Bcontent22r1k213'])>Saola itself does not prescribe analytics or tracking. Applications decide which services to use and must disclose those decisions.</p><p @class([$__VIEW_ID__ . '-Bcontent22r1k214'])>Hydration reuses the server-rendered DOM; it does not require duplicating personal data in a second hidden document.</p></article>
                @else
                    <article @class([$__VIEW_ID__ . '-Bcontent22r1k31'])><span @class([$__VIEW_ID__ . '-Bcontent22r1k311'])>03</span><h2 @class([$__VIEW_ID__ . '-Bcontent22r1k312'])>Your control</h2><p @class([$__VIEW_ID__ . '-Bcontent22r1k313'])>People should be able to inspect, correct and remove stored information through clear product controls.</p><p @class([$__VIEW_ID__ . '-Bcontent22r1k314'])>For this demo, leaving the Todo route destroys its page instance unless page caching is explicitly enabled by the application.</p></article>
                @endif
                @endMarker('reactive', 'Bcontent22r1')
            </div>
        </section>
    @endblock
