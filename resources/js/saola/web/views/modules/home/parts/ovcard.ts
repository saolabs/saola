import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.home.parts.ovcard';
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
export interface OvcardProps {
    eyebrow?: string;
    title?: string;
    __ONE_CHILDREN_CONTENT__?: string;
    /** viewId server gán khi hydrate */
    __SSR_VIEW_ID__?: string;
    [key: string]: any;
}

class OvcardViewController extends ViewController {
    constructor(view: View) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this as any).setStaticConfig === 'function') {
            (this as any).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this as any).config = __VIEW_CONFIG__;
        }
    }
}

class OvcardView extends View {
    constructor(__data__: OvcardProps = {}, systemData: any = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, OvcardViewController);
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
        let {eyebrow = '', title = '', __ONE_CHILDREN_CONTENT__ = ''} = __data__;
        __STATE__.__.register('eyebrow', eyebrow);
        __STATE__.__.register('title', title);
        __STATE__.__.register('__ONE_CHILDREN_CONTENT__', __ONE_CHILDREN_CONTENT__);
        __UPDATE_DATA_TRAIT__.eyebrow = (__next: any) => { eyebrow = __next; updateStateByKey('eyebrow', __next); };
        __UPDATE_DATA_TRAIT__.title = (__next: any) => { title = __next; updateStateByKey('title', __next); };
        __UPDATE_DATA_TRAIT__.__ONE_CHILDREN_CONTENT__ = (__next: any) => { __ONE_CHILDREN_CONTENT__ = __next; updateStateByKey('__ONE_CHILDREN_CONTENT__', __next); };
        const __VARIABLE_LIST__: any = ["eyebrow", "title", "__ONE_CHILDREN_CONTENT__"];


        this.__ctrl__.setUserDefinedConfig({
            name: 'HomeOvCard'
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
                { classes: [{ type: 'static', value: "ov-card" }] },
                (parentElement: any) => [
                this.html(`bda2927b`, "span", parentElement, {}, (parentElement: any) => [
                    this.output(`eed61699`, parentElement, true, ["eyebrow"], (parentElement: any) => eyebrow)
                ]),
                this.html(`743a1357`, "h3", parentElement, {}, (parentElement: any) => [
                    this.output(`f58f8f3a`, parentElement, true, ["title"], (parentElement: any) => title)
                ]),
                ...this.__children(__ONE_CHILDREN_CONTENT__, parentElement)
                ])
            ]);
            }
        });

    }
}

// Export factory function
export function WebModulesHomePartsOvcard(__data__: OvcardProps = {}, systemData: any = {}): OvcardView {
    return new OvcardView(__data__, systemData);
}
export default WebModulesHomePartsOvcard;
