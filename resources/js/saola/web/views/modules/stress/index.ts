import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.stress.index';
const __VIEW_NAMESPACE__ = 'web.modules.stress.';
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
export interface IndexProps {
    /** viewId server gán khi hydrate */
    __SSR_VIEW_ID__?: string;
    [key: string]: any;
}



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
        const set$users = __STATE__.__.register('users');
        let users: any = [{"id": 1, "name": "Mai Lan", "email": "lan@saola.dev", "rev": 1, "active": true, "roles": [{"name": "admin"}, {"name": "dev"}]}, {"id": 2, "name": "Trần Bảo", "email": "bao@saola.dev", "rev": 1, "active": false, "roles": [{"name": "viewer"}]}, {"id": 3, "name": "Hồ Vy", "email": "vy@saola.dev", "rev": 1, "active": true, "roles": []}];
        const setUsers = (state: any) => {
            users = state;
            set$users(state);
        };
        __STATE__.__.setters.setUsers = setUsers;
        __STATE__.__.setters.users = setUsers;
        const update$users = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('users', value);
                users = value;
            }
        };
        const set$tags = __STATE__.__.register('tags');
        let tags: any = ["hydration", "reactive", "loop", "cleanup"];
        const setTags = (state: any) => {
            tags = state;
            set$tags(state);
        };
        __STATE__.__.setters.setTags = setTags;
        __STATE__.__.setters.tags = setTags;
        const update$tags = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('tags', value);
                tags = value;
            }
        };
        const set$query = __STATE__.__.register('query');
        let query: any = '';
        const setQuery = (state: any) => {
            query = state;
            set$query(state);
        };
        __STATE__.__.setters.setQuery = setQuery;
        __STATE__.__.setters.query = setQuery;
        const update$query = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('query', value);
                query = value;
            }
        };
        const set$selectedId = __STATE__.__.register('selectedId');
        let selectedId: any = 0;
        const setSelectedId = (state: any) => {
            selectedId = state;
            set$selectedId(state);
        };
        __STATE__.__.setters.setSelectedId = setSelectedId;
        __STATE__.__.setters.selectedId = setSelectedId;
        const update$selectedId = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('selectedId', value);
                selectedId = value;
            }
        };
        const set$refreshCount = __STATE__.__.register('refreshCount');
        let refreshCount: any = 0;
        const setRefreshCount = (state: any) => {
            refreshCount = state;
            set$refreshCount(state);
        };
        __STATE__.__.setters.setRefreshCount = setRefreshCount;
        __STATE__.__.setters.refreshCount = setRefreshCount;
        const update$refreshCount = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('refreshCount', value);
                refreshCount = value;
            }
        };
        const set$modalOpen = __STATE__.__.register('modalOpen');
        let modalOpen: any = false;
        const setModalOpen = (state: any) => {
            modalOpen = state;
            set$modalOpen(state);
        };
        __STATE__.__.setters.setModalOpen = setModalOpen;
        __STATE__.__.setters.modalOpen = setModalOpen;
        const update$modalOpen = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('modalOpen', value);
                modalOpen = value;
            }
        };
        const set$banner = __STATE__.__.register('banner');
        let banner: any = '';
        const setBanner = (state: any) => {
            banner = state;
            set$banner(state);
        };
        __STATE__.__.setters.setBanner = setBanner;
        __STATE__.__.setters.banner = setBanner;
        const update$banner = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('banner', value);
                banner = value;
            }
        };
        const __VARIABLE_LIST__: any = [];


        this.__ctrl__.setUserDefinedConfig({
            name: 'StressPage',

                /**
                 * Mô phỏng ĐÚNG một lần refetch: dữ liệu giống hệt về cấu trúc nhưng
                 * MỌI object là reference mới (như JSON.parse của response thật).
                 * Đây là đường từng làm view con của @include biến mất khỏi DOM.
                 */
                refreshFromServer() {
                    const next = JSON.parse(JSON.stringify(users)).map(u => ({ ...u, rev: u.rev + 1 }));
                    setUsers(next);
                    setRefreshCount(refreshCount + 1);
                },

                applyQuery() {
                    const q = query.trim().toLowerCase();
                    if (!q) return;
                    setUsers(users.filter(u => u.name.toLowerCase().includes(q)));
                },

                selectUser(id) {
                    setSelectedId(selectedId === id ? 0 : id);
                },

                removeUser(id) {
                    setUsers(users.filter(u => u.id !== id));
                },

                showBannerOnce() {
                    setBanner('Nút này đã dùng hết lượt (.once).');
                },

                openModal() { setModalOpen(true); },
                closeModal() { setModalOpen(false); }
        });

        this.__ctrl__.setup({
            superView: `${__layout__+"workspace"}`,
            subscribe: true,
            fetch: null,
            data: __data__,
            viewId: __VIEW_ID__,
            path: __VIEW_PATH__,
            scripts: [],
            styles: [{"type":"code","content":".stress.se4890c80 { display: grid; gap: 16px; }\n    .stress__bar.se4890c80 { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }\n    .stress__bar input.se4890c80 { flex: 1 1 220px; }\n    .stress__banner.se4890c80 { padding: 8px 12px; background: rgba(43, 80, 255, .08); }\n    .stress__list.se4890c80 { display: grid; gap: 8px; }\n    .stress__row.se4890c80 { display: grid; grid-template-columns: 1fr auto auto; gap: 10px; align-items: center;\n        border: 1px solid rgba(0, 0, 0, .12); padding: 6px; cursor: pointer; }\n    .stress__roles.se4890c80 { display: flex; gap: 6px; flex-wrap: wrap; }\n    .stress__roles--empty.se4890c80 { opacity: .45; font-size: 13px; }\n    .chip.se4890c80 { padding: 2px 8px; border: 1px solid currentColor; font-size: 12px; }\n    .chip--tag.se4890c80 { opacity: .7; }\n    .stress__del.se4890c80 { border: 0; background: none; font-size: 20px; line-height: 1; cursor: pointer; }\n    .stress__tags.se4890c80 { display: flex; gap: 6px; flex-wrap: wrap; }\n    .stress__foot.se4890c80 { display: flex; justify-content: space-between; align-items: center; }\n\n    .stress__backdrop.se4890c80 { position: fixed; inset: 0; display: grid; place-items: center;\n        background: rgba(0, 0, 0, .45); }\n    .stress__modal.se4890c80 { background: #fff; padding: 24px; min-width: 280px; }\n\n    /* @transition('row') — enter/leave cho hàng danh sách */\n    .row-enter-active.se4890c80, .row-leave-active.se4890c80 { transition: opacity .18s ease, transform .18s ease; }\n    .row-enter-from.se4890c80, .row-leave-to.se4890c80 { opacity: 0; transform: translateY(-6px); }\n\n    /* @transition('fade') — modal */\n    .fade-enter-active.se4890c80, .fade-leave-active.se4890c80 { transition: opacity .15s ease; }\n    .fade-enter-from.se4890c80, .fade-leave-to.se4890c80 { opacity: 0; }"}],
            resources: [],
            commitConstructorData: function(this: any) {
                // Then update states from data
                update$users([{"id": 1, "name": "Mai Lan", "email": "lan@saola.dev", "rev": 1, "active": true, "roles": [{"name": "admin"}, {"name": "dev"}]}, {"id": 2, "name": "Trần Bảo", "email": "bao@saola.dev", "rev": 1, "active": false, "roles": [{"name": "viewer"}]}, {"id": 3, "name": "Hồ Vy", "email": "vy@saola.dev", "rev": 1, "active": true, "roles": []}]);
                update$tags(["hydration", "reactive", "loop", "cleanup"]);
                update$query('');
                update$selectedId(0);
                update$refreshCount(0);
                update$modalOpen(false);
                update$banner('');
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
            this.html(`Bworkspace1`, "header", parentElement,
                { classes: [{ type: 'static', value: "se4890c80" }, { type: 'static', value: "workspace-topbar" }] },
                (parentElement: any) => [
                this.html(`Bworkspace11`, "div", parentElement,
                    { classes: [{ type: 'static', value: "se4890c80" }] },
                    (parentElement: any) => [
                    this.html(`Bworkspace111`, "p", parentElement,
                        { classes: [{ type: 'static', value: "se4890c80" }, { type: 'static', value: "eyebrow" }] },
                        (parentElement: any) => [
                        this.html(`Bworkspace1111`, "span", parentElement,
                            { classes: [{ type: 'static', value: "se4890c80" }] },
                            (parentElement: any) => [
                            this.text('04')
                            ]),
                        this.text(' Stress harness')
                        ]),
                    this.html(`Bworkspace112`, "h1", parentElement,
                        { classes: [{ type: 'static', value: "se4890c80" }] },
                        (parentElement: any) => [
                        this.text('Reactive · Hydration · Loop · Cleanup')
                        ])
                    ]),
                this.html(`Bworkspace12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "se4890c80" }, { type: 'static', value: "completion-ring" }] },
                    (parentElement: any) => [
                    this.html(`Bworkspace121`, "strong", parentElement,
                        { classes: [{ type: 'static', value: "se4890c80" }] },
                        (parentElement: any) => [
                        this.text(String(activeCount ?? '')),
                        this.text('/'),
                        this.output(`Bworkspace121o1`, parentElement, true, ["users"], (parentElement: any) => App.Helper.count(users))
                        ]),
                    this.html(`Bworkspace122`, "span", parentElement,
                        { classes: [{ type: 'static', value: "se4890c80" }] },
                        (parentElement: any) => [
                        this.text('active')
                        ])
                    ])
                ]),
            this.html(`Bworkspace2`, "section", parentElement,
                { classes: [{ type: 'static', value: "se4890c80" }, { type: 'static', value: "stress" }] },
                (parentElement: any) => [
                this.html(`Bworkspace21`, "form", parentElement,
                    { classes: [{ type: 'static', value: "se4890c80" }, { type: 'static', value: "stress__bar" }], events: { submit: [{"handler":"applyQuery","params":[]}] }, eventModifiers: { submit: ["prevent"] } },
                    (parentElement: any) => [
                    this.html(`Bworkspace211`, "input", parentElement, { classes: [{ type: 'static', value: "se4890c80" }], attrs: { "type": { type: 'static', value: "text" }, "placeholder": { type: 'static', value: "Lọc theo tên…" } }, bind: { key: 'query' } }),
                    this.html(`Bworkspace212`, "button", parentElement,
                        { classes: [{ type: 'static', value: "se4890c80" }], attrs: { "type": { type: 'static', value: "submit" } } },
                        (parentElement: any) => [
                        this.text('Lọc')
                        ]),
                    this.html(`Bworkspace213`, "button", parentElement,
                        { classes: [{ type: 'static', value: "se4890c80" }], attrs: { "type": { type: 'static', value: "button" } }, events: { click: [{"handler":"refreshFromServer","params":[]}] } },
                        (parentElement: any) => [
                        this.text('Refresh từ server '),
                        this.html(`Bworkspace2131`, "span", parentElement,
                            { classes: [{ type: 'static', value: "se4890c80" }] },
                            (parentElement: any) => [
                            this.text('('),
                            this.output(`Bworkspace2131o1`, parentElement, true, ["refreshCount"], (parentElement: any) => refreshCount),
                            this.text(')')
                            ])
                        ]),
                    this.html(`Bworkspace214`, "button", parentElement,
                        { classes: [{ type: 'static', value: "se4890c80" }], attrs: { "type": { type: 'static', value: "button" } }, events: { click: [{"handler":"showBannerOnce","params":[]}] }, eventModifiers: { click: ["once"] } },
                        (parentElement: any) => [
                        this.text('Chỉ chạy 1 lần')
                        ])
                    ]),
                this.reactive(`Bworkspace2r1`, "if", parentReactive, parentElement, ["banner"], (parentReactive: any, parentElement: any) => {
                    const reactiveContents = [];
                    if (banner !== '') {
                        reactiveContents.push(
                        this.html(`Bworkspace2r1k11`, "p", parentElement,
                            { classes: [{ type: 'static', value: "se4890c80" }, { type: 'static', value: "stress__banner" }] },
                            (parentElement: any) => [
                            this.output(`Bworkspace2r1k11o1`, parentElement, true, ["banner"], (parentElement: any) => banner)
                            ])
                        );
                    }
                    return reactiveContents;
                }),
                this.html(`Bworkspace22`, "div", parentElement,
                    { classes: [{ type: 'static', value: "se4890c80" }, { type: 'static', value: "stress__list" }] },
                    (parentElement: any) => [
                    this.reactive(`Bworkspace22l1`, "foreach", parentReactive, parentElement, ["users"], (parentReactive: any, parentElement: any) => {
                        return this.__foreach(users, (user: any, __loopKey: any, __loopIndex: any, __loop: any) => [
                            this.html(`Bworkspace22l11-${user['id']}`, "article", parentElement,
                                { classes: [{ type: 'static', value: "se4890c80" }, { type: 'static', value: "stress__row" }], events: { click: [{"handler":"selectUser","params":[user['id']]}] }, transition: { name: 'row' } },
                                (parentElement: any) => [
                                this.include(`Bworkspace22l11c1-${user['id']}`, 'web.modules.stress.usercard', parentElement, ["selectedId"], (parentElement: any) => ({"user": user, "highlight": selectedId === user['id']})),
                                this.reactive(`Bworkspace22l11r1-${user['id']}`, "if", parentReactive, parentElement, [], (parentReactive: any, parentElement: any) => {
                                    const reactiveContents = [];
                                    if (App.Helper.count(user['roles']) > 0) {
                                        reactiveContents.push(
                                        this.html(`Bworkspace22l11r1k11-${user['id']}`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "se4890c80" }, { type: 'static', value: "stress__roles" }] },
                                            (parentElement: any) => [
                                            ...this.__foreach(user['roles'], (role: any, __loopKey: any, __loopIndex: any, __loop: any) => [
                                                    this.html(`Bworkspace22l11r1k11l11-${user['id']}-${__loopIndex}`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "se4890c80" }, { type: 'static', value: "chip" }] },
                                                        (parentElement: any) => [
                                                        this.output(`Bworkspace22l11r1k11l11o1-${user['id']}-${__loopIndex}`, parentElement, true, [], (parentElement: any) => role['name'])
                                                        ])
                                            ])
                                            ])
                                        );
                                    }
                                    else {
                                        reactiveContents.push(
                                        this.html(`Bworkspace22l11r1k21-${user['id']}`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "se4890c80" }, { type: 'static', value: "stress__roles" }, { type: 'static', value: "stress__roles--empty" }] },
                                            (parentElement: any) => [
                                            this.text('chưa có vai trò')
                                            ])
                                        );
                                    }
                                    return reactiveContents;
                                }),
                                this.html(`Bworkspace22l111-${user['id']}`, "button", parentElement,
                                    { classes: [{ type: 'static', value: "se4890c80" }, { type: 'static', value: "stress__del" }], events: { click: [{"handler":"removeUser","params":[user['id']]}] }, eventModifiers: { click: ["stop"] } },
                                    (parentElement: any) => [
                                    this.text('×')
                                    ])
                                ])
                        ], (user: any) => user['id'])
                    })
                    ]),
                this.html(`Bworkspace23`, "div", parentElement,
                    { classes: [{ type: 'static', value: "se4890c80" }, { type: 'static', value: "stress__tags" }] },
                    (parentElement: any) => [
                    this.reactive(`Bworkspace23l1`, "foreach", parentReactive, parentElement, ["tags"], (parentReactive: any, parentElement: any) => {
                        return this.__foreach(tags, (tag: any, __loopKey: any, __loopIndex: any, __loop: any) => [
                            this.html(`Bworkspace23l11-${__loopIndex}`, "span", parentElement,
                                { classes: [{ type: 'static', value: "se4890c80" }, { type: 'static', value: "chip" }, { type: 'static', value: "chip--tag" }] },
                                (parentElement: any) => [
                                this.output(`Bworkspace23l11o1-${__loopIndex}`, parentElement, true, [], (parentElement: any) => tag)
                                ])
                        ])
                    })
                    ]),
                this.html(`Bworkspace24`, "footer", parentElement,
                    { classes: [{ type: 'static', value: "se4890c80" }, { type: 'static', value: "stress__foot" }] },
                    (parentElement: any) => [
                    this.html(`Bworkspace241`, "span", parentElement,
                        { classes: [{ type: 'static', value: "se4890c80" }] },
                        (parentElement: any) => [
                        this.text(String(totalRoles ?? '')),
                        this.text(' vai trò')
                        ]),
                    this.html(`Bworkspace242`, "button", parentElement,
                        { classes: [{ type: 'static', value: "se4890c80" }], attrs: { "type": { type: 'static', value: "button" } }, events: { click: [{"handler":"openModal","params":[]}] } },
                        (parentElement: any) => [
                        this.text('Mở modal')
                        ])
                    ])
                ]),
            this.reactive(`Bworkspacer1`, "if", parentReactive, parentElement, ["modalOpen"], (parentReactive: any, parentElement: any) => {
                const reactiveContents = [];
                if (modalOpen) {
                    reactiveContents.push(
                    this.html(`Bworkspacer1k11`, "div", parentElement,
                        { classes: [{ type: 'static', value: "se4890c80" }, { type: 'static', value: "stress__backdrop" }], events: { click: [{"handler":"closeModal","params":[]}] }, eventModifiers: { click: ["self"] }, transition: { name: 'fade' } },
                        (parentElement: any) => [
                        this.html(`Bworkspacer1k111`, "div", parentElement,
                            { classes: [{ type: 'static', value: "se4890c80" }, { type: 'static', value: "stress__modal" }] },
                            (parentElement: any) => [
                            this.html(`Bworkspacer1k1111`, "h2", parentElement,
                                { classes: [{ type: 'static', value: "se4890c80" }] },
                                (parentElement: any) => [
                                this.text('Modal')
                                ]),
                            this.html(`Bworkspacer1k1112`, "p", parentElement,
                                { classes: [{ type: 'static', value: "se4890c80" }] },
                                (parentElement: any) => [
                                this.text('Bấm ra nền để đóng. Bấm trong hộp thì không.')
                                ]),
                            this.html(`Bworkspacer1k1113`, "button", parentElement,
                                { classes: [{ type: 'static', value: "se4890c80" }], attrs: { "type": { type: 'static', value: "button" } }, events: { click: [{"handler":"closeModal","params":[]}] } },
                                (parentElement: any) => [
                                this.text('Đóng')
                                ])
                            ])
                        ])
                    );
                }
                return reactiveContents;
            })
            ]);
            this.superViewPath = `${__layout__+"workspace"}`;
            return this.extendView(this.superViewPath, {});
            }
        });

    }
}

// Export factory function
export function WebModulesStressIndex(__data__ = {}, systemData = {}): IndexView {
    return new IndexView(__data__, systemData);
}
export default WebModulesStressIndex;