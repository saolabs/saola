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
    constructor(__data__: CompareProps = {}, systemData: any = {}) {
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
            this.html(`bbcd3398`, "section", parentElement,
                { classes: [{ type: 'static', value: "home-section" }, { type: 'static', value: "home-section--fog" }], attrs: { "id": { type: 'static', value: "compare" } } },
                (parentElement: any) => [
                this.html(`88b70a58`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }, { type: 'static', value: "section-head-split" }] },
                    (parentElement: any) => [
                    this.html(`4f95a176`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`dd8c47b3`, "p", parentElement,
                            { classes: [{ type: 'static', value: "kicker" }] },
                            (parentElement: any) => [
                            this.html(`d0f3467d`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('SO SÁNH')
                            ]),
                            this.text(' Khác gì lựa chọn quen thuộc')
                            ]),
                        this.html(`3f75a3fd`, "h2", parentElement, {}, (parentElement: any) => [
                            this.text('Cùng một bài toán,'),
                            this.html(`d78bb666`, "br", parentElement, {}),
                            this.text('năm cách trả lời khác nhau.')
                        ])
                    ]),
                    this.html(`a485d755`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Bảng này không nói cách nào tốt hơn tuyệt đối. Nó nói mỗi cách đặt chi phí ở đâu — và Saola đặt chi phí vào bước biên dịch để đổi lấy việc không phải giữ hai bản template đồng bộ bằng tay.')
                    ])
                    ]),
                this.html(`b545b1d4`, "div", parentElement,
                    { classes: [{ type: 'static', value: "compare-table" }] },
                    (parentElement: any) => [
                    this.html(`1153644d`, "table", parentElement, {}, (parentElement: any) => [
                        this.html(`dd0a490a`, "thead", parentElement, {}, (parentElement: any) => [
                            this.html(`49ec586f`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`79f9ff93`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "col" } } },
                                    (parentElement: any) => [
                                    this.text('Tiêu chí')
                                    ]),
                                this.html(`e8508ec8`, "th", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }], attrs: { "scope": { type: 'static', value: "col" } } },
                                    (parentElement: any) => [
                                    this.text('Saola')
                                    ]),
                                this.html(`2eeb73ff`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "col" } } },
                                    (parentElement: any) => [
                                    this.text('Blade + Alpine')
                                    ]),
                                this.html(`babaf958`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "col" } } },
                                    (parentElement: any) => [
                                    this.text('Livewire')
                                    ]),
                                this.html(`326678f8`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "col" } } },
                                    (parentElement: any) => [
                                    this.text('Inertia + Vue/React')
                                    ]),
                                this.html(`9fb18ae5`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "col" } } },
                                    (parentElement: any) => [
                                    this.text('SPA + REST API')
                                    ])
                            ])
                        ]),
                        this.html(`7f65604e`, "tbody", parentElement, {}, (parentElement: any) => [
                            this.html(`8dad2439`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`301bc4e9`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" } } },
                                    (parentElement: any) => [
                                    this.text('HTML của lần tải đầu')
                                    ]),
                                this.html(`ce75cd42`, "td", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }] },
                                    (parentElement: any) => [
                                    this.text('Đầy đủ nội dung')
                                    ]),
                                this.html(`457c955f`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Đầy đủ nội dung')
                                ]),
                                this.html(`45f02287`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Đầy đủ nội dung')
                                ]),
                                this.html(`b955e6d2`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Đầy đủ nếu bật SSR')
                                ]),
                                this.html(`083b33c1`, "td", parentElement, {}, (parentElement: any) => [
                                    this.html(`0997092a`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-no" }] },
                                        (parentElement: any) => [
                                        this.text('Div rỗng')
                                        ])
                                ])
                            ]),
                            this.html(`882d5cab`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`ba550c5b`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" } } },
                                    (parentElement: any) => [
                                    this.text('Tương tác sau khi tải')
                                    ]),
                                this.html(`54dffeda`, "td", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }] },
                                    (parentElement: any) => [
                                    this.text('Chạy tại client, không round-trip')
                                    ]),
                                this.html(`c722ea5d`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Chạy tại client, phạm vi hẹp')
                                ]),
                                this.html(`3e7423f9`, "td", parentElement, {}, (parentElement: any) => [
                                    this.html(`4cde2420`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-no" }] },
                                        (parentElement: any) => [
                                        this.text('Mỗi tương tác một request')
                                        ])
                                ]),
                                this.html(`ca7e945f`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Chạy tại client')
                                ]),
                                this.html(`6787453d`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Chạy tại client')
                                ])
                            ]),
                            this.html(`ac7b9f93`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`0abb521a`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" } } },
                                    (parentElement: any) => [
                                    this.text('Nguồn sinh HTML và JS')
                                    ]),
                                this.html(`ec937c06`, "td", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }] },
                                    (parentElement: any) => [
                                    this.html(`be27755a`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-yes" }] },
                                        (parentElement: any) => [
                                        this.text('Cùng một AST')
                                        ])
                                    ]),
                                this.html(`bae9ebd3`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Hai nguồn viết tay')
                                ]),
                                this.html(`ce00eb8b`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Server sinh HTML, JS chỉ vá DOM')
                                ]),
                                this.html(`d07dce1b`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Hai nguồn viết tay')
                                ]),
                                this.html(`011532cb`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Một nguồn, chỉ ở client')
                                ])
                            ]),
                            this.html(`f4637881`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`464845f2`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" } } },
                                    (parentElement: any) => [
                                    this.text('Ngôn ngữ viết view')
                                    ]),
                                this.html(`6bda1edc`, "td", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }] },
                                    (parentElement: any) => [
                                    this.text('Một cú pháp '),
                                    this.html(`7d1782a7`, "code", parentElement, {}, (parentElement: any) => [
                                        this.text('.sao')
                                    ])
                                    ]),
                                this.html(`8a30856c`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Blade cộng JavaScript rời')
                                ]),
                                this.html(`a3e1c81d`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Blade cộng PHP class')
                                ]),
                                this.html(`91720c5f`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Vue hoặc React, tách khỏi Blade')
                                ]),
                                this.html(`91dd8fc1`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Framework JavaScript')
                                ])
                            ]),
                            this.html(`6597edba`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`2122cc93`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" } } },
                                    (parentElement: any) => [
                                    this.text('Cần tầng API riêng')
                                    ]),
                                this.html(`45190744`, "td", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }] },
                                    (parentElement: any) => [
                                    this.text('Không bắt buộc')
                                    ]),
                                this.html(`d531e344`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Không')
                                ]),
                                this.html(`d713d184`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Không')
                                ]),
                                this.html(`e3533c6a`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Không, props đi qua adapter')
                                ]),
                                this.html(`dd5f8b83`, "td", parentElement, {}, (parentElement: any) => [
                                    this.html(`6cd7c5eb`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-no" }] },
                                        (parentElement: any) => [
                                        this.text('Bắt buộc')
                                        ])
                                ])
                            ]),
                            this.html(`8df5b560`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`45c45f5a`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" } } },
                                    (parentElement: any) => [
                                    this.text('Đa mặt tiền, tách bundle')
                                    ]),
                                this.html(`2f6bc071`, "td", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }] },
                                    (parentElement: any) => [
                                    this.html(`503211cd`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-yes" }] },
                                        (parentElement: any) => [
                                        this.text('Sẵn bốn context')
                                        ])
                                    ]),
                                this.html(`ddc611c2`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Tự dựng')
                                ]),
                                this.html(`eb85c516`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Tự dựng')
                                ]),
                                this.html(`5fc6e73f`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Tự dựng')
                                ]),
                                this.html(`c9c288b0`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Tự dựng')
                                ])
                            ]),
                            this.html(`c5a9e0e7`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`a057896d`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" } } },
                                    (parentElement: any) => [
                                    this.text('Vòng đời view có contract')
                                    ]),
                                this.html(`d4977128`, "td", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }] },
                                    (parentElement: any) => [
                                    this.text('Bảy trạng thái, dọn theo ref-count')
                                    ]),
                                this.html(`fee9cde8`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Không có')
                                ]),
                                this.html(`9c519129`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Theo component phía server')
                                ]),
                                this.html(`97814582`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Theo framework JavaScript')
                                ]),
                                this.html(`9fe906a2`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Theo framework JavaScript')
                                ])
                            ]),
                            this.html(`71b332b4`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`e2fe5cbc`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" } } },
                                    (parentElement: any) => [
                                    this.text('Độ chín và cộng đồng')
                                    ]),
                                this.html(`8ca96ddc`, "td", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }] },
                                    (parentElement: any) => [
                                    this.html(`d18ad838`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-no" }] },
                                        (parentElement: any) => [
                                        this.text('Đang dựng nền')
                                        ])
                                    ]),
                                this.html(`4fab05e4`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Rất chín')
                                ]),
                                this.html(`d781159c`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Rất chín')
                                ]),
                                this.html(`8700b8fc`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Rất chín')
                                ]),
                                this.html(`9ad17705`, "td", parentElement, {}, (parentElement: any) => [
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
export function WebModulesHomePartsCompare(__data__: CompareProps = {}, systemData: any = {}): CompareView {
    return new CompareView(__data__, systemData);
}
export default WebModulesHomePartsCompare;
