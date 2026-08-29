import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.docs.lifecycle';
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



class LifecycleViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class LifecycleView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, LifecycleViewController);
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
                            this.text('06')
                        ]),
                        this.text(' RUNTIME')
                        ]),
                    this.html(`Bdoc112`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Vòng đời và marker.')
                    ])
                ]),
                this.html(`Bdoc12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`Bdoc121`, "p", parentElement, {}, (parentElement) => [
                        this.text('ViewController là một state machine bảy chuyển trạng thái. Marker comment là hợp đồng để client nhận lại DOM server đã render thay vì dựng lại từ đầu.')
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
                        this.text('LIFECYCLE')
                    ]),
                    this.text(' Trạng thái quan sát được')
                    ]),
                this.html(`Bdoc22`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Bảy chuyển trạng thái, mỗi cái một cặp hook.')
                ]),
                this.html(`Bdoc23`, "p", parentElement, {}, (parentElement) => [
                    this.text('ViewController là một state machine: '),
                    this.html(`Bdoc231`, "code", parentElement, {}, (parentElement) => [
                        this.text('created → active ⇄ paused → destroyed')
                    ]),
                    this.text('. Mỗi chuyển trạng thái bắn ra một cặp hook trước và sau, khai báo thẳng trong '),
                    this.html(`Bdoc232`, "code", parentElement, {}, (parentElement) => [
                        this.text('<script setup>')
                    ]),
                    this.text('.')
                ]),
                this.html(`Bdoc24`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`Bdoc241`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2411`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24111`, "code", parentElement, {}, (parentElement) => [
                                this.text('mounting · mounted')
                            ])
                            ]),
                        this.html(`Bdoc2412`, "span", parentElement, {}, (parentElement) => [
                            this.text('DOM gắn vào tài liệu thật, style và script của view được acquire')
                        ]),
                        this.html(`Bdoc2413`, "b", parentElement, {}, (parentElement) => [
                            this.text('mount')
                        ])
                    ]),
                    this.html(`Bdoc242`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2421`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24211`, "code", parentElement, {}, (parentElement) => [
                                this.text('starting · started')
                            ])
                            ]),
                        this.html(`Bdoc2422`, "span", parentElement, {}, (parentElement) => [
                            this.text('Subscribe reactive và gắn event; chạy sau render và commit data')
                        ]),
                        this.html(`Bdoc2423`, "b", parentElement, {}, (parentElement) => [
                            this.text('start')
                        ])
                    ]),
                    this.html(`Bdoc243`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2431`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24311`, "code", parentElement, {}, (parentElement) => [
                                this.text('pausing · paused')
                            ])
                            ]),
                        this.html(`Bdoc2432`, "span", parentElement, {}, (parentElement) => [
                            this.text('Rời DOM để vào PageCache; state chuyển sang chế độ ghi dirty')
                        ]),
                        this.html(`Bdoc2433`, "b", parentElement, {}, (parentElement) => [
                            this.text('pause')
                        ])
                    ]),
                    this.html(`Bdoc244`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2441`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24411`, "code", parentElement, {}, (parentElement) => [
                                this.text('resuming · resumed')
                            ])
                            ]),
                        this.html(`Bdoc2442`, "span", parentElement, {}, (parentElement) => [
                            this.text('Quay lại từ PageCache; flush dirty rồi gắn lại DOM')
                        ]),
                        this.html(`Bdoc2443`, "b", parentElement, {}, (parentElement) => [
                            this.text('resume')
                        ])
                    ]),
                    this.html(`Bdoc245`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2451`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24511`, "code", parentElement, {}, (parentElement) => [
                                this.text('stopping · stopped')
                            ])
                            ]),
                        this.html(`Bdoc2452`, "span", parentElement, {}, (parentElement) => [
                            this.text('Huỷ subscribe, DOM vẫn còn nguyên')
                        ]),
                        this.html(`Bdoc2453`, "b", parentElement, {}, (parentElement) => [
                            this.text('stop')
                        ])
                    ]),
                    this.html(`Bdoc246`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2461`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24611`, "code", parentElement, {}, (parentElement) => [
                                this.text('unmounting · unmounted')
                            ])
                            ]),
                        this.html(`Bdoc2462`, "span", parentElement, {}, (parentElement) => [
                            this.text('Gỡ DOM khỏi tài liệu, release asset theo ref-count')
                        ]),
                        this.html(`Bdoc2463`, "b", parentElement, {}, (parentElement) => [
                            this.text('unmount')
                        ])
                    ]),
                    this.html(`Bdoc247`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2471`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24711`, "code", parentElement, {}, (parentElement) => [
                                this.text('destroying · destroyed')
                            ])
                            ]),
                        this.html(`Bdoc2472`, "span", parentElement, {}, (parentElement) => [
                            this.text('Dọn toàn bộ: abort event, huỷ subscription, destroy con theo thứ tự ngược')
                        ]),
                        this.html(`Bdoc2473`, "b", parentElement, {}, (parentElement) => [
                            this.text('destroy')
                        ])
                    ])
                    ]),
                this.html(`Bdoc25`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.text('Alias tương thích bản cũ vẫn chạy: '),
                    this.html(`Bdoc251`, "code", parentElement, {}, (parentElement) => [
                        this.text('onMounted')
                    ]),
                    this.text(' ≈ '),
                    this.html(`Bdoc252`, "code", parentElement, {}, (parentElement) => [
                        this.text('started')
                    ]),
                    this.text(', '),
                    this.html(`Bdoc253`, "code", parentElement, {}, (parentElement) => [
                        this.text('onPause')
                    ]),
                    this.text(' ≈ '),
                    this.html(`Bdoc254`, "code", parentElement, {}, (parentElement) => [
                        this.text('paused')
                    ]),
                    this.text(', '),
                    this.html(`Bdoc255`, "code", parentElement, {}, (parentElement) => [
                        this.text('onResume')
                    ]),
                    this.text(' ≈ '),
                    this.html(`Bdoc256`, "code", parentElement, {}, (parentElement) => [
                        this.text('resumed')
                    ]),
                    this.text(', '),
                    this.html(`Bdoc257`, "code", parentElement, {}, (parentElement) => [
                        this.text('onDeactivated')
                    ]),
                    this.text(' ≈ '),
                    this.html(`Bdoc258`, "code", parentElement, {}, (parentElement) => [
                        this.text('stopped')
                    ]),
                    this.text(', '),
                    this.html(`Bdoc259`, "code", parentElement, {}, (parentElement) => [
                        this.text('onDestroy')
                    ]),
                    this.text(' ≈ '),
                    this.html(`Bdoc25e10_`, "code", parentElement, {}, (parentElement) => [
                        this.text('destroyed')
                    ]),
                    this.text('. Hook async không chặn điều hướng nhưng promise bị reject vẫn được log.')
                    ]),
                this.html(`Bdoc26`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`Bdoc261`, "span", parentElement, {}, (parentElement) => [
                        this.text('HYDRATION')
                    ]),
                    this.text(' Nhận DOM thay vì dựng lại')
                    ]),
                this.html(`Bdoc27`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Marker là hợp đồng giữa hai bên.')
                ]),
                this.html(`Bdoc28`, "p", parentElement, {}, (parentElement) => [
                    this.text('Server bọc mỗi vùng động bằng comment marker; client tìm đúng cặp marker đó để claim. Format được định nghĩa ở đúng hai nơi và bắt buộc phải khớp: '),
                    this.html(`Bdoc281`, "code", parentElement, {}, (parentElement) => [
                        this.text('MarkerRegistry')
                    ]),
                    this.text(' phía client và '),
                    this.html(`Bdoc282`, "code", parentElement, {}, (parentElement) => [
                        this.text('ViewStorageManager')
                    ]),
                    this.text(' phía server.')
                ]),
                this.html(`Bdoc29`, "div", parentElement,
                    { classes: [{ type: 'static', value: "code-window" }, { type: 'static', value: "code-window-dark" }] },
                    (parentElement) => [
                    this.html(`Bdoc291`, "div", parentElement,
                        { classes: [{ type: 'static', value: "window-bar" }] },
                        (parentElement) => [
                        this.html(`Bdoc2911`, "span", parentElement, {}, (parentElement) => [
                            this.text('MARKER')
                        ]),
                        this.html(`Bdoc2912`, "b", parentElement, {}, (parentElement) => [
                            this.text('format')
                        ])
                        ]),
                    this.html(`Bdoc292`, "pre", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2921`, "code", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc29211`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }] },
                                (parentElement) => [
                                this.text('<!--s:{type}:{id}-s-->   ...nội dung...   <!--s:{type}:{id}-e-->')
                                ])
                        ])
                    ])
                    ]),
                this.html(`Bdoc2e10_`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`Bdoc2e10_1`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e10_11`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e10_111`, "code", parentElement, {}, (parentElement) => [
                                this.text('v')
                            ])
                            ]),
                        this.html(`Bdoc2e10_12`, "span", parentElement, {}, (parentElement) => [
                            this.text('Wrapper — biên của một view, id là '),
                            this.html(`Bdoc2e10_121`, "code", parentElement, {}, (parentElement) => [
                                this.text('viewId')
                            ])
                        ]),
                        this.html(`Bdoc2e10_13`, "b", parentElement, {}, (parentElement) => [
                            this.text('view')
                        ])
                    ]),
                    this.html(`Bdoc2e10_2`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e10_21`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e10_211`, "code", parentElement, {}, (parentElement) => [
                                this.text('r')
                            ])
                            ]),
                        this.html(`Bdoc2e10_22`, "span", parentElement, {}, (parentElement) => [
                            this.text('Reactive — vùng if, foreach, switch')
                        ]),
                        this.html(`Bdoc2e10_23`, "b", parentElement, {}, (parentElement) => [
                            this.text('reactive')
                        ])
                    ]),
                    this.html(`Bdoc2e10_3`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e10_31`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e10_311`, "code", parentElement, {}, (parentElement) => [
                                this.text('o')
                            ])
                            ]),
                        this.html(`Bdoc2e10_32`, "span", parentElement, {}, (parentElement) => [
                            this.text('Output — giá trị nội suy')
                        ]),
                        this.html(`Bdoc2e10_33`, "b", parentElement, {}, (parentElement) => [
                            this.text('output')
                        ])
                    ]),
                    this.html(`Bdoc2e10_4`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e10_41`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e10_411`, "code", parentElement, {}, (parentElement) => [
                                this.text('b')
                            ]),
                            this.text(' / '),
                            this.html(`Bdoc2e10_412`, "code", parentElement, {}, (parentElement) => [
                                this.text('bo')
                            ])
                            ]),
                        this.html(`Bdoc2e10_42`, "span", parentElement, {}, (parentElement) => [
                            this.text('Block và BlockOutlet')
                        ]),
                        this.html(`Bdoc2e10_43`, "b", parentElement, {}, (parentElement) => [
                            this.text('layout')
                        ])
                    ]),
                    this.html(`Bdoc2e10_5`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e10_51`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e10_511`, "code", parentElement, {}, (parentElement) => [
                                this.text('c')
                            ]),
                            this.text(' / '),
                            this.html(`Bdoc2e10_512`, "code", parentElement, {}, (parentElement) => [
                                this.text('frg')
                            ]),
                            this.text(' / '),
                            this.html(`Bdoc2e10_513`, "code", parentElement, {}, (parentElement) => [
                                this.text('y')
                            ])
                            ]),
                        this.html(`Bdoc2e10_52`, "span", parentElement, {}, (parentElement) => [
                            this.text('Component, Fragment, Yield')
                        ]),
                        this.html(`Bdoc2e10_53`, "b", parentElement, {}, (parentElement) => [
                            this.text('structure')
                        ])
                    ]),
                    this.html(`Bdoc2e10_6`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e10_61`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc2e10_611`, "code", parentElement, {}, (parentElement) => [
                                this.text('fe')
                            ]),
                            this.text(' / '),
                            this.html(`Bdoc2e10_612`, "code", parentElement, {}, (parentElement) => [
                                this.text('fls')
                            ]),
                            this.text(' / '),
                            this.html(`Bdoc2e10_613`, "code", parentElement, {}, (parentElement) => [
                                this.text('ea')
                            ])
                            ]),
                        this.html(`Bdoc2e10_62`, "span", parentElement, {}, (parentElement) => [
                            this.text('Marker của foreach, forelse, each')
                        ]),
                        this.html(`Bdoc2e10_63`, "b", parentElement, {}, (parentElement) => [
                            this.text('loop')
                        ])
                    ])
                    ]),
                this.html(`Bdoc2e11_`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-sub" }] },
                    (parentElement) => [
                    this.text('Thứ tự khi hydrate')
                    ]),
                this.html(`Bdoc2e12_`, "p", parentElement, {}, (parentElement) => [
                    this.text('Khác CSR ở chỗ state được commit '),
                    this.html(`Bdoc2e12_1`, "em", parentElement, {}, (parentElement) => [
                        this.text('trước')
                    ]),
                    this.text(' khi render, vì factory của vùng điều kiện phụ thuộc state — sai state thì sinh sai element và claim trượt DOM.')
                ]),
                this.html(`Bdoc2e13_`, "ul", parentElement,
                    { classes: [{ type: 'static', value: "check-list" }] },
                    (parentElement) => [
                    this.html(`Bdoc2e13_1`, "li", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e13_11`, "code", parentElement, {}, (parentElement) => [
                            this.text('commitData()')
                        ]),
                        this.text(' khôi phục state đúng bằng giá trị server.')
                    ]),
                    this.html(`Bdoc2e13_2`, "li", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e13_21`, "code", parentElement, {}, (parentElement) => [
                            this.text('flushNow()')
                        ]),
                        this.text(' khi chưa subscribe — bỏ pending để không render lại phá DOM vừa claim.')
                    ]),
                    this.html(`Bdoc2e13_3`, "li", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e13_31`, "code", parentElement, {}, (parentElement) => [
                            this.text('render()')
                        ]),
                        this.text(' tạo cây object và claim DOM, tuyệt đối không '),
                        this.html(`Bdoc2e13_32`, "code", parentElement, {}, (parentElement) => [
                            this.text('appendChild')
                        ]),
                        this.text('.')
                    ]),
                    this.html(`Bdoc2e13_4`, "li", parentElement, {}, (parentElement) => [
                        this.text('Đổi '),
                        this.html(`Bdoc2e13_41`, "code", parentElement, {}, (parentElement) => [
                            this.text('initMode')
                        ]),
                        this.text(' sang '),
                        this.html(`Bdoc2e13_42`, "code", parentElement, {}, (parentElement) => [
                            this.text('create')
                        ]),
                        this.text(' — từ đây mọi re-render là CSR bình thường.')
                    ]),
                    this.html(`Bdoc2e13_5`, "li", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2e13_51`, "code", parentElement, {}, (parentElement) => [
                            this.text('start()')
                        ]),
                        this.text(' gắn subscription và event, rồi kích hoạt vùng.')
                    ])
                    ]),
                this.html(`Bdoc2e14_`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.text('Html claim bằng class '),
                    this.html(`Bdoc2e14_1`, "code", parentElement, {}, (parentElement) => [
                        this.text('{viewId}-{hash}')
                    ]),
                    this.text(', các element dạng marker claim bằng cặp comment. Không tìm thấy thì element tự tạo mới — hydration một phần vẫn chạy chứ không vỡ trang.')
                    ])
                ]),
            this.html(`Bdoc3`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/docs/router" } } },
                (parentElement) => [
                this.html(`Bdoc31`, "div", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc311`, "span", parentElement, {}, (parentElement) => [
                        this.text('Tiếp theo')
                    ]),
                    this.html(`Bdoc312`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Router & dịch vụ client')
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
export function WebModulesDocsLifecycle(__data__ = {}, systemData = {}) {
    return new LifecycleView(__data__, systemData);
}
export default WebModulesDocsLifecycle;