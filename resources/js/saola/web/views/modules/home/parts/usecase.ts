import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.home.parts.usecase';
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



    if (typeof window !== 'undefined') {
        let initInterval = setInterval(() => {
            let container = document.querySelector('.usecase-tab-container');
            if (container) {
                clearInterval(initInterval);
                let tabs = document.querySelectorAll('.usecase-tab-item');
                let slideInterval;
                const start = () => {
                    clearInterval(slideInterval);
                    slideInterval = setInterval(() => {
                        let active = document.querySelector('.usecase-tab-item.active');
                        let index = Array.from(tabs).indexOf(active);
                        if (index === -1) index = 0;
                        let next = (index + 1) % tabs.length;
                        if (tabs[next]) tabs[next].click();
                    }, 10000);
                };
                start();
                container.addEventListener('mouseenter', () => clearInterval(slideInterval));
                container.addEventListener('mouseleave', start);
            }
        }, 100);
    }



/**
 * Props của view — sinh tự động từ @props/@vars, không sửa tay.
 * Optional hết vì khai báo nào cũng có default.
 */
export interface UsecaseProps {
    /** viewId server gán khi hydrate */
    __SSR_VIEW_ID__?: string;
    [key: string]: any;
}

class UsecaseViewController extends ViewController {
    constructor(view: View) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this as any).setStaticConfig === 'function') {
            (this as any).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this as any).config = __VIEW_CONFIG__;
        }
    }
}

class UsecaseView extends View {
    constructor(__data__: UsecaseProps = {}, systemData: any = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, UsecaseViewController);
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
        const set$activeUsecase = __STATE__.__.register('activeUsecase');
        let activeUsecase: any = 0;
        const setActiveUsecase = (state: any) => {
            activeUsecase = state;
            set$activeUsecase(state);
        };
        __STATE__.__.setters.setActiveUsecase = setActiveUsecase;
        __STATE__.__.setters.activeUsecase = setActiveUsecase;
        const update$activeUsecase = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('activeUsecase', value);
                activeUsecase = value;
            }
        };
        const __VARIABLE_LIST__: any = [];


        this.__ctrl__.setUserDefinedConfig({
            name: 'HomeUsecase'
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
                update$activeUsecase(0);
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
                { classes: [{ type: 'static', value: "home-section" }], attrs: { "id": { type: 'static', value: "usecase" } } },
                (parentElement: any) => [
                this.html(`88b70a58`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }, { type: 'static', value: "section-head-split" }] },
                    (parentElement: any) => [
                    this.html(`4f95a176`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`dd8c47b3`, "p", parentElement,
                            { classes: [{ type: 'static', value: "kicker" }] },
                            (parentElement: any) => [
                            this.html(`d0f3467d`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('DÀNH CHO AI')
                            ]),
                            this.text(' Hợp và chưa hợp')
                            ]),
                        this.html(`3f75a3fd`, "h2", parentElement, {}, (parentElement: any) => [
                            this.text('Saola hợp nhất'),
                            this.html(`d78bb666`, "br", parentElement, {}),
                            this.text('với bốn tình huống này.')
                        ])
                    ]),
                    this.html(`a485d755`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Nếu đội bạn đã đứng vững trên Laravel và đang cân nhắc thêm một frontend riêng, đây đúng là chỗ Saola tiết kiệm nhiều nhất.')
                    ])
                    ]),
                this.html(`b545b1d4`, "div", parentElement,
                    { classes: [{ type: 'static', value: "usecase-tab-container" }] },
                    (parentElement: any) => [
                    this.html(`7a4da8ba`, "div", parentElement,
                        { classes: [{ type: 'static', value: "usecase-tab-list" }] },
                        (parentElement: any) => [
                        this.html(`c15321c6`, "button", parentElement,
                            { classes: [{ type: 'static', value: "usecase-tab-item" }, { type: 'binding', value: "active", factory: () => activeUsecase === 0, stateKeys: ["activeUsecase"] }], events: { click: [(event: any) => setActiveUsecase(0)] } },
                            (parentElement: any) => [
                            this.html(`8a519fb2`, "span", parentElement,
                                { classes: [{ type: 'static', value: "tab-num" }] },
                                (parentElement: any) => [
                                this.text('01')
                                ]),
                            this.html(`16d5bbfd`, "div", parentElement,
                                { classes: [{ type: 'static', value: "tab-content" }] },
                                (parentElement: any) => [
                                this.html(`08935942`, "h3", parentElement, {}, (parentElement: any) => [
                                    this.text('Ứng dụng nội bộ & admin panel')
                                ]),
                                this.html(`25195ca5`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Bảng dữ liệu, form nhiều bước, phân quyền theo vai trò. Cần tương tác mượt nhưng không cần đánh đổi bằng một frontend tách rời.')
                                ])
                                ])
                            ]),
                        this.html(`49064955`, "button", parentElement,
                            { classes: [{ type: 'static', value: "usecase-tab-item" }, { type: 'binding', value: "active", factory: () => activeUsecase === 1, stateKeys: ["activeUsecase"] }], events: { click: [(event: any) => setActiveUsecase(1)] } },
                            (parentElement: any) => [
                            this.html(`87dc84e8`, "span", parentElement,
                                { classes: [{ type: 'static', value: "tab-num" }] },
                                (parentElement: any) => [
                                this.text('02')
                                ]),
                            this.html(`8895af15`, "div", parentElement,
                                { classes: [{ type: 'static', value: "tab-content" }] },
                                (parentElement: any) => [
                                this.html(`2b0685e2`, "h3", parentElement, {}, (parentElement: any) => [
                                    this.text('Sản phẩm cần cả SEO lẫn tương tác')
                                ]),
                                this.html(`5b9468e7`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Trang danh mục, chi tiết sản phẩm, blog có bộ lọc. Crawler nhận HTML đầy đủ; người dùng nhận trải nghiệm không tải lại trang.')
                                ])
                                ])
                            ]),
                        this.html(`dd101095`, "button", parentElement,
                            { classes: [{ type: 'static', value: "usecase-tab-item" }, { type: 'binding', value: "active", factory: () => activeUsecase === 2, stateKeys: ["activeUsecase"] }], events: { click: [(event: any) => setActiveUsecase(2)] } },
                            (parentElement: any) => [
                            this.html(`5b68264c`, "span", parentElement,
                                { classes: [{ type: 'static', value: "tab-num" }] },
                                (parentElement: any) => [
                                this.text('03')
                                ]),
                            this.html(`ea51b5a3`, "div", parentElement,
                                { classes: [{ type: 'static', value: "tab-content" }] },
                                (parentElement: any) => [
                                this.html(`c54f9245`, "h3", parentElement, {}, (parentElement: any) => [
                                    this.text('Nhiều mặt tiền trên một backend')
                                ]),
                                this.html(`b2af0475`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Web công khai, admin, webview mobile và api dùng chung model, policy và service layer nhưng tách route, middleware lẫn bundle.')
                                ])
                                ])
                            ]),
                        this.html(`19fc2e6c`, "button", parentElement,
                            { classes: [{ type: 'static', value: "usecase-tab-item" }, { type: 'binding', value: "active", factory: () => activeUsecase === 3, stateKeys: ["activeUsecase"] }], events: { click: [(event: any) => setActiveUsecase(3)] } },
                            (parentElement: any) => [
                            this.html(`ea5e325f`, "span", parentElement,
                                { classes: [{ type: 'static', value: "tab-num" }] },
                                (parentElement: any) => [
                                this.text('04')
                                ]),
                            this.html(`f536b2ed`, "div", parentElement,
                                { classes: [{ type: 'static', value: "tab-content" }] },
                                (parentElement: any) => [
                                this.html(`2ce36924`, "h3", parentElement, {}, (parentElement: any) => [
                                    this.text('Đội Laravel muốn SPA mà không đổi nghề')
                                ]),
                                this.html(`6c2eca8e`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Eloquent, middleware, policy, queue giữ nguyên. Phần mới cần học là cú pháp view và cách state chảy — không phải một hệ sinh thái build khác.')
                                ])
                                ])
                            ])
                        ]),
                    this.html(`b9e7f621`, "div", parentElement,
                        { classes: [{ type: 'static', value: "usecase-tab-panel" }] },
                        (parentElement: any) => [
                        this.reactive(`b1e07ada`, "if", parentReactive, parentElement, ["activeUsecase"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (activeUsecase === 0) {
                                reactiveContents.push(
                                this.html(`5b89913d`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "usecase-mockup" }, { type: 'static', value: "mockup-admin" }] },
                                    (parentElement: any) => [
                                    this.html(`13d8c77e`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "mockup-header" }] },
                                        (parentElement: any) => [
                                        this.html(`e685f513`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "dots" }] },
                                            (parentElement: any) => [
                                            this.html(`000ecdc2`, "i", parentElement, {}),
                                            this.html(`696340be`, "i", parentElement, {}),
                                            this.html(`6b3d26d1`, "i", parentElement, {})
                                            ]),
                                        this.html(`8e84ed95`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "title" }] },
                                            (parentElement: any) => [
                                            this.text('User Management')
                                            ])
                                        ]),
                                    this.html(`13df5404`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "mockup-body" }] },
                                        (parentElement: any) => [
                                        this.html(`f4159abf`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "mockup-toolbar" }] },
                                            (parentElement: any) => [
                                            this.html(`d180fd70`, "div", parentElement,
                                                { classes: [{ type: 'static', value: "mockup-search" }] },
                                                (parentElement: any) => [
                                                this.text('🔍 Search users...')
                                                ]),
                                            this.html(`9253c458`, "div", parentElement,
                                                { classes: [{ type: 'static', value: "mockup-btn" }] },
                                                (parentElement: any) => [
                                                this.text('Add New')
                                                ])
                                            ]),
                                        this.html(`f69380d2`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "mockup-table" }] },
                                            (parentElement: any) => [
                                            this.html(`4cb6dadf`, "div", parentElement,
                                                { classes: [{ type: 'static', value: "mockup-tr" }, { type: 'static', value: "head" }] },
                                                (parentElement: any) => [
                                                this.html(`635c9862`, "span", parentElement, {}, (parentElement: any) => [
                                                    this.text('Name')
                                                ]),
                                                this.html(`e1fd29ca`, "span", parentElement, {}, (parentElement: any) => [
                                                    this.text('Role')
                                                ]),
                                                this.html(`6dcfa21d`, "span", parentElement, {}, (parentElement: any) => [
                                                    this.text('Status')
                                                ]),
                                                this.html(`c545d225`, "span", parentElement, {}, (parentElement: any) => [
                                                    this.text('Action')
                                                ])
                                                ]),
                                            this.html(`03f2b8d3`, "div", parentElement,
                                                { classes: [{ type: 'static', value: "mockup-tr" }] },
                                                (parentElement: any) => [
                                                this.html(`9c34dc7f`, "span", parentElement, {}, (parentElement: any) => [
                                                    this.text('John Doe')
                                                ]),
                                                this.html(`14cf525a`, "span", parentElement, {}, (parentElement: any) => [
                                                    this.text('Admin')
                                                ]),
                                                this.html(`37ac4eca`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "badge" }, { type: 'static', value: "active" }] },
                                                    (parentElement: any) => [
                                                    this.text('Active')
                                                    ]),
                                                this.html(`4847441f`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "action" }] },
                                                    (parentElement: any) => [
                                                    this.text('Edit')
                                                    ])
                                                ]),
                                            this.html(`1be13736`, "div", parentElement,
                                                { classes: [{ type: 'static', value: "mockup-tr" }] },
                                                (parentElement: any) => [
                                                this.html(`fb2acca4`, "span", parentElement, {}, (parentElement: any) => [
                                                    this.text('Jane Smith')
                                                ]),
                                                this.html(`f4529ffa`, "span", parentElement, {}, (parentElement: any) => [
                                                    this.text('Editor')
                                                ]),
                                                this.html(`4a46a229`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "badge" }, { type: 'static', value: "inactive" }] },
                                                    (parentElement: any) => [
                                                    this.text('Inactive')
                                                    ]),
                                                this.html(`29d6618e`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "action" }] },
                                                    (parentElement: any) => [
                                                    this.text('Edit')
                                                    ])
                                                ]),
                                            this.html(`72c64b5f`, "div", parentElement,
                                                { classes: [{ type: 'static', value: "mockup-tr" }] },
                                                (parentElement: any) => [
                                                this.html(`8bc19666`, "span", parentElement, {}, (parentElement: any) => [
                                                    this.text('Mike Ross')
                                                ]),
                                                this.html(`b2f4b28e`, "span", parentElement, {}, (parentElement: any) => [
                                                    this.text('User')
                                                ]),
                                                this.html(`fccac5cc`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "badge" }, { type: 'static', value: "active" }] },
                                                    (parentElement: any) => [
                                                    this.text('Active')
                                                    ]),
                                                this.html(`eef8b83f`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "action" }] },
                                                    (parentElement: any) => [
                                                    this.text('Edit')
                                                    ])
                                                ])
                                            ])
                                        ])
                                    ])
                                );
                            }
                            return reactiveContents;
                        }),
                        this.reactive(`988feaec`, "if", parentReactive, parentElement, ["activeUsecase"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (activeUsecase === 1) {
                                reactiveContents.push(
                                this.html(`570a9d4a`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "usecase-mockup" }, { type: 'static', value: "mockup-shop" }] },
                                    (parentElement: any) => [
                                    this.html(`f37655d8`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "mockup-header" }] },
                                        (parentElement: any) => [
                                        this.html(`a83b8f69`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "dots" }] },
                                            (parentElement: any) => [
                                            this.html(`1f7646c3`, "i", parentElement, {}),
                                            this.html(`529dd844`, "i", parentElement, {}),
                                            this.html(`94a13caf`, "i", parentElement, {})
                                            ]),
                                        this.html(`ccc3732b`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "title" }] },
                                            (parentElement: any) => [
                                            this.text('Shop / Laptops')
                                            ])
                                        ]),
                                    this.html(`8dd4d8bd`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "mockup-body" }, { type: 'static', value: "layout-split" }] },
                                        (parentElement: any) => [
                                        this.html(`402642a8`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "mockup-sidebar" }] },
                                            (parentElement: any) => [
                                            this.html(`57b2372f`, "b", parentElement, {}, (parentElement: any) => [
                                                this.text('Filters')
                                            ]),
                                            this.html(`66823537`, "ul", parentElement, {}, (parentElement: any) => [
                                                this.html(`ba258583`, "li", parentElement, {}, (parentElement: any) => [
                                                    this.html(`5735b3d3`, "input", parentElement, { attrs: { "type": { type: 'static', value: "checkbox" }, "checked": { type: 'static', value: true } } }),
                                                    this.text(' Apple (12)')
                                                ]),
                                                this.html(`a1e5eca2`, "li", parentElement, {}, (parentElement: any) => [
                                                    this.html(`6e06ef78`, "input", parentElement, { attrs: { "type": { type: 'static', value: "checkbox" } } }),
                                                    this.text(' Dell (8)')
                                                ]),
                                                this.html(`33c2f43a`, "li", parentElement, {}, (parentElement: any) => [
                                                    this.html(`3286fed3`, "input", parentElement, { attrs: { "type": { type: 'static', value: "checkbox" } } }),
                                                    this.text(' HP (15)')
                                                ])
                                            ]),
                                            this.html(`f95f8d3b`, "b", parentElement, {}, (parentElement: any) => [
                                                this.text('Price')
                                            ]),
                                            this.html(`f9ad95b0`, "div", parentElement, { classes: [{ type: 'static', value: "mockup-range" }] })
                                            ]),
                                        this.html(`12d8c83b`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "mockup-grid" }] },
                                            (parentElement: any) => [
                                            this.html(`0caabca7`, "div", parentElement,
                                                { classes: [{ type: 'static', value: "mockup-product" }] },
                                                (parentElement: any) => [
                                                this.html(`a0b6fd81`, "div", parentElement, { classes: [{ type: 'static', value: "img" }] }),
                                                this.html(`1d7a782a`, "div", parentElement,
                                                    { classes: [{ type: 'static', value: "name" }] },
                                                    (parentElement: any) => [
                                                    this.text('MacBook Pro 16"')
                                                    ]),
                                                this.html(`7ac97c16`, "div", parentElement,
                                                    { classes: [{ type: 'static', value: "price" }] },
                                                    (parentElement: any) => [
                                                    this.text('$2,499')
                                                    ])
                                                ]),
                                            this.html(`66c30473`, "div", parentElement,
                                                { classes: [{ type: 'static', value: "mockup-product" }] },
                                                (parentElement: any) => [
                                                this.html(`166edb2e`, "div", parentElement, { classes: [{ type: 'static', value: "img" }] }),
                                                this.html(`055a3ff9`, "div", parentElement,
                                                    { classes: [{ type: 'static', value: "name" }] },
                                                    (parentElement: any) => [
                                                    this.text('MacBook Air M2')
                                                    ]),
                                                this.html(`81318e8d`, "div", parentElement,
                                                    { classes: [{ type: 'static', value: "price" }] },
                                                    (parentElement: any) => [
                                                    this.text('$1,199')
                                                    ])
                                                ])
                                            ])
                                        ])
                                    ])
                                );
                            }
                            return reactiveContents;
                        }),
                        this.reactive(`bf0c77e1`, "if", parentReactive, parentElement, ["activeUsecase"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (activeUsecase === 2) {
                                reactiveContents.push(
                                this.html(`e409013b`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "usecase-mockup" }, { type: 'static', value: "mockup-code" }] },
                                    (parentElement: any) => [
                                    this.html(`3c204ca4`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "mockup-header" }] },
                                        (parentElement: any) => [
                                        this.html(`25e910ae`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "dots" }] },
                                            (parentElement: any) => [
                                            this.html(`aaac4894`, "i", parentElement, {}),
                                            this.html(`51fc7f77`, "i", parentElement, {}),
                                            this.html(`fc469927`, "i", parentElement, {})
                                            ]),
                                        this.html(`80431145`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "title" }] },
                                            (parentElement: any) => [
                                            this.text('Project Structure')
                                            ])
                                        ]),
                                    this.html(`62f331e5`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "mockup-body" }] },
                                        (parentElement: any) => [
                                        this.html(`0e3dae4f`, "ul", parentElement,
                                            { classes: [{ type: 'static', value: "tree" }] },
                                            (parentElement: any) => [
                                            this.html(`c0ac4cde`, "li", parentElement, {}, (parentElement: any) => [
                                                this.text('📁 '),
                                                this.html(`ed51451c`, "b", parentElement, {}, (parentElement: any) => [
                                                    this.text('app')
                                                ]),
                                                this.html(`d5f9caf1`, "ul", parentElement, {}, (parentElement: any) => [
                                                    this.html(`df7a8b8c`, "li", parentElement, {}, (parentElement: any) => [
                                                        this.text('📁 '),
                                                        this.html(`12464667`, "b", parentElement, {}, (parentElement: any) => [
                                                            this.text('Models')
                                                        ]),
                                                        this.html(`7de436da`, "i", parentElement, {}, (parentElement: any) => [
                                                            this.text('(Shared)')
                                                        ]),
                                                        this.html(`9cd9b7c8`, "ul", parentElement, {}, (parentElement: any) => [
                                                            this.html(`d9083f47`, "li", parentElement, {}, (parentElement: any) => [
                                                                this.text('📄 User.php')
                                                            ]),
                                                            this.html(`711c126e`, "li", parentElement, {}, (parentElement: any) => [
                                                                this.text('📄 Order.php')
                                                            ])
                                                        ])
                                                    ])
                                                ])
                                            ]),
                                            this.html(`24e41dfd`, "li", parentElement, {}, (parentElement: any) => [
                                                this.text('📁 '),
                                                this.html(`54f7a678`, "b", parentElement, {}, (parentElement: any) => [
                                                    this.text('routes')
                                                ]),
                                                this.html(`70ffb602`, "ul", parentElement, {}, (parentElement: any) => [
                                                    this.html(`728c045e`, "li", parentElement, {}, (parentElement: any) => [
                                                        this.text('📄 web.php '),
                                                        this.html(`74290c34`, "i", parentElement, {}, (parentElement: any) => [
                                                            this.text('(Public site)')
                                                        ])
                                                    ]),
                                                    this.html(`52c6fa95`, "li", parentElement, {}, (parentElement: any) => [
                                                        this.text('📄 admin.php '),
                                                        this.html(`826b18f9`, "i", parentElement, {}, (parentElement: any) => [
                                                            this.text('(Admin panel)')
                                                        ])
                                                    ]),
                                                    this.html(`14ed3270`, "li", parentElement, {}, (parentElement: any) => [
                                                        this.text('📄 api.php '),
                                                        this.html(`e9f450ff`, "i", parentElement, {}, (parentElement: any) => [
                                                            this.text('(Mobile app)')
                                                        ])
                                                    ])
                                                ])
                                            ]),
                                            this.html(`e8cf1868`, "li", parentElement, {}, (parentElement: any) => [
                                                this.text('📁 '),
                                                this.html(`59447211`, "b", parentElement, {}, (parentElement: any) => [
                                                    this.text('resources/saola')
                                                ]),
                                                this.html(`2778358a`, "ul", parentElement, {}, (parentElement: any) => [
                                                    this.html(`4d6f2624`, "li", parentElement, {}, (parentElement: any) => [
                                                        this.text('📁 web '),
                                                        this.html(`483de94a`, "i", parentElement, {}, (parentElement: any) => [
                                                            this.text('(Bundle 1)')
                                                        ])
                                                    ]),
                                                    this.html(`54601253`, "li", parentElement, {}, (parentElement: any) => [
                                                        this.text('📁 admin '),
                                                        this.html(`f91aa148`, "i", parentElement, {}, (parentElement: any) => [
                                                            this.text('(Bundle 2)')
                                                        ])
                                                    ]),
                                                    this.html(`532855b6`, "li", parentElement, {}, (parentElement: any) => [
                                                        this.text('📁 mobile '),
                                                        this.html(`d4a6587e`, "i", parentElement, {}, (parentElement: any) => [
                                                            this.text('(Bundle 3)')
                                                        ])
                                                    ])
                                                ])
                                            ])
                                            ])
                                        ])
                                    ])
                                );
                            }
                            return reactiveContents;
                        }),
                        this.reactive(`fc563741`, "if", parentReactive, parentElement, ["activeUsecase"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (activeUsecase === 3) {
                                reactiveContents.push(
                                this.html(`fe38a0c8`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "usecase-mockup" }, { type: 'static', value: "mockup-code" }] },
                                    (parentElement: any) => [
                                    this.html(`c967851e`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "mockup-header" }] },
                                        (parentElement: any) => [
                                        this.html(`c8fead6a`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "dots" }] },
                                            (parentElement: any) => [
                                            this.html(`0f3d473b`, "i", parentElement, {}),
                                            this.html(`9647a94a`, "i", parentElement, {}),
                                            this.html(`7241608a`, "i", parentElement, {})
                                            ]),
                                        this.html(`b174118e`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "title" }] },
                                            (parentElement: any) => [
                                            this.text('counter.sao')
                                            ])
                                        ]),
                                    this.html(`17daed71`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "mockup-body" }] },
                                        (parentElement: any) => [
                                        this.html(`0b59f1a5`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "mockup-code-lines" }], attrs: { "style": { type: 'static', value: "font-family: monospace; font-size: 13px; line-height: 1.6;" } } },
                                            (parentElement: any) => [
                                            this.html(`a54ba860`, "div", parentElement,
                                                { attrs: { "style": { type: 'static', value: "display: block;" } } },
                                                (parentElement: any) => [
                                                this.html(`c49d900e`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "keyword" }] },
                                                    (parentElement: any) => [
                                                    this.html(`51ef89cc`, "span", parentElement, {}, (parentElement: any) => [
                                                        this.text('@')
                                                    ]),
                                                    this.text('states')
                                                    ]),
                                                this.html(`d4764df2`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "punctuation" }] },
                                                    (parentElement: any) => [
                                                    this.text('({')
                                                    ]),
                                                this.html(`91645685`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "property" }], attrs: { "style": { type: 'static', value: "margin-left: 0.5em;" } } },
                                                    (parentElement: any) => [
                                                    this.text('count')
                                                    ]),
                                                this.html(`721e12a5`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "punctuation" }] },
                                                    (parentElement: any) => [
                                                    this.text(':')
                                                    ]),
                                                this.html(`80ea51d4`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "number" }], attrs: { "style": { type: 'static', value: "margin-left: 0.5em;" } } },
                                                    (parentElement: any) => [
                                                    this.text('0')
                                                    ]),
                                                this.html(`0d81341d`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "punctuation" }], attrs: { "style": { type: 'static', value: "margin-left: 0.5em;" } } },
                                                    (parentElement: any) => [
                                                    this.text('})')
                                                    ])
                                                ]),
                                            this.html(`003b36ae`, "div", parentElement, { attrs: { "style": { type: 'static', value: "display: block; min-height: 1.6em;" } } }),
                                            this.html(`5489b46e`, "div", parentElement,
                                                { attrs: { "style": { type: 'static', value: "display: block;" } } },
                                                (parentElement: any) => [
                                                this.html(`24233f2a`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "tag" }] },
                                                    (parentElement: any) => [
                                                    this.text('<template>')
                                                    ])
                                                ]),
                                            this.html(`8f06dadd`, "div", parentElement,
                                                { attrs: { "style": { type: 'static', value: "display: block; padding-left: 2em;" } } },
                                                (parentElement: any) => [
                                                this.html(`128944d7`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "tag" }] },
                                                    (parentElement: any) => [
                                                    this.text('<div>')
                                                    ])
                                                ]),
                                            this.html(`0090d76f`, "div", parentElement,
                                                { attrs: { "style": { type: 'static', value: "display: block; padding-left: 4em;" } } },
                                                (parentElement: any) => [
                                                this.html(`1bf08574`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "tag" }] },
                                                    (parentElement: any) => [
                                                    this.text('<h3>')
                                                    ]),
                                                this.text('Count:'),
                                                this.html(`618d6d7a`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "punctuation" }], attrs: { "style": { type: 'static', value: "margin-left: 0.5em;" } } },
                                                    (parentElement: any) => [
                                                    this.html(`fae39795`, "span", parentElement, {}, (parentElement: any) => [
                                                        this.text('{')
                                                    ]),
                                                    this.text('{')
                                                    ]),
                                                this.html(`e3673c09`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "property" }], attrs: { "style": { type: 'static', value: "margin-left: 0.5em;" } } },
                                                    (parentElement: any) => [
                                                    this.text('count')
                                                    ]),
                                                this.html(`daa58726`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "punctuation" }], attrs: { "style": { type: 'static', value: "margin-left: 0.5em;" } } },
                                                    (parentElement: any) => [
                                                    this.text('}'),
                                                    this.html(`09c1f8e8`, "span", parentElement, {}, (parentElement: any) => [
                                                        this.text('}')
                                                    ])
                                                    ]),
                                                this.html(`9dfe3a9d`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "tag" }] },
                                                    (parentElement: any) => [
                                                    this.text('</h3>')
                                                    ])
                                                ]),
                                            this.html(`e75fd203`, "div", parentElement,
                                                { attrs: { "style": { type: 'static', value: "display: block; padding-left: 4em;" } } },
                                                (parentElement: any) => [
                                                this.html(`481b1d21`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "tag" }] },
                                                    (parentElement: any) => [
                                                    this.text('<button')
                                                    ]),
                                                this.html(`7e385928`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "attr-name" }], attrs: { "style": { type: 'static', value: "margin-left: 0.5em;" } } },
                                                    (parentElement: any) => [
                                                    this.html(`3ae27231`, "span", parentElement, {}, (parentElement: any) => [
                                                        this.text('@')
                                                    ]),
                                                    this.text('click')
                                                    ]),
                                                this.html(`4484c179`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "punctuation" }] },
                                                    (parentElement: any) => [
                                                    this.text('(')
                                                    ]),
                                                this.html(`223dd67e`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "function" }] },
                                                    (parentElement: any) => [
                                                    this.text('setCount')
                                                    ]),
                                                this.html(`97459053`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "punctuation" }] },
                                                    (parentElement: any) => [
                                                    this.text('(')
                                                    ]),
                                                this.html(`2603cd5d`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "property" }] },
                                                    (parentElement: any) => [
                                                    this.text('count')
                                                    ]),
                                                this.html(`bdb12299`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "operator" }], attrs: { "style": { type: 'static', value: "margin-left: 0.5em;" } } },
                                                    (parentElement: any) => [
                                                    this.text('+')
                                                    ]),
                                                this.html(`d1f33929`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "number" }], attrs: { "style": { type: 'static', value: "margin-left: 0.5em;" } } },
                                                    (parentElement: any) => [
                                                    this.text('1')
                                                    ]),
                                                this.html(`faee9cba`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "punctuation" }] },
                                                    (parentElement: any) => [
                                                    this.text('))')
                                                    ]),
                                                this.html(`15d8974c`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "tag" }] },
                                                    (parentElement: any) => [
                                                    this.text('>')
                                                    ]),
                                                this.text('+'),
                                                this.html(`fd44eb46`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "tag" }] },
                                                    (parentElement: any) => [
                                                    this.text('</button>')
                                                    ])
                                                ]),
                                            this.html(`77be8e68`, "div", parentElement, { attrs: { "style": { type: 'static', value: "display: block; min-height: 1.6em;" } } }),
                                            this.html(`9dcda990`, "div", parentElement,
                                                { attrs: { "style": { type: 'static', value: "display: block; padding-left: 4em;" } } },
                                                (parentElement: any) => [
                                                this.html(`c6ec6f7a`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "keyword" }] },
                                                    (parentElement: any) => [
                                                    this.html(`ad0721ff`, "span", parentElement, {}, (parentElement: any) => [
                                                        this.text('@')
                                                    ]),
                                                    this.text('if')
                                                    ]),
                                                this.html(`3e095f18`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "punctuation" }] },
                                                    (parentElement: any) => [
                                                    this.text('(')
                                                    ]),
                                                this.html(`46fc64a1`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "property" }] },
                                                    (parentElement: any) => [
                                                    this.text('count')
                                                    ]),
                                                this.html(`b3470cca`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "operator" }], attrs: { "style": { type: 'static', value: "margin-left: 0.5em;" } } },
                                                    (parentElement: any) => [
                                                    this.text('>')
                                                    ]),
                                                this.html(`450e4426`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "number" }], attrs: { "style": { type: 'static', value: "margin-left: 0.5em;" } } },
                                                    (parentElement: any) => [
                                                    this.text('10')
                                                    ]),
                                                this.html(`fbdb1734`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "punctuation" }] },
                                                    (parentElement: any) => [
                                                    this.text(')')
                                                    ])
                                                ]),
                                            this.html(`789e7a29`, "div", parentElement,
                                                { attrs: { "style": { type: 'static', value: "display: block; padding-left: 6em;" } } },
                                                (parentElement: any) => [
                                                this.html(`8ffbfe5b`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "tag" }] },
                                                    (parentElement: any) => [
                                                    this.text('<p>')
                                                    ]),
                                                this.text('You clicked many times!'),
                                                this.html(`32c5c445`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "tag" }] },
                                                    (parentElement: any) => [
                                                    this.text('</p>')
                                                    ])
                                                ]),
                                            this.html(`1f0afe5e`, "div", parentElement,
                                                { attrs: { "style": { type: 'static', value: "display: block; padding-left: 4em;" } } },
                                                (parentElement: any) => [
                                                this.html(`c1375690`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "keyword" }] },
                                                    (parentElement: any) => [
                                                    this.html(`408c85c1`, "span", parentElement, {}, (parentElement: any) => [
                                                        this.text('@')
                                                    ]),
                                                    this.text('endif')
                                                    ])
                                                ]),
                                            this.html(`0e836a94`, "div", parentElement,
                                                { attrs: { "style": { type: 'static', value: "display: block; padding-left: 2em;" } } },
                                                (parentElement: any) => [
                                                this.html(`1c18b56f`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "tag" }] },
                                                    (parentElement: any) => [
                                                    this.text('</div>')
                                                    ])
                                                ]),
                                            this.html(`428b7502`, "div", parentElement,
                                                { attrs: { "style": { type: 'static', value: "display: block;" } } },
                                                (parentElement: any) => [
                                                this.html(`84321385`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "tag" }] },
                                                    (parentElement: any) => [
                                                    this.text('</template>')
                                                    ])
                                                ])
                                            ])
                                        ])
                                    ])
                                );
                            }
                            return reactiveContents;
                        })
                        ])
                    ]),
                this.html(`c882ec26`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }, { type: 'static', value: "ov-note--warn" }], attrs: { "style": { type: 'static', value: "margin-top: 30px;" } } },
                    (parentElement: any) => [
                    this.html(`afe5ed63`, "strong", parentElement, {}, (parentElement: any) => [
                        this.text('Chưa hợp khi:')
                    ]),
                    this.text(' bạn cần một hệ sinh thái component bên thứ ba khổng lồ ngay hôm nay, hoặc đội đã chạy tốt trên React/Vue với đầy đủ tooling và người quen việc. Trong hai trường hợp đó, chi phí chuyển sang Saola lớn hơn cái nó tiết kiệm.')
                    ])
                ])
            ]);
            }
        });

    }
}

// Export factory function
export function WebModulesHomePartsUsecase(__data__: UsecaseProps = {}, systemData: any = {}): UsecaseView {
    return new UsecaseView(__data__, systemData);
}
export default WebModulesHomePartsUsecase;
