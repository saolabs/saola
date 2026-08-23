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
    constructor(__data__: RuntimeProps = {}, systemData: any = {}) {
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
            this.html(`7b338a08`, "section", parentElement,
                { classes: [{ type: 'static', value: "page-hero" }, { type: 'static', value: "page-hero-runtime" }] },
                (parentElement: any) => [
                this.html(`3bb16c04`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`f150187b`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement: any) => [
                        this.html(`bac94b21`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('03 / RUNTIME')
                        ]),
                        this.text(' DOM ownership & lifecycle')
                        ]),
                    this.html(`663d8ed0`, "h1", parentElement, {}, (parentElement: any) => [
                        this.text('Không render lại'),
                        this.html(`c3c0e3f9`, "br", parentElement, {}),
                        this.html(`27038dbc`, "em", parentElement, {}, (parentElement: any) => [
                            this.text('điều đã có.')
                        ])
                    ])
                ]),
                this.html(`57baae1a`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement: any) => [
                    this.html(`8695e14e`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Hydration là một chế độ mount có kiểm chứng: nhận DOM server tạo, nối behavior và chỉ fallback ở vùng không khớp.')
                    ]),
                    this.html(`1f0b28a5`, "dl", parentElement, {}, (parentElement: any) => [
                        this.html(`da4a7f2f`, "div", parentElement, {}, (parentElement: any) => [
                            this.html(`902aa345`, "dt", parentElement, {}, (parentElement: any) => [
                                this.text('FIRST MODE')
                            ]),
                            this.html(`e65d3a6b`, "dd", parentElement, {}, (parentElement: any) => [
                                this.text('hydrate')
                            ])
                        ]),
                        this.html(`e762468d`, "div", parentElement, {}, (parentElement: any) => [
                            this.html(`935f1ffd`, "dt", parentElement, {}, (parentElement: any) => [
                                this.text('NEXT MODE')
                            ]),
                            this.html(`df3e6b57`, "dd", parentElement, {}, (parentElement: any) => [
                                this.text('client mount')
                            ])
                        ])
                    ])
                    ])
                ]),
            this.html(`05ef4c27`, "section", parentElement,
                { classes: [{ type: 'static', value: "phase-lab" }] },
                (parentElement: any) => [
                this.html(`c9c6be59`, "div", parentElement,
                    { classes: [{ type: 'static', value: "phase-tabs" }], attrs: { "role": { type: 'static', value: "group" }, "aria-label": { type: 'static', value: "Các giai đoạn runtime" } } },
                    (parentElement: any) => [
                    this.html(`8fdfba2a`, "button", parentElement,
                        { classes: [{ type: 'binding', value: "active", factory: () => activePhase === 'ssr', stateKeys: ["activePhase"] }], events: { click: [(event: any) => setActivePhase('ssr')] } },
                        (parentElement: any) => [
                        this.html(`7c88577b`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('01')
                        ]),
                        this.text(' SSR')
                        ]),
                    this.html(`658050f7`, "button", parentElement,
                        { classes: [{ type: 'binding', value: "active", factory: () => activePhase === 'hydrate', stateKeys: ["activePhase"] }], events: { click: [(event: any) => setActivePhase('hydrate')] } },
                        (parentElement: any) => [
                        this.html(`208b7983`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('02')
                        ]),
                        this.text(' Hydrate')
                        ]),
                    this.html(`93c2814e`, "button", parentElement,
                        { classes: [{ type: 'binding', value: "active", factory: () => activePhase === 'reactive', stateKeys: ["activePhase"] }], events: { click: [(event: any) => setActivePhase('reactive')] } },
                        (parentElement: any) => [
                        this.html(`6d8fd3f7`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('03')
                        ]),
                        this.text(' Rerender')
                        ]),
                    this.html(`426cef1e`, "button", parentElement,
                        { classes: [{ type: 'binding', value: "active", factory: () => activePhase === 'cache', stateKeys: ["activePhase"] }], events: { click: [(event: any) => setActivePhase('cache')] } },
                        (parentElement: any) => [
                        this.html(`4c413dd0`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('04')
                        ]),
                        this.text(' Cache')
                        ])
                    ]),
                this.html(`fbd9a84d`, "div", parentElement,
                    { classes: [{ type: 'static', value: "phase-display" }] },
                    (parentElement: any) => [
                    this.reactive(`74173366`, "if", parentReactive, parentElement, ["activePhase"], (parentReactive: any, parentElement: any) => {
                        const reactiveContents = [];
                        if (activePhase === 'ssr') {
                            reactiveContents.push(
                            this.html(`e7367464`, "div", parentElement, {}, (parentElement: any) => [
                                this.html(`5649f122`, "span", parentElement, {}, (parentElement: any) => [
                                    this.text('SERVER / COMPLETE')
                                ]),
                                this.html(`e7189715`, "h2", parentElement, {}, (parentElement: any) => [
                                    this.text('Blade gửi HTML có nội dung.')
                                ]),
                                this.html(`98e4965e`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Layout, block, include và children được đặt đúng vị trí. Boot payload mang view ID, route data và context cần cho client.')
                                ]),
                                this.html(`02dbd94e`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('created → DOM ready')
                                ])
                            ])
                            );
                        }
                        else if (activePhase === 'reactive') {
                            reactiveContents.push(
                            this.html(`015e7fca`, "div", parentElement, {}, (parentElement: any) => [
                                this.html(`0ed6f8a1`, "span", parentElement, {}, (parentElement: any) => [
                                    this.text('CLIENT / UPDATE')
                                ]),
                                this.html(`c96d7dc5`, "h2", parentElement, {}, (parentElement: any) => [
                                    this.text('State chỉ đánh thức vùng phụ thuộc.')
                                ]),
                                this.html(`eb2a6be1`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Thay đổi được batch theo frame. Reactive node render lại giữa marker của chính nó rồi start children mới và cleanup cây cũ.')
                                ]),
                                this.html(`afc5519e`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('state change → schedule → patch')
                                ])
                            ])
                            );
                        }
                        else if (activePhase === 'cache') {
                            reactiveContents.push(
                            this.html(`83874d5b`, "div", parentElement, {}, (parentElement: any) => [
                                this.html(`5a2eba3e`, "span", parentElement, {}, (parentElement: any) => [
                                    this.text('NAVIGATION / RESTORE')
                                ]),
                                this.html(`c7a6e6a9`, "h2", parentElement, {}, (parentElement: any) => [
                                    this.text('Back không nhất thiết render lại.')
                                ]),
                                this.html(`361a391f`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('View có thể pause, detach DOM vào PageCache, giữ state rồi resume cùng scroll position khi popstate quay lại.')
                                ]),
                                this.html(`67e22bd8`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('active ⇄ paused → destroyed')
                                ])
                            ])
                            );
                        }
                        else {
                            reactiveContents.push(
                            this.html(`c652da34`, "div", parentElement, {}, (parentElement: any) => [
                                this.html(`2df41008`, "span", parentElement, {}, (parentElement: any) => [
                                    this.text('CLIENT / CLAIM')
                                ]),
                                this.html(`a6a0375e`, "h2", parentElement, {}, (parentElement: any) => [
                                    this.text('Runtime nhận lại DOM thay vì tạo bản sao.')
                                ]),
                                this.html(`e5ec980b`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Marker và stable identity được đối chiếu. State, event và subscriptions gắn đúng một lần; mismatch chỉ rerender cục bộ.')
                                ]),
                                this.html(`7e4ae459`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('claim → reconcile → start')
                                ])
                            ])
                            );
                        }
                        return reactiveContents;
                    }),
                    this.html(`bc986368`, "div", parentElement,
                        { classes: [{ type: 'static', value: "marker-visual" }] },
                        (parentElement: any) => [
                        this.html(`6303a5a3`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('<!-- view:start -->')
                        ]),
                        this.html(`a71a4ce1`, "div", parentElement, {}, (parentElement: any) => [
                            this.html(`ff74274b`, "i", parentElement, {}),
                            this.html(`826b6ccc`, "i", parentElement, {}),
                            this.html(`92ed573a`, "i", parentElement, {}),
                            this.html(`796f99f4`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('EXISTING DOM')
                            ])
                        ]),
                        this.html(`4bceac81`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('<!-- view:end -->')
                        ])
                        ])
                    ])
                ]),
            this.html(`9fd19a30`, "section", parentElement,
                { classes: [{ type: 'static', value: "lifecycle-section" }] },
                (parentElement: any) => [
                this.html(`849145f1`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }, { type: 'static', value: "compact" }] },
                    (parentElement: any) => [
                    this.html(`0d56026d`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement: any) => [
                        this.html(`773a2605`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('LIFECYCLE')
                        ]),
                        this.text(' Tài nguyên có điểm bắt đầu và kết thúc')
                        ]),
                    this.html(`de7a1e42`, "h2", parentElement, {}, (parentElement: any) => [
                        this.text('Một state machine'),
                        this.html(`939960ee`, "br", parentElement, {}),
                        this.text('có thể quan sát.')
                    ])
                    ]),
                this.html(`97e5628b`, "div", parentElement,
                    { classes: [{ type: 'static', value: "lifecycle-rail" }] },
                    (parentElement: any) => [
                    this.html(`59ebb7c1`, "article", parentElement, {}, (parentElement: any) => [
                        this.html(`ce56689b`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('01')
                        ]),
                        this.html(`6e241d27`, "strong", parentElement, {}, (parentElement: any) => [
                            this.text('created')
                        ]),
                        this.html(`88e948c8`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Khai báo state, render factory và chain.')
                        ])
                    ]),
                    this.html(`6c495396`, "i", parentElement, {}, (parentElement: any) => [
                        this.text('→')
                    ]),
                    this.html(`62360ed0`, "article", parentElement,
                        { classes: [{ type: 'static', value: "active" }] },
                        (parentElement: any) => [
                        this.html(`96441922`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('02')
                        ]),
                        this.html(`cd478644`, "strong", parentElement, {}, (parentElement: any) => [
                            this.text('active')
                        ]),
                        this.html(`a1f0c4a2`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('DOM mounted, event và subscription đang chạy.')
                        ])
                        ]),
                    this.html(`4ea4f516`, "i", parentElement, {}, (parentElement: any) => [
                        this.text('⇄')
                    ]),
                    this.html(`279f3d92`, "article", parentElement, {}, (parentElement: any) => [
                        this.html(`077e8bd6`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('03')
                        ]),
                        this.html(`afefe6cb`, "strong", parentElement, {}, (parentElement: any) => [
                            this.text('paused')
                        ]),
                        this.html(`9edab2fa`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('DOM detach, thay đổi được ghi dirty để resume.')
                        ])
                    ]),
                    this.html(`0bc0e461`, "i", parentElement, {}, (parentElement: any) => [
                        this.text('→')
                    ]),
                    this.html(`b528b09c`, "article", parentElement, {}, (parentElement: any) => [
                        this.html(`b08ba3e0`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('04')
                        ]),
                        this.html(`385c8941`, "strong", parentElement, {}, (parentElement: any) => [
                            this.text('destroyed')
                        ]),
                        this.html(`586cc9e0`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Abort event, unsubscribe, huỷ RAF và release DOM.')
                        ])
                    ])
                    ])
                ]),
            this.html(`e3988c18`, "section", parentElement,
                { classes: [{ type: 'static', value: "runtime-contracts" }] },
                (parentElement: any) => [
                this.html(`6f8acc56`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`5536b886`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('01 / INSERTION')
                    ]),
                    this.html(`526a1ced`, "h3", parentElement, {}, (parentElement: any) => [
                        this.text('Mọi node có anchor')
                    ]),
                    this.html(`c4bd526b`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Wrapper, output, component và children đều render qua insertion point, tránh append mù vào container.')
                    ])
                ]),
                this.html(`f0346512`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`81072883`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('02 / OWNERSHIP')
                    ]),
                    this.html(`f281a161`, "h3", parentElement, {}, (parentElement: any) => [
                        this.text('Mỗi view cleanup phần mình')
                    ]),
                    this.html(`76376fab`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Child view, block content và resource scoped đều theo lifecycle của owner rõ ràng.')
                    ])
                ]),
                this.html(`417a4297`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`3c4049e4`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('03 / RECONCILIATION')
                    ]),
                    this.html(`2cf8c11f`, "h3", parentElement, {}, (parentElement: any) => [
                        this.text('Mismatch có phạm vi')
                    ]),
                    this.html(`66c22f8e`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Hydration cảnh báo và thay vùng sai thay vì buộc toàn bộ document render lại.')
                    ])
                ]),
                this.html(`796886d7`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`394badbf`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('04 / CONTEXT')
                    ]),
                    this.html(`d305e9fb`, "h3", parentElement, {}, (parentElement: any) => [
                        this.text('Registry đi cùng request')
                    ]),
                    this.html(`a9cb02ef`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Route component map được chọn theo context hiện hành, không bị static state của Octane worker làm lệch.')
                    ])
                ])
                ]),
            this.html(`24b6e3d2`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/docs/lifecycle" } } },
                (parentElement: any) => [
                this.html(`587d10b8`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`f908d9c5`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('Tiếp theo')
                    ]),
                    this.html(`7e647603`, "strong", parentElement, {}, (parentElement: any) => [
                        this.text('Vòng đời & marker')
                    ])
                ]),
                this.html(`50bb0184`, "span", parentElement,
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
export function WebModulesDocsRuntime(__data__: RuntimeProps = {}, systemData: any = {}): RuntimeView {
    return new RuntimeView(__data__, systemData);
}
export default WebModulesDocsRuntime;
