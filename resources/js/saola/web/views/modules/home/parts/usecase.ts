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

                // Finally lock state updates

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
                    { classes: [{ type: 'static', value: "ov-grid" }] },
                    (parentElement: any) => [
                    this.include(`c26ee094`, 'web.modules.home.parts.ovcard', parentElement, [], (parentElement: any) => ({
                            "eyebrow": "01 / NỘI BỘ",
                            "title": "Ứng dụng nội bộ & admin panel",
                            __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                            this.html(`4d8330ac`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Bảng dữ liệu, form nhiều bước, phân quyền theo vai trò. Cần tương tác mượt nhưng không cần đánh đổi bằng một frontend tách rời.')
                            ])
                        ]
                        })),
                    this.include(`bdd4cecc`, 'web.modules.home.parts.ovcard', parentElement, [], (parentElement: any) => ({
                            "eyebrow": "02 / SEO + UX",
                            "title": "Sản phẩm cần cả SEO lẫn tương tác",
                            __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                            this.html(`37aeefe2`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Trang danh mục, chi tiết sản phẩm, blog có bộ lọc. Crawler nhận HTML đầy đủ; người dùng nhận trải nghiệm không tải lại trang.')
                            ])
                        ]
                        })),
                    this.include(`614a6be9`, 'web.modules.home.parts.ovcard', parentElement, [], (parentElement: any) => ({
                            "eyebrow": "03 / ĐA MẶT TIỀN",
                            "title": "Nhiều mặt tiền trên một backend",
                            __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                            this.html(`397bf660`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Web công khai, admin, webview mobile và api dùng chung model, policy và service layer nhưng tách route, middleware lẫn bundle.')
                            ])
                        ]
                        })),
                    this.include(`68c75538`, 'web.modules.home.parts.ovcard', parentElement, [], (parentElement: any) => ({
                            "eyebrow": "04 / ĐỘI LARAVEL",
                            "title": "Đội Laravel muốn SPA mà không đổi nghề",
                            __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                            this.html(`e84d46d3`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Eloquent, middleware, policy, queue giữ nguyên. Phần mới cần học là cú pháp view và cách state chảy — không phải một hệ sinh thái build khác.')
                            ])
                        ]
                        }))
                    ]),
                this.html(`c882ec26`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }, { type: 'static', value: "ov-note--warn" }] },
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
