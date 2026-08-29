import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.docs.client-services';
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



class ClientServicesViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class ClientServicesView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, ClientServicesViewController);
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
                            this.text('12')
                        ]),
                        this.text(' RUNTIME')
                        ]),
                    this.html(`Bdoc112`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Dịch vụ phía client.')
                    ])
                ]),
                this.html(`Bdoc12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`Bdoc121`, "p", parentElement, {}, (parentElement) => [
                        this.text('Runtime gom mọi dịch vụ dùng chung vào một namespace '),
                        this.html(`Bdoc1211`, "code", parentElement, {}, (parentElement) => [
                            this.text('App')
                        ]),
                        this.text('. Trong '),
                        this.html(`Bdoc1212`, "code", parentElement, {}, (parentElement) => [
                            this.text('<script setup>')
                        ]),
                        this.text(' của bất kỳ view nào cũng gọi thẳng được, không phải import.')
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
                        this.text('BẢNG TRA')
                    ]),
                    this.text(' Có gì trong App')
                    ]),
                this.html(`Bdoc22`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Mười ba dịch vụ, mỗi cái một việc.')
                ]),
                this.html(`Bdoc23`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`Bdoc231`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2311`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc23111`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Event')
                            ])
                            ]),
                        this.html(`Bdoc2312`, "span", parentElement, {}, (parentElement) => [
                            this.text('Bus pub/sub. Kênh duy nhất để view con nói chuyện với view cha mà không cần tham chiếu lẫn nhau.')
                        ]),
                        this.html(`Bdoc2313`, "b", parentElement, {}, (parentElement) => [
                            this.text('giao tiếp')
                        ])
                    ]),
                    this.html(`Bdoc232`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2321`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc23211`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Store')
                            ])
                            ]),
                        this.html(`Bdoc2322`, "span", parentElement, {}, (parentElement) => [
                            this.text('Kho key-value reactive trong bộ nhớ, chia sẻ giữa các view. Khác state của view ở chỗ không chết theo view.')
                        ]),
                        this.html(`Bdoc2323`, "b", parentElement, {}, (parentElement) => [
                            this.text('state')
                        ])
                    ]),
                    this.html(`Bdoc233`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2331`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc23311`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Storage')
                            ])
                            ]),
                        this.html(`Bdoc2332`, "span", parentElement, {}, (parentElement) => [
                            this.text('Bọc '),
                            this.html(`Bdoc23321`, "code", parentElement, {}, (parentElement) => [
                                this.text('localStorage')
                            ]),
                            this.text(': có TTL, phát sự kiện khi đổi, xuất/nhập cả kho.')
                        ]),
                        this.html(`Bdoc2333`, "b", parentElement, {}, (parentElement) => [
                            this.text('lưu trữ')
                        ])
                    ]),
                    this.html(`Bdoc234`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2341`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc23411`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Http')
                            ])
                            ]),
                        this.html(`Bdoc2342`, "span", parentElement, {}, (parentElement) => [
                            this.text('HTTP client trên nền '),
                            this.html(`Bdoc23421`, "code", parentElement, {}, (parentElement) => [
                                this.text('fetch')
                            ]),
                            this.text('.')
                        ]),
                        this.html(`Bdoc2343`, "b", parentElement, {}, (parentElement) => [
                            this.text('mạng')
                        ])
                    ]),
                    this.html(`Bdoc235`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2351`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc23511`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.API')
                            ])
                            ]),
                        this.html(`Bdoc2352`, "span", parentElement, {}, (parentElement) => [
                            this.text('Lớp trên '),
                            this.html(`Bdoc23521`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Http')
                            ]),
                            this.text(', biết prefix và quy ước response của context '),
                            this.html(`Bdoc23522`, "code", parentElement, {}, (parentElement) => [
                                this.text('api')
                            ]),
                            this.text('.')
                        ]),
                        this.html(`Bdoc2353`, "b", parentElement, {}, (parentElement) => [
                            this.text('mạng')
                        ])
                    ]),
                    this.html(`Bdoc236`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2361`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc23611`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Router')
                            ])
                            ]),
                        this.html(`Bdoc2362`, "span", parentElement, {}, (parentElement) => [
                            this.text('Điều hướng SPA: khớp path → component, đẩy history, giữ cache trang.')
                        ]),
                        this.html(`Bdoc2363`, "b", parentElement, {}, (parentElement) => [
                            this.text('điều hướng')
                        ])
                    ]),
                    this.html(`Bdoc237`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2371`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc23711`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.View')
                            ])
                            ]),
                        this.html(`Bdoc2372`, "span", parentElement, {}, (parentElement) => [
                            this.text('Tra và dựng view theo đường dẫn, dùng khi cần mount thủ công.')
                        ]),
                        this.html(`Bdoc2373`, "b", parentElement, {}, (parentElement) => [
                            this.text('view')
                        ])
                    ]),
                    this.html(`Bdoc238`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2381`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc23811`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Registry')
                            ])
                            ]),
                        this.html(`Bdoc2382`, "span", parentElement, {}, (parentElement) => [
                            this.text('Bản đồ đường dẫn view → factory, do compiler sinh lúc build.')
                        ]),
                        this.html(`Bdoc2383`, "b", parentElement, {}, (parentElement) => [
                            this.text('view')
                        ])
                    ]),
                    this.html(`Bdoc239`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2391`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc23911`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Head')
                            ])
                            ]),
                        this.html(`Bdoc2392`, "span", parentElement, {}, (parentElement) => [
                            this.text('Nơi duy nhất được ghi vào '),
                            this.html(`Bdoc23921`, "code", parentElement, {}, (parentElement) => [
                                this.text('<head>')
                            ]),
                            this.text(': title, meta, link. Tự hoàn tác tag của trang cũ khi chuyển trang.')
                        ]),
                        this.html(`Bdoc2393`, "b", parentElement, {}, (parentElement) => [
                            this.text('tài liệu')
                        ])
                    ]),
                    this.html(`Bdoc23e10_`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc23e10_1`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc23e10_11`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Marker')
                            ])
                            ]),
                        this.html(`Bdoc23e10_2`, "span", parentElement, {}, (parentElement) => [
                            this.text('Sổ đăng ký marker — các comment node đánh dấu vùng reactive để hydrate bám vào.')
                        ]),
                        this.html(`Bdoc23e10_3`, "b", parentElement, {}, (parentElement) => [
                            this.text('hydrate')
                        ])
                    ]),
                    this.html(`Bdoc23e11_`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc23e11_1`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc23e11_11`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Helper')
                            ])
                            ]),
                        this.html(`Bdoc23e11_2`, "span", parentElement, {}, (parentElement) => [
                            this.text('Bản JavaScript của các helper PHP, để cùng một biểu thức chạy giống nhau ở hai đầu.')
                        ]),
                        this.html(`Bdoc23e11_3`, "b", parentElement, {}, (parentElement) => [
                            this.text('tiện ích')
                        ])
                    ]),
                    this.html(`Bdoc23e12_`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc23e12_1`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc23e12_11`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Logger')
                            ])
                            ]),
                        this.html(`Bdoc23e12_2`, "span", parentElement, {}, (parentElement) => [
                            this.text('Log theo cấp, tắt được ở production.')
                        ]),
                        this.html(`Bdoc23e12_3`, "b", parentElement, {}, (parentElement) => [
                            this.text('tiện ích')
                        ])
                    ]),
                    this.html(`Bdoc23e13_`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc23e13_1`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc23e13_11`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Devtools')
                            ])
                            ]),
                        this.html(`Bdoc23e13_2`, "span", parentElement, {}, (parentElement) => [
                            this.text('Phát sự kiện nội bộ cho công cụ debug: state đổi, view mount, marker khớp.')
                        ]),
                        this.html(`Bdoc23e13_3`, "b", parentElement, {}, (parentElement) => [
                            this.text('tiện ích')
                        ])
                    ])
                    ]),
                this.html(`Bdoc24`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`Bdoc241`, "span", parentElement, {}, (parentElement) => [
                        this.text('DÙNG THẬT')
                    ]),
                    this.text(' Con nói với cha')
                    ]),
                this.html(`Bdoc25`, "h2", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc251`, "code", parentElement, {}, (parentElement) => [
                        this.text('App.Event')
                    ]),
                    this.text(' là đường đi ngược duy nhất.')
                ]),
                this.html(`Bdoc26`, "p", parentElement, {}, (parentElement) => [
                    this.text('Props chỉ chảy từ cha xuống con. Muốn con báo ngược lên, dùng bus — cha đăng ký lúc mount và huỷ đăng ký lúc destroy.')
                ]),
                this.include(`Bdoc2c1`, 'web.components.code-window', parentElement, [], (parentElement) => ({
                        "label": "TS",
                        "title": `modules/roster/index.sao — &lt;script setup&gt;`,
                        "lang": "js",
                        __ONE_CHILDREN_CONTENT__: (parentElement) => [
                        this.text('mounted() {\n    this._off = [\n        App.Event.on(\'roster:editing\', (uid, on) => { /* … */ }),\n        App.Event.on(\'roster:refresh\', () => this.load()),\n    ];\n}\n\ndestroyed() {\n    (this._off || []).forEach(off => off());\n}')
                    ]
                    })),
                this.html(`Bdoc27`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.html(`Bdoc271`, "code", parentElement, {}, (parentElement) => [
                        this.text('on()')
                    ]),
                    this.text(' trả về hàm huỷ đăng ký. Không gọi nó lúc destroy thì listener của view cũ vẫn sống sau khi chuyển trang — rò rỉ này rất khó truy vì trang trông vẫn chạy.')
                    ]),
                this.html(`Bdoc28`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-sub" }] },
                    (parentElement) => [
                    this.text('Khi nào dùng cái nào')
                    ]),
                this.html(`Bdoc29`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`Bdoc291`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2911`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.text('Dữ liệu chỉ của một view')
                            ]),
                        this.html(`Bdoc2912`, "span", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc29121`, "code", parentElement, {}, (parentElement) => [
                                this.text('@states')
                            ]),
                            this.text(' — chết theo view, đúng ý')
                        ]),
                        this.html(`Bdoc2913`, "b", parentElement, {}, (parentElement) => [
                            this.text('state')
                        ])
                    ]),
                    this.html(`Bdoc292`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2921`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.text('Dùng chung nhiều view, mất khi tải lại')
                            ]),
                        this.html(`Bdoc2922`, "span", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc29221`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Store')
                            ])
                        ]),
                        this.html(`Bdoc2923`, "b", parentElement, {}, (parentElement) => [
                            this.text('store')
                        ])
                    ]),
                    this.html(`Bdoc293`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2931`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.text('Phải sống qua lần tải lại')
                            ]),
                        this.html(`Bdoc2932`, "span", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc29321`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Storage')
                            ])
                        ]),
                        this.html(`Bdoc2933`, "b", parentElement, {}, (parentElement) => [
                            this.text('storage')
                        ])
                    ]),
                    this.html(`Bdoc294`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2941`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.text('Báo một sự việc, không giữ giá trị')
                            ]),
                        this.html(`Bdoc2942`, "span", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc29421`, "code", parentElement, {}, (parentElement) => [
                                this.text('App.Event')
                            ])
                        ]),
                        this.html(`Bdoc2943`, "b", parentElement, {}, (parentElement) => [
                            this.text('event')
                        ])
                    ])
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
export function WebModulesDocsClientServices(__data__ = {}, systemData = {}) {
    return new ClientServicesView(__data__, systemData);
}
export default WebModulesDocsClientServices;