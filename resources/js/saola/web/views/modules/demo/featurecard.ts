import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.demo.featurecard';
const __VIEW_NAMESPACE__ = 'web.modules.demo.';
const __VIEW_TYPE__ = 'view';
const __VIEW_CONFIG__ = {
    hasSuperView: false,
    viewType: 'view',
    sections: {},
    wrapperConfig: { enable: false, tag: null, subscribe: true, attributes: {} },
    hasAwaitData: false,
    hasFetchData: false,
    usesVars: true,
    hasSections: false,
    hasSectionPreload: false,
    hasPrerender: false,
    renderLongSections: [],
    renderSections: [],
    prerenderSections: []
};



class FeaturecardViewController extends ViewController {
    constructor(view: View) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this as any).setStaticConfig === 'function') {
            (this as any).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this as any).config = __VIEW_CONFIG__;
        }
    }
}

class FeaturecardView extends View {
    constructor(__data__: any = {}, systemData: any = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, FeaturecardViewController);
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
        let {number = '01', title = 'Feature', source = '', tone = 'pink', __ONE_CHILDREN_CONTENT__ = ''} = __data__;
        __STATE__.__.register('number', number);
        __STATE__.__.register('title', title);
        __STATE__.__.register('source', source);
        __STATE__.__.register('tone', tone);
        __STATE__.__.register('__ONE_CHILDREN_CONTENT__', __ONE_CHILDREN_CONTENT__);
        __UPDATE_DATA_TRAIT__.number = (value: any) => { number = value; updateStateByKey('number', value); };
        __UPDATE_DATA_TRAIT__.title = (value: any) => { title = value; updateStateByKey('title', value); };
        __UPDATE_DATA_TRAIT__.source = (value: any) => { source = value; updateStateByKey('source', value); };
        __UPDATE_DATA_TRAIT__.tone = (value: any) => { tone = value; updateStateByKey('tone', value); };
        __UPDATE_DATA_TRAIT__.__ONE_CHILDREN_CONTENT__ = (value: any) => { __ONE_CHILDREN_CONTENT__ = value; updateStateByKey('__ONE_CHILDREN_CONTENT__', value); };
        const __VARIABLE_LIST__: any = ["number", "title", "source", "tone", "__ONE_CHILDREN_CONTENT__"];


        this.__ctrl__.setUserDefinedConfig({
            name: 'DemoFeatureCard'
        });

        this.__ctrl__.setup({
            superView: null,
            subscribe: true,
            fetch: null,
            data: __data__,
            viewId: __VIEW_ID__,
            path: __VIEW_PATH__,
            scripts: [],
            styles: [{"type":"code","scoped":true,"content":".feature-card {\n        position: relative;\n        border: 3px solid #1f1b16;\n        background: #e8e0c0;\n        box-shadow: 7px 7px 0 #1f1b16;\n        color: #1f1b16;\n        transform: rotate(-1deg);\n    }\n\n    .feature-card:nth-child(even) { transform: rotate(1.4deg); }\n    .feature-card--cyan { box-shadow: 7px 7px 0 #00ffcc; }\n    .feature-card--yellow { box-shadow: 7px 7px 0 #dfff00; }\n\n    .feature-card > header {\n        display: grid;\n        grid-template-columns: 64px 1fr;\n        align-items: stretch;\n        border-bottom: 3px solid #1f1b16;\n    }\n\n    .feature-card > header span {\n        display: grid;\n        place-items: center;\n        border-right: 3px solid #1f1b16;\n        background: #ff71ce;\n        font: 700 22px/1 Helvetica, Arial, sans-serif;\n    }\n\n    .feature-card > header h3 {\n        margin: 0;\n        padding: 14px 16px;\n        font: 700 26px/1 Helvetica, Arial, sans-serif;\n    }\n\n    .feature-card > code {\n        display: block;\n        padding: 9px 14px;\n        overflow-wrap: anywhere;\n        border-bottom: 2px dashed #1f1b16;\n        background: rgba(255, 255, 255, .24);\n        font: 13px/1.45 Courier, monospace;\n    }\n\n    .feature-card__body { padding: 18px; }\n\n    @media (max-width: 680px) {\n        .feature-card,\n        .feature-card:nth-child(even) { transform: none; }\n    }"}],
            resources: [],
            commitConstructorData: function(this: any) {
                // Then update states from data

                // Finally lock state updates

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
            return this.wrapper((parentElement: any) => [
            this.html(`98f36c4a`, "article", parentElement,
                { classes: [{ type: 'static', value: "feature-card" }, { type: 'binding', value: "feature-card--pink", factory: () => tone === 'pink', stateKeys: ["tone"] }, { type: 'binding', value: "feature-card--cyan", factory: () => tone === 'cyan', stateKeys: ["tone"] }, { type: 'binding', value: "feature-card--yellow", factory: () => tone === 'yellow', stateKeys: ["tone"] }] },
                (parentElement: any) => [
                this.html(`303803c4`, "header", parentElement, {}, (parentElement: any) => [
                    this.html(`ccb57492`, "span", parentElement, {}, (parentElement: any) => [
                        this.output(`b6cbe0ba`, parentElement, true, ["number"], (parentElement: any) => number)
                    ]),
                    this.html(`bf78161e`, "h3", parentElement, {}, (parentElement: any) => [
                        this.output(`b7a0c11f`, parentElement, true, ["title"], (parentElement: any) => title)
                    ])
                ]),
                this.html(`caa3a4d0`, "code", parentElement, {}, (parentElement: any) => [
                    this.output(`52849a7f`, parentElement, false, ["source"], (parentElement: any) => source)
                ]),
                this.html(`abc599f4`, "div", parentElement,
                    { classes: [{ type: 'static', value: "feature-card__body" }] },
                    (parentElement: any) => [
                    ...this.__children(__ONE_CHILDREN_CONTENT__, parentElement)
                    ])
                ])
            ]);
            }
        });

    }
}

// Export factory function
export function WebModulesDemoFeaturecard(__data__ = {}, systemData = {}): FeaturecardView {
    return new FeaturecardView(__data__, systemData);
}
export default WebModulesDemoFeaturecard;
