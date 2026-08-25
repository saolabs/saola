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
    constructor(__data__: HeroProps = {}, systemData: any = {}) {
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
            this.html(`bbcd3398`, "section", parentElement,
                { classes: [{ type: 'static', value: "home-hero" }], attrs: { "style": { type: 'static', value: "position: relative; overflow: visible;" } } },
                (parentElement: any) => [
                this.html(`88b70a58`, "div", parentElement, { attrs: { "style": { type: 'static', value: "position: absolute; top: 10%; right: 5%; width: 60vw; height: 60vw; background: radial-gradient(circle, rgba(14,165,233,0.15) 0%, rgba(99,102,241,0.1) 40%, transparent 70%); z-index: -1; border-radius: 50%; pointer-events: none; filter: blur(40px);" } } }),
                this.html(`b545b1d4`, "div", parentElement,
                    { classes: [{ type: 'static', value: "home-hero-copy" }] },
                    (parentElement: any) => [
                    this.html(`fa06b967`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement: any) => [
                        this.html(`74be3ba7`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('SAOLA ECOSYSTEM')
                        ]),
                        this.text(' THE MODERN MONOLITH')
                        ]),
                    this.html(`b13cf56e`, "h1", parentElement,
                        { attrs: { "style": { type: 'static', value: "text-wrap: balance;" } } },
                        (parentElement: any) => [
                        this.text('Trải nghiệm SPA mượt mà'),
                        this.html(`ab8ccdf7`, "br", parentElement, {}),
                        this.html(`060b5a80`, "em", parentElement, {}, (parentElement: any) => [
                            this.text('cùng backend bạn yêu thích.')
                        ])
                        ]),
                    this.html(`38f64cbf`, "p", parentElement,
                        { classes: [{ type: 'static', value: "hero-lead" }] },
                        (parentElement: any) => [
                        this.text('Phát triển Single-Page App với sự thanh lịch của server-side routing. Tận dụng trọn vẹn controller, middleware, và auth của Laravel mà không cần phải xây dựng riêng một tầng API.')
                        ]),
                    this.html(`e19b2390`, "div", parentElement,
                        { classes: [{ type: 'static', value: "hero-actions" }] },
                        (parentElement: any) => [
                        this.html(`2aa4d48f`, "a", parentElement,
                            { classes: [{ type: 'static', value: "button" }, { type: 'static', value: "button-primary" }], attrs: { "href": { type: 'static', value: "/docs/getting-started" }, "style": { type: 'static', value: "box-shadow: 0 8px 25px rgba(14,165,233,0.3); border: 1px solid rgba(255,255,255,0.2);" } } },
                            (parentElement: any) => [
                            this.text('Đọc tài liệu hướng dẫn '),
                            this.html(`e74aa461`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('↗')
                            ])
                            ]),
                        this.html(`f9cc4702`, "a", parentElement,
                            { classes: [{ type: 'static', value: "text-link" }], attrs: { "href": { type: 'static', value: "#features" } } },
                            (parentElement: any) => [
                            this.text('Tại sao chọn Saola? '),
                            this.html(`c0639405`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('→')
                            ])
                            ])
                        ]),
                    this.html(`e0bad0db`, "dl", parentElement,
                        { classes: [{ type: 'static', value: "hero-facts" }] },
                        (parentElement: any) => [
                        this.html(`61d58743`, "div", parentElement,
                            { attrs: { "style": { type: 'static', value: "background: rgba(255,255,255,0.7); backdrop-filter: blur(10px);" } } },
                            (parentElement: any) => [
                            this.html(`8458f5b9`, "dt", parentElement, {}, (parentElement: any) => [
                                this.text('PHONG CÁCH')
                            ]),
                            this.html(`bde4ee65`, "dd", parentElement, {}, (parentElement: any) => [
                                this.text('Server-driven')
                            ])
                            ]),
                        this.html(`f2f3d2ed`, "div", parentElement,
                            { attrs: { "style": { type: 'static', value: "background: rgba(255,255,255,0.7); backdrop-filter: blur(10px);" } } },
                            (parentElement: any) => [
                            this.html(`52e4505f`, "dt", parentElement, {}, (parentElement: any) => [
                                this.text('TRẢI NGHIỆM')
                            ]),
                            this.html(`cacb5949`, "dd", parentElement, {}, (parentElement: any) => [
                                this.text('Client-side Routing')
                            ])
                            ]),
                        this.html(`54ae8251`, "div", parentElement,
                            { attrs: { "style": { type: 'static', value: "background: rgba(255,255,255,0.7); backdrop-filter: blur(10px);" } } },
                            (parentElement: any) => [
                            this.html(`61033fcd`, "dt", parentElement, {}, (parentElement: any) => [
                                this.text('TƯƠNG THÍCH')
                            ]),
                            this.html(`3da4cf8c`, "dd", parentElement, {}, (parentElement: any) => [
                                this.text('Laravel 12+')
                            ])
                            ])
                        ])
                    ]),
                this.html(`c882ec26`, "div", parentElement,
                    { classes: [{ type: 'static', value: "target-stack" }], attrs: { "style": { type: 'static', value: "display: grid; gap: 20px; padding-left: 2vw; position: relative;" } } },
                    (parentElement: any) => [
                    this.html(`2055e995`, "div", parentElement,
                        { classes: [{ type: 'static', value: "code-window" }, { type: 'static', value: "hero-code-block" }], attrs: { "style": { type: 'static', value: "box-shadow: 0 25px 50px rgba(0,0,0,0.12); transform: rotate(-2deg) translateY(0); transition: transform 0.3s; border: 1px solid rgba(255,255,255,0.6);" } } },
                        (parentElement: any) => [
                        this.html(`80187444`, "div", parentElement,
                            { classes: [{ type: 'static', value: "window-bar" }] },
                            (parentElement: any) => [
                            this.html(`047f0499`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('CONTROLLER')
                            ]),
                            this.html(`4e06cf36`, "b", parentElement, {}, (parentElement: any) => [
                                this.text('UserController.php')
                            ])
                            ]),
                        this.html(`3a427f36`, "pre", parentElement, {}, (parentElement: any) => [
                            this.html(`a7a7cc5a`, "code", parentElement, {}, (parentElement: any) => [
                                this.html(`bb462263`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }] },
                                    (parentElement: any) => [
                                    this.html(`c0200cbd`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "kw" }] },
                                        (parentElement: any) => [
                                        this.text('class')
                                        ]),
                                    this.html(`e7ca4651`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "ty" }] },
                                        (parentElement: any) => [
                                        this.text('UserController')
                                        ]),
                                    this.html(`4a466dc0`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "kw" }] },
                                        (parentElement: any) => [
                                        this.text('extends')
                                        ]),
                                    this.html(`c638f073`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "ty" }] },
                                        (parentElement: any) => [
                                        this.text('Controller')
                                        ])
                                    ]),
                                this.html(`93e8e1a5`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }] },
                                    (parentElement: any) => [
                                    this.html(`9b2be056`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('{')
                                        ])
                                    ]),
                                this.html(`d2bf8abb`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                    (parentElement: any) => [
                                    this.html(`74c71822`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "kw" }] },
                                        (parentElement: any) => [
                                        this.text('public function')
                                        ]),
                                    this.html(`91dc3187`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "fn" }] },
                                        (parentElement: any) => [
                                        this.text('show')
                                        ]),
                                    this.html(`63bd0b2c`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('(')
                                        ]),
                                    this.html(`b7d8ff21`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "ty" }] },
                                        (parentElement: any) => [
                                        this.text('User')
                                        ]),
                                    this.html(`8bd39a56`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "vr" }] },
                                        (parentElement: any) => [
                                        this.text('$user')
                                        ]),
                                    this.html(`118e4c80`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(')')
                                        ])
                                    ]),
                                this.html(`0f2b4e4a`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                    (parentElement: any) => [
                                    this.html(`793be278`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('{')
                                        ])
                                    ]),
                                this.html(`8b352f9c`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                    (parentElement: any) => [
                                    this.html(`b00f4db5`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "kw" }] },
                                        (parentElement: any) => [
                                        this.text('return')
                                        ]),
                                    this.html(`c7a18ff6`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "vr" }] },
                                        (parentElement: any) => [
                                        this.text('$this')
                                        ]),
                                    this.html(`f716b373`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('->')
                                        ]),
                                    this.html(`8191ed39`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "fn" }] },
                                        (parentElement: any) => [
                                        this.text('response')
                                        ]),
                                    this.html(`db06798e`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('([')
                                        ])
                                    ]),
                                this.html(`12b34e50`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-3" }] },
                                    (parentElement: any) => [
                                    this.html(`223690f5`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "st" }] },
                                        (parentElement: any) => [
                                        this.text('\'user\'')
                                        ]),
                                    this.html(`d88f8fc6`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('=>')
                                        ]),
                                    this.html(`e76e445e`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "vr" }] },
                                        (parentElement: any) => [
                                        this.text('$user')
                                        ]),
                                    this.html(`b2871ad5`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(',')
                                        ])
                                    ]),
                                this.html(`a8d59a38`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                    (parentElement: any) => [
                                    this.html(`dddfd6ec`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(']);')
                                        ])
                                    ]),
                                this.html(`87fae7c4`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                    (parentElement: any) => [
                                    this.html(`8e6e070d`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('}')
                                        ])
                                    ]),
                                this.html(`17e8ef62`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }] },
                                    (parentElement: any) => [
                                    this.html(`ac69e478`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('}')
                                        ])
                                    ])
                            ])
                        ])
                        ]),
                    this.html(`c9206f66`, "div", parentElement,
                        { classes: [{ type: 'static', value: "code-window" }, { type: 'static', value: "code-window-dark" }, { type: 'static', value: "hero-code-block" }], attrs: { "style": { type: 'static', value: "box-shadow: 0 30px 60px rgba(0,0,0,0.25); transform: rotate(3deg) translateY(0); transition: transform 0.3s; border: 1px solid rgba(255,255,255,0.1);" } } },
                        (parentElement: any) => [
                        this.html(`83b9f047`, "div", parentElement,
                            { classes: [{ type: 'static', value: "window-bar" }] },
                            (parentElement: any) => [
                            this.html(`94c6c745`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('VIEW')
                            ]),
                            this.html(`fb69b9d8`, "b", parentElement, {}, (parentElement: any) => [
                                this.text('user.sao')
                            ])
                            ]),
                        this.html(`9df3d6f2`, "pre", parentElement, {}, (parentElement: any) => [
                            this.html(`db709166`, "code", parentElement, {}, (parentElement: any) => [
                                this.html(`8f68429d`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }] },
                                    (parentElement: any) => [
                                    this.html(`a7a1f6c3`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "kw" }] },
                                        (parentElement: any) => [
                                        this.text('@vars')
                                        ]),
                                    this.html(`cfe8c0cf`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('(')
                                        ]),
                                    this.html(`3c78ff3a`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "vr" }] },
                                        (parentElement: any) => [
                                        this.text('user')
                                        ]),
                                    this.html(`bcf9584a`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(')')
                                        ])
                                    ]),
                                this.html(`4198e723`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }] }),
                                this.html(`fe9db4b4`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }] },
                                    (parentElement: any) => [
                                    this.html(`3763c5bb`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('<')
                                        ]),
                                    this.html(`07997a91`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "kw" }] },
                                        (parentElement: any) => [
                                        this.text('template')
                                        ]),
                                    this.html(`78ab257d`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('>')
                                        ])
                                    ]),
                                this.html(`b990dc44`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                    (parentElement: any) => [
                                    this.html(`5b65b19e`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('<')
                                        ]),
                                    this.html(`a97387ff`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "fn" }] },
                                        (parentElement: any) => [
                                        this.text('h1')
                                        ]),
                                    this.html(`5248ca7f`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('>')
                                        ]),
                                    this.html(`879c020f`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "mustache-token" }] },
                                        (parentElement: any) => [
                                        this.html(`97196704`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "vr" }] },
                                            (parentElement: any) => [
                                            this.text('user')
                                            ]),
                                        this.html(`7f8c4e42`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "op" }] },
                                            (parentElement: any) => [
                                            this.text('[')
                                            ]),
                                        this.html(`82695b19`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "st" }] },
                                            (parentElement: any) => [
                                            this.text('\'name\'')
                                            ]),
                                        this.html(`441dc656`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "op" }] },
                                            (parentElement: any) => [
                                            this.text(']')
                                            ])
                                        ]),
                                    this.html(`0dd0a041`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('</')
                                        ]),
                                    this.html(`33860137`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "fn" }] },
                                        (parentElement: any) => [
                                        this.text('h1')
                                        ]),
                                    this.html(`4cc5fe85`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('>')
                                        ])
                                    ]),
                                this.html(`b32ec6c2`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                    (parentElement: any) => [
                                    this.html(`cc2db4fa`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('<')
                                        ]),
                                    this.html(`4642a6a5`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "fn" }] },
                                        (parentElement: any) => [
                                        this.text('p')
                                        ]),
                                    this.html(`628cdca6`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('>')
                                        ]),
                                    this.text('Tham gia từ: '),
                                    this.html(`035ddfbe`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "mustache-token" }] },
                                        (parentElement: any) => [
                                        this.html(`ca43bd86`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "vr" }] },
                                            (parentElement: any) => [
                                            this.text('user')
                                            ]),
                                        this.html(`91a455d6`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "op" }] },
                                            (parentElement: any) => [
                                            this.text('[')
                                            ]),
                                        this.html(`5d339c5d`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "st" }] },
                                            (parentElement: any) => [
                                            this.text('\'created_at\'')
                                            ]),
                                        this.html(`5a94ff70`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "op" }] },
                                            (parentElement: any) => [
                                            this.text(']')
                                            ])
                                        ]),
                                    this.html(`49188f5b`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('</')
                                        ]),
                                    this.html(`5797ef49`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "fn" }] },
                                        (parentElement: any) => [
                                        this.text('p')
                                        ]),
                                    this.html(`e48adb8f`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('>')
                                        ])
                                    ]),
                                this.html(`4703a6e0`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }] },
                                    (parentElement: any) => [
                                    this.html(`67f2e846`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('</')
                                        ]),
                                    this.html(`25a5a846`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "kw" }] },
                                        (parentElement: any) => [
                                        this.text('template')
                                        ]),
                                    this.html(`8383312b`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('>')
                                        ])
                                    ])
                            ])
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
export function WebModulesHomePartsHero(__data__: HeroProps = {}, systemData: any = {}): HeroView {
    return new HeroView(__data__, systemData);
}
export default WebModulesHomePartsHero;
