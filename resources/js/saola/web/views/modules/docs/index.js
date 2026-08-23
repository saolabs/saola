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
            this.html(`ff96f7a7`, "header", parentElement,
                { classes: [{ type: 'static', value: "page-hero" }] },
                (parentElement) => [
                this.html(`15b892a7`, "div", parentElement, {}, (parentElement) => [
                    this.html(`ab74559e`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`943e8228`, "span", parentElement, {}, (parentElement) => [
                            this.text('01')
                        ]),
                        this.text(' TÀI LIỆU')
                        ]),
                    this.html(`9abe25a3`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Bắt đầu từ đây.')
                    ])
                ]),
                this.html(`f750a15d`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`2a968179`, "p", parentElement, {}, (parentElement) => [
                        this.text('Saola biến một file '),
                        this.html(`1169a7fa`, "code", parentElement, {}, (parentElement) => [
                            this.text('.sao')
                        ]),
                        this.text(' thành Blade cho lần render đầu và JavaScript cho mọi tương tác sau đó — cùng một AST, cùng marker, cùng state contract. Tài liệu này đi từ bức tranh tổng tới từng contract cụ thể.')
                    ]),
                    this.html(`3111c9ed`, "dl", parentElement, {}, (parentElement) => [
                        this.html(`97abdc51`, "div", parentElement, {}, (parentElement) => [
                            this.html(`71fa6733`, "dt", parentElement, {}, (parentElement) => [
                                this.text('Backend')
                            ]),
                            this.html(`dab7e845`, "dd", parentElement, {}, (parentElement) => [
                                this.text('Laravel 13')
                            ])
                        ]),
                        this.html(`93744265`, "div", parentElement, {}, (parentElement) => [
                            this.html(`c1fb4c49`, "dt", parentElement, {}, (parentElement) => [
                                this.text('Runtime')
                            ]),
                            this.html(`6ccb67d0`, "dd", parentElement, {}, (parentElement) => [
                                this.text('@saolabs/client')
                            ])
                        ])
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
                        this.text('PACKAGES')
                    ]),
                    this.text(' Ba gói, một hợp đồng')
                    ]),
                this.html(`c048d2ef`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Ba mảnh ghép, một contract chung.')
                ]),
                this.html(`1c642396`, "p", parentElement, {}, (parentElement) => [
                    this.text('Hệ sinh thái chia làm ba gói phát hành độc lập. Điểm nối giữa chúng không phải là quy ước ngầm mà là một spec viết ra giấy: '),
                    this.html(`34be1ee8`, "code", parentElement, {}, (parentElement) => [
                        this.text('RUNTIME_CONTRACT')
                    ]),
                    this.text(' mô tả chính xác compiler được phép emit gì và client phải hiểu gì.')
                ]),
                this.html(`753dcd15`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-grid" }, { type: 'static', value: "ov-grid--3" }] },
                    (parentElement) => [
                    this.html(`9de53a5a`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`81bea50b`, "span", parentElement, {}, (parentElement) => [
                            this.text('Composer')
                        ]),
                        this.html(`32679b94`, "h3", parentElement, {}, (parentElement) => [
                            this.text('saola/core')
                        ]),
                        this.html(`48280560`, "p", parentElement, {}, (parentElement) => [
                            this.text('Lõi PHP: '),
                            this.html(`1dc81855`, "code", parentElement, {}, (parentElement) => [
                                this.text('System::context()')
                            ]),
                            this.text(' routing, base controller cho web/admin/api, module service provider, Blade directive và ViewStorageManager — nơi duy nhất sinh marker phía server.')
                        ])
                        ]),
                    this.html(`c8e71cd3`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`9c312e37`, "span", parentElement, {}, (parentElement) => [
                            this.text('npm')
                        ]),
                        this.html(`cbe9665d`, "h3", parentElement, {}, (parentElement) => [
                            this.text('@saolabs/compiler')
                        ]),
                        this.html(`466d0bc6`, "p", parentElement, {}, (parentElement) => [
                            this.text('CLI '),
                            this.html(`a9e93036`, "code", parentElement, {}, (parentElement) => [
                                this.text('sao-compile')
                            ]),
                            this.text('. Parse '),
                            this.html(`d9edf7d0`, "code", parentElement, {}, (parentElement) => [
                                this.text('.sao')
                            ]),
                            this.text(' thành AST rồi emit hai đầu ra từ cùng một cây: Blade cho SSR và TypeScript cho view runtime, kèm registry.')
                        ])
                        ]),
                    this.html(`e88f763e`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`d7f6d064`, "span", parentElement, {}, (parentElement) => [
                            this.text('npm')
                        ]),
                        this.html(`20f8c5fb`, "h3", parentElement, {}, (parentElement) => [
                            this.text('@saolabs/client')
                        ]),
                        this.html(`a7ba8f53`, "p", parentElement, {}, (parentElement) => [
                            this.text('Runtime SPA: Application container, Router, ViewManager, ViewController, hệ element reactive, PageCache và bộ service (Http, Event, Store, Head…).')
                        ])
                        ])
                    ]),
                this.html(`dae15694`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.html(`38d317d8`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Vì sao tách ba gói:')
                    ]),
                    this.text(' compiler và client có thể phát hành lệch nhau, nên contract mang version. Compiler ghi '),
                    this.html(`7e4fc105`, "code", parentElement, {}, (parentElement) => [
                        this.text('__CONTRACT_VERSION__')
                    ]),
                    this.text(' vào output, client kiểm lúc load view — lệch major thì cảnh báo rõ ràng thay vì lỗi khó lần.')
                    ]),
                this.html(`928cd295`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`3c48ef82`, "span", parentElement, {}, (parentElement) => [
                        this.text('REQUEST')
                    ]),
                    this.text(' Từ URL tới tương tác')
                    ]),
                this.html(`6017143f`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Một đường đi, hai giai đoạn.')
                ]),
                this.html(`b2544d33`, "p", parentElement, {}, (parentElement) => [
                    this.text('Lần tải đầu là SSR thật: Laravel trả HTML hoàn chỉnh có sẵn nội dung. Runtime phía client không dựng lại DOM đó — nó '),
                    this.html(`b8d16007`, "em", parentElement, {}, (parentElement) => [
                        this.text('nhận')
                    ]),
                    this.text(' (claim) DOM có sẵn qua marker rồi gắn state và event lên. Từ lần điều hướng thứ hai trở đi, mọi thứ là CSR.')
                ]),
                this.html(`063d0abf`, "ol", parentElement,
                    { classes: [{ type: 'static', value: "flow-timeline" }] },
                    (parentElement) => [
                    this.html(`122400f7`, "li", parentElement, {}, (parentElement) => [
                        this.html(`f55747ab`, "span", parentElement, {}, (parentElement) => [
                            this.text('01')
                        ]),
                        this.html(`e16d36d8`, "div", parentElement, {}, (parentElement) => [
                            this.html(`29eadfa3`, "strong", parentElement, {}, (parentElement) => [
                                this.text('Route chọn context và module')
                            ]),
                            this.html(`59c04f6e`, "p", parentElement, {}, (parentElement) => [
                                this.text('Middleware theo context chạy trước, '),
                                this.html(`97d29790`, "code", parentElement, {}, (parentElement) => [
                                    this.text('System::context()')
                                ]),
                                this.text(' match route trong phạm vi module đã đăng ký.')
                            ])
                        ]),
                        this.html(`4088135a`, "code", parentElement, {}, (parentElement) => [
                            this.text('GET /roster')
                        ])
                    ]),
                    this.html(`d6c664b0`, "li", parentElement, {}, (parentElement) => [
                        this.html(`32b04801`, "span", parentElement, {}, (parentElement) => [
                            this.text('02')
                        ]),
                        this.html(`5712c3a6`, "div", parentElement, {}, (parentElement) => [
                            this.html(`9a5fe5b8`, "strong", parentElement, {}, (parentElement) => [
                                this.text('Controller trả view response')
                            ]),
                            this.html(`b658f38f`, "p", parentElement, {}, (parentElement) => [
                                this.text('Core resolve component ứng với route, render Blade và nhúng boot payload (viewId, registry, systemData) cho đúng context.')
                            ])
                        ]),
                        this.html(`1602ba3c`, "code", parentElement, {}, (parentElement) => [
                            this.text('context: web')
                        ])
                    ]),
                    this.html(`fa4fc4bb`, "li", parentElement, {}, (parentElement) => [
                        this.html(`54fda6ec`, "span", parentElement, {}, (parentElement) => [
                            this.text('03')
                        ]),
                        this.html(`0a6fb356`, "div", parentElement, {}, (parentElement) => [
                            this.html(`d0b19d09`, "strong", parentElement, {}, (parentElement) => [
                                this.text('Blade tạo HTML hoàn chỉnh')
                            ]),
                            this.html(`7fc98806`, "p", parentElement, {}, (parentElement) => [
                                this.text('Layout, block, include và children đã có nội dung trước khi một dòng JavaScript nào chạy. Mỗi vùng động được bọc bằng comment marker ổn định.')
                            ])
                        ]),
                        this.html(`8037480f`, "code", parentElement, {}, (parentElement) => [
                            this.text('SSR / READY')
                        ])
                    ]),
                    this.html(`ea648272`, "li", parentElement, {}, (parentElement) => [
                        this.html(`5d80ca80`, "span", parentElement, {}, (parentElement) => [
                            this.text('04')
                        ]),
                        this.html(`b845f58a`, "div", parentElement, {}, (parentElement) => [
                            this.html(`f60fdf6c`, "strong", parentElement, {}, (parentElement) => [
                                this.text('Runtime claim DOM có sẵn')
                            ]),
                            this.html(`d2c7176a`, "p", parentElement, {}, (parentElement) => [
                                this.text('State được commit về đúng giá trị server '),
                                this.html(`0f62299d`, "em", parentElement, {}, (parentElement) => [
                                    this.text('trước')
                                ]),
                                this.text(' khi render, để factory của '),
                                this.html(`b1f6f5bf`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "directive-token" }] },
                                    (parentElement) => [
                                    this.text('if')
                                    ]),
                                this.text(' và '),
                                this.html(`e3dd97a5`, "code", parentElement,
                                    { classes: [{ type: 'static', value: "directive-token" }] },
                                    (parentElement) => [
                                    this.text('foreach')
                                    ]),
                                this.text(' sinh đúng element claim đúng node.')
                            ])
                        ]),
                        this.html(`78a0b950`, "code", parentElement, {}, (parentElement) => [
                            this.text('HYDRATE / CLAIM')
                        ])
                    ]),
                    this.html(`87aa9539`, "li", parentElement, {}, (parentElement) => [
                        this.html(`23cd0823`, "span", parentElement, {}, (parentElement) => [
                            this.text('05')
                        ]),
                        this.html(`fe32cb47`, "div", parentElement, {}, (parentElement) => [
                            this.html(`638ad41c`, "strong", parentElement, {}, (parentElement) => [
                                this.text('Router tiếp quản điều hướng')
                            ]),
                            this.html(`23c3340c`, "p", parentElement, {}, (parentElement) => [
                                this.text('Điều hướng sau đó resolve view chain, diff layout và chỉ mount lại phần thay đổi. Back/forward đọc PageCache thay vì gọi lại API.')
                            ])
                        ]),
                        this.html(`da14a877`, "code", parentElement, {}, (parentElement) => [
                            this.text('SPA / ACTIVE')
                        ])
                    ])
                    ]),
                this.html(`d6184d28`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`01999fac`, "span", parentElement, {}, (parentElement) => [
                        this.text('MỤC LỤC')
                    ]),
                    this.text(' Đi thẳng tới phần bạn cần')
                    ]),
                this.html(`6e14ce93`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Tài liệu chia theo lớp.')
                ]),
                this.html(`5398cccb`, "p", parentElement, {}, (parentElement) => [
                    this.text('Bốn nhóm, mỗi nhóm trả lời một loại câu hỏi khác nhau. Nếu bạn mới bắt đầu, đi theo thứ tự; nếu đang tìm một directive cụ thể, nhảy thẳng vào tham chiếu.')
                ]),
                this.html(`80df339a`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-grid" }] },
                    (parentElement) => [
                    this.html(`f4d5b425`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/docs/getting-started" } } },
                        (parentElement) => [
                        this.html(`a3354437`, "span", parentElement, {}, (parentElement) => [
                            this.text('Bắt đầu')
                        ]),
                        this.html(`6ead5b82`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Cài đặt & route đầu tiên →')
                        ]),
                        this.html(`47283206`, "p", parentElement, {}, (parentElement) => [
                            this.text('Bốn bước từ khai báo module tới kiểm tra cả SSR lẫn SPA.')
                        ])
                        ]),
                    this.html(`85abe3c6`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/docs/architecture" } } },
                        (parentElement) => [
                        this.html(`f4c4c3cf`, "span", parentElement, {}, (parentElement) => [
                            this.text('Nền tảng')
                        ]),
                        this.html(`c922b52e`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Kiến trúc hệ thống →')
                        ]),
                        this.html(`9a4089e3`, "p", parentElement, {}, (parentElement) => [
                            this.text('Bốn lớp và một luồng: application, core, compiler, client.')
                        ])
                        ]),
                    this.html(`c6361774`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/docs/contexts" } } },
                        (parentElement) => [
                        this.html(`be312917`, "span", parentElement, {}, (parentElement) => [
                            this.text('Nền tảng')
                        ]),
                        this.html(`0ee840e5`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Context, module & controller →')
                        ]),
                        this.html(`34d12ce0`, "p", parentElement, {}, (parentElement) => [
                            this.text('Biên giới giữa web, admin, api; auto-discovery và fluent routing.')
                        ])
                        ]),
                    this.html(`f7f8c606`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/docs/compiler" } } },
                        (parentElement) => [
                        this.html(`9264060e`, "span", parentElement, {}, (parentElement) => [
                            this.text('Nền tảng')
                        ]),
                        this.html(`7ef211eb`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Compiler & AST →')
                        ]),
                        this.html(`d8acb95e`, "p", parentElement, {}, (parentElement) => [
                            this.text('Một cú pháp, hai output, cơ chế include và children đồng bộ.')
                        ])
                        ]),
                    this.html(`26a8cc25`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/docs/sao-file" } } },
                        (parentElement) => [
                        this.html(`0c3cb021`, "span", parentElement, {}, (parentElement) => [
                            this.text('Viết view')
                        ]),
                        this.html(`245410bf`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Cấu trúc file .sao →')
                        ]),
                        this.html(`81493a81`, "p", parentElement, {}, (parentElement) => [
                            this.text('Bốn phần của một single-file component và hai chế độ cú pháp.')
                        ])
                        ]),
                    this.html(`f9b8547f`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/docs/directives" } } },
                        (parentElement) => [
                        this.html(`bc4f736c`, "span", parentElement, {}, (parentElement) => [
                            this.text('Viết view')
                        ]),
                        this.html(`26b50979`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Tham chiếu directive →')
                        ]),
                        this.html(`cf927f87`, "p", parentElement, {}, (parentElement) => [
                            this.text('Bảy nhóm directive, từ khai báo tới quyền và biến ma thuật.')
                        ])
                        ]),
                    this.html(`36457108`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/docs/reactivity" } } },
                        (parentElement) => [
                        this.html(`686a1f19`, "span", parentElement, {}, (parentElement) => [
                            this.text('Viết view')
                        ]),
                        this.html(`1b5d3067`, "h3", parentElement, {}, (parentElement) => [
                            this.text('State & reactivity →')
                        ]),
                        this.html(`8a36e6f1`, "p", parentElement, {}, (parentElement) => [
                            this.text('Setter, batching theo khung hình, computed và element API.')
                        ])
                        ]),
                    this.html(`9e97b488`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/docs/runtime" } } },
                        (parentElement) => [
                        this.html(`bf975475`, "span", parentElement, {}, (parentElement) => [
                            this.text('Runtime')
                        ]),
                        this.html(`36bfa77e`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Runtime & hydration →')
                        ]),
                        this.html(`2085ecfa`, "p", parentElement, {}, (parentElement) => [
                            this.text('Claim DOM, reactive update, page cache và dọn tài nguyên.')
                        ])
                        ]),
                    this.html(`2ade4378`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/docs/lifecycle" } } },
                        (parentElement) => [
                        this.html(`84b5f3db`, "span", parentElement, {}, (parentElement) => [
                            this.text('Runtime')
                        ]),
                        this.html(`902cacf3`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Vòng đời & marker →')
                        ]),
                        this.html(`7e800569`, "p", parentElement, {}, (parentElement) => [
                            this.text('Bảy chuyển trạng thái và hợp đồng marker giữa server với client.')
                        ])
                        ]),
                    this.html(`03600615`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/docs/router" } } },
                        (parentElement) => [
                        this.html(`5eb52472`, "span", parentElement, {}, (parentElement) => [
                            this.text('Runtime')
                        ]),
                        this.html(`edc1ad53`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Router & dịch vụ client →')
                        ]),
                        this.html(`676d1978`, "p", parentElement, {}, (parentElement) => [
                            this.text('PageCache, layout diff và bộ service trên Application container.')
                        ])
                        ]),
                    this.html(`4d5e98af`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/docs/build" } } },
                        (parentElement) => [
                        this.html(`ac4f1e06`, "span", parentElement, {}, (parentElement) => [
                            this.text('Vận hành')
                        ]),
                        this.html(`0e5e2a5c`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Build, CLI & cấu hình →')
                        ]),
                        this.html(`b2bb31ad`, "p", parentElement, {}, (parentElement) => [
                            this.text('Hai chặng build, bốn file cấu hình và bộ kiểm thử.')
                        ])
                        ]),
                    this.html(`e79e65ec`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/docs/status" } } },
                        (parentElement) => [
                        this.html(`6938fd40`, "span", parentElement, {}, (parentElement) => [
                            this.text('Vận hành')
                        ]),
                        this.html(`bda0b470`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Giới hạn đã biết →')
                        ]),
                        this.html(`3216ecc8`, "p", parentElement, {}, (parentElement) => [
                            this.text('Cái gì đang chạy đầy đủ, cái gì còn dở và cách đi vòng.')
                        ])
                        ])
                    ]),
                this.html(`a2564ef8`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`40949b1e`, "span", parentElement, {}, (parentElement) => [
                        this.text('LIVE')
                    ]),
                    this.text(' Không chỉ đọc sơ đồ')
                    ]),
                this.html(`e8cbe06f`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Bốn trang đang chạy thật.')
                ]),
                this.html(`e81f259e`, "p", parentElement, {}, (parentElement) => [
                    this.text('Mỗi trang dưới đây là một fixture có chủ đích, không phải ảnh chụp. Mở DevTools xem HTML lần đầu để thấy nội dung đã có sẵn trước khi JavaScript chạy.')
                ]),
                this.html(`1d953a43`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-grid" }] },
                    (parentElement) => [
                    this.html(`8767a4ad`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/demo" } } },
                        (parentElement) => [
                        this.html(`e26fec16`, "span", parentElement, {}, (parentElement) => [
                            this.text('Fixture cú pháp')
                        ]),
                        this.html(`e468fa2e`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Interactive demo →')
                        ]),
                        this.html(`7e9cbc96`, "p", parentElement, {}, (parentElement) => [
                            this.text('Chín nhóm cú pháp trong một trang: state, event, binding, điều kiện, vòng lặp, switch, props, import và children.')
                        ])
                        ]),
                    this.html(`9181e823`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/todo-list" } } },
                        (parentElement) => [
                        this.html(`a4dd383e`, "span", parentElement, {}, (parentElement) => [
                            this.text('Layout dùng chung')
                        ]),
                        this.html(`6f84077d`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Todo workspace →')
                        ]),
                        this.html(`1e043e54`, "p", parentElement, {}, (parentElement) => [
                            this.text('State cục bộ của trang trong khi layout giữ nguyên qua mỗi lần đổi route.')
                        ])
                        ]),
                    this.html(`421ed208`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/roster" } } },
                        (parentElement) => [
                        this.html(`00ca029a`, "span", parentElement, {}, (parentElement) => [
                            this.text('Sửa đồng thời')
                        ]),
                        this.html(`86aa4e60`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Roster sync →')
                        ]),
                        this.html(`41bb2dda`, "p", parentElement, {}, (parentElement) => [
                            this.text('Poll ba mươi giây, diff giữ reference, và xử lý khi người khác sửa hoặc xoá đúng bản ghi bạn đang mở form.')
                        ])
                        ]),
                    this.html(`4744234c`, "a", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }], attrs: { "href": { type: 'static', value: "/ping" } } },
                        (parentElement) => [
                        this.html(`234c0225`, "span", parentElement, {}, (parentElement) => [
                            this.text('Hydration trần')
                        ]),
                        this.html(`2564cd1d`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Ping →')
                        ]),
                        this.html(`f74ab401`, "p", parentElement, {}, (parentElement) => [
                            this.text('Fixture nhỏ nhất: state, event, binding và một vòng lặp — đủ để soi marker bằng mắt.')
                        ])
                        ])
                    ])
                ]),
            this.html(`ceb15976`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/docs/getting-started" } } },
                (parentElement) => [
                this.html(`60f0ac7a`, "div", parentElement, {}, (parentElement) => [
                    this.html(`b7585c3f`, "span", parentElement, {}, (parentElement) => [
                        this.text('Tiếp theo')
                    ]),
                    this.html(`8767f8f3`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Cài đặt & route đầu tiên')
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
export function WebModulesDocsIndex(__data__ = {}, systemData = {}) {
    return new IndexView(__data__, systemData);
}
export default WebModulesDocsIndex;
