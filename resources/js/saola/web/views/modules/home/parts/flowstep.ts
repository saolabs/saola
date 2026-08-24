import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.home.parts.flowstep';
const __VIEW_NAMESPACE__ = 'web.modules.home.parts.';
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
export interface FlowstepProps {
    step?: string;
    cmd?: string;
    __ONE_CHILDREN_CONTENT__?: string;
    /** viewId server gán khi hydrate */
    __SSR_VIEW_ID__?: string;
    [key: string]: any;
}

class FlowstepViewController extends ViewController {
    constructor(view: View) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this as any).setStaticConfig === 'function') {
            (this as any).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this as any).config = __VIEW_CONFIG__;
        }
    }
}

class FlowstepView extends View {
    constructor(__data__: FlowstepProps = {}, systemData: any = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, FlowstepViewController);
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
        let {step = '', cmd = '', __ONE_CHILDREN_CONTENT__ = ''} = __data__;
        __STATE__.__.register('step', step);
        __STATE__.__.register('cmd', cmd);
        __STATE__.__.register('__ONE_CHILDREN_CONTENT__', __ONE_CHILDREN_CONTENT__);
        __UPDATE_DATA_TRAIT__.step = (__next: any) => { step = __next; updateStateByKey('step', __next); };
        __UPDATE_DATA_TRAIT__.cmd = (__next: any) => { cmd = __next; updateStateByKey('cmd', __next); };
        __UPDATE_DATA_TRAIT__.__ONE_CHILDREN_CONTENT__ = (__next: any) => { __ONE_CHILDREN_CONTENT__ = __next; updateStateByKey('__ONE_CHILDREN_CONTENT__', __next); };
        const __VARIABLE_LIST__: any = ["step", "cmd", "__ONE_CHILDREN_CONTENT__"];


        this.__ctrl__.setUserDefinedConfig({
            name: 'HomeFlowStep'
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
            this.html(`8b0931c9`, "li", parentElement, {}, (parentElement: any) => [
                this.html(`45171ab8`, "span", parentElement, {}, (parentElement: any) => [
                    this.output(`f1b4ad5a`, parentElement, true, ["step"], (parentElement: any) => step)
                ]),
                this.html(`83b23b6f`, "div", parentElement, {}, (parentElement: any) => [
                    ...this.__children(__ONE_CHILDREN_CONTENT__, parentElement)
                ]),
                this.html(`fc67aca8`, "code", parentElement, {}, (parentElement: any) => [
                    this.output(`f25bfef9`, parentElement, true, ["cmd"], (parentElement: any) => cmd)
                ])
            ])
            ]);
            }
        });

    }
}

// Export factory function
export function WebModulesHomePartsFlowstep(__data__: FlowstepProps = {}, systemData: any = {}): FlowstepView {
    return new FlowstepView(__data__, systemData);
}
export default WebModulesHomePartsFlowstep;
