import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.home.todo';
const __VIEW_NAMESPACE__ = 'web.modules.home.';
const __VIEW_TYPE__ = 'view';
const __VIEW_CONFIG__ = {
    hasSuperView: true,
    viewType: 'view',
    sections: {
        "workspace":{
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
    renderLongSections: ["workspace"],
    renderSections: [],
    prerenderSections: []
};



/**
 * Props của view — sinh tự động từ @props/@vars, không sửa tay.
 * Optional hết vì khai báo nào cũng có default.
 */
export interface TodoProps {
    /** viewId server gán khi hydrate */
    __SSR_VIEW_ID__?: string;
    [key: string]: any;
}

class TodoViewController extends ViewController {
    constructor(view: View) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this as any).setStaticConfig === 'function') {
            (this as any).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this as any).config = __VIEW_CONFIG__;
        }
    }
}

class TodoView extends View {
    constructor(__data__: TodoProps = {}, systemData: any = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, TodoViewController);
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
        const set$todos = __STATE__.__.register('todos');
        let todos: any = [{"id": 1, "text": "Review hydration lifecycle", "completed": true}, {"id": 2, "text": "Test shared layout transition", "completed": false}, {"id": 3, "text": "Inspect runtime asset cleanup", "completed": false}];
        const setTodos = (state: any) => {
            todos = state;
            set$todos(state);
        };
        __STATE__.__.setters.setTodos = setTodos;
        __STATE__.__.setters.todos = setTodos;
        const update$todos = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('todos', value);
                todos = value;
            }
        };
        const set$newTodo = __STATE__.__.register('newTodo');
        let newTodo: any = '';
        const setNewTodo = (state: any) => {
            newTodo = state;
            set$newTodo(state);
        };
        __STATE__.__.setters.setNewTodo = setNewTodo;
        __STATE__.__.setters.newTodo = setNewTodo;
        const update$newTodo = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('newTodo', value);
                newTodo = value;
            }
        };
        const set$filter = __STATE__.__.register('filter');
        let filter: any = 'all';
        const setFilter = (state: any) => {
            filter = state;
            set$filter(state);
        };
        __STATE__.__.setters.setFilter = setFilter;
        __STATE__.__.setters.filter = setFilter;
        const update$filter = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('filter', value);
                filter = value;
            }
        };
        const set$nextId = __STATE__.__.register('nextId');
        let nextId: any = 4;
        const setNextId = (state: any) => {
            nextId = state;
            set$nextId(state);
        };
        __STATE__.__.setters.setNextId = setNextId;
        __STATE__.__.setters.nextId = setNextId;
        const update$nextId = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('nextId', value);
                nextId = value;
            }
        };
        const set$activeCount = __STATE__.__.register('activeCount');
        let activeCount: any = 2;
        const setActiveCount = (state: any) => {
            activeCount = state;
            set$activeCount(state);
        };
        __STATE__.__.setters.setActiveCount = setActiveCount;
        __STATE__.__.setters.activeCount = setActiveCount;
        const update$activeCount = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('activeCount', value);
                activeCount = value;
            }
        };
        const set$completedCount = __STATE__.__.register('completedCount');
        let completedCount: any = 1;
        const setCompletedCount = (state: any) => {
            completedCount = state;
            set$completedCount(state);
        };
        __STATE__.__.setters.setCompletedCount = setCompletedCount;
        __STATE__.__.setters.completedCount = setCompletedCount;
        const update$completedCount = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('completedCount', value);
                completedCount = value;
            }
        };
        const __VARIABLE_LIST__: any = [];


        this.__ctrl__.setUserDefinedConfig({
            name: 'TodoPage',
                addTodo(event) {
                    event.preventDefault();
                    const text = newTodo.trim();
                    if (!text) return;
                    const nextTodos = [...todos, { id: nextId, text, completed: false }];
                    setTodos(nextTodos);
                    this.updateCounts(nextTodos);
                    setNextId(nextId + 1);
                    setNewTodo('');
                },
                toggleTodo(id) {
                    const nextTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
                    setTodos(nextTodos);
                    this.updateCounts(nextTodos);
                },
                deleteTodo(id) {
                    const nextTodos = todos.filter(todo => todo.id !== id);
                    setTodos(nextTodos);
                    this.updateCounts(nextTodos);
                },
                clearCompleted() {
                    const nextTodos = todos.filter(todo => !todo.completed);
                    setTodos(nextTodos);
                    this.updateCounts(nextTodos);
                },
                updateCounts(list) {
                    setActiveCount(list.filter(todo => !todo.completed).length);
                    setCompletedCount(list.filter(todo => todo.completed).length);
                }
        });

        this.__ctrl__.setup({
            superView: `${__layout__+"workspace"}`,
            subscribe: true,
            fetch: null,
            data: __data__,
            viewId: __VIEW_ID__,
            path: __VIEW_PATH__,
            scripts: [],
            styles: [{"type":"code","scoped":true,"content":".todo-row.completed strong { text-decoration: line-through; color: #79808b; }\n    .todo-row.completed .todo-check { background: var(--cobalt); color: white; }"}],
            resources: [],
            commitConstructorData: function(this: any) {
                // Then update states from data
                update$todos([{"id": 1, "text": "Review hydration lifecycle", "completed": true}, {"id": 2, "text": "Test shared layout transition", "completed": false}, {"id": 3, "text": "Inspect runtime asset cleanup", "completed": false}]);
                update$newTodo('');
                update$filter('all');
                update$nextId(4);
                update$activeCount(2);
                update$completedCount(1);
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
            this.block('block-workspace', 'workspace', (parentElement: any) => [
            this.html(`33ba6fc5`, "header", parentElement,
                { classes: [{ type: 'static', value: "workspace-topbar" }] },
                (parentElement: any) => [
                this.html(`74083b07`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`6066db4b`, "p", parentElement,
                        { classes: [{ type: 'static', value: "eyebrow" }] },
                        (parentElement: any) => [
                        this.html(`6cf41081`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('01')
                        ]),
                        this.text(' Personal queue')
                        ]),
                    this.html(`0ddacfc5`, "h1", parentElement, {}, (parentElement: any) => [
                        this.text('Good morning.')
                    ])
                ]),
                this.html(`8d6a301b`, "div", parentElement,
                    { classes: [{ type: 'static', value: "completion-ring" }] },
                    (parentElement: any) => [
                    this.html(`07fe4995`, "strong", parentElement, {}, (parentElement: any) => [
                        this.output(`54916756`, parentElement, true, ["completedCount"], (parentElement: any) => completedCount),
                        this.text('/'),
                        this.output(`29b9d7bb`, parentElement, true, ["todos"], (parentElement: any) => App.Helper.count(todos))
                    ]),
                    this.html(`55822db1`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('complete')
                    ])
                    ])
                ]),
            this.html(`2532706c`, "section", parentElement,
                { classes: [{ type: 'static', value: "todo-board" }] },
                (parentElement: any) => [
                this.html(`9a7a2c94`, "form", parentElement,
                    { classes: [{ type: 'static', value: "todo-entry" }], events: { submit: [{"handler":"addTodo","params":[() => event]}] } },
                    (parentElement: any) => [
                    this.html(`1239dd2e`, "label", parentElement,
                        { attrs: { "for": { type: 'static', value: "new-task" } } },
                        (parentElement: any) => [
                        this.text('Add one clear next step')
                        ]),
                    this.html(`f5a4866b`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`14eae2aa`, "input", parentElement, { attrs: { "id": { type: 'static', value: "new-task" }, "type": { type: 'static', value: "text" }, "placeholder": { type: 'static', value: "What needs your attention?" } }, bind: { key: 'newTodo' } }),
                        this.html(`42ff8191`, "button", parentElement,
                            { attrs: { "type": { type: 'static', value: "submit" } } },
                            (parentElement: any) => [
                            this.text('Add task '),
                            this.html(`49fa209a`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('+')
                            ])
                            ])
                    ])
                    ]),
                this.html(`aa5f781d`, "div", parentElement,
                    { classes: [{ type: 'static', value: "todo-toolbar" }] },
                    (parentElement: any) => [
                    this.html(`47c6ff27`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`c0ff40d6`, "button", parentElement,
                            { classes: [{ type: 'binding', value: "active", factory: () => filter === 'all', stateKeys: ["filter"] }], events: { click: [(event: any) => setFilter('all')] } },
                            (parentElement: any) => [
                            this.text('All '),
                            this.html(`56d021bb`, "span", parentElement, {}, (parentElement: any) => [
                                this.output(`ba497928`, parentElement, true, ["todos"], (parentElement: any) => App.Helper.count(todos))
                            ])
                            ]),
                        this.html(`47caf5de`, "button", parentElement,
                            { classes: [{ type: 'binding', value: "active", factory: () => filter === 'active', stateKeys: ["filter"] }], events: { click: [(event: any) => setFilter('active')] } },
                            (parentElement: any) => [
                            this.text('Active '),
                            this.html(`c1808610`, "span", parentElement, {}, (parentElement: any) => [
                                this.output(`fd013c02`, parentElement, true, ["activeCount"], (parentElement: any) => activeCount)
                            ])
                            ]),
                        this.html(`f0106f39`, "button", parentElement,
                            { classes: [{ type: 'binding', value: "active", factory: () => filter === 'done', stateKeys: ["filter"] }], events: { click: [(event: any) => setFilter('done')] } },
                            (parentElement: any) => [
                            this.text('Done '),
                            this.html(`b8a215c9`, "span", parentElement, {}, (parentElement: any) => [
                                this.output(`5a677e1d`, parentElement, true, ["completedCount"], (parentElement: any) => completedCount)
                            ])
                            ])
                    ]),
                    this.html(`c99f5306`, "button", parentElement,
                        { classes: [{ type: 'static', value: "clear-button" }], props: { "disabled": { type: 'binding', factory: () => completedCount === 0, stateKeys: ["completedCount"] } }, events: { click: [{"handler":"clearCompleted","params":[]}] } },
                        (parentElement: any) => [
                        this.text('Clear completed')
                        ])
                    ]),
                this.html(`a734d4f3`, "div", parentElement,
                    { classes: [{ type: 'static', value: "todo-list" }] },
                    (parentElement: any) => [
                    this.reactive(`05835365`, "if", parentReactive, parentElement, ["todos"], (parentReactive: any, parentElement: any) => {
                        const reactiveContents = [];
                        if (App.Helper.count(todos) === 0) {
                            reactiveContents.push(
                            this.html(`b75e5ca7`, "div", parentElement,
                                { classes: [{ type: 'static', value: "empty-state" }] },
                                (parentElement: any) => [
                                this.html(`25a80dd0`, "span", parentElement, {}, (parentElement: any) => [
                                    this.text('○')
                                ]),
                                this.html(`7d094694`, "h2", parentElement, {}, (parentElement: any) => [
                                    this.text('Your queue is clear.')
                                ]),
                                this.html(`f32d7c84`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Add one meaningful task above.')
                                ])
                                ])
                            );
                        }
                        else {
                            reactiveContents.push(
                            this.reactive(`a1afe760`, "foreach", parentReactive, parentElement, ["todos"], (parentReactive: any, parentElement: any) => {
                                return this.__foreach(todos, (todo: any, __loopKey: any, __loopIndex: any, __loop: any) => [
                                    this.reactive(`8dd28e28-${todo['id']}`, "if", parentReactive, parentElement, ["filter"], (parentReactive: any, parentElement: any) => {
                                        const reactiveContents = [];
                                        if (filter === 'all' || (filter === 'active' && !todo['completed']) || (filter === 'done' && todo['completed'])) {
                                            reactiveContents.push(
                                            this.html(`da9a7a8e-${todo['id']}`, "article", parentElement,
                                                { classes: [{ type: 'static', value: "todo-row" }, { type: 'binding', value: "completed", factory: () => todo['completed'], stateKeys: [] }] },
                                                (parentElement: any) => [
                                                this.html(`3b156e92-${todo['id']}`, "button", parentElement,
                                                    { classes: [{ type: 'static', value: "todo-check" }], attrs: { "aria-label": { type: 'static', value: "Toggle task" } }, events: { click: [{"handler":"toggleTodo","params":[todo['id']]}] } },
                                                    (parentElement: any) => [
                                                    this.reactive(`aba5abe7-${todo['id']}`, "if", parentReactive, parentElement, [], (parentReactive: any, parentElement: any) => {
                                                        const reactiveContents = [];
                                                        if (todo['completed']) {
                                                            reactiveContents.push(
                                                            this.text('✓')
                                                            );
                                                        }
                                                        return reactiveContents;
                                                    })
                                                    ]),
                                                this.html(`82692654-${todo['id']}`, "div", parentElement, {}, (parentElement: any) => [
                                                    this.html(`0185855c-${todo['id']}`, "strong", parentElement, {}, (parentElement: any) => [
                                                        this.output(`70d19571-${todo['id']}`, parentElement, true, [], (parentElement: any) => todo['text'])
                                                    ]),
                                                    this.html(`3e7229d0-${todo['id']}`, "small", parentElement, {}, (parentElement: any) => [
                                                        this.text('SAOLA DEMO · TASK '),
                                                        this.output(`4e67dbd4-${todo['id']}`, parentElement, true, [], (parentElement: any) => todo['id'])
                                                    ])
                                                ]),
                                                this.html(`09d56e46-${todo['id']}`, "button", parentElement,
                                                    { classes: [{ type: 'static', value: "todo-delete" }], attrs: { "aria-label": { type: 'static', value: "Delete task" } }, events: { click: [{"handler":"deleteTodo","params":[todo['id']]}] } },
                                                    (parentElement: any) => [
                                                    this.text('×')
                                                    ])
                                                ])
                                            );
                                        }
                                        return reactiveContents;
                                    })
                                ], (todo: any) => todo['id'])
                            })
                            );
                        }
                        return reactiveContents;
                    })
                    ]),
                this.html(`f34c97bb`, "footer", parentElement,
                    { classes: [{ type: 'static', value: "todo-summary" }] },
                    (parentElement: any) => [
                    this.html(`903fa463`, "p", parentElement, {}, (parentElement: any) => [
                        this.html(`ee3f8d27`, "span", parentElement, {}, (parentElement: any) => [
                            this.output(`372a21ea`, parentElement, true, ["activeCount"], (parentElement: any) => activeCount)
                        ]),
                        this.text(' items still need attention.')
                    ]),
                    this.html(`f3e92dce`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "/about" } } },
                        (parentElement: any) => [
                        this.text('Why Saola handles this differently →')
                        ])
                    ])
                ])
            ]);
            this.superViewPath = `${__layout__+"workspace"}`;
            return this.extendView(this.superViewPath, {});
            }
        });

    }
}

// Export factory function
export function WebModulesHomeTodo(__data__: TodoProps = {}, systemData: any = {}): TodoView {
    return new TodoView(__data__, systemData);
}
export default WebModulesHomeTodo;
