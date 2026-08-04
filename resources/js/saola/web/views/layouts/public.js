import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.layouts.public';
const __VIEW_NAMESPACE__ = 'web.layouts.';
const __VIEW_TYPE__ = 'view';
const __VIEW_CONFIG__ = {
    hasSuperView: true,
    viewType: 'view',
    sections: {
        "shell":{
            "type":"long",
            "preloader":false,
            "useVars":false,
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



class PublicViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class PublicView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, PublicViewController);
        const App = app("App");
        const __STATE__ = this.__ctrl__.states;
        const {__base__, __layout__, __page__, __component__, __template__, __context__, __partial__, __system__, __env = {}, __helper = {}} = systemData;
        const __VIEW_ID__ = __data__.__SSR_VIEW_ID__ || App.View.generateViewId();

        const useState = (value) => {
            return __STATE__.__useState(value);
        };
        const updateRealState = (state) => {
            __STATE__.__.updateRealState(state);
        };

        const lockUpdateRealState = () => {
            __STATE__.__.lockUpdateRealState();
        };
        const updateStateByKey = (key, state) => {
            __STATE__.__.updateStateByKey(key, state);
        };


        const __UPDATE_DATA_TRAIT__ = {};
        const __VARIABLE_LIST__ = [];


        this.__ctrl__.setUserDefinedConfig({

        });

        this.__ctrl__.setup({
            superView: `${__layout__+"base"}`,
            subscribe: true,
            fetch: null,
            data: __data__,
            viewId: __VIEW_ID__,
            path: __VIEW_PATH__,
            scripts: [],
            styles: [{"type":"href","href":"/static/saola/demo-site.css"}],
            resources: [{"tag":"link","uuid":"link-0","attrs":{"rel":"stylesheet","href":"/static/saola/demo-site.css"}}],
            commitConstructorData: function() {
                // Then update states from data

                // Finally lock state updates

            },
            updateVariableData: function(data) {
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
            updateVariableItemData: function(key, value) {
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
            this.block('block-shell', 'shell', (parentElement) => [
            this.html(`c8b05ef4`, "div", parentElement,
                { classes: [{ type: 'static', value: "site-frame" }] },
                (parentElement) => [
                this.html(`9f2695cc`, "header", parentElement,
                    { classes: [{ type: 'static', value: "site-header" }] },
                    (parentElement) => [
                    this.html(`01d00481`, "div", parentElement,
                        { classes: [{ type: 'static', value: "site-shell" }] },
                        (parentElement) => [
                        this.html(`9f34223d`, "div", parentElement,
                            { classes: [{ type: 'static', value: "site-header-row" }] },
                            (parentElement) => [
                            this.html(`8eeecdee`, "a", parentElement,
                                { classes: [{ type: 'static', value: "site-logo" }], attrs: { "href": { type: 'static', value: "/" }, "aria-label": { type: 'static', value: "Trang chủ Saola" } } },
                                (parentElement) => [
                                this.html(`1d2848b8`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "site-logo-mark" }], attrs: { "aria-hidden": { type: 'static', value: "true" } } },
                                    (parentElement) => [
                                    this.html(`bcfa3008`, "i", parentElement, {}),
                                    this.html(`862e33c8`, "i", parentElement, {}),
                                    this.html(`64d27941`, "i", parentElement, {})
                                    ]),
                                this.html(`243f01a4`, "span", parentElement, {}, (parentElement) => [
                                    this.html(`2ef62801`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "logo-saola" }] },
                                        (parentElement) => [
                                        this.text('Saola')
                                        ]),
                                    this.html(`94cdf200`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "logo-labs" }] },
                                        (parentElement) => [
                                        this.text('Labs')
                                        ])
                                ])
                                ]),
                            this.html(`2fb3213a`, "div", parentElement,
                                { classes: [{ type: 'static', value: "site-header-collapse" }] },
                                (parentElement) => [
                                this.html(`204de517`, "nav", parentElement,
                                    { classes: [{ type: 'static', value: "site-nav" }], attrs: { "aria-label": { type: 'static', value: "Điều hướng chính" } } },
                                    (parentElement) => [
                                    this.html(`335b5477`, "a", parentElement,
                                        { attrs: { "href": { type: 'static', value: "/architecture" } } },
                                        (parentElement) => [
                                        this.text('Kiến trúc')
                                        ]),
                                    this.html(`e113090f`, "a", parentElement,
                                        { attrs: { "href": { type: 'static', value: "/compiler" } } },
                                        (parentElement) => [
                                        this.text('Compiler')
                                        ]),
                                    this.html(`a39b7ac3`, "a", parentElement,
                                        { attrs: { "href": { type: 'static', value: "/runtime" } } },
                                        (parentElement) => [
                                        this.text('Runtime')
                                        ]),
                                    this.html(`cbd37804`, "a", parentElement,
                                        { attrs: { "href": { type: 'static', value: "/about" } } },
                                        (parentElement) => [
                                        this.text('Dự án')
                                        ])
                                    ]),
                                this.html(`28d409a0`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "site-header-actions" }] },
                                    (parentElement) => [
                                    this.html(`d0e4541c`, "a", parentElement,
                                        { classes: [{ type: 'static', value: "site-login-link" }], attrs: { "href": { type: 'static', value: "/todo-list" } } },
                                        (parentElement) => [
                                        this.text('Live demo')
                                        ]),
                                    this.html(`3a993caf`, "a", parentElement,
                                        { classes: [{ type: 'static', value: "site-header-cta" }], attrs: { "href": { type: 'static', value: "/getting-started" } } },
                                        (parentElement) => [
                                        this.text('Bắt đầu '),
                                        this.html(`5e766cf2`, "span", parentElement, {}, (parentElement) => [
                                            this.text('↗')
                                        ])
                                        ])
                                    ])
                                ]),
                            this.html(`f7bb58a5`, "details", parentElement,
                                { classes: [{ type: 'static', value: "site-mobile-menu" }] },
                                (parentElement) => [
                                this.html(`be2a93ed`, "summary", parentElement,
                                    { attrs: { "aria-label": { type: 'static', value: "Mở menu" } } },
                                    (parentElement) => [
                                    this.text('☰')
                                    ]),
                                this.html(`528595cc`, "nav", parentElement,
                                    { attrs: { "aria-label": { type: 'static', value: "Điều hướng di động" } } },
                                    (parentElement) => [
                                    this.html(`40de4ca1`, "a", parentElement,
                                        { attrs: { "href": { type: 'static', value: "/architecture" } } },
                                        (parentElement) => [
                                        this.text('Kiến trúc')
                                        ]),
                                    this.html(`40e7e83c`, "a", parentElement,
                                        { attrs: { "href": { type: 'static', value: "/compiler" } } },
                                        (parentElement) => [
                                        this.text('Compiler & AST')
                                        ]),
                                    this.html(`0bb0fa4a`, "a", parentElement,
                                        { attrs: { "href": { type: 'static', value: "/runtime" } } },
                                        (parentElement) => [
                                        this.text('Runtime & Hydration')
                                        ]),
                                    this.html(`1c3fd1b3`, "a", parentElement,
                                        { attrs: { "href": { type: 'static', value: "/about" } } },
                                        (parentElement) => [
                                        this.text('Về dự án')
                                        ]),
                                    this.html(`164d727e`, "a", parentElement,
                                        { attrs: { "href": { type: 'static', value: "/todo-list" } } },
                                        (parentElement) => [
                                        this.text('Live demo')
                                        ]),
                                    this.html(`3f1f21f7`, "a", parentElement,
                                        { classes: [{ type: 'static', value: "site-header-cta" }], attrs: { "href": { type: 'static', value: "/getting-started" } } },
                                        (parentElement) => [
                                        this.text('Bắt đầu →')
                                        ])
                                    ])
                                ])
                            ])
                        ])
                    ]),
                this.html(`045faade`, "main", parentElement,
                    { classes: [{ type: 'static', value: "site-main" }] },
                    (parentElement) => [
                    this.blockOutlet(`20269ffe`, "content", parentElement)
                    ]),
                this.html(`78151b5a`, "footer", parentElement,
                    { classes: [{ type: 'static', value: "site-footer" }] },
                    (parentElement) => [
                    this.html(`78967ff6`, "div", parentElement,
                        { classes: [{ type: 'static', value: "footer-intro" }] },
                        (parentElement) => [
                        this.html(`101959dd`, "a", parentElement,
                            { classes: [{ type: 'static', value: "site-logo" }, { type: 'static', value: "site-logo-footer" }], attrs: { "href": { type: 'static', value: "/" }, "aria-label": { type: 'static', value: "Trang chủ Saola" } } },
                            (parentElement) => [
                            this.html(`97b46bf5`, "span", parentElement,
                                { classes: [{ type: 'static', value: "site-logo-mark" }], attrs: { "aria-hidden": { type: 'static', value: "true" } } },
                                (parentElement) => [
                                this.html(`79f28304`, "i", parentElement, {}),
                                this.html(`2de522bc`, "i", parentElement, {}),
                                this.html(`5199c8d1`, "i", parentElement, {})
                                ]),
                            this.html(`788489b8`, "span", parentElement, {}, (parentElement) => [
                                this.html(`688e5753`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "logo-saola" }] },
                                    (parentElement) => [
                                    this.text('Saola')
                                    ]),
                                this.html(`1f828edb`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "logo-labs" }] },
                                    (parentElement) => [
                                    this.text('Labs')
                                    ])
                            ])
                            ]),
                        this.html(`891dca6b`, "p", parentElement, {}, (parentElement) => [
                            this.text('Một nguồn giao diện cho Blade SSR và JavaScript SPA. Được thiết kế quanh Laravel, không đứng bên cạnh Laravel.')
                        ])
                        ]),
                    this.html(`bdc463c6`, "div", parentElement,
                        { classes: [{ type: 'static', value: "footer-map" }] },
                        (parentElement) => [
                        this.html(`540d6e73`, "div", parentElement, {}, (parentElement) => [
                            this.html(`b2fa4316`, "span", parentElement, {}, (parentElement) => [
                                this.text('KHÁM PHÁ')
                            ]),
                            this.html(`7a232c26`, "a", parentElement,
                                { attrs: { "href": { type: 'static', value: "/architecture" } } },
                                (parentElement) => [
                                this.text('Kiến trúc')
                                ]),
                            this.html(`2a50561e`, "a", parentElement,
                                { attrs: { "href": { type: 'static', value: "/compiler" } } },
                                (parentElement) => [
                                this.text('Compiler')
                                ]),
                            this.html(`efc775a9`, "a", parentElement,
                                { attrs: { "href": { type: 'static', value: "/runtime" } } },
                                (parentElement) => [
                                this.text('Runtime')
                                ])
                        ]),
                        this.html(`dd466dd6`, "div", parentElement, {}, (parentElement) => [
                            this.html(`6b4d80a6`, "span", parentElement, {}, (parentElement) => [
                                this.text('DỰ ÁN')
                            ]),
                            this.html(`1fe1d8a7`, "a", parentElement,
                                { attrs: { "href": { type: 'static', value: "/about" } } },
                                (parentElement) => [
                                this.text('Về Saola')
                                ]),
                            this.html(`fb901a10`, "a", parentElement,
                                { attrs: { "href": { type: 'static', value: "/todo-list" } } },
                                (parentElement) => [
                                this.text('Live demo')
                                ]),
                            this.html(`c81f26ec`, "a", parentElement,
                                { attrs: { "href": { type: 'static', value: "/contact" } } },
                                (parentElement) => [
                                this.text('Liên hệ')
                                ])
                        ]),
                        this.html(`2aabb1e7`, "div", parentElement, {}, (parentElement) => [
                            this.html(`21b933ba`, "span", parentElement, {}, (parentElement) => [
                                this.text('PHÁP LÝ')
                            ]),
                            this.html(`d863e33f`, "a", parentElement,
                                { attrs: { "href": { type: 'static', value: "/privacy" } } },
                                (parentElement) => [
                                this.text('Privacy')
                                ]),
                            this.html(`91ec6987`, "a", parentElement,
                                { attrs: { "href": { type: 'static', value: "/terms" } } },
                                (parentElement) => [
                                this.text('Terms')
                                ]),
                            this.html(`d9ca2503`, "small", parentElement, {}, (parentElement) => [
                                this.text('© 2026 SaoLabs')
                            ])
                        ])
                        ])
                    ])
                ])
            ]);
            this.superViewPath = `${__layout__+"base"}`;
            return this.extendView(this.superViewPath, {});
            }
        });

    }
}

// Export factory function
export function WebLayoutsPublic(__data__ = {}, systemData = {}) {
    return new PublicView(__data__, systemData);
}
export default WebLayoutsPublic;
