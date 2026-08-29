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

/**
 * Props của view — sinh tự động từ @props/@vars, không sửa tay.
 * Optional hết vì khai báo nào cũng có default.
 */
export interface ContactProps {
    /** viewId server gán khi hydrate */
    __SSR_VIEW_ID__?: string;
    [key: string]: any;
}



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
        let name: any = '';
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
        let email: any = '';
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
        let topic: any = 'Architecture review';
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
        let message: any = '';
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
        let messageLength: any = 0;
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
        let attempted: any = false;
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
        let sent: any = false;
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
                trackLength(event) {
                    // .length phải nằm trong <script setup>: trong directive nó bị
                    // preprocessor đổi sang count() của PHP rồi lọt sang đầu ra JS.
                    setMessageLength(event.target.value.length);
                },
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
            styles: [{"type":"code","content":".contact-aside h1 em.s749c6dff { color: var(--cobalt); font-style: normal; }"}],
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
            this.html(`Bcontent1`, "section", parentElement,
                { classes: [{ type: 'static', value: "s749c6dff" }, { type: 'static', value: "contact-grid" }] },
                (parentElement: any) => [
                this.html(`Bcontent11`, "div", parentElement,
                    { classes: [{ type: 'static', value: "s749c6dff" }, { type: 'static', value: "contact-aside" }] },
                    (parentElement: any) => [
                    this.html(`Bcontent111`, "p", parentElement,
                        { classes: [{ type: 'static', value: "s749c6dff" }, { type: 'static', value: "eyebrow" }] },
                        (parentElement: any) => [
                        this.html(`Bcontent1111`, "span", parentElement,
                            { classes: [{ type: 'static', value: "s749c6dff" }] },
                            (parentElement: any) => [
                            this.text('01')
                            ]),
                        this.text(' Contact')
                        ]),
                    this.html(`Bcontent112`, "h1", parentElement,
                        { classes: [{ type: 'static', value: "s749c6dff" }] },
                        (parentElement: any) => [
                        this.text('Bring us the'),
                        this.html(`Bcontent1121`, "br", parentElement, { classes: [{ type: 'static', value: "s749c6dff" }] }),
                        this.html(`Bcontent1122`, "em", parentElement,
                            { classes: [{ type: 'static', value: "s749c6dff" }] },
                            (parentElement: any) => [
                            this.text('difficult part.')
                            ])
                        ]),
                    this.html(`Bcontent113`, "p", parentElement,
                        { classes: [{ type: 'static', value: "s749c6dff" }] },
                        (parentElement: any) => [
                        this.text('Tell us where your Laravel application is fighting the frontend. This form is deliberately client-only for the demo.')
                        ]),
                    this.html(`Bcontent114`, "div", parentElement,
                        { classes: [{ type: 'static', value: "s749c6dff" }, { type: 'static', value: "contact-meta" }] },
                        (parentElement: any) => [
                        this.html(`Bcontent1141`, "span", parentElement,
                            { classes: [{ type: 'static', value: "s749c6dff" }] },
                            (parentElement: any) => [
                            this.text('RESPONSE WINDOW')
                            ]),
                        this.html(`Bcontent1142`, "strong", parentElement,
                            { classes: [{ type: 'static', value: "s749c6dff" }] },
                            (parentElement: any) => [
                            this.text('Usually within 2 working days')
                            ]),
                        this.html(`Bcontent1143`, "span", parentElement,
                            { classes: [{ type: 'static', value: "s749c6dff" }] },
                            (parentElement: any) => [
                            this.text('BASED IN')
                            ]),
                        this.html(`Bcontent1144`, "strong", parentElement,
                            { classes: [{ type: 'static', value: "s749c6dff" }] },
                            (parentElement: any) => [
                            this.text('Ho Chi Minh City · Remote worldwide')
                            ])
                        ])
                    ]),
                this.html(`Bcontent12`, "form", parentElement,
                    { classes: [{ type: 'static', value: "s749c6dff" }, { type: 'static', value: "contact-form" }], events: { submit: [{"handler":"sendContact","params":[() => event]}] } },
                    (parentElement: any) => [
                    this.reactive(`Bcontent12r1`, "if", parentReactive, parentElement, ["sent"], (parentReactive: any, parentElement: any) => {
                        const reactiveContents = [];
                        if (sent) {
                            reactiveContents.push(
                            this.html(`Bcontent12r1k11`, "div", parentElement,
                                { classes: [{ type: 'static', value: "s749c6dff" }, { type: 'static', value: "contact-success" }] },
                                (parentElement: any) => [
                                this.html(`Bcontent12r1k111`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "s749c6dff" }] },
                                    (parentElement: any) => [
                                    this.text('✓')
                                    ]),
                                this.html(`Bcontent12r1k112`, "h2", parentElement,
                                    { classes: [{ type: 'static', value: "s749c6dff" }] },
                                    (parentElement: any) => [
                                    this.text('Message prepared.')
                                    ]),
                                this.html(`Bcontent12r1k113`, "p", parentElement,
                                    { classes: [{ type: 'static', value: "s749c6dff" }] },
                                    (parentElement: any) => [
                                    this.text('The demo stopped before a network request. In production, this is where an API action would take over.')
                                    ]),
                                this.html(`Bcontent12r1k114`, "button", parentElement,
                                    { classes: [{ type: 'static', value: "s749c6dff" }, { type: 'static', value: "text-link" }], attrs: { "type": { type: 'static', value: "button" } }, events: { click: [{"handler":"resetForm","params":[]}] } },
                                    (parentElement: any) => [
                                    this.text('Write another message →')
                                    ])
                                ])
                            );
                        }
                        else {
                            reactiveContents.push(
                            this.html(`Bcontent12r1k21`, "div", parentElement,
                                { classes: [{ type: 'static', value: "s749c6dff" }, { type: 'static', value: "field-row" }] },
                                (parentElement: any) => [
                                this.html(`Bcontent12r1k211`, "label", parentElement,
                                    { classes: [{ type: 'static', value: "s749c6dff" }] },
                                    (parentElement: any) => [
                                    this.html(`Bcontent12r1k2111`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "s749c6dff" }] },
                                        (parentElement: any) => [
                                        this.text('Your name')
                                        ]),
                                    this.html(`Bcontent12r1k2112`, "input", parentElement, { classes: [{ type: 'static', value: "s749c6dff" }], attrs: { "type": { type: 'static', value: "text" }, "placeholder": { type: 'static', value: "Nguyen An" } }, bind: { key: 'name' } })
                                    ]),
                                this.html(`Bcontent12r1k212`, "label", parentElement,
                                    { classes: [{ type: 'static', value: "s749c6dff" }] },
                                    (parentElement: any) => [
                                    this.html(`Bcontent12r1k2121`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "s749c6dff" }] },
                                        (parentElement: any) => [
                                        this.text('Email')
                                        ]),
                                    this.html(`Bcontent12r1k2122`, "input", parentElement, { classes: [{ type: 'static', value: "s749c6dff" }], attrs: { "type": { type: 'static', value: "email" }, "placeholder": { type: 'static', value: "an@company.com" } }, bind: { key: 'email' } })
                                    ])
                                ]),
                            this.reactive(`Bcontent12r1k2r1`, "if", parentReactive, parentElement, ["attempted", "email", "name"], (parentReactive: any, parentElement: any) => {
                                const reactiveContents = [];
                                if (attempted && (!App.Helper.trim(name) || !App.Helper.trim(email))) {
                                    reactiveContents.push(
                                    this.html(`Bcontent12r1k2r1k11`, "p", parentElement,
                                        { classes: [{ type: 'static', value: "s749c6dff" }, { type: 'static', value: "form-error" }] },
                                        (parentElement: any) => [
                                        this.text('Please add both your name and email.')
                                        ])
                                    );
                                }
                                return reactiveContents;
                            }),
                            this.html(`Bcontent12r1k22`, "label", parentElement,
                                { classes: [{ type: 'static', value: "s749c6dff" }] },
                                (parentElement: any) => [
                                this.html(`Bcontent12r1k221`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "s749c6dff" }] },
                                    (parentElement: any) => [
                                    this.text('What should we discuss?')
                                    ]),
                                this.html(`Bcontent12r1k222`, "select", parentElement,
                                    { classes: [{ type: 'static', value: "s749c6dff" }], bind: { key: 'topic' } },
                                    (parentElement: any) => [
                                    this.html(`Bcontent12r1k2221`, "option", parentElement,
                                        { classes: [{ type: 'static', value: "s749c6dff" }] },
                                        (parentElement: any) => [
                                        this.text('Architecture review')
                                        ]),
                                    this.html(`Bcontent12r1k2222`, "option", parentElement,
                                        { classes: [{ type: 'static', value: "s749c6dff" }] },
                                        (parentElement: any) => [
                                        this.text('Hydration migration')
                                        ]),
                                    this.html(`Bcontent12r1k2223`, "option", parentElement,
                                        { classes: [{ type: 'static', value: "s749c6dff" }] },
                                        (parentElement: any) => [
                                        this.text('Compiler integration')
                                        ]),
                                    this.html(`Bcontent12r1k2224`, "option", parentElement,
                                        { classes: [{ type: 'static', value: "s749c6dff" }] },
                                        (parentElement: any) => [
                                        this.text('Performance audit')
                                        ])
                                    ])
                                ]),
                            this.html(`Bcontent12r1k23`, "label", parentElement,
                                { classes: [{ type: 'static', value: "s749c6dff" }] },
                                (parentElement: any) => [
                                this.html(`Bcontent12r1k231`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "s749c6dff" }] },
                                    (parentElement: any) => [
                                    this.text('Context')
                                    ]),
                                this.html(`Bcontent12r1k232`, "textarea", parentElement, { classes: [{ type: 'static', value: "s749c6dff" }], attrs: { "maxlength": { type: 'static', value: "500" }, "placeholder": { type: 'static', value: "What is the application doing today, and where does it become difficult?" } }, events: { input: [{"handler":"trackLength","params":[() => event]}] }, bind: { key: 'message' } }),
                                this.html(`Bcontent12r1k233`, "small", parentElement,
                                    { classes: [{ type: 'static', value: "s749c6dff" }] },
                                    (parentElement: any) => [
                                    this.output(`Bcontent12r1k233o1`, parentElement, true, ["messageLength"], (parentElement: any) => messageLength),
                                    this.text(' / 500')
                                    ])
                                ]),
                            this.reactive(`Bcontent12r1k2r2`, "if", parentReactive, parentElement, ["attempted", "messageLength"], (parentReactive: any, parentElement: any) => {
                                const reactiveContents = [];
                                if (attempted && messageLength < 12) {
                                    reactiveContents.push(
                                    this.html(`Bcontent12r1k2r2k11`, "p", parentElement,
                                        { classes: [{ type: 'static', value: "s749c6dff" }, { type: 'static', value: "form-error" }] },
                                        (parentElement: any) => [
                                        this.text('Give us at least 12 characters of context.')
                                        ])
                                    );
                                }
                                return reactiveContents;
                            }),
                            this.html(`Bcontent12r1k24`, "button", parentElement,
                                { classes: [{ type: 'static', value: "s749c6dff" }, { type: 'static', value: "button" }, { type: 'static', value: "button-primary" }], attrs: { "type": { type: 'static', value: "submit" } } },
                                (parentElement: any) => [
                                this.text('Prepare message '),
                                this.html(`Bcontent12r1k241`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "s749c6dff" }] },
                                    (parentElement: any) => [
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