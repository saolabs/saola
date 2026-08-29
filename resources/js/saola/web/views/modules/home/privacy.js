import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.home.privacy';
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



class PrivacyViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class PrivacyView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, PrivacyViewController);
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
        const set$activeSection = __STATE__.__.register('activeSection');
        let activeSection = 'collection';
        const setActiveSection = (state) => {
            activeSection = state;
            set$activeSection(state);
        };
        __STATE__.__.setters.setActiveSection = setActiveSection;
        __STATE__.__.setters.activeSection = setActiveSection;
        const update$activeSection = (value) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('activeSection', value);
                activeSection = value;
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
                update$activeSection('collection');
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
                { classes: [{ type: 'static', value: "legal-hero" }] },
                (parentElement) => [
                this.html(`Bcontent11`, "p", parentElement,
                    { classes: [{ type: 'static', value: "eyebrow" }] },
                    (parentElement) => [
                    this.html(`Bcontent111`, "span", parentElement, {}, (parentElement) => [
                        this.text('01')
                    ]),
                    this.text(' Legal / Privacy')
                    ]),
                this.html(`Bcontent12`, "h1", parentElement, {}, (parentElement) => [
                    this.text('Privacy in'),
                    this.html(`Bcontent121`, "br", parentElement, {}),
                    this.text('plain language.')
                ]),
                this.html(`Bcontent13`, "p", parentElement, {}, (parentElement) => [
                    this.text('Last updated July 21, 2026 · Demo policy')
                ])
                ]),
            this.html(`Bcontent2`, "section", parentElement,
                { classes: [{ type: 'static', value: "legal-layout" }] },
                (parentElement) => [
                this.html(`Bcontent21`, "aside", parentElement, {}, (parentElement) => [
                    this.html(`Bcontent211`, "button", parentElement,
                        { classes: [{ type: 'binding', value: "active", factory: () => activeSection === 'collection', stateKeys: ["activeSection"] }], events: { click: [(event) => setActiveSection('collection')] } },
                        (parentElement) => [
                        this.text('01 Information')
                        ]),
                    this.html(`Bcontent212`, "button", parentElement,
                        { classes: [{ type: 'binding', value: "active", factory: () => activeSection === 'use', stateKeys: ["activeSection"] }], events: { click: [(event) => setActiveSection('use')] } },
                        (parentElement) => [
                        this.text('02 How we use it')
                        ]),
                    this.html(`Bcontent213`, "button", parentElement,
                        { classes: [{ type: 'binding', value: "active", factory: () => activeSection === 'control', stateKeys: ["activeSection"] }], events: { click: [(event) => setActiveSection('control')] } },
                        (parentElement) => [
                        this.text('03 Your control')
                        ])
                ]),
                this.html(`Bcontent22`, "div", parentElement,
                    { classes: [{ type: 'static', value: "legal-copy" }] },
                    (parentElement) => [
                    this.reactive(`Bcontent22r1`, "if", parentReactive, parentElement, ["activeSection"], (parentReactive, parentElement) => {
                        const reactiveContents = [];
                        if (activeSection === 'collection') {
                            reactiveContents.push(
                            this.html(`Bcontent22r1k11`, "article", parentElement, {}, (parentElement) => [
                                this.html(`Bcontent22r1k111`, "span", parentElement, {}, (parentElement) => [
                                    this.text('01')
                                ]),
                                this.html(`Bcontent22r1k112`, "h2", parentElement, {}, (parentElement) => [
                                    this.text('Information we collect')
                                ]),
                                this.html(`Bcontent22r1k113`, "p", parentElement, {}, (parentElement) => [
                                    this.text('This demonstration stores Todo items only in the active client view. The contact and newsletter forms do not send data to a server.')
                                ]),
                                this.html(`Bcontent22r1k114`, "p", parentElement, {}, (parentElement) => [
                                    this.text('In a production application, data collection should be stated next to the interaction that causes it—not hidden in a long policy.')
                                ])
                            ])
                            );
                        }
                        else if (activeSection === 'use') {
                            reactiveContents.push(
                            this.html(`Bcontent22r1k21`, "article", parentElement, {}, (parentElement) => [
                                this.html(`Bcontent22r1k211`, "span", parentElement, {}, (parentElement) => [
                                    this.text('02')
                                ]),
                                this.html(`Bcontent22r1k212`, "h2", parentElement, {}, (parentElement) => [
                                    this.text('How information is used')
                                ]),
                                this.html(`Bcontent22r1k213`, "p", parentElement, {}, (parentElement) => [
                                    this.text('Saola itself does not prescribe analytics or tracking. Applications decide which services to use and must disclose those decisions.')
                                ]),
                                this.html(`Bcontent22r1k214`, "p", parentElement, {}, (parentElement) => [
                                    this.text('Hydration reuses the server-rendered DOM; it does not require duplicating personal data in a second hidden document.')
                                ])
                            ])
                            );
                        }
                        else {
                            reactiveContents.push(
                            this.html(`Bcontent22r1k31`, "article", parentElement, {}, (parentElement) => [
                                this.html(`Bcontent22r1k311`, "span", parentElement, {}, (parentElement) => [
                                    this.text('03')
                                ]),
                                this.html(`Bcontent22r1k312`, "h2", parentElement, {}, (parentElement) => [
                                    this.text('Your control')
                                ]),
                                this.html(`Bcontent22r1k313`, "p", parentElement, {}, (parentElement) => [
                                    this.text('People should be able to inspect, correct and remove stored information through clear product controls.')
                                ]),
                                this.html(`Bcontent22r1k314`, "p", parentElement, {}, (parentElement) => [
                                    this.text('For this demo, leaving the Todo route destroys its page instance unless page caching is explicitly enabled by the application.')
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
export function WebModulesHomePrivacy(__data__ = {}, systemData = {}) {
    return new PrivacyView(__data__, systemData);
}
export default WebModulesHomePrivacy;