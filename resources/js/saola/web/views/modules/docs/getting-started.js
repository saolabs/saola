import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.docs.getting-started';
const __VIEW_NAMESPACE__ = 'web.modules.docs.';
const __VIEW_TYPE__ = 'view';
const __VIEW_CONFIG__ = {
    hasSuperView: true,
    viewType: 'view',
    sections: {
        "doc":{
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
    renderLongSections: ["doc"],
    renderSections: [],
    prerenderSections: []
};



class GettingStartedViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class GettingStartedView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, GettingStartedViewController);
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
            superView: `${__layout__+"docs"}`,
            subscribe: true,
            fetch: null,
            data: __data__,
            viewId: __VIEW_ID__,
            path: __VIEW_PATH__,
            scripts: [],
            styles: [],
            resources: [],
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
            this.block('block-doc', 'doc', (parentElement) => [
            this.html(`7b338a08`, "section", parentElement,
                { classes: [{ type: 'static', value: "page-hero" }, { type: 'static', value: "page-hero-start" }] },
                (parentElement) => [
                this.html(`3bb16c04`, "div", parentElement, {}, (parentElement) => [
                    this.html(`f150187b`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`bac94b21`, "span", parentElement, {}, (parentElement) => [
                            this.text('04 / GETTING STARTED')
                        ]),
                        this.text(' Từ route đầu tiên')
                        ]),
                    this.html(`663d8ed0`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Giữ cách Laravel nghĩ.'),
                        this.html(`c3c0e3f9`, "br", parentElement, {}),
                        this.html(`27038dbc`, "em", parentElement, {}, (parentElement) => [
                            this.text('Thêm cách SPA chạy.')
                        ])
                    ])
                ]),
                this.html(`57baae1a`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`8695e14e`, "p", parentElement, {}, (parentElement) => [
                        this.text('Bắt đầu từ module, route và controller quen thuộc; Saola thêm view source và pipeline biên dịch phía trên chúng.')
                    ]),
                    this.html(`1f0b28a5`, "dl", parentElement, {}, (parentElement) => [
                        this.html(`da4a7f2f`, "div", parentElement, {}, (parentElement) => [
                            this.html(`902aa345`, "dt", parentElement, {}, (parentElement) => [
                                this.text('TIME TO MODEL')
                            ]),
                            this.html(`e65d3a6b`, "dd", parentElement, {}, (parentElement) => [
                                this.text('4 bước')
                            ])
                        ]),
                        this.html(`e762468d`, "div", parentElement, {}, (parentElement) => [
                            this.html(`935f1ffd`, "dt", parentElement, {}, (parentElement) => [
                                this.text('REQUIRES')
                            ]),
                            this.html(`df3e6b57`, "dd", parentElement, {}, (parentElement) => [
                                this.text('PHP + Node.js')
                            ])
                        ])
                    ])
                    ])
                ]),
            this.html(`05ef4c27`, "section", parentElement,
                { classes: [{ type: 'static', value: "start-layout" }] },
                (parentElement) => [
                this.html(`1d1c97ef`, "aside", parentElement, {}, (parentElement) => [
                    this.html(`af939389`, "span", parentElement, {}, (parentElement) => [
                        this.text('TRÊN TRANG NÀY')
                    ]),
                    this.html(`9fed5329`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#module" } } },
                        (parentElement) => [
                        this.text('01 / Module')
                        ]),
                    this.html(`0f7e9c10`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#view" } } },
                        (parentElement) => [
                        this.text('02 / View')
                        ]),
                    this.html(`f7533ff1`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#compile" } } },
                        (parentElement) => [
                        this.text('03 / Compile')
                        ]),
                    this.html(`c4032a15`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#verify" } } },
                        (parentElement) => [
                        this.text('04 / Verify')
                        ])
                ]),
                this.html(`fbd9a84d`, "div", parentElement,
                    { classes: [{ type: 'static', value: "start-steps" }] },
                    (parentElement) => [
                    this.html(`13e1b7a4`, "article", parentElement,
                        { attrs: { "id": { type: 'static', value: "module" } } },
                        (parentElement) => [
                        this.html(`d32c987e`, "span", parentElement, {}, (parentElement) => [
                            this.text('01')
                        ]),
                        this.html(`f12e0938`, "div", parentElement, {}, (parentElement) => [
                            this.html(`fdb4a637`, "p", parentElement,
                                { classes: [{ type: 'static', value: "kicker" }] },
                                (parentElement) => [
                                this.html(`dfb1c367`, "span", parentElement, {}, (parentElement) => [
                                    this.text('ROUTE')
                                ]),
                                this.text(' Module first')
                                ]),
                            this.html(`8ea5a711`, "h2", parentElement, {}, (parentElement) => [
                                this.text('Khai báo route trong context.')
                            ]),
                            this.html(`bf64746c`, "p", parentElement, {}, (parentElement) => [
                                this.text('Module giữ controller, service và route gần nhau. Context quyết định registry và asset bundle nào phục vụ request.')
                            ]),
                            this.html(`be4a014f`, "pre", parentElement, {}, (parentElement) => [
                                this.html(`f1e9eb3b`, "code", parentElement, {}, (parentElement) => [
                                    this.html(`cd37afa5`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }] },
                                        (parentElement) => [
                                        this.text('System::context(\'web\')')
                                        ]),
                                    this.html(`ce9df19d`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                        (parentElement) => [
                                        this.text('->module(\'home\', [\'prefix\' => \'/\'])')
                                        ]),
                                    this.html(`58671c17`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                        (parentElement) => [
                                        this.text('->controller(HomeController::class)')
                                        ]),
                                    this.html(`429fe6c8`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                        (parentElement) => [
                                        this.text('->group(function ($module) {')
                                        ]),
                                    this.html(`90765127`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                        (parentElement) => [
                                        this.text('$module->get(\'/\', \'index\')->name(\'index\');')
                                        ]),
                                    this.html(`6c3b28bb`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                        (parentElement) => [
                                        this.text('});')
                                        ])
                                ])
                            ])
                        ])
                        ]),
                    this.html(`7610ec67`, "article", parentElement,
                        { attrs: { "id": { type: 'static', value: "view" } } },
                        (parentElement) => [
                        this.html(`d55ac7a6`, "span", parentElement, {}, (parentElement) => [
                            this.text('02')
                        ]),
                        this.html(`ea8aae76`, "div", parentElement, {}, (parentElement) => [
                            this.html(`b954152f`, "p", parentElement,
                                { classes: [{ type: 'static', value: "kicker" }] },
                                (parentElement) => [
                                this.html(`b202356c`, "span", parentElement, {}, (parentElement) => [
                                    this.text('VIEW')
                                ]),
                                this.text(' One source')
                                ]),
                            this.html(`39f642fd`, "h2", parentElement, {}, (parentElement) => [
                                this.text('Tạo view '),
                                this.html(`fd9e158f`, "code", parentElement, {}, (parentElement) => [
                                    this.text('.sao')
                                ]),
                                this.text('.')
                            ]),
                            this.html(`69aef52a`, "p", parentElement, {}, (parentElement) => [
                                this.text('Template có thể extends layout, điền block, khai báo state và gắn event. Compiler dùng cùng nguồn để tạo Blade và JavaScript.')
                            ]),
                            this.html(`ae2f02ca`, "pre", parentElement, {}, (parentElement) => [
                                this.html(`70127fb2`, "code", parentElement, {}, (parentElement) => [
                                    this.html(`11b9d241`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }] },
                                        (parentElement) => [
                                        this.html(`13b21639`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "directive-token" }] },
                                            (parentElement) => [
                                            this.text('states({ count: 0 })')
                                            ])
                                        ]),
                                    this.html(`4c624fdd`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-line-gap" }], attrs: { "aria-hidden": { type: 'static', value: "true" } } }),
                                    this.html(`2f0a3853`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }] },
                                        (parentElement) => [
                                        this.html(`89e10e87`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "html-token" }] },
                                            (parentElement) => [
                                            this.text('template')
                                            ])
                                        ]),
                                    this.html(`12844ae9`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                        (parentElement) => [
                                        this.html(`1022e064`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "directive-token" }] },
                                            (parentElement) => [
                                            this.text('extends(__layout__ + "public")')
                                            ])
                                        ]),
                                    this.html(`9a42cda2`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                        (parentElement) => [
                                        this.html(`a19cc106`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "directive-token" }] },
                                            (parentElement) => [
                                            this.text('block(\'content\')')
                                            ])
                                        ]),
                                    this.html(`ab093b01`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                        (parentElement) => [
                                        this.html(`64286e09`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "html-token" }] },
                                            (parentElement) => [
                                            this.text('button '),
                                            this.html(`d9e6265c`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "directive-token" }] },
                                                (parentElement) => [
                                                this.text('click(setCount(count + 1))')
                                                ])
                                            ])
                                        ]),
                                    this.html(`07d3eed3`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-3" }] },
                                        (parentElement) => [
                                        this.text('Count: '),
                                        this.html(`10996eb3`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "mustache-token" }] },
                                            (parentElement) => [
                                            this.text('count')
                                            ])
                                        ]),
                                    this.html(`345c7c25`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                        (parentElement) => [
                                        this.html(`a8b5bce2`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "html-token" }, { type: 'static', value: "html-token-close" }] },
                                            (parentElement) => [
                                            this.text('button')
                                            ])
                                        ]),
                                    this.html(`fbb8d83e`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                        (parentElement) => [
                                        this.html(`acd3ff23`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "directive-token" }] },
                                            (parentElement) => [
                                            this.text('endblock')
                                            ])
                                        ]),
                                    this.html(`8e4f0806`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }] },
                                        (parentElement) => [
                                        this.html(`019114ed`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "html-token" }, { type: 'static', value: "html-token-close" }] },
                                            (parentElement) => [
                                            this.text('template')
                                            ])
                                        ])
                                ])
                            ])
                        ])
                        ]),
                    this.html(`f6357ac6`, "article", parentElement,
                        { attrs: { "id": { type: 'static', value: "compile" } } },
                        (parentElement) => [
                        this.html(`28f6beb4`, "span", parentElement, {}, (parentElement) => [
                            this.text('03')
                        ]),
                        this.html(`329d456a`, "div", parentElement, {}, (parentElement) => [
                            this.html(`a23e2a55`, "p", parentElement,
                                { classes: [{ type: 'static', value: "kicker" }] },
                                (parentElement) => [
                                this.html(`6c4cd7c4`, "span", parentElement, {}, (parentElement) => [
                                    this.text('BUILD')
                                ]),
                                this.text(' Dual output')
                                ]),
                            this.html(`03234a81`, "h2", parentElement, {}, (parentElement) => [
                                this.text('Compile đúng context.')
                            ]),
                            this.html(`9d146e16`, "p", parentElement, {}, (parentElement) => [
                                this.text('Build tạo Blade view, JavaScript view registry và bundle client tương ứng. Watch mode giữ hai output đồng bộ trong lúc phát triển.')
                            ]),
                            this.html(`5a4585dd`, "pre", parentElement, {}, (parentElement) => [
                                this.html(`cdaba2c9`, "code", parentElement, {}, (parentElement) => [
                                    this.html(`ed8447a4`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }] },
                                        (parentElement) => [
                                        this.text('npm run build:views:web')
                                        ]),
                                    this.html(`b6aea3b5`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }] },
                                        (parentElement) => [
                                        this.text('npm run build:web')
                                        ]),
                                    this.html(`eb41f970`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-line-gap" }], attrs: { "aria-hidden": { type: 'static', value: "true" } } }),
                                    this.html(`ab3dee8c`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-comment" }] },
                                        (parentElement) => [
                                        this.text('# development')
                                        ]),
                                    this.html(`1e8beaa1`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }] },
                                        (parentElement) => [
                                        this.text('npm run dev:web')
                                        ])
                                ])
                            ])
                        ])
                        ]),
                    this.html(`436566c4`, "article", parentElement,
                        { attrs: { "id": { type: 'static', value: "verify" } } },
                        (parentElement) => [
                        this.html(`752758aa`, "span", parentElement, {}, (parentElement) => [
                            this.text('04')
                        ]),
                        this.html(`73ce76b9`, "div", parentElement, {}, (parentElement) => [
                            this.html(`026f42c6`, "p", parentElement,
                                { classes: [{ type: 'static', value: "kicker" }] },
                                (parentElement) => [
                                this.html(`bfe82e6d`, "span", parentElement, {}, (parentElement) => [
                                    this.text('VERIFY')
                                ]),
                                this.text(' Both paths')
                                ]),
                            this.html(`2bea5833`, "h2", parentElement, {}, (parentElement) => [
                                this.text('Kiểm tra SSR lẫn SPA.')
                            ]),
                            this.html(`c92eaa5b`, "p", parentElement, {}, (parentElement) => [
                                this.text('Tải trực tiếp URL để xác nhận HTML đầu tiên, sau đó điều hướng nội bộ, tương tác state, back/forward và kiểm tra không có listener trùng.')
                            ]),
                            this.html(`e5627c77`, "ul", parentElement,
                                { classes: [{ type: 'static', value: "check-list" }] },
                                (parentElement) => [
                                this.html(`43193089`, "li", parentElement, {}, (parentElement) => [
                                    this.text('View có nội dung khi JavaScript chưa chạy')
                                ]),
                                this.html(`c1b71561`, "li", parentElement, {}, (parentElement) => [
                                    this.text('Hydration không tạo DOM hoặc event lần hai')
                                ]),
                                this.html(`89a3e6c3`, "li", parentElement, {}, (parentElement) => [
                                    this.text('Route context đúng với web/admin/mobile')
                                ]),
                                this.html(`985a2dbd`, "li", parentElement, {}, (parentElement) => [
                                    this.text('Rerender chỉ thay vùng reactive liên quan')
                                ])
                                ])
                        ])
                        ])
                    ])
                ]),
            this.html(`9fd19a30`, "section", parentElement,
                { classes: [{ type: 'static', value: "start-cta" }] },
                (parentElement) => [
                this.html(`849145f1`, "div", parentElement, {}, (parentElement) => [
                    this.html(`0d56026d`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`773a2605`, "span", parentElement, {}, (parentElement) => [
                            this.text('WORKING FIXTURE')
                        ]),
                        this.text(' Đừng chỉ đọc sơ đồ')
                        ]),
                    this.html(`de7a1e42`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Xem state và navigation'),
                        this.html(`939960ee`, "br", parentElement, {}),
                        this.text('trên một view đang chạy.')
                    ])
                ]),
                this.html(`0ff18c59`, "a", parentElement,
                    { classes: [{ type: 'static', value: "button" }, { type: 'static', value: "button-light" }], attrs: { "href": { type: 'static', value: "/todo-list" } } },
                    (parentElement) => [
                    this.text('Mở Todo demo '),
                    this.html(`77b1ff2f`, "span", parentElement, {}, (parentElement) => [
                        this.text('↗')
                    ])
                    ])
                ]),
            this.html(`11678124`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/docs/architecture" } } },
                (parentElement) => [
                this.html(`d3123a87`, "div", parentElement, {}, (parentElement) => [
                    this.html(`29215666`, "span", parentElement, {}, (parentElement) => [
                        this.text('Tiếp theo')
                    ]),
                    this.html(`775cdfb1`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Kiến trúc hệ thống')
                    ])
                ]),
                this.html(`507799eb`, "span", parentElement,
                    { classes: [{ type: 'static', value: "button" }, { type: 'static', value: "button-primary" }] },
                    (parentElement) => [
                    this.text('Đọc tiếp →')
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
export function WebModulesDocsGettingStarted(__data__ = {}, systemData = {}) {
    return new GettingStartedView(__data__, systemData);
}
export default WebModulesDocsGettingStarted;
