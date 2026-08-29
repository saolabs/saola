import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.components.index';
const __VIEW_NAMESPACE__ = 'web.modules.components.';
const __VIEW_TYPE__ = 'view';
const __VIEW_CONFIG__ = {
    hasSuperView: true,
    viewType: 'view',
    sections: {
        "doc":{
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
    renderLongSections: ["doc"],
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
        const set$count = __STATE__.__.register('count');
        let count: any = 0;
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
        let name: any = 'Saola';
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
        const set$agree = __STATE__.__.register('agree');
        let agree: any = true;
        const setAgree = (state: any) => {
            agree = state;
            set$agree(state);
        };
        __STATE__.__.setters.setAgree = setAgree;
        __STATE__.__.setters.agree = setAgree;
        const update$agree = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('agree', value);
                agree = value;
            }
        };
        const set$tone = __STATE__.__.register('tone');
        let tone: any = 'sky';
        const setTone = (state: any) => {
            tone = state;
            set$tone(state);
        };
        __STATE__.__.setters.setTone = setTone;
        __STATE__.__.setters.tone = setTone;
        const update$tone = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('tone', value);
                tone = value;
            }
        };
        const set$textSize = __STATE__.__.register('textSize');
        let textSize: any = 'md';
        const setTextSize = (state: any) => {
            textSize = state;
            set$textSize(state);
        };
        __STATE__.__.setters.setTextSize = setTextSize;
        __STATE__.__.setters.textSize = setTextSize;
        const update$textSize = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('textSize', value);
                textSize = value;
            }
        };
        const set$status = __STATE__.__.register('status');
        let status: any = 'ready';
        const setStatus = (state: any) => {
            status = state;
            set$status(state);
        };
        __STATE__.__.setters.setStatus = setStatus;
        __STATE__.__.setters.status = setStatus;
        const update$status = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('status', value);
                status = value;
            }
        };
        const set$runtime = __STATE__.__.register('runtime');
        let runtime: any = 'blade';
        const setRuntime = (state: any) => {
            runtime = state;
            set$runtime(state);
        };
        __STATE__.__.setters.setRuntime = setRuntime;
        __STATE__.__.setters.runtime = setRuntime;
        const update$runtime = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('runtime', value);
                runtime = value;
            }
        };
        const set$items = __STATE__.__.register('items');
        let items: any = [{"id": 1, "label": "Blade SSR"}, {"id": 2, "label": "Hydrate"}, {"id": 3, "label": "SPA takeover"}];
        const setItems = (state: any) => {
            items = state;
            set$items(state);
        };
        __STATE__.__.setters.setItems = setItems;
        __STATE__.__.setters.items = setItems;
        const update$items = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('items', value);
                items = value;
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
        const set$draft = __STATE__.__.register('draft');
        let draft: any = '';
        const setDraft = (state: any) => {
            draft = state;
            set$draft(state);
        };
        __STATE__.__.setters.setDraft = setDraft;
        __STATE__.__.setters.draft = setDraft;
        const update$draft = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('draft', value);
                draft = value;
            }
        };
        const set$visible = __STATE__.__.register('visible');
        let visible: any = true;
        const setVisible = (state: any) => {
            visible = state;
            set$visible(state);
        };
        __STATE__.__.setters.setVisible = setVisible;
        __STATE__.__.setters.visible = setVisible;
        const update$visible = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('visible', value);
                visible = value;
            }
        };
        const set$locked = __STATE__.__.register('locked');
        let locked: any = false;
        const setLocked = (state: any) => {
            locked = state;
            set$locked(state);
        };
        __STATE__.__.setters.setLocked = setLocked;
        __STATE__.__.setters.locked = setLocked;
        const update$locked = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('locked', value);
                locked = value;
            }
        };
        const set$clicks = __STATE__.__.register('clicks');
        let clicks: any = 0;
        const setClicks = (state: any) => {
            clicks = state;
            set$clicks(state);
        };
        __STATE__.__.setters.setClicks = setClicks;
        __STATE__.__.setters.clicks = setClicks;
        const update$clicks = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('clicks', value);
                clicks = value;
            }
        };
        const set$onceLeft = __STATE__.__.register('onceLeft');
        let onceLeft: any = 1;
        const setOnceLeft = (state: any) => {
            onceLeft = state;
            set$onceLeft(state);
        };
        __STATE__.__.setters.setOnceLeft = setOnceLeft;
        __STATE__.__.setters.onceLeft = setOnceLeft;
        const update$onceLeft = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('onceLeft', value);
                onceLeft = value;
            }
        };
        const set$selfHits = __STATE__.__.register('selfHits');
        let selfHits: any = 0;
        const setSelfHits = (state: any) => {
            selfHits = state;
            set$selfHits(state);
        };
        __STATE__.__.setters.setSelfHits = setSelfHits;
        __STATE__.__.setters.selfHits = setSelfHits;
        const update$selfHits = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('selfHits', value);
                selfHits = value;
            }
        };
        const set$price = __STATE__.__.register('price');
        let price: any = 120;
        const setPrice = (state: any) => {
            price = state;
            set$price(state);
        };
        __STATE__.__.setters.setPrice = setPrice;
        __STATE__.__.setters.price = setPrice;
        const update$price = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('price', value);
                price = value;
            }
        };
        const set$qty = __STATE__.__.register('qty');
        let qty: any = 2;
        const setQty = (state: any) => {
            qty = state;
            set$qty(state);
        };
        __STATE__.__.setters.setQty = setQty;
        __STATE__.__.setters.qty = setQty;
        const update$qty = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('qty', value);
                qty = value;
            }
        };
        const __VARIABLE_LIST__: any = [];


        this.__ctrl__.setUserDefinedConfig({
            name: 'ComponentsPage',

                addItem() {
                    const label = draft.trim();
                    if (!label) return;
                    setItems([...items, { id: nextId, label }]);
                    setNextId(nextId + 1);
                    setDraft('');
                },

                removeItem(id) {
                    setItems(items.filter(i => i.id !== id));
                }
        });

        this.__ctrl__.setup({
            superView: `${__layout__+"docs"}`,
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
                update$count(0);
                update$name('Saola');
                update$agree(true);
                update$tone('sky');
                update$textSize('md');
                update$status('ready');
                update$runtime('blade');
                update$items([{"id": 1, "label": "Blade SSR"}, {"id": 2, "label": "Hydrate"}, {"id": 3, "label": "SPA takeover"}]);
                update$nextId(4);
                update$draft('');
                update$visible(true);
                update$locked(false);
                update$clicks(0);
                update$onceLeft(1);
                update$selfHits(0);
                update$price(120);
                update$qty(2);
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
            this.block('block-doc', 'doc', (parentElement: any) => [
            this.html(`Bdoc1`, "header", parentElement,
                { classes: [{ type: 'static', value: "page-hero" }] },
                (parentElement: any) => [
                this.html(`Bdoc11`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`Bdoc111`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement: any) => [
                        this.html(`Bdoc1111`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('10')
                        ]),
                        this.text(' THỰC HÀNH')
                        ]),
                    this.html(`Bdoc112`, "h1", parentElement, {}, (parentElement: any) => [
                        this.text('Thư viện component.')
                    ])
                ]),
                this.html(`Bdoc12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement: any) => [
                    this.html(`Bdoc121`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Mỗi ví dụ dưới đây đang chạy thật trên chính trang này, kèm đúng đoạn '),
                        this.html(`Bdoc1211`, "code", parentElement, {}, (parentElement: any) => [
                            this.text('.sao')
                        ]),
                        this.text(' sinh ra nó. Bấm thử bên trái, đọc nguồn bên phải.')
                    ])
                    ])
                ]),
            this.html(`Bdoc2`, "div", parentElement,
                { classes: [{ type: 'static', value: "cmp-page" }] },
                (parentElement: any) => [
                this.html(`Bdoc21`, "div", parentElement,
                    { classes: [{ type: 'static', value: "cmp-groups" }] },
                    (parentElement: any) => [
                    this.html(`Bdoc211`, "section", parentElement,
                        { classes: [{ type: 'static', value: "cmp-group" }] },
                        (parentElement: any) => [
                        this.html(`Bdoc2111`, "div", parentElement,
                            { classes: [{ type: 'static', value: "cmp-group-head" }] },
                            (parentElement: any) => [
                            this.html(`Bdoc21111`, "h2", parentElement, {}, (parentElement: any) => [
                                this.text('State & sự kiện')
                            ]),
                            this.html(`Bdoc21112`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Khai báo state ở đầu file, mỗi key tự có setter; event gắn thẳng lên thẻ.')
                            ])
                            ]),
                        this.html(`Bdoc2112`, "div", parentElement,
                            { classes: [{ type: 'static', value: "cmp-list" }] },
                            (parentElement: any) => [
                            this.html(`Bdoc21121`, "article", parentElement,
                                { classes: [{ type: 'static', value: "cmp-item" }] },
                                (parentElement: any) => [
                                this.html(`Bdoc211211`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-head" }] },
                                    (parentElement: any) => [
                                    this.html(`Bdoc2112111`, "div", parentElement, {}, (parentElement: any) => [
                                        this.html(`Bdoc21121111`, "h3", parentElement, {}, (parentElement: any) => [
                                            this.text('Counter')
                                        ]),
                                        this.html(`Bdoc21121112`, "p", parentElement, {}, (parentElement: any) => [
                                            this.text('Setter sinh tự động từ tên state.')
                                        ])
                                    ]),
                                    this.html(`Bdoc2112112`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "ov-tags" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21121121`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('@states')
                                            ]),
                                        this.html(`Bdoc21121122`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }] },
                                            (parentElement: any) => [
                                            this.text('@click')
                                            ])
                                        ])
                                    ]),
                                this.html(`Bdoc211212`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-body" }] },
                                    (parentElement: any) => [
                                    this.html(`Bdoc2112121`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-preview" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21121211`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-num" }] },
                                            (parentElement: any) => [
                                            this.output(`Bdoc21121211o1`, parentElement, true, ["count"], (parentElement: any) => count)
                                            ]),
                                        this.html(`Bdoc21121212`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-row" }] },
                                            (parentElement: any) => [
                                            this.html(`Bdoc211212121`, "button", parentElement,
                                                { events: { click: [(event: any) => setCount(count - 1)] } },
                                                (parentElement: any) => [
                                                this.text('−')
                                                ]),
                                            this.html(`Bdoc211212122`, "button", parentElement,
                                                { classes: [{ type: 'static', value: "is-primary" }], events: { click: [(event: any) => setCount(count + 1)] } },
                                                (parentElement: any) => [
                                                this.text('+')
                                                ]),
                                            this.html(`Bdoc211212123`, "button", parentElement,
                                                { events: { click: [(event: any) => setCount(0)] } },
                                                (parentElement: any) => [
                                                this.text('Reset')
                                                ])
                                            ])
                                        ]),
                                    this.html(`Bdoc2112122`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-source" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21121221`, "pre", parentElement, {}, (parentElement: any) => [
                                            this.html(`Bdoc211212211`, "code", parentElement, {}, (parentElement: any) => [
                                                this.html(`Bdoc2112122111`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('@states({ count: 0 })')
                                                    ]),
                                                this.html(`Bdoc2112122112`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }] }),
                                                this.html(`Bdoc2112122113`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<div>'),
                                                    this.html(`Bdoc21121221131`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "mustache-token" }] },
                                                        (parentElement: any) => [
                                                        this.text('count')
                                                        ]),
                                                    this.text('</div>')
                                                    ]),
                                                this.html(`Bdoc2112122114`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<button @click(setCount(count + 1))>+</button>')
                                                    ]),
                                                this.html(`Bdoc2112122115`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<button @click(setCount(0))>Reset</button>')
                                                    ])
                                            ])
                                        ])
                                        ])
                                    ])
                                ]),
                            this.html(`Bdoc21122`, "article", parentElement,
                                { classes: [{ type: 'static', value: "cmp-item" }] },
                                (parentElement: any) => [
                                this.html(`Bdoc211221`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-head" }] },
                                    (parentElement: any) => [
                                    this.html(`Bdoc2112211`, "div", parentElement, {}, (parentElement: any) => [
                                        this.html(`Bdoc21122111`, "h3", parentElement, {}, (parentElement: any) => [
                                            this.text('Modifier của event')
                                        ]),
                                        this.html(`Bdoc21122112`, "p", parentElement, {}, (parentElement: any) => [
                                            this.html(`Bdoc211221121`, "code", parentElement, {}, (parentElement: any) => [
                                                this.text('.once')
                                            ]),
                                            this.text(' chỉ chạy một lần; '),
                                            this.html(`Bdoc211221122`, "code", parentElement, {}, (parentElement: any) => [
                                                this.text('.self')
                                            ]),
                                            this.text(' bỏ qua click từ phần tử con.')
                                        ])
                                    ]),
                                    this.html(`Bdoc2112212`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "ov-tags" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21122121`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('.once')
                                            ]),
                                        this.html(`Bdoc21122122`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('.self')
                                            ]),
                                        this.html(`Bdoc21122123`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }] },
                                            (parentElement: any) => [
                                            this.text('.stop')
                                            ])
                                        ])
                                    ]),
                                this.html(`Bdoc211222`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-body" }] },
                                    (parentElement: any) => [
                                    this.html(`Bdoc2112221`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-preview" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21122211`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-row" }] },
                                            (parentElement: any) => [
                                            this.html(`Bdoc211222111`, "button", parentElement,
                                                { events: { click: [(event: any) => setOnceLeft(0)] }, eventModifiers: { click: ["once"] } },
                                                (parentElement: any) => [
                                                this.text('Chỉ chạy 1 lần')
                                                ]),
                                            this.html(`Bdoc211222112`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "cmp-chip" }, { type: 'static', value: "cmp-chip--slate" }] },
                                                (parentElement: any) => [
                                                this.text('còn lại: '),
                                                this.output(`Bdoc211222112o1`, parentElement, true, ["onceLeft"], (parentElement: any) => onceLeft)
                                                ])
                                            ]),
                                        this.html(`Bdoc21122212`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-box" }], events: { click: [(event: any) => setSelfHits(selfHits + 1)] }, eventModifiers: { click: ["self"] } },
                                            (parentElement: any) => [
                                            this.text('Bấm vào nền này thì đếm tăng — bấm'),
                                            this.html(`Bdoc211222121`, "button", parentElement,
                                                { events: { click: [(event: any) => setClicks(clicks + 1)] }, eventModifiers: { click: ["stop"] } },
                                                (parentElement: any) => [
                                                this.text('nút bên trong')
                                                ]),
                                            this.text('thì không.')
                                            ]),
                                        this.html(`Bdoc21122213`, "p", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-note" }] },
                                            (parentElement: any) => [
                                            this.text('nền: '),
                                            this.output(`Bdoc21122213o1`, parentElement, true, ["selfHits"], (parentElement: any) => selfHits),
                                            this.text(' · nút con: '),
                                            this.output(`Bdoc21122213o2`, parentElement, true, ["clicks"], (parentElement: any) => clicks)
                                            ])
                                        ]),
                                    this.html(`Bdoc2112222`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-source" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21122221`, "pre", parentElement, {}, (parentElement: any) => [
                                            this.html(`Bdoc211222211`, "code", parentElement, {}, (parentElement: any) => [
                                                this.html(`Bdoc2112222111`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<button @click.once(setOnceLeft(0))>…</button>')
                                                    ]),
                                                this.html(`Bdoc2112222112`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }] }),
                                                this.html(`Bdoc2112222113`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<div @click.self(setSelfHits(selfHits + 1))>')
                                                    ]),
                                                this.html(`Bdoc2112222114`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('  <button @click.stop(setClicks(clicks + 1))>…</button>')
                                                    ]),
                                                this.html(`Bdoc2112222115`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('</div>')
                                                    ])
                                            ])
                                        ])
                                        ])
                                    ])
                                ]),
                            this.html(`Bdoc21123`, "article", parentElement,
                                { classes: [{ type: 'static', value: "cmp-item" }] },
                                (parentElement: any) => [
                                this.html(`Bdoc211231`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-head" }] },
                                    (parentElement: any) => [
                                    this.html(`Bdoc2112311`, "div", parentElement, {}, (parentElement: any) => [
                                        this.html(`Bdoc21123111`, "h3", parentElement, {}, (parentElement: any) => [
                                            this.text('Biểu thức dẫn xuất')
                                        ]),
                                        this.html(`Bdoc21123112`, "p", parentElement, {}, (parentElement: any) => [
                                            this.text('Compiler suy ra vùng này phụ thuộc '),
                                            this.html(`Bdoc211231121`, "code", parentElement, {}, (parentElement: any) => [
                                                this.text('price')
                                            ]),
                                            this.text(' và '),
                                            this.html(`Bdoc211231122`, "code", parentElement, {}, (parentElement: any) => [
                                                this.text('qty')
                                            ]),
                                            this.text(', chỉ tính lại khi hai state đó đổi.')
                                        ])
                                    ]),
                                    this.html(`Bdoc2112312`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "ov-tags" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21123121`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('output')
                                            ]),
                                        this.html(`Bdoc21123122`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }] },
                                            (parentElement: any) => [
                                            this.text('stateKeys')
                                            ])
                                        ])
                                    ]),
                                this.html(`Bdoc211232`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-body" }] },
                                    (parentElement: any) => [
                                    this.html(`Bdoc2112321`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-preview" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21123211`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-row" }] },
                                            (parentElement: any) => [
                                            this.html(`Bdoc211232111`, "label", parentElement, {}, (parentElement: any) => [
                                                this.text('Đơn giá '),
                                                this.html(`Bdoc2112321111`, "input", parentElement, { attrs: { "type": { type: 'static', value: "number" } }, bind: { key: 'price' } })
                                            ]),
                                            this.html(`Bdoc211232112`, "label", parentElement, {}, (parentElement: any) => [
                                                this.text('Số lượng '),
                                                this.html(`Bdoc2112321121`, "input", parentElement, { attrs: { "type": { type: 'static', value: "number" } }, bind: { key: 'qty' } })
                                            ])
                                            ]),
                                        this.html(`Bdoc21123212`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-out" }] },
                                            (parentElement: any) => [
                                            this.text('Thành tiền: '),
                                            this.output(`Bdoc21123212o1`, parentElement, true, ["price", "qty"], (parentElement: any) => price * qty)
                                            ])
                                        ]),
                                    this.html(`Bdoc2112322`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-source" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21123221`, "pre", parentElement, {}, (parentElement: any) => [
                                            this.html(`Bdoc211232211`, "code", parentElement, {}, (parentElement: any) => [
                                                this.html(`Bdoc2112322111`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('@states({ price: 120, qty: 2 })')
                                                    ]),
                                                this.html(`Bdoc2112322112`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }] }),
                                                this.html(`Bdoc2112322113`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<input type="number" @bind(price)>')
                                                    ]),
                                                this.html(`Bdoc2112322114`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<input type="number" @bind(qty)>')
                                                    ]),
                                                this.html(`Bdoc2112322115`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<div>Thành tiền: '),
                                                    this.html(`Bdoc21123221151`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "mustache-token" }] },
                                                        (parentElement: any) => [
                                                        this.text('price * qty')
                                                        ]),
                                                    this.text('</div>')
                                                    ])
                                            ])
                                        ])
                                        ])
                                    ])
                                ])
                            ])
                        ]),
                    this.html(`Bdoc212`, "section", parentElement,
                        { classes: [{ type: 'static', value: "cmp-group" }] },
                        (parentElement: any) => [
                        this.html(`Bdoc2121`, "div", parentElement,
                            { classes: [{ type: 'static', value: "cmp-group-head" }] },
                            (parentElement: any) => [
                            this.html(`Bdoc21211`, "h2", parentElement, {}, (parentElement: any) => [
                                this.text('Binding hai chiều')
                            ]),
                            this.html(`Bdoc21212`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Một directive cho mọi loại input: text, number, select, checkbox, radio.')
                            ])
                            ]),
                        this.html(`Bdoc2122`, "div", parentElement,
                            { classes: [{ type: 'static', value: "cmp-list" }] },
                            (parentElement: any) => [
                            this.html(`Bdoc21221`, "article", parentElement,
                                { classes: [{ type: 'static', value: "cmp-item" }] },
                                (parentElement: any) => [
                                this.html(`Bdoc212211`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-head" }] },
                                    (parentElement: any) => [
                                    this.html(`Bdoc2122111`, "div", parentElement, {}, (parentElement: any) => [
                                        this.html(`Bdoc21221111`, "h3", parentElement, {}, (parentElement: any) => [
                                            this.text('Text input')
                                        ]),
                                        this.html(`Bdoc21221112`, "p", parentElement, {}, (parentElement: any) => [
                                            this.text('Gõ vào ô thì state đổi, đổi state thì ô đổi theo.')
                                        ])
                                    ]),
                                    this.html(`Bdoc2122112`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "ov-tags" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21221121`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('@bind')
                                            ])
                                        ])
                                    ]),
                                this.html(`Bdoc212212`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-body" }] },
                                    (parentElement: any) => [
                                    this.html(`Bdoc2122121`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-preview" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21221211`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-row" }] },
                                            (parentElement: any) => [
                                            this.html(`Bdoc212212111`, "input", parentElement, { attrs: { "type": { type: 'static', value: "text" }, "placeholder": { type: 'static', value: "Nhập tên…" } }, bind: { key: 'name' } }),
                                            this.html(`Bdoc212212112`, "button", parentElement,
                                                { events: { click: [(event: any) => setName('Saola')] } },
                                                (parentElement: any) => [
                                                this.text('Đặt lại')
                                                ])
                                            ]),
                                        this.html(`Bdoc21221212`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-out" }] },
                                            (parentElement: any) => [
                                            this.text('Xin chào, '),
                                            this.output(`Bdoc21221212o1`, parentElement, true, ["name"], (parentElement: any) => name),
                                            this.text('.')
                                            ])
                                        ]),
                                    this.html(`Bdoc2122122`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-source" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21221221`, "pre", parentElement, {}, (parentElement: any) => [
                                            this.html(`Bdoc212212211`, "code", parentElement, {}, (parentElement: any) => [
                                                this.html(`Bdoc2122122111`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('@states({ name: \'Saola\' })')
                                                    ]),
                                                this.html(`Bdoc2122122112`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }] }),
                                                this.html(`Bdoc2122122113`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<input type="text" @bind(name)>')
                                                    ]),
                                                this.html(`Bdoc2122122114`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<div>Xin chào, '),
                                                    this.html(`Bdoc21221221141`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "mustache-token" }] },
                                                        (parentElement: any) => [
                                                        this.text('name')
                                                        ]),
                                                    this.text('.</div>')
                                                    ])
                                            ])
                                        ])
                                        ])
                                    ])
                                ]),
                            this.html(`Bdoc21222`, "article", parentElement,
                                { classes: [{ type: 'static', value: "cmp-item" }] },
                                (parentElement: any) => [
                                this.html(`Bdoc212221`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-head" }] },
                                    (parentElement: any) => [
                                    this.html(`Bdoc2122211`, "div", parentElement, {}, (parentElement: any) => [
                                        this.html(`Bdoc21222111`, "h3", parentElement, {}, (parentElement: any) => [
                                            this.text('Select & checkbox')
                                        ]),
                                        this.html(`Bdoc21222112`, "p", parentElement, {}, (parentElement: any) => [
                                            this.text('Cùng '),
                                            this.html(`Bdoc212221121`, "code", parentElement,
                                                { classes: [{ type: 'static', value: "directive-token" }] },
                                                (parentElement: any) => [
                                                this.text('bind')
                                                ]),
                                            this.text(', runtime tự chọn '),
                                            this.html(`Bdoc212221122`, "code", parentElement, {}, (parentElement: any) => [
                                                this.text('value')
                                            ]),
                                            this.text(' hay '),
                                            this.html(`Bdoc212221123`, "code", parentElement, {}, (parentElement: any) => [
                                                this.text('checked')
                                            ]),
                                            this.text('.')
                                        ])
                                    ]),
                                    this.html(`Bdoc2122212`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "ov-tags" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21222121`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('@bind')
                                            ]),
                                        this.html(`Bdoc21222122`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }] },
                                            (parentElement: any) => [
                                            this.text('@disabled')
                                            ])
                                        ])
                                    ]),
                                this.html(`Bdoc212222`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-body" }] },
                                    (parentElement: any) => [
                                    this.html(`Bdoc2122221`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-preview" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21222211`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-row" }] },
                                            (parentElement: any) => [
                                            this.html(`Bdoc212222111`, "select", parentElement,
                                                { bind: { key: 'tone' } },
                                                (parentElement: any) => [
                                                this.html(`Bdoc2122221111`, "option", parentElement,
                                                    { attrs: { "value": { type: 'static', value: "sky" } } },
                                                    (parentElement: any) => [
                                                    this.text('sky')
                                                    ]),
                                                this.html(`Bdoc2122221112`, "option", parentElement,
                                                    { attrs: { "value": { type: 'static', value: "indigo" } } },
                                                    (parentElement: any) => [
                                                    this.text('indigo')
                                                    ]),
                                                this.html(`Bdoc2122221113`, "option", parentElement,
                                                    { attrs: { "value": { type: 'static', value: "slate" } } },
                                                    (parentElement: any) => [
                                                    this.text('slate')
                                                    ])
                                                ]),
                                            this.html(`Bdoc212222112`, "label", parentElement, {}, (parentElement: any) => [
                                                this.html(`Bdoc2122221121`, "input", parentElement, { attrs: { "type": { type: 'static', value: "checkbox" } }, bind: { key: 'agree' } }),
                                                this.text(' Đồng ý điều khoản')
                                            ]),
                                            this.html(`Bdoc212222113`, "button", parentElement,
                                                { classes: [{ type: 'static', value: "is-primary" }], props: { "disabled": { type: 'binding', factory: () => !agree, stateKeys: ["agree"] } } },
                                                (parentElement: any) => [
                                                this.text('Gửi')
                                                ])
                                            ]),
                                        this.html(`Bdoc21222212`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-row" }] },
                                            (parentElement: any) => [
                                            this.html(`Bdoc212222121`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "cmp-chip" }, { type: 'binding', value: "cmp-chip--sky", factory: () => tone === 'sky', stateKeys: ["tone"] }, { type: 'binding', value: "cmp-chip--indigo", factory: () => tone === 'indigo', stateKeys: ["tone"] }, { type: 'binding', value: "cmp-chip--slate", factory: () => tone === 'slate', stateKeys: ["tone"] }] },
                                                (parentElement: any) => [
                                                this.text('tone = '),
                                                this.output(`Bdoc212222121o1`, parentElement, true, ["tone"], (parentElement: any) => tone)
                                                ])
                                            ])
                                        ]),
                                    this.html(`Bdoc2122222`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-source" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21222221`, "pre", parentElement, {}, (parentElement: any) => [
                                            this.html(`Bdoc212222211`, "code", parentElement, {}, (parentElement: any) => [
                                                this.html(`Bdoc2122222111`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<select @bind(tone)>…</select>')
                                                    ]),
                                                this.html(`Bdoc2122222112`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<input type="checkbox" @bind(agree)>')
                                                    ]),
                                                this.html(`Bdoc2122222113`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<button @disabled(!agree)>Gửi</button>')
                                                    ])
                                            ])
                                        ])
                                        ])
                                    ])
                                ])
                            ])
                        ]),
                    this.html(`Bdoc213`, "section", parentElement,
                        { classes: [{ type: 'static', value: "cmp-group" }] },
                        (parentElement: any) => [
                        this.html(`Bdoc2131`, "div", parentElement,
                            { classes: [{ type: 'static', value: "cmp-group-head" }] },
                            (parentElement: any) => [
                            this.html(`Bdoc21311`, "h2", parentElement, {}, (parentElement: any) => [
                                this.text('Ràng buộc thuộc tính')
                            ]),
                            this.html(`Bdoc21312`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Class, style và boolean attribute đều đọc thẳng từ state.')
                            ])
                            ]),
                        this.html(`Bdoc2132`, "div", parentElement,
                            { classes: [{ type: 'static', value: "cmp-list" }] },
                            (parentElement: any) => [
                            this.html(`Bdoc21321`, "article", parentElement,
                                { classes: [{ type: 'static', value: "cmp-item" }] },
                                (parentElement: any) => [
                                this.html(`Bdoc213211`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-head" }] },
                                    (parentElement: any) => [
                                    this.html(`Bdoc2132111`, "div", parentElement, {}, (parentElement: any) => [
                                        this.html(`Bdoc21321111`, "h3", parentElement, {}, (parentElement: any) => [
                                            this.text('Class động')
                                        ]),
                                        this.html(`Bdoc21321112`, "p", parentElement, {}, (parentElement: any) => [
                                            this.text('Class tĩnh trộn với class có điều kiện; chỉ thuộc tính class được đụng tới, phần còn lại của thẻ giữ nguyên.')
                                        ])
                                    ]),
                                    this.html(`Bdoc2132112`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "ov-tags" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21321121`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('@class')
                                            ])
                                        ])
                                    ]),
                                this.html(`Bdoc213212`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-body" }] },
                                    (parentElement: any) => [
                                    this.html(`Bdoc2132121`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-preview" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21321211`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-row" }] },
                                            (parentElement: any) => [
                                            this.html(`Bdoc213212111`, "button", parentElement,
                                                { events: { click: [(event: any) => setTextSize('sm')] } },
                                                (parentElement: any) => [
                                                this.text('Nhỏ')
                                                ]),
                                            this.html(`Bdoc213212112`, "button", parentElement,
                                                { events: { click: [(event: any) => setTextSize('md')] } },
                                                (parentElement: any) => [
                                                this.text('Vừa')
                                                ]),
                                            this.html(`Bdoc213212113`, "button", parentElement,
                                                { events: { click: [(event: any) => setTextSize('lg')] } },
                                                (parentElement: any) => [
                                                this.text('Lớn')
                                                ])
                                            ]),
                                        this.html(`Bdoc21321212`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-box" }, { type: 'binding', value: "txt-sm", factory: () => textSize === 'sm', stateKeys: ["textSize"] }, { type: 'binding', value: "txt-lg", factory: () => textSize === 'lg', stateKeys: ["textSize"] }] },
                                            (parentElement: any) => [
                                            this.text('Cỡ chữ hiện tại: '),
                                            this.output(`Bdoc21321212o1`, parentElement, true, ["textSize"], (parentElement: any) => textSize),
                                            this.text('.')
                                            ])
                                        ]),
                                    this.html(`Bdoc2132122`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-source" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21321221`, "pre", parentElement, {}, (parentElement: any) => [
                                            this.html(`Bdoc213212211`, "code", parentElement, {}, (parentElement: any) => [
                                                this.html(`Bdoc2132122111`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('@states({ textSize: \'md\' })')
                                                    ]),
                                                this.html(`Bdoc2132122112`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }] }),
                                                this.html(`Bdoc2132122113`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<div @class({\'box\', \'txt-lg\': textSize === \'lg\'})>…</div>')
                                                    ]),
                                                this.html(`Bdoc2132122114`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<button @click(setTextSize(\'lg\'))>Lớn</button>')
                                                    ])
                                            ])
                                        ])
                                        ])
                                    ])
                                ]),
                            this.html(`Bdoc21322`, "article", parentElement,
                                { classes: [{ type: 'static', value: "cmp-item" }] },
                                (parentElement: any) => [
                                this.html(`Bdoc213221`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-head" }] },
                                    (parentElement: any) => [
                                    this.html(`Bdoc2132211`, "div", parentElement, {}, (parentElement: any) => [
                                        this.html(`Bdoc21322111`, "h3", parentElement, {}, (parentElement: any) => [
                                            this.text('Ẩn hiện & readonly')
                                        ]),
                                        this.html(`Bdoc21322112`, "p", parentElement, {}, (parentElement: any) => [
                                            this.text('Bật tắt hiển thị bằng class có điều kiện — DOM vẫn nằm nguyên chỗ cũ.')
                                        ])
                                    ]),
                                    this.html(`Bdoc2132212`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "ov-tags" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21322121`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('@class')
                                            ]),
                                        this.html(`Bdoc21322122`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('@readonly')
                                            ])
                                        ])
                                    ]),
                                this.html(`Bdoc213222`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-body" }] },
                                    (parentElement: any) => [
                                    this.html(`Bdoc2132221`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-preview" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21322211`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-row" }] },
                                            (parentElement: any) => [
                                            this.html(`Bdoc213222111`, "button", parentElement,
                                                { events: { click: [(event: any) => setVisible(!visible)] } },
                                                (parentElement: any) => [
                                                this.text('Bật tắt khối')
                                                ]),
                                            this.html(`Bdoc213222112`, "label", parentElement, {}, (parentElement: any) => [
                                                this.html(`Bdoc2132221121`, "input", parentElement, { attrs: { "type": { type: 'static', value: "checkbox" } }, bind: { key: 'locked' } }),
                                                this.text(' Khoá ô nhập')
                                            ])
                                            ]),
                                        this.html(`Bdoc21322212`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-box" }, { type: 'binding', value: "is-hidden", factory: () => !visible, stateKeys: ["visible"] }] },
                                            (parentElement: any) => [
                                            this.text('Khối này vẫn nằm trong DOM khi bị ẩn.')
                                            ]),
                                        this.html(`Bdoc21322213`, "input", parentElement, { attrs: { "type": { type: 'static', value: "text" }, "placeholder": { type: 'static', value: "Ghi chú…" } }, props: { "readOnly": { type: 'binding', factory: () => locked, stateKeys: ["locked"] } }, bind: { key: 'draft' } })
                                        ]),
                                    this.html(`Bdoc2132222`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-source" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21322221`, "pre", parentElement, {}, (parentElement: any) => [
                                            this.html(`Bdoc213222211`, "code", parentElement, {}, (parentElement: any) => [
                                                this.html(`Bdoc2132222111`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<div @class({\'box\', \'is-hidden\': !visible})>…</div>')
                                                    ]),
                                                this.html(`Bdoc2132222112`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<input @bind(draft) @readonly(locked)>')
                                                    ])
                                            ])
                                        ])
                                        ])
                                    ])
                                ])
                            ])
                        ]),
                    this.html(`Bdoc214`, "section", parentElement,
                        { classes: [{ type: 'static', value: "cmp-group" }] },
                        (parentElement: any) => [
                        this.html(`Bdoc2141`, "div", parentElement,
                            { classes: [{ type: 'static', value: "cmp-group-head" }] },
                            (parentElement: any) => [
                            this.html(`Bdoc21411`, "h2", parentElement, {}, (parentElement: any) => [
                                this.text('Điều khiển luồng')
                            ]),
                            this.html(`Bdoc21412`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Mỗi khối là một vùng marker độc lập, chỉ render lại khi state phụ thuộc đổi.')
                            ])
                            ]),
                        this.html(`Bdoc2142`, "div", parentElement,
                            { classes: [{ type: 'static', value: "cmp-list" }] },
                            (parentElement: any) => [
                            this.html(`Bdoc21421`, "article", parentElement,
                                { classes: [{ type: 'static', value: "cmp-item" }] },
                                (parentElement: any) => [
                                this.html(`Bdoc214211`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-head" }] },
                                    (parentElement: any) => [
                                    this.html(`Bdoc2142111`, "div", parentElement, {}, (parentElement: any) => [
                                        this.html(`Bdoc21421111`, "h3", parentElement, {}, (parentElement: any) => [
                                            this.text('If / elseif / else')
                                        ]),
                                        this.html(`Bdoc21421112`, "p", parentElement, {}, (parentElement: any) => [
                                            this.text('Compiler tự suy ra state nào khiến vùng này render lại.')
                                        ])
                                    ]),
                                    this.html(`Bdoc2142112`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "ov-tags" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21421121`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('@if')
                                            ]),
                                        this.html(`Bdoc21421122`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }] },
                                            (parentElement: any) => [
                                            this.text('@elseif')
                                            ]),
                                        this.html(`Bdoc21421123`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }] },
                                            (parentElement: any) => [
                                            this.text('@else')
                                            ])
                                        ])
                                    ]),
                                this.html(`Bdoc214212`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-body" }] },
                                    (parentElement: any) => [
                                    this.html(`Bdoc2142121`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-preview" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21421211`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-row" }] },
                                            (parentElement: any) => [
                                            this.html(`Bdoc214212111`, "button", parentElement,
                                                { events: { click: [(event: any) => setStatus('ready')] } },
                                                (parentElement: any) => [
                                                this.text('ready')
                                                ]),
                                            this.html(`Bdoc214212112`, "button", parentElement,
                                                { events: { click: [(event: any) => setStatus('building')] } },
                                                (parentElement: any) => [
                                                this.text('building')
                                                ]),
                                            this.html(`Bdoc214212113`, "button", parentElement,
                                                { events: { click: [(event: any) => setStatus('error')] } },
                                                (parentElement: any) => [
                                                this.text('error')
                                                ])
                                            ]),
                                        this.reactive(`Bdoc2142121r1`, "if", parentReactive, parentElement, ["status"], (parentReactive: any, parentElement: any) => {
                                            const reactiveContents = [];
                                            if (status === 'ready') {
                                                reactiveContents.push(
                                                this.html(`Bdoc2142121r1k11`, "div", parentElement,
                                                    { classes: [{ type: 'static', value: "cmp-out" }] },
                                                    (parentElement: any) => [
                                                    this.text('Sẵn sàng — bundle khớp với view registry.')
                                                    ])
                                                );
                                            }
                                            else if (status === 'building') {
                                                reactiveContents.push(
                                                this.html(`Bdoc2142121r1k21`, "div", parentElement,
                                                    { classes: [{ type: 'static', value: "cmp-box" }] },
                                                    (parentElement: any) => [
                                                    this.text('Đang biên dịch view cho context web…')
                                                    ])
                                                );
                                            }
                                            else {
                                                reactiveContents.push(
                                                this.html(`Bdoc2142121r1k31`, "div", parentElement,
                                                    { classes: [{ type: 'static', value: "cmp-box" }] },
                                                    (parentElement: any) => [
                                                    this.text('Có lỗi khi compile. Xem log của '),
                                                    this.html(`Bdoc2142121r1k311`, "code", parentElement, {}, (parentElement: any) => [
                                                        this.text('sao-compile')
                                                    ]),
                                                    this.text('.')
                                                    ])
                                                );
                                            }
                                            return reactiveContents;
                                        })
                                        ]),
                                    this.html(`Bdoc2142122`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-source" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21421221`, "pre", parentElement, {}, (parentElement: any) => [
                                            this.html(`Bdoc214212211`, "code", parentElement, {}, (parentElement: any) => [
                                                this.html(`Bdoc2142122111`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('@if(status === \'ready\')')
                                                    ]),
                                                this.html(`Bdoc2142122112`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('    <div>Sẵn sàng…</div>')
                                                    ]),
                                                this.html(`Bdoc2142122113`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('@elseif(status === \'building\')')
                                                    ]),
                                                this.html(`Bdoc2142122114`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('    <div>Đang biên dịch…</div>')
                                                    ]),
                                                this.html(`Bdoc2142122115`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('@else')
                                                    ]),
                                                this.html(`Bdoc2142122116`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('    <div>Có lỗi…</div>')
                                                    ]),
                                                this.html(`Bdoc2142122117`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('@endif')
                                                    ])
                                            ])
                                        ])
                                        ])
                                    ])
                                ]),
                            this.html(`Bdoc21422`, "article", parentElement,
                                { classes: [{ type: 'static', value: "cmp-item" }] },
                                (parentElement: any) => [
                                this.html(`Bdoc214221`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-head" }] },
                                    (parentElement: any) => [
                                    this.html(`Bdoc2142211`, "div", parentElement, {}, (parentElement: any) => [
                                        this.html(`Bdoc21422111`, "h3", parentElement, {}, (parentElement: any) => [
                                            this.text('Switch')
                                        ]),
                                        this.html(`Bdoc21422112`, "p", parentElement, {}, (parentElement: any) => [
                                            this.text('Nhiều nhánh trong một vùng marker duy nhất.')
                                        ])
                                    ]),
                                    this.html(`Bdoc2142212`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "ov-tags" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21422121`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('@switch')
                                            ]),
                                        this.html(`Bdoc21422122`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }] },
                                            (parentElement: any) => [
                                            this.text('@case')
                                            ])
                                        ])
                                    ]),
                                this.html(`Bdoc214222`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-body" }] },
                                    (parentElement: any) => [
                                    this.html(`Bdoc2142221`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-preview" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21422211`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-row" }] },
                                            (parentElement: any) => [
                                            this.html(`Bdoc214222111`, "button", parentElement,
                                                { events: { click: [(event: any) => setRuntime('blade')] } },
                                                (parentElement: any) => [
                                                this.text('Blade')
                                                ]),
                                            this.html(`Bdoc214222112`, "button", parentElement,
                                                { events: { click: [(event: any) => setRuntime('client')] } },
                                                (parentElement: any) => [
                                                this.text('Client')
                                                ]),
                                            this.html(`Bdoc214222113`, "button", parentElement,
                                                { events: { click: [(event: any) => setRuntime('api')] } },
                                                (parentElement: any) => [
                                                this.text('API')
                                                ])
                                            ]),
                                        this.reactive(`Bdoc2142221r1`, "switch", parentReactive, parentElement, ["runtime"], (parentReactive: any, parentElement: any) => {
                                            const reactiveContents = [];
                                            switch (runtime) {
                                                case 'blade':
                                                    reactiveContents.push(
                                                    this.html(`Bdoc2142221r1k11`, "div", parentElement,
                                                        { classes: [{ type: 'static', value: "cmp-out" }] },
                                                        (parentElement: any) => [
                                                        this.text('Server render HTML hoàn chỉnh cho request đầu.')
                                                        ])
                                                    );
                                                    break;
                                                case 'client':
                                                    reactiveContents.push(
                                                    this.html(`Bdoc2142221r1k21`, "div", parentElement,
                                                        { classes: [{ type: 'static', value: "cmp-out" }] },
                                                        (parentElement: any) => [
                                                        this.text('Runtime claim DOM rồi tiếp quản điều hướng.')
                                                        ])
                                                    );
                                                    break;
                                                default:
                                                    reactiveContents.push(
                                                    this.html(`Bdoc2142221r1k31`, "div", parentElement,
                                                        { classes: [{ type: 'static', value: "cmp-out" }] },
                                                        (parentElement: any) => [
                                                        this.text('Context api trả JSON, không render view.')
                                                        ])
                                                    );
                                                    break;
                                            }
                                            return reactiveContents;
                                        })
                                        ]),
                                    this.html(`Bdoc2142222`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-source" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21422221`, "pre", parentElement, {}, (parentElement: any) => [
                                            this.html(`Bdoc214222211`, "code", parentElement, {}, (parentElement: any) => [
                                                this.html(`Bdoc2142222111`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('@switch(runtime)')
                                                    ]),
                                                this.html(`Bdoc2142222112`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('    @case(\'blade\')')
                                                    ]),
                                                this.html(`Bdoc2142222113`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('        <div>Server render…</div>')
                                                    ]),
                                                this.html(`Bdoc2142222114`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('        @break')
                                                    ]),
                                                this.html(`Bdoc2142222115`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('    @default')
                                                    ]),
                                                this.html(`Bdoc2142222116`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('        <div>Context api…</div>')
                                                    ]),
                                                this.html(`Bdoc2142222117`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('@endswitch')
                                                    ])
                                            ])
                                        ])
                                        ])
                                    ])
                                ]),
                            this.html(`Bdoc21423`, "article", parentElement,
                                { classes: [{ type: 'static', value: "cmp-item" }] },
                                (parentElement: any) => [
                                this.html(`Bdoc214231`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-head" }] },
                                    (parentElement: any) => [
                                    this.html(`Bdoc2142311`, "div", parentElement, {}, (parentElement: any) => [
                                        this.html(`Bdoc21423111`, "h3", parentElement, {}, (parentElement: any) => [
                                            this.text('Foreach có @key')
                                        ]),
                                        this.html(`Bdoc21423112`, "p", parentElement, {}, (parentElement: any) => [
                                            this.text('Khoá quyết định slot nào được tái dùng khi danh sách đổi.')
                                        ])
                                    ]),
                                    this.html(`Bdoc2142312`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "ov-tags" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21423121`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('@foreach')
                                            ]),
                                        this.html(`Bdoc21423122`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('@key')
                                            ])
                                        ])
                                    ]),
                                this.html(`Bdoc214232`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-body" }] },
                                    (parentElement: any) => [
                                    this.html(`Bdoc2142321`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-preview" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21423211`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-row" }] },
                                            (parentElement: any) => [
                                            this.html(`Bdoc214232111`, "input", parentElement, { attrs: { "type": { type: 'static', value: "text" }, "placeholder": { type: 'static', value: "Thêm mục…" } }, bind: { key: 'draft' } }),
                                            this.html(`Bdoc214232112`, "button", parentElement,
                                                { classes: [{ type: 'static', value: "is-primary" }], events: { click: [{"handler":"addItem","params":[]}] } },
                                                (parentElement: any) => [
                                                this.text('Thêm')
                                                ])
                                            ]),
                                        this.html(`Bdoc21423212`, "ul", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-ul" }] },
                                            (parentElement: any) => [
                                            this.reactive(`Bdoc21423212l1`, "foreach", parentReactive, parentElement, ["items"], (parentReactive: any, parentElement: any) => {
                                                return this.__foreach(items, (item: any, __loopKey: any, __loopIndex: any, __loop: any) => [
                                                    this.html(`Bdoc21423212l11-${item['id']}`, "li", parentElement, {}, (parentElement: any) => [
                                                        this.html(`Bdoc21423212l111-${item['id']}`, "span", parentElement, {}, (parentElement: any) => [
                                                            this.output(`Bdoc21423212l111o1-${item['id']}`, parentElement, true, [], (parentElement: any) => item['label'])
                                                        ]),
                                                        this.html(`Bdoc21423212l112-${item['id']}`, "button", parentElement,
                                                            { events: { click: [{"handler":"removeItem","params":[item['id']]}] } },
                                                            (parentElement: any) => [
                                                            this.text('Xoá')
                                                            ])
                                                    ])
                                                ], (item: any) => item['id'])
                                            })
                                            ]),
                                        this.reactive(`Bdoc2142321r1`, "if", parentReactive, parentElement, ["count", "items"], (parentReactive: any, parentElement: any) => {
                                            const reactiveContents = [];
                                            if (App.Helper.count(items) === 0) {
                                                reactiveContents.push(
                                                this.html(`Bdoc2142321r1k11`, "p", parentElement,
                                                    { classes: [{ type: 'static', value: "cmp-note" }] },
                                                    (parentElement: any) => [
                                                    this.text('Danh sách trống.')
                                                    ])
                                                );
                                            }
                                            return reactiveContents;
                                        })
                                        ]),
                                    this.html(`Bdoc2142322`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-source" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21423221`, "pre", parentElement, {}, (parentElement: any) => [
                                            this.html(`Bdoc214232211`, "code", parentElement, {}, (parentElement: any) => [
                                                this.html(`Bdoc2142322111`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('@foreach(items as item)')
                                                    ]),
                                                this.html(`Bdoc2142322112`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('    @key(item[\'id\'])')
                                                    ]),
                                                this.html(`Bdoc2142322113`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('    <li>')
                                                    ]),
                                                this.html(`Bdoc2142322114`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('        <span>'),
                                                    this.html(`Bdoc21423221141`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "mustache-token" }] },
                                                        (parentElement: any) => [
                                                        this.text('item[\'label\']')
                                                        ]),
                                                    this.text('</span>')
                                                    ]),
                                                this.html(`Bdoc2142322115`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('        <button @click(removeItem(item[\'id\']))>Xoá</button>')
                                                    ]),
                                                this.html(`Bdoc2142322116`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('    </li>')
                                                    ]),
                                                this.html(`Bdoc2142322117`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('@endforeach')
                                                    ])
                                            ])
                                        ])
                                        ])
                                    ])
                                ])
                            ])
                        ]),
                    this.html(`Bdoc215`, "section", parentElement,
                        { classes: [{ type: 'static', value: "cmp-group" }] },
                        (parentElement: any) => [
                        this.html(`Bdoc2151`, "div", parentElement,
                            { classes: [{ type: 'static', value: "cmp-group-head" }] },
                            (parentElement: any) => [
                            this.html(`Bdoc21511`, "h2", parentElement, {}, (parentElement: any) => [
                                this.text('Component con')
                            ]),
                            this.html(`Bdoc21512`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Include tạo một view thật với ViewController và vòng đời riêng, không phải partial dán vào.')
                            ])
                            ]),
                        this.html(`Bdoc2152`, "div", parentElement,
                            { classes: [{ type: 'static', value: "cmp-list" }] },
                            (parentElement: any) => [
                            this.html(`Bdoc21521`, "article", parentElement,
                                { classes: [{ type: 'static', value: "cmp-item" }] },
                                (parentElement: any) => [
                                this.html(`Bdoc215211`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-head" }] },
                                    (parentElement: any) => [
                                    this.html(`Bdoc2152111`, "div", parentElement, {}, (parentElement: any) => [
                                        this.html(`Bdoc21521111`, "h3", parentElement, {}, (parentElement: any) => [
                                            this.text('Props & children')
                                        ]),
                                        this.html(`Bdoc21521112`, "p", parentElement, {}, (parentElement: any) => [
                                            this.text('Prop đổi theo state của trang; nội dung giữa thẻ đi qua slot.')
                                        ])
                                    ]),
                                    this.html(`Bdoc2152112`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "ov-tags" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21521121`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('@include')
                                            ]),
                                        this.html(`Bdoc21521122`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('@props')
                                            ]),
                                        this.html(`Bdoc21521123`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }] },
                                            (parentElement: any) => [
                                            this.text('@children')
                                            ])
                                        ])
                                    ]),
                                this.html(`Bdoc215212`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-body" }] },
                                    (parentElement: any) => [
                                    this.html(`Bdoc2152121`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-preview" }] },
                                        (parentElement: any) => [
                                        this.include(`Bdoc2152121c1`, 'web.modules.components.statcard', parentElement, ["count", "tone"], (parentElement: any) => ({"label": "Số lần bấm", "value": count, "tone": tone})),
                                        this.html(`Bdoc21521211`, "p", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-note" }] },
                                            (parentElement: any) => [
                                            this.text('Đổi counter hoặc select tone ở trên rồi nhìn thẻ này cập nhật.')
                                            ])
                                        ]),
                                    this.html(`Bdoc2152122`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-source" }] },
                                        (parentElement: any) => [
                                        this.html(`Bdoc21521221`, "pre", parentElement, {}, (parentElement: any) => [
                                            this.html(`Bdoc215212211`, "code", parentElement, {}, (parentElement: any) => [
                                                this.html(`Bdoc2152122111`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('@props({ label: \'Label\', value: \'0\', tone: \'sky\' })')
                                                    ]),
                                                this.html(`Bdoc2152122112`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }] }),
                                                this.html(`Bdoc2152122113`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<div @class({\'card\', \'card--indigo\': tone === \'indigo\'})>')
                                                    ]),
                                                this.html(`Bdoc2152122114`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('  <span>'),
                                                    this.html(`Bdoc21521221141`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "mustache-token" }] },
                                                        (parentElement: any) => [
                                                        this.text('label')
                                                        ]),
                                                    this.text('</span>')
                                                    ]),
                                                this.html(`Bdoc2152122115`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('  <strong>'),
                                                    this.html(`Bdoc21521221151`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "mustache-token" }] },
                                                        (parentElement: any) => [
                                                        this.text('value')
                                                        ]),
                                                    this.text('</strong>')
                                                    ]),
                                                this.html(`Bdoc2152122116`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('  @children')
                                                    ]),
                                                this.html(`Bdoc2152122117`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('</div>')
                                                    ])
                                            ])
                                        ])
                                        ])
                                    ])
                                ])
                            ])
                        ]),
                    this.html(`Bdoc216`, "section", parentElement,
                        { classes: [{ type: 'static', value: "cmp-group" }] },
                        (parentElement: any) => [
                        this.html(`Bdoc2161`, "div", parentElement,
                            { classes: [{ type: 'static', value: "cmp-group-head" }] },
                            (parentElement: any) => [
                            this.html(`Bdoc21611`, "h2", parentElement, {}, (parentElement: any) => [
                                this.text('Trang mẫu đầy đủ')
                            ]),
                            this.html(`Bdoc21612`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Ba fixture lớn hơn, mỗi cái tập trung vào một vấn đề thật.')
                            ])
                            ]),
                        this.html(`Bdoc2162`, "div", parentElement,
                            { classes: [{ type: 'static', value: "ov-grid" }, { type: 'static', value: "ov-grid--3" }] },
                            (parentElement: any) => [
                            this.html(`Bdoc21621`, "a", parentElement,
                                { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/demo" } } },
                                (parentElement: any) => [
                                this.html(`Bdoc216211`, "span", parentElement, {}, (parentElement: any) => [
                                    this.text('Cú pháp')
                                ]),
                                this.html(`Bdoc216212`, "h3", parentElement, {}, (parentElement: any) => [
                                    this.text('Interactive demo →')
                                ]),
                                this.html(`Bdoc216213`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Chín nhóm cú pháp trong một trang, gồm cả phần chỉ chạy phía server.')
                                ])
                                ]),
                            this.html(`Bdoc21622`, "a", parentElement,
                                { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/todo-list" } } },
                                (parentElement: any) => [
                                this.html(`Bdoc216221`, "span", parentElement, {}, (parentElement: any) => [
                                    this.text('Layout')
                                ]),
                                this.html(`Bdoc216222`, "h3", parentElement, {}, (parentElement: any) => [
                                    this.text('Todo workspace →')
                                ]),
                                this.html(`Bdoc216223`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('State cục bộ của trang trong khi layout giữ nguyên qua mỗi lần đổi route.')
                                ])
                                ]),
                            this.html(`Bdoc21623`, "a", parentElement,
                                { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/roster" } } },
                                (parentElement: any) => [
                                this.html(`Bdoc216231`, "span", parentElement, {}, (parentElement: any) => [
                                    this.text('Đồng thời')
                                ]),
                                this.html(`Bdoc216232`, "h3", parentElement, {}, (parentElement: any) => [
                                    this.text('Roster sync →')
                                ]),
                                this.html(`Bdoc216233`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Poll ba mươi giây và xử lý khi người khác sửa hoặc xoá bản ghi bạn đang mở.')
                                ])
                                ])
                            ])
                        ])
                    ])
                ]),
            this.html(`Bdoc3`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/docs" } } },
                (parentElement: any) => [
                this.html(`Bdoc31`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`Bdoc311`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('Quay lại')
                    ]),
                    this.html(`Bdoc312`, "strong", parentElement, {}, (parentElement: any) => [
                        this.text('Mục lục tài liệu')
                    ])
                ]),
                this.html(`Bdoc32`, "span", parentElement,
                    { classes: [{ type: 'static', value: "button" }, { type: 'static', value: "button-primary" }] },
                    (parentElement: any) => [
                    this.text('Mở tài liệu →')
                    ])
                ])
            ]);
            this.superViewPath = `${__layout__+"docs"}`;
            return this.extendView(this.superViewPath, {});
            }
        });

    }
}

// Export factory function
export function WebModulesComponentsIndex(__data__ = {}, systemData = {}): IndexView {
    return new IndexView(__data__, systemData);
}
export default WebModulesComponentsIndex;