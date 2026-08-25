import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.home.parts.faq';
const __VIEW_NAMESPACE__ = 'web.modules.home.parts.';
const __VIEW_TYPE__ = 'view';
const __VIEW_CONFIG__ = {
    hasSuperView: false,
    viewType: 'view',
    sections: {},
    wrapperConfig: { enable: false, tag: null, subscribe: true, attributes: {} },
    hasAwaitData: false,
    hasFetchData: false,
    usesVars: false,
    hasSections: false,
    hasSectionPreload: false,
    hasPrerender: false,
    renderLongSections: [],
    renderSections: [],
    prerenderSections: []
};



/**
 * Props của view — sinh tự động từ @props/@vars, không sửa tay.
 * Optional hết vì khai báo nào cũng có default.
 */
export interface FaqProps {
    /** viewId server gán khi hydrate */
    __SSR_VIEW_ID__?: string;
    [key: string]: any;
}

class FaqViewController extends ViewController {
    constructor(view: View) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this as any).setStaticConfig === 'function') {
            (this as any).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this as any).config = __VIEW_CONFIG__;
        }
    }
}

class FaqView extends View {
    constructor(__data__: FaqProps = {}, systemData: any = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, FaqViewController);
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
        const set$openFaq = __STATE__.__.register('openFaq');
        let openFaq: any = 0;
        const setOpenFaq = (state: any) => {
            openFaq = state;
            set$openFaq(state);
        };
        __STATE__.__.setters.setOpenFaq = setOpenFaq;
        __STATE__.__.setters.openFaq = setOpenFaq;
        const update$openFaq = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('openFaq', value);
                openFaq = value;
            }
        };
        const __VARIABLE_LIST__: any = [];


        this.__ctrl__.setUserDefinedConfig({
            name: 'HomeFaq'
        });

        this.__ctrl__.setup({
            superView: null,
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
                update$openFaq(0);
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
            return this.wrapper((parentElement: any) => [
            this.html(`bbcd3398`, "section", parentElement,
                { classes: [{ type: 'static', value: "faq-grid" }, { type: 'static', value: "home-section--fog" }], attrs: { "id": { type: 'static', value: "faq" } } },
                (parentElement: any) => [
                this.html(`88b70a58`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }] },
                    (parentElement: any) => [
                    this.html(`e444cc57`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement: any) => [
                        this.html(`3d2849a4`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('FAQ')
                        ]),
                        this.text(' Hỏi nhanh')
                        ]),
                    this.html(`ed9d4c8f`, "h2", parentElement, {}, (parentElement: any) => [
                        this.text('Sáu câu hỏi hay gặp nhất.')
                    ])
                    ]),
                this.html(`b545b1d4`, "div", parentElement,
                    { classes: [{ type: 'static', value: "value-accordion" }] },
                    (parentElement: any) => [
                    this.html(`9575d036`, "article", parentElement,
                        { classes: [{ type: 'static', value: "value-item" }, { type: 'binding', value: "open", factory: () => openFaq === 0, stateKeys: ["openFaq"] }] },
                        (parentElement: any) => [
                        this.html(`1bc8977d`, "button", parentElement,
                            { events: { click: [(event: any) => setOpenFaq(0)] } },
                            (parentElement: any) => [
                            this.html(`4da627c8`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('01')
                            ]),
                            this.html(`6cf9e65e`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Saola có thay thế Laravel không?')
                            ]),
                            this.html(`4b3780d1`, "i", parentElement, {}, (parentElement: any) => [
                                this.text('+')
                            ])
                            ]),
                        this.reactive(`c198301d`, "if", parentReactive, parentElement, ["openFaq"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (openFaq === 0) {
                                reactiveContents.push(
                                this.html(`312596ee`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Không. Saola là lớp view và runtime chạy trên Laravel. Route, middleware, policy, Eloquent, queue và toàn bộ hệ sinh thái Laravel giữ nguyên. Cái Saola thay là cách bạn viết tầng view và cách trang đó sống tiếp sau khi tải xong.')
                                ])
                                );
                            }
                            return reactiveContents;
                        })
                        ]),
                    this.html(`f21a86b1`, "article", parentElement,
                        { classes: [{ type: 'static', value: "value-item" }, { type: 'binding', value: "open", factory: () => openFaq === 1, stateKeys: ["openFaq"] }] },
                        (parentElement: any) => [
                        this.html(`f087df74`, "button", parentElement,
                            { events: { click: [(event: any) => setOpenFaq(1)] } },
                            (parentElement: any) => [
                            this.html(`5e74edef`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('02')
                            ]),
                            this.html(`ef45b241`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Tôi có phải bỏ Blade đang có không?')
                            ]),
                            this.html(`989b4085`, "i", parentElement, {}, (parentElement: any) => [
                                this.text('+')
                            ])
                            ]),
                        this.reactive(`0b397819`, "if", parentReactive, parentElement, ["openFaq"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (openFaq === 1) {
                                reactiveContents.push(
                                this.html(`f288a437`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Không. Đầu ra phía server của một file '),
                                    this.html(`8d27c83f`, "code", parentElement, {}, (parentElement: any) => [
                                        this.text('.sao')
                                    ]),
                                    this.text(' chính là Blade template, nằm cùng chỗ với view Blade bạn đang có. Bạn chuyển dần từng trang, không cần viết lại cả ứng dụng trong một lần.')
                                ])
                                );
                            }
                            return reactiveContents;
                        })
                        ]),
                    this.html(`d292e066`, "article", parentElement,
                        { classes: [{ type: 'static', value: "value-item" }, { type: 'binding', value: "open", factory: () => openFaq === 5, stateKeys: ["openFaq"] }] },
                        (parentElement: any) => [
                        this.html(`2eb01ab6`, "button", parentElement,
                            { events: { click: [(event: any) => setOpenFaq(5)] } },
                            (parentElement: any) => [
                            this.html(`d2321221`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('06')
                            ]),
                            this.html(`637f1eb9`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Đã biết Blade thì học mất bao lâu?')
                            ]),
                            this.html(`51cf42cd`, "i", parentElement, {}, (parentElement: any) => [
                                this.text('+')
                            ])
                            ]),
                        this.reactive(`90cc5571`, "if", parentReactive, parentElement, ["openFaq"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (openFaq === 5) {
                                reactiveContents.push(
                                this.html(`ee5672a5`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Cú pháp giữ hình dạng directive quen thuộc của Blade, nên phần điều khiển luồng gần như đọc được ngay. Cái mới cần nắm là ba thứ: state khai báo ở đầu file, setter sinh tự động, và ranh giới giữa giá trị reactive với giá trị tính một lần.')
                                ])
                                );
                            }
                            return reactiveContents;
                        })
                        ])
                    ])
                ])
            ]);
            }
        });

    }
}

// Export factory function
export function WebModulesHomePartsFaq(__data__: FaqProps = {}, systemData: any = {}): FaqView {
    return new FaqView(__data__, systemData);
}
export default WebModulesHomePartsFaq;
