import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.home.terms';
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



class TermsViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class TermsView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, TermsViewController);
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
        const set$accepted = __STATE__.__.register('accepted');
        let accepted = null;
        const setAccepted = (state) => {
            accepted = state;
            set$accepted(state);
        };
        __STATE__.__.setters.setAccepted = setAccepted;
        __STATE__.__.setters.accepted = setAccepted;
        const update$accepted = (value) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('accepted', value);
                accepted = value;
            }
        };
        const set$expanded = __STATE__.__.register('expanded');
        let expanded = null;
        const setExpanded = (state) => {
            expanded = state;
            set$expanded(state);
        };
        __STATE__.__.setters.setExpanded = setExpanded;
        __STATE__.__.setters.expanded = setExpanded;
        const update$expanded = (value) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('expanded', value);
                expanded = value;
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
            styles: [],
            resources: [],
            commitConstructorData: function() {
                // Then update states from data
                update$accepted(false);
                update$expanded(1);
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
                { classes: [{ type: 'static', value: "legal-hero" }, { type: 'static', value: "legal-hero-compact" }] },
                (parentElement) => [
                this.html(`82ed8433`, "p", parentElement,
                    { classes: [{ type: 'static', value: "eyebrow" }] },
                    (parentElement) => [
                    this.html(`4cd48692`, "span", parentElement, {}, (parentElement) => [
                        this.text('01')
                    ]),
                    this.text(' Legal / Terms')
                    ]),
                this.html(`7342b39f`, "h1", parentElement, {}, (parentElement) => [
                    this.text('Terms for a'),
                    this.html(`56049c15`, "br", parentElement, {}),
                    this.text('working prototype.')
                ]),
                this.html(`d9cbd0b2`, "p", parentElement, {}, (parentElement) => [
                    this.text('This demo explains behavior; it is not a production service agreement.')
                ])
                ]),
            this.html(`8aa0772c`, "section", parentElement,
                { classes: [{ type: 'static', value: "terms-list" }] },
                (parentElement) => [
                this.html(`7af0c8fd`, "article", parentElement,
                    { classes: [{ type: 'binding', value: "open", factory: () => expanded === 1, stateKeys: ["expanded"] }] },
                    (parentElement) => [
                    this.html(`0ff23b85`, "button", parentElement,
                        { events: { click: [(event) => setExpanded(expanded === 1 ? 0 : 1)] } },
                        (parentElement) => [
                        this.html(`6bd41432`, "span", parentElement, {}, (parentElement) => [
                            this.text('01')
                        ]),
                        this.html(`e4d697bf`, "strong", parentElement, {}, (parentElement) => [
                            this.text('Purpose of this site')
                        ]),
                        this.html(`8f623436`, "i", parentElement, {}, (parentElement) => [
                            this.text('+')
                        ])
                        ]),
                    this.reactive(`38f688a4`, "if", parentReactive, parentElement, ["expanded"], (parentReactive, parentElement) => {
                        const reactiveContents = [];
                        if (expanded === 1) {
                            reactiveContents.push(
                            this.html(`4b0e1792`, "p", parentElement, {}, (parentElement) => [
                                this.text('The pages exist to exercise Saola route navigation, nested layouts, reactive state, scoped styling and runtime asset cleanup.')
                            ])
                            );
                        }
                        return reactiveContents;
                    })
                    ]),
                this.html(`c49c81c5`, "article", parentElement,
                    { classes: [{ type: 'binding', value: "open", factory: () => expanded === 2, stateKeys: ["expanded"] }] },
                    (parentElement) => [
                    this.html(`980dd6c5`, "button", parentElement,
                        { events: { click: [(event) => setExpanded(expanded === 2 ? 0 : 2)] } },
                        (parentElement) => [
                        this.html(`808e3301`, "span", parentElement, {}, (parentElement) => [
                            this.text('02')
                        ]),
                        this.html(`2afb8a53`, "strong", parentElement, {}, (parentElement) => [
                            this.text('Data and persistence')
                        ]),
                        this.html(`1d8f0459`, "i", parentElement, {}, (parentElement) => [
                            this.text('+')
                        ])
                        ]),
                    this.reactive(`faf8dd77`, "if", parentReactive, parentElement, ["expanded"], (parentReactive, parentElement) => {
                        const reactiveContents = [];
                        if (expanded === 2) {
                            reactiveContents.push(
                            this.html(`f8b8bb83`, "p", parentElement, {}, (parentElement) => [
                                this.text('Interactions are intentionally local. Refreshing the browser resets task and form state because no persistence service is connected.')
                            ])
                            );
                        }
                        return reactiveContents;
                    })
                    ]),
                this.html(`7f3d8652`, "article", parentElement,
                    { classes: [{ type: 'binding', value: "open", factory: () => expanded === 3, stateKeys: ["expanded"] }] },
                    (parentElement) => [
                    this.html(`69001fbb`, "button", parentElement,
                        { events: { click: [(event) => setExpanded(expanded === 3 ? 0 : 3)] } },
                        (parentElement) => [
                        this.html(`5b4c5373`, "span", parentElement, {}, (parentElement) => [
                            this.text('03')
                        ]),
                        this.html(`e445b6b5`, "strong", parentElement, {}, (parentElement) => [
                            this.text('No warranty')
                        ]),
                        this.html(`2aab0d20`, "i", parentElement, {}, (parentElement) => [
                            this.text('+')
                        ])
                        ]),
                    this.reactive(`5827bac7`, "if", parentReactive, parentElement, ["expanded"], (parentReactive, parentElement) => {
                        const reactiveContents = [];
                        if (expanded === 3) {
                            reactiveContents.push(
                            this.html(`02a4dc4b`, "p", parentElement, {}, (parentElement) => [
                                this.text('This interface is a test fixture for the evolving platform and should be evaluated as development software.')
                            ])
                            );
                        }
                        return reactiveContents;
                    })
                    ])
                ]),
            this.html(`6c26f9b7`, "section", parentElement,
                { classes: [{ type: 'static', value: "accept-panel" }] },
                (parentElement) => [
                this.html(`831b41c7`, "label", parentElement, {}, (parentElement) => [
                    this.html(`5071e598`, "input", parentElement, { attrs: { "type": { type: 'static', value: "checkbox" } }, bind: { key: 'accepted' } }),
                    this.html(`2348d881`, "span", parentElement, {}),
                    this.html(`d052a684`, "p", parentElement, {}, (parentElement) => [
                        this.html(`0de7eff6`, "strong", parentElement, {}, (parentElement) => [
                            this.text('I understand this is a demonstration.')
                        ]),
                        this.html(`c0f3cdcb`, "small", parentElement, {}, (parentElement) => [
                            this.text('Your choice is reactive and local to this view.')
                        ])
                    ])
                ]),
                this.html(`97f4c8ab`, "button", parentElement,
                    { classes: [{ type: 'static', value: "button" }, { type: 'static', value: "button-primary" }], props: { "disabled": { type: 'binding', factory: () => !accepted, stateKeys: ["accepted"] } } },
                    (parentElement) => [
                    this.text('Continue '),
                    this.html(`bb0e403c`, "span", parentElement, {}, (parentElement) => [
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
export function WebModulesHomeTerms(__data__ = {}, systemData = {}) {
    return new TermsView(__data__, systemData);
}
export default WebModulesHomeTerms;
