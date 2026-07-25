import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.home.about';
const __VIEW_NAMESPACE__ = 'web.modules.home.';
const __VIEW_TYPE__ = 'view';
const __VIEW_CONFIG__ = {
    hasSuperView: true,
    viewType: 'view',
    sections: {
        "content":{
            "type":"long",
            "preloader":false,
            "useVars":false,
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



class AboutViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class AboutView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, AboutViewController);
        const App = app("App");
        const __STATE__ = this.__ctrl__.states;
        const {__base__, __layout__, __page__, __component__, __template__, __context__, __partial__, __system__, __env = {}, __helper = {}} = systemData;
        const __VIEW_ID__ = __data__.__SSR_VIEW_ID__ || App.View.generateViewId();

        const useState = (value) => {
            return __STATE__.__useState(value);
        };
        const updateRealState = (state) => {
            __STATE__.__.updateRealState(state);
        };

        const lockUpdateRealState = () => {
            __STATE__.__.lockUpdateRealState();
        };
        const updateStateByKey = (key, state) => {
            __STATE__.__.updateStateByKey(key, state);
        };


        const __UPDATE_DATA_TRAIT__ = {};
        const set$activeValue = __STATE__.__.register('activeValue');
        let activeValue = null;
        const setActiveValue = (state) => {
            activeValue = state;
            set$activeValue(state);
        };
        __STATE__.__.setters.setActiveValue = setActiveValue;
        __STATE__.__.setters.activeValue = setActiveValue;
        const update$activeValue = (value) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('activeValue', value);
                activeValue = value;
            }
        };
        const __VARIABLE_LIST__ = [];


        this.__ctrl__.setUserDefinedConfig({

        });

        this.__ctrl__.setup({
            superView: `${__layout__+"public"}`,
            subscribe: true,
            fetch: null,
            data: __data__,
            viewId: __VIEW_ID__,
            path: __VIEW_PATH__,
            scripts: [],
            styles: [{"type":"code","scoped":true,"content":".page-intro h1 em { color: var(--coral); font-style: normal; }"}],
            resources: [],
            commitConstructorData: function() {
                // Then update states from data
                update$activeValue(0);
                // Finally lock state updates
                lockUpdateRealState();
            },
            updateVariableData: function(data) {
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
            updateVariableItemData: function(key, value) {
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
            this.block('block-content', 'content', (parentElement) => [
            this.html(`b4052a35`, "section", parentElement,
                { classes: [{ type: 'static', value: "page-intro" }, { type: 'static', value: "page-intro-split" }] },
                (parentElement) => [
                this.html(`90a6e493`, "div", parentElement, {}, (parentElement) => [
                    this.html(`f515bf66`, "p", parentElement,
                        { classes: [{ type: 'static', value: "eyebrow" }] },
                        (parentElement) => [
                        this.html(`e2f86203`, "span", parentElement, {}, (parentElement) => [
                            this.text('01')
                        ]),
                        this.text(' About Saola')
                        ]),
                    this.html(`9b0938cb`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Software should feel'),
                        this.html(`f7127348`, "br", parentElement, {}),
                        this.html(`d4f4199d`, "em", parentElement, {}, (parentElement) => [
                            this.text('quietly capable.')
                        ])
                    ])
                ]),
                this.html(`9f45c023`, "p", parentElement, {}, (parentElement) => [
                    this.text('We build for teams who want Laravel\'s reliability without giving up the immediacy people expect from modern applications.')
                ])
                ]),
            this.html(`8aa0772c`, "section", parentElement,
                { classes: [{ type: 'static', value: "manifesto-grid" }] },
                (parentElement) => [
                this.html(`301a68fc`, "div", parentElement,
                    { classes: [{ type: 'static', value: "manifesto-number" }] },
                    (parentElement) => [
                    this.text('01—03')
                    ]),
                this.html(`7f8af112`, "div", parentElement,
                    { classes: [{ type: 'static', value: "value-accordion" }] },
                    (parentElement) => [
                    this.html(`1f6b5560`, "article", parentElement,
                        { classes: [{ type: 'static', value: "value-item" }, { type: 'binding', value: "open", factory: () => activeValue === 0, stateKeys: ["activeValue"] }] },
                        (parentElement) => [
                        this.html(`ff5e7d64`, "button", parentElement,
                            { events: { click: [(event) => setActiveValue(0)] } },
                            (parentElement) => [
                            this.html(`87b2c1c6`, "span", parentElement, {}, (parentElement) => [
                                this.text('01')
                            ]),
                            this.html(`772aefab`, "strong", parentElement, {}, (parentElement) => [
                                this.text('Server truth')
                            ]),
                            this.html(`83d2d00c`, "i", parentElement, {}, (parentElement) => [
                                this.text('+')
                            ])
                            ]),
                        this.reactive(`787d96d6`, "if", parentReactive, parentElement, ["activeValue"], (parentReactive, parentElement) => {
                            const reactiveContents = [];
                            if (activeValue === 0) {
                                reactiveContents.push(
                                this.html(`5bd50f04`, "p", parentElement, {}, (parentElement) => [
                                    this.text('The first response must be complete, accessible and compatible with Blade. Hydration is an enhancement, not a rescue operation.')
                                ])
                                );
                            }
                            return reactiveContents;
                        })
                        ]),
                    this.html(`e6209cd3`, "article", parentElement,
                        { classes: [{ type: 'static', value: "value-item" }, { type: 'binding', value: "open", factory: () => activeValue === 1, stateKeys: ["activeValue"] }] },
                        (parentElement) => [
                        this.html(`d9283f12`, "button", parentElement,
                            { events: { click: [(event) => setActiveValue(1)] } },
                            (parentElement) => [
                            this.html(`6a26ad34`, "span", parentElement, {}, (parentElement) => [
                                this.text('02')
                            ]),
                            this.html(`54e0b6eb`, "strong", parentElement, {}, (parentElement) => [
                                this.text('Small contracts')
                            ]),
                            this.html(`b0246e5b`, "i", parentElement, {}, (parentElement) => [
                                this.text('+')
                            ])
                            ]),
                        this.reactive(`9eb9af90`, "if", parentReactive, parentElement, ["activeValue"], (parentReactive, parentElement) => {
                            const reactiveContents = [];
                            if (activeValue === 1) {
                                reactiveContents.push(
                                this.html(`4606aa95`, "p", parentElement, {}, (parentElement) => [
                                    this.text('Views describe UI, layouts provide durable structure, and components own focused behavior. Each layer has one job.')
                                ])
                                );
                            }
                            return reactiveContents;
                        })
                        ]),
                    this.html(`d548dd48`, "article", parentElement,
                        { classes: [{ type: 'static', value: "value-item" }, { type: 'binding', value: "open", factory: () => activeValue === 2, stateKeys: ["activeValue"] }] },
                        (parentElement) => [
                        this.html(`237c0a46`, "button", parentElement,
                            { events: { click: [(event) => setActiveValue(2)] } },
                            (parentElement) => [
                            this.html(`a953a291`, "span", parentElement, {}, (parentElement) => [
                                this.text('03')
                            ]),
                            this.html(`cbd31918`, "strong", parentElement, {}, (parentElement) => [
                                this.text('Visible lifecycle')
                            ]),
                            this.html(`ee477f05`, "i", parentElement, {}, (parentElement) => [
                                this.text('+')
                            ])
                            ]),
                        this.reactive(`6376662d`, "if", parentReactive, parentElement, ["activeValue"], (parentReactive, parentElement) => {
                            const reactiveContents = [];
                            if (activeValue === 2) {
                                reactiveContents.push(
                                this.html(`bcf58435`, "p", parentElement, {}, (parentElement) => [
                                    this.text('Mount, pause, resume and destroy are explicit so navigation, caching and resource cleanup remain understandable.')
                                ])
                                );
                            }
                            return reactiveContents;
                        })
                        ])
                    ])
                ]),
            this.html(`6c26f9b7`, "section", parentElement,
                { classes: [{ type: 'static', value: "quote-panel" }] },
                (parentElement) => [
                this.html(`d2bc3963`, "p", parentElement, {}, (parentElement) => [
                    this.text('“A framework earns trust when its runtime behavior matches the structure developers see in the source.”')
                ]),
                this.html(`b19e2c09`, "span", parentElement, {}, (parentElement) => [
                    this.text('SAOLA DESIGN PRINCIPLE / 2026')
                ])
                ]),
            this.html(`4e212027`, "section", parentElement,
                { classes: [{ type: 'static', value: "closing-cta" }] },
                (parentElement) => [
                this.html(`8ef866a8`, "h2", parentElement, {}, (parentElement) => [
                    this.text('See the model in motion.')
                ]),
                this.html(`8f1c0163`, "a", parentElement,
                    { classes: [{ type: 'static', value: "button" }, { type: 'static', value: "button-primary" }], attrs: { "href": { type: 'static', value: "/todo-list" } } },
                    (parentElement) => [
                    this.text('Open interactive demo '),
                    this.html(`4f37196e`, "span", parentElement, {}, (parentElement) => [
                        this.text('→')
                    ])
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
export function WebModulesHomeAbout(__data__ = {}, systemData = {}) {
    return new AboutView(__data__, systemData);
}
export default WebModulesHomeAbout;
