import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.docs.mask';
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



class MaskViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class MaskView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, MaskViewController);
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
                            this.text('08')
                        ]),
                        this.text(' BACKEND')
                        ]),
                    this.html(`Bdoc112`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Mask, model và collection.')
                    ])
                ]),
                this.html(`Bdoc12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`Bdoc121`, "p", parentElement, {}, (parentElement) => [
                        this.text('Model biết mọi thứ về bảng — kể cả những cột không ai bên ngoài được thấy. Mask là lớp mặt nạ quyết định phần nào của model đi ra ngoài, và đi ra dưới hình dạng nào.')
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
                        this.text('MODEL')
                    ]),
                    this.text(' Eloquent cộng vài trait')
                    ]),
                this.html(`Bdoc22`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Model của Saola vẫn là Eloquent.')
                ]),
                this.html(`Bdoc23`, "p", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc231`, "code", parentElement, {}, (parentElement) => [
                        this.text('Saola\\Core\\Models\\Model')
                    ]),
                    this.text(' kế thừa thẳng Eloquent rồi gộp thêm bốn trait, nên mọi thứ bạn đã biết về Eloquent vẫn đúng.')
                ]),
                this.html(`Bdoc24`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`Bdoc241`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2411`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24111`, "code", parentElement, {}, (parentElement) => [
                                this.text('SoftDeletes')
                            ])
                            ]),
                        this.html(`Bdoc2412`, "span", parentElement, {}, (parentElement) => [
                            this.text('Xoá mềm, đi kèm '),
                            this.html(`Bdoc24121`, "code", parentElement, {}, (parentElement) => [
                                this.text('trashed()')
                            ]),
                            this.text(' ở tầng repository')
                        ]),
                        this.html(`Bdoc2413`, "b", parentElement, {}, (parentElement) => [
                            this.text('Laravel')
                        ])
                    ]),
                    this.html(`Bdoc242`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2421`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24211`, "code", parentElement, {}, (parentElement) => [
                                this.text('Uuid')
                            ])
                            ]),
                        this.html(`Bdoc2422`, "span", parentElement, {}, (parentElement) => [
                            this.text('Khoá phụ dạng uuid bên cạnh id tự tăng')
                        ]),
                        this.html(`Bdoc2423`, "b", parentElement, {}, (parentElement) => [
                            this.text('core')
                        ])
                    ]),
                    this.html(`Bdoc243`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2431`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24311`, "code", parentElement, {}, (parentElement) => [
                                this.text('ModelEventMethods')
                            ])
                            ]),
                        this.html(`Bdoc2432`, "span", parentElement, {}, (parentElement) => [
                            this.text('Hook vòng đời model, ví dụ '),
                            this.html(`Bdoc24321`, "code", parentElement, {}, (parentElement) => [
                                this.text('canDelete()')
                            ])
                        ]),
                        this.html(`Bdoc2433`, "b", parentElement, {}, (parentElement) => [
                            this.text('core')
                        ])
                    ]),
                    this.html(`Bdoc244`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2441`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24411`, "code", parentElement, {}, (parentElement) => [
                                this.text('ModelFileMethods')
                            ])
                            ]),
                        this.html(`Bdoc2442`, "span", parentElement, {}, (parentElement) => [
                            this.text('Field kiểu file: lưu, dọn, sinh đường dẫn')
                        ]),
                        this.html(`Bdoc2443`, "b", parentElement, {}, (parentElement) => [
                            this.text('core')
                        ])
                    ])
                    ]),
                this.html(`Bdoc25`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`Bdoc251`, "span", parentElement, {}, (parentElement) => [
                        this.text('MASK')
                    ]),
                    this.text(' Ranh giới ra ngoài')
                    ]),
                this.html(`Bdoc26`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Mask biến model thành object có kiểm soát.')
                ]),
                this.html(`Bdoc27`, "p", parentElement, {}, (parentElement) => [
                    this.text('Trả model thô ra response nghĩa là mọi cột mới thêm vào bảng đều tự động lộ ra API. Mask đảo lại: chỉ những gì được khai báo mới đi ra.')
                ]),
                this.include(`Bdoc2c1`, 'web.components.code-window', parentElement, [], (parentElement) => ({
                        "label": "PHP",
                        "title": `app/Modules/User/Masks/UserMask.php`,
                        "lang": "php",
                        __ONE_CHILDREN_CONTENT__: (parentElement) => [
                        this.text('class UserMask extends Mask\n{\n    public function init()\n    {\n        $this->map([\n            \'id\', \'name\', \'email\',\n            \'joined_at\' => \'created_at\',\n        ]);\n    }\n}')
                    ]
                    })),
                this.html(`Bdoc28`, "p", parentElement, {}, (parentElement) => [
                    this.text('Mask hiện thực '),
                    this.html(`Bdoc281`, "code", parentElement, {}, (parentElement) => [
                        this.text('ArrayAccess')
                    ]),
                    this.text(', '),
                    this.html(`Bdoc282`, "code", parentElement, {}, (parentElement) => [
                        this.text('Countable')
                    ]),
                    this.text(', '),
                    this.html(`Bdoc283`, "code", parentElement, {}, (parentElement) => [
                        this.text('IteratorAggregate')
                    ]),
                    this.text(', '),
                    this.html(`Bdoc284`, "code", parentElement, {}, (parentElement) => [
                        this.text('JsonSerializable')
                    ]),
                    this.text(' và '),
                    this.html(`Bdoc285`, "code", parentElement, {}, (parentElement) => [
                        this.text('Arrayable')
                    ]),
                    this.text(' — nên dùng được như mảng, đếm được, lặp được, và '),
                    this.html(`Bdoc286`, "code", parentElement, {}, (parentElement) => [
                        this.text('json_encode')
                    ]),
                    this.text(' thẳng ra đúng hình dạng đã khai báo.')
                ]),
                this.html(`Bdoc29`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-sub" }] },
                    (parentElement) => [
                    this.text('Vòng đời của một mask')
                    ]),
                this.html(`Bdoc2e10_`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`Bdoc2e10_1`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e10_11`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e10_111`, "code", parentElement, {}, (parentElement) => [
                                this.text('init()')
                            ])
                            ]),
                        this.html(`Bdoc2e10_12`, "span", parentElement, {}, (parentElement) => [
                            this.text('Thiết lập trước khi nhận dữ liệu — nơi gọi '),
                            this.html(`Bdoc2e10_121`, "code", parentElement, {}, (parentElement) => [
                                this.text('map()')
                            ]),
                            this.text(', '),
                            this.html(`Bdoc2e10_122`, "code", parentElement, {}, (parentElement) => [
                                this.text('alias()')
                            ]),
                            this.text(', '),
                            this.html(`Bdoc2e10_123`, "code", parentElement, {}, (parentElement) => [
                                this.text('allow()')
                            ])
                        ]),
                        this.html(`Bdoc2e10_13`, "b", parentElement, {}, (parentElement) => [
                            this.text('1')
                        ])
                    ]),
                    this.html(`Bdoc2e10_2`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e10_21`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e10_211`, "code", parentElement, {}, (parentElement) => [
                                this.text('onBeforeLoadRelations()')
                            ])
                            ]),
                        this.html(`Bdoc2e10_22`, "span", parentElement, {}, (parentElement) => [
                            this.text('Chạy trước khi nạp quan hệ')
                        ]),
                        this.html(`Bdoc2e10_23`, "b", parentElement, {}, (parentElement) => [
                            this.text('2')
                        ])
                    ]),
                    this.html(`Bdoc2e10_3`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e10_31`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e10_311`, "code", parentElement, {}, (parentElement) => [
                                this.text('onLoaded()')
                            ])
                            ]),
                        this.html(`Bdoc2e10_32`, "span", parentElement, {}, (parentElement) => [
                            this.text('Đã có dữ liệu và quan hệ — thêm field dẫn xuất ở đây')
                        ]),
                        this.html(`Bdoc2e10_33`, "b", parentElement, {}, (parentElement) => [
                            this.text('3')
                        ])
                    ]),
                    this.html(`Bdoc2e10_4`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e10_41`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e10_411`, "code", parentElement, {}, (parentElement) => [
                                this.text('onCompleted()')
                            ])
                            ]),
                        this.html(`Bdoc2e10_42`, "span", parentElement, {}, (parentElement) => [
                            this.text('Chốt lại sau khi mọi thứ đã sẵn sàng')
                        ]),
                        this.html(`Bdoc2e10_43`, "b", parentElement, {}, (parentElement) => [
                            this.text('4')
                        ])
                    ])
                    ]),
                this.html(`Bdoc2e11_`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.html(`Bdoc2e11_1`, "code", parentElement, {}, (parentElement) => [
                        this.text('allow()')
                    ]),
                    this.text(' mở danh sách method được gọi từ template. Mặc định chỉ vài helper an toàn như '),
                    this.html(`Bdoc2e11_2`, "code", parentElement, {}, (parentElement) => [
                        this.text('timeAgo')
                    ]),
                    this.text(', '),
                    this.html(`Bdoc2e11_3`, "code", parentElement, {}, (parentElement) => [
                        this.text('dateFormat')
                    ]),
                    this.text(', '),
                    this.html(`Bdoc2e11_4`, "code", parentElement, {}, (parentElement) => [
                        this.text('shortContent')
                    ]),
                    this.text(' — gọi method ngoài danh sách sẽ không đi qua được.')
                    ]),
                this.html(`Bdoc2e12_`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`Bdoc2e12_1`, "span", parentElement, {}, (parentElement) => [
                        this.text('COLLECTION')
                    ]),
                    this.text(' Nhiều bản ghi')
                    ]),
                this.html(`Bdoc2e13_`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Một mask cho một bản ghi, collection cho danh sách.')
                ]),
                this.html(`Bdoc2e14_`, "p", parentElement, {}, (parentElement) => [
                    this.text('Khai báo '),
                    this.html(`Bdoc2e14_1`, "code", parentElement, {}, (parentElement) => [
                        this.text('$collectionClass')
                    ]),
                    this.text(' để mask biết dùng lớp nào khi bọc nhiều bản ghi. '),
                    this.html(`Bdoc2e14_2`, "code", parentElement, {}, (parentElement) => [
                        this.text('MaskCollection')
                    ]),
                    this.text(' giữ nguyên các phép quen thuộc như '),
                    this.html(`Bdoc2e14_3`, "code", parentElement, {}, (parentElement) => [
                        this.text('collect')
                    ]),
                    this.text(', '),
                    this.html(`Bdoc2e14_4`, "code", parentElement, {}, (parentElement) => [
                        this.text('concat')
                    ]),
                    this.text(', '),
                    this.html(`Bdoc2e14_5`, "code", parentElement, {}, (parentElement) => [
                        this.text('reverse')
                    ]),
                    this.text('.')
                ]),
                this.html(`Bdoc2e15_`, "p", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc2e15_1`, "code", parentElement, {}, (parentElement) => [
                        this.text('EmptyMask')
                    ]),
                    this.text(' và '),
                    this.html(`Bdoc2e15_2`, "code", parentElement, {}, (parentElement) => [
                        this.text('Nothing')
                    ]),
                    this.text(' là hai giá trị rỗng có kiểu — dùng thay '),
                    this.html(`Bdoc2e15_3`, "code", parentElement, {}, (parentElement) => [
                        this.text('null')
                    ]),
                    this.text(' để template khỏi phải kiểm tra tồn tại trước mỗi lần đọc.')
                ]),
                this.html(`Bdoc2e16_`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.text('Mask trả về mảng khi sang view, nên phía '),
                    this.html(`Bdoc2e16_1`, "code", parentElement, {}, (parentElement) => [
                        this.text('.sao')
                    ]),
                    this.text(' đọc bằng '),
                    this.html(`Bdoc2e16_2`, "code", parentElement, {}, (parentElement) => [
                        this.text('record[\'name\']')
                    ]),
                    this.text(' chứ không phải '),
                    this.html(`Bdoc2e16_3`, "code", parentElement, {}, (parentElement) => [
                        this.text('record.name')
                    ]),
                    this.text('. Lý do và ranh giới đầy đủ nằm ở '),
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
export function WebModulesDocsMask(__data__ = {}, systemData = {}) {
    return new MaskView(__data__, systemData);
}
export default WebModulesDocsMask;