import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.home.parts.how';
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
export interface HowProps {
    /** viewId server gán khi hydrate */
    __SSR_VIEW_ID__?: string;
    [key: string]: any;
}

class HowViewController extends ViewController {
    constructor(view: View) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this as any).setStaticConfig === 'function') {
            (this as any).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this as any).config = __VIEW_CONFIG__;
        }
    }
}

class HowView extends View {
    constructor(__data__: HowProps = {}, systemData: any = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, HowViewController);
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
            name: 'HomeHow'
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
            this.html(`bbcd3398`, "section", parentElement,
                { classes: [{ type: 'static', value: "request-section" }], attrs: { "id": { type: 'static', value: "how" } } },
                (parentElement: any) => [
                this.html(`88b70a58`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }] },
                    (parentElement: any) => [
                    this.html(`e444cc57`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement: any) => [
                        this.html(`3d2849a4`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('HOW IT WORKS')
                        ]),
                        this.text(' Ba bước, không phép màu')
                        ]),
                    this.html(`ed9d4c8f`, "h2", parentElement, {}, (parentElement: any) => [
                        this.text('Từ một file tới một trang sống.')
                    ])
                    ]),
                this.html(`d9e57f79`, "ol", parentElement,
                    { classes: [{ type: 'static', value: "flow-timeline" }, { type: 'static', value: "flow-timeline--grid" }] },
                    (parentElement: any) => [
                    this.include(`de60e7d9`, 'web.modules.home.parts.flowstep', parentElement, [], (parentElement: any) => ({
                            "step": "01",
                            "cmd": `home.sao`,
                            __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                            this.html(`b774fa17`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Viết một view '),
                                this.html(`e3fdcfca`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('.sao')
                                ])
                            ]),
                            this.html(`df06a4c2`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Khai báo state ở đầu file, viết template bằng cú pháp kiểu JavaScript, đặt method trong '),
                                this.html(`5b74baa5`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('<script setup>')
                                ]),
                                this.text('.')
                            ])
                        ]
                        })),
                    this.include(`4a00ac1c`, 'web.modules.home.parts.flowstep', parentElement, [], (parentElement: any) => ({
                            "step": "02",
                            "cmd": "sao-compile web",
                            __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                            this.html(`f6420130`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Compiler sinh hai đầu ra')
                            ]),
                            this.html(`a3ba2907`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Một lệnh tạo ra Blade template cho server và view TypeScript cho client, kèm registry ánh xạ view path tới factory.')
                            ])
                        ]
                        })),
                    this.include(`a1a98dac`, 'web.modules.home.parts.flowstep', parentElement, [], (parentElement: any) => ({
                            "step": "03",
                            "cmd": "SSR → hydrate → SPA",
                            __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                            this.html(`8da23c0e`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Trang render rồi sống lên')
                            ]),
                            this.html(`9a8eb630`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Laravel trả HTML đầy đủ; runtime claim đúng DOM đó qua marker rồi tiếp quản state, event và điều hướng.')
                            ])
                        ]
                        }))
                    ])
                ])
            ]);
            }
        });

    }
}

// Export factory function
export function WebModulesHomePartsHow(__data__: HowProps = {}, systemData: any = {}): HowView {
    return new HowView(__data__, systemData);
}
export default WebModulesHomePartsHow;
