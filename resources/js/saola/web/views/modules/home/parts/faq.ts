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
    constructor(__data__: any = {}, systemData: any = {}) {
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
            this.html(`e1`, "section", parentElement,
                { classes: [{ type: 'static', value: "faq-grid" }, { type: 'static', value: "home-section--fog" }], attrs: { "id": { type: 'static', value: "faq" } } },
                (parentElement: any) => [
                this.html(`e11`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }] },
                    (parentElement: any) => [
                    this.html(`e111`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement: any) => [
                        this.html(`e1111`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('FAQ')
                        ]),
                        this.text(' Hỏi đáp nhanh')
                        ]),
                    this.html(`e112`, "h2", parentElement, {}, (parentElement: any) => [
                        this.text('Những câu hỏi thường gặp nhất.')
                    ])
                    ]),
                this.html(`e12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "value-accordion" }] },
                    (parentElement: any) => [
                    this.html(`e121`, "article", parentElement,
                        { classes: [{ type: 'static', value: "value-item" }, { type: 'binding', value: "open", factory: () => openFaq === 0, stateKeys: ["openFaq"] }] },
                        (parentElement: any) => [
                        this.html(`e1211`, "button", parentElement,
                            { events: { click: [(event: any) => setOpenFaq(0)] } },
                            (parentElement: any) => [
                            this.html(`e12111`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('01')
                            ]),
                            this.html(`e12112`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Saola có thay thế Laravel không?')
                            ]),
                            this.html(`e12113`, "i", parentElement, {}, (parentElement: any) => [
                                this.text('+')
                            ])
                            ]),
                        this.reactive(`e121r1`, "if", parentReactive, parentElement, ["openFaq"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (openFaq === 0) {
                                reactiveContents.push(
                                this.html(`e121r1k11`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Không. Saola coi Laravel là nền tảng vững chắc. Eloquent, middleware, policy, queue vẫn giữ nguyên. Saola mang đến hai cải tiến: cách tổ chức mã nguồn (module tự động khai báo, context phân tách môi trường) và cơ chế View (một file '),
                                    this.html(`e121r1k111`, "code", parentElement, {}, (parentElement: any) => [
                                        this.text('.sao')
                                    ]),
                                    this.text(' sinh mã cho cả Server và Client, biến trang web thành SPA sau lần tải đầu tiên).')
                                ])
                                );
                            }
                            return reactiveContents;
                        })
                        ]),
                    this.html(`e122`, "article", parentElement,
                        { classes: [{ type: 'static', value: "value-item" }, { type: 'binding', value: "open", factory: () => openFaq === 1, stateKeys: ["openFaq"] }] },
                        (parentElement: any) => [
                        this.html(`e1221`, "button", parentElement,
                            { events: { click: [(event: any) => setOpenFaq(1)] } },
                            (parentElement: any) => [
                            this.html(`e12211`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('02')
                            ]),
                            this.html(`e12212`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Tôi có phải bỏ các file Blade hiện có không?')
                            ]),
                            this.html(`e12213`, "i", parentElement, {}, (parentElement: any) => [
                                this.text('+')
                            ])
                            ]),
                        this.reactive(`e122r1`, "if", parentReactive, parentElement, ["openFaq"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (openFaq === 1) {
                                reactiveContents.push(
                                this.html(`e122r1k11`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Không. Khi biên dịch, đầu ra phía server của file '),
                                    this.html(`e122r1k111`, "code", parentElement, {}, (parentElement: any) => [
                                        this.text('.sao')
                                    ]),
                                    this.text(' chính là một file Blade template, có thể cùng tồn tại với các view cũ. Bạn có thể chuyển đổi dần từng trang mà không cần đập đi xây lại toàn bộ hệ thống.')
                                ])
                                );
                            }
                            return reactiveContents;
                        })
                        ]),
                    this.html(`e123`, "article", parentElement,
                        { classes: [{ type: 'static', value: "value-item" }, { type: 'binding', value: "open", factory: () => openFaq === 2, stateKeys: ["openFaq"] }] },
                        (parentElement: any) => [
                        this.html(`e1231`, "button", parentElement,
                            { events: { click: [(event: any) => setOpenFaq(2)] } },
                            (parentElement: any) => [
                            this.html(`e12311`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('03')
                            ]),
                            this.html(`e12312`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Đã rành Blade thì học Saola mất bao lâu?')
                            ]),
                            this.html(`e12313`, "i", parentElement, {}, (parentElement: any) => [
                                this.text('+')
                            ])
                            ]),
                        this.reactive(`e123r1`, "if", parentReactive, parentElement, ["openFaq"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (openFaq === 2) {
                                reactiveContents.push(
                                this.html(`e123r1k11`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Cú pháp Saola giữ nguyên hình dạng directive quen thuộc của Blade, nên bạn gần như có thể đọc hiểu ngay lập tức. Điều duy nhất cần nắm thêm là cách khai báo state ở đầu file, các hàm setter tự sinh, và ranh giới giữa giá trị phản ứng (reactive) với giá trị tĩnh.')
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
export function WebModulesHomePartsFaq(__data__ = {}, systemData = {}): FaqView {
    return new FaqView(__data__, systemData);
}
export default WebModulesHomePartsFaq;