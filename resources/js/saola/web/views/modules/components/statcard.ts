import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.components.statcard';
const __VIEW_NAMESPACE__ = 'web.modules.components.';
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
export interface StatcardProps {
    label?: string;
    value?: string;
    tone?: string;
    __ONE_CHILDREN_CONTENT__?: string;
    /** viewId server gán khi hydrate */
    __SSR_VIEW_ID__?: string;
    [key: string]: any;
}

class StatcardViewController extends ViewController {
    constructor(view: View) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this as any).setStaticConfig === 'function') {
            (this as any).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this as any).config = __VIEW_CONFIG__;
        }
    }
}

class StatcardView extends View {
    constructor(__data__: StatcardProps = {}, systemData: any = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, StatcardViewController);
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
        let {label = 'Label', value = '0', tone = 'sky', __ONE_CHILDREN_CONTENT__ = ''} = __data__;
        __STATE__.__.register('label', label);
        __STATE__.__.register('value', value);
        __STATE__.__.register('tone', tone);
        __STATE__.__.register('__ONE_CHILDREN_CONTENT__', __ONE_CHILDREN_CONTENT__);
        __UPDATE_DATA_TRAIT__.label = (__next: any) => { label = __next; updateStateByKey('label', __next); };
        __UPDATE_DATA_TRAIT__.value = (__next: any) => { value = __next; updateStateByKey('value', __next); };
        __UPDATE_DATA_TRAIT__.tone = (__next: any) => { tone = __next; updateStateByKey('tone', __next); };
        __UPDATE_DATA_TRAIT__.__ONE_CHILDREN_CONTENT__ = (__next: any) => { __ONE_CHILDREN_CONTENT__ = __next; updateStateByKey('__ONE_CHILDREN_CONTENT__', __next); };
        const __VARIABLE_LIST__: any = ["label", "value", "tone", "__ONE_CHILDREN_CONTENT__"];


        this.__ctrl__.setUserDefinedConfig({
            name: 'ComponentsStatCard'
        });

        this.__ctrl__.setup({
            superView: null,
            subscribe: true,
            fetch: null,
            data: __data__,
            viewId: __VIEW_ID__,
            path: __VIEW_PATH__,
            scripts: [],
            styles: [],
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
            this.html(`d69e6b1d`, "div", parentElement,
                { classes: [{ type: 'static', value: "cmp-slot" }, { type: 'binding', value: "cmp-slot--indigo", factory: () => tone === 'indigo', stateKeys: ["tone"] }] },
                (parentElement: any) => [
                this.html(`bda2927b`, "span", parentElement, {}, (parentElement: any) => [
                    this.output(`eed61699`, parentElement, true, ["label"], (parentElement: any) => label)
                ]),
                this.html(`c6aaed49`, "strong", parentElement, {}, (parentElement: any) => [
                    this.output(`088db3a1`, parentElement, true, ["value"], (parentElement: any) => value)
                ]),
                this.html(`6b7c3ec4`, "div", parentElement,
                    { classes: [{ type: 'static', value: "cmp-slot-body" }] },
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
export function WebModulesComponentsStatcard(__data__: StatcardProps = {}, systemData: any = {}): StatcardView {
    return new StatcardView(__data__, systemData);
}
export default WebModulesComponentsStatcard;
