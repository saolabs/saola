import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.home.index';
const __VIEW_NAMESPACE__ = 'web.modules.home.';
const __VIEW_TYPE__ = 'view';
const __VIEW_CONFIG__ = {
    hasSuperView: true,
    viewType: 'view',
    sections: {
        "content":{
            "type":"long",
            "preloader":false,
            "useVars":true,
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
    renderLongSections: ["content"],
    renderSections: [],
    prerenderSections: []
};



class IndexViewController extends ViewController {
    constructor(view: View) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this as any).setStaticConfig === 'function') {
            (this as any).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this as any).config = __VIEW_CONFIG__;
        }
    }
}

class IndexView extends View {
    constructor(__data__: any = {}, systemData: any = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, IndexViewController);
        const App: Application = app("App") as Application;
        const __STATE__ = this.__ctrl__.states;
        const {__base__, __layout__, __page__, __component__, __template__, __context__, __partial__, __system__, __env = {}, __helper = {}} = systemData;
        const __VIEW_ID__ = __data__.__SSR_VIEW_ID__ || App.View.generateViewId();

        const useState = (value: any) => {
            return __STATE__.__useState(value);
        };
        const updateRealState = (state: any) => {
            __STATE__.__.updateRealState(state);
        };

        const lockUpdateRealState = () => {
            __STATE__.__.lockUpdateRealState();
        };
        const updateStateByKey = (key: string, state: any) => {
            __STATE__.__.updateStateByKey(key, state);
        };


        const __UPDATE_DATA_TRAIT__: any = {};
        const set$selectedSignal = __STATE__.__.register('selectedSignal');
        let selectedSignal: any = null;
        const setSelectedSignal = (state: any) => {
            selectedSignal = state;
            set$selectedSignal(state);
        };
        __STATE__.__.setters.setSelectedSignal = setSelectedSignal;
        __STATE__.__.setters.selectedSignal = setSelectedSignal;
        const update$selectedSignal = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('selectedSignal', value);
                selectedSignal = value;
            }
        };
        const set$email = __STATE__.__.register('email');
        let email: any = null;
        const setEmail = (state: any) => {
            email = state;
            set$email(state);
        };
        __STATE__.__.setters.setEmail = setEmail;
        __STATE__.__.setters.email = setEmail;
        const update$email = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('email', value);
                email = value;
            }
        };
        const set$joined = __STATE__.__.register('joined');
        let joined: any = null;
        const setJoined = (state: any) => {
            joined = state;
            set$joined(state);
        };
        __STATE__.__.setters.setJoined = setJoined;
        __STATE__.__.setters.joined = setJoined;
        const update$joined = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('joined', value);
                joined = value;
            }
        };
        const __VARIABLE_LIST__: any = [];


        this.__ctrl__.setUserDefinedConfig({
            name: 'HomePage',
                joinWaitlist(event) {
                    event.preventDefault();
                    if (email.trim()) setJoined(true);
                }
        });

        this.__ctrl__.setup({
            superView: `${__layout__+"public"}`,
            subscribe: true,
            fetch: null,
            data: __data__,
            viewId: __VIEW_ID__,
            path: __VIEW_PATH__,
            scripts: [],
            styles: [{"type":"code","scoped":true,"content":".hero-copy h1 em { color: var(--cobalt); font-style: normal; }\n    .route-node.active { isolation: isolate; }"}],
            resources: [],
            commitConstructorData: function(this: any) {
                // Then update states from data
                update$selectedSignal('hydration');
                update$email('');
                update$joined(false);
                // Finally lock state updates
                lockUpdateRealState();
            },
            updateVariableData: function(this: any, data: any) {
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
                lockUpdateRealState();
            },
            updateVariableItemData: function(this: any, key: string, value: any) {
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
            this.block('block-content', 'content', (parentElement: any) => [
            this.html(`b4052a35`, "section", parentElement,
                { classes: [{ type: 'static', value: "hero-grid" }, { type: 'static', value: "hero-studio" }], attrs: { "id": { type: 'static', value: "hero-section" } } },
                (parentElement: any) => [
                this.html(`90a6e493`, "div", parentElement,
                    { classes: [{ type: 'static', value: "hero-copy" }] },
                    (parentElement: any) => [
                    this.html(`f515bf66`, "p", parentElement,
                        { classes: [{ type: 'static', value: "hero-eyebrow" }] },
                        (parentElement: any) => [
                        this.text('Nền tảng SPA thế hệ mới cho Laravel')
                        ]),
                    this.html(`9b0938cb`, "h1", parentElement, {}, (parentElement: any) => [
                        this.text('Viết một lần.'),
                        this.html(`f7127348`, "br", parentElement, {}),
                        this.html(`d4f4199d`, "em", parentElement, {}, (parentElement: any) => [
                            this.text('Vận hành mọi nơi.')
                        ])
                    ]),
                    this.html(`7718bb8d`, "p", parentElement,
                        { classes: [{ type: 'static', value: "hero-lead" }] },
                        (parentElement: any) => [
                        this.text('Saola giữ Laravel và Blade cho phản hồi đầu tiên, sau đó hydrate chính xác view đó thành một SPA nhanh, reactive và an toàn.')
                        ]),
                    this.html(`ed82504f`, "div", parentElement,
                        { classes: [{ type: 'static', value: "hero-actions" }] },
                        (parentElement: any) => [
                        this.html(`63bde3ef`, "a", parentElement,
                            { classes: [{ type: 'static', value: "button" }, { type: 'static', value: "button-primary" }], attrs: { "href": { type: 'static', value: "/todo-list" } } },
                            (parentElement: any) => [
                            this.text('Trải nghiệm demo '),
                            this.html(`fee9a4ad`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('→')
                            ])
                            ]),
                        this.html(`b589ca24`, "a", parentElement,
                            { classes: [{ type: 'static', value: "button" }, { type: 'static', value: "button-secondary" }], attrs: { "href": { type: 'static', value: "/about" } } },
                            (parentElement: any) => [
                            this.text('Khám phá kiến trúc')
                            ])
                        ]),
                    this.html(`1959f375`, "div", parentElement,
                        { classes: [{ type: 'static', value: "hero-proof-row" }], attrs: { "aria-label": { type: 'static', value: "Saola capabilities" } } },
                        (parentElement: any) => [
                        this.html(`840df5fc`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('✓ SSR bằng Blade')
                        ]),
                        this.html(`72aed0dd`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('✓ Hydration không duplicate')
                        ]),
                        this.html(`4a9f4e30`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('✓ Reactive theo state')
                        ])
                        ])
                    ]),
                this.html(`5f82dcd4`, "div", parentElement,
                    { classes: [{ type: 'static', value: "route-card" }], attrs: { "aria-label": { type: 'static', value: "Saola render route" } } },
                    (parentElement: any) => [
                    this.html(`01b28266`, "div", parentElement,
                        { classes: [{ type: 'static', value: "route-card-head" }] },
                        (parentElement: any) => [
                        this.html(`17fdbbc3`, "div", parentElement, {}, (parentElement: any) => [
                            this.html(`8f494a03`, "span", parentElement, { classes: [{ type: 'static', value: "runtime-dot" }] }),
                            this.html(`49d1a08b`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Runtime overview')
                            ])
                        ]),
                        this.html(`483a565a`, "span", parentElement,
                            { classes: [{ type: 'static', value: "live-badge" }] },
                            (parentElement: any) => [
                            this.text('Live · /home')
                            ])
                        ]),
                    this.html(`81148f49`, "div", parentElement,
                        { classes: [{ type: 'static', value: "runtime-metrics" }] },
                        (parentElement: any) => [
                        this.html(`f8a7486f`, "div", parentElement, {}, (parentElement: any) => [
                            this.html(`3f6f4d1a`, "small", parentElement, {}, (parentElement: any) => [
                                this.text('Render source')
                            ]),
                            this.html(`26663c5d`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('1 view')
                            ]),
                            this.html(`f298ae77`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('.sao')
                            ])
                        ]),
                        this.html(`3ecbdb6f`, "div", parentElement, {}, (parentElement: any) => [
                            this.html(`790075db`, "small", parentElement, {}, (parentElement: any) => [
                                this.text('Current phase')
                            ]),
                            this.html(`60b7e503`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Hydrate')
                            ]),
                            this.html(`25f9faa5`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('DOM reuse')
                            ])
                        ]),
                        this.html(`e3b84133`, "div", parentElement, {}, (parentElement: any) => [
                            this.html(`d3ffa7cd`, "small", parentElement, {}, (parentElement: any) => [
                                this.text('Listeners')
                            ]),
                            this.html(`49c0a9c0`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('1×')
                            ]),
                            this.html(`02b0031a`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('deduplicated')
                            ])
                        ])
                        ]),
                    this.html(`328c95ab`, "div", parentElement,
                        { classes: [{ type: 'static', value: "route-line" }], attrs: { "role": { type: 'static', value: "group" }, "aria-label": { type: 'static', value: "Chọn giai đoạn render" } } },
                        (parentElement: any) => [
                        this.html(`5c74ea59`, "button", parentElement,
                            { classes: [{ type: 'static', value: "route-node" }, { type: 'binding', value: "active", factory: () => selectedSignal === 'blade', stateKeys: ["selectedSignal"] }], attrs: { "aria-label": { type: 'static', value: "Xem giai đoạn Blade" } }, events: { click: [(event: any) => setSelectedSignal('blade')] } },
                            (parentElement: any) => [
                            this.html(`1ecedf4d`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('01')
                            ]),
                            this.html(`20c5c596`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Blade')
                            ]),
                            this.html(`f3d3caed`, "small", parentElement, {}, (parentElement: any) => [
                                this.text('server response')
                            ])
                            ]),
                        this.html(`819175ee`, "button", parentElement,
                            { classes: [{ type: 'static', value: "route-node" }, { type: 'binding', value: "active", factory: () => selectedSignal === 'hydration', stateKeys: ["selectedSignal"] }], attrs: { "aria-label": { type: 'static', value: "Xem giai đoạn hydration" } }, events: { click: [(event: any) => setSelectedSignal('hydration')] } },
                            (parentElement: any) => [
                            this.html(`28771293`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('02')
                            ]),
                            this.html(`1755efaf`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Hydrate')
                            ]),
                            this.html(`2335456c`, "small", parentElement, {}, (parentElement: any) => [
                                this.text('bind existing DOM')
                            ])
                            ]),
                        this.html(`f0ce158d`, "button", parentElement,
                            { classes: [{ type: 'static', value: "route-node" }, { type: 'binding', value: "active", factory: () => selectedSignal === 'spa', stateKeys: ["selectedSignal"] }], attrs: { "aria-label": { type: 'static', value: "Xem giai đoạn SPA" } }, events: { click: [(event: any) => setSelectedSignal('spa')] } },
                            (parentElement: any) => [
                            this.html(`afd5a05b`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('03')
                            ]),
                            this.html(`1e6f4d27`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('SPA')
                            ]),
                            this.html(`d7a1c7ef`, "small", parentElement, {}, (parentElement: any) => [
                                this.text('client navigation')
                            ])
                            ])
                        ]),
                    this.html(`ac51d251`, "div", parentElement,
                        { classes: [{ type: 'static', value: "signal-readout" }] },
                        (parentElement: any) => [
                        this.reactive(`c4fa93f3`, "if", parentReactive, parentElement, ["selectedSignal"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (selectedSignal === 'blade') {
                                reactiveContents.push(
                                this.html(`a6a5695c`, "p", parentElement, {}, (parentElement: any) => [
                                    this.html(`f0caada4`, "strong", parentElement, {}, (parentElement: any) => [
                                        this.text('Server-first')
                                    ]),
                                    this.html(`be381f48`, "span", parentElement, {}, (parentElement: any) => [
                                        this.text('HTML có nội dung ngay cả trước khi JavaScript khởi chạy.')
                                    ])
                                ])
                                );
                            }
                            else if (selectedSignal === 'spa') {
                                reactiveContents.push(
                                this.html(`b7a84ebe`, "p", parentElement, {}, (parentElement: any) => [
                                    this.html(`5cde38e9`, "strong", parentElement, {}, (parentElement: any) => [
                                        this.text('Navigation-ready')
                                    ]),
                                    this.html(`8f12d23b`, "span", parentElement, {}, (parentElement: any) => [
                                        this.text('Chỉ nhánh view thay đổi được cập nhật, layout dùng lại.')
                                    ])
                                ])
                                );
                            }
                            else {
                                reactiveContents.push(
                                this.html(`67b613a4`, "p", parentElement, {}, (parentElement: any) => [
                                    this.html(`3ffa7209`, "strong", parentElement, {}, (parentElement: any) => [
                                        this.text('Hydration-safe')
                                    ]),
                                    this.html(`dd25ae50`, "span", parentElement, {}, (parentElement: any) => [
                                        this.text('State và event gắn vào DOM có sẵn, không nhân đôi listener.')
                                    ])
                                ])
                                );
                            }
                            return reactiveContents;
                        })
                        ])
                    ])
                ]),
            this.html(`8aa0772c`, "section", parentElement,
                { classes: [{ type: 'static', value: "proof-strip" }] },
                (parentElement: any) => [
                this.html(`35bf6e9d`, "p", parentElement, {}, (parentElement: any) => [
                    this.text('NỀN TẢNG CHO ỨNG DỤNG THỰC TẾ')
                ]),
                this.html(`7f8af112`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`14b47dbd`, "strong", parentElement, {}, (parentElement: any) => [
                        this.text('01')
                    ]),
                    this.html(`c67cd95a`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('Laravel routes')
                    ])
                ]),
                this.html(`9b976db3`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`9aa2ffa8`, "strong", parentElement, {}, (parentElement: any) => [
                        this.text('02')
                    ]),
                    this.html(`b5411efa`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('Blade fallback')
                    ])
                ]),
                this.html(`cfc01898`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`ccc1deb9`, "strong", parentElement, {}, (parentElement: any) => [
                        this.text('03')
                    ]),
                    this.html(`1edf95b4`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('Scoped assets')
                    ])
                ]),
                this.html(`f5acbbe8`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`e0f722e3`, "strong", parentElement, {}, (parentElement: any) => [
                        this.text('04')
                    ]),
                    this.html(`261e25b4`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('Reactive state')
                    ])
                ])
                ]),
            this.html(`6c26f9b7`, "section", parentElement,
                { classes: [{ type: 'static', value: "feature-section" }], attrs: { "id": { type: 'static', value: "workflow" } } },
                (parentElement: any) => [
                this.html(`ce6a96bf`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-heading" }] },
                    (parentElement: any) => [
                    this.html(`5a71cd5f`, "p", parentElement,
                        { classes: [{ type: 'static', value: "eyebrow" }] },
                        (parentElement: any) => [
                        this.html(`f1acc65a`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('Workflow')
                        ]),
                        this.text(' Từ route đến tương tác')
                        ]),
                    this.html(`98293aba`, "h2", parentElement, {}, (parentElement: any) => [
                        this.text('Một quy trình.'),
                        this.html(`c006637c`, "br", parentElement, {}),
                        this.text('Không có bước thừa.')
                    ])
                    ]),
                this.html(`d44023e9`, "div", parentElement,
                    { classes: [{ type: 'static', value: "feature-list" }] },
                    (parentElement: any) => [
                    this.html(`e3e123df`, "article", parentElement, {}, (parentElement: any) => [
                        this.html(`5cadfa06`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('01')
                        ]),
                        this.html(`6efb1915`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Render một nguồn')
                        ]),
                        this.html(`4a13b743`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Cùng một file \\`.sao\\` sinh Blade phía server và view contract phía client.')
                        ])
                    ]),
                    this.html(`04b24ab0`, "article", parentElement, {}, (parentElement: any) => [
                        this.html(`2dd4b699`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('02')
                        ]),
                        this.html(`8d51d8aa`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Hydrate DOM có sẵn')
                        ]),
                        this.html(`53b76b5c`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Element được đối chiếu theo ID ổn định; attributes và events được reconcile thay vì gắn chồng.')
                        ])
                    ]),
                    this.html(`ddf2d3a9`, "article", parentElement, {}, (parentElement: any) => [
                        this.html(`8d5d9746`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('03')
                        ]),
                        this.html(`ad421324`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Reactive đúng phạm vi')
                        ]),
                        this.html(`71463dd8`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('State chỉ cập nhật nhánh phụ thuộc, đồng thời cleanup resource khi view bị hủy.')
                        ])
                    ])
                    ])
                ]),
            this.html(`4e212027`, "section", parentElement,
                { classes: [{ type: 'static', value: "newsletter-panel" }] },
                (parentElement: any) => [
                this.html(`1628defa`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`d621a64b`, "p", parentElement,
                        { classes: [{ type: 'static', value: "eyebrow" }] },
                        (parentElement: any) => [
                        this.html(`5f6b80a9`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('Release notes')
                        ]),
                        this.text(' Theo dõi Saola')
                        ]),
                    this.html(`6560bb1b`, "h2", parentElement, {}, (parentElement: any) => [
                        this.text('Nhận cập nhật.'),
                        this.html(`c03b5dbb`, "br", parentElement, {}),
                        this.text('Không nhận spam.')
                    ])
                ]),
                this.html(`b8bd3cde`, "form", parentElement,
                    { classes: [{ type: 'static', value: "newsletter-form" }], events: { submit: [{"handler":"joinWaitlist","params":[() => event]}] } },
                    (parentElement: any) => [
                    this.reactive(`44cceece`, "if", parentReactive, parentElement, ["joined"], (parentReactive: any, parentElement: any) => {
                        const reactiveContents = [];
                        if (joined) {
                            reactiveContents.push(
                            this.html(`50aeb2d9`, "div", parentElement,
                                { classes: [{ type: 'static', value: "success-note" }] },
                                (parentElement: any) => [
                                this.html(`a7eda2b2`, "span", parentElement, {}, (parentElement: any) => [
                                    this.text('✓')
                                ]),
                                this.html(`28dbecef`, "p", parentElement, {}, (parentElement: any) => [
                                    this.html(`61788545`, "strong", parentElement, {}, (parentElement: any) => [
                                        this.text('Đã ghi nhận email.')
                                    ]),
                                    this.html(`bd39f455`, "br", parentElement, {}),
                                    this.text('Saola chỉ gửi khi có bản phát hành đáng chú ý.')
                                ])
                                ])
                            );
                        }
                        else {
                            reactiveContents.push(
                            this.html(`fb2898e9`, "label", parentElement,
                                { attrs: { "for": { type: 'static', value: "home-email" } } },
                                (parentElement: any) => [
                                this.text('Email công việc')
                                ]),
                            this.html(`d05b19b3`, "div", parentElement, {}, (parentElement: any) => [
                                this.html(`8c996698`, "input", parentElement, { attrs: { "id": { type: 'static', value: "home-email" }, "type": { type: 'static', value: "email" }, "placeholder": { type: 'static', value: "you@company.com" }, "bind": { type: 'static', value: true }, "email": { type: 'static', value: true }, "required": { type: 'static', value: true } } }),
                                this.html(`8451212a`, "button", parentElement,
                                    { attrs: { "type": { type: 'static', value: "submit" } } },
                                    (parentElement: any) => [
                                    this.text('Join '),
                                    this.html(`6a9bfaef`, "span", parentElement, {}, (parentElement: any) => [
                                        this.text('→')
                                    ])
                                    ])
                            ]),
                            this.html(`d3584ffa`, "small", parentElement, {}, (parentElement: any) => [
                                this.text('Chỉ có release notes và cập nhật kỹ thuật quan trọng.')
                            ])
                            );
                        }
                        return reactiveContents;
                    })
                    ])
                ])
            ]);
            this.superViewPath = `${__layout__+"public"}`;
            return this.extendView(this.superViewPath, {});
            }
        });

    }
}

// Export factory function
export function WebModulesHomeIndex(__data__ = {}, systemData = {}): IndexView {
    return new IndexView(__data__, systemData);
}
export default WebModulesHomeIndex;
