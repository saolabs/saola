import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.docs.repository';
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



class RepositoryViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class RepositoryView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, RepositoryViewController);
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
                            this.text('07')
                        ]),
                        this.text(' BACKEND')
                        ]),
                    this.html(`Bdoc112`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Repository và truy vấn.')
                    ])
                ]),
                this.html(`Bdoc12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`Bdoc121`, "p", parentElement, {}, (parentElement) => [
                        this.text('Repository là nơi duy nhất trong ứng dụng biết tới model. Khai báo một dòng '),
                        this.html(`Bdoc1211`, "code", parentElement, {}, (parentElement) => [
                            this.text('$model')
                        ]),
                        this.text(' là có sẵn CRUD, filter, cache, soft delete và chủ sở hữu bản ghi.')
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
                    this.text(' Một dòng là đủ')
                    ]),
                this.html(`Bdoc22`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Kế thừa '),
                    this.html(`Bdoc221`, "code", parentElement, {}, (parentElement) => [
                        this.text('BaseRepository')
                    ]),
                    this.text(', trỏ vào model.')
                ]),
                this.include(`Bdoc2c1`, 'web.components.code-window', parentElement, [], (parentElement) => ({
                        "label": "PHP",
                        "title": `app/Modules/User/Repositories/UserRepository.php`,
                        "lang": "php",
                        __ONE_CHILDREN_CONTENT__: (parentElement) => [
                        this.text('class UserRepository extends BaseRepository\n{\n    protected $model = User::class;\n}')
                    ]
                    })),
                this.html(`Bdoc23`, "p", parentElement, {}, (parentElement) => [
                    this.text('Không cần viết '),
                    this.html(`Bdoc231`, "code", parentElement, {}, (parentElement) => [
                        this.text('all()')
                    ]),
                    this.text(', '),
                    this.html(`Bdoc232`, "code", parentElement, {}, (parentElement) => [
                        this.text('find()')
                    ]),
                    this.text(', '),
                    this.html(`Bdoc233`, "code", parentElement, {}, (parentElement) => [
                        this.text('create()')
                    ]),
                    this.text(', '),
                    this.html(`Bdoc234`, "code", parentElement, {}, (parentElement) => [
                        this.text('update()')
                    ]),
                    this.text(', '),
                    this.html(`Bdoc235`, "code", parentElement, {}, (parentElement) => [
                        this.text('delete()')
                    ]),
                    this.text(' — chúng đến từ các trait mà '),
                    this.html(`Bdoc236`, "code", parentElement, {}, (parentElement) => [
                        this.text('BaseRepository')
                    ]),
                    this.text(' gộp sẵn.')
                ]),
                this.html(`Bdoc24`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`Bdoc241`, "span", parentElement, {}, (parentElement) => [
                        this.text('THÀNH PHẦN')
                    ]),
                    this.text(' Repository là tổ hợp trait')
                    ]),
                this.html(`Bdoc25`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Mỗi nhóm hành vi là một trait riêng.')
                ]),
                this.html(`Bdoc26`, "p", parentElement, {}, (parentElement) => [
                    this.text('Nhờ tách như vậy, một repository chỉ cần ghi đè đúng nhóm nó muốn đổi thay vì kế thừa một lớp khổng lồ.')
                ]),
                this.html(`Bdoc27`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`Bdoc271`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2711`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc27111`, "code", parentElement, {}, (parentElement) => [
                                this.text('BaseQuery')
                            ])
                            ]),
                        this.html(`Bdoc2712`, "span", parentElement, {}, (parentElement) => [
                            this.text('Dựng query gốc, join, select, sắp xếp')
                        ]),
                        this.html(`Bdoc2713`, "b", parentElement, {}, (parentElement) => [
                            this.text('truy vấn')
                        ])
                    ]),
                    this.html(`Bdoc272`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2721`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc27211`, "code", parentElement, {}, (parentElement) => [
                                this.text('BaseSearchQuery')
                            ])
                            ]),
                        this.html(`Bdoc2722`, "span", parentElement, {}, (parentElement) => [
                            this.text('Tìm kiếm theo từ khoá trên nhiều cột')
                        ]),
                        this.html(`Bdoc2723`, "b", parentElement, {}, (parentElement) => [
                            this.text('truy vấn')
                        ])
                    ]),
                    this.html(`Bdoc273`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2731`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc27311`, "code", parentElement, {}, (parentElement) => [
                                this.text('GettingAction')
                            ])
                            ]),
                        this.html(`Bdoc2732`, "span", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc27321`, "code", parentElement, {}, (parentElement) => [
                                this.text('getAll')
                            ]),
                            this.text(', '),
                            this.html(`Bdoc27322`, "code", parentElement, {}, (parentElement) => [
                                this.text('find')
                            ]),
                            this.text(', '),
                            this.html(`Bdoc27323`, "code", parentElement, {}, (parentElement) => [
                                this.text('findBy')
                            ]),
                            this.text(', '),
                            this.html(`Bdoc27324`, "code", parentElement, {}, (parentElement) => [
                                this.text('getBy')
                            ]),
                            this.text(', hook '),
                            this.html(`Bdoc27325`, "code", parentElement, {}, (parentElement) => [
                                this.text('beforeGetData')
                            ])
                        ]),
                        this.html(`Bdoc2733`, "b", parentElement, {}, (parentElement) => [
                            this.text('đọc')
                        ])
                    ]),
                    this.html(`Bdoc274`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2741`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc27411`, "code", parentElement, {}, (parentElement) => [
                                this.text('CRUDAction')
                            ])
                            ]),
                        this.html(`Bdoc2742`, "span", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc27421`, "code", parentElement, {}, (parentElement) => [
                                this.text('create')
                            ]),
                            this.text(', '),
                            this.html(`Bdoc27422`, "code", parentElement, {}, (parentElement) => [
                                this.text('createMany')
                            ]),
                            this.text(', '),
                            this.html(`Bdoc27423`, "code", parentElement, {}, (parentElement) => [
                                this.text('save')
                            ]),
                            this.text(', hook '),
                            this.html(`Bdoc27424`, "code", parentElement, {}, (parentElement) => [
                                this.text('beforeCreate')
                            ]),
                            this.text('/'),
                            this.html(`Bdoc27425`, "code", parentElement, {}, (parentElement) => [
                                this.text('beforeUpdate')
                            ])
                        ]),
                        this.html(`Bdoc2743`, "b", parentElement, {}, (parentElement) => [
                            this.text('ghi')
                        ])
                    ]),
                    this.html(`Bdoc275`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2751`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc27511`, "code", parentElement, {}, (parentElement) => [
                                this.text('FilterAction')
                            ])
                            ]),
                        this.html(`Bdoc2752`, "span", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc27521`, "code", parentElement, {}, (parentElement) => [
                                this.text('getResults')
                            ]),
                            this.text(', '),
                            this.html(`Bdoc27522`, "code", parentElement, {}, (parentElement) => [
                                this.text('countResults')
                            ]),
                            this.text(', '),
                            this.html(`Bdoc27523`, "code", parentElement, {}, (parentElement) => [
                                this.text('trashed')
                            ]),
                            this.text(', '),
                            this.html(`Bdoc27524`, "code", parentElement, {}, (parentElement) => [
                                this.text('buildFilter')
                            ])
                        ]),
                        this.html(`Bdoc2753`, "b", parentElement, {}, (parentElement) => [
                            this.text('lọc')
                        ])
                    ]),
                    this.html(`Bdoc276`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2761`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc27611`, "code", parentElement, {}, (parentElement) => [
                                this.text('CacheAction')
                            ])
                            ]),
                        this.html(`Bdoc2762`, "span", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc27621`, "code", parentElement, {}, (parentElement) => [
                                this.text('cache()')
                            ]),
                            this.text(' và đăng ký method nào được cache')
                        ]),
                        this.html(`Bdoc2763`, "b", parentElement, {}, (parentElement) => [
                            this.text('cache')
                        ])
                    ]),
                    this.html(`Bdoc277`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2771`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc27711`, "code", parentElement, {}, (parentElement) => [
                                this.text('OwnerAction')
                            ])
                            ]),
                        this.html(`Bdoc2772`, "span", parentElement, {}, (parentElement) => [
                            this.text('Ràng buộc bản ghi theo chủ sở hữu đang đăng nhập')
                        ]),
                        this.html(`Bdoc2773`, "b", parentElement, {}, (parentElement) => [
                            this.text('quyền')
                        ])
                    ]),
                    this.html(`Bdoc278`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2781`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc27811`, "code", parentElement, {}, (parentElement) => [
                                this.text('DataAction')
                            ]),
                            this.text(' · '),
                            this.html(`Bdoc27812`, "code", parentElement, {}, (parentElement) => [
                                this.text('FileAction')
                            ])
                            ]),
                        this.html(`Bdoc2782`, "span", parentElement, {}, (parentElement) => [
                            this.text('Chuẩn hoá dữ liệu vào và xử lý field kiểu file')
                        ]),
                        this.html(`Bdoc2783`, "b", parentElement, {}, (parentElement) => [
                            this.text('phụ trợ')
                        ])
                    ])
                    ]),
                this.html(`Bdoc28`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`Bdoc281`, "span", parentElement, {}, (parentElement) => [
                        this.text('HOOK')
                    ]),
                    this.text(' Chèn vào giữa vòng đời')
                    ]),
                this.html(`Bdoc29`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Ghi đè hook thay vì viết lại cả method.')
                ]),
                this.include(`Bdoc2c2`, 'web.components.code-window', parentElement, [], (parentElement) => ({
                        "label": "PHP",
                        "title": `Repositories/UserRepository.php`,
                        "lang": "php",
                        __ONE_CHILDREN_CONTENT__: (parentElement) => [
                        this.text('class UserRepository extends BaseRepository\n{\n    protected $model = User::class;\n\n    public function beforeCreate($data)\n    {\n        $data[\'password\'] = bcrypt($data[\'password\']);\n        return $data;\n    }\n}')
                    ]
                    })),
                this.html(`Bdoc2e10_`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.html(`Bdoc2e10_1`, "code", parentElement, {}, (parentElement) => [
                        this.text('CRUDAction')
                    ]),
                    this.text(' có công tắc ném lỗi: '),
                    this.html(`Bdoc2e10_2`, "code", parentElement, {}, (parentElement) => [
                        this.text('disableThrowException()')
                    ]),
                    this.text(' để lấy lỗi qua '),
                    this.html(`Bdoc2e10_3`, "code", parentElement, {}, (parentElement) => [
                        this.text('getCrudErrorMessage()')
                    ]),
                    this.text(' thay vì để exception bay lên. Hữu ích khi ghi hàng loạt và muốn gom lỗi.')
                    ]),
                this.html(`Bdoc2e11_`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`Bdoc2e11_1`, "span", parentElement, {}, (parentElement) => [
                        this.text('QUYỀN')
                    ]),
                    this.text(' Bản ghi của ai')
                    ]),
                this.html(`Bdoc2e12_`, "h2", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc2e12_1`, "code", parentElement, {}, (parentElement) => [
                        this.text('OwnerAction')
                    ]),
                    this.text(' ràng buộc theo actor.')
                ]),
                this.html(`Bdoc2e13_`, "p", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc2e13_1`, "code", parentElement, {}, (parentElement) => [
                        this.text('setActor()')
                    ]),
                    this.text(' cho biết ai đang thao tác; '),
                    this.html(`Bdoc2e13_2`, "code", parentElement, {}, (parentElement) => [
                        this.text('setOwnerID()')
                    ]),
                    this.text(' giới hạn query trong phạm vi bản ghi của người đó. Dùng '),
                    this.html(`Bdoc2e13_3`, "code", parentElement, {}, (parentElement) => [
                        this.text('unOwnerQuery()')
                    ]),
                    this.text(' khi cần cố tình vượt phạm vi, ví dụ trong màn hình quản trị.')
                ]),
                this.html(`Bdoc2e14_`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.text('Repository trả model. Đừng đẩy thẳng model đó ra response — bọc bằng '),
                    this.html(`Bdoc2e14_1`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "/docs/mask" } } },
                        (parentElement) => [
                        this.text('Mask')
                        ]),
                    this.text(' để kiểm soát field nào lộ ra ngoài.')
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
export function WebModulesDocsRepository(__data__ = {}, systemData = {}) {
    return new RepositoryView(__data__, systemData);
}
export default WebModulesDocsRepository;