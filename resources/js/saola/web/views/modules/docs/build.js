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
            this.html(`ff96f7a7`, "header", parentElement,
                { classes: [{ type: 'static', value: "page-hero" }] },
                (parentElement) => [
                this.html(`15b892a7`, "div", parentElement, {}, (parentElement) => [
                    this.html(`ab74559e`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`943e8228`, "span", parentElement, {}, (parentElement) => [
                            this.text('08')
                        ]),
                        this.text(' VẬN HÀNH')
                        ]),
                    this.html(`9abe25a3`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Build, CLI và cấu hình.')
                    ])
                ]),
                this.html(`f750a15d`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`2a968179`, "p", parentElement, {}, (parentElement) => [
                        this.text('Hai chặng tách rời: compile view rồi bundle. Cộng thêm bốn file cấu hình, bộ kiểm thử ba tầng và hạ tầng phát triển dựng bằng một lệnh.')
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
                        this.text('BUILD')
                    ]),
                    this.text(' Hai chặng, một lệnh')
                    ]),
                this.html(`c048d2ef`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Compile view, rồi bundle.')
                ]),
                this.html(`1c642396`, "p", parentElement, {}, (parentElement) => [
                    this.text('Chặng một biến '),
                    this.html(`34be1ee8`, "code", parentElement, {}, (parentElement) => [
                        this.text('.sao')
                    ]),
                    this.text(' thành Blade và TypeScript. Chặng hai để Vite gói TypeScript đó thành bundle của từng context. Hai chặng tách rời nên sửa template không phải build lại toàn bộ.')
                ]),
                this.html(`753dcd15`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`9de53a5a`, "div", parentElement, {}, (parentElement) => [
                        this.html(`565197a0`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`f8ca00ca`, "code", parentElement, {}, (parentElement) => [
                                this.text('sao-compile web')
                            ])
                            ]),
                        this.html(`082faf6b`, "span", parentElement, {}, (parentElement) => [
                            this.text('Compile view của một context; '),
                            this.html(`03c304b7`, "code", parentElement, {}, (parentElement) => [
                                this.text('all')
                            ]),
                            this.text(' cho mọi context')
                        ]),
                        this.html(`8117b870`, "b", parentElement, {}, (parentElement) => [
                            this.text('stage 1')
                        ])
                    ]),
                    this.html(`c8e71cd3`, "div", parentElement, {}, (parentElement) => [
                        this.html(`43777599`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`ac254d87`, "code", parentElement, {}, (parentElement) => [
                                this.text('sao-compile all --watch')
                            ])
                            ]),
                        this.html(`9467ba30`, "span", parentElement, {}, (parentElement) => [
                            this.text('Watch mode lúc phát triển')
                        ]),
                        this.html(`47abd5ae`, "b", parentElement, {}, (parentElement) => [
                            this.text('stage 1')
                        ])
                    ]),
                    this.html(`e88f763e`, "div", parentElement, {}, (parentElement) => [
                        this.html(`a6515611`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`a810d411`, "code", parentElement, {}, (parentElement) => [
                                this.text('npm run build:web')
                            ])
                            ]),
                        this.html(`eaef3113`, "span", parentElement, {}, (parentElement) => [
                            this.text('Compile view rồi vite build ra '),
                            this.html(`be44cdda`, "code", parentElement, {}, (parentElement) => [
                                this.text('public/static/saola/web/js')
                            ])
                        ]),
                        this.html(`4a54cc8d`, "b", parentElement, {}, (parentElement) => [
                            this.text('stage 2')
                        ])
                    ]),
                    this.html(`094adcdf`, "div", parentElement, {}, (parentElement) => [
                        this.html(`1a29d412`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`8a43b879`, "code", parentElement, {}, (parentElement) => [
                                this.text('npm run dev:web')
                            ])
                            ]),
                        this.html(`59ce3274`, "span", parentElement, {}, (parentElement) => [
                            this.text('Chạy song song artisan serve, vite và watcher của client')
                        ]),
                        this.html(`3c958ed6`, "b", parentElement, {}, (parentElement) => [
                            this.text('dev')
                        ])
                    ]),
                    this.html(`107c1236`, "div", parentElement, {}, (parentElement) => [
                        this.html(`ce5a01f4`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`f325eaba`, "code", parentElement, {}, (parentElement) => [
                                this.text('npm run build:web:local')
                            ])
                            ]),
                        this.html(`e87f95f3`, "span", parentElement, {}, (parentElement) => [
                            this.text('Build luôn cả '),
                            this.html(`d2a5a403`, "code", parentElement, {}, (parentElement) => [
                                this.text('@saolabs/client')
                            ]),
                            this.text(' từ mã nguồn cạnh bên thay vì bản đã phát hành')
                        ]),
                        this.html(`5d6b940a`, "b", parentElement, {}, (parentElement) => [
                            this.text('monorepo')
                        ])
                    ])
                    ]),
                this.html(`259642dc`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-sub" }] },
                    (parentElement) => [
                    this.text('Đường đi của một file')
                    ]),
                this.html(`9193afc2`, "div", parentElement,
                    { classes: [{ type: 'static', value: "code-window" }] },
                    (parentElement) => [
                    this.html(`78b78df9`, "div", parentElement,
                        { classes: [{ type: 'static', value: "window-bar" }] },
                        (parentElement) => [
                        this.html(`25d09cc3`, "span", parentElement, {}, (parentElement) => [
                            this.text('PIPELINE')
                        ]),
                        this.html(`031f9d9f`, "b", parentElement, {}, (parentElement) => [
                            this.text('một view, hai đầu ra')
                        ])
                        ]),
                    this.html(`3e6275c9`, "pre", parentElement, {}, (parentElement) => [
                        this.html(`1b2b3f64`, "code", parentElement, {}, (parentElement) => [
                            this.html(`5d2b8152`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }] },
                                (parentElement) => [
                                this.text('resources/saola/web/views/modules/home/index.sao')
                                ]),
                            this.html(`a9ae1f3d`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                (parentElement) => [
                                this.text('├─ resources/views/web/modules/home/index.blade.php      (SSR)')
                                ]),
                            this.html(`4c484325`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                (parentElement) => [
                                this.text('└─ resources/js/saola/web/views/modules/home/index.ts    (runtime)')
                                ]),
                            this.html(`83c80266`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-gap" }] }),
                            this.html(`04ad3a51`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }] },
                                (parentElement) => [
                                this.text('resources/js/saola/web/registry.ts   ← bản đồ view path → factory')
                                ]),
                            this.html(`5d6d5e83`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }] },
                                (parentElement) => [
                                this.text('public/static/saola/web/js/app.js    ← bundle của context web')
                                ])
                        ])
                    ])
                    ]),
                this.html(`c3983eb0`, "p", parentElement,
                    { classes: [{ type: 'static', value: "ov-sub" }] },
                    (parentElement) => [
                    this.text('File cấu hình')
                    ]),
                this.html(`a79a05db`, "div", parentElement,
                    { classes: [{ type: 'static', value: "directive-table" }] },
                    (parentElement) => [
                    this.html(`2300d833`, "div", parentElement, {}, (parentElement) => [
                        this.html(`291828af`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`59ffb0bf`, "code", parentElement, {}, (parentElement) => [
                                this.text('sao.config.json')
                            ])
                            ]),
                        this.html(`e8225c75`, "span", parentElement, {}, (parentElement) => [
                            this.text('Đường dẫn và khai báo context cho CLI compiler')
                        ]),
                        this.html(`3dba4e95`, "b", parentElement, {}, (parentElement) => [
                            this.text('compiler')
                        ])
                    ]),
                    this.html(`f3b1517b`, "div", parentElement, {}, (parentElement) => [
                        this.html(`0fe67a4d`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`af2847b6`, "code", parentElement, {}, (parentElement) => [
                                this.text('config/sao.php')
                            ])
                            ]),
                        this.html(`4f24e169`, "span", parentElement, {}, (parentElement) => [
                            this.text('Cấu hình phía PHP: context, option, feature flag')
                        ]),
                        this.html(`c9b70ed2`, "b", parentElement, {}, (parentElement) => [
                            this.text('php')
                        ])
                    ]),
                    this.html(`79c27fa3`, "div", parentElement, {}, (parentElement) => [
                        this.html(`17dd6dec`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`96ce252f`, "code", parentElement, {}, (parentElement) => [
                                this.text('config/spa.php')
                            ])
                            ]),
                        this.html(`dbd165d1`, "span", parentElement, {}, (parentElement) => [
                            this.text('Cấu hình runtime SPA: mode, debug, router')
                        ]),
                        this.html(`3012748d`, "b", parentElement, {}, (parentElement) => [
                            this.text('runtime')
                        ])
                    ]),
                    this.html(`23985645`, "div", parentElement, {}, (parentElement) => [
                        this.html(`d170d57c`, "div", parentElement,
                            { classes: [{ type: 'static', value: "dt-key" }] },
                            (parentElement) => [
                            this.html(`299feb41`, "code", parentElement, {}, (parentElement) => [
                                this.text('vite.config.js')
                            ])
                            ]),
                        this.html(`9a81b2bf`, "span", parentElement, {}, (parentElement) => [
                            this.text('Entry, alias '),
                            this.html(`19461082`, "code", parentElement, {}, (parentElement) => [
                                this.text('@saola')
                            ]),
                            this.html(`cd30046d`, "code", parentElement, {}, (parentElement) => [
                                this.text('@compiled')
                            ]),
                            this.html(`a1a8bd03`, "code", parentElement, {}, (parentElement) => [
                                this.text('@views')
                            ]),
                            this.text(', thư mục output')
                        ]),
                        this.html(`6ca44e62`, "b", parentElement, {}, (parentElement) => [
                            this.text('bundler')
                        ])
                    ])
                    ]),
                this.html(`77f2db7f`, "p", parentElement,
                    { classes: [{ type: 'static', value: "kicker" }] },
                    (parentElement) => [
                    this.html(`2428831e`, "span", parentElement, {}, (parentElement) => [
                        this.text('QUALITY')
                    ]),
                    this.text(' Kiểm thử và hạ tầng')
                    ]),
                this.html(`52002e9f`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Contract được kiểm bằng chính contract.')
                ]),
                this.html(`0afc2ab6`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-grid" }] },
                    (parentElement) => [
                    this.html(`0dc89c8e`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`85da4ec6`, "span", parentElement, {}, (parentElement) => [
                            this.text('Client')
                        ]),
                        this.html(`640fc1b7`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Vitest trên jsdom')
                        ]),
                        this.html(`2fce206e`, "p", parentElement, {}, (parentElement) => [
                            this.text('Test của runtime chạy trên DOM giả lập: reconciliation của foreach, claim marker khi hydrate, dọn tài nguyên khi destroy.')
                        ])
                        ]),
                    this.html(`b77d83ba`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`a649f966`, "span", parentElement, {}, (parentElement) => [
                            this.text('Contract')
                        ]),
                        this.html(`ca528dac`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Compile thật rồi assert DOM')
                        ]),
                        this.html(`845d4336`, "p", parentElement, {}, (parentElement) => [
                            this.text('Fixture '),
                            this.html(`175a8924`, "code", parentElement, {}, (parentElement) => [
                                this.text('.sao')
                            ]),
                            this.text(' được compile bằng compiler thật, chạy trong jsdom rồi kiểm DOM đầu ra. Đây mới là nguồn chân lý thi hành của spec, không phải tài liệu.')
                        ])
                        ]),
                    this.html(`c88597b0`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`79b781e6`, "span", parentElement, {}, (parentElement) => [
                            this.text('Server')
                        ]),
                        this.html(`47789a31`, "h3", parentElement, {}, (parentElement) => [
                            this.text('PHPUnit theo tầng')
                        ]),
                        this.html(`101346b9`, "p", parentElement, {}, (parentElement) => [
                            this.text('Bộ Unit và Feature tách riêng. Feature test gọi thẳng endpoint để kiểm hình dạng response và mã trạng thái.')
                        ])
                        ]),
                    this.html(`6bf531c9`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement) => [
                        this.html(`8f7ac767`, "span", parentElement, {}, (parentElement) => [
                            this.text('Hạ tầng')
                        ]),
                        this.html(`02a838c4`, "h3", parentElement, {}, (parentElement) => [
                            this.text('Docker Compose')
                        ]),
                        this.html(`4f2aacb1`, "p", parentElement, {}, (parentElement) => [
                            this.text('PostgreSQL 15 và Redis 7 kèm hai giao diện quản trị, dựng bằng một lệnh cho môi trường phát triển.')
                        ])
                        ])
                    ]),
                this.html(`d0822472`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement) => [
                    this.text('Fixture của test giữ nguyên '),
                    this.html(`e9d95474`, "em", parentElement, {}, (parentElement) => [
                        this.text('output thật của compiler')
                    ]),
                    this.text('. Viết tay kỳ vọng sẽ làm test mù với chính khâu sinh code mà nó phải bảo vệ.')
                    ])
                ]),
            this.html(`ceb15976`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/docs/status" } } },
                (parentElement) => [
                this.html(`60f0ac7a`, "div", parentElement, {}, (parentElement) => [
                    this.html(`b7585c3f`, "span", parentElement, {}, (parentElement) => [
                        this.text('Tiếp theo')
                    ]),
                    this.html(`8767f8f3`, "strong", parentElement, {}, (parentElement) => [
                        this.text('Giới hạn đã biết')
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
export function WebModulesDocsBuild(__data__ = {}, systemData = {}) {
    return new BuildView(__data__, systemData);
}
export default WebModulesDocsBuild;
