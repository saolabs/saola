import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.docs.runtime';
const __VIEW_NAMESPACE__ = 'web.modules.docs.';
const __VIEW_TYPE__ = 'view';
const __VIEW_CONFIG__ = {
    hasSuperView: true,
    viewType: 'view',
    sections: {
        "doc":{
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
    renderLongSections: ["doc"],
    renderSections: [],
    prerenderSections: []
};

/**
 * Props của view — sinh tự động từ @props/@vars, không sửa tay.
 * Optional hết vì khai báo nào cũng có default.
 */
export interface RuntimeProps {
    /** viewId server gán khi hydrate */
    __SSR_VIEW_ID__?: string;
    [key: string]: any;
}



class RuntimeViewController extends ViewController {
    constructor(view: View) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this as any).setStaticConfig === 'function') {
            (this as any).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this as any).config = __VIEW_CONFIG__;
        }
    }
}

class RuntimeView extends View {
    constructor(__data__: any = {}, systemData: any = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, RuntimeViewController);
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
        const set$activePhase = __STATE__.__.register('activePhase');
        let activePhase: any = 'hydrate';
        const setActivePhase = (state: any) => {
            activePhase = state;
            set$activePhase(state);
        };
        __STATE__.__.setters.setActivePhase = setActivePhase;
        __STATE__.__.setters.activePhase = setActivePhase;
        const update$activePhase = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('activePhase', value);
                activePhase = value;
            }
        };
        const __VARIABLE_LIST__: any = [];


        this.__ctrl__.setUserDefinedConfig({
            name: 'RuntimePage'
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
            commitConstructorData: function(this: any) {
                // Then update states from data
                update$activePhase('hydrate');
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
            this.block('block-doc', 'doc', (parentElement: any) => [
            this.html(`Bdoc1`, "section", parentElement,
                { classes: [{ type: 'static', value: "page-hero" }, { type: 'static', value: "page-hero-runtime" }] },
                (parentElement: any) => [
                this.html(`Bdoc11`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`Bdoc111`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement: any) => [
                        this.html(`Bdoc1111`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('03 / RUNTIME')
                        ]),
                        this.text(' DOM ownership & lifecycle')
                        ]),
                    this.html(`Bdoc112`, "h1", parentElement, {}, (parentElement: any) => [
                        this.text('Không render lại'),
                        this.html(`Bdoc1121`, "br", parentElement, {}),
                        this.html(`Bdoc1122`, "em", parentElement, {}, (parentElement: any) => [
                            this.text('điều đã có.')
                        ])
                    ])
                ]),
                this.html(`Bdoc12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement: any) => [
                    this.html(`Bdoc121`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Hydration là một chế độ mount có kiểm chứng: nhận DOM server tạo, nối behavior và chỉ fallback ở vùng không khớp.')
                    ]),
                    this.html(`Bdoc122`, "dl", parentElement, {}, (parentElement: any) => [
                        this.html(`Bdoc1221`, "div", parentElement, {}, (parentElement: any) => [
                            this.html(`Bdoc12211`, "dt", parentElement, {}, (parentElement: any) => [
                                this.text('FIRST MODE')
                            ]),
                            this.html(`Bdoc12212`, "dd", parentElement, {}, (parentElement: any) => [
                                this.text('hydrate')
                            ])
                        ]),
                        this.html(`Bdoc1222`, "div", parentElement, {}, (parentElement: any) => [
                            this.html(`Bdoc12221`, "dt", parentElement, {}, (parentElement: any) => [
                                this.text('NEXT MODE')
                            ]),
                            this.html(`Bdoc12222`, "dd", parentElement, {}, (parentElement: any) => [
                                this.text('client mount')
                            ])
                        ])
                    ])
                    ])
                ]),
            this.html(`Bdoc2`, "section", parentElement,
                { classes: [{ type: 'static', value: "phase-lab" }] },
                (parentElement: any) => [
                this.html(`Bdoc21`, "div", parentElement,
                    { classes: [{ type: 'static', value: "phase-tabs" }], attrs: { "role": { type: 'static', value: "group" }, "aria-label": { type: 'static', value: "Các giai đoạn runtime" } } },
                    (parentElement: any) => [
                    this.html(`Bdoc211`, "button", parentElement,
                        { classes: [{ type: 'binding', value: "active", factory: () => activePhase === 'ssr', stateKeys: ["activePhase"] }], events: { click: [(event: any) => setActivePhase('ssr')] } },
                        (parentElement: any) => [
                        this.html(`Bdoc2111`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('01')
                        ]),
                        this.text(' SSR')
                        ]),
                    this.html(`Bdoc212`, "button", parentElement,
                        { classes: [{ type: 'binding', value: "active", factory: () => activePhase === 'hydrate', stateKeys: ["activePhase"] }], events: { click: [(event: any) => setActivePhase('hydrate')] } },
                        (parentElement: any) => [
                        this.html(`Bdoc2121`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('02')
                        ]),
                        this.text(' Hydrate')
                        ]),
                    this.html(`Bdoc213`, "button", parentElement,
                        { classes: [{ type: 'binding', value: "active", factory: () => activePhase === 'reactive', stateKeys: ["activePhase"] }], events: { click: [(event: any) => setActivePhase('reactive')] } },
                        (parentElement: any) => [
                        this.html(`Bdoc2131`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('03')
                        ]),
                        this.text(' Rerender')
                        ]),
                    this.html(`Bdoc214`, "button", parentElement,
                        { classes: [{ type: 'binding', value: "active", factory: () => activePhase === 'cache', stateKeys: ["activePhase"] }], events: { click: [(event: any) => setActivePhase('cache')] } },
                        (parentElement: any) => [
                        this.html(`Bdoc2141`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('04')
                        ]),
                        this.text(' Cache')
                        ])
                    ]),
                this.html(`Bdoc22`, "div", parentElement,
                    { classes: [{ type: 'static', value: "phase-display" }] },
                    (parentElement: any) => [
                    this.reactive(`Bdoc22r1`, "if", parentReactive, parentElement, ["activePhase"], (parentReactive: any, parentElement: any) => {
                        const reactiveContents = [];
                        if (activePhase === 'ssr') {
                            reactiveContents.push(
                            this.html(`Bdoc22r1k11`, "div", parentElement, {}, (parentElement: any) => [
                                this.html(`Bdoc22r1k111`, "span", parentElement, {}, (parentElement: any) => [
                                    this.text('SERVER / COMPLETE')
                                ]),
                                this.html(`Bdoc22r1k112`, "h2", parentElement, {}, (parentElement: any) => [
                                    this.text('Blade gửi HTML có nội dung.')
                                ]),
                                this.html(`Bdoc22r1k113`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Layout, block, include và children được đặt đúng vị trí. Boot payload mang view ID, route data và context cần cho client.')
                                ]),
                                this.html(`Bdoc22r1k114`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('created → DOM ready')
                                ])
                            ])
                            );
                        }
                        else if (activePhase === 'reactive') {
                            reactiveContents.push(
                            this.html(`Bdoc22r1k21`, "div", parentElement, {}, (parentElement: any) => [
                                this.html(`Bdoc22r1k211`, "span", parentElement, {}, (parentElement: any) => [
                                    this.text('CLIENT / UPDATE')
                                ]),
                                this.html(`Bdoc22r1k212`, "h2", parentElement, {}, (parentElement: any) => [
                                    this.text('State chỉ đánh thức vùng phụ thuộc.')
                                ]),
                                this.html(`Bdoc22r1k213`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Thay đổi được batch theo frame. Reactive node render lại giữa marker của chính nó rồi start children mới và cleanup cây cũ.')
                                ]),
                                this.html(`Bdoc22r1k214`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('state change → schedule → patch')
                                ])
                            ])
                            );
                        }
                        else if (activePhase === 'cache') {
                            reactiveContents.push(
                            this.html(`Bdoc22r1k31`, "div", parentElement, {}, (parentElement: any) => [
                                this.html(`Bdoc22r1k311`, "span", parentElement, {}, (parentElement: any) => [
                                    this.text('NAVIGATION / RESTORE')
                                ]),
                                this.html(`Bdoc22r1k312`, "h2", parentElement, {}, (parentElement: any) => [
                                    this.text('Back không nhất thiết render lại.')
                                ]),
                                this.html(`Bdoc22r1k313`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('View có thể pause, detach DOM vào PageCache, giữ state rồi resume cùng scroll position khi popstate quay lại.')
                                ]),
                                this.html(`Bdoc22r1k314`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('active ⇄ paused → destroyed')
                                ])
                            ])
                            );
                        }
                        else {
                            reactiveContents.push(
                            this.html(`Bdoc22r1k41`, "div", parentElement, {}, (parentElement: any) => [
                                this.html(`Bdoc22r1k411`, "span", parentElement, {}, (parentElement: any) => [
                                    this.text('CLIENT / CLAIM')
                                ]),
                                this.html(`Bdoc22r1k412`, "h2", parentElement, {}, (parentElement: any) => [
                                    this.text('Runtime nhận lại DOM thay vì tạo bản sao.')
                                ]),
                                this.html(`Bdoc22r1k413`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Marker và stable identity được đối chiếu. State, event và subscriptions gắn đúng một lần; mismatch chỉ rerender cục bộ.')
                                ]),
                                this.html(`Bdoc22r1k414`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('claim → reconcile → start')
                                ])
                            ])
                            );
                        }
                        return reactiveContents;
                    }),
                    this.html(`Bdoc221`, "div", parentElement,
                        { classes: [{ type: 'static', value: "marker-visual" }] },
                        (parentElement: any) => [
                        this.html(`Bdoc2211`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('<!-- view:start -->')
                        ]),
                        this.html(`Bdoc2212`, "div", parentElement, {}, (parentElement: any) => [
                            this.html(`Bdoc22121`, "i", parentElement, {}),
                            this.html(`Bdoc22122`, "i", parentElement, {}),
                            this.html(`Bdoc22123`, "i", parentElement, {}),
                            this.html(`Bdoc22124`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('EXISTING DOM')
                            ])
                        ]),
                        this.html(`Bdoc2213`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('<!-- view:end -->')
                        ])
                        ])
                    ])
                ]),
            this.html(`Bdoc3`, "section", parentElement,
                { classes: [{ type: 'static', value: "lifecycle-section" }] },
                (parentElement: any) => [
                this.html(`Bdoc31`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }, { type: 'static', value: "compact" }] },
                    (parentElement: any) => [
                    this.html(`Bdoc311`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement: any) => [
                        this.html(`Bdoc3111`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('LIFECYCLE')
                        ]),
                        this.text(' Tài nguyên có điểm bắt đầu và kết thúc')
                        ]),
                    this.html(`Bdoc312`, "h2", parentElement, {}, (parentElement: any) => [
                        this.text('Một state machine'),
                        this.html(`Bdoc3121`, "br", parentElement, {}),
                        this.text('có thể quan sát.')
                    ])
                    ]),
                this.html(`Bdoc32`, "div", parentElement,
                    { classes: [{ type: 'static', value: "lifecycle-rail" }] },
                    (parentElement: any) => [
                    this.html(`Bdoc321`, "article", parentElement, {}, (parentElement: any) => [
                        this.html(`Bdoc3211`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('01')
                        ]),
                        this.html(`Bdoc3212`, "strong", parentElement, {}, (parentElement: any) => [
                            this.text('created')
                        ]),
                        this.html(`Bdoc3213`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Khai báo state, render factory và chain.')
                        ])
                    ]),
                    this.html(`Bdoc322`, "i", parentElement, {}, (parentElement: any) => [
                        this.text('→')
                    ]),
                    this.html(`Bdoc323`, "article", parentElement,
                        { classes: [{ type: 'static', value: "active" }] },
                        (parentElement: any) => [
                        this.html(`Bdoc3231`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('02')
                        ]),
                        this.html(`Bdoc3232`, "strong", parentElement, {}, (parentElement: any) => [
                            this.text('active')
                        ]),
                        this.html(`Bdoc3233`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('DOM mounted, event và subscription đang chạy.')
                        ])
                        ]),
                    this.html(`Bdoc324`, "i", parentElement, {}, (parentElement: any) => [
                        this.text('⇄')
                    ]),
                    this.html(`Bdoc325`, "article", parentElement, {}, (parentElement: any) => [
                        this.html(`Bdoc3251`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('03')
                        ]),
                        this.html(`Bdoc3252`, "strong", parentElement, {}, (parentElement: any) => [
                            this.text('paused')
                        ]),
                        this.html(`Bdoc3253`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('DOM detach, thay đổi được ghi dirty để resume.')
                        ])
                    ]),
                    this.html(`Bdoc326`, "i", parentElement, {}, (parentElement: any) => [
                        this.text('→')
                    ]),
                    this.html(`Bdoc327`, "article", parentElement, {}, (parentElement: any) => [
                        this.html(`Bdoc3271`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('04')
                        ]),
                        this.html(`Bdoc3272`, "strong", parentElement, {}, (parentElement: any) => [
                            this.text('destroyed')
                        ]),
                        this.html(`Bdoc3273`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Abort event, unsubscribe, huỷ RAF và release DOM.')
                        ])
                    ])
                    ])
                ]),
            this.html(`Bdoc4`, "section", parentElement,
                { classes: [{ type: 'static', value: "runtime-contracts" }] },
                (parentElement: any) => [
                this.html(`Bdoc41`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`Bdoc411`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('01 / INSERTION')
                    ]),
                    this.html(`Bdoc412`, "h3", parentElement, {}, (parentElement: any) => [
                        this.text('Mọi node có anchor')
                    ]),
                    this.html(`Bdoc413`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Wrapper, output, component và children đều render qua insertion point, tránh append mù vào container.')
                    ])
                ]),
                this.html(`Bdoc42`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`Bdoc421`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('02 / OWNERSHIP')
                    ]),
                    this.html(`Bdoc422`, "h3", parentElement, {}, (parentElement: any) => [
                        this.text('Mỗi view cleanup phần mình')
                    ]),
                    this.html(`Bdoc423`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Child view, block content và resource scoped đều theo lifecycle của owner rõ ràng.')
                    ])
                ]),
                this.html(`Bdoc43`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`Bdoc431`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('03 / RECONCILIATION')
                    ]),
                    this.html(`Bdoc432`, "h3", parentElement, {}, (parentElement: any) => [
                        this.text('Mismatch có phạm vi')
                    ]),
                    this.html(`Bdoc433`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Hydration cảnh báo và thay vùng sai thay vì buộc toàn bộ document render lại.')
                    ])
                ]),
                this.html(`Bdoc44`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`Bdoc441`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('04 / CONTEXT')
                    ]),
                    this.html(`Bdoc442`, "h3", parentElement, {}, (parentElement: any) => [
                        this.text('Registry đi cùng request')
                    ]),
                    this.html(`Bdoc443`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Route component map được chọn theo context hiện hành, không bị static state của Octane worker làm lệch.')
                    ])
                ])
                ]),
            this.html(`Bdoc5`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/docs/lifecycle" } } },
                (parentElement: any) => [
                this.html(`Bdoc51`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`Bdoc511`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('Tiếp theo')
                    ]),
                    this.html(`Bdoc512`, "strong", parentElement, {}, (parentElement: any) => [
                        this.text('Vòng đời & marker')
                    ])
                ]),
                this.html(`Bdoc52`, "span", parentElement,
                    { classes: [{ type: 'static', value: "button" }, { type: 'static', value: "button-primary" }] },
                    (parentElement: any) => [
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
export function WebModulesDocsRuntime(__data__ = {}, systemData = {}): RuntimeView {
    return new RuntimeView(__data__, systemData);
}
export default WebModulesDocsRuntime;