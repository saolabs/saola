import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.home.getting-started';
const __VIEW_NAMESPACE__ = 'web.modules.home.';
const __VIEW_TYPE__ = 'view';
const __VIEW_CONFIG__ = {
    hasSuperView: true,
    viewType: 'view',
    sections: {
        "content":{
            "type":"long",
            "preloader":false,
            "useVars":false,
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



class GettingStartedViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class GettingStartedView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, GettingStartedViewController);
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

                // Finally lock state updates

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
                { classes: [{ type: 'static', value: "page-hero" }, { type: 'static', value: "page-hero-start" }] },
                (parentElement) => [
                this.html(`90a6e493`, "div", parentElement, {}, (parentElement) => [
                    this.html(`f515bf66`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`e2f86203`, "span", parentElement, {}, (parentElement) => [
                            this.text('04 / GETTING STARTED')
                        ]),
                        this.text(' Từ route đầu tiên')
                        ]),
                    this.html(`9b0938cb`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Giữ cách Laravel nghĩ.'),
                        this.html(`f7127348`, "br", parentElement, {}),
                        this.html(`d4f4199d`, "em", parentElement, {}, (parentElement) => [
                            this.text('Thêm cách SPA chạy.')
                        ])
                    ])
                ]),
                this.html(`5f82dcd4`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`70182674`, "p", parentElement, {}, (parentElement) => [
                        this.text('Bắt đầu từ module, route và controller quen thuộc; Saola thêm view source và pipeline biên dịch phía trên chúng.')
                    ]),
                    this.html(`87f0a97e`, "dl", parentElement, {}, (parentElement) => [
                        this.html(`8fd0466f`, "div", parentElement, {}, (parentElement) => [
                            this.html(`e3488b5f`, "dt", parentElement, {}, (parentElement) => [
                                this.text('TIME TO MODEL')
                            ]),
                            this.html(`cf7b0d19`, "dd", parentElement, {}, (parentElement) => [
                                this.text('4 bước')
                            ])
                        ]),
                        this.html(`a8712dd1`, "div", parentElement, {}, (parentElement) => [
                            this.html(`fc9334e8`, "dt", parentElement, {}, (parentElement) => [
                                this.text('REQUIRES')
                            ]),
                            this.html(`647f0f87`, "dd", parentElement, {}, (parentElement) => [
                                this.text('PHP + Node.js')
                            ])
                        ])
                    ])
                    ])
                ]),
            this.html(`8aa0772c`, "section", parentElement,
                { classes: [{ type: 'static', value: "start-layout" }] },
                (parentElement) => [
                this.html(`aa1e3cea`, "aside", parentElement, {}, (parentElement) => [
                    this.html(`c2b3fe81`, "span", parentElement, {}, (parentElement) => [
                        this.text('TRÊN TRANG NÀY')
                    ]),
                    this.html(`dea58466`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#module" } } },
                        (parentElement) => [
                        this.text('01 / Module')
                        ]),
                    this.html(`a3e2bfb4`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#view" } } },
                        (parentElement) => [
                        this.text('02 / View')
                        ]),
                    this.html(`d4138949`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#compile" } } },
                        (parentElement) => [
                        this.text('03 / Compile')
                        ]),
                    this.html(`535ba0c1`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#verify" } } },
                        (parentElement) => [
                        this.text('04 / Verify')
                        ])
                ]),
                this.html(`7f8af112`, "div", parentElement,
                    { classes: [{ type: 'static', value: "start-steps" }] },
                    (parentElement) => [
                    this.html(`1f6b5560`, "article", parentElement,
                        { attrs: { "id": { type: 'static', value: "module" } } },
                        (parentElement) => [
                        this.html(`47d8cb11`, "span", parentElement, {}, (parentElement) => [
                            this.text('01')
                        ]),
                        this.html(`ba89594d`, "div", parentElement, {}, (parentElement) => [
                            this.html(`def71512`, "p", parentElement,
                                { classes: [{ type: 'static', value: "kicker" }] },
                                (parentElement) => [
                                this.html(`23f105f9`, "span", parentElement, {}, (parentElement) => [
                                    this.text('ROUTE')
                                ]),
                                this.text(' Module first')
                                ]),
                            this.html(`4b7a5bc6`, "h2", parentElement, {}, (parentElement) => [
                                this.text('Khai báo route trong context.')
                            ]),
                            this.html(`ab0a3b37`, "p", parentElement, {}, (parentElement) => [
                                this.text('Module giữ controller, service và route gần nhau. Context quyết định registry và asset bundle nào phục vụ request.')
                            ]),
                            this.html(`94a4005c`, "pre", parentElement, {}, (parentElement) => [
                                this.html(`7ec5696d`, "code", parentElement, {}, (parentElement) => [
                                    this.html(`446c4d45`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }] },
                                        (parentElement) => [
                                        this.text('System::context(\'web\')')
                                        ]),
                                    this.html(`6dc93808`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                        (parentElement) => [
                                        this.text('->module(\'home\', [\'prefix\' => \'/\'])')
                                        ]),
                                    this.html(`15f30214`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                        (parentElement) => [
                                        this.text('->controller(HomeController::class)')
                                        ]),
                                    this.html(`64eb60a4`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                        (parentElement) => [
                                        this.text('->group(function ($module) {')
                                        ]),
                                    this.html(`f7bb3fed`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                        (parentElement) => [
                                        this.text('$module->get(\'/\', \'index\')->name(\'index\');')
                                        ]),
                                    this.html(`e279d126`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                        (parentElement) => [
                                        this.text('});')
                                        ])
                                ])
                            ])
                        ])
                        ]),
                    this.html(`e6209cd3`, "article", parentElement,
                        { attrs: { "id": { type: 'static', value: "view" } } },
                        (parentElement) => [
                        this.html(`ae8d7665`, "span", parentElement, {}, (parentElement) => [
                            this.text('02')
                        ]),
                        this.html(`58758ee5`, "div", parentElement, {}, (parentElement) => [
                            this.html(`f8b9c4b1`, "p", parentElement,
                                { classes: [{ type: 'static', value: "kicker" }] },
                                (parentElement) => [
                                this.html(`d187680d`, "span", parentElement, {}, (parentElement) => [
                                    this.text('VIEW')
                                ]),
                                this.text(' One source')
                                ]),
                            this.html(`4d8bc4a7`, "h2", parentElement, {}, (parentElement) => [
                                this.text('Tạo view '),
                                this.html(`a4e70924`, "code", parentElement, {}, (parentElement) => [
                                    this.text('.sao')
                                ]),
                                this.text('.')
                            ]),
                            this.html(`122ad73f`, "p", parentElement, {}, (parentElement) => [
                                this.text('Template có thể extends layout, điền block, khai báo state và gắn event. Compiler dùng cùng nguồn để tạo Blade và JavaScript.')
                            ]),
                            this.html(`9a1ef381`, "pre", parentElement, {}, (parentElement) => [
                                this.html(`2f148195`, "code", parentElement, {}, (parentElement) => [
                                    this.html(`f8da83dd`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }] },
                                        (parentElement) => [
                                        this.html(`44a472ba`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "directive-token" }] },
                                            (parentElement) => [
                                            this.text('states({ count: 0 })')
                                            ])
                                        ]),
                                    this.html(`3f514910`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-line-gap" }], attrs: { "aria-hidden": { type: 'static', value: "true" } } }),
                                    this.html(`a266d24c`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }] },
                                        (parentElement) => [
                                        this.html(`50915aae`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "html-token" }] },
                                            (parentElement) => [
                                            this.text('template')
                                            ])
                                        ]),
                                    this.html(`9dd26e3f`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                        (parentElement) => [
                                        this.html(`3cf24bec`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "directive-token" }] },
                                            (parentElement) => [
                                            this.text('extends(__layout__ + "public")')
                                            ])
                                        ]),
                                    this.html(`46f645ff`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                        (parentElement) => [
                                        this.html(`b842ad0d`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "directive-token" }] },
                                            (parentElement) => [
                                            this.text('block(\'content\')')
                                            ])
                                        ]),
                                    this.html(`5d31326d`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                        (parentElement) => [
                                        this.html(`0935a85d`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "html-token" }] },
                                            (parentElement) => [
                                            this.text('button '),
                                            this.html(`3539f645`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "directive-token" }] },
                                                (parentElement) => [
                                                this.text('click(setCount(count + 1))')
                                                ])
                                            ])
                                        ]),
                                    this.html(`fb835cec`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-3" }] },
                                        (parentElement) => [
                                        this.text('Count: '),
                                        this.html(`3a278e82`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "mustache-token" }] },
                                            (parentElement) => [
                                            this.text('count')
                                            ])
                                        ]),
                                    this.html(`07c89880`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                        (parentElement) => [
                                        this.html(`2b43d542`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "html-token" }, { type: 'static', value: "html-token-close" }] },
                                            (parentElement) => [
                                            this.text('button')
                                            ])
                                        ]),
                                    this.html(`acbcb9ed`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                        (parentElement) => [
                                        this.html(`d51c4d8b`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "directive-token" }] },
                                            (parentElement) => [
                                            this.text('endblock')
                                            ])
                                        ]),
                                    this.html(`879f92ac`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }] },
                                        (parentElement) => [
                                        this.html(`c0050a20`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "html-token" }, { type: 'static', value: "html-token-close" }] },
                                            (parentElement) => [
                                            this.text('template')
                                            ])
                                        ])
                                ])
                            ])
                        ])
                        ]),
                    this.html(`d548dd48`, "article", parentElement,
                        { attrs: { "id": { type: 'static', value: "compile" } } },
                        (parentElement) => [
                        this.html(`89739934`, "span", parentElement, {}, (parentElement) => [
                            this.text('03')
                        ]),
                        this.html(`784c7189`, "div", parentElement, {}, (parentElement) => [
                            this.html(`af5a4a4d`, "p", parentElement,
                                { classes: [{ type: 'static', value: "kicker" }] },
                                (parentElement) => [
                                this.html(`b64ca86e`, "span", parentElement, {}, (parentElement) => [
                                    this.text('BUILD')
                                ]),
                                this.text(' Dual output')
                                ]),
                            this.html(`21b0dbb1`, "h2", parentElement, {}, (parentElement) => [
                                this.text('Compile đúng context.')
                            ]),
                            this.html(`cb08af7f`, "p", parentElement, {}, (parentElement) => [
                                this.text('Build tạo Blade view, JavaScript view registry và bundle client tương ứng. Watch mode giữ hai output đồng bộ trong lúc phát triển.')
                            ]),
                            this.html(`57bd1b01`, "pre", parentElement, {}, (parentElement) => [
                                this.html(`7227e988`, "code", parentElement, {}, (parentElement) => [
                                    this.html(`907e23d5`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }] },
                                        (parentElement) => [
                                        this.text('npm run build:views:web')
                                        ]),
                                    this.html(`5fdfd348`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }] },
                                        (parentElement) => [
                                        this.text('npm run build:web')
                                        ]),
                                    this.html(`e2320fc9`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-line-gap" }], attrs: { "aria-hidden": { type: 'static', value: "true" } } }),
                                    this.html(`cffa3169`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-comment" }] },
                                        (parentElement) => [
                                        this.text('# development')
                                        ]),
                                    this.html(`2c49ca03`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "code-line" }] },
                                        (parentElement) => [
                                        this.text('npm run dev:web')
                                        ])
                                ])
                            ])
                        ])
                        ]),
                    this.html(`641beadb`, "article", parentElement,
                        { attrs: { "id": { type: 'static', value: "verify" } } },
                        (parentElement) => [
                        this.html(`cfb82249`, "span", parentElement, {}, (parentElement) => [
                            this.text('04')
                        ]),
                        this.html(`b49c74a5`, "div", parentElement, {}, (parentElement) => [
                            this.html(`24980353`, "p", parentElement,
                                { classes: [{ type: 'static', value: "kicker" }] },
                                (parentElement) => [
                                this.html(`b9eb5b9d`, "span", parentElement, {}, (parentElement) => [
                                    this.text('VERIFY')
                                ]),
                                this.text(' Both paths')
                                ]),
                            this.html(`c99867f7`, "h2", parentElement, {}, (parentElement) => [
                                this.text('Kiểm tra SSR lẫn SPA.')
                            ]),
                            this.html(`d15a019c`, "p", parentElement, {}, (parentElement) => [
                                this.text('Tải trực tiếp URL để xác nhận HTML đầu tiên, sau đó điều hướng nội bộ, tương tác state, back/forward và kiểm tra không có listener trùng.')
                            ]),
                            this.html(`12c31522`, "ul", parentElement,
                                { classes: [{ type: 'static', value: "check-list" }] },
                                (parentElement) => [
                                this.html(`ef3dd2af`, "li", parentElement, {}, (parentElement) => [
                                    this.text('View có nội dung khi JavaScript chưa chạy')
                                ]),
                                this.html(`d6abe084`, "li", parentElement, {}, (parentElement) => [
                                    this.text('Hydration không tạo DOM hoặc event lần hai')
                                ]),
                                this.html(`596911b8`, "li", parentElement, {}, (parentElement) => [
                                    this.text('Route context đúng với web/admin/mobile')
                                ]),
                                this.html(`e376ef6a`, "li", parentElement, {}, (parentElement) => [
                                    this.text('Rerender chỉ thay vùng reactive liên quan')
                                ])
                                ])
                        ])
                        ])
                    ])
                ]),
            this.html(`6c26f9b7`, "section", parentElement,
                { classes: [{ type: 'static', value: "start-cta" }] },
                (parentElement) => [
                this.html(`ce6a96bf`, "div", parentElement, {}, (parentElement) => [
                    this.html(`5a71cd5f`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`f1acc65a`, "span", parentElement, {}, (parentElement) => [
                            this.text('WORKING FIXTURE')
                        ]),
                        this.text(' Đừng chỉ đọc sơ đồ')
                        ]),
                    this.html(`98293aba`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Xem state và navigation'),
                        this.html(`c006637c`, "br", parentElement, {}),
                        this.text('trên một view đang chạy.')
                    ])
                ]),
                this.html(`c6b09e65`, "a", parentElement,
                    { classes: [{ type: 'static', value: "button" }, { type: 'static', value: "button-light" }], attrs: { "href": { type: 'static', value: "/todo-list" } } },
                    (parentElement) => [
                    this.text('Mở Todo demo '),
                    this.html(`3d37044f`, "span", parentElement, {}, (parentElement) => [
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
export function WebModulesHomeGettingStarted(__data__ = {}, systemData = {}) {
    return new GettingStartedView(__data__, systemData);
}
export default WebModulesHomeGettingStarted;
