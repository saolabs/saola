import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.home.runtime';
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
        let activePhase: any = null;
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
            superView: `${__layout__+"public"}`,
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
            this.block('block-content', 'content', (parentElement: any) => [
            this.html(`b4052a35`, "section", parentElement,
                { classes: [{ type: 'static', value: "page-hero" }, { type: 'static', value: "page-hero-runtime" }] },
                (parentElement: any) => [
                this.html(`90a6e493`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`f515bf66`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement: any) => [
                        this.html(`e2f86203`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('03 / RUNTIME')
                        ]),
                        this.text(' DOM ownership & lifecycle')
                        ]),
                    this.html(`9b0938cb`, "h1", parentElement, {}, (parentElement: any) => [
                        this.text('Không render lại'),
                        this.html(`f7127348`, "br", parentElement, {}),
                        this.html(`d4f4199d`, "em", parentElement, {}, (parentElement: any) => [
                            this.text('điều đã có.')
                        ])
                    ])
                ]),
                this.html(`5f82dcd4`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement: any) => [
                    this.html(`70182674`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Hydration là một chế độ mount có kiểm chứng: nhận DOM server tạo, nối behavior và chỉ fallback ở vùng không khớp.')
                    ]),
                    this.html(`87f0a97e`, "dl", parentElement, {}, (parentElement: any) => [
                        this.html(`8fd0466f`, "div", parentElement, {}, (parentElement: any) => [
                            this.html(`e3488b5f`, "dt", parentElement, {}, (parentElement: any) => [
                                this.text('FIRST MODE')
                            ]),
                            this.html(`cf7b0d19`, "dd", parentElement, {}, (parentElement: any) => [
                                this.text('hydrate')
                            ])
                        ]),
                        this.html(`a8712dd1`, "div", parentElement, {}, (parentElement: any) => [
                            this.html(`fc9334e8`, "dt", parentElement, {}, (parentElement: any) => [
                                this.text('NEXT MODE')
                            ]),
                            this.html(`647f0f87`, "dd", parentElement, {}, (parentElement: any) => [
                                this.text('client mount')
                            ])
                        ])
                    ])
                    ])
                ]),
            this.html(`8aa0772c`, "section", parentElement,
                { classes: [{ type: 'static', value: "phase-lab" }] },
                (parentElement: any) => [
                this.html(`301a68fc`, "div", parentElement,
                    { classes: [{ type: 'static', value: "phase-tabs" }], attrs: { "role": { type: 'static', value: "group" }, "aria-label": { type: 'static', value: "Các giai đoạn runtime" } } },
                    (parentElement: any) => [
                    this.html(`f4d7b665`, "button", parentElement,
                        { classes: [{ type: 'binding', value: "active", factory: () => activePhase === 'ssr', stateKeys: ["activePhase"] }], events: { click: [(event: any) => setActivePhase('ssr')] } },
                        (parentElement: any) => [
                        this.html(`1f7cfba5`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('01')
                        ]),
                        this.text(' SSR')
                        ]),
                    this.html(`841f8490`, "button", parentElement,
                        { classes: [{ type: 'binding', value: "active", factory: () => activePhase === 'hydrate', stateKeys: ["activePhase"] }], events: { click: [(event: any) => setActivePhase('hydrate')] } },
                        (parentElement: any) => [
                        this.html(`5d54a895`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('02')
                        ]),
                        this.text(' Hydrate')
                        ]),
                    this.html(`d84106cc`, "button", parentElement,
                        { classes: [{ type: 'binding', value: "active", factory: () => activePhase === 'reactive', stateKeys: ["activePhase"] }], events: { click: [(event: any) => setActivePhase('reactive')] } },
                        (parentElement: any) => [
                        this.html(`9b5ddd76`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('03')
                        ]),
                        this.text(' Rerender')
                        ]),
                    this.html(`cef75304`, "button", parentElement,
                        { classes: [{ type: 'binding', value: "active", factory: () => activePhase === 'cache', stateKeys: ["activePhase"] }], events: { click: [(event: any) => setActivePhase('cache')] } },
                        (parentElement: any) => [
                        this.html(`17600444`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('04')
                        ]),
                        this.text(' Cache')
                        ])
                    ]),
                this.html(`7f8af112`, "div", parentElement,
                    { classes: [{ type: 'static', value: "phase-display" }] },
                    (parentElement: any) => [
                    this.reactive(`94d6f85f`, "if", parentReactive, parentElement, ["activePhase"], (parentReactive: any, parentElement: any) => {
                        const reactiveContents = [];
                        if (activePhase === 'ssr') {
                            reactiveContents.push(
                            this.html(`60e2542d`, "div", parentElement, {}, (parentElement: any) => [
                                this.html(`85b44312`, "span", parentElement, {}, (parentElement: any) => [
                                    this.text('SERVER / COMPLETE')
                                ]),
                                this.html(`844ff036`, "h2", parentElement, {}, (parentElement: any) => [
                                    this.text('Blade gửi HTML có nội dung.')
                                ]),
                                this.html(`ffa0f7fb`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Layout, block, include và children được đặt đúng vị trí. Boot payload mang view ID, route data và context cần cho client.')
                                ]),
                                this.html(`652e2794`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('created → DOM ready')
                                ])
                            ])
                            );
                        }
                        else if (activePhase === 'reactive') {
                            reactiveContents.push(
                            this.html(`cd6c32be`, "div", parentElement, {}, (parentElement: any) => [
                                this.html(`a5dffbf8`, "span", parentElement, {}, (parentElement: any) => [
                                    this.text('CLIENT / UPDATE')
                                ]),
                                this.html(`b64edae4`, "h2", parentElement, {}, (parentElement: any) => [
                                    this.text('State chỉ đánh thức vùng phụ thuộc.')
                                ]),
                                this.html(`844b262b`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Thay đổi được batch theo frame. Reactive node render lại giữa marker của chính nó rồi start children mới và cleanup cây cũ.')
                                ]),
                                this.html(`640170c9`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('state change → schedule → patch')
                                ])
                            ])
                            );
                        }
                        else if (activePhase === 'cache') {
                            reactiveContents.push(
                            this.html(`4a0b6f3b`, "div", parentElement, {}, (parentElement: any) => [
                                this.html(`bdab0ea9`, "span", parentElement, {}, (parentElement: any) => [
                                    this.text('NAVIGATION / RESTORE')
                                ]),
                                this.html(`b3c591da`, "h2", parentElement, {}, (parentElement: any) => [
                                    this.text('Back không nhất thiết render lại.')
                                ]),
                                this.html(`8d923d95`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('View có thể pause, detach DOM vào PageCache, giữ state rồi resume cùng scroll position khi popstate quay lại.')
                                ]),
                                this.html(`6f9010ad`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('active ⇄ paused → destroyed')
                                ])
                            ])
                            );
                        }
                        else {
                            reactiveContents.push(
                            this.html(`e073fe0a`, "div", parentElement, {}, (parentElement: any) => [
                                this.html(`81279e31`, "span", parentElement, {}, (parentElement: any) => [
                                    this.text('CLIENT / CLAIM')
                                ]),
                                this.html(`18016808`, "h2", parentElement, {}, (parentElement: any) => [
                                    this.text('Runtime nhận lại DOM thay vì tạo bản sao.')
                                ]),
                                this.html(`283e3d7d`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Marker và stable identity được đối chiếu. State, event và subscriptions gắn đúng một lần; mismatch chỉ rerender cục bộ.')
                                ]),
                                this.html(`b0697b19`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('claim → reconcile → start')
                                ])
                            ])
                            );
                        }
                        return reactiveContents;
                    }),
                    this.html(`4cc3522d`, "div", parentElement,
                        { classes: [{ type: 'static', value: "marker-visual" }] },
                        (parentElement: any) => [
                        this.html(`0ea9bdf7`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('&lt;!-- view:start --&gt;')
                        ]),
                        this.html(`b51defe8`, "div", parentElement, {}, (parentElement: any) => [
                            this.html(`bed35e65`, "i", parentElement, {}),
                            this.html(`b74e7b12`, "i", parentElement, {}),
                            this.html(`c77227b5`, "i", parentElement, {}),
                            this.html(`c3e1c132`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('EXISTING DOM')
                            ])
                        ]),
                        this.html(`47a63c08`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('&lt;!-- view:end --&gt;')
                        ])
                        ])
                    ])
                ]),
            this.html(`6c26f9b7`, "section", parentElement,
                { classes: [{ type: 'static', value: "lifecycle-section" }] },
                (parentElement: any) => [
                this.html(`ce6a96bf`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }, { type: 'static', value: "compact" }] },
                    (parentElement: any) => [
                    this.html(`5a71cd5f`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement: any) => [
                        this.html(`f1acc65a`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('LIFECYCLE')
                        ]),
                        this.text(' Tài nguyên có điểm bắt đầu và kết thúc')
                        ]),
                    this.html(`98293aba`, "h2", parentElement, {}, (parentElement: any) => [
                        this.text('Một state machine'),
                        this.html(`c006637c`, "br", parentElement, {}),
                        this.text('có thể quan sát.')
                    ])
                    ]),
                this.html(`d44023e9`, "div", parentElement,
                    { classes: [{ type: 'static', value: "lifecycle-rail" }] },
                    (parentElement: any) => [
                    this.html(`e3e123df`, "article", parentElement, {}, (parentElement: any) => [
                        this.html(`5cadfa06`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('01')
                        ]),
                        this.html(`f5da45b7`, "strong", parentElement, {}, (parentElement: any) => [
                            this.text('created')
                        ]),
                        this.html(`4a13b743`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Khai báo state, render factory và chain.')
                        ])
                    ]),
                    this.html(`6ca8d1ac`, "i", parentElement, {}, (parentElement: any) => [
                        this.text('→')
                    ]),
                    this.html(`ddf2d3a9`, "article", parentElement,
                        { classes: [{ type: 'static', value: "active" }] },
                        (parentElement: any) => [
                        this.html(`8d5d9746`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('02')
                        ]),
                        this.html(`9c2c779f`, "strong", parentElement, {}, (parentElement: any) => [
                            this.text('active')
                        ]),
                        this.html(`71463dd8`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('DOM mounted, event và subscription đang chạy.')
                        ])
                        ]),
                    this.html(`d2faf6f2`, "i", parentElement, {}, (parentElement: any) => [
                        this.text('⇄')
                    ]),
                    this.html(`f46ead31`, "article", parentElement, {}, (parentElement: any) => [
                        this.html(`7856d9b6`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('03')
                        ]),
                        this.html(`2fcb6b06`, "strong", parentElement, {}, (parentElement: any) => [
                            this.text('paused')
                        ]),
                        this.html(`8b20d85e`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('DOM detach, thay đổi được ghi dirty để resume.')
                        ])
                    ]),
                    this.html(`68a7179f`, "i", parentElement, {}, (parentElement: any) => [
                        this.text('→')
                    ]),
                    this.html(`b0e172af`, "article", parentElement, {}, (parentElement: any) => [
                        this.html(`5c77a0d2`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('04')
                        ]),
                        this.html(`68930cae`, "strong", parentElement, {}, (parentElement: any) => [
                            this.text('destroyed')
                        ]),
                        this.html(`c4f16e7a`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Abort event, unsubscribe, huỷ RAF và release DOM.')
                        ])
                    ])
                    ])
                ]),
            this.html(`4e212027`, "section", parentElement,
                { classes: [{ type: 'static', value: "runtime-contracts" }] },
                (parentElement: any) => [
                this.html(`1628defa`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`94cfb61c`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('01 / INSERTION')
                    ]),
                    this.html(`51b31959`, "h3", parentElement, {}, (parentElement: any) => [
                        this.text('Mọi node có anchor')
                    ]),
                    this.html(`cbd53bdb`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Wrapper, output, component và children đều render qua insertion point, tránh append mù vào container.')
                    ])
                ]),
                this.html(`281112e1`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`39f5e2a7`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('02 / OWNERSHIP')
                    ]),
                    this.html(`5a655b72`, "h3", parentElement, {}, (parentElement: any) => [
                        this.text('Mỗi view cleanup phần mình')
                    ]),
                    this.html(`093ec949`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Child view, block content và resource scoped đều theo lifecycle của owner rõ ràng.')
                    ])
                ]),
                this.html(`f95640aa`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`cf8d1361`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('03 / RECONCILIATION')
                    ]),
                    this.html(`80c5ddc7`, "h3", parentElement, {}, (parentElement: any) => [
                        this.text('Mismatch có phạm vi')
                    ]),
                    this.html(`74790797`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Hydration cảnh báo và thay vùng sai thay vì buộc toàn bộ document render lại.')
                    ])
                ]),
                this.html(`373f881d`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`32285881`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('04 / CONTEXT')
                    ]),
                    this.html(`0d3766a9`, "h3", parentElement, {}, (parentElement: any) => [
                        this.text('Registry đi cùng request')
                    ]),
                    this.html(`9fe8cc02`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Route component map được chọn theo context hiện hành, không bị static state của Octane worker làm lệch.')
                    ])
                ])
                ]),
            this.html(`5d5c7d30`, "section", parentElement,
                { classes: [{ type: 'static', value: "next-page" }] },
                (parentElement: any) => [
                this.html(`8a4c2f1f`, "span", parentElement, {}, (parentElement: any) => [
                    this.text('Tiếp theo / 04')
                ]),
                this.html(`f94a552a`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`5d206b32`, "h2", parentElement, {}, (parentElement: any) => [
                        this.text('Đưa một route Saola đầu tiên vào ứng dụng.')
                    ]),
                    this.html(`3f927566`, "a", parentElement,
                        { classes: [{ type: 'static', value: "button" }, { type: 'static', value: "button-primary" }], attrs: { "href": { type: 'static', value: "/getting-started" } } },
                        (parentElement: any) => [
                        this.text('Getting started '),
                        this.html(`828421ed`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('↗')
                        ])
                        ])
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
export function WebModulesHomeRuntime(__data__ = {}, systemData = {}): RuntimeView {
    return new RuntimeView(__data__, systemData);
}
export default WebModulesHomeRuntime;
