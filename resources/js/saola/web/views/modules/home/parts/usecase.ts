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

/**
 * Props của view — sinh tự động từ @props/@vars, không sửa tay.
 * Optional hết vì khai báo nào cũng có default.
 */
export interface UsecaseProps {
    /** viewId server gán khi hydrate */
    __SSR_VIEW_ID__?: string;
    [key: string]: any;
}



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
    constructor(__data__: any = {}, systemData: any = {}) {
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
            this.html(`e1`, "section", parentElement,
                { classes: [{ type: 'static', value: "home-section" }], attrs: { "id": { type: 'static', value: "usecase" } } },
                (parentElement: any) => [
                this.html(`e11`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }, { type: 'static', value: "section-head-split" }] },
                    (parentElement: any) => [
                    this.html(`e111`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`e1111`, "p", parentElement,
                            { classes: [{ type: 'static', value: "kicker" }] },
                            (parentElement: any) => [
                            this.html(`e11111`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('DÀNH CHO AI')
                            ]),
                            this.text(' Phù hợp và chưa phù hợp')
                            ]),
                        this.html(`e1112`, "h2", parentElement, {}, (parentElement: any) => [
                            this.text('Bốn kịch bản hoàn hảo'),
                            this.html(`e11121`, "br", parentElement, {}),
                            this.text('để chọn Saola.')
                        ])
                    ]),
                    this.html(`e112`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Nếu dự án của bạn đã có nền móng vững chắc với Laravel và đang tìm kiếm trải nghiệm frontend mượt mà như SPA nhưng không muốn gánh vác độ phức tạp của một hệ thống tách rời, Saola chính là lựa chọn tối ưu.')
                    ])
                    ]),
                this.html(`e12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "usecase-tab-container" }] },
                    (parentElement: any) => [
                    this.html(`e121`, "div", parentElement,
                        { classes: [{ type: 'static', value: "usecase-tab-list" }] },
                        (parentElement: any) => [
                        this.html(`e1211`, "button", parentElement,
                            { classes: [{ type: 'static', value: "usecase-tab-item" }, { type: 'binding', value: "active", factory: () => activeUsecase === 0, stateKeys: ["activeUsecase"] }], events: { click: [(event: any) => setActiveUsecase(0)] } },
                            (parentElement: any) => [
                            this.html(`e12111`, "span", parentElement,
                                { classes: [{ type: 'static', value: "tab-num" }] },
                                (parentElement: any) => [
                                this.text('01')
                                ]),
                            this.html(`e12112`, "div", parentElement,
                                { classes: [{ type: 'static', value: "tab-content" }] },
                                (parentElement: any) => [
                                this.html(`e121121`, "h3", parentElement, {}, (parentElement: any) => [
                                    this.text('Ứng dụng nội bộ & Admin Panel')
                                ]),
                                this.html(`e121122`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Bảng dữ liệu phức tạp, form nhiều bước, phân quyền theo vai trò. Cần tốc độ tương tác cao mà không phải xây dựng API và Frontend riêng biệt.')
                                ])
                                ])
                            ]),
                        this.html(`e1212`, "button", parentElement,
                            { classes: [{ type: 'static', value: "usecase-tab-item" }, { type: 'binding', value: "active", factory: () => activeUsecase === 1, stateKeys: ["activeUsecase"] }], events: { click: [(event: any) => setActiveUsecase(1)] } },
                            (parentElement: any) => [
                            this.html(`e12121`, "span", parentElement,
                                { classes: [{ type: 'static', value: "tab-num" }] },
                                (parentElement: any) => [
                                this.text('02')
                                ]),
                            this.html(`e12122`, "div", parentElement,
                                { classes: [{ type: 'static', value: "tab-content" }] },
                                (parentElement: any) => [
                                this.html(`e121221`, "h3", parentElement, {}, (parentElement: any) => [
                                    this.text('Sản phẩm cần SEO và tương tác mượt')
                                ]),
                                this.html(`e121222`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Trang thương mại điện tử, danh mục sản phẩm, blog... Crawler đọc được HTML đầy đủ, trong khi người dùng có trải nghiệm SPA không cần tải lại trang.')
                                ])
                                ])
                            ]),
                        this.html(`e1213`, "button", parentElement,
                            { classes: [{ type: 'static', value: "usecase-tab-item" }, { type: 'binding', value: "active", factory: () => activeUsecase === 2, stateKeys: ["activeUsecase"] }], events: { click: [(event: any) => setActiveUsecase(2)] } },
                            (parentElement: any) => [
                            this.html(`e12131`, "span", parentElement,
                                { classes: [{ type: 'static', value: "tab-num" }] },
                                (parentElement: any) => [
                                this.text('03')
                                ]),
                            this.html(`e12132`, "div", parentElement,
                                { classes: [{ type: 'static', value: "tab-content" }] },
                                (parentElement: any) => [
                                this.html(`e121321`, "h3", parentElement, {}, (parentElement: any) => [
                                    this.text('Nhiều nền tảng trên chung một Backend')
                                ]),
                                this.html(`e121322`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Web public, hệ thống Admin, Webview cho Mobile App chia sẻ chung Model và Logic, nhưng được phân tách an toàn ở tầng Route và View.')
                                ])
                                ])
                            ]),
                        this.html(`e1214`, "button", parentElement,
                            { classes: [{ type: 'static', value: "usecase-tab-item" }, { type: 'binding', value: "active", factory: () => activeUsecase === 3, stateKeys: ["activeUsecase"] }], events: { click: [(event: any) => setActiveUsecase(3)] } },
                            (parentElement: any) => [
                            this.html(`e12141`, "span", parentElement,
                                { classes: [{ type: 'static', value: "tab-num" }] },
                                (parentElement: any) => [
                                this.text('04')
                                ]),
                            this.html(`e12142`, "div", parentElement,
                                { classes: [{ type: 'static', value: "tab-content" }] },
                                (parentElement: any) => [
                                this.html(`e121421`, "h3", parentElement, {}, (parentElement: any) => [
                                    this.text('Đội ngũ Laravel muốn nâng cấp lên SPA')
                                ]),
                                this.html(`e121422`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Giữ nguyên kiến thức về Eloquent, Middleware, Queue. Chỉ cần học thêm cú pháp View mới — không cần vật lộn với quy trình build Frontend tách biệt.')
                                ])
                                ])
                            ])
                        ]),
                    this.html(`e122`, "div", parentElement,
                        { classes: [{ type: 'static', value: "usecase-tab-panel" }] },
                        (parentElement: any) => [
                        this.reactive(`e122r1`, "if", parentReactive, parentElement, ["activeUsecase"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (activeUsecase === 0) {
                                reactiveContents.push(
                                this.html(`e122r1k11`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "usecase-mockup" }, { type: 'static', value: "mockup-admin" }] },
                                    (parentElement: any) => [
                                    this.html(`e122r1k111`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "mockup-header" }] },
                                        (parentElement: any) => [
                                        this.html(`e122r1k1111`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "dots" }] },
                                            (parentElement: any) => [
                                            this.html(`e122r1k11111`, "i", parentElement, {}),
                                            this.html(`e122r1k11112`, "i", parentElement, {}),
                                            this.html(`e122r1k11113`, "i", parentElement, {})
                                            ]),
                                        this.html(`e122r1k1112`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "title" }] },
                                            (parentElement: any) => [
                                            this.text('User Management')
                                            ])
                                        ]),
                                    this.html(`e122r1k112`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "mockup-body" }] },
                                        (parentElement: any) => [
                                        this.html(`e122r1k1121`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "mockup-toolbar" }] },
                                            (parentElement: any) => [
                                            this.html(`e122r1k11211`, "div", parentElement,
                                                { classes: [{ type: 'static', value: "mockup-search" }] },
                                                (parentElement: any) => [
                                                this.text('🔍 Search users...')
                                                ]),
                                            this.html(`e122r1k11212`, "div", parentElement,
                                                { classes: [{ type: 'static', value: "mockup-btn" }] },
                                                (parentElement: any) => [
                                                this.text('Add New')
                                                ])
                                            ]),
                                        this.html(`e122r1k1122`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "mockup-table" }] },
                                            (parentElement: any) => [
                                            this.html(`e122r1k11221`, "div", parentElement,
                                                { classes: [{ type: 'static', value: "mockup-tr" }, { type: 'static', value: "head" }] },
                                                (parentElement: any) => [
                                                this.html(`e122r1k112211`, "span", parentElement, {}, (parentElement: any) => [
                                                    this.text('Name')
                                                ]),
                                                this.html(`e122r1k112212`, "span", parentElement, {}, (parentElement: any) => [
                                                    this.text('Role')
                                                ]),
                                                this.html(`e122r1k112213`, "span", parentElement, {}, (parentElement: any) => [
                                                    this.text('Status')
                                                ]),
                                                this.html(`e122r1k112214`, "span", parentElement, {}, (parentElement: any) => [
                                                    this.text('Action')
                                                ])
                                                ]),
                                            this.html(`e122r1k11222`, "div", parentElement,
                                                { classes: [{ type: 'static', value: "mockup-tr" }] },
                                                (parentElement: any) => [
                                                this.html(`e122r1k112221`, "span", parentElement, {}, (parentElement: any) => [
                                                    this.text('John Doe')
                                                ]),
                                                this.html(`e122r1k112222`, "span", parentElement, {}, (parentElement: any) => [
                                                    this.text('Admin')
                                                ]),
                                                this.html(`e122r1k112223`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "badge" }, { type: 'static', value: "active" }] },
                                                    (parentElement: any) => [
                                                    this.text('Active')
                                                    ]),
                                                this.html(`e122r1k112224`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "action" }] },
                                                    (parentElement: any) => [
                                                    this.text('Edit')
                                                    ])
                                                ]),
                                            this.html(`e122r1k11223`, "div", parentElement,
                                                { classes: [{ type: 'static', value: "mockup-tr" }] },
                                                (parentElement: any) => [
                                                this.html(`e122r1k112231`, "span", parentElement, {}, (parentElement: any) => [
                                                    this.text('Jane Smith')
                                                ]),
                                                this.html(`e122r1k112232`, "span", parentElement, {}, (parentElement: any) => [
                                                    this.text('Editor')
                                                ]),
                                                this.html(`e122r1k112233`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "badge" }, { type: 'static', value: "inactive" }] },
                                                    (parentElement: any) => [
                                                    this.text('Inactive')
                                                    ]),
                                                this.html(`e122r1k112234`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "action" }] },
                                                    (parentElement: any) => [
                                                    this.text('Edit')
                                                    ])
                                                ]),
                                            this.html(`e122r1k11224`, "div", parentElement,
                                                { classes: [{ type: 'static', value: "mockup-tr" }] },
                                                (parentElement: any) => [
                                                this.html(`e122r1k112241`, "span", parentElement, {}, (parentElement: any) => [
                                                    this.text('Mike Ross')
                                                ]),
                                                this.html(`e122r1k112242`, "span", parentElement, {}, (parentElement: any) => [
                                                    this.text('User')
                                                ]),
                                                this.html(`e122r1k112243`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "badge" }, { type: 'static', value: "active" }] },
                                                    (parentElement: any) => [
                                                    this.text('Active')
                                                    ]),
                                                this.html(`e122r1k112244`, "span", parentElement,
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
                        this.reactive(`e122r2`, "if", parentReactive, parentElement, ["activeUsecase"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (activeUsecase === 1) {
                                reactiveContents.push(
                                this.html(`e122r2k11`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "usecase-mockup" }, { type: 'static', value: "mockup-shop" }] },
                                    (parentElement: any) => [
                                    this.html(`e122r2k111`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "mockup-header" }] },
                                        (parentElement: any) => [
                                        this.html(`e122r2k1111`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "dots" }] },
                                            (parentElement: any) => [
                                            this.html(`e122r2k11111`, "i", parentElement, {}),
                                            this.html(`e122r2k11112`, "i", parentElement, {}),
                                            this.html(`e122r2k11113`, "i", parentElement, {})
                                            ]),
                                        this.html(`e122r2k1112`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "title" }] },
                                            (parentElement: any) => [
                                            this.text('Shop / Laptops')
                                            ])
                                        ]),
                                    this.html(`e122r2k112`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "mockup-body" }, { type: 'static', value: "layout-split" }] },
                                        (parentElement: any) => [
                                        this.html(`e122r2k1121`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "mockup-sidebar" }] },
                                            (parentElement: any) => [
                                            this.html(`e122r2k11211`, "b", parentElement, {}, (parentElement: any) => [
                                                this.text('Filters')
                                            ]),
                                            this.html(`e122r2k11212`, "ul", parentElement, {}, (parentElement: any) => [
                                                this.html(`e122r2k112121`, "li", parentElement, {}, (parentElement: any) => [
                                                    this.html(`e122r2k1121211`, "input", parentElement, { attrs: { "type": { type: 'static', value: "checkbox" }, "checked": { type: 'static', value: true } } }),
                                                    this.text(' Apple (12)')
                                                ]),
                                                this.html(`e122r2k112122`, "li", parentElement, {}, (parentElement: any) => [
                                                    this.html(`e122r2k1121221`, "input", parentElement, { attrs: { "type": { type: 'static', value: "checkbox" } } }),
                                                    this.text(' Dell (8)')
                                                ]),
                                                this.html(`e122r2k112123`, "li", parentElement, {}, (parentElement: any) => [
                                                    this.html(`e122r2k1121231`, "input", parentElement, { attrs: { "type": { type: 'static', value: "checkbox" } } }),
                                                    this.text(' HP (15)')
                                                ])
                                            ]),
                                            this.html(`e122r2k11213`, "b", parentElement, {}, (parentElement: any) => [
                                                this.text('Price')
                                            ]),
                                            this.html(`e122r2k11214`, "div", parentElement, { classes: [{ type: 'static', value: "mockup-range" }] })
                                            ]),
                                        this.html(`e122r2k1122`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "mockup-grid" }] },
                                            (parentElement: any) => [
                                            this.html(`e122r2k11221`, "div", parentElement,
                                                { classes: [{ type: 'static', value: "mockup-product" }] },
                                                (parentElement: any) => [
                                                this.html(`e122r2k112211`, "div", parentElement, { classes: [{ type: 'static', value: "img" }] }),
                                                this.html(`e122r2k112212`, "div", parentElement,
                                                    { classes: [{ type: 'static', value: "name" }] },
                                                    (parentElement: any) => [
                                                    this.text('MacBook Pro 16"')
                                                    ]),
                                                this.html(`e122r2k112213`, "div", parentElement,
                                                    { classes: [{ type: 'static', value: "price" }] },
                                                    (parentElement: any) => [
                                                    this.text('$2,499')
                                                    ])
                                                ]),
                                            this.html(`e122r2k11222`, "div", parentElement,
                                                { classes: [{ type: 'static', value: "mockup-product" }] },
                                                (parentElement: any) => [
                                                this.html(`e122r2k112221`, "div", parentElement, { classes: [{ type: 'static', value: "img" }] }),
                                                this.html(`e122r2k112222`, "div", parentElement,
                                                    { classes: [{ type: 'static', value: "name" }] },
                                                    (parentElement: any) => [
                                                    this.text('MacBook Air M2')
                                                    ]),
                                                this.html(`e122r2k112223`, "div", parentElement,
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
                        this.reactive(`e122r3`, "if", parentReactive, parentElement, ["activeUsecase"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (activeUsecase === 2) {
                                reactiveContents.push(
                                this.html(`e122r3k11`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "usecase-mockup" }, { type: 'static', value: "mockup-code" }] },
                                    (parentElement: any) => [
                                    this.html(`e122r3k111`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "mockup-header" }] },
                                        (parentElement: any) => [
                                        this.html(`e122r3k1111`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "dots" }] },
                                            (parentElement: any) => [
                                            this.html(`e122r3k11111`, "i", parentElement, {}),
                                            this.html(`e122r3k11112`, "i", parentElement, {}),
                                            this.html(`e122r3k11113`, "i", parentElement, {})
                                            ]),
                                        this.html(`e122r3k1112`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "title" }] },
                                            (parentElement: any) => [
                                            this.text('Project Structure')
                                            ])
                                        ]),
                                    this.html(`e122r3k112`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "mockup-body" }] },
                                        (parentElement: any) => [
                                        this.html(`e122r3k1121`, "ul", parentElement,
                                            { classes: [{ type: 'static', value: "tree" }] },
                                            (parentElement: any) => [
                                            this.html(`e122r3k11211`, "li", parentElement, {}, (parentElement: any) => [
                                                this.text('📁 '),
                                                this.html(`e122r3k112111`, "b", parentElement, {}, (parentElement: any) => [
                                                    this.text('app')
                                                ]),
                                                this.html(`e122r3k112112`, "ul", parentElement, {}, (parentElement: any) => [
                                                    this.html(`e122r3k1121121`, "li", parentElement, {}, (parentElement: any) => [
                                                        this.text('📁 '),
                                                        this.html(`e122r3k11211211`, "b", parentElement, {}, (parentElement: any) => [
                                                            this.text('Models')
                                                        ]),
                                                        this.html(`e122r3k11211212`, "i", parentElement, {}, (parentElement: any) => [
                                                            this.text('(Shared)')
                                                        ]),
                                                        this.html(`e122r3k11211213`, "ul", parentElement, {}, (parentElement: any) => [
                                                            this.html(`e122r3k112112131`, "li", parentElement, {}, (parentElement: any) => [
                                                                this.text('📄 User.php')
                                                            ]),
                                                            this.html(`e122r3k112112132`, "li", parentElement, {}, (parentElement: any) => [
                                                                this.text('📄 Order.php')
                                                            ])
                                                        ])
                                                    ])
                                                ])
                                            ]),
                                            this.html(`e122r3k11212`, "li", parentElement, {}, (parentElement: any) => [
                                                this.text('📁 '),
                                                this.html(`e122r3k112121`, "b", parentElement, {}, (parentElement: any) => [
                                                    this.text('routes')
                                                ]),
                                                this.html(`e122r3k112122`, "ul", parentElement, {}, (parentElement: any) => [
                                                    this.html(`e122r3k1121221`, "li", parentElement, {}, (parentElement: any) => [
                                                        this.text('📄 web.php '),
                                                        this.html(`e122r3k11212211`, "i", parentElement, {}, (parentElement: any) => [
                                                            this.text('(Public site)')
                                                        ])
                                                    ]),
                                                    this.html(`e122r3k1121222`, "li", parentElement, {}, (parentElement: any) => [
                                                        this.text('📄 admin.php '),
                                                        this.html(`e122r3k11212221`, "i", parentElement, {}, (parentElement: any) => [
                                                            this.text('(Admin panel)')
                                                        ])
                                                    ]),
                                                    this.html(`e122r3k1121223`, "li", parentElement, {}, (parentElement: any) => [
                                                        this.text('📄 api.php '),
                                                        this.html(`e122r3k11212231`, "i", parentElement, {}, (parentElement: any) => [
                                                            this.text('(Mobile app)')
                                                        ])
                                                    ])
                                                ])
                                            ]),
                                            this.html(`e122r3k11213`, "li", parentElement, {}, (parentElement: any) => [
                                                this.text('📁 '),
                                                this.html(`e122r3k112131`, "b", parentElement, {}, (parentElement: any) => [
                                                    this.text('resources/saola')
                                                ]),
                                                this.html(`e122r3k112132`, "ul", parentElement, {}, (parentElement: any) => [
                                                    this.html(`e122r3k1121321`, "li", parentElement, {}, (parentElement: any) => [
                                                        this.text('📁 web '),
                                                        this.html(`e122r3k11213211`, "i", parentElement, {}, (parentElement: any) => [
                                                            this.text('(Bundle 1)')
                                                        ])
                                                    ]),
                                                    this.html(`e122r3k1121322`, "li", parentElement, {}, (parentElement: any) => [
                                                        this.text('📁 admin '),
                                                        this.html(`e122r3k11213221`, "i", parentElement, {}, (parentElement: any) => [
                                                            this.text('(Bundle 2)')
                                                        ])
                                                    ]),
                                                    this.html(`e122r3k1121323`, "li", parentElement, {}, (parentElement: any) => [
                                                        this.text('📁 mobile '),
                                                        this.html(`e122r3k11213231`, "i", parentElement, {}, (parentElement: any) => [
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
                        this.reactive(`e122r4`, "if", parentReactive, parentElement, ["activeUsecase"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (activeUsecase === 3) {
                                reactiveContents.push(
                                this.html(`e122r4k11`, "div", parentElement,
                                    { classes: [{ type: 'static', value: "usecase-mockup" }, { type: 'static', value: "mockup-code" }] },
                                    (parentElement: any) => [
                                    this.html(`e122r4k111`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "mockup-header" }] },
                                        (parentElement: any) => [
                                        this.html(`e122r4k1111`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "dots" }] },
                                            (parentElement: any) => [
                                            this.html(`e122r4k11111`, "i", parentElement, {}),
                                            this.html(`e122r4k11112`, "i", parentElement, {}),
                                            this.html(`e122r4k11113`, "i", parentElement, {})
                                            ]),
                                        this.html(`e122r4k1112`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "title" }] },
                                            (parentElement: any) => [
                                            this.text('counter.sao')
                                            ])
                                        ]),
                                    this.html(`e122r4k112`, "div", parentElement,
                                        { classes: [{ type: 'static', value: "mockup-body" }] },
                                        (parentElement: any) => [
                                        this.html(`e122r4k1121`, "div", parentElement,
                                            { classes: [{ type: 'static', value: "mockup-code-lines" }], attrs: { "style": { type: 'static', value: "font-family: monospace; font-size: 13px; line-height: 1.6;" } } },
                                            (parentElement: any) => [
                                            this.html(`e122r4k11211`, "div", parentElement,
                                                { attrs: { "style": { type: 'static', value: "display: block;" } } },
                                                (parentElement: any) => [
                                                this.html(`e122r4k112111`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "keyword" }] },
                                                    (parentElement: any) => [
                                                    this.html(`e122r4k1121111`, "span", parentElement, {}, (parentElement: any) => [
                                                        this.text('@')
                                                    ]),
                                                    this.text('states')
                                                    ]),
                                                this.html(`e122r4k112112`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "punctuation" }] },
                                                    (parentElement: any) => [
                                                    this.text('({')
                                                    ]),
                                                this.html(`e122r4k112113`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "property" }], attrs: { "style": { type: 'static', value: "margin-left: 0.5em;" } } },
                                                    (parentElement: any) => [
                                                    this.text('count')
                                                    ]),
                                                this.html(`e122r4k112114`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "punctuation" }] },
                                                    (parentElement: any) => [
                                                    this.text(':')
                                                    ]),
                                                this.html(`e122r4k112115`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "number" }], attrs: { "style": { type: 'static', value: "margin-left: 0.5em;" } } },
                                                    (parentElement: any) => [
                                                    this.text('0')
                                                    ]),
                                                this.html(`e122r4k112116`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "punctuation" }], attrs: { "style": { type: 'static', value: "margin-left: 0.5em;" } } },
                                                    (parentElement: any) => [
                                                    this.text('})')
                                                    ])
                                                ]),
                                            this.html(`e122r4k11212`, "div", parentElement, { attrs: { "style": { type: 'static', value: "display: block; min-height: 1.6em;" } } }),
                                            this.html(`e122r4k11213`, "div", parentElement,
                                                { attrs: { "style": { type: 'static', value: "display: block;" } } },
                                                (parentElement: any) => [
                                                this.html(`e122r4k112131`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "tag" }] },
                                                    (parentElement: any) => [
                                                    this.text('<template>')
                                                    ])
                                                ]),
                                            this.html(`e122r4k11214`, "div", parentElement,
                                                { attrs: { "style": { type: 'static', value: "display: block; padding-left: 2em;" } } },
                                                (parentElement: any) => [
                                                this.html(`e122r4k112141`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "tag" }] },
                                                    (parentElement: any) => [
                                                    this.text('<div>')
                                                    ])
                                                ]),
                                            this.html(`e122r4k11215`, "div", parentElement,
                                                { attrs: { "style": { type: 'static', value: "display: block; padding-left: 4em;" } } },
                                                (parentElement: any) => [
                                                this.html(`e122r4k112151`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "tag" }] },
                                                    (parentElement: any) => [
                                                    this.text('<h3>')
                                                    ]),
                                                this.text('Count:'),
                                                this.html(`e122r4k112152`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "punctuation" }], attrs: { "style": { type: 'static', value: "margin-left: 0.5em;" } } },
                                                    (parentElement: any) => [
                                                    this.html(`e122r4k1121521`, "span", parentElement, {}, (parentElement: any) => [
                                                        this.text('{')
                                                    ]),
                                                    this.text('{')
                                                    ]),
                                                this.html(`e122r4k112153`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "property" }], attrs: { "style": { type: 'static', value: "margin-left: 0.5em;" } } },
                                                    (parentElement: any) => [
                                                    this.text('count')
                                                    ]),
                                                this.html(`e122r4k112154`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "punctuation" }], attrs: { "style": { type: 'static', value: "margin-left: 0.5em;" } } },
                                                    (parentElement: any) => [
                                                    this.text('}'),
                                                    this.html(`e122r4k1121541`, "span", parentElement, {}, (parentElement: any) => [
                                                        this.text('}')
                                                    ])
                                                    ]),
                                                this.html(`e122r4k112155`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "tag" }] },
                                                    (parentElement: any) => [
                                                    this.text('</h3>')
                                                    ])
                                                ]),
                                            this.html(`e122r4k11216`, "div", parentElement,
                                                { attrs: { "style": { type: 'static', value: "display: block; padding-left: 4em;" } } },
                                                (parentElement: any) => [
                                                this.html(`e122r4k112161`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "tag" }] },
                                                    (parentElement: any) => [
                                                    this.text('<button')
                                                    ]),
                                                this.html(`e122r4k112162`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "attr-name" }], attrs: { "style": { type: 'static', value: "margin-left: 0.5em;" } } },
                                                    (parentElement: any) => [
                                                    this.html(`e122r4k1121621`, "span", parentElement, {}, (parentElement: any) => [
                                                        this.text('@')
                                                    ]),
                                                    this.text('click')
                                                    ]),
                                                this.html(`e122r4k112163`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "punctuation" }] },
                                                    (parentElement: any) => [
                                                    this.text('(')
                                                    ]),
                                                this.html(`e122r4k112164`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "function" }] },
                                                    (parentElement: any) => [
                                                    this.text('setCount')
                                                    ]),
                                                this.html(`e122r4k112165`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "punctuation" }] },
                                                    (parentElement: any) => [
                                                    this.text('(')
                                                    ]),
                                                this.html(`e122r4k112166`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "property" }] },
                                                    (parentElement: any) => [
                                                    this.text('count')
                                                    ]),
                                                this.html(`e122r4k112167`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "operator" }], attrs: { "style": { type: 'static', value: "margin-left: 0.5em;" } } },
                                                    (parentElement: any) => [
                                                    this.text('+')
                                                    ]),
                                                this.html(`e122r4k112168`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "number" }], attrs: { "style": { type: 'static', value: "margin-left: 0.5em;" } } },
                                                    (parentElement: any) => [
                                                    this.text('1')
                                                    ]),
                                                this.html(`e122r4k112169`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "punctuation" }] },
                                                    (parentElement: any) => [
                                                    this.text('))')
                                                    ]),
                                                this.html(`e122r4k11216e10_`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "tag" }] },
                                                    (parentElement: any) => [
                                                    this.text('>')
                                                    ]),
                                                this.text('+'),
                                                this.html(`e122r4k11216e11_`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "tag" }] },
                                                    (parentElement: any) => [
                                                    this.text('</button>')
                                                    ])
                                                ]),
                                            this.html(`e122r4k11217`, "div", parentElement, { attrs: { "style": { type: 'static', value: "display: block; min-height: 1.6em;" } } }),
                                            this.html(`e122r4k11218`, "div", parentElement,
                                                { attrs: { "style": { type: 'static', value: "display: block; padding-left: 4em;" } } },
                                                (parentElement: any) => [
                                                this.html(`e122r4k112181`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "keyword" }] },
                                                    (parentElement: any) => [
                                                    this.html(`e122r4k1121811`, "span", parentElement, {}, (parentElement: any) => [
                                                        this.text('@')
                                                    ]),
                                                    this.text('if')
                                                    ]),
                                                this.html(`e122r4k112182`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "punctuation" }] },
                                                    (parentElement: any) => [
                                                    this.text('(')
                                                    ]),
                                                this.html(`e122r4k112183`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "property" }] },
                                                    (parentElement: any) => [
                                                    this.text('count')
                                                    ]),
                                                this.html(`e122r4k112184`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "operator" }], attrs: { "style": { type: 'static', value: "margin-left: 0.5em;" } } },
                                                    (parentElement: any) => [
                                                    this.text('>')
                                                    ]),
                                                this.html(`e122r4k112185`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "number" }], attrs: { "style": { type: 'static', value: "margin-left: 0.5em;" } } },
                                                    (parentElement: any) => [
                                                    this.text('10')
                                                    ]),
                                                this.html(`e122r4k112186`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "punctuation" }] },
                                                    (parentElement: any) => [
                                                    this.text(')')
                                                    ])
                                                ]),
                                            this.html(`e122r4k11219`, "div", parentElement,
                                                { attrs: { "style": { type: 'static', value: "display: block; padding-left: 6em;" } } },
                                                (parentElement: any) => [
                                                this.html(`e122r4k112191`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "tag" }] },
                                                    (parentElement: any) => [
                                                    this.text('<p>')
                                                    ]),
                                                this.text('You clicked many times!'),
                                                this.html(`e122r4k112192`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "tag" }] },
                                                    (parentElement: any) => [
                                                    this.text('</p>')
                                                    ])
                                                ]),
                                            this.html(`e122r4k1121e10_`, "div", parentElement,
                                                { attrs: { "style": { type: 'static', value: "display: block; padding-left: 4em;" } } },
                                                (parentElement: any) => [
                                                this.html(`e122r4k1121e10_1`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "keyword" }] },
                                                    (parentElement: any) => [
                                                    this.html(`e122r4k1121e10_11`, "span", parentElement, {}, (parentElement: any) => [
                                                        this.text('@')
                                                    ]),
                                                    this.text('endif')
                                                    ])
                                                ]),
                                            this.html(`e122r4k1121e11_`, "div", parentElement,
                                                { attrs: { "style": { type: 'static', value: "display: block; padding-left: 2em;" } } },
                                                (parentElement: any) => [
                                                this.html(`e122r4k1121e11_1`, "span", parentElement,
                                                    { classes: [{ type: 'static', value: "token" }, { type: 'static', value: "tag" }] },
                                                    (parentElement: any) => [
                                                    this.text('</div>')
                                                    ])
                                                ]),
                                            this.html(`e122r4k1121e12_`, "div", parentElement,
                                                { attrs: { "style": { type: 'static', value: "display: block;" } } },
                                                (parentElement: any) => [
                                                this.html(`e122r4k1121e12_1`, "span", parentElement,
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
                this.html(`e13`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }, { type: 'static', value: "ov-note--warn" }], attrs: { "style": { type: 'static', value: "margin-top: 30px;" } } },
                    (parentElement: any) => [
                    this.html(`e131`, "strong", parentElement, {}, (parentElement: any) => [
                        this.text('Chưa phù hợp khi:')
                    ]),
                    this.text(' Dự án yêu cầu hệ sinh thái component UI bên thứ ba đồ sộ có sẵn, hoặc team đã quá quen thuộc với React/Vue cùng các công cụ đi kèm. Trong những trường hợp này, chi phí chuyển đổi sang Saola có thể lớn hơn những lợi ích hệ thống mang lại.')
                    ])
                ])
            ]);
            }
        });

    }
}

// Export factory function
export function WebModulesHomePartsUsecase(__data__ = {}, systemData = {}): UsecaseView {
    return new UsecaseView(__data__, systemData);
}
export default WebModulesHomePartsUsecase;