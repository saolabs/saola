import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.docs.status';
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



class StatusViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class StatusView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, StatusViewController);
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
                            this.text('09')
                        ]),
                        this.text(' TRẠNG THÁI')
                        ]),
                    this.html(`9abe25a3`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Giới hạn đã biết.')
                    ])
                ]),
                this.html(`f750a15d`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`2a968179`, "p", parentElement, {}, (parentElement) => [
                        this.text('Dự án đang ở giai đoạn dựng nền. Trang này ghi thẳng cái gì chạy được và cái gì còn dở, để người đọc không mất thời gian tự phát hiện lại.')
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
                        this.text('STATUS')
                    ]),
                    this.text(' Trung thực về hiện trạng')
                    ]),
                this.html(`c048d2ef`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Cái gì đang chạy, cái gì còn dở.')
                ]),
                this.html(`1c642396`, "p", parentElement, {}, (parentElement) => [
                    this.text('Dự án đang ở giai đoạn dựng nền. Những mục dưới đây là giới hạn đã biết, ghi ra để người đọc không mất thời gian tự phát hiện lại.')
                ]),
                this.html(`33facdd5`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-sub" }] },
                    (parentElement) => [
                    this.text('Đang chạy đầy đủ')
                    ]),
                this.html(`1e7af0c3`, "ul", parentElement,
                    { classes: [{ type: 'static', value: "check-list" }] },
                    (parentElement) => [
                    this.html(`66f3100e`, "li", parentElement, {}, (parentElement) => [
                        this.text('SSR bằng Blade rồi hydrate, kèm layout chain và block outlet.')
                    ]),
                    this.html(`2deb49d1`, "li", parentElement, {}, (parentElement) => [
                        this.text('Reactive theo vùng marker: điều kiện, vòng lặp, output, binding hai chiều.')
                    ]),
                    this.html(`83b02649`, "li", parentElement, {}, (parentElement) => [
                        this.text('Reconciliation của '),
                        this.html(`c3650608`, "code", parentElement,
                            { classes: [{ type: 'static', value: "directive-token" }] },
                            (parentElement) => [
                            this.text('foreach')
                            ]),
                        this.text(' theo slot, có dọn element khi item rời danh sách.')
                    ]),
                    this.html(`ac549061`, "li", parentElement, {}, (parentElement) => [
                        this.text('Điều hướng SPA, layout diff và PageCache cho back/forward.')
                    ]),
                    this.html(`01cee6cc`, "li", parentElement, {}, (parentElement) => [
                        this.text('Vòng đời view đầy đủ với dọn tài nguyên theo ref-count.')
                    ]),
                    this.html(`2d178424`, "li", parentElement, {}, (parentElement) => [
                        this.text('Bốn context với route, registry và bundle tách bạch.')
                    ])
                    ]),
                this.html(`928cd295`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-sub" }] },
                    (parentElement) => [
                    this.text('Giới hạn đã biết')
                    ]),
                this.html(`f84e1dc6`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`e9e672d8`, "div", parentElement, {}, (parentElement) => [
                        this.html(`3ea65109`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`a110bc84`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('foreach')
                                ]),
                            this.text(' đổi reference')
                            ]),
                        this.html(`b8d27790`, "span", parentElement, {}, (parentElement) => [
                            this.text('Slot chỉ tái dùng khi reference item không đổi, nên refetch dựng lại hàng đó. Cách đi vòng: lặp trên id ổn định và truyền dữ liệu qua props.')
                        ]),
                        this.html(`adda57ca`, "b", parentElement, {}, (parentElement) => [
                            this.text('runtime')
                        ])
                    ]),
                    this.html(`0bc39c9b`, "div", parentElement, {}, (parentElement) => [
                        this.html(`af63ff53`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`6a1805ad`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('bind')
                                ]),
                            this.text(' lồng cấp')
                            ]),
                        this.html(`317ee151`, "span", parentElement, {}, (parentElement) => [
                            this.html(`157fb3a9`, "code", parentElement, {}, (parentElement) => [
                                this.text('bind(a.b)')
                            ]),
                            this.text(' đọc được giá trị nhưng không ghi ngược và không nhận thay đổi — setter và subscription chỉ có ở tầng khoá phẳng.')
                        ]),
                        this.html(`d28f6a58`, "b", parentElement, {}, (parentElement) => [
                            this.text('runtime')
                        ])
                    ]),
                    this.html(`d469964c`, "div", parentElement, {}, (parentElement) => [
                        this.html(`1c0267a0`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`5ee4d1b4`, "code", parentElement, {}, (parentElement) => [
                                this.text('<style scoped>')
                            ]),
                            this.text(' trong layout')
                            ]),
                        this.html(`76a036c6`, "span", parentElement, {}, (parentElement) => [
                            this.text('Trang render qua block của layout không có wrapper riêng nên style scoped không tìm được subtree để gắn. Dùng stylesheet chung cho những trang đó.')
                        ]),
                        this.html(`4911be7c`, "b", parentElement, {}, (parentElement) => [
                            this.text('runtime')
                        ])
                    ]),
                    this.html(`48e9d809`, "div", parentElement, {}, (parentElement) => [
                        this.html(`b5d26d7f`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.text('Dấu '),
                            this.html(`9a13e47e`, "code", parentElement, {}, (parentElement) => [
                                this.text('>')
                            ]),
                            this.text(' trong '),
                            this.html(`0e8ec033`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('class')
                                ])
                            ]),
                        this.html(`f1c4cc3c`, "span", parentElement, {}, (parentElement) => [
                            this.text('Biểu thức chứa dấu lớn hơn làm bộ phân tích đóng thẻ sớm ở đầu ra Blade. Viết lại bằng phép so sánh khác là qua.')
                        ]),
                        this.html(`3922147e`, "b", parentElement, {}, (parentElement) => [
                            this.text('compiler')
                        ])
                    ]),
                    this.html(`be972177`, "div", parentElement, {}, (parentElement) => [
                        this.html(`8f7d399f`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`e1755aea`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('style')
                                ]),
                            this.text(' dạng object')
                            ]),
                        this.html(`940f1081`, "span", parentElement, {}, (parentElement) => [
                            this.text('Viết '),
                            this.html(`4190057b`, "code", parentElement, {}, (parentElement) => [
                                this.text('@style({\'font-size\': x})')
                            ]),
                            this.text(' theo cú pháp modern chỉ ra đúng ở đầu ra Blade; phía JavaScript nó rã thành các thuộc tính tĩnh rời rạc nên binding không chạy sau hydrate.')
                        ]),
                        this.html(`f4ee73fe`, "b", parentElement, {}, (parentElement) => [
                            this.text('compiler')
                        ])
                    ]),
                    this.html(`e2ed1722`, "div", parentElement, {}, (parentElement) => [
                        this.html(`756afe1d`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`6a32ca01`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('show')
                                ]),
                            this.text(' đụng Blade')
                            ]),
                        this.html(`729bb206`, "span", parentElement, {}, (parentElement) => [
                            this.text('Laravel đã có '),
                            this.html(`35176025`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('show')
                                ]),
                            this.text(' nghĩa là kết thúc section rồi yield ngay, nên nó nuốt directive cùng tên của Saola và làm hỏng section stack của cả trang. Dùng '),
                            this.html(`1c03242d`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('class')
                                ]),
                            this.text(' với class ẩn thay thế.')
                        ]),
                        this.html(`229bc295`, "b", parentElement, {}, (parentElement) => [
                            this.text('compiler')
                        ])
                    ]),
                    this.html(`6a802913`, "div", parentElement, {}, (parentElement) => [
                        this.html(`6f132da0`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`0abc40c7`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('computed')
                                ]),
                            this.text(' khi SSR')
                            ]),
                        this.html(`be4dcacd`, "span", parentElement, {}, (parentElement) => [
                            this.text('Directive này chỉ được emit ở đầu ra JavaScript; phía Blade không có khai báo nào nên biến undefined khi render server. Dùng biểu thức dẫn xuất thẳng trong template là qua.')
                        ]),
                        this.html(`5db3460a`, "b", parentElement, {}, (parentElement) => [
                            this.text('compiler')
                        ])
                    ]),
                    this.html(`558ccc5e`, "div", parentElement, {}, (parentElement) => [
                        this.html(`1febf2ea`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.text('Modifier ở đầu ra Blade')
                            ]),
                        this.html(`29923b9f`, "span", parentElement, {}, (parentElement) => [
                            this.text('Modifier của event chỉ được emit đúng ở phía JavaScript; phía Blade còn sinh thuộc tính thừa.')
                        ]),
                        this.html(`06a376ed`, "b", parentElement, {}, (parentElement) => [
                            this.text('compiler')
                        ])
                    ]),
                    this.html(`bb11c6f6`, "div", parentElement, {}, (parentElement) => [
                        this.html(`9d90189a`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.text('Fragment và Component chưa có id')
                            ]),
                        this.html(`956335d2`, "span", parentElement, {}, (parentElement) => [
                            this.text('Hai loại marker này còn thiếu id ổn định nên chưa hydrate được như các loại khác.')
                        ]),
                        this.html(`a6418980`, "b", parentElement, {}, (parentElement) => [
                            this.text('contract')
                        ])
                    ]),
                    this.html(`bd77f452`, "div", parentElement, {}, (parentElement) => [
                        this.html(`f7042ef6`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.text('Prefix đôi của context API')
                            ]),
                        this.html(`b0ada4d1`, "span", parentElement, {}, (parentElement) => [
                            this.text('Prefix mặc định của Laravel cộng với prefix context làm URL thành '),
                            this.html(`868b8270`, "code", parentElement, {}, (parentElement) => [
                                this.text('/api/api/...')
                            ]),
                            this.text('.')
                        ]),
                        this.html(`0c124cbe`, "b", parentElement, {}, (parentElement) => [
                            this.text('routing')
                        ])
                    ])
                    ]),
                this.html(`a79a05db`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }, { type: 'static', value: "ov-note--warn" }] },
                    (parentElement) => [
                    this.text('Danh sách này lấy từ chính tài liệu contract và những gì kiểm chứng được khi chạy thật, không phải phỏng đoán. Mục nào sửa xong sẽ rời khỏi bảng.')
                    ])
                ]),
            this.html(`ceb15976`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/components" } } },
                (parentElement) => [
                this.html(`60f0ac7a`, "div", parentElement, {}, (parentElement) => [
                    this.html(`b7585c3f`, "span", parentElement, {}, (parentElement) => [
                        this.text('Tiếp theo')
                    ]),
                    this.html(`8767f8f3`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Thư viện component')
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
export function WebModulesDocsStatus(__data__ = {}, systemData = {}) {
    return new StatusView(__data__, systemData);
}
export default WebModulesDocsStatus;
