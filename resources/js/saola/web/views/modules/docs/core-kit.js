import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.docs.core-kit';
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



class CoreKitViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class CoreKitView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, CoreKitViewController);
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
                            this.text('13')
                        ]),
                        this.text(' BACKEND')
                        ]),
                    this.html(`Bdoc112`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Hạ tầng lõi.')
                    ])
                ]),
                this.html(`Bdoc12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`Bdoc121`, "p", parentElement, {}, (parentElement) => [
                        this.text('Ngoài bốn tầng nghiệp vụ, core còn mang sẵn một bộ hạ tầng: view engine, cache, hàng đợi, mail, đa ngôn ngữ, HTTP client, file và tác vụ bất đồng bộ.')
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
                        this.text('ENGINES')
                    ]),
                    this.text(' Nơi view được phân giải')
                    ]),
                this.html(`Bdoc22`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Engine là phần chạy dưới mọi request.')
                ]),
                this.html(`Bdoc23`, "p", parentElement, {}, (parentElement) => [
                    this.text('Đây là nhóm bạn hiếm khi gọi trực tiếp nhưng luôn phụ thuộc vào. '),
                    this.html(`Bdoc231`, "code", parentElement, {}, (parentElement) => [
                        this.text('ViewContextManager')
                    ]),
                    this.text(' chính là thứ cấp bảng '),
                    this.html(`Bdoc232`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "/docs/system-vars" } } },
                        (parentElement) => [
                        this.text('biến hệ thống')
                        ]),
                    this.text(', còn '),
                    this.html(`Bdoc233`, "code", parentElement, {}, (parentElement) => [
                        this.text('ViewPathResolver')
                    ]),
                    this.text(' là thứ biến '),
                    this.html(`Bdoc234`, "code", parentElement, {}, (parentElement) => [
                        this.text('__layout__ + \'docs\'')
                    ]),
                    this.text(' thành file thật.')
                ]),
                this.html(`Bdoc24`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`Bdoc241`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2411`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24111`, "code", parentElement, {}, (parentElement) => [
                                this.text('ViewContextManager')
                            ])
                            ]),
                        this.html(`Bdoc2412`, "span", parentElement, {}, (parentElement) => [
                            this.text('Giữ cấu hình từng context và dựng bảng biến đường dẫn')
                        ]),
                        this.html(`Bdoc2413`, "b", parentElement, {}, (parentElement) => [
                            this.text('view')
                        ])
                    ]),
                    this.html(`Bdoc242`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2421`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24211`, "code", parentElement, {}, (parentElement) => [
                                this.text('ViewContextRegistry')
                            ])
                            ]),
                        this.html(`Bdoc2422`, "span", parentElement, {}, (parentElement) => [
                            this.text('Sổ context theo request — Octane không rò state sang request sau')
                        ]),
                        this.html(`Bdoc2423`, "b", parentElement, {}, (parentElement) => [
                            this.text('view')
                        ])
                    ]),
                    this.html(`Bdoc243`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2431`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24311`, "code", parentElement, {}, (parentElement) => [
                                this.text('ViewPathResolver')
                            ])
                            ]),
                        this.html(`Bdoc2432`, "span", parentElement, {}, (parentElement) => [
                            this.text('Biến biến đường dẫn thành file view thật')
                        ]),
                        this.html(`Bdoc2433`, "b", parentElement, {}, (parentElement) => [
                            this.text('view')
                        ])
                    ]),
                    this.html(`Bdoc244`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2441`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24411`, "code", parentElement, {}, (parentElement) => [
                                this.text('ViewEngine')
                            ]),
                            this.text(' · '),
                            this.html(`Bdoc24412`, "code", parentElement, {}, (parentElement) => [
                                this.text('ViewManager')
                            ])
                            ]),
                        this.html(`Bdoc2442`, "span", parentElement, {}, (parentElement) => [
                            this.text('Render view và quản lý vòng đời phía server')
                        ]),
                        this.html(`Bdoc2443`, "b", parentElement, {}, (parentElement) => [
                            this.text('view')
                        ])
                    ]),
                    this.html(`Bdoc245`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2451`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24511`, "code", parentElement, {}, (parentElement) => [
                                this.text('ViewDataEngine')
                            ])
                            ]),
                        this.html(`Bdoc2452`, "span", parentElement, {}, (parentElement) => [
                            this.text('Gom dữ liệu đưa xuống view, gồm cả phần cho hydrate')
                        ]),
                        this.html(`Bdoc2453`, "b", parentElement, {}, (parentElement) => [
                            this.text('view')
                        ])
                    ]),
                    this.html(`Bdoc246`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2461`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24611`, "code", parentElement, {}, (parentElement) => [
                                this.text('CacheEngine')
                            ])
                            ]),
                        this.html(`Bdoc2462`, "span", parentElement, {}, (parentElement) => [
                            this.text('Cache theo domain và key chuẩn hoá — nền cho '),
                            this.html(`Bdoc24621`, "code", parentElement, {}, (parentElement) => [
                                this.text('CacheAction')
                            ]),
                            this.text(' của repository')
                        ]),
                        this.html(`Bdoc2463`, "b", parentElement, {}, (parentElement) => [
                            this.text('cache')
                        ])
                    ]),
                    this.html(`Bdoc247`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2471`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24711`, "code", parentElement, {}, (parentElement) => [
                                this.text('ShortCode')
                            ])
                            ]),
                        this.html(`Bdoc2472`, "span", parentElement, {}, (parentElement) => [
                            this.text('Thẻ ngắn trong nội dung do người dùng nhập: '),
                            this.html(`Bdoc24721`, "code", parentElement, {}, (parentElement) => [
                                this.text('add')
                            ]),
                            this.text(', '),
                            this.html(`Bdoc24722`, "code", parentElement, {}, (parentElement) => [
                                this.text('remove')
                            ]),
                            this.text(', '),
                            this.html(`Bdoc24723`, "code", parentElement, {}, (parentElement) => [
                                this.text('apply')
                            ])
                        ]),
                        this.html(`Bdoc2473`, "b", parentElement, {}, (parentElement) => [
                            this.text('nội dung')
                        ])
                    ]),
                    this.html(`Bdoc248`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2481`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24811`, "code", parentElement, {}, (parentElement) => [
                                this.text('DCryptEngine')
                            ])
                            ]),
                        this.html(`Bdoc2482`, "span", parentElement, {}, (parentElement) => [
                            this.text('Mã hoá/giải mã hai chiều cho dữ liệu cần giấu mà vẫn phải đọc lại')
                        ]),
                        this.html(`Bdoc2483`, "b", parentElement, {}, (parentElement) => [
                            this.text('bảo mật')
                        ])
                    ]),
                    this.html(`Bdoc249`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2491`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24911`, "code", parentElement, {}, (parentElement) => [
                                this.text('JsonData')
                            ])
                            ]),
                        this.html(`Bdoc2492`, "span", parentElement, {}, (parentElement) => [
                            this.text('Đọc ghi cấu trúc JSON như một kho dữ liệu nhỏ')
                        ]),
                        this.html(`Bdoc2493`, "b", parentElement, {}, (parentElement) => [
                            this.text('dữ liệu')
                        ])
                    ])
                    ]),
                this.html(`Bdoc25`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`Bdoc251`, "span", parentElement, {}, (parentElement) => [
                        this.text('NỀN TẢNG')
                    ]),
                    this.text(' Việc chạy ngoài request')
                    ]),
                this.html(`Bdoc26`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Hàng đợi, mail và tác vụ bất đồng bộ.')
                ]),
                this.html(`Bdoc27`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`Bdoc271`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2711`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc27111`, "code", parentElement, {}, (parentElement) => [
                                this.text('Queue')
                            ])
                            ]),
                        this.html(`Bdoc2712`, "span", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc27121`, "code", parentElement, {}, (parentElement) => [
                                this.text('add()')
                            ]),
                            this.text(' đẩy việc vào hàng đợi, '),
                            this.html(`Bdoc27122`, "code", parentElement, {}, (parentElement) => [
                                this.text('delay()')
                            ]),
                            this.text(' hoãn, '),
                            this.html(`Bdoc27123`, "code", parentElement, {}, (parentElement) => [
                                this.text('setTimeout()')
                            ]),
                            this.text(' giới hạn thời gian chạy, '),
                            this.html(`Bdoc27124`, "code", parentElement, {}, (parentElement) => [
                                this.text('enabled()')
                            ]),
                            this.text(' để tắt trong môi trường không có worker')
                        ]),
                        this.html(`Bdoc2713`, "b", parentElement, {}, (parentElement) => [
                            this.text('hàng đợi')
                        ])
                    ]),
                    this.html(`Bdoc272`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2721`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc27211`, "code", parentElement, {}, (parentElement) => [
                                this.text('QueueWork')
                            ])
                            ]),
                        this.html(`Bdoc2722`, "span", parentElement, {}, (parentElement) => [
                            this.text('Đơn vị công việc mà worker nhặt lên xử lý')
                        ]),
                        this.html(`Bdoc2723`, "b", parentElement, {}, (parentElement) => [
                            this.text('hàng đợi')
                        ])
                    ]),
                    this.html(`Bdoc273`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2731`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc27311`, "code", parentElement, {}, (parentElement) => [
                                this.text('Email')
                            ])
                            ]),
                        this.html(`Bdoc2732`, "span", parentElement, {}, (parentElement) => [
                            this.text('Dựng và gửi mail: '),
                            this.html(`Bdoc27321`, "code", parentElement, {}, (parentElement) => [
                                this.text('addAddress()')
                            ]),
                            this.text(' rồi gửi; '),
                            this.html(`Bdoc27322`, "code", parentElement, {}, (parentElement) => [
                                this.text('__call')
                            ]),
                            this.text(' chuyển tiếp sang message của mailer bên dưới')
                        ]),
                        this.html(`Bdoc2733`, "b", parentElement, {}, (parentElement) => [
                            this.text('mail')
                        ])
                    ]),
                    this.html(`Bdoc274`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2741`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc27411`, "code", parentElement, {}, (parentElement) => [
                                this.text('Mailer\\Job')
                            ])
                            ]),
                        this.html(`Bdoc2742`, "span", parentElement, {}, (parentElement) => [
                            this.text('Gửi mail qua hàng đợi thay vì chặn request')
                        ]),
                        this.html(`Bdoc2743`, "b", parentElement, {}, (parentElement) => [
                            this.text('mail')
                        ])
                    ]),
                    this.html(`Bdoc275`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2751`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc27511`, "code", parentElement, {}, (parentElement) => [
                                this.text('Await')
                            ])
                            ]),
                        this.html(`Bdoc2752`, "span", parentElement, {}, (parentElement) => [
                            this.text('Chờ kết quả bất đồng bộ trong luồng PHP đồng bộ')
                        ]),
                        this.html(`Bdoc2753`, "b", parentElement, {}, (parentElement) => [
                            this.text('async')
                        ])
                    ]),
                    this.html(`Bdoc276`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2761`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc27611`, "code", parentElement, {}, (parentElement) => [
                                this.text('Promise')
                            ])
                            ]),
                        this.html(`Bdoc2762`, "span", parentElement, {}, (parentElement) => [
                            this.text('Ghép nhiều tác vụ chạy song song rồi gom kết quả')
                        ]),
                        this.html(`Bdoc2763`, "b", parentElement, {}, (parentElement) => [
                            this.text('async')
                        ])
                    ])
                    ]),
                this.html(`Bdoc28`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.html(`Bdoc281`, "code", parentElement, {}, (parentElement) => [
                        this.text('Queue::enabled()')
                    ]),
                    this.text(' tồn tại để cùng một đoạn code chạy được ở máy dev không bật worker: hàng đợi tắt thì việc chạy đồng bộ ngay, không cần rẽ nhánh trong nghiệp vụ.')
                    ]),
                this.html(`Bdoc29`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`Bdoc291`, "span", parentElement, {}, (parentElement) => [
                        this.text('RA NGOÀI')
                    ]),
                    this.text(' Mạng, file, ngôn ngữ')
                    ]),
                this.html(`Bdoc2e10_`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Ba nhóm còn lại.')
                ]),
                this.html(`Bdoc2e11_`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`Bdoc2e11_1`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e11_11`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e11_111`, "code", parentElement, {}, (parentElement) => [
                                this.text('Http\\Client')
                            ]),
                            this.text(' · '),
                            this.html(`Bdoc2e11_112`, "code", parentElement, {}, (parentElement) => [
                                this.text('Curl')
                            ])
                            ]),
                        this.html(`Bdoc2e11_12`, "span", parentElement, {}, (parentElement) => [
                            this.text('Gọi API bên ngoài; '),
                            this.html(`Bdoc2e11_121`, "code", parentElement, {}, (parentElement) => [
                                this.text('HttpPromise')
                            ]),
                            this.text(' cho nhiều request song song')
                        ]),
                        this.html(`Bdoc2e11_13`, "b", parentElement, {}, (parentElement) => [
                            this.text('mạng')
                        ])
                    ]),
                    this.html(`Bdoc2e11_2`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e11_21`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e11_211`, "code", parentElement, {}, (parentElement) => [
                                this.text('Http\\BaseApi')
                            ])
                            ]),
                        this.html(`Bdoc2e11_22`, "span", parentElement, {}, (parentElement) => [
                            this.text('Lớp nền để bọc một API bên thứ ba thành service của dự án')
                        ]),
                        this.html(`Bdoc2e11_23`, "b", parentElement, {}, (parentElement) => [
                            this.text('mạng')
                        ])
                    ]),
                    this.html(`Bdoc2e11_3`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e11_31`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e11_311`, "code", parentElement, {}, (parentElement) => [
                                this.text('Crawler')
                            ]),
                            this.text(' · '),
                            this.html(`Bdoc2e11_312`, "code", parentElement, {}, (parentElement) => [
                                this.text('Crawl')
                            ])
                            ]),
                        this.html(`Bdoc2e11_32`, "span", parentElement, {}, (parentElement) => [
                            this.text('Lấy và bóc tách nội dung trang ngoài')
                        ]),
                        this.html(`Bdoc2e11_33`, "b", parentElement, {}, (parentElement) => [
                            this.text('mạng')
                        ])
                    ]),
                    this.html(`Bdoc2e11_4`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e11_41`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e11_411`, "code", parentElement, {}, (parentElement) => [
                                this.text('Files\\File')
                            ])
                            ]),
                        this.html(`Bdoc2e11_42`, "span", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc2e11_421`, "code", parentElement, {}, (parentElement) => [
                                this.text('setPath')
                            ]),
                            this.text(', '),
                            this.html(`Bdoc2e11_422`, "code", parentElement, {}, (parentElement) => [
                                this.text('setContent')
                            ]),
                            this.text(', '),
                            this.html(`Bdoc2e11_423`, "code", parentElement, {}, (parentElement) => [
                                this.text('pull')
                            ]),
                            this.text(', '),
                            this.html(`Bdoc2e11_424`, "code", parentElement, {}, (parentElement) => [
                                this.text('push')
                            ]),
                            this.text(', '),
                            this.html(`Bdoc2e11_425`, "code", parentElement, {}, (parentElement) => [
                                this.text('update')
                            ]),
                            this.text(' — thao tác file theo đối tượng')
                        ]),
                        this.html(`Bdoc2e11_43`, "b", parentElement, {}, (parentElement) => [
                            this.text('file')
                        ])
                    ]),
                    this.html(`Bdoc2e11_5`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e11_51`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e11_511`, "code", parentElement, {}, (parentElement) => [
                                this.text('FileConverter')
                            ]),
                            this.text(' · '),
                            this.html(`Bdoc2e11_512`, "code", parentElement, {}, (parentElement) => [
                                this.text('FileType')
                            ])
                            ]),
                        this.html(`Bdoc2e11_52`, "span", parentElement, {}, (parentElement) => [
                            this.text('Chuyển định dạng và nhận dạng loại file')
                        ]),
                        this.html(`Bdoc2e11_53`, "b", parentElement, {}, (parentElement) => [
                            this.text('file')
                        ])
                    ]),
                    this.html(`Bdoc2e11_6`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e11_61`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e11_611`, "code", parentElement, {}, (parentElement) => [
                                this.text('FileUploaded')
                            ])
                            ]),
                        this.html(`Bdoc2e11_62`, "span", parentElement, {}, (parentElement) => [
                            this.text('File người dùng tải lên — đi cùng '),
                            this.html(`Bdoc2e11_621`, "code", parentElement, {}, (parentElement) => [
                                this.text('ModelFileMethods')
                            ]),
                            this.text(' ở tầng model')
                        ]),
                        this.html(`Bdoc2e11_63`, "b", parentElement, {}, (parentElement) => [
                            this.text('file')
                        ])
                    ]),
                    this.html(`Bdoc2e11_7`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e11_71`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e11_711`, "code", parentElement, {}, (parentElement) => [
                                this.text('Locale')
                            ])
                            ]),
                        this.html(`Bdoc2e11_72`, "span", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc2e11_721`, "code", parentElement, {}, (parentElement) => [
                                this.text('set')
                            ]),
                            this.text(', '),
                            this.html(`Bdoc2e11_722`, "code", parentElement, {}, (parentElement) => [
                                this.text('get')
                            ]),
                            this.text(', '),
                            this.html(`Bdoc2e11_723`, "code", parentElement, {}, (parentElement) => [
                                this.text('setDefault')
                            ]),
                            this.text(', '),
                            this.html(`Bdoc2e11_724`, "code", parentElement, {}, (parentElement) => [
                                this.text('setCurrent')
                            ]),
                            this.text(' — ngôn ngữ hiện hành của request')
                        ]),
                        this.html(`Bdoc2e11_73`, "b", parentElement, {}, (parentElement) => [
                            this.text('ngôn ngữ')
                        ])
                    ])
                    ]),
                this.html(`Bdoc2e12_`, "p", parentElement, {}, (parentElement) => [
                    this.text('Chuỗi dạng '),
                    this.html(`Bdoc2e12_1`, "code", parentElement, {}, (parentElement) => [
                        this.text('@text:admin.users.module.title')
                    ]),
                    this.text(' trong khai báo module đi qua đúng tầng '),
                    this.html(`Bdoc2e12_2`, "code", parentElement, {}, (parentElement) => [
                        this.text('Locale')
                    ]),
                    this.text(' này — nhờ vậy tiêu đề module dịch được mà không phải viết code rẽ nhánh.')
                ]),
                this.html(`Bdoc2e13_`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.text('Trang này chỉ điểm mặt để bạn biết cái gì có sẵn. Cách dùng chi tiết của từng nhóm nằm trong '),
                    this.html(`Bdoc2e13_1`, "code", parentElement, {}, (parentElement) => [
                        this.text('core/docs')
                    ]),
                    this.text(' và thư mục '),
                    this.html(`Bdoc2e13_2`, "code", parentElement, {}, (parentElement) => [
                        this.text('examples')
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
export function WebModulesDocsCoreKit(__data__ = {}, systemData = {}) {
    return new CoreKitView(__data__, systemData);
}
export default WebModulesDocsCoreKit;