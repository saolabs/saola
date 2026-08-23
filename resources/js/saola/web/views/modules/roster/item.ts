import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.roster.item';
const __VIEW_NAMESPACE__ = 'web.modules.roster.';
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


const API = '/api/api/roster';




/**
 * Props của view — sinh tự động từ @props/@vars, không sửa tay.
 * Optional hết vì khai báo nào cũng có default.
 */
export interface ItemProps {
    uid?: string;
    record?: any;
    /** viewId server gán khi hydrate */
    __SSR_VIEW_ID__?: string;
    [key: string]: any;
}

class ItemViewController extends ViewController {
    constructor(view: View) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this as any).setStaticConfig === 'function') {
            (this as any).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this as any).config = __VIEW_CONFIG__;
        }
    }
}

class ItemView extends View {
    constructor(__data__: ItemProps = {}, systemData: any = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, ItemViewController);
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
        let {uid = '', record = null} = __data__;
        __STATE__.__.register('uid', uid);
        __STATE__.__.register('record', record);
        const set$editing = __STATE__.__.register('editing');
        let editing: any = false;
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
        const set$base = __STATE__.__.register('base');
        let base: any = null;
        const setBase = (state: any) => {
            base = state;
            set$base(state);
        };
        __STATE__.__.setters.setBase = setBase;
        __STATE__.__.setters.base = setBase;
        const update$base = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('base', value);
                base = value;
            }
        };
        const set$busy = __STATE__.__.register('busy');
        let busy: any = false;
        const setBusy = (state: any) => {
            busy = state;
            set$busy(state);
        };
        __STATE__.__.setters.setBusy = setBusy;
        __STATE__.__.setters.busy = setBusy;
        const update$busy = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('busy', value);
                busy = value;
            }
        };
        const set$note = __STATE__.__.register('note');
        let note: any = '';
        const setNote = (state: any) => {
            note = state;
            set$note(state);
        };
        __STATE__.__.setters.setNote = setNote;
        __STATE__.__.setters.note = setNote;
        const update$note = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('note', value);
                note = value;
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
        __UPDATE_DATA_TRAIT__.uid = (__next: any) => { uid = __next; updateStateByKey('uid', __next); };
        __UPDATE_DATA_TRAIT__.record = (__next: any) => { record = __next; updateStateByKey('record', __next); };
        const __VARIABLE_LIST__: any = ["uid", "record"];


        this.__ctrl__.setUserDefinedConfig({
            name: 'RosterItem',

                /** Mở form: chụp lại bản server đang cầm làm mốc so sánh (base). */
                beginEdit() {
                    if (!record) return;
                    setBase(record);
                    setFName(record.name);
                    setFEmail(record.email);
                    setFGender(record.gender);
                    setFBirthdate(record.birthdate);
                    setNote('');
                    setEditing(true);
                    App.Event.emit('roster:editing', uid, true);
                },

                cancelEdit() {
                    setEditing(false);
                    setBase(null);
                    setNote('');
                    App.Event.emit('roster:editing', uid, false);
                    App.Event.emit('roster:refresh');
                },

                /** Bỏ bản nháp, nạp lại nguyên bản của người kia. */
                takeTheirs() {
                    this.beginEdit();
                },

                /** Giữ nguyên form, chỉ dời mốc version để lần lưu tới không bị 409. */
                keepMine() {
                    setBase(record);
                    setNote('Sẽ ghi đè bản của người kia khi bạn bấm Lưu.');
                },

                async save(event) {
                    event.preventDefault();
                    if (busy) return;
                    setBusy(true);
                    try {
                        const res = await App.Http.put(API + '/' + uid, {
                            name: fName,
                            email: fEmail,
                            gender: fGender,
                            birthdate: fBirthdate,
                            version: base ? base.updated_at : null
                        });
                        // Đẩy thẳng bản vừa lưu lên cha thay vì chờ vòng fetch kế tiếp —
                        // nếu không, hàng quay về chế độ xem với `record` cũ và loé lên
                        // dữ liệu lỗi thời (tệ nhất là bản của người kia sau khi hoà giải).
                        const saved = res.data.data;
                        setBase(saved);
                        setEditing(false);
                        setNote('');
                        App.Event.emit('roster:editing', uid, false);
                        App.Event.emit('roster:record', saved);
                    } catch (e) {
                        // 409/404: server đã đi trước ta. Kéo bản mới về, khối so sánh
                        // phía trên tự bật lên vì record.updated_at lệch base.
                        const code = e.response ? e.response.statusCode : 0;
                        if (code === 409) {
                            setNote('Có người khác vừa sửa trước bạn — đối chiếu rồi lưu lại.');
                            App.Event.emit('roster:refresh');
                        } else if (code === 404) {
                            setNote('User đã bị xoá khỏi server.');
                            App.Event.emit('roster:refresh');
                        } else {
                            setNote('Lưu thất bại: ' + (e.message || e));
                        }
                    } finally {
                        setBusy(false);
                    }
                },

                async remove() {
                    try {
                        await App.Http.delete(API + '/' + uid);
                    } catch (e) {
                        setNote('Xoá thất bại: ' + (e.message || e));
                    }
                    App.Event.emit('roster:refresh');
                },

                /** Bản ghi đã mất trên server — POST lại bản nháp thành user mới. */
                async recreate() {
                    setBusy(true);
                    try {
                        const res = await App.Http.post(API, {
                            name: fName,
                            email: fEmail,
                            gender: fGender,
                            birthdate: fBirthdate
                        });
                        setEditing(false);
                        setBase(null);
                        setNote('');
                        App.Event.emit('roster:editing', uid, false);
                        App.Event.emit('roster:record', res.data.data);
                        App.Event.emit('roster:refresh');
                    } catch (e) {
                        setNote('Tạo lại thất bại: ' + (e.message || e));
                    } finally {
                        setBusy(false);
                    }
                }
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
                update$editing(false);
                update$base(null);
                update$busy(false);
                update$note('');
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
            return this.wrapper((parentElement: any) => [
            this.html(`98f36c4a`, "article", parentElement,
                { classes: [{ type: 'static', value: "rs-row" }, { type: 'binding', value: "rs-row--edit", factory: () => editing, stateKeys: ["editing"] }, { type: 'binding', value: "rs-row--gone", factory: () => record === null, stateKeys: ["null", "record"] }] },
                (parentElement: any) => [
                this.reactive(`ff2f222f`, "if", parentReactive, parentElement, ["editing"], (parentReactive: any, parentElement: any) => {
                    const reactiveContents = [];
                    if (editing) {
                        reactiveContents.push(
                        this.reactive(`b692f4b0`, "if", parentReactive, parentElement, ["base", "null", "record"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (record === null) {
                                reactiveContents.push(
                                this.html(`0c0f8951`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "rs-alert" }, { type: 'static', value: "rs-alert--danger" }] },
                                    (parentElement: any) => [
                                    this.html(`097db133`, "strong", parentElement, {}, (parentElement: any) => [
                                        this.text('Người khác vừa xoá người dùng này')
                                    ]),
                                    this.html(`3a480c72`, "p", parentElement, {}, (parentElement: any) => [
                                        this.text('Bản nháp trong form vẫn còn nguyên. Tạo lại thành người dùng mới, hay bỏ bản nháp?')
                                    ]),
                                    this.html(`43b9856b`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "rs-alert-actions" }] },
                                        (parentElement: any) => [
                                        this.html(`fc2e2e92`, "button", parentElement,
                                            { classes: [{ type: 'static', value: "rs-btn" }, { type: 'static', value: "rs-btn-sm" }, { type: 'static', value: "rs-btn-primary" }], attrs: { "type": { type: 'static', value: "button" } }, events: { click: [{"handler":"recreate","params":[]}] } },
                                            (parentElement: any) => [
                                            this.text('Tạo lại từ bản nháp')
                                            ]),
                                        this.html(`c53285eb`, "button", parentElement,
                                            { classes: [{ type: 'static', value: "rs-btn" }, { type: 'static', value: "rs-btn-sm" }, { type: 'static', value: "rs-btn-plain" }], attrs: { "type": { type: 'static', value: "button" } }, events: { click: [{"handler":"cancelEdit","params":[]}] } },
                                            (parentElement: any) => [
                                            this.text('Bỏ bản nháp')
                                            ])
                                        ])
                                    ])
                                );
                            }
                            else if (base !== null && record['updated_at'] !== base['updated_at']) {
                                reactiveContents.push(
                                this.html(`45e2a7d9`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "rs-alert" }] },
                                    (parentElement: any) => [
                                    this.html(`f780ab0f`, "strong", parentElement, {}, (parentElement: any) => [
                                        this.text('Người khác vừa sửa người dùng này')
                                    ]),
                                    this.html(`0673200e`, "p", parentElement, {}, (parentElement: any) => [
                                        this.text('Bản nháp của bạn chưa bị đụng tới. Chọn bản muốn giữ:')
                                    ]),
                                    this.html(`df4b3209`, "ul", parentElement,
                                        { classes: [{ type: 'static', value: "rs-diff" }] },
                                        (parentElement: any) => [
                                        this.reactive(`341c1d09`, "if", parentReactive, parentElement, ["base", "record"], (parentReactive: any, parentElement: any) => {
                                            const reactiveContents = [];
                                            if (record['name'] !== base['name']) {
                                                reactiveContents.push(
                                                this.html(`b52c5d72`, "li", parentElement, {}, (parentElement: any) => [
                                                    this.html(`e9fc0a83`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "rs-diff-key" }] },
                                                        (parentElement: any) => [
                                                        this.text('name')
                                                        ]),
                                                    this.html(`741fc002`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "rs-diff-theirs" }] },
                                                        (parentElement: any) => [
                                                        this.html(`eb69e58a`, "em", parentElement, {}, (parentElement: any) => [
                                                            this.text('Của họ')
                                                        ]),
                                                        this.html(`142d846f`, "b", parentElement, {}, (parentElement: any) => [
                                                            this.output(`408f7bc1`, parentElement, true, ["record"], (parentElement: any) => record['name'])
                                                        ])
                                                        ]),
                                                    this.html(`714be425`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "rs-diff-mine" }] },
                                                        (parentElement: any) => [
                                                        this.html(`eb812103`, "em", parentElement, {}, (parentElement: any) => [
                                                            this.text('Của bạn')
                                                        ]),
                                                        this.html(`fb46644a`, "b", parentElement, {}, (parentElement: any) => [
                                                            this.output(`c9d3a48b`, parentElement, true, ["fName"], (parentElement: any) => fName)
                                                        ])
                                                        ])
                                                ])
                                                );
                                            }
                                            return reactiveContents;
                                        }),
                                        this.reactive(`4ef6c5c7`, "if", parentReactive, parentElement, ["base", "record"], (parentReactive: any, parentElement: any) => {
                                            const reactiveContents = [];
                                            if (record['email'] !== base['email']) {
                                                reactiveContents.push(
                                                this.html(`d3b3a836`, "li", parentElement, {}, (parentElement: any) => [
                                                    this.html(`3ab3b6f3`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "rs-diff-key" }] },
                                                        (parentElement: any) => [
                                                        this.text('email')
                                                        ]),
                                                    this.html(`9cc24a44`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "rs-diff-theirs" }] },
                                                        (parentElement: any) => [
                                                        this.html(`5f61e8b9`, "em", parentElement, {}, (parentElement: any) => [
                                                            this.text('Của họ')
                                                        ]),
                                                        this.html(`35246fde`, "b", parentElement, {}, (parentElement: any) => [
                                                            this.output(`4ebc64ec`, parentElement, true, ["record"], (parentElement: any) => record['email'])
                                                        ])
                                                        ]),
                                                    this.html(`d8f6b688`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "rs-diff-mine" }] },
                                                        (parentElement: any) => [
                                                        this.html(`e492adf7`, "em", parentElement, {}, (parentElement: any) => [
                                                            this.text('Của bạn')
                                                        ]),
                                                        this.html(`67b309b4`, "b", parentElement, {}, (parentElement: any) => [
                                                            this.output(`a6467101`, parentElement, true, ["fEmail"], (parentElement: any) => fEmail)
                                                        ])
                                                        ])
                                                ])
                                                );
                                            }
                                            return reactiveContents;
                                        }),
                                        this.reactive(`baf4cc07`, "if", parentReactive, parentElement, ["base", "record"], (parentReactive: any, parentElement: any) => {
                                            const reactiveContents = [];
                                            if (record['gender'] !== base['gender']) {
                                                reactiveContents.push(
                                                this.html(`5f24143d`, "li", parentElement, {}, (parentElement: any) => [
                                                    this.html(`e83f51d9`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "rs-diff-key" }] },
                                                        (parentElement: any) => [
                                                        this.text('gender')
                                                        ]),
                                                    this.html(`02767d60`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "rs-diff-theirs" }] },
                                                        (parentElement: any) => [
                                                        this.html(`c2505ec9`, "em", parentElement, {}, (parentElement: any) => [
                                                            this.text('Của họ')
                                                        ]),
                                                        this.html(`c9805ea1`, "b", parentElement, {}, (parentElement: any) => [
                                                            this.output(`2bee6599`, parentElement, true, ["record"], (parentElement: any) => record['gender'])
                                                        ])
                                                        ]),
                                                    this.html(`966d001a`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "rs-diff-mine" }] },
                                                        (parentElement: any) => [
                                                        this.html(`067fd720`, "em", parentElement, {}, (parentElement: any) => [
                                                            this.text('Của bạn')
                                                        ]),
                                                        this.html(`4a90fcfb`, "b", parentElement, {}, (parentElement: any) => [
                                                            this.output(`9236a704`, parentElement, true, ["fGender"], (parentElement: any) => fGender)
                                                        ])
                                                        ])
                                                ])
                                                );
                                            }
                                            return reactiveContents;
                                        }),
                                        this.reactive(`62a96f50`, "if", parentReactive, parentElement, ["base", "record"], (parentReactive: any, parentElement: any) => {
                                            const reactiveContents = [];
                                            if (record['birthdate'] !== base['birthdate']) {
                                                reactiveContents.push(
                                                this.html(`16883cc9`, "li", parentElement, {}, (parentElement: any) => [
                                                    this.html(`21b4d18b`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "rs-diff-key" }] },
                                                        (parentElement: any) => [
                                                        this.text('birthdate')
                                                        ]),
                                                    this.html(`0f6cb257`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "rs-diff-theirs" }] },
                                                        (parentElement: any) => [
                                                        this.html(`e86011c3`, "em", parentElement, {}, (parentElement: any) => [
                                                            this.text('Của họ')
                                                        ]),
                                                        this.html(`fb91be62`, "b", parentElement, {}, (parentElement: any) => [
                                                            this.output(`833625ad`, parentElement, true, ["record"], (parentElement: any) => record['birthdate'])
                                                        ])
                                                        ]),
                                                    this.html(`e1156ceb`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "rs-diff-mine" }] },
                                                        (parentElement: any) => [
                                                        this.html(`7f8a0e3d`, "em", parentElement, {}, (parentElement: any) => [
                                                            this.text('Của bạn')
                                                        ]),
                                                        this.html(`32335cce`, "b", parentElement, {}, (parentElement: any) => [
                                                            this.output(`73ccfd00`, parentElement, true, ["fBirthdate"], (parentElement: any) => fBirthdate)
                                                        ])
                                                        ])
                                                ])
                                                );
                                            }
                                            return reactiveContents;
                                        })
                                        ]),
                                    this.html(`f56fefcc`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "rs-alert-actions" }] },
                                        (parentElement: any) => [
                                        this.html(`561f0a28`, "button", parentElement,
                                            { classes: [{ type: 'static', value: "rs-btn" }, { type: 'static', value: "rs-btn-sm" }, { type: 'static', value: "rs-btn-ghost" }], attrs: { "type": { type: 'static', value: "button" } }, events: { click: [{"handler":"takeTheirs","params":[]}] } },
                                            (parentElement: any) => [
                                            this.text('Lấy bản của họ')
                                            ]),
                                        this.html(`bacab073`, "button", parentElement,
                                            { classes: [{ type: 'static', value: "rs-btn" }, { type: 'static', value: "rs-btn-sm" }, { type: 'static', value: "rs-btn-primary" }], attrs: { "type": { type: 'static', value: "button" } }, events: { click: [{"handler":"keepMine","params":[]}] } },
                                            (parentElement: any) => [
                                            this.text('Giữ bản của tôi')
                                            ])
                                        ])
                                    ])
                                );
                            }
                            return reactiveContents;
                        }),
                        this.html(`5c677340`, "form", parentElement,
                            { classes: [{ type: 'static', value: "rs-edit-form" }], events: { submit: [{"handler":"save","params":[() => event]}] } },
                            (parentElement: any) => [
                            this.html(`2ad1b0a4`, "div", parentElement,
                                { classes: [{ type: 'static', value: "rs-edit-grid" }] },
                                (parentElement: any) => [
                                this.html(`eed3d3b6`, "label", parentElement,
                                    { classes: [{ type: 'static', value: "rs-field" }] },
                                    (parentElement: any) => [
                                    this.html(`2e015e29`, "span", parentElement, {}, (parentElement: any) => [
                                        this.text('Họ tên')
                                    ]),
                                    this.html(`a9ac609f`, "input", parentElement, { attrs: { "type": { type: 'static', value: "text" }, "placeholder": { type: 'static', value: "Họ tên" } }, bind: { key: 'fName' } })
                                    ]),
                                this.html(`a922b96a`, "label", parentElement,
                                    { classes: [{ type: 'static', value: "rs-field" }] },
                                    (parentElement: any) => [
                                    this.html(`3bee35ca`, "span", parentElement, {}, (parentElement: any) => [
                                        this.text('Email')
                                    ]),
                                    this.html(`f0e0170e`, "input", parentElement, { attrs: { "type": { type: 'static', value: "email" }, "placeholder": { type: 'static', value: "Email" } }, bind: { key: 'fEmail' } })
                                    ]),
                                this.html(`c0c2efab`, "label", parentElement,
                                    { classes: [{ type: 'static', value: "rs-field" }] },
                                    (parentElement: any) => [
                                    this.html(`d1afe131`, "span", parentElement, {}, (parentElement: any) => [
                                        this.text('Giới tính')
                                    ]),
                                    this.html(`9ec2a7e8`, "select", parentElement,
                                        { bind: { key: 'fGender' } },
                                        (parentElement: any) => [
                                        this.html(`11058280`, "option", parentElement,
                                            { attrs: { "value": { type: 'static', value: "male" } } },
                                            (parentElement: any) => [
                                            this.text('male')
                                            ]),
                                        this.html(`201de61c`, "option", parentElement,
                                            { attrs: { "value": { type: 'static', value: "female" } } },
                                            (parentElement: any) => [
                                            this.text('female')
                                            ]),
                                        this.html(`b85f9b7b`, "option", parentElement,
                                            { attrs: { "value": { type: 'static', value: "other" } } },
                                            (parentElement: any) => [
                                            this.text('other')
                                            ])
                                        ])
                                    ]),
                                this.html(`8206f20c`, "label", parentElement,
                                    { classes: [{ type: 'static', value: "rs-field" }] },
                                    (parentElement: any) => [
                                    this.html(`862bf751`, "span", parentElement, {}, (parentElement: any) => [
                                        this.text('Ngày sinh')
                                    ]),
                                    this.html(`77b826df`, "input", parentElement, { attrs: { "type": { type: 'static', value: "date" } }, bind: { key: 'fBirthdate' } })
                                    ])
                                ]),
                            this.html(`57ce7bf9`, "div", parentElement,
                                { classes: [{ type: 'static', value: "rs-edit-foot" }] },
                                (parentElement: any) => [
                                this.reactive(`d1945de0`, "if", parentReactive, parentElement, ["base", "null"], (parentReactive: any, parentElement: any) => {
                                    const reactiveContents = [];
                                    if (base !== null) {
                                        reactiveContents.push(
                                        this.html(`4959c732`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "rs-ver" }] },
                                            (parentElement: any) => [
                                            this.text('base v'),
                                            this.output(`02a39936`, parentElement, true, ["base"], (parentElement: any) => base['updated_at'])
                                            ])
                                        );
                                    }
                                    return reactiveContents;
                                }),
                                this.html(`cbbdefbf`, "span", parentElement, { classes: [{ type: 'static', value: "rs-spacer" }] }),
                                this.reactive(`ffca4dfb`, "if", parentReactive, parentElement, ["null", "record"], (parentReactive: any, parentElement: any) => {
                                    const reactiveContents = [];
                                    if (record !== null) {
                                        reactiveContents.push(
                                        this.html(`4701b367`, "button", parentElement,
                                            { classes: [{ type: 'static', value: "rs-btn" }, { type: 'static', value: "rs-btn-sm" }, { type: 'static', value: "rs-btn-plain" }], attrs: { "type": { type: 'static', value: "button" } }, events: { click: [{"handler":"cancelEdit","params":[]}] } },
                                            (parentElement: any) => [
                                            this.text('Huỷ')
                                            ]),
                                        this.html(`26b78bf0`, "button", parentElement,
                                            { classes: [{ type: 'static', value: "rs-btn" }, { type: 'static', value: "rs-btn-sm" }, { type: 'static', value: "rs-btn-primary" }], attrs: { "type": { type: 'static', value: "submit" } }, props: { "disabled": { type: 'binding', factory: () => busy, stateKeys: ["busy"] } } },
                                            (parentElement: any) => [
                                            this.text('Lưu thay đổi')
                                            ])
                                        );
                                    }
                                    return reactiveContents;
                                })
                                ])
                            ])
                        );
                    }
                    else {
                        reactiveContents.push(
                        this.reactive(`e7a27576`, "if", parentReactive, parentElement, ["null", "record"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (record === null) {
                                reactiveContents.push(
                                this.html(`b4f9f9f7`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "rs-row-view" }] },
                                    (parentElement: any) => [
                                    this.html(`aefb1ec6`, "span", parentElement, { classes: [{ type: 'static', value: "rs-avatar" }, { type: 'static', value: "rs-avatar--gone" }] }),
                                    this.html(`0d7b7c7d`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "rs-row-id" }] },
                                        (parentElement: any) => [
                                        this.html(`9e00257d`, "strong", parentElement, {}, (parentElement: any) => [
                                            this.text('Bản ghi đã bị xoá')
                                        ]),
                                        this.html(`9bcc448b`, "span", parentElement, {}, (parentElement: any) => [
                                            this.text('Hàng này sẽ biến mất ở lần đồng bộ tới.')
                                        ])
                                        ])
                                    ])
                                );
                            }
                            else {
                                reactiveContents.push(
                                this.html(`7971f7d4`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "rs-row-view" }] },
                                    (parentElement: any) => [
                                    this.html(`1e5526c0`, "span", parentElement, { classes: [{ type: 'static', value: "rs-avatar" }, { type: 'binding', value: "rs-avatar--f", factory: () => record['gender'] === 'female', stateKeys: ["record"] }, { type: 'binding', value: "rs-avatar--m", factory: () => record['gender'] === 'male', stateKeys: ["record"] }] }),
                                    this.html(`9453590d`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "rs-row-id" }] },
                                        (parentElement: any) => [
                                        this.html(`aa010c5b`, "strong", parentElement, {}, (parentElement: any) => [
                                            this.output(`ff0a6a25`, parentElement, true, ["record"], (parentElement: any) => record['name'])
                                        ]),
                                        this.html(`7cea63bb`, "span", parentElement, {}, (parentElement: any) => [
                                            this.output(`794625f4`, parentElement, true, ["record"], (parentElement: any) => record['email'])
                                        ])
                                        ]),
                                    this.html(`8b8d6bce`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "rs-row-meta" }] },
                                        (parentElement: any) => [
                                        this.html(`0bb6b2c8`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "rs-tag" }, { type: 'static', value: "rs-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.output(`f19d2410`, parentElement, true, ["record"], (parentElement: any) => record['gender'])
                                            ]),
                                        this.html(`2fa3851d`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "rs-tag" }] },
                                            (parentElement: any) => [
                                            this.output(`425ab885`, parentElement, true, ["record"], (parentElement: any) => record['birthdate'])
                                            ]),
                                        this.html(`60ac1e93`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "rs-ver" }] },
                                            (parentElement: any) => [
                                            this.text('v'),
                                            this.output(`7fca6ba3`, parentElement, true, ["record"], (parentElement: any) => record['updated_at'])
                                            ])
                                        ]),
                                    this.html(`57a51cf0`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "rs-row-actions" }] },
                                        (parentElement: any) => [
                                        this.html(`e3ad8272`, "button", parentElement,
                                            { classes: [{ type: 'static', value: "rs-btn" }, { type: 'static', value: "rs-btn-sm" }, { type: 'static', value: "rs-btn-ghost" }], attrs: { "type": { type: 'static', value: "button" } }, events: { click: [{"handler":"beginEdit","params":[]}] } },
                                            (parentElement: any) => [
                                            this.text('Sửa')
                                            ]),
                                        this.html(`a268dbad`, "button", parentElement,
                                            { classes: [{ type: 'static', value: "rs-btn" }, { type: 'static', value: "rs-btn-sm" }, { type: 'static', value: "rs-btn-danger" }], attrs: { "type": { type: 'static', value: "button" } }, events: { click: [{"handler":"remove","params":[]}] } },
                                            (parentElement: any) => [
                                            this.text('Xoá')
                                            ])
                                        ])
                                    ])
                                );
                            }
                            return reactiveContents;
                        })
                        );
                    }
                    return reactiveContents;
                }),
                this.reactive(`27e8eebc`, "if", parentReactive, parentElement, ["note"], (parentReactive: any, parentElement: any) => {
                    const reactiveContents = [];
                    if (note !== '') {
                        reactiveContents.push(
                        this.html(`47c052f2`, "p", parentElement,
                            { classes: [{ type: 'static', value: "rs-note" }] },
                            (parentElement: any) => [
                            this.output(`ba5ed646`, parentElement, true, ["note"], (parentElement: any) => note)
                            ])
                        );
                    }
                    return reactiveContents;
                })
                ])
            ]);
            }
        });

    }
}

// Export factory function
export function WebModulesRosterItem(__data__: ItemProps = {}, systemData: any = {}): ItemView {
    return new ItemView(__data__, systemData);
}
export default WebModulesRosterItem;
