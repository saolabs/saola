import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.home.index';
const __VIEW_NAMESPACE__ = 'web.modules.home.';
const __VIEW_TYPE__ = 'view';
const __VIEW_CONFIG__ = {
    hasSuperView: true,
    viewType: 'view',
    sections: {
        "content":{
            "type":"long",
            "preloader":false,
            "useVars":true,
            "script":{}
        }
    },
    wrapperConfig: { enable: false, tag: null, subscribe: true, attributes: {} },
    hasAwaitData: false,
    hasFetchData: false,
    usesVars: false,
    hasSections: true,
    hasSectionPreload: false,
    hasPrerender: false,
    renderLongSections: ["content"],
    renderSections: [],
    prerenderSections: []
};



class IndexViewController extends ViewController {
    constructor(view: View) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this as any).setStaticConfig === 'function') {
            (this as any).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this as any).config = __VIEW_CONFIG__;
        }
    }
}

class IndexView extends View {
    constructor(__data__: any = {}, systemData: any = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, IndexViewController);
        const App: Application = app("App") as Application;
        const __STATE__ = this.__ctrl__.states;
        const {__base__, __layout__, __page__, __component__, __template__, __context__, __partial__, __system__, __env = {}, __helper = {}} = systemData;
        const __VIEW_ID__ = __data__.__SSR_VIEW_ID__ || App.View.generateViewId();

        const useState = (value: any) => {
            return __STATE__.__useState(value);
        };
        const updateRealState = (state: any) => {
            __STATE__.__.updateRealState(state);
        };

        const lockUpdateRealState = () => {
            __STATE__.__.lockUpdateRealState();
        };
        const updateStateByKey = (key: string, state: any) => {
            __STATE__.__.updateStateByKey(key, state);
        };


        const __UPDATE_DATA_TRAIT__: any = {};
        const set$selectedSignal = __STATE__.__.register('selectedSignal');
        let selectedSignal: any = null;
        const setSelectedSignal = (state: any) => {
            selectedSignal = state;
            set$selectedSignal(state);
        };
        __STATE__.__.setters.setSelectedSignal = setSelectedSignal;
        __STATE__.__.setters.selectedSignal = setSelectedSignal;
        const update$selectedSignal = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('selectedSignal', value);
                selectedSignal = value;
            }
        };
        const set$email = __STATE__.__.register('email');
        let email: any = null;
        const setEmail = (state: any) => {
            email = state;
            set$email(state);
        };
        __STATE__.__.setters.setEmail = setEmail;
        __STATE__.__.setters.email = setEmail;
        const update$email = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('email', value);
                email = value;
            }
        };
        const set$joined = __STATE__.__.register('joined');
        let joined: any = null;
        const setJoined = (state: any) => {
            joined = state;
            set$joined(state);
        };
        __STATE__.__.setters.setJoined = setJoined;
        __STATE__.__.setters.joined = setJoined;
        const update$joined = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('joined', value);
                joined = value;
            }
        };
        const __VARIABLE_LIST__: any = [];


        this.__ctrl__.setUserDefinedConfig({
            name: 'HomePage',
                joinWaitlist(event) {
                    event.preventDefault();
                    if (email.trim()) setJoined(true);
                }
        });

        this.__ctrl__.setup({
            superView: `${__layout__+"public"}`,
            subscribe: true,
            fetch: null,
            data: __data__,
            viewId: __VIEW_ID__,
            path: __VIEW_PATH__,
            scripts: [],
            styles: [{"type":"code","scoped":true,"content":".hero-copy h1 em { color: var(--cobalt); font-style: normal; }\n    .route-node.active { transform: translateX(8px); }"}],
            resources: [],
            commitConstructorData: function(this: any) {
                // Then update states from data
                update$selectedSignal('hydration');
                update$email('');
                update$joined(false);
                // Finally lock state updates
                lockUpdateRealState();
            },
            updateVariableData: function(this: any, data: any) {
                // Update all variables first
                for (const key in data) {
                    if (data.hasOwnProperty(key)) {
                        // Call updateVariableItemData directly from config
                        if (typeof this.config.updateVariableItemData === 'function') {
                            this.config.updateVariableItemData.call(this, key, data[key]);
                        }
                    }
                }
                // Re-derive CHỈ state phụ thuộc data — state literal của instance KHÔNG reset

                // Finally lock state updates
                lockUpdateRealState();
            },
            updateVariableItemData: function(this: any, key: string, value: any) {
                this.data[key] = value;
                if (typeof __UPDATE_DATA_TRAIT__[key] === "function") {
                    __UPDATE_DATA_TRAIT__[key](value);
                }
            },
            prerender: function() {
            return null;
            },
            render: function () {
            let parentElement = this.parentElement;
            let parentReactive = null;
            this.block('block-content', 'content', (parentElement: any) => [
            this.html(`b4052a35`, "section", parentElement,
                { classes: [{ type: 'static', value: "hero-grid" }] },
                (parentElement: any) => [
                this.html(`90a6e493`, "div", parentElement,
                    { classes: [{ type: 'static', value: "hero-copy" }] },
                    (parentElement: any) => [
                    this.html(`f515bf66`, "p", parentElement,
                        { classes: [{ type: 'static', value: "eyebrow" }] },
                        (parentElement: any) => [
                        this.html(`e2f86203`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('01')
                        ]),
                        this.text(' A calmer way to ship')
                        ]),
                    this.html(`9b0938cb`, "h1", parentElement, {}, (parentElement: any) => [
                        this.text('One view.'),
                        this.html(`f7127348`, "br", parentElement, {}),
                        this.html(`d4f4199d`, "em", parentElement, {}, (parentElement: any) => [
                            this.text('Every surface.')
                        ])
                    ]),
                    this.html(`7718bb8d`, "p", parentElement,
                        { classes: [{ type: 'static', value: "hero-lead" }] },
                        (parentElement: any) => [
                        this.text('Saola keeps Laravel and Blade in charge of the first response, then hydrates the exact same view into a fast, stateful SPA.')
                        ]),
                    this.html(`ed82504f`, "div", parentElement,
                        { classes: [{ type: 'static', value: "hero-actions" }] },
                        (parentElement: any) => [
                        this.html(`63bde3ef`, "a", parentElement,
                            { classes: [{ type: 'static', value: "button" }, { type: 'static', value: "button-primary" }], attrs: { "href": { type: 'static', value: "/todo-list" } } },
                            (parentElement: any) => [
                            this.text('Try the workspace '),
                            this.html(`fee9a4ad`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('→')
                            ])
                            ]),
                        this.html(`b589ca24`, "a", parentElement,
                            { classes: [{ type: 'static', value: "text-link" }], attrs: { "href": { type: 'static', value: "/about" } } },
                            (parentElement: any) => [
                            this.text('Read our approach '),
                            this.html(`c0aad52e`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('↗')
                            ])
                            ])
                        ])
                    ]),
                this.html(`5f82dcd4`, "div", parentElement,
                    { classes: [{ type: 'static', value: "route-card" }], attrs: { "aria-label": { type: 'static', value: "Saola render route" } } },
                    (parentElement: any) => [
                    this.html(`01b28266`, "div", parentElement,
                        { classes: [{ type: 'static', value: "route-card-head" }] },
                        (parentElement: any) => [
                        this.html(`37bb2111`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('LIVE ROUTE')
                        ]),
                        this.html(`1a133c3a`, "strong", parentElement, {}, (parentElement: any) => [
                            this.text('/home')
                        ])
                        ]),
                    this.html(`81148f49`, "div", parentElement,
                        { classes: [{ type: 'static', value: "route-line" }] },
                        (parentElement: any) => [
                        this.html(`0a6e7712`, "button", parentElement,
                            { classes: [{ type: 'static', value: "route-node" }, { type: 'binding', value: "active", factory: () => selectedSignal === 'blade', stateKeys: ["selectedSignal"] }], events: { click: [(event: any) => setSelectedSignal('blade')] } },
                            (parentElement: any) => [
                            this.html(`ce927f4f`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('1')
                            ]),
                            this.html(`f7052e3e`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Blade')
                            ]),
                            this.html(`526cf3cc`, "small", parentElement, {}, (parentElement: any) => [
                                this.text('server response')
                            ])
                            ]),
                        this.html(`3a989139`, "button", parentElement,
                            { classes: [{ type: 'static', value: "route-node" }, { type: 'binding', value: "active", factory: () => selectedSignal === 'hydration', stateKeys: ["selectedSignal"] }], events: { click: [(event: any) => setSelectedSignal('hydration')] } },
                            (parentElement: any) => [
                            this.html(`05212354`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('2')
                            ]),
                            this.html(`d46221bd`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Hydrate')
                            ]),
                            this.html(`d429dcc9`, "small", parentElement, {}, (parentElement: any) => [
                                this.text('bind existing DOM')
                            ])
                            ]),
                        this.html(`b3e06691`, "button", parentElement,
                            { classes: [{ type: 'static', value: "route-node" }, { type: 'binding', value: "active", factory: () => selectedSignal === 'spa', stateKeys: ["selectedSignal"] }], events: { click: [(event: any) => setSelectedSignal('spa')] } },
                            (parentElement: any) => [
                            this.html(`8584e61f`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('3')
                            ]),
                            this.html(`8f16b88f`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('SPA')
                            ]),
                            this.html(`14861b24`, "small", parentElement, {}, (parentElement: any) => [
                                this.text('client navigation')
                            ])
                            ])
                        ]),
                    this.html(`328c95ab`, "div", parentElement,
                        { classes: [{ type: 'static', value: "signal-readout" }] },
                        (parentElement: any) => [
                        this.reactive(`489f9502`, "if", parentReactive, parentElement, ["selectedSignal"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (selectedSignal === 'blade') {
                                reactiveContents.push(
                                this.html(`91534320`, "p", parentElement, {}, (parentElement: any) => [
                                    this.html(`728fc54b`, "strong", parentElement, {}, (parentElement: any) => [
                                        this.text('Server-first')
                                    ]),
                                    this.text(' — HTML remains useful before JavaScript starts.')
                                ])
                                );
                            }
                            else if (selectedSignal === 'spa') {
                                reactiveContents.push(
                                this.html(`029a7aa7`, "p", parentElement, {}, (parentElement: any) => [
                                    this.html(`61237f49`, "strong", parentElement, {}, (parentElement: any) => [
                                        this.text('Navigation-ready')
                                    ]),
                                    this.text(' — only the changing view tree is replaced.')
                                ])
                                );
                            }
                            else {
                                reactiveContents.push(
                                this.html(`4c9b0e4d`, "p", parentElement, {}, (parentElement: any) => [
                                    this.html(`ae8ef897`, "strong", parentElement, {}, (parentElement: any) => [
                                        this.text('Hydration-safe')
                                    ]),
                                    this.text(' — events and state attach to the DOM Blade already rendered.')
                                ])
                                );
                            }
                            return reactiveContents;
                        })
                        ])
                    ])
                ]),
            this.html(`8aa0772c`, "section", parentElement,
                { classes: [{ type: 'static', value: "proof-strip" }] },
                (parentElement: any) => [
                this.html(`35bf6e9d`, "p", parentElement, {}, (parentElement: any) => [
                    this.text('BUILT FOR REAL APPLICATIONS')
                ]),
                this.html(`7f8af112`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`14b47dbd`, "strong", parentElement, {}, (parentElement: any) => [
                        this.text('01')
                    ]),
                    this.html(`c67cd95a`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('Laravel routes')
                    ])
                ]),
                this.html(`9b976db3`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`9aa2ffa8`, "strong", parentElement, {}, (parentElement: any) => [
                        this.text('02')
                    ]),
                    this.html(`b5411efa`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('Blade fallback')
                    ])
                ]),
                this.html(`cfc01898`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`ccc1deb9`, "strong", parentElement, {}, (parentElement: any) => [
                        this.text('03')
                    ]),
                    this.html(`1edf95b4`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('Scoped assets')
                    ])
                ]),
                this.html(`f5acbbe8`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`e0f722e3`, "strong", parentElement, {}, (parentElement: any) => [
                        this.text('04')
                    ]),
                    this.html(`261e25b4`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('Reactive state')
                    ])
                ])
                ]),
            this.html(`6c26f9b7`, "section", parentElement,
                { classes: [{ type: 'static', value: "feature-section" }] },
                (parentElement: any) => [
                this.html(`ce6a96bf`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-heading" }] },
                    (parentElement: any) => [
                    this.html(`5a71cd5f`, "p", parentElement,
                        { classes: [{ type: 'static', value: "eyebrow" }] },
                        (parentElement: any) => [
                        this.html(`f1acc65a`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('02')
                        ]),
                        this.text(' The useful parts')
                        ]),
                    this.html(`98293aba`, "h2", parentElement, {}, (parentElement: any) => [
                        this.text('Less framework'),
                        this.html(`c006637c`, "br", parentElement, {}),
                        this.text('between intent and result.')
                    ])
                    ]),
                this.html(`d44023e9`, "div", parentElement,
                    { classes: [{ type: 'static', value: "feature-list" }] },
                    (parentElement: any) => [
                    this.html(`e3e123df`, "article", parentElement, {}, (parentElement: any) => [
                        this.html(`5cadfa06`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('01')
                        ]),
                        this.html(`6efb1915`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Render once')
                        ]),
                        this.html(`4a13b743`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('The same \\`.sao\\` source produces server Blade and the client view contract.')
                        ])
                    ]),
                    this.html(`04b24ab0`, "article", parentElement, {}, (parentElement: any) => [
                        this.html(`2dd4b699`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('02')
                        ]),
                        this.html(`8d51d8aa`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Keep context')
                        ]),
                        this.html(`53b76b5c`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Shared layouts survive route changes while page state follows a clear lifecycle.')
                        ])
                    ]),
                    this.html(`ddf2d3a9`, "article", parentElement, {}, (parentElement: any) => [
                        this.html(`8d5d9746`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('03')
                        ]),
                        this.html(`ad421324`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Load precisely')
                        ]),
                        this.html(`71463dd8`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Global assets deduplicate; scoped styles stay attached to their owning view.')
                        ])
                    ])
                    ])
                ]),
            this.html(`4e212027`, "section", parentElement,
                { classes: [{ type: 'static', value: "newsletter-panel" }] },
                (parentElement: any) => [
                this.html(`1628defa`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`d621a64b`, "p", parentElement,
                        { classes: [{ type: 'static', value: "eyebrow" }] },
                        (parentElement: any) => [
                        this.html(`5f6b80a9`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('03')
                        ]),
                        this.text(' Product notes')
                        ]),
                    this.html(`6560bb1b`, "h2", parentElement, {}, (parentElement: any) => [
                        this.text('Follow the build,'),
                        this.html(`c03b5dbb`, "br", parentElement, {}),
                        this.text('without the noise.')
                    ])
                ]),
                this.html(`b8bd3cde`, "form", parentElement,
                    { classes: [{ type: 'static', value: "newsletter-form" }], events: { submit: [{"handler":"joinWaitlist","params":[() => event]}] } },
                    (parentElement: any) => [
                    this.reactive(`44cceece`, "if", parentReactive, parentElement, ["joined"], (parentReactive: any, parentElement: any) => {
                        const reactiveContents = [];
                        if (joined) {
                            reactiveContents.push(
                            this.html(`50aeb2d9`, "div", parentElement,
                                { classes: [{ type: 'static', value: "success-note" }] },
                                (parentElement: any) => [
                                this.html(`a7eda2b2`, "span", parentElement, {}, (parentElement: any) => [
                                    this.text('✓')
                                ]),
                                this.html(`28dbecef`, "p", parentElement, {}, (parentElement: any) => [
                                    this.html(`61788545`, "strong", parentElement, {}, (parentElement: any) => [
                                        this.text('You\'re on the list.')
                                    ]),
                                    this.html(`bd39f455`, "br", parentElement, {}),
                                    this.text('We will write only when something useful ships.')
                                ])
                                ])
                            );
                        }
                        else {
                            reactiveContents.push(
                            this.html(`fb2898e9`, "label", parentElement,
                                { attrs: { "for": { type: 'static', value: "home-email" } } },
                                (parentElement: any) => [
                                this.text('Work email')
                                ]),
                            this.html(`d05b19b3`, "div", parentElement, {}, (parentElement: any) => [
                                this.html(`8c996698`, "input", parentElement, { attrs: { "id": { type: 'static', value: "home-email" }, "type": { type: 'static', value: "email" }, "placeholder": { type: 'static', value: "you@company.com" }, "bind": { type: 'static', value: true }, "email": { type: 'static', value: true }, "required": { type: 'static', value: true } } }),
                                this.html(`8451212a`, "button", parentElement,
                                    { attrs: { "type": { type: 'static', value: "submit" } } },
                                    (parentElement: any) => [
                                    this.text('Join '),
                                    this.html(`6a9bfaef`, "span", parentElement, {}, (parentElement: any) => [
                                        this.text('→')
                                    ])
                                    ])
                            ]),
                            this.html(`d3584ffa`, "small", parentElement, {}, (parentElement: any) => [
                                this.text('No campaigns. Just meaningful release notes.')
                            ])
                            );
                        }
                        return reactiveContents;
                    })
                    ])
                ])
            ]);
            this.superViewPath = `${__layout__+"public"}`;
            return this.extendView(this.superViewPath, {});
            }
        });

    }
}

// Export factory function
export function WebModulesHomeIndex(__data__ = {}, systemData = {}): IndexView {
    return new IndexView(__data__, systemData);
}
export default WebModulesHomeIndex;
