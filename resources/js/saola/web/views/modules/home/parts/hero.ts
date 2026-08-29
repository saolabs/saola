import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.home.parts.hero';
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
export interface HeroProps {
    /** viewId server gán khi hydrate */
    __SSR_VIEW_ID__?: string;
    [key: string]: any;
}



class HeroViewController extends ViewController {
    constructor(view: View) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this as any).setStaticConfig === 'function') {
            (this as any).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this as any).config = __VIEW_CONFIG__;
        }
    }
}

class HeroView extends View {
    constructor(__data__: any = {}, systemData: any = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, HeroViewController);
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
        const __VARIABLE_LIST__: any = [];


        this.__ctrl__.setUserDefinedConfig({
            name: 'HomeHero'
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

                // Finally lock state updates

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
                { classes: [{ type: 'static', value: "hx-hero" }] },
                (parentElement: any) => [
                this.html(`e11`, "div", parentElement,
                    { classes: [{ type: 'static', value: "hx-copy" }] },
                    (parentElement: any) => [
                    this.html(`e111`, "h1", parentElement, {}, (parentElement: any) => [
                        this.html(`e1111`, "span", parentElement,
                            { classes: [{ type: 'static', value: "hx-punch" }] },
                            (parentElement: any) => [
                            this.text('Một')
                            ]),
                        this.text(' lõi Laravel.'),
                        this.html(`e1112`, "br", parentElement, {}),
                        this.html(`e1113`, "span", parentElement,
                            { classes: [{ type: 'static', value: "hx-punch" }] },
                            (parentElement: any) => [
                            this.text('Không')
                            ]),
                        this.text(' tách rời frontend.'),
                        this.html(`e1114`, "br", parentElement, {}),
                        this.html(`e1115`, "span", parentElement,
                            { classes: [{ type: 'static', value: "hx-punch" }] },
                            (parentElement: any) => [
                            this.text('Hai')
                            ]),
                        this.text(' đầu ra liền mạch.'),
                        this.html(`e1116`, "br", parentElement, {})
                    ]),
                    this.html(`e112`, "p", parentElement,
                        { classes: [{ type: 'static', value: "hx-lead" }] },
                        (parentElement: any) => [
                        this.text('Không phải một giải pháp chắp vá, Saola là hệ sinh thái toàn diện nâng tầm kiến trúc Laravel. Phân tách logic rành mạch với hệ thống Module và Context độc lập. Hợp nhất trải nghiệm hiển thị bằng một trình biên dịch đột phá — nơi chỉ một file '),
                        this.html(`e1121`, "code", parentElement, {}, (parentElement: any) => [
                            this.text('.sao')
                        ]),
                        this.text(' duy nhất tự động kiến tạo cả HTML chuẩn SEO lẫn ứng dụng SPA mượt mà. Tất cả nằm trong một luồng chảy xuyên suốt.')
                        ]),
                    this.html(`e113`, "div", parentElement,
                        { classes: [{ type: 'static', value: "hx-actions" }] },
                        (parentElement: any) => [
                        this.html(`e1131`, "a", parentElement,
                            { classes: [{ type: 'static', value: "hx-btn" }, { type: 'static', value: "hx-btn-primary" }], attrs: { "href": { type: 'static', value: "/docs/getting-started" } } },
                            (parentElement: any) => [
                            this.text('Bắt đầu trong 4 bước')
                            ]),
                        this.html(`e1132`, "a", parentElement,
                            { classes: [{ type: 'static', value: "hx-btn" }, { type: 'static', value: "hx-btn-ghost" }], attrs: { "href": { type: 'static', value: "#features" } } },
                            (parentElement: any) => [
                            this.text('Tìm hiểu thêm')
                            ])
                        ])
                    ]),
                this.html(`e12`, "figure", parentElement,
                    { classes: [{ type: 'static', value: "hx-object" }], attrs: { "aria-label": { type: 'static', value: "Một nguồn .sao sinh ra hai đầu ra" } } },
                    (parentElement: any) => [
                    this.html(`e121`, "div", parentElement,
                        { classes: [{ type: 'static', value: "hx-node" }, { type: 'static', value: "hx-node-source" }] },
                        (parentElement: any) => [
                        this.html(`e1211`, "span", parentElement,
                            { classes: [{ type: 'static', value: "hx-node-tag" }] },
                            (parentElement: any) => [
                            this.text('NGUỒN')
                            ]),
                        this.html(`e1212`, "strong", parentElement, {}, (parentElement: any) => [
                            this.text('user.sao')
                        ]),
                        this.html(`e1213`, "small", parentElement, {}, (parentElement: any) => [
                            this.text('state · template · script setup')
                        ]),
                        this.html(`e1214`, "pre", parentElement,
                            { classes: [{ type: 'static', value: "hx-mini" }], attrs: { "aria-hidden": { type: 'static', value: "true" } } },
                            (parentElement: any) => [
                            this.html(`e12141`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }] },
                                (parentElement: any) => [
                                this.html(`e121411`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "kw" }] },
                                    (parentElement: any) => [
                                    this.text('@states')
                                    ]),
                                this.html(`e121412`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "op" }] },
                                    (parentElement: any) => [
                                    this.text('({')
                                    ]),
                                this.html(`e121413`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "vr" }] },
                                    (parentElement: any) => [
                                    this.text(' likes')
                                    ]),
                                this.html(`e121414`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "op" }] },
                                    (parentElement: any) => [
                                    this.text(':')
                                    ]),
                                this.html(`e121415`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "st" }] },
                                    (parentElement: any) => [
                                    this.text(' 12')
                                    ]),
                                this.html(`e121416`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "op" }] },
                                    (parentElement: any) => [
                                    this.text(' })')
                                    ])
                                ]),
                            this.html(`e12142`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }] },
                                (parentElement: any) => [
                                this.html(`e121421`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "op" }] },
                                    (parentElement: any) => [
                                    this.text('<')
                                    ]),
                                this.html(`e121422`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "kw" }] },
                                    (parentElement: any) => [
                                    this.text('template')
                                    ]),
                                this.html(`e121423`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "op" }] },
                                    (parentElement: any) => [
                                    this.text('>')
                                    ])
                                ]),
                            this.html(`e12143`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                (parentElement: any) => [
                                this.html(`e121431`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "op" }] },
                                    (parentElement: any) => [
                                    this.text('<')
                                    ]),
                                this.html(`e121432`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "fn" }] },
                                    (parentElement: any) => [
                                    this.text('article')
                                    ]),
                                this.html(`e121433`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "vr" }] },
                                    (parentElement: any) => [
                                    this.text(' class')
                                    ]),
                                this.html(`e121434`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "op" }] },
                                    (parentElement: any) => [
                                    this.text('=')
                                    ]),
                                this.html(`e121435`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "st" }] },
                                    (parentElement: any) => [
                                    this.text('"card"')
                                    ]),
                                this.html(`e121436`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "op" }] },
                                    (parentElement: any) => [
                                    this.text('>')
                                    ])
                                ]),
                            this.html(`e12144`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                (parentElement: any) => [
                                this.html(`e121441`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "op" }] },
                                    (parentElement: any) => [
                                    this.text('<')
                                    ]),
                                this.html(`e121442`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "fn" }] },
                                    (parentElement: any) => [
                                    this.text('button')
                                    ]),
                                this.html(`e121443`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "kw" }] },
                                    (parentElement: any) => [
                                    this.text(' @click')
                                    ]),
                                this.html(`e121444`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "op" }] },
                                    (parentElement: any) => [
                                    this.text('(')
                                    ]),
                                this.html(`e121445`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "fn" }] },
                                    (parentElement: any) => [
                                    this.text('setLikes')
                                    ]),
                                this.html(`e121446`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "op" }] },
                                    (parentElement: any) => [
                                    this.text('(')
                                    ]),
                                this.html(`e121447`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "vr" }] },
                                    (parentElement: any) => [
                                    this.text('likes')
                                    ]),
                                this.html(`e121448`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "op" }] },
                                    (parentElement: any) => [
                                    this.text('+')
                                    ]),
                                this.html(`e121449`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "st" }] },
                                    (parentElement: any) => [
                                    this.text('1')
                                    ]),
                                this.html(`e12144e10_`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "op" }] },
                                    (parentElement: any) => [
                                    this.text('))>')
                                    ])
                                ]),
                            this.html(`e12145`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-3" }] },
                                (parentElement: any) => [
                                this.text('♥ '),
                                this.html(`e121451`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "mustache-token" }] },
                                    (parentElement: any) => [
                                    this.html(`e1214511`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "vr" }] },
                                        (parentElement: any) => [
                                        this.text('likes')
                                        ])
                                    ])
                                ])
                            ])
                        ]),
                    this.html(`e122`, "div", parentElement,
                        { classes: [{ type: 'static', value: "hx-split" }], attrs: { "aria-hidden": { type: 'static', value: "true" } } },
                        (parentElement: any) => [
                        this.html(`e1221`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('sao-compile <context>')
                        ])
                        ]),
                    this.html(`e123`, "div", parentElement,
                        { classes: [{ type: 'static', value: "hx-outs" }] },
                        (parentElement: any) => [
                        this.html(`e1231`, "span", parentElement,
                            { classes: [{ type: 'static', value: "hx-arm" }, { type: 'static', value: "hx-arm-l" }], attrs: { "aria-hidden": { type: 'static', value: "true" } } },
                            (parentElement: any) => [
                            this.text('SSR')
                            ]),
                        this.html(`e1232`, "span", parentElement,
                            { classes: [{ type: 'static', value: "hx-arm" }, { type: 'static', value: "hx-arm-r" }], attrs: { "aria-hidden": { type: 'static', value: "true" } } },
                            (parentElement: any) => [
                            this.text('hydrate')
                            ]),
                        this.html(`e1233`, "div", parentElement,
                            { classes: [{ type: 'static', value: "hx-node" }] },
                            (parentElement: any) => [
                            this.html(`e12331`, "span", parentElement,
                                { classes: [{ type: 'static', value: "hx-node-tag" }] },
                                (parentElement: any) => [
                                this.text('SERVER')
                                ]),
                            this.html(`e12332`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('user.blade.php')
                            ]),
                            this.html(`e12333`, "small", parentElement, {}, (parentElement: any) => [
                                this.text('HTML đầy đủ ở lần tải đầu')
                            ]),
                            this.html(`e12334`, "pre", parentElement,
                                { classes: [{ type: 'static', value: "hx-mini" }], attrs: { "aria-hidden": { type: 'static', value: "true" } } },
                                (parentElement: any) => [
                                this.html(`e123341`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }] },
                                    (parentElement: any) => [
                                    this.html(`e1233411`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "kw" }] },
                                        (parentElement: any) => [
                                        this.text('@wrapper')
                                        ])
                                    ]),
                                this.html(`e123342`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }] },
                                    (parentElement: any) => [
                                    this.html(`e1233421`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('<')
                                        ]),
                                    this.html(`e1233422`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "fn" }] },
                                        (parentElement: any) => [
                                        this.text('article')
                                        ]),
                                    this.html(`e1233423`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "kw" }] },
                                        (parentElement: any) => [
                                        this.text(' @class')
                                        ]),
                                    this.html(`e1233424`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('([')
                                        ]),
                                    this.html(`e1233425`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "vr" }] },
                                        (parentElement: any) => [
                                        this.text('$__VIEW_ID__')
                                        ]),
                                    this.html(`e1233426`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(',')
                                        ]),
                                    this.html(`e1233427`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "st" }] },
                                        (parentElement: any) => [
                                        this.text(' \'card\'')
                                        ]),
                                    this.html(`e1233428`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('])>')
                                        ])
                                    ]),
                                this.html(`e123343`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                    (parentElement: any) => [
                                    this.html(`e1233431`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('<')
                                        ]),
                                    this.html(`e1233432`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "fn" }] },
                                        (parentElement: any) => [
                                        this.text('button')
                                        ]),
                                    this.html(`e1233433`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('>')
                                        ]),
                                    this.text('♥')
                                    ]),
                                this.html(`e123344`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                    (parentElement: any) => [
                                    this.html(`e1233441`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "kw" }] },
                                        (parentElement: any) => [
                                        this.text('@startMarker')
                                        ]),
                                    this.html(`e1233442`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('(')
                                        ]),
                                    this.html(`e1233443`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "st" }] },
                                        (parentElement: any) => [
                                        this.text('\'output\'')
                                        ]),
                                    this.html(`e1233444`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(',')
                                        ]),
                                    this.html(`e1233445`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "st" }] },
                                        (parentElement: any) => [
                                        this.text(' \'k2f1\'')
                                        ]),
                                    this.html(`e1233446`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(')')
                                        ])
                                    ]),
                                this.html(`e123345`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                    (parentElement: any) => [
                                    this.html(`e1233451`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "mustache-token" }] },
                                        (parentElement: any) => [
                                        this.html(`e12334511`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "vr" }] },
                                            (parentElement: any) => [
                                            this.text('$likes')
                                            ])
                                        ])
                                    ])
                                ])
                            ]),
                        this.html(`e1234`, "div", parentElement,
                            { classes: [{ type: 'static', value: "hx-node" }] },
                            (parentElement: any) => [
                            this.html(`e12341`, "span", parentElement,
                                { classes: [{ type: 'static', value: "hx-node-tag" }] },
                                (parentElement: any) => [
                                this.text('CLIENT')
                                ]),
                            this.html(`e12342`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('user.js')
                            ]),
                            this.html(`e12343`, "small", parentElement, {}, (parentElement: any) => [
                                this.text('Claim lại đúng DOM đó')
                            ]),
                            this.html(`e12344`, "pre", parentElement,
                                { classes: [{ type: 'static', value: "hx-mini" }], attrs: { "aria-hidden": { type: 'static', value: "true" } } },
                                (parentElement: any) => [
                                this.html(`e123441`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }] },
                                    (parentElement: any) => [
                                    this.html(`e1234411`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "kw" }] },
                                        (parentElement: any) => [
                                        this.text('const')
                                        ]),
                                    this.html(`e1234412`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "fn" }] },
                                        (parentElement: any) => [
                                        this.text(' set$likes')
                                        ]),
                                    this.html(`e1234413`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(' =')
                                        ])
                                    ]),
                                this.html(`e123442`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                    (parentElement: any) => [
                                    this.html(`e1234421`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "vr" }] },
                                        (parentElement: any) => [
                                        this.text('__STATE__')
                                        ]),
                                    this.html(`e1234422`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('.')
                                        ]),
                                    this.html(`e1234423`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "fn" }] },
                                        (parentElement: any) => [
                                        this.text('register')
                                        ]),
                                    this.html(`e1234424`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('(')
                                        ]),
                                    this.html(`e1234425`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "st" }] },
                                        (parentElement: any) => [
                                        this.text('\'likes\'')
                                        ]),
                                    this.html(`e1234426`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(')')
                                        ])
                                    ]),
                                this.html(`e123443`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }] },
                                    (parentElement: any) => [
                                    this.html(`e1234431`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "kw" }] },
                                        (parentElement: any) => [
                                        this.text('const')
                                        ]),
                                    this.html(`e1234432`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "fn" }] },
                                        (parentElement: any) => [
                                        this.text(' setLikes')
                                        ]),
                                    this.html(`e1234433`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(' = (')
                                        ]),
                                    this.html(`e1234434`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "vr" }] },
                                        (parentElement: any) => [
                                        this.text('v')
                                        ]),
                                    this.html(`e1234435`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(') => {')
                                        ])
                                    ]),
                                this.html(`e123444`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                    (parentElement: any) => [
                                    this.html(`e1234441`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "vr" }] },
                                        (parentElement: any) => [
                                        this.text('likes')
                                        ]),
                                    this.html(`e1234442`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(' =')
                                        ]),
                                    this.html(`e1234443`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "vr" }] },
                                        (parentElement: any) => [
                                        this.text(' v')
                                        ]),
                                    this.html(`e1234444`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(';')
                                        ])
                                    ]),
                                this.html(`e123445`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                    (parentElement: any) => [
                                    this.html(`e1234451`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "fn" }] },
                                        (parentElement: any) => [
                                        this.text('set$likes')
                                        ]),
                                    this.html(`e1234452`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('(')
                                        ]),
                                    this.html(`e1234453`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "vr" }] },
                                        (parentElement: any) => [
                                        this.text('v')
                                        ]),
                                    this.html(`e1234454`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(');')
                                        ])
                                    ])
                                ])
                            ])
                        ])
                    ])
                ]),
            this.html(`e2`, "div", parentElement,
                { classes: [{ type: 'static', value: "hx-strip" }] },
                (parentElement: any) => [
                this.html(`e21`, "dl", parentElement,
                    { classes: [{ type: 'static', value: "hx-strip-grid" }] },
                    (parentElement: any) => [
                    this.html(`e211`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`e2111`, "dt", parentElement, {}, (parentElement: any) => [
                            this.text('4')
                        ]),
                        this.html(`e2112`, "dd", parentElement, {}, (parentElement: any) => [
                            this.text('context: web · admin · api · mobile')
                        ])
                    ]),
                    this.html(`e212`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`e2121`, "dt", parentElement, {}, (parentElement: any) => [
                            this.text('0')
                        ]),
                        this.html(`e2122`, "dd", parentElement, {}, (parentElement: any) => [
                            this.text('file cấu hình route trung tâm cần sửa')
                        ])
                    ]),
                    this.html(`e213`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`e2131`, "dt", parentElement, {}, (parentElement: any) => [
                            this.text('2')
                        ]),
                        this.html(`e2132`, "dd", parentElement, {}, (parentElement: any) => [
                            this.text('đầu ra được biên dịch từ một file .sao')
                        ])
                    ]),
                    this.html(`e214`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`e2141`, "dt", parentElement, {}, (parentElement: any) => [
                            this.text('43')
                        ]),
                        this.html(`e2142`, "dd", parentElement, {}, (parentElement: any) => [
                            this.text('directive giữ nguyên cú pháp Blade quen thuộc')
                        ])
                    ])
                    ])
                ])
            ]);
            }
        });

    }
}

// Export factory function
export function WebModulesHomePartsHero(__data__ = {}, systemData = {}): HeroView {
    return new HeroView(__data__, systemData);
}
export default WebModulesHomePartsHero;