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
            this.html(`Bshell1`, "div", parentElement,
                { classes: [{ type: 'static', value: "site-frame" }] },
                (parentElement) => [
                this.html(`Bshell11`, "header", parentElement,
                    { classes: [{ type: 'static', value: "site-header" }] },
                    (parentElement) => [
                    this.html(`Bshell111`, "div", parentElement,
                        { classes: [{ type: 'static', value: "site-shell" }] },
                        (parentElement) => [
                        this.html(`Bshell1111`, "div", parentElement,
                            { classes: [{ type: 'static', value: "site-header-row" }] },
                            (parentElement) => [
                            this.html(`Bshell11111`, "a", parentElement,
                                { classes: [{ type: 'static', value: "site-logo" }], attrs: { "href": { type: 'static', value: "/" }, "aria-label": { type: 'static', value: "Trang chủ Saola" } } },
                                (parentElement) => [
                                this.html(`Bshell111111`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "site-logo-mark" }], attrs: { "aria-hidden": { type: 'static', value: "true" } } },
                                    (parentElement) => [
                                    this.html(`Bshell1111111`, "img", parentElement, { attrs: { "src": { type: 'static', value: "/static/saola/brand/saola-mark.svg" }, "alt": { type: 'static', value: "" } } })
                                    ]),
                                this.html(`Bshell111112`, "span", parentElement, {}, (parentElement) => [
                                    this.html(`Bshell1111121`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "logo-saola" }] },
                                        (parentElement) => [
                                        this.text('Sao')
                                        ]),
                                    this.html(`Bshell1111122`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "logo-labs" }] },
                                        (parentElement) => [
                                        this.text('Labs')
                                        ])
                                ])
                                ]),
                            this.html(`Bshell11112`, "div", parentElement,
                                { classes: [{ type: 'static', value: "site-header-collapse" }] },
                                (parentElement) => [
                                this.html(`Bshell111121`, "nav", parentElement,
                                    { classes: [{ type: 'static', value: "site-nav" }], attrs: { "aria-label": { type: 'static', value: "Điều hướng chính" } } },
                                    (parentElement) => [
                                    this.html(`Bshell1111211`, "a", parentElement,
                                        { attrs: { "href": { type: 'static', value: "/docs" } } },
                                        (parentElement) => [
                                        this.text('Tài liệu')
                                        ]),
                                    this.html(`Bshell1111212`, "a", parentElement,
                                        { attrs: { "href": { type: 'static', value: "/demo" } } },
                                        (parentElement) => [
                                        this.text('Demo')
                                        ]),
                                    this.html(`Bshell1111213`, "a", parentElement,
                                        { attrs: { "href": { type: 'static', value: "/about" } } },
                                        (parentElement) => [
                                        this.text('Dự án')
                                        ])
                                    ]),
                                this.html(`Bshell111122`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "site-header-actions" }] },
                                    (parentElement) => [
                                    this.html(`Bshell1111221`, "a", parentElement,
                                        { classes: [{ type: 'static', value: "site-header-cta" }], attrs: { "href": { type: 'static', value: "/docs/getting-started" } } },
                                        (parentElement) => [
                                        this.text('Bắt đầu '),
                                        this.html(`Bshell11112211`, "span", parentElement, {}, (parentElement) => [
                                            this.text('↗')
                                        ])
                                        ])
                                    ])
                                ]),
                            this.html(`Bshell11113`, "details", parentElement,
                                { classes: [{ type: 'static', value: "site-mobile-menu" }] },
                                (parentElement) => [
                                this.html(`Bshell111131`, "summary", parentElement,
                                    { attrs: { "aria-label": { type: 'static', value: "Mở menu" } } },
                                    (parentElement) => [
                                    this.text('☰')
                                    ]),
                                this.html(`Bshell111132`, "nav", parentElement,
                                    { attrs: { "aria-label": { type: 'static', value: "Điều hướng di động" } } },
                                    (parentElement) => [
                                    this.html(`Bshell1111321`, "a", parentElement,
                                        { attrs: { "href": { type: 'static', value: "/docs" } } },
                                        (parentElement) => [
                                        this.text('Tài liệu')
                                        ]),
                                    this.html(`Bshell1111322`, "a", parentElement,
                                        { attrs: { "href": { type: 'static', value: "/demo" } } },
                                        (parentElement) => [
                                        this.text('Interactive demo')
                                        ]),
                                    this.html(`Bshell1111323`, "a", parentElement,
                                        { attrs: { "href": { type: 'static', value: "/todo-list" } } },
                                        (parentElement) => [
                                        this.text('Todo workspace')
                                        ]),
                                    this.html(`Bshell1111324`, "a", parentElement,
                                        { attrs: { "href": { type: 'static', value: "/roster" } } },
                                        (parentElement) => [
                                        this.text('Roster sync')
                                        ]),
                                    this.html(`Bshell1111325`, "a", parentElement,
                                        { attrs: { "href": { type: 'static', value: "/about" } } },
                                        (parentElement) => [
                                        this.text('Về dự án')
                                        ]),
                                    this.html(`Bshell1111326`, "a", parentElement,
                                        { classes: [{ type: 'static', value: "site-header-cta" }], attrs: { "href": { type: 'static', value: "/docs/getting-started" } } },
                                        (parentElement) => [
                                        this.text('Bắt đầu →')
                                        ])
                                    ])
                                ])
                            ])
                        ])
                    ]),
                this.html(`Bshell12`, "main", parentElement,
                    { classes: [{ type: 'static', value: "site-main" }] },
                    (parentElement) => [
                    this.blockOutlet(`Bshell12b`, "content", parentElement)
                    ]),
                this.html(`Bshell13`, "footer", parentElement,
                    { classes: [{ type: 'static', value: "site-footer" }] },
                    (parentElement) => [
                    this.html(`Bshell131`, "div", parentElement,
                        { classes: [{ type: 'static', value: "footer-intro" }] },
                        (parentElement) => [
                        this.html(`Bshell1311`, "a", parentElement,
                            { classes: [{ type: 'static', value: "site-logo" }, { type: 'static', value: "site-logo-footer" }], attrs: { "href": { type: 'static', value: "/" }, "aria-label": { type: 'static', value: "Trang chủ Saola" } } },
                            (parentElement) => [
                            this.html(`Bshell13111`, "span", parentElement,
                                { classes: [{ type: 'static', value: "site-logo-mark" }], attrs: { "aria-hidden": { type: 'static', value: "true" } } },
                                (parentElement) => [
                                this.html(`Bshell131111`, "img", parentElement, { attrs: { "src": { type: 'static', value: "/static/saola/brand/saola-mark.svg" }, "alt": { type: 'static', value: "" } } })
                                ]),
                            this.html(`Bshell13112`, "span", parentElement, {}, (parentElement) => [
                                this.html(`Bshell131121`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "logo-saola" }] },
                                    (parentElement) => [
                                    this.text('Sao')
                                    ]),
                                this.html(`Bshell131122`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "logo-labs" }] },
                                    (parentElement) => [
                                    this.text('Labs')
                                    ])
                            ])
                            ]),
                        this.html(`Bshell1312`, "p", parentElement, {}, (parentElement) => [
                            this.text('Kiến trúc multi-context modular trên Laravel: module tự khai báo route, context tách middleware và bundle, view sinh cả Blade lẫn JavaScript.')
                        ])
                        ]),
                    this.html(`Bshell132`, "div", parentElement,
                        { classes: [{ type: 'static', value: "footer-map" }] },
                        (parentElement) => [
                        this.html(`Bshell1321`, "div", parentElement, {}, (parentElement) => [
                            this.html(`Bshell13211`, "span", parentElement, {}, (parentElement) => [
                                this.text('TÀI LIỆU')
                            ]),
                            this.html(`Bshell13212`, "a", parentElement,
                                { attrs: { "href": { type: 'static', value: "/docs" } } },
                                (parentElement) => [
                                this.text('Mục lục')
                                ]),
                            this.html(`Bshell13213`, "a", parentElement,
                                { attrs: { "href": { type: 'static', value: "/docs/getting-started" } } },
                                (parentElement) => [
                                this.text('Bắt đầu')
                                ]),
                            this.html(`Bshell13214`, "a", parentElement,
                                { attrs: { "href": { type: 'static', value: "/docs/directives" } } },
                                (parentElement) => [
                                this.text('Directive')
                                ]),
                            this.html(`Bshell13215`, "a", parentElement,
                                { attrs: { "href": { type: 'static', value: "/docs/status" } } },
                                (parentElement) => [
                                this.text('Giới hạn đã biết')
                                ])
                        ]),
                        this.html(`Bshell1322`, "div", parentElement, {}, (parentElement) => [
                            this.html(`Bshell13221`, "span", parentElement, {}, (parentElement) => [
                                this.text('THỰC HÀNH')
                            ]),
                            this.html(`Bshell13222`, "a", parentElement,
                                { attrs: { "href": { type: 'static', value: "/components" } } },
                                (parentElement) => [
                                this.text('Thư viện component')
                                ]),
                            this.html(`Bshell13223`, "a", parentElement,
                                { attrs: { "href": { type: 'static', value: "/demo" } } },
                                (parentElement) => [
                                this.text('Interactive demo')
                                ]),
                            this.html(`Bshell13224`, "a", parentElement,
                                { attrs: { "href": { type: 'static', value: "/roster" } } },
                                (parentElement) => [
                                this.text('Roster sync')
                                ]),
                            this.html(`Bshell13225`, "a", parentElement,
                                { attrs: { "href": { type: 'static', value: "/about" } } },
                                (parentElement) => [
                                this.text('Về Saola')
                                ])
                        ]),
                        this.html(`Bshell1323`, "div", parentElement, {}, (parentElement) => [
                            this.html(`Bshell13231`, "span", parentElement, {}, (parentElement) => [
                                this.text('PHÁP LÝ')
                            ]),
                            this.html(`Bshell13232`, "a", parentElement,
                                { attrs: { "href": { type: 'static', value: "/privacy" } } },
                                (parentElement) => [
                                this.text('Privacy')
                                ]),
                            this.html(`Bshell13233`, "a", parentElement,
                                { attrs: { "href": { type: 'static', value: "/terms" } } },
                                (parentElement) => [
                                this.text('Terms')
                                ]),
                            this.html(`Bshell13234`, "small", parentElement, {}, (parentElement) => [
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