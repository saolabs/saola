import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.docs.system-vars';
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



class SystemVarsViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class SystemVarsView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, SystemVarsViewController);
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
                            this.text('10')
                        ]),
                        this.text(' THAM CHIẾU')
                        ]),
                    this.html(`Bdoc112`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Biến hệ thống.')
                    ])
                ]),
                this.html(`Bdoc12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`Bdoc121`, "p", parentElement, {}, (parentElement) => [
                        this.text('Hai nhóm biến khác hẳn nhau: nhóm đường dẫn do context cấp để bạn viết, và nhóm định danh do compiler sinh ra để runtime khớp DOM. Nhầm nhóm là nguồn của phần lớn lỗi khó hiểu.')
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
                        this.text('ĐƯỜNG DẪN')
                    ]),
                    this.text(' Context cấp, bạn dùng')
                    ]),
                this.html(`Bdoc22`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Viết đường dẫn view mà không đóng đinh context.')
                ]),
                this.html(`Bdoc23`, "p", parentElement, {}, (parentElement) => [
                    this.text('Mỗi context tự khai báo thư mục của mình, rồi '),
                    this.html(`Bdoc231`, "code", parentElement, {}, (parentElement) => [
                        this.text('ViewContextManager')
                    ]),
                    this.text(' dựng bảng biến tương ứng. Cùng một dòng '),
                    this.html(`Bdoc232`, "code", parentElement, {}, (parentElement) => [
                        this.text('@extends(__layout__ + \'base\')')
                    ]),
                    this.text(' trỏ tới '),
                    this.html(`Bdoc233`, "code", parentElement, {}, (parentElement) => [
                        this.text('web.layouts.base')
                    ]),
                    this.text(' ở context web và '),
                    this.html(`Bdoc234`, "code", parentElement, {}, (parentElement) => [
                        this.text('admin.layouts.base')
                    ]),
                    this.text(' ở context admin — bạn không phải viết hai bản.')
                ]),
                this.html(`Bdoc24`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`Bdoc241`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2411`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24111`, "code", parentElement, {}, (parentElement) => [
                                this.text('__base__')
                            ])
                            ]),
                        this.html(`Bdoc2412`, "span", parentElement, {}, (parentElement) => [
                            this.text('Gốc thư mục view của context đang phục vụ')
                        ]),
                        this.html(`Bdoc2413`, "b", parentElement, {}, (parentElement) => [
                            this.text('web.')
                        ])
                    ]),
                    this.html(`Bdoc242`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2421`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24211`, "code", parentElement, {}, (parentElement) => [
                                this.text('__layout__')
                            ])
                            ]),
                        this.html(`Bdoc2422`, "span", parentElement, {}, (parentElement) => [
                            this.text('Thư mục layout — dùng với '),
                            this.html(`Bdoc24221`, "code", parentElement, {}, (parentElement) => [
                                this.text('@extends')
                            ])
                        ]),
                        this.html(`Bdoc2423`, "b", parentElement, {}, (parentElement) => [
                            this.text('web.layouts.')
                        ])
                    ]),
                    this.html(`Bdoc243`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2431`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24311`, "code", parentElement, {}, (parentElement) => [
                                this.text('__module__')
                            ])
                            ]),
                        this.html(`Bdoc2432`, "span", parentElement, {}, (parentElement) => [
                            this.text('Thư mục module — nơi đặt trang của từng module')
                        ]),
                        this.html(`Bdoc2433`, "b", parentElement, {}, (parentElement) => [
                            this.text('web.modules.')
                        ])
                    ]),
                    this.html(`Bdoc244`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2441`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24411`, "code", parentElement, {}, (parentElement) => [
                                this.text('__component__')
                            ])
                            ]),
                        this.html(`Bdoc2442`, "span", parentElement, {}, (parentElement) => [
                            this.text('Component dùng lại — thường đi với '),
                            this.html(`Bdoc24421`, "code", parentElement, {}, (parentElement) => [
                                this.text('@import')
                            ])
                        ]),
                        this.html(`Bdoc2443`, "b", parentElement, {}, (parentElement) => [
                            this.text('web.components.')
                        ])
                    ]),
                    this.html(`Bdoc245`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2451`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24511`, "code", parentElement, {}, (parentElement) => [
                                this.text('__partial__')
                            ])
                            ]),
                        this.html(`Bdoc2452`, "span", parentElement, {}, (parentElement) => [
                            this.text('Mảnh view nhỏ, không có vòng đời riêng')
                        ]),
                        this.html(`Bdoc2453`, "b", parentElement, {}, (parentElement) => [
                            this.text('web.partials.')
                        ])
                    ]),
                    this.html(`Bdoc246`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2461`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24611`, "code", parentElement, {}, (parentElement) => [
                                this.text('__template__')
                            ])
                            ]),
                        this.html(`Bdoc2462`, "span", parentElement, {}, (parentElement) => [
                            this.text('Template dùng chung nhiều nơi')
                        ]),
                        this.html(`Bdoc2463`, "b", parentElement, {}, (parentElement) => [
                            this.text('web.templates.')
                        ])
                    ]),
                    this.html(`Bdoc247`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2471`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24711`, "code", parentElement, {}, (parentElement) => [
                                this.text('__page__')
                            ])
                            ]),
                        this.html(`Bdoc2472`, "span", parentElement, {}, (parentElement) => [
                            this.text('Trang tĩnh của context')
                        ]),
                        this.html(`Bdoc2473`, "b", parentElement, {}, (parentElement) => [
                            this.text('web.pages.')
                        ])
                    ]),
                    this.html(`Bdoc248`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2481`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24811`, "code", parentElement, {}, (parentElement) => [
                                this.text('__system__')
                            ])
                            ]),
                        this.html(`Bdoc2482`, "span", parentElement, {}, (parentElement) => [
                            this.text('View của chính hệ thống, không đổi theo context')
                        ]),
                        this.html(`Bdoc2483`, "b", parentElement, {}, (parentElement) => [
                            this.text('_system.')
                        ])
                    ])
                    ]),
                this.html(`Bdoc25`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-sub" }] },
                    (parentElement) => [
                    this.text('Cách dùng')
                    ]),
                this.include(`Bdoc2c1`, 'web.components.code-window', parentElement, [], (parentElement) => ({
                        "label": "SAO",
                        "title": `modules/docs/mask.sao`,
                        "lang": "html",
                        __ONE_CHILDREN_CONTENT__: (parentElement) => [
                        this.text('@import(__component__ + \'code-window\')\n@extends(__layout__ + \'docs\')')
                    ]
                    })),
                this.html(`Bdoc26`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.text('Giá trị đã có sẵn dấu chấm ở cuối ('),
                    this.html(`Bdoc261`, "code", parentElement, {}, (parentElement) => [
                        this.text('web.layouts.')
                    ]),
                    this.text(') nên nối trực tiếp: '),
                    this.html(`Bdoc262`, "code", parentElement, {}, (parentElement) => [
                        this.text('__layout__ + \'docs\'')
                    ]),
                    this.text(', đừng thêm dấu chấm nữa.')
                    ]),
                this.html(`Bdoc27`, "p", parentElement, {}, (parentElement) => [
                    this.text('Muốn đổi thư mục, khai báo '),
                    this.html(`Bdoc271`, "code", parentElement, {}, (parentElement) => [
                        this.text('directories')
                    ]),
                    this.text(' lúc đăng ký context — bảng biến tự dựng lại theo, mọi view đang dùng biến vẫn đúng.')
                ]),
                this.include(`Bdoc2c2`, 'web.components.code-window', parentElement, [], (parentElement) => ({
                        "label": "PHP",
                        "title": `ModuleServiceProvider.php`,
                        "lang": "php",
                        __ONE_CHILDREN_CONTENT__: (parentElement) => [
                        this.text('System::context(\'admin\', [\n    \'prefix\' => \'admin\',\n    \'directories\' => [\'layouts\' => \'admin.shells\'],\n]);\n// từ đây __layout__ của context admin là \'admin.shells.\'')
                    ]
                    })),
                this.html(`Bdoc28`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`Bdoc281`, "span", parentElement, {}, (parentElement) => [
                        this.text('VÒNG LẶP')
                    ]),
                    this.text(' Thứ duy nhất bạn viết')
                    ]),
                this.html(`Bdoc29`, "h2", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc291`, "code", parentElement, {}, (parentElement) => [
                        this.text('__loop')
                    ]),
                    this.text(' có mặt trong '),
                    this.html(`Bdoc292`, "code", parentElement, {}, (parentElement) => [
                        this.text('@foreach')
                    ]),
                    this.text('.')
                ]),
                this.html(`Bdoc2e10_`, "p", parentElement, {}, (parentElement) => [
                    this.text('Đây là biến duy nhất của nhóm này bạn gõ trực tiếp vào '),
                    this.html(`Bdoc2e10_1`, "code", parentElement, {}, (parentElement) => [
                        this.text('.sao')
                    ]),
                    this.text('. Compiler tự map sang '),
                    this.html(`Bdoc2e10_2`, "code", parentElement, {}, (parentElement) => [
                        this.text('$loop')
                    ]),
                    this.text(' của Laravel ở nhánh Blade, nên đừng viết '),
                    this.html(`Bdoc2e10_3`, "code", parentElement, {}, (parentElement) => [
                        this.text('$loop')
                    ]),
                    this.text(' — phía JavaScript không có biến đó.')
                ]),
                this.include(`Bdoc2c3`, 'web.components.code-window', parentElement, [], (parentElement) => ({
                        "label": "SAO",
                        "title": "Trong template",
                        "lang": "html",
                        __ONE_CHILDREN_CONTENT__: (parentElement) => [
                        this.text('@foreach(items as item)\n    <li>{{ __loop.iteration }}. {{ item[\'name\'] }}</li>\n@endforeach')
                    ]
                    })),
                this.html(`Bdoc2e11_`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`Bdoc2e11_1`, "span", parentElement, {}, (parentElement) => [
                        this.text('ĐỊNH DANH')
                    ]),
                    this.text(' Compiler sinh, bạn không gõ')
                    ]),
                this.html(`Bdoc2e12_`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Cùng một tên, hai dạng ở hai đầu ra.')
                ]),
                this.html(`Bdoc2e13_`, "p", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc2e13_1`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Không biến nào dưới đây được viết trong '),
                        this.html(`Bdoc2e13_11`, "code", parentElement, {}, (parentElement) => [
                            this.text('.sao')
                        ]),
                        this.text('.')
                    ]),
                    this.text(' Chúng chỉ xuất hiện trong file đã biên dịch, và tồn tại để hai nhánh nhận ra cùng một element. Dấu '),
                    this.html(`Bdoc2e13_2`, "code", parentElement, {}, (parentElement) => [
                        this.text('$')
                    ]),
                    this.text(' là của PHP nên chỉ có ở nhánh Blade; nhánh JavaScript dùng đúng tên đó nhưng không có '),
                    this.html(`Bdoc2e13_3`, "code", parentElement, {}, (parentElement) => [
                        this.text('$')
                    ]),
                    this.text('.')
                ]),
                this.html(`Bdoc2e14_`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`Bdoc2e14_1`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e14_11`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e14_111`, "code", parentElement, {}, (parentElement) => [
                                this.text('$__VIEW_ID__')
                            ]),
                            this.text(' · '),
                            this.html(`Bdoc2e14_112`, "code", parentElement, {}, (parentElement) => [
                                this.text('__VIEW_ID__')
                            ])
                            ]),
                        this.html(`Bdoc2e14_12`, "span", parentElement, {}, (parentElement) => [
                            this.text('Định danh một '),
                            this.html(`Bdoc2e14_121`, "em", parentElement, {}, (parentElement) => [
                                this.text('instance')
                            ]),
                            this.text(' view lúc chạy ('),
                            this.html(`Bdoc2e14_122`, "code", parentElement, {}, (parentElement) => [
                                this.text('v0')
                            ]),
                            this.text(', '),
                            this.html(`Bdoc2e14_123`, "code", parentElement, {}, (parentElement) => [
                                this.text('v1')
                            ]),
                            this.text('…). Ghép với id element thành class '),
                            this.html(`Bdoc2e14_124`, "code", parentElement, {}, (parentElement) => [
                                this.text('v0-e1')
                            ]),
                            this.text(' để hydrate tìm đúng node.')
                        ]),
                        this.html(`Bdoc2e14_13`, "b", parentElement, {}, (parentElement) => [
                            this.text('blade · js')
                        ])
                    ]),
                    this.html(`Bdoc2e14_2`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e14_21`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e14_211`, "code", parentElement, {}, (parentElement) => [
                                this.text('__VIEW_PATH__')
                            ])
                            ]),
                        this.html(`Bdoc2e14_22`, "span", parentElement, {}, (parentElement) => [
                            this.text('Đường dẫn view dạng chuỗi, ví dụ '),
                            this.html(`Bdoc2e14_221`, "code", parentElement, {}, (parentElement) => [
                                this.text('web.modules.docs.mask')
                            ]),
                            this.text('. Chỉ có ở nhánh JavaScript, dùng cho registry và ref-count asset.')
                        ]),
                        this.html(`Bdoc2e14_23`, "b", parentElement, {}, (parentElement) => [
                            this.text('js')
                        ])
                    ]),
                    this.html(`Bdoc2e14_3`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e14_31`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e14_311`, "code", parentElement, {}, (parentElement) => [
                                this.text('__VIEW_TYPE__')
                            ])
                            ]),
                        this.html(`Bdoc2e14_32`, "span", parentElement, {}, (parentElement) => [
                            this.text('Loại view: trang, layout hay component. Cũng chỉ có ở nhánh JavaScript.')
                        ]),
                        this.html(`Bdoc2e14_33`, "b", parentElement, {}, (parentElement) => [
                            this.text('js')
                        ])
                    ]),
                    this.html(`Bdoc2e14_4`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e14_41`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e14_411`, "code", parentElement, {}, (parentElement) => [
                                this.text('$__ONE_COMPONENT_REGISTRY__')
                            ])
                            ]),
                        this.html(`Bdoc2e14_42`, "span", parentElement, {}, (parentElement) => [
                            this.text('Bảng tên thẻ → đường dẫn, sinh từ '),
                            this.html(`Bdoc2e14_421`, "code", parentElement, {}, (parentElement) => [
                                this.text('@import')
                            ]),
                            this.text(' để thẻ tuỳ chỉnh phân giải được.')
                        ]),
                        this.html(`Bdoc2e14_43`, "b", parentElement, {}, (parentElement) => [
                            this.text('blade')
                        ])
                    ]),
                    this.html(`Bdoc2e14_5`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e14_51`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e14_511`, "code", parentElement, {}, (parentElement) => [
                                this.text('$__ONE_CHILDREN_CONTENT__')
                            ])
                            ]),
                        this.html(`Bdoc2e14_52`, "span", parentElement, {}, (parentElement) => [
                            this.text('Nội dung slot của component. Trong '),
                            this.html(`Bdoc2e14_521`, "code", parentElement, {}, (parentElement) => [
                                this.text('.sao')
                            ]),
                            this.text(' bạn viết '),
                            this.html(`Bdoc2e14_522`, "code", parentElement, {}, (parentElement) => [
                                this.text('@children')
                            ]),
                            this.text('; đây là thứ nó biến thành.')
                        ]),
                        this.html(`Bdoc2e14_53`, "b", parentElement, {}, (parentElement) => [
                            this.text('blade · js')
                        ])
                    ])
                    ]),
                this.html(`Bdoc2e15_`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.text('Thấy '),
                    this.html(`Bdoc2e15_1`, "code", parentElement, {}, (parentElement) => [
                        this.text('$')
                    ]),
                    this.text(' trong một file '),
                    this.html(`Bdoc2e15_2`, "code", parentElement, {}, (parentElement) => [
                        this.text('.sao')
                    ]),
                    this.text(' thì chỉ có hai khả năng: đó là mẫu code minh hoạ đầu ra Blade, hoặc file dùng wrapper '),
                    this.html(`Bdoc2e15_3`, "code", parentElement, {}, (parentElement) => [
                        this.text('<blade>')
                    ]),
                    this.text(' — dạng legacy được giữ nguyên cú pháp PHP. Template modern không có '),
                    this.html(`Bdoc2e15_4`, "code", parentElement, {}, (parentElement) => [
                        this.text('$')
                    ]),
                    this.text(' ở đâu cả.')
                    ]),
                this.html(`Bdoc2e16_`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.html(`Bdoc2e16_1`, "code", parentElement, {}, (parentElement) => [
                        this.text('__VIEW_ID__')
                    ]),
                    this.text(' là '),
                    this.html(`Bdoc2e16_2`, "strong", parentElement, {}, (parentElement) => [
                        this.text('theo instance')
                    ]),
                    this.text(', cấp lúc chạy — nên không bao giờ bake được vào file CSS hay file tĩnh. Cần một định danh ổn định theo view thì dùng class scope mà compiler sinh cho '),
                    this.html(`Bdoc2e16_3`, "code", parentElement, {}, (parentElement) => [
                        this.text('<style scoped>')
                    ]),
                    this.text(', xem '),
                    this.html(`Bdoc2e16_4`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "/docs/directives" } } },
                        (parentElement) => [
                        this.text('tham chiếu directive')
                        ]),
                    this.text('.')
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
export function WebModulesDocsSystemVars(__data__ = {}, systemData = {}) {
    return new SystemVarsView(__data__, systemData);
}
export default WebModulesDocsSystemVars;