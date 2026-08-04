import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.ping.index';
const __VIEW_NAMESPACE__ = 'web.modules.ping.';
const __VIEW_TYPE__ = 'view';
const __VIEW_CONFIG__ = {
    hasSuperView: true,
    viewType: 'view',
    sections: {
        "content":{
            "type":"long",
            "preloader":false,
            "useVars":true,
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
    renderLongSections: ["content"],
    renderSections: [],
    prerenderSections: []
};



class IndexViewController extends ViewController {
    constructor(view: View) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this as any).setStaticConfig === 'function') {
            (this as any).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this as any).config = __VIEW_CONFIG__;
        }
    }
}

class IndexView extends View {
    constructor(__data__: any = {}, systemData: any = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, IndexViewController);
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
        const set$count = __STATE__.__.register('count');
        let count: any = null;
        const setCount = (state: any) => {
            count = state;
            set$count(state);
        };
        __STATE__.__.setters.setCount = setCount;
        __STATE__.__.setters.count = setCount;
        const update$count = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('count', value);
                count = value;
            }
        };
        const set$name = __STATE__.__.register('name');
        let name: any = null;
        const setName = (state: any) => {
            name = state;
            set$name(state);
        };
        __STATE__.__.setters.setName = setName;
        __STATE__.__.setters.name = setName;
        const update$name = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('name', value);
                name = value;
            }
        };
        const set$pings = __STATE__.__.register('pings');
        let pings: any = null;
        const setPings = (state: any) => {
            pings = state;
            set$pings(state);
        };
        __STATE__.__.setters.setPings = setPings;
        __STATE__.__.setters.pings = setPings;
        const update$pings = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('pings', value);
                pings = value;
            }
        };
        const __VARIABLE_LIST__: any = [];


        this.__ctrl__.setUserDefinedConfig({
            name: 'PingPage',
                reset(){
                    setCount(0);
                },
                addPing(){
                    setCount(count + 1);
                }
        });

        this.__ctrl__.setup({
            superView: `${__layout__+"base"}`,
            subscribe: true,
            fetch: null,
            data: __data__,
            viewId: __VIEW_ID__,
            path: __VIEW_PATH__,
            scripts: [],
            styles: [{"type":"code","scoped":true,"content":".ping {\n        padding: 24px;\n        font-family: system-ui, sans-serif;\n    }\n    .active h1 {\n        color: #2563eb;\n    }"}],
            resources: [],
            commitConstructorData: function(this: any) {
                // Then update states from data
                update$count(0);
                update$name('Saola');
                update$pings([]);
                // Finally lock state updates
                lockUpdateRealState();
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
                lockUpdateRealState();
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
            this.block('block-content', 'content', (parentElement: any) => [
            this.html(`b4052a35`, "section", parentElement,
                { classes: [{ type: 'static', value: "ping" }, { type: 'binding', value: "active", factory: () => count > 0, stateKeys: ["count"] }] },
                (parentElement: any) => [
                this.html(`ba3bf830`, "h1", parentElement, {}, (parentElement: any) => [
                    this.text('Ping Module — Hydration Test')
                ]),
                this.html(`9f45c023`, "p", parentElement, {}, (parentElement: any) => [
                    this.text('Hello, '),
                    this.output(`6e45b3ed`, parentElement, true, ["name"], (parentElement: any) => name),
                    this.text('! 👋')
                ]),
                this.html(`a1ce32e6`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`7d44863d`, "button", parentElement,
                        { events: { click: [(event: any) => setCount(count + 1)] } },
                        (parentElement: any) => [
                        this.text('Ping (+1)')
                        ]),
                    this.html(`5328c8d9`, "button", parentElement,
                        { events: { click: [{"handler":"reset","params":[]}] } },
                        (parentElement: any) => [
                        this.text('Reset')
                        ]),
                    this.html(`245b439b`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('Count: '),
                        this.output(`3aa7ff3e`, parentElement, true, ["count"], (parentElement: any) => count)
                    ])
                ]),
                this.html(`f2f99f39`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`afbce0c4`, "label", parentElement, {}, (parentElement: any) => [
                        this.text('Your name:')
                    ]),
                    this.html(`d492e6e2`, "input", parentElement, { attrs: { "type": { type: 'static', value: "text" }, "name": { type: 'static', value: "name" }, "placeholder": { type: 'static', value: "Type a name..." } }, bind: { key: 'name' } })
                ]),
                this.html(`6a16652b`, "button", parentElement,
                    { events: { click: [{"handler":"addPing","params":[]}] } },
                    (parentElement: any) => [
                    this.text('Add ping to list')
                    ]),
                this.html(`304a3482`, "ul", parentElement, {}, (parentElement: any) => [
                    this.reactive(`63183269`, "for", parentReactive, parentElement, ["count"], (parentReactive: any, parentElement: any) => {
                        return this.__for("increment", 0, count, (__loop: any) => {
                            let __forOutput = [];
                            for (let i = 0; i < count; i++) {
                                __loop.setCurrentTimes(i);
                                __forOutput.push(
                                this.html(`ae68a1c5-${i}`, "li", parentElement, {}, (parentElement: any) => [
                                    this.text('Ping #'),
                                    this.output(`7c7ba19b-${i}`, parentElement, true, ["i"], (parentElement: any) => i + 1)
                                ])
                                );
                            }
                            return __forOutput;
                        })
                    })
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
export function WebModulesPingIndex(__data__ = {}, systemData = {}): IndexView {
    return new IndexView(__data__, systemData);
}
export default WebModulesPingIndex;
