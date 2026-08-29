import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.home.parts.how';
const __VIEW_NAMESPACE__ = 'web.modules.home.parts.';
const __VIEW_TYPE__ = 'view';
const __VIEW_CONFIG__ = {
    hasSuperView: false,
    viewType: 'view',
    sections: {},
    wrapperConfig: { enable: false, tag: null, subscribe: true, attributes: {} },
    hasAwaitData: false,
    hasFetchData: false,
    usesVars: false,
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
export interface HowProps {
    /** viewId server gán khi hydrate */
    __SSR_VIEW_ID__?: string;
    [key: string]: any;
}



class HowViewController extends ViewController {
    constructor(view: View) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this as any).setStaticConfig === 'function') {
            (this as any).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this as any).config = __VIEW_CONFIG__;
        }
    }
}

class HowView extends View {
    constructor(__data__: any = {}, systemData: any = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, HowViewController);
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
        const set$demoStep = __STATE__.__.register('demoStep');
        let demoStep: any = 1;
        const setDemoStep = (state: any) => {
            demoStep = state;
            set$demoStep(state);
        };
        __STATE__.__.setters.setDemoStep = setDemoStep;
        __STATE__.__.setters.demoStep = setDemoStep;
        const update$demoStep = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('demoStep', value);
                demoStep = value;
            }
        };
        const set$likes = __STATE__.__.register('likes');
        let likes: any = 12;
        const setLikes = (state: any) => {
            likes = state;
            set$likes(state);
        };
        __STATE__.__.setters.setLikes = setLikes;
        __STATE__.__.setters.likes = setLikes;
        const update$likes = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('likes', value);
                likes = value;
            }
        };
        const __VARIABLE_LIST__: any = [];


        this.__ctrl__.setUserDefinedConfig({
            name: 'HomeHow'
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
                update$demoStep(1);
                update$likes(12);
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
            this.html(`e1`, "section", parentElement,
                { classes: [{ type: 'static', value: "dx" }], attrs: { "id": { type: 'static', value: "how" } } },
                (parentElement: any) => [
                this.html(`e11`, "div", parentElement,
                    { classes: [{ type: 'static', value: "dx-head" }] },
                    (parentElement: any) => [
                    this.html(`e111`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`e1111`, "p", parentElement,
                            { classes: [{ type: 'static', value: "dx-label" }] },
                            (parentElement: any) => [
                            this.text('Cơ chế hoạt động')
                            ]),
                        this.html(`e1112`, "h2", parentElement, {}, (parentElement: any) => [
                            this.text('Một mã nguồn duy nhất,'),
                            this.html(`e11121`, "br", parentElement, {}),
                            this.text('đi qua ba trạng thái.')
                        ])
                    ]),
                    this.html(`e112`, "p", parentElement,
                        { classes: [{ type: 'static', value: "dx-sub" }] },
                        (parentElement: any) => [
                        this.text('Không có \'phép thuật\' nào bị giấu kín. Bấm qua từng trạng thái để xem chính xác những gì trình biên dịch tạo ra và cách trình duyệt tiếp quản DOM.')
                        ])
                    ]),
                this.html(`e12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "dx-tabs" }], attrs: { "role": { type: 'static', value: "tablist" }, "aria-label": { type: 'static', value: "Ba trạng thái của một view" } } },
                    (parentElement: any) => [
                    this.html(`e121`, "button", parentElement,
                        { classes: [{ type: 'static', value: "dx-tab" }, { type: 'binding', value: "is-on", factory: () => demoStep === 1, stateKeys: ["demoStep"] }], attrs: { "type": { type: 'static', value: "button" }, "role": { type: 'static', value: "tab" } }, events: { click: [(event: any) => setDemoStep(1)] } },
                        (parentElement: any) => [
                        this.html(`e1211`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('01')
                        ]),
                        this.text(' Mã bạn viết')
                        ]),
                    this.html(`e122`, "button", parentElement,
                        { classes: [{ type: 'static', value: "dx-tab" }, { type: 'binding', value: "is-on", factory: () => demoStep === 2, stateKeys: ["demoStep"] }], attrs: { "type": { type: 'static', value: "button" }, "role": { type: 'static', value: "tab" } }, events: { click: [(event: any) => setDemoStep(2)] } },
                        (parentElement: any) => [
                        this.html(`e1221`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('02')
                        ]),
                        this.text(' Compiler sinh ra')
                        ]),
                    this.html(`e123`, "button", parentElement,
                        { classes: [{ type: 'static', value: "dx-tab" }, { type: 'binding', value: "is-on", factory: () => demoStep === 3, stateKeys: ["demoStep"] }], attrs: { "type": { type: 'static', value: "button" }, "role": { type: 'static', value: "tab" } }, events: { click: [(event: any) => setDemoStep(3)] } },
                        (parentElement: any) => [
                        this.html(`e1231`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('03')
                        ]),
                        this.text(' Trang hoạt động')
                        ])
                    ]),
                this.html(`e13`, "div", parentElement,
                    { classes: [{ type: 'static', value: "dx-panel" }] },
                    (parentElement: any) => [
                    this.reactive(`e13r1`, "if", parentReactive, parentElement, ["demoStep"], (parentReactive: any, parentElement: any) => {
                        const reactiveContents = [];
                        if (demoStep === 1) {
                            reactiveContents.push(
                            this.html(`e13r1k11`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dx-stage" }, { type: 'static', value: "dx-stage-one" }] },
                                (parentElement: any) => [
                                this.html(`e13r1k111`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "dx-win" }] },
                                    (parentElement: any) => [
                                    this.html(`e13r1k1111`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "dx-win-bar" }] },
                                        (parentElement: any) => [
                                        this.html(`e13r1k11111`, "span", parentElement, {}, (parentElement: any) => [
                                            this.text('NGUỒN')
                                        ]),
                                        this.html(`e13r1k11112`, "b", parentElement, {}, (parentElement: any) => [
                                            this.text('user.sao')
                                        ])
                                        ]),
                                    this.html(`e13r1k1112`, "pre", parentElement, {}, (parentElement: any) => [
                                        this.html(`e13r1k11121`, "code", parentElement, {}, (parentElement: any) => [
                                            this.html(`e13r1k111211`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r1k1112111`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "kw" }] },
                                                    (parentElement: any) => [
                                                    this.text('@states')
                                                    ]),
                                                this.html(`e13r1k1112112`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('({')
                                                    ]),
                                                this.html(`e13r1k1112113`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "vr" }] },
                                                    (parentElement: any) => [
                                                    this.text(' likes')
                                                    ]),
                                                this.html(`e13r1k1112114`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text(':')
                                                    ]),
                                                this.html(`e13r1k1112115`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "st" }] },
                                                    (parentElement: any) => [
                                                    this.text(' 12')
                                                    ]),
                                                this.html(`e13r1k1112116`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text(' })')
                                                    ])
                                                ]),
                                            this.html(`e13r1k111212`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-line-gap" }] }),
                                            this.html(`e13r1k111213`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r1k1112131`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('<')
                                                    ]),
                                                this.html(`e13r1k1112132`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "kw" }] },
                                                    (parentElement: any) => [
                                                    this.text('template')
                                                    ]),
                                                this.html(`e13r1k1112133`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('>')
                                                    ])
                                                ]),
                                            this.html(`e13r1k111214`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r1k1112141`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('<')
                                                    ]),
                                                this.html(`e13r1k1112142`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "fn" }] },
                                                    (parentElement: any) => [
                                                    this.text('article')
                                                    ]),
                                                this.html(`e13r1k1112143`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "vr" }] },
                                                    (parentElement: any) => [
                                                    this.text(' class')
                                                    ]),
                                                this.html(`e13r1k1112144`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('=')
                                                    ]),
                                                this.html(`e13r1k1112145`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "st" }] },
                                                    (parentElement: any) => [
                                                    this.text('"card"')
                                                    ]),
                                                this.html(`e13r1k1112146`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('>')
                                                    ])
                                                ]),
                                            this.html(`e13r1k111215`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r1k1112151`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('<')
                                                    ]),
                                                this.html(`e13r1k1112152`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "fn" }] },
                                                    (parentElement: any) => [
                                                    this.text('h3')
                                                    ]),
                                                this.html(`e13r1k1112153`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('>')
                                                    ]),
                                                this.text('Saola runtime'),
                                                this.html(`e13r1k1112154`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('</')
                                                    ]),
                                                this.html(`e13r1k1112155`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "fn" }] },
                                                    (parentElement: any) => [
                                                    this.text('h3')
                                                    ]),
                                                this.html(`e13r1k1112156`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('>')
                                                    ])
                                                ]),
                                            this.html(`e13r1k111216`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r1k1112161`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('<')
                                                    ]),
                                                this.html(`e13r1k1112162`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "fn" }] },
                                                    (parentElement: any) => [
                                                    this.text('button')
                                                    ]),
                                                this.html(`e13r1k1112163`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "kw" }] },
                                                    (parentElement: any) => [
                                                    this.text(' @click')
                                                    ]),
                                                this.html(`e13r1k1112164`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('(')
                                                    ]),
                                                this.html(`e13r1k1112165`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "fn" }] },
                                                    (parentElement: any) => [
                                                    this.text('setLikes')
                                                    ]),
                                                this.html(`e13r1k1112166`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('(')
                                                    ]),
                                                this.html(`e13r1k1112167`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "vr" }] },
                                                    (parentElement: any) => [
                                                    this.text('likes')
                                                    ]),
                                                this.html(`e13r1k1112168`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text(' +')
                                                    ]),
                                                this.html(`e13r1k1112169`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "st" }] },
                                                    (parentElement: any) => [
                                                    this.text(' 1')
                                                    ]),
                                                this.html(`e13r1k111216e10_`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('))>')
                                                    ])
                                                ]),
                                            this.html(`e13r1k111217`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-3" }] },
                                                (parentElement: any) => [
                                                this.text('♥ '),
                                                this.html(`e13r1k1112171`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "mustache-token" }] },
                                                    (parentElement: any) => [
                                                    this.html(`e13r1k11121711`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "vr" }] },
                                                        (parentElement: any) => [
                                                        this.text('likes')
                                                        ])
                                                    ])
                                                ]),
                                            this.html(`e13r1k111218`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r1k1112181`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('</')
                                                    ]),
                                                this.html(`e13r1k1112182`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "fn" }] },
                                                    (parentElement: any) => [
                                                    this.text('button')
                                                    ]),
                                                this.html(`e13r1k1112183`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('>')
                                                    ])
                                                ]),
                                            this.html(`e13r1k111219`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r1k1112191`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('</')
                                                    ]),
                                                this.html(`e13r1k1112192`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "fn" }] },
                                                    (parentElement: any) => [
                                                    this.text('article')
                                                    ]),
                                                this.html(`e13r1k1112193`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('>')
                                                    ])
                                                ]),
                                            this.html(`e13r1k11121e10_`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r1k11121e10_1`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('</')
                                                    ]),
                                                this.html(`e13r1k11121e10_2`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "kw" }] },
                                                    (parentElement: any) => [
                                                    this.text('template')
                                                    ]),
                                                this.html(`e13r1k11121e10_3`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('>')
                                                    ])
                                                ])
                                        ])
                                    ])
                                    ]),
                                this.html(`e13r1k112`, "p", parentElement,
                                    { classes: [{ type: 'static', value: "dx-note" }] },
                                    (parentElement: any) => [
                                    this.text('State được khai báo gọn gàng ở đầu file. Hàm setter '),
                                    this.html(`e13r1k1121`, "code", parentElement, {}, (parentElement: any) => [
                                        this.text('setLikes')
                                    ]),
                                    this.text(' được sinh tự động từ tên state — không cần store phức tạp, không viết reducer, không cần tạo file riêng.')
                                    ])
                                ])
                            );
                        }
                        return reactiveContents;
                    }),
                    this.reactive(`e13r2`, "if", parentReactive, parentElement, ["demoStep"], (parentReactive: any, parentElement: any) => {
                        const reactiveContents = [];
                        if (demoStep === 2) {
                            reactiveContents.push(
                            this.html(`e13r2k11`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dx-stage" }, { type: 'static', value: "dx-stage-two" }] },
                                (parentElement: any) => [
                                this.html(`e13r2k111`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "dx-win" }] },
                                    (parentElement: any) => [
                                    this.html(`e13r2k1111`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "dx-win-bar" }] },
                                        (parentElement: any) => [
                                        this.html(`e13r2k11111`, "span", parentElement, {}, (parentElement: any) => [
                                            this.text('SERVER')
                                        ]),
                                        this.html(`e13r2k11112`, "b", parentElement, {}, (parentElement: any) => [
                                            this.text('user.blade.php')
                                        ])
                                        ]),
                                    this.html(`e13r2k1112`, "pre", parentElement, {}, (parentElement: any) => [
                                        this.html(`e13r2k11121`, "code", parentElement, {}, (parentElement: any) => [
                                            this.html(`e13r2k111211`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r2k1112111`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "kw" }] },
                                                    (parentElement: any) => [
                                                    this.text('@wrapper')
                                                    ])
                                                ]),
                                            this.html(`e13r2k111212`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r2k1112121`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('<')
                                                    ]),
                                                this.html(`e13r2k1112122`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "fn" }] },
                                                    (parentElement: any) => [
                                                    this.text('article')
                                                    ]),
                                                this.html(`e13r2k1112123`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "kw" }] },
                                                    (parentElement: any) => [
                                                    this.text(' @class')
                                                    ]),
                                                this.html(`e13r2k1112124`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('([')
                                                    ]),
                                                this.html(`e13r2k1112125`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "vr" }] },
                                                    (parentElement: any) => [
                                                    this.text('$__VIEW_ID__')
                                                    ]),
                                                this.html(`e13r2k1112126`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text(' .')
                                                    ]),
                                                this.html(`e13r2k1112127`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "st" }] },
                                                    (parentElement: any) => [
                                                    this.text(' \'-8a4e\'')
                                                    ]),
                                                this.html(`e13r2k1112128`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text(',')
                                                    ]),
                                                this.html(`e13r2k1112129`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "st" }] },
                                                    (parentElement: any) => [
                                                    this.text(' \'card\'')
                                                    ]),
                                                this.html(`e13r2k111212e10_`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('])>')
                                                    ])
                                                ]),
                                            this.html(`e13r2k111213`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r2k1112131`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('<')
                                                    ]),
                                                this.html(`e13r2k1112132`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "fn" }] },
                                                    (parentElement: any) => [
                                                    this.text('h3')
                                                    ]),
                                                this.html(`e13r2k1112133`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('>')
                                                    ]),
                                                this.text('Saola runtime'),
                                                this.html(`e13r2k1112134`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('</')
                                                    ]),
                                                this.html(`e13r2k1112135`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "fn" }] },
                                                    (parentElement: any) => [
                                                    this.text('h3')
                                                    ]),
                                                this.html(`e13r2k1112136`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('>')
                                                    ])
                                                ]),
                                            this.html(`e13r2k111214`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r2k1112141`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('<')
                                                    ]),
                                                this.html(`e13r2k1112142`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "fn" }] },
                                                    (parentElement: any) => [
                                                    this.text('button')
                                                    ]),
                                                this.html(`e13r2k1112143`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('>')
                                                    ])
                                                ]),
                                            this.html(`e13r2k111215`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                                (parentElement: any) => [
                                                this.text('♥ '),
                                                this.html(`e13r2k1112151`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "kw" }] },
                                                    (parentElement: any) => [
                                                    this.text('@startMarker')
                                                    ]),
                                                this.html(`e13r2k1112152`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('(')
                                                    ]),
                                                this.html(`e13r2k1112153`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "st" }] },
                                                    (parentElement: any) => [
                                                    this.text('\'output\'')
                                                    ]),
                                                this.html(`e13r2k1112154`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text(',')
                                                    ]),
                                                this.html(`e13r2k1112155`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "st" }] },
                                                    (parentElement: any) => [
                                                    this.text(' \'k2f1\'')
                                                    ]),
                                                this.html(`e13r2k1112156`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text(')')
                                                    ])
                                                ]),
                                            this.html(`e13r2k111216`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r2k1112161`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "mustache-token" }] },
                                                    (parentElement: any) => [
                                                    this.html(`e13r2k11121611`, "span", parentElement,
                                                        { classes: [{ type: 'static', value: "vr" }] },
                                                        (parentElement: any) => [
                                                        this.text('$likes')
                                                        ])
                                                    ])
                                                ]),
                                            this.html(`e13r2k111217`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r2k1112171`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "kw" }] },
                                                    (parentElement: any) => [
                                                    this.text('@endMarker')
                                                    ]),
                                                this.html(`e13r2k1112172`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('(')
                                                    ]),
                                                this.html(`e13r2k1112173`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "st" }] },
                                                    (parentElement: any) => [
                                                    this.text('\'output\'')
                                                    ]),
                                                this.html(`e13r2k1112174`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text(',')
                                                    ]),
                                                this.html(`e13r2k1112175`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "st" }] },
                                                    (parentElement: any) => [
                                                    this.text(' \'k2f1\'')
                                                    ]),
                                                this.html(`e13r2k1112176`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text(')')
                                                    ])
                                                ]),
                                            this.html(`e13r2k111218`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r2k1112181`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('</')
                                                    ]),
                                                this.html(`e13r2k1112182`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "fn" }] },
                                                    (parentElement: any) => [
                                                    this.text('button')
                                                    ]),
                                                this.html(`e13r2k1112183`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('>')
                                                    ])
                                                ]),
                                            this.html(`e13r2k111219`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r2k1112191`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('</')
                                                    ]),
                                                this.html(`e13r2k1112192`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "fn" }] },
                                                    (parentElement: any) => [
                                                    this.text('article')
                                                    ]),
                                                this.html(`e13r2k1112193`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('>')
                                                    ])
                                                ]),
                                            this.html(`e13r2k11121e10_`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r2k11121e10_1`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "kw" }] },
                                                    (parentElement: any) => [
                                                    this.text('@endWrapper')
                                                    ])
                                                ])
                                        ])
                                    ])
                                    ]),
                                this.html(`e13r2k112`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "dx-win" }, { type: 'static', value: "dx-win-dark" }] },
                                    (parentElement: any) => [
                                    this.html(`e13r2k1121`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "dx-win-bar" }] },
                                        (parentElement: any) => [
                                        this.html(`e13r2k11211`, "span", parentElement, {}, (parentElement: any) => [
                                            this.text('CLIENT')
                                        ]),
                                        this.html(`e13r2k11212`, "b", parentElement, {}, (parentElement: any) => [
                                            this.text('user.js')
                                        ])
                                        ]),
                                    this.html(`e13r2k1122`, "pre", parentElement, {}, (parentElement: any) => [
                                        this.html(`e13r2k11221`, "code", parentElement, {}, (parentElement: any) => [
                                            this.html(`e13r2k112211`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r2k1122111`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "kw" }] },
                                                    (parentElement: any) => [
                                                    this.text('const')
                                                    ]),
                                                this.html(`e13r2k1122112`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "fn" }] },
                                                    (parentElement: any) => [
                                                    this.text(' set$likes')
                                                    ]),
                                                this.html(`e13r2k1122113`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text(' =')
                                                    ]),
                                                this.html(`e13r2k1122114`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "vr" }] },
                                                    (parentElement: any) => [
                                                    this.text(' __STATE__')
                                                    ]),
                                                this.html(`e13r2k1122115`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('.')
                                                    ]),
                                                this.html(`e13r2k1122116`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "vr" }] },
                                                    (parentElement: any) => [
                                                    this.text('__')
                                                    ]),
                                                this.html(`e13r2k1122117`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('.')
                                                    ]),
                                                this.html(`e13r2k1122118`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "fn" }] },
                                                    (parentElement: any) => [
                                                    this.text('register')
                                                    ]),
                                                this.html(`e13r2k1122119`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('(')
                                                    ]),
                                                this.html(`e13r2k112211e10_`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "st" }] },
                                                    (parentElement: any) => [
                                                    this.text('\'likes\'')
                                                    ]),
                                                this.html(`e13r2k112211e11_`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text(');')
                                                    ])
                                                ]),
                                            this.html(`e13r2k112212`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r2k1122121`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "kw" }] },
                                                    (parentElement: any) => [
                                                    this.text('let')
                                                    ]),
                                                this.html(`e13r2k1122122`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "vr" }] },
                                                    (parentElement: any) => [
                                                    this.text(' likes')
                                                    ]),
                                                this.html(`e13r2k1122123`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text(':')
                                                    ]),
                                                this.html(`e13r2k1122124`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "ty" }] },
                                                    (parentElement: any) => [
                                                    this.text(' any')
                                                    ]),
                                                this.html(`e13r2k1122125`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text(' =')
                                                    ]),
                                                this.html(`e13r2k1122126`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "st" }] },
                                                    (parentElement: any) => [
                                                    this.text(' 12')
                                                    ]),
                                                this.html(`e13r2k1122127`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text(';')
                                                    ])
                                                ]),
                                            this.html(`e13r2k112213`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-line-gap" }] }),
                                            this.html(`e13r2k112214`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r2k1122141`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "kw" }] },
                                                    (parentElement: any) => [
                                                    this.text('const')
                                                    ]),
                                                this.html(`e13r2k1122142`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "fn" }] },
                                                    (parentElement: any) => [
                                                    this.text(' setLikes')
                                                    ]),
                                                this.html(`e13r2k1122143`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text(' = (')
                                                    ]),
                                                this.html(`e13r2k1122144`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "vr" }] },
                                                    (parentElement: any) => [
                                                    this.text('state')
                                                    ]),
                                                this.html(`e13r2k1122145`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text(':')
                                                    ]),
                                                this.html(`e13r2k1122146`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "ty" }] },
                                                    (parentElement: any) => [
                                                    this.text(' any')
                                                    ]),
                                                this.html(`e13r2k1122147`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text(') => {')
                                                    ])
                                                ]),
                                            this.html(`e13r2k112215`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r2k1122151`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "vr" }] },
                                                    (parentElement: any) => [
                                                    this.text('likes')
                                                    ]),
                                                this.html(`e13r2k1122152`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text(' =')
                                                    ]),
                                                this.html(`e13r2k1122153`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "vr" }] },
                                                    (parentElement: any) => [
                                                    this.text(' state')
                                                    ]),
                                                this.html(`e13r2k1122154`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text(';')
                                                    ])
                                                ]),
                                            this.html(`e13r2k112216`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r2k1122161`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "fn" }] },
                                                    (parentElement: any) => [
                                                    this.text('set$likes')
                                                    ]),
                                                this.html(`e13r2k1122162`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('(')
                                                    ]),
                                                this.html(`e13r2k1122163`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "vr" }] },
                                                    (parentElement: any) => [
                                                    this.text('state')
                                                    ]),
                                                this.html(`e13r2k1122164`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text(');')
                                                    ])
                                                ]),
                                            this.html(`e13r2k112217`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r2k1122171`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('};')
                                                    ])
                                                ]),
                                            this.html(`e13r2k112218`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r2k1122181`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "vr" }] },
                                                    (parentElement: any) => [
                                                    this.text('__STATE__')
                                                    ]),
                                                this.html(`e13r2k1122182`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('.')
                                                    ]),
                                                this.html(`e13r2k1122183`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "vr" }] },
                                                    (parentElement: any) => [
                                                    this.text('__')
                                                    ]),
                                                this.html(`e13r2k1122184`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('.')
                                                    ]),
                                                this.html(`e13r2k1122185`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "vr" }] },
                                                    (parentElement: any) => [
                                                    this.text('setters')
                                                    ]),
                                                this.html(`e13r2k1122186`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('.')
                                                    ]),
                                                this.html(`e13r2k1122187`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "vr" }] },
                                                    (parentElement: any) => [
                                                    this.text('setLikes')
                                                    ]),
                                                this.html(`e13r2k1122188`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text(' =')
                                                    ]),
                                                this.html(`e13r2k1122189`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "fn" }] },
                                                    (parentElement: any) => [
                                                    this.text(' setLikes')
                                                    ]),
                                                this.html(`e13r2k112218e10_`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text(';')
                                                    ])
                                                ])
                                        ])
                                    ])
                                    ]),
                                this.html(`e13r2k113`, "p", parentElement,
                                    { classes: [{ type: 'static', value: "dx-note" }, { type: 'static', value: "dx-note-wide" }] },
                                    (parentElement: any) => [
                                    this.text('Cùng một cây AST sinh ra cả hai phiên bản. Blade giữ các marker để đánh dấu vùng dữ liệu động; JavaScript giữ lại đúng tên setter bạn đã viết. (Đây là mã rút gọn để minh hoạ — file thực tế dài hơn, nhưng hoàn toàn tự động sinh).')
                                    ])
                                ])
                            );
                        }
                        return reactiveContents;
                    }),
                    this.reactive(`e13r3`, "if", parentReactive, parentElement, ["demoStep"], (parentReactive: any, parentElement: any) => {
                        const reactiveContents = [];
                        if (demoStep === 3) {
                            reactiveContents.push(
                            this.html(`e13r3k11`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dx-stage" }, { type: 'static', value: "dx-stage-three" }] },
                                (parentElement: any) => [
                                this.html(`e13r3k111`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "dx-win" }] },
                                    (parentElement: any) => [
                                    this.html(`e13r3k1111`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "dx-win-bar" }] },
                                        (parentElement: any) => [
                                        this.html(`e13r3k11111`, "span", parentElement, {}, (parentElement: any) => [
                                            this.text('TRÊN DÂY')
                                        ]),
                                        this.html(`e13r3k11112`, "b", parentElement, {}, (parentElement: any) => [
                                            this.text('HTML server gửi xuống')
                                        ])
                                        ]),
                                    this.html(`e13r3k1112`, "pre", parentElement, {}, (parentElement: any) => [
                                        this.html(`e13r3k11121`, "code", parentElement, {}, (parentElement: any) => [
                                            this.html(`e13r3k111211`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r3k1112111`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('<')
                                                    ]),
                                                this.html(`e13r3k1112112`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "fn" }] },
                                                    (parentElement: any) => [
                                                    this.text('article')
                                                    ]),
                                                this.html(`e13r3k1112113`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "vr" }] },
                                                    (parentElement: any) => [
                                                    this.text(' class')
                                                    ]),
                                                this.html(`e13r3k1112114`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('=')
                                                    ]),
                                                this.html(`e13r3k1112115`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "st" }] },
                                                    (parentElement: any) => [
                                                    this.text('"v7c1-8a4e card"')
                                                    ]),
                                                this.html(`e13r3k1112116`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('>')
                                                    ])
                                                ]),
                                            this.html(`e13r3k111212`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r3k1112121`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('<')
                                                    ]),
                                                this.html(`e13r3k1112122`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "fn" }] },
                                                    (parentElement: any) => [
                                                    this.text('h3')
                                                    ]),
                                                this.html(`e13r3k1112123`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('>')
                                                    ]),
                                                this.text('Saola runtime'),
                                                this.html(`e13r3k1112124`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('</')
                                                    ]),
                                                this.html(`e13r3k1112125`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "fn" }] },
                                                    (parentElement: any) => [
                                                    this.text('h3')
                                                    ]),
                                                this.html(`e13r3k1112126`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('>')
                                                    ])
                                                ]),
                                            this.html(`e13r3k111213`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r3k1112131`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('<')
                                                    ]),
                                                this.html(`e13r3k1112132`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "fn" }] },
                                                    (parentElement: any) => [
                                                    this.text('button')
                                                    ]),
                                                this.html(`e13r3k1112133`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('>')
                                                    ])
                                                ]),
                                            this.html(`e13r3k111214`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                                (parentElement: any) => [
                                                this.text('♥ '),
                                                this.html(`e13r3k1112141`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "cm" }] },
                                                    (parentElement: any) => [
                                                    this.text('<!--s:o:{id}-s-->')
                                                    ])
                                                ]),
                                            this.html(`e13r3k111215`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r3k1112151`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "st" }] },
                                                    (parentElement: any) => [
                                                    this.text('12')
                                                    ])
                                                ]),
                                            this.html(`e13r3k111216`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r3k1112161`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "cm" }] },
                                                    (parentElement: any) => [
                                                    this.text('<!--s:o:{id}-e-->')
                                                    ])
                                                ]),
                                            this.html(`e13r3k111217`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r3k1112171`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('</')
                                                    ]),
                                                this.html(`e13r3k1112172`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "fn" }] },
                                                    (parentElement: any) => [
                                                    this.text('button')
                                                    ]),
                                                this.html(`e13r3k1112173`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('>')
                                                    ])
                                                ]),
                                            this.html(`e13r3k111218`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "code-line" }] },
                                                (parentElement: any) => [
                                                this.html(`e13r3k1112181`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('</')
                                                    ]),
                                                this.html(`e13r3k1112182`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "fn" }] },
                                                    (parentElement: any) => [
                                                    this.text('article')
                                                    ]),
                                                this.html(`e13r3k1112183`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "op" }] },
                                                    (parentElement: any) => [
                                                    this.text('>')
                                                    ])
                                                ])
                                        ])
                                    ])
                                    ]),
                                this.html(`e13r3k112`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "dx-live" }] },
                                    (parentElement: any) => [
                                    this.html(`e13r3k1121`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "dx-live-tag" }] },
                                        (parentElement: any) => [
                                        this.html(`e13r3k11211`, "i", parentElement, {}),
                                        this.text(' Đang chạy trên trang này')
                                        ]),
                                    this.html(`e13r3k1122`, "article", parentElement,
                                        { classes: [{ type: 'static', value: "dx-card" }] },
                                        (parentElement: any) => [
                                        this.html(`e13r3k11221`, "h3", parentElement, {}, (parentElement: any) => [
                                            this.text('Saola runtime')
                                        ]),
                                        this.html(`e13r3k11222`, "button", parentElement,
                                            { classes: [{ type: 'static', value: "dx-heart" }], attrs: { "type": { type: 'static', value: "button" } }, events: { click: [(event: any) => setLikes(likes + 1)] } },
                                            (parentElement: any) => [
                                            this.text('♥ '),
                                            this.output(`e13r3k11222o1`, parentElement, true, ["likes"], (parentElement: any) => likes)
                                            ])
                                        ]),
                                    this.html(`e13r3k1123`, "p", parentElement, {}, (parentElement: any) => [
                                        this.text('Crawler và người dùng đều nhận được kết quả '),
                                        this.html(`e13r3k11231`, "strong", parentElement, {}, (parentElement: any) => [
                                            this.text('12')
                                        ]),
                                        this.text(' ngay từ byte đầu tiên. Runtime phía client tìm các marker, kết nối lại (hydrate) đúng element đó và tiếp quản vòng đời — hoàn toàn không gọi '),
                                        this.html(`e13r3k11232`, "code", parentElement, {}, (parentElement: any) => [
                                            this.text('appendChild')
                                        ]),
                                        this.text(' dư thừa, không chớp giật màn hình.')
                                    ])
                                    ])
                                ])
                            );
                        }
                        return reactiveContents;
                    })
                    ])
                ])
            ]);
            }
        });

    }
}

// Export factory function
export function WebModulesHomePartsHow(__data__ = {}, systemData = {}): HowView {
    return new HowView(__data__, systemData);
}
export default WebModulesHomePartsHow;