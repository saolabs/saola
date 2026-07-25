@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($activeSection, 'collection')
@extends($__layout__ . "public")
    @block('content')
        <section @class([$__VIEW_ID__ . '-b4052a35', 'legal-hero'])>
            <p @class([$__VIEW_ID__ . '-82ed8433', 'eyebrow'])><span @class([$__VIEW_ID__ . '-4cd48692'])>01</span> Legal / Privacy</p>
            <h1 @class([$__VIEW_ID__ . '-7342b39f'])>Privacy in<br @class([$__VIEW_ID__ . '-56049c15'])>plain language.</h1>
            <p @class([$__VIEW_ID__ . '-d9cbd0b2'])>Last updated July 21, 2026 · Demo policy</p>
        </section>
        <section @class([$__VIEW_ID__ . '-8aa0772c', 'legal-layout'])>
            <aside @class([$__VIEW_ID__ . '-aa1e3cea'])>
                <button @class([$__VIEW_ID__ . '-4f420810', 'active'=> $activeSection === 'collection'])>01 Information</button>
                <button @class([$__VIEW_ID__ . '-9fab04eb', 'active'=> $activeSection === 'use'])>02 How we use it</button>
                <button @class([$__VIEW_ID__ . '-56645b34', 'active'=> $activeSection === 'control'])>03 Your control</button>
            </aside>
            <div @class([$__VIEW_ID__ . '-7f8af112', 'legal-copy'])>
                @startMarker('reactive', '94d6f85f', ['stateKey' => ['activeSection'], 'type' => 'if'])
                @if($activeSection === 'collection')
                    <article @class([$__VIEW_ID__ . '-e41b7cec'])><span @class([$__VIEW_ID__ . '-a6338d4c'])>01</span><h2 @class([$__VIEW_ID__ . '-5aafe843'])>Information we collect</h2><p @class([$__VIEW_ID__ . '-a43ac34c'])>This demonstration stores Todo items only in the active client view. The contact and newsletter forms do not send data to a server.</p><p @class([$__VIEW_ID__ . '-a744fbd8'])>In a production application, data collection should be stated next to the interaction that causes it—not hidden in a long policy.</p></article>
                @elseif($activeSection === 'use')
                    <article @class([$__VIEW_ID__ . '-35c82bab'])><span @class([$__VIEW_ID__ . '-be2aca1f'])>02</span><h2 @class([$__VIEW_ID__ . '-6087e966'])>How information is used</h2><p @class([$__VIEW_ID__ . '-11c41a8b'])>Saola itself does not prescribe analytics or tracking. Applications decide which services to use and must disclose those decisions.</p><p @class([$__VIEW_ID__ . '-7215a392'])>Hydration reuses the server-rendered DOM; it does not require duplicating personal data in a second hidden document.</p></article>
                @else
                    <article @class([$__VIEW_ID__ . '-99c54da6'])><span @class([$__VIEW_ID__ . '-549ef40c'])>03</span><h2 @class([$__VIEW_ID__ . '-f03d1522'])>Your control</h2><p @class([$__VIEW_ID__ . '-b02b3f77'])>People should be able to inspect, correct and remove stored information through clear product controls.</p><p @class([$__VIEW_ID__ . '-ebe51929'])>For this demo, leaving the Todo route destroys its page instance unless page caching is explicitly enabled by the application.</p></article>
                @endif
                @endMarker('reactive', '94d6f85f')
            </div>
        </section>
    @endblock
