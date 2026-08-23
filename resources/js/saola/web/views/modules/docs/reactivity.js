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
            this.html(`ff96f7a7`, "header", parentElement,
                { classes: [{ type: 'static', value: "page-hero" }] },
                (parentElement) => [
                this.html(`15b892a7`, "div", parentElement, {}, (parentElement) => [
                    this.html(`ab74559e`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`943e8228`, "span", parentElement, {}, (parentElement) => [
                            this.text('05')
                        ]),
                        this.text(' VIẾT VIEW')
                        ]),
                    this.html(`9abe25a3`, "h1", parentElement, {}, (parentElement) => [
                        this.text('State và element API.')
                    ])
                ]),
                this.html(`f750a15d`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`2a968179`, "p", parentElement, {}, (parentElement) => [
                        this.text('State sống trong closure chứ không trong proxy, và mọi phụ thuộc do compiler tính sẵn. Output biên dịch chỉ gọi một tập method cố định trên ViewController.')
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
                        this.text('REACTIVITY')
                    ]),
                    this.text(' State và cập nhật')
                    ]),
                this.html(`c048d2ef`, "h2", parentElement, {}, (parentElement) => [
                    this.text('State sống trong closure, không trong proxy.')
                ]),
                this.html(`1c642396`, "p", parentElement, {}, (parentElement) => [
                    this.text('Mỗi state được đăng ký vào StateManager và đồng thời là một biến trong closure của constructor. Render factory nằm cùng scope nên đọc thẳng biến — không có dependency tracking lúc chạy, mọi phụ thuộc do compiler tính sẵn thành '),
                    this.html(`34be1ee8`, "code", parentElement, {}, (parentElement) => [
                        this.text('stateKeys')
                    ]),
                    this.text('.')
                ]),
                this.html(`753dcd15`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-grid" }] },
                    (parentElement) => [
                    this.html(`9de53a5a`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`81bea50b`, "span", parentElement, {}, (parentElement) => [
                            this.text('Setter')
                        ]),
                        this.html(`32679b94`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Hai đường ghi')
                        ]),
                        this.html(`48280560`, "p", parentElement, {}, (parentElement) => [
                            this.html(`1dc81855`, "code", parentElement, {}, (parentElement) => [
                                this.text('setX(v)')
                            ]),
                            this.text(' là API cho người dùng, luôn hoạt động. '),
                            this.html(`abb2beca`, "code", parentElement, {}, (parentElement) => [
                                this.text('update$x(v)')
                            ]),
                            this.text(' chỉ chạy trước khi khoá, dùng để nạp giá trị khởi tạo mà không kích hoạt render.')
                        ])
                        ]),
                    this.html(`c8e71cd3`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`9c312e37`, "span", parentElement, {}, (parentElement) => [
                            this.text('Batching')
                        ]),
                        this.html(`cbe9665d`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Gộp theo khung hình')
                        ]),
                        this.html(`466d0bc6`, "p", parentElement, {}, (parentElement) => [
                            this.text('Nhiều lần set trong cùng một tick gộp lại thành một lượt flush theo '),
                            this.html(`a9e93036`, "code", parentElement, {}, (parentElement) => [
                                this.text('requestAnimationFrame')
                            ]),
                            this.text('. Mỗi vùng marker chỉ render lại một lần.')
                        ])
                        ]),
                    this.html(`e88f763e`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`d7f6d064`, "span", parentElement, {}, (parentElement) => [
                            this.text('Same-ref')
                        ]),
                        this.html(`20f8c5fb`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Sửa tại chỗ vẫn nhận')
                        ]),
                        this.html(`a7ba8f53`, "p", parentElement, {}, (parentElement) => [
                            this.text('Gọi setter với cùng reference thì StateManager đối chiếu nội dung độ sâu một với bản chụp trước đó. Cách viết '),
                            this.html(`fc3573c3`, "code", parentElement, {}, (parentElement) => [
                                this.text('list.splice(i,1); setList(list)')
                            ]),
                            this.text(' vẫn cập nhật.')
                        ])
                        ]),
                    this.html(`094adcdf`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`12547677`, "span", parentElement, {}, (parentElement) => [
                            this.text('Computed')
                        ]),
                        this.html(`c438b827`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Memo và lười')
                        ]),
                        this.html(`87dac5f0`, "p", parentElement, {}, (parentElement) => [
                            this.text('Dep đổi thì đánh dấu bẩn, tính thật lúc đọc. Slot computed nằm chung bảng với state thường nên '),
                            this.html(`db6edecc`, "code", parentElement, {}, (parentElement) => [
                                this.text('subscribe')
                            ]),
                            this.text(' và '),
                            this.html(`44746ce1`, "code", parentElement, {}, (parentElement) => [
                                this.text('stateKeys')
                            ]),
                            this.text(' dùng y hệt.')
                        ])
                        ])
                    ]),
                this.html(`dae15694`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.html(`38d317d8`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Không phải deep reactivity.')
                    ]),
                    this.text(' Đây là lựa chọn có chủ đích: không Proxy, không dep tracking runtime, granularity dừng ở tầng key. Đổi lại là output biên dịch đọc được và chi phí runtime gần như bằng không.')
                    ]),
                this.html(`928cd295`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`3c48ef82`, "span", parentElement, {}, (parentElement) => [
                        this.text('RUNTIME')
                    ]),
                    this.text(' Element API')
                    ]),
                this.html(`6017143f`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Compiler chỉ gọi mười mấy hàm.')
                ]),
                this.html(`b2544d33`, "p", parentElement, {}, (parentElement) => [
                    this.text('Output biên dịch không sinh chuỗi HTML. Nó gọi một tập method cố định trên ViewController, mỗi method trả về một element có vòng đời riêng.')
                ]),
                this.html(`f42070db`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`0fd1ee4f`, "div", parentElement, {}, (parentElement) => [
                        this.html(`e948b564`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`b67ac195`, "code", parentElement, {}, (parentElement) => [
                                this.text('this.wrapper()')
                            ])
                            ]),
                        this.html(`adb4b8ab`, "span", parentElement, {}, (parentElement) => [
                            this.text('Gốc của view, tạo cặp marker biên')
                        ]),
                        this.html(`3fe72f54`, "b", parentElement, {}, (parentElement) => [
                            this.text('container')
                        ])
                    ]),
                    this.html(`a1be91db`, "div", parentElement, {}, (parentElement) => [
                        this.html(`5e755cdc`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`12c519b2`, "code", parentElement, {}, (parentElement) => [
                                this.text('this.html()')
                            ])
                            ]),
                        this.html(`58a87d66`, "span", parentElement, {}, (parentElement) => [
                            this.text('Element DOM kèm config attrs · props · classes · styles · events · bind')
                        ]),
                        this.html(`fa7f61d0`, "b", parentElement, {}, (parentElement) => [
                            this.text('dom')
                        ])
                    ]),
                    this.html(`f837ad24`, "div", parentElement, {}, (parentElement) => [
                        this.html(`7a13fb2d`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`7bba29c3`, "code", parentElement, {}, (parentElement) => [
                                this.text('this.text()')
                            ])
                            ]),
                        this.html(`be10aa97`, "span", parentElement, {}, (parentElement) => [
                            this.text('Text node tĩnh')
                        ]),
                        this.html(`0afb2c3f`, "b", parentElement, {}, (parentElement) => [
                            this.text('dom')
                        ])
                    ]),
                    this.html(`f9e251ca`, "div", parentElement, {}, (parentElement) => [
                        this.html(`5ca2848e`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`fea6b114`, "code", parentElement, {}, (parentElement) => [
                                this.text('this.output()')
                            ])
                            ]),
                        this.html(`ceabdeb2`, "span", parentElement, {}, (parentElement) => [
                            this.text('Vùng giá trị reactive, escape hoặc raw')
                        ]),
                        this.html(`4a8649a4`, "b", parentElement, {}, (parentElement) => [
                            this.text('reactive')
                        ])
                    ]),
                    this.html(`882d9ad8`, "div", parentElement, {}, (parentElement) => [
                        this.html(`8fe4137a`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`64e9a6f6`, "code", parentElement, {}, (parentElement) => [
                                this.text('this.reactive()')
                            ])
                            ]),
                        this.html(`8d7c501a`, "span", parentElement, {}, (parentElement) => [
                            this.text('Vùng điều kiện hoặc lặp, nhận '),
                            this.html(`539a71ef`, "code", parentElement, {}, (parentElement) => [
                                this.text('stateKeys')
                            ]),
                            this.text(' và children factory')
                        ]),
                        this.html(`a0990722`, "b", parentElement, {}, (parentElement) => [
                            this.text('reactive')
                        ])
                    ]),
                    this.html(`a2275c64`, "div", parentElement, {}, (parentElement) => [
                        this.html(`a4711450`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`acf3101f`, "code", parentElement, {}, (parentElement) => [
                                this.text('this.__foreach()')
                            ])
                            ]),
                        this.html(`0e68405e`, "span", parentElement, {}, (parentElement) => [
                            this.text('Lặp có slot cache; nhận '),
                            this.html(`fe251e00`, "code", parentElement, {}, (parentElement) => [
                                this.text('keyFn')
                            ]),
                            this.text(' từ '),
                            this.html(`7be97823`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('key')
                                ])
                        ]),
                        this.html(`822e2660`, "b", parentElement, {}, (parentElement) => [
                            this.text('loop')
                        ])
                    ]),
                    this.html(`4171a54e`, "div", parentElement, {}, (parentElement) => [
                        this.html(`5e77d60c`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`1f4ac1b0`, "code", parentElement, {}, (parentElement) => [
                                this.text('this.include()')
                            ])
                            ]),
                        this.html(`180c12c2`, "span", parentElement, {}, (parentElement) => [
                            this.text('Tạo child view; '),
                            this.html(`d7a68673`, "code", parentElement, {}, (parentElement) => [
                                this.text('stateKeys')
                            ]),
                            this.text(' khiến prop được đẩy lại khi state đổi')
                        ]),
                        this.html(`2e56cb25`, "b", parentElement, {}, (parentElement) => [
                            this.text('component')
                        ])
                    ]),
                    this.html(`4ce3a788`, "div", parentElement, {}, (parentElement) => [
                        this.html(`2822e2f7`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`2ab611d4`, "code", parentElement, {}, (parentElement) => [
                                this.text('this.extendView()')
                            ])
                            ]),
                        this.html(`fd21a414`, "span", parentElement, {}, (parentElement) => [
                            this.text('Trả về view cha thay cho element tree')
                        ]),
                        this.html(`e1c4bb1e`, "b", parentElement, {}, (parentElement) => [
                            this.text('layout')
                        ])
                    ]),
                    this.html(`673044c7`, "div", parentElement, {}, (parentElement) => [
                        this.html(`fe830c99`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`834388b6`, "code", parentElement, {}, (parentElement) => [
                                this.text('this.block()')
                            ]),
                            this.text(' / '),
                            this.html(`3e01b60c`, "code", parentElement, {}, (parentElement) => [
                                this.text('this.blockOutlet()')
                            ])
                            ]),
                        this.html(`71dc0c4e`, "span", parentElement, {}, (parentElement) => [
                            this.text('Đăng ký nội dung và tạo chỗ trống, nối theo tên')
                        ]),
                        this.html(`aa806c26`, "b", parentElement, {}, (parentElement) => [
                            this.text('layout')
                        ])
                    ]),
                    this.html(`39e967ef`, "div", parentElement, {}, (parentElement) => [
                        this.html(`5131fffa`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`acb7d6ba`, "code", parentElement, {}, (parentElement) => [
                                this.text('this.section()')
                            ]),
                            this.text(' / '),
                            this.html(`e05407dd`, "code", parentElement, {}, (parentElement) => [
                                this.text('this.yield()')
                            ])
                            ]),
                        this.html(`e23c3d79`, "span", parentElement, {}, (parentElement) => [
                            this.text('Section và điểm xuất section')
                        ]),
                        this.html(`b1d71575`, "b", parentElement, {}, (parentElement) => [
                            this.text('layout')
                        ])
                    ])
                    ]),
                this.html(`d6184d28`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-sub" }] },
                    (parentElement) => [
                    this.text('Ba quy tắc bắt buộc')
                    ]),
                this.html(`0f13e7e3`, "ul", parentElement,
                    { classes: [{ type: 'static', value: "check-list" }] },
                    (parentElement) => [
                    this.html(`f02a7567`, "li", parentElement, {}, (parentElement) => [
                        this.text('Factory là lười — chỉ chạy trong '),
                        this.html(`6f1c72ce`, "code", parentElement, {}, (parentElement) => [
                            this.text('render()')
                        ]),
                        this.text(' hoặc re-render, không chạy trong constructor.')
                    ]),
                    this.html(`b05748dd`, "li", parentElement, {}, (parentElement) => [
                        this.text('Điểm chèn tường minh — element không tự '),
                        this.html(`318aa126`, "code", parentElement, {}, (parentElement) => [
                            this.text('appendChild')
                        ]),
                        this.text('; vị trí do element cha cấp qua anchor.')
                    ]),
                    this.html(`73d1100f`, "li", parentElement, {}, (parentElement) => [
                        this.text('Vòng đời đầy đủ — mỗi element có '),
                        this.html(`2a353149`, "code", parentElement, {}, (parentElement) => [
                            this.text('render · start · pause · resume · destroy')
                        ]),
                        this.text(', và children sinh ra khi re-render phải được '),
                        this.html(`ad0393ea`, "code", parentElement, {}, (parentElement) => [
                            this.text('start()')
                        ]),
                        this.text(' ngay nếu vùng cha đang hoạt động.')
                    ])
                    ]),
                this.html(`d0822472`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }, { type: 'static', value: "ov-note--warn" }] },
                    (parentElement) => [
                    this.html(`40a0e698`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Ràng buộc của '),
                        this.html(`822c5433`, "code", parentElement,
                            { classes: [{ type: 'static', value: "directive-token" }] },
                            (parentElement) => [
                            this.text('foreach')
                            ]),
                        this.text(':')
                    ]),
                    this.text(' slot chỉ được tái dùng khi cache key khớp '),
                    this.html(`9cebeb7e`, "em", parentElement, {}, (parentElement) => [
                        this.text('và')
                    ]),
                    this.text(' reference của item không đổi, vì compiled closure đóng gói item trực tiếp. Refetch trả object mới sẽ dựng lại hàng đó — muốn giữ state của view con qua mỗi lần đồng bộ thì lặp trên danh sách id ổn định rồi truyền dữ liệu qua props.')
                    ])
                ]),
            this.html(`ceb15976`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/docs/runtime" } } },
                (parentElement) => [
                this.html(`60f0ac7a`, "div", parentElement, {}, (parentElement) => [
                    this.html(`b7585c3f`, "span", parentElement, {}, (parentElement) => [
                        this.text('Tiếp theo')
                    ]),
                    this.html(`8767f8f3`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Runtime & hydration')
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
export function WebModulesDocsReactivity(__data__ = {}, systemData = {}) {
    return new ReactivityView(__data__, systemData);
}
export default WebModulesDocsReactivity;
