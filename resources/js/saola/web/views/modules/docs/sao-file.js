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
            this.html(`ff96f7a7`, "header", parentElement,
                { classes: [{ type: 'static', value: "page-hero" }] },
                (parentElement) => [
                this.html(`15b892a7`, "div", parentElement, {}, (parentElement) => [
                    this.html(`ab74559e`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`943e8228`, "span", parentElement, {}, (parentElement) => [
                            this.text('03')
                        ]),
                        this.text(' VIẾT VIEW')
                        ]),
                    this.html(`9abe25a3`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Cấu trúc file .sao.')
                    ])
                ]),
                this.html(`f750a15d`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`2a968179`, "p", parentElement, {}, (parentElement) => [
                        this.text('Bốn phần theo đúng thứ tự: khai báo, template, script setup và style. Wrapper của template quyết định bạn viết cú pháp kiểu JavaScript hay kiểu PHP.')
                    ])
                    ])
                ]),
            this.html(`e5195f55`, "div", parentElement,
                { classes: [{ type: 'static', value: "doc-body" }] },
                (parentElement) => [
                this.html(`a805c5cb`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`a3f20685`, "span", parentElement, {}, (parentElement) => [
                        this.text('SFC')
                    ]),
                    this.text(' Single-file component')
                    ]),
                this.html(`c048d2ef`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Bốn phần, theo đúng thứ tự.')
                ]),
                this.html(`1c642396`, "p", parentElement, {}, (parentElement) => [
                    this.text('Một file '),
                    this.html(`34be1ee8`, "code", parentElement, {}, (parentElement) => [
                        this.text('.sao')
                    ]),
                    this.text(' gồm khai báo ở đầu file, template, '),
                    this.html(`f254a2ba`, "code", parentElement, {}, (parentElement) => [
                        this.text('<script setup>')
                    ]),
                    this.text(' và '),
                    this.html(`81d773d6`, "code", parentElement, {}, (parentElement) => [
                        this.text('<style>')
                    ]),
                    this.text('. Wrapper của template quyết định syntax mode.')
                ]),
                this.html(`753dcd15`, "div", parentElement,
                    { classes: [{ type: 'static', value: "stack-diagram" }] },
                    (parentElement) => [
                    this.html(`91304c91`, "article", parentElement, {}, (parentElement) => [
                        this.html(`7e885331`, "span", parentElement, {}, (parentElement) => [
                            this.text('01 / DECLARATIONS')
                        ]),
                        this.html(`e84a05ad`, "strong", parentElement, {}, (parentElement) => [
                            this.text('Đầu file')
                        ]),
                        this.html(`43d2830b`, "p", parentElement, {}, (parentElement) => [
                            this.html(`34b3779f`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('states')
                                ]),
                            this.html(`e47da07c`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('props')
                                ]),
                            this.html(`abc16b03`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('const')
                                ]),
                            this.html(`3141f2c4`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('let')
                                ]),
                            this.html(`4965dad1`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('vars')
                                ]),
                            this.html(`6b7d6a55`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('import')
                                ]),
                            this.html(`d9474672`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('await')
                                ]),
                            this.text(' — giữ nguyên thứ tự khai báo.')
                        ])
                    ]),
                    this.html(`ccbf766b`, "article", parentElement, {}, (parentElement) => [
                        this.html(`d3853391`, "span", parentElement, {}, (parentElement) => [
                            this.text('02 / TEMPLATE')
                        ]),
                        this.html(`933b627f`, "strong", parentElement, {}, (parentElement) => [
                            this.text('HTML + directive')
                        ]),
                        this.html(`347737c6`, "p", parentElement, {}, (parentElement) => [
                            this.html(`18a57c95`, "code", parentElement, {}, (parentElement) => [
                                this.text('<template>')
                            ]),
                            this.text(' hoặc '),
                            this.html(`9a40eb70`, "code", parentElement, {}, (parentElement) => [
                                this.text('<sao:blade>')
                            ]),
                            this.text(' bật '),
                            this.html(`8e4d622a`, "em", parentElement, {}, (parentElement) => [
                                this.text('modern syntax')
                            ]),
                            this.text(' kiểu JS; '),
                            this.html(`a97c7615`, "code", parentElement, {}, (parentElement) => [
                                this.text('<blade>')
                            ]),
                            this.text(' là legacy pass-through cú pháp PHP.')
                        ])
                    ]),
                    this.html(`bc8cd56a`, "article", parentElement, {}, (parentElement) => [
                        this.html(`d2d215a2`, "span", parentElement, {}, (parentElement) => [
                            this.text('03 / SCRIPT SETUP')
                        ]),
                        this.html(`0561a0b0`, "strong", parentElement, {}, (parentElement) => [
                            this.text('Logic phía client')
                        ]),
                        this.html(`14ae7e44`, "p", parentElement, {}, (parentElement) => [
                            this.text('Export default một object method. Method đọc thẳng state và setter trong closure, không cần '),
                            this.html(`00cdbd05`, "code", parentElement, {}, (parentElement) => [
                                this.text('this.')
                            ]),
                            this.text('. '),
                            this.html(`b3ac98d8`, "code", parentElement, {}, (parentElement) => [
                                this.text('lang="ts"')
                            ]),
                            this.text(' thì output ra '),
                            this.html(`bc9a5b57`, "code", parentElement, {}, (parentElement) => [
                                this.text('.ts')
                            ]),
                            this.text('.')
                        ])
                    ]),
                    this.html(`fbd955a6`, "article", parentElement, {}, (parentElement) => [
                        this.html(`45aeb3d1`, "span", parentElement, {}, (parentElement) => [
                            this.text('04 / STYLE')
                        ]),
                        this.html(`227f35b3`, "strong", parentElement, {}, (parentElement) => [
                            this.text('CSS của view')
                        ]),
                        this.html(`c06bbe94`, "p", parentElement, {}, (parentElement) => [
                            this.html(`5b10d6fc`, "code", parentElement, {}, (parentElement) => [
                                this.text('<style scoped>')
                            ]),
                            this.text(' gắn theo subtree của view, '),
                            this.html(`587bb499`, "code", parentElement, {}, (parentElement) => [
                                this.text('<style>')
                            ]),
                            this.text(' là global. '),
                            this.html(`f43e1601`, "code", parentElement, {}, (parentElement) => [
                                this.text('<link rel="stylesheet">')
                            ]),
                            this.text(' ở cấp file thành asset có ref-count.')
                        ])
                    ])
                    ]),
                this.html(`259642dc`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-sub" }] },
                    (parentElement) => [
                    this.text('Modern syntax so với legacy')
                    ]),
                this.html(`9193afc2`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`78b78df9`, "div", parentElement, {}, (parentElement) => [
                        this.html(`258a4832`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`36abf79b`, "code", parentElement, {}, (parentElement) => [
                                this.text('Biến')
                            ])
                            ]),
                        this.html(`7cb74155`, "span", parentElement, {}, (parentElement) => [
                            this.text('modern '),
                            this.html(`63060364`, "code", parentElement, {}, (parentElement) => [
                                this.text('user.name')
                            ]),
                            this.text(' — legacy '),
                            this.html(`81f88407`, "code", parentElement, {}, (parentElement) => [
                                this.text('$user->name')
                            ])
                        ]),
                        this.html(`bd54b8c0`, "b", parentElement, {}, (parentElement) => [
                            this.text('expression')
                        ])
                    ]),
                    this.html(`9203d8dc`, "div", parentElement, {}, (parentElement) => [
                        this.html(`80a7c663`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`79141976`, "code", parentElement, {}, (parentElement) => [
                                this.text('Vòng lặp')
                            ])
                            ]),
                        this.html(`e3ab42f9`, "span", parentElement, {}, (parentElement) => [
                            this.text('modern '),
                            this.html(`ac7eb163`, "code", parentElement, {}, (parentElement) => [
                                this.text('items as item')
                            ]),
                            this.text(' — legacy '),
                            this.html(`456bf3b7`, "code", parentElement, {}, (parentElement) => [
                                this.text('$items as $item')
                            ])
                        ]),
                        this.html(`af479ec9`, "b", parentElement, {}, (parentElement) => [
                            this.text('control')
                        ])
                    ]),
                    this.html(`4fd3ae28`, "div", parentElement, {}, (parentElement) => [
                        this.html(`81e37a12`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`e9cc96f9`, "code", parentElement, {}, (parentElement) => [
                                this.text('Object')
                            ])
                            ]),
                        this.html(`8ce379a0`, "span", parentElement, {}, (parentElement) => [
                            this.text('modern '),
                            this.html(`f0a42fe3`, "code", parentElement, {}, (parentElement) => [
                                this.text('{key: value}')
                            ]),
                            this.text(' — legacy '),
                            this.html(`345ed42b`, "code", parentElement, {}, (parentElement) => [
                                this.text('[\'key\' => $value]')
                            ])
                        ]),
                        this.html(`cf4e812d`, "b", parentElement, {}, (parentElement) => [
                            this.text('literal')
                        ])
                    ]),
                    this.html(`ab2ed1c2`, "div", parentElement, {}, (parentElement) => [
                        this.html(`888db24f`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`40d02c2c`, "code", parentElement, {}, (parentElement) => [
                                this.text('Nối chuỗi')
                            ])
                            ]),
                        this.html(`a670a34e`, "span", parentElement, {}, (parentElement) => [
                            this.text('modern template literal — legacy toán tử '),
                            this.html(`0adc99dd`, "code", parentElement, {}, (parentElement) => [
                                this.text('.')
                            ])
                        ]),
                        this.html(`4ff63249`, "b", parentElement, {}, (parentElement) => [
                            this.text('string')
                        ])
                    ])
                    ]),
                this.html(`f84e1dc6`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.text('Preprocessor chạy hai lượt: lượt một thu thập bảng ký hiệu, lượt hai biến đổi biểu thức. Nhờ vậy nó biết '),
                    this.html(`790994b0`, "code", parentElement, {}, (parentElement) => [
                        this.text('user')
                    ]),
                    this.text(' là state hay biến vòng lặp trước khi quyết định dịch thành '),
                    this.html(`ca7a84d7`, "code", parentElement, {}, (parentElement) => [
                        this.text('$user')
                    ]),
                    this.text(' hay giữ nguyên.')
                    ])
                ]),
            this.html(`ceb15976`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/docs/directives" } } },
                (parentElement) => [
                this.html(`60f0ac7a`, "div", parentElement, {}, (parentElement) => [
                    this.html(`b7585c3f`, "span", parentElement, {}, (parentElement) => [
                        this.text('Tiếp theo')
                    ]),
                    this.html(`8767f8f3`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Tham chiếu directive')
                    ])
                ]),
                this.html(`8287de38`, "span", parentElement,
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
