import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.demo.index';
const __VIEW_NAMESPACE__ = 'web.modules.demo.';
const __VIEW_TYPE__ = 'view';
const __VIEW_CONFIG__ = {
    hasSuperView: true,
    viewType: 'view',
    sections: {
        "shell":{
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
    renderLongSections: ["shell"],
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
        const set$count = __STATE__.__.register('count');
        let count: any = null;
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
        let name: any = null;
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
        const set$selectedPanel = __STATE__.__.register('selectedPanel');
        let selectedPanel: any = null;
        const setSelectedPanel = (state: any) => {
            selectedPanel = state;
            set$selectedPanel(state);
        };
        __STATE__.__.setters.setSelectedPanel = setSelectedPanel;
        __STATE__.__.setters.selectedPanel = setSelectedPanel;
        const update$selectedPanel = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('selectedPanel', value);
                selectedPanel = value;
            }
        };
        const set$status = __STATE__.__.register('status');
        let status: any = null;
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
        const set$isVisible = __STATE__.__.register('isVisible');
        let isVisible: any = null;
        const setIsVisible = (state: any) => {
            isVisible = state;
            set$isVisible(state);
        };
        __STATE__.__.setters.setIsVisible = setIsVisible;
        __STATE__.__.setters.isVisible = setIsVisible;
        const update$isVisible = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('isVisible', value);
                isVisible = value;
            }
        };
        const set$isLocked = __STATE__.__.register('isLocked');
        let isLocked: any = null;
        const setIsLocked = (state: any) => {
            isLocked = state;
            set$isLocked(state);
        };
        __STATE__.__.setters.setIsLocked = setIsLocked;
        __STATE__.__.setters.isLocked = setIsLocked;
        const update$isLocked = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('isLocked', value);
                isLocked = value;
            }
        };
        const set$accepted = __STATE__.__.register('accepted');
        let accepted: any = null;
        const setAccepted = (state: any) => {
            accepted = state;
            set$accepted(state);
        };
        __STATE__.__.setters.setAccepted = setAccepted;
        __STATE__.__.setters.accepted = setAccepted;
        const update$accepted = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('accepted', value);
                accepted = value;
            }
        };
        const set$selectedRuntime = __STATE__.__.register('selectedRuntime');
        let selectedRuntime: any = null;
        const setSelectedRuntime = (state: any) => {
            selectedRuntime = state;
            set$selectedRuntime(state);
        };
        __STATE__.__.setters.setSelectedRuntime = setSelectedRuntime;
        __STATE__.__.setters.selectedRuntime = setSelectedRuntime;
        const update$selectedRuntime = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('selectedRuntime', value);
                selectedRuntime = value;
            }
        };
        const set$note = __STATE__.__.register('note');
        let note: any = null;
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
        const set$sampleItems = __STATE__.__.register('sampleItems');
        let sampleItems: any = null;
        const setSampleItems = (state: any) => {
            sampleItems = state;
            set$sampleItems(state);
        };
        __STATE__.__.setters.setSampleItems = setSampleItems;
        __STATE__.__.setters.sampleItems = setSampleItems;
        const update$sampleItems = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('sampleItems', value);
                sampleItems = value;
            }
        };
        const MAX_COUNT = 10;
        const DEMO_SCRIPT = '<scr'+'ipt type="module" src="/static/saola/demo-module.js"></scr'+'ipt>';
        let featureTotal = 32;
        const __VARIABLE_LIST__: any = [];


        this.__ctrl__.setUserDefinedConfig({
            name: 'DemoIndexPage',
                increment() {
                    if (count < MAX_COUNT) setCount(count + 1);
                },
                decrement() {
                    if (count > 0) setCount(count - 1);
                },
                reset() {
                    setCount(3);
                    setName('Saola');
                    setStatus('ready');
                    setIsVisible(true);
                    setIsLocked(false);
                    setAccepted(false);
                    setSelectedRuntime('blade');
                    setNote('');
                }
        });

        this.__ctrl__.setup({
            superView: `${__layout__+'base'}`,
            subscribe: true,
            fetch: null,
            data: __data__,
            viewId: __VIEW_ID__,
            path: __VIEW_PATH__,
            scripts: [],
            styles: [{"type":"code","scoped":true,"content":".demo-page {\n        --ink: #1f1b16;\n        --paper: #e8e0c0;\n        --pink: #ff71ce;\n        --cyan: #00ffcc;\n        --acid: #dfff00;\n        position: relative;\n        min-height: 100vh;\n        overflow: hidden;\n        background: var(--paper);\n        color: var(--ink);\n        font-family: Times New Roman, Times, serif;\n    }\n\n    .paper-noise {\n        position: fixed;\n        inset: 0;\n        z-index: 20;\n        pointer-events: none;\n        opacity: .22;\n        background-image: radial-gradient(rgba(31, 27, 22, .34) .7px, transparent .7px);\n        background-size: 5px 5px;\n        mix-blend-mode: multiply;\n    }\n\n    .demo-nav {\n        position: relative;\n        z-index: 2;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 20px clamp(18px, 4vw, 64px);\n        border-bottom: 3px solid var(--ink);\n        font: 700 13px/1 Helvetica, Arial, sans-serif;\n        letter-spacing: .08em;\n    }\n\n    .demo-nav a { color: inherit; text-decoration: none; }\n    .demo-nav > a { font-size: 18px; text-shadow: 2px 0 var(--pink), -2px 0 var(--cyan); }\n    .demo-nav div { display: flex; gap: 28px; }\n    .demo-nav div a { border-bottom: 2px solid transparent; }\n    .demo-nav div a:hover { border-color: var(--ink); }\n\n    .demo-hero {\n        position: relative;\n        display: grid;\n        grid-template-columns: 120px minmax(0, 1fr) 250px;\n        gap: clamp(24px, 5vw, 80px);\n        align-items: end;\n        min-height: 640px;\n        padding: 70px clamp(18px, 4vw, 64px) 90px;\n        background-image: radial-gradient(var(--pink) 1.4px, transparent 1.4px);\n        background-size: 16px 16px;\n    }\n\n    .demo-hero::before {\n        content: '';\n        position: absolute;\n        width: 420px;\n        height: 120px;\n        right: 8%;\n        top: 25%;\n        background: var(--acid);\n        transform: rotate(-7deg);\n        z-index: 0;\n    }\n\n    .demo-hero > * { position: relative; z-index: 1; }\n    .overline { margin: 0 0 18px; font: 700 15px/1 Courier, monospace; }\n\n    .demo-hero h1 {\n        margin: 0;\n        max-width: 900px;\n        font: 900 clamp(64px, 10vw, 150px)/.78 Helvetica, Arial, sans-serif;\n        letter-spacing: -.075em;\n        text-shadow: 4px 0 var(--pink), -4px 0 var(--cyan);\n    }\n\n    .demo-hero h1 em { font-family: Times New Roman, Times, serif; font-weight: 400; }\n    .hero-copy { max-width: 720px; margin: 42px 0 0; font-size: 21px; line-height: 1.45; }\n    .hero-copy code { font-family: Courier, monospace; font-size: .86em; }\n\n    .hero-stamp {\n        align-self: start;\n        display: grid;\n        place-items: center;\n        aspect-ratio: 1;\n        border: 3px solid var(--ink);\n        border-radius: 50%;\n        background: var(--cyan);\n        transform: rotate(-9deg);\n        font-family: Helvetica, Arial, sans-serif;\n    }\n\n    .hero-stamp span { font-size: 28px; font-weight: 900; }\n    .hero-stamp small { font: 13px/1 Courier, monospace; }\n\n    .hero-note {\n        padding: 24px;\n        border: 3px solid var(--ink);\n        background: var(--pink);\n        box-shadow: 8px 8px 0 var(--cyan);\n        transform: rotate(4deg);\n    }\n\n    .hero-note strong { display: block; font: 900 86px/.8 Helvetica, Arial, sans-serif; }\n    .hero-note span { display: block; margin-top: 12px; font: 700 17px/1.1 Helvetica, Arial, sans-serif; }\n    .hero-note p { margin: 26px 0 0; font: 13px/1.4 Courier, monospace; }\n\n    .proof-strip {\n        display: grid;\n        grid-template-columns: repeat(4, auto 1fr);\n        border-block: 3px solid var(--ink);\n        background: var(--ink);\n        color: var(--paper);\n        font-family: Courier, monospace;\n    }\n\n    .proof-strip span, .proof-strip strong { padding: 15px 18px; border-right: 1px dashed var(--paper); }\n    .proof-strip span { color: var(--cyan); font-size: 11px; }\n    .proof-strip strong { font-size: 13px; }\n\n    .playground, .coverage { padding: 110px clamp(18px, 5vw, 80px); }\n    .section-title { display: grid; grid-template-columns: 220px minmax(0, 820px); gap: 40px; align-items: start; margin-bottom: 70px; }\n    .section-title p { margin: 8px 0 0; font: 700 14px/1 Courier, monospace; }\n    .section-title h2 { margin: 0; font: 900 clamp(48px, 7vw, 104px)/.9 Helvetica, Arial, sans-serif; letter-spacing: -.055em; }\n\n    .tab-tape { display: flex; width: max-content; max-width: 100%; margin: 0 auto 54px; padding: 10px; background: rgba(255, 113, 206, .72); transform: rotate(-1.3deg); }\n    button, select, input { color: var(--ink); font: 700 14px/1 Helvetica, Arial, sans-serif; }\n    button { padding: 12px 16px; border: 2px solid var(--ink); background: var(--paper); box-shadow: 3px 3px 0 var(--ink); cursor: pointer; }\n    button:hover, button.is-active { background: var(--acid); transform: translate(-1px, -1px); }\n    button:disabled { cursor: not-allowed; opacity: .45; transform: none; }\n    .tab-tape button { box-shadow: none; border-right: 0; }\n    .tab-tape button:last-child { border-right: 2px solid var(--ink); }\n\n    .card-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 42px; max-width: 1380px; margin: 0 auto; }\n    .field-label { display: block; margin-bottom: 8px; font: 700 13px/1 Courier, monospace; }\n    input, select { width: 100%; box-sizing: border-box; padding: 13px; border: 2px solid var(--ink); background: rgba(255, 255, 255, .28); }\n    .live-output { padding: 16px; background: var(--cyan); font-size: 20px; }\n    .check-row { display: block; margin-bottom: 14px; font-family: Helvetica, Arial, sans-serif; }\n    .check-row input { width: auto; margin-right: 8px; }\n    .visibility-sample { padding: 13px; border: 2px dashed var(--ink); }\n    .counter-row { display: grid; grid-template-columns: 1fr 80px 1fr; align-items: center; gap: 12px; }\n    .counter-row strong { text-align: center; font: 900 56px/1 Helvetica, Arial, sans-serif; }\n    .progress-track { height: 18px; margin: 22px 0 10px; border: 2px solid var(--ink); background: var(--paper); }\n    .progress-track i { display: block; height: 100%; max-width: 100%; background: var(--pink); }\n    .number-run { display: flex; flex-wrap: wrap; gap: 7px; }\n    .number-run span { display: grid; place-items: center; width: 34px; height: 34px; border: 2px solid var(--ink); background: var(--acid); font: 700 15px/1 Courier, monospace; }\n    .sample-list { padding: 0; list-style: none; font-family: Courier, monospace; }\n    .sample-list li { padding: 8px 0; text-decoration: line-through; opacity: .55; }\n    .sample-list li.is-enabled { text-decoration: none; opacity: 1; }\n    .status-buttons { display: flex; flex-wrap: wrap; gap: 8px; }\n    .status-card, .runtime-result { padding: 16px; border: 2px solid var(--ink); }\n    .status-ready { background: var(--cyan); }\n    .status-building { background: var(--acid); }\n    .status-error { background: var(--pink); }\n\n    .coverage { position: relative; background: var(--ink); color: var(--paper); }\n    .coverage::before { content: ''; position: absolute; inset: 0; opacity: .16; background-image: repeating-linear-gradient(135deg, transparent 0 16px, var(--pink) 16px 18px); }\n    .coverage > * { position: relative; }\n    .section-title--small { margin-bottom: 60px; }\n    .section-title--small h2 { max-width: 970px; }\n    .coverage-grid { display: grid; grid-template-columns: repeat(3, 1fr); border: 2px solid var(--paper); }\n    .coverage-grid article { min-height: 230px; padding: 26px; border: 1px solid var(--paper); }\n    .coverage-grid article:nth-child(2n) { background: var(--pink); color: var(--ink); }\n    .coverage-grid h3 { margin: 0 0 24px; font: 900 26px/1 Helvetica, Arial, sans-serif; }\n    .coverage-grid p { line-height: 1.8; }\n    .coverage-grid code { color: inherit; font: 14px/1.5 Courier, monospace; }\n    .coverage-grid span { display: block; margin-top: 20px; font: 13px/1.45 Helvetica, Arial, sans-serif; }\n    .ssr-ticket { width: fit-content; max-width: 720px; margin: 58px auto 0; padding: 18px 24px; border: 2px dashed var(--paper); background: var(--cyan); color: var(--ink); transform: rotate(-1deg); font-family: Courier, monospace; }\n\n    .demo-footer { display: flex; justify-content: space-between; padding: 28px clamp(18px, 4vw, 64px); border-top: 3px solid var(--ink); font: 700 13px/1 Courier, monospace; }\n    .demo-footer a { color: inherit; }\n\n    @media (max-width: 980px) {\n        .demo-hero { grid-template-columns: 90px 1fr; }\n        .hero-note { grid-column: 2; width: 230px; }\n        .card-grid, .coverage-grid { grid-template-columns: 1fr 1fr; }\n        .section-title { grid-template-columns: 1fr; }\n        .proof-strip { grid-template-columns: auto 1fr auto 1fr; }\n    }\n\n    @media (max-width: 680px) {\n        .demo-nav div { display: none; }\n        .demo-hero { display: block; min-height: 0; padding-top: 44px; }\n        .hero-stamp { width: 80px; margin-bottom: 42px; }\n        .demo-hero h1 { font-size: 54px; }\n        .hero-note { width: auto; margin-top: 46px; transform: rotate(2deg); }\n        .proof-strip { grid-template-columns: auto 1fr; }\n        .card-grid, .coverage-grid { grid-template-columns: 1fr; }\n        .playground, .coverage { padding-block: 72px; }\n        .section-title h2 { font-size: 46px; }\n        .tab-tape { width: 100%; overflow-x: auto; }\n        .tab-tape button { white-space: nowrap; }\n        .demo-footer { gap: 20px; flex-direction: column; }\n    }"},{"type":"href","href":"/static/saola/demo-site.css?v=3"}],
            resources: [{"tag":"link","uuid":"link-0","attrs":{"rel":"stylesheet","href":"/static/saola/demo-site.css?v=3"}}],
            commitConstructorData: function(this: any) {
                // Then update states from data
                update$count(3);
                update$name('Saola');
                update$selectedPanel('state');
                update$status('ready');
                update$isVisible(true);
                update$isLocked(false);
                update$accepted(false);
                update$selectedRuntime('blade');
                update$note('');
                update$sampleItems([{"id": 1, "label": "Blade output", "enabled": true}, {"id": 2, "label": "JavaScript view", "enabled": true}, {"id": 3, "label": "Scoped CSS", "enabled": false}]);
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
            this.block('block-shell', 'shell', (parentElement: any) => [
            this.html(`71bbd51d`, "main", parentElement,
                { classes: [{ type: 'static', value: "demo-page" }] },
                (parentElement: any) => [
                this.html(`3996f6ab`, "div", parentElement, { classes: [{ type: 'static', value: "paper-noise" }] }),
                this.html(`a78834ce`, "nav", parentElement,
                    { classes: [{ type: 'static', value: "demo-nav" }], attrs: { "aria-label": { type: 'static', value: "Điều hướng trang demo" } } },
                    (parentElement: any) => [
                    this.html(`1cb12447`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "/" } } },
                        (parentElement: any) => [
                        this.text('SAOLA LABS')
                        ]),
                    this.html(`c13c35fb`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`69452823`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "#playground" } } },
                            (parentElement: any) => [
                            this.text('Playground')
                            ]),
                        this.html(`cd4d96c2`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "#coverage" } } },
                            (parentElement: any) => [
                            this.text('Phạm vi hỗ trợ')
                            ]),
                        this.html(`22cee8fd`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/getting-started" } } },
                            (parentElement: any) => [
                            this.text('Tài liệu')
                            ])
                    ])
                    ]),
                this.html(`25b5853e`, "header", parentElement,
                    { classes: [{ type: 'static', value: "demo-hero" }] },
                    (parentElement: any) => [
                    this.html(`da12442d`, "div", parentElement,
                        { classes: [{ type: 'static', value: "hero-stamp" }] },
                        (parentElement: any) => [
                        this.html(`6b88dd0b`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('LIVE')
                        ]),
                        this.html(`c8cf5bdb`, "small", parentElement, {}, (parentElement: any) => [
                            this.text('/demo')
                        ])
                        ]),
                    this.html(`c1c39a77`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`5a0bb3fc`, "p", parentElement,
                            { classes: [{ type: 'static', value: "overline" }] },
                            (parentElement: any) => [
                            this.text('Saola single-file component')
                            ]),
                        this.html(`7d686606`, "h1", parentElement, {}, (parentElement: any) => [
                            this.text('MỘT FILE.'),
                            this.html(`6c02ded8`, "br", parentElement, {}),
                            this.html(`a9d3960a`, "em", parentElement, {}, (parentElement: any) => [
                                this.text('HAI RUNTIME.')
                            ]),
                            this.html(`2a4be3ab`, "br", parentElement, {}),
                            this.text('MỌI THỨ'),
                            this.html(`5c8d53e9`, "br", parentElement, {}),
                            this.text('ĐANG CHẠY.')
                        ]),
                        this.html(`682aa896`, "p", parentElement,
                            { classes: [{ type: 'static', value: "hero-copy" }] },
                            (parentElement: any) => [
                            this.text('Trang này là fixture trực tiếp của compiler: source '),
                            this.html(`862d4a11`, "code", parentElement, {}, (parentElement: any) => [
                                this.text('index.sao')
                            ]),
                            this.text(' tạo Blade cho lần tải đầu và TypeScript cho các tương tác sau hydration.')
                            ])
                    ]),
                    this.html(`67997262`, "aside", parentElement,
                        { classes: [{ type: 'static', value: "hero-note" }] },
                        (parentElement: any) => [
                        this.html(`d1051098`, "strong", parentElement, {}, (parentElement: any) => [
                            this.output(`8dfe6749`, parentElement, true, [], (parentElement: any) => featureTotal)
                        ]),
                        this.html(`6ef066f6`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('nhóm cú pháp được tài liệu hóa')
                        ]),
                        this.html(`5a53f92e`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Không dùng dữ liệu API giả. Các giá trị bên dưới là dữ liệu mẫu được ghi nhãn rõ.')
                        ])
                        ])
                    ]),
                this.html(`48d182dc`, "section", parentElement,
                    { classes: [{ type: 'static', value: "proof-strip" }], attrs: { "aria-label": { type: 'static', value: "Đầu ra của compiler" } } },
                    (parentElement: any) => [
                    this.html(`103de3c0`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('INPUT')
                    ]),
                    this.html(`5f0756c5`, "strong", parentElement, {}, (parentElement: any) => [
                        this.text('.sao')
                    ]),
                    this.html(`8ca99ec8`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('SERVER')
                    ]),
                    this.html(`461ec845`, "strong", parentElement, {}, (parentElement: any) => [
                        this.text('.blade.php')
                    ]),
                    this.html(`4451b5a7`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('CLIENT')
                    ]),
                    this.html(`03b0d6d4`, "strong", parentElement, {}, (parentElement: any) => [
                        this.text('.ts')
                    ]),
                    this.html(`955ebaf2`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('STYLE')
                    ]),
                    this.html(`c34aff53`, "strong", parentElement, {}, (parentElement: any) => [
                        this.text('scoped CSS')
                    ])
                    ]),
                this.html(`ac1ed435`, "section", parentElement,
                    { classes: [{ type: 'static', value: "playground" }], attrs: { "id": { type: 'static', value: "playground" } } },
                    (parentElement: any) => [
                    this.html(`a9964b08`, "div", parentElement,
                        { classes: [{ type: 'static', value: "section-title" }] },
                        (parentElement: any) => [
                        this.html(`6f013710`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('01 / Playground')
                        ]),
                        this.html(`395b70ea`, "h2", parentElement, {}, (parentElement: any) => [
                            this.text('Chạm vào cú pháp.'),
                            this.html(`8b4e932a`, "br", parentElement, {}),
                            this.text('Nhìn state đổi ngay.')
                        ])
                        ]),
                    this.html(`91f4f5a0`, "div", parentElement,
                        { classes: [{ type: 'static', value: "tab-tape" }], attrs: { "role": { type: 'static', value: "tablist" }, "aria-label": { type: 'static', value: "Nhóm tính năng" } } },
                        (parentElement: any) => [
                        this.html(`10b31a87`, "button", parentElement,
                            { classes: [{ type: 'binding', value: "is-active", factory: () => selectedPanel === 'state', stateKeys: ["selectedPanel"] }], attrs: { "data-demo-tab": { type: 'static', value: "state" } }, events: { click: [(event: any) => setSelectedPanel('state')] } },
                            (parentElement: any) => [
                            this.text('State & event')
                            ]),
                        this.html(`b9cdcb41`, "button", parentElement,
                            { classes: [{ type: 'binding', value: "is-active", factory: () => selectedPanel === 'binding', stateKeys: ["selectedPanel"] }], attrs: { "data-demo-tab": { type: 'static', value: "binding" } }, events: { click: [(event: any) => setSelectedPanel('binding')] } },
                            (parentElement: any) => [
                            this.text('Binding')
                            ]),
                        this.html(`9ead1b4b`, "button", parentElement,
                            { classes: [{ type: 'binding', value: "is-active", factory: () => selectedPanel === 'flow', stateKeys: ["selectedPanel"] }], attrs: { "data-demo-tab": { type: 'static', value: "flow" } }, events: { click: [(event: any) => setSelectedPanel('flow')] } },
                            (parentElement: any) => [
                            this.text('Control flow')
                            ])
                        ]),
                    this.html(`b754a903`, "div", parentElement,
                        { classes: [{ type: 'static', value: "card-grid" }, { type: 'binding', value: "is-hidden", factory: () => selectedPanel !== 'binding', stateKeys: ["selectedPanel"] }], attrs: { "data-demo-panel": { type: 'static', value: "binding" } } },
                        (parentElement: any) => [
                        this.include(`e3eb906c`, 'web.modules.demo.featurecard', parentElement, ["name"], (parentElement: any) => ({
                                "number": "03",
                                "title": "Two-way binding",
                                "source": "&#64;App.Helper.bind(name)",
                                "tone": "cyan",
                                __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                                this.html(`4f16c121`, "label", parentElement,
                                    { classes: [{ type: 'static', value: "field-label" }], attrs: { "for": { type: 'static', value: "demo-name" } } },
                                    (parentElement: any) => [
                                    this.text('Tên mẫu')
                                    ]),
                                this.html(`0c819b78`, "input", parentElement, { attrs: { "id": { type: 'static', value: "demo-name" }, "data-demo-name": { type: 'static', value: true }, "type": { type: 'static', value: "text" }, "placeholder": { type: 'static', value: "Nhập một tên" }, "bind": { type: 'static', value: true }, "name": { type: 'static', value: true } }, props: { "required": { type: 'binding', factory: () => true, stateKeys: ["true"] } } }),
                                this.html(`a1d02bec`, "p", parentElement,
                                    { classes: [{ type: 'static', value: "live-output" }] },
                                    (parentElement: any) => [
                                    this.text('Xin chào, '),
                                    this.html(`1084f2dc`, "strong", parentElement,
                                        { attrs: { "data-demo-name-output": { type: 'static', value: true } } },
                                        (parentElement: any) => [
                                        this.output(`3dac18d4`, parentElement, true, ["name"], (parentElement: any) => name)
                                        ]),
                                    this.text('.')
                                    ])
                            ]
                            })),
                        this.include(`4955c300`, 'web.modules.demo.featurecard', parentElement, [], (parentElement: any) => ({
                                "number": "04",
                                "title": "Boolean attributes",
                                "source": "&#64;checked · &#64;disabled · &#64;readonly",
                                "tone": "yellow",
                                __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                                this.html(`8ea1bfd6`, "label", parentElement,
                                    { classes: [{ type: 'static', value: "check-row" }] },
                                    (parentElement: any) => [
                                    this.html(`fc0ed7b7`, "input", parentElement, { attrs: { "data-demo-accept": { type: 'static', value: true }, "type": { type: 'static', value: "checkbox" }, "bind": { type: 'static', value: true }, "accepted": { type: 'static', value: true } }, props: { "checked": { type: 'binding', factory: () => accepted, stateKeys: ["accepted"] } } }),
                                    this.text(' Đã đọc tài liệu cú pháp')
                                    ]),
                                this.html(`8202d879`, "label", parentElement,
                                    { classes: [{ type: 'static', value: "check-row" }] },
                                    (parentElement: any) => [
                                    this.html(`79a83397`, "input", parentElement, { attrs: { "type": { type: 'static', value: "checkbox" }, "bind": { type: 'static', value: true }, "isLocked": { type: 'static', value: true } }, props: { "checked": { type: 'binding', factory: () => isLocked, stateKeys: ["isLocked"] } } }),
                                    this.text(' Khóa trường ghi chú')
                                    ]),
                                this.html(`a6a1575d`, "input", parentElement, { attrs: { "type": { type: 'static', value: "text" }, "placeholder": { type: 'static', value: "Ghi chú mẫu" }, "bind": { type: 'static', value: true }, "note": { type: 'static', value: true } }, props: { "readOnly": { type: 'binding', factory: () => isLocked, stateKeys: ["isLocked"] } } }),
                                this.html(`3d23181b`, "button", parentElement,
                                    { attrs: { "data-demo-continue": { type: 'static', value: true } }, props: { "disabled": { type: 'binding', factory: () => !accepted, stateKeys: ["accepted"] } } },
                                    (parentElement: any) => [
                                    this.text('Tiếp tục')
                                    ])
                            ]
                            })),
                        this.include(`1a6c1cce`, 'web.modules.demo.featurecard', parentElement, [], (parentElement: any) => ({
                                "number": "05",
                                "title": "Visibility & attributes",
                                "source": "&#64;class · &#64;attr · &#64;style",
                                "tone": "pink",
                                __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                                this.html(`587c9784`, "button", parentElement,
                                    { attrs: { "data-demo-visibility": { type: 'static', value: true } }, events: { click: [(event: any) => setIsVisible(!isVisible)] } },
                                    (parentElement: any) => [
                                    this.text('Bật / tắt hai vùng')
                                    ]),
                                this.html(`4ee781e3`, "p", parentElement,
                                    { classes: [{ type: 'static', value: "visibility-sample" }, { type: 'binding', value: "is-hidden", factory: () => !isVisible, stateKeys: ["isVisible"] }], attrs: { "data-demo-visible": { type: 'static', value: "true" } } },
                                    (parentElement: any) => [
                                    this.text('Vùng này hiện khi state là true.')
                                    ]),
                                this.html(`300b4e0d`, "p", parentElement,
                                    { classes: [{ type: 'static', value: "visibility-sample" }, { type: 'binding', value: "is-hidden", factory: () => isVisible, stateKeys: ["isVisible"] }], attrs: { "data-demo-visible": { type: 'static', value: "false" } } },
                                    (parentElement: any) => [
                                    this.text('Vùng này hiện khi state là false.')
                                    ]),
                                this.html(`dfe72f20`, "a", parentElement,
                                    { attrs: { "href": { type: 'binding', value: '/compiler', factory: () => '/compiler', stateKeys: [] }, "title": { type: 'binding', value: 'Compiler cho '+name, factory: () => 'Compiler cho '+name, stateKeys: ["name"] } } },
                                    (parentElement: any) => [
                                    this.text('Mở trang compiler')
                                    ])
                            ]
                            }))
                        ]),
                    this.html(`c9e8675f`, "div", parentElement,
                        { classes: [{ type: 'static', value: "card-grid" }, { type: 'binding', value: "is-hidden", factory: () => selectedPanel !== 'flow', stateKeys: ["selectedPanel"] }], attrs: { "data-demo-panel": { type: 'static', value: "flow" } } },
                        (parentElement: any) => [
                        this.include(`af216946`, 'web.modules.demo.featurecard', parentElement, ["status"], (parentElement: any) => ({
                                "number": "06",
                                "title": "If / elseif / else",
                                "source": "&#64;if(status === __STR_LIT_0__)",
                                "tone": "yellow",
                                __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                                this.html(`2222fffe`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "status-buttons" }] },
                                    (parentElement: any) => [
                                    this.html(`7d5fce38`, "button", parentElement,
                                        { attrs: { "data-demo-status": { type: 'static', value: "ready" } }, events: { click: [(event: any) => setStatus('ready')] } },
                                        (parentElement: any) => [
                                        this.text('Ready')
                                        ]),
                                    this.html(`9afeba4e`, "button", parentElement,
                                        { attrs: { "data-demo-status": { type: 'static', value: "building" } }, events: { click: [(event: any) => setStatus('building')] } },
                                        (parentElement: any) => [
                                        this.text('Building')
                                        ]),
                                    this.html(`6eed4f46`, "button", parentElement,
                                        { attrs: { "data-demo-status": { type: 'static', value: "error" } }, events: { click: [(event: any) => setStatus('error')] } },
                                        (parentElement: any) => [
                                        this.text('Error')
                                        ])
                                    ]),
                                this.reactive(`27b760b5`, "if", parentReactive, parentElement, ["status"], (parentReactive: any, parentElement: any) => {
                                    const reactiveContents = [];
                                    if (status === 'ready') {
                                        reactiveContents.push(
                                        this.html(`dec06fbd`, "p", parentElement,
                                            { classes: [{ type: 'static', value: "status-card" }, { type: 'static', value: "status-ready" }], attrs: { "data-demo-status-output": { type: 'static', value: true } } },
                                            (parentElement: any) => [
                                            this.text('Sẵn sàng biên dịch.')
                                            ])
                                        );
                                    }
                                    else if (status === 'building') {
                                        reactiveContents.push(
                                        this.html(`67bc53ba`, "p", parentElement,
                                            { classes: [{ type: 'static', value: "status-card" }, { type: 'static', value: "status-building" }], attrs: { "data-demo-status-output": { type: 'static', value: true } } },
                                            (parentElement: any) => [
                                            this.text('Đang biên dịch fixture.')
                                            ])
                                        );
                                    }
                                    else {
                                        reactiveContents.push(
                                        this.html(`763cf105`, "p", parentElement,
                                            { classes: [{ type: 'static', value: "status-card" }, { type: 'static', value: "status-error" }], attrs: { "data-demo-status-output": { type: 'static', value: true } } },
                                            (parentElement: any) => [
                                            this.text('Trạng thái lỗi mẫu.')
                                            ])
                                        );
                                    }
                                    return reactiveContents;
                                })
                            ]
                            })),
                        this.include(`9136e09e`, 'web.modules.demo.featurecard', parentElement, [], (parentElement: any) => ({
                                "number": "07",
                                "title": "For & foreach",
                                "source": "&#64;for · &#64;foreach · &#64;key",
                                "tone": "pink",
                                __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                                this.html(`d2316e9d`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "number-run" }] },
                                    (parentElement: any) => [
                                    this.reactive(`23292821`, "for", parentReactive, parentElement, ["count"], (parentReactive: any, parentElement: any) => {
                                        return this.__for("increment", 0, count, (__loop: any) => {
                                            let __forOutput = [];
                                            for (let i = 0; i < count; i++) {
                                                __loop.setCurrentTimes(i);
                                                __forOutput.push(
                                                this.html(`7ac636e3-${i}`, "span", parentElement, {}, (parentElement: any) => [
                                                    this.output(`f06b0864-${i}`, parentElement, true, ["i"], (parentElement: any) => i + 1)
                                                ])
                                                );
                                            }
                                            return __forOutput;
                                        })
                                    })
                                    ]),
                                this.html(`0b863907`, "ul", parentElement,
                                    { classes: [{ type: 'static', value: "sample-list" }] },
                                    (parentElement: any) => [
                                    this.reactive(`f3b01aa8`, "foreach", parentReactive, parentElement, ["sampleItems"], (parentReactive: any, parentElement: any) => {
                                        return this.__foreach(sampleItems, (item: any, __loopKey: any, __loopIndex: any, __loop: any) => [
                                            this.html(`fcf1116c-${item['id']}`, "li", parentElement,
                                                { classes: [{ type: 'binding', value: "is-enabled", factory: () => item['enabled'], stateKeys: [] }] },
                                                (parentElement: any) => [
                                                this.output(`3f83bd5b-${item['id']}`, parentElement, true, [], (parentElement: any) => item['label'])
                                                ])
                                        ], (item: any) => item['id'])
                                    })
                                    ])
                            ]
                            })),
                        this.include(`2b606f21`, 'web.modules.demo.featurecard', parentElement, ["selectedRuntime"], (parentElement: any) => ({
                                "number": "08",
                                "title": "Switch",
                                "source": "&#64;switch(selectedRuntime)",
                                "tone": "cyan",
                                __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                                this.html(`7f2a3c58`, "select", parentElement,
                                    { attrs: { "data-demo-runtime": { type: 'static', value: true }, "bind": { type: 'static', value: true }, "selectedRuntime": { type: 'static', value: true } } },
                                    (parentElement: any) => [
                                    this.html(`9a32bb52`, "option", parentElement,
                                        { attrs: { "value": { type: 'static', value: "blade" } } },
                                        (parentElement: any) => [
                                        this.text('Blade')
                                        ]),
                                    this.html(`f3590e60`, "option", parentElement,
                                        { attrs: { "value": { type: 'static', value: "typescript" } } },
                                        (parentElement: any) => [
                                        this.text('TypeScript')
                                        ]),
                                    this.html(`e548dc56`, "option", parentElement,
                                        { attrs: { "value": { type: 'static', value: "css" } } },
                                        (parentElement: any) => [
                                        this.text('Scoped CSS')
                                        ])
                                    ]),
                                this.reactive(`261877d1`, "switch", parentReactive, parentElement, ["selectedRuntime"], (parentReactive: any, parentElement: any) => {
                                    const reactiveContents = [];
                                    switch (selectedRuntime) {
                                        case 'typescript':
                                            reactiveContents.push(
                                            this.html(`b4defb38`, "p", parentElement,
                                                { classes: [{ type: 'static', value: "runtime-result" }], attrs: { "data-demo-runtime-output": { type: 'static', value: true } } },
                                                (parentElement: any) => [
                                                this.text('Client output giữ state, event và lifecycle.')
                                                ])
                                            );
                                            break;
                                        case 'css':
                                            reactiveContents.push(
                                            this.html(`7114a758`, "p", parentElement,
                                                { classes: [{ type: 'static', value: "runtime-result" }], attrs: { "data-demo-runtime-output": { type: 'static', value: true } } },
                                                (parentElement: any) => [
                                                this.text('Selector được gắn scope theo view.')
                                                ])
                                            );
                                            break;
                                        default:
                                            reactiveContents.push(
                                            this.html(`3fbd97db`, "p", parentElement,
                                                { classes: [{ type: 'static', value: "runtime-result" }], attrs: { "data-demo-runtime-output": { type: 'static', value: true } } },
                                                (parentElement: any) => [
                                                this.text('Server output trả HTML hoàn chỉnh.')
                                                ])
                                            );
                                            break;
                                    }
                                    return reactiveContents;
                                })
                            ]
                            }))
                        ]),
                    this.html(`5783ae25`, "div", parentElement,
                        { classes: [{ type: 'static', value: "card-grid" }, { type: 'binding', value: "is-hidden", factory: () => selectedPanel !== 'state', stateKeys: ["selectedPanel"] }], attrs: { "data-demo-panel": { type: 'static', value: "state" } } },
                        (parentElement: any) => [
                        this.include(`0151fa95`, 'web.modules.demo.featurecard', parentElement, ["count"], (parentElement: any) => ({
                                "number": "01",
                                "title": "Reactive state",
                                "source": "&#64;App.Helper.states({ count: 3 })",
                                "tone": "pink",
                                __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                                this.html(`7ac45d3e`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "counter-row" }] },
                                    (parentElement: any) => [
                                    this.html(`c6a8091c`, "button", parentElement,
                                        { attrs: { "data-demo-count": { type: 'static', value: "decrease" }, "aria-label": { type: 'static', value: "Giảm count" } }, props: { "disabled": { type: 'binding', factory: () => count === 0, stateKeys: ["count"] } }, events: { click: [(event: any) => setCount(count - 1)] } },
                                        (parentElement: any) => [
                                        this.text('Giảm')
                                        ]),
                                    this.html(`2a4b857b`, "strong", parentElement,
                                        { attrs: { "data-demo-count-output": { type: 'static', value: true } } },
                                        (parentElement: any) => [
                                        this.output(`344f0d1e`, parentElement, true, ["count"], (parentElement: any) => count)
                                        ]),
                                    this.html(`808c6128`, "button", parentElement,
                                        { attrs: { "data-demo-count": { type: 'static', value: "increase" }, "aria-label": { type: 'static', value: "Tăng count" } }, props: { "disabled": { type: 'binding', factory: () => count === MAX_COUNT, stateKeys: ["count"] } }, events: { click: [(event: any) => setCount(count + 1)] } },
                                        (parentElement: any) => [
                                        this.text('Tăng')
                                        ])
                                    ]),
                                this.html(`8a4ec305`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "progress-track" }] },
                                    (parentElement: any) => [
                                    this.html(`120c4376`, "i", parentElement, { attrs: { "style": { type: 'static', value: true }, "width": { type: 'static', value: true }, "count": { type: 'static', value: true } } })
                                    ]),
                                this.html(`5fe12573`, "small", parentElement, {}, (parentElement: any) => [
                                    this.text('Giới hạn mẫu: 0–'),
                                    this.output(`2d0ce7db`, parentElement, true, [], (parentElement: any) => MAX_COUNT)
                                ])
                            ]
                            })),
                        this.include(`21cfa9f6`, 'web.modules.demo.featurecard', parentElement, ["setCount"], (parentElement: any) => ({
                                "number": "02",
                                "title": "Events & setup",
                                "source": "&#64;App.Helper.click(App.Helper.setCount(3)) · &lt;script setup&gt;",
                                "tone": "cyan",
                                __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                                this.html(`29596de2`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Event inline cập nhật state; khối setup bên dưới cũng khai báo method tái sử dụng.')
                                ]),
                                this.html(`3310bdda`, "button", parentElement,
                                    { events: { click: [(event: any) => setCount(3)] } },
                                    (parentElement: any) => [
                                    this.text('Đặt lại count')
                                    ]),
                                this.html(`b1695bf6`, "button", parentElement,
                                    { events: { dblclick: [(event: any) => setCount(MAX_COUNT)] } },
                                    (parentElement: any) => [
                                    this.text('Nhấp đúp để đạt tối đa')
                                    ])
                            ]
                            })),
                        this.include(`78b74471`, 'web.modules.demo.featurecard', parentElement, [], (parentElement: any) => ({
                                "number": "09",
                                "title": "Props, import & children",
                                "source": "&#64;props · &#64;import · &#64;children",
                                "tone": "yellow",
                                __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                                this.html(`f184ae5c`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Chính khung này là component '),
                                    this.html(`f840c930`, "code", parentElement, {}, (parentElement: any) => [
                                        this.text('featurecard')
                                    ]),
                                    this.text(' được import. Tiêu đề và số là props; nội dung đoạn này đi qua slot '),
                                    this.html(`0ea168d2`, "code", parentElement, {}, (parentElement: any) => [
                                        this.text('&#64;children')
                                    ]),
                                    this.text('.')
                                ])
                            ]
                            }))
                        ])
                    ]),
                this.html(`09babe13`, "section", parentElement,
                    { classes: [{ type: 'static', value: "coverage" }], attrs: { "id": { type: 'static', value: "coverage" } } },
                    (parentElement: any) => [
                    this.html(`a38bd2e5`, "div", parentElement,
                        { classes: [{ type: 'static', value: "section-title" }, { type: 'static', value: "section-title--small" }] },
                        (parentElement: any) => [
                        this.html(`339663c0`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('02 / Phạm vi hỗ trợ')
                        ]),
                        this.html(`892f4d90`, "h2", parentElement, {}, (parentElement: any) => [
                            this.text('Một bản đồ cú pháp,'),
                            this.html(`e7712337`, "br", parentElement, {}),
                            this.text('không phải danh sách trang trí.')
                        ])
                        ]),
                    this.html(`5e6196d1`, "div", parentElement,
                        { classes: [{ type: 'static', value: "coverage-grid" }] },
                        (parentElement: any) => [
                        this.html(`24dd0405`, "article", parentElement, {}, (parentElement: any) => [
                            this.html(`cb9f18b2`, "h3", parentElement, {}, (parentElement: any) => [
                                this.text('Declarations')
                            ]),
                            this.html(`e507f63c`, "p", parentElement, {}, (parentElement: any) => [
                                this.html(`0f9f3c92`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;states')
                                ]),
                                this.text(', '),
                                this.html(`11228f95`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;state')
                                ]),
                                this.text(', '),
                                this.html(`1bd83dfd`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;props')
                                ]),
                                this.text(', '),
                                this.html(`8476cef6`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;const')
                                ]),
                                this.text(', '),
                                this.html(`25d54a81`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;let')
                                ]),
                                this.text(', '),
                                this.html(`2e57333e`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;vars')
                                ]),
                                this.text(', '),
                                this.html(`eb6834cf`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;import')
                                ]),
                                this.text(', '),
                                this.html(`88a4d770`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;await')
                                ])
                            ]),
                            this.html(`4b211548`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('Được minh họa trực tiếp hoặc dùng trong source của module.')
                            ])
                        ]),
                        this.html(`5aa458e4`, "article", parentElement, {}, (parentElement: any) => [
                            this.html(`26748bcc`, "h3", parentElement, {}, (parentElement: any) => [
                                this.text('Template')
                            ]),
                            this.html(`5faf36b1`, "p", parentElement, {}, (parentElement: any) => [
                                this.html(`2d990fba`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;extends')
                                ]),
                                this.text(', '),
                                this.html(`4a81cfbe`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;block')
                                ]),
                                this.text(', '),
                                this.html(`d7e74641`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;section')
                                ]),
                                this.text(', '),
                                this.html(`414c62c2`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;yield')
                                ]),
                                this.text(', '),
                                this.html(`c55390f6`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;include')
                                ]),
                                this.text(', '),
                                this.html(`24748e05`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;children')
                                ]),
                                this.text(', '),
                                this.html(`daffd75d`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;exec')
                                ])
                            ]),
                            this.html(`01bc413c`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('Trang dùng layout, block và component slot thực.')
                            ])
                        ]),
                        this.html(`d1785dfa`, "article", parentElement, {}, (parentElement: any) => [
                            this.html(`051ae83a`, "h3", parentElement, {}, (parentElement: any) => [
                                this.text('Control flow')
                            ]),
                            this.html(`fdae1d56`, "p", parentElement, {}, (parentElement: any) => [
                                this.html(`64d42a83`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;if')
                                ]),
                                this.text(', '),
                                this.html(`5a202243`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;foreach')
                                ]),
                                this.text(', '),
                                this.html(`e3537807`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;for')
                                ]),
                                this.text(', '),
                                this.html(`69767f16`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;while')
                                ]),
                                this.text(', '),
                                this.html(`1a038ceb`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;switch')
                                ]),
                                this.text(', '),
                                this.html(`6137dcae`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;break')
                                ]),
                                this.text(', '),
                                this.html(`ce112366`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;continue')
                                ]),
                                this.text(', '),
                                this.html(`14d8ce2f`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;ssr')
                                ])
                            ]),
                            this.html(`d956ab68`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('If, foreach, for và switch chạy trong tab Control flow.')
                            ])
                        ]),
                        this.html(`b175ec3c`, "article", parentElement, {}, (parentElement: any) => [
                            this.html(`94d98784`, "h3", parentElement, {}, (parentElement: any) => [
                                this.text('Bindings')
                            ]),
                            this.html(`6f5bcdbd`, "p", parentElement, {}, (parentElement: any) => [
                                this.html(`8e1de079`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;attr')
                                ]),
                                this.text(', '),
                                this.html(`5f991a41`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;class')
                                ]),
                                this.text(', '),
                                this.html(`e436284f`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;style')
                                ]),
                                this.text(', '),
                                this.html(`5a992cc4`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;bind')
                                ]),
                                this.text(', '),
                                this.html(`daa8e59d`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;val')
                                ]),
                                this.text(', '),
                                this.html(`058b8fb0`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;show')
                                ]),
                                this.text(', '),
                                this.html(`ac28fd2f`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;hide')
                                ]),
                                this.text(', boolean attributes')
                            ]),
                            this.html(`9e5a582a`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('Tab Binding cho phép kiểm tra trực tiếp.')
                            ])
                        ]),
                        this.html(`b1dffe50`, "article", parentElement, {}, (parentElement: any) => [
                            this.html(`c68584f1`, "h3", parentElement, {}, (parentElement: any) => [
                                this.text('Forms & access')
                            ]),
                            this.html(`1ffcdb8e`, "p", parentElement, {}, (parentElement: any) => [
                                this.html(`352f19a3`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;csrf')
                                ]),
                                this.text(', '),
                                this.html(`1b8157dc`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;method')
                                ]),
                                this.text(', '),
                                this.html(`916317ad`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;auth')
                                ]),
                                this.text(', '),
                                this.html(`ab8b086a`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;guest')
                                ]),
                                this.text(', '),
                                this.html(`33fff89c`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;can')
                                ]),
                                this.text(', '),
                                this.html(`57bfe208`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;cannot')
                                ]),
                                this.text(', '),
                                this.html(`76cda61c`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&#64;error')
                                ])
                            ]),
                            this.html(`1360a086`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('Nhóm này cần request, session hoặc policy thật nên được kiểm chứng theo context ứng dụng.')
                            ])
                        ]),
                        this.html(`919ac307`, "article", parentElement, {}, (parentElement: any) => [
                            this.html(`75836397`, "h3", parentElement, {}, (parentElement: any) => [
                                this.text('Component blocks')
                            ]),
                            this.html(`85b8a6c1`, "p", parentElement, {}, (parentElement: any) => [
                                this.html(`b0861b21`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&lt;script setup lang="ts"&gt;')
                                ]),
                                this.text(', '),
                                this.html(`efea05bf`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('&lt;style scoped&gt;')
                                ]),
                                this.text(', magic variables và wrapper modern / legacy')
                            ]),
                            this.html(`7d5a1f72`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('Module này dùng wrapper modern, TypeScript setup và scoped CSS.')
                            ])
                        ])
                        ])
                    ]),
                this.html(`ab9ce6e7`, "footer", parentElement,
                    { classes: [{ type: 'static', value: "demo-footer" }] },
                    (parentElement: any) => [
                    this.html(`52a19f96`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Fixture: '),
                        this.html(`b598d4d6`, "code", parentElement, {}, (parentElement: any) => [
                            this.text('web.modules.demo.index')
                        ])
                    ]),
                    this.html(`aee14460`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "/" } } },
                        (parentElement: any) => [
                        this.text('Về trang chủ')
                        ])
                    ]),
                this.output(`3b21e7a6`, parentElement, false, [], (parentElement: any) => DEMO_SCRIPT)
                ])
            ]);
            this.superViewPath = `${__layout__+'base'}`;
            return this.extendView(this.superViewPath, {});
            }
        });

    }
}

// Export factory function
export function WebModulesDemoIndex(__data__ = {}, systemData = {}): IndexView {
    return new IndexView(__data__, systemData);
}
export default WebModulesDemoIndex;
