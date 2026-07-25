@exec($__ONE_COMPONENT_REGISTRY__ = []) {{-- Khai báo để sử dụng các component đã đăng ký trong $__ONE_COMPONENT_REGISTRY__ --}}

@useState($activeValue, 0)
@extends($__layout__ . "public")
    @block('content')
        <section @class([$__VIEW_ID__ . '-b4052a35', 'page-intro', 'page-intro-split'])>
            <div @class([$__VIEW_ID__ . '-90a6e493'])>
                <p @class([$__VIEW_ID__ . '-f515bf66', 'eyebrow'])><span @class([$__VIEW_ID__ . '-e2f86203'])>01</span> About Saola</p>
                <h1 @class([$__VIEW_ID__ . '-9b0938cb'])>Software should feel<br @class([$__VIEW_ID__ . '-f7127348'])><em @class([$__VIEW_ID__ . '-d4f4199d'])>quietly capable.</em></h1>
            </div>
            <p @class([$__VIEW_ID__ . '-9f45c023'])>We build for teams who want Laravel's reliability without giving up the immediacy people expect from modern applications.</p>
        </section>

        <section @class([$__VIEW_ID__ . '-8aa0772c', 'manifesto-grid'])>
            <div @class([$__VIEW_ID__ . '-301a68fc', 'manifesto-number'])>01—03</div>
            <div @class([$__VIEW_ID__ . '-7f8af112', 'value-accordion'])>
                <article @class([$__VIEW_ID__ . '-1f6b5560', 'value-item', 'open'=> $activeValue === 0])>
                    <button @class([$__VIEW_ID__ . '-ff5e7d64'])><span @class([$__VIEW_ID__ . '-87b2c1c6'])>01</span><strong @class([$__VIEW_ID__ . '-772aefab'])>Server truth</strong><i @class([$__VIEW_ID__ . '-83d2d00c'])>+</i></button>
                    @startMarker('reactive', '787d96d6', ['stateKey' => ['activeValue'], 'type' => 'if'])
                    @if($activeValue === 0)
                        <p @class([$__VIEW_ID__ . '-5bd50f04'])>The first response must be complete, accessible and compatible with Blade. Hydration is an enhancement, not a rescue operation.</p>
                    @endif
                    @endMarker('reactive', '787d96d6')
                </article>
                <article @class([$__VIEW_ID__ . '-e6209cd3', 'value-item', 'open'=> $activeValue === 1])>
                    <button @class([$__VIEW_ID__ . '-d9283f12'])><span @class([$__VIEW_ID__ . '-6a26ad34'])>02</span><strong @class([$__VIEW_ID__ . '-54e0b6eb'])>Small contracts</strong><i @class([$__VIEW_ID__ . '-b0246e5b'])>+</i></button>
                    @startMarker('reactive', '9eb9af90', ['stateKey' => ['activeValue'], 'type' => 'if'])
                    @if($activeValue === 1)
                        <p @class([$__VIEW_ID__ . '-4606aa95'])>Views describe UI, layouts provide durable structure, and components own focused behavior. Each layer has one job.</p>
                    @endif
                    @endMarker('reactive', '9eb9af90')
                </article>
                <article @class([$__VIEW_ID__ . '-d548dd48', 'value-item', 'open'=> $activeValue === 2])>
                    <button @class([$__VIEW_ID__ . '-237c0a46'])><span @class([$__VIEW_ID__ . '-a953a291'])>03</span><strong @class([$__VIEW_ID__ . '-cbd31918'])>Visible lifecycle</strong><i @class([$__VIEW_ID__ . '-ee477f05'])>+</i></button>
                    @startMarker('reactive', '6376662d', ['stateKey' => ['activeValue'], 'type' => 'if'])
                    @if($activeValue === 2)
                        <p @class([$__VIEW_ID__ . '-bcf58435'])>Mount, pause, resume and destroy are explicit so navigation, caching and resource cleanup remain understandable.</p>
                    @endif
                    @endMarker('reactive', '6376662d')
                </article>
            </div>
        </section>

        <section @class([$__VIEW_ID__ . '-6c26f9b7', 'quote-panel'])><p @class([$__VIEW_ID__ . '-d2bc3963'])>“A framework earns trust when its runtime behavior matches the structure developers see in the source.”</p><span @class([$__VIEW_ID__ . '-b19e2c09'])>SAOLA DESIGN PRINCIPLE / 2026</span></section>
        <section @class([$__VIEW_ID__ . '-4e212027', 'closing-cta'])><h2 @class([$__VIEW_ID__ . '-8ef866a8'])>See the model in motion.</h2><a @class([$__VIEW_ID__ . '-8f1c0163', 'button', 'button-primary']) @attr(['href' => '/todo-list'])>Open interactive demo <span @class([$__VIEW_ID__ . '-4f37196e'])>→</span></a></section>
    @endblock
