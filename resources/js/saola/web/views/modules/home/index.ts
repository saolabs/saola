import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.home.index';
const __VIEW_NAMESPACE__ = 'web.modules.home.';
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
        const set$counter = __STATE__.__.register('counter');
        let counter: any = null;
        const setCounter = (state: any) => {
            counter = state;
            set$counter(state);
        };
        __STATE__.__.setters.setCounter = setCounter;
        __STATE__.__.setters.counter = setCounter;
        const update$counter = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('counter', value);
                counter = value;
            }
        };
        const set$title = __STATE__.__.register('title');
        let title: any = null;
        const setTitle = (state: any) => {
            title = state;
            set$title(state);
        };
        __STATE__.__.setters.setTitle = setTitle;
        __STATE__.__.setters.title = setTitle;
        const update$title = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('title', value);
                title = value;
            }
        };
        const set$message = __STATE__.__.register('message');
        let message: any = null;
        const setMessage = (state: any) => {
            message = state;
            set$message(state);
        };
        __STATE__.__.setters.setMessage = setMessage;
        __STATE__.__.setters.message = setMessage;
        const update$message = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('message', value);
                message = value;
            }
        };
        const MAX_ITEMS = 10;
        const __VARIABLE_LIST__: any = [];


        this.__ctrl__.setUserDefinedConfig({
            name: 'HomePage',
                sendMessage(){
                    alert(message);
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
            styles: [{"type":"code","scoped":true,"content":".input {\n        margin-top: 20px;\n    }\n    .empty textarea {\n        border-color: red;\n    }"}],
            resources: [],
            commitConstructorData: function(this: any) {
                // Then update states from data
                update$counter(0);
                update$title('Hello Saola');
                update$message('Welcome to Saola Web');
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
                // Then update states from data
                update$counter(0);
                update$title('Hello Saola');
                update$message('Welcome to Saola Web');
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
            this.html(`27ee54c9`, "h1", parentElement, {}, (parentElement: any) => [
                this.output(`38540199`, parentElement, true, ["title"], (parentElement: any) => title)
            ]),
            this.html(`22e55677`, "button", parentElement,
                { events: { click: [(event: any) => setCounter(counter + 1)] } },
                (parentElement: any) => [
                this.text('Click me ('),
                this.output(`44378260`, parentElement, true, ["counter"], (parentElement: any) => counter),
                this.text(')')
                ]),
            this.html(`36f3083b`, "p", parentElement, {}, (parentElement: any) => [
                this.text('Counter: '),
                this.output(`12024635`, parentElement, true, ["counter"], (parentElement: any) => counter)
            ]),
            this.html(`6cdf9b20`, "p", parentElement, {}, (parentElement: any) => [
                this.text('Max items: '),
                this.output(`4f8494ad`, parentElement, true, [], (parentElement: any) => MAX_ITEMS)
            ]),
            this.html(`a4a3ba18`, "div", parentElement,
                { attrs: { "data-counter": { type: 'binding', value: counter, factory: () => counter, stateKeys: ["counter"] } } },
                (parentElement: any) => [
                this.__for("increment", 1, MAX_ITEMS, (__loop: any) => {
                        let __forOutput = [];
                        for (let i = 1; i <= MAX_ITEMS; i++) {
                            __loop.setCurrentTimes(i);
                            __forOutput.push(
                            this.html(`140a77a1-${i}`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Item '),
                                this.output(`995f8bf4-${i}`, parentElement, true, ["i"], (parentElement: any) => i)
                            ])
                            );
                        }
                        return __forOutput;
                    })
                ]),
            this.html(`abe07598`, "p", parentElement, {}, (parentElement: any) => [
                this.output(`61ecbf40`, parentElement, true, ["message"], (parentElement: any) => message)
            ]),
            this.html(`f27dc116`, "div", parentElement,
                { classes: [{ type: 'static', value: "input" }, { type: 'binding', value: "empty", factory: () => counter === 0, stateKeys: ["counter"] }] },
                (parentElement: any) => [
                this.html(`ac8654e7`, "textarea", parentElement, { attrs: { "placeholder": { type: 'static', value: "Type something..." }, "name": { type: 'static', value: "message" }, "bind": { type: 'static', value: true }, "message": { type: 'static', value: true } } }),
                this.html(`9690e018`, "br", parentElement, {}),
                this.html(`34c3fdb9`, "button", parentElement,
                    { events: { click: [{"handler":"sendMessage","params":[]}] } },
                    (parentElement: any) => [
                    this.text('Send')
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
export function WebModulesHomeIndex(__data__ = {}, systemData = {}): IndexView {
    return new IndexView(__data__, systemData);
}
export default WebModulesHomeIndex;
