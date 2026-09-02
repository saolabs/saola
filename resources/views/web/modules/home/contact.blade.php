@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($name, '')
@useState($email, '')
@useState($topic, 'Architecture review')
@useState($message, '')
@useState($messageLength, 0)
@useState($attempted, false)
@useState($sent, false)
@extends($__layout__ . "public")
    @block('content')
        <section @class([$__VIEW_ID__ . '-Bcontent1', 's44ffe7d2', 'contact-grid'])>
            <div @class([$__VIEW_ID__ . '-Bcontent11', 's44ffe7d2', 'contact-aside'])>
                <p @class([$__VIEW_ID__ . '-Bcontent111', 's44ffe7d2', 'eyebrow'])><span @class([$__VIEW_ID__ . '-Bcontent1111', 's44ffe7d2'])>01</span> Contact</p>
                <h1 @class([$__VIEW_ID__ . '-Bcontent112', 's44ffe7d2'])>Bring us the<br @class([$__VIEW_ID__ . '-Bcontent1121', 's44ffe7d2'])><em @class([$__VIEW_ID__ . '-Bcontent1122', 's44ffe7d2'])>difficult part.</em></h1>
                <p @class([$__VIEW_ID__ . '-Bcontent113', 's44ffe7d2'])>Tell us where your Laravel application is fighting the frontend. This form is deliberately client-only for the demo.</p>
                <div @class([$__VIEW_ID__ . '-Bcontent114', 's44ffe7d2', 'contact-meta'])><span @class([$__VIEW_ID__ . '-Bcontent1141', 's44ffe7d2'])>RESPONSE WINDOW</span><strong @class([$__VIEW_ID__ . '-Bcontent1142', 's44ffe7d2'])>Usually within 2 working days</strong><span @class([$__VIEW_ID__ . '-Bcontent1143', 's44ffe7d2'])>BASED IN</span><strong @class([$__VIEW_ID__ . '-Bcontent1144', 's44ffe7d2'])>Ho Chi Minh City · Remote worldwide</strong></div>
            </div>
            <form @class([$__VIEW_ID__ . '-Bcontent12', 's44ffe7d2', 'contact-form'])>
                @startMarker('reactive', 'Bcontent12r1', ['stateKey' => ['sent'], 'type' => 'if'])
                @if($sent)
                    <div @class([$__VIEW_ID__ . '-Bcontent12r1k11', 's44ffe7d2', 'contact-success'])><span @class([$__VIEW_ID__ . '-Bcontent12r1k111', 's44ffe7d2'])>✓</span><h2 @class([$__VIEW_ID__ . '-Bcontent12r1k112', 's44ffe7d2'])>Message prepared.</h2><p @class([$__VIEW_ID__ . '-Bcontent12r1k113', 's44ffe7d2'])>The demo stopped before a network request. In production, this is where an API action would take over.</p><button @class([$__VIEW_ID__ . '-Bcontent12r1k114', 's44ffe7d2', 'text-link']) @attr(['type' => 'button'])>Write another message →</button></div>
                @else
                    <div @class([$__VIEW_ID__ . '-Bcontent12r1k21', 's44ffe7d2', 'field-row'])><label @class([$__VIEW_ID__ . '-Bcontent12r1k211', 's44ffe7d2'])><span @class([$__VIEW_ID__ . '-Bcontent12r1k2111', 's44ffe7d2'])>Your name</span><input @class([$__VIEW_ID__ . '-Bcontent12r1k2112', 's44ffe7d2']) @attr(['type' => 'text', 'placeholder' => 'Nguyen An']) @bind($name)></label><label @class([$__VIEW_ID__ . '-Bcontent12r1k212', 's44ffe7d2'])><span @class([$__VIEW_ID__ . '-Bcontent12r1k2121', 's44ffe7d2'])>Email</span><input @class([$__VIEW_ID__ . '-Bcontent12r1k2122', 's44ffe7d2']) @attr(['type' => 'email', 'placeholder' => 'an@company.com']) @bind($email)></label></div>
                    @startMarker('reactive', 'Bcontent12r1k2r1', ['stateKey' => ['attempted', 'email', 'name'], 'type' => 'if'])
                    @if($attempted && (!trim($name) || !trim($email)))
                        <p @class([$__VIEW_ID__ . '-Bcontent12r1k2r1k11', 's44ffe7d2', 'form-error'])>Please add both your name and email.</p>
                    @endif
                    @endMarker('reactive', 'Bcontent12r1k2r1')
                    <label @class([$__VIEW_ID__ . '-Bcontent12r1k22', 's44ffe7d2'])><span @class([$__VIEW_ID__ . '-Bcontent12r1k221', 's44ffe7d2'])>What should we discuss?</span><select @class([$__VIEW_ID__ . '-Bcontent12r1k222', 's44ffe7d2']) @bind($topic)><option @class([$__VIEW_ID__ . '-Bcontent12r1k2221', 's44ffe7d2'])>Architecture review</option><option @class([$__VIEW_ID__ . '-Bcontent12r1k2222', 's44ffe7d2'])>Hydration migration</option><option @class([$__VIEW_ID__ . '-Bcontent12r1k2223', 's44ffe7d2'])>Compiler integration</option><option @class([$__VIEW_ID__ . '-Bcontent12r1k2224', 's44ffe7d2'])>Performance audit</option></select></label>
                    <label @class([$__VIEW_ID__ . '-Bcontent12r1k23', 's44ffe7d2'])><span @class([$__VIEW_ID__ . '-Bcontent12r1k231', 's44ffe7d2'])>Context</span><textarea @class([$__VIEW_ID__ . '-Bcontent12r1k232', 's44ffe7d2']) @attr(['maxlength' => '500', 'placeholder' => 'What is the application doing today, and where does it become difficult?']) @bind($message)></textarea><small @class([$__VIEW_ID__ . '-Bcontent12r1k233', 's44ffe7d2'])>@startMarker('output', 'Bcontent12r1k233o1'){{ $messageLength }}@endMarker('output', 'Bcontent12r1k233o1') / 500</small></label>
                    @startMarker('reactive', 'Bcontent12r1k2r2', ['stateKey' => ['attempted', 'messageLength'], 'type' => 'if'])
                    @if($attempted && $messageLength < 12)
                        <p @class([$__VIEW_ID__ . '-Bcontent12r1k2r2k11', 's44ffe7d2', 'form-error'])>Give us at least 12 characters of context.</p>
                    @endif
                    @endMarker('reactive', 'Bcontent12r1k2r2')
                    <button @class([$__VIEW_ID__ . '-Bcontent12r1k24', 's44ffe7d2', 'button', 'button-primary']) @attr(['type' => 'submit'])>Prepare message <span @class([$__VIEW_ID__ . '-Bcontent12r1k241', 's44ffe7d2'])>→</span></button>
                @endif
                @endMarker('reactive', 'Bcontent12r1')
            </form>
        </section>
    @endblock
