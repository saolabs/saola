import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.home.parts.compare';
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
export interface CompareProps {
    /** viewId server gán khi hydrate */
    __SSR_VIEW_ID__?: string;
    [key: string]: any;
}



class CompareViewController extends ViewController {
    constructor(view: View) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this as any).setStaticConfig === 'function') {
            (this as any).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this as any).config = __VIEW_CONFIG__;
        }
    }
}

class CompareView extends View {
    constructor(__data__: any = {}, systemData: any = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, CompareViewController);
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
            name: 'HomeCompare'
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
                { classes: [{ type: 'static', value: "home-section" }, { type: 'static', value: "home-section--fog" }], attrs: { "id": { type: 'static', value: "compare" } } },
                (parentElement: any) => [
                this.html(`e11`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }, { type: 'static', value: "section-head-split" }] },
                    (parentElement: any) => [
                    this.html(`e111`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`e1111`, "p", parentElement,
                            { classes: [{ type: 'static', value: "kicker" }] },
                            (parentElement: any) => [
                            this.html(`e11111`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('SO SÁNH')
                            ]),
                            this.text(' Khác biệt so với các lựa chọn quen thuộc')
                            ]),
                        this.html(`e1112`, "h2", parentElement, {}, (parentElement: any) => [
                            this.text('Cùng một bài toán,'),
                            this.html(`e11121`, "br", parentElement, {}),
                            this.text('năm cách giải quyết.')
                        ])
                    ]),
                    this.html(`e112`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Bảng so sánh này không nhằm mục đích khẳng định giải pháp nào tốt nhất tuyệt đối. Nó đánh giá sự khác biệt ở hai khía cạnh: kiến trúc hệ thống và cơ chế hiển thị. Saola tập trung giải quyết độ khó ở trình biên dịch nội bộ và mô hình module, để đổi lấy một kiến trúc phân tách rõ ràng và loại bỏ gánh nặng bảo trì hai phiên bản template (server và client).')
                    ])
                    ]),
                this.html(`e12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "compare-table" }] },
                    (parentElement: any) => [
                    this.html(`e121`, "table", parentElement, {}, (parentElement: any) => [
                        this.html(`e1211`, "thead", parentElement, {}, (parentElement: any) => [
                            this.html(`e12111`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`e121111`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "col" } } },
                                    (parentElement: any) => [
                                    this.text('Tiêu chí')
                                    ]),
                                this.html(`e121112`, "th", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }], attrs: { "scope": { type: 'static', value: "col" } } },
                                    (parentElement: any) => [
                                    this.text('Saola')
                                    ]),
                                this.html(`e121113`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "col" } } },
                                    (parentElement: any) => [
                                    this.text('Blade + Alpine')
                                    ]),
                                this.html(`e121114`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "col" } } },
                                    (parentElement: any) => [
                                    this.text('Livewire')
                                    ]),
                                this.html(`e121115`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "col" } } },
                                    (parentElement: any) => [
                                    this.text('Inertia + Vue/React')
                                    ]),
                                this.html(`e121116`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "col" } } },
                                    (parentElement: any) => [
                                    this.text('SPA + REST API')
                                    ])
                            ])
                        ]),
                        this.html(`e1212`, "tbody", parentElement, {}, (parentElement: any) => [
                            this.html(`e12121`, "tr", parentElement,
                                { classes: [{ type: 'static', value: "cmp-band" }] },
                                (parentElement: any) => [
                                this.html(`e121211`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" }, "colspan": { type: 'static', value: "6" } } },
                                    (parentElement: any) => [
                                    this.text('Tầng kiến trúc ứng dụng')
                                    ])
                                ]),
                            this.html(`e12122`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`e121221`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" } } },
                                    (parentElement: any) => [
                                    this.text('Tổ chức code và route')
                                    ]),
                                this.html(`e121222`, "td", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }] },
                                    (parentElement: any) => [
                                    this.html(`e1212221`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-yes" }] },
                                        (parentElement: any) => [
                                        this.text('Module tự nạp, route trong module')
                                        ])
                                    ]),
                                this.html(`e121223`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Tự tổ chức, route tập trung')
                                ]),
                                this.html(`e121224`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Tự tổ chức, route tập trung')
                                ]),
                                this.html(`e121225`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Tự tổ chức, route tập trung')
                                ]),
                                this.html(`e121226`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Tự tổ chức ở hai phía')
                                ])
                            ]),
                            this.html(`e12123`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`e121231`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" } } },
                                    (parentElement: any) => [
                                    this.text('Đa mặt tiền, tách bundle')
                                    ]),
                                this.html(`e121232`, "td", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }] },
                                    (parentElement: any) => [
                                    this.html(`e1212321`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-yes" }] },
                                        (parentElement: any) => [
                                        this.text('Sẵn bốn context')
                                        ])
                                    ]),
                                this.html(`e121233`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Tự dựng')
                                ]),
                                this.html(`e121234`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Tự dựng')
                                ]),
                                this.html(`e121235`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Tự dựng')
                                ]),
                                this.html(`e121236`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Tự dựng')
                                ])
                            ]),
                            this.html(`e12124`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`e121241`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" } } },
                                    (parentElement: any) => [
                                    this.text('Context theo request (Octane)')
                                    ]),
                                this.html(`e121242`, "td", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }] },
                                    (parentElement: any) => [
                                    this.html(`e1212421`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-yes" }] },
                                        (parentElement: any) => [
                                        this.text('Registry request-scoped')
                                        ])
                                    ]),
                                this.html(`e121243`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Tự lo')
                                ]),
                                this.html(`e121244`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Tự lo')
                                ]),
                                this.html(`e121245`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Tự lo')
                                ]),
                                this.html(`e121246`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Không áp dụng')
                                ])
                            ]),
                            this.html(`e12125`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`e121251`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" } } },
                                    (parentElement: any) => [
                                    this.text('Hình dạng response chung')
                                    ]),
                                this.html(`e121252`, "td", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }] },
                                    (parentElement: any) => [
                                    this.text('Một controller trả được cả HTML và JSON')
                                    ]),
                                this.html(`e121253`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Tự quy ước')
                                ]),
                                this.html(`e121254`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Component phía server')
                                ]),
                                this.html(`e121255`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Props qua adapter')
                                ]),
                                this.html(`e121256`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Tự quy ước ở tầng API')
                                ])
                            ]),
                            this.html(`e12126`, "tr", parentElement,
                                { classes: [{ type: 'static', value: "cmp-band" }] },
                                (parentElement: any) => [
                                this.html(`e121261`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" }, "colspan": { type: 'static', value: "6" } } },
                                    (parentElement: any) => [
                                    this.text('Tầng view và runtime')
                                    ])
                                ]),
                            this.html(`e12127`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`e121271`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" } } },
                                    (parentElement: any) => [
                                    this.text('Nguồn sinh HTML và JS')
                                    ]),
                                this.html(`e121272`, "td", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }] },
                                    (parentElement: any) => [
                                    this.html(`e1212721`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-yes" }] },
                                        (parentElement: any) => [
                                        this.text('Cùng một AST')
                                        ])
                                    ]),
                                this.html(`e121273`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Hai nguồn viết tay')
                                ]),
                                this.html(`e121274`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Server sinh HTML, JS chỉ vá DOM')
                                ]),
                                this.html(`e121275`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Hai nguồn viết tay')
                                ]),
                                this.html(`e121276`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Một nguồn, chỉ ở client')
                                ])
                            ]),
                            this.html(`e12128`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`e121281`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" } } },
                                    (parentElement: any) => [
                                    this.text('HTML của lần tải đầu')
                                    ]),
                                this.html(`e121282`, "td", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }] },
                                    (parentElement: any) => [
                                    this.text('Đầy đủ nội dung')
                                    ]),
                                this.html(`e121283`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Đầy đủ nội dung')
                                ]),
                                this.html(`e121284`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Đầy đủ nội dung')
                                ]),
                                this.html(`e121285`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Đầy đủ nếu bật SSR')
                                ]),
                                this.html(`e121286`, "td", parentElement, {}, (parentElement: any) => [
                                    this.html(`e1212861`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-no" }] },
                                        (parentElement: any) => [
                                        this.text('Div rỗng')
                                        ])
                                ])
                            ]),
                            this.html(`e12129`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`e121291`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" } } },
                                    (parentElement: any) => [
                                    this.text('Tương tác sau khi tải')
                                    ]),
                                this.html(`e121292`, "td", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }] },
                                    (parentElement: any) => [
                                    this.text('Chạy tại client, không round-trip')
                                    ]),
                                this.html(`e121293`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Chạy tại client, phạm vi hẹp')
                                ]),
                                this.html(`e121294`, "td", parentElement, {}, (parentElement: any) => [
                                    this.html(`e1212941`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-no" }] },
                                        (parentElement: any) => [
                                        this.text('Mỗi tương tác một request')
                                        ])
                                ]),
                                this.html(`e121295`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Chạy tại client')
                                ]),
                                this.html(`e121296`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Chạy tại client')
                                ])
                            ]),
                            this.html(`e1212e10_`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`e1212e10_1`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" } } },
                                    (parentElement: any) => [
                                    this.text('Ngôn ngữ viết view')
                                    ]),
                                this.html(`e1212e10_2`, "td", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }] },
                                    (parentElement: any) => [
                                    this.text('Một cú pháp '),
                                    this.html(`e1212e10_21`, "code", parentElement, {}, (parentElement: any) => [
                                        this.text('.sao')
                                    ])
                                    ]),
                                this.html(`e1212e10_3`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Blade cộng JavaScript rời')
                                ]),
                                this.html(`e1212e10_4`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Blade cộng PHP class')
                                ]),
                                this.html(`e1212e10_5`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Vue hoặc React, tách khỏi Blade')
                                ]),
                                this.html(`e1212e10_6`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Framework JavaScript')
                                ])
                            ]),
                            this.html(`e1212e11_`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`e1212e11_1`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" } } },
                                    (parentElement: any) => [
                                    this.text('Cần tầng API riêng')
                                    ]),
                                this.html(`e1212e11_2`, "td", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }] },
                                    (parentElement: any) => [
                                    this.text('Không bắt buộc')
                                    ]),
                                this.html(`e1212e11_3`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Không')
                                ]),
                                this.html(`e1212e11_4`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Không')
                                ]),
                                this.html(`e1212e11_5`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Không, props đi qua adapter')
                                ]),
                                this.html(`e1212e11_6`, "td", parentElement, {}, (parentElement: any) => [
                                    this.html(`e1212e11_61`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-no" }] },
                                        (parentElement: any) => [
                                        this.text('Bắt buộc')
                                        ])
                                ])
                            ]),
                            this.html(`e1212e12_`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`e1212e12_1`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" } } },
                                    (parentElement: any) => [
                                    this.text('Vòng đời view có contract')
                                    ]),
                                this.html(`e1212e12_2`, "td", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }] },
                                    (parentElement: any) => [
                                    this.text('Bảy trạng thái, dọn dẹp theo ref-count')
                                    ]),
                                this.html(`e1212e12_3`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Không có')
                                ]),
                                this.html(`e1212e12_4`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Theo component phía server')
                                ]),
                                this.html(`e1212e12_5`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Theo framework JavaScript')
                                ]),
                                this.html(`e1212e12_6`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Theo framework JavaScript')
                                ])
                            ]),
                            this.html(`e1212e13_`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`e1212e13_1`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" } } },
                                    (parentElement: any) => [
                                    this.text('Độ chín và cộng đồng')
                                    ]),
                                this.html(`e1212e13_2`, "td", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }] },
                                    (parentElement: any) => [
                                    this.html(`e1212e13_21`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-no" }] },
                                        (parentElement: any) => [
                                        this.text('Đang xây dựng nền móng')
                                        ])
                                    ]),
                                this.html(`e1212e13_3`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Rất chín')
                                ]),
                                this.html(`e1212e13_4`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Rất chín')
                                ]),
                                this.html(`e1212e13_5`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Rất chín')
                                ]),
                                this.html(`e1212e13_6`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Rất chín')
                                ])
                            ])
                        ])
                    ])
                    ])
                ])
            ]);
            }
        });

    }
}

// Export factory function
export function WebModulesHomePartsCompare(__data__ = {}, systemData = {}): CompareView {
    return new CompareView(__data__, systemData);
}
export default WebModulesHomePartsCompare;