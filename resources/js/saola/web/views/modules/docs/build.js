import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.docs.build';
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



class BuildViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class BuildView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, BuildViewController);
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
                            this.text('08')
                        ]),
                        this.text(' VẬN HÀNH')
                        ]),
                    this.html(`Bdoc112`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Build, CLI và cấu hình.')
                    ])
                ]),
                this.html(`Bdoc12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`Bdoc121`, "p", parentElement, {}, (parentElement) => [
                        this.text('Hai chặng tách rời: compile view rồi bundle. Cộng thêm bốn file cấu hình, bộ kiểm thử ba tầng và hạ tầng phát triển dựng bằng một lệnh.')
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
                        this.text('BUILD')
                    ]),
                    this.text(' Hai chặng, một lệnh')
                    ]),
                this.html(`Bdoc22`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Compile view, rồi bundle.')
                ]),
                this.html(`Bdoc23`, "p", parentElement, {}, (parentElement) => [
                    this.text('Chặng một biến '),
                    this.html(`Bdoc231`, "code", parentElement, {}, (parentElement) => [
                        this.text('.sao')
                    ]),
                    this.text(' thành Blade và TypeScript. Chặng hai để Vite gói TypeScript đó thành bundle của từng context. Hai chặng tách rời nên sửa template không phải build lại toàn bộ.')
                ]),
                this.html(`Bdoc24`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`Bdoc241`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2411`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24111`, "code", parentElement, {}, (parentElement) => [
                                this.text('sao-compile web')
                            ])
                            ]),
                        this.html(`Bdoc2412`, "span", parentElement, {}, (parentElement) => [
                            this.text('Compile view của một context; '),
                            this.html(`Bdoc24121`, "code", parentElement, {}, (parentElement) => [
                                this.text('all')
                            ]),
                            this.text(' cho mọi context')
                        ]),
                        this.html(`Bdoc2413`, "b", parentElement, {}, (parentElement) => [
                            this.text('stage 1')
                        ])
                    ]),
                    this.html(`Bdoc242`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2421`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24211`, "code", parentElement, {}, (parentElement) => [
                                this.text('sao-compile all --watch')
                            ])
                            ]),
                        this.html(`Bdoc2422`, "span", parentElement, {}, (parentElement) => [
                            this.text('Watch mode lúc phát triển')
                        ]),
                        this.html(`Bdoc2423`, "b", parentElement, {}, (parentElement) => [
                            this.text('stage 1')
                        ])
                    ]),
                    this.html(`Bdoc243`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2431`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24311`, "code", parentElement, {}, (parentElement) => [
                                this.text('npm run build:web')
                            ])
                            ]),
                        this.html(`Bdoc2432`, "span", parentElement, {}, (parentElement) => [
                            this.text('Compile view rồi vite build ra '),
                            this.html(`Bdoc24321`, "code", parentElement, {}, (parentElement) => [
                                this.text('public/static/saola/web/js')
                            ])
                        ]),
                        this.html(`Bdoc2433`, "b", parentElement, {}, (parentElement) => [
                            this.text('stage 2')
                        ])
                    ]),
                    this.html(`Bdoc244`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2441`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24411`, "code", parentElement, {}, (parentElement) => [
                                this.text('npm run dev:web')
                            ])
                            ]),
                        this.html(`Bdoc2442`, "span", parentElement, {}, (parentElement) => [
                            this.text('Chạy song song artisan serve, vite và watcher của client')
                        ]),
                        this.html(`Bdoc2443`, "b", parentElement, {}, (parentElement) => [
                            this.text('dev')
                        ])
                    ]),
                    this.html(`Bdoc245`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2451`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc24511`, "code", parentElement, {}, (parentElement) => [
                                this.text('npm run build:web:local')
                            ])
                            ]),
                        this.html(`Bdoc2452`, "span", parentElement, {}, (parentElement) => [
                            this.text('Build luôn cả '),
                            this.html(`Bdoc24521`, "code", parentElement, {}, (parentElement) => [
                                this.text('@saolabs/client')
                            ]),
                            this.text(' từ mã nguồn cạnh bên thay vì bản đã phát hành')
                        ]),
                        this.html(`Bdoc2453`, "b", parentElement, {}, (parentElement) => [
                            this.text('monorepo')
                        ])
                    ])
                    ]),
                this.html(`Bdoc25`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-sub" }] },
                    (parentElement) => [
                    this.text('Đường đi của một file')
                    ]),
                this.html(`Bdoc26`, "div", parentElement,
                    { classes: [{ type: 'static', value: "code-window" }] },
                    (parentElement) => [
                    this.html(`Bdoc261`, "div", parentElement,
                        { classes: [{ type: 'static', value: "window-bar" }] },
                        (parentElement) => [
                        this.html(`Bdoc2611`, "span", parentElement, {}, (parentElement) => [
                            this.text('PIPELINE')
                        ]),
                        this.html(`Bdoc2612`, "b", parentElement, {}, (parentElement) => [
                            this.text('một view, hai đầu ra')
                        ])
                        ]),
                    this.html(`Bdoc262`, "pre", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2621`, "code", parentElement, {}, (parentElement) => [
                            this.html(`Bdoc26211`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }] },
                                (parentElement) => [
                                this.text('resources/saola/web/views/modules/home/index.sao')
                                ]),
                            this.html(`Bdoc26212`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                (parentElement) => [
                                this.text('├─ resources/views/web/modules/home/index.blade.php      (SSR)')
                                ]),
                            this.html(`Bdoc26213`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                (parentElement) => [
                                this.text('└─ resources/js/saola/web/views/modules/home/index.ts    (runtime)')
                                ]),
                            this.html(`Bdoc26214`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-gap" }] }),
                            this.html(`Bdoc26215`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }] },
                                (parentElement) => [
                                this.text('resources/js/saola/web/registry.ts   ← bản đồ view path → factory')
                                ]),
                            this.html(`Bdoc26216`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }] },
                                (parentElement) => [
                                this.text('public/static/saola/web/js/app.js    ← bundle của context web')
                                ])
                        ])
                    ])
                    ]),
                this.html(`Bdoc27`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-sub" }] },
                    (parentElement) => [
                    this.text('File cấu hình')
                    ]),
                this.html(`Bdoc28`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`Bdoc281`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2811`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc28111`, "code", parentElement, {}, (parentElement) => [
                                this.text('sao.config.json')
                            ])
                            ]),
                        this.html(`Bdoc2812`, "span", parentElement, {}, (parentElement) => [
                            this.text('Đường dẫn và khai báo context cho CLI compiler')
                        ]),
                        this.html(`Bdoc2813`, "b", parentElement, {}, (parentElement) => [
                            this.text('compiler')
                        ])
                    ]),
                    this.html(`Bdoc282`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2821`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc28211`, "code", parentElement, {}, (parentElement) => [
                                this.text('config/sao.php')
                            ])
                            ]),
                        this.html(`Bdoc2822`, "span", parentElement, {}, (parentElement) => [
                            this.text('Cấu hình phía PHP: context, option, feature flag')
                        ]),
                        this.html(`Bdoc2823`, "b", parentElement, {}, (parentElement) => [
                            this.text('php')
                        ])
                    ]),
                    this.html(`Bdoc283`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2831`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc28311`, "code", parentElement, {}, (parentElement) => [
                                this.text('config/spa.php')
                            ])
                            ]),
                        this.html(`Bdoc2832`, "span", parentElement, {}, (parentElement) => [
                            this.text('Cấu hình runtime SPA: mode, debug, router')
                        ]),
                        this.html(`Bdoc2833`, "b", parentElement, {}, (parentElement) => [
                            this.text('runtime')
                        ])
                    ]),
                    this.html(`Bdoc284`, "div", parentElement, {}, (parentElement) => [
                        this.html(`Bdoc2841`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`Bdoc28411`, "code", parentElement, {}, (parentElement) => [
                                this.text('vite.config.js')
                            ])
                            ]),
                        this.html(`Bdoc2842`, "span", parentElement, {}, (parentElement) => [
                            this.text('Entry, alias '),
                            this.html(`Bdoc28421`, "code", parentElement, {}, (parentElement) => [
                                this.text('@saola')
                            ]),
                            this.html(`Bdoc28422`, "code", parentElement, {}, (parentElement) => [
                                this.text('@compiled')
                            ]),
                            this.html(`Bdoc28423`, "code", parentElement, {}, (parentElement) => [
                                this.text('@views')
                            ]),
                            this.text(', thư mục output')
                        ]),
                        this.html(`Bdoc2843`, "b", parentElement, {}, (parentElement) => [
                            this.text('bundler')
                        ])
                    ])
                    ]),
                this.html(`Bdoc29`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`Bdoc291`, "span", parentElement, {}, (parentElement) => [
                        this.text('QUALITY')
                    ]),
                    this.text(' Kiểm thử và hạ tầng')
                    ]),
                this.html(`Bdoc2e10_`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Contract được kiểm bằng chính contract.')
                ]),
                this.html(`Bdoc2e11_`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-grid" }] },
                    (parentElement) => [
                    this.html(`Bdoc2e11_1`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`Bdoc2e11_11`, "span", parentElement, {}, (parentElement) => [
                            this.text('Client')
                        ]),
                        this.html(`Bdoc2e11_12`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Vitest trên jsdom')
                        ]),
                        this.html(`Bdoc2e11_13`, "p", parentElement, {}, (parentElement) => [
                            this.text('Test của runtime chạy trên DOM giả lập: reconciliation của foreach, claim marker khi hydrate, dọn tài nguyên khi destroy.')
                        ])
                        ]),
                    this.html(`Bdoc2e11_2`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`Bdoc2e11_21`, "span", parentElement, {}, (parentElement) => [
                            this.text('Contract')
                        ]),
                        this.html(`Bdoc2e11_22`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Compile thật rồi assert DOM')
                        ]),
                        this.html(`Bdoc2e11_23`, "p", parentElement, {}, (parentElement) => [
                            this.text('Fixture '),
                            this.html(`Bdoc2e11_231`, "code", parentElement, {}, (parentElement) => [
                                this.text('.sao')
                            ]),
                            this.text(' được compile bằng compiler thật, chạy trong jsdom rồi kiểm DOM đầu ra. Đây mới là nguồn chân lý thi hành của spec, không phải tài liệu.')
                        ])
                        ]),
                    this.html(`Bdoc2e11_3`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`Bdoc2e11_31`, "span", parentElement, {}, (parentElement) => [
                            this.text('Server')
                        ]),
                        this.html(`Bdoc2e11_32`, "h3", parentElement, {}, (parentElement) => [
                            this.text('PHPUnit theo tầng')
                        ]),
                        this.html(`Bdoc2e11_33`, "p", parentElement, {}, (parentElement) => [
                            this.text('Bộ Unit và Feature tách riêng. Feature test gọi thẳng endpoint để kiểm hình dạng response và mã trạng thái.')
                        ])
                        ]),
                    this.html(`Bdoc2e11_4`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`Bdoc2e11_41`, "span", parentElement, {}, (parentElement) => [
                            this.text('Hạ tầng')
                        ]),
                        this.html(`Bdoc2e11_42`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Docker Compose')
                        ]),
                        this.html(`Bdoc2e11_43`, "p", parentElement, {}, (parentElement) => [
                            this.text('PostgreSQL 15 và Redis 7 kèm hai giao diện quản trị, dựng bằng một lệnh cho môi trường phát triển.')
                        ])
                        ])
                    ]),
                this.html(`Bdoc2e12_`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.text('Fixture của test giữ nguyên '),
                    this.html(`Bdoc2e12_1`, "em", parentElement, {}, (parentElement) => [
                        this.text('output thật của compiler')
                    ]),
                    this.text('. Viết tay kỳ vọng sẽ làm test mù với chính khâu sinh code mà nó phải bảo vệ.')
                    ])
                ]),
            this.html(`Bdoc3`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/docs/status" } } },
                (parentElement) => [
                this.html(`Bdoc31`, "div", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc311`, "span", parentElement, {}, (parentElement) => [
                        this.text('Tiếp theo')
                    ]),
                    this.html(`Bdoc312`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Giới hạn đã biết')
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
export function WebModulesDocsBuild(__data__ = {}, systemData = {}) {
    return new BuildView(__data__, systemData);
}
export default WebModulesDocsBuild;