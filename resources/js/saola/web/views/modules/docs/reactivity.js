import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.docs.reactivity';
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



class ReactivityViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class ReactivityView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, ReactivityViewController);
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
                            this.text('05')
                        ]),
                        this.text(' VIẾT VIEW')
                        ]),
                    this.html(`Bdoc112`, "h1", parentElement, {}, (parentElement) => [
                        this.text('State và element API.')
                    ])
                ]),
                this.html(`Bdoc12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`Bdoc121`, "p", parentElement, {}, (parentElement) => [
                        this.text('State sống trong closure chứ không trong proxy, và mọi phụ thuộc do compiler tính sẵn. Output biên dịch chỉ gọi một tập method cố định trên ViewController.')
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
                        this.text('REACTIVITY')
                    ]),
                    this.text(' State và cập nhật')
                    ]),
                this.html(`Bdoc22`, "h2", parentElement, {}, (parentElement) => [
                    this.text('State sống trong closure, không trong proxy.')
                ]),
                this.html(`Bdoc23`, "p", parentElement, {}, (parentElement) => [
                    this.text('Mỗi state được đăng ký vào StateManager và đồng thời là một biến trong closure của constructor. Render factory nằm cùng scope nên đọc thẳng biến — không có dependency tracking lúc chạy, mọi phụ thuộc do compiler tính sẵn thành '),
                    this.html(`Bdoc231`, "code", parentElement, {}, (parentElement) => [
                        this.text('stateKeys')
                    ]),
                    this.text('.')
                ]),
                this.html(`Bdoc24`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-grid" }] },
                    (parentElement) => [
                    this.html(`Bdoc241`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`Bdoc2411`, "span", parentElement, {}, (parentElement) => [
                            this.text('Setter')
                        ]),
                        this.html(`Bdoc2412`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Hai đường ghi')
                        ]),
                        this.html(`Bdoc2413`, "p", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc24131`, "code", parentElement, {}, (parentElement) => [
                                this.text('setX(v)')
                            ]),
                            this.text(' là API cho người dùng, luôn hoạt động. '),
                            this.html(`Bdoc24132`, "code", parentElement, {}, (parentElement) => [
                                this.text('update$x(v)')
                            ]),
                            this.text(' chỉ chạy trước khi khoá, dùng để nạp giá trị khởi tạo mà không kích hoạt render.')
                        ])
                        ]),
                    this.html(`Bdoc242`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`Bdoc2421`, "span", parentElement, {}, (parentElement) => [
                            this.text('Batching')
                        ]),
                        this.html(`Bdoc2422`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Gộp theo khung hình')
                        ]),
                        this.html(`Bdoc2423`, "p", parentElement, {}, (parentElement) => [
                            this.text('Nhiều lần set trong cùng một tick gộp lại thành một lượt flush theo '),
                            this.html(`Bdoc24231`, "code", parentElement, {}, (parentElement) => [
                                this.text('requestAnimationFrame')
                            ]),
                            this.text('. Mỗi vùng marker chỉ render lại một lần.')
                        ])
                        ]),
                    this.html(`Bdoc243`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`Bdoc2431`, "span", parentElement, {}, (parentElement) => [
                            this.text('Same-ref')
                        ]),
                        this.html(`Bdoc2432`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Sửa tại chỗ vẫn nhận')
                        ]),
                        this.html(`Bdoc2433`, "p", parentElement, {}, (parentElement) => [
                            this.text('Gọi setter với cùng reference thì StateManager đối chiếu nội dung độ sâu một với bản chụp trước đó. Cách viết '),
                            this.html(`Bdoc24331`, "code", parentElement, {}, (parentElement) => [
                                this.text('list.splice(i,1); setList(list)')
                            ]),
                            this.text(' vẫn cập nhật.')
                        ])
                        ]),
                    this.html(`Bdoc244`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`Bdoc2441`, "span", parentElement, {}, (parentElement) => [
                            this.text('Computed')
                        ]),
                        this.html(`Bdoc2442`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Memo và lười')
                        ]),
                        this.html(`Bdoc2443`, "p", parentElement, {}, (parentElement) => [
                            this.text('Dep đổi thì đánh dấu bẩn, tính thật lúc đọc. Slot computed nằm chung bảng với state thường nên '),
                            this.html(`Bdoc24431`, "code", parentElement, {}, (parentElement) => [
                                this.text('subscribe')
                            ]),
                            this.text(' và '),
                            this.html(`Bdoc24432`, "code", parentElement, {}, (parentElement) => [
                                this.text('stateKeys')
                            ]),
                            this.text(' dùng y hệt.')
                        ])
                        ])
                    ]),
                this.html(`Bdoc25`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.html(`Bdoc251`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Không phải deep reactivity.')
                    ]),
                    this.text(' Đây là lựa chọn có chủ đích: không Proxy, không dep tracking runtime, granularity dừng ở tầng key. Đổi lại là output biên dịch đọc được và chi phí runtime gần như bằng không.')
                    ]),
                this.html(`Bdoc26`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`Bdoc261`, "span", parentElement, {}, (parentElement) => [
                        this.text('RUNTIME')
                    ]),
                    this.text(' Element API')
                    ]),
                this.html(`Bdoc27`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Compiler chỉ gọi mười mấy hàm.')
                ]),
                this.html(`Bdoc28`, "p", parentElement, {}, (parentElement) => [
                    this.text('Output biên dịch không sinh chuỗi HTML. Nó gọi một tập method cố định trên ViewController, mỗi method trả về một element có vòng đời riêng.')
                ]),
                this.html(`Bdoc29`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`Bdoc291`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2911`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc29111`, "code", parentElement, {}, (parentElement) => [
                                this.text('this.wrapper()')
                            ])
                            ]),
                        this.html(`Bdoc2912`, "span", parentElement, {}, (parentElement) => [
                            this.text('Gốc của view, tạo cặp marker biên')
                        ]),
                        this.html(`Bdoc2913`, "b", parentElement, {}, (parentElement) => [
                            this.text('container')
                        ])
                    ]),
                    this.html(`Bdoc292`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2921`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc29211`, "code", parentElement, {}, (parentElement) => [
                                this.text('this.html()')
                            ])
                            ]),
                        this.html(`Bdoc2922`, "span", parentElement, {}, (parentElement) => [
                            this.text('Element DOM kèm config attrs · props · classes · styles · events · bind')
                        ]),
                        this.html(`Bdoc2923`, "b", parentElement, {}, (parentElement) => [
                            this.text('dom')
                        ])
                    ]),
                    this.html(`Bdoc293`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2931`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc29311`, "code", parentElement, {}, (parentElement) => [
                                this.text('this.text()')
                            ])
                            ]),
                        this.html(`Bdoc2932`, "span", parentElement, {}, (parentElement) => [
                            this.text('Text node tĩnh')
                        ]),
                        this.html(`Bdoc2933`, "b", parentElement, {}, (parentElement) => [
                            this.text('dom')
                        ])
                    ]),
                    this.html(`Bdoc294`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2941`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc29411`, "code", parentElement, {}, (parentElement) => [
                                this.text('this.output()')
                            ])
                            ]),
                        this.html(`Bdoc2942`, "span", parentElement, {}, (parentElement) => [
                            this.text('Vùng giá trị reactive, escape hoặc raw')
                        ]),
                        this.html(`Bdoc2943`, "b", parentElement, {}, (parentElement) => [
                            this.text('reactive')
                        ])
                    ]),
                    this.html(`Bdoc295`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2951`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc29511`, "code", parentElement, {}, (parentElement) => [
                                this.text('this.reactive()')
                            ])
                            ]),
                        this.html(`Bdoc2952`, "span", parentElement, {}, (parentElement) => [
                            this.text('Vùng điều kiện hoặc lặp, nhận '),
                            this.html(`Bdoc29521`, "code", parentElement, {}, (parentElement) => [
                                this.text('stateKeys')
                            ]),
                            this.text(' và children factory')
                        ]),
                        this.html(`Bdoc2953`, "b", parentElement, {}, (parentElement) => [
                            this.text('reactive')
                        ])
                    ]),
                    this.html(`Bdoc296`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2961`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc29611`, "code", parentElement, {}, (parentElement) => [
                                this.text('this.__foreach()')
                            ])
                            ]),
                        this.html(`Bdoc2962`, "span", parentElement, {}, (parentElement) => [
                            this.text('Lặp có slot cache; nhận '),
                            this.html(`Bdoc29621`, "code", parentElement, {}, (parentElement) => [
                                this.text('keyFn')
                            ]),
                            this.text(' từ '),
                            this.html(`Bdoc29622`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('key')
                                ])
                        ]),
                        this.html(`Bdoc2963`, "b", parentElement, {}, (parentElement) => [
                            this.text('loop')
                        ])
                    ]),
                    this.html(`Bdoc297`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2971`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc29711`, "code", parentElement, {}, (parentElement) => [
                                this.text('this.include()')
                            ])
                            ]),
                        this.html(`Bdoc2972`, "span", parentElement, {}, (parentElement) => [
                            this.text('Tạo child view; '),
                            this.html(`Bdoc29721`, "code", parentElement, {}, (parentElement) => [
                                this.text('stateKeys')
                            ]),
                            this.text(' khiến prop được đẩy lại khi state đổi')
                        ]),
                        this.html(`Bdoc2973`, "b", parentElement, {}, (parentElement) => [
                            this.text('component')
                        ])
                    ]),
                    this.html(`Bdoc298`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2981`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc29811`, "code", parentElement, {}, (parentElement) => [
                                this.text('this.extendView()')
                            ])
                            ]),
                        this.html(`Bdoc2982`, "span", parentElement, {}, (parentElement) => [
                            this.text('Trả về view cha thay cho element tree')
                        ]),
                        this.html(`Bdoc2983`, "b", parentElement, {}, (parentElement) => [
                            this.text('layout')
                        ])
                    ]),
                    this.html(`Bdoc299`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2991`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc29911`, "code", parentElement, {}, (parentElement) => [
                                this.text('this.block()')
                            ]),
                            this.text(' / '),
                            this.html(`Bdoc29912`, "code", parentElement, {}, (parentElement) => [
                                this.text('this.blockOutlet()')
                            ])
                            ]),
                        this.html(`Bdoc2992`, "span", parentElement, {}, (parentElement) => [
                            this.text('Đăng ký nội dung và tạo chỗ trống, nối theo tên')
                        ]),
                        this.html(`Bdoc2993`, "b", parentElement, {}, (parentElement) => [
                            this.text('layout')
                        ])
                    ]),
                    this.html(`Bdoc29e10_`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc29e10_1`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc29e10_11`, "code", parentElement, {}, (parentElement) => [
                                this.text('this.section()')
                            ]),
                            this.text(' / '),
                            this.html(`Bdoc29e10_12`, "code", parentElement, {}, (parentElement) => [
                                this.text('this.yield()')
                            ])
                            ]),
                        this.html(`Bdoc29e10_2`, "span", parentElement, {}, (parentElement) => [
                            this.text('Section và điểm xuất section')
                        ]),
                        this.html(`Bdoc29e10_3`, "b", parentElement, {}, (parentElement) => [
                            this.text('layout')
                        ])
                    ])
                    ]),
                this.html(`Bdoc2e10_`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-sub" }] },
                    (parentElement) => [
                    this.text('Ba quy tắc bắt buộc')
                    ]),
                this.html(`Bdoc2e11_`, "ul", parentElement,
                    { classes: [{ type: 'static', value: "check-list" }] },
                    (parentElement) => [
                    this.html(`Bdoc2e11_1`, "li", parentElement, {}, (parentElement) => [
                        this.text('Factory là lười — chỉ chạy trong '),
                        this.html(`Bdoc2e11_11`, "code", parentElement, {}, (parentElement) => [
                            this.text('render()')
                        ]),
                        this.text(' hoặc re-render, không chạy trong constructor.')
                    ]),
                    this.html(`Bdoc2e11_2`, "li", parentElement, {}, (parentElement) => [
                        this.text('Điểm chèn tường minh — element không tự '),
                        this.html(`Bdoc2e11_21`, "code", parentElement, {}, (parentElement) => [
                            this.text('appendChild')
                        ]),
                        this.text('; vị trí do element cha cấp qua anchor.')
                    ]),
                    this.html(`Bdoc2e11_3`, "li", parentElement, {}, (parentElement) => [
                        this.text('Vòng đời đầy đủ — mỗi element có '),
                        this.html(`Bdoc2e11_31`, "code", parentElement, {}, (parentElement) => [
                            this.text('render · start · pause · resume · destroy')
                        ]),
                        this.text(', và children sinh ra khi re-render phải được '),
                        this.html(`Bdoc2e11_32`, "code", parentElement, {}, (parentElement) => [
                            this.text('start()')
                        ]),
                        this.text(' ngay nếu vùng cha đang hoạt động.')
                    ])
                    ]),
                this.html(`Bdoc2e12_`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }, { type: 'static', value: "ov-note--warn" }] },
                    (parentElement) => [
                    this.html(`Bdoc2e12_1`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Ràng buộc của '),
                        this.html(`Bdoc2e12_11`, "code", parentElement,
                            { classes: [{ type: 'static', value: "directive-token" }] },
                            (parentElement) => [
                            this.text('foreach')
                            ]),
                        this.text(':')
                    ]),
                    this.text(' slot chỉ được tái dùng khi cache key khớp '),
                    this.html(`Bdoc2e12_2`, "em", parentElement, {}, (parentElement) => [
                        this.text('và')
                    ]),
                    this.text(' reference của item không đổi, vì compiled closure đóng gói item trực tiếp. Refetch trả object mới sẽ dựng lại hàng đó — muốn giữ state của view con qua mỗi lần đồng bộ thì lặp trên danh sách id ổn định rồi truyền dữ liệu qua props.')
                    ])
                ]),
            this.html(`Bdoc3`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/docs/runtime" } } },
                (parentElement) => [
                this.html(`Bdoc31`, "div", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc311`, "span", parentElement, {}, (parentElement) => [
                        this.text('Tiếp theo')
                    ]),
                    this.html(`Bdoc312`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Runtime & hydration')
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
export function WebModulesDocsReactivity(__data__ = {}, systemData = {}) {
    return new ReactivityView(__data__, systemData);
}
export default WebModulesDocsReactivity;