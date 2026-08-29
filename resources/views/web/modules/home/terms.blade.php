@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($accepted, false)
@useState($expanded, 1)
@extends($__layout__ . "public")
    @block('content')
        <section @class([$__VIEW_ID__ . '-Bcontent1', 'legal-hero', 'legal-hero-compact'])>
            <p @class([$__VIEW_ID__ . '-Bcontent11', 'eyebrow'])><span @class([$__VIEW_ID__ . '-Bcontent111'])>01</span> Legal / Terms</p>
            <h1 @class([$__VIEW_ID__ . '-Bcontent12'])>Terms for a<br @class([$__VIEW_ID__ . '-Bcontent121'])>working prototype.</h1>
            <p @class([$__VIEW_ID__ . '-Bcontent13'])>This demo explains behavior; it is not a production service agreement.</p>
        </section>
        <section @class([$__VIEW_ID__ . '-Bcontent2', 'terms-list'])>
            <article @class([$__VIEW_ID__ . '-Bcontent21', 'open'=> $expanded === 1])>
                <button @class([$__VIEW_ID__ . '-Bcontent211'])><span @class([$__VIEW_ID__ . '-Bcontent2111'])>01</span><strong @class([$__VIEW_ID__ . '-Bcontent2112'])>Purpose of this site</strong><i @class([$__VIEW_ID__ . '-Bcontent2113'])>+</i></button>
                @startMarker('reactive', 'Bcontent21r1', ['stateKey' => ['expanded'], 'type' => 'if'])
                @if($expanded === 1)
                    <p @class([$__VIEW_ID__ . '-Bcontent21r1k11'])>The pages exist to exercise Saola route navigation, nested layouts, reactive state, scoped styling and runtime asset cleanup.</p>
                @endif
                @endMarker('reactive', 'Bcontent21r1')
            </article>
            <article @class([$__VIEW_ID__ . '-Bcontent22', 'open'=> $expanded === 2])>
                <button @class([$__VIEW_ID__ . '-Bcontent221'])><span @class([$__VIEW_ID__ . '-Bcontent2211'])>02</span><strong @class([$__VIEW_ID__ . '-Bcontent2212'])>Data and persistence</strong><i @class([$__VIEW_ID__ . '-Bcontent2213'])>+</i></button>
                @startMarker('reactive', 'Bcontent22r1', ['stateKey' => ['expanded'], 'type' => 'if'])
                @if($expanded === 2)
                    <p @class([$__VIEW_ID__ . '-Bcontent22r1k11'])>Interactions are intentionally local. Refreshing the browser resets task and form state because no persistence service is connected.</p>
                @endif
                @endMarker('reactive', 'Bcontent22r1')
            </article>
            <article @class([$__VIEW_ID__ . '-Bcontent23', 'open'=> $expanded === 3])>
                <button @class([$__VIEW_ID__ . '-Bcontent231'])><span @class([$__VIEW_ID__ . '-Bcontent2311'])>03</span><strong @class([$__VIEW_ID__ . '-Bcontent2312'])>No warranty</strong><i @class([$__VIEW_ID__ . '-Bcontent2313'])>+</i></button>
                @startMarker('reactive', 'Bcontent23r1', ['stateKey' => ['expanded'], 'type' => 'if'])
                @if($expanded === 3)
                    <p @class([$__VIEW_ID__ . '-Bcontent23r1k11'])>This interface is a test fixture for the evolving platform and should be evaluated as development software.</p>
                @endif
                @endMarker('reactive', 'Bcontent23r1')
            </article>
        </section>
        <section @class([$__VIEW_ID__ . '-Bcontent3', 'accept-panel'])><label @class([$__VIEW_ID__ . '-Bcontent31'])><input @class([$__VIEW_ID__ . '-Bcontent311']) @attr(['type' => 'checkbox']) @bind($accepted)><span @class([$__VIEW_ID__ . '-Bcontent312'])></span><p @class([$__VIEW_ID__ . '-Bcontent313'])><strong @class([$__VIEW_ID__ . '-Bcontent3131'])>I understand this is a demonstration.</strong><small @class([$__VIEW_ID__ . '-Bcontent3132'])>Your choice is reactive and local to this view.</small></p></label><button @class([$__VIEW_ID__ . '-Bcontent32', 'button', 'button-primary']) @disabled(!$accepted)>Continue <span @class([$__VIEW_ID__ . '-Bcontent321'])>→</span></button></section>
    @endblock
