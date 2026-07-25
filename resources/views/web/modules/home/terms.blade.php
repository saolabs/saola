@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($accepted, false)
@useState($expanded, 1)
@extends($__layout__ . "public")
    @block('content')
        <section @class([$__VIEW_ID__ . '-b4052a35', 'legal-hero', 'legal-hero-compact'])>
            <p @class([$__VIEW_ID__ . '-82ed8433', 'eyebrow'])><span @class([$__VIEW_ID__ . '-4cd48692'])>01</span> Legal / Terms</p>
            <h1 @class([$__VIEW_ID__ . '-7342b39f'])>Terms for a<br @class([$__VIEW_ID__ . '-56049c15'])>working prototype.</h1>
            <p @class([$__VIEW_ID__ . '-d9cbd0b2'])>This demo explains behavior; it is not a production service agreement.</p>
        </section>
        <section @class([$__VIEW_ID__ . '-8aa0772c', 'terms-list'])>
            <article @class([$__VIEW_ID__ . '-7af0c8fd', 'open'=> $expanded === 1])>
                <button @class([$__VIEW_ID__ . '-0ff23b85'])><span @class([$__VIEW_ID__ . '-6bd41432'])>01</span><strong @class([$__VIEW_ID__ . '-e4d697bf'])>Purpose of this site</strong><i @class([$__VIEW_ID__ . '-8f623436'])>+</i></button>
                @startMarker('reactive', '38f688a4', ['stateKey' => ['expanded'], 'type' => 'if'])
                @if($expanded === 1)
                    <p @class([$__VIEW_ID__ . '-4b0e1792'])>The pages exist to exercise Saola route navigation, nested layouts, reactive state, scoped styling and runtime asset cleanup.</p>
                @endif
                @endMarker('reactive', '38f688a4')
            </article>
            <article @class([$__VIEW_ID__ . '-c49c81c5', 'open'=> $expanded === 2])>
                <button @class([$__VIEW_ID__ . '-980dd6c5'])><span @class([$__VIEW_ID__ . '-808e3301'])>02</span><strong @class([$__VIEW_ID__ . '-2afb8a53'])>Data and persistence</strong><i @class([$__VIEW_ID__ . '-1d8f0459'])>+</i></button>
                @startMarker('reactive', 'faf8dd77', ['stateKey' => ['expanded'], 'type' => 'if'])
                @if($expanded === 2)
                    <p @class([$__VIEW_ID__ . '-f8b8bb83'])>Interactions are intentionally local. Refreshing the browser resets task and form state because no persistence service is connected.</p>
                @endif
                @endMarker('reactive', 'faf8dd77')
            </article>
            <article @class([$__VIEW_ID__ . '-7f3d8652', 'open'=> $expanded === 3])>
                <button @class([$__VIEW_ID__ . '-69001fbb'])><span @class([$__VIEW_ID__ . '-5b4c5373'])>03</span><strong @class([$__VIEW_ID__ . '-e445b6b5'])>No warranty</strong><i @class([$__VIEW_ID__ . '-2aab0d20'])>+</i></button>
                @startMarker('reactive', '5827bac7', ['stateKey' => ['expanded'], 'type' => 'if'])
                @if($expanded === 3)
                    <p @class([$__VIEW_ID__ . '-02a4dc4b'])>This interface is a test fixture for the evolving platform and should be evaluated as development software.</p>
                @endif
                @endMarker('reactive', '5827bac7')
            </article>
        </section>
        <section @class([$__VIEW_ID__ . '-6c26f9b7', 'accept-panel'])><label @class([$__VIEW_ID__ . '-831b41c7'])><input @class([$__VIEW_ID__ . '-5071e598']) @attr(['type' => 'checkbox']) @bind($accepted)><span @class([$__VIEW_ID__ . '-2348d881'])></span><p @class([$__VIEW_ID__ . '-d052a684'])><strong @class([$__VIEW_ID__ . '-0de7eff6'])>I understand this is a demonstration.</strong><small @class([$__VIEW_ID__ . '-c0f3cdcb'])>Your choice is reactive and local to this view.</small></p></label><button @class([$__VIEW_ID__ . '-97f4c8ab', 'button', 'button-primary']) @disabled(!$accepted)>Continue <span @class([$__VIEW_ID__ . '-bb0e403c'])>→</span></button></section>
    @endblock
