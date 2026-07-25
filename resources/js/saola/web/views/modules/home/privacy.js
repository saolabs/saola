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
        let activeSection = null;
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
            this.html(`b4052a35`, "section", parentElement,
                { classes: [{ type: 'static', value: "legal-hero" }] },
                (parentElement) => [
                this.html(`82ed8433`, "p", parentElement,
                    { classes: [{ type: 'static', value: "eyebrow" }] },
                    (parentElement) => [
                    this.html(`4cd48692`, "span", parentElement, {}, (parentElement) => [
                        this.text('01')
                    ]),
                    this.text(' Legal / Privacy')
                    ]),
                this.html(`7342b39f`, "h1", parentElement, {}, (parentElement) => [
                    this.text('Privacy in'),
                    this.html(`56049c15`, "br", parentElement, {}),
                    this.text('plain language.')
                ]),
                this.html(`d9cbd0b2`, "p", parentElement, {}, (parentElement) => [
                    this.text('Last updated July 21, 2026 · Demo policy')
                ])
                ]),
            this.html(`8aa0772c`, "section", parentElement,
                { classes: [{ type: 'static', value: "legal-layout" }] },
                (parentElement) => [
                this.html(`aa1e3cea`, "aside", parentElement, {}, (parentElement) => [
                    this.html(`4f420810`, "button", parentElement,
                        { classes: [{ type: 'binding', value: "active", factory: () => activeSection === 'collection', stateKeys: ["activeSection"] }], events: { click: [(event) => setActiveSection('collection')] } },
                        (parentElement) => [
                        this.text('01 Information')
                        ]),
                    this.html(`9fab04eb`, "button", parentElement,
                        { classes: [{ type: 'binding', value: "active", factory: () => activeSection === 'use', stateKeys: ["activeSection"] }], events: { click: [(event) => setActiveSection('use')] } },
                        (parentElement) => [
                        this.text('02 How we use it')
                        ]),
                    this.html(`56645b34`, "button", parentElement,
                        { classes: [{ type: 'binding', value: "active", factory: () => activeSection === 'control', stateKeys: ["activeSection"] }], events: { click: [(event) => setActiveSection('control')] } },
                        (parentElement) => [
                        this.text('03 Your control')
                        ])
                ]),
                this.html(`7f8af112`, "div", parentElement,
                    { classes: [{ type: 'static', value: "legal-copy" }] },
                    (parentElement) => [
                    this.reactive(`94d6f85f`, "if", parentReactive, parentElement, ["activeSection"], (parentReactive, parentElement) => {
                        const reactiveContents = [];
                        if (activeSection === 'collection') {
                            reactiveContents.push(
                            this.html(`e41b7cec`, "article", parentElement, {}, (parentElement) => [
                                this.html(`a6338d4c`, "span", parentElement, {}, (parentElement) => [
                                    this.text('01')
                                ]),
                                this.html(`5aafe843`, "h2", parentElement, {}, (parentElement) => [
                                    this.text('Information we collect')
                                ]),
                                this.html(`a43ac34c`, "p", parentElement, {}, (parentElement) => [
                                    this.text('This demonstration stores Todo items only in the active client view. The contact and newsletter forms do not send data to a server.')
                                ]),
                                this.html(`a744fbd8`, "p", parentElement, {}, (parentElement) => [
                                    this.text('In a production application, data collection should be stated next to the interaction that causes it—not hidden in a long policy.')
                                ])
                            ])
                            );
                        }
                        else if (activeSection === 'use') {
                            reactiveContents.push(
                            this.html(`35c82bab`, "article", parentElement, {}, (parentElement) => [
                                this.html(`be2aca1f`, "span", parentElement, {}, (parentElement) => [
                                    this.text('02')
                                ]),
                                this.html(`6087e966`, "h2", parentElement, {}, (parentElement) => [
                                    this.text('How information is used')
                                ]),
                                this.html(`11c41a8b`, "p", parentElement, {}, (parentElement) => [
                                    this.text('Saola itself does not prescribe analytics or tracking. Applications decide which services to use and must disclose those decisions.')
                                ]),
                                this.html(`7215a392`, "p", parentElement, {}, (parentElement) => [
                                    this.text('Hydration reuses the server-rendered DOM; it does not require duplicating personal data in a second hidden document.')
                                ])
                            ])
                            );
                        }
                        else {
                            reactiveContents.push(
                            this.html(`99c54da6`, "article", parentElement, {}, (parentElement) => [
                                this.html(`549ef40c`, "span", parentElement, {}, (parentElement) => [
                                    this.text('03')
                                ]),
                                this.html(`f03d1522`, "h2", parentElement, {}, (parentElement) => [
                                    this.text('Your control')
                                ]),
                                this.html(`b02b3f77`, "p", parentElement, {}, (parentElement) => [
                                    this.text('People should be able to inspect, correct and remove stored information through clear product controls.')
                                ]),
                                this.html(`ebe51929`, "p", parentElement, {}, (parentElement) => [
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
