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
            start() {
                    this.setupScrollObserver();
                },

                setupScrollObserver() {
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                const id = entry.target.getAttribute('id');
                                document.querySelectorAll('.start-layout aside a').forEach(a => {
                                    if (a.getAttribute('href') === '#' + id) {
                                        a.classList.add('is-current');
                                    } else {
                                        a.classList.remove('is-current');
                                    }
                                });
                            }
                        });
                    }, {
                        rootMargin: '-10% 0px -70% 0px',
                        threshold: 0
                    });

                    document.querySelectorAll('.start-steps > article').forEach(article => {
                        observer.observe(article);
                    });

                    this.observer = observer;
                },

                destroy() {
                    if (this.observer) {
                        this.observer.disconnect();
                    }
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
            this.html(`Bdoc1`, "section", parentElement,
                { classes: [{ type: 'static', value: "page-hero" }, { type: 'static', value: "page-hero-start" }] },
                (parentElement) => [
                this.html(`Bdoc11`, "div", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc111`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`Bdoc1111`, "span", parentElement, {}, (parentElement) => [
                            this.text('04 / GETTING STARTED')
                        ]),
                        this.text(' Từ route đầu tiên')
                        ]),
                    this.html(`Bdoc112`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Giữ cách Laravel nghĩ.'),
                        this.html(`Bdoc1121`, "br", parentElement, {}),
                        this.html(`Bdoc1122`, "em", parentElement, {}, (parentElement) => [
                            this.text('Thêm cách SPA chạy.')
                        ])
                    ])
                ]),
                this.html(`Bdoc12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`Bdoc121`, "p", parentElement, {}, (parentElement) => [
                        this.text('Bắt đầu từ module, route và controller quen thuộc; Saola thêm view source và pipeline biên dịch phía trên chúng.')
                    ]),
                    this.html(`Bdoc122`, "dl", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc1221`, "div", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc12211`, "dt", parentElement, {}, (parentElement) => [
                                this.text('TIME TO MODEL')
                            ]),
                            this.html(`Bdoc12212`, "dd", parentElement, {}, (parentElement) => [
                                this.text('4 bước')
                            ])
                        ]),
                        this.html(`Bdoc1222`, "div", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc12221`, "dt", parentElement, {}, (parentElement) => [
                                this.text('REQUIRES')
                            ]),
                            this.html(`Bdoc12222`, "dd", parentElement, {}, (parentElement) => [
                                this.text('PHP + Node.js')
                            ])
                        ])
                    ])
                    ])
                ]),
            this.html(`Bdoc2`, "section", parentElement,
                { classes: [{ type: 'static', value: "start-layout" }] },
                (parentElement) => [
                this.html(`Bdoc21`, "aside", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc211`, "span", parentElement, {}, (parentElement) => [
                        this.text('TRÊN TRANG NÀY')
                    ]),
                    this.html(`Bdoc212`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#module" } } },
                        (parentElement) => [
                        this.text('01 / Module')
                        ]),
                    this.html(`Bdoc213`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#view" } } },
                        (parentElement) => [
                        this.text('02 / View')
                        ]),
                    this.html(`Bdoc214`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#compile" } } },
                        (parentElement) => [
                        this.text('03 / Compile')
                        ]),
                    this.html(`Bdoc215`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#verify" } } },
                        (parentElement) => [
                        this.text('04 / Verify')
                        ])
                ]),
                this.html(`Bdoc22`, "div", parentElement,
                    { classes: [{ type: 'static', value: "start-steps" }] },
                    (parentElement) => [
                    this.html(`Bdoc221`, "article", parentElement,
                        { attrs: { "id": { type: 'static', value: "module" } } },
                        (parentElement) => [
                        this.html(`Bdoc2211`, "span", parentElement, {}, (parentElement) => [
                            this.text('01')
                        ]),
                        this.html(`Bdoc2212`, "div", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc22121`, "p", parentElement,
                                { classes: [{ type: 'static', value: "kicker" }] },
                                (parentElement) => [
                                this.html(`Bdoc221211`, "span", parentElement, {}, (parentElement) => [
                                    this.text('ROUTE')
                                ]),
                                this.text(' Module first')
                                ]),
                            this.html(`Bdoc22122`, "h2", parentElement, {}, (parentElement) => [
                                this.text('Khai báo route trong context.')
                            ]),
                            this.html(`Bdoc22123`, "p", parentElement, {}, (parentElement) => [
                                this.text('Module giữ controller, service và route gần nhau. Context quyết định registry và asset bundle nào phục vụ request.')
                            ]),
                            this.include(`Bdoc2212c1`, 'web.components.code-block', parentElement, [], (parentElement) => ({
                                    "lang": "php",
                                    __ONE_CHILDREN_CONTENT__: (parentElement) => [
                                    this.text('System::context(\'web\')\n    ->module(\'home\', [\'prefix\' => \'/\'])\n    ->controller(HomeController::class)\n    ->group(function ($module) {\n        $module->get(\'/\', \'index\')->name(\'index\');\n    });')
                                ]
                                }))
                        ])
                        ]),
                    this.html(`Bdoc222`, "article", parentElement,
                        { attrs: { "id": { type: 'static', value: "view" } } },
                        (parentElement) => [
                        this.html(`Bdoc2221`, "span", parentElement, {}, (parentElement) => [
                            this.text('02')
                        ]),
                        this.html(`Bdoc2222`, "div", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc22221`, "p", parentElement,
                                { classes: [{ type: 'static', value: "kicker" }] },
                                (parentElement) => [
                                this.html(`Bdoc222211`, "span", parentElement, {}, (parentElement) => [
                                    this.text('VIEW')
                                ]),
                                this.text(' One source')
                                ]),
                            this.html(`Bdoc22222`, "h2", parentElement, {}, (parentElement) => [
                                this.text('Tạo view '),
                                this.html(`Bdoc222221`, "code", parentElement, {}, (parentElement) => [
                                    this.text('.sao')
                                ]),
                                this.text('.')
                            ]),
                            this.html(`Bdoc22223`, "p", parentElement, {}, (parentElement) => [
                                this.text('Template có thể extends layout, điền block, khai báo state và gắn event. Compiler dùng cùng nguồn để tạo Blade và JavaScript.')
                            ]),
                            this.include(`Bdoc2222c1`, 'web.components.code-block', parentElement, [], (parentElement) => ({
                                    "lang": "sao",
                                    __ONE_CHILDREN_CONTENT__: (parentElement) => [
                                    this.text('@states({ count: 0 })\n\n<template>\n    @extends(__layout__ + "public")\n    @block(\'content\')\n        <button @click(setCount(count + 1))>\n            Count: {{ count }}\n        </button>\n    @endblock\n</template>')
                                ]
                                }))
                        ])
                        ]),
                    this.html(`Bdoc223`, "article", parentElement,
                        { attrs: { "id": { type: 'static', value: "compile" } } },
                        (parentElement) => [
                        this.html(`Bdoc2231`, "span", parentElement, {}, (parentElement) => [
                            this.text('03')
                        ]),
                        this.html(`Bdoc2232`, "div", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc22321`, "p", parentElement,
                                { classes: [{ type: 'static', value: "kicker" }] },
                                (parentElement) => [
                                this.html(`Bdoc223211`, "span", parentElement, {}, (parentElement) => [
                                    this.text('BUILD')
                                ]),
                                this.text(' Dual output')
                                ]),
                            this.html(`Bdoc22322`, "h2", parentElement, {}, (parentElement) => [
                                this.text('Compile đúng context.')
                            ]),
                            this.html(`Bdoc22323`, "p", parentElement, {}, (parentElement) => [
                                this.text('Build tạo Blade view, JavaScript view registry và bundle client tương ứng. Watch mode giữ hai output đồng bộ trong lúc phát triển.')
                            ]),
                            this.include(`Bdoc2232c1`, 'web.components.code-block', parentElement, [], (parentElement) => ({
                                    "lang": "bash",
                                    __ONE_CHILDREN_CONTENT__: (parentElement) => [
                                    this.text('npm run build:views:web\nnpm run build:web\n\n# development\nnpm run dev:web')
                                ]
                                }))
                        ])
                        ]),
                    this.html(`Bdoc224`, "article", parentElement,
                        { attrs: { "id": { type: 'static', value: "verify" } } },
                        (parentElement) => [
                        this.html(`Bdoc2241`, "span", parentElement, {}, (parentElement) => [
                            this.text('04')
                        ]),
                        this.html(`Bdoc2242`, "div", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc22421`, "p", parentElement,
                                { classes: [{ type: 'static', value: "kicker" }] },
                                (parentElement) => [
                                this.html(`Bdoc224211`, "span", parentElement, {}, (parentElement) => [
                                    this.text('VERIFY')
                                ]),
                                this.text(' Both paths')
                                ]),
                            this.html(`Bdoc22422`, "h2", parentElement, {}, (parentElement) => [
                                this.text('Kiểm tra SSR lẫn SPA.')
                            ]),
                            this.html(`Bdoc22423`, "p", parentElement, {}, (parentElement) => [
                                this.text('Tải trực tiếp URL để xác nhận HTML đầu tiên, sau đó điều hướng nội bộ, tương tác state, back/forward và kiểm tra không có listener trùng.')
                            ]),
                            this.html(`Bdoc22424`, "ul", parentElement,
                                { classes: [{ type: 'static', value: "check-list" }] },
                                (parentElement) => [
                                this.html(`Bdoc224241`, "li", parentElement, {}, (parentElement) => [
                                    this.text('View có nội dung khi JavaScript chưa chạy')
                                ]),
                                this.html(`Bdoc224242`, "li", parentElement, {}, (parentElement) => [
                                    this.text('Hydration không tạo DOM hoặc event lần hai')
                                ]),
                                this.html(`Bdoc224243`, "li", parentElement, {}, (parentElement) => [
                                    this.text('Route context đúng với web/admin/mobile')
                                ]),
                                this.html(`Bdoc224244`, "li", parentElement, {}, (parentElement) => [
                                    this.text('Rerender chỉ thay vùng reactive liên quan')
                                ])
                                ])
                        ])
                        ])
                    ])
                ]),
            this.html(`Bdoc3`, "section", parentElement,
                { classes: [{ type: 'static', value: "start-cta" }] },
                (parentElement) => [
                this.html(`Bdoc31`, "div", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc311`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`Bdoc3111`, "span", parentElement, {}, (parentElement) => [
                            this.text('WORKING FIXTURE')
                        ]),
                        this.text(' Đừng chỉ đọc sơ đồ')
                        ]),
                    this.html(`Bdoc312`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Xem state và navigation'),
                        this.html(`Bdoc3121`, "br", parentElement, {}),
                        this.text('trên một view đang chạy.')
                    ])
                ]),
                this.html(`Bdoc32`, "a", parentElement,
                    { classes: [{ type: 'static', value: "button" }, { type: 'static', value: "button-light" }], attrs: { "href": { type: 'static', value: "/todo-list" } } },
                    (parentElement) => [
                    this.text('Mở Todo demo '),
                    this.html(`Bdoc321`, "span", parentElement, {}, (parentElement) => [
                        this.text('↗')
                    ])
                    ])
                ]),
            this.html(`Bdoc4`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/docs/architecture" } } },
                (parentElement) => [
                this.html(`Bdoc41`, "div", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc411`, "span", parentElement, {}, (parentElement) => [
                        this.text('Tiếp theo')
                    ]),
                    this.html(`Bdoc412`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Kiến trúc hệ thống')
                    ])
                ]),
                this.html(`Bdoc42`, "span", parentElement,
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