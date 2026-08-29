import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.roster.index';
const __VIEW_NAMESPACE__ = 'web.modules.roster.';
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


const API = '/api/api/roster';




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
        const set$ids = __STATE__.__.register('ids');
        let ids: any = [];
        const setIds = (state: any) => {
            ids = state;
            set$ids(state);
        };
        __STATE__.__.setters.setIds = setIds;
        __STATE__.__.setters.ids = setIds;
        const update$ids = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('ids', value);
                ids = value;
            }
        };
        const set$records = __STATE__.__.register('records');
        let records: any = [];
        const setRecords = (state: any) => {
            records = state;
            set$records(state);
        };
        __STATE__.__.setters.setRecords = setRecords;
        __STATE__.__.setters.records = setRecords;
        const update$records = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('records', value);
                records = value;
            }
        };
        const set$editing = __STATE__.__.register('editing');
        let editing: any = [];
        const setEditing = (state: any) => {
            editing = state;
            set$editing(state);
        };
        __STATE__.__.setters.setEditing = setEditing;
        __STATE__.__.setters.editing = setEditing;
        const update$editing = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('editing', value);
                editing = value;
            }
        };
        const set$lastSync = __STATE__.__.register('lastSync');
        let lastSync: any = '';
        const setLastSync = (state: any) => {
            lastSync = state;
            set$lastSync(state);
        };
        __STATE__.__.setters.setLastSync = setLastSync;
        __STATE__.__.setters.lastSync = setLastSync;
        const update$lastSync = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('lastSync', value);
                lastSync = value;
            }
        };
        const set$syncError = __STATE__.__.register('syncError');
        let syncError: any = '';
        const setSyncError = (state: any) => {
            syncError = state;
            set$syncError(state);
        };
        __STATE__.__.setters.setSyncError = setSyncError;
        __STATE__.__.setters.syncError = setSyncError;
        const update$syncError = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('syncError', value);
                syncError = value;
            }
        };
        const set$creating = __STATE__.__.register('creating');
        let creating: any = false;
        const setCreating = (state: any) => {
            creating = state;
            set$creating(state);
        };
        __STATE__.__.setters.setCreating = setCreating;
        __STATE__.__.setters.creating = setCreating;
        const update$creating = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('creating', value);
                creating = value;
            }
        };
        const set$fName = __STATE__.__.register('fName');
        let fName: any = '';
        const setFName = (state: any) => {
            fName = state;
            set$fName(state);
        };
        __STATE__.__.setters.setFName = setFName;
        __STATE__.__.setters.fName = setFName;
        const update$fName = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('fName', value);
                fName = value;
            }
        };
        const set$fEmail = __STATE__.__.register('fEmail');
        let fEmail: any = '';
        const setFEmail = (state: any) => {
            fEmail = state;
            set$fEmail(state);
        };
        __STATE__.__.setters.setFEmail = setFEmail;
        __STATE__.__.setters.fEmail = setFEmail;
        const update$fEmail = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('fEmail', value);
                fEmail = value;
            }
        };
        const set$fGender = __STATE__.__.register('fGender');
        let fGender: any = 'other';
        const setFGender = (state: any) => {
            fGender = state;
            set$fGender(state);
        };
        __STATE__.__.setters.setFGender = setFGender;
        __STATE__.__.setters.fGender = setFGender;
        const update$fGender = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('fGender', value);
                fGender = value;
            }
        };
        const set$fBirthdate = __STATE__.__.register('fBirthdate');
        let fBirthdate: any = '';
        const setFBirthdate = (state: any) => {
            fBirthdate = state;
            set$fBirthdate(state);
        };
        __STATE__.__.setters.setFBirthdate = setFBirthdate;
        __STATE__.__.setters.fBirthdate = setFBirthdate;
        const update$fBirthdate = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('fBirthdate', value);
                fBirthdate = value;
            }
        };
        const __VARIABLE_LIST__: any = [];


        this.__ctrl__.setUserDefinedConfig({
            name: 'RosterPage',

                // ─── Lifecycle ──────────────────────────────────────────
                // started/stopped: kích hoạt & huỷ kích hoạt bình thường.
                // resumed/paused : quay lại & rời PageCache (DOM còn, view ngủ).
                started() { this.activate(); },
                resumed() { this.activate(); },
                stopped() { this.deactivate(); },
                paused() { this.deactivate(); },
                destroyed() { this.deactivate(); },

                activate() {
                    if (this._timer) return;
                    this._timer = setInterval(() => this.load(), 30000);
                    this._off = [
                        // Hàng con báo lên "tôi đang mở form" — parent cần biết để KHÔNG
                        // gỡ hàng khi server đã xoá bản ghi đó.
                        App.Event.on('roster:editing', (uid, on) => {
                            const next = { ...editing };
                            if (on) next[uid] = true; else delete next[uid];
                            setEditing(next);
                        }),
                        // Bản ghi vừa lưu do chính hàng con đẩy lên — gộp ngay để hàng
                        // không hiện dữ liệu cũ trong lúc chờ lượt fetch kế tiếp.
                        App.Event.on('roster:record', (rec) => {
                            if (!rec || !rec.uuid) return;
                            setRecords({ ...records, [rec.uuid]: rec });
                            if (!ids.includes(rec.uuid)) setIds([...ids, rec.uuid]);
                        }),
                        App.Event.on('roster:refresh', () => this.load())
                    ];
                    this.load();
                },

                deactivate() {
                    clearInterval(this._timer);
                    this._timer = null;
                    (this._off || []).forEach(off => off());
                    this._off = [];
                },

                // ─── Fetch ──────────────────────────────────────────────
                async load() {
                    try {
                        const res = await App.Http.get(API);
                        setSyncError('');
                        this.applyServer(res.data.data || []);
                    } catch (e) {
                        setSyncError('Không tải được danh sách: ' + (e.message || e));
                    }
                },

                /**
                 * Hoà bản server vào state hiện tại.
                 *
                 * Hai quy tắc giữ cho form đang mở không bị đập:
                 *   1. updated_at không đổi ⇒ GIỮ NGUYÊN object ref cũ. Ref không đổi
                 *      thì Component không đẩy prop, hàng đó không render lại.
                 *   2. Bản ghi biến mất mà hàng đó đang được sửa ⇒ giữ id lại trong
                 *      danh sách và đặt record = null. null chính là tín hiệu "bia mộ"
                 *      để item view hiện khối "người khác vừa xoá".
                 */
                applyServer(list) {
                    const byId = {};
                    for (const u of list) byId[u.uuid] = u;

                    const nextIds = [];
                    for (const id of ids) {
                        if (byId[id] || editing[id]) nextIds.push(id);
                    }
                    for (const u of list) {
                        if (!ids.includes(u.uuid)) nextIds.push(u.uuid);
                    }

                    const nextRecords = {};
                    let changed = nextIds.length !== ids.length;
                    for (let i = 0; i < nextIds.length; i++) {
                        const id = nextIds[i];
                        if (id !== ids[i]) changed = true;

                        const fresh = byId[id] || null;
                        const cur = records[id];
                        const same = fresh && cur && cur.updated_at === fresh.updated_at;
                        nextRecords[id] = same ? cur : fresh;
                        if (nextRecords[id] !== cur) changed = true;
                    }

                    if (changed) {
                        setIds(nextIds);
                        setRecords(nextRecords);
                    }
                    setLastSync(new Date().toLocaleTimeString());
                },

                // ─── Create ─────────────────────────────────────────────
                async createUser(event) {
                    event.preventDefault();
                    if (creating) return;
                    setCreating(true);
                    try {
                        await App.Http.post(API, {
                            name: fName,
                            email: fEmail,
                            gender: fGender,
                            birthdate: fBirthdate
                        });
                        setFName('');
                        setFEmail('');
                        setFBirthdate('');
                        setSyncError('');
                        await this.load();
                    } catch (e) {
                        setSyncError('Không tạo được user: ' + (e.message || e));
                    } finally {
                        setCreating(false);
                    }
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
            styles: [{"type":"href","href":"/static/saola/roster.css"}],
            resources: [{"tag":"link","uuid":"link-0","attrs":{"rel":"stylesheet","href":"/static/saola/roster.css"}}],
            commitConstructorData: function(this: any) {
                // Then update states from data
                update$ids([]);
                update$records([]);
                update$editing([]);
                update$lastSync('');
                update$syncError('');
                update$creating(false);
                update$fName('');
                update$fEmail('');
                update$fGender('other');
                update$fBirthdate('');
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
            this.html(`Bworkspace1`, "div", parentElement,
                { classes: [{ type: 'static', value: "rs-page" }] },
                (parentElement: any) => [
                this.html(`Bworkspace11`, "header", parentElement,
                    { classes: [{ type: 'static', value: "workspace-topbar" }] },
                    (parentElement: any) => [
                    this.html(`Bworkspace111`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`Bworkspace1111`, "p", parentElement,
                            { classes: [{ type: 'static', value: "eyebrow" }] },
                            (parentElement: any) => [
                            this.html(`Bworkspace11111`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('05')
                            ]),
                            this.text(' Concurrent editing')
                            ]),
                        this.html(`Bworkspace1112`, "h1", parentElement, {}, (parentElement: any) => [
                            this.text('Danh sách người dùng')
                        ])
                    ]),
                    this.html(`Bworkspace112`, "div", parentElement,
                        { classes: [{ type: 'static', value: "completion-ring" }] },
                        (parentElement: any) => [
                        this.html(`Bworkspace1121`, "strong", parentElement, {}, (parentElement: any) => [
                            this.output(`Bworkspace1121o1`, parentElement, true, ["ids"], (parentElement: any) => App.Helper.count(ids))
                        ]),
                        this.html(`Bworkspace1122`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('users')
                        ])
                        ])
                    ]),
                this.html(`Bworkspace12`, "p", parentElement,
                    { classes: [{ type: 'static', value: "rs-lead" }] },
                    (parentElement: any) => [
                    this.text('Danh sách tự kéo lại mỗi 30 giây. Mỗi hàng có form sửa riêng — nếu người khác sửa hoặc xoá đúng bản ghi bạn đang mở, bản nháp của bạn được giữ nguyên và bạn được hỏi trước khi mất bất cứ thứ gì.')
                    ]),
                this.html(`Bworkspace13`, "dl", parentElement,
                    { classes: [{ type: 'static', value: "rs-stats" }] },
                    (parentElement: any) => [
                    this.html(`Bworkspace131`, "div", parentElement,
                        { classes: [{ type: 'static', value: "rs-stat" }] },
                        (parentElement: any) => [
                        this.html(`Bworkspace1311`, "dt", parentElement, {}, (parentElement: any) => [
                            this.text('Người dùng')
                        ]),
                        this.html(`Bworkspace1312`, "dd", parentElement, {}, (parentElement: any) => [
                            this.output(`Bworkspace1312o1`, parentElement, true, ["ids"], (parentElement: any) => App.Helper.count(ids))
                        ])
                        ]),
                    this.html(`Bworkspace132`, "div", parentElement,
                        { classes: [{ type: 'static', value: "rs-stat" }] },
                        (parentElement: any) => [
                        this.html(`Bworkspace1321`, "dt", parentElement, {}, (parentElement: any) => [
                            this.text('Nhịp đồng bộ')
                        ]),
                        this.html(`Bworkspace1322`, "dd", parentElement, {}, (parentElement: any) => [
                            this.text('30 '),
                            this.html(`Bworkspace13221`, "small", parentElement, {}, (parentElement: any) => [
                                this.text('giây')
                            ])
                        ])
                        ]),
                    this.html(`Bworkspace133`, "div", parentElement,
                        { classes: [{ type: 'static', value: "rs-stat" }] },
                        (parentElement: any) => [
                        this.html(`Bworkspace1331`, "dt", parentElement, {}, (parentElement: any) => [
                            this.text('Đồng bộ lần cuối')
                        ]),
                        this.reactive(`Bworkspace133r1`, "if", parentReactive, parentElement, ["lastSync"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (lastSync === '') {
                                reactiveContents.push(
                                this.html(`Bworkspace133r1k11`, "dd", parentElement, {}, (parentElement: any) => [
                                    this.html(`Bworkspace133r1k111`, "small", parentElement, {}, (parentElement: any) => [
                                        this.text('chưa chạy')
                                    ])
                                ])
                                );
                            }
                            else {
                                reactiveContents.push(
                                this.html(`Bworkspace133r1k21`, "dd", parentElement, {}, (parentElement: any) => [
                                    this.output(`Bworkspace133r1k21o1`, parentElement, true, ["lastSync"], (parentElement: any) => lastSync)
                                ])
                                );
                            }
                            return reactiveContents;
                        })
                        ])
                    ]),
                this.reactive(`Bworkspace1r1`, "if", parentReactive, parentElement, ["syncError"], (parentReactive: any, parentElement: any) => {
                    const reactiveContents = [];
                    if (syncError !== '') {
                        reactiveContents.push(
                        this.html(`Bworkspace1r1k11`, "p", parentElement,
                            { classes: [{ type: 'static', value: "rs-alert" }, { type: 'static', value: "rs-alert--danger" }, { type: 'static', value: "rs-alert--error" }] },
                            (parentElement: any) => [
                            this.output(`Bworkspace1r1k11o1`, parentElement, true, ["syncError"], (parentElement: any) => syncError)
                            ])
                        );
                    }
                    return reactiveContents;
                }),
                this.html(`Bworkspace14`, "section", parentElement,
                    { classes: [{ type: 'static', value: "rs-card" }] },
                    (parentElement: any) => [
                    this.html(`Bworkspace141`, "div", parentElement,
                        { classes: [{ type: 'static', value: "rs-card-head" }] },
                        (parentElement: any) => [
                        this.html(`Bworkspace1411`, "h2", parentElement, {}, (parentElement: any) => [
                            this.text('Thêm người dùng')
                        ]),
                        this.html(`Bworkspace1412`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Bản ghi mới được server cấp uuid và mốc version.')
                        ])
                        ]),
                    this.html(`Bworkspace142`, "form", parentElement,
                        { classes: [{ type: 'static', value: "rs-form-grid" }], events: { submit: [{"handler":"createUser","params":[() => event]}] } },
                        (parentElement: any) => [
                        this.html(`Bworkspace1421`, "label", parentElement,
                            { classes: [{ type: 'static', value: "rs-field" }] },
                            (parentElement: any) => [
                            this.html(`Bworkspace14211`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('Họ tên')
                            ]),
                            this.html(`Bworkspace14212`, "input", parentElement, { attrs: { "type": { type: 'static', value: "text" }, "placeholder": { type: 'static', value: "Nguyễn Văn A" } }, bind: { key: 'fName' } })
                            ]),
                        this.html(`Bworkspace1422`, "label", parentElement,
                            { classes: [{ type: 'static', value: "rs-field" }] },
                            (parentElement: any) => [
                            this.html(`Bworkspace14221`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('Email')
                            ]),
                            this.html(`Bworkspace14222`, "input", parentElement, { attrs: { "type": { type: 'static', value: "email" }, "placeholder": { type: 'static', value: "a@saola.dev" } }, bind: { key: 'fEmail' } })
                            ]),
                        this.html(`Bworkspace1423`, "label", parentElement,
                            { classes: [{ type: 'static', value: "rs-field" }] },
                            (parentElement: any) => [
                            this.html(`Bworkspace14231`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('Giới tính')
                            ]),
                            this.html(`Bworkspace14232`, "select", parentElement,
                                { bind: { key: 'fGender' } },
                                (parentElement: any) => [
                                this.html(`Bworkspace142321`, "option", parentElement,
                                    { attrs: { "value": { type: 'static', value: "male" } } },
                                    (parentElement: any) => [
                                    this.text('male')
                                    ]),
                                this.html(`Bworkspace142322`, "option", parentElement,
                                    { attrs: { "value": { type: 'static', value: "female" } } },
                                    (parentElement: any) => [
                                    this.text('female')
                                    ]),
                                this.html(`Bworkspace142323`, "option", parentElement,
                                    { attrs: { "value": { type: 'static', value: "other" } } },
                                    (parentElement: any) => [
                                    this.text('other')
                                    ])
                                ])
                            ]),
                        this.html(`Bworkspace1424`, "label", parentElement,
                            { classes: [{ type: 'static', value: "rs-field" }] },
                            (parentElement: any) => [
                            this.html(`Bworkspace14241`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('Ngày sinh')
                            ]),
                            this.html(`Bworkspace14242`, "input", parentElement, { attrs: { "type": { type: 'static', value: "date" } }, bind: { key: 'fBirthdate' } })
                            ]),
                        this.html(`Bworkspace1425`, "div", parentElement,
                            { classes: [{ type: 'static', value: "rs-form-actions" }] },
                            (parentElement: any) => [
                            this.html(`Bworkspace14251`, "button", parentElement,
                                { classes: [{ type: 'static', value: "rs-btn" }, { type: 'static', value: "rs-btn-primary" }], attrs: { "type": { type: 'static', value: "submit" } }, props: { "disabled": { type: 'binding', factory: () => creating, stateKeys: ["creating"] } } },
                                (parentElement: any) => [
                                this.text('Thêm người dùng')
                                ])
                            ])
                        ])
                    ]),
                this.html(`Bworkspace15`, "div", parentElement,
                    { classes: [{ type: 'static', value: "rs-list-head" }] },
                    (parentElement: any) => [
                    this.html(`Bworkspace151`, "h2", parentElement, {}, (parentElement: any) => [
                        this.text('Bản ghi')
                    ]),
                    this.html(`Bworkspace152`, "div", parentElement,
                        { classes: [{ type: 'static', value: "rs-list-tools" }] },
                        (parentElement: any) => [
                        this.html(`Bworkspace1521`, "span", parentElement,
                            { classes: [{ type: 'static', value: "rs-pulse" }] },
                            (parentElement: any) => [
                            this.html(`Bworkspace15211`, "span", parentElement, { classes: [{ type: 'static', value: "rs-pulse-dot" }] }),
                            this.text(' Tự đồng bộ mỗi 30 giây')
                            ]),
                        this.html(`Bworkspace1522`, "button", parentElement,
                            { classes: [{ type: 'static', value: "rs-btn" }, { type: 'static', value: "rs-btn-sm" }, { type: 'static', value: "rs-btn-ghost" }], attrs: { "type": { type: 'static', value: "button" } }, events: { click: [{"handler":"load","params":[]}] } },
                            (parentElement: any) => [
                            this.text('Đồng bộ ngay')
                            ])
                        ])
                    ]),
                this.html(`Bworkspace16`, "div", parentElement,
                    { classes: [{ type: 'static', value: "rs-list" }] },
                    (parentElement: any) => [
                    this.reactive(`Bworkspace16l1`, "foreach", parentReactive, parentElement, ["ids"], (parentReactive: any, parentElement: any) => {
                        return this.__foreach(ids, (id: any, __loopKey: any, __loopIndex: any, __loop: any) => [
                            this.html(`Bworkspace16l11-${id}`, "div", parentElement,
                                { classes: [{ type: 'static', value: "rs-slot" }] },
                                (parentElement: any) => [
                                this.include(`Bworkspace16l11c1-${id}`, 'web.modules.roster.item', parentElement, ["records"], (parentElement: any) => ({"uid": id, "record": records[id] ?? null}))
                                ])
                        ], (id: any) => id)
                    })
                    ]),
                this.reactive(`Bworkspace1r2`, "if", parentReactive, parentElement, ["ids"], (parentReactive: any, parentElement: any) => {
                    const reactiveContents = [];
                    if (App.Helper.count(ids) === 0) {
                        reactiveContents.push(
                        this.html(`Bworkspace1r2k11`, "p", parentElement,
                            { classes: [{ type: 'static', value: "rs-empty" }] },
                            (parentElement: any) => [
                            this.text('Chưa có ai trong danh sách. Thêm người dùng đầu tiên ở form phía trên.')
                            ])
                        );
                    }
                    return reactiveContents;
                })
                ])
            ]);
            this.superViewPath = `${__layout__+"workspace"}`;
            return this.extendView(this.superViewPath, {});
            }
        });

    }
}

// Export factory function
export function WebModulesRosterIndex(__data__ = {}, systemData = {}): IndexView {
    return new IndexView(__data__, systemData);
}
export default WebModulesRosterIndex;