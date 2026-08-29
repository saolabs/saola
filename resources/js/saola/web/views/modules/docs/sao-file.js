import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.docs.sao-file';
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



class SaoFileViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class SaoFileView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, SaoFileViewController);
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
            this.html(`Bdoc1`, "header", parentElement,
                { classes: [{ type: 'static', value: "page-hero" }] },
                (parentElement) => [
                this.html(`Bdoc11`, "div", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc111`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`Bdoc1111`, "span", parentElement, {}, (parentElement) => [
                            this.text('03')
                        ]),
                        this.text(' VIẾT VIEW')
                        ]),
                    this.html(`Bdoc112`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Cấu trúc file .sao.')
                    ])
                ]),
                this.html(`Bdoc12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`Bdoc121`, "p", parentElement, {}, (parentElement) => [
                        this.text('Bốn phần theo đúng thứ tự: khai báo, template, script setup và style. Wrapper của template quyết định bạn viết cú pháp kiểu JavaScript hay kiểu PHP.')
                    ])
                    ])
                ]),
            this.html(`Bdoc2`, "div", parentElement,
                { classes: [{ type: 'static', value: "doc-body" }] },
                (parentElement) => [
                this.html(`Bdoc21`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`Bdoc211`, "span", parentElement, {}, (parentElement) => [
                        this.text('SFC')
                    ]),
                    this.text(' Single-file component')
                    ]),
                this.html(`Bdoc22`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Bốn phần, theo đúng thứ tự.')
                ]),
                this.html(`Bdoc23`, "p", parentElement, {}, (parentElement) => [
                    this.text('Một file '),
                    this.html(`Bdoc231`, "code", parentElement, {}, (parentElement) => [
                        this.text('.sao')
                    ]),
                    this.text(' gồm khai báo ở đầu file, template, '),
                    this.html(`Bdoc232`, "code", parentElement, {}, (parentElement) => [
                        this.text('<script setup>')
                    ]),
                    this.text(' và '),
                    this.html(`Bdoc233`, "code", parentElement, {}, (parentElement) => [
                        this.text('<style>')
                    ]),
                    this.text('. Wrapper của template quyết định syntax mode.')
                ]),
                this.html(`Bdoc24`, "div", parentElement,
                    { classes: [{ type: 'static', value: "stack-diagram" }] },
                    (parentElement) => [
                    this.html(`Bdoc241`, "article", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2411`, "span", parentElement, {}, (parentElement) => [
                            this.text('01 / DECLARATIONS')
                        ]),
                        this.html(`Bdoc2412`, "strong", parentElement, {}, (parentElement) => [
                            this.text('Đầu file')
                        ]),
                        this.html(`Bdoc2413`, "p", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc24131`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('import')
                                ]),
                            this.text('  '),
                            this.html(`Bdoc24132`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('vars')
                                ]),
                            this.text('  '),
                            this.html(`Bdoc24133`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('props')
                                ]),
                            this.text('  '),
                            this.html(`Bdoc24134`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('states')
                                ]),
                            this.text('  '),
                            this.html(`Bdoc24135`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('const')
                                ]),
                            this.text('  '),
                            this.html(`Bdoc24136`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('let')
                                ]),
                            this.text('  '),
                            this.html(`Bdoc24137`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('await')
                                ]),
                            this.text(' — giữ nguyên thứ tự khai báo.')
                        ])
                    ]),
                    this.html(`Bdoc242`, "article", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2421`, "span", parentElement, {}, (parentElement) => [
                            this.text('02 / TEMPLATE')
                        ]),
                        this.html(`Bdoc2422`, "strong", parentElement, {}, (parentElement) => [
                            this.text('HTML + directive')
                        ]),
                        this.html(`Bdoc2423`, "p", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc24231`, "code", parentElement, {}, (parentElement) => [
                                this.text('<template>')
                            ]),
                            this.text(' hoặc '),
                            this.html(`Bdoc24232`, "code", parentElement, {}, (parentElement) => [
                                this.text('<sao:blade>')
                            ]),
                            this.text(' bật '),
                            this.html(`Bdoc24233`, "em", parentElement, {}, (parentElement) => [
                                this.text('modern syntax')
                            ]),
                            this.text(' kiểu JS; '),
                            this.html(`Bdoc24234`, "code", parentElement, {}, (parentElement) => [
                                this.text('<blade>')
                            ]),
                            this.text(' là legacy pass-through cú pháp PHP.')
                        ])
                    ]),
                    this.html(`Bdoc243`, "article", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2431`, "span", parentElement, {}, (parentElement) => [
                            this.text('03 / SCRIPT SETUP')
                        ]),
                        this.html(`Bdoc2432`, "strong", parentElement, {}, (parentElement) => [
                            this.text('Logic phía client')
                        ]),
                        this.html(`Bdoc2433`, "p", parentElement, {}, (parentElement) => [
                            this.text('Export default một object method. Method đọc thẳng state và setter trong closure, không cần '),
                            this.html(`Bdoc24331`, "code", parentElement, {}, (parentElement) => [
                                this.text('this.')
                            ]),
                            this.text('. '),
                            this.html(`Bdoc24332`, "code", parentElement, {}, (parentElement) => [
                                this.text('lang="ts"')
                            ]),
                            this.text(' thì output ra '),
                            this.html(`Bdoc24333`, "code", parentElement, {}, (parentElement) => [
                                this.text('.ts')
                            ]),
                            this.text('.')
                        ])
                    ]),
                    this.html(`Bdoc244`, "article", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2441`, "span", parentElement, {}, (parentElement) => [
                            this.text('04 / STYLE')
                        ]),
                        this.html(`Bdoc2442`, "strong", parentElement, {}, (parentElement) => [
                            this.text('CSS của view')
                        ]),
                        this.html(`Bdoc2443`, "p", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc24431`, "code", parentElement, {}, (parentElement) => [
                                this.text('<style scoped>')
                            ]),
                            this.text(' gắn theo subtree của view, '),
                            this.html(`Bdoc24432`, "code", parentElement, {}, (parentElement) => [
                                this.text('<style>')
                            ]),
                            this.text(' là global. '),
                            this.html(`Bdoc24433`, "code", parentElement, {}, (parentElement) => [
                                this.text('<link rel="stylesheet">')
                            ]),
                            this.text(' ở cấp file thành asset có ref-count.')
                        ])
                    ])
                    ]),
                this.html(`Bdoc25`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-sub" }] },
                    (parentElement) => [
                    this.text('Modern syntax so với legacy')
                    ]),
                this.html(`Bdoc26`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`Bdoc261`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2611`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc26111`, "code", parentElement, {}, (parentElement) => [
                                this.text('Biến')
                            ])
                            ]),
                        this.html(`Bdoc2612`, "span", parentElement, {}, (parentElement) => [
                            this.text('modern '),
                            this.html(`Bdoc26121`, "code", parentElement, {}, (parentElement) => [
                                this.text('user.name')
                            ]),
                            this.text(' — legacy '),
                            this.html(`Bdoc26122`, "code", parentElement, {}, (parentElement) => [
                                this.text('$user->name')
                            ])
                        ]),
                        this.html(`Bdoc2613`, "b", parentElement, {}, (parentElement) => [
                            this.text('expression')
                        ])
                    ]),
                    this.html(`Bdoc262`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2621`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc26211`, "code", parentElement, {}, (parentElement) => [
                                this.text('Vòng lặp')
                            ])
                            ]),
                        this.html(`Bdoc2622`, "span", parentElement, {}, (parentElement) => [
                            this.text('modern '),
                            this.html(`Bdoc26221`, "code", parentElement, {}, (parentElement) => [
                                this.text('items as item')
                            ]),
                            this.text(' — legacy '),
                            this.html(`Bdoc26222`, "code", parentElement, {}, (parentElement) => [
                                this.text('$items as $item')
                            ])
                        ]),
                        this.html(`Bdoc2623`, "b", parentElement, {}, (parentElement) => [
                            this.text('control')
                        ])
                    ]),
                    this.html(`Bdoc263`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2631`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc26311`, "code", parentElement, {}, (parentElement) => [
                                this.text('Object')
                            ])
                            ]),
                        this.html(`Bdoc2632`, "span", parentElement, {}, (parentElement) => [
                            this.text('modern '),
                            this.html(`Bdoc26321`, "code", parentElement, {}, (parentElement) => [
                                this.text('{key: value}')
                            ]),
                            this.text(' — legacy '),
                            this.html(`Bdoc26322`, "code", parentElement, {}, (parentElement) => [
                                this.text('[\'key\' => $value]')
                            ])
                        ]),
                        this.html(`Bdoc2633`, "b", parentElement, {}, (parentElement) => [
                            this.text('literal')
                        ])
                    ]),
                    this.html(`Bdoc264`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2641`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc26411`, "code", parentElement, {}, (parentElement) => [
                                this.text('Nối chuỗi')
                            ])
                            ]),
                        this.html(`Bdoc2642`, "span", parentElement, {}, (parentElement) => [
                            this.text('modern template literal — legacy toán tử '),
                            this.html(`Bdoc26421`, "code", parentElement, {}, (parentElement) => [
                                this.text('.')
                            ])
                        ]),
                        this.html(`Bdoc2643`, "b", parentElement, {}, (parentElement) => [
                            this.text('string')
                        ])
                    ])
                    ]),
                this.html(`Bdoc27`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.text('Preprocessor chạy hai lượt: lượt một thu thập bảng ký hiệu, lượt hai biến đổi biểu thức. Nhờ vậy nó biết '),
                    this.html(`Bdoc271`, "code", parentElement, {}, (parentElement) => [
                        this.text('user')
                    ]),
                    this.text(' là state hay biến vòng lặp trước khi quyết định dịch thành '),
                    this.html(`Bdoc272`, "code", parentElement, {}, (parentElement) => [
                        this.text('$user')
                    ]),
                    this.text(' hay giữ nguyên.')
                    ])
                ]),
            this.html(`Bdoc3`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/docs/directives" } } },
                (parentElement) => [
                this.html(`Bdoc31`, "div", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc311`, "span", parentElement, {}, (parentElement) => [
                        this.text('Tiếp theo')
                    ]),
                    this.html(`Bdoc312`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Tham chiếu directive')
                    ])
                ]),
                this.html(`Bdoc32`, "span", parentElement,
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
export function WebModulesDocsSaoFile(__data__ = {}, systemData = {}) {
    return new SaoFileView(__data__, systemData);
}
export default WebModulesDocsSaoFile;