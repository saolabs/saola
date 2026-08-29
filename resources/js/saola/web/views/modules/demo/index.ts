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
        let count: any = 3;
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
        const set$selectedPanel = __STATE__.__.register('selectedPanel');
        let selectedPanel: any = 'state';
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
        const set$isVisible = __STATE__.__.register('isVisible');
        let isVisible: any = true;
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
        let isLocked: any = false;
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
        let accepted: any = false;
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
        let selectedRuntime: any = 'blade';
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
        const set$sampleItems = __STATE__.__.register('sampleItems');
        let sampleItems: any = [{"id": 1, "label": "Blade output", "enabled": true}, {"id": 2, "label": "JavaScript view", "enabled": true}, {"id": 3, "label": "Scoped CSS", "enabled": false}];
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
            styles: [{"type":"code","content":".demo-page.s45d147d4 {\n        --ink: #1f1b16;\n        --paper: #e8e0c0;\n        --pink: #ff71ce;\n        --cyan: #00ffcc;\n        --acid: #dfff00;\n        position: relative;\n        min-height: 100vh;\n        overflow: hidden;\n        background: var(--paper);\n        color: var(--ink);\n        font-family: Times New Roman, Times, serif;\n    }\n\n    .paper-noise.s45d147d4 {\n        position: fixed;\n        inset: 0;\n        z-index: 20;\n        pointer-events: none;\n        opacity: .22;\n        background-image: radial-gradient(rgba(31, 27, 22, .34) .7px, transparent .7px);\n        background-size: 5px 5px;\n        mix-blend-mode: multiply;\n    }\n\n    .demo-nav.s45d147d4 {\n        position: relative;\n        z-index: 2;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 20px clamp(18px, 4vw, 64px);\n        border-bottom: 3px solid var(--ink);\n        font: 700 13px/1 Helvetica, Arial, sans-serif;\n        letter-spacing: .08em;\n    }\n\n    .demo-nav a.s45d147d4 { color: inherit; text-decoration: none; }\n    .demo-nav > a.s45d147d4 { font-size: 18px; text-shadow: 2px 0 var(--pink), -2px 0 var(--cyan); }\n    .demo-nav div.s45d147d4 { display: flex; gap: 28px; }\n    .demo-nav div a.s45d147d4 { border-bottom: 2px solid transparent; }\n    .demo-nav div a.s45d147d4:hover { border-color: var(--ink); }\n\n    .demo-hero.s45d147d4 {\n        position: relative;\n        display: grid;\n        grid-template-columns: 120px minmax(0, 1fr) 250px;\n        gap: clamp(24px, 5vw, 80px);\n        align-items: end;\n        min-height: 640px;\n        padding: 70px clamp(18px, 4vw, 64px) 90px;\n        background-image: radial-gradient(var(--pink) 1.4px, transparent 1.4px);\n        background-size: 16px 16px;\n    }\n\n    .demo-hero.s45d147d4::before {\n        content: '';\n        position: absolute;\n        width: 420px;\n        height: 120px;\n        right: 8%;\n        top: 25%;\n        background: var(--acid);\n        transform: rotate(-7deg);\n        z-index: 0;\n    }\n\n    .demo-hero > *.s45d147d4 { position: relative; z-index: 1; }\n    .overline.s45d147d4 { margin: 0 0 18px; font: 700 15px/1 Courier, monospace; }\n\n    .demo-hero h1.s45d147d4 {\n        margin: 0;\n        max-width: 900px;\n        font: 900 clamp(64px, 10vw, 150px)/.78 Helvetica, Arial, sans-serif;\n        letter-spacing: -.075em;\n        text-shadow: 4px 0 var(--pink), -4px 0 var(--cyan);\n    }\n\n    .demo-hero h1 em.s45d147d4 { font-family: Times New Roman, Times, serif; font-weight: 400; }\n    .hero-copy.s45d147d4 { max-width: 720px; margin: 42px 0 0; font-size: 21px; line-height: 1.45; }\n    .hero-copy code.s45d147d4 { font-family: Courier, monospace; font-size: .86em; }\n\n    .hero-stamp.s45d147d4 {\n        align-self: start;\n        display: grid;\n        place-items: center;\n        aspect-ratio: 1;\n        border: 3px solid var(--ink);\n        border-radius: 50%;\n        background: var(--cyan);\n        transform: rotate(-9deg);\n        font-family: Helvetica, Arial, sans-serif;\n    }\n\n    .hero-stamp span.s45d147d4 { font-size: 28px; font-weight: 900; }\n    .hero-stamp small.s45d147d4 { font: 13px/1 Courier, monospace; }\n\n    .hero-note.s45d147d4 {\n        padding: 24px;\n        border: 3px solid var(--ink);\n        background: var(--pink);\n        box-shadow: 8px 8px 0 var(--cyan);\n        transform: rotate(4deg);\n    }\n\n    .hero-note strong.s45d147d4 { display: block; font: 900 86px/.8 Helvetica, Arial, sans-serif; }\n    .hero-note span.s45d147d4 { display: block; margin-top: 12px; font: 700 17px/1.1 Helvetica, Arial, sans-serif; }\n    .hero-note p.s45d147d4 { margin: 26px 0 0; font: 13px/1.4 Courier, monospace; }\n\n    .proof-strip.s45d147d4 {\n        display: grid;\n        grid-template-columns: repeat(4, auto 1fr);\n        border-block: 3px solid var(--ink);\n        background: var(--ink);\n        color: var(--paper);\n        font-family: Courier, monospace;\n    }\n\n    .proof-strip span.s45d147d4, .proof-strip strong.s45d147d4 { padding: 15px 18px; border-right: 1px dashed var(--paper); }\n    .proof-strip span.s45d147d4 { color: var(--cyan); font-size: 11px; }\n    .proof-strip strong.s45d147d4 { font-size: 13px; }\n\n    .playground.s45d147d4, .coverage.s45d147d4 { padding: 110px clamp(18px, 5vw, 80px); }\n    .section-title.s45d147d4 { display: grid; grid-template-columns: 220px minmax(0, 820px); gap: 40px; align-items: start; margin-bottom: 70px; }\n    .section-title p.s45d147d4 { margin: 8px 0 0; font: 700 14px/1 Courier, monospace; }\n    .section-title h2.s45d147d4 { margin: 0; font: 900 clamp(48px, 7vw, 104px)/.9 Helvetica, Arial, sans-serif; letter-spacing: -.055em; }\n\n    .tab-tape.s45d147d4 { display: flex; width: max-content; max-width: 100%; margin: 0 auto 54px; padding: 10px; background: rgba(255, 113, 206, .72); transform: rotate(-1.3deg); }\n    button.s45d147d4, select.s45d147d4, input.s45d147d4 { color: var(--ink); font: 700 14px/1 Helvetica, Arial, sans-serif; }\n    button.s45d147d4 { padding: 12px 16px; border: 2px solid var(--ink); background: var(--paper); box-shadow: 3px 3px 0 var(--ink); cursor: pointer; }\n    button.s45d147d4:hover, button.is-active.s45d147d4 { background: var(--acid); transform: translate(-1px, -1px); }\n    button.s45d147d4:disabled { cursor: not-allowed; opacity: .45; transform: none; }\n    .tab-tape button.s45d147d4 { box-shadow: none; border-right: 0; }\n    .tab-tape button.s45d147d4:last-child { border-right: 2px solid var(--ink); }\n\n    .card-grid.s45d147d4 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 42px; max-width: 1380px; margin: 0 auto; }\n    .field-label.s45d147d4 { display: block; margin-bottom: 8px; font: 700 13px/1 Courier, monospace; }\n    input.s45d147d4, select.s45d147d4 { width: 100%; box-sizing: border-box; padding: 13px; border: 2px solid var(--ink); background: rgba(255, 255, 255, .28); }\n    .live-output.s45d147d4 { padding: 16px; background: var(--cyan); font-size: 20px; }\n    .check-row.s45d147d4 { display: block; margin-bottom: 14px; font-family: Helvetica, Arial, sans-serif; }\n    .check-row input.s45d147d4 { width: auto; margin-right: 8px; }\n    .visibility-sample.s45d147d4 { padding: 13px; border: 2px dashed var(--ink); }\n    .counter-row.s45d147d4 { display: grid; grid-template-columns: 1fr 80px 1fr; align-items: center; gap: 12px; }\n    .counter-row strong.s45d147d4 { text-align: center; font: 900 56px/1 Helvetica, Arial, sans-serif; }\n    .progress-track.s45d147d4 { height: 18px; margin: 22px 0 10px; border: 2px solid var(--ink); background: var(--paper); }\n    .progress-track i.s45d147d4 { display: block; height: 100%; max-width: 100%; background: var(--pink); }\n    .number-run.s45d147d4 { display: flex; flex-wrap: wrap; gap: 7px; }\n    .number-run span.s45d147d4 { display: grid; place-items: center; width: 34px; height: 34px; border: 2px solid var(--ink); background: var(--acid); font: 700 15px/1 Courier, monospace; }\n    .sample-list.s45d147d4 { padding: 0; list-style: none; font-family: Courier, monospace; }\n    .sample-list li.s45d147d4 { padding: 8px 0; text-decoration: line-through; opacity: .55; }\n    .sample-list li.is-enabled.s45d147d4 { text-decoration: none; opacity: 1; }\n    .status-buttons.s45d147d4 { display: flex; flex-wrap: wrap; gap: 8px; }\n    .status-card.s45d147d4, .runtime-result.s45d147d4 { padding: 16px; border: 2px solid var(--ink); }\n    .status-ready.s45d147d4 { background: var(--cyan); }\n    .status-building.s45d147d4 { background: var(--acid); }\n    .status-error.s45d147d4 { background: var(--pink); }\n\n    .coverage.s45d147d4 { position: relative; background: var(--ink); color: var(--paper); }\n    .coverage.s45d147d4::before { content: ''; position: absolute; inset: 0; opacity: .16; background-image: repeating-linear-gradient(135deg, transparent 0 16px, var(--pink) 16px 18px); }\n    .coverage > *.s45d147d4 { position: relative; }\n    .section-title--small.s45d147d4 { margin-bottom: 60px; }\n    .section-title--small h2.s45d147d4 { max-width: 970px; }\n    .coverage-grid.s45d147d4 { display: grid; grid-template-columns: repeat(3, 1fr); border: 2px solid var(--paper); }\n    .coverage-grid article.s45d147d4 { min-height: 230px; padding: 26px; border: 1px solid var(--paper); }\n    .coverage-grid article.s45d147d4:nth-child(2n) { background: var(--pink); color: var(--ink); }\n    .coverage-grid h3.s45d147d4 { margin: 0 0 24px; font: 900 26px/1 Helvetica, Arial, sans-serif; }\n    .coverage-grid p.s45d147d4 { line-height: 1.8; }\n    .coverage-grid code.s45d147d4 { color: inherit; font: 14px/1.5 Courier, monospace; }\n    .coverage-grid span.s45d147d4 { display: block; margin-top: 20px; font: 13px/1.45 Helvetica, Arial, sans-serif; }\n    .ssr-ticket.s45d147d4 { width: fit-content; max-width: 720px; margin: 58px auto 0; padding: 18px 24px; border: 2px dashed var(--paper); background: var(--cyan); color: var(--ink); transform: rotate(-1deg); font-family: Courier, monospace; }\n\n    .demo-footer.s45d147d4 { display: flex; justify-content: space-between; padding: 28px clamp(18px, 4vw, 64px); border-top: 3px solid var(--ink); font: 700 13px/1 Courier, monospace; }\n    .demo-footer a.s45d147d4 { color: inherit; }\n\n    @media (max-width: 980px) {\n        .demo-hero.s45d147d4 { grid-template-columns: 90px 1fr; }\n        .hero-note.s45d147d4 { grid-column: 2; width: 230px; }\n        .card-grid.s45d147d4, .coverage-grid.s45d147d4 { grid-template-columns: 1fr 1fr; }\n        .section-title.s45d147d4 { grid-template-columns: 1fr; }\n        .proof-strip.s45d147d4 { grid-template-columns: auto 1fr auto 1fr; }\n    }\n\n    @media (max-width: 680px) {\n        .demo-nav div.s45d147d4 { display: none; }\n        .demo-hero.s45d147d4 { display: block; min-height: 0; padding-top: 44px; }\n        .hero-stamp.s45d147d4 { width: 80px; margin-bottom: 42px; }\n        .demo-hero h1.s45d147d4 { font-size: 54px; }\n        .hero-note.s45d147d4 { width: auto; margin-top: 46px; transform: rotate(2deg); }\n        .proof-strip.s45d147d4 { grid-template-columns: auto 1fr; }\n        .card-grid.s45d147d4, .coverage-grid.s45d147d4 { grid-template-columns: 1fr; }\n        .playground.s45d147d4, .coverage.s45d147d4 { padding-block: 72px; }\n        .section-title h2.s45d147d4 { font-size: 46px; }\n        .tab-tape.s45d147d4 { width: 100%; overflow-x: auto; }\n        .tab-tape button.s45d147d4 { white-space: nowrap; }\n        .demo-footer.s45d147d4 { gap: 20px; flex-direction: column; }\n    }"},{"type":"href","href":"/static/saola/demo-site.css?v=3"}],
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
            this.html(`Bshell1`, "main", parentElement,
                { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "demo-page" }] },
                (parentElement: any) => [
                this.html(`Bshell11`, "div", parentElement, { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "paper-noise" }] }),
                this.html(`Bshell12`, "nav", parentElement,
                    { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "demo-nav" }], attrs: { "aria-label": { type: 'static', value: "Điều hướng trang demo" } } },
                    (parentElement: any) => [
                    this.html(`Bshell121`, "a", parentElement,
                        { classes: [{ type: 'static', value: "s45d147d4" }], attrs: { "href": { type: 'static', value: "/" } } },
                        (parentElement: any) => [
                        this.text('SAOLABS')
                        ]),
                    this.html(`Bshell122`, "div", parentElement,
                        { classes: [{ type: 'static', value: "s45d147d4" }] },
                        (parentElement: any) => [
                        this.html(`Bshell1221`, "a", parentElement,
                            { classes: [{ type: 'static', value: "s45d147d4" }], attrs: { "href": { type: 'static', value: "#playground" } } },
                            (parentElement: any) => [
                            this.text('Playground')
                            ]),
                        this.html(`Bshell1222`, "a", parentElement,
                            { classes: [{ type: 'static', value: "s45d147d4" }], attrs: { "href": { type: 'static', value: "#coverage" } } },
                            (parentElement: any) => [
                            this.text('Phạm vi hỗ trợ')
                            ]),
                        this.html(`Bshell1223`, "a", parentElement,
                            { classes: [{ type: 'static', value: "s45d147d4" }], attrs: { "href": { type: 'static', value: "/docs/getting-started" } } },
                            (parentElement: any) => [
                            this.text('Tài liệu')
                            ])
                        ])
                    ]),
                this.html(`Bshell13`, "header", parentElement,
                    { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "demo-hero" }] },
                    (parentElement: any) => [
                    this.html(`Bshell131`, "div", parentElement,
                        { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "hero-stamp" }] },
                        (parentElement: any) => [
                        this.html(`Bshell1311`, "span", parentElement,
                            { classes: [{ type: 'static', value: "s45d147d4" }] },
                            (parentElement: any) => [
                            this.text('LIVE')
                            ]),
                        this.html(`Bshell1312`, "small", parentElement,
                            { classes: [{ type: 'static', value: "s45d147d4" }] },
                            (parentElement: any) => [
                            this.text('/demo')
                            ])
                        ]),
                    this.html(`Bshell132`, "div", parentElement,
                        { classes: [{ type: 'static', value: "s45d147d4" }] },
                        (parentElement: any) => [
                        this.html(`Bshell1321`, "p", parentElement,
                            { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "overline" }] },
                            (parentElement: any) => [
                            this.text('Saola single-file component')
                            ]),
                        this.html(`Bshell1322`, "h1", parentElement,
                            { classes: [{ type: 'static', value: "s45d147d4" }] },
                            (parentElement: any) => [
                            this.text('MỘT FILE.'),
                            this.html(`Bshell13221`, "br", parentElement, { classes: [{ type: 'static', value: "s45d147d4" }] }),
                            this.html(`Bshell13222`, "em", parentElement,
                                { classes: [{ type: 'static', value: "s45d147d4" }] },
                                (parentElement: any) => [
                                this.text('HAI RUNTIME.')
                                ]),
                            this.html(`Bshell13223`, "br", parentElement, { classes: [{ type: 'static', value: "s45d147d4" }] }),
                            this.text('MỌI THỨ'),
                            this.html(`Bshell13224`, "br", parentElement, { classes: [{ type: 'static', value: "s45d147d4" }] }),
                            this.text('ĐANG CHẠY.')
                            ]),
                        this.html(`Bshell1323`, "p", parentElement,
                            { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "hero-copy" }] },
                            (parentElement: any) => [
                            this.text('Trang này là fixture trực tiếp của compiler: source '),
                            this.html(`Bshell13231`, "code", parentElement,
                                { classes: [{ type: 'static', value: "s45d147d4" }] },
                                (parentElement: any) => [
                                this.text('index.sao')
                                ]),
                            this.text(' tạo Blade cho lần tải đầu và TypeScript cho các tương tác sau hydration.')
                            ])
                        ]),
                    this.html(`Bshell133`, "aside", parentElement,
                        { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "hero-note" }] },
                        (parentElement: any) => [
                        this.html(`Bshell1331`, "strong", parentElement,
                            { classes: [{ type: 'static', value: "s45d147d4" }] },
                            (parentElement: any) => [
                            this.text(String(featureTotal ?? ''))
                            ]),
                        this.html(`Bshell1332`, "span", parentElement,
                            { classes: [{ type: 'static', value: "s45d147d4" }] },
                            (parentElement: any) => [
                            this.text('nhóm cú pháp được tài liệu hóa')
                            ]),
                        this.html(`Bshell1333`, "p", parentElement,
                            { classes: [{ type: 'static', value: "s45d147d4" }] },
                            (parentElement: any) => [
                            this.text('Không dùng dữ liệu API giả. Các giá trị bên dưới là dữ liệu mẫu được ghi nhãn rõ.')
                            ])
                        ])
                    ]),
                this.html(`Bshell14`, "section", parentElement,
                    { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "proof-strip" }], attrs: { "aria-label": { type: 'static', value: "Đầu ra của compiler" } } },
                    (parentElement: any) => [
                    this.html(`Bshell141`, "span", parentElement,
                        { classes: [{ type: 'static', value: "s45d147d4" }] },
                        (parentElement: any) => [
                        this.text('INPUT')
                        ]),
                    this.html(`Bshell142`, "strong", parentElement,
                        { classes: [{ type: 'static', value: "s45d147d4" }] },
                        (parentElement: any) => [
                        this.text('.sao')
                        ]),
                    this.html(`Bshell143`, "span", parentElement,
                        { classes: [{ type: 'static', value: "s45d147d4" }] },
                        (parentElement: any) => [
                        this.text('SERVER')
                        ]),
                    this.html(`Bshell144`, "strong", parentElement,
                        { classes: [{ type: 'static', value: "s45d147d4" }] },
                        (parentElement: any) => [
                        this.text('.blade.php')
                        ]),
                    this.html(`Bshell145`, "span", parentElement,
                        { classes: [{ type: 'static', value: "s45d147d4" }] },
                        (parentElement: any) => [
                        this.text('CLIENT')
                        ]),
                    this.html(`Bshell146`, "strong", parentElement,
                        { classes: [{ type: 'static', value: "s45d147d4" }] },
                        (parentElement: any) => [
                        this.text('.ts')
                        ]),
                    this.html(`Bshell147`, "span", parentElement,
                        { classes: [{ type: 'static', value: "s45d147d4" }] },
                        (parentElement: any) => [
                        this.text('STYLE')
                        ]),
                    this.html(`Bshell148`, "strong", parentElement,
                        { classes: [{ type: 'static', value: "s45d147d4" }] },
                        (parentElement: any) => [
                        this.text('scoped CSS')
                        ])
                    ]),
                this.html(`Bshell15`, "section", parentElement,
                    { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "playground" }], attrs: { "id": { type: 'static', value: "playground" } } },
                    (parentElement: any) => [
                    this.html(`Bshell151`, "div", parentElement,
                        { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "section-title" }] },
                        (parentElement: any) => [
                        this.html(`Bshell1511`, "p", parentElement,
                            { classes: [{ type: 'static', value: "s45d147d4" }] },
                            (parentElement: any) => [
                            this.text('01 / Playground')
                            ]),
                        this.html(`Bshell1512`, "h2", parentElement,
                            { classes: [{ type: 'static', value: "s45d147d4" }] },
                            (parentElement: any) => [
                            this.text('Chạm vào cú pháp.'),
                            this.html(`Bshell15121`, "br", parentElement, { classes: [{ type: 'static', value: "s45d147d4" }] }),
                            this.text('Nhìn state đổi ngay.')
                            ])
                        ]),
                    this.html(`Bshell152`, "div", parentElement,
                        { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "tab-tape" }], attrs: { "role": { type: 'static', value: "tablist" }, "aria-label": { type: 'static', value: "Nhóm tính năng" } } },
                        (parentElement: any) => [
                        this.html(`Bshell1521`, "button", parentElement,
                            { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'binding', value: "is-active", factory: () => selectedPanel === 'state', stateKeys: ["selectedPanel"] }], attrs: { "data-demo-tab": { type: 'static', value: "state" } }, events: { click: [(event: any) => setSelectedPanel('state')] } },
                            (parentElement: any) => [
                            this.text('State & event')
                            ]),
                        this.html(`Bshell1522`, "button", parentElement,
                            { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'binding', value: "is-active", factory: () => selectedPanel === 'binding', stateKeys: ["selectedPanel"] }], attrs: { "data-demo-tab": { type: 'static', value: "binding" } }, events: { click: [(event: any) => setSelectedPanel('binding')] } },
                            (parentElement: any) => [
                            this.text('Binding')
                            ]),
                        this.html(`Bshell1523`, "button", parentElement,
                            { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'binding', value: "is-active", factory: () => selectedPanel === 'flow', stateKeys: ["selectedPanel"] }], attrs: { "data-demo-tab": { type: 'static', value: "flow" } }, events: { click: [(event: any) => setSelectedPanel('flow')] } },
                            (parentElement: any) => [
                            this.text('Control flow')
                            ])
                        ]),
                    this.html(`Bshell153`, "div", parentElement,
                        { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "card-grid" }, { type: 'binding', value: "is-hidden", factory: () => selectedPanel !== 'binding', stateKeys: ["selectedPanel"] }], attrs: { "data-demo-panel": { type: 'static', value: "binding" } } },
                        (parentElement: any) => [
                        this.include(`Bshell153c1`, 'web.modules.demo.featurecard', parentElement, ["name"], (parentElement: any) => ({
                                "number": "03",
                                "title": "Two-way binding",
                                "source": "&#64;App.Helper.bind(name)",
                                "tone": "cyan",
                                __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                                this.html(`Bshell153c11`, "label", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "field-label" }], attrs: { "for": { type: 'static', value: "demo-name" } } },
                                    (parentElement: any) => [
                                    this.text('Tên mẫu')
                                    ]),
                                this.html(`Bshell153c12`, "input", parentElement, { classes: [{ type: 'static', value: "s45d147d4" }], attrs: { "id": { type: 'static', value: "demo-name" }, "data-demo-name": { type: 'static', value: true }, "type": { type: 'static', value: "text" }, "placeholder": { type: 'static', value: "Nhập một tên" } }, props: { "required": { type: 'binding', factory: () => true, stateKeys: ["true"] } }, bind: { key: 'name' } }),
                                this.html(`Bshell153c13`, "p", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "live-output" }] },
                                    (parentElement: any) => [
                                    this.text('Xin chào, '),
                                    this.html(`Bshell153c131`, "strong", parentElement,
                                        { classes: [{ type: 'static', value: "s45d147d4" }], attrs: { "data-demo-name-output": { type: 'static', value: true } } },
                                        (parentElement: any) => [
                                        this.output(`Bshell153c131o1`, parentElement, true, ["name"], (parentElement: any) => name)
                                        ]),
                                    this.text('.')
                                    ])
                            ]
                            })),
                        this.include(`Bshell153c2`, 'web.modules.demo.featurecard', parentElement, [], (parentElement: any) => ({
                                "number": "04",
                                "title": "Boolean attributes",
                                "source": "&#64;checked · &#64;disabled · &#64;readonly",
                                "tone": "yellow",
                                __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                                this.html(`Bshell153c21`, "label", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "check-row" }] },
                                    (parentElement: any) => [
                                    this.html(`Bshell153c211`, "input", parentElement, { classes: [{ type: 'static', value: "s45d147d4" }], attrs: { "data-demo-accept": { type: 'static', value: true }, "type": { type: 'static', value: "checkbox" } }, props: { "checked": { type: 'binding', factory: () => accepted, stateKeys: ["accepted"] } }, bind: { key: 'accepted' } }),
                                    this.text(' Đã đọc tài liệu cú pháp')
                                    ]),
                                this.html(`Bshell153c22`, "label", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "check-row" }] },
                                    (parentElement: any) => [
                                    this.html(`Bshell153c221`, "input", parentElement, { classes: [{ type: 'static', value: "s45d147d4" }], attrs: { "type": { type: 'static', value: "checkbox" } }, props: { "checked": { type: 'binding', factory: () => isLocked, stateKeys: ["isLocked"] } }, bind: { key: 'isLocked' } }),
                                    this.text(' Khóa trường ghi chú')
                                    ]),
                                this.html(`Bshell153c23`, "input", parentElement, { classes: [{ type: 'static', value: "s45d147d4" }], attrs: { "type": { type: 'static', value: "text" }, "placeholder": { type: 'static', value: "Ghi chú mẫu" } }, props: { "readOnly": { type: 'binding', factory: () => isLocked, stateKeys: ["isLocked"] } }, bind: { key: 'note' } }),
                                this.html(`Bshell153c24`, "button", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }], attrs: { "data-demo-continue": { type: 'static', value: true } }, props: { "disabled": { type: 'binding', factory: () => !accepted, stateKeys: ["accepted"] } } },
                                    (parentElement: any) => [
                                    this.text('Tiếp tục')
                                    ])
                            ]
                            })),
                        this.include(`Bshell153c3`, 'web.modules.demo.featurecard', parentElement, [], (parentElement: any) => ({
                                "number": "05",
                                "title": "Visibility & attributes",
                                "source": "&#64;class · &#64;attr · &#64;style",
                                "tone": "pink",
                                __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                                this.html(`Bshell153c31`, "button", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }], attrs: { "data-demo-visibility": { type: 'static', value: true } }, events: { click: [(event: any) => setIsVisible(!isVisible)] } },
                                    (parentElement: any) => [
                                    this.text('Bật / tắt hai vùng')
                                    ]),
                                this.html(`Bshell153c32`, "p", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "visibility-sample" }, { type: 'binding', value: "is-hidden", factory: () => !isVisible, stateKeys: ["isVisible"] }], attrs: { "data-demo-visible": { type: 'static', value: "true" } } },
                                    (parentElement: any) => [
                                    this.text('Vùng này hiện khi state là true.')
                                    ]),
                                this.html(`Bshell153c33`, "p", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "visibility-sample" }, { type: 'binding', value: "is-hidden", factory: () => isVisible, stateKeys: ["isVisible"] }], attrs: { "data-demo-visible": { type: 'static', value: "false" } } },
                                    (parentElement: any) => [
                                    this.text('Vùng này hiện khi state là false.')
                                    ]),
                                this.html(`Bshell153c34`, "a", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }], attrs: { "href": { type: 'binding', value: '/compiler', factory: () => '/compiler', stateKeys: [] }, "title": { type: 'binding', value: 'Compiler cho '+name, factory: () => 'Compiler cho '+name, stateKeys: ["name"] } } },
                                    (parentElement: any) => [
                                    this.text('Mở trang compiler')
                                    ])
                            ]
                            }))
                        ]),
                    this.html(`Bshell154`, "div", parentElement,
                        { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "card-grid" }, { type: 'binding', value: "is-hidden", factory: () => selectedPanel !== 'flow', stateKeys: ["selectedPanel"] }], attrs: { "data-demo-panel": { type: 'static', value: "flow" } } },
                        (parentElement: any) => [
                        this.include(`Bshell154c1`, 'web.modules.demo.featurecard', parentElement, ["status"], (parentElement: any) => ({
                                "number": "06",
                                "title": "If / elseif / else",
                                "source": "&#64;if(status === __STR_LIT_0__)",
                                "tone": "yellow",
                                __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                                this.html(`Bshell154c11`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "status-buttons" }] },
                                    (parentElement: any) => [
                                    this.html(`Bshell154c111`, "button", parentElement,
                                        { classes: [{ type: 'static', value: "s45d147d4" }], attrs: { "data-demo-status": { type: 'static', value: "ready" } }, events: { click: [(event: any) => setStatus('ready')] } },
                                        (parentElement: any) => [
                                        this.text('Ready')
                                        ]),
                                    this.html(`Bshell154c112`, "button", parentElement,
                                        { classes: [{ type: 'static', value: "s45d147d4" }], attrs: { "data-demo-status": { type: 'static', value: "building" } }, events: { click: [(event: any) => setStatus('building')] } },
                                        (parentElement: any) => [
                                        this.text('Building')
                                        ]),
                                    this.html(`Bshell154c113`, "button", parentElement,
                                        { classes: [{ type: 'static', value: "s45d147d4" }], attrs: { "data-demo-status": { type: 'static', value: "error" } }, events: { click: [(event: any) => setStatus('error')] } },
                                        (parentElement: any) => [
                                        this.text('Error')
                                        ])
                                    ]),
                                this.reactive(`Bshell154c1r1`, "if", parentReactive, parentElement, ["status"], (parentReactive: any, parentElement: any) => {
                                    const reactiveContents = [];
                                    if (status === 'ready') {
                                        reactiveContents.push(
                                        this.html(`Bshell154c1r1k11`, "p", parentElement,
                                            { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "status-card" }, { type: 'static', value: "status-ready" }], attrs: { "data-demo-status-output": { type: 'static', value: true } } },
                                            (parentElement: any) => [
                                            this.text('Sẵn sàng biên dịch.')
                                            ])
                                        );
                                    }
                                    else if (status === 'building') {
                                        reactiveContents.push(
                                        this.html(`Bshell154c1r1k21`, "p", parentElement,
                                            { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "status-card" }, { type: 'static', value: "status-building" }], attrs: { "data-demo-status-output": { type: 'static', value: true } } },
                                            (parentElement: any) => [
                                            this.text('Đang biên dịch fixture.')
                                            ])
                                        );
                                    }
                                    else {
                                        reactiveContents.push(
                                        this.html(`Bshell154c1r1k31`, "p", parentElement,
                                            { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "status-card" }, { type: 'static', value: "status-error" }], attrs: { "data-demo-status-output": { type: 'static', value: true } } },
                                            (parentElement: any) => [
                                            this.text('Trạng thái lỗi mẫu.')
                                            ])
                                        );
                                    }
                                    return reactiveContents;
                                })
                            ]
                            })),
                        this.include(`Bshell154c2`, 'web.modules.demo.featurecard', parentElement, [], (parentElement: any) => ({
                                "number": "07",
                                "title": "For & foreach",
                                "source": "&#64;for · &#64;foreach · &#64;key",
                                "tone": "pink",
                                __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                                this.html(`Bshell154c21`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "number-run" }] },
                                    (parentElement: any) => [
                                    this.reactive(`Bshell154c21l1`, "for", parentReactive, parentElement, ["count"], (parentReactive: any, parentElement: any) => {
                                        return this.__for("increment", 0, count, (__loop: any) => {
                                            let __forOutput = [];
                                            for (let i = 0; i < count; i++) {
                                                __loop.setCurrentTimes(i);
                                                __forOutput.push(
                                                this.html(`Bshell154c21l11-${i}`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                                    (parentElement: any) => [
                                                    this.output(`Bshell154c21l11o1-${i}`, parentElement, true, ["i"], (parentElement: any) => i + 1)
                                                    ])
                                                );
                                            }
                                            return __forOutput;
                                        })
                                    })
                                    ]),
                                this.html(`Bshell154c22`, "ul", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "sample-list" }] },
                                    (parentElement: any) => [
                                    this.reactive(`Bshell154c22l1`, "foreach", parentReactive, parentElement, ["sampleItems"], (parentReactive: any, parentElement: any) => {
                                        return this.__foreach(sampleItems, (item: any, __loopKey: any, __loopIndex: any, __loop: any) => [
                                            this.html(`Bshell154c22l11-${item['id']}`, "li", parentElement,
                                                { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'binding', value: "is-enabled", factory: () => item['enabled'], stateKeys: [] }] },
                                                (parentElement: any) => [
                                                this.output(`Bshell154c22l11o1-${item['id']}`, parentElement, true, [], (parentElement: any) => item['label'])
                                                ])
                                        ], (item: any) => item['id'])
                                    })
                                    ])
                            ]
                            })),
                        this.include(`Bshell154c3`, 'web.modules.demo.featurecard', parentElement, ["selectedRuntime"], (parentElement: any) => ({
                                "number": "08",
                                "title": "Switch",
                                "source": "&#64;switch(selectedRuntime)",
                                "tone": "cyan",
                                __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                                this.html(`Bshell154c31`, "select", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }], attrs: { "data-demo-runtime": { type: 'static', value: true } }, bind: { key: 'selectedRuntime' } },
                                    (parentElement: any) => [
                                    this.html(`Bshell154c311`, "option", parentElement,
                                        { classes: [{ type: 'static', value: "s45d147d4" }], attrs: { "value": { type: 'static', value: "blade" } } },
                                        (parentElement: any) => [
                                        this.text('Blade')
                                        ]),
                                    this.html(`Bshell154c312`, "option", parentElement,
                                        { classes: [{ type: 'static', value: "s45d147d4" }], attrs: { "value": { type: 'static', value: "typescript" } } },
                                        (parentElement: any) => [
                                        this.text('TypeScript')
                                        ]),
                                    this.html(`Bshell154c313`, "option", parentElement,
                                        { classes: [{ type: 'static', value: "s45d147d4" }], attrs: { "value": { type: 'static', value: "css" } } },
                                        (parentElement: any) => [
                                        this.text('Scoped CSS')
                                        ])
                                    ]),
                                this.reactive(`Bshell154c3r1`, "switch", parentReactive, parentElement, ["selectedRuntime"], (parentReactive: any, parentElement: any) => {
                                    const reactiveContents = [];
                                    switch (selectedRuntime) {
                                        case 'typescript':
                                            reactiveContents.push(
                                            this.html(`Bshell154c3r1k11`, "p", parentElement,
                                                { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "runtime-result" }], attrs: { "data-demo-runtime-output": { type: 'static', value: true } } },
                                                (parentElement: any) => [
                                                this.text('Client output giữ state, event và lifecycle.')
                                                ])
                                            );
                                            break;
                                        case 'css':
                                            reactiveContents.push(
                                            this.html(`Bshell154c3r1k21`, "p", parentElement,
                                                { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "runtime-result" }], attrs: { "data-demo-runtime-output": { type: 'static', value: true } } },
                                                (parentElement: any) => [
                                                this.text('Selector được gắn scope theo view.')
                                                ])
                                            );
                                            break;
                                        default:
                                            reactiveContents.push(
                                            this.html(`Bshell154c3r1k31`, "p", parentElement,
                                                { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "runtime-result" }], attrs: { "data-demo-runtime-output": { type: 'static', value: true } } },
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
                    this.html(`Bshell155`, "div", parentElement,
                        { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "card-grid" }, { type: 'binding', value: "is-hidden", factory: () => selectedPanel !== 'state', stateKeys: ["selectedPanel"] }], attrs: { "data-demo-panel": { type: 'static', value: "state" } } },
                        (parentElement: any) => [
                        this.include(`Bshell155c1`, 'web.modules.demo.featurecard', parentElement, ["count"], (parentElement: any) => ({
                                "number": "01",
                                "title": "Reactive state",
                                "source": "&#64;App.Helper.states({ count: 3 })",
                                "tone": "pink",
                                __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                                this.html(`Bshell155c11`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "counter-row" }] },
                                    (parentElement: any) => [
                                    this.html(`Bshell155c111`, "button", parentElement,
                                        { classes: [{ type: 'static', value: "s45d147d4" }], attrs: { "data-demo-count": { type: 'static', value: "decrease" }, "aria-label": { type: 'static', value: "Giảm count" } }, props: { "disabled": { type: 'binding', factory: () => count === 0, stateKeys: ["count"] } }, events: { click: [(event: any) => setCount(count - 1)] } },
                                        (parentElement: any) => [
                                        this.text('Giảm')
                                        ]),
                                    this.html(`Bshell155c112`, "strong", parentElement,
                                        { classes: [{ type: 'static', value: "s45d147d4" }], attrs: { "data-demo-count-output": { type: 'static', value: true } } },
                                        (parentElement: any) => [
                                        this.output(`Bshell155c112o1`, parentElement, true, ["count"], (parentElement: any) => count)
                                        ]),
                                    this.html(`Bshell155c113`, "button", parentElement,
                                        { classes: [{ type: 'static', value: "s45d147d4" }], attrs: { "data-demo-count": { type: 'static', value: "increase" }, "aria-label": { type: 'static', value: "Tăng count" } }, props: { "disabled": { type: 'binding', factory: () => count === MAX_COUNT, stateKeys: ["count"] } }, events: { click: [(event: any) => setCount(count + 1)] } },
                                        (parentElement: any) => [
                                        this.text('Tăng')
                                        ])
                                    ]),
                                this.html(`Bshell155c12`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "progress-track" }] },
                                    (parentElement: any) => [
                                    this.html(`Bshell155c121`, "i", parentElement, { classes: [{ type: 'static', value: "s45d147d4" }], styles: { "width": { type: 'binding', value: count * 10+'%', factory: () => count * 10+'%', stateKeys: ["count"] } } })
                                    ]),
                                this.html(`Bshell155c13`, "small", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('Giới hạn mẫu: 0–'),
                                    this.text(String(MAX_COUNT ?? ''))
                                    ])
                            ]
                            })),
                        this.include(`Bshell155c2`, 'web.modules.demo.featurecard', parentElement, ["setCount"], (parentElement: any) => ({
                                "number": "02",
                                "title": "Events & setup",
                                "source": "&#64;App.Helper.click(App.Helper.setCount(3)) · &lt;script setup&gt;",
                                "tone": "cyan",
                                __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                                this.html(`Bshell155c21`, "p", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('Event inline cập nhật state; khối setup bên dưới cũng khai báo method tái sử dụng.')
                                    ]),
                                this.html(`Bshell155c22`, "button", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }], events: { click: [(event: any) => setCount(3)] } },
                                    (parentElement: any) => [
                                    this.text('Đặt lại count')
                                    ]),
                                this.html(`Bshell155c23`, "button", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }], events: { dblclick: [(event: any) => setCount(MAX_COUNT)] } },
                                    (parentElement: any) => [
                                    this.text('Nhấp đúp để đạt tối đa')
                                    ])
                            ]
                            })),
                        this.include(`Bshell155c3`, 'web.modules.demo.featurecard', parentElement, [], (parentElement: any) => ({
                                "number": "09",
                                "title": "Props, import & children",
                                "source": "&#64;props · &#64;import · &#64;children",
                                "tone": "yellow",
                                __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                                this.html(`Bshell155c31`, "p", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('Chính khung này là component '),
                                    this.html(`Bshell155c311`, "code", parentElement,
                                        { classes: [{ type: 'static', value: "s45d147d4" }] },
                                        (parentElement: any) => [
                                        this.text('featurecard')
                                        ]),
                                    this.text(' được import. Tiêu đề và số là props; nội dung đoạn này đi qua slot '),
                                    this.html(`Bshell155c312`, "code", parentElement,
                                        { classes: [{ type: 'static', value: "s45d147d4" }] },
                                        (parentElement: any) => [
                                        this.text('@children')
                                        ]),
                                    this.text('.')
                                    ])
                            ]
                            }))
                        ])
                    ]),
                this.html(`Bshell16`, "section", parentElement,
                    { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "coverage" }], attrs: { "id": { type: 'static', value: "coverage" } } },
                    (parentElement: any) => [
                    this.html(`Bshell161`, "div", parentElement,
                        { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "section-title" }, { type: 'static', value: "section-title--small" }] },
                        (parentElement: any) => [
                        this.html(`Bshell1611`, "p", parentElement,
                            { classes: [{ type: 'static', value: "s45d147d4" }] },
                            (parentElement: any) => [
                            this.text('02 / Phạm vi hỗ trợ')
                            ]),
                        this.html(`Bshell1612`, "h2", parentElement,
                            { classes: [{ type: 'static', value: "s45d147d4" }] },
                            (parentElement: any) => [
                            this.text('Một bản đồ cú pháp,'),
                            this.html(`Bshell16121`, "br", parentElement, { classes: [{ type: 'static', value: "s45d147d4" }] }),
                            this.text('không phải danh sách trang trí.')
                            ])
                        ]),
                    this.html(`Bshell162`, "div", parentElement,
                        { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "coverage-grid" }] },
                        (parentElement: any) => [
                        this.html(`Bshell1621`, "article", parentElement,
                            { classes: [{ type: 'static', value: "s45d147d4" }] },
                            (parentElement: any) => [
                            this.html(`Bshell16211`, "h3", parentElement,
                                { classes: [{ type: 'static', value: "s45d147d4" }] },
                                (parentElement: any) => [
                                this.text('Declarations')
                                ]),
                            this.html(`Bshell16212`, "p", parentElement,
                                { classes: [{ type: 'static', value: "s45d147d4" }] },
                                (parentElement: any) => [
                                this.html(`Bshell162121`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@states')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162122`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@state')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162123`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@props')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162124`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@const')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162125`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@let')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162126`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@vars')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162127`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@import')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162128`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@await')
                                    ])
                                ]),
                            this.html(`Bshell16213`, "span", parentElement,
                                { classes: [{ type: 'static', value: "s45d147d4" }] },
                                (parentElement: any) => [
                                this.text('Được minh họa trực tiếp hoặc dùng trong source của module.')
                                ])
                            ]),
                        this.html(`Bshell1622`, "article", parentElement,
                            { classes: [{ type: 'static', value: "s45d147d4" }] },
                            (parentElement: any) => [
                            this.html(`Bshell16221`, "h3", parentElement,
                                { classes: [{ type: 'static', value: "s45d147d4" }] },
                                (parentElement: any) => [
                                this.text('Template')
                                ]),
                            this.html(`Bshell16222`, "p", parentElement,
                                { classes: [{ type: 'static', value: "s45d147d4" }] },
                                (parentElement: any) => [
                                this.html(`Bshell162221`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@extends')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162222`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@block')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162223`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@section')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162224`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@yield')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162225`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@include')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162226`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@children')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162227`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@exec')
                                    ])
                                ]),
                            this.html(`Bshell16223`, "span", parentElement,
                                { classes: [{ type: 'static', value: "s45d147d4" }] },
                                (parentElement: any) => [
                                this.text('Trang dùng layout, block và component slot thực.')
                                ])
                            ]),
                        this.html(`Bshell1623`, "article", parentElement,
                            { classes: [{ type: 'static', value: "s45d147d4" }] },
                            (parentElement: any) => [
                            this.html(`Bshell16231`, "h3", parentElement,
                                { classes: [{ type: 'static', value: "s45d147d4" }] },
                                (parentElement: any) => [
                                this.text('Control flow')
                                ]),
                            this.html(`Bshell16232`, "p", parentElement,
                                { classes: [{ type: 'static', value: "s45d147d4" }] },
                                (parentElement: any) => [
                                this.html(`Bshell162321`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@if')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162322`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@foreach')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162323`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@for')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162324`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@while')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162325`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@switch')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162326`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@break')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162327`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@continue')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162328`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@ssr')
                                    ])
                                ]),
                            this.html(`Bshell16233`, "span", parentElement,
                                { classes: [{ type: 'static', value: "s45d147d4" }] },
                                (parentElement: any) => [
                                this.text('If, foreach, for và switch chạy trong tab Control flow.')
                                ])
                            ]),
                        this.html(`Bshell1624`, "article", parentElement,
                            { classes: [{ type: 'static', value: "s45d147d4" }] },
                            (parentElement: any) => [
                            this.html(`Bshell16241`, "h3", parentElement,
                                { classes: [{ type: 'static', value: "s45d147d4" }] },
                                (parentElement: any) => [
                                this.text('Bindings')
                                ]),
                            this.html(`Bshell16242`, "p", parentElement,
                                { classes: [{ type: 'static', value: "s45d147d4" }] },
                                (parentElement: any) => [
                                this.html(`Bshell162421`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@attr')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162422`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@class')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162423`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@style')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162424`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@bind')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162425`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@val')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162426`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@show')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162427`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@hide')
                                    ]),
                                this.text(', boolean attributes')
                                ]),
                            this.html(`Bshell16243`, "span", parentElement,
                                { classes: [{ type: 'static', value: "s45d147d4" }] },
                                (parentElement: any) => [
                                this.text('Tab Binding cho phép kiểm tra trực tiếp.')
                                ])
                            ]),
                        this.html(`Bshell1625`, "article", parentElement,
                            { classes: [{ type: 'static', value: "s45d147d4" }] },
                            (parentElement: any) => [
                            this.html(`Bshell16251`, "h3", parentElement,
                                { classes: [{ type: 'static', value: "s45d147d4" }] },
                                (parentElement: any) => [
                                this.text('Forms & access')
                                ]),
                            this.html(`Bshell16252`, "p", parentElement,
                                { classes: [{ type: 'static', value: "s45d147d4" }] },
                                (parentElement: any) => [
                                this.html(`Bshell162521`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@csrf')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162522`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@method')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162523`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@auth')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162524`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@guest')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162525`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@can')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162526`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@cannot')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162527`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('@error')
                                    ])
                                ]),
                            this.html(`Bshell16253`, "span", parentElement,
                                { classes: [{ type: 'static', value: "s45d147d4" }] },
                                (parentElement: any) => [
                                this.text('Nhóm này cần request, session hoặc policy thật nên được kiểm chứng theo context ứng dụng.')
                                ])
                            ]),
                        this.html(`Bshell1626`, "article", parentElement,
                            { classes: [{ type: 'static', value: "s45d147d4" }] },
                            (parentElement: any) => [
                            this.html(`Bshell16261`, "h3", parentElement,
                                { classes: [{ type: 'static', value: "s45d147d4" }] },
                                (parentElement: any) => [
                                this.text('Component blocks')
                                ]),
                            this.html(`Bshell16262`, "p", parentElement,
                                { classes: [{ type: 'static', value: "s45d147d4" }] },
                                (parentElement: any) => [
                                this.html(`Bshell162621`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('<script setup lang="ts">')
                                    ]),
                                this.text(', '),
                                this.html(`Bshell162622`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "s45d147d4" }] },
                                    (parentElement: any) => [
                                    this.text('<style scoped>')
                                    ]),
                                this.text(', magic variables và wrapper modern / legacy')
                                ]),
                            this.html(`Bshell16263`, "span", parentElement,
                                { classes: [{ type: 'static', value: "s45d147d4" }] },
                                (parentElement: any) => [
                                this.text('Module này dùng wrapper modern, TypeScript setup và scoped CSS.')
                                ])
                            ])
                        ])
                    ]),
                this.html(`Bshell17`, "footer", parentElement,
                    { classes: [{ type: 'static', value: "s45d147d4" }, { type: 'static', value: "demo-footer" }] },
                    (parentElement: any) => [
                    this.html(`Bshell171`, "p", parentElement,
                        { classes: [{ type: 'static', value: "s45d147d4" }] },
                        (parentElement: any) => [
                        this.text('Fixture: '),
                        this.html(`Bshell1711`, "code", parentElement,
                            { classes: [{ type: 'static', value: "s45d147d4" }] },
                            (parentElement: any) => [
                            this.text('web.modules.demo.index')
                            ])
                        ]),
                    this.html(`Bshell172`, "a", parentElement,
                        { classes: [{ type: 'static', value: "s45d147d4" }], attrs: { "href": { type: 'static', value: "/" } } },
                        (parentElement: any) => [
                        this.text('Về trang chủ')
                        ])
                    ]),
                this.output(`Bshell1o1`, parentElement, false, [], (parentElement: any) => DEMO_SCRIPT)
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