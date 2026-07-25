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
        <section @class([$__VIEW_ID__ . '-b4052a35', 'contact-grid'])>
            <div @class([$__VIEW_ID__ . '-90a6e493', 'contact-aside'])>
                <p @class([$__VIEW_ID__ . '-f515bf66', 'eyebrow'])><span @class([$__VIEW_ID__ . '-e2f86203'])>01</span> Contact</p>
                <h1 @class([$__VIEW_ID__ . '-9b0938cb'])>Bring us the<br @class([$__VIEW_ID__ . '-f7127348'])><em @class([$__VIEW_ID__ . '-d4f4199d'])>difficult part.</em></h1>
                <p @class([$__VIEW_ID__ . '-7718bb8d'])>Tell us where your Laravel application is fighting the frontend. This form is deliberately client-only for the demo.</p>
                <div @class([$__VIEW_ID__ . '-ed82504f', 'contact-meta'])><span @class([$__VIEW_ID__ . '-566847c8'])>RESPONSE WINDOW</span><strong @class([$__VIEW_ID__ . '-e20854bb'])>Usually within 2 working days</strong><span @class([$__VIEW_ID__ . '-1e24c146'])>BASED IN</span><strong @class([$__VIEW_ID__ . '-b738344f'])>Ho Chi Minh City · Remote worldwide</strong></div>
            </div>
            <form @class([$__VIEW_ID__ . '-a74c2c3e', 'contact-form'])>
                @startMarker('reactive', 'bec45ee0', ['stateKey' => ['sent'], 'type' => 'if'])
                @if($sent)
                    <div @class([$__VIEW_ID__ . '-7df64c7b', 'contact-success'])><span @class([$__VIEW_ID__ . '-7bbc6631'])>✓</span><h2 @class([$__VIEW_ID__ . '-cbcde4f0'])>Message prepared.</h2><p @class([$__VIEW_ID__ . '-fbcefe6a'])>The demo stopped before a network request. In production, this is where an API action would take over.</p><button @class([$__VIEW_ID__ . '-722f870c', 'text-link']) @attr(['type' => 'button'])>Write another message →</button></div>
                @else
                    <div @class([$__VIEW_ID__ . '-79aab806', 'field-row'])><label @class([$__VIEW_ID__ . '-9f323a7d'])><span @class([$__VIEW_ID__ . '-dc81da6d'])>Your name</span><input @class([$__VIEW_ID__ . '-5a58ad17']) @attr(['type' => 'text', 'placeholder' => 'Nguyen An']) @bind($name)></label><label @class([$__VIEW_ID__ . '-8cc8559a'])><span @class([$__VIEW_ID__ . '-6b835f52'])>Email</span><input @class([$__VIEW_ID__ . '-459b3dbe']) @attr(['type' => 'email', 'placeholder' => 'an@company.com']) @bind($email)></label></div>
                    @startMarker('reactive', '3c5efb8e', ['stateKey' => ['attempted', 'email', 'name'], 'type' => 'if'])
                    @if($attempted && (!trim($name) || !trim($email)))
                        <p @class([$__VIEW_ID__ . '-53c28abe', 'form-error'])>Please add both your name and email.</p>
                    @endif
                    @endMarker('reactive', '3c5efb8e')
                    <label @class([$__VIEW_ID__ . '-04df0ac9'])><span @class([$__VIEW_ID__ . '-0c93e049'])>What should we discuss?</span><select @class([$__VIEW_ID__ . '-5cc3aebc']) @bind($topic)><option @class([$__VIEW_ID__ . '-57da3ced'])>Architecture review</option><option @class([$__VIEW_ID__ . '-1c08821b'])>Hydration migration</option><option @class([$__VIEW_ID__ . '-ae004155'])>Compiler integration</option><option @class([$__VIEW_ID__ . '-c08dbe29'])>Performance audit</option></select></label>
                    <label @class([$__VIEW_ID__ . '-cf4a41cd'])><span @class([$__VIEW_ID__ . '-dfc41403'])>Context</span><textarea @class([$__VIEW_ID__ . '-24320d66']) @attr(['maxlength' => '500', 'placeholder' => 'What is the application doing today, and where does it become difficult?']) @bind($message)></textarea><small @class([$__VIEW_ID__ . '-ccb5d383'])>@startMarker('output', '1a6e11ed'){{ $messageLength }}@endMarker('output', '1a6e11ed') / 500</small></label>
                    @startMarker('reactive', '1bc8df80', ['stateKey' => ['attempted', 'messageLength'], 'type' => 'if'])
                    @if($attempted && $messageLength < 12)
                        <p @class([$__VIEW_ID__ . '-07231773', 'form-error'])>Give us at least 12 characters of context.</p>
                    @endif
                    @endMarker('reactive', '1bc8df80')
                    <button @class([$__VIEW_ID__ . '-bffbda96', 'button', 'button-primary']) @attr(['type' => 'submit'])>Prepare message <span @class([$__VIEW_ID__ . '-8f24f0a4'])>→</span></button>
                @endif
                @endMarker('reactive', 'bec45ee0')
            </form>
        </section>
    @endblock
