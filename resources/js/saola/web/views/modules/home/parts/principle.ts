import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.home.parts.principle';
const __VIEW_NAMESPACE__ = 'web.modules.home.parts.';
const __VIEW_TYPE__ = 'view';
const __VIEW_CONFIG__ = {
    hasSuperView: false,
    viewType: 'view',
    sections: {},
    wrapperConfig: { enable: false, tag: null, subscribe: true, attributes: {} },
    hasAwaitData: false,
    hasFetchData: false,
    usesVars: false,
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
export interface PrincipleProps {
    /** viewId server gán khi hydrate */
    __SSR_VIEW_ID__?: string;
    [key: string]: any;
}



class PrincipleViewController extends ViewController {
    constructor(view: View) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this as any).setStaticConfig === 'function') {
            (this as any).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this as any).config = __VIEW_CONFIG__;
        }
    }
}

class PrincipleView extends View {
    constructor(__data__: any = {}, systemData: any = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, PrincipleViewController);
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
        const __VARIABLE_LIST__: any = [];


        this.__ctrl__.setUserDefinedConfig({
            name: 'HomePrinciple'
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
            this.html(`e1`, "section", parentElement,
                { classes: [{ type: 'static', value: "principle-showcase" }] },
                (parentElement: any) => [
                this.html(`e11`, "div", parentElement,
                    { classes: [{ type: 'static', value: "principle-content" }] },
                    (parentElement: any) => [
                    this.html(`e111`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement: any) => [
                        this.html(`e1111`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('DESIGN PRINCIPLE')
                        ]),
                        this.text(' Triết lý thiết kế cốt lõi')
                        ]),
                    this.html(`e112`, "h2", parentElement,
                        { classes: [{ type: 'static', value: "principle-title" }] },
                        (parentElement: any) => [
                        this.html(`e1121`, "span", parentElement,
                            { classes: [{ type: 'static', value: "line-1" }] },
                            (parentElement: any) => [
                            this.text('Server là chân lý.')
                            ]),
                        this.html(`e1122`, "span", parentElement,
                            { classes: [{ type: 'static', value: "line-2" }] },
                            (parentElement: any) => [
                            this.text('Client là sự tiếp nối.')
                            ])
                        ]),
                    this.html(`e113`, "div", parentElement,
                        { classes: [{ type: 'static', value: "principle-desc" }] },
                        (parentElement: any) => [
                        this.html(`e1131`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Phản hồi đầu tiên từ server phải luôn hoàn chỉnh và mang đầy đủ nội dung. JavaScript không tồn tại để "cứu vãn" một trang web rỗng; nhiệm vụ của nó là tiếp nhận cấu trúc DOM đã được render và làm cho view đó trở nên sống động.')
                        ]),
                        this.html(`e1132`, "a", parentElement,
                            { classes: [{ type: 'static', value: "button" }], attrs: { "href": { type: 'static', value: "/about" } } },
                            (parentElement: any) => [
                            this.text('Vì sao Saola tồn tại '),
                            this.html(`e11321`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('→')
                            ])
                            ])
                        ])
                    ])
                ])
            ]);
            }
        });

    }
}

// Export factory function
export function WebModulesHomePartsPrinciple(__data__ = {}, systemData = {}): PrincipleView {
    return new PrincipleView(__data__, systemData);
}
export default WebModulesHomePartsPrinciple;