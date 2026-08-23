import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.layouts.docs';
const __VIEW_NAMESPACE__ = 'web.layouts.';
const __VIEW_TYPE__ = 'view';
const __VIEW_CONFIG__ = {
    hasSuperView: true,
    viewType: 'view',
    sections: {
        "content":{
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
    renderLongSections: ["content"],
    renderSections: [],
    prerenderSections: []
};



/**
 * Props của view — sinh tự động từ @props/@vars, không sửa tay.
 * Optional hết vì khai báo nào cũng có default.
 */
export interface DocsProps {
    /** viewId server gán khi hydrate */
    __SSR_VIEW_ID__?: string;
    [key: string]: any;
}

class DocsViewController extends ViewController {
    constructor(view: View) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this as any).setStaticConfig === 'function') {
            (this as any).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this as any).config = __VIEW_CONFIG__;
        }
    }
}

class DocsView extends View {
    constructor(__data__: DocsProps = {}, systemData: any = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, DocsViewController);
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
            name: 'DocsLayout',

                // Layout được tái dùng khi điều hướng giữa các trang docs (layout diff),
                // nên started() chỉ chạy một lần — phải tự đánh dấu lại sau mỗi lần chuyển route.
                started() {
                    this.markCurrent();
                    this._resync = () => setTimeout(() => this.markCurrent(), 40);
                    document.addEventListener('click', this._resync, true);
                    window.addEventListener('popstate', this._resync);
                },

                resumed() { this.markCurrent(); },

                stopped() { this.teardown(); },
                destroyed() { this.teardown(); },

                teardown() {
                    if (!this._resync) return;
                    document.removeEventListener('click', this._resync, true);
                    window.removeEventListener('popstate', this._resync);
                    this._resync = null;
                },

                markCurrent() {
                    const here = window.location.pathname.replace(/\/+$/, '') || '/';
                    document.querySelectorAll('.docs-nav a').forEach(a => {
                        a.classList.toggle('is-current', a.getAttribute('href') === here);
                    });
                }
        });

        this.__ctrl__.setup({
            superView: `${__layout__+"public"}`,
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
            this.block('block-content', 'content', (parentElement: any) => [
            this.html(`e085b222`, "div", parentElement,
                { classes: [{ type: 'static', value: "docs-shell" }] },
                (parentElement: any) => [
                this.html(`6dd03995`, "aside", parentElement,
                    { classes: [{ type: 'static', value: "docs-nav" }], attrs: { "aria-label": { type: 'static', value: "Điều hướng tài liệu" } } },
                    (parentElement: any) => [
                    this.html(`b74bada5`, "div", parentElement,
                        { classes: [{ type: 'static', value: "docs-nav-inner" }] },
                        (parentElement: any) => [
                        this.html(`ab54234c`, "p", parentElement,
                            { classes: [{ type: 'static', value: "docs-nav-group" }] },
                            (parentElement: any) => [
                            this.text('Bắt đầu')
                            ]),
                        this.html(`062914f4`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs" } } },
                            (parentElement: any) => [
                            this.text('Giới thiệu')
                            ]),
                        this.html(`0a893371`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/getting-started" } } },
                            (parentElement: any) => [
                            this.text('Cài đặt & route đầu tiên')
                            ]),
                        this.html(`c065c4e8`, "p", parentElement,
                            { classes: [{ type: 'static', value: "docs-nav-group" }] },
                            (parentElement: any) => [
                            this.text('Nền tảng')
                            ]),
                        this.html(`3ce1f1c8`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/architecture" } } },
                            (parentElement: any) => [
                            this.text('Kiến trúc hệ thống')
                            ]),
                        this.html(`1552bec6`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/contexts" } } },
                            (parentElement: any) => [
                            this.text('Context, module & controller')
                            ]),
                        this.html(`3465a2f6`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/compiler" } } },
                            (parentElement: any) => [
                            this.text('Compiler & AST')
                            ]),
                        this.html(`a2d73862`, "p", parentElement,
                            { classes: [{ type: 'static', value: "docs-nav-group" }] },
                            (parentElement: any) => [
                            this.text('Viết view')
                            ]),
                        this.html(`1056807b`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/sao-file" } } },
                            (parentElement: any) => [
                            this.text('Cấu trúc file .sao')
                            ]),
                        this.html(`aaf2bb19`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/directives" } } },
                            (parentElement: any) => [
                            this.text('Tham chiếu directive')
                            ]),
                        this.html(`845643d8`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/reactivity" } } },
                            (parentElement: any) => [
                            this.text('State & reactivity')
                            ]),
                        this.html(`7b830f85`, "p", parentElement,
                            { classes: [{ type: 'static', value: "docs-nav-group" }] },
                            (parentElement: any) => [
                            this.text('Runtime')
                            ]),
                        this.html(`7c745152`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/runtime" } } },
                            (parentElement: any) => [
                            this.text('Runtime & hydration')
                            ]),
                        this.html(`95c8cced`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/lifecycle" } } },
                            (parentElement: any) => [
                            this.text('Vòng đời & marker')
                            ]),
                        this.html(`8f7edaa9`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/router" } } },
                            (parentElement: any) => [
                            this.text('Router & dịch vụ client')
                            ]),
                        this.html(`d9d2333b`, "p", parentElement,
                            { classes: [{ type: 'static', value: "docs-nav-group" }] },
                            (parentElement: any) => [
                            this.text('Vận hành')
                            ]),
                        this.html(`d0dcf667`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/build" } } },
                            (parentElement: any) => [
                            this.text('Build, CLI & cấu hình')
                            ]),
                        this.html(`154b13f1`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/docs/status" } } },
                            (parentElement: any) => [
                            this.text('Giới hạn đã biết')
                            ]),
                        this.html(`841d8c6d`, "p", parentElement,
                            { classes: [{ type: 'static', value: "docs-nav-group" }] },
                            (parentElement: any) => [
                            this.text('Thực hành')
                            ]),
                        this.html(`76df8a6b`, "a", parentElement,
                            { attrs: { "href": { type: 'static', value: "/components" } } },
                            (parentElement: any) => [
                            this.text('Thư viện component')
                            ])
                        ])
                    ]),
                this.html(`8f86a03a`, "main", parentElement,
                    { classes: [{ type: 'static', value: "docs-main" }] },
                    (parentElement: any) => [
                    this.blockOutlet(`5dfc1d0d`, "doc", parentElement)
                    ])
                ])
            ]);
            this.superViewPath = `${__layout__+"public"}`;
            return this.extendView(this.superViewPath, {});
            }
        });

    }
}

// Export factory function
export function WebLayoutsDocs(__data__: DocsProps = {}, systemData: any = {}): DocsView {
    return new DocsView(__data__, systemData);
}
export default WebLayoutsDocs;
