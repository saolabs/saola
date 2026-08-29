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
        <section @class([$__VIEW_ID__ . '-Bcontent1', 's749c6dff', 'contact-grid'])>
            <div @class([$__VIEW_ID__ . '-Bcontent11', 's749c6dff', 'contact-aside'])>
                <p @class([$__VIEW_ID__ . '-Bcontent111', 's749c6dff', 'eyebrow'])><span @class([$__VIEW_ID__ . '-Bcontent1111', 's749c6dff'])>01</span> Contact</p>
                <h1 @class([$__VIEW_ID__ . '-Bcontent112', 's749c6dff'])>Bring us the<br @class([$__VIEW_ID__ . '-Bcontent1121', 's749c6dff'])><em @class([$__VIEW_ID__ . '-Bcontent1122', 's749c6dff'])>difficult part.</em></h1>
                <p @class([$__VIEW_ID__ . '-Bcontent113', 's749c6dff'])>Tell us where your Laravel application is fighting the frontend. This form is deliberately client-only for the demo.</p>
                <div @class([$__VIEW_ID__ . '-Bcontent114', 's749c6dff', 'contact-meta'])><span @class([$__VIEW_ID__ . '-Bcontent1141', 's749c6dff'])>RESPONSE WINDOW</span><strong @class([$__VIEW_ID__ . '-Bcontent1142', 's749c6dff'])>Usually within 2 working days</strong><span @class([$__VIEW_ID__ . '-Bcontent1143', 's749c6dff'])>BASED IN</span><strong @class([$__VIEW_ID__ . '-Bcontent1144', 's749c6dff'])>Ho Chi Minh City · Remote worldwide</strong></div>
            </div>
            <form @class([$__VIEW_ID__ . '-Bcontent12', 's749c6dff', 'contact-form'])>
                @startMarker('reactive', 'Bcontent12r1', ['stateKey' => ['sent'], 'type' => 'if'])
                @if($sent)
                    <div @class([$__VIEW_ID__ . '-Bcontent12r1k11', 's749c6dff', 'contact-success'])><span @class([$__VIEW_ID__ . '-Bcontent12r1k111', 's749c6dff'])>✓</span><h2 @class([$__VIEW_ID__ . '-Bcontent12r1k112', 's749c6dff'])>Message prepared.</h2><p @class([$__VIEW_ID__ . '-Bcontent12r1k113', 's749c6dff'])>The demo stopped before a network request. In production, this is where an API action would take over.</p><button @class([$__VIEW_ID__ . '-Bcontent12r1k114', 's749c6dff', 'text-link']) @attr(['type' => 'button'])>Write another message →</button></div>
                @else
                    <div @class([$__VIEW_ID__ . '-Bcontent12r1k21', 's749c6dff', 'field-row'])><label @class([$__VIEW_ID__ . '-Bcontent12r1k211', 's749c6dff'])><span @class([$__VIEW_ID__ . '-Bcontent12r1k2111', 's749c6dff'])>Your name</span><input @class([$__VIEW_ID__ . '-Bcontent12r1k2112', 's749c6dff']) @attr(['type' => 'text', 'placeholder' => 'Nguyen An']) @bind($name)></label><label @class([$__VIEW_ID__ . '-Bcontent12r1k212', 's749c6dff'])><span @class([$__VIEW_ID__ . '-Bcontent12r1k2121', 's749c6dff'])>Email</span><input @class([$__VIEW_ID__ . '-Bcontent12r1k2122', 's749c6dff']) @attr(['type' => 'email', 'placeholder' => 'an@company.com']) @bind($email)></label></div>
                    @startMarker('reactive', 'Bcontent12r1k2r1', ['stateKey' => ['attempted', 'email', 'name'], 'type' => 'if'])
                    @if($attempted && (!trim($name) || !trim($email)))
                        <p @class([$__VIEW_ID__ . '-Bcontent12r1k2r1k11', 's749c6dff', 'form-error'])>Please add both your name and email.</p>
                    @endif
                    @endMarker('reactive', 'Bcontent12r1k2r1')
                    <label @class([$__VIEW_ID__ . '-Bcontent12r1k22', 's749c6dff'])><span @class([$__VIEW_ID__ . '-Bcontent12r1k221', 's749c6dff'])>What should we discuss?</span><select @class([$__VIEW_ID__ . '-Bcontent12r1k222', 's749c6dff']) @bind($topic)><option @class([$__VIEW_ID__ . '-Bcontent12r1k2221', 's749c6dff'])>Architecture review</option><option @class([$__VIEW_ID__ . '-Bcontent12r1k2222', 's749c6dff'])>Hydration migration</option><option @class([$__VIEW_ID__ . '-Bcontent12r1k2223', 's749c6dff'])>Compiler integration</option><option @class([$__VIEW_ID__ . '-Bcontent12r1k2224', 's749c6dff'])>Performance audit</option></select></label>
                    <label @class([$__VIEW_ID__ . '-Bcontent12r1k23', 's749c6dff'])><span @class([$__VIEW_ID__ . '-Bcontent12r1k231', 's749c6dff'])>Context</span><textarea @class([$__VIEW_ID__ . '-Bcontent12r1k232', 's749c6dff']) @attr(['maxlength' => '500', 'placeholder' => 'What is the application doing today, and where does it become difficult?']) @bind($message)></textarea><small @class([$__VIEW_ID__ . '-Bcontent12r1k233', 's749c6dff'])>@startMarker('output', 'Bcontent12r1k233o1'){{ $messageLength }}@endMarker('output', 'Bcontent12r1k233o1') / 500</small></label>
                    @startMarker('reactive', 'Bcontent12r1k2r2', ['stateKey' => ['attempted', 'messageLength'], 'type' => 'if'])
                    @if($attempted && $messageLength < 12)
                        <p @class([$__VIEW_ID__ . '-Bcontent12r1k2r2k11', 's749c6dff', 'form-error'])>Give us at least 12 characters of context.</p>
                    @endif
                    @endMarker('reactive', 'Bcontent12r1k2r2')
                    <button @class([$__VIEW_ID__ . '-Bcontent12r1k24', 's749c6dff', 'button', 'button-primary']) @attr(['type' => 'submit'])>Prepare message <span @class([$__VIEW_ID__ . '-Bcontent12r1k241', 's749c6dff'])>→</span></button>
                @endif
                @endMarker('reactive', 'Bcontent12r1')
            </form>
        </section>
    @endblock
