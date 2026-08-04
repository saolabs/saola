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
        const __VARIABLE_LIST__: any = [];


        this.__ctrl__.setUserDefinedConfig({
            name: 'HomePage'
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
                update$selectedSignal('source');
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
                { classes: [{ type: 'static', value: "home-hero" }] },
                (parentElement: any) => [
                this.html(`90a6e493`, "div", parentElement,
                    { classes: [{ type: 'static', value: "home-hero-copy" }] },
                    (parentElement: any) => [
                    this.html(`f515bf66`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement: any) => [
                        this.html(`e2f86203`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('SAOLA / ECOSYSTEM 01')
                        ]),
                        this.text(' Laravel-native application platform')
                        ]),
                    this.html(`9b0938cb`, "h1", parentElement, {}, (parentElement: any) => [
                        this.text('Một giao diện.'),
                        this.html(`f7127348`, "br", parentElement, {}),
                        this.html(`d4f4199d`, "em", parentElement, {}, (parentElement: any) => [
                            this.text('Hai runtime.')
                        ]),
                        this.html(`e95ae667`, "br", parentElement, {}),
                        this.text('Không hai codebase.')
                    ]),
                    this.html(`7718bb8d`, "p", parentElement,
                        { classes: [{ type: 'static', value: "hero-lead" }] },
                        (parentElement: any) => [
                        this.text('Saola biến một view '),
                        this.html(`cbfb64a4`, "code", parentElement, {}, (parentElement: any) => [
                            this.text('.sao')
                        ]),
                        this.text(' thành Blade cho phản hồi đầu tiên và JavaScript cho mọi tương tác tiếp theo — cùng route, cùng state contract, cùng cấu trúc.')
                        ]),
                    this.html(`ed82504f`, "div", parentElement,
                        { classes: [{ type: 'static', value: "hero-actions" }] },
                        (parentElement: any) => [
                        this.html(`63bde3ef`, "a", parentElement,
                            { classes: [{ type: 'static', value: "button" }, { type: 'static', value: "button-primary" }], attrs: { "href": { type: 'static', value: "/architecture" } } },
                            (parentElement: any) => [
                            this.text('Khám phá hệ thống '),
                            this.html(`fee9a4ad`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('↗')
                            ])
                            ]),
                        this.html(`b589ca24`, "a", parentElement,
                            { classes: [{ type: 'static', value: "text-link" }], attrs: { "href": { type: 'static', value: "/getting-started" } } },
                            (parentElement: any) => [
                            this.text('Xem cách bắt đầu '),
                            this.html(`c0aad52e`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('→')
                            ])
                            ])
                        ]),
                    this.html(`5e135ba5`, "dl", parentElement,
                        { classes: [{ type: 'static', value: "hero-facts" }] },
                        (parentElement: any) => [
                        this.html(`fe5c8eae`, "div", parentElement, {}, (parentElement: any) => [
                            this.html(`d73d3967`, "dt", parentElement, {}, (parentElement: any) => [
                                this.text('BACKEND')
                            ]),
                            this.html(`3947d795`, "dd", parentElement, {}, (parentElement: any) => [
                                this.text('Laravel 13')
                            ])
                        ]),
                        this.html(`50a0f69c`, "div", parentElement, {}, (parentElement: any) => [
                            this.html(`22a4978d`, "dt", parentElement, {}, (parentElement: any) => [
                                this.text('FIRST PAINT')
                            ]),
                            this.html(`8196725f`, "dd", parentElement, {}, (parentElement: any) => [
                                this.text('Blade SSR')
                            ])
                        ]),
                        this.html(`ecb37508`, "div", parentElement, {}, (parentElement: any) => [
                            this.html(`4f2b888b`, "dt", parentElement, {}, (parentElement: any) => [
                                this.text('AFTER LOAD')
                            ]),
                            this.html(`0e24af22`, "dd", parentElement, {}, (parentElement: any) => [
                                this.text('Reactive SPA')
                            ])
                        ])
                        ])
                    ]),
                this.html(`5f82dcd4`, "div", parentElement,
                    { classes: [{ type: 'static', value: "system-instrument" }], attrs: { "aria-label": { type: 'static', value: "Luồng biên dịch và render của Saola" } } },
                    (parentElement: any) => [
                    this.html(`01b28266`, "div", parentElement,
                        { classes: [{ type: 'static', value: "instrument-top" }] },
                        (parentElement: any) => [
                        this.html(`37bb2111`, "span", parentElement, {}, (parentElement: any) => [
                            this.html(`f21de37f`, "i", parentElement, {}),
                            this.text(' ROUTE / HOME')
                        ]),
                        this.html(`483a565a`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('CONTEXT: WEB')
                        ])
                        ]),
                    this.html(`81148f49`, "div", parentElement,
                        { classes: [{ type: 'static', value: "source-cell" }] },
                        (parentElement: any) => [
                        this.html(`f8a7486f`, "div", parentElement,
                            { classes: [{ type: 'static', value: "cell-label" }] },
                            (parentElement: any) => [
                            this.text('01 / SOURCE OF TRUTH')
                            ]),
                        this.html(`aeba9a26`, "strong", parentElement, {}, (parentElement: any) => [
                            this.text('home.sao')
                        ]),
                        this.html(`19524746`, "code", parentElement, {}, (parentElement: any) => [
                            this.text('&lt;template&gt; + state + style')
                        ])
                        ]),
                    this.html(`328c95ab`, "div", parentElement,
                        { classes: [{ type: 'static', value: "branch-line" }] },
                        (parentElement: any) => [
                        this.html(`49a217a8`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('COMPILE')
                        ])
                        ]),
                    this.html(`ac51d251`, "div", parentElement,
                        { classes: [{ type: 'static', value: "runtime-pair" }] },
                        (parentElement: any) => [
                        this.html(`1db15f13`, "article", parentElement, {}, (parentElement: any) => [
                            this.html(`c3a538e4`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('02A / SERVER')
                            ]),
                            this.html(`cd192bfa`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Blade')
                            ]),
                            this.html(`e2e22d5c`, "small", parentElement, {}, (parentElement: any) => [
                                this.text('HTML hoàn chỉnh')
                            ])
                        ]),
                        this.html(`498ed0c5`, "article", parentElement, {}, (parentElement: any) => [
                            this.html(`e8e4ac97`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('02B / CLIENT')
                            ]),
                            this.html(`6ee7879c`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('JavaScript')
                            ]),
                            this.html(`8d001972`, "small", parentElement, {}, (parentElement: any) => [
                                this.text('View contract')
                            ])
                        ])
                        ]),
                    this.html(`76eb295c`, "div", parentElement,
                        { classes: [{ type: 'static', value: "instrument-readout" }] },
                        (parentElement: any) => [
                        this.html(`a7c0e4a6`, "button", parentElement,
                            { classes: [{ type: 'binding', value: "active", factory: () => selectedSignal === 'source', stateKeys: ["selectedSignal"] }], events: { click: [(event: any) => setSelectedSignal('source')] } },
                            (parentElement: any) => [
                            this.text('SOURCE')
                            ]),
                        this.html(`d9002f86`, "button", parentElement,
                            { classes: [{ type: 'binding', value: "active", factory: () => selectedSignal === 'hydrate', stateKeys: ["selectedSignal"] }], events: { click: [(event: any) => setSelectedSignal('hydrate')] } },
                            (parentElement: any) => [
                            this.text('HYDRATE')
                            ]),
                        this.html(`c2ac9d7a`, "button", parentElement,
                            { classes: [{ type: 'binding', value: "active", factory: () => selectedSignal === 'navigate', stateKeys: ["selectedSignal"] }], events: { click: [(event: any) => setSelectedSignal('navigate')] } },
                            (parentElement: any) => [
                            this.text('NAVIGATE')
                            ]),
                        this.reactive(`3bcea458`, "if", parentReactive, parentElement, ["selectedSignal"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (selectedSignal === 'hydrate') {
                                reactiveContents.push(
                                this.html(`9851b44b`, "p", parentElement, {}, (parentElement: any) => [
                                    this.html(`591588a3`, "b", parentElement, {}, (parentElement: any) => [
                                        this.text('DOM được nhận lại.')
                                    ]),
                                    this.text(' Runtime claim marker có sẵn, nối state và event mà không dựng lại toàn bộ trang.')
                                ])
                                );
                            }
                            else if (selectedSignal === 'navigate') {
                                reactiveContents.push(
                                this.html(`c9d2d458`, "p", parentElement, {}, (parentElement: any) => [
                                    this.html(`2102ae8f`, "b", parentElement, {}, (parentElement: any) => [
                                        this.text('Layout được giữ lại.')
                                    ]),
                                    this.text(' Router chỉ thay nhánh view cần đổi; context route chọn đúng registry cho request hiện tại.')
                                ])
                                );
                            }
                            else {
                                reactiveContents.push(
                                this.html(`0be2d6a8`, "p", parentElement, {}, (parentElement: any) => [
                                    this.html(`704cd593`, "b", parentElement, {}, (parentElement: any) => [
                                        this.text('Một nguồn được biên dịch hai hướng.')
                                    ]),
                                    this.text(' Blade và JavaScript tuân theo cùng AST thay vì hai implementation song song.')
                                ])
                                );
                            }
                            return reactiveContents;
                        })
                        ])
                    ])
                ]),
            this.html(`8aa0772c`, "section", parentElement,
                { classes: [{ type: 'static', value: "orientation-strip" }], attrs: { "aria-label": { type: 'static', value: "Định vị Saola" } } },
                (parentElement: any) => [
                this.html(`35bf6e9d`, "p", parentElement, {}, (parentElement: any) => [
                    this.html(`b76d6580`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('Saola không thay Laravel.')
                    ]),
                    this.text(' Saola nối phần Laravel đã làm tốt với trải nghiệm SPA mà đội sản phẩm cần.')
                ]),
                this.html(`7f8af112`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`14b47dbd`, "strong", parentElement, {}, (parentElement: any) => [
                        this.text('SSR')
                    ]),
                    this.html(`872e3af2`, "small", parentElement, {}, (parentElement: any) => [
                        this.text('đúng ngay từ request đầu')
                    ])
                ]),
                this.html(`9b976db3`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`9aa2ffa8`, "strong", parentElement, {}, (parentElement: any) => [
                        this.text('CSR')
                    ]),
                    this.html(`521ea42c`, "small", parentElement, {}, (parentElement: any) => [
                        this.text('nhanh sau hydration')
                    ])
                ]),
                this.html(`cfc01898`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`ccc1deb9`, "strong", parentElement, {}, (parentElement: any) => [
                        this.text('CONTEXT')
                    ]),
                    this.html(`6d1fc048`, "small", parentElement, {}, (parentElement: any) => [
                        this.text('web · admin · mobile')
                    ])
                ])
                ]),
            this.html(`6c26f9b7`, "section", parentElement,
                { classes: [{ type: 'static', value: "home-map" }], attrs: { "id": { type: 'static', value: "explore" } } },
                (parentElement: any) => [
                this.html(`ce6a96bf`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }] },
                    (parentElement: any) => [
                    this.html(`5a71cd5f`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement: any) => [
                        this.html(`f1acc65a`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('PROJECT MAP')
                        ]),
                        this.text(' Không dồn mọi thứ vào trang chủ')
                        ]),
                    this.html(`98293aba`, "h2", parentElement, {}, (parentElement: any) => [
                        this.text('Đi vào đúng lớp'),
                        this.html(`c006637c`, "br", parentElement, {}),
                        this.text('mà bạn cần hiểu.')
                    ]),
                    this.html(`7e849715`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Mỗi phần của Saola có một trách nhiệm rõ ràng. Các trang dưới đây giải thích sâu bằng flow, contract và ví dụ thực tế.')
                    ])
                    ]),
                this.html(`d44023e9`, "div", parentElement,
                    { classes: [{ type: 'static', value: "map-grid" }] },
                    (parentElement: any) => [
                    this.html(`68691adb`, "a", parentElement,
                        { classes: [{ type: 'static', value: "map-card" }, { type: 'static', value: "map-card-wide" }], attrs: { "href": { type: 'static', value: "/architecture" } } },
                        (parentElement: any) => [
                        this.html(`f58a9058`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('01 / SYSTEM')
                        ]),
                        this.html(`95e8578e`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Kiến trúc hệ sinh thái')
                        ]),
                        this.html(`537c68b1`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Core, compiler, client runtime và application gặp nhau ở đâu trong một request.')
                        ]),
                        this.html(`6c57319f`, "i", parentElement, {}, (parentElement: any) => [
                            this.text('Khám phá kiến trúc ↗')
                        ])
                        ]),
                    this.html(`bbea58cd`, "a", parentElement,
                        { classes: [{ type: 'static', value: "map-card" }], attrs: { "href": { type: 'static', value: "/compiler" } } },
                        (parentElement: any) => [
                        this.html(`e7bcc131`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('02 / BUILD')
                        ]),
                        this.html(`2a7bc8cf`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Compiler & AST')
                        ]),
                        this.html(`703512be`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Một cú pháp, hai output và cơ chế children/include đồng bộ.')
                        ]),
                        this.html(`c0e73b95`, "i", parentElement, {}, (parentElement: any) => [
                            this.text('Mở compiler ↗')
                        ])
                        ]),
                    this.html(`40a53288`, "a", parentElement,
                        { classes: [{ type: 'static', value: "map-card" }, { type: 'static', value: "map-card-dark" }], attrs: { "href": { type: 'static', value: "/runtime" } } },
                        (parentElement: any) => [
                        this.html(`50cdd8c6`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('03 / LIVE')
                        ]),
                        this.html(`a12bc027`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Runtime & Hydration')
                        ]),
                        this.html(`c4c4f4d6`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Claim DOM, reactive update, lifecycle, rerender và page cache.')
                        ]),
                        this.html(`b98affc7`, "i", parentElement, {}, (parentElement: any) => [
                            this.text('Xem runtime ↗')
                        ])
                        ]),
                    this.html(`5d85b82c`, "a", parentElement,
                        { classes: [{ type: 'static', value: "map-card" }], attrs: { "href": { type: 'static', value: "/getting-started" } } },
                        (parentElement: any) => [
                        this.html(`09a33627`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('04 / START')
                        ]),
                        this.html(`13e66592`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Bắt đầu từ một route')
                        ]),
                        this.html(`2125817d`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Cấu trúc module, view đầu tiên và quy trình compile/run.')
                        ]),
                        this.html(`735ec8ee`, "i", parentElement, {}, (parentElement: any) => [
                            this.text('Bắt đầu xây ↗')
                        ])
                        ]),
                    this.html(`65327ce9`, "a", parentElement,
                        { classes: [{ type: 'static', value: "map-card" }], attrs: { "href": { type: 'static', value: "/todo-list" } } },
                        (parentElement: any) => [
                        this.html(`6d15c32a`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('05 / PROOF')
                        ]),
                        this.html(`2112fb7c`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Demo tương tác')
                        ]),
                        this.html(`e983f9c8`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Một fixture nhỏ để quan sát state, event và điều hướng đang chạy.')
                        ]),
                        this.html(`d1abd539`, "i", parentElement, {}, (parentElement: any) => [
                            this.text('Mở live demo ↗')
                        ])
                        ])
                    ])
                ]),
            this.html(`4e212027`, "section", parentElement,
                { classes: [{ type: 'static', value: "principle-band" }] },
                (parentElement: any) => [
                this.html(`1628defa`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`d621a64b`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement: any) => [
                        this.html(`5f6b80a9`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('DESIGN PRINCIPLE')
                        ]),
                        this.text(' Điều Saola bảo vệ')
                        ]),
                    this.html(`6560bb1b`, "h2", parentElement, {}, (parentElement: any) => [
                        this.text('Server là sự thật.'),
                        this.html(`c03b5dbb`, "br", parentElement, {}),
                        this.text('Client là sự tiếp nối.')
                    ])
                ]),
                this.html(`281112e1`, "div", parentElement,
                    { classes: [{ type: 'static', value: "principle-copy" }] },
                    (parentElement: any) => [
                    this.html(`1ace0544`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Phản hồi đầu tiên phải hoàn chỉnh và có thể hiểu được. JavaScript không “cứu” một trang rỗng; nó tiếp nhận chính view server vừa render và làm view đó sống lên.')
                    ]),
                    this.html(`e6526bf8`, "a", parentElement,
                        { classes: [{ type: 'static', value: "button" }, { type: 'static', value: "button-light" }], attrs: { "href": { type: 'static', value: "/about" } } },
                        (parentElement: any) => [
                        this.text('Vì sao Saola tồn tại '),
                        this.html(`451e22c6`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('→')
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
export function WebModulesHomeIndex(__data__ = {}, systemData = {}): IndexView {
    return new IndexView(__data__, systemData);
}
export default WebModulesHomeIndex;
