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
            this.html(`Bshell1`, "div", parentElement,
                { classes: [{ type: 'static', value: "workspace-frame" }] },
                (parentElement) => [
                this.html(`Bshell11`, "aside", parentElement,
                    { classes: [{ type: 'static', value: "workspace-sidebar" }] },
                    (parentElement) => [
                    this.html(`Bshell111`, "a", parentElement,
                        { classes: [{ type: 'static', value: "brand" }, { type: 'static', value: "brand-inverse" }], attrs: { "href": { type: 'static', value: "/" } } },
                        (parentElement) => [
                        this.html(`Bshell1111`, "span", parentElement,
                            { classes: [{ type: 'static', value: "brand-mark" }] },
                            (parentElement) => [
                            this.text('S')
                            ]),
                        this.html(`Bshell1112`, "span", parentElement, {}, (parentElement) => [
                            this.html(`Bshell11121`, "strong", parentElement, {}, (parentElement) => [
                                this.text('SAOLA')
                            ]),
                            this.html(`Bshell11122`, "small", parentElement, {}, (parentElement) => [
                                this.text('WORKSPACE')
                            ])
                        ])
                        ]),
                    this.html(`Bshell112`, "div", parentElement,
                        { classes: [{ type: 'static', value: "workspace-date" }] },
                        (parentElement) => [
                        this.html(`Bshell1121`, "span", parentElement, {}, (parentElement) => [
                            this.text('Today')
                        ]),
                        this.html(`Bshell1122`, "strong", parentElement, {}, (parentElement) => [
                            this.text('Make room'),
                            this.html(`Bshell11221`, "br", parentElement, {}),
                            this.text('for what matters.')
                        ])
                        ]),
                    this.html(`Bshell113`, "nav", parentElement,
                        { classes: [{ type: 'static', value: "workspace-nav" }] },
                        (parentElement) => [
                        this.html(`Bshell1131`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/todo-list" } } },
                            (parentElement) => [
                            this.html(`Bshell11311`, "span", parentElement, {}, (parentElement) => [
                                this.text('01')
                            ]),
                            this.text(' Tasks')
                            ]),
                        this.html(`Bshell1132`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/roster" } } },
                            (parentElement) => [
                            this.html(`Bshell11321`, "span", parentElement, {}, (parentElement) => [
                                this.text('02')
                            ]),
                            this.text(' Roster')
                            ]),
                        this.html(`Bshell1133`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/" } } },
                            (parentElement) => [
                            this.html(`Bshell11331`, "span", parentElement, {}, (parentElement) => [
                                this.text('03')
                            ]),
                            this.text(' Back to site')
                            ]),
                        this.html(`Bshell1134`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/about" } } },
                            (parentElement) => [
                            this.html(`Bshell11341`, "span", parentElement, {}, (parentElement) => [
                                this.text('04')
                            ]),
                            this.text(' Philosophy')
                            ])
                        ]),
                    this.html(`Bshell114`, "p", parentElement,
                        { classes: [{ type: 'static', value: "workspace-note" }] },
                        (parentElement) => [
                        this.text('State stays local to the page. The layout remains stable while the route changes.')
                        ])
                    ]),
                this.html(`Bshell12`, "main", parentElement,
                    { classes: [{ type: 'static', value: "workspace-main" }] },
                    (parentElement) => [
                    this.blockOutlet(`Bshell12b`, "workspace", parentElement)
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