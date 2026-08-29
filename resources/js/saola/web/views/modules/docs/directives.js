import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.docs.directives';
const __VIEW_NAMESPACE__ = 'web.modules.docs.';
const __VIEW_TYPE__ = 'view';
const __VIEW_CONFIG__ = {
    hasSuperView: true,
    viewType: 'view',
    sections: {
        "doc":{
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
    renderLongSections: ["doc"],
    renderSections: [],
    prerenderSections: []
};



class DirectivesViewController extends ViewController {
    constructor(view) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this).setStaticConfig === 'function') {
            (this).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this).config = __VIEW_CONFIG__;
        }
    }
}

class DirectivesView extends View {
    constructor(__data__ = {}, systemData = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, DirectivesViewController);
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
            superView: `${__layout__+"docs"}`,
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
            this.block('block-doc', 'doc', (parentElement) => [
            this.html(`Bdoc1`, "header", parentElement,
                { classes: [{ type: 'static', value: "page-hero" }] },
                (parentElement) => [
                this.html(`Bdoc11`, "div", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc111`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`Bdoc1111`, "span", parentElement, {}, (parentElement) => [
                            this.text('04')
                        ]),
                        this.text(' THAM CHIẾU')
                        ]),
                    this.html(`Bdoc112`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Toàn bộ directive.')
                    ])
                ]),
                this.html(`Bdoc12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`Bdoc121`, "p", parentElement, {}, (parentElement) => [
                        this.text('Mỗi directive dưới đây có cú pháp, giải thích nó thật sự làm gì, một ví dụ chạy được và ghi chú khi có cạm bẫy. Trừ khi ghi khác, directive có mặt ở cả hai đầu ra: Blade cho SSR và JavaScript cho runtime.')
                    ])
                    ])
                ]),
            this.html(`Bdoc2`, "div", parentElement,
                { classes: [{ type: 'static', value: "doc-body" }] },
                (parentElement) => [
                this.html(`Bdoc21`, "nav", parentElement,
                    { classes: [{ type: 'static', value: "dir-toc" }], attrs: { "aria-label": { type: 'static', value: "Nhóm directive" } } },
                    (parentElement) => [
                    this.html(`Bdoc211`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#khai-bao" }, "data-nav": { type: 'static', value: "disabled" } } },
                        (parentElement) => [
                        this.text('Khai báo')
                        ]),
                    this.html(`Bdoc212`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#xuat-gia-tri" }, "data-nav": { type: 'static', value: "disabled" } } },
                        (parentElement) => [
                        this.text('Xuất giá trị')
                        ]),
                    this.html(`Bdoc213`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#dieu-khien" }, "data-nav": { type: 'static', value: "disabled" } } },
                        (parentElement) => [
                        this.text('Điều khiển luồng')
                        ]),
                    this.html(`Bdoc214`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#thuoc-tinh" }, "data-nav": { type: 'static', value: "disabled" } } },
                        (parentElement) => [
                        this.text('Thuộc tính & binding')
                        ]),
                    this.html(`Bdoc215`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#su-kien" }, "data-nav": { type: 'static', value: "disabled" } } },
                        (parentElement) => [
                        this.text('Sự kiện')
                        ]),
                    this.html(`Bdoc216`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#layout" }, "data-nav": { type: 'static', value: "disabled" } } },
                        (parentElement) => [
                        this.text('Layout & component')
                        ]),
                    this.html(`Bdoc217`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#tien-ich" }, "data-nav": { type: 'static', value: "disabled" } } },
                        (parentElement) => [
                        this.text('Quyền, form & tiện ích')
                        ]),
                    this.html(`Bdoc218`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#magic" }, "data-nav": { type: 'static', value: "disabled" } } },
                        (parentElement) => [
                        this.text('Biến ma thuật')
                        ])
                    ]),
                this.html(`Bdoc22`, "section", parentElement,
                    { classes: [{ type: 'static', value: "dir-group" }], attrs: { "id": { type: 'static', value: "khai-bao" } } },
                    (parentElement) => [
                    this.html(`Bdoc221`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Khai báo')
                    ]),
                    this.html(`Bdoc222`, "p", parentElement, {}, (parentElement) => [
                        this.text('Nằm ở đầu file, ngoài '),
                        this.html(`Bdoc2221`, "code", parentElement, {}, (parentElement) => [
                            this.text('<template>')
                        ]),
                        this.text(', và giữ nguyên thứ tự bạn viết. Đây là nơi quyết định biến nào reactive, biến nào không.')
                    ]),
                    this.html(`Bdoc223`, "div", parentElement,
                        { classes: [{ type: 'static', value: "dir-list" }] },
                        (parentElement) => [
                        this.html(`Bdoc2231`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc22311`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc223111`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@vars')
                                    ]),
                                this.html(`Bdoc223112`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Dữ liệu server')
                                    ])
                                ]),
                            this.html(`Bdoc22312`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@vars(tên_1, tên_2 = mặc_định, ...)')
                                ]),
                            this.html(`Bdoc22313`, "p", parentElement, {}, (parentElement) => [
                                this.text('Khai báo biến do controller truyền xuống view. '),
                                this.html(`Bdoc223131`, "strong", parentElement, {}, (parentElement) => [
                                    this.text('Nên khai báo 1 lần duy nhất ở đầu view')
                                ]),
                                this.text(' (ngay sau '),
                                this.html(`Bdoc223132`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@import')
                                ]),
                                this.text(' nếu có). Có thể khai báo nhiều biến cùng lúc cách nhau bằng dấu phẩy ('),
                                this.html(`Bdoc223133`, "code", parentElement, {}, (parentElement) => [
                                    this.text(',')
                                ]),
                                this.text(') kèm giá trị mặc định. Biến server là dữ liệu tĩnh của lần render này, không có tính reactive.')
                            ]),
                            this.include(`Bdoc2231c1`, 'web.components.code-block', parentElement, [], (parentElement) => ({
                                    "lang": "sao",
                                    __ONE_CHILDREN_CONTENT__: (parentElement) => [
                                    this.text('// controller: return $this->response([\'results\' => $rows, \'total\' => 100]);\n@vars(results = [], total = 0, filter = \'all\')\n\n<p>Tổng số: {{ total }}</p>\n@foreach(results as row)\n    <li>{{ row.title }}</li>\n@endforeach')
                                ]
                                }))
                            ]),
                        this.html(`Bdoc2232`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc22321`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc223211`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@props')
                                    ]),
                                this.html(`Bdoc223212`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Đầu vào component')
                                    ])
                                ]),
                            this.html(`Bdoc22322`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@props({ tên_1: mặc_định_1, tên_2: mặc_định_2, ... })')
                                ]),
                            this.html(`Bdoc22323`, "p", parentElement, {}, (parentElement) => [
                                this.text('Khai báo thuộc tính đầu vào của component. '),
                                this.html(`Bdoc223231`, "strong", parentElement, {}, (parentElement) => [
                                    this.text('Nên khai báo 1 lần duy nhất ở đầu component')
                                ]),
                                this.text(' dưới dạng một object chứa danh sách các prop và giá trị mặc định tương ứng. Props đóng vai trò là slot reactive: khi view cha đổi state truyền vào, runtime tự động đẩy giá trị mới vào '),
                                this.html(`Bdoc223232`, "em", parentElement, {}, (parentElement) => [
                                    this.text('đúng instance con đang sống')
                                ]),
                                this.text(' mà không render lại view con.')
                            ]),
                            this.include(`Bdoc2232c1`, 'web.components.code-block', parentElement, [], (parentElement) => ({
                                    "lang": "sao",
                                    __ONE_CHILDREN_CONTENT__: (parentElement) => [
                                    this.text('<!-- components/statcard.sao -->\n@props({ label: \'Thống kê\', value: 0, tone: \'sky\' })\n\n<div class="card card--{{ tone }}">\n    <span>{{ label }}</span>\n    <strong>{{ value }}</strong>\n</div>\n\n<!-- Bên view cha gọi sang: -->\n<statcard label="Lượt bấm" value="{{ count }}" tone="emerald" />')
                                ]
                                })),
                            this.html(`Bdoc22324`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }] },
                                (parentElement) => [
                                this.text('Props khi truyền ở '),
                                this.html(`Bdoc223241`, "code", parentElement, {}, (parentElement) => [
                                    this.text('<component-tag>')
                                ]),
                                this.text(' hoặc '),
                                this.html(`Bdoc223242`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@include')
                                ]),
                                this.text(' tuân theo cú pháp object của Saola ('),
                                this.html(`Bdoc223243`, "code", parentElement, {}, (parentElement) => [
                                    this.text('khoá: giá_trị')
                                ]),
                                this.text('), đồng bộ với '),
                                this.html(`Bdoc223244`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@props')
                                ]),
                                this.text(' và '),
                                this.html(`Bdoc223245`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@states')
                                ]),
                                this.text('.')
                                ])
                            ]),
                        this.html(`Bdoc2233`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc22331`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc223311`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@states')
                                    ]),
                                this.html(`Bdoc223312`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Reactive')
                                    ])
                                ]),
                            this.html(`Bdoc22332`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@states({ key: giá_trị_khởi_tạo, ... })')
                                ]),
                            this.html(`Bdoc22333`, "p", parentElement, {}, (parentElement) => [
                                this.text('Khai báo khối state reactive cho view dưới dạng một object. '),
                                this.html(`Bdoc223331`, "strong", parentElement, {}, (parentElement) => [
                                    this.text('Nên gom toàn bộ state của view vào 1 directive '),
                                    this.html(`Bdoc2233311`, "code", parentElement, {}, (parentElement) => [
                                        this.text('@states')
                                    ]),
                                    this.text(' duy nhất ở đầu file')
                                ]),
                                this.text('. Mỗi khoá sinh ra ba thứ: biến đọc được trong template/script, hàm setter '),
                                this.html(`Bdoc223332`, "code", parentElement, {}, (parentElement) => [
                                    this.text('setTênKhoá()')
                                ]),
                                this.text(', và slot theo dõi phản ứng trong StateManager.')
                            ]),
                            this.html(`Bdoc22334`, "p", parentElement, {}, (parentElement) => [
                                this.text('Giá trị bạn viết ở đây là giá trị khởi tạo cho '),
                                this.html(`Bdoc223341`, "em", parentElement, {}, (parentElement) => [
                                    this.text('cả')
                                ]),
                                this.text(' lần render server lẫn lần hydrate client.')
                            ]),
                            this.include(`Bdoc2233c1`, 'web.components.code-block', parentElement, [], (parentElement) => ({
                                    "lang": "sao",
                                    __ONE_CHILDREN_CONTENT__: (parentElement) => [
                                    this.text('@states({ count: 0, name: \'Saola\', items: [] })\n\n<button @click(setCount(count + 1))>{{ count }}</button>')
                                ]
                                })),
                            this.html(`Bdoc22335`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }] },
                                (parentElement) => [
                                this.text('Tên setter là '),
                                this.html(`Bdoc223351`, "code", parentElement, {}, (parentElement) => [
                                    this.text('set')
                                ]),
                                this.text(' + tên khoá viết hoa chữ đầu: '),
                                this.html(`Bdoc223352`, "code", parentElement, {}, (parentElement) => [
                                    this.text('count')
                                ]),
                                this.text(' → '),
                                this.html(`Bdoc223353`, "code", parentElement, {}, (parentElement) => [
                                    this.text('setCount')
                                ]),
                                this.text(', '),
                                this.html(`Bdoc223354`, "code", parentElement, {}, (parentElement) => [
                                    this.text('isOpen')
                                ]),
                                this.text(' → '),
                                this.html(`Bdoc223355`, "code", parentElement, {}, (parentElement) => [
                                    this.text('setIsOpen')
                                ]),
                                this.text('. Gọi setter với cùng reference vẫn được nhận nếu nội dung tầng một đã đổi (ví dụ: '),
                                this.html(`Bdoc223356`, "code", parentElement, {}, (parentElement) => [
                                    this.text('list.splice(i,1); setList(list)')
                                ]),
                                this.text(').')
                                ])
                            ]),
                        this.html(`Bdoc2234`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc22341`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc223411`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@state')
                                    ]),
                                this.html(`Bdoc223412`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Reactive')
                                    ])
                                ]),
                            this.html(`Bdoc22342`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@state(tên = giá_trị, ...)')
                                ]),
                            this.html(`Bdoc22343`, "p", parentElement, {}, (parentElement) => [
                                this.text('Khai báo state reactive theo cú pháp gán đơn lẻ hoặc nhiều biến cách nhau bởi dấu phẩy ('),
                                this.html(`Bdoc223431`, "code", parentElement, {}, (parentElement) => [
                                    this.text(',')
                                ]),
                                this.text('). Dùng khi view chỉ có một vài state đơn giản mà không muốn tạo cả khối object '),
                                this.html(`Bdoc223432`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@states')
                                ]),
                                this.text('.')
                            ]),
                            this.include(`Bdoc2234c1`, 'web.components.code-block', parentElement, [], (parentElement) => ({
                                    "lang": "sao",
                                    __ONE_CHILDREN_CONTENT__: (parentElement) => [
                                    this.text('@state(editMode = false, page = 1, perPage = 20)')
                                ]
                                }))
                            ]),
                        this.html(`Bdoc2235`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc22351`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc223511`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@const')
                                    ]),
                                this.html(`Bdoc223512`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Bất biến')
                                    ])
                                ]),
                            this.html(`Bdoc22352`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@const(TÊN = giá_trị, ...)')
                                ]),
                            this.html(`Bdoc22353`, "p", parentElement, {}, (parentElement) => [
                                this.text('Khai báo hằng số bất biến cho view. Có thể khai báo nhiều hằng số cùng lúc trên một directive bằng dấu phẩy ('),
                                this.html(`Bdoc223531`, "code", parentElement, {}, (parentElement) => [
                                    this.text(',')
                                ]),
                                this.text('). Dạng thứ hai là destructuring kiểu React: tạo một cặp state và setter độc lập.')
                            ]),
                            this.include(`Bdoc2235c1`, 'web.components.code-block', parentElement, [], (parentElement) => ({
                                    "lang": "sao",
                                    __ONE_CHILDREN_CONTENT__: (parentElement) => [
                                    this.text('@const(API = \'/api/v1\', LIMIT = 20, TITLE = \'Quản trị\')\n@const([message, setMessage] = useState(\'Xin chào\'))')
                                ]
                                }))
                            ]),
                        this.html(`Bdoc2236`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc22361`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc223611`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@let')
                                    ]),
                                this.html(`Bdoc223612`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Không reactive')
                                    ])
                                ]),
                            this.html(`Bdoc22362`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@let(tên = biểu_thức, ...)')
                                ]),
                            this.html(`Bdoc22363`, "p", parentElement, {}, (parentElement) => [
                                this.text('Biến cục bộ có thể gán lại nhưng '),
                                this.html(`Bdoc223631`, "strong", parentElement, {}, (parentElement) => [
                                    this.text('không')
                                ]),
                                this.text(' reactive (đổi giá trị không kích hoạt render lại). Có thể khai báo nhiều biến cùng lúc bằng dấu phẩy ('),
                                this.html(`Bdoc223632`, "code", parentElement, {}, (parentElement) => [
                                    this.text(',')
                                ]),
                                this.text('). Dùng cho giá trị dẫn xuất tính một lần lúc dựng view.')
                            ]),
                            this.include(`Bdoc2236c1`, 'web.components.code-block', parentElement, [], (parentElement) => ({
                                    "lang": "sao",
                                    __ONE_CHILDREN_CONTENT__: (parentElement) => [
                                    this.text('@let(total = price * qty, greeting = `Xin chào ${name}`)')
                                ]
                                })),
                            this.html(`Bdoc22364`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }, { type: 'static', value: "dir-note--warn" }] },
                                (parentElement) => [
                                this.text('Nếu bạn muốn giá trị tự cập nhật theo state thì đừng dùng '),
                                this.html(`Bdoc223641`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@let')
                                ]),
                                this.text(' — viết thẳng biểu thức trong template hoặc dùng '),
                                this.html(`Bdoc223642`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@computed')
                                ]),
                                this.text(', compiler sẽ tự động suy ra dependency graph.')
                                ])
                            ]),
                        this.html(`Bdoc2237`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc22371`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc223711`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@await')
                                    ]),
                                this.html(`Bdoc223712`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Async')
                                    ])
                                ]),
                            this.html(`Bdoc22372`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@await')
                                ]),
                            this.html(`Bdoc22373`, "p", parentElement, {}, (parentElement) => [
                                this.text('Đánh dấu view là bất đồng bộ. Compiler bật cờ '),
                                this.html(`Bdoc223731`, "code", parentElement, {}, (parentElement) => [
                                    this.text('hasAwaitData')
                                ]),
                                this.text(' trong config, runtime nhờ đó biết view cần chờ dữ liệu trước khi commit state, và có thể render khối preload trong lúc chờ.')
                            ])
                            ]),
                        this.html(`Bdoc2238`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc22381`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc223811`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@computed')
                                    ]),
                                this.html(`Bdoc223812`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Dẫn xuất')
                                    ])
                                ]),
                            this.html(`Bdoc22382`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@computed(tên = biểu_thức)')
                                ]),
                            this.html(`Bdoc22383`, "p", parentElement, {}, (parentElement) => [
                                this.text('State dẫn xuất có memo hoá. Chỉ tính lại khi một trong các state phụ thuộc đổi, và tính '),
                                this.html(`Bdoc223831`, "em", parentElement, {}, (parentElement) => [
                                    this.text('lười')
                                ]),
                                this.text(' — đánh dấu bẩn lúc dep đổi, tính thật lúc có người đọc. Dep đổi năm lần trong một batch thì chỉ tính một lần.')
                            ]),
                            this.include(`Bdoc2238c1`, 'web.components.code-block', parentElement, [], (parentElement) => ({
                                    "lang": "sao",
                                    __ONE_CHILDREN_CONTENT__: (parentElement) => [
                                    this.text('@states({ users: [] })\n@computed(activeCount = users.filter(u => u.active).length)')
                                ]
                                })),
                            this.html(`Bdoc22384`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }, { type: 'static', value: "dir-note--warn" }] },
                                (parentElement) => [
                                this.html(`Bdoc223841`, "strong", parentElement, {}, (parentElement) => [
                                    this.text('Hiện chỉ chạy phía client.')
                                ]),
                                this.text(' Directive này không được emit ở đầu ra Blade nên biến bị undefined khi render server. Trang cần SSR thì viết thẳng biểu thức trong template.')
                                ])
                            ])
                        ])
                    ]),
                this.html(`Bdoc23`, "section", parentElement,
                    { classes: [{ type: 'static', value: "dir-group" }], attrs: { "id": { type: 'static', value: "xuat-gia-tri" } } },
                    (parentElement) => [
                    this.html(`Bdoc231`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Xuất giá trị')
                    ]),
                    this.html(`Bdoc232`, "p", parentElement, {}, (parentElement) => [
                        this.text('Mỗi chỗ nội suy được bọc trong một cặp marker riêng, nên đổi state chỉ thay đúng đoạn text đó chứ không render lại cả thẻ cha.')
                    ]),
                    this.html(`Bdoc233`, "div", parentElement,
                        { classes: [{ type: 'static', value: "dir-list" }] },
                        (parentElement) => [
                        this.html(`Bdoc2331`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc23311`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc233111`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('{{ … }}')
                                    ]),
                                this.html(`Bdoc233112`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Escape')
                                    ])
                                ]),
                            this.html(`Bdoc23312`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('{{ biểu_thức }}')
                                ]),
                            this.html(`Bdoc23313`, "p", parentElement, {}, (parentElement) => [
                                this.text('In giá trị dưới dạng text an toàn. Nội dung được đặt bằng text node nên không có đường nào để chuỗi biến thành HTML.')
                            ]),
                            this.include(`Bdoc2331c1`, 'web.components.code-block', parentElement, [], (parentElement) => ({
                                    "lang": "sao",
                                    __ONE_CHILDREN_CONTENT__: (parentElement) => [
                                    this.text('<h1>{{ user[\'name\'] }}</h1>\n<span>{{ price * qty }}</span>')
                                ]
                                })),
                            this.html(`Bdoc23314`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }] },
                                (parentElement) => [
                                this.text('Biểu thức được phép, không chỉ tên biến. Compiler đọc biểu thức để suy ra danh sách state mà vùng này phụ thuộc.')
                                ])
                            ]),
                        this.html(`Bdoc2332`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc23321`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc233211`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('{!! … !!}')
                                    ]),
                                this.html(`Bdoc233212`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Raw HTML')
                                    ])
                                ]),
                            this.html(`Bdoc23322`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('{!! biểu_thức !!}')
                                ]),
                            this.html(`Bdoc23323`, "p", parentElement, {}, (parentElement) => [
                                this.text('In nguyên HTML, không escape. Chỉ dùng cho nội dung bạn tự sinh ra hoặc đã làm sạch — đây là đường duy nhất để chuỗi từ dữ liệu trở thành thẻ thật.')
                            ])
                            ]),
                        this.html(`Bdoc2333`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc23331`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc233311`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('{{-- … --}}')
                                    ]),
                                this.html(`Bdoc233312`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Ghi chú')
                                    ])
                                ]),
                            this.html(`Bdoc23332`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('{{-- ghi chú --}}')
                                ]),
                            this.html(`Bdoc23333`, "p", parentElement, {}, (parentElement) => [
                                this.text('Ghi chú của template. Bị loại hoàn toàn khỏi cả hai đầu ra, khác với '),
                                this.html(`Bdoc233331`, "code", parentElement, {}, (parentElement) => [
                                    this.text('<!-- -->')
                                ]),
                                this.text(' vốn đi thẳng vào HTML.')
                            ])
                            ])
                        ])
                    ]),
                this.html(`Bdoc24`, "section", parentElement,
                    { classes: [{ type: 'static', value: "dir-group" }], attrs: { "id": { type: 'static', value: "dieu-khien" } } },
                    (parentElement) => [
                    this.html(`Bdoc241`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Điều khiển luồng')
                    ]),
                    this.html(`Bdoc242`, "p", parentElement, {}, (parentElement) => [
                        this.text('Mỗi khối trở thành một '),
                        this.html(`Bdoc2421`, "em", parentElement, {}, (parentElement) => [
                            this.text('vùng reactive')
                        ]),
                        this.text(': một cặp marker trong DOM cộng danh sách state mà điều kiện phụ thuộc. State đổi thì chỉ nội dung giữa hai marker đó được dựng lại.')
                    ]),
                    this.html(`Bdoc243`, "div", parentElement,
                        { classes: [{ type: 'static', value: "dir-list" }] },
                        (parentElement) => [
                        this.html(`Bdoc2431`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc24311`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc243111`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@if '),
                                    this.html(`Bdoc2431111`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @elseif · @else · @endif')
                                    ])
                                    ]),
                                this.html(`Bdoc243112`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Vùng reactive')
                                    ])
                                ]),
                            this.html(`Bdoc24312`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@if(điều_kiện)'),
                                this.text('…'),
                                this.text('@elseif(điều_kiện_khác)'),
                                this.text('…'),
                                this.text('@else'),
                                this.text('…'),
                                this.text('@endif')
                                ]),
                            this.html(`Bdoc24313`, "p", parentElement, {}, (parentElement) => [
                                this.text('Compiler đọc biểu thức điều kiện, rút ra danh sách state trong đó và gắn vào vùng. Không có dependency tracking lúc chạy — phụ thuộc được tính sẵn lúc biên dịch.')
                            ]),
                            this.include(`Bdoc2431c1`, 'web.components.code-block', parentElement, [], (parentElement) => ({
                                    "lang": "sao",
                                    __ONE_CHILDREN_CONTENT__: (parentElement) => [
                                    this.text('@if(status === \'ready\')\n    <p>Sẵn sàng</p>\n@elseif(status === \'building\')\n    <p>Đang biên dịch…</p>\n@else\n    <p>Có lỗi</p>\n@endif')
                                ]
                                })),
                            this.html(`Bdoc24314`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }] },
                                (parentElement) => [
                                this.text('Đặt '),
                                this.html(`Bdoc243141`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@if')
                                ]),
                                this.text(' bên trong '),
                                this.html(`Bdoc243142`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@foreach')
                                ]),
                                this.text(' thì mỗi item có vùng marker riêng, nên đổi một item không đụng các item khác.')
                                ])
                            ]),
                        this.html(`Bdoc2432`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc24321`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc243211`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@foreach '),
                                    this.html(`Bdoc2432111`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @endforeach')
                                    ])
                                    ]),
                                this.html(`Bdoc243212`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Vùng reactive')
                                    ])
                                ]),
                            this.html(`Bdoc24322`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@foreach(danh_sách as item)'),
                                this.text('@foreach(danh_sách as khoá => item)')
                                ]),
                            this.html(`Bdoc24323`, "p", parentElement, {}, (parentElement) => [
                                this.text('Lặp có '),
                                this.html(`Bdoc243231`, "em", parentElement, {}, (parentElement) => [
                                    this.text('reconciliation')
                                ]),
                                this.text(': runtime giữ một cache slot cho mỗi item. Khi danh sách đổi, item nào còn nguyên thì giữ nguyên DOM và mọi subscription của nó; item rời danh sách thì element bị destroy hẳn chứ không bỏ rơi.')
                            ]),
                            this.include(`Bdoc2432c1`, 'web.components.code-block', parentElement, [], (parentElement) => ({
                                    "lang": "sao",
                                    __ONE_CHILDREN_CONTENT__: (parentElement) => [
                                    this.text('@foreach(items as item)\n    @key(item[\'id\'])\n    <li>{{ item[\'label\'] }}</li>\n@endforeach')
                                ]
                                })),
                            this.html(`Bdoc24324`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }, { type: 'static', value: "dir-note--warn" }] },
                                (parentElement) => [
                                this.text('Slot chỉ được tái dùng khi khoá khớp '),
                                this.html(`Bdoc243241`, "strong", parentElement, {}, (parentElement) => [
                                    this.text('và')
                                ]),
                                this.text(' reference của item không đổi — vì output biên dịch đóng gói thẳng object item vào closure. Refetch từ server trả object mới sẽ dựng lại hàng đó. Muốn giữ state của view con qua mỗi lần đồng bộ thì lặp trên danh sách id ổn định rồi truyền dữ liệu qua props.')
                                ])
                            ]),
                        this.html(`Bdoc2433`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc24331`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc243311`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@key')
                                    ]),
                                this.html(`Bdoc243312`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Bổ trợ vòng lặp')
                                    ])
                                ]),
                            this.html(`Bdoc24332`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@key(biểu_thức)')
                                ]),
                            this.html(`Bdoc24333`, "p", parentElement, {}, (parentElement) => [
                                this.text('Đặt ngay dòng đầu thân vòng lặp. Nó cho cache biết lấy gì làm định danh của item. Không có '),
                                this.html(`Bdoc243331`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@key')
                                ]),
                                this.text(' thì runtime dùng chính reference object làm khoá, và hậu tố id của marker rơi về chỉ số vòng lặp — phải khớp với phía SSR thì hydrate mới không lệch.')
                            ]),
                            this.html(`Bdoc24334`, "p", parentElement, {}, (parentElement) => [
                                this.text('Khoá còn giúp phân biệt các item trùng nhau trong danh sách nguyên thuỷ, ví dụ '),
                                this.html(`Bdoc243341`, "code", parentElement, {}, (parentElement) => [
                                    this.text('[\'a\', \'b\', \'a\']')
                                ]),
                                this.text('.')
                            ])
                            ]),
                        this.html(`Bdoc2434`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc24341`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc243411`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@forelse '),
                                    this.html(`Bdoc2434111`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @empty · @endforelse')
                                    ])
                                    ]),
                                this.html(`Bdoc243412`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Vùng reactive')
                                    ])
                                ]),
                            this.html(`Bdoc24342`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@forelse(danh_sách as item)'),
                                this.text('…'),
                                this.text('@empty'),
                                this.text('…'),
                                this.text('@endforelse')
                                ]),
                            this.html(`Bdoc24343`, "p", parentElement, {}, (parentElement) => [
                                this.text('Như '),
                                this.html(`Bdoc243431`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@foreach')
                                ]),
                                this.text(' nhưng có sẵn nhánh cho danh sách rỗng, khỏi phải viết thêm một '),
                                this.html(`Bdoc243432`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@if')
                                ]),
                                this.text(' đếm phần tử.')
                            ])
                            ]),
                        this.html(`Bdoc2435`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc24351`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc243511`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@for '),
                                    this.html(`Bdoc2435111`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @while')
                                    ])
                                    ]),
                                this.html(`Bdoc243512`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Vùng reactive')
                                    ])
                                ]),
                            this.html(`Bdoc24352`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@for(i = 0; i < n; i++) … @endfor'),
                                this.text('@while(điều_kiện) … @endwhile')
                                ]),
                            this.html(`Bdoc24353`, "p", parentElement, {}, (parentElement) => [
                                this.text('Vòng lặp đếm và vòng lặp điều kiện. '),
                                this.html(`Bdoc243531`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@while')
                                ]),
                                this.text(' có trần lặp ở runtime để một điều kiện sai không treo trình duyệt.')
                            ]),
                            this.include(`Bdoc2435c1`, 'web.components.code-block', parentElement, [], (parentElement) => ({
                                    "lang": "sao",
                                    __ONE_CHILDREN_CONTENT__: (parentElement) => [
                                    this.text('@for(i = 0; i < count; i++)\n    <li>Ping #{{ i + 1 }}</li>\n@endfor')
                                ]
                                }))
                            ]),
                        this.html(`Bdoc2436`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc24361`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc243611`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@switch '),
                                    this.html(`Bdoc2436111`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @case · @default · @break')
                                    ])
                                    ]),
                                this.html(`Bdoc243612`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Vùng reactive')
                                    ])
                                ]),
                            this.html(`Bdoc24362`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@switch(biểu_thức)'),
                                this.text('@case(\'a\')'),
                                this.text('…'),
                                this.text('@break'),
                                this.text('@default'),
                                this.text('…'),
                                this.text('@endswitch')
                                ]),
                            this.html(`Bdoc24363`, "p", parentElement, {}, (parentElement) => [
                                this.text('Nhiều nhánh gói trong một vùng marker duy nhất. Nhớ '),
                                this.html(`Bdoc243631`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@break')
                                ]),
                                this.text(' ở cuối mỗi '),
                                this.html(`Bdoc243632`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@case')
                                ]),
                                this.text(', đúng ngữ nghĩa switch chứ không phải if-else.')
                            ])
                            ]),
                        this.html(`Bdoc2437`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc24371`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc243711`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@continue '),
                                    this.html(`Bdoc2437111`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @break')
                                    ])
                                    ]),
                                this.html(`Bdoc243712`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Điều khiển')
                                    ])
                                ]),
                            this.html(`Bdoc24372`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@continue'),
                                this.text('@break'),
                                this.text('@continue(điều_kiện)')
                                ]),
                            this.html(`Bdoc24373`, "p", parentElement, {}, (parentElement) => [
                                this.text('Bỏ qua vòng hiện tại hoặc thoát vòng lặp. Nhận điều kiện tuỳ chọn để khỏi bọc thêm một '),
                                this.html(`Bdoc243731`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@if')
                                ]),
                                this.text('.')
                            ])
                            ]),
                        this.html(`Bdoc2438`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc24381`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc243811`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@ssr '),
                                    this.html(`Bdoc2438111`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @endssr')
                                    ])
                                    ]),
                                this.html(`Bdoc243812`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Chỉ server')
                                    ])
                                ]),
                            this.html(`Bdoc24382`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@ssr … @endssr')
                                ]),
                            this.html(`Bdoc24383`, "p", parentElement, {}, (parentElement) => [
                                this.text('Khối chỉ tồn tại ở đầu ra Blade. Compiler loại nó khỏi view JavaScript, nên nội dung bên trong xuất hiện trong HTML lần đầu rồi không bao giờ được runtime dựng lại. Hợp cho dữ liệu chỉ có ở server hoặc khối nặng không cần tương tác.')
                            ]),
                            this.html(`Bdoc24384`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }] },
                                (parentElement) => [
                                this.text('Bí danh: '),
                                this.html(`Bdoc243841`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@serverSide')
                                ]),
                                this.text(' / '),
                                this.html(`Bdoc243842`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@endServerSide')
                                ]),
                                this.text(', '),
                                this.html(`Bdoc243843`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@useSSR')
                                ]),
                                this.text(' / '),
                                this.html(`Bdoc243844`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@enduseSSR')
                                ]),
                                this.text('.')
                                ])
                            ])
                        ])
                    ]),
                this.html(`Bdoc25`, "section", parentElement,
                    { classes: [{ type: 'static', value: "dir-group" }], attrs: { "id": { type: 'static', value: "thuoc-tinh" } } },
                    (parentElement) => [
                    this.html(`Bdoc251`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Thuộc tính & binding')
                    ]),
                    this.html(`Bdoc252`, "p", parentElement, {}, (parentElement) => [
                        this.text('Nhóm này viết '),
                        this.html(`Bdoc2521`, "em", parentElement, {}, (parentElement) => [
                            this.text('bên trong thẻ mở')
                        ]),
                        this.text('. Runtime chia chúng thành bốn rổ khác nhau — '),
                        this.html(`Bdoc2522`, "code", parentElement, {}, (parentElement) => [
                            this.text('attrs')
                        ]),
                        this.text(', '),
                        this.html(`Bdoc2523`, "code", parentElement, {}, (parentElement) => [
                            this.text('props')
                        ]),
                        this.text(', '),
                        this.html(`Bdoc2524`, "code", parentElement, {}, (parentElement) => [
                            this.text('classes')
                        ]),
                        this.text(', '),
                        this.html(`Bdoc2525`, "code", parentElement, {}, (parentElement) => [
                            this.text('styles')
                        ]),
                        this.text(' — vì đặt thuộc tính HTML và gán property của element không giống nhau.')
                    ]),
                    this.html(`Bdoc253`, "div", parentElement,
                        { classes: [{ type: 'static', value: "dir-list" }] },
                        (parentElement) => [
                        this.html(`Bdoc2531`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc25311`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc253111`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@attr')
                                    ]),
                                this.html(`Bdoc253112`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('attrs')
                                    ])
                                ]),
                            this.html(`Bdoc25312`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@attr({ tên: giá_trị, ... })')
                                ]),
                            this.html(`Bdoc25313`, "p", parentElement, {}, (parentElement) => [
                                this.text('Thuộc tính động. Giá trị '),
                                this.html(`Bdoc253131`, "code", parentElement, {}, (parentElement) => [
                                    this.text('null')
                                ]),
                                this.text(', '),
                                this.html(`Bdoc253132`, "code", parentElement, {}, (parentElement) => [
                                    this.text('undefined')
                                ]),
                                this.text(' hoặc '),
                                this.html(`Bdoc253133`, "code", parentElement, {}, (parentElement) => [
                                    this.text('false')
                                ]),
                                this.text(' làm runtime '),
                                this.html(`Bdoc253134`, "em", parentElement, {}, (parentElement) => [
                                    this.text('gỡ hẳn')
                                ]),
                                this.text(' thuộc tính khỏi thẻ chứ không đặt chuỗi rỗng.')
                            ]),
                            this.include(`Bdoc2531c1`, 'web.components.code-block', parentElement, [], (parentElement) => ({
                                    "lang": "sao",
                                    __ONE_CHILDREN_CONTENT__: (parentElement) => [
                                    this.text('<a @attr({ href: link, title: docTitle })>…</a>')
                                ]
                                }))
                            ]),
                        this.html(`Bdoc2532`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc25321`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc253211`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@class')
                                    ]),
                                this.html(`Bdoc253212`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('classes')
                                    ])
                                ]),
                            this.html(`Bdoc25322`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@class({\'tĩnh\', \'có-điều-kiện\': biểu_thức})')
                                ]),
                            this.html(`Bdoc25323`, "p", parentElement, {}, (parentElement) => [
                                this.text('Trộn class tĩnh với class có điều kiện. Runtime chỉ bật tắt đúng những class có điều kiện, không ghi đè cả thuộc tính '),
                                this.html(`Bdoc253231`, "code", parentElement, {}, (parentElement) => [
                                    this.text('class')
                                ]),
                                this.text(' — nên class do code khác thêm vào vẫn còn.')
                            ]),
                            this.include(`Bdoc2532c1`, 'web.components.code-block', parentElement, [], (parentElement) => ({
                                    "lang": "sao",
                                    __ONE_CHILDREN_CONTENT__: (parentElement) => [
                                    this.text('<div @class({\'card\', \'card--active\': isActive, \'card--gone\': record === null})>')
                                ]
                                })),
                            this.html(`Bdoc25324`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }, { type: 'static', value: "dir-note--warn" }] },
                                (parentElement) => [
                                this.text('Tránh dấu '),
                                this.html(`Bdoc253241`, "code", parentElement, {}, (parentElement) => [
                                    this.text('>')
                                ]),
                                this.text(' hoặc '),
                                this.html(`Bdoc253242`, "code", parentElement, {}, (parentElement) => [
                                    this.text('<')
                                ]),
                                this.text(' trong biểu thức: bộ phân tích thẻ ở đầu ra Blade đóng thẻ sớm tại đó. Viết '),
                                this.html(`Bdoc253243`, "code", parentElement, {}, (parentElement) => [
                                    this.text('count !== 0')
                                ]),
                                this.text(' thay cho '),
                                this.html(`Bdoc253244`, "code", parentElement, {}, (parentElement) => [
                                    this.text('count > 0')
                                ]),
                                this.text('.')
                                ])
                            ]),
                        this.html(`Bdoc2533`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc25331`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc253311`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@style')
                                    ]),
                                this.html(`Bdoc253312`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('styles')
                                    ])
                                ]),
                            this.html(`Bdoc25332`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@style({ \'thuộc-tính\': giá_trị })')
                                ]),
                            this.html(`Bdoc25333`, "p", parentElement, {}, (parentElement) => [
                                this.text('Inline style theo state, đặt qua '),
                                this.html(`Bdoc253331`, "code", parentElement, {}, (parentElement) => [
                                    this.text('style.setProperty')
                                ]),
                                this.text(' nên chỉ những thuộc tính bạn liệt kê bị đụng tới.')
                            ]),
                            this.html(`Bdoc25334`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }, { type: 'static', value: "dir-note--warn" }] },
                                (parentElement) => [
                                this.html(`Bdoc253341`, "strong", parentElement, {}, (parentElement) => [
                                    this.text('Dạng object của modern syntax hiện chưa ra đúng ở đầu ra JavaScript')
                                ]),
                                this.text(' — nó rã thành các thuộc tính tĩnh rời rạc nên binding không chạy sau hydrate. Tạm thời dùng '),
                                this.html(`Bdoc253342`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@class')
                                ]),
                                this.text(' với vài class dựng sẵn.')
                                ])
                            ]),
                        this.html(`Bdoc2534`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc25341`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc253411`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@bind '),
                                    this.html(`Bdoc2534111`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @val')
                                    ])
                                    ]),
                                this.html(`Bdoc253412`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Hai chiều')
                                    ])
                                ]),
                            this.html(`Bdoc25342`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@bind(tên_state)')
                                ]),
                            this.html(`Bdoc25343`, "p", parentElement, {}, (parentElement) => [
                                this.text('Binding hai chiều. Runtime tự chọn cách đọc ghi theo loại input: '),
                                this.html(`Bdoc253431`, "code", parentElement, {}, (parentElement) => [
                                    this.text('checked')
                                ]),
                                this.text(' cho checkbox, so khớp '),
                                this.html(`Bdoc253432`, "code", parentElement, {}, (parentElement) => [
                                    this.text('value')
                                ]),
                                this.text(' cho radio, '),
                                this.html(`Bdoc253433`, "code", parentElement, {}, (parentElement) => [
                                    this.text('valueAsNumber')
                                ]),
                                this.text(' cho number và range, còn lại là '),
                                this.html(`Bdoc253434`, "code", parentElement, {}, (parentElement) => [
                                    this.text('value')
                                ]),
                                this.text('. Với '),
                                this.html(`Bdoc253435`, "code", parentElement, {}, (parentElement) => [
                                    this.text('<select>')
                                ]),
                                this.text(', việc gán giá trị được hoãn một microtask vì '),
                                this.html(`Bdoc253436`, "code", parentElement, {}, (parentElement) => [
                                    this.text('<option>')
                                ]),
                                this.text(' chưa kịp có mặt lúc thẻ vừa tạo.')
                            ]),
                            this.include(`Bdoc2534c1`, 'web.components.code-block', parentElement, [], (parentElement) => ({
                                    "lang": "sao",
                                    __ONE_CHILDREN_CONTENT__: (parentElement) => [
                                    this.text('<input type="text" @bind(name)>\n<input type="checkbox" @bind(agree)>\n<select @bind(tone)>…</select>')
                                ]
                                })),
                            this.html(`Bdoc25344`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }, { type: 'static', value: "dir-note--warn" }] },
                                (parentElement) => [
                                this.text('Chỉ nhận khoá phẳng. '),
                                this.html(`Bdoc253441`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@bind(user.name)')
                                ]),
                                this.text(' đọc được giá trị ban đầu nhưng không ghi ngược và không nhận thay đổi, vì setter và subscription chỉ tồn tại ở tầng khoá gốc. Tách thành state phẳng như '),
                                this.html(`Bdoc253442`, "code", parentElement, {}, (parentElement) => [
                                    this.text('userName')
                                ]),
                                this.text('.')
                                ])
                            ]),
                        this.html(`Bdoc2535`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc25351`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc253511`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('Boolean attribute')
                                    ]),
                                this.html(`Bdoc253512`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('props')
                                    ])
                                ]),
                            this.html(`Bdoc25352`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@disabled(biểu_thức)  @checked(…)  @selected(…)'),
                                this.text('@required(…)  @readonly(…)')
                                ]),
                            this.html(`Bdoc25353`, "p", parentElement, {}, (parentElement) => [
                                this.text('Gán thẳng vào '),
                                this.html(`Bdoc253531`, "em", parentElement, {}, (parentElement) => [
                                    this.text('property')
                                ]),
                                this.text(' của element chứ không phải thuộc tính HTML — đúng cách trình duyệt đọc trạng thái các thẻ form.')
                            ]),
                            this.html(`Bdoc25354`, "table", parentElement,
                                { classes: [{ type: 'static', value: "dir-mini" }] },
                                (parentElement) => [
                                this.html(`Bdoc253541`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`Bdoc2535411`, "td", parentElement, {}, (parentElement) => [
                                        this.text('@disabled')
                                    ]),
                                    this.html(`Bdoc2535412`, "td", parentElement, {}, (parentElement) => [
                                        this.text('khoá nút hoặc ô nhập')
                                    ])
                                ]),
                                this.html(`Bdoc253542`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`Bdoc2535421`, "td", parentElement, {}, (parentElement) => [
                                        this.text('@checked')
                                    ]),
                                    this.html(`Bdoc2535422`, "td", parentElement, {}, (parentElement) => [
                                        this.text('trạng thái checkbox và radio')
                                    ])
                                ]),
                                this.html(`Bdoc253543`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`Bdoc2535431`, "td", parentElement, {}, (parentElement) => [
                                        this.text('@selected')
                                    ]),
                                    this.html(`Bdoc2535432`, "td", parentElement, {}, (parentElement) => [
                                        this.text('option đang được chọn')
                                    ])
                                ]),
                                this.html(`Bdoc253544`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`Bdoc2535441`, "td", parentElement, {}, (parentElement) => [
                                        this.text('@required')
                                    ]),
                                    this.html(`Bdoc2535442`, "td", parentElement, {}, (parentElement) => [
                                        this.text('bắt buộc nhập')
                                    ])
                                ]),
                                this.html(`Bdoc253545`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`Bdoc2535451`, "td", parentElement, {}, (parentElement) => [
                                        this.text('@readonly')
                                    ]),
                                    this.html(`Bdoc2535452`, "td", parentElement, {}, (parentElement) => [
                                        this.text('chỉ đọc, vẫn gửi kèm form')
                                    ])
                                ])
                                ])
                            ]),
                        this.html(`Bdoc2536`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc25361`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc253611`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@show '),
                                    this.html(`Bdoc2536111`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @hide')
                                    ])
                                    ]),
                                this.html(`Bdoc253612`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('props')
                                    ])
                                ]),
                            this.html(`Bdoc25362`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@show(biểu_thức)'),
                                this.text('@hide(biểu_thức)')
                                ]),
                            this.html(`Bdoc25363`, "p", parentElement, {}, (parentElement) => [
                                this.text('Bật tắt hiển thị mà giữ nguyên DOM và state bên trong — khác '),
                                this.html(`Bdoc253631`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@if')
                                ]),
                                this.text(' vốn dựng lại nội dung mỗi lần bật.')
                            ]),
                            this.html(`Bdoc25364`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }, { type: 'static', value: "dir-note--warn" }] },
                                (parentElement) => [
                                this.html(`Bdoc253641`, "strong", parentElement, {}, (parentElement) => [
                                    this.text('Đang đụng directive cùng tên của Blade.')
                                ]),
                                this.text(' Laravel hiểu '),
                                this.html(`Bdoc253642`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@show')
                                ]),
                                this.text(' là "kết thúc section rồi yield ngay", nên nó nuốt directive của Saola và làm hỏng section stack của cả trang. Tạm thời dùng '),
                                this.html(`Bdoc253643`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@class')
                                ]),
                                this.text(' với một class ẩn.')
                                ])
                            ]),
                        this.html(`Bdoc2537`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc25371`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc253711`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@transition')
                                    ]),
                                this.html(`Bdoc253712`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Hoạt ảnh')
                                    ])
                                ]),
                            this.html(`Bdoc25372`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@transition(\'tên\')')
                                ]),
                            this.html(`Bdoc25373`, "p", parentElement, {}, (parentElement) => [
                                this.text('Gắn tiền tố class enter/leave cho phần tử khi nó vào hoặc rời một vùng reactive. Bạn định nghĩa '),
                                this.html(`Bdoc253731`, "code", parentElement, {}, (parentElement) => [
                                    this.text('.tên-enter-active')
                                ]),
                                this.text(', '),
                                this.html(`Bdoc253732`, "code", parentElement, {}, (parentElement) => [
                                    this.text('.tên-enter-from')
                                ]),
                                this.text(', '),
                                this.html(`Bdoc253733`, "code", parentElement, {}, (parentElement) => [
                                    this.text('.tên-leave-active')
                                ]),
                                this.text(', '),
                                this.html(`Bdoc253734`, "code", parentElement, {}, (parentElement) => [
                                    this.text('.tên-leave-to')
                                ]),
                                this.text(' trong CSS.')
                            ]),
                            this.include(`Bdoc2537c1`, 'web.components.code-block', parentElement, [], (parentElement) => ({
                                    "lang": "sao",
                                    __ONE_CHILDREN_CONTENT__: (parentElement) => [
                                    this.text('<article @transition(\'row\')>…</article>\n\n.row-enter-active, .row-leave-active { transition: opacity .18s ease; }\n.row-enter-from,   .row-leave-to     { opacity: 0; }')
                                ]
                                }))
                            ])
                        ])
                    ]),
                this.html(`Bdoc26`, "section", parentElement,
                    { classes: [{ type: 'static', value: "dir-group" }], attrs: { "id": { type: 'static', value: "su-kien" } } },
                    (parentElement) => [
                    this.html(`Bdoc261`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Sự kiện')
                    ]),
                    this.html(`Bdoc262`, "p", parentElement, {}, (parentElement) => [
                        this.text('Viết '),
                        this.html(`Bdoc2621`, "code", parentElement, {}, (parentElement) => [
                            this.text('@tênSựKiện(...)')
                        ]),
                        this.text(' ngay trên thẻ. Mọi listener đăng ký kèm '),
                        this.html(`Bdoc2622`, "code", parentElement, {}, (parentElement) => [
                            this.text('AbortSignal')
                        ]),
                        this.text(' của view, nên khi view bị destroy chỉ cần một lệnh '),
                        this.html(`Bdoc2623`, "code", parentElement, {}, (parentElement) => [
                            this.text('abort()')
                        ]),
                        this.text(' là gỡ sạch — không có đường nào rò listener.')
                    ]),
                    this.html(`Bdoc263`, "div", parentElement,
                        { classes: [{ type: 'static', value: "dir-list" }] },
                        (parentElement) => [
                        this.html(`Bdoc2631`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc26311`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc263111`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@click '),
                                    this.html(`Bdoc2631111`, "em", parentElement, {}, (parentElement) => [
                                        this.text('và họ hàng')
                                    ])
                                    ]),
                                this.html(`Bdoc263112`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Gắn listener')
                                    ])
                                ]),
                            this.html(`Bdoc26312`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@click(tênMethod())            '),
                                this.html(`Bdoc263121`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "c" }] },
                                    (parentElement) => [
                                    this.text('// gọi method trong <script setup>')
                                    ]),
                                this.text('@click(setCount(count + 1))    '),
                                this.html(`Bdoc263122`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "c" }] },
                                    (parentElement) => [
                                    this.text('// biểu thức trực tiếp')
                                    ]),
                                this.text('@change(update(event))         '),
                                this.html(`Bdoc263123`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "c" }] },
                                    (parentElement) => [
                                    this.text('// truyền object event')
                                    ])
                                ]),
                            this.html(`Bdoc26313`, "p", parentElement, {}, (parentElement) => [
                                this.text('Có hai dạng. Dạng thứ nhất là tên method: compiler ghi lại tên rồi runtime tra trên view instance và bind '),
                                this.html(`Bdoc263131`, "code", parentElement, {}, (parentElement) => [
                                    this.text('this')
                                ]),
                                this.text(' về view. Dạng thứ hai là biểu thức, được gói thành closure ngay tại chỗ.')
                            ]),
                            this.html(`Bdoc26314`, "p", parentElement, {}, (parentElement) => [
                                this.text('Biến '),
                                this.html(`Bdoc263141`, "code", parentElement, {}, (parentElement) => [
                                    this.text('event')
                                ]),
                                this.text(' có sẵn trong biểu thức, truyền vào method thì nhận nguyên object sự kiện.')
                            ]),
                            this.include(`Bdoc2631c1`, 'web.components.code-block', parentElement, [], (parentElement) => ({
                                    "lang": "sao",
                                    __ONE_CHILDREN_CONTENT__: (parentElement) => [
                                    this.text('<form @submit(save(event))>\n    <input @bind(name) @keydown(onKey(event))>\n    <button type="submit">Lưu</button>\n</form>')
                                ]
                                })),
                            this.html(`Bdoc26315`, "table", parentElement,
                                { classes: [{ type: 'static', value: "dir-mini" }] },
                                (parentElement) => [
                                this.html(`Bdoc263151`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`Bdoc2631511`, "td", parentElement, {}, (parentElement) => [
                                        this.text('chuột')
                                    ]),
                                    this.html(`Bdoc2631512`, "td", parentElement, {}, (parentElement) => [
                                        this.text('@click · @dblclick · @contextmenu · @mouseenter')
                                    ])
                                ]),
                                this.html(`Bdoc263152`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`Bdoc2631521`, "td", parentElement, {}, (parentElement) => [
                                        this.text('form')
                                    ]),
                                    this.html(`Bdoc2631522`, "td", parentElement, {}, (parentElement) => [
                                        this.text('@submit · @change · @input · @focus · @blur')
                                    ])
                                ]),
                                this.html(`Bdoc263153`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`Bdoc2631531`, "td", parentElement, {}, (parentElement) => [
                                        this.text('bàn phím')
                                    ]),
                                    this.html(`Bdoc2631532`, "td", parentElement, {}, (parentElement) => [
                                        this.text('@keydown và các sự kiện bàn phím chuẩn')
                                    ])
                                ]),
                                this.html(`Bdoc263154`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`Bdoc2631541`, "td", parentElement, {}, (parentElement) => [
                                        this.text('khác')
                                    ]),
                                    this.html(`Bdoc2631542`, "td", parentElement, {}, (parentElement) => [
                                        this.text('@wheel · @scroll · @resize · @load')
                                    ])
                                ])
                                ])
                            ]),
                        this.html(`Bdoc2632`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc26321`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc263211`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('Modifier')
                                    ]),
                                this.html(`Bdoc263212`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('.prevent .stop .self .once')
                                    ])
                                ]),
                            this.html(`Bdoc26322`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@click.prevent(save())'),
                                this.text('@click.stop.once(remove(id))')
                                ]),
                            this.html(`Bdoc26323`, "p", parentElement, {}, (parentElement) => [
                                this.text('Nối sau tên sự kiện, ghép được nhiều cái. Runtime xử lý chúng trước khi gọi handler của bạn.')
                            ]),
                            this.html(`Bdoc26324`, "table", parentElement,
                                { classes: [{ type: 'static', value: "dir-mini" }] },
                                (parentElement) => [
                                this.html(`Bdoc263241`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`Bdoc2632411`, "td", parentElement, {}, (parentElement) => [
                                        this.text('.prevent')
                                    ]),
                                    this.html(`Bdoc2632412`, "td", parentElement, {}, (parentElement) => [
                                        this.text('gọi '),
                                        this.html(`Bdoc26324121`, "code", parentElement, {}, (parentElement) => [
                                            this.text('event.preventDefault()')
                                        ])
                                    ])
                                ]),
                                this.html(`Bdoc263242`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`Bdoc2632421`, "td", parentElement, {}, (parentElement) => [
                                        this.text('.stop')
                                    ]),
                                    this.html(`Bdoc2632422`, "td", parentElement, {}, (parentElement) => [
                                        this.text('gọi '),
                                        this.html(`Bdoc26324221`, "code", parentElement, {}, (parentElement) => [
                                            this.text('event.stopPropagation()')
                                        ])
                                    ])
                                ]),
                                this.html(`Bdoc263243`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`Bdoc2632431`, "td", parentElement, {}, (parentElement) => [
                                        this.text('.self')
                                    ]),
                                    this.html(`Bdoc2632432`, "td", parentElement, {}, (parentElement) => [
                                        this.text('chỉ chạy khi '),
                                        this.html(`Bdoc26324321`, "code", parentElement, {}, (parentElement) => [
                                            this.text('event.target === event.currentTarget')
                                        ]),
                                        this.text(' — kiểm '),
                                        this.html(`Bdoc26324322`, "em", parentElement, {}, (parentElement) => [
                                            this.text('trước')
                                        ]),
                                        this.html(`Bdoc26324323`, "code", parentElement, {}, (parentElement) => [
                                            this.text('.prevent')
                                        ]),
                                        this.text(' và '),
                                        this.html(`Bdoc26324324`, "code", parentElement, {}, (parentElement) => [
                                            this.text('.stop')
                                        ])
                                    ])
                                ]),
                                this.html(`Bdoc263244`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`Bdoc2632441`, "td", parentElement, {}, (parentElement) => [
                                        this.text('.once')
                                    ]),
                                    this.html(`Bdoc2632442`, "td", parentElement, {}, (parentElement) => [
                                        this.text('chạy đúng một lần rồi tự gỡ')
                                    ])
                                ])
                                ]),
                            this.html(`Bdoc26325`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }, { type: 'static', value: "dir-note--warn" }] },
                                (parentElement) => [
                                this.text('Modifier hiện chỉ được emit đúng ở phía JavaScript; đầu ra Blade còn sinh thuộc tính thừa. Trang cần SSR sạch thì dùng '),
                                this.html(`Bdoc263251`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@submit(save(event))')
                                ]),
                                this.text(' rồi tự gọi '),
                                this.html(`Bdoc263252`, "code", parentElement, {}, (parentElement) => [
                                    this.text('event.preventDefault()')
                                ]),
                                this.text(' trong method.')
                                ])
                            ])
                        ])
                    ]),
                this.html(`Bdoc27`, "section", parentElement,
                    { classes: [{ type: 'static', value: "dir-group" }], attrs: { "id": { type: 'static', value: "layout" } } },
                    (parentElement) => [
                    this.html(`Bdoc271`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Layout & component')
                    ]),
                    this.html(`Bdoc272`, "p", parentElement, {}, (parentElement) => [
                        this.text('Layout không phải chuỗi HTML ghép lại: mỗi tầng là một view thật có ViewController riêng. Điều hướng giữa hai trang cùng layout chỉ thay nhánh khác biệt, phần layout trùng nhau được giữ nguyên cả DOM lẫn state.')
                    ]),
                    this.html(`Bdoc273`, "div", parentElement,
                        { classes: [{ type: 'static', value: "dir-list" }] },
                        (parentElement) => [
                        this.html(`Bdoc2731`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc27311`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc273111`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@extends')
                                    ]),
                                this.html(`Bdoc273112`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Layout')
                                    ])
                                ]),
                            this.html(`Bdoc27312`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@extends(__layout__ + "public")')
                                ]),
                            this.html(`Bdoc27313`, "p", parentElement, {}, (parentElement) => [
                                this.text('Khai báo layout cha. Hàm '),
                                this.html(`Bdoc273131`, "code", parentElement, {}, (parentElement) => [
                                    this.text('render()')
                                ]),
                                this.text(' của trang sẽ trả về '),
                                this.html(`Bdoc273132`, "em", parentElement, {}, (parentElement) => [
                                    this.text('view cha')
                                ]),
                                this.text(' thay vì cây element của chính nó — ViewManager nhìn kiểu trả về để rẽ nhánh. Layout lồng layout được, chuỗi phân giải đệ quy.')
                            ])
                            ]),
                        this.html(`Bdoc2732`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc27321`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc273211`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@block '),
                                    this.html(`Bdoc2732111`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @useBlock · @endblock')
                                    ])
                                    ]),
                                this.html(`Bdoc273212`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Layout')
                                    ])
                                ]),
                            this.html(`Bdoc27322`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.html(`Bdoc273221`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "c" }] },
                                    (parentElement) => [
                                    this.text('// trang:')
                                    ]),
                                this.text('@block(\'content\') … @endblock'),
                                this.html(`Bdoc273222`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "c" }] },
                                    (parentElement) => [
                                    this.text('// layout:')
                                    ]),
                                this.text('@useBlock(\'content\')')
                                ]),
                            this.html(`Bdoc27323`, "p", parentElement, {}, (parentElement) => [
                                this.text('Trang '),
                                this.html(`Bdoc273231`, "em", parentElement, {}, (parentElement) => [
                                    this.text('đăng ký')
                                ]),
                                this.text(' nội dung, layout '),
                                this.html(`Bdoc273232`, "em", parentElement, {}, (parentElement) => [
                                    this.text('tạo chỗ trống')
                                ]),
                                this.text('. BlockManager nối hai bên theo tên. Nhờ tách rời như vậy, nội dung block được dựng lười đúng vị trí outlet chứ không phải append mù vào cuối thẻ chứa.')
                            ]),
                            this.include(`Bdoc2732c1`, 'web.components.code-block', parentElement, [], (parentElement) => ({
                                    "lang": "sao",
                                    __ONE_CHILDREN_CONTENT__: (parentElement) => [
                                    this.text('<!-- layouts/docs.sao -->\n@extends(__layout__ + "public")\n@block(\'content\')\n    <aside class="docs-nav">…</aside>\n    <main>@useBlock(\'doc\')</main>\n@endblock')
                                ]
                                }))
                            ]),
                        this.html(`Bdoc2733`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc27331`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc273311`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@section '),
                                    this.html(`Bdoc2733111`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @yield')
                                    ])
                                    ]),
                                this.html(`Bdoc273312`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Layout')
                                    ])
                                ]),
                            this.html(`Bdoc27332`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@section(\'tên\') … @endsection'),
                                this.text('@yield(\'tên\', \'mặc định\')')
                                ]),
                            this.html(`Bdoc27333`, "p", parentElement, {}, (parentElement) => [
                                this.text('Cơ chế section quen thuộc của Blade. Section có thể khai báo kiểu render dài hoặc có preloader riêng qua config sinh ra trong '),
                                this.html(`Bdoc273331`, "code", parentElement, {}, (parentElement) => [
                                    this.text('__VIEW_CONFIG__')
                                ]),
                                this.text('.')
                            ])
                            ]),
                        this.html(`Bdoc2734`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc27341`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc273411`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@import')
                                    ]),
                                this.html(`Bdoc273412`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Component')
                                    ])
                                ]),
                            this.html(`Bdoc27342`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@import(__template__ + \'counter\')'),
                                this.text('@import(__template__ + \'card\' as card)'),
                                this.text('@import({ a: \'path.a\', b: __template__ + \'b\' })')
                                ]),
                            this.html(`Bdoc27343`, "p", parentElement, {}, (parentElement) => [
                                this.text('Nạp view khác vào phạm vi hiện tại và đăng ký nó vào registry component của file. Sau khi import, có thể dùng như thẻ tuỳ chỉnh trong template thay vì gọi '),
                                this.html(`Bdoc273431`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@include')
                                ]),
                                this.text(' mỗi lần.')
                            ]),
                            this.include(`Bdoc2734c1`, 'web.components.code-block', parentElement, [], (parentElement) => ({
                                    "lang": "sao",
                                    __ONE_CHILDREN_CONTENT__: (parentElement) => [
                                    this.text('@import(__template__ + \'demo.featurecard\')\n\n<featurecard number="01" title="Reactive state">…</featurecard>')
                                ]
                                })),
                            this.html(`Bdoc27344`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }] },
                                (parentElement) => [
                                this.text('Thuộc tính không tiền tố là chuỗi tĩnh; thêm '),
                                this.html(`Bdoc273441`, "code", parentElement, {}, (parentElement) => [
                                    this.text(':')
                                ]),
                                this.text(' trước tên để truyền biểu thức ('),
                                this.html(`Bdoc273442`, "code", parentElement, {}, (parentElement) => [
                                    this.text(':value="count"')
                                ]),
                                this.text('). Dạng '),
                                this.html(`Bdoc273443`, "code", parentElement, {}, (parentElement) => [
                                    this.text(':')
                                ]),
                                this.text(' sinh ra đúng cùng một lời gọi như '),
                                this.html(`Bdoc273444`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@include')
                                ]),
                                this.text(' với object props — kể cả stateKeys, nên prop vẫn được đẩy lại khi state đổi.')
                                ]),
                            this.html(`Bdoc27345`, "p", parentElement, {}, (parentElement) => [
                                this.text('Alias đặt bằng '),
                                this.html(`Bdoc273451`, "code", parentElement, {}, (parentElement) => [
                                    this.text('as')
                                ]),
                                this.text(' còn dùng được ở chỗ khác cần đường dẫn view: '),
                                this.html(`Bdoc273452`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@extends')
                                ]),
                                this.text(' và '),
                                this.html(`Bdoc273453`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@include')
                                ]),
                                this.text('. Nó là '),
                                this.html(`Bdoc273454`, "em", parentElement, {}, (parentElement) => [
                                    this.text('điểm neo lúc biên dịch')
                                ]),
                                this.text(', không phải biến — compiler thay alias bằng chính biểu thức đường dẫn trước khi sinh code, nên Blade và JS không thể trỏ hai nơi khác nhau.')
                            ]),
                            this.include(`Bdoc2734c2`, 'web.components.code-block', parentElement, [], (parentElement) => ({
                                    "lang": "sao",
                                    __ONE_CHILDREN_CONTENT__: (parentElement) => [
                                    this.text('@import(__layout__ + \'docs\' as layout)\n\n@extends(layout)          __BLADE_COMMENT_0__')
                                ]
                                }))
                            ]),
                        this.html(`Bdoc2735`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc27351`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc273511`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@include')
                                    ]),
                                this.html(`Bdoc273512`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Component')
                                    ])
                                ]),
                            this.html(`Bdoc27352`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@include(\'đường.dẫn.view\')'),
                                this.text('@include(\'đường.dẫn.view\', {prop: biểu_thức})')
                                ]),
                            this.html(`Bdoc27353`, "p", parentElement, {}, (parentElement) => [
                                this.text('Tạo một view con thật: có ViewController riêng, state riêng, vòng đời riêng. Đây là khác biệt lớn với partial — view con sống độc lập, được start, pause, resume và destroy theo chính nó.')
                            ]),
                            this.html(`Bdoc27354`, "p", parentElement, {}, (parentElement) => [
                                this.text('Compiler đọc object props để suy ra view con phụ thuộc state nào của cha. Khi state đó đổi, runtime '),
                                this.html(`Bdoc273541`, "em", parentElement, {}, (parentElement) => [
                                    this.text('đẩy props mới vào đúng instance đang sống')
                                ]),
                                this.text(' chứ không dựng lại view con — nên state nội bộ của nó, ví dụ một form đang mở dở, không bị thổi bay.')
                            ]),
                            this.include(`Bdoc2735c1`, 'web.components.code-block', parentElement, [], (parentElement) => ({
                                    "lang": "sao",
                                    __ONE_CHILDREN_CONTENT__: (parentElement) => [
                                    this.text('@foreach(ids as id)\n    @key(id)\n    @include(\'web.modules.roster.item\', {uid: id, record: records[id] ?? null})\n    __BLADE_COMMENT_1__\n    <rosteritem :uid="id" :record="records[id] ?? null" />\n@endforeach')
                                ]
                                })),
                            this.html(`Bdoc27355`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }] },
                                (parentElement) => [
                                this.text('Props phải sống được qua SSR nên chỉ nhận giá trị tuần tự hoá được — không truyền được callback. Kênh từ con lên cha là bus sự kiện '),
                                this.html(`Bdoc273551`, "code", parentElement, {}, (parentElement) => [
                                    this.text('App.Event')
                                ]),
                                this.text('.')
                                ])
                            ]),
                        this.html(`Bdoc2736`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc27361`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc273611`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@children')
                                    ]),
                                this.html(`Bdoc273612`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Slot')
                                    ])
                                ]),
                            this.html(`Bdoc27362`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@children')
                                ]),
                            this.html(`Bdoc27363`, "p", parentElement, {}, (parentElement) => [
                                this.text('Chỗ đặt nội dung mà bên gọi truyền vào giữa hai thẻ. Nội dung được render lười đúng tại vị trí khai báo và giữ nguyên context của bên gọi — biến trong đó vẫn là biến của view cha, không phải của component.')
                            ]),
                            this.include(`Bdoc2736c1`, 'web.components.code-block', parentElement, [], (parentElement) => ({
                                    "lang": "sao",
                                    __ONE_CHILDREN_CONTENT__: (parentElement) => [
                                    this.text('<!-- card.sao -->\n<article class="card"><h3>{{ title }}</h3>@children</article>\n\n<!-- bên gọi -->\n<card title="Ví dụ"><p>Nội dung này đi qua slot</p></card>')
                                ]
                                }))
                            ]),
                        this.html(`Bdoc2737`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc27371`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc273711`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@exec')
                                    ]),
                                this.html(`Bdoc273712`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Tiện ích')
                                    ])
                                ]),
                            this.html(`Bdoc27372`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@exec(biểu_thức)')
                                ]),
                            this.html(`Bdoc27373`, "p", parentElement, {}, (parentElement) => [
                                this.text('Chạy một biểu thức mà không in ra gì. Dùng để gán biến trung gian hoặc gọi hàm phụ ngay trong template.')
                            ])
                            ])
                        ])
                    ]),
                this.html(`Bdoc28`, "section", parentElement,
                    { classes: [{ type: 'static', value: "dir-group" }], attrs: { "id": { type: 'static', value: "tien-ich" } } },
                    (parentElement) => [
                    this.html(`Bdoc281`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Quyền, form & tiện ích')
                    ]),
                    this.html(`Bdoc282`, "p", parentElement, {}, (parentElement) => [
                        this.text('Nhóm này giữ nguyên ngữ nghĩa Blade quen thuộc, nên nếu bạn đã viết Laravel thì không phải học lại.')
                    ]),
                    this.html(`Bdoc283`, "div", parentElement,
                        { classes: [{ type: 'static', value: "dir-list" }] },
                        (parentElement) => [
                        this.html(`Bdoc2831`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc28311`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc283111`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@csrf '),
                                    this.html(`Bdoc2831111`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @method')
                                    ])
                                    ]),
                                this.html(`Bdoc283112`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Form')
                                    ])
                                ]),
                            this.html(`Bdoc28312`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@csrf'),
                                this.text('@method(\'PUT\')')
                                ]),
                            this.html(`Bdoc28313`, "p", parentElement, {}, (parentElement) => [
                                this.text('Chèn ô ẩn chứa token CSRF, và giả lập HTTP method cho form vốn chỉ gửi được GET với POST.')
                            ])
                            ]),
                        this.html(`Bdoc2832`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc28321`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc283211`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@auth '),
                                    this.html(`Bdoc2832111`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @guest')
                                    ])
                                    ]),
                                this.html(`Bdoc283212`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Quyền')
                                    ])
                                ]),
                            this.html(`Bdoc28322`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@auth … @endauth'),
                                this.text('@guest … @endguest')
                                ]),
                            this.html(`Bdoc28323`, "p", parentElement, {}, (parentElement) => [
                                this.text('Khối hiển thị theo trạng thái đăng nhập, xét ở phía server lúc render.')
                            ])
                            ]),
                        this.html(`Bdoc2833`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc28331`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc283311`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@can '),
                                    this.html(`Bdoc2833111`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @cannot')
                                    ])
                                    ]),
                                this.html(`Bdoc283312`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Quyền')
                                    ])
                                ]),
                            this.html(`Bdoc28332`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@can(\'quyền\', $model) … @endcan')
                                ]),
                            this.html(`Bdoc28333`, "p", parentElement, {}, (parentElement) => [
                                this.text('Khối theo policy của Laravel. Cùng cách viết, cùng cách phân giải quyền.')
                            ])
                            ]),
                        this.html(`Bdoc2834`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc28341`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc283411`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@error')
                                    ]),
                                this.html(`Bdoc283412`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Form')
                                    ])
                                ]),
                            this.html(`Bdoc28342`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@error(\'trường\') … @enderror')
                                ]),
                            this.html(`Bdoc28343`, "p", parentElement, {}, (parentElement) => [
                                this.text('Hiện lỗi validation của một trường, với biến '),
                                this.html(`Bdoc283431`, "code", parentElement, {}, (parentElement) => [
                                    this.text('$message')
                                ]),
                                this.text(' sẵn trong khối.')
                            ])
                            ]),
                        this.html(`Bdoc2835`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc28351`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc283511`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@hasSection')
                                    ]),
                                this.html(`Bdoc283512`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Layout')
                                    ])
                                ]),
                            this.html(`Bdoc28352`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@hasSection(\'tên\') … @endhassection')
                                ]),
                            this.html(`Bdoc28353`, "p", parentElement, {}, (parentElement) => [
                                this.text('Kiểm tra một section đã được trang con định nghĩa chưa, để layout quyết định có dựng khung bao quanh hay không.')
                            ])
                            ]),
                        this.html(`Bdoc2836`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc28361`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc283611`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@verbatim')
                                    ]),
                                this.html(`Bdoc283612`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Tiện ích')
                                    ])
                                ]),
                            this.html(`Bdoc28362`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@verbatim … @endverbatim')
                                ]),
                            this.html(`Bdoc28363`, "p", parentElement, {}, (parentElement) => [
                                this.text('Xuất nguyên văn, không biên dịch gì bên trong. Cần khi bạn muốn in ra cú pháp của chính Saola hoặc của một template engine khác.')
                            ])
                            ])
                        ])
                    ]),
                this.html(`Bdoc29`, "section", parentElement,
                    { classes: [{ type: 'static', value: "dir-group" }], attrs: { "id": { type: 'static', value: "magic" } } },
                    (parentElement) => [
                    this.html(`Bdoc291`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Biến ma thuật')
                    ]),
                    this.html(`Bdoc292`, "p", parentElement, {}, (parentElement) => [
                        this.text('Có sẵn trong mọi view, do render context cấp. Dùng chúng thay vì viết cứng đường dẫn để view còn chuyển được giữa các context.')
                    ]),
                    this.html(`Bdoc293`, "div", parentElement,
                        { classes: [{ type: 'static', value: "dir-list" }] },
                        (parentElement) => [
                        this.html(`Bdoc2931`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`Bdoc29311`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`Bdoc293111`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('Danh sách')
                                    ]),
                                this.html(`Bdoc293112`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Toàn cục trong view')
                                    ])
                                ]),
                            this.html(`Bdoc29312`, "table", parentElement,
                                { classes: [{ type: 'static', value: "dir-mini" }] },
                                (parentElement) => [
                                this.html(`Bdoc293121`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`Bdoc2931211`, "td", parentElement, {}, (parentElement) => [
                                        this.text('__layout__')
                                    ]),
                                    this.html(`Bdoc2931212`, "td", parentElement, {}, (parentElement) => [
                                        this.text('đường dẫn gốc tới thư mục layout của context hiện tại')
                                    ])
                                ]),
                                this.html(`Bdoc293122`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`Bdoc2931221`, "td", parentElement, {}, (parentElement) => [
                                        this.text('__template__')
                                    ]),
                                    this.html(`Bdoc2931222`, "td", parentElement, {}, (parentElement) => [
                                        this.text('đường dẫn gốc tới component dùng chung')
                                    ])
                                ]),
                                this.html(`Bdoc293123`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`Bdoc2931231`, "td", parentElement, {}, (parentElement) => [
                                        this.text('__VIEW_PATH__')
                                    ]),
                                    this.html(`Bdoc2931232`, "td", parentElement, {}, (parentElement) => [
                                        this.text('đường dẫn dạng chấm của chính view này, ví dụ '),
                                        this.html(`Bdoc29312321`, "code", parentElement, {}, (parentElement) => [
                                            this.text('web.modules.docs.index')
                                        ])
                                    ])
                                ]),
                                this.html(`Bdoc293124`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`Bdoc2931241`, "td", parentElement, {}, (parentElement) => [
                                        this.text('__VIEW_ID__')
                                    ]),
                                    this.html(`Bdoc2931242`, "td", parentElement, {}, (parentElement) => [
                                        this.text('định danh instance, là tiền tố của mọi class và marker dùng để hydrate')
                                    ])
                                ]),
                                this.html(`Bdoc293125`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`Bdoc2931251`, "td", parentElement, {}, (parentElement) => [
                                        this.text('__context__')
                                    ]),
                                    this.html(`Bdoc2931252`, "td", parentElement, {}, (parentElement) => [
                                        this.text('context đang phục vụ request: web, admin, api hay mobile')
                                    ])
                                ]),
                                this.html(`Bdoc293126`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`Bdoc2931261`, "td", parentElement, {}, (parentElement) => [
                                        this.text('__base__ · __page__'),
                                        this.html(`Bdoc29312611`, "br", parentElement, {}),
                                        this.text('__component__ · __partial__')
                                    ]),
                                    this.html(`Bdoc2931262`, "td", parentElement, {}, (parentElement) => [
                                        this.text('đường dẫn gốc theo từng loại view')
                                    ])
                                ]),
                                this.html(`Bdoc293127`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`Bdoc2931271`, "td", parentElement, {}, (parentElement) => [
                                        this.text('__system__')
                                    ]),
                                    this.html(`Bdoc2931272`, "td", parentElement, {}, (parentElement) => [
                                        this.text('khối system data do render context truyền xuống')
                                    ])
                                ])
                                ])
                            ])
                        ])
                    ])
                ]),
            this.html(`Bdoc3`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/docs/reactivity" } } },
                (parentElement) => [
                this.html(`Bdoc31`, "div", parentElement, {}, (parentElement) => [
                    this.html(`Bdoc311`, "span", parentElement, {}, (parentElement) => [
                        this.text('Tiếp theo')
                    ]),
                    this.html(`Bdoc312`, "strong", parentElement, {}, (parentElement) => [
                        this.text('State & reactivity')
                    ])
                ]),
                this.html(`Bdoc32`, "span", parentElement,
                    { classes: [{ type: 'static', value: "button" }, { type: 'static', value: "button-primary" }] },
                    (parentElement) => [
                    this.text('Đọc tiếp →')
                    ])
                ])
            ]);
            this.superViewPath = `${__layout__+"docs"}`;
            return this.extendView(this.superViewPath, {});
            }
        });

    }
}

// Export factory function
export function WebModulesDocsDirectives(__data__ = {}, systemData = {}) {
    return new DirectivesView(__data__, systemData);
}
export default WebModulesDocsDirectives;