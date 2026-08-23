import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.home.about';
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



class AboutViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class AboutView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, AboutViewController);
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
        const set$activeValue = __STATE__.__.register('activeValue');
        let activeValue = 0;
        const setActiveValue = (state) => {
            activeValue = state;
            set$activeValue(state);
        };
        __STATE__.__.setters.setActiveValue = setActiveValue;
        __STATE__.__.setters.activeValue = setActiveValue;
        const update$activeValue = (value) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('activeValue', value);
                activeValue = value;
            }
        };
        const __VARIABLE_LIST__ = [];


        this.__ctrl__.setUserDefinedConfig({

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
            commitConstructorData: function() {
                // Then update states from data
                update$activeValue(0);
                // Finally lock state updates
                lockUpdateRealState();
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
                lockUpdateRealState();
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
            this.block('block-content', 'content', (parentElement) => [
            this.html(`b4052a35`, "section", parentElement,
                { classes: [{ type: 'static', value: "page-intro" }, { type: 'static', value: "page-intro-split" }] },
                (parentElement) => [
                this.html(`90a6e493`, "div", parentElement, {}, (parentElement) => [
                    this.html(`f515bf66`, "p", parentElement,
                        { classes: [{ type: 'static', value: "eyebrow" }] },
                        (parentElement) => [
                        this.html(`e2f86203`, "span", parentElement, {}, (parentElement) => [
                            this.text('PROJECT / SAOLA')
                        ]),
                        this.text(' Vì sao dự án tồn tại')
                        ]),
                    this.html(`9b0938cb`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Web hiện đại không nên'),
                        this.html(`f7127348`, "br", parentElement, {}),
                        this.html(`d4f4199d`, "em", parentElement, {}, (parentElement) => [
                            this.text('đòi hai hệ thống.')
                        ])
                    ])
                ]),
                this.html(`9f45c023`, "p", parentElement, {}, (parentElement) => [
                    this.text('Saola bắt đầu từ một câu hỏi thực dụng: làm sao giữ độ tin cậy và năng suất của Laravel, nhưng vẫn tạo được trải nghiệm ứng dụng nhanh, liên tục và có lifecycle rõ ràng?')
                ])
                ]),
            this.html(`8aa0772c`, "section", parentElement,
                { classes: [{ type: 'static', value: "manifesto-grid" }] },
                (parentElement) => [
                this.html(`301a68fc`, "div", parentElement,
                    { classes: [{ type: 'static', value: "manifesto-number" }] },
                    (parentElement) => [
                    this.text('01—04 / PRINCIPLES')
                    ]),
                this.html(`7f8af112`, "div", parentElement,
                    { classes: [{ type: 'static', value: "value-accordion" }] },
                    (parentElement) => [
                    this.html(`1f6b5560`, "article", parentElement,
                        { classes: [{ type: 'static', value: "value-item" }, { type: 'binding', value: "open", factory: () => activeValue === 0, stateKeys: ["activeValue"] }] },
                        (parentElement) => [
                        this.html(`ff5e7d64`, "button", parentElement,
                            { events: { click: [(event) => setActiveValue(0)] } },
                            (parentElement) => [
                            this.html(`87b2c1c6`, "span", parentElement, {}, (parentElement) => [
                                this.text('01')
                            ]),
                            this.html(`772aefab`, "strong", parentElement, {}, (parentElement) => [
                                this.text('Một nguồn là điều kiện, không phải khẩu hiệu')
                            ]),
                            this.html(`83d2d00c`, "i", parentElement, {}, (parentElement) => [
                                this.text('+')
                            ])
                            ]),
                        this.reactive(`787d96d6`, "if", parentReactive, parentElement, ["activeValue"], (parentReactive, parentElement) => {
                            const reactiveContents = [];
                            if (activeValue === 0) {
                                reactiveContents.push(
                                this.html(`5bd50f04`, "p", parentElement, {}, (parentElement) => [
                                    this.text('Nếu Blade và JavaScript được viết riêng, chúng sẽ lệch nhau. Saola đặt compiler và AST ở giữa để structure, directive, children và marker được sinh từ cùng một view.')
                                ])
                                );
                            }
                            return reactiveContents;
                        })
                        ]),
                    this.html(`e6209cd3`, "article", parentElement,
                        { classes: [{ type: 'static', value: "value-item" }, { type: 'binding', value: "open", factory: () => activeValue === 1, stateKeys: ["activeValue"] }] },
                        (parentElement) => [
                        this.html(`d9283f12`, "button", parentElement,
                            { events: { click: [(event) => setActiveValue(1)] } },
                            (parentElement) => [
                            this.html(`6a26ad34`, "span", parentElement, {}, (parentElement) => [
                                this.text('02')
                            ]),
                            this.html(`54e0b6eb`, "strong", parentElement, {}, (parentElement) => [
                                this.text('Server phải hoàn thành trách nhiệm trước')
                            ]),
                            this.html(`b0246e5b`, "i", parentElement, {}, (parentElement) => [
                                this.text('+')
                            ])
                            ]),
                        this.reactive(`9eb9af90`, "if", parentReactive, parentElement, ["activeValue"], (parentReactive, parentElement) => {
                            const reactiveContents = [];
                            if (activeValue === 1) {
                                reactiveContents.push(
                                this.html(`4606aa95`, "p", parentElement, {}, (parentElement) => [
                                    this.text('Phản hồi đầu tiên phải có nội dung, có cấu trúc và hoạt động như một tài liệu web. Hydration nâng cấp nó thành ứng dụng; hydration không che giấu một server response rỗng.')
                                ])
                                );
                            }
                            return reactiveContents;
                        })
                        ]),
                    this.html(`d548dd48`, "article", parentElement,
                        { classes: [{ type: 'static', value: "value-item" }, { type: 'binding', value: "open", factory: () => activeValue === 2, stateKeys: ["activeValue"] }] },
                        (parentElement) => [
                        this.html(`237c0a46`, "button", parentElement,
                            { events: { click: [(event) => setActiveValue(2)] } },
                            (parentElement) => [
                            this.html(`a953a291`, "span", parentElement, {}, (parentElement) => [
                                this.text('03')
                            ]),
                            this.html(`cbd31918`, "strong", parentElement, {}, (parentElement) => [
                                this.text('Lifecycle phải nhìn thấy được')
                            ]),
                            this.html(`ee477f05`, "i", parentElement, {}, (parentElement) => [
                                this.text('+')
                            ])
                            ]),
                        this.reactive(`6376662d`, "if", parentReactive, parentElement, ["activeValue"], (parentReactive, parentElement) => {
                            const reactiveContents = [];
                            if (activeValue === 2) {
                                reactiveContents.push(
                                this.html(`bcf58435`, "p", parentElement, {}, (parentElement) => [
                                    this.text('Mount, active, pause, resume và destroy là những trạng thái có contract. Event, subscription, async resource và cache phải đi theo owner của chúng.')
                                ])
                                );
                            }
                            return reactiveContents;
                        })
                        ]),
                    this.html(`641beadb`, "article", parentElement,
                        { classes: [{ type: 'static', value: "value-item" }, { type: 'binding', value: "open", factory: () => activeValue === 3, stateKeys: ["activeValue"] }] },
                        (parentElement) => [
                        this.html(`f655ded1`, "button", parentElement,
                            { events: { click: [(event) => setActiveValue(3)] } },
                            (parentElement) => [
                            this.html(`3d9a38c6`, "span", parentElement, {}, (parentElement) => [
                                this.text('04')
                            ]),
                            this.html(`aa413e39`, "strong", parentElement, {}, (parentElement) => [
                                this.text('Đa nền tảng bắt đầu từ context đúng')
                            ]),
                            this.html(`51937053`, "i", parentElement, {}, (parentElement) => [
                                this.text('+')
                            ])
                            ]),
                        this.reactive(`ef215791`, "if", parentReactive, parentElement, ["activeValue"], (parentReactive, parentElement) => {
                            const reactiveContents = [];
                            if (activeValue === 3) {
                                reactiveContents.push(
                                this.html(`edf80019`, "p", parentElement, {}, (parentElement) => [
                                    this.text('Web, admin và mobile có thể dùng route map và registry riêng. Context được resolve theo request để worker dài hạn như Octane không làm rò trạng thái giữa người dùng.')
                                ])
                                );
                            }
                            return reactiveContents;
                        })
                        ])
                    ])
                ]),
            this.html(`6c26f9b7`, "section", parentElement,
                { classes: [{ type: 'static', value: "quote-panel" }] },
                (parentElement) => [
                this.html(`d2bc3963`, "p", parentElement, {}, (parentElement) => [
                    this.text('“Framework đáng tin khi hành vi runtime khớp với cấu trúc mà lập trình viên nhìn thấy trong source.”')
                ]),
                this.html(`b19e2c09`, "span", parentElement, {}, (parentElement) => [
                    this.text('SAOLA DESIGN PRINCIPLE / 2026')
                ])
                ]),
            this.html(`4e212027`, "section", parentElement,
                { classes: [{ type: 'static', value: "closing-cta" }] },
                (parentElement) => [
                this.html(`8ef866a8`, "h2", parentElement, {}, (parentElement) => [
                    this.text('Xem các nguyên tắc này chạy trên một route thật.')
                ]),
                this.html(`8f1c0163`, "a", parentElement,
                    { classes: [{ type: 'static', value: "button" }, { type: 'static', value: "button-primary" }], attrs: { "href": { type: 'static', value: "/todo-list" } } },
                    (parentElement) => [
                    this.text('Mở interactive demo '),
                    this.html(`4f37196e`, "span", parentElement, {}, (parentElement) => [
                        this.text('↗')
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
export function WebModulesHomeAbout(__data__ = {}, systemData = {}) {
    return new AboutView(__data__, systemData);
}
export default WebModulesHomeAbout;
