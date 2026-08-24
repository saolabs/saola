import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.home.parts.features';
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
export interface FeaturesProps {
    /** viewId server gán khi hydrate */
    __SSR_VIEW_ID__?: string;
    [key: string]: any;
}

class FeaturesViewController extends ViewController {
    constructor(view: View) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this as any).setStaticConfig === 'function') {
            (this as any).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this as any).config = __VIEW_CONFIG__;
        }
    }
}

class FeaturesView extends View {
    constructor(__data__: FeaturesProps = {}, systemData: any = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, FeaturesViewController);
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
            name: 'HomeFeatures'
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
                { classes: [{ type: 'static', value: "home-map" }], attrs: { "id": { type: 'static', value: "features" } } },
                (parentElement: any) => [
                this.html(`88b70a58`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }] },
                    (parentElement: any) => [
                    this.html(`e444cc57`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement: any) => [
                        this.html(`3d2849a4`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('TÍNH NĂNG CỐT LÕI')
                        ]),
                        this.text(' Đơn giản hóa mọi thứ')
                        ]),
                    this.html(`ed9d4c8f`, "h2", parentElement, {}, (parentElement: any) => [
                        this.text('Những gì bạn nhận được.')
                    ]),
                    this.html(`ecdef5b6`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Một hệ sinh thái trọn vẹn giúp bạn tập trung vào logic sản phẩm thay vì chắp vá các công cụ lại với nhau.')
                    ])
                    ]),
                this.html(`b545b1d4`, "div", parentElement,
                    { classes: [{ type: 'static', value: "map-grid" }] },
                    (parentElement: any) => [
                    this.include(`c26ee094`, 'web.modules.home.parts.mapcard', parentElement, [], (parentElement: any) => ({
                            "eyebrow": "01 / SINGLE FILE",
                            "title": "Mọi thứ trong một file",
                            "href": "/docs/sao-file",
                            "link": `Xem cấu trúc .sao ↗`,
                            __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                            this.html(`4d8330ac`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Template, state, script và style hội tụ ở định dạng '),
                                this.html(`0a67dfc3`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('.sao')
                                ]),
                                this.text('. Quên việc nhảy qua lại giữa file Blade và component Vue/React.')
                            ])
                        ]
                        })),
                    this.include(`bdd4cecc`, 'web.modules.home.parts.mapcard', parentElement, [], (parentElement: any) => ({
                            "eyebrow": "02 / TỐI ƯU SEO",
                            "title": "SSR được cấu hình sẵn",
                            "href": "/docs/lifecycle",
                            "link": "Cơ chế hydration ↗",
                            __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                            this.html(`37aeefe2`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Server trả về HTML hoàn chỉnh ngay lần tải đầu. Trải nghiệm tức thì cho người dùng và crawler, không có khoảng trắng khó chịu.')
                            ])
                        ]
                        })),
                    this.include(`614a6be9`, 'web.modules.home.parts.mapcard', parentElement, [], (parentElement: any) => ({
                            "eyebrow": "03 / REACTIVE TỰ NHIÊN",
                            "title": "Không Virtual DOM",
                            "href": "/docs/reactivity",
                            "link": "State & reactivity ↗",
                            "variant": "dark",
                            __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                            this.html(`397bf660`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Saola cập nhật chính xác từng vùng DOM thay đổi thay vì so sánh toàn bộ cây. Hiệu năng vượt trội và tiết kiệm bộ nhớ.')
                            ])
                        ]
                        })),
                    this.include(`68c75538`, 'web.modules.home.parts.mapcard', parentElement, [], (parentElement: any) => ({
                            "eyebrow": "04 / ROUTING TỪ SERVER",
                            "title": "Server-based routing",
                            "href": "/docs/contexts",
                            "link": "Context & module ↗",
                            __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                            this.html(`e84d46d3`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Giữ nguyên routing, controllers, middleware, auth, và state ở backend vững chãi của bạn — đúng nơi mà chúng thuộc về.')
                            ])
                        ]
                        })),
                    this.include(`d974c070`, 'web.modules.home.parts.mapcard', parentElement, [], (parentElement: any) => ({
                            "eyebrow": "05 / KHÔNG PHẢI FRAMEWORK MỚI",
                            "title": "Không đập đi xây lại",
                            "href": "/docs/runtime",
                            "link": "Vòng đời view ↗",
                            __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                            this.html(`937daedd`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Saola là một lớp view làm cầu nối (adapter) giữa Laravel và trình duyệt. Đội ngũ của bạn không cần phải học một framework đồ sộ khác.')
                            ])
                        ]
                        })),
                    this.include(`9a0d0d0a`, 'web.modules.home.parts.mapcard', parentElement, [], (parentElement: any) => ({
                            "eyebrow": "06 / DIRECTIVE QUEN THUỘC",
                            "title": "Kế thừa phong cách Blade",
                            "href": "/docs/directives",
                            "link": "Tham chiếu directive ↗",
                            __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                            this.html(`f1d41f42`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Sử dụng ngay 43 directive mạnh mẽ. Cú pháp thân thiện, quen thuộc, giúp đội ngũ Laravel bắt nhịp chỉ trong một giờ.')
                            ])
                        ]
                        }))
                    ])
                ])
            ]);
            }
        });

    }
}

// Export factory function
export function WebModulesHomePartsFeatures(__data__: FeaturesProps = {}, systemData: any = {}): FeaturesView {
    return new FeaturesView(__data__, systemData);
}
export default WebModulesHomePartsFeatures;
