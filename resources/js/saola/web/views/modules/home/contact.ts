import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.home.contact';
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



class ContactViewController extends ViewController {
    constructor(view: View) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this as any).setStaticConfig === 'function') {
            (this as any).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this as any).config = __VIEW_CONFIG__;
        }
    }
}

class ContactView extends View {
    constructor(__data__: any = {}, systemData: any = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, ContactViewController);
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
        const set$name = __STATE__.__.register('name');
        let name: any = null;
        const setName = (state: any) => {
            name = state;
            set$name(state);
        };
        __STATE__.__.setters.setName = setName;
        __STATE__.__.setters.name = setName;
        const update$name = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('name', value);
                name = value;
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
        const set$topic = __STATE__.__.register('topic');
        let topic: any = null;
        const setTopic = (state: any) => {
            topic = state;
            set$topic(state);
        };
        __STATE__.__.setters.setTopic = setTopic;
        __STATE__.__.setters.topic = setTopic;
        const update$topic = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('topic', value);
                topic = value;
            }
        };
        const set$message = __STATE__.__.register('message');
        let message: any = null;
        const setMessage = (state: any) => {
            message = state;
            set$message(state);
        };
        __STATE__.__.setters.setMessage = setMessage;
        __STATE__.__.setters.message = setMessage;
        const update$message = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('message', value);
                message = value;
            }
        };
        const set$messageLength = __STATE__.__.register('messageLength');
        let messageLength: any = null;
        const setMessageLength = (state: any) => {
            messageLength = state;
            set$messageLength(state);
        };
        __STATE__.__.setters.setMessageLength = setMessageLength;
        __STATE__.__.setters.messageLength = setMessageLength;
        const update$messageLength = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('messageLength', value);
                messageLength = value;
            }
        };
        const set$attempted = __STATE__.__.register('attempted');
        let attempted: any = null;
        const setAttempted = (state: any) => {
            attempted = state;
            set$attempted(state);
        };
        __STATE__.__.setters.setAttempted = setAttempted;
        __STATE__.__.setters.attempted = setAttempted;
        const update$attempted = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('attempted', value);
                attempted = value;
            }
        };
        const set$sent = __STATE__.__.register('sent');
        let sent: any = null;
        const setSent = (state: any) => {
            sent = state;
            set$sent(state);
        };
        __STATE__.__.setters.setSent = setSent;
        __STATE__.__.setters.sent = setSent;
        const update$sent = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('sent', value);
                sent = value;
            }
        };
        const __VARIABLE_LIST__: any = [];


        this.__ctrl__.setUserDefinedConfig({
            name: 'ContactPage',
                sendContact(event) {
                    event.preventDefault();
                    setAttempted(true);
                    if (name.trim() && email.trim() && message.trim().length >= 12) setSent(true);
                },
                resetForm() {
                    setName(''); setEmail(''); setMessage(''); setMessageLength(0); setAttempted(false); setSent(false);
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
            styles: [{"type":"code","scoped":true,"content":".contact-aside h1 em { color: var(--cobalt); font-style: normal; }"}],
            resources: [],
            commitConstructorData: function(this: any) {
                // Then update states from data
                update$name('');
                update$email('');
                update$topic('Architecture review');
                update$message('');
                update$messageLength(0);
                update$attempted(false);
                update$sent(false);
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
                { classes: [{ type: 'static', value: "contact-grid" }] },
                (parentElement: any) => [
                this.html(`90a6e493`, "div", parentElement,
                    { classes: [{ type: 'static', value: "contact-aside" }] },
                    (parentElement: any) => [
                    this.html(`f515bf66`, "p", parentElement,
                        { classes: [{ type: 'static', value: "eyebrow" }] },
                        (parentElement: any) => [
                        this.html(`e2f86203`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('01')
                        ]),
                        this.text(' Contact')
                        ]),
                    this.html(`9b0938cb`, "h1", parentElement, {}, (parentElement: any) => [
                        this.text('Bring us the'),
                        this.html(`f7127348`, "br", parentElement, {}),
                        this.html(`d4f4199d`, "em", parentElement, {}, (parentElement: any) => [
                            this.text('difficult part.')
                        ])
                    ]),
                    this.html(`7718bb8d`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Tell us where your Laravel application is fighting the frontend. This form is deliberately client-only for the demo.')
                    ]),
                    this.html(`ed82504f`, "div", parentElement,
                        { classes: [{ type: 'static', value: "contact-meta" }] },
                        (parentElement: any) => [
                        this.html(`566847c8`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('RESPONSE WINDOW')
                        ]),
                        this.html(`e20854bb`, "strong", parentElement, {}, (parentElement: any) => [
                            this.text('Usually within 2 working days')
                        ]),
                        this.html(`1e24c146`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('BASED IN')
                        ]),
                        this.html(`b738344f`, "strong", parentElement, {}, (parentElement: any) => [
                            this.text('Ho Chi Minh City · Remote worldwide')
                        ])
                        ])
                    ]),
                this.html(`a74c2c3e`, "form", parentElement,
                    { classes: [{ type: 'static', value: "contact-form" }], events: { submit: [{"handler":"sendContact","params":[() => event]}] } },
                    (parentElement: any) => [
                    this.reactive(`bec45ee0`, "if", parentReactive, parentElement, ["sent"], (parentReactive: any, parentElement: any) => {
                        const reactiveContents = [];
                        if (sent) {
                            reactiveContents.push(
                            this.html(`7df64c7b`, "div", parentElement,
                                { classes: [{ type: 'static', value: "contact-success" }] },
                                (parentElement: any) => [
                                this.html(`7bbc6631`, "span", parentElement, {}, (parentElement: any) => [
                                    this.text('✓')
                                ]),
                                this.html(`cbcde4f0`, "h2", parentElement, {}, (parentElement: any) => [
                                    this.text('Message prepared.')
                                ]),
                                this.html(`fbcefe6a`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('The demo stopped before a network request. In production, this is where an API action would take over.')
                                ]),
                                this.html(`722f870c`, "button", parentElement,
                                    { classes: [{ type: 'static', value: "text-link" }], attrs: { "type": { type: 'static', value: "button" } }, events: { click: [{"handler":"resetForm","params":[]}] } },
                                    (parentElement: any) => [
                                    this.text('Write another message →')
                                    ])
                                ])
                            );
                        }
                        else {
                            reactiveContents.push(
                            this.html(`79aab806`, "div", parentElement,
                                { classes: [{ type: 'static', value: "field-row" }] },
                                (parentElement: any) => [
                                this.html(`9f323a7d`, "label", parentElement, {}, (parentElement: any) => [
                                    this.html(`dc81da6d`, "span", parentElement, {}, (parentElement: any) => [
                                        this.text('Your name')
                                    ]),
                                    this.html(`5a58ad17`, "input", parentElement, { attrs: { "type": { type: 'static', value: "text" }, "placeholder": { type: 'static', value: "Nguyen An" }, "bind": { type: 'static', value: true }, "name": { type: 'static', value: true } } })
                                ]),
                                this.html(`8cc8559a`, "label", parentElement, {}, (parentElement: any) => [
                                    this.html(`6b835f52`, "span", parentElement, {}, (parentElement: any) => [
                                        this.text('Email')
                                    ]),
                                    this.html(`459b3dbe`, "input", parentElement, { attrs: { "type": { type: 'static', value: "email" }, "placeholder": { type: 'static', value: "an@company.com" }, "bind": { type: 'static', value: true }, "email": { type: 'static', value: true } } })
                                ])
                                ]),
                            this.reactive(`3c5efb8e`, "if", parentReactive, parentElement, ["attempted", "email", "name"], (parentReactive: any, parentElement: any) => {
                                const reactiveContents = [];
                                if (attempted && (!App.Helper.trim(name) || !App.Helper.trim(email))) {
                                    reactiveContents.push(
                                    this.html(`53c28abe`, "p", parentElement,
                                        { classes: [{ type: 'static', value: "form-error" }] },
                                        (parentElement: any) => [
                                        this.text('Please add both your name and email.')
                                        ])
                                    );
                                }
                                return reactiveContents;
                            }),
                            this.html(`04df0ac9`, "label", parentElement, {}, (parentElement: any) => [
                                this.html(`0c93e049`, "span", parentElement, {}, (parentElement: any) => [
                                    this.text('What should we discuss?')
                                ]),
                                this.html(`5cc3aebc`, "select", parentElement,
                                    { attrs: { "bind": { type: 'static', value: true }, "topic": { type: 'static', value: true } } },
                                    (parentElement: any) => [
                                    this.html(`57da3ced`, "option", parentElement, {}, (parentElement: any) => [
                                        this.text('Architecture review')
                                    ]),
                                    this.html(`1c08821b`, "option", parentElement, {}, (parentElement: any) => [
                                        this.text('Hydration migration')
                                    ]),
                                    this.html(`ae004155`, "option", parentElement, {}, (parentElement: any) => [
                                        this.text('Compiler integration')
                                    ]),
                                    this.html(`c08dbe29`, "option", parentElement, {}, (parentElement: any) => [
                                        this.text('Performance audit')
                                    ])
                                    ])
                            ]),
                            this.html(`cf4a41cd`, "label", parentElement, {}, (parentElement: any) => [
                                this.html(`dfc41403`, "span", parentElement, {}, (parentElement: any) => [
                                    this.text('Context')
                                ]),
                                this.html(`24320d66`, "textarea", parentElement, { attrs: { "maxlength": { type: 'static', value: "500" }, "placeholder": { type: 'static', value: "What is the application doing today, and where does it become difficult?" }, "bind": { type: 'static', value: true }, "message": { type: 'static', value: true } }, events: { input: [(event: any) => setMessageLength({"handler":"count","params":[event.target.value]})] } }),
                                this.html(`ccb5d383`, "small", parentElement, {}, (parentElement: any) => [
                                    this.output(`1a6e11ed`, parentElement, true, ["messageLength"], (parentElement: any) => messageLength),
                                    this.text(' / 500')
                                ])
                            ]),
                            this.reactive(`1bc8df80`, "if", parentReactive, parentElement, ["attempted", "messageLength"], (parentReactive: any, parentElement: any) => {
                                const reactiveContents = [];
                                if (attempted && messageLength < 12) {
                                    reactiveContents.push(
                                    this.html(`07231773`, "p", parentElement,
                                        { classes: [{ type: 'static', value: "form-error" }] },
                                        (parentElement: any) => [
                                        this.text('Give us at least 12 characters of context.')
                                        ])
                                    );
                                }
                                return reactiveContents;
                            }),
                            this.html(`bffbda96`, "button", parentElement,
                                { classes: [{ type: 'static', value: "button" }, { type: 'static', value: "button-primary" }], attrs: { "type": { type: 'static', value: "submit" } } },
                                (parentElement: any) => [
                                this.text('Prepare message '),
                                this.html(`8f24f0a4`, "span", parentElement, {}, (parentElement: any) => [
                                    this.text('→')
                                ])
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
export function WebModulesHomeContact(__data__ = {}, systemData = {}): ContactView {
    return new ContactView(__data__, systemData);
}
export default WebModulesHomeContact;
