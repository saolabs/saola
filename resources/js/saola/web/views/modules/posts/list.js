import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.posts.list';
const __VIEW_NAMESPACE__ = 'web.modules.posts.';
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



class ListViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class ListView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, ListViewController);
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
        let {posts = [], title = null} = __data__;
        __STATE__.__.register('posts', posts);
        __STATE__.__.register('title', title);
        __UPDATE_DATA_TRAIT__.posts = __next => { posts = __next; updateStateByKey('posts', __next); };
        __UPDATE_DATA_TRAIT__.title = __next => { title = __next; updateStateByKey('title', __next); };
        const __VARIABLE_LIST__ = ["posts", "title"];


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
            this.html(`e1`, "h1", parentElement, {}, (parentElement) => [
                this.output(`e1o1`, parentElement, true, ["title"], (parentElement) => title)
            ]),
            this.html(`e2`, "ul", parentElement, {}, (parentElement) => [
                this.reactive(`e2l1`, "foreach", parentReactive, parentElement, ["posts"], (parentReactive, parentElement) => {
                    return this.__foreach(posts, (post, __loopKey, __loopIndex, __loop) => [
                        this.html(`e2l11-${__loopIndex}`, "li", parentElement, {}, (parentElement) => [
                            this.output(`e2l11o1-${__loopIndex}`, parentElement, true, ["title"], (parentElement) => post.title)
                        ])
                    ])
                })
            ]),
            this.text('#test')
            ]);
            }
        });

    }
}

// Export factory function
export function WebModulesPostsList(__data__ = {}, systemData = {}) {
    return new ListView(__data__, systemData);
}
export default WebModulesPostsList;