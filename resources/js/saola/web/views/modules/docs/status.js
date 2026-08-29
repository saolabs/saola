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
                        this.text(' TRẠNG THÁI')
                        ]),
                    this.html(`Bdoc112`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Giới hạn đã biết.')
                    ])
                ]),
                this.html(`Bdoc12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`Bdoc121`, "p", parentElement, {}, (parentElement) => [
                        this.text('Dự án đang ở giai đoạn dựng nền. Trang này ghi thẳng cái gì chạy được và cái gì còn dở, để người đọc không mất thời gian tự phát hiện lại.')
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
                        this.text('STATUS')
                    ]),
                    this.text(' Trung thực về hiện trạng')
                    ]),
                this.html(`Bdoc22`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Cái gì đang chạy, cái gì còn dở.')
                ]),
                this.html(`Bdoc23`, "p", parentElement, {}, (parentElement) => [
                    this.text('Dự án đang ở giai đoạn dựng nền. Những mục dưới đây là giới hạn đã biết, ghi ra để người đọc không mất thời gian tự phát hiện lại.')
                ]),
                this.html(`Bdoc24`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-sub" }] },
                    (parentElement) => [
                    this.text('Đang chạy đầy đủ')
                    ]),
                this.html(`Bdoc25`, "ul", parentElement,
                    { classes: [{ type: 'static', value: "check-list" }] },
                    (parentElement) => [
                    this.html(`Bdoc251`, "li", parentElement, {}, (parentElement) => [
                        this.text('SSR bằng Blade rồi hydrate, kèm layout chain và block outlet.')
                    ]),
                    this.html(`Bdoc252`, "li", parentElement, {}, (parentElement) => [
                        this.text('Reactive theo vùng marker: điều kiện, vòng lặp, output, binding hai chiều.')
                    ]),
                    this.html(`Bdoc253`, "li", parentElement, {}, (parentElement) => [
                        this.text('Reconciliation của '),
                        this.html(`Bdoc2531`, "code", parentElement,
                            { classes: [{ type: 'static', value: "directive-token" }] },
                            (parentElement) => [
                            this.text('foreach')
                            ]),
                        this.text(' theo slot, có dọn element khi item rời danh sách.')
                    ]),
                    this.html(`Bdoc254`, "li", parentElement, {}, (parentElement) => [
                        this.text('Điều hướng SPA, layout diff và PageCache cho back/forward.')
                    ]),
                    this.html(`Bdoc255`, "li", parentElement, {}, (parentElement) => [
                        this.text('Vòng đời view đầy đủ với dọn tài nguyên theo ref-count.')
                    ]),
                    this.html(`Bdoc256`, "li", parentElement, {}, (parentElement) => [
                        this.text('Bốn context với route, registry và bundle tách bạch.')
                    ])
                    ]),
                this.html(`Bdoc26`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-sub" }] },
                    (parentElement) => [
                    this.text('Giới hạn đã biết')
                    ]),
                this.html(`Bdoc27`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`Bdoc271`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2711`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc27111`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('foreach')
                                ]),
                            this.text(' đổi reference')
                            ]),
                        this.html(`Bdoc2712`, "span", parentElement, {}, (parentElement) => [
                            this.text('Slot chỉ tái dùng khi reference item không đổi, nên refetch dựng lại hàng đó. Cách đi vòng: lặp trên id ổn định và truyền dữ liệu qua props.')
                        ]),
                        this.html(`Bdoc2713`, "b", parentElement, {}, (parentElement) => [
                            this.text('runtime')
                        ])
                    ]),
                    this.html(`Bdoc272`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2721`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc27211`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('bind')
                                ]),
                            this.text(' lồng cấp')
                            ]),
                        this.html(`Bdoc2722`, "span", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc27221`, "code", parentElement, {}, (parentElement) => [
                                this.text('bind(a.b)')
                            ]),
                            this.text(' đọc được giá trị nhưng không ghi ngược và không nhận thay đổi — setter và subscription chỉ có ở tầng khoá phẳng.')
                        ]),
                        this.html(`Bdoc2723`, "b", parentElement, {}, (parentElement) => [
                            this.text('runtime')
                        ])
                    ]),
                    this.html(`Bdoc273`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2731`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.text('Khoảng trắng giữa hai thẻ')
                            ]),
                        this.html(`Bdoc2732`, "span", parentElement, {}, (parentElement) => [
                            this.text('Text node chỉ chứa khoảng trắng bị bỏ khi sinh đầu ra JavaScript, còn Blade thì giữ nguyên — nên '),
                            this.html(`Bdoc27321`, "code", parentElement, {}, (parentElement) => [
                                this.text('<b>a</b> <b>b</b>')
                            ]),
                            this.text(' ra khác nhau giữa SSR và lần render lại phía client. Thấy rõ nhất ở code block dùng '),
                            this.html(`Bdoc27322`, "code", parentElement, {}, (parentElement) => [
                                this.text('white-space: pre')
                            ]),
                            this.text('. Cách đi vòng: đưa dấu cách vào bên trong thẻ liền kề để nó thành text node có nội dung.')
                        ]),
                        this.html(`Bdoc2733`, "b", parentElement, {}, (parentElement) => [
                            this.text('compiler')
                        ])
                    ]),
                    this.html(`Bdoc274`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2741`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc27411`, "code", parentElement, {}, (parentElement) => [
                                this.text('<style scoped>')
                            ]),
                            this.text(' ở màn hình đầu')
                            ]),
                        this.html(`Bdoc2742`, "span", parentElement, {}, (parentElement) => [
                            this.text('Style scoped không nằm trong HTML server trả về; nó được inject khi client hydrate, dù element đã mang sẵn class scope. Phần trên màn hình đầu vì vậy nhấp nháy một nhịp trước khi có style. Dùng CSS global cho above-the-fold cho tới khi có asset manifest SSR.')
                        ]),
                        this.html(`Bdoc2743`, "b", parentElement, {}, (parentElement) => [
                            this.text('runtime')
                        ])
                    ]),
                    this.html(`Bdoc275`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2751`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.text('Dấu '),
                            this.html(`Bdoc27511`, "code", parentElement, {}, (parentElement) => [
                                this.text('>')
                            ]),
                            this.text(' trong '),
                            this.html(`Bdoc27512`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('class')
                                ])
                            ]),
                        this.html(`Bdoc2752`, "span", parentElement, {}, (parentElement) => [
                            this.text('Biểu thức chứa dấu lớn hơn làm bộ phân tích đóng thẻ sớm ở đầu ra Blade. Viết lại bằng phép so sánh khác là qua.')
                        ]),
                        this.html(`Bdoc2753`, "b", parentElement, {}, (parentElement) => [
                            this.text('compiler')
                        ])
                    ]),
                    this.html(`Bdoc276`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2761`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc27611`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('show')
                                ]),
                            this.text(' đụng Blade')
                            ]),
                        this.html(`Bdoc2762`, "span", parentElement, {}, (parentElement) => [
                            this.text('Laravel đã có '),
                            this.html(`Bdoc27621`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('show')
                                ]),
                            this.text(' nghĩa là kết thúc section rồi yield ngay, nên nó nuốt directive cùng tên của Saola và làm hỏng section stack của cả trang. Dùng '),
                            this.html(`Bdoc27622`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('class')
                                ]),
                            this.text(' với class ẩn thay thế.')
                        ]),
                        this.html(`Bdoc2763`, "b", parentElement, {}, (parentElement) => [
                            this.text('compiler')
                        ])
                    ]),
                    this.html(`Bdoc277`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2771`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc27711`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement) => [
                                this.text('computed')
                                ]),
                            this.text(' khi SSR')
                            ]),
                        this.html(`Bdoc2772`, "span", parentElement, {}, (parentElement) => [
                            this.text('Directive này chỉ được emit ở đầu ra JavaScript; phía Blade không có khai báo nào nên biến undefined khi render server. Dùng biểu thức dẫn xuất thẳng trong template là qua.')
                        ]),
                        this.html(`Bdoc2773`, "b", parentElement, {}, (parentElement) => [
                            this.text('compiler')
                        ])
                    ]),
                    this.html(`Bdoc278`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2781`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.text('Modifier ở đầu ra Blade')
                            ]),
                        this.html(`Bdoc2782`, "span", parentElement, {}, (parentElement) => [
                            this.text('Modifier của event chỉ được emit đúng ở phía JavaScript; phía Blade còn sinh thuộc tính thừa.')
                        ]),
                        this.html(`Bdoc2783`, "b", parentElement, {}, (parentElement) => [
                            this.text('compiler')
                        ])
                    ]),
                    this.html(`Bdoc279`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2791`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.text('Fragment và Component chưa có id')
                            ]),
                        this.html(`Bdoc2792`, "span", parentElement, {}, (parentElement) => [
                            this.text('Hai loại marker này còn thiếu id ổn định nên chưa hydrate được như các loại khác.')
                        ]),
                        this.html(`Bdoc2793`, "b", parentElement, {}, (parentElement) => [
                            this.text('contract')
                        ])
                    ]),
                    this.html(`Bdoc27e10_`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc27e10_1`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.text('Prefix đôi của context API')
                            ]),
                        this.html(`Bdoc27e10_2`, "span", parentElement, {}, (parentElement) => [
                            this.text('Prefix mặc định của Laravel cộng với prefix context làm URL thành '),
                            this.html(`Bdoc27e10_21`, "code", parentElement, {}, (parentElement) => [
                                this.text('/api/api/...')
                            ]),
                            this.text('.')
                        ]),
                        this.html(`Bdoc27e10_3`, "b", parentElement, {}, (parentElement) => [
                            this.text('routing')
                        ])
                    ])
                    ]),
                this.html(`Bdoc28`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }, { type: 'static', value: "ov-note--warn" }] },
                    (parentElement) => [
                    this.text('Danh sách này lấy từ chính tài liệu contract và những gì kiểm chứng được khi chạy thật, không phải phỏng đoán. Mục nào sửa xong sẽ rời khỏi bảng.')
                    ])
                ]),
            this.html(`Bdoc3`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/components" } } },
                (parentElement) => [
                this.html(`Bdoc31`, "div", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc311`, "span", parentElement, {}, (parentElement) => [
                        this.text('Tiếp theo')
                    ]),
                    this.html(`Bdoc312`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Thư viện component')
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
export function WebModulesDocsStatus(__data__ = {}, systemData = {}) {
    return new StatusView(__data__, systemData);
}
export default WebModulesDocsStatus;