import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.docs.index';
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



class IndexViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class IndexView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, IndexViewController);
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
                            this.text('01')
                        ]),
                        this.text(' TÀI LIỆU')
                        ]),
                    this.html(`Bdoc112`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Bắt đầu từ đây.')
                    ])
                ]),
                this.html(`Bdoc12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`Bdoc121`, "p", parentElement, {}, (parentElement) => [
                        this.text('Saola biến một file '),
                        this.html(`Bdoc1211`, "code", parentElement, {}, (parentElement) => [
                            this.text('.sao')
                        ]),
                        this.text(' thành Blade cho lần render đầu và JavaScript cho mọi tương tác sau đó — cùng một AST, cùng marker, cùng state contract. Tài liệu này đi từ bức tranh tổng tới từng contract cụ thể.')
                    ]),
                    this.html(`Bdoc122`, "dl", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc1221`, "div", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc12211`, "dt", parentElement, {}, (parentElement) => [
                                this.text('Backend')
                            ]),
                            this.html(`Bdoc12212`, "dd", parentElement, {}, (parentElement) => [
                                this.text('Laravel 13')
                            ])
                        ]),
                        this.html(`Bdoc1222`, "div", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc12221`, "dt", parentElement, {}, (parentElement) => [
                                this.text('Runtime')
                            ]),
                            this.html(`Bdoc12222`, "dd", parentElement, {}, (parentElement) => [
                                this.text('@saolabs/client')
                            ])
                        ])
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
                        this.text('PACKAGES')
                    ]),
                    this.text(' Ba gói, một hợp đồng')
                    ]),
                this.html(`Bdoc22`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Ba mảnh ghép, một contract chung.')
                ]),
                this.html(`Bdoc23`, "p", parentElement, {}, (parentElement) => [
                    this.text('Hệ sinh thái chia làm ba gói phát hành độc lập. Điểm nối giữa chúng không phải là quy ước ngầm mà là một spec viết ra giấy: '),
                    this.html(`Bdoc231`, "code", parentElement, {}, (parentElement) => [
                        this.text('RUNTIME_CONTRACT')
                    ]),
                    this.text(' mô tả chính xác compiler được phép emit gì và client phải hiểu gì.')
                ]),
                this.html(`Bdoc24`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-grid" }, { type: 'static', value: "ov-grid--3" }] },
                    (parentElement) => [
                    this.html(`Bdoc241`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`Bdoc2411`, "span", parentElement, {}, (parentElement) => [
                            this.text('Composer')
                        ]),
                        this.html(`Bdoc2412`, "h3", parentElement, {}, (parentElement) => [
                            this.text('saola/core')
                        ]),
                        this.html(`Bdoc2413`, "p", parentElement, {}, (parentElement) => [
                            this.text('Lõi PHP: '),
                            this.html(`Bdoc24131`, "code", parentElement, {}, (parentElement) => [
                                this.text('System::context()')
                            ]),
                            this.text(' routing, base controller cho web/admin/api, module service provider, Blade directive và ViewStorageManager — nơi duy nhất sinh marker phía server.')
                        ])
                        ]),
                    this.html(`Bdoc242`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`Bdoc2421`, "span", parentElement, {}, (parentElement) => [
                            this.text('npm')
                        ]),
                        this.html(`Bdoc2422`, "h3", parentElement, {}, (parentElement) => [
                            this.text('@saolabs/compiler')
                        ]),
                        this.html(`Bdoc2423`, "p", parentElement, {}, (parentElement) => [
                            this.text('CLI '),
                            this.html(`Bdoc24231`, "code", parentElement, {}, (parentElement) => [
                                this.text('sao-compile')
                            ]),
                            this.text('. Parse '),
                            this.html(`Bdoc24232`, "code", parentElement, {}, (parentElement) => [
                                this.text('.sao')
                            ]),
                            this.text(' thành AST rồi emit hai đầu ra từ cùng một cây: Blade cho SSR và TypeScript cho view runtime, kèm registry.')
                        ])
                        ]),
                    this.html(`Bdoc243`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`Bdoc2431`, "span", parentElement, {}, (parentElement) => [
                            this.text('npm')
                        ]),
                        this.html(`Bdoc2432`, "h3", parentElement, {}, (parentElement) => [
                            this.text('@saolabs/client')
                        ]),
                        this.html(`Bdoc2433`, "p", parentElement, {}, (parentElement) => [
                            this.text('Runtime SPA: Application container, Router, ViewManager, ViewController, hệ element reactive, PageCache và bộ service (Http, Event, Store, Head…).')
                        ])
                        ])
                    ]),
                this.html(`Bdoc25`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.html(`Bdoc251`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Vì sao tách ba gói:')
                    ]),
                    this.text(' compiler và client có thể phát hành lệch nhau, nên contract mang version. Compiler ghi '),
                    this.html(`Bdoc252`, "code", parentElement, {}, (parentElement) => [
                        this.text('__CONTRACT_VERSION__')
                    ]),
                    this.text(' vào output, client kiểm lúc load view — lệch major thì cảnh báo rõ ràng thay vì lỗi khó lần.')
                    ]),
                this.html(`Bdoc26`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`Bdoc261`, "span", parentElement, {}, (parentElement) => [
                        this.text('REQUEST')
                    ]),
                    this.text(' Từ URL tới tương tác')
                    ]),
                this.html(`Bdoc27`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Một đường đi, hai giai đoạn.')
                ]),
                this.html(`Bdoc28`, "p", parentElement, {}, (parentElement) => [
                    this.text('Lần tải đầu là SSR thật: Laravel trả HTML hoàn chỉnh có sẵn nội dung. Runtime phía client không dựng lại DOM đó — nó '),
                    this.html(`Bdoc281`, "em", parentElement, {}, (parentElement) => [
                        this.text('nhận')
                    ]),
                    this.text(' (claim) DOM có sẵn qua marker rồi gắn state và event lên. Từ lần điều hướng thứ hai trở đi, mọi thứ là CSR.')
                ]),
                this.html(`Bdoc29`, "ol", parentElement,
                    { classes: [{ type: 'static', value: "flow-timeline" }] },
                    (parentElement) => [
                    this.html(`Bdoc291`, "li", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2911`, "span", parentElement, {}, (parentElement) => [
                            this.text('01')
                        ]),
                        this.html(`Bdoc2912`, "div", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc29121`, "strong", parentElement, {}, (parentElement) => [
                                this.text('Route chọn context và module')
                            ]),
                            this.html(`Bdoc29122`, "p", parentElement, {}, (parentElement) => [
                                this.text('Middleware theo context chạy trước, '),
                                this.html(`Bdoc291221`, "code", parentElement, {}, (parentElement) => [
                                    this.text('System::context()')
                                ]),
                                this.text(' match route trong phạm vi module đã đăng ký.')
                            ])
                        ]),
                        this.html(`Bdoc2913`, "code", parentElement, {}, (parentElement) => [
                            this.text('GET /roster')
                        ])
                    ]),
                    this.html(`Bdoc292`, "li", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2921`, "span", parentElement, {}, (parentElement) => [
                            this.text('02')
                        ]),
                        this.html(`Bdoc2922`, "div", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc29221`, "strong", parentElement, {}, (parentElement) => [
                                this.text('Controller trả view response')
                            ]),
                            this.html(`Bdoc29222`, "p", parentElement, {}, (parentElement) => [
                                this.text('Core resolve component ứng với route, render Blade và nhúng boot payload (viewId, registry, systemData) cho đúng context.')
                            ])
                        ]),
                        this.html(`Bdoc2923`, "code", parentElement, {}, (parentElement) => [
                            this.text('context: web')
                        ])
                    ]),
                    this.html(`Bdoc293`, "li", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2931`, "span", parentElement, {}, (parentElement) => [
                            this.text('03')
                        ]),
                        this.html(`Bdoc2932`, "div", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc29321`, "strong", parentElement, {}, (parentElement) => [
                                this.text('Blade tạo HTML hoàn chỉnh')
                            ]),
                            this.html(`Bdoc29322`, "p", parentElement, {}, (parentElement) => [
                                this.text('Layout, block, include và children đã có nội dung trước khi một dòng JavaScript nào chạy. Mỗi vùng động được bọc bằng comment marker ổn định.')
                            ])
                        ]),
                        this.html(`Bdoc2933`, "code", parentElement, {}, (parentElement) => [
                            this.text('SSR / READY')
                        ])
                    ]),
                    this.html(`Bdoc294`, "li", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2941`, "span", parentElement, {}, (parentElement) => [
                            this.text('04')
                        ]),
                        this.html(`Bdoc2942`, "div", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc29421`, "strong", parentElement, {}, (parentElement) => [
                                this.text('Runtime claim DOM có sẵn')
                            ]),
                            this.html(`Bdoc29422`, "p", parentElement, {}, (parentElement) => [
                                this.text('State được commit về đúng giá trị server '),
                                this.html(`Bdoc294221`, "em", parentElement, {}, (parentElement) => [
                                    this.text('trước')
                                ]),
                                this.text(' khi render, để factory của '),
                                this.html(`Bdoc294222`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "directive-token" }] },
                                    (parentElement) => [
                                    this.text('if')
                                    ]),
                                this.text(' và '),
                                this.html(`Bdoc294223`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "directive-token" }] },
                                    (parentElement) => [
                                    this.text('foreach')
                                    ]),
                                this.text(' sinh đúng element claim đúng node.')
                            ])
                        ]),
                        this.html(`Bdoc2943`, "code", parentElement, {}, (parentElement) => [
                            this.text('HYDRATE / CLAIM')
                        ])
                    ]),
                    this.html(`Bdoc295`, "li", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2951`, "span", parentElement, {}, (parentElement) => [
                            this.text('05')
                        ]),
                        this.html(`Bdoc2952`, "div", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc29521`, "strong", parentElement, {}, (parentElement) => [
                                this.text('Router tiếp quản điều hướng')
                            ]),
                            this.html(`Bdoc29522`, "p", parentElement, {}, (parentElement) => [
                                this.text('Điều hướng sau đó resolve view chain, diff layout và chỉ mount lại phần thay đổi. Back/forward đọc PageCache thay vì gọi lại API.')
                            ])
                        ]),
                        this.html(`Bdoc2953`, "code", parentElement, {}, (parentElement) => [
                            this.text('SPA / ACTIVE')
                        ])
                    ])
                    ]),
                this.html(`Bdoc2e10_`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`Bdoc2e10_1`, "span", parentElement, {}, (parentElement) => [
                        this.text('MỤC LỤC')
                    ]),
                    this.text(' Đi thẳng tới phần bạn cần')
                    ]),
                this.html(`Bdoc2e11_`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Tài liệu chia theo lớp.')
                ]),
                this.html(`Bdoc2e12_`, "p", parentElement, {}, (parentElement) => [
                    this.text('Bốn nhóm, mỗi nhóm trả lời một loại câu hỏi khác nhau. Nếu bạn mới bắt đầu, đi theo thứ tự; nếu đang tìm một directive cụ thể, nhảy thẳng vào tham chiếu.')
                ]),
                this.html(`Bdoc2e13_`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-grid" }] },
                    (parentElement) => [
                    this.html(`Bdoc2e13_1`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/docs/getting-started" } } },
                        (parentElement) => [
                        this.html(`Bdoc2e13_11`, "span", parentElement, {}, (parentElement) => [
                            this.text('Bắt đầu')
                        ]),
                        this.html(`Bdoc2e13_12`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Cài đặt & route đầu tiên →')
                        ]),
                        this.html(`Bdoc2e13_13`, "p", parentElement, {}, (parentElement) => [
                            this.text('Bốn bước từ khai báo module tới kiểm tra cả SSR lẫn SPA.')
                        ])
                        ]),
                    this.html(`Bdoc2e13_2`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/docs/architecture" } } },
                        (parentElement) => [
                        this.html(`Bdoc2e13_21`, "span", parentElement, {}, (parentElement) => [
                            this.text('Nền tảng')
                        ]),
                        this.html(`Bdoc2e13_22`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Kiến trúc hệ thống →')
                        ]),
                        this.html(`Bdoc2e13_23`, "p", parentElement, {}, (parentElement) => [
                            this.text('Bốn lớp và một luồng: application, core, compiler, client.')
                        ])
                        ]),
                    this.html(`Bdoc2e13_3`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/docs/contexts" } } },
                        (parentElement) => [
                        this.html(`Bdoc2e13_31`, "span", parentElement, {}, (parentElement) => [
                            this.text('Nền tảng')
                        ]),
                        this.html(`Bdoc2e13_32`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Context, module & controller →')
                        ]),
                        this.html(`Bdoc2e13_33`, "p", parentElement, {}, (parentElement) => [
                            this.text('Biên giới giữa web, admin, api; auto-discovery và fluent routing.')
                        ])
                        ]),
                    this.html(`Bdoc2e13_4`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/docs/compiler" } } },
                        (parentElement) => [
                        this.html(`Bdoc2e13_41`, "span", parentElement, {}, (parentElement) => [
                            this.text('Nền tảng')
                        ]),
                        this.html(`Bdoc2e13_42`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Compiler & AST →')
                        ]),
                        this.html(`Bdoc2e13_43`, "p", parentElement, {}, (parentElement) => [
                            this.text('Một cú pháp, hai output, cơ chế include và children đồng bộ.')
                        ])
                        ]),
                    this.html(`Bdoc2e13_5`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/docs/sao-file" } } },
                        (parentElement) => [
                        this.html(`Bdoc2e13_51`, "span", parentElement, {}, (parentElement) => [
                            this.text('Viết view')
                        ]),
                        this.html(`Bdoc2e13_52`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Cấu trúc file .sao →')
                        ]),
                        this.html(`Bdoc2e13_53`, "p", parentElement, {}, (parentElement) => [
                            this.text('Bốn phần của một single-file component và hai chế độ cú pháp.')
                        ])
                        ]),
                    this.html(`Bdoc2e13_6`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/docs/directives" } } },
                        (parentElement) => [
                        this.html(`Bdoc2e13_61`, "span", parentElement, {}, (parentElement) => [
                            this.text('Viết view')
                        ]),
                        this.html(`Bdoc2e13_62`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Tham chiếu directive →')
                        ]),
                        this.html(`Bdoc2e13_63`, "p", parentElement, {}, (parentElement) => [
                            this.text('Bảy nhóm directive, từ khai báo tới quyền và biến ma thuật.')
                        ])
                        ]),
                    this.html(`Bdoc2e13_7`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/docs/reactivity" } } },
                        (parentElement) => [
                        this.html(`Bdoc2e13_71`, "span", parentElement, {}, (parentElement) => [
                            this.text('Viết view')
                        ]),
                        this.html(`Bdoc2e13_72`, "h3", parentElement, {}, (parentElement) => [
                            this.text('State & reactivity →')
                        ]),
                        this.html(`Bdoc2e13_73`, "p", parentElement, {}, (parentElement) => [
                            this.text('Setter, batching theo khung hình, computed và element API.')
                        ])
                        ]),
                    this.html(`Bdoc2e13_8`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/docs/runtime" } } },
                        (parentElement) => [
                        this.html(`Bdoc2e13_81`, "span", parentElement, {}, (parentElement) => [
                            this.text('Runtime')
                        ]),
                        this.html(`Bdoc2e13_82`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Runtime & hydration →')
                        ]),
                        this.html(`Bdoc2e13_83`, "p", parentElement, {}, (parentElement) => [
                            this.text('Claim DOM, reactive update, page cache và dọn tài nguyên.')
                        ])
                        ]),
                    this.html(`Bdoc2e13_9`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/docs/lifecycle" } } },
                        (parentElement) => [
                        this.html(`Bdoc2e13_91`, "span", parentElement, {}, (parentElement) => [
                            this.text('Runtime')
                        ]),
                        this.html(`Bdoc2e13_92`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Vòng đời & marker →')
                        ]),
                        this.html(`Bdoc2e13_93`, "p", parentElement, {}, (parentElement) => [
                            this.text('Bảy chuyển trạng thái và hợp đồng marker giữa server với client.')
                        ])
                        ]),
                    this.html(`Bdoc2e13_e10_`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/docs/router" } } },
                        (parentElement) => [
                        this.html(`Bdoc2e13_e10_1`, "span", parentElement, {}, (parentElement) => [
                            this.text('Runtime')
                        ]),
                        this.html(`Bdoc2e13_e10_2`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Router & dịch vụ client →')
                        ]),
                        this.html(`Bdoc2e13_e10_3`, "p", parentElement, {}, (parentElement) => [
                            this.text('PageCache, layout diff và bộ service trên Application container.')
                        ])
                        ]),
                    this.html(`Bdoc2e13_e11_`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/docs/build" } } },
                        (parentElement) => [
                        this.html(`Bdoc2e13_e11_1`, "span", parentElement, {}, (parentElement) => [
                            this.text('Vận hành')
                        ]),
                        this.html(`Bdoc2e13_e11_2`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Build, CLI & cấu hình →')
                        ]),
                        this.html(`Bdoc2e13_e11_3`, "p", parentElement, {}, (parentElement) => [
                            this.text('Hai chặng build, bốn file cấu hình và bộ kiểm thử.')
                        ])
                        ]),
                    this.html(`Bdoc2e13_e12_`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/docs/status" } } },
                        (parentElement) => [
                        this.html(`Bdoc2e13_e12_1`, "span", parentElement, {}, (parentElement) => [
                            this.text('Vận hành')
                        ]),
                        this.html(`Bdoc2e13_e12_2`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Giới hạn đã biết →')
                        ]),
                        this.html(`Bdoc2e13_e12_3`, "p", parentElement, {}, (parentElement) => [
                            this.text('Cái gì đang chạy đầy đủ, cái gì còn dở và cách đi vòng.')
                        ])
                        ])
                    ]),
                this.html(`Bdoc2e14_`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`Bdoc2e14_1`, "span", parentElement, {}, (parentElement) => [
                        this.text('LIVE')
                    ]),
                    this.text(' Không chỉ đọc sơ đồ')
                    ]),
                this.html(`Bdoc2e15_`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Bốn trang đang chạy thật.')
                ]),
                this.html(`Bdoc2e16_`, "p", parentElement, {}, (parentElement) => [
                    this.text('Mỗi trang dưới đây là một fixture có chủ đích, không phải ảnh chụp. Mở DevTools xem HTML lần đầu để thấy nội dung đã có sẵn trước khi JavaScript chạy.')
                ]),
                this.html(`Bdoc2e17_`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-grid" }] },
                    (parentElement) => [
                    this.html(`Bdoc2e17_1`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/demo" } } },
                        (parentElement) => [
                        this.html(`Bdoc2e17_11`, "span", parentElement, {}, (parentElement) => [
                            this.text('Fixture cú pháp')
                        ]),
                        this.html(`Bdoc2e17_12`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Interactive demo →')
                        ]),
                        this.html(`Bdoc2e17_13`, "p", parentElement, {}, (parentElement) => [
                            this.text('Chín nhóm cú pháp trong một trang: state, event, binding, điều kiện, vòng lặp, switch, props, import và children.')
                        ])
                        ]),
                    this.html(`Bdoc2e17_2`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/todo-list" } } },
                        (parentElement) => [
                        this.html(`Bdoc2e17_21`, "span", parentElement, {}, (parentElement) => [
                            this.text('Layout dùng chung')
                        ]),
                        this.html(`Bdoc2e17_22`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Todo workspace →')
                        ]),
                        this.html(`Bdoc2e17_23`, "p", parentElement, {}, (parentElement) => [
                            this.text('State cục bộ của trang trong khi layout giữ nguyên qua mỗi lần đổi route.')
                        ])
                        ]),
                    this.html(`Bdoc2e17_3`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/roster" } } },
                        (parentElement) => [
                        this.html(`Bdoc2e17_31`, "span", parentElement, {}, (parentElement) => [
                            this.text('Sửa đồng thời')
                        ]),
                        this.html(`Bdoc2e17_32`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Roster sync →')
                        ]),
                        this.html(`Bdoc2e17_33`, "p", parentElement, {}, (parentElement) => [
                            this.text('Poll ba mươi giây, diff giữ reference, và xử lý khi người khác sửa hoặc xoá đúng bản ghi bạn đang mở form.')
                        ])
                        ]),
                    this.html(`Bdoc2e17_4`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/ping" } } },
                        (parentElement) => [
                        this.html(`Bdoc2e17_41`, "span", parentElement, {}, (parentElement) => [
                            this.text('Hydration trần')
                        ]),
                        this.html(`Bdoc2e17_42`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Ping →')
                        ]),
                        this.html(`Bdoc2e17_43`, "p", parentElement, {}, (parentElement) => [
                            this.text('Fixture nhỏ nhất: state, event, binding và một vòng lặp — đủ để soi marker bằng mắt.')
                        ])
                        ])
                    ])
                ]),
            this.html(`Bdoc3`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/docs/getting-started" } } },
                (parentElement) => [
                this.html(`Bdoc31`, "div", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc311`, "span", parentElement, {}, (parentElement) => [
                        this.text('Tiếp theo')
                    ]),
                    this.html(`Bdoc312`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Cài đặt & route đầu tiên')
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
export function WebModulesDocsIndex(__data__ = {}, systemData = {}) {
    return new IndexView(__data__, systemData);
}
export default WebModulesDocsIndex;