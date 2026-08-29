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

/**
 * Props của view — sinh tự động từ @props/@vars, không sửa tay.
 * Optional hết vì khai báo nào cũng có default.
 */
export interface FeaturecardProps {
    number?: string;
    title?: string;
    source?: string;
    tone?: string;
    __ONE_CHILDREN_CONTENT__?: string;
    /** viewId server gán khi hydrate */
    __SSR_VIEW_ID__?: string;
    [key: string]: any;
}



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
        __UPDATE_DATA_TRAIT__.number = (__next: any) => { number = __next; updateStateByKey('number', __next); };
        __UPDATE_DATA_TRAIT__.title = (__next: any) => { title = __next; updateStateByKey('title', __next); };
        __UPDATE_DATA_TRAIT__.source = (__next: any) => { source = __next; updateStateByKey('source', __next); };
        __UPDATE_DATA_TRAIT__.tone = (__next: any) => { tone = __next; updateStateByKey('tone', __next); };
        __UPDATE_DATA_TRAIT__.__ONE_CHILDREN_CONTENT__ = (__next: any) => { __ONE_CHILDREN_CONTENT__ = __next; updateStateByKey('__ONE_CHILDREN_CONTENT__', __next); };
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
            styles: [{"type":"code","content":".feature-card.sf1054ae7 {\n        position: relative;\n        border: 3px solid #1f1b16;\n        background: #e8e0c0;\n        box-shadow: 7px 7px 0 #1f1b16;\n        color: #1f1b16;\n        transform: rotate(-1deg);\n    }\n\n    .feature-card.sf1054ae7:nth-child(even) { transform: rotate(1.4deg); }\n    .feature-card--cyan.sf1054ae7 { box-shadow: 7px 7px 0 #00ffcc; }\n    .feature-card--yellow.sf1054ae7 { box-shadow: 7px 7px 0 #dfff00; }\n\n    .feature-card > header.sf1054ae7 {\n        display: grid;\n        grid-template-columns: 64px 1fr;\n        align-items: stretch;\n        border-bottom: 3px solid #1f1b16;\n    }\n\n    .feature-card > header span.sf1054ae7 {\n        display: grid;\n        place-items: center;\n        border-right: 3px solid #1f1b16;\n        background: #ff71ce;\n        font: 700 22px/1 Helvetica, Arial, sans-serif;\n    }\n\n    .feature-card > header h3.sf1054ae7 {\n        margin: 0;\n        padding: 14px 16px;\n        font: 700 26px/1 Helvetica, Arial, sans-serif;\n    }\n\n    .feature-card > code.sf1054ae7 {\n        display: block;\n        padding: 9px 14px;\n        overflow-wrap: anywhere;\n        border-bottom: 2px dashed #1f1b16;\n        background: rgba(255, 255, 255, .24);\n        font: 13px/1.45 Courier, monospace;\n    }\n\n    .feature-card__body.sf1054ae7 { padding: 18px; }\n\n    @media (max-width: 680px) {\n        .feature-card.sf1054ae7, .feature-card.sf1054ae7:nth-child(even) { transform: none; }\n    }"}],
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
            this.html(`e1`, "article", parentElement,
                { classes: [{ type: 'static', value: "sf1054ae7" }, { type: 'static', value: "feature-card" }, { type: 'binding', value: "feature-card--pink", factory: () => tone === 'pink', stateKeys: ["tone"] }, { type: 'binding', value: "feature-card--cyan", factory: () => tone === 'cyan', stateKeys: ["tone"] }, { type: 'binding', value: "feature-card--yellow", factory: () => tone === 'yellow', stateKeys: ["tone"] }] },
                (parentElement: any) => [
                this.html(`e11`, "header", parentElement,
                    { classes: [{ type: 'static', value: "sf1054ae7" }] },
                    (parentElement: any) => [
                    this.html(`e111`, "span", parentElement,
                        { classes: [{ type: 'static', value: "sf1054ae7" }] },
                        (parentElement: any) => [
                        this.output(`e111o1`, parentElement, true, ["number"], (parentElement: any) => number)
                        ]),
                    this.html(`e112`, "h3", parentElement,
                        { classes: [{ type: 'static', value: "sf1054ae7" }] },
                        (parentElement: any) => [
                        this.output(`e112o1`, parentElement, true, ["title"], (parentElement: any) => title)
                        ])
                    ]),
                this.html(`e12`, "code", parentElement,
                    { classes: [{ type: 'static', value: "sf1054ae7" }] },
                    (parentElement: any) => [
                    this.output(`e12o1`, parentElement, false, ["source"], (parentElement: any) => source)
                    ]),
                this.html(`e13`, "div", parentElement,
                    { classes: [{ type: 'static', value: "sf1054ae7" }, { type: 'static', value: "feature-card__body" }] },
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