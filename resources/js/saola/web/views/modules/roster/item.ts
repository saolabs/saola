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


const API = '/api/api/roster';




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
    constructor(__data__: any = {}, systemData: any = {}) {
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
            this.html(`e1`, "article", parentElement,
                { classes: [{ type: 'static', value: "rs-row" }, { type: 'binding', value: "rs-row--edit", factory: () => editing, stateKeys: ["editing"] }, { type: 'binding', value: "rs-row--gone", factory: () => record === null, stateKeys: ["null", "record"] }] },
                (parentElement: any) => [
                this.reactive(`e1r1`, "if", parentReactive, parentElement, ["editing"], (parentReactive: any, parentElement: any) => {
                    const reactiveContents = [];
                    if (editing) {
                        reactiveContents.push(
                        this.reactive(`e1r1k1r1`, "if", parentReactive, parentElement, ["base", "null", "record"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (record === null) {
                                reactiveContents.push(
                                this.html(`e1r1k1r1k11`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "rs-alert" }, { type: 'static', value: "rs-alert--danger" }] },
                                    (parentElement: any) => [
                                    this.html(`e1r1k1r1k111`, "strong", parentElement, {}, (parentElement: any) => [
                                        this.text('Người khác vừa xoá người dùng này')
                                    ]),
                                    this.html(`e1r1k1r1k112`, "p", parentElement, {}, (parentElement: any) => [
                                        this.text('Bản nháp trong form vẫn còn nguyên. Tạo lại thành người dùng mới, hay bỏ bản nháp?')
                                    ]),
                                    this.html(`e1r1k1r1k113`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "rs-alert-actions" }] },
                                        (parentElement: any) => [
                                        this.html(`e1r1k1r1k1131`, "button", parentElement,
                                            { classes: [{ type: 'static', value: "rs-btn" }, { type: 'static', value: "rs-btn-sm" }, { type: 'static', value: "rs-btn-primary" }], attrs: { "type": { type: 'static', value: "button" } }, events: { click: [{"handler":"recreate","params":[]}] } },
                                            (parentElement: any) => [
                                            this.text('Tạo lại từ bản nháp')
                                            ]),
                                        this.html(`e1r1k1r1k1132`, "button", parentElement,
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
                                this.html(`e1r1k1r1k21`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "rs-alert" }] },
                                    (parentElement: any) => [
                                    this.html(`e1r1k1r1k211`, "strong", parentElement, {}, (parentElement: any) => [
                                        this.text('Người khác vừa sửa người dùng này')
                                    ]),
                                    this.html(`e1r1k1r1k212`, "p", parentElement, {}, (parentElement: any) => [
                                        this.text('Bản nháp của bạn chưa bị đụng tới. Chọn bản muốn giữ:')
                                    ]),
                                    this.html(`e1r1k1r1k213`, "ul", parentElement,
                                        { classes: [{ type: 'static', value: "rs-diff" }] },
                                        (parentElement: any) => [
                                        this.reactive(`e1r1k1r1k213r1`, "if", parentReactive, parentElement, ["base", "record"], (parentReactive: any, parentElement: any) => {
                                            const reactiveContents = [];
                                            if (record['name'] !== base['name']) {
                                                reactiveContents.push(
                                                this.html(`e1r1k1r1k213r1k11`, "li", parentElement, {}, (parentElement: any) => [
                                                    this.html(`e1r1k1r1k213r1k111`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "rs-diff-key" }] },
                                                        (parentElement: any) => [
                                                        this.text('name')
                                                        ]),
                                                    this.html(`e1r1k1r1k213r1k112`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "rs-diff-theirs" }] },
                                                        (parentElement: any) => [
                                                        this.html(`e1r1k1r1k213r1k1121`, "em", parentElement, {}, (parentElement: any) => [
                                                            this.text('Của họ')
                                                        ]),
                                                        this.html(`e1r1k1r1k213r1k1122`, "b", parentElement, {}, (parentElement: any) => [
                                                            this.output(`e1r1k1r1k213r1k1122o1`, parentElement, true, ["record"], (parentElement: any) => record['name'])
                                                        ])
                                                        ]),
                                                    this.html(`e1r1k1r1k213r1k113`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "rs-diff-mine" }] },
                                                        (parentElement: any) => [
                                                        this.html(`e1r1k1r1k213r1k1131`, "em", parentElement, {}, (parentElement: any) => [
                                                            this.text('Của bạn')
                                                        ]),
                                                        this.html(`e1r1k1r1k213r1k1132`, "b", parentElement, {}, (parentElement: any) => [
                                                            this.output(`e1r1k1r1k213r1k1132o1`, parentElement, true, ["fName"], (parentElement: any) => fName)
                                                        ])
                                                        ])
                                                ])
                                                );
                                            }
                                            return reactiveContents;
                                        }),
                                        this.reactive(`e1r1k1r1k213r2`, "if", parentReactive, parentElement, ["base", "record"], (parentReactive: any, parentElement: any) => {
                                            const reactiveContents = [];
                                            if (record['email'] !== base['email']) {
                                                reactiveContents.push(
                                                this.html(`e1r1k1r1k213r2k11`, "li", parentElement, {}, (parentElement: any) => [
                                                    this.html(`e1r1k1r1k213r2k111`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "rs-diff-key" }] },
                                                        (parentElement: any) => [
                                                        this.text('email')
                                                        ]),
                                                    this.html(`e1r1k1r1k213r2k112`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "rs-diff-theirs" }] },
                                                        (parentElement: any) => [
                                                        this.html(`e1r1k1r1k213r2k1121`, "em", parentElement, {}, (parentElement: any) => [
                                                            this.text('Của họ')
                                                        ]),
                                                        this.html(`e1r1k1r1k213r2k1122`, "b", parentElement, {}, (parentElement: any) => [
                                                            this.output(`e1r1k1r1k213r2k1122o1`, parentElement, true, ["record"], (parentElement: any) => record['email'])
                                                        ])
                                                        ]),
                                                    this.html(`e1r1k1r1k213r2k113`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "rs-diff-mine" }] },
                                                        (parentElement: any) => [
                                                        this.html(`e1r1k1r1k213r2k1131`, "em", parentElement, {}, (parentElement: any) => [
                                                            this.text('Của bạn')
                                                        ]),
                                                        this.html(`e1r1k1r1k213r2k1132`, "b", parentElement, {}, (parentElement: any) => [
                                                            this.output(`e1r1k1r1k213r2k1132o1`, parentElement, true, ["fEmail"], (parentElement: any) => fEmail)
                                                        ])
                                                        ])
                                                ])
                                                );
                                            }
                                            return reactiveContents;
                                        }),
                                        this.reactive(`e1r1k1r1k213r3`, "if", parentReactive, parentElement, ["base", "record"], (parentReactive: any, parentElement: any) => {
                                            const reactiveContents = [];
                                            if (record['gender'] !== base['gender']) {
                                                reactiveContents.push(
                                                this.html(`e1r1k1r1k213r3k11`, "li", parentElement, {}, (parentElement: any) => [
                                                    this.html(`e1r1k1r1k213r3k111`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "rs-diff-key" }] },
                                                        (parentElement: any) => [
                                                        this.text('gender')
                                                        ]),
                                                    this.html(`e1r1k1r1k213r3k112`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "rs-diff-theirs" }] },
                                                        (parentElement: any) => [
                                                        this.html(`e1r1k1r1k213r3k1121`, "em", parentElement, {}, (parentElement: any) => [
                                                            this.text('Của họ')
                                                        ]),
                                                        this.html(`e1r1k1r1k213r3k1122`, "b", parentElement, {}, (parentElement: any) => [
                                                            this.output(`e1r1k1r1k213r3k1122o1`, parentElement, true, ["record"], (parentElement: any) => record['gender'])
                                                        ])
                                                        ]),
                                                    this.html(`e1r1k1r1k213r3k113`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "rs-diff-mine" }] },
                                                        (parentElement: any) => [
                                                        this.html(`e1r1k1r1k213r3k1131`, "em", parentElement, {}, (parentElement: any) => [
                                                            this.text('Của bạn')
                                                        ]),
                                                        this.html(`e1r1k1r1k213r3k1132`, "b", parentElement, {}, (parentElement: any) => [
                                                            this.output(`e1r1k1r1k213r3k1132o1`, parentElement, true, ["fGender"], (parentElement: any) => fGender)
                                                        ])
                                                        ])
                                                ])
                                                );
                                            }
                                            return reactiveContents;
                                        }),
                                        this.reactive(`e1r1k1r1k213r4`, "if", parentReactive, parentElement, ["base", "record"], (parentReactive: any, parentElement: any) => {
                                            const reactiveContents = [];
                                            if (record['birthdate'] !== base['birthdate']) {
                                                reactiveContents.push(
                                                this.html(`e1r1k1r1k213r4k11`, "li", parentElement, {}, (parentElement: any) => [
                                                    this.html(`e1r1k1r1k213r4k111`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "rs-diff-key" }] },
                                                        (parentElement: any) => [
                                                        this.text('birthdate')
                                                        ]),
                                                    this.html(`e1r1k1r1k213r4k112`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "rs-diff-theirs" }] },
                                                        (parentElement: any) => [
                                                        this.html(`e1r1k1r1k213r4k1121`, "em", parentElement, {}, (parentElement: any) => [
                                                            this.text('Của họ')
                                                        ]),
                                                        this.html(`e1r1k1r1k213r4k1122`, "b", parentElement, {}, (parentElement: any) => [
                                                            this.output(`e1r1k1r1k213r4k1122o1`, parentElement, true, ["record"], (parentElement: any) => record['birthdate'])
                                                        ])
                                                        ]),
                                                    this.html(`e1r1k1r1k213r4k113`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "rs-diff-mine" }] },
                                                        (parentElement: any) => [
                                                        this.html(`e1r1k1r1k213r4k1131`, "em", parentElement, {}, (parentElement: any) => [
                                                            this.text('Của bạn')
                                                        ]),
                                                        this.html(`e1r1k1r1k213r4k1132`, "b", parentElement, {}, (parentElement: any) => [
                                                            this.output(`e1r1k1r1k213r4k1132o1`, parentElement, true, ["fBirthdate"], (parentElement: any) => fBirthdate)
                                                        ])
                                                        ])
                                                ])
                                                );
                                            }
                                            return reactiveContents;
                                        })
                                        ]),
                                    this.html(`e1r1k1r1k214`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "rs-alert-actions" }] },
                                        (parentElement: any) => [
                                        this.html(`e1r1k1r1k2141`, "button", parentElement,
                                            { classes: [{ type: 'static', value: "rs-btn" }, { type: 'static', value: "rs-btn-sm" }, { type: 'static', value: "rs-btn-ghost" }], attrs: { "type": { type: 'static', value: "button" } }, events: { click: [{"handler":"takeTheirs","params":[]}] } },
                                            (parentElement: any) => [
                                            this.text('Lấy bản của họ')
                                            ]),
                                        this.html(`e1r1k1r1k2142`, "button", parentElement,
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
                        this.html(`e1r1k11`, "form", parentElement,
                            { classes: [{ type: 'static', value: "rs-edit-form" }], events: { submit: [{"handler":"save","params":[() => event]}] } },
                            (parentElement: any) => [
                            this.html(`e1r1k111`, "div", parentElement,
                                { classes: [{ type: 'static', value: "rs-edit-grid" }] },
                                (parentElement: any) => [
                                this.html(`e1r1k1111`, "label", parentElement,
                                    { classes: [{ type: 'static', value: "rs-field" }] },
                                    (parentElement: any) => [
                                    this.html(`e1r1k11111`, "span", parentElement, {}, (parentElement: any) => [
                                        this.text('Họ tên')
                                    ]),
                                    this.html(`e1r1k11112`, "input", parentElement, { attrs: { "type": { type: 'static', value: "text" }, "placeholder": { type: 'static', value: "Họ tên" } }, bind: { key: 'fName' } })
                                    ]),
                                this.html(`e1r1k1112`, "label", parentElement,
                                    { classes: [{ type: 'static', value: "rs-field" }] },
                                    (parentElement: any) => [
                                    this.html(`e1r1k11121`, "span", parentElement, {}, (parentElement: any) => [
                                        this.text('Email')
                                    ]),
                                    this.html(`e1r1k11122`, "input", parentElement, { attrs: { "type": { type: 'static', value: "email" }, "placeholder": { type: 'static', value: "Email" } }, bind: { key: 'fEmail' } })
                                    ]),
                                this.html(`e1r1k1113`, "label", parentElement,
                                    { classes: [{ type: 'static', value: "rs-field" }] },
                                    (parentElement: any) => [
                                    this.html(`e1r1k11131`, "span", parentElement, {}, (parentElement: any) => [
                                        this.text('Giới tính')
                                    ]),
                                    this.html(`e1r1k11132`, "select", parentElement,
                                        { bind: { key: 'fGender' } },
                                        (parentElement: any) => [
                                        this.html(`e1r1k111321`, "option", parentElement,
                                            { attrs: { "value": { type: 'static', value: "male" } } },
                                            (parentElement: any) => [
                                            this.text('male')
                                            ]),
                                        this.html(`e1r1k111322`, "option", parentElement,
                                            { attrs: { "value": { type: 'static', value: "female" } } },
                                            (parentElement: any) => [
                                            this.text('female')
                                            ]),
                                        this.html(`e1r1k111323`, "option", parentElement,
                                            { attrs: { "value": { type: 'static', value: "other" } } },
                                            (parentElement: any) => [
                                            this.text('other')
                                            ])
                                        ])
                                    ]),
                                this.html(`e1r1k1114`, "label", parentElement,
                                    { classes: [{ type: 'static', value: "rs-field" }] },
                                    (parentElement: any) => [
                                    this.html(`e1r1k11141`, "span", parentElement, {}, (parentElement: any) => [
                                        this.text('Ngày sinh')
                                    ]),
                                    this.html(`e1r1k11142`, "input", parentElement, { attrs: { "type": { type: 'static', value: "date" } }, bind: { key: 'fBirthdate' } })
                                    ])
                                ]),
                            this.html(`e1r1k112`, "div", parentElement,
                                { classes: [{ type: 'static', value: "rs-edit-foot" }] },
                                (parentElement: any) => [
                                this.reactive(`e1r1k112r1`, "if", parentReactive, parentElement, ["base", "null"], (parentReactive: any, parentElement: any) => {
                                    const reactiveContents = [];
                                    if (base !== null) {
                                        reactiveContents.push(
                                        this.html(`e1r1k112r1k11`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "rs-ver" }] },
                                            (parentElement: any) => [
                                            this.text('base v'),
                                            this.output(`e1r1k112r1k11o1`, parentElement, true, ["base"], (parentElement: any) => base['updated_at'])
                                            ])
                                        );
                                    }
                                    return reactiveContents;
                                }),
                                this.html(`e1r1k1121`, "span", parentElement, { classes: [{ type: 'static', value: "rs-spacer" }] }),
                                this.reactive(`e1r1k112r2`, "if", parentReactive, parentElement, ["null", "record"], (parentReactive: any, parentElement: any) => {
                                    const reactiveContents = [];
                                    if (record !== null) {
                                        reactiveContents.push(
                                        this.html(`e1r1k112r2k11`, "button", parentElement,
                                            { classes: [{ type: 'static', value: "rs-btn" }, { type: 'static', value: "rs-btn-sm" }, { type: 'static', value: "rs-btn-plain" }], attrs: { "type": { type: 'static', value: "button" } }, events: { click: [{"handler":"cancelEdit","params":[]}] } },
                                            (parentElement: any) => [
                                            this.text('Huỷ')
                                            ]),
                                        this.html(`e1r1k112r2k12`, "button", parentElement,
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
                        this.reactive(`e1r1k2r1`, "if", parentReactive, parentElement, ["null", "record"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (record === null) {
                                reactiveContents.push(
                                this.html(`e1r1k2r1k11`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "rs-row-view" }] },
                                    (parentElement: any) => [
                                    this.html(`e1r1k2r1k111`, "span", parentElement, { classes: [{ type: 'static', value: "rs-avatar" }, { type: 'static', value: "rs-avatar--gone" }] }),
                                    this.html(`e1r1k2r1k112`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "rs-row-id" }] },
                                        (parentElement: any) => [
                                        this.html(`e1r1k2r1k1121`, "strong", parentElement, {}, (parentElement: any) => [
                                            this.text('Bản ghi đã bị xoá')
                                        ]),
                                        this.html(`e1r1k2r1k1122`, "span", parentElement, {}, (parentElement: any) => [
                                            this.text('Hàng này sẽ biến mất ở lần đồng bộ tới.')
                                        ])
                                        ])
                                    ])
                                );
                            }
                            else {
                                reactiveContents.push(
                                this.html(`e1r1k2r1k21`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "rs-row-view" }] },
                                    (parentElement: any) => [
                                    this.html(`e1r1k2r1k211`, "span", parentElement, { classes: [{ type: 'static', value: "rs-avatar" }, { type: 'binding', value: "rs-avatar--f", factory: () => record['gender'] === 'female', stateKeys: ["record"] }, { type: 'binding', value: "rs-avatar--m", factory: () => record['gender'] === 'male', stateKeys: ["record"] }] }),
                                    this.html(`e1r1k2r1k212`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "rs-row-id" }] },
                                        (parentElement: any) => [
                                        this.html(`e1r1k2r1k2121`, "strong", parentElement, {}, (parentElement: any) => [
                                            this.output(`e1r1k2r1k2121o1`, parentElement, true, ["record"], (parentElement: any) => record['name'])
                                        ]),
                                        this.html(`e1r1k2r1k2122`, "span", parentElement, {}, (parentElement: any) => [
                                            this.output(`e1r1k2r1k2122o1`, parentElement, true, ["record"], (parentElement: any) => record['email'])
                                        ])
                                        ]),
                                    this.html(`e1r1k2r1k213`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "rs-row-meta" }] },
                                        (parentElement: any) => [
                                        this.html(`e1r1k2r1k2131`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "rs-tag" }, { type: 'static', value: "rs-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.output(`e1r1k2r1k2131o1`, parentElement, true, ["record"], (parentElement: any) => record['gender'])
                                            ]),
                                        this.html(`e1r1k2r1k2132`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "rs-tag" }] },
                                            (parentElement: any) => [
                                            this.output(`e1r1k2r1k2132o1`, parentElement, true, ["record"], (parentElement: any) => record['birthdate'])
                                            ]),
                                        this.html(`e1r1k2r1k2133`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "rs-ver" }] },
                                            (parentElement: any) => [
                                            this.text('v'),
                                            this.output(`e1r1k2r1k2133o1`, parentElement, true, ["record"], (parentElement: any) => record['updated_at'])
                                            ])
                                        ]),
                                    this.html(`e1r1k2r1k214`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "rs-row-actions" }] },
                                        (parentElement: any) => [
                                        this.html(`e1r1k2r1k2141`, "button", parentElement,
                                            { classes: [{ type: 'static', value: "rs-btn" }, { type: 'static', value: "rs-btn-sm" }, { type: 'static', value: "rs-btn-ghost" }], attrs: { "type": { type: 'static', value: "button" } }, events: { click: [{"handler":"beginEdit","params":[]}] } },
                                            (parentElement: any) => [
                                            this.text('Sửa')
                                            ]),
                                        this.html(`e1r1k2r1k2142`, "button", parentElement,
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
                this.reactive(`e1r2`, "if", parentReactive, parentElement, ["note"], (parentReactive: any, parentElement: any) => {
                    const reactiveContents = [];
                    if (note !== '') {
                        reactiveContents.push(
                        this.html(`e1r2k11`, "p", parentElement,
                            { classes: [{ type: 'static', value: "rs-note" }] },
                            (parentElement: any) => [
                            this.output(`e1r2k11o1`, parentElement, true, ["note"], (parentElement: any) => note)
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
export function WebModulesRosterItem(__data__ = {}, systemData = {}): ItemView {
    return new ItemView(__data__, systemData);
}
export default WebModulesRosterItem;