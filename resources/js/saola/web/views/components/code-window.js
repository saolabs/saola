import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.components.code-window';
const __VIEW_NAMESPACE__ = 'web.components.';
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



class CodeWindowViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class CodeWindowView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, CodeWindowViewController);
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
        let {label = '', title = '', lang = 'none', dark = false, __ONE_CHILDREN_CONTENT__ = ''} = __data__;
        __STATE__.__.register('label', label);
        __STATE__.__.register('title', title);
        __STATE__.__.register('lang', lang);
        __STATE__.__.register('dark', dark);
        __STATE__.__.register('__ONE_CHILDREN_CONTENT__', __ONE_CHILDREN_CONTENT__);
        __UPDATE_DATA_TRAIT__.label = __next => { label = __next; updateStateByKey('label', __next); };
        __UPDATE_DATA_TRAIT__.title = __next => { title = __next; updateStateByKey('title', __next); };
        __UPDATE_DATA_TRAIT__.lang = __next => { lang = __next; updateStateByKey('lang', __next); };
        __UPDATE_DATA_TRAIT__.dark = __next => { dark = __next; updateStateByKey('dark', __next); };
        __UPDATE_DATA_TRAIT__.__ONE_CHILDREN_CONTENT__ = __next => { __ONE_CHILDREN_CONTENT__ = __next; updateStateByKey('__ONE_CHILDREN_CONTENT__', __next); };
        const __VARIABLE_LIST__ = ["label", "title", "lang", "dark", "__ONE_CHILDREN_CONTENT__"];


        this.__ctrl__.setUserDefinedConfig({

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
            return this.wrapper((parentElement) => [
            this.html(`e1`, "div", parentElement,
                { classes: [{ type: 'static', value: "code-window" }, { type: 'binding', value: "code-window-dark", factory: () => dark, stateKeys: ["dark"] }, { type: 'binding', value: "code-window-plain", factory: () => !label && !title, stateKeys: ["label", "title"] }] },
                (parentElement) => [
                this.reactive(`e1r1`, "if", parentReactive, parentElement, ["label", "title"], (parentReactive, parentElement) => {
                    const reactiveContents = [];
                    if (label || title) {
                        reactiveContents.push(
                        this.html(`e1r1k11`, "div", parentElement,
                            { classes: [{ type: 'static', value: "window-bar" }] },
                            (parentElement) => [
                            this.html(`e1r1k111`, "span", parentElement, {}, (parentElement) => [
                                this.output(`e1r1k111o1`, parentElement, true, ["label"], (parentElement) => label)
                            ]),
                            this.html(`e1r1k112`, "b", parentElement, {}, (parentElement) => [
                                this.output(`e1r1k112o1`, parentElement, true, ["title"], (parentElement) => title)
                            ]),
                            this.reactive(`e1r1k11r1`, "if", parentReactive, parentElement, ["dark"], (parentReactive, parentElement) => {
                                const reactiveContents = [];
                                if (!dark) {
                                    reactiveContents.push(
                                    this.html(`e1r1k11r1k11`, "i", parentElement, {}, (parentElement) => [
                                        this.text('● ● ●')
                                    ])
                                    );
                                }
                                return reactiveContents;
                            })
                            ])
                        );
                    }
                    return reactiveContents;
                }),
                this.html(`e11`, "pre", parentElement, {}, (parentElement) => [
                    this.html(`e111`, "code", parentElement,
                        { classes: [{ type: 'dynamic', factory: () => `language-${lang}`, stateKeys: ["lang"] }] },
                        (parentElement) => [
                        ...this.__children(__ONE_CHILDREN_CONTENT__, parentElement)
                        ])
                ])
                ])
            ]);
            }
        });

    }
}

// Export factory function
export function WebComponentsCodeWindow(__data__ = {}, systemData = {}) {
    return new CodeWindowView(__data__, systemData);
}
export default WebComponentsCodeWindow;