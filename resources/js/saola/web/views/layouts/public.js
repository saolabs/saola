import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.layouts.public';
const __VIEW_NAMESPACE__ = 'web.layouts.';
const __VIEW_TYPE__ = 'view';
const __VIEW_CONFIG__ = {
    hasSuperView: true,
    viewType: 'view',
    sections: {
        "shell":{
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
    renderLongSections: ["shell"],
    renderSections: [],
    prerenderSections: []
};



class PublicViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class PublicView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, PublicViewController);
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
        const __VARIABLE_LIST__ = [];


        this.__ctrl__.setUserDefinedConfig({

        });

        this.__ctrl__.setup({
            superView: `${__layout__+"base"}`,
            subscribe: true,
            fetch: null,
            data: __data__,
            viewId: __VIEW_ID__,
            path: __VIEW_PATH__,
            scripts: [],
            styles: [{"type":"href","href":"/static/saola/demo-site.css"}],
            resources: [{"tag":"link","uuid":"link-0","attrs":{"rel":"stylesheet","href":"/static/saola/demo-site.css"}}],
            commitConstructorData: function() {
                // Then update states from data

                // Finally lock state updates

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
            this.block('block-shell', 'shell', (parentElement) => [
            this.html(`c8b05ef4`, "div", parentElement,
                { classes: [{ type: 'static', value: "site-frame" }] },
                (parentElement) => [
                this.html(`9f2695cc`, "header", parentElement,
                    { classes: [{ type: 'static', value: "site-header" }] },
                    (parentElement) => [
                    this.html(`138f1d60`, "a", parentElement,
                        { classes: [{ type: 'static', value: "brand" }], attrs: { "href": { type: 'static', value: "/" }, "aria-label": { type: 'static', value: "Saola Focus home" } } },
                        (parentElement) => [
                        this.html(`34d419ad`, "span", parentElement,
                            { classes: [{ type: 'static', value: "brand-mark" }] },
                            (parentElement) => [
                            this.text('S')
                            ]),
                        this.html(`7ff06320`, "span", parentElement, {}, (parentElement) => [
                            this.html(`6cf07da1`, "strong", parentElement, {}, (parentElement) => [
                                this.text('SAOLA')
                            ]),
                            this.html(`2569eb56`, "small", parentElement, {}, (parentElement) => [
                                this.text('FOCUS SYSTEM')
                            ])
                        ])
                        ]),
                    this.html(`18b494db`, "nav", parentElement,
                        { classes: [{ type: 'static', value: "site-nav" }], attrs: { "aria-label": { type: 'static', value: "Main navigation" } } },
                        (parentElement) => [
                        this.html(`52889c2e`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/" } } },
                            (parentElement) => [
                            this.text('Home')
                            ]),
                        this.html(`eba69cb0`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/about" } } },
                            (parentElement) => [
                            this.text('About')
                            ]),
                        this.html(`9b32b734`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/contact" } } },
                            (parentElement) => [
                            this.text('Contact')
                            ]),
                        this.html(`a2ce2905`, "a", parentElement,
                            { classes: [{ type: 'static', value: "nav-cta" }], attrs: { "href": { type: 'static', value: "/todo-list" } } },
                            (parentElement) => [
                            this.text('Open workspace '),
                            this.html(`8409b33b`, "span", parentElement, {}, (parentElement) => [
                                this.text('↗')
                            ])
                            ])
                        ])
                    ]),
                this.html(`045faade`, "main", parentElement,
                    { classes: [{ type: 'static', value: "site-main" }] },
                    (parentElement) => [
                    this.blockOutlet(`20269ffe`, "content", parentElement)
                    ]),
                this.html(`78151b5a`, "footer", parentElement,
                    { classes: [{ type: 'static', value: "site-footer" }] },
                    (parentElement) => [
                    this.html(`78967ff6`, "div", parentElement, {}, (parentElement) => [
                        this.html(`f2453137`, "span", parentElement,
                            { classes: [{ type: 'static', value: "brand-mark" }, { type: 'static', value: "brand-mark-small" }] },
                            (parentElement) => [
                            this.text('S')
                            ]),
                        this.html(`891dca6b`, "p", parentElement, {}, (parentElement) => [
                            this.text('A hydration-first demonstration built with Laravel, Blade and Saola views.')
                        ])
                    ]),
                    this.html(`0a88c436`, "nav", parentElement,
                        { attrs: { "aria-label": { type: 'static', value: "Legal navigation" } } },
                        (parentElement) => [
                        this.html(`4534b347`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/privacy" } } },
                            (parentElement) => [
                            this.text('Privacy')
                            ]),
                        this.html(`930b2d8d`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/terms" } } },
                            (parentElement) => [
                            this.text('Terms')
                            ]),
                        this.html(`1ccde8e3`, "span", parentElement, {}, (parentElement) => [
                            this.text('© 2026 SaoLabs')
                        ])
                        ])
                    ])
                ])
            ]);
            this.superViewPath = `${__layout__+"base"}`;
            return this.extendView(this.superViewPath, {});
            }
        });

    }
}

// Export factory function
export function WebLayoutsPublic(__data__ = {}, systemData = {}) {
    return new PublicView(__data__, systemData);
}
export default WebLayoutsPublic;
