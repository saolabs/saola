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
            this.html(`ff96f7a7`, "header", parentElement,
                { classes: [{ type: 'static', value: "page-hero" }] },
                (parentElement) => [
                this.html(`15b892a7`, "div", parentElement, {}, (parentElement) => [
                    this.html(`ab74559e`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`943e8228`, "span", parentElement, {}, (parentElement) => [
                            this.text('06')
                        ]),
                        this.text(' RUNTIME')
                        ]),
                    this.html(`9abe25a3`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Vòng đời và marker.')
                    ])
                ]),
                this.html(`f750a15d`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`2a968179`, "p", parentElement, {}, (parentElement) => [
                        this.text('ViewController là một state machine bảy chuyển trạng thái. Marker comment là hợp đồng để client nhận lại DOM server đã render thay vì dựng lại từ đầu.')
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
                        this.text('LIFECYCLE')
                    ]),
                    this.text(' Trạng thái quan sát được')
                    ]),
                this.html(`c048d2ef`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Bảy chuyển trạng thái, mỗi cái một cặp hook.')
                ]),
                this.html(`1c642396`, "p", parentElement, {}, (parentElement) => [
                    this.text('ViewController là một state machine: '),
                    this.html(`34be1ee8`, "code", parentElement, {}, (parentElement) => [
                        this.text('created → active ⇄ paused → destroyed')
                    ]),
                    this.text('. Mỗi chuyển trạng thái bắn ra một cặp hook trước và sau, khai báo thẳng trong '),
                    this.html(`f254a2ba`, "code", parentElement, {}, (parentElement) => [
                        this.text('<script setup>')
                    ]),
                    this.text('.')
                ]),
                this.html(`753dcd15`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`9de53a5a`, "div", parentElement, {}, (parentElement) => [
                        this.html(`565197a0`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`f8ca00ca`, "code", parentElement, {}, (parentElement) => [
                                this.text('mounting · mounted')
                            ])
                            ]),
                        this.html(`082faf6b`, "span", parentElement, {}, (parentElement) => [
                            this.text('DOM gắn vào tài liệu thật, style và script của view được acquire')
                        ]),
                        this.html(`8117b870`, "b", parentElement, {}, (parentElement) => [
                            this.text('mount')
                        ])
                    ]),
                    this.html(`c8e71cd3`, "div", parentElement, {}, (parentElement) => [
                        this.html(`43777599`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`ac254d87`, "code", parentElement, {}, (parentElement) => [
                                this.text('starting · started')
                            ])
                            ]),
                        this.html(`9467ba30`, "span", parentElement, {}, (parentElement) => [
                            this.text('Subscribe reactive và gắn event; chạy sau render và commit data')
                        ]),
                        this.html(`47abd5ae`, "b", parentElement, {}, (parentElement) => [
                            this.text('start')
                        ])
                    ]),
                    this.html(`e88f763e`, "div", parentElement, {}, (parentElement) => [
                        this.html(`a6515611`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`a810d411`, "code", parentElement, {}, (parentElement) => [
                                this.text('pausing · paused')
                            ])
                            ]),
                        this.html(`eaef3113`, "span", parentElement, {}, (parentElement) => [
                            this.text('Rời DOM để vào PageCache; state chuyển sang chế độ ghi dirty')
                        ]),
                        this.html(`4a54cc8d`, "b", parentElement, {}, (parentElement) => [
                            this.text('pause')
                        ])
                    ]),
                    this.html(`094adcdf`, "div", parentElement, {}, (parentElement) => [
                        this.html(`1a29d412`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`8a43b879`, "code", parentElement, {}, (parentElement) => [
                                this.text('resuming · resumed')
                            ])
                            ]),
                        this.html(`59ce3274`, "span", parentElement, {}, (parentElement) => [
                            this.text('Quay lại từ PageCache; flush dirty rồi gắn lại DOM')
                        ]),
                        this.html(`3c958ed6`, "b", parentElement, {}, (parentElement) => [
                            this.text('resume')
                        ])
                    ]),
                    this.html(`107c1236`, "div", parentElement, {}, (parentElement) => [
                        this.html(`ce5a01f4`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`f325eaba`, "code", parentElement, {}, (parentElement) => [
                                this.text('stopping · stopped')
                            ])
                            ]),
                        this.html(`e87f95f3`, "span", parentElement, {}, (parentElement) => [
                            this.text('Huỷ subscribe, DOM vẫn còn nguyên')
                        ]),
                        this.html(`5d6b940a`, "b", parentElement, {}, (parentElement) => [
                            this.text('stop')
                        ])
                    ]),
                    this.html(`9bd93313`, "div", parentElement, {}, (parentElement) => [
                        this.html(`216126f0`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`f7fcf92c`, "code", parentElement, {}, (parentElement) => [
                                this.text('unmounting · unmounted')
                            ])
                            ]),
                        this.html(`c512c480`, "span", parentElement, {}, (parentElement) => [
                            this.text('Gỡ DOM khỏi tài liệu, release asset theo ref-count')
                        ]),
                        this.html(`86a3fdfd`, "b", parentElement, {}, (parentElement) => [
                            this.text('unmount')
                        ])
                    ]),
                    this.html(`26af8a4f`, "div", parentElement, {}, (parentElement) => [
                        this.html(`6e702ff2`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`b2ed6d4a`, "code", parentElement, {}, (parentElement) => [
                                this.text('destroying · destroyed')
                            ])
                            ]),
                        this.html(`fcd984ca`, "span", parentElement, {}, (parentElement) => [
                            this.text('Dọn toàn bộ: abort event, huỷ subscription, destroy con theo thứ tự ngược')
                        ]),
                        this.html(`1c68e2d8`, "b", parentElement, {}, (parentElement) => [
                            this.text('destroy')
                        ])
                    ])
                    ]),
                this.html(`dae15694`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.text('Alias tương thích bản cũ vẫn chạy: '),
                    this.html(`3c40d554`, "code", parentElement, {}, (parentElement) => [
                        this.text('onMounted')
                    ]),
                    this.text(' ≈ '),
                    this.html(`7e4fc105`, "code", parentElement, {}, (parentElement) => [
                        this.text('started')
                    ]),
                    this.text(', '),
                    this.html(`60d074e3`, "code", parentElement, {}, (parentElement) => [
                        this.text('onPause')
                    ]),
                    this.text(' ≈ '),
                    this.html(`340d56a1`, "code", parentElement, {}, (parentElement) => [
                        this.text('paused')
                    ]),
                    this.text(', '),
                    this.html(`c1290c1b`, "code", parentElement, {}, (parentElement) => [
                        this.text('onResume')
                    ]),
                    this.text(' ≈ '),
                    this.html(`749bd840`, "code", parentElement, {}, (parentElement) => [
                        this.text('resumed')
                    ]),
                    this.text(', '),
                    this.html(`ef75d7d8`, "code", parentElement, {}, (parentElement) => [
                        this.text('onDeactivated')
                    ]),
                    this.text(' ≈ '),
                    this.html(`3e849ce1`, "code", parentElement, {}, (parentElement) => [
                        this.text('stopped')
                    ]),
                    this.text(', '),
                    this.html(`a6469a44`, "code", parentElement, {}, (parentElement) => [
                        this.text('onDestroy')
                    ]),
                    this.text(' ≈ '),
                    this.html(`e497fd64`, "code", parentElement, {}, (parentElement) => [
                        this.text('destroyed')
                    ]),
                    this.text('. Hook async không chặn điều hướng nhưng promise bị reject vẫn được log.')
                    ]),
                this.html(`928cd295`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`3c48ef82`, "span", parentElement, {}, (parentElement) => [
                        this.text('HYDRATION')
                    ]),
                    this.text(' Nhận DOM thay vì dựng lại')
                    ]),
                this.html(`6017143f`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Marker là hợp đồng giữa hai bên.')
                ]),
                this.html(`b2544d33`, "p", parentElement, {}, (parentElement) => [
                    this.text('Server bọc mỗi vùng động bằng comment marker; client tìm đúng cặp marker đó để claim. Format được định nghĩa ở đúng hai nơi và bắt buộc phải khớp: '),
                    this.html(`4bbcc3f6`, "code", parentElement, {}, (parentElement) => [
                        this.text('MarkerRegistry')
                    ]),
                    this.text(' phía client và '),
                    this.html(`5b736351`, "code", parentElement, {}, (parentElement) => [
                        this.text('ViewStorageManager')
                    ]),
                    this.text(' phía server.')
                ]),
                this.html(`f42070db`, "div", parentElement,
                    { classes: [{ type: 'static', value: "code-window" }, { type: 'static', value: "code-window-dark" }] },
                    (parentElement) => [
                    this.html(`0fd1ee4f`, "div", parentElement,
                        { classes: [{ type: 'static', value: "window-bar" }] },
                        (parentElement) => [
                        this.html(`c0214d95`, "span", parentElement, {}, (parentElement) => [
                            this.text('MARKER')
                        ]),
                        this.html(`1cffa586`, "b", parentElement, {}, (parentElement) => [
                            this.text('format')
                        ])
                        ]),
                    this.html(`b1601701`, "pre", parentElement, {}, (parentElement) => [
                        this.html(`1588f021`, "code", parentElement, {}, (parentElement) => [
                            this.html(`19250bb5`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }] },
                                (parentElement) => [
                                this.text('<!--s:{type}:{id}-s-->   ...nội dung...   <!--s:{type}:{id}-e-->')
                                ])
                        ])
                    ])
                    ]),
                this.html(`6be80a2e`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`4df8c743`, "div", parentElement, {}, (parentElement) => [
                        this.html(`d0fc03d9`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`8897a0fb`, "code", parentElement, {}, (parentElement) => [
                                this.text('v')
                            ])
                            ]),
                        this.html(`c4cc43d7`, "span", parentElement, {}, (parentElement) => [
                            this.text('Wrapper — biên của một view, id là '),
                            this.html(`2f66bb27`, "code", parentElement, {}, (parentElement) => [
                                this.text('viewId')
                            ])
                        ]),
                        this.html(`5c55ca78`, "b", parentElement, {}, (parentElement) => [
                            this.text('view')
                        ])
                    ]),
                    this.html(`86d7603e`, "div", parentElement, {}, (parentElement) => [
                        this.html(`5f7b81fa`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`ff410334`, "code", parentElement, {}, (parentElement) => [
                                this.text('r')
                            ])
                            ]),
                        this.html(`b73b4e2f`, "span", parentElement, {}, (parentElement) => [
                            this.text('Reactive — vùng if, foreach, switch')
                        ]),
                        this.html(`590fa3af`, "b", parentElement, {}, (parentElement) => [
                            this.text('reactive')
                        ])
                    ]),
                    this.html(`e1317a7d`, "div", parentElement, {}, (parentElement) => [
                        this.html(`8d40970c`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`ab0a2dc8`, "code", parentElement, {}, (parentElement) => [
                                this.text('o')
                            ])
                            ]),
                        this.html(`c3fdf70c`, "span", parentElement, {}, (parentElement) => [
                            this.text('Output — giá trị nội suy')
                        ]),
                        this.html(`dce8b2c4`, "b", parentElement, {}, (parentElement) => [
                            this.text('output')
                        ])
                    ]),
                    this.html(`f3162679`, "div", parentElement, {}, (parentElement) => [
                        this.html(`ea6d4528`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`6dbba0f0`, "code", parentElement, {}, (parentElement) => [
                                this.text('b')
                            ]),
                            this.text(' / '),
                            this.html(`2afab1d5`, "code", parentElement, {}, (parentElement) => [
                                this.text('bo')
                            ])
                            ]),
                        this.html(`479b49c7`, "span", parentElement, {}, (parentElement) => [
                            this.text('Block và BlockOutlet')
                        ]),
                        this.html(`e313d0ea`, "b", parentElement, {}, (parentElement) => [
                            this.text('layout')
                        ])
                    ]),
                    this.html(`9293338c`, "div", parentElement, {}, (parentElement) => [
                        this.html(`efe1d5ee`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`8c851268`, "code", parentElement, {}, (parentElement) => [
                                this.text('c')
                            ]),
                            this.text(' / '),
                            this.html(`71028711`, "code", parentElement, {}, (parentElement) => [
                                this.text('frg')
                            ]),
                            this.text(' / '),
                            this.html(`42a4d423`, "code", parentElement, {}, (parentElement) => [
                                this.text('y')
                            ])
                            ]),
                        this.html(`7f0b6751`, "span", parentElement, {}, (parentElement) => [
                            this.text('Component, Fragment, Yield')
                        ]),
                        this.html(`e93586b1`, "b", parentElement, {}, (parentElement) => [
                            this.text('structure')
                        ])
                    ]),
                    this.html(`e331531e`, "div", parentElement, {}, (parentElement) => [
                        this.html(`1c77ddc2`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`313dba7b`, "code", parentElement, {}, (parentElement) => [
                                this.text('fe')
                            ]),
                            this.text(' / '),
                            this.html(`312737c9`, "code", parentElement, {}, (parentElement) => [
                                this.text('fls')
                            ]),
                            this.text(' / '),
                            this.html(`046458ca`, "code", parentElement, {}, (parentElement) => [
                                this.text('ea')
                            ])
                            ]),
                        this.html(`ae8434ff`, "span", parentElement, {}, (parentElement) => [
                            this.text('Marker của foreach, forelse, each')
                        ]),
                        this.html(`40911e96`, "b", parentElement, {}, (parentElement) => [
                            this.text('loop')
                        ])
                    ])
                    ]),
                this.html(`b45f8fde`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-sub" }] },
                    (parentElement) => [
                    this.text('Thứ tự khi hydrate')
                    ]),
                this.html(`5398cccb`, "p", parentElement, {}, (parentElement) => [
                    this.text('Khác CSR ở chỗ state được commit '),
                    this.html(`e3d3f3f5`, "em", parentElement, {}, (parentElement) => [
                        this.text('trước')
                    ]),
                    this.text(' khi render, vì factory của vùng điều kiện phụ thuộc state — sai state thì sinh sai element và claim trượt DOM.')
                ]),
                this.html(`6cefedfb`, "ul", parentElement,
                    { classes: [{ type: 'static', value: "check-list" }] },
                    (parentElement) => [
                    this.html(`d07f5414`, "li", parentElement, {}, (parentElement) => [
                        this.html(`b3529956`, "code", parentElement, {}, (parentElement) => [
                            this.text('commitData()')
                        ]),
                        this.text(' khôi phục state đúng bằng giá trị server.')
                    ]),
                    this.html(`bdaa75e6`, "li", parentElement, {}, (parentElement) => [
                        this.html(`28302729`, "code", parentElement, {}, (parentElement) => [
                            this.text('flushNow()')
                        ]),
                        this.text(' khi chưa subscribe — bỏ pending để không render lại phá DOM vừa claim.')
                    ]),
                    this.html(`6d63f6b1`, "li", parentElement, {}, (parentElement) => [
                        this.html(`a7e49bb8`, "code", parentElement, {}, (parentElement) => [
                            this.text('render()')
                        ]),
                        this.text(' tạo cây object và claim DOM, tuyệt đối không '),
                        this.html(`72e4c874`, "code", parentElement, {}, (parentElement) => [
                            this.text('appendChild')
                        ]),
                        this.text('.')
                    ]),
                    this.html(`9f24c3a0`, "li", parentElement, {}, (parentElement) => [
                        this.text('Đổi '),
                        this.html(`35d4f044`, "code", parentElement, {}, (parentElement) => [
                            this.text('initMode')
                        ]),
                        this.text(' sang '),
                        this.html(`943a8210`, "code", parentElement, {}, (parentElement) => [
                            this.text('create')
                        ]),
                        this.text(' — từ đây mọi re-render là CSR bình thường.')
                    ]),
                    this.html(`cd08545a`, "li", parentElement, {}, (parentElement) => [
                        this.html(`72fa303a`, "code", parentElement, {}, (parentElement) => [
                            this.text('start()')
                        ]),
                        this.text(' gắn subscription và event, rồi kích hoạt vùng.')
                    ])
                    ]),
                this.html(`1e866e3d`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.text('Html claim bằng class '),
                    this.html(`cc220ce8`, "code", parentElement, {}, (parentElement) => [
                        this.text('{viewId}-{hash}')
                    ]),
                    this.text(', các element dạng marker claim bằng cặp comment. Không tìm thấy thì element tự tạo mới — hydration một phần vẫn chạy chứ không vỡ trang.')
                    ])
                ]),
            this.html(`ceb15976`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/docs/router" } } },
                (parentElement) => [
                this.html(`60f0ac7a`, "div", parentElement, {}, (parentElement) => [
                    this.html(`b7585c3f`, "span", parentElement, {}, (parentElement) => [
                        this.text('Tiếp theo')
                    ]),
                    this.html(`8767f8f3`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Router & dịch vụ client')
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
export function WebModulesDocsLifecycle(__data__ = {}, systemData = {}) {
    return new LifecycleView(__data__, systemData);
}
export default WebModulesDocsLifecycle;
