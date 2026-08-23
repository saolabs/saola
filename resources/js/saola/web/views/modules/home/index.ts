import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.home.index';
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



/**
 * Props của view — sinh tự động từ @props/@vars, không sửa tay.
 * Optional hết vì khai báo nào cũng có default.
 */
export interface IndexProps {
    /** viewId server gán khi hydrate */
    __SSR_VIEW_ID__?: string;
    [key: string]: any;
}

class IndexViewController extends ViewController {
    constructor(view: View) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this as any).setStaticConfig === 'function') {
            (this as any).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this as any).config = __VIEW_CONFIG__;
        }
    }
}

class IndexView extends View {
    constructor(__data__: IndexProps = {}, systemData: any = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, IndexViewController);
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
        const set$selectedSignal = __STATE__.__.register('selectedSignal');
        let selectedSignal: any = 'source';
        const setSelectedSignal = (state: any) => {
            selectedSignal = state;
            set$selectedSignal(state);
        };
        __STATE__.__.setters.setSelectedSignal = setSelectedSignal;
        __STATE__.__.setters.selectedSignal = setSelectedSignal;
        const update$selectedSignal = (value: any) => {
            if(__STATE__.__.canUpdateStateByKey){
                updateStateByKey('selectedSignal', value);
                selectedSignal = value;
            }
        };
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
            name: 'HomePage'
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
            commitConstructorData: function(this: any) {
                // Then update states from data
                update$selectedSignal('source');
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
            this.block('block-content', 'content', (parentElement: any) => [
            this.html(`b4052a35`, "section", parentElement,
                { classes: [{ type: 'static', value: "home-hero" }] },
                (parentElement: any) => [
                this.html(`90a6e493`, "div", parentElement,
                    { classes: [{ type: 'static', value: "home-hero-copy" }] },
                    (parentElement: any) => [
                    this.html(`f515bf66`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement: any) => [
                        this.html(`e2f86203`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('SAOLA / ECOSYSTEM 01')
                        ]),
                        this.text(' Nền tảng ứng dụng Laravel-native')
                        ]),
                    this.html(`9b0938cb`, "h1", parentElement, {}, (parentElement: any) => [
                        this.text('Một codebase.'),
                        this.html(`f7127348`, "br", parentElement, {}),
                        this.html(`d4f4199d`, "em", parentElement, {}, (parentElement: any) => [
                            this.text('Hai runtime.')
                        ]),
                        this.html(`e95ae667`, "br", parentElement, {}),
                        this.text('Bốn mặt tiền.')
                    ]),
                    this.html(`7718bb8d`, "p", parentElement,
                        { classes: [{ type: 'static', value: "hero-lead" }] },
                        (parentElement: any) => [
                        this.text('Saola biên dịch một view '),
                        this.html(`cbfb64a4`, "code", parentElement, {}, (parentElement: any) => [
                            this.text('.sao')
                        ]),
                        this.text(' thành Blade cho phản hồi đầu tiên và TypeScript cho mọi tương tác sau đó — cùng một AST, cùng marker, cùng state contract. Server và client không thể kể hai câu chuyện khác nhau.')
                        ]),
                    this.html(`ed82504f`, "div", parentElement,
                        { classes: [{ type: 'static', value: "hero-actions" }] },
                        (parentElement: any) => [
                        this.html(`63bde3ef`, "a", parentElement,
                            { classes: [{ type: 'static', value: "button" }, { type: 'static', value: "button-primary" }], attrs: { "href": { type: 'static', value: "/docs/getting-started" } } },
                            (parentElement: any) => [
                            this.text('Bắt đầu trong 4 bước '),
                            this.html(`fee9a4ad`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('↗')
                            ])
                            ]),
                        this.html(`b589ca24`, "a", parentElement,
                            { classes: [{ type: 'static', value: "text-link" }], attrs: { "href": { type: 'static', value: "#compare" } } },
                            (parentElement: any) => [
                            this.text('Khác gì Livewire & Inertia '),
                            this.html(`c0aad52e`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('→')
                            ])
                            ])
                        ]),
                    this.html(`5e135ba5`, "dl", parentElement,
                        { classes: [{ type: 'static', value: "hero-facts" }] },
                        (parentElement: any) => [
                        this.html(`fe5c8eae`, "div", parentElement, {}, (parentElement: any) => [
                            this.html(`d73d3967`, "dt", parentElement, {}, (parentElement: any) => [
                                this.text('BACKEND')
                            ]),
                            this.html(`3947d795`, "dd", parentElement, {}, (parentElement: any) => [
                                this.text('Laravel 12 · 13')
                            ])
                        ]),
                        this.html(`50a0f69c`, "div", parentElement, {}, (parentElement: any) => [
                            this.html(`22a4978d`, "dt", parentElement, {}, (parentElement: any) => [
                                this.text('FIRST PAINT')
                            ]),
                            this.html(`8196725f`, "dd", parentElement, {}, (parentElement: any) => [
                                this.text('Blade SSR')
                            ])
                        ]),
                        this.html(`ecb37508`, "div", parentElement, {}, (parentElement: any) => [
                            this.html(`4f2b888b`, "dt", parentElement, {}, (parentElement: any) => [
                                this.text('SAU HYDRATE')
                            ]),
                            this.html(`0e24af22`, "dd", parentElement, {}, (parentElement: any) => [
                                this.text('Reactive SPA')
                            ])
                        ])
                        ])
                    ]),
                this.html(`5f82dcd4`, "div", parentElement,
                    { classes: [{ type: 'static', value: "system-instrument" }], attrs: { "aria-label": { type: 'static', value: "Luồng biên dịch và render của Saola" } } },
                    (parentElement: any) => [
                    this.html(`01b28266`, "div", parentElement,
                        { classes: [{ type: 'static', value: "instrument-top" }] },
                        (parentElement: any) => [
                        this.html(`37bb2111`, "span", parentElement, {}, (parentElement: any) => [
                            this.html(`f21de37f`, "i", parentElement, {}),
                            this.text(' ROUTE / HOME')
                        ]),
                        this.html(`483a565a`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('CONTEXT: WEB')
                        ])
                        ]),
                    this.html(`81148f49`, "div", parentElement,
                        { classes: [{ type: 'static', value: "source-cell" }] },
                        (parentElement: any) => [
                        this.html(`f8a7486f`, "div", parentElement,
                            { classes: [{ type: 'static', value: "cell-label" }] },
                            (parentElement: any) => [
                            this.text('01 / SOURCE OF TRUTH')
                            ]),
                        this.html(`aeba9a26`, "strong", parentElement, {}, (parentElement: any) => [
                            this.text('home.sao')
                        ]),
                        this.html(`19524746`, "code", parentElement, {}, (parentElement: any) => [
                            this.text('<template> + state + style')
                        ])
                        ]),
                    this.html(`328c95ab`, "div", parentElement,
                        { classes: [{ type: 'static', value: "branch-line" }] },
                        (parentElement: any) => [
                        this.html(`49a217a8`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('COMPILE')
                        ])
                        ]),
                    this.html(`ac51d251`, "div", parentElement,
                        { classes: [{ type: 'static', value: "runtime-pair" }] },
                        (parentElement: any) => [
                        this.html(`1db15f13`, "article", parentElement, {}, (parentElement: any) => [
                            this.html(`c3a538e4`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('02A / SERVER')
                            ]),
                            this.html(`cd192bfa`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Blade')
                            ]),
                            this.html(`e2e22d5c`, "small", parentElement, {}, (parentElement: any) => [
                                this.text('HTML hoàn chỉnh')
                            ])
                        ]),
                        this.html(`498ed0c5`, "article", parentElement, {}, (parentElement: any) => [
                            this.html(`e8e4ac97`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('02B / CLIENT')
                            ]),
                            this.html(`6ee7879c`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('JavaScript')
                            ]),
                            this.html(`8d001972`, "small", parentElement, {}, (parentElement: any) => [
                                this.text('View contract')
                            ])
                        ])
                        ]),
                    this.html(`76eb295c`, "div", parentElement,
                        { classes: [{ type: 'static', value: "instrument-readout" }] },
                        (parentElement: any) => [
                        this.html(`a7c0e4a6`, "button", parentElement,
                            { classes: [{ type: 'binding', value: "active", factory: () => selectedSignal === 'source', stateKeys: ["selectedSignal"] }], events: { click: [(event: any) => setSelectedSignal('source')] } },
                            (parentElement: any) => [
                            this.text('SOURCE')
                            ]),
                        this.html(`d9002f86`, "button", parentElement,
                            { classes: [{ type: 'binding', value: "active", factory: () => selectedSignal === 'hydrate', stateKeys: ["selectedSignal"] }], events: { click: [(event: any) => setSelectedSignal('hydrate')] } },
                            (parentElement: any) => [
                            this.text('HYDRATE')
                            ]),
                        this.html(`c2ac9d7a`, "button", parentElement,
                            { classes: [{ type: 'binding', value: "active", factory: () => selectedSignal === 'navigate', stateKeys: ["selectedSignal"] }], events: { click: [(event: any) => setSelectedSignal('navigate')] } },
                            (parentElement: any) => [
                            this.text('NAVIGATE')
                            ]),
                        this.reactive(`3bcea458`, "if", parentReactive, parentElement, ["selectedSignal"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (selectedSignal === 'hydrate') {
                                reactiveContents.push(
                                this.html(`9851b44b`, "p", parentElement, {}, (parentElement: any) => [
                                    this.html(`591588a3`, "b", parentElement, {}, (parentElement: any) => [
                                        this.text('DOM được nhận lại.')
                                    ]),
                                    this.text(' Runtime claim marker có sẵn, nối state và event mà không dựng lại toàn bộ trang.')
                                ])
                                );
                            }
                            else if (selectedSignal === 'navigate') {
                                reactiveContents.push(
                                this.html(`c9d2d458`, "p", parentElement, {}, (parentElement: any) => [
                                    this.html(`2102ae8f`, "b", parentElement, {}, (parentElement: any) => [
                                        this.text('Layout được giữ lại.')
                                    ]),
                                    this.text(' Router chỉ thay nhánh view cần đổi; context route chọn đúng registry cho request hiện tại.')
                                ])
                                );
                            }
                            else {
                                reactiveContents.push(
                                this.html(`0be2d6a8`, "p", parentElement, {}, (parentElement: any) => [
                                    this.html(`704cd593`, "b", parentElement, {}, (parentElement: any) => [
                                        this.text('Một nguồn được biên dịch hai hướng.')
                                    ]),
                                    this.text(' Blade và JavaScript tuân theo cùng AST thay vì hai implementation song song.')
                                ])
                                );
                            }
                            return reactiveContents;
                        })
                        ])
                    ])
                ]),
            this.html(`8aa0772c`, "section", parentElement,
                { classes: [{ type: 'static', value: "orientation-strip" }], attrs: { "aria-label": { type: 'static', value: "Định vị Saola" } } },
                (parentElement: any) => [
                this.html(`35bf6e9d`, "p", parentElement, {}, (parentElement: any) => [
                    this.html(`b76d6580`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('Saola không thay Laravel.')
                    ]),
                    this.text(' Saola nối phần Laravel đã làm tốt với trải nghiệm SPA mà đội sản phẩm cần.')
                ]),
                this.html(`7f8af112`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`14b47dbd`, "strong", parentElement, {}, (parentElement: any) => [
                        this.text('SSR')
                    ]),
                    this.html(`872e3af2`, "small", parentElement, {}, (parentElement: any) => [
                        this.text('đúng ngay từ request đầu')
                    ])
                ]),
                this.html(`9b976db3`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`9aa2ffa8`, "strong", parentElement, {}, (parentElement: any) => [
                        this.text('CSR')
                    ]),
                    this.html(`521ea42c`, "small", parentElement, {}, (parentElement: any) => [
                        this.text('nhanh sau hydration')
                    ])
                ]),
                this.html(`cfc01898`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`ccc1deb9`, "strong", parentElement, {}, (parentElement: any) => [
                        this.text('CONTEXT')
                    ]),
                    this.html(`6d1fc048`, "small", parentElement, {}, (parentElement: any) => [
                        this.text('web · admin · api · mobile')
                    ])
                ])
                ]),
            this.html(`6c26f9b7`, "section", parentElement,
                { classes: [{ type: 'static', value: "home-section" }, { type: 'static', value: "home-section--fog" }], attrs: { "id": { type: 'static', value: "pain" } } },
                (parentElement: any) => [
                this.html(`ce6a96bf`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }, { type: 'static', value: "section-head-split" }] },
                    (parentElement: any) => [
                    this.html(`6eb86fdc`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`61e46bff`, "p", parentElement,
                            { classes: [{ type: 'static', value: "kicker" }] },
                            (parentElement: any) => [
                            this.html(`8c6cc72b`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('NỖI ĐAU')
                            ]),
                            this.text(' Vì sao chuyện này đáng sửa')
                            ]),
                        this.html(`9701c99f`, "h2", parentElement, {}, (parentElement: any) => [
                            this.text('Chẻ đôi một sản phẩm web'),
                            this.html(`9d020169`, "br", parentElement, {}),
                            this.text('tốn nhiều hơn bạn nghĩ.')
                        ])
                    ]),
                    this.html(`6cc41004`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Không phải vì lập trình viên làm ẩu. Vì kiến trúc phổ biến hôm nay bắt một tính năng phải tồn tại ở hai nơi, viết bằng hai ngôn ngữ, hỏng theo hai kiểu khác nhau — và chi phí đó không nằm trong ước lượng ban đầu bao giờ.')
                    ])
                    ]),
                this.html(`d44023e9`, "div", parentElement,
                    { classes: [{ type: 'static', value: "pain-grid" }] },
                    (parentElement: any) => [
                    this.html(`e3e123df`, "article", parentElement,
                        { classes: [{ type: 'static', value: "pain-card" }] },
                        (parentElement: any) => [
                        this.html(`5cadfa06`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('01 / TRÙNG LẶP')
                        ]),
                        this.html(`6efb1915`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Một tính năng, hai lần viết')
                        ]),
                        this.html(`4a13b743`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Form đăng ký sống hai lần: validate ở Laravel, rồi validate lại ở frontend. Sửa một quy tắc là mở hai pull request và mong không ai quên nửa còn lại.')
                        ])
                        ]),
                    this.html(`04b24ab0`, "article", parentElement,
                        { classes: [{ type: 'static', value: "pain-card" }] },
                        (parentElement: any) => [
                        this.html(`2dd4b699`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('02 / TRANG RỖNG')
                        ]),
                        this.html(`8d51d8aa`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('SEO đổi lấy trải nghiệm')
                        ]),
                        this.html(`53b76b5c`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('SPA thuần trả về một '),
                            this.html(`afefc2c3`, "code", parentElement, {}, (parentElement: any) => [
                                this.text('div')
                            ]),
                            this.text(' trống rồi chờ JavaScript. Crawler, share preview và người dùng mạng chậm nhận cùng một thứ: chưa có gì cả.')
                        ])
                        ]),
                    this.html(`ddf2d3a9`, "article", parentElement,
                        { classes: [{ type: 'static', value: "pain-card" }] },
                        (parentElement: any) => [
                        this.html(`8d5d9746`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('03 / API THỪA')
                        ]),
                        this.html(`ad421324`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Tầng REST chỉ để tự nói chuyện')
                        ]),
                        this.html(`71463dd8`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Bạn dựng endpoint, resource, transformer, phân trang, versioning — cho đúng một client duy nhất là frontend của chính mình.')
                        ])
                        ]),
                    this.html(`b80fdbe5`, "article", parentElement,
                        { classes: [{ type: 'static', value: "pain-card" }] },
                        (parentElement: any) => [
                        this.html(`24bc2336`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('04 / LỆCH PHA')
                        ]),
                        this.html(`4ba8c07a`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Server một đằng, client một nẻo')
                        ]),
                        this.html(`042aaf2c`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Khi HTML server và cây component client được viết riêng, chúng sẽ trôi khỏi nhau. Triệu chứng là nhấp nháy, mất state, hoặc DOM nhân đôi sau hydrate.')
                        ])
                        ]),
                    this.html(`f46ead31`, "article", parentElement,
                        { classes: [{ type: 'static', value: "pain-card" }] },
                        (parentElement: any) => [
                        this.html(`7856d9b6`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('05 / BA THẾ GIỚI')
                        ]),
                        this.html(`59b0f418`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Mỗi mặt tiền một stack')
                        ]),
                        this.html(`8b20d85e`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Admin dùng một framework, web công khai dùng framework khác, webview mobile lại một bản riêng. Ba build, ba lần vá cùng một lỗi bảo mật.')
                        ])
                        ]),
                    this.html(`e7557b2e`, "article", parentElement,
                        { classes: [{ type: 'static', value: "pain-card" }] },
                        (parentElement: any) => [
                        this.html(`789688c6`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('06 / RÒ RỈ')
                        ]),
                        this.html(`998f8903`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Không ai biết view chết lúc nào')
                        ]),
                        this.html(`43fa3052`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Điều hướng SPA mà không có contract dọn dẹp thì subscription, interval và request treo cứ tích lại, cho tới khi tab nặng dần rồi giật.')
                        ])
                        ])
                    ])
                ]),
            this.html(`4e212027`, "section", parentElement,
                { classes: [{ type: 'static', value: "home-section" }], attrs: { "id": { type: 'static', value: "solution" } } },
                (parentElement: any) => [
                this.html(`1628defa`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }, { type: 'static', value: "section-head-split" }] },
                    (parentElement: any) => [
                    this.html(`5fb363e4`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`ab6a4acc`, "p", parentElement,
                            { classes: [{ type: 'static', value: "kicker" }] },
                            (parentElement: any) => [
                            this.html(`586f8010`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('GIẢI PHÁP')
                            ]),
                            this.text(' Trả lời từng cái một')
                            ]),
                        this.html(`79277e05`, "h2", parentElement, {}, (parentElement: any) => [
                            this.text('Mỗi nỗi đau ở trên'),
                            this.html(`90ec7758`, "br", parentElement, {}),
                            this.text('có một cơ chế đối ứng.')
                        ])
                    ]),
                    this.html(`24ea6ba9`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Saola không giải quyết bằng quy ước hay kỷ luật đội ngũ. Mỗi dòng dưới đây tương ứng với một cơ chế cụ thể trong compiler hoặc runtime, có tài liệu và có thể kiểm chứng bằng cách mở DevTools trên chính trang này.')
                    ])
                    ]),
                this.html(`281112e1`, "div", parentElement,
                    { classes: [{ type: 'static', value: "solution-rows" }] },
                    (parentElement: any) => [
                    this.html(`3fbdfc8e`, "article", parentElement,
                        { classes: [{ type: 'static', value: "solution-row" }] },
                        (parentElement: any) => [
                        this.html(`a24493e4`, "div", parentElement,
                            { classes: [{ type: 'static', value: "sr-pain" }] },
                            (parentElement: any) => [
                            this.html(`c2e5c53c`, "span", parentElement,
                                { classes: [{ type: 'static', value: "sr-label" }] },
                                (parentElement: any) => [
                                this.text('Nỗi đau 01')
                                ]),
                            this.html(`6c970d3b`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Một tính năng phải viết hai lần, hai nơi.')
                            ])
                            ]),
                        this.html(`94413243`, "i", parentElement, {}, (parentElement: any) => [
                            this.text('→')
                        ]),
                        this.html(`a563f4da`, "div", parentElement,
                            { classes: [{ type: 'static', value: "sr-fix" }] },
                            (parentElement: any) => [
                            this.html(`b0003dbb`, "span", parentElement,
                                { classes: [{ type: 'static', value: "sr-label" }] },
                                (parentElement: any) => [
                                this.text('Cơ chế')
                                ]),
                            this.html(`35cfb9ab`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Một file '),
                                this.html(`afae2ada`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('.sao')
                                ]),
                                this.text(', hai đầu ra')
                            ]),
                            this.html(`13cd0b94`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Compiler parse một lần thành AST rồi emit Blade và TypeScript từ cùng cây đó. Không có bản dịch tay nào ở giữa để trôi lệch.')
                            ])
                            ]),
                        this.html(`14dabfc4`, "a", parentElement,
                            { classes: [{ type: 'static', value: "sr-link" }], attrs: { "href": { type: 'static', value: "/docs/compiler" } } },
                            (parentElement: any) => [
                            this.text('Compiler & AST ↗')
                            ])
                        ]),
                    this.html(`933ef651`, "article", parentElement,
                        { classes: [{ type: 'static', value: "solution-row" }] },
                        (parentElement: any) => [
                        this.html(`45ff2ebb`, "div", parentElement,
                            { classes: [{ type: 'static', value: "sr-pain" }] },
                            (parentElement: any) => [
                            this.html(`473eb5e9`, "span", parentElement,
                                { classes: [{ type: 'static', value: "sr-label" }] },
                                (parentElement: any) => [
                                this.text('Nỗi đau 02')
                                ]),
                            this.html(`48be5b5e`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Trang rỗng chờ JavaScript tải xong.')
                            ])
                            ]),
                        this.html(`e79d298b`, "i", parentElement, {}, (parentElement: any) => [
                            this.text('→')
                        ]),
                        this.html(`7d819f93`, "div", parentElement,
                            { classes: [{ type: 'static', value: "sr-fix" }] },
                            (parentElement: any) => [
                            this.html(`a9ebb148`, "span", parentElement,
                                { classes: [{ type: 'static', value: "sr-label" }] },
                                (parentElement: any) => [
                                this.text('Cơ chế')
                                ]),
                            this.html(`69cb5c3f`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('SSR thật, không phải prerender')
                            ]),
                            this.html(`a52c499d`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Laravel render HTML đầy đủ có nội dung và cấu trúc. JavaScript đến sau để nâng cấp trang đó, không phải để dựng nó lên từ đầu.')
                            ])
                            ]),
                        this.html(`b73de009`, "a", parentElement,
                            { classes: [{ type: 'static', value: "sr-link" }], attrs: { "href": { type: 'static', value: "/docs/lifecycle" } } },
                            (parentElement: any) => [
                            this.text('Vòng đời & marker ↗')
                            ])
                        ]),
                    this.html(`2bed8055`, "article", parentElement,
                        { classes: [{ type: 'static', value: "solution-row" }] },
                        (parentElement: any) => [
                        this.html(`bd0a3f86`, "div", parentElement,
                            { classes: [{ type: 'static', value: "sr-pain" }] },
                            (parentElement: any) => [
                            this.html(`369417b0`, "span", parentElement,
                                { classes: [{ type: 'static', value: "sr-label" }] },
                                (parentElement: any) => [
                                this.text('Nỗi đau 03')
                                ]),
                            this.html(`bd920f3d`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Tầng API sinh ra chỉ để phục vụ chính mình.')
                            ])
                            ]),
                        this.html(`f37738b3`, "i", parentElement, {}, (parentElement: any) => [
                            this.text('→')
                        ]),
                        this.html(`fcca5910`, "div", parentElement,
                            { classes: [{ type: 'static', value: "sr-fix" }] },
                            (parentElement: any) => [
                            this.html(`6026da1c`, "span", parentElement,
                                { classes: [{ type: 'static', value: "sr-label" }] },
                                (parentElement: any) => [
                                this.text('Cơ chế')
                                ]),
                            this.html(`d0046f7b`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Controller trả thẳng view response')
                            ]),
                            this.html(`2f2ee7f3`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Dữ liệu đi vào view qua '),
                                this.html(`f65cfaa1`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('@vars')
                                ]),
                                this.text(' ngay trong lần render đầu. API chỉ cần tồn tại khi thật sự có client thứ hai.')
                            ])
                            ]),
                        this.html(`285969ef`, "a", parentElement,
                            { classes: [{ type: 'static', value: "sr-link" }], attrs: { "href": { type: 'static', value: "/docs/contexts" } } },
                            (parentElement: any) => [
                            this.text('Context & controller ↗')
                            ])
                        ]),
                    this.html(`7dc584af`, "article", parentElement,
                        { classes: [{ type: 'static', value: "solution-row" }] },
                        (parentElement: any) => [
                        this.html(`8023e810`, "div", parentElement,
                            { classes: [{ type: 'static', value: "sr-pain" }] },
                            (parentElement: any) => [
                            this.html(`e18a1449`, "span", parentElement,
                                { classes: [{ type: 'static', value: "sr-label" }] },
                                (parentElement: any) => [
                                this.text('Nỗi đau 04')
                                ]),
                            this.html(`25d469c5`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Hydration lệch giữa HTML server và cây client.')
                            ])
                            ]),
                        this.html(`10be1764`, "i", parentElement, {}, (parentElement: any) => [
                            this.text('→')
                        ]),
                        this.html(`94621ce2`, "div", parentElement,
                            { classes: [{ type: 'static', value: "sr-fix" }] },
                            (parentElement: any) => [
                            this.html(`c4b9d13e`, "span", parentElement,
                                { classes: [{ type: 'static', value: "sr-label" }] },
                                (parentElement: any) => [
                                this.text('Cơ chế')
                                ]),
                            this.html(`aaa1d1dc`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Marker do một nơi duy nhất sinh ra')
                            ]),
                            this.html(`a6ff1062`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('ViewStorageManager phía server và runtime phía client dùng chung một bộ id. Runtime claim DOM có sẵn thay vì render lại rồi so sánh.')
                            ])
                            ]),
                        this.html(`cb79db45`, "a", parentElement,
                            { classes: [{ type: 'static', value: "sr-link" }], attrs: { "href": { type: 'static', value: "/docs/runtime" } } },
                            (parentElement: any) => [
                            this.text('Runtime & hydration ↗')
                            ])
                        ]),
                    this.html(`76c961ad`, "article", parentElement,
                        { classes: [{ type: 'static', value: "solution-row" }] },
                        (parentElement: any) => [
                        this.html(`4b14f4ba`, "div", parentElement,
                            { classes: [{ type: 'static', value: "sr-pain" }] },
                            (parentElement: any) => [
                            this.html(`d51d8117`, "span", parentElement,
                                { classes: [{ type: 'static', value: "sr-label" }] },
                                (parentElement: any) => [
                                this.text('Nỗi đau 05')
                                ]),
                            this.html(`8a3dff26`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Web, admin và mobile mỗi cái một stack riêng.')
                            ])
                            ]),
                        this.html(`f15fb8a5`, "i", parentElement, {}, (parentElement: any) => [
                            this.text('→')
                        ]),
                        this.html(`3d74b8e1`, "div", parentElement,
                            { classes: [{ type: 'static', value: "sr-fix" }] },
                            (parentElement: any) => [
                            this.html(`a0c86f5b`, "span", parentElement,
                                { classes: [{ type: 'static', value: "sr-label" }] },
                                (parentElement: any) => [
                                this.text('Cơ chế')
                                ]),
                            this.html(`66464ee7`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Bốn context, một lõi')
                            ]),
                            this.html(`ce24d8cc`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Mỗi context có prefix, middleware, registry và bundle riêng nhưng dùng chung module, model và service layer. Context được resolve theo từng request.')
                            ])
                            ]),
                        this.html(`02b07bac`, "a", parentElement,
                            { classes: [{ type: 'static', value: "sr-link" }], attrs: { "href": { type: 'static', value: "/docs/contexts" } } },
                            (parentElement: any) => [
                            this.text('Bốn mặt tiền ↗')
                            ])
                        ]),
                    this.html(`1818bdf1`, "article", parentElement,
                        { classes: [{ type: 'static', value: "solution-row" }] },
                        (parentElement: any) => [
                        this.html(`9b3a3463`, "div", parentElement,
                            { classes: [{ type: 'static', value: "sr-pain" }] },
                            (parentElement: any) => [
                            this.html(`46163f77`, "span", parentElement,
                                { classes: [{ type: 'static', value: "sr-label" }] },
                                (parentElement: any) => [
                                this.text('Nỗi đau 06')
                                ]),
                            this.html(`b3f9900c`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Listener, timer và request treo rò dần theo thời gian.')
                            ])
                            ]),
                        this.html(`c0a9873c`, "i", parentElement, {}, (parentElement: any) => [
                            this.text('→')
                        ]),
                        this.html(`9e5a7a8b`, "div", parentElement,
                            { classes: [{ type: 'static', value: "sr-fix" }] },
                            (parentElement: any) => [
                            this.html(`6e27be5a`, "span", parentElement,
                                { classes: [{ type: 'static', value: "sr-label" }] },
                                (parentElement: any) => [
                                this.text('Cơ chế')
                                ]),
                            this.html(`1f9964ae`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Vòng đời có contract')
                            ]),
                            this.html(`46890a55`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Bảy chuyển trạng thái với hook trước và sau. Tài nguyên của view được dọn theo ref-count đúng lúc view rời màn hình.')
                            ])
                            ]),
                        this.html(`ed024506`, "a", parentElement,
                            { classes: [{ type: 'static', value: "sr-link" }], attrs: { "href": { type: 'static', value: "/docs/lifecycle" } } },
                            (parentElement: any) => [
                            this.text('Bảy trạng thái ↗')
                            ])
                        ])
                    ])
                ]),
            this.html(`5d5c7d30`, "section", parentElement,
                { classes: [{ type: 'static', value: "request-section" }], attrs: { "id": { type: 'static', value: "how" } } },
                (parentElement: any) => [
                this.html(`c070e15f`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }, { type: 'static', value: "compact" }] },
                    (parentElement: any) => [
                    this.html(`1744a884`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement: any) => [
                        this.html(`ae75696d`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('HOW IT WORKS')
                        ]),
                        this.text(' Ba bước, không phép màu')
                        ]),
                    this.html(`e48f2631`, "h2", parentElement, {}, (parentElement: any) => [
                        this.text('Từ một file tới một trang sống.')
                    ])
                    ]),
                this.html(`0b6b725b`, "ol", parentElement,
                    { classes: [{ type: 'static', value: "flow-timeline" }] },
                    (parentElement: any) => [
                    this.html(`1c1eecb4`, "li", parentElement, {}, (parentElement: any) => [
                        this.html(`0a83df8c`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('01')
                        ]),
                        this.html(`5c4be8c7`, "div", parentElement, {}, (parentElement: any) => [
                            this.html(`3eb8a1df`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Viết một view '),
                                this.html(`e8f93c36`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('.sao')
                                ])
                            ]),
                            this.html(`6bbe2fd3`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Khai báo state ở đầu file, viết template bằng cú pháp kiểu JavaScript, đặt method trong '),
                                this.html(`c8c8fe58`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('<script setup>')
                                ]),
                                this.text('.')
                            ])
                        ]),
                        this.html(`d28560ed`, "code", parentElement, {}, (parentElement: any) => [
                            this.text('home.sao')
                        ])
                    ]),
                    this.html(`15fb496b`, "li", parentElement, {}, (parentElement: any) => [
                        this.html(`8cb806c6`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('02')
                        ]),
                        this.html(`a7a9ad7e`, "div", parentElement, {}, (parentElement: any) => [
                            this.html(`d6950877`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Compiler sinh hai đầu ra')
                            ]),
                            this.html(`822589b0`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Một lệnh tạo ra Blade template cho server và view TypeScript cho client, kèm registry ánh xạ view path tới factory.')
                            ])
                        ]),
                        this.html(`b5cedd7a`, "code", parentElement, {}, (parentElement: any) => [
                            this.text('sao-compile web')
                        ])
                    ]),
                    this.html(`8b943b5f`, "li", parentElement, {}, (parentElement: any) => [
                        this.html(`a71770b6`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('03')
                        ]),
                        this.html(`486e1b00`, "div", parentElement, {}, (parentElement: any) => [
                            this.html(`092d412d`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Trang render rồi sống lên')
                            ]),
                            this.html(`c8b8a457`, "p", parentElement, {}, (parentElement: any) => [
                                this.text('Laravel trả HTML đầy đủ; runtime claim đúng DOM đó qua marker rồi tiếp quản state, event và điều hướng.')
                            ])
                        ]),
                        this.html(`7b3ea94a`, "code", parentElement, {}, (parentElement: any) => [
                            this.text('SSR → hydrate → SPA')
                        ])
                    ])
                    ])
                ]),
            this.html(`23947dcc`, "section", parentElement,
                { classes: [{ type: 'static', value: "home-map" }], attrs: { "id": { type: 'static', value: "features" } } },
                (parentElement: any) => [
                this.html(`792dd906`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }] },
                    (parentElement: any) => [
                    this.html(`43f0bf54`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement: any) => [
                        this.html(`7a1057dd`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('FEATURES')
                        ]),
                        this.text(' Cái bạn thật sự nhận được')
                        ]),
                    this.html(`2845409d`, "h2", parentElement, {}, (parentElement: any) => [
                        this.text('Viết một lần.'),
                        this.html(`defee44a`, "br", parentElement, {}),
                        this.text('Chạy đúng ở cả hai đầu.')
                    ]),
                    this.html(`978b7826`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Không phải một thư viện UI đặt cạnh Laravel, mà là một đường biên dịch: cùng một template sinh ra HTML server trả về và view runtime chạy trên trình duyệt.')
                    ])
                    ]),
                this.html(`984dea9b`, "div", parentElement,
                    { classes: [{ type: 'static', value: "map-grid" }] },
                    (parentElement: any) => [
                    this.html(`98381fbc`, "a", parentElement,
                        { classes: [{ type: 'static', value: "map-card" }], attrs: { "href": { type: 'static', value: "/docs/sao-file" } } },
                        (parentElement: any) => [
                        this.html(`0c25e4e8`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('01 / SINGLE SOURCE')
                        ]),
                        this.html(`d0197c91`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Một file, hai đầu ra')
                        ]),
                        this.html(`8122473c`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Template, state, script và style nằm cùng một file. Compiler sinh Blade và TypeScript từ cùng một AST nên hai bên không thể lệch nghĩa.')
                        ]),
                        this.html(`d371ce78`, "i", parentElement, {}, (parentElement: any) => [
                            this.text('Xem cấu trúc .sao ↗')
                        ])
                        ]),
                    this.html(`4edd761c`, "a", parentElement,
                        { classes: [{ type: 'static', value: "map-card" }], attrs: { "href": { type: 'static', value: "/docs/lifecycle" } } },
                        (parentElement: any) => [
                        this.html(`9fa40c8c`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('02 / SSR THẬT')
                        ]),
                        this.html(`d5865fb1`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Nội dung có trước JavaScript')
                        ]),
                        this.html(`14f05824`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Lần tải đầu là HTML hoàn chỉnh. Runtime nhận lại DOM đó qua marker thay vì dựng lại từ trang rỗng.')
                        ]),
                        this.html(`de828156`, "i", parentElement, {}, (parentElement: any) => [
                            this.text('Cơ chế hydration ↗')
                        ])
                        ]),
                    this.html(`c1e4061f`, "a", parentElement,
                        { classes: [{ type: 'static', value: "map-card" }, { type: 'static', value: "map-card-dark" }], attrs: { "href": { type: 'static', value: "/docs/reactivity" } } },
                        (parentElement: any) => [
                        this.html(`4275c618`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('03 / REACTIVE')
                        ]),
                        this.html(`928830c0`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Cập nhật theo vùng marker')
                        ]),
                        this.html(`5f9096d4`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Mỗi '),
                            this.html(`d439c7cd`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement: any) => [
                                this.text('if')
                                ]),
                            this.text(', '),
                            this.html(`7a10eab4`, "code", parentElement,
                                { classes: [{ type: 'static', value: "directive-token" }] },
                                (parentElement: any) => [
                                this.text('foreach')
                                ]),
                            this.text(' và giá trị nội suy là một vùng độc lập. Đổi state chỉ render lại đúng vùng phụ thuộc.')
                        ]),
                        this.html(`d94e6678`, "i", parentElement, {}, (parentElement: any) => [
                            this.text('State & reactivity ↗')
                        ])
                        ]),
                    this.html(`43d99182`, "a", parentElement,
                        { classes: [{ type: 'static', value: "map-card" }], attrs: { "href": { type: 'static', value: "/docs/contexts" } } },
                        (parentElement: any) => [
                        this.html(`a3b7421a`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('04 / ROUTING')
                        ]),
                        this.html(`b24babf7`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Route khai báo theo module')
                        ]),
                        this.html(`7a565795`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Module tự đăng ký route trong context của nó. Không có file route khổng lồ, không cần sửa danh sách khi thêm tính năng.')
                        ]),
                        this.html(`28d3f6bc`, "i", parentElement, {}, (parentElement: any) => [
                            this.text('Context & module ↗')
                        ])
                        ]),
                    this.html(`fab54877`, "a", parentElement,
                        { classes: [{ type: 'static', value: "map-card" }], attrs: { "href": { type: 'static', value: "/docs/runtime" } } },
                        (parentElement: any) => [
                        this.html(`36b0f2cd`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('05 / LIFECYCLE')
                        ]),
                        this.html(`88bcf139`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Vòng đời quan sát được')
                        ]),
                        this.html(`969ebf3a`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Bảy chuyển trạng thái với hook trước và sau. Tài nguyên của view được dọn theo ref-count, không rò khi điều hướng.')
                        ]),
                        this.html(`ff30475d`, "i", parentElement, {}, (parentElement: any) => [
                            this.text('Vòng đời view ↗')
                        ])
                        ]),
                    this.html(`1fe733c5`, "a", parentElement,
                        { classes: [{ type: 'static', value: "map-card" }], attrs: { "href": { type: 'static', value: "/docs/directives" } } },
                        (parentElement: any) => [
                        this.html(`64c0b447`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('06 / DIRECTIVE')
                        ]),
                        this.html(`e77c76cc`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Bốn mươi ba directive')
                        ]),
                        this.html(`699ee186`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Từ khai báo state tới điều khiển luồng, binding hai chiều, quyền và biến ma thuật — chia tám nhóm, mỗi cái có tham chiếu riêng.')
                        ]),
                        this.html(`5e099072`, "i", parentElement, {}, (parentElement: any) => [
                            this.text('Tham chiếu directive ↗')
                        ])
                        ])
                    ])
                ]),
            this.html(`e071d13d`, "section", parentElement,
                { classes: [{ type: 'static', value: "compiler-board" }] },
                (parentElement: any) => [
                this.html(`780a1efa`, "div", parentElement,
                    { classes: [{ type: 'static', value: "code-window" }, { type: 'static', value: "source-window" }] },
                    (parentElement: any) => [
                    this.html(`45ec8f08`, "div", parentElement,
                        { classes: [{ type: 'static', value: "window-bar" }] },
                        (parentElement: any) => [
                        this.html(`254985bd`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('SOURCE')
                        ]),
                        this.html(`83cd4a1c`, "b", parentElement, {}, (parentElement: any) => [
                            this.text('counter.sao')
                        ]),
                        this.html(`e21f34c8`, "i", parentElement, {}, (parentElement: any) => [
                            this.text('● ● ●')
                        ])
                        ]),
                    this.html(`9e91dc75`, "pre", parentElement, {}, (parentElement: any) => [
                        this.html(`fa6be824`, "code", parentElement, {}, (parentElement: any) => [
                            this.html(`8e18857d`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }] },
                                (parentElement: any) => [
                                this.text('@states({ count: 0 })')
                                ]),
                            this.html(`04021efb`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-line-gap" }] }),
                            this.html(`b4c5df43`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }] },
                                (parentElement: any) => [
                                this.text('<template>')
                                ]),
                            this.html(`974e4b64`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                (parentElement: any) => [
                                this.text('<button @click(setCount(count + 1))>')
                                ]),
                            this.html(`2435ce77`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                (parentElement: any) => [
                                this.text('Đã bấm '),
                                this.html(`b19b55bc`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "mustache-token" }] },
                                    (parentElement: any) => [
                                    this.text('count')
                                    ]),
                                this.text(' lần')
                                ]),
                            this.html(`9a84bc09`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                (parentElement: any) => [
                                this.text('</button>')
                                ]),
                            this.html(`f66d241f`, "span", parentElement,
                                { classes: [{ type: 'static', value: "code-line" }] },
                                (parentElement: any) => [
                                this.text('</template>')
                                ])
                        ])
                    ])
                    ]),
                this.html(`0d205ad9`, "div", parentElement,
                    { classes: [{ type: 'static', value: "compile-spine" }] },
                    (parentElement: any) => [
                    this.html(`f943d231`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('PARSE')
                    ]),
                    this.html(`79f999c6`, "i", parentElement, {}, (parentElement: any) => [
                        this.text('↓')
                    ]),
                    this.html(`257a75d0`, "strong", parentElement, {}, (parentElement: any) => [
                        this.text('AST')
                    ]),
                    this.html(`1e6c9b9c`, "i", parentElement, {}, (parentElement: any) => [
                        this.text('↙ ↘')
                    ]),
                    this.html(`2456f194`, "span", parentElement, {}, (parentElement: any) => [
                        this.text('GENERATE')
                    ])
                    ]),
                this.html(`1e297643`, "div", parentElement,
                    { classes: [{ type: 'static', value: "target-stack" }] },
                    (parentElement: any) => [
                    this.html(`999e2fe9`, "div", parentElement,
                        { classes: [{ type: 'static', value: "code-window" }] },
                        (parentElement: any) => [
                        this.html(`fa1b9030`, "div", parentElement,
                            { classes: [{ type: 'static', value: "window-bar" }] },
                            (parentElement: any) => [
                            this.html(`271d42b9`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('SERVER')
                            ]),
                            this.html(`97883b31`, "b", parentElement, {}, (parentElement: any) => [
                                this.text('counter.blade.php')
                            ])
                            ]),
                        this.html(`51fa646e`, "pre", parentElement, {}, (parentElement: any) => [
                            this.html(`570d80c9`, "code", parentElement, {}, (parentElement: any) => [
                                this.html(`04a634d5`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }] },
                                    (parentElement: any) => [
                                    this.text('<button class="v_1a2b-a1b2">')
                                    ]),
                                this.html(`cda8719a`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                    (parentElement: any) => [
                                    this.text('Đã bấm '),
                                    this.html(`7f036c4a`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "mustache-token" }] },
                                        (parentElement: any) => [
                                        this.text('$count')
                                        ]),
                                    this.text(' lần')
                                    ]),
                                this.html(`ec2b6a0b`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }] },
                                    (parentElement: any) => [
                                    this.text('</button>')
                                    ])
                            ])
                        ])
                        ]),
                    this.html(`29f247ff`, "div", parentElement,
                        { classes: [{ type: 'static', value: "code-window" }, { type: 'static', value: "code-window-dark" }] },
                        (parentElement: any) => [
                        this.html(`31dc8055`, "div", parentElement,
                            { classes: [{ type: 'static', value: "window-bar" }] },
                            (parentElement: any) => [
                            this.html(`a57dd2b9`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('CLIENT')
                            ]),
                            this.html(`073ce9a1`, "b", parentElement, {}, (parentElement: any) => [
                                this.text('counter.ts')
                            ])
                            ]),
                        this.html(`4b465285`, "pre", parentElement, {}, (parentElement: any) => [
                            this.html(`85dd7eef`, "code", parentElement, {}, (parentElement: any) => [
                                this.html(`59b8971b`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }] },
                                    (parentElement: any) => [
                                    this.text('this.html(\'a1b2\', \'button\', p, {')
                                    ]),
                                this.html(`9a89f4b3`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                    (parentElement: any) => [
                                    this.text('events: { click: [() => setCount(count + 1)] }')
                                    ]),
                                this.html(`94a532d8`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }] },
                                    (parentElement: any) => [
                                    this.text('}, p => [')
                                    ]),
                                this.html(`089752a5`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                    (parentElement: any) => [
                                    this.text('this.text(\'Đã bấm \'),')
                                    ]),
                                this.html(`d43ab60c`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                    (parentElement: any) => [
                                    this.text('this.output(\'c3d4\', p, true, [\'count\'], () => count)')
                                    ]),
                                this.html(`302e82cf`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }] },
                                    (parentElement: any) => [
                                    this.text('])')
                                    ])
                            ])
                        ])
                        ])
                    ])
                ]),
            this.html(`dd321251`, "section", parentElement,
                { classes: [{ type: 'static', value: "scale-band" }], attrs: { "id": { type: 'static', value: "scale" } } },
                (parentElement: any) => [
                this.html(`10305a51`, "header", parentElement, {}, (parentElement: any) => [
                    this.html(`b84a5a92`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`d16990bf`, "p", parentElement,
                            { classes: [{ type: 'static', value: "kicker" }] },
                            (parentElement: any) => [
                            this.html(`be2e9f31`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('QUY MÔ')
                            ]),
                            this.text(' Không phải prototype cuối tuần')
                            ]),
                        this.html(`df80b144`, "h2", parentElement, {}, (parentElement: any) => [
                            this.text('Một hệ thống có bề mặt'),
                            this.html(`5b9c6484`, "br", parentElement, {}),
                            this.text('đủ lớn để làm việc thật.')
                        ])
                    ]),
                    this.html(`c7e11a87`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Những con số dưới đây đếm được từ chính source và tài liệu trong repo — không phải chỉ tiêu marketing. Mỗi con số đều có một trang tài liệu tương ứng để bạn kiểm lại.')
                    ])
                ]),
                this.html(`ed177389`, "div", parentElement,
                    { classes: [{ type: 'static', value: "scale-figures" }] },
                    (parentElement: any) => [
                    this.html(`247d55b2`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`abac467c`, "strong", parentElement, {}, (parentElement: any) => [
                            this.text('43')
                        ]),
                        this.html(`a80514dd`, "b", parentElement, {}, (parentElement: any) => [
                            this.text('Directive')
                        ]),
                        this.html(`a8d53f4e`, "small", parentElement, {}, (parentElement: any) => [
                            this.text('Chia tám nhóm: khai báo, xuất giá trị, điều khiển luồng, thuộc tính, sự kiện, layout, tiện ích và biến ma thuật.')
                        ])
                    ]),
                    this.html(`f3dd3539`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`76112d80`, "strong", parentElement, {}, (parentElement: any) => [
                            this.text('04')
                        ]),
                        this.html(`4f87ab24`, "b", parentElement, {}, (parentElement: any) => [
                            this.text('Context độc lập')
                        ]),
                        this.html(`1cda2b84`, "small", parentElement, {}, (parentElement: any) => [
                            this.text('web · admin · api · mobile, mỗi cái có route map, middleware, registry và bundle riêng.')
                        ])
                    ]),
                    this.html(`d23250ab`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`98530341`, "strong", parentElement, {}, (parentElement: any) => [
                            this.text('03')
                        ]),
                        this.html(`297c2213`, "b", parentElement, {}, (parentElement: any) => [
                            this.text('Gói phát hành + 1 extension')
                        ]),
                        this.html(`a3bd1312`, "small", parentElement, {}, (parentElement: any) => [
                            this.text('saola/core trên Composer, compiler và client trên npm, cùng một extension VS Code cho cú pháp '),
                            this.html(`bf7ecd3b`, "code", parentElement, {}, (parentElement: any) => [
                                this.text('.sao')
                            ]),
                            this.text('.')
                        ])
                    ]),
                    this.html(`98d1a9d6`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`a991befb`, "strong", parentElement, {}, (parentElement: any) => [
                            this.text('07')
                        ]),
                        this.html(`848123e2`, "b", parentElement, {}, (parentElement: any) => [
                            this.text('Chuyển trạng thái vòng đời')
                        ]),
                        this.html(`b7cadab3`, "small", parentElement, {}, (parentElement: any) => [
                            this.text('Mount, active, pause, resume và destroy, mỗi bước có hook trước và sau, dọn tài nguyên theo ref-count.')
                        ])
                    ]),
                    this.html(`593db01c`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`60bcc5be`, "strong", parentElement, {}, (parentElement: any) => [
                            this.text('12')
                        ]),
                        this.html(`a21084a2`, "b", parentElement, {}, (parentElement: any) => [
                            this.text('Chương tài liệu')
                        ]),
                        this.html(`672c7929`, "small", parentElement, {}, (parentElement: any) => [
                            this.text('Từ kiến trúc tới tham chiếu directive, kèm một chương ghi thẳng giới hạn đã biết thay vì giấu đi.')
                        ])
                    ]),
                    this.html(`a72e6ab3`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`d3a1b587`, "strong", parentElement, {}, (parentElement: any) => [
                            this.text('11')
                        ]),
                        this.html(`2c7b4feb`, "b", parentElement, {}, (parentElement: any) => [
                            this.text('Component mẫu chạy thật')
                        ]),
                        this.html(`88c94d8d`, "small", parentElement, {}, (parentElement: any) => [
                            this.text('Sáu nhóm cú pháp trên route thật, cộng bốn fixture để soi marker và hydration bằng mắt.')
                        ])
                    ])
                    ])
                ]),
            this.html(`eee04c64`, "section", parentElement,
                { classes: [{ type: 'static', value: "home-section" }, { type: 'static', value: "home-section--tight" }], attrs: { "id": { type: 'static', value: "ecosystem" } } },
                (parentElement: any) => [
                this.html(`4fd2a23b`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }, { type: 'static', value: "section-head-split" }] },
                    (parentElement: any) => [
                    this.html(`d94207b9`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`33b65a03`, "p", parentElement,
                            { classes: [{ type: 'static', value: "kicker" }] },
                            (parentElement: any) => [
                            this.html(`04921d5d`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('HỆ SINH THÁI')
                            ]),
                            this.text(' Bốn mảnh, một contract')
                            ]),
                        this.html(`6f34e4f3`, "h2", parentElement, {}, (parentElement: any) => [
                            this.text('Các gói phát hành độc lập,'),
                            this.html(`80e22d30`, "br", parentElement, {}),
                            this.text('nối nhau bằng spec có version.')
                        ])
                    ]),
                    this.html(`6a1bed36`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Compiler và client có thể phát hành lệch nhau, nên contract giữa chúng mang số phiên bản. Compiler ghi '),
                        this.html(`0dac2c73`, "code", parentElement, {}, (parentElement: any) => [
                            this.text('__CONTRACT_VERSION__')
                        ]),
                        this.text(' vào output, client kiểm lúc load view — lệch major thì cảnh báo rõ ràng thay vì lỗi khó lần.')
                    ])
                    ]),
                this.html(`22fead1a`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ecosystem-grid" }] },
                    (parentElement: any) => [
                    this.html(`6802cb6a`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement: any) => [
                        this.html(`ca21f370`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('Composer')
                        ]),
                        this.html(`dfd82839`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('saola/core')
                        ]),
                        this.html(`88df7512`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Lõi PHP: routing theo context, base controller cho web/admin/api, module service provider, Blade directive và ViewStorageManager — nơi duy nhất sinh marker phía server.')
                        ])
                        ]),
                    this.html(`ef13a811`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement: any) => [
                        this.html(`fbf3e24b`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('npm')
                        ]),
                        this.html(`ca3adebf`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('@saolabs/compiler')
                        ]),
                        this.html(`155d58d0`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('CLI '),
                            this.html(`443d1357`, "code", parentElement, {}, (parentElement: any) => [
                                this.text('sao-compile')
                            ]),
                            this.text('. Parse '),
                            this.html(`2b787b78`, "code", parentElement, {}, (parentElement: any) => [
                                this.text('.sao')
                            ]),
                            this.text(' thành AST rồi emit hai đầu ra từ cùng một cây: Blade cho SSR và TypeScript cho view runtime, kèm registry.')
                        ])
                        ]),
                    this.html(`2538c2eb`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement: any) => [
                        this.html(`7fd5bc3d`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('npm')
                        ]),
                        this.html(`05da575f`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('@saolabs/client')
                        ]),
                        this.html(`d4d73533`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Runtime SPA: Application container, Router, ViewManager, ViewController, hệ element reactive, PageCache và bộ service Http, Event, Store, Head.')
                        ])
                        ]),
                    this.html(`1c3a3973`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement: any) => [
                        this.html(`0f055f16`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('VS Code')
                        ]),
                        this.html(`7358fa44`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Language Support')
                        ]),
                        this.html(`cfcc0b0b`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Highlight cú pháp, snippet và autocomplete cho '),
                            this.html(`ec97be8e`, "code", parentElement, {}, (parentElement: any) => [
                                this.text('.sao')
                            ]),
                            this.text(', hiểu cả directive lẫn phần '),
                            this.html(`a1e9416b`, "code", parentElement, {}, (parentElement: any) => [
                                this.text('<script setup>')
                            ]),
                            this.text(' trong cùng một file.')
                        ])
                        ])
                    ]),
                this.html(`f280a5b1`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement: any) => [
                    this.html(`d5ac3b75`, "strong", parentElement, {}, (parentElement: any) => [
                        this.text('Vì sao tách nhiều gói:')
                    ]),
                    this.text(' mỗi tầng có nhịp phát hành riêng. Một bản vá compiler không buộc bạn nâng lõi PHP, và ngược lại — miễn contract còn khớp major.')
                    ])
                ]),
            this.html(`114e42e1`, "section", parentElement,
                { classes: [{ type: 'static', value: "home-section" }, { type: 'static', value: "home-section--fog" }], attrs: { "id": { type: 'static', value: "compare" } } },
                (parentElement: any) => [
                this.html(`a9d97314`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }, { type: 'static', value: "section-head-split" }] },
                    (parentElement: any) => [
                    this.html(`fff5d02c`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`ba6f1386`, "p", parentElement,
                            { classes: [{ type: 'static', value: "kicker" }] },
                            (parentElement: any) => [
                            this.html(`24e5fa79`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('SO SÁNH')
                            ]),
                            this.text(' Khác gì lựa chọn quen thuộc')
                            ]),
                        this.html(`bdcb57ae`, "h2", parentElement, {}, (parentElement: any) => [
                            this.text('Cùng một bài toán,'),
                            this.html(`1b84be55`, "br", parentElement, {}),
                            this.text('năm cách trả lời khác nhau.')
                        ])
                    ]),
                    this.html(`ce1229bd`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Bảng này không nói cách nào tốt hơn tuyệt đối. Nó nói mỗi cách đặt chi phí ở đâu — và Saola đặt chi phí vào bước biên dịch để đổi lấy việc không phải giữ hai bản template đồng bộ bằng tay.')
                    ])
                    ]),
                this.html(`da16056c`, "div", parentElement,
                    { classes: [{ type: 'static', value: "compare-table" }] },
                    (parentElement: any) => [
                    this.html(`620d389f`, "table", parentElement, {}, (parentElement: any) => [
                        this.html(`311a6161`, "thead", parentElement, {}, (parentElement: any) => [
                            this.html(`771ced3f`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`960f23b4`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "col" } } },
                                    (parentElement: any) => [
                                    this.text('Tiêu chí')
                                    ]),
                                this.html(`e3a39996`, "th", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }], attrs: { "scope": { type: 'static', value: "col" } } },
                                    (parentElement: any) => [
                                    this.text('Saola')
                                    ]),
                                this.html(`8fe745df`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "col" } } },
                                    (parentElement: any) => [
                                    this.text('Blade + Alpine')
                                    ]),
                                this.html(`d4352de3`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "col" } } },
                                    (parentElement: any) => [
                                    this.text('Livewire')
                                    ]),
                                this.html(`09415ec6`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "col" } } },
                                    (parentElement: any) => [
                                    this.text('Inertia + Vue/React')
                                    ]),
                                this.html(`2b62ef43`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "col" } } },
                                    (parentElement: any) => [
                                    this.text('SPA + REST API')
                                    ])
                            ])
                        ]),
                        this.html(`13181df4`, "tbody", parentElement, {}, (parentElement: any) => [
                            this.html(`721f85dc`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`cbe5710f`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" } } },
                                    (parentElement: any) => [
                                    this.text('HTML của lần tải đầu')
                                    ]),
                                this.html(`2147c796`, "td", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }] },
                                    (parentElement: any) => [
                                    this.text('Đầy đủ nội dung')
                                    ]),
                                this.html(`972b8e77`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Đầy đủ nội dung')
                                ]),
                                this.html(`0963f57b`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Đầy đủ nội dung')
                                ]),
                                this.html(`dadd8a9b`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Đầy đủ nếu bật SSR')
                                ]),
                                this.html(`e394cee0`, "td", parentElement, {}, (parentElement: any) => [
                                    this.html(`70cdeb75`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-no" }] },
                                        (parentElement: any) => [
                                        this.text('Div rỗng')
                                        ])
                                ])
                            ]),
                            this.html(`787d59aa`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`adcfc51f`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" } } },
                                    (parentElement: any) => [
                                    this.text('Tương tác sau khi tải')
                                    ]),
                                this.html(`ee100fe1`, "td", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }] },
                                    (parentElement: any) => [
                                    this.text('Chạy tại client, không round-trip')
                                    ]),
                                this.html(`798a2e81`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Chạy tại client, phạm vi hẹp')
                                ]),
                                this.html(`bdd38d47`, "td", parentElement, {}, (parentElement: any) => [
                                    this.html(`9150ce85`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-no" }] },
                                        (parentElement: any) => [
                                        this.text('Mỗi tương tác một request')
                                        ])
                                ]),
                                this.html(`c60037ad`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Chạy tại client')
                                ]),
                                this.html(`43b33e6f`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Chạy tại client')
                                ])
                            ]),
                            this.html(`41560e49`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`94eeff01`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" } } },
                                    (parentElement: any) => [
                                    this.text('Nguồn sinh HTML và JS')
                                    ]),
                                this.html(`d38f77d1`, "td", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }] },
                                    (parentElement: any) => [
                                    this.html(`80a9e6b5`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-yes" }] },
                                        (parentElement: any) => [
                                        this.text('Cùng một AST')
                                        ])
                                    ]),
                                this.html(`a5f71cd2`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Hai nguồn viết tay')
                                ]),
                                this.html(`84162efc`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Server sinh HTML, JS chỉ vá DOM')
                                ]),
                                this.html(`d4d052f4`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Hai nguồn viết tay')
                                ]),
                                this.html(`ac8d04bb`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Một nguồn, chỉ ở client')
                                ])
                            ]),
                            this.html(`04acd695`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`f9973209`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" } } },
                                    (parentElement: any) => [
                                    this.text('Ngôn ngữ viết view')
                                    ]),
                                this.html(`65519fc8`, "td", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }] },
                                    (parentElement: any) => [
                                    this.text('Một cú pháp '),
                                    this.html(`f904cfa7`, "code", parentElement, {}, (parentElement: any) => [
                                        this.text('.sao')
                                    ])
                                    ]),
                                this.html(`72596dc3`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Blade cộng JavaScript rời')
                                ]),
                                this.html(`4de435c3`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Blade cộng PHP class')
                                ]),
                                this.html(`13cabf64`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Vue hoặc React, tách khỏi Blade')
                                ]),
                                this.html(`5987b23a`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Framework JavaScript')
                                ])
                            ]),
                            this.html(`7a95683a`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`40e37da4`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" } } },
                                    (parentElement: any) => [
                                    this.text('Cần tầng API riêng')
                                    ]),
                                this.html(`9a097c60`, "td", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }] },
                                    (parentElement: any) => [
                                    this.text('Không bắt buộc')
                                    ]),
                                this.html(`01f3c244`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Không')
                                ]),
                                this.html(`127378b2`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Không')
                                ]),
                                this.html(`19ff0dd5`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Không, props đi qua adapter')
                                ]),
                                this.html(`5b86c562`, "td", parentElement, {}, (parentElement: any) => [
                                    this.html(`211a687a`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-no" }] },
                                        (parentElement: any) => [
                                        this.text('Bắt buộc')
                                        ])
                                ])
                            ]),
                            this.html(`249a4f8f`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`88a8322e`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" } } },
                                    (parentElement: any) => [
                                    this.text('Đa mặt tiền, tách bundle')
                                    ]),
                                this.html(`8acfea46`, "td", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }] },
                                    (parentElement: any) => [
                                    this.html(`39072bb5`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-yes" }] },
                                        (parentElement: any) => [
                                        this.text('Sẵn bốn context')
                                        ])
                                    ]),
                                this.html(`6eee9c20`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Tự dựng')
                                ]),
                                this.html(`8d6481ec`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Tự dựng')
                                ]),
                                this.html(`46491d91`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Tự dựng')
                                ]),
                                this.html(`ed2b3402`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Tự dựng')
                                ])
                            ]),
                            this.html(`4a0be818`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`da1b045d`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" } } },
                                    (parentElement: any) => [
                                    this.text('Vòng đời view có contract')
                                    ]),
                                this.html(`0d351c59`, "td", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }] },
                                    (parentElement: any) => [
                                    this.text('Bảy trạng thái, dọn theo ref-count')
                                    ]),
                                this.html(`ff525146`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Không có')
                                ]),
                                this.html(`184a31bc`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Theo component phía server')
                                ]),
                                this.html(`2c2c78b7`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Theo framework JavaScript')
                                ]),
                                this.html(`a9815521`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Theo framework JavaScript')
                                ])
                            ]),
                            this.html(`6e592c9a`, "tr", parentElement, {}, (parentElement: any) => [
                                this.html(`e7ac53fa`, "th", parentElement,
                                    { attrs: { "scope": { type: 'static', value: "row" } } },
                                    (parentElement: any) => [
                                    this.text('Độ chín và cộng đồng')
                                    ]),
                                this.html(`69a9fe1c`, "td", parentElement,
                                    { classes: [{ type: 'static', value: "col-sao" }] },
                                    (parentElement: any) => [
                                    this.html(`cddcd4fd`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "cmp-no" }] },
                                        (parentElement: any) => [
                                        this.text('Đang dựng nền')
                                        ])
                                    ]),
                                this.html(`94f6e379`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Rất chín')
                                ]),
                                this.html(`3411fd5f`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Rất chín')
                                ]),
                                this.html(`12d3d20b`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Rất chín')
                                ]),
                                this.html(`40db3541`, "td", parentElement, {}, (parentElement: any) => [
                                    this.text('Rất chín')
                                ])
                            ])
                        ])
                    ])
                    ]),
                this.html(`fba509d8`, "p", parentElement,
                    { classes: [{ type: 'static', value: "compare-note" }] },
                    (parentElement: any) => [
                    this.text('Dòng cuối là dòng thật lòng nhất: Saola trẻ hơn tất cả những lựa chọn còn lại. Đổi lại, giới hạn của nó được ghi công khai trên '),
                    this.html(`936377ea`, "a", parentElement,
                        { classes: [{ type: 'static', value: "text-link" }], attrs: { "href": { type: 'static', value: "/docs/status" } } },
                        (parentElement: any) => [
                        this.text('trang trạng thái')
                        ]),
                    this.text(' chứ không nằm rải rác trong issue.')
                    ])
                ]),
            this.html(`8ec1daad`, "section", parentElement,
                { classes: [{ type: 'static', value: "home-section" }], attrs: { "id": { type: 'static', value: "usecase" } } },
                (parentElement: any) => [
                this.html(`84cb8d89`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }, { type: 'static', value: "section-head-split" }] },
                    (parentElement: any) => [
                    this.html(`b405bd65`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`7ae63b54`, "p", parentElement,
                            { classes: [{ type: 'static', value: "kicker" }] },
                            (parentElement: any) => [
                            this.html(`7040c9bf`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('DÀNH CHO AI')
                            ]),
                            this.text(' Hợp và chưa hợp')
                            ]),
                        this.html(`b892fb19`, "h2", parentElement, {}, (parentElement: any) => [
                            this.text('Saola hợp nhất'),
                            this.html(`9414f83d`, "br", parentElement, {}),
                            this.text('với bốn tình huống này.')
                        ])
                    ]),
                    this.html(`5ba75714`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Nếu đội bạn đã đứng vững trên Laravel và đang cân nhắc thêm một frontend riêng, đây đúng là chỗ Saola tiết kiệm nhiều nhất.')
                    ])
                    ]),
                this.html(`a2009f43`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-grid" }] },
                    (parentElement: any) => [
                    this.html(`442b05d8`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement: any) => [
                        this.html(`2584514b`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('01 / NỘI BỘ')
                        ]),
                        this.html(`89c9a25c`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Ứng dụng nội bộ & admin panel')
                        ]),
                        this.html(`6fb28ef1`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Bảng dữ liệu, form nhiều bước, phân quyền theo vai trò. Cần tương tác mượt nhưng không cần đánh đổi bằng một frontend tách rời.')
                        ])
                        ]),
                    this.html(`159cec22`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement: any) => [
                        this.html(`542732d2`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('02 / SEO + UX')
                        ]),
                        this.html(`91f8b1cf`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Sản phẩm cần cả SEO lẫn tương tác')
                        ]),
                        this.html(`f1413b93`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Trang danh mục, chi tiết sản phẩm, blog có bộ lọc. Crawler nhận HTML đầy đủ; người dùng nhận trải nghiệm không tải lại trang.')
                        ])
                        ]),
                    this.html(`732888e1`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement: any) => [
                        this.html(`da98f276`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('03 / ĐA MẶT TIỀN')
                        ]),
                        this.html(`5718b31f`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Nhiều mặt tiền trên một backend')
                        ]),
                        this.html(`5626ab1e`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Web công khai, admin, webview mobile và api dùng chung model, policy và service layer nhưng tách route, middleware lẫn bundle.')
                        ])
                        ]),
                    this.html(`57689130`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement: any) => [
                        this.html(`289f10c2`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('04 / ĐỘI LARAVEL')
                        ]),
                        this.html(`870548ec`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Đội Laravel muốn SPA mà không đổi nghề')
                        ]),
                        this.html(`f754811e`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Eloquent, middleware, policy, queue giữ nguyên. Phần mới cần học là cú pháp view và cách state chảy — không phải một hệ sinh thái build khác.')
                        ])
                        ])
                    ]),
                this.html(`d01a79ab`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }, { type: 'static', value: "ov-note--warn" }] },
                    (parentElement: any) => [
                    this.html(`4543aca9`, "strong", parentElement, {}, (parentElement: any) => [
                        this.text('Chưa hợp khi:')
                    ]),
                    this.text(' bạn cần một hệ sinh thái component bên thứ ba khổng lồ ngay hôm nay, hoặc đội đã chạy tốt trên React/Vue với đầy đủ tooling và người quen việc. Trong hai trường hợp đó, chi phí chuyển sang Saola lớn hơn cái nó tiết kiệm.')
                    ])
                ]),
            this.html(`259c5faa`, "section", parentElement,
                { classes: [{ type: 'static', value: "context-panel" }], attrs: { "id": { type: 'static', value: "vision" } } },
                (parentElement: any) => [
                this.html(`9ea535ef`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`3dd76a16`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement: any) => [
                        this.html(`34e600e7`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('TẦM NHÌN')
                        ]),
                        this.text(' Nơi Saola muốn tới')
                        ]),
                    this.html(`ac007219`, "h2", parentElement, {}, (parentElement: any) => [
                        this.text('Viết một lần.'),
                        this.html(`e5c43645`, "br", parentElement, {}),
                        this.text('Chạy đúng ở mọi mặt tiền.')
                    ])
                ]),
                this.html(`75409ec1`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`b7b88a45`, "p", parentElement, {}, (parentElement: any) => [
                        this.html(`0f41735e`, "strong", parentElement, {}, (parentElement: any) => [
                            this.text('Sứ mệnh:')
                        ]),
                        this.text(' xoá khoảng cách giữa “trang web render ở server” và “ứng dụng chạy ở client” — không bằng cách chọn một bên, mà bằng cách để một nguồn duy nhất sinh ra cả hai, được bảo đảm bằng contract có version chứ không bằng quy ước ngầm và kỷ luật đội ngũ.')
                    ]),
                    this.html(`45115932`, "div", parentElement,
                        { classes: [{ type: 'static', value: "context-cells" }] },
                        (parentElement: any) => [
                        this.html(`0631a8f4`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('CAM KẾT 01'),
                            this.html(`eb95fb2d`, "small", parentElement, {}, (parentElement: any) => [
                                this.text('Contract viết ra giấy, có version, kiểm được lúc chạy.')
                            ])
                        ]),
                        this.html(`0aa86a56`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('CAM KẾT 02'),
                            this.html(`66674ea6`, "small", parentElement, {}, (parentElement: any) => [
                                this.text('Giới hạn ghi công khai, không giấu trong backlog.')
                            ])
                        ]),
                        this.html(`7e17cbd4`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('CAM KẾT 03'),
                            this.html(`25ea7b13`, "small", parentElement, {}, (parentElement: any) => [
                                this.text('Không khoá bạn khỏi Laravel: Eloquent, policy, middleware giữ nguyên.')
                            ])
                        ])
                        ])
                ])
                ]),
            this.html(`523c8662`, "section", parentElement,
                { classes: [{ type: 'static', value: "home-section" }, { type: 'static', value: "home-section--fog" }], attrs: { "id": { type: 'static', value: "status" } } },
                (parentElement: any) => [
                this.html(`c7f6aa47`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }, { type: 'static', value: "section-head-split" }] },
                    (parentElement: any) => [
                    this.html(`a00fd107`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`bad74da2`, "p", parentElement,
                            { classes: [{ type: 'static', value: "kicker" }] },
                            (parentElement: any) => [
                            this.html(`4a3ad661`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('TRẠNG THÁI')
                            ]),
                            this.text(' Trung thực về hiện trạng')
                            ]),
                        this.html(`4d7848a1`, "h2", parentElement, {}, (parentElement: any) => [
                            this.text('Cái gì đang chạy,'),
                            this.html(`f09d9b5f`, "br", parentElement, {}),
                            this.text('cái gì còn dở.')
                        ])
                    ]),
                    this.html(`ee09561a`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Dự án đang ở giai đoạn dựng nền. Danh sách này lấy từ tài liệu contract và những gì kiểm chứng được khi chạy thật, không phải phỏng đoán — mục nào sửa xong sẽ rời khỏi bảng.')
                    ])
                    ]),
                this.html(`3c3cf628`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-grid" }] },
                    (parentElement: any) => [
                    this.html(`d7a61812`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement: any) => [
                        this.html(`4c0de9da`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('Đang chạy đầy đủ')
                        ]),
                        this.html(`2acdf910`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Nền tảng đã đứng được')
                        ]),
                        this.html(`c99d2655`, "ul", parentElement,
                            { classes: [{ type: 'static', value: "check-list" }] },
                            (parentElement: any) => [
                            this.html(`b72dc32b`, "li", parentElement, {}, (parentElement: any) => [
                                this.text('SSR bằng Blade rồi hydrate, kèm layout chain và block outlet.')
                            ]),
                            this.html(`99eda077`, "li", parentElement, {}, (parentElement: any) => [
                                this.text('Reactive theo vùng marker: điều kiện, vòng lặp, output, binding hai chiều.')
                            ]),
                            this.html(`9ccfb13c`, "li", parentElement, {}, (parentElement: any) => [
                                this.text('Reconciliation của vòng lặp theo slot, dọn element khi item rời danh sách.')
                            ]),
                            this.html(`88a7e01c`, "li", parentElement, {}, (parentElement: any) => [
                                this.text('Điều hướng SPA, layout diff và PageCache cho back/forward.')
                            ]),
                            this.html(`94ad6198`, "li", parentElement, {}, (parentElement: any) => [
                                this.text('Vòng đời view đầy đủ với dọn tài nguyên theo ref-count.')
                            ]),
                            this.html(`42ac1cdf`, "li", parentElement, {}, (parentElement: any) => [
                                this.text('Bốn context với route, registry và bundle tách bạch.')
                            ])
                            ])
                        ]),
                    this.html(`14452c19`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ov-card" }] },
                        (parentElement: any) => [
                        this.html(`3ec54072`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('Giới hạn đã biết')
                        ]),
                        this.html(`61c35bb1`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Chỗ còn phải đi vòng')
                        ]),
                        this.html(`fe4e3f89`, "ul", parentElement,
                            { classes: [{ type: 'static', value: "check-list" }] },
                            (parentElement: any) => [
                            this.html(`3db1e5b3`, "li", parentElement, {}, (parentElement: any) => [
                                this.text('Vòng lặp đổi reference thì dựng lại hàng — lặp theo id ổn định để tránh.')
                            ]),
                            this.html(`856f1d82`, "li", parentElement, {}, (parentElement: any) => [
                                this.html(`aa9e4362`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('bind')
                                ]),
                                this.text(' lồng cấp đọc được nhưng chưa ghi ngược.')
                            ]),
                            this.html(`8977fbcd`, "li", parentElement, {}, (parentElement: any) => [
                                this.html(`72ddb92b`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('style')
                                ]),
                                this.text(' dạng object chưa binding được sau hydrate.')
                            ]),
                            this.html(`dd342575`, "li", parentElement, {}, (parentElement: any) => [
                                this.html(`5de66567`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('computed')
                                ]),
                                this.text(' chỉ có ở đầu ra JavaScript, chưa có phía Blade.')
                            ]),
                            this.html(`a874ede5`, "li", parentElement, {}, (parentElement: any) => [
                                this.text('Marker của fragment và component chưa có id ổn định.')
                            ])
                            ])
                        ])
                    ]),
                this.html(`937f5f23`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ov-note" }] },
                    (parentElement: any) => [
                    this.text('Bảng đầy đủ, kèm nguyên nhân và cách đi vòng cho từng mục, nằm ở '),
                    this.html(`13d48aaa`, "a", parentElement,
                        { classes: [{ type: 'static', value: "text-link" }], attrs: { "href": { type: 'static', value: "/docs/status" } } },
                        (parentElement: any) => [
                        this.text('Giới hạn đã biết')
                        ]),
                    this.text('.')
                    ])
                ]),
            this.html(`fe586bb5`, "section", parentElement,
                { classes: [{ type: 'static', value: "faq-grid" }], attrs: { "id": { type: 'static', value: "faq" } } },
                (parentElement: any) => [
                this.html(`f955acdf`, "div", parentElement,
                    { classes: [{ type: 'static', value: "section-head" }] },
                    (parentElement: any) => [
                    this.html(`4ba093cc`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement: any) => [
                        this.html(`a7782bdf`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('FAQ')
                        ]),
                        this.text(' Hỏi nhanh')
                        ]),
                    this.html(`de7a1423`, "h2", parentElement, {}, (parentElement: any) => [
                        this.text('Sáu câu hỏi hay gặp nhất.')
                    ])
                    ]),
                this.html(`40f19f7f`, "div", parentElement,
                    { classes: [{ type: 'static', value: "value-accordion" }] },
                    (parentElement: any) => [
                    this.html(`f862c8b4`, "article", parentElement,
                        { classes: [{ type: 'static', value: "value-item" }, { type: 'binding', value: "open", factory: () => openFaq === 0, stateKeys: ["openFaq"] }] },
                        (parentElement: any) => [
                        this.html(`59fa23cb`, "button", parentElement,
                            { events: { click: [(event: any) => setOpenFaq(0)] } },
                            (parentElement: any) => [
                            this.html(`10c5441e`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('01')
                            ]),
                            this.html(`20c104b1`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Saola có thay thế Laravel không?')
                            ]),
                            this.html(`7a0a1686`, "i", parentElement, {}, (parentElement: any) => [
                                this.text('+')
                            ])
                            ]),
                        this.reactive(`4a1fbaf2`, "if", parentReactive, parentElement, ["openFaq"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (openFaq === 0) {
                                reactiveContents.push(
                                this.html(`97c27682`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Không. Saola là lớp view và runtime chạy trên Laravel. Route, middleware, policy, Eloquent, queue và toàn bộ hệ sinh thái Laravel giữ nguyên. Cái Saola thay là cách bạn viết tầng view và cách trang đó sống tiếp sau khi tải xong.')
                                ])
                                );
                            }
                            return reactiveContents;
                        })
                        ]),
                    this.html(`0e7bf027`, "article", parentElement,
                        { classes: [{ type: 'static', value: "value-item" }, { type: 'binding', value: "open", factory: () => openFaq === 1, stateKeys: ["openFaq"] }] },
                        (parentElement: any) => [
                        this.html(`be29f0aa`, "button", parentElement,
                            { events: { click: [(event: any) => setOpenFaq(1)] } },
                            (parentElement: any) => [
                            this.html(`756caddb`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('02')
                            ]),
                            this.html(`5fca77a4`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Tôi có phải bỏ Blade đang có không?')
                            ]),
                            this.html(`9081ee23`, "i", parentElement, {}, (parentElement: any) => [
                                this.text('+')
                            ])
                            ]),
                        this.reactive(`00e4e7c0`, "if", parentReactive, parentElement, ["openFaq"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (openFaq === 1) {
                                reactiveContents.push(
                                this.html(`bcd7b879`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Không. Đầu ra phía server của một file '),
                                    this.html(`90e1a8aa`, "code", parentElement, {}, (parentElement: any) => [
                                        this.text('.sao')
                                    ]),
                                    this.text(' chính là Blade template, nằm cùng chỗ với view Blade bạn đang có. Bạn chuyển dần từng trang, không cần viết lại cả ứng dụng trong một lần.')
                                ])
                                );
                            }
                            return reactiveContents;
                        })
                        ]),
                    this.html(`1932a70c`, "article", parentElement,
                        { classes: [{ type: 'static', value: "value-item" }, { type: 'binding', value: "open", factory: () => openFaq === 2, stateKeys: ["openFaq"] }] },
                        (parentElement: any) => [
                        this.html(`916cfc07`, "button", parentElement,
                            { events: { click: [(event: any) => setOpenFaq(2)] } },
                            (parentElement: any) => [
                            this.html(`7bb66395`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('03')
                            ]),
                            this.html(`9e4d635b`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Có bắt buộc dùng TypeScript không?')
                            ]),
                            this.html(`3e30b9db`, "i", parentElement, {}, (parentElement: any) => [
                                this.text('+')
                            ])
                            ]),
                        this.reactive(`e75ce5d6`, "if", parentReactive, parentElement, ["openFaq"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (openFaq === 2) {
                                reactiveContents.push(
                                this.html(`71eaff93`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Compiler emit TypeScript vì nó cho kiểm tra kiểu ở ranh giới giữa view và runtime. Nhưng phần bạn viết nằm trong '),
                                    this.html(`cd7e8be4`, "code", parentElement, {}, (parentElement: any) => [
                                        this.text('<script setup>')
                                    ]),
                                    this.text(' và JavaScript thuần vẫn chạy — kiểu là tuỳ chọn, không phải điều kiện.')
                                ])
                                );
                            }
                            return reactiveContents;
                        })
                        ]),
                    this.html(`7e31a088`, "article", parentElement,
                        { classes: [{ type: 'static', value: "value-item" }, { type: 'binding', value: "open", factory: () => openFaq === 3, stateKeys: ["openFaq"] }] },
                        (parentElement: any) => [
                        this.html(`4f51d3af`, "button", parentElement,
                            { events: { click: [(event: any) => setOpenFaq(3)] } },
                            (parentElement: any) => [
                            this.html(`e8da36da`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('04')
                            ]),
                            this.html(`7fda6bfa`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('SEO và chia sẻ link thì sao?')
                            ]),
                            this.html(`9493720a`, "i", parentElement, {}, (parentElement: any) => [
                                this.text('+')
                            ])
                            ]),
                        this.reactive(`5a1ce36b`, "if", parentReactive, parentElement, ["openFaq"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (openFaq === 3) {
                                reactiveContents.push(
                                this.html(`dde77212`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Lần tải đầu là HTML hoàn chỉnh do Laravel trả về, không phải khung rỗng chờ JavaScript. Mở DevTools trên chính trang này, xem tab Network ở request đầu tiên: nội dung đã nằm sẵn trong response.')
                                ])
                                );
                            }
                            return reactiveContents;
                        })
                        ]),
                    this.html(`0b654ec2`, "article", parentElement,
                        { classes: [{ type: 'static', value: "value-item" }, { type: 'binding', value: "open", factory: () => openFaq === 4, stateKeys: ["openFaq"] }] },
                        (parentElement: any) => [
                        this.html(`07a81616`, "button", parentElement,
                            { events: { click: [(event: any) => setOpenFaq(4)] } },
                            (parentElement: any) => [
                            this.html(`ce93f80e`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('05')
                            ]),
                            this.html(`8e72e1fa`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Đã dùng được cho production chưa?')
                            ]),
                            this.html(`c2c8d3a4`, "i", parentElement, {}, (parentElement: any) => [
                                this.text('+')
                            ])
                            ]),
                        this.reactive(`a148ae33`, "if", parentReactive, parentElement, ["openFaq"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (openFaq === 4) {
                                reactiveContents.push(
                                this.html(`210bc2d1`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Dự án đang ở giai đoạn dựng nền. Phần lõi — SSR, hydration, reactivity, router, vòng đời, context — đã chạy đầy đủ; những chỗ còn dở được liệt kê công khai kèm cách đi vòng. Hãy đọc trang giới hạn đã biết trước khi quyết định.')
                                ])
                                );
                            }
                            return reactiveContents;
                        })
                        ]),
                    this.html(`09af52a1`, "article", parentElement,
                        { classes: [{ type: 'static', value: "value-item" }, { type: 'binding', value: "open", factory: () => openFaq === 5, stateKeys: ["openFaq"] }] },
                        (parentElement: any) => [
                        this.html(`44584cc4`, "button", parentElement,
                            { events: { click: [(event: any) => setOpenFaq(5)] } },
                            (parentElement: any) => [
                            this.html(`05292501`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('06')
                            ]),
                            this.html(`b48e60dc`, "strong", parentElement, {}, (parentElement: any) => [
                                this.text('Đã biết Blade thì học mất bao lâu?')
                            ]),
                            this.html(`e02304bf`, "i", parentElement, {}, (parentElement: any) => [
                                this.text('+')
                            ])
                            ]),
                        this.reactive(`1ec2fe17`, "if", parentReactive, parentElement, ["openFaq"], (parentReactive: any, parentElement: any) => {
                            const reactiveContents = [];
                            if (openFaq === 5) {
                                reactiveContents.push(
                                this.html(`ab7212cf`, "p", parentElement, {}, (parentElement: any) => [
                                    this.text('Cú pháp giữ hình dạng directive quen thuộc của Blade, nên phần điều khiển luồng gần như đọc được ngay. Cái mới cần nắm là ba thứ: state khai báo ở đầu file, setter sinh tự động, và ranh giới giữa giá trị reactive với giá trị tính một lần.')
                                ])
                                );
                            }
                            return reactiveContents;
                        })
                        ])
                    ])
                ]),
            this.html(`30585955`, "section", parentElement,
                { classes: [{ type: 'static', value: "principle-band" }] },
                (parentElement: any) => [
                this.html(`660b8c06`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`eddf0761`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement: any) => [
                        this.html(`552c9f54`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('DESIGN PRINCIPLE')
                        ]),
                        this.text(' Điều Saola bảo vệ')
                        ]),
                    this.html(`fbfa04c7`, "h2", parentElement, {}, (parentElement: any) => [
                        this.text('Server là sự thật.'),
                        this.html(`f3632095`, "br", parentElement, {}),
                        this.text('Client là sự tiếp nối.')
                    ])
                ]),
                this.html(`545e05cc`, "div", parentElement,
                    { classes: [{ type: 'static', value: "principle-copy" }] },
                    (parentElement: any) => [
                    this.html(`4d155382`, "p", parentElement, {}, (parentElement: any) => [
                        this.text('Phản hồi đầu tiên phải hoàn chỉnh và có thể hiểu được. JavaScript không “cứu” một trang rỗng; nó tiếp nhận chính view server vừa render và làm view đó sống lên.')
                    ]),
                    this.html(`fe875078`, "a", parentElement,
                        { classes: [{ type: 'static', value: "button" }, { type: 'static', value: "button-light" }], attrs: { "href": { type: 'static', value: "/about" } } },
                        (parentElement: any) => [
                        this.text('Vì sao Saola tồn tại '),
                        this.html(`a7febb67`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('→')
                        ])
                        ])
                    ])
                ]),
            this.html(`aa586911`, "section", parentElement,
                { classes: [{ type: 'static', value: "start-cta" }] },
                (parentElement: any) => [
                this.html(`969379d4`, "div", parentElement, {}, (parentElement: any) => [
                    this.html(`2739f309`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement: any) => [
                        this.html(`29b2e3d2`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('BẮT ĐẦU')
                        ]),
                        this.text(' Không cần tin, cứ mở ra xem')
                        ]),
                    this.html(`51b5e03f`, "h2", parentElement, {}, (parentElement: any) => [
                        this.text('Tài liệu đầy đủ và'),
                        this.html(`89704fc6`, "br", parentElement, {}),
                        this.text('component đang chạy thật.')
                    ])
                ]),
                this.html(`4a80fe82`, "div", parentElement,
                    { classes: [{ type: 'static', value: "hero-actions" }] },
                    (parentElement: any) => [
                    this.html(`c655de15`, "a", parentElement,
                        { classes: [{ type: 'static', value: "button" }, { type: 'static', value: "button-light" }], attrs: { "href": { type: 'static', value: "/docs/getting-started" } } },
                        (parentElement: any) => [
                        this.text('Bắt đầu trong 4 bước '),
                        this.html(`201c8c41`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('↗')
                        ])
                        ]),
                    this.html(`930ea1e7`, "a", parentElement,
                        { classes: [{ type: 'static', value: "button" }, { type: 'static', value: "button-light" }], attrs: { "href": { type: 'static', value: "/components" } } },
                        (parentElement: any) => [
                        this.text('Xem component '),
                        this.html(`91c7775b`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('↗')
                        ])
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
export function WebModulesHomeIndex(__data__: IndexProps = {}, systemData: any = {}): IndexView {
    return new IndexView(__data__, systemData);
}
export default WebModulesHomeIndex;
