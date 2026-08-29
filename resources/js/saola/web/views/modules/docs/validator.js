import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.docs.validator';
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



class ValidatorViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class ValidatorView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, ValidatorViewController);
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
                            this.text('09')
                        ]),
                        this.text(' BACKEND')
                        ]),
                    this.html(`Bdoc112`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Validator và dữ liệu vào.')
                    ])
                ]),
                this.html(`Bdoc12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`Bdoc121`, "p", parentElement, {}, (parentElement) => [
                        this.text('Validator của Saola bọc quanh validator của Laravel nhưng biết tới repository, nên kiểm tra được cả những ràng buộc phải hỏi cơ sở dữ liệu mới trả lời được.')
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
                        this.text('KHAI BÁO')
                    ]),
                    this.text(' Rule ở một chỗ')
                    ]),
                this.html(`Bdoc22`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Một lớp cho một bộ ràng buộc.')
                ]),
                this.include(`Bdoc2c1`, 'web.components.code-window', parentElement, [], (parentElement) => ({
                        "label": "PHP",
                        "title": `app/Modules/User/Validators/UserValidator.php`,
                        "lang": "php",
                        __ONE_CHILDREN_CONTENT__: (parentElement) => [
                        this.text('class UserValidator extends Validator\n{\n    public function rules()\n    {\n        return [\n            \'name\'  => \'required|max:255\',\n            \'email\' => \'required|email\',\n        ];\n    }\n}')
                    ]
                    })),
                this.html(`Bdoc23`, "p", parentElement, {}, (parentElement) => [
                    this.text('Constructor nhận '),
                    this.html(`Bdoc231`, "code", parentElement, {}, (parentElement) => [
                        this.text('$request')
                    ]),
                    this.text(' và '),
                    this.html(`Bdoc232`, "code", parentElement, {}, (parentElement) => [
                        this.text('$repository')
                    ]),
                    this.text('. Nhờ vậy rule viết được điều kiện dựa trên dữ liệu đang có, không chỉ dựa trên payload.')
                ]),
                this.html(`Bdoc24`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`Bdoc241`, "span", parentElement, {}, (parentElement) => [
                        this.text('VÒNG ĐỜI')
                    ]),
                    this.text(' Ba bước dựng rule')
                    ]),
                this.html(`Bdoc25`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Rule mặc định trước, rule riêng sau, rồi mở rộng.')
                ]),
                this.html(`Bdoc26`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`Bdoc261`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2611`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc26111`, "code", parentElement, {}, (parentElement) => [
                                this.text('init()')
                            ])
                            ]),
                        this.html(`Bdoc2612`, "span", parentElement, {}, (parentElement) => [
                            this.text('Gắn request và repository vào validator')
                        ]),
                        this.html(`Bdoc2613`, "b", parentElement, {}, (parentElement) => [
                            this.text('1')
                        ])
                    ]),
                    this.html(`Bdoc262`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2621`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc26211`, "code", parentElement, {}, (parentElement) => [
                                this.text('addDefaultRules()')
                            ])
                            ]),
                        this.html(`Bdoc2622`, "span", parentElement, {}, (parentElement) => [
                            this.text('Nạp ràng buộc chung của hệ thống')
                        ]),
                        this.html(`Bdoc2623`, "b", parentElement, {}, (parentElement) => [
                            this.text('2')
                        ])
                    ]),
                    this.html(`Bdoc263`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2631`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc26311`, "code", parentElement, {}, (parentElement) => [
                                this.text('extends()')
                            ])
                            ]),
                        this.html(`Bdoc2632`, "span", parentElement, {}, (parentElement) => [
                            this.text('Chỗ để module cắm thêm rule của riêng nó')
                        ]),
                        this.html(`Bdoc2633`, "b", parentElement, {}, (parentElement) => [
                            this.text('3')
                        ])
                    ])
                    ]),
                this.html(`Bdoc27`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-sub" }] },
                    (parentElement) => [
                    this.text('Method có sẵn')
                    ]),
                this.html(`Bdoc28`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`Bdoc281`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2811`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc28111`, "code", parentElement, {}, (parentElement) => [
                                this.text('addRule()')
                            ])
                            ]),
                        this.html(`Bdoc2812`, "span", parentElement, {}, (parentElement) => [
                            this.text('Thêm rule lẻ vào bộ đang dựng')
                        ]),
                        this.html(`Bdoc2813`, "b", parentElement, {}, (parentElement) => [
                            this.text('rule')
                        ])
                    ]),
                    this.html(`Bdoc282`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2821`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc28211`, "code", parentElement, {}, (parentElement) => [
                                this.text('checkUniqueProp()')
                            ])
                            ]),
                        this.html(`Bdoc2822`, "span", parentElement, {}, (parentElement) => [
                            this.text('Kiểm tra trùng qua repository, biết loại trừ chính bản ghi đang sửa')
                        ]),
                        this.html(`Bdoc2823`, "b", parentElement, {}, (parentElement) => [
                            this.text('db')
                        ])
                    ]),
                    this.html(`Bdoc283`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2831`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc28311`, "code", parentElement, {}, (parentElement) => [
                                this.text('checkRef()')
                            ])
                            ]),
                        this.html(`Bdoc2832`, "span", parentElement, {}, (parentElement) => [
                            this.text('Xác nhận khoá ngoại trỏ tới bản ghi có thật')
                        ]),
                        this.html(`Bdoc2833`, "b", parentElement, {}, (parentElement) => [
                            this.text('db')
                        ])
                    ]),
                    this.html(`Bdoc284`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2841`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc28411`, "code", parentElement, {}, (parentElement) => [
                                this.text('checkArrDate()')
                            ])
                            ]),
                        this.html(`Bdoc2842`, "span", parentElement, {}, (parentElement) => [
                            this.text('Ràng buộc khoảng ngày dạng mảng')
                        ]),
                        this.html(`Bdoc2843`, "b", parentElement, {}, (parentElement) => [
                            this.text('định dạng')
                        ])
                    ]),
                    this.html(`Bdoc285`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2851`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc28511`, "code", parentElement, {}, (parentElement) => [
                                this.text('parseInputs()')
                            ])
                            ]),
                        this.html(`Bdoc2852`, "span", parentElement, {}, (parentElement) => [
                            this.text('Chuẩn hoá payload trước khi đưa vào rule')
                        ]),
                        this.html(`Bdoc2853`, "b", parentElement, {}, (parentElement) => [
                            this.text('chuẩn hoá')
                        ])
                    ])
                    ]),
                this.html(`Bdoc29`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.text('Validator có '),
                    this.html(`Bdoc291`, "code", parentElement, {}, (parentElement) => [
                        this.text('__get')
                    ]),
                    this.text(' và '),
                    this.html(`Bdoc292`, "code", parentElement, {}, (parentElement) => [
                        this.text('__call')
                    ]),
                    this.text(' chuyển tiếp thẳng sang '),
                    this.html(`Bdoc293`, "code", parentElement, {}, (parentElement) => [
                        this.text('$request')
                    ]),
                    this.text(', nên trong rule cứ viết '),
                    this.html(`Bdoc294`, "code", parentElement, {}, (parentElement) => [
                        this.text('$this->email')
                    ]),
                    this.text(' hay '),
                    this.html(`Bdoc295`, "code", parentElement, {}, (parentElement) => [
                        this.text('$this->input(\'email\')')
                    ]),
                    this.text(' như đang cầm request.')
                    ]),
                this.html(`Bdoc2e10_`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`Bdoc2e10_1`, "span", parentElement, {}, (parentElement) => [
                        this.text('ĐẶT Ở ĐÂU')
                    ]),
                    this.text(' Request hay Validator')
                    ]),
                this.html(`Bdoc2e11_`, "h2", parentElement, {}, (parentElement) => [
                    this.text('FormRequest cho ràng buộc tĩnh, Validator cho ràng buộc cần dữ liệu.')
                ]),
                this.html(`Bdoc2e12_`, "p", parentElement, {}, (parentElement) => [
                    this.text('Module '),
                    this.html(`Bdoc2e12_1`, "code", parentElement, {}, (parentElement) => [
                        this.text('User')
                    ]),
                    this.text(' có sẵn '),
                    this.html(`Bdoc2e12_2`, "code", parentElement, {}, (parentElement) => [
                        this.text('CreateUserRequest')
                    ]),
                    this.text(' và '),
                    this.html(`Bdoc2e12_3`, "code", parentElement, {}, (parentElement) => [
                        this.text('UpdateUserRequest')
                    ]),
                    this.text(' — dạng FormRequest quen thuộc của Laravel, hợp với ràng buộc không cần hỏi cơ sở dữ liệu. Khi rule phải tra bảng, hoặc phải dùng chung giữa nhiều context, đưa xuống Validator để service gọi lại được.')
                ]),
                this.html(`Bdoc2e13_`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.text('Đây mới là phần giới thiệu. Ví dụ chạy được của từng ràng buộc nằm trong '),
                    this.html(`Bdoc2e13_1`, "code", parentElement, {}, (parentElement) => [
                        this.text('examples')
                    ]),
                    this.text(' của core.')
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
export function WebModulesDocsValidator(__data__ = {}, systemData = {}) {
    return new ValidatorView(__data__, systemData);
}
export default WebModulesDocsValidator;