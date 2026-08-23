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
    constructor(__data__: IndexProps = {}, systemData: any = {}) {
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
            this.html(`ff96f7a7`, "header", parentElement,
                { classes: [{ type: 'static', value: "page-hero" }] },
                (parentElement: any) => [
                this.html(`15b892a7`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`ab74559e`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement: any) => [
                        this.html(`943e8228`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('10')
                        ]),
                        this.text(' THỰC HÀNH')
                        ]),
                    this.html(`9abe25a3`, "h1", parentElement, {}, (parentElement: any) => [
                        this.text('Thư viện component.')
                    ])
                ]),
                this.html(`f750a15d`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement: any) => [
                    this.html(`2a968179`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Mỗi ví dụ dưới đây đang chạy thật trên chính trang này, kèm đúng đoạn '),
                        this.html(`1169a7fa`, "code", parentElement, {}, (parentElement: any) => [
                            this.text('.sao')
                        ]),
                        this.text(' sinh ra nó. Bấm thử bên trái, đọc nguồn bên phải.')
                    ])
                    ])
                ]),
            this.html(`e5195f55`, "div", parentElement,
                { classes: [{ type: 'static', value: "cmp-page" }] },
                (parentElement: any) => [
                this.html(`dea63217`, "div", parentElement,
                    { classes: [{ type: 'static', value: "cmp-groups" }] },
                    (parentElement: any) => [
                    this.html(`0cfc5a01`, "section", parentElement,
                        { classes: [{ type: 'static', value: "cmp-group" }] },
                        (parentElement: any) => [
                        this.html(`58995b16`, "div", parentElement,
                            { classes: [{ type: 'static', value: "cmp-group-head" }] },
                            (parentElement: any) => [
                            this.html(`7f44b4eb`, "h2", parentElement, {}, (parentElement: any) => [
                                this.text('State & sự kiện')
                            ]),
                            this.html(`b67f547e`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Khai báo state ở đầu file, mỗi key tự có setter; event gắn thẳng lên thẻ.')
                            ])
                            ]),
                        this.html(`f9992957`, "div", parentElement,
                            { classes: [{ type: 'static', value: "cmp-list" }] },
                            (parentElement: any) => [
                            this.html(`028a1ce6`, "article", parentElement,
                                { classes: [{ type: 'static', value: "cmp-item" }] },
                                (parentElement: any) => [
                                this.html(`47228410`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-head" }] },
                                    (parentElement: any) => [
                                    this.html(`c9c600aa`, "div", parentElement, {}, (parentElement: any) => [
                                        this.html(`4addf75b`, "h3", parentElement, {}, (parentElement: any) => [
                                            this.text('Counter')
                                        ]),
                                        this.html(`76108c2c`, "p", parentElement, {}, (parentElement: any) => [
                                            this.text('Setter sinh tự động từ tên state.')
                                        ])
                                    ]),
                                    this.html(`1d526c01`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "ov-tags" }] },
                                        (parentElement: any) => [
                                        this.html(`ac0f82ac`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('@states')
                                            ]),
                                        this.html(`7b117172`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }] },
                                            (parentElement: any) => [
                                            this.text('@click')
                                            ])
                                        ])
                                    ]),
                                this.html(`e1815feb`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-body" }] },
                                    (parentElement: any) => [
                                    this.html(`726528cb`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-preview" }] },
                                        (parentElement: any) => [
                                        this.html(`5c814cf5`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-num" }] },
                                            (parentElement: any) => [
                                            this.output(`41fb371a`, parentElement, true, ["count"], (parentElement: any) => count)
                                            ]),
                                        this.html(`0ade8a7d`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-row" }] },
                                            (parentElement: any) => [
                                            this.html(`73b0356c`, "button", parentElement,
                                                { events: { click: [(event: any) => setCount(count - 1)] } },
                                                (parentElement: any) => [
                                                this.text('−')
                                                ]),
                                            this.html(`27e8d656`, "button", parentElement,
                                                { classes: [{ type: 'static', value: "is-primary" }], events: { click: [(event: any) => setCount(count + 1)] } },
                                                (parentElement: any) => [
                                                this.text('+')
                                                ]),
                                            this.html(`113851b1`, "button", parentElement,
                                                { events: { click: [(event: any) => setCount(0)] } },
                                                (parentElement: any) => [
                                                this.text('Reset')
                                                ])
                                            ])
                                        ]),
                                    this.html(`1c69bb38`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-source" }] },
                                        (parentElement: any) => [
                                        this.html(`dbbd9b93`, "pre", parentElement, {}, (parentElement: any) => [
                                            this.html(`01c97f8b`, "code", parentElement, {}, (parentElement: any) => [
                                                this.html(`becf0f5b`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('@states({ count: 0 })')
                                                    ]),
                                                this.html(`4dc2384b`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }] }),
                                                this.html(`08688933`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<div>'),
                                                    this.html(`747ca4cc`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "mustache-token" }] },
                                                        (parentElement: any) => [
                                                        this.text('count')
                                                        ]),
                                                    this.text('</div>')
                                                    ]),
                                                this.html(`b5504254`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<button @click(setCount(count + 1))>+</button>')
                                                    ]),
                                                this.html(`0feec16c`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<button @click(setCount(0))>Reset</button>')
                                                    ])
                                            ])
                                        ])
                                        ])
                                    ])
                                ]),
                            this.html(`449631b3`, "article", parentElement,
                                { classes: [{ type: 'static', value: "cmp-item" }] },
                                (parentElement: any) => [
                                this.html(`f239a11f`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-head" }] },
                                    (parentElement: any) => [
                                    this.html(`ee944775`, "div", parentElement, {}, (parentElement: any) => [
                                        this.html(`dab19ca9`, "h3", parentElement, {}, (parentElement: any) => [
                                            this.text('Modifier của event')
                                        ]),
                                        this.html(`f4af95ae`, "p", parentElement, {}, (parentElement: any) => [
                                            this.html(`85074370`, "code", parentElement, {}, (parentElement: any) => [
                                                this.text('.once')
                                            ]),
                                            this.text(' chỉ chạy một lần; '),
                                            this.html(`022440d0`, "code", parentElement, {}, (parentElement: any) => [
                                                this.text('.self')
                                            ]),
                                            this.text(' bỏ qua click từ phần tử con.')
                                        ])
                                    ]),
                                    this.html(`f42d3208`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "ov-tags" }] },
                                        (parentElement: any) => [
                                        this.html(`e978abd9`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('.once')
                                            ]),
                                        this.html(`743ac9f2`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('.self')
                                            ]),
                                        this.html(`7a342e91`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }] },
                                            (parentElement: any) => [
                                            this.text('.stop')
                                            ])
                                        ])
                                    ]),
                                this.html(`ea44e5ff`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-body" }] },
                                    (parentElement: any) => [
                                    this.html(`a8a9cd5d`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-preview" }] },
                                        (parentElement: any) => [
                                        this.html(`d7c10902`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-row" }] },
                                            (parentElement: any) => [
                                            this.html(`f10652b2`, "button", parentElement,
                                                { events: { click: [(event: any) => setOnceLeft(0)] }, eventModifiers: { click: ["once"] } },
                                                (parentElement: any) => [
                                                this.text('Chỉ chạy 1 lần')
                                                ]),
                                            this.html(`e14e91b1`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "cmp-chip" }, { type: 'static', value: "cmp-chip--slate" }] },
                                                (parentElement: any) => [
                                                this.text('còn lại: '),
                                                this.output(`0bbd2803`, parentElement, true, ["onceLeft"], (parentElement: any) => onceLeft)
                                                ])
                                            ]),
                                        this.html(`96422564`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-box" }], events: { click: [(event: any) => setSelfHits(selfHits + 1)] }, eventModifiers: { click: ["self"] } },
                                            (parentElement: any) => [
                                            this.text('Bấm vào nền này thì đếm tăng — bấm'),
                                            this.html(`d421a688`, "button", parentElement,
                                                { events: { click: [(event: any) => setClicks(clicks + 1)] }, eventModifiers: { click: ["stop"] } },
                                                (parentElement: any) => [
                                                this.text('nút bên trong')
                                                ]),
                                            this.text('thì không.')
                                            ]),
                                        this.html(`d1ecc7ac`, "p", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-note" }] },
                                            (parentElement: any) => [
                                            this.text('nền: '),
                                            this.output(`a9c472bc`, parentElement, true, ["selfHits"], (parentElement: any) => selfHits),
                                            this.text(' · nút con: '),
                                            this.output(`febd55ba`, parentElement, true, ["clicks"], (parentElement: any) => clicks)
                                            ])
                                        ]),
                                    this.html(`1174f8be`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-source" }] },
                                        (parentElement: any) => [
                                        this.html(`bf03a2e4`, "pre", parentElement, {}, (parentElement: any) => [
                                            this.html(`eccc07df`, "code", parentElement, {}, (parentElement: any) => [
                                                this.html(`6d867883`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<button @click.once(setOnceLeft(0))>…</button>')
                                                    ]),
                                                this.html(`8dbb4ffd`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }] }),
                                                this.html(`6d31763f`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<div @click.self(setSelfHits(selfHits + 1))>')
                                                    ]),
                                                this.html(`1986fda3`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('  <button @click.stop(setClicks(clicks + 1))>…</button>')
                                                    ]),
                                                this.html(`13b89eef`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('</div>')
                                                    ])
                                            ])
                                        ])
                                        ])
                                    ])
                                ]),
                            this.html(`27a667fc`, "article", parentElement,
                                { classes: [{ type: 'static', value: "cmp-item" }] },
                                (parentElement: any) => [
                                this.html(`a5fdd5b6`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-head" }] },
                                    (parentElement: any) => [
                                    this.html(`cd92d742`, "div", parentElement, {}, (parentElement: any) => [
                                        this.html(`91301c90`, "h3", parentElement, {}, (parentElement: any) => [
                                            this.text('Biểu thức dẫn xuất')
                                        ]),
                                        this.html(`a59489da`, "p", parentElement, {}, (parentElement: any) => [
                                            this.text('Compiler suy ra vùng này phụ thuộc '),
                                            this.html(`1a002d48`, "code", parentElement, {}, (parentElement: any) => [
                                                this.text('price')
                                            ]),
                                            this.text(' và '),
                                            this.html(`f954a8ac`, "code", parentElement, {}, (parentElement: any) => [
                                                this.text('qty')
                                            ]),
                                            this.text(', chỉ tính lại khi hai state đó đổi.')
                                        ])
                                    ]),
                                    this.html(`3241e831`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "ov-tags" }] },
                                        (parentElement: any) => [
                                        this.html(`7cb4b1f5`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('output')
                                            ]),
                                        this.html(`4c46a41e`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }] },
                                            (parentElement: any) => [
                                            this.text('stateKeys')
                                            ])
                                        ])
                                    ]),
                                this.html(`8d6c3fa0`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-body" }] },
                                    (parentElement: any) => [
                                    this.html(`bd81e151`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-preview" }] },
                                        (parentElement: any) => [
                                        this.html(`ef485eb6`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-row" }] },
                                            (parentElement: any) => [
                                            this.html(`c8d2069a`, "label", parentElement, {}, (parentElement: any) => [
                                                this.text('Đơn giá '),
                                                this.html(`a6e1f7cb`, "input", parentElement, { attrs: { "type": { type: 'static', value: "number" } }, bind: { key: 'price' } })
                                            ]),
                                            this.html(`11294948`, "label", parentElement, {}, (parentElement: any) => [
                                                this.text('Số lượng '),
                                                this.html(`21d598ba`, "input", parentElement, { attrs: { "type": { type: 'static', value: "number" } }, bind: { key: 'qty' } })
                                            ])
                                            ]),
                                        this.html(`a751cd09`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-out" }] },
                                            (parentElement: any) => [
                                            this.text('Thành tiền: '),
                                            this.output(`fec5e072`, parentElement, true, ["price", "qty"], (parentElement: any) => price * qty)
                                            ])
                                        ]),
                                    this.html(`7d38285f`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-source" }] },
                                        (parentElement: any) => [
                                        this.html(`0b565aac`, "pre", parentElement, {}, (parentElement: any) => [
                                            this.html(`3f74a50a`, "code", parentElement, {}, (parentElement: any) => [
                                                this.html(`a7806060`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('@states({ price: 120, qty: 2 })')
                                                    ]),
                                                this.html(`567ca237`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }] }),
                                                this.html(`b63b7971`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<input type="number" @bind(price)>')
                                                    ]),
                                                this.html(`56ccdf21`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<input type="number" @bind(qty)>')
                                                    ]),
                                                this.html(`34b03edc`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<div>Thành tiền: '),
                                                    this.html(`16b7dede`, "span", parentElement,
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
                    this.html(`86de05c3`, "section", parentElement,
                        { classes: [{ type: 'static', value: "cmp-group" }] },
                        (parentElement: any) => [
                        this.html(`ebe35e36`, "div", parentElement,
                            { classes: [{ type: 'static', value: "cmp-group-head" }] },
                            (parentElement: any) => [
                            this.html(`775d7804`, "h2", parentElement, {}, (parentElement: any) => [
                                this.text('Binding hai chiều')
                            ]),
                            this.html(`b57f859e`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Một directive cho mọi loại input: text, number, select, checkbox, radio.')
                            ])
                            ]),
                        this.html(`682c0572`, "div", parentElement,
                            { classes: [{ type: 'static', value: "cmp-list" }] },
                            (parentElement: any) => [
                            this.html(`2ea798f0`, "article", parentElement,
                                { classes: [{ type: 'static', value: "cmp-item" }] },
                                (parentElement: any) => [
                                this.html(`7ebc8749`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-head" }] },
                                    (parentElement: any) => [
                                    this.html(`da99aaab`, "div", parentElement, {}, (parentElement: any) => [
                                        this.html(`08151ebd`, "h3", parentElement, {}, (parentElement: any) => [
                                            this.text('Text input')
                                        ]),
                                        this.html(`502cf0b9`, "p", parentElement, {}, (parentElement: any) => [
                                            this.text('Gõ vào ô thì state đổi, đổi state thì ô đổi theo.')
                                        ])
                                    ]),
                                    this.html(`1b6925b7`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "ov-tags" }] },
                                        (parentElement: any) => [
                                        this.html(`82be18c6`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('@bind')
                                            ])
                                        ])
                                    ]),
                                this.html(`0f4e188d`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-body" }] },
                                    (parentElement: any) => [
                                    this.html(`180a929c`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-preview" }] },
                                        (parentElement: any) => [
                                        this.html(`a903a09b`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-row" }] },
                                            (parentElement: any) => [
                                            this.html(`fe728d1c`, "input", parentElement, { attrs: { "type": { type: 'static', value: "text" }, "placeholder": { type: 'static', value: "Nhập tên…" } }, bind: { key: 'name' } }),
                                            this.html(`83fc0032`, "button", parentElement,
                                                { events: { click: [(event: any) => setName('Saola')] } },
                                                (parentElement: any) => [
                                                this.text('Đặt lại')
                                                ])
                                            ]),
                                        this.html(`c893fd21`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-out" }] },
                                            (parentElement: any) => [
                                            this.text('Xin chào, '),
                                            this.output(`9d6ff5f1`, parentElement, true, ["name"], (parentElement: any) => name),
                                            this.text('.')
                                            ])
                                        ]),
                                    this.html(`cc720e33`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-source" }] },
                                        (parentElement: any) => [
                                        this.html(`5027d4a2`, "pre", parentElement, {}, (parentElement: any) => [
                                            this.html(`632c0da9`, "code", parentElement, {}, (parentElement: any) => [
                                                this.html(`e06a62ad`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('@states({ name: \'Saola\' })')
                                                    ]),
                                                this.html(`8b5f3c08`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }] }),
                                                this.html(`361d73e4`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<input type="text" @bind(name)>')
                                                    ]),
                                                this.html(`a64f765e`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<div>Xin chào, '),
                                                    this.html(`28200908`, "span", parentElement,
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
                            this.html(`ff8d1ee8`, "article", parentElement,
                                { classes: [{ type: 'static', value: "cmp-item" }] },
                                (parentElement: any) => [
                                this.html(`3da6d332`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-head" }] },
                                    (parentElement: any) => [
                                    this.html(`f58c11b4`, "div", parentElement, {}, (parentElement: any) => [
                                        this.html(`fc367620`, "h3", parentElement, {}, (parentElement: any) => [
                                            this.text('Select & checkbox')
                                        ]),
                                        this.html(`f4430644`, "p", parentElement, {}, (parentElement: any) => [
                                            this.text('Cùng '),
                                            this.html(`413d4ac1`, "code", parentElement,
                                                { classes: [{ type: 'static', value: "directive-token" }] },
                                                (parentElement: any) => [
                                                this.text('bind')
                                                ]),
                                            this.text(', runtime tự chọn '),
                                            this.html(`35fd5bb5`, "code", parentElement, {}, (parentElement: any) => [
                                                this.text('value')
                                            ]),
                                            this.text(' hay '),
                                            this.html(`857c4a1d`, "code", parentElement, {}, (parentElement: any) => [
                                                this.text('checked')
                                            ]),
                                            this.text('.')
                                        ])
                                    ]),
                                    this.html(`8946c1da`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "ov-tags" }] },
                                        (parentElement: any) => [
                                        this.html(`b3e2035d`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('@bind')
                                            ]),
                                        this.html(`0b2fb724`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }] },
                                            (parentElement: any) => [
                                            this.text('@disabled')
                                            ])
                                        ])
                                    ]),
                                this.html(`967dd1a6`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-body" }] },
                                    (parentElement: any) => [
                                    this.html(`a918f1a6`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-preview" }] },
                                        (parentElement: any) => [
                                        this.html(`e912527f`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-row" }] },
                                            (parentElement: any) => [
                                            this.html(`9afaaa86`, "select", parentElement,
                                                { bind: { key: 'tone' } },
                                                (parentElement: any) => [
                                                this.html(`f12e5411`, "option", parentElement,
                                                    { attrs: { "value": { type: 'static', value: "sky" } } },
                                                    (parentElement: any) => [
                                                    this.text('sky')
                                                    ]),
                                                this.html(`231a8148`, "option", parentElement,
                                                    { attrs: { "value": { type: 'static', value: "indigo" } } },
                                                    (parentElement: any) => [
                                                    this.text('indigo')
                                                    ]),
                                                this.html(`af55d7e9`, "option", parentElement,
                                                    { attrs: { "value": { type: 'static', value: "slate" } } },
                                                    (parentElement: any) => [
                                                    this.text('slate')
                                                    ])
                                                ]),
                                            this.html(`ed7d7ab5`, "label", parentElement, {}, (parentElement: any) => [
                                                this.html(`918507cf`, "input", parentElement, { attrs: { "type": { type: 'static', value: "checkbox" } }, bind: { key: 'agree' } }),
                                                this.text(' Đồng ý điều khoản')
                                            ]),
                                            this.html(`1069ed05`, "button", parentElement,
                                                { classes: [{ type: 'static', value: "is-primary" }], props: { "disabled": { type: 'binding', factory: () => !agree, stateKeys: ["agree"] } } },
                                                (parentElement: any) => [
                                                this.text('Gửi')
                                                ])
                                            ]),
                                        this.html(`5e48d35d`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-row" }] },
                                            (parentElement: any) => [
                                            this.html(`d71f5396`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "cmp-chip" }, { type: 'binding', value: "cmp-chip--sky", factory: () => tone === 'sky', stateKeys: ["tone"] }, { type: 'binding', value: "cmp-chip--indigo", factory: () => tone === 'indigo', stateKeys: ["tone"] }, { type: 'binding', value: "cmp-chip--slate", factory: () => tone === 'slate', stateKeys: ["tone"] }] },
                                                (parentElement: any) => [
                                                this.text('tone = '),
                                                this.output(`812fbdd7`, parentElement, true, ["tone"], (parentElement: any) => tone)
                                                ])
                                            ])
                                        ]),
                                    this.html(`a6fb3846`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-source" }] },
                                        (parentElement: any) => [
                                        this.html(`325ada80`, "pre", parentElement, {}, (parentElement: any) => [
                                            this.html(`8bdb4b93`, "code", parentElement, {}, (parentElement: any) => [
                                                this.html(`36e923d9`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<select @bind(tone)>…</select>')
                                                    ]),
                                                this.html(`415c6fa2`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<input type="checkbox" @bind(agree)>')
                                                    ]),
                                                this.html(`75a7a464`, "span", parentElement,
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
                    this.html(`d6930dab`, "section", parentElement,
                        { classes: [{ type: 'static', value: "cmp-group" }] },
                        (parentElement: any) => [
                        this.html(`9bf77870`, "div", parentElement,
                            { classes: [{ type: 'static', value: "cmp-group-head" }] },
                            (parentElement: any) => [
                            this.html(`3f207c0a`, "h2", parentElement, {}, (parentElement: any) => [
                                this.text('Ràng buộc thuộc tính')
                            ]),
                            this.html(`867c5663`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Class, style và boolean attribute đều đọc thẳng từ state.')
                            ])
                            ]),
                        this.html(`91d80947`, "div", parentElement,
                            { classes: [{ type: 'static', value: "cmp-list" }] },
                            (parentElement: any) => [
                            this.html(`286040d6`, "article", parentElement,
                                { classes: [{ type: 'static', value: "cmp-item" }] },
                                (parentElement: any) => [
                                this.html(`700ee53d`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-head" }] },
                                    (parentElement: any) => [
                                    this.html(`4522c5a0`, "div", parentElement, {}, (parentElement: any) => [
                                        this.html(`4c76778c`, "h3", parentElement, {}, (parentElement: any) => [
                                            this.text('Class động')
                                        ]),
                                        this.html(`66d62fa3`, "p", parentElement, {}, (parentElement: any) => [
                                            this.text('Class tĩnh trộn với class có điều kiện; chỉ thuộc tính class được đụng tới, phần còn lại của thẻ giữ nguyên.')
                                        ])
                                    ]),
                                    this.html(`3beaec6d`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "ov-tags" }] },
                                        (parentElement: any) => [
                                        this.html(`4675652e`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('@class')
                                            ])
                                        ])
                                    ]),
                                this.html(`47eae681`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-body" }] },
                                    (parentElement: any) => [
                                    this.html(`57778fa0`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-preview" }] },
                                        (parentElement: any) => [
                                        this.html(`b8fa84d3`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-row" }] },
                                            (parentElement: any) => [
                                            this.html(`885ac0e3`, "button", parentElement,
                                                { events: { click: [(event: any) => setTextSize('sm')] } },
                                                (parentElement: any) => [
                                                this.text('Nhỏ')
                                                ]),
                                            this.html(`063ff429`, "button", parentElement,
                                                { events: { click: [(event: any) => setTextSize('md')] } },
                                                (parentElement: any) => [
                                                this.text('Vừa')
                                                ]),
                                            this.html(`b8688508`, "button", parentElement,
                                                { events: { click: [(event: any) => setTextSize('lg')] } },
                                                (parentElement: any) => [
                                                this.text('Lớn')
                                                ])
                                            ]),
                                        this.html(`94aaf5b0`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-box" }, { type: 'binding', value: "txt-sm", factory: () => textSize === 'sm', stateKeys: ["textSize"] }, { type: 'binding', value: "txt-lg", factory: () => textSize === 'lg', stateKeys: ["textSize"] }] },
                                            (parentElement: any) => [
                                            this.text('Cỡ chữ hiện tại: '),
                                            this.output(`d71e2674`, parentElement, true, ["textSize"], (parentElement: any) => textSize),
                                            this.text('.')
                                            ])
                                        ]),
                                    this.html(`2cf9f393`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-source" }] },
                                        (parentElement: any) => [
                                        this.html(`019fd3d2`, "pre", parentElement, {}, (parentElement: any) => [
                                            this.html(`0113a1d3`, "code", parentElement, {}, (parentElement: any) => [
                                                this.html(`4c256f14`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('@states({ textSize: \'md\' })')
                                                    ]),
                                                this.html(`db4fb527`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }] }),
                                                this.html(`658cfb30`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<div @class([\'box\', \'txt-lg\': textSize === \'lg\'])>…</div>')
                                                    ]),
                                                this.html(`33714f65`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<button @click(setTextSize(\'lg\'))>Lớn</button>')
                                                    ])
                                            ])
                                        ])
                                        ])
                                    ])
                                ]),
                            this.html(`d9db07ef`, "article", parentElement,
                                { classes: [{ type: 'static', value: "cmp-item" }] },
                                (parentElement: any) => [
                                this.html(`b4de5b4a`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-head" }] },
                                    (parentElement: any) => [
                                    this.html(`d379aba1`, "div", parentElement, {}, (parentElement: any) => [
                                        this.html(`ba1ef637`, "h3", parentElement, {}, (parentElement: any) => [
                                            this.text('Ẩn hiện & readonly')
                                        ]),
                                        this.html(`e19e8515`, "p", parentElement, {}, (parentElement: any) => [
                                            this.text('Bật tắt hiển thị bằng class có điều kiện — DOM vẫn nằm nguyên chỗ cũ.')
                                        ])
                                    ]),
                                    this.html(`31195cbb`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "ov-tags" }] },
                                        (parentElement: any) => [
                                        this.html(`70d0e397`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('@class')
                                            ]),
                                        this.html(`d9aa64f0`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('@readonly')
                                            ])
                                        ])
                                    ]),
                                this.html(`31b8c945`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-body" }] },
                                    (parentElement: any) => [
                                    this.html(`7d9b12c2`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-preview" }] },
                                        (parentElement: any) => [
                                        this.html(`0cc5a2ec`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-row" }] },
                                            (parentElement: any) => [
                                            this.html(`d9a44bd7`, "button", parentElement,
                                                { events: { click: [(event: any) => setVisible(!visible)] } },
                                                (parentElement: any) => [
                                                this.text('Bật tắt khối')
                                                ]),
                                            this.html(`0c96a5b9`, "label", parentElement, {}, (parentElement: any) => [
                                                this.html(`cc2ab89d`, "input", parentElement, { attrs: { "type": { type: 'static', value: "checkbox" } }, bind: { key: 'locked' } }),
                                                this.text(' Khoá ô nhập')
                                            ])
                                            ]),
                                        this.html(`b28b8759`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-box" }, { type: 'binding', value: "is-hidden", factory: () => !visible, stateKeys: ["visible"] }] },
                                            (parentElement: any) => [
                                            this.text('Khối này vẫn nằm trong DOM khi bị ẩn.')
                                            ]),
                                        this.html(`3cf387fc`, "input", parentElement, { attrs: { "type": { type: 'static', value: "text" }, "placeholder": { type: 'static', value: "Ghi chú…" } }, props: { "readOnly": { type: 'binding', factory: () => locked, stateKeys: ["locked"] } }, bind: { key: 'draft' } })
                                        ]),
                                    this.html(`3db347f0`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-source" }] },
                                        (parentElement: any) => [
                                        this.html(`28d85442`, "pre", parentElement, {}, (parentElement: any) => [
                                            this.html(`3b478dbc`, "code", parentElement, {}, (parentElement: any) => [
                                                this.html(`fd69612a`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<div @class([\'box\', \'is-hidden\': !visible])>…</div>')
                                                    ]),
                                                this.html(`40a84e67`, "span", parentElement,
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
                    this.html(`7f547314`, "section", parentElement,
                        { classes: [{ type: 'static', value: "cmp-group" }] },
                        (parentElement: any) => [
                        this.html(`cbc9d10b`, "div", parentElement,
                            { classes: [{ type: 'static', value: "cmp-group-head" }] },
                            (parentElement: any) => [
                            this.html(`3e5622a4`, "h2", parentElement, {}, (parentElement: any) => [
                                this.text('Điều khiển luồng')
                            ]),
                            this.html(`78ab7595`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Mỗi khối là một vùng marker độc lập, chỉ render lại khi state phụ thuộc đổi.')
                            ])
                            ]),
                        this.html(`f8715d2a`, "div", parentElement,
                            { classes: [{ type: 'static', value: "cmp-list" }] },
                            (parentElement: any) => [
                            this.html(`db7f02f8`, "article", parentElement,
                                { classes: [{ type: 'static', value: "cmp-item" }] },
                                (parentElement: any) => [
                                this.html(`eb574dcf`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-head" }] },
                                    (parentElement: any) => [
                                    this.html(`49134726`, "div", parentElement, {}, (parentElement: any) => [
                                        this.html(`d8fe4781`, "h3", parentElement, {}, (parentElement: any) => [
                                            this.text('If / elseif / else')
                                        ]),
                                        this.html(`ff21c0f8`, "p", parentElement, {}, (parentElement: any) => [
                                            this.text('Compiler tự suy ra state nào khiến vùng này render lại.')
                                        ])
                                    ]),
                                    this.html(`dffb6ff9`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "ov-tags" }] },
                                        (parentElement: any) => [
                                        this.html(`3a8410e3`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('@if')
                                            ]),
                                        this.html(`6cd57212`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }] },
                                            (parentElement: any) => [
                                            this.text('@elseif')
                                            ]),
                                        this.html(`b969783a`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }] },
                                            (parentElement: any) => [
                                            this.text('@else')
                                            ])
                                        ])
                                    ]),
                                this.html(`a451881c`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-body" }] },
                                    (parentElement: any) => [
                                    this.html(`cf1ecf05`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-preview" }] },
                                        (parentElement: any) => [
                                        this.html(`76f0660e`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-row" }] },
                                            (parentElement: any) => [
                                            this.html(`1ce04e06`, "button", parentElement,
                                                { events: { click: [(event: any) => setStatus('ready')] } },
                                                (parentElement: any) => [
                                                this.text('ready')
                                                ]),
                                            this.html(`a139e143`, "button", parentElement,
                                                { events: { click: [(event: any) => setStatus('building')] } },
                                                (parentElement: any) => [
                                                this.text('building')
                                                ]),
                                            this.html(`af7049ff`, "button", parentElement,
                                                { events: { click: [(event: any) => setStatus('error')] } },
                                                (parentElement: any) => [
                                                this.text('error')
                                                ])
                                            ]),
                                        this.reactive(`54bb7dbe`, "if", parentReactive, parentElement, ["status"], (parentReactive: any, parentElement: any) => {
                                            const reactiveContents = [];
                                            if (status === 'ready') {
                                                reactiveContents.push(
                                                this.html(`1aa5a2c3`, "div", parentElement,
                                                    { classes: [{ type: 'static', value: "cmp-out" }] },
                                                    (parentElement: any) => [
                                                    this.text('Sẵn sàng — bundle khớp với view registry.')
                                                    ])
                                                );
                                            }
                                            else if (status === 'building') {
                                                reactiveContents.push(
                                                this.html(`53821dc4`, "div", parentElement,
                                                    { classes: [{ type: 'static', value: "cmp-box" }] },
                                                    (parentElement: any) => [
                                                    this.text('Đang biên dịch view cho context web…')
                                                    ])
                                                );
                                            }
                                            else {
                                                reactiveContents.push(
                                                this.html(`87d0b88e`, "div", parentElement,
                                                    { classes: [{ type: 'static', value: "cmp-box" }] },
                                                    (parentElement: any) => [
                                                    this.text('Có lỗi khi compile. Xem log của '),
                                                    this.html(`158576a8`, "code", parentElement, {}, (parentElement: any) => [
                                                        this.text('sao-compile')
                                                    ]),
                                                    this.text('.')
                                                    ])
                                                );
                                            }
                                            return reactiveContents;
                                        })
                                        ]),
                                    this.html(`a7126351`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-source" }] },
                                        (parentElement: any) => [
                                        this.html(`ede94b06`, "pre", parentElement, {}, (parentElement: any) => [
                                            this.html(`ce01776e`, "code", parentElement, {}, (parentElement: any) => [
                                                this.html(`bc0ff101`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('@if(status === \'ready\')')
                                                    ]),
                                                this.html(`0a46a396`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('    <div>Sẵn sàng…</div>')
                                                    ]),
                                                this.html(`f7ba287d`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('@elseif(status === \'building\')')
                                                    ]),
                                                this.html(`5be56773`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('    <div>Đang biên dịch…</div>')
                                                    ]),
                                                this.html(`3d76a6fd`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('@else')
                                                    ]),
                                                this.html(`0fc09c09`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('    <div>Có lỗi…</div>')
                                                    ]),
                                                this.html(`5f4fcdba`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('@endif')
                                                    ])
                                            ])
                                        ])
                                        ])
                                    ])
                                ]),
                            this.html(`f5d86e5d`, "article", parentElement,
                                { classes: [{ type: 'static', value: "cmp-item" }] },
                                (parentElement: any) => [
                                this.html(`e1d6f933`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-head" }] },
                                    (parentElement: any) => [
                                    this.html(`4ab27f4c`, "div", parentElement, {}, (parentElement: any) => [
                                        this.html(`f609b4eb`, "h3", parentElement, {}, (parentElement: any) => [
                                            this.text('Switch')
                                        ]),
                                        this.html(`6e463198`, "p", parentElement, {}, (parentElement: any) => [
                                            this.text('Nhiều nhánh trong một vùng marker duy nhất.')
                                        ])
                                    ]),
                                    this.html(`0930582f`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "ov-tags" }] },
                                        (parentElement: any) => [
                                        this.html(`87e669cd`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('@switch')
                                            ]),
                                        this.html(`8d76d43d`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }] },
                                            (parentElement: any) => [
                                            this.text('@case')
                                            ])
                                        ])
                                    ]),
                                this.html(`9792afc9`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-body" }] },
                                    (parentElement: any) => [
                                    this.html(`9c6c0941`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-preview" }] },
                                        (parentElement: any) => [
                                        this.html(`bbb76fda`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-row" }] },
                                            (parentElement: any) => [
                                            this.html(`60d53076`, "button", parentElement,
                                                { events: { click: [(event: any) => setRuntime('blade')] } },
                                                (parentElement: any) => [
                                                this.text('Blade')
                                                ]),
                                            this.html(`2b10e18d`, "button", parentElement,
                                                { events: { click: [(event: any) => setRuntime('client')] } },
                                                (parentElement: any) => [
                                                this.text('Client')
                                                ]),
                                            this.html(`e26ba4d1`, "button", parentElement,
                                                { events: { click: [(event: any) => setRuntime('api')] } },
                                                (parentElement: any) => [
                                                this.text('API')
                                                ])
                                            ]),
                                        this.reactive(`c086e0bf`, "switch", parentReactive, parentElement, ["runtime"], (parentReactive: any, parentElement: any) => {
                                            const reactiveContents = [];
                                            switch (runtime) {
                                                case 'blade':
                                                    reactiveContents.push(
                                                    this.html(`91438253`, "div", parentElement,
                                                        { classes: [{ type: 'static', value: "cmp-out" }] },
                                                        (parentElement: any) => [
                                                        this.text('Server render HTML hoàn chỉnh cho request đầu.')
                                                        ])
                                                    );
                                                    break;
                                                case 'client':
                                                    reactiveContents.push(
                                                    this.html(`6e6c50d4`, "div", parentElement,
                                                        { classes: [{ type: 'static', value: "cmp-out" }] },
                                                        (parentElement: any) => [
                                                        this.text('Runtime claim DOM rồi tiếp quản điều hướng.')
                                                        ])
                                                    );
                                                    break;
                                                default:
                                                    reactiveContents.push(
                                                    this.html(`bcfb8b30`, "div", parentElement,
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
                                    this.html(`f9bb4880`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-source" }] },
                                        (parentElement: any) => [
                                        this.html(`3af84f54`, "pre", parentElement, {}, (parentElement: any) => [
                                            this.html(`61b88411`, "code", parentElement, {}, (parentElement: any) => [
                                                this.html(`69e603d1`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('@switch(runtime)')
                                                    ]),
                                                this.html(`f011590f`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('    @case(\'blade\')')
                                                    ]),
                                                this.html(`d8f7295f`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('        <div>Server render…</div>')
                                                    ]),
                                                this.html(`bb375df8`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('        @break')
                                                    ]),
                                                this.html(`8638a50e`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('    @default')
                                                    ]),
                                                this.html(`49d08167`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('        <div>Context api…</div>')
                                                    ]),
                                                this.html(`cb39e462`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('@endswitch')
                                                    ])
                                            ])
                                        ])
                                        ])
                                    ])
                                ]),
                            this.html(`1dcead62`, "article", parentElement,
                                { classes: [{ type: 'static', value: "cmp-item" }] },
                                (parentElement: any) => [
                                this.html(`18221d32`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-head" }] },
                                    (parentElement: any) => [
                                    this.html(`8589635a`, "div", parentElement, {}, (parentElement: any) => [
                                        this.html(`19dbe50e`, "h3", parentElement, {}, (parentElement: any) => [
                                            this.text('Foreach có @key')
                                        ]),
                                        this.html(`1e990b7f`, "p", parentElement, {}, (parentElement: any) => [
                                            this.text('Khoá quyết định slot nào được tái dùng khi danh sách đổi.')
                                        ])
                                    ]),
                                    this.html(`c27f85c0`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "ov-tags" }] },
                                        (parentElement: any) => [
                                        this.html(`2d394a8e`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('@foreach')
                                            ]),
                                        this.html(`a286d41f`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('@key')
                                            ])
                                        ])
                                    ]),
                                this.html(`cffe608b`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-body" }] },
                                    (parentElement: any) => [
                                    this.html(`42b3c03f`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-preview" }] },
                                        (parentElement: any) => [
                                        this.html(`75e10d9f`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-row" }] },
                                            (parentElement: any) => [
                                            this.html(`f8078fee`, "input", parentElement, { attrs: { "type": { type: 'static', value: "text" }, "placeholder": { type: 'static', value: "Thêm mục…" } }, bind: { key: 'draft' } }),
                                            this.html(`218e6c60`, "button", parentElement,
                                                { classes: [{ type: 'static', value: "is-primary" }], events: { click: [{"handler":"addItem","params":[]}] } },
                                                (parentElement: any) => [
                                                this.text('Thêm')
                                                ])
                                            ]),
                                        this.html(`bed93afb`, "ul", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-ul" }] },
                                            (parentElement: any) => [
                                            this.reactive(`9628ee3c`, "foreach", parentReactive, parentElement, ["items"], (parentReactive: any, parentElement: any) => {
                                                return this.__foreach(items, (item: any, __loopKey: any, __loopIndex: any, __loop: any) => [
                                                    this.html(`26c65a5d-${item['id']}`, "li", parentElement, {}, (parentElement: any) => [
                                                        this.html(`fcfb9974-${item['id']}`, "span", parentElement, {}, (parentElement: any) => [
                                                            this.output(`81b61b0c-${item['id']}`, parentElement, true, [], (parentElement: any) => item['label'])
                                                        ]),
                                                        this.html(`9d4dc5ab-${item['id']}`, "button", parentElement,
                                                            { events: { click: [{"handler":"removeItem","params":[item['id']]}] } },
                                                            (parentElement: any) => [
                                                            this.text('Xoá')
                                                            ])
                                                    ])
                                                ], (item: any) => item['id'])
                                            })
                                            ]),
                                        this.reactive(`8b87f58a`, "if", parentReactive, parentElement, ["count", "items"], (parentReactive: any, parentElement: any) => {
                                            const reactiveContents = [];
                                            if (App.Helper.count(items) === 0) {
                                                reactiveContents.push(
                                                this.html(`952e1e66`, "p", parentElement,
                                                    { classes: [{ type: 'static', value: "cmp-note" }] },
                                                    (parentElement: any) => [
                                                    this.text('Danh sách trống.')
                                                    ])
                                                );
                                            }
                                            return reactiveContents;
                                        })
                                        ]),
                                    this.html(`7da6ab9d`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-source" }] },
                                        (parentElement: any) => [
                                        this.html(`cb21405a`, "pre", parentElement, {}, (parentElement: any) => [
                                            this.html(`675e5d1c`, "code", parentElement, {}, (parentElement: any) => [
                                                this.html(`9586e260`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('@foreach(items as item)')
                                                    ]),
                                                this.html(`6e81adeb`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('    @key(item[\'id\'])')
                                                    ]),
                                                this.html(`b3e4a86c`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('    <li>')
                                                    ]),
                                                this.html(`bf3bdf34`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('        <span>'),
                                                    this.html(`005ad910`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "mustache-token" }] },
                                                        (parentElement: any) => [
                                                        this.text('item[\'label\']')
                                                        ]),
                                                    this.text('</span>')
                                                    ]),
                                                this.html(`5027564c`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('        <button @click(removeItem(item[\'id\']))>Xoá</button>')
                                                    ]),
                                                this.html(`f8106fca`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('    </li>')
                                                    ]),
                                                this.html(`bdf8d2a7`, "span", parentElement,
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
                    this.html(`a8530d7c`, "section", parentElement,
                        { classes: [{ type: 'static', value: "cmp-group" }] },
                        (parentElement: any) => [
                        this.html(`d2859974`, "div", parentElement,
                            { classes: [{ type: 'static', value: "cmp-group-head" }] },
                            (parentElement: any) => [
                            this.html(`216928e8`, "h2", parentElement, {}, (parentElement: any) => [
                                this.text('Component con')
                            ]),
                            this.html(`06e60348`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Include tạo một view thật với ViewController và vòng đời riêng, không phải partial dán vào.')
                            ])
                            ]),
                        this.html(`6a19328c`, "div", parentElement,
                            { classes: [{ type: 'static', value: "cmp-list" }] },
                            (parentElement: any) => [
                            this.html(`1aa6ba6e`, "article", parentElement,
                                { classes: [{ type: 'static', value: "cmp-item" }] },
                                (parentElement: any) => [
                                this.html(`cf9645c2`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-head" }] },
                                    (parentElement: any) => [
                                    this.html(`9fe674cd`, "div", parentElement, {}, (parentElement: any) => [
                                        this.html(`dfc54d58`, "h3", parentElement, {}, (parentElement: any) => [
                                            this.text('Props & children')
                                        ]),
                                        this.html(`6fc566a5`, "p", parentElement, {}, (parentElement: any) => [
                                            this.text('Prop đổi theo state của trang; nội dung giữa thẻ đi qua slot.')
                                        ])
                                    ]),
                                    this.html(`f0aa78d1`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "ov-tags" }] },
                                        (parentElement: any) => [
                                        this.html(`55fb7942`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('@include')
                                            ]),
                                        this.html(`7ae15fea`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }, { type: 'static', value: "ov-tag--brand" }] },
                                            (parentElement: any) => [
                                            this.text('@props')
                                            ]),
                                        this.html(`06085777`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "ov-tag" }] },
                                            (parentElement: any) => [
                                            this.text('@children')
                                            ])
                                        ])
                                    ]),
                                this.html(`d11cf3d8`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "cmp-body" }] },
                                    (parentElement: any) => [
                                    this.html(`89afc176`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-preview" }] },
                                        (parentElement: any) => [
                                        this.include(`cada3f15`, 'web.modules.components.statcard', parentElement, ["count", "tone"], (parentElement: any) => ({"label": "Số lần bấm", "value": count, "tone": tone})),
                                        this.html(`f9b51032`, "p", parentElement,
                                            { classes: [{ type: 'static', value: "cmp-note" }] },
                                            (parentElement: any) => [
                                            this.text('Đổi counter hoặc select tone ở trên rồi nhìn thẻ này cập nhật.')
                                            ])
                                        ]),
                                    this.html(`507dda3e`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-source" }] },
                                        (parentElement: any) => [
                                        this.html(`feac8319`, "pre", parentElement, {}, (parentElement: any) => [
                                            this.html(`86e13ade`, "code", parentElement, {}, (parentElement: any) => [
                                                this.html(`6a5c32f5`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('@props({ label: \'Label\', value: \'0\', tone: \'sky\' })')
                                                    ]),
                                                this.html(`9d53c5b0`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }] }),
                                                this.html(`f2b835f9`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('<div @class([\'card\', \'card--indigo\': tone === \'indigo\'])>')
                                                    ]),
                                                this.html(`58e91f7e`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('  <span>'),
                                                    this.html(`ff2089a7`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "mustache-token" }] },
                                                        (parentElement: any) => [
                                                        this.text('label')
                                                        ]),
                                                    this.text('</span>')
                                                    ]),
                                                this.html(`cdb33082`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('  <strong>'),
                                                    this.html(`6a7e7f47`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "mustache-token" }] },
                                                        (parentElement: any) => [
                                                        this.text('value')
                                                        ]),
                                                    this.text('</strong>')
                                                    ]),
                                                this.html(`b0e0d0b6`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "code-line" }] },
                                                    (parentElement: any) => [
                                                    this.text('  @children')
                                                    ]),
                                                this.html(`d54d5467`, "span", parentElement,
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
                    this.html(`79c1c2bf`, "section", parentElement,
                        { classes: [{ type: 'static', value: "cmp-group" }] },
                        (parentElement: any) => [
                        this.html(`73c97124`, "div", parentElement,
                            { classes: [{ type: 'static', value: "cmp-group-head" }] },
                            (parentElement: any) => [
                            this.html(`61d1bb88`, "h2", parentElement, {}, (parentElement: any) => [
                                this.text('Trang mẫu đầy đủ')
                            ]),
                            this.html(`aa5230e5`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Ba fixture lớn hơn, mỗi cái tập trung vào một vấn đề thật.')
                            ])
                            ]),
                        this.html(`96b5d36f`, "div", parentElement,
                            { classes: [{ type: 'static', value: "ov-grid" }, { type: 'static', value: "ov-grid--3" }] },
                            (parentElement: any) => [
                            this.html(`89dc566a`, "a", parentElement,
                                { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/demo" } } },
                                (parentElement: any) => [
                                this.html(`79487e10`, "span", parentElement, {}, (parentElement: any) => [
                                    this.text('Cú pháp')
                                ]),
                                this.html(`cb5160d0`, "h3", parentElement, {}, (parentElement: any) => [
                                    this.text('Interactive demo →')
                                ]),
                                this.html(`ff30271a`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Chín nhóm cú pháp trong một trang, gồm cả phần chỉ chạy phía server.')
                                ])
                                ]),
                            this.html(`b91eac83`, "a", parentElement,
                                { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/todo-list" } } },
                                (parentElement: any) => [
                                this.html(`4aede143`, "span", parentElement, {}, (parentElement: any) => [
                                    this.text('Layout')
                                ]),
                                this.html(`3489fb76`, "h3", parentElement, {}, (parentElement: any) => [
                                    this.text('Todo workspace →')
                                ]),
                                this.html(`00f72b63`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('State cục bộ của trang trong khi layout giữ nguyên qua mỗi lần đổi route.')
                                ])
                                ]),
                            this.html(`f7f12c25`, "a", parentElement,
                                { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/roster" } } },
                                (parentElement: any) => [
                                this.html(`c1986335`, "span", parentElement, {}, (parentElement: any) => [
                                    this.text('Đồng thời')
                                ]),
                                this.html(`9ccaa738`, "h3", parentElement, {}, (parentElement: any) => [
                                    this.text('Roster sync →')
                                ]),
                                this.html(`4de875df`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Poll ba mươi giây và xử lý khi người khác sửa hoặc xoá bản ghi bạn đang mở.')
                                ])
                                ])
                            ])
                        ])
                    ])
                ]),
            this.html(`ceb15976`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/docs" } } },
                (parentElement: any) => [
                this.html(`60f0ac7a`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`b7585c3f`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('Quay lại')
                    ]),
                    this.html(`8767f8f3`, "strong", parentElement, {}, (parentElement: any) => [
                        this.text('Mục lục tài liệu')
                    ])
                ]),
                this.html(`8287de38`, "span", parentElement,
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
export function WebModulesComponentsIndex(__data__: IndexProps = {}, systemData: any = {}): IndexView {
    return new IndexView(__data__, systemData);
}
export default WebModulesComponentsIndex;
