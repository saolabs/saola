import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.layouts.workspace';
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



class WorkspaceViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class WorkspaceView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, WorkspaceViewController);
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
                { classes: [{ type: 'static', value: "workspace-frame" }] },
                (parentElement) => [
                this.html(`ae440fb1`, "aside", parentElement,
                    { classes: [{ type: 'static', value: "workspace-sidebar" }] },
                    (parentElement) => [
                    this.html(`ee4d154a`, "a", parentElement,
                        { classes: [{ type: 'static', value: "brand" }, { type: 'static', value: "brand-inverse" }], attrs: { "href": { type: 'static', value: "/" } } },
                        (parentElement) => [
                        this.html(`2081c39e`, "span", parentElement,
                            { classes: [{ type: 'static', value: "brand-mark" }] },
                            (parentElement) => [
                            this.text('S')
                            ]),
                        this.html(`484b9384`, "span", parentElement, {}, (parentElement) => [
                            this.html(`af437a03`, "strong", parentElement, {}, (parentElement) => [
                                this.text('SAOLA')
                            ]),
                            this.html(`b04354bc`, "small", parentElement, {}, (parentElement) => [
                                this.text('WORKSPACE')
                            ])
                        ])
                        ]),
                    this.html(`f1d88df0`, "div", parentElement,
                        { classes: [{ type: 'static', value: "workspace-date" }] },
                        (parentElement) => [
                        this.html(`bb8ce219`, "span", parentElement, {}, (parentElement) => [
                            this.text('Today')
                        ]),
                        this.html(`57a0cbe4`, "strong", parentElement, {}, (parentElement) => [
                            this.text('Make room'),
                            this.html(`36a9e72f`, "br", parentElement, {}),
                            this.text('for what matters.')
                        ])
                        ]),
                    this.html(`76ddaf72`, "nav", parentElement,
                        { classes: [{ type: 'static', value: "workspace-nav" }] },
                        (parentElement) => [
                        this.html(`dfaa61d0`, "a", parentElement,
                            { classes: [{ type: 'static', value: "active" }], attrs: { "href": { type: 'static', value: "/todo-list" } } },
                            (parentElement) => [
                            this.html(`cb4d927c`, "span", parentElement, {}, (parentElement) => [
                                this.text('01')
                            ]),
                            this.text(' Tasks')
                            ]),
                        this.html(`2c228af7`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/" } } },
                            (parentElement) => [
                            this.html(`ca7daca6`, "span", parentElement, {}, (parentElement) => [
                                this.text('02')
                            ]),
                            this.text(' Back to site')
                            ]),
                        this.html(`937a1507`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/about" } } },
                            (parentElement) => [
                            this.html(`65c71c6e`, "span", parentElement, {}, (parentElement) => [
                                this.text('03')
                            ]),
                            this.text(' Philosophy')
                            ])
                        ]),
                    this.html(`0236cb34`, "p", parentElement,
                        { classes: [{ type: 'static', value: "workspace-note" }] },
                        (parentElement) => [
                        this.text('State stays local to the page. The layout remains stable while the route changes.')
                        ])
                    ]),
                this.html(`045faade`, "main", parentElement,
                    { classes: [{ type: 'static', value: "workspace-main" }] },
                    (parentElement) => [
                    this.blockOutlet(`20269ffe`, "workspace", parentElement)
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
export function WebLayoutsWorkspace(__data__ = {}, systemData = {}) {
    return new WorkspaceView(__data__, systemData);
}
export default WebLayoutsWorkspace;
