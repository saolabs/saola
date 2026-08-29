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
    constructor(__data__: any = {}, systemData: any = {}) {
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
            this.html(`e1`, "section", parentElement,
                { classes: [{ type: 'static', value: "home-map" }], attrs: { "id": { type: 'static', value: "features" } } },
                (parentElement: any) => [
                this.html(`e11`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }] },
                    (parentElement: any) => [
                    this.html(`e111`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement: any) => [
                        this.html(`e1111`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('BỐN LỚP')
                        ]),
                        this.text(' Một luồng từ request tới DOM')
                        ]),
                    this.html(`e112`, "h2", parentElement, {}, (parentElement: any) => [
                        this.text('Không chỉ là thư viện.'),
                        this.html(`e1121`, "br", parentElement, {}),
                        this.text('Là hệ sinh thái có hợp đồng rõ ràng.')
                    ]),
                    this.html(`e113`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Mỗi lớp giải quyết một bài toán riêng và liên kết với lớp kế tiếp bằng một cấu trúc chặt chẽ (contract), chứ không dựa trên quy ước ngầm định.')
                    ])
                    ]),
                this.html(`e12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "map-grid" }] },
                    (parentElement: any) => [
                    this.include(`e12c1`, 'web.modules.home.parts.mapcard', parentElement, [], (parentElement: any) => ({
                            "eyebrow": "APPLICATION / 01",
                            "title": "Module tự khai báo, hệ thống tự tìm",
                            "href": "/docs/contexts",
                            "link": "Context &amp; module ↗",
                            __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                            this.html(`e12c11`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Mỗi thư mục trong '),
                                this.html(`e12c111`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('app/Modules/')
                                ]),
                                this.text(' có '),
                                this.html(`e12c112`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('ModuleServiceProvider')
                                ]),
                                this.text(' được tự động nhận diện. Việc thêm hoặc lồng ghép module mới hoàn toàn không yêu cầu sửa file cấu hình trung tâm nào.')
                            ])
                        ]
                        })),
                    this.include(`e12c2`, 'web.modules.home.parts.mapcard', parentElement, [], (parentElement: any) => ({
                            "eyebrow": "APPLICATION / 02",
                            "title": "Bốn mặt tiền, bốn bundle",
                            "href": "/docs/contexts",
                            "link": "Đăng ký context ↗",
                            __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                            this.html(`e12c21`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Môi trường Web, Admin, API và Mobile sở hữu prefix, middleware, permission và bundle JavaScript hoàn toàn tách biệt. Trong khi đó, Model, Policy và Service layer vẫn dùng chung một lõi Laravel duy nhất.')
                            ])
                        ]
                        })),
                    this.include(`e12c3`, 'web.modules.home.parts.mapcard', parentElement, [], (parentElement: any) => ({
                            "eyebrow": "CORE / 03",
                            "title": "Context gắn liền với request",
                            "href": "/docs/architecture",
                            "link": "Toàn cảnh kiến trúc ↗",
                            __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                            this.html(`e12c31`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Các thành phần route được resolve theo ngữ cảnh (context) của từng request. Thiết kế này đảm bảo các worker sống lâu như Laravel Octane không bao giờ bị rò rỉ state từ request trước sang request sau.')
                            ])
                        ]
                        })),
                    this.include(`e12c4`, 'web.modules.home.parts.mapcard', parentElement, [], (parentElement: any) => ({
                            "eyebrow": "COMPILER / 04",
                            "title": "Một cây AST, hai đầu ra",
                            "href": "/docs/compiler",
                            "link": "Compiler &amp; AST ↗",
                            __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                            this.html(`e12c41`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Chỉ từ một mã nguồn '),
                                this.html(`e12c411`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('.sao')
                                ]),
                                this.text(', trình biên dịch tự động sinh ra mã Blade cho Server và TypeScript cho Client. Cả hai phiên bản đều đồng nhất về cấu trúc và marker, giúp bạn không phải viết tay mã nào hai lần.')
                            ])
                        ]
                        })),
                    this.include(`e12c5`, 'web.modules.home.parts.mapcard', parentElement, [], (parentElement: any) => ({
                            "eyebrow": "CLIENT / 05",
                            "title": "Nhận lại DOM, không dựng lại",
                            "href": "/docs/lifecycle",
                            "link": "Vòng đời &amp; marker ↗",
                            __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                            this.html(`e12c51`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Server trả về HTML đầy đủ nội dung ngay từ byte đầu tiên để tối ưu SEO. Sau đó, Runtime phía client sử dụng marker để nhận diện và tiếp quản đúng vùng DOM đó, chỉ cập nhật những phần thay đổi thay vì dựng lại toàn bộ cây.')
                            ])
                        ]
                        })),
                    this.include(`e12c6`, 'web.modules.home.parts.mapcard', parentElement, [], (parentElement: any) => ({
                            "eyebrow": "COMPILER / 06",
                            "title": "Giữ nguyên hình dạng Blade",
                            "href": "/docs/directives",
                            "link": "Tham chiếu directive ↗",
                            __ONE_CHILDREN_CONTENT__: (parentElement: any) => [
                            this.html(`e12c61`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Với 43 directive kế thừa nguyên vẹn từ Blade, cấu trúc điều khiển luồng của bạn vẫn vô cùng quen thuộc. Bạn chỉ cần làm quen thêm với cách khai báo state và ranh giới giữa giá trị phản ứng (reactive) và giá trị tĩnh.')
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
export function WebModulesHomePartsFeatures(__data__ = {}, systemData = {}): FeaturesView {
    return new FeaturesView(__data__, systemData);
}
export default WebModulesHomePartsFeatures;