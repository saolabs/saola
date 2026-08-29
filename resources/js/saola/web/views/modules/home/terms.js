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
        let accepted = false;
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
        let expanded = 1;
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
            this.html(`Bcontent1`, "section", parentElement,
                { classes: [{ type: 'static', value: "legal-hero" }, { type: 'static', value: "legal-hero-compact" }] },
                (parentElement) => [
                this.html(`Bcontent11`, "p", parentElement,
                    { classes: [{ type: 'static', value: "eyebrow" }] },
                    (parentElement) => [
                    this.html(`Bcontent111`, "span", parentElement, {}, (parentElement) => [
                        this.text('01')
                    ]),
                    this.text(' Legal / Terms')
                    ]),
                this.html(`Bcontent12`, "h1", parentElement, {}, (parentElement) => [
                    this.text('Terms for a'),
                    this.html(`Bcontent121`, "br", parentElement, {}),
                    this.text('working prototype.')
                ]),
                this.html(`Bcontent13`, "p", parentElement, {}, (parentElement) => [
                    this.text('This demo explains behavior; it is not a production service agreement.')
                ])
                ]),
            this.html(`Bcontent2`, "section", parentElement,
                { classes: [{ type: 'static', value: "terms-list" }] },
                (parentElement) => [
                this.html(`Bcontent21`, "article", parentElement,
                    { classes: [{ type: 'binding', value: "open", factory: () => expanded === 1, stateKeys: ["expanded"] }] },
                    (parentElement) => [
                    this.html(`Bcontent211`, "button", parentElement,
                        { events: { click: [(event) => setExpanded(expanded === 1 ? 0 : 1)] } },
                        (parentElement) => [
                        this.html(`Bcontent2111`, "span", parentElement, {}, (parentElement) => [
                            this.text('01')
                        ]),
                        this.html(`Bcontent2112`, "strong", parentElement, {}, (parentElement) => [
                            this.text('Purpose of this site')
                        ]),
                        this.html(`Bcontent2113`, "i", parentElement, {}, (parentElement) => [
                            this.text('+')
                        ])
                        ]),
                    this.reactive(`Bcontent21r1`, "if", parentReactive, parentElement, ["expanded"], (parentReactive, parentElement) => {
                        const reactiveContents = [];
                        if (expanded === 1) {
                            reactiveContents.push(
                            this.html(`Bcontent21r1k11`, "p", parentElement, {}, (parentElement) => [
                                this.text('The pages exist to exercise Saola route navigation, nested layouts, reactive state, scoped styling and runtime asset cleanup.')
                            ])
                            );
                        }
                        return reactiveContents;
                    })
                    ]),
                this.html(`Bcontent22`, "article", parentElement,
                    { classes: [{ type: 'binding', value: "open", factory: () => expanded === 2, stateKeys: ["expanded"] }] },
                    (parentElement) => [
                    this.html(`Bcontent221`, "button", parentElement,
                        { events: { click: [(event) => setExpanded(expanded === 2 ? 0 : 2)] } },
                        (parentElement) => [
                        this.html(`Bcontent2211`, "span", parentElement, {}, (parentElement) => [
                            this.text('02')
                        ]),
                        this.html(`Bcontent2212`, "strong", parentElement, {}, (parentElement) => [
                            this.text('Data and persistence')
                        ]),
                        this.html(`Bcontent2213`, "i", parentElement, {}, (parentElement) => [
                            this.text('+')
                        ])
                        ]),
                    this.reactive(`Bcontent22r1`, "if", parentReactive, parentElement, ["expanded"], (parentReactive, parentElement) => {
                        const reactiveContents = [];
                        if (expanded === 2) {
                            reactiveContents.push(
                            this.html(`Bcontent22r1k11`, "p", parentElement, {}, (parentElement) => [
                                this.text('Interactions are intentionally local. Refreshing the browser resets task and form state because no persistence service is connected.')
                            ])
                            );
                        }
                        return reactiveContents;
                    })
                    ]),
                this.html(`Bcontent23`, "article", parentElement,
                    { classes: [{ type: 'binding', value: "open", factory: () => expanded === 3, stateKeys: ["expanded"] }] },
                    (parentElement) => [
                    this.html(`Bcontent231`, "button", parentElement,
                        { events: { click: [(event) => setExpanded(expanded === 3 ? 0 : 3)] } },
                        (parentElement) => [
                        this.html(`Bcontent2311`, "span", parentElement, {}, (parentElement) => [
                            this.text('03')
                        ]),
                        this.html(`Bcontent2312`, "strong", parentElement, {}, (parentElement) => [
                            this.text('No warranty')
                        ]),
                        this.html(`Bcontent2313`, "i", parentElement, {}, (parentElement) => [
                            this.text('+')
                        ])
                        ]),
                    this.reactive(`Bcontent23r1`, "if", parentReactive, parentElement, ["expanded"], (parentReactive, parentElement) => {
                        const reactiveContents = [];
                        if (expanded === 3) {
                            reactiveContents.push(
                            this.html(`Bcontent23r1k11`, "p", parentElement, {}, (parentElement) => [
                                this.text('This interface is a test fixture for the evolving platform and should be evaluated as development software.')
                            ])
                            );
                        }
                        return reactiveContents;
                    })
                    ])
                ]),
            this.html(`Bcontent3`, "section", parentElement,
                { classes: [{ type: 'static', value: "accept-panel" }] },
                (parentElement) => [
                this.html(`Bcontent31`, "label", parentElement, {}, (parentElement) => [
                    this.html(`Bcontent311`, "input", parentElement, { attrs: { "type": { type: 'static', value: "checkbox" } }, bind: { key: 'accepted' } }),
                    this.html(`Bcontent312`, "span", parentElement, {}),
                    this.html(`Bcontent313`, "p", parentElement, {}, (parentElement) => [
                        this.html(`Bcontent3131`, "strong", parentElement, {}, (parentElement) => [
                            this.text('I understand this is a demonstration.')
                        ]),
                        this.html(`Bcontent3132`, "small", parentElement, {}, (parentElement) => [
                            this.text('Your choice is reactive and local to this view.')
                        ])
                    ])
                ]),
                this.html(`Bcontent32`, "button", parentElement,
                    { classes: [{ type: 'static', value: "button" }, { type: 'static', value: "button-primary" }], props: { "disabled": { type: 'binding', factory: () => !accepted, stateKeys: ["accepted"] } } },
                    (parentElement) => [
                    this.text('Continue '),
                    this.html(`Bcontent321`, "span", parentElement, {}, (parentElement) => [
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