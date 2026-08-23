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
            this.html(`ff96f7a7`, "header", parentElement,
                { classes: [{ type: 'static', value: "page-hero" }] },
                (parentElement) => [
                this.html(`15b892a7`, "div", parentElement, {}, (parentElement) => [
                    this.html(`ab74559e`, "p", parentElement,
                        { classes: [{ type: 'static', value: "kicker" }] },
                        (parentElement) => [
                        this.html(`943e8228`, "span", parentElement, {}, (parentElement) => [
                            this.text('04')
                        ]),
                        this.text(' THAM CHIẾU')
                        ]),
                    this.html(`9abe25a3`, "h1", parentElement, {}, (parentElement) => [
                        this.text('Toàn bộ directive.')
                    ])
                ]),
                this.html(`f750a15d`, "div", parentElement,
                    { classes: [{ type: 'static', value: "page-hero-aside" }] },
                    (parentElement) => [
                    this.html(`2a968179`, "p", parentElement, {}, (parentElement) => [
                        this.text('Mỗi directive dưới đây có cú pháp, giải thích nó thật sự làm gì, một ví dụ chạy được và ghi chú khi có cạm bẫy. Trừ khi ghi khác, directive có mặt ở cả hai đầu ra: Blade cho SSR và JavaScript cho runtime.')
                    ])
                    ])
                ]),
            this.html(`e5195f55`, "div", parentElement,
                { classes: [{ type: 'static', value: "doc-body" }] },
                (parentElement) => [
                this.html(`a2bed458`, "nav", parentElement,
                    { classes: [{ type: 'static', value: "dir-toc" }], attrs: { "aria-label": { type: 'static', value: "Nhóm directive" } } },
                    (parentElement) => [
                    this.html(`3d2697d4`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#khai-bao" }, "data-nav": { type: 'static', value: "disabled" } } },
                        (parentElement) => [
                        this.text('Khai báo')
                        ]),
                    this.html(`68b7f49c`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#xuat-gia-tri" }, "data-nav": { type: 'static', value: "disabled" } } },
                        (parentElement) => [
                        this.text('Xuất giá trị')
                        ]),
                    this.html(`93807d96`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#dieu-khien" }, "data-nav": { type: 'static', value: "disabled" } } },
                        (parentElement) => [
                        this.text('Điều khiển luồng')
                        ]),
                    this.html(`fd371e97`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#thuoc-tinh" }, "data-nav": { type: 'static', value: "disabled" } } },
                        (parentElement) => [
                        this.text('Thuộc tính & binding')
                        ]),
                    this.html(`cadf2c04`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#su-kien" }, "data-nav": { type: 'static', value: "disabled" } } },
                        (parentElement) => [
                        this.text('Sự kiện')
                        ]),
                    this.html(`65325fb5`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#layout" }, "data-nav": { type: 'static', value: "disabled" } } },
                        (parentElement) => [
                        this.text('Layout & component')
                        ]),
                    this.html(`2a74a48b`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#tien-ich" }, "data-nav": { type: 'static', value: "disabled" } } },
                        (parentElement) => [
                        this.text('Quyền, form & tiện ích')
                        ]),
                    this.html(`4d55683c`, "a", parentElement,
                        { attrs: { "href": { type: 'static', value: "#magic" }, "data-nav": { type: 'static', value: "disabled" } } },
                        (parentElement) => [
                        this.text('Biến ma thuật')
                        ])
                    ]),
                this.html(`7b363c80`, "section", parentElement,
                    { classes: [{ type: 'static', value: "dir-group" }], attrs: { "id": { type: 'static', value: "khai-bao" } } },
                    (parentElement) => [
                    this.html(`2dbc958a`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Khai báo')
                    ]),
                    this.html(`9823b6be`, "p", parentElement, {}, (parentElement) => [
                        this.text('Nằm ở đầu file, ngoài '),
                        this.html(`4ed78b66`, "code", parentElement, {}, (parentElement) => [
                            this.text('<template>')
                        ]),
                        this.text(', và giữ nguyên thứ tự bạn viết. Đây là nơi quyết định biến nào reactive, biến nào không.')
                    ]),
                    this.html(`febe6d23`, "div", parentElement,
                        { classes: [{ type: 'static', value: "dir-list" }] },
                        (parentElement) => [
                        this.html(`c0504995`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`9a5a37f1`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`0ce5059c`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@states')
                                    ]),
                                this.html(`718aaef8`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Reactive')
                                    ])
                                ]),
                            this.html(`c2832320`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@states({ key: giá_trị, ... })')
                                ]),
                            this.html(`c88c8002`, "p", parentElement, {}, (parentElement) => [
                                this.text('Khai báo một khối state reactive. Mỗi khoá sinh ra ba thứ: biến đọc được trong template và trong '),
                                this.html(`2249e151`, "code", parentElement, {}, (parentElement) => [
                                    this.text('<script setup>')
                                ]),
                                this.text(', một setter '),
                                this.html(`b67efe19`, "code", parentElement, {}, (parentElement) => [
                                    this.text('setTênKhoá()')
                                ]),
                                this.text(', và một slot trong StateManager để các vùng marker đăng ký phụ thuộc.')
                            ]),
                            this.html(`5bb007b4`, "p", parentElement, {}, (parentElement) => [
                                this.text('Giá trị bạn viết ở đây là giá trị khởi tạo cho '),
                                this.html(`398e6b69`, "em", parentElement, {}, (parentElement) => [
                                    this.text('cả')
                                ]),
                                this.text(' lần render server lẫn lần hydrate — nhờ vậy HTML server trả về và cây element client dựng ra khớp nhau.')
                            ]),
                            this.html(`96994fd4`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-ex" }] },
                                (parentElement) => [
                                this.html(`c10b144d`, "pre", parentElement, {}, (parentElement) => [
                                    this.html(`c7b6782b`, "code", parentElement, {}, (parentElement) => [
                                        this.html(`20d86a40`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('@states({ count: 0, name: \'Saola\', items: [] })')
                                            ]),
                                        this.html(`ac823719`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }] }),
                                        this.html(`53e01d76`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('<button @click(setCount(count + 1))>'),
                                            this.html(`3fefed06`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "mustache-token" }] },
                                                (parentElement) => [
                                                this.text('count')
                                                ]),
                                            this.text('</button>')
                                            ])
                                    ])
                                ])
                                ]),
                            this.html(`def1bf1d`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }] },
                                (parentElement) => [
                                this.text('Tên setter là '),
                                this.html(`7746856b`, "code", parentElement, {}, (parentElement) => [
                                    this.text('set')
                                ]),
                                this.text(' + tên khoá viết hoa chữ đầu: '),
                                this.html(`b2ced8d0`, "code", parentElement, {}, (parentElement) => [
                                    this.text('count')
                                ]),
                                this.text(' → '),
                                this.html(`f6057b99`, "code", parentElement, {}, (parentElement) => [
                                    this.text('setCount')
                                ]),
                                this.text(', '),
                                this.html(`9c739405`, "code", parentElement, {}, (parentElement) => [
                                    this.text('isOpen')
                                ]),
                                this.text(' → '),
                                this.html(`0fbc0cae`, "code", parentElement, {}, (parentElement) => [
                                    this.text('setIsOpen')
                                ]),
                                this.text('. Gọi setter với cùng reference vẫn được nhận nếu nội dung tầng một đã đổi, nên '),
                                this.html(`6d1d1e8a`, "code", parentElement, {}, (parentElement) => [
                                    this.text('list.splice(i,1); setList(list)')
                                ]),
                                this.text(' hoạt động.')
                                ])
                            ]),
                        this.html(`3d787248`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`5e9c59e0`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`db0335eb`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@state')
                                    ]),
                                this.html(`f8e529e7`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Reactive')
                                    ])
                                ]),
                            this.html(`de7a92e5`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@state(tên = giá_trị)'),
                                this.text('@state(a = 1, b = 2)')
                                ]),
                            this.html(`173b5e61`, "p", parentElement, {}, (parentElement) => [
                                this.text('Giống '),
                                this.html(`18c37f0a`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@states')
                                ]),
                                this.text(' nhưng viết theo kiểu gán từng biến. Dùng khi chỉ có một hai state và khối object trông rườm rà.')
                            ]),
                            this.html(`2ae45ff6`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-ex" }] },
                                (parentElement) => [
                                this.html(`0eef282a`, "pre", parentElement, {}, (parentElement) => [
                                    this.html(`d478c883`, "code", parentElement, {}, (parentElement) => [
                                        this.html(`8c2a7cd0`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('@state(editMode = false)')
                                            ]),
                                        this.html(`ff2a33ed`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('@state(page = 1, perPage = 20)')
                                            ])
                                    ])
                                ])
                                ])
                            ]),
                        this.html(`fd7c262c`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`54484be9`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`22ec2bdb`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@props')
                                    ]),
                                this.html(`f1eea502`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Đầu vào component')
                                    ])
                                ]),
                            this.html(`1616bb46`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@props({ tên: mặc_định, ... })'),
                                this.text('@props(tên, khác = \'mặc định\')')
                                ]),
                            this.html(`86231383`, "p", parentElement, {}, (parentElement) => [
                                this.text('Khai báo dữ liệu view này nhận từ bên gọi. Prop cũng là slot reactive: khi view cha đổi state mà biểu thức prop phụ thuộc vào, runtime đẩy giá trị mới vào '),
                                this.html(`d6d25cf0`, "em", parentElement, {}, (parentElement) => [
                                    this.text('đúng instance con đang sống')
                                ]),
                                this.text(' chứ không dựng lại view con.')
                            ]),
                            this.html(`c5047964`, "p", parentElement, {}, (parentElement) => [
                                this.text('Giá trị trong ngoặc là mặc định, dùng khi bên gọi không truyền khoá đó.')
                            ]),
                            this.html(`d5d3cae1`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-ex" }] },
                                (parentElement) => [
                                this.html(`115a4bbc`, "pre", parentElement, {}, (parentElement) => [
                                    this.html(`0fcd79b4`, "code", parentElement, {}, (parentElement) => [
                                        this.html(`80706d2c`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "c" }] },
                                            (parentElement) => [
                                            this.text('<!-- statcard.sao -->')
                                            ]),
                                        this.html(`3da21273`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('@props({ label: \'Label\', value: \'0\', tone: \'sky\' })')
                                            ]),
                                        this.html(`caa7737e`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }] }),
                                        this.html(`5d6a806b`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "c" }] },
                                            (parentElement) => [
                                            this.text('<!-- bên gọi -->')
                                            ]),
                                        this.html(`4a5835db`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('@include(\'web.modules.demo.statcard\', [\'label\' => \'Lượt bấm\', \'value\' => count])')
                                            ])
                                    ])
                                ])
                                ]),
                            this.html(`28c43291`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }] },
                                (parentElement) => [
                                this.text('Mảng props ở '),
                                this.html(`05effbaa`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@include')
                                ]),
                                this.text(' viết theo cú pháp mảng PHP ('),
                                this.html(`eae67c17`, "code", parentElement, {}, (parentElement) => [
                                    this.text('\'khoá\' => giá_trị')
                                ]),
                                this.text(') ngay cả trong template modern syntax.')
                                ])
                            ]),
                        this.html(`83d889cb`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`c3ef1970`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`dc9b4e8e`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@const')
                                    ]),
                                this.html(`37c14877`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Bất biến')
                                    ])
                                ]),
                            this.html(`307303df`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@const(TÊN = giá_trị)'),
                                this.text('@const([x, setX] = useState(0))')
                                ]),
                            this.html(`8fc547ed`, "p", parentElement, {}, (parentElement) => [
                                this.text('Hằng số cho view. Dạng thứ hai là destructuring kiểu React: tạo một cặp state và setter mà không cần khai báo trong '),
                                this.html(`4e15b89b`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@states')
                                ]),
                                this.text('.')
                            ]),
                            this.html(`16be4987`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-ex" }] },
                                (parentElement) => [
                                this.html(`fb2557c5`, "pre", parentElement, {}, (parentElement) => [
                                    this.html(`af782a8d`, "code", parentElement, {}, (parentElement) => [
                                        this.html(`6170d1a0`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('@const(API = \'/api/api/roster\')')
                                            ]),
                                        this.html(`0ace4141`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('@const([message, setMessage] = useState(\'Xin chào\'))')
                                            ])
                                    ])
                                ])
                                ])
                            ]),
                        this.html(`b1107cc0`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`85b259a0`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`56cf7406`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@let')
                                    ]),
                                this.html(`73742b8d`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Không reactive')
                                    ])
                                ]),
                            this.html(`bcda96bd`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@let(tên = biểu_thức)')
                                ]),
                            this.html(`73714aea`, "p", parentElement, {}, (parentElement) => [
                                this.text('Biến cục bộ có thể gán lại nhưng '),
                                this.html(`59a38aa4`, "strong", parentElement, {}, (parentElement) => [
                                    this.text('không')
                                ]),
                                this.text(' reactive: đổi nó không làm vùng nào render lại. Dùng cho giá trị dẫn xuất tính một lần lúc dựng view.')
                            ]),
                            this.html(`af0e2725`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-ex" }] },
                                (parentElement) => [
                                this.html(`110912f4`, "pre", parentElement, {}, (parentElement) => [
                                    this.html(`69f63eb9`, "code", parentElement, {}, (parentElement) => [
                                        this.html(`4dc0b107`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('@let(total = price * qty)')
                                            ]),
                                        this.html(`057b09f5`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('@let(greeting = \\`Xin chào ${name}\\`)')
                                            ])
                                    ])
                                ])
                                ]),
                            this.html(`f45025b2`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }, { type: 'static', value: "dir-note--warn" }] },
                                (parentElement) => [
                                this.text('Nếu bạn muốn giá trị tự cập nhật theo state thì đừng dùng '),
                                this.html(`6f9da4c6`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@let')
                                ]),
                                this.text(' — viết thẳng biểu thức trong template, compiler sẽ tự suy ra vùng đó phụ thuộc state nào.')
                                ])
                            ]),
                        this.html(`e795b51e`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`3250a955`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`4b03eaf5`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@vars')
                                    ]),
                                this.html(`6eaf45ec`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Dữ liệu server')
                                    ])
                                ]),
                            this.html(`792f417a`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@vars(users, posts)'),
                                this.text('@vars(users = [])')
                                ]),
                            this.html(`d7811a8d`, "p", parentElement, {}, (parentElement) => [
                                this.text('Khai báo biến do controller truyền xuống. Không reactive — nó là dữ liệu của lần render này, không phải state người dùng thay đổi được.')
                            ]),
                            this.html(`3283c735`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-ex" }] },
                                (parentElement) => [
                                this.html(`c4ab92e7`, "pre", parentElement, {}, (parentElement) => [
                                    this.html(`47dadeae`, "code", parentElement, {}, (parentElement) => [
                                        this.html(`c3051487`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "c" }] },
                                            (parentElement) => [
                                            this.text('// controller: return $this->response([\'results\' => $rows]);')
                                            ]),
                                        this.html(`a86b2ef8`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('@vars(results = [])')
                                            ]),
                                        this.html(`20d60465`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }] }),
                                        this.html(`e50aec1a`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('@foreach(results as row) … @endforeach')
                                            ])
                                    ])
                                ])
                                ])
                            ]),
                        this.html(`5d35f307`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`d02155b3`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`81892e49`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@import')
                                    ]),
                                this.html(`40a432bc`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Component')
                                    ])
                                ]),
                            this.html(`4350ea8c`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@import(__template__ + \'counter\')'),
                                this.text('@import(__template__ + \'card\' as card)'),
                                this.text('@import({ a: \'path.a\', b: __template__ + \'b\' })')
                                ]),
                            this.html(`b07e8773`, "p", parentElement, {}, (parentElement) => [
                                this.text('Nạp view khác vào phạm vi hiện tại và đăng ký nó vào registry component của file. Sau khi import, có thể dùng như thẻ tuỳ chỉnh trong template thay vì gọi '),
                                this.html(`b370a49b`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@include')
                                ]),
                                this.text(' mỗi lần.')
                            ]),
                            this.html(`2a45159a`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-ex" }] },
                                (parentElement) => [
                                this.html(`b66cbfc4`, "pre", parentElement, {}, (parentElement) => [
                                    this.html(`ea641abd`, "code", parentElement, {}, (parentElement) => [
                                        this.html(`a35ce5bc`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('@import(__template__ + \'demo.featurecard\')')
                                            ]),
                                        this.html(`90b6f58f`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }] }),
                                        this.html(`50bfe3bc`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('<featurecard number="01" title="Reactive state">…</featurecard>')
                                            ])
                                    ])
                                ])
                                ]),
                            this.html(`8b9ab279`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }] },
                                (parentElement) => [
                                this.text('Thuộc tính của thẻ tuỳ chỉnh chỉ nhận chuỗi tĩnh. Cần truyền biểu thức thì dùng '),
                                this.html(`7c194122`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@include')
                                ]),
                                this.text(' với mảng props.')
                                ])
                            ]),
                        this.html(`c34105bf`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`b2245115`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`a6d77433`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@await')
                                    ]),
                                this.html(`f758db86`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Async')
                                    ])
                                ]),
                            this.html(`bf57529e`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@await')
                                ]),
                            this.html(`702f4b51`, "p", parentElement, {}, (parentElement) => [
                                this.text('Đánh dấu view là bất đồng bộ. Compiler bật cờ '),
                                this.html(`7ec1a6da`, "code", parentElement, {}, (parentElement) => [
                                    this.text('hasAwaitData')
                                ]),
                                this.text(' trong config, runtime nhờ đó biết view cần chờ dữ liệu trước khi commit state, và có thể render khối preload trong lúc chờ.')
                            ])
                            ]),
                        this.html(`4865f51d`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`108b4a57`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`3dbcf56e`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@computed')
                                    ]),
                                this.html(`b5847f54`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Dẫn xuất')
                                    ])
                                ]),
                            this.html(`4d9835d2`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@computed(tên = biểu_thức)')
                                ]),
                            this.html(`556db163`, "p", parentElement, {}, (parentElement) => [
                                this.text('State dẫn xuất có memo hoá. Chỉ tính lại khi một trong các state phụ thuộc đổi, và tính '),
                                this.html(`3a5bcfe8`, "em", parentElement, {}, (parentElement) => [
                                    this.text('lười')
                                ]),
                                this.text(' — đánh dấu bẩn lúc dep đổi, tính thật lúc có người đọc. Dep đổi năm lần trong một batch thì chỉ tính một lần.')
                            ]),
                            this.html(`b4a1206d`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-ex" }] },
                                (parentElement) => [
                                this.html(`8f3f40b2`, "pre", parentElement, {}, (parentElement) => [
                                    this.html(`aa750c03`, "code", parentElement, {}, (parentElement) => [
                                        this.html(`3e53f80e`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('@states({ users: [] })')
                                            ]),
                                        this.html(`a943a895`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('@computed(activeCount = users.filter(u => u.active).length)')
                                            ])
                                    ])
                                ])
                                ]),
                            this.html(`537cb1cb`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }, { type: 'static', value: "dir-note--warn" }] },
                                (parentElement) => [
                                this.html(`07c44b25`, "strong", parentElement, {}, (parentElement) => [
                                    this.text('Hiện chỉ chạy phía client.')
                                ]),
                                this.text(' Directive này không được emit ở đầu ra Blade nên biến bị undefined khi render server. Trang cần SSR thì viết thẳng biểu thức trong template.')
                                ])
                            ])
                        ])
                    ]),
                this.html(`7ca20070`, "section", parentElement,
                    { classes: [{ type: 'static', value: "dir-group" }], attrs: { "id": { type: 'static', value: "xuat-gia-tri" } } },
                    (parentElement) => [
                    this.html(`2dc7e3c6`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Xuất giá trị')
                    ]),
                    this.html(`92f71855`, "p", parentElement, {}, (parentElement) => [
                        this.text('Mỗi chỗ nội suy được bọc trong một cặp marker riêng, nên đổi state chỉ thay đúng đoạn text đó chứ không render lại cả thẻ cha.')
                    ]),
                    this.html(`d2a00c7c`, "div", parentElement,
                        { classes: [{ type: 'static', value: "dir-list" }] },
                        (parentElement) => [
                        this.html(`0e64342c`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`f7886ed8`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`c81125df`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('{{ … }}')
                                    ]),
                                this.html(`29d9e968`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Escape')
                                    ])
                                ]),
                            this.html(`48fbf3a0`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('{{ biểu_thức }}')
                                ]),
                            this.html(`75aba0b6`, "p", parentElement, {}, (parentElement) => [
                                this.text('In giá trị dưới dạng text an toàn. Nội dung được đặt bằng text node nên không có đường nào để chuỗi biến thành HTML.')
                            ]),
                            this.html(`6a915306`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-ex" }] },
                                (parentElement) => [
                                this.html(`dbab82de`, "pre", parentElement, {}, (parentElement) => [
                                    this.html(`93699c78`, "code", parentElement, {}, (parentElement) => [
                                        this.html(`e63087bb`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('<h1>'),
                                            this.html(`9e8905c5`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "mustache-token" }] },
                                                (parentElement) => [
                                                this.text('user[\'name\']')
                                                ]),
                                            this.text('</h1>')
                                            ]),
                                        this.html(`59e46756`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('<span>'),
                                            this.html(`71cb58e0`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "mustache-token" }] },
                                                (parentElement) => [
                                                this.text('price * qty')
                                                ]),
                                            this.text('</span>')
                                            ])
                                    ])
                                ])
                                ]),
                            this.html(`6918997d`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }] },
                                (parentElement) => [
                                this.text('Biểu thức được phép, không chỉ tên biến. Compiler đọc biểu thức để suy ra danh sách state mà vùng này phụ thuộc.')
                                ])
                            ]),
                        this.html(`939929f2`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`c092affd`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`47cfde79`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('{!! … !!}')
                                    ]),
                                this.html(`031a0b4e`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Raw HTML')
                                    ])
                                ]),
                            this.html(`e396f3cc`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('{!! biểu_thức !!}')
                                ]),
                            this.html(`f2140a6f`, "p", parentElement, {}, (parentElement) => [
                                this.text('In nguyên HTML, không escape. Chỉ dùng cho nội dung bạn tự sinh ra hoặc đã làm sạch — đây là đường duy nhất để chuỗi từ dữ liệu trở thành thẻ thật.')
                            ])
                            ]),
                        this.html(`5696d351`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`bd24c0a5`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`9618f0f5`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('{{-- … --}}')
                                    ]),
                                this.html(`607160dd`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Ghi chú')
                                    ])
                                ]),
                            this.html(`bbf3a125`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('{{-- ghi chú --}}')
                                ]),
                            this.html(`3c1bc63d`, "p", parentElement, {}, (parentElement) => [
                                this.text('Ghi chú của template. Bị loại hoàn toàn khỏi cả hai đầu ra, khác với '),
                                this.html(`5cafcb14`, "code", parentElement, {}, (parentElement) => [
                                    this.text('<!-- -->')
                                ]),
                                this.text(' vốn đi thẳng vào HTML.')
                            ])
                            ])
                        ])
                    ]),
                this.html(`81538925`, "section", parentElement,
                    { classes: [{ type: 'static', value: "dir-group" }], attrs: { "id": { type: 'static', value: "dieu-khien" } } },
                    (parentElement) => [
                    this.html(`0276d452`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Điều khiển luồng')
                    ]),
                    this.html(`82ba506a`, "p", parentElement, {}, (parentElement) => [
                        this.text('Mỗi khối trở thành một '),
                        this.html(`d8c4b8b3`, "em", parentElement, {}, (parentElement) => [
                            this.text('vùng reactive')
                        ]),
                        this.text(': một cặp marker trong DOM cộng danh sách state mà điều kiện phụ thuộc. State đổi thì chỉ nội dung giữa hai marker đó được dựng lại.')
                    ]),
                    this.html(`83dc733d`, "div", parentElement,
                        { classes: [{ type: 'static', value: "dir-list" }] },
                        (parentElement) => [
                        this.html(`c5b32f9a`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`00342b7a`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`000a3202`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@if '),
                                    this.html(`f38ede75`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @elseif · @else · @endif')
                                    ])
                                    ]),
                                this.html(`f4fa844b`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Vùng reactive')
                                    ])
                                ]),
                            this.html(`d2de34d1`, "div", parentElement,
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
                            this.html(`3791ac56`, "p", parentElement, {}, (parentElement) => [
                                this.text('Compiler đọc biểu thức điều kiện, rút ra danh sách state trong đó và gắn vào vùng. Không có dependency tracking lúc chạy — phụ thuộc được tính sẵn lúc biên dịch.')
                            ]),
                            this.html(`fa052da7`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-ex" }] },
                                (parentElement) => [
                                this.html(`0574ae16`, "pre", parentElement, {}, (parentElement) => [
                                    this.html(`bd9a439c`, "code", parentElement, {}, (parentElement) => [
                                        this.html(`cc6f33d0`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('@if(status === \'ready\')')
                                            ]),
                                        this.html(`5c1dfe7a`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('    <p>Sẵn sàng</p>')
                                            ]),
                                        this.html(`5633f937`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('@elseif(status === \'building\')')
                                            ]),
                                        this.html(`ef54f40d`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('    <p>Đang biên dịch…</p>')
                                            ]),
                                        this.html(`ef47bd36`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('@else')
                                            ]),
                                        this.html(`c87be6f7`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('    <p>Có lỗi</p>')
                                            ]),
                                        this.html(`7349d62e`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('@endif')
                                            ])
                                    ])
                                ])
                                ]),
                            this.html(`cd1ac0f3`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }] },
                                (parentElement) => [
                                this.text('Đặt '),
                                this.html(`11942a7b`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@if')
                                ]),
                                this.text(' bên trong '),
                                this.html(`006b6801`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@foreach')
                                ]),
                                this.text(' thì mỗi item có vùng marker riêng, nên đổi một item không đụng các item khác.')
                                ])
                            ]),
                        this.html(`b7dd5e32`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`2a1ea910`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`71b22405`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@foreach '),
                                    this.html(`29476e33`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @endforeach')
                                    ])
                                    ]),
                                this.html(`0a428bef`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Vùng reactive')
                                    ])
                                ]),
                            this.html(`d37af779`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@foreach(danh_sách as item)'),
                                this.text('@foreach(danh_sách as khoá => item)')
                                ]),
                            this.html(`5cc7bc46`, "p", parentElement, {}, (parentElement) => [
                                this.text('Lặp có '),
                                this.html(`962f95ea`, "em", parentElement, {}, (parentElement) => [
                                    this.text('reconciliation')
                                ]),
                                this.text(': runtime giữ một cache slot cho mỗi item. Khi danh sách đổi, item nào còn nguyên thì giữ nguyên DOM và mọi subscription của nó; item rời danh sách thì element bị destroy hẳn chứ không bỏ rơi.')
                            ]),
                            this.html(`cf9009a8`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-ex" }] },
                                (parentElement) => [
                                this.html(`e23fe4a8`, "pre", parentElement, {}, (parentElement) => [
                                    this.html(`9666500c`, "code", parentElement, {}, (parentElement) => [
                                        this.html(`093918d0`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('@foreach(items as item)')
                                            ]),
                                        this.html(`5e5c69bd`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('    @key(item[\'id\'])')
                                            ]),
                                        this.html(`b6f21849`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('    <li>'),
                                            this.html(`b3c03dfe`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "mustache-token" }] },
                                                (parentElement) => [
                                                this.text('item[\'label\']')
                                                ]),
                                            this.text('</li>')
                                            ]),
                                        this.html(`5cb84256`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('@endforeach')
                                            ])
                                    ])
                                ])
                                ]),
                            this.html(`30344ac5`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }, { type: 'static', value: "dir-note--warn" }] },
                                (parentElement) => [
                                this.text('Slot chỉ được tái dùng khi khoá khớp '),
                                this.html(`5defb3b7`, "strong", parentElement, {}, (parentElement) => [
                                    this.text('và')
                                ]),
                                this.text(' reference của item không đổi — vì output biên dịch đóng gói thẳng object item vào closure. Refetch từ server trả object mới sẽ dựng lại hàng đó. Muốn giữ state của view con qua mỗi lần đồng bộ thì lặp trên danh sách id ổn định rồi truyền dữ liệu qua props.')
                                ])
                            ]),
                        this.html(`a15a7978`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`f98a5d91`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`808472d6`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@key')
                                    ]),
                                this.html(`538309b3`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Bổ trợ vòng lặp')
                                    ])
                                ]),
                            this.html(`ac8272ab`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@key(biểu_thức)')
                                ]),
                            this.html(`3e2ed5cd`, "p", parentElement, {}, (parentElement) => [
                                this.text('Đặt ngay dòng đầu thân vòng lặp. Nó cho cache biết lấy gì làm định danh của item. Không có '),
                                this.html(`c50100cd`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@key')
                                ]),
                                this.text(' thì runtime dùng chính reference object làm khoá, và hậu tố id của marker rơi về chỉ số vòng lặp — phải khớp với phía SSR thì hydrate mới không lệch.')
                            ]),
                            this.html(`0be8a8d9`, "p", parentElement, {}, (parentElement) => [
                                this.text('Khoá còn giúp phân biệt các item trùng nhau trong danh sách nguyên thuỷ, ví dụ '),
                                this.html(`6d80f9be`, "code", parentElement, {}, (parentElement) => [
                                    this.text('[\'a\', \'b\', \'a\']')
                                ]),
                                this.text('.')
                            ])
                            ]),
                        this.html(`50d33f67`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`e87bce70`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`26f2978c`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@forelse '),
                                    this.html(`04e9817f`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @empty · @endforelse')
                                    ])
                                    ]),
                                this.html(`f80386ac`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Vùng reactive')
                                    ])
                                ]),
                            this.html(`1b968a83`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@forelse(danh_sách as item)'),
                                this.text('…'),
                                this.text('@empty'),
                                this.text('…'),
                                this.text('@endforelse')
                                ]),
                            this.html(`6d51ee08`, "p", parentElement, {}, (parentElement) => [
                                this.text('Như '),
                                this.html(`be6f74c4`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@foreach')
                                ]),
                                this.text(' nhưng có sẵn nhánh cho danh sách rỗng, khỏi phải viết thêm một '),
                                this.html(`1109e010`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@if')
                                ]),
                                this.text(' đếm phần tử.')
                            ])
                            ]),
                        this.html(`f6cd85ed`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`7daea718`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`762dee9a`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@for '),
                                    this.html(`a8bd2cf2`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @while')
                                    ])
                                    ]),
                                this.html(`10e62249`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Vùng reactive')
                                    ])
                                ]),
                            this.html(`ef03fe27`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@for(i = 0; i < n; i++) … @endfor'),
                                this.text('@while(điều_kiện) … @endwhile')
                                ]),
                            this.html(`4d29a0f3`, "p", parentElement, {}, (parentElement) => [
                                this.text('Vòng lặp đếm và vòng lặp điều kiện. '),
                                this.html(`0ed930da`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@while')
                                ]),
                                this.text(' có trần lặp ở runtime để một điều kiện sai không treo trình duyệt.')
                            ]),
                            this.html(`2e59adf6`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-ex" }] },
                                (parentElement) => [
                                this.html(`04034e2b`, "pre", parentElement, {}, (parentElement) => [
                                    this.html(`c81b3e6d`, "code", parentElement, {}, (parentElement) => [
                                        this.html(`efe7108c`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('@for(i = 0; i < count; i++)')
                                            ]),
                                        this.html(`a88b67da`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('    <li>Ping #'),
                                            this.html(`3c7af653`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "mustache-token" }] },
                                                (parentElement) => [
                                                this.text('i + 1')
                                                ]),
                                            this.text('</li>')
                                            ]),
                                        this.html(`54ecbbb6`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('@endfor')
                                            ])
                                    ])
                                ])
                                ])
                            ]),
                        this.html(`9f5ec9e1`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`1180bc95`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`0582875d`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@switch '),
                                    this.html(`cf3ae1b4`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @case · @default · @break')
                                    ])
                                    ]),
                                this.html(`672a76e1`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Vùng reactive')
                                    ])
                                ]),
                            this.html(`9070aab7`, "div", parentElement,
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
                            this.html(`37be610c`, "p", parentElement, {}, (parentElement) => [
                                this.text('Nhiều nhánh gói trong một vùng marker duy nhất. Nhớ '),
                                this.html(`fb7473e4`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@break')
                                ]),
                                this.text(' ở cuối mỗi '),
                                this.html(`3fe179df`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@case')
                                ]),
                                this.text(', đúng ngữ nghĩa switch chứ không phải if-else.')
                            ])
                            ]),
                        this.html(`9a687aec`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`f3b9ac39`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`d63767f6`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@continue '),
                                    this.html(`2fecea57`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @break')
                                    ])
                                    ]),
                                this.html(`84db2453`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Điều khiển')
                                    ])
                                ]),
                            this.html(`001f181d`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@continue'),
                                this.text('@break'),
                                this.text('@continue(điều_kiện)')
                                ]),
                            this.html(`3a6ee617`, "p", parentElement, {}, (parentElement) => [
                                this.text('Bỏ qua vòng hiện tại hoặc thoát vòng lặp. Nhận điều kiện tuỳ chọn để khỏi bọc thêm một '),
                                this.html(`6dde8a7d`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@if')
                                ]),
                                this.text('.')
                            ])
                            ]),
                        this.html(`9f6c672a`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`5c78d224`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`f53b3266`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@ssr '),
                                    this.html(`1aa9453e`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @endssr')
                                    ])
                                    ]),
                                this.html(`9c4906c4`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Chỉ server')
                                    ])
                                ]),
                            this.html(`9fab42ce`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@ssr … @endssr')
                                ]),
                            this.html(`fc9c455f`, "p", parentElement, {}, (parentElement) => [
                                this.text('Khối chỉ tồn tại ở đầu ra Blade. Compiler loại nó khỏi view JavaScript, nên nội dung bên trong xuất hiện trong HTML lần đầu rồi không bao giờ được runtime dựng lại. Hợp cho dữ liệu chỉ có ở server hoặc khối nặng không cần tương tác.')
                            ]),
                            this.html(`c41458ab`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }] },
                                (parentElement) => [
                                this.text('Bí danh: '),
                                this.html(`15added7`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@serverSide')
                                ]),
                                this.text(' / '),
                                this.html(`16b48f86`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@endServerSide')
                                ]),
                                this.text(', '),
                                this.html(`46d57d28`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@useSSR')
                                ]),
                                this.text(' / '),
                                this.html(`8284089f`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@enduseSSR')
                                ]),
                                this.text('.')
                                ])
                            ])
                        ])
                    ]),
                this.html(`559c6681`, "section", parentElement,
                    { classes: [{ type: 'static', value: "dir-group" }], attrs: { "id": { type: 'static', value: "thuoc-tinh" } } },
                    (parentElement) => [
                    this.html(`76543416`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Thuộc tính & binding')
                    ]),
                    this.html(`ef3b6fc2`, "p", parentElement, {}, (parentElement) => [
                        this.text('Nhóm này viết '),
                        this.html(`ccaceaaf`, "em", parentElement, {}, (parentElement) => [
                            this.text('bên trong thẻ mở')
                        ]),
                        this.text('. Runtime chia chúng thành bốn rổ khác nhau — '),
                        this.html(`7cd2ceea`, "code", parentElement, {}, (parentElement) => [
                            this.text('attrs')
                        ]),
                        this.text(', '),
                        this.html(`978bbd74`, "code", parentElement, {}, (parentElement) => [
                            this.text('props')
                        ]),
                        this.text(', '),
                        this.html(`9886cb8f`, "code", parentElement, {}, (parentElement) => [
                            this.text('classes')
                        ]),
                        this.text(', '),
                        this.html(`f51e41e7`, "code", parentElement, {}, (parentElement) => [
                            this.text('styles')
                        ]),
                        this.text(' — vì đặt thuộc tính HTML và gán property của element không giống nhau.')
                    ]),
                    this.html(`0ebccd3a`, "div", parentElement,
                        { classes: [{ type: 'static', value: "dir-list" }] },
                        (parentElement) => [
                        this.html(`11e4ca08`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`d6f1bf4e`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`6918e402`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@attr')
                                    ]),
                                this.html(`11b50edb`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('attrs')
                                    ])
                                ]),
                            this.html(`0042349f`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@attr({ tên: giá_trị, ... })')
                                ]),
                            this.html(`81a4b397`, "p", parentElement, {}, (parentElement) => [
                                this.text('Thuộc tính động. Giá trị '),
                                this.html(`f406e75f`, "code", parentElement, {}, (parentElement) => [
                                    this.text('null')
                                ]),
                                this.text(', '),
                                this.html(`ec8e3496`, "code", parentElement, {}, (parentElement) => [
                                    this.text('undefined')
                                ]),
                                this.text(' hoặc '),
                                this.html(`08a44caf`, "code", parentElement, {}, (parentElement) => [
                                    this.text('false')
                                ]),
                                this.text(' làm runtime '),
                                this.html(`af04dabe`, "em", parentElement, {}, (parentElement) => [
                                    this.text('gỡ hẳn')
                                ]),
                                this.text(' thuộc tính khỏi thẻ chứ không đặt chuỗi rỗng.')
                            ]),
                            this.html(`a87b098d`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-ex" }] },
                                (parentElement) => [
                                this.html(`5f381251`, "pre", parentElement, {}, (parentElement) => [
                                    this.html(`4121ad86`, "code", parentElement, {}, (parentElement) => [
                                        this.html(`aec9e679`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('<a @attr({ href: link, title: docTitle })>…</a>')
                                            ])
                                    ])
                                ])
                                ])
                            ]),
                        this.html(`a09a68f7`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`48100381`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`6fb6a0fb`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@class')
                                    ]),
                                this.html(`3201f933`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('classes')
                                    ])
                                ]),
                            this.html(`41a7d38c`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@class([\'tĩnh\', \'có-điều-kiện\': biểu_thức])')
                                ]),
                            this.html(`a79501d8`, "p", parentElement, {}, (parentElement) => [
                                this.text('Trộn class tĩnh với class có điều kiện. Runtime chỉ bật tắt đúng những class có điều kiện, không ghi đè cả thuộc tính '),
                                this.html(`e8daf62c`, "code", parentElement, {}, (parentElement) => [
                                    this.text('class')
                                ]),
                                this.text(' — nên class do code khác thêm vào vẫn còn.')
                            ]),
                            this.html(`c736443d`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-ex" }] },
                                (parentElement) => [
                                this.html(`21e0bf02`, "pre", parentElement, {}, (parentElement) => [
                                    this.html(`d66ae629`, "code", parentElement, {}, (parentElement) => [
                                        this.html(`f2940aa9`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('<div @class([\'card\', \'card--active\': isActive, \'card--gone\': record === null])>')
                                            ])
                                    ])
                                ])
                                ]),
                            this.html(`ef3e4e2d`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }, { type: 'static', value: "dir-note--warn" }] },
                                (parentElement) => [
                                this.text('Tránh dấu '),
                                this.html(`7242f58f`, "code", parentElement, {}, (parentElement) => [
                                    this.text('>')
                                ]),
                                this.text(' hoặc '),
                                this.html(`ed3d93be`, "code", parentElement, {}, (parentElement) => [
                                    this.text('<')
                                ]),
                                this.text(' trong biểu thức: bộ phân tích thẻ ở đầu ra Blade đóng thẻ sớm tại đó. Viết '),
                                this.html(`72f3238b`, "code", parentElement, {}, (parentElement) => [
                                    this.text('count !== 0')
                                ]),
                                this.text(' thay cho '),
                                this.html(`f4d60bfd`, "code", parentElement, {}, (parentElement) => [
                                    this.text('count > 0')
                                ]),
                                this.text('.')
                                ])
                            ]),
                        this.html(`56ab6a0e`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`bf4dbf94`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`ac52260e`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@style')
                                    ]),
                                this.html(`3f551781`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('styles')
                                    ])
                                ]),
                            this.html(`3ec0282a`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@style({ \'thuộc-tính\': giá_trị })')
                                ]),
                            this.html(`3c1b3faa`, "p", parentElement, {}, (parentElement) => [
                                this.text('Inline style theo state, đặt qua '),
                                this.html(`330caf3f`, "code", parentElement, {}, (parentElement) => [
                                    this.text('style.setProperty')
                                ]),
                                this.text(' nên chỉ những thuộc tính bạn liệt kê bị đụng tới.')
                            ]),
                            this.html(`eff0876b`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }, { type: 'static', value: "dir-note--warn" }] },
                                (parentElement) => [
                                this.html(`326c1462`, "strong", parentElement, {}, (parentElement) => [
                                    this.text('Dạng object của modern syntax hiện chưa ra đúng ở đầu ra JavaScript')
                                ]),
                                this.text(' — nó rã thành các thuộc tính tĩnh rời rạc nên binding không chạy sau hydrate. Tạm thời dùng '),
                                this.html(`8964adb2`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@class')
                                ]),
                                this.text(' với vài class dựng sẵn.')
                                ])
                            ]),
                        this.html(`a184a443`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`c952b1d2`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`aebe6012`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@bind '),
                                    this.html(`512be0a0`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @val')
                                    ])
                                    ]),
                                this.html(`dba2eaf7`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Hai chiều')
                                    ])
                                ]),
                            this.html(`a9ddaf33`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@bind(tên_state)')
                                ]),
                            this.html(`2c52e7a4`, "p", parentElement, {}, (parentElement) => [
                                this.text('Binding hai chiều. Runtime tự chọn cách đọc ghi theo loại input: '),
                                this.html(`5dadcd5f`, "code", parentElement, {}, (parentElement) => [
                                    this.text('checked')
                                ]),
                                this.text(' cho checkbox, so khớp '),
                                this.html(`824edd5a`, "code", parentElement, {}, (parentElement) => [
                                    this.text('value')
                                ]),
                                this.text(' cho radio, '),
                                this.html(`74843df9`, "code", parentElement, {}, (parentElement) => [
                                    this.text('valueAsNumber')
                                ]),
                                this.text(' cho number và range, còn lại là '),
                                this.html(`d33e2e13`, "code", parentElement, {}, (parentElement) => [
                                    this.text('value')
                                ]),
                                this.text('. Với '),
                                this.html(`3da27ea2`, "code", parentElement, {}, (parentElement) => [
                                    this.text('<select>')
                                ]),
                                this.text(', việc gán giá trị được hoãn một microtask vì '),
                                this.html(`19bfd15d`, "code", parentElement, {}, (parentElement) => [
                                    this.text('<option>')
                                ]),
                                this.text(' chưa kịp có mặt lúc thẻ vừa tạo.')
                            ]),
                            this.html(`e14b7c22`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-ex" }] },
                                (parentElement) => [
                                this.html(`dad59b15`, "pre", parentElement, {}, (parentElement) => [
                                    this.html(`964a4652`, "code", parentElement, {}, (parentElement) => [
                                        this.html(`21d6f77e`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('<input type="text" @bind(name)>')
                                            ]),
                                        this.html(`6cb1c001`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('<input type="checkbox" @bind(agree)>')
                                            ]),
                                        this.html(`7506ed8c`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('<select @bind(tone)>…</select>')
                                            ])
                                    ])
                                ])
                                ]),
                            this.html(`0e302240`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }, { type: 'static', value: "dir-note--warn" }] },
                                (parentElement) => [
                                this.text('Chỉ nhận khoá phẳng. '),
                                this.html(`83162413`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@bind(user.name)')
                                ]),
                                this.text(' đọc được giá trị ban đầu nhưng không ghi ngược và không nhận thay đổi, vì setter và subscription chỉ tồn tại ở tầng khoá gốc. Tách thành state phẳng như '),
                                this.html(`01a8fe18`, "code", parentElement, {}, (parentElement) => [
                                    this.text('userName')
                                ]),
                                this.text('.')
                                ])
                            ]),
                        this.html(`cebad952`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`c1acb0dc`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`16be6f0e`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('Boolean attribute')
                                    ]),
                                this.html(`31602339`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('props')
                                    ])
                                ]),
                            this.html(`30fd12e0`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@disabled(biểu_thức)  @checked(…)  @selected(…)'),
                                this.text('@required(…)  @readonly(…)')
                                ]),
                            this.html(`0ece8474`, "p", parentElement, {}, (parentElement) => [
                                this.text('Gán thẳng vào '),
                                this.html(`11172aee`, "em", parentElement, {}, (parentElement) => [
                                    this.text('property')
                                ]),
                                this.text(' của element chứ không phải thuộc tính HTML — đúng cách trình duyệt đọc trạng thái các thẻ form.')
                            ]),
                            this.html(`c26627ea`, "table", parentElement,
                                { classes: [{ type: 'static', value: "dir-mini" }] },
                                (parentElement) => [
                                this.html(`1b28a6df`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`9c4712fb`, "td", parentElement, {}, (parentElement) => [
                                        this.text('@disabled')
                                    ]),
                                    this.html(`f086657e`, "td", parentElement, {}, (parentElement) => [
                                        this.text('khoá nút hoặc ô nhập')
                                    ])
                                ]),
                                this.html(`9a797c17`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`a9c41c3b`, "td", parentElement, {}, (parentElement) => [
                                        this.text('@checked')
                                    ]),
                                    this.html(`6456eb56`, "td", parentElement, {}, (parentElement) => [
                                        this.text('trạng thái checkbox và radio')
                                    ])
                                ]),
                                this.html(`15f2d6c1`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`946eb7dc`, "td", parentElement, {}, (parentElement) => [
                                        this.text('@selected')
                                    ]),
                                    this.html(`4c5473d8`, "td", parentElement, {}, (parentElement) => [
                                        this.text('option đang được chọn')
                                    ])
                                ]),
                                this.html(`11628f8b`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`48bed7ca`, "td", parentElement, {}, (parentElement) => [
                                        this.text('@required')
                                    ]),
                                    this.html(`8e410df2`, "td", parentElement, {}, (parentElement) => [
                                        this.text('bắt buộc nhập')
                                    ])
                                ]),
                                this.html(`3c8728fc`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`a33bfcdb`, "td", parentElement, {}, (parentElement) => [
                                        this.text('@readonly')
                                    ]),
                                    this.html(`a8c17fc3`, "td", parentElement, {}, (parentElement) => [
                                        this.text('chỉ đọc, vẫn gửi kèm form')
                                    ])
                                ])
                                ])
                            ]),
                        this.html(`e8461865`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`59d5c36f`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`9ef0080d`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@show '),
                                    this.html(`527d7d1f`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @hide')
                                    ])
                                    ]),
                                this.html(`a14cce3b`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('props')
                                    ])
                                ]),
                            this.html(`f9f2d192`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@show(biểu_thức)'),
                                this.text('@hide(biểu_thức)')
                                ]),
                            this.html(`2d531ed1`, "p", parentElement, {}, (parentElement) => [
                                this.text('Bật tắt hiển thị mà giữ nguyên DOM và state bên trong — khác '),
                                this.html(`b2d30bc9`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@if')
                                ]),
                                this.text(' vốn dựng lại nội dung mỗi lần bật.')
                            ]),
                            this.html(`fed6eb81`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }, { type: 'static', value: "dir-note--warn" }] },
                                (parentElement) => [
                                this.html(`f367194c`, "strong", parentElement, {}, (parentElement) => [
                                    this.text('Đang đụng directive cùng tên của Blade.')
                                ]),
                                this.text(' Laravel hiểu '),
                                this.html(`46e483e9`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@show')
                                ]),
                                this.text(' là "kết thúc section rồi yield ngay", nên nó nuốt directive của Saola và làm hỏng section stack của cả trang. Tạm thời dùng '),
                                this.html(`f438c24b`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@class')
                                ]),
                                this.text(' với một class ẩn.')
                                ])
                            ]),
                        this.html(`27242a28`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`600c7333`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`ab1da05d`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@transition')
                                    ]),
                                this.html(`a8d582bd`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Hoạt ảnh')
                                    ])
                                ]),
                            this.html(`5b7ebcf9`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@transition(\'tên\')')
                                ]),
                            this.html(`524b1849`, "p", parentElement, {}, (parentElement) => [
                                this.text('Gắn tiền tố class enter/leave cho phần tử khi nó vào hoặc rời một vùng reactive. Bạn định nghĩa '),
                                this.html(`d1238590`, "code", parentElement, {}, (parentElement) => [
                                    this.text('.tên-enter-active')
                                ]),
                                this.text(', '),
                                this.html(`c1762f8c`, "code", parentElement, {}, (parentElement) => [
                                    this.text('.tên-enter-from')
                                ]),
                                this.text(', '),
                                this.html(`0228bd36`, "code", parentElement, {}, (parentElement) => [
                                    this.text('.tên-leave-active')
                                ]),
                                this.text(', '),
                                this.html(`f795ccf7`, "code", parentElement, {}, (parentElement) => [
                                    this.text('.tên-leave-to')
                                ]),
                                this.text(' trong CSS.')
                            ]),
                            this.html(`ffeb6722`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-ex" }] },
                                (parentElement) => [
                                this.html(`d989d515`, "pre", parentElement, {}, (parentElement) => [
                                    this.html(`d04fb5a2`, "code", parentElement, {}, (parentElement) => [
                                        this.html(`681b45bc`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('<article @transition(\'row\')>…</article>')
                                            ]),
                                        this.html(`2aabe9a4`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }] }),
                                        this.html(`1fbba688`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('.row-enter-active, .row-leave-active { transition: opacity .18s ease; }')
                                            ]),
                                        this.html(`64146625`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('.row-enter-from,   .row-leave-to     { opacity: 0; }')
                                            ])
                                    ])
                                ])
                                ])
                            ])
                        ])
                    ]),
                this.html(`47d2e784`, "section", parentElement,
                    { classes: [{ type: 'static', value: "dir-group" }], attrs: { "id": { type: 'static', value: "su-kien" } } },
                    (parentElement) => [
                    this.html(`35b8eb33`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Sự kiện')
                    ]),
                    this.html(`2186d734`, "p", parentElement, {}, (parentElement) => [
                        this.text('Viết '),
                        this.html(`e339df41`, "code", parentElement, {}, (parentElement) => [
                            this.text('@tênSựKiện(...)')
                        ]),
                        this.text(' ngay trên thẻ. Mọi listener đăng ký kèm '),
                        this.html(`119907f7`, "code", parentElement, {}, (parentElement) => [
                            this.text('AbortSignal')
                        ]),
                        this.text(' của view, nên khi view bị destroy chỉ cần một lệnh '),
                        this.html(`5ea2bfc5`, "code", parentElement, {}, (parentElement) => [
                            this.text('abort()')
                        ]),
                        this.text(' là gỡ sạch — không có đường nào rò listener.')
                    ]),
                    this.html(`460b1be1`, "div", parentElement,
                        { classes: [{ type: 'static', value: "dir-list" }] },
                        (parentElement) => [
                        this.html(`dcbc315d`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`e14078fc`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`8a43abd9`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@click '),
                                    this.html(`7bffb7fc`, "em", parentElement, {}, (parentElement) => [
                                        this.text('và họ hàng')
                                    ])
                                    ]),
                                this.html(`5a887408`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Gắn listener')
                                    ])
                                ]),
                            this.html(`0c819773`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@click(tênMethod())            '),
                                this.html(`607e89c7`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "c" }] },
                                    (parentElement) => [
                                    this.text('// gọi method trong <script setup>')
                                    ]),
                                this.text('@click(setCount(count + 1))    '),
                                this.html(`ac937be7`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "c" }] },
                                    (parentElement) => [
                                    this.text('// biểu thức trực tiếp')
                                    ]),
                                this.text('@change(update(event))         '),
                                this.html(`a707c2cb`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "c" }] },
                                    (parentElement) => [
                                    this.text('// truyền object event')
                                    ])
                                ]),
                            this.html(`c15ac42c`, "p", parentElement, {}, (parentElement) => [
                                this.text('Có hai dạng. Dạng thứ nhất là tên method: compiler ghi lại tên rồi runtime tra trên view instance và bind '),
                                this.html(`9711a8d0`, "code", parentElement, {}, (parentElement) => [
                                    this.text('this')
                                ]),
                                this.text(' về view. Dạng thứ hai là biểu thức, được gói thành closure ngay tại chỗ.')
                            ]),
                            this.html(`a818ad5a`, "p", parentElement, {}, (parentElement) => [
                                this.text('Biến '),
                                this.html(`b6cee2c8`, "code", parentElement, {}, (parentElement) => [
                                    this.text('event')
                                ]),
                                this.text(' có sẵn trong biểu thức, truyền vào method thì nhận nguyên object sự kiện.')
                            ]),
                            this.html(`327bc505`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-ex" }] },
                                (parentElement) => [
                                this.html(`0968b5d3`, "pre", parentElement, {}, (parentElement) => [
                                    this.html(`01df1266`, "code", parentElement, {}, (parentElement) => [
                                        this.html(`0bd1d031`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('<form @submit(save(event))>')
                                            ]),
                                        this.html(`3e1a8190`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('    <input @bind(name) @keydown(onKey(event))>')
                                            ]),
                                        this.html(`cb6c216c`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('    <button type="submit">Lưu</button>')
                                            ]),
                                        this.html(`e8e96d0e`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('</form>')
                                            ])
                                    ])
                                ])
                                ]),
                            this.html(`eb01d78d`, "table", parentElement,
                                { classes: [{ type: 'static', value: "dir-mini" }] },
                                (parentElement) => [
                                this.html(`bc2122c7`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`db24c668`, "td", parentElement, {}, (parentElement) => [
                                        this.text('chuột')
                                    ]),
                                    this.html(`9a39cf85`, "td", parentElement, {}, (parentElement) => [
                                        this.text('@click · @dblclick · @contextmenu · @mouseenter')
                                    ])
                                ]),
                                this.html(`efdde8db`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`7f75f876`, "td", parentElement, {}, (parentElement) => [
                                        this.text('form')
                                    ]),
                                    this.html(`51326a7e`, "td", parentElement, {}, (parentElement) => [
                                        this.text('@submit · @change · @input · @focus · @blur')
                                    ])
                                ]),
                                this.html(`174d292b`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`5d33a546`, "td", parentElement, {}, (parentElement) => [
                                        this.text('bàn phím')
                                    ]),
                                    this.html(`cf2a0e70`, "td", parentElement, {}, (parentElement) => [
                                        this.text('@keydown và các sự kiện bàn phím chuẩn')
                                    ])
                                ]),
                                this.html(`538b2772`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`cc161d78`, "td", parentElement, {}, (parentElement) => [
                                        this.text('khác')
                                    ]),
                                    this.html(`0424ec92`, "td", parentElement, {}, (parentElement) => [
                                        this.text('@wheel · @scroll · @resize · @load')
                                    ])
                                ])
                                ])
                            ]),
                        this.html(`7212a9b6`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`9b6216a0`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`be11512f`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('Modifier')
                                    ]),
                                this.html(`b09ffaeb`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('.prevent .stop .self .once')
                                    ])
                                ]),
                            this.html(`4e7613c5`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@click.prevent(save())'),
                                this.text('@click.stop.once(remove(id))')
                                ]),
                            this.html(`46ab002b`, "p", parentElement, {}, (parentElement) => [
                                this.text('Nối sau tên sự kiện, ghép được nhiều cái. Runtime xử lý chúng trước khi gọi handler của bạn.')
                            ]),
                            this.html(`03265921`, "table", parentElement,
                                { classes: [{ type: 'static', value: "dir-mini" }] },
                                (parentElement) => [
                                this.html(`11eac2ad`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`2f2a8616`, "td", parentElement, {}, (parentElement) => [
                                        this.text('.prevent')
                                    ]),
                                    this.html(`086a22e9`, "td", parentElement, {}, (parentElement) => [
                                        this.text('gọi '),
                                        this.html(`9adcda52`, "code", parentElement, {}, (parentElement) => [
                                            this.text('event.preventDefault()')
                                        ])
                                    ])
                                ]),
                                this.html(`9004de51`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`c7817b8b`, "td", parentElement, {}, (parentElement) => [
                                        this.text('.stop')
                                    ]),
                                    this.html(`745cd25a`, "td", parentElement, {}, (parentElement) => [
                                        this.text('gọi '),
                                        this.html(`1eff3467`, "code", parentElement, {}, (parentElement) => [
                                            this.text('event.stopPropagation()')
                                        ])
                                    ])
                                ]),
                                this.html(`4d3011ba`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`a285498e`, "td", parentElement, {}, (parentElement) => [
                                        this.text('.self')
                                    ]),
                                    this.html(`e51d2a77`, "td", parentElement, {}, (parentElement) => [
                                        this.text('chỉ chạy khi '),
                                        this.html(`275ad46b`, "code", parentElement, {}, (parentElement) => [
                                            this.text('event.target === event.currentTarget')
                                        ]),
                                        this.text(' — kiểm '),
                                        this.html(`12c3f479`, "em", parentElement, {}, (parentElement) => [
                                            this.text('trước')
                                        ]),
                                        this.html(`61675e13`, "code", parentElement, {}, (parentElement) => [
                                            this.text('.prevent')
                                        ]),
                                        this.text(' và '),
                                        this.html(`2d0fbe21`, "code", parentElement, {}, (parentElement) => [
                                            this.text('.stop')
                                        ])
                                    ])
                                ]),
                                this.html(`e47edba6`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`b18fb418`, "td", parentElement, {}, (parentElement) => [
                                        this.text('.once')
                                    ]),
                                    this.html(`2b94dff8`, "td", parentElement, {}, (parentElement) => [
                                        this.text('chạy đúng một lần rồi tự gỡ')
                                    ])
                                ])
                                ]),
                            this.html(`89427023`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }, { type: 'static', value: "dir-note--warn" }] },
                                (parentElement) => [
                                this.text('Modifier hiện chỉ được emit đúng ở phía JavaScript; đầu ra Blade còn sinh thuộc tính thừa. Trang cần SSR sạch thì dùng '),
                                this.html(`39a5a9c4`, "code", parentElement, {}, (parentElement) => [
                                    this.text('@submit(save(event))')
                                ]),
                                this.text(' rồi tự gọi '),
                                this.html(`c26ac696`, "code", parentElement, {}, (parentElement) => [
                                    this.text('event.preventDefault()')
                                ]),
                                this.text(' trong method.')
                                ])
                            ])
                        ])
                    ]),
                this.html(`ef03a83f`, "section", parentElement,
                    { classes: [{ type: 'static', value: "dir-group" }], attrs: { "id": { type: 'static', value: "layout" } } },
                    (parentElement) => [
                    this.html(`42e404db`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Layout & component')
                    ]),
                    this.html(`8d90aa45`, "p", parentElement, {}, (parentElement) => [
                        this.text('Layout không phải chuỗi HTML ghép lại: mỗi tầng là một view thật có ViewController riêng. Điều hướng giữa hai trang cùng layout chỉ thay nhánh khác biệt, phần layout trùng nhau được giữ nguyên cả DOM lẫn state.')
                    ]),
                    this.html(`ea5097a5`, "div", parentElement,
                        { classes: [{ type: 'static', value: "dir-list" }] },
                        (parentElement) => [
                        this.html(`36e5164f`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`ebce2b5b`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`5f651445`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@extends')
                                    ]),
                                this.html(`c9b33a79`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Layout')
                                    ])
                                ]),
                            this.html(`71d3ab38`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@extends(__layout__ + "public")')
                                ]),
                            this.html(`7ac0d2dc`, "p", parentElement, {}, (parentElement) => [
                                this.text('Khai báo layout cha. Hàm '),
                                this.html(`7ac734a9`, "code", parentElement, {}, (parentElement) => [
                                    this.text('render()')
                                ]),
                                this.text(' của trang sẽ trả về '),
                                this.html(`15be5b84`, "em", parentElement, {}, (parentElement) => [
                                    this.text('view cha')
                                ]),
                                this.text(' thay vì cây element của chính nó — ViewManager nhìn kiểu trả về để rẽ nhánh. Layout lồng layout được, chuỗi phân giải đệ quy.')
                            ])
                            ]),
                        this.html(`e5f274d4`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`9d1a0400`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`68e763f8`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@block '),
                                    this.html(`9f7d307a`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @useBlock · @endblock')
                                    ])
                                    ]),
                                this.html(`ab2e4ab2`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Layout')
                                    ])
                                ]),
                            this.html(`3da11e9e`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.html(`21b1386b`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "c" }] },
                                    (parentElement) => [
                                    this.text('// trang:')
                                    ]),
                                this.text('@block(\'content\') … @endblock'),
                                this.html(`2439b41d`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "c" }] },
                                    (parentElement) => [
                                    this.text('// layout:')
                                    ]),
                                this.text('@useBlock(\'content\')')
                                ]),
                            this.html(`560b5c59`, "p", parentElement, {}, (parentElement) => [
                                this.text('Trang '),
                                this.html(`4c4b09d3`, "em", parentElement, {}, (parentElement) => [
                                    this.text('đăng ký')
                                ]),
                                this.text(' nội dung, layout '),
                                this.html(`9d8f0c5b`, "em", parentElement, {}, (parentElement) => [
                                    this.text('tạo chỗ trống')
                                ]),
                                this.text('. BlockManager nối hai bên theo tên. Nhờ tách rời như vậy, nội dung block được dựng lười đúng vị trí outlet chứ không phải append mù vào cuối thẻ chứa.')
                            ]),
                            this.html(`d434f7df`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-ex" }] },
                                (parentElement) => [
                                this.html(`1aa824c4`, "pre", parentElement, {}, (parentElement) => [
                                    this.html(`b13bace0`, "code", parentElement, {}, (parentElement) => [
                                        this.html(`a970be8d`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "c" }] },
                                            (parentElement) => [
                                            this.text('<!-- layouts/docs.sao -->')
                                            ]),
                                        this.html(`19aae7bc`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('@extends(__layout__ + "public")')
                                            ]),
                                        this.html(`faa36059`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('@block(\'content\')')
                                            ]),
                                        this.html(`62e1c37d`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('    <aside class="docs-nav">…</aside>')
                                            ]),
                                        this.html(`07038368`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('    <main>@useBlock(\'doc\')</main>')
                                            ]),
                                        this.html(`909ff899`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('@endblock')
                                            ])
                                    ])
                                ])
                                ])
                            ]),
                        this.html(`6a7bcba5`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`f84188d9`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`36345494`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@section '),
                                    this.html(`bb3868c5`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @yield')
                                    ])
                                    ]),
                                this.html(`4336fb40`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Layout')
                                    ])
                                ]),
                            this.html(`8cd0d656`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@section(\'tên\') … @endsection'),
                                this.text('@yield(\'tên\', \'mặc định\')')
                                ]),
                            this.html(`3e74f879`, "p", parentElement, {}, (parentElement) => [
                                this.text('Cơ chế section quen thuộc của Blade. Section có thể khai báo kiểu render dài hoặc có preloader riêng qua config sinh ra trong '),
                                this.html(`40b9d58b`, "code", parentElement, {}, (parentElement) => [
                                    this.text('__VIEW_CONFIG__')
                                ]),
                                this.text('.')
                            ])
                            ]),
                        this.html(`dfe00f0f`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`1655d6d2`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`16f3a413`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@include')
                                    ]),
                                this.html(`2710c0b8`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Component')
                                    ])
                                ]),
                            this.html(`5117da60`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@include(\'đường.dẫn.view\')'),
                                this.text('@include(\'đường.dẫn.view\', [\'prop\' => biểu_thức])')
                                ]),
                            this.html(`ad41be4b`, "p", parentElement, {}, (parentElement) => [
                                this.text('Tạo một view con thật: có ViewController riêng, state riêng, vòng đời riêng. Đây là khác biệt lớn với partial — view con sống độc lập, được start, pause, resume và destroy theo chính nó.')
                            ]),
                            this.html(`cd71649c`, "p", parentElement, {}, (parentElement) => [
                                this.text('Compiler đọc mảng props để suy ra view con phụ thuộc state nào của cha. Khi state đó đổi, runtime '),
                                this.html(`2effed65`, "em", parentElement, {}, (parentElement) => [
                                    this.text('đẩy props mới vào đúng instance đang sống')
                                ]),
                                this.text(' chứ không dựng lại view con — nên state nội bộ của nó, ví dụ một form đang mở dở, không bị thổi bay.')
                            ]),
                            this.html(`0cb9e251`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-ex" }] },
                                (parentElement) => [
                                this.html(`1cb031b3`, "pre", parentElement, {}, (parentElement) => [
                                    this.html(`ae239c89`, "code", parentElement, {}, (parentElement) => [
                                        this.html(`ed6070cf`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('@foreach(ids as id)')
                                            ]),
                                        this.html(`0b105503`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('    @key(id)')
                                            ]),
                                        this.html(`c589d13a`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('    @include(\'web.modules.roster.item\', [\'uid\' => id, \'record\' => records[id] ?? null])')
                                            ]),
                                        this.html(`c1472e54`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('@endforeach')
                                            ])
                                    ])
                                ])
                                ]),
                            this.html(`16464f5d`, "p", parentElement,
                                { classes: [{ type: 'static', value: "dir-note" }] },
                                (parentElement) => [
                                this.text('Props phải sống được qua SSR nên chỉ nhận giá trị tuần tự hoá được — không truyền được callback. Kênh từ con lên cha là bus sự kiện '),
                                this.html(`0f2bd5f7`, "code", parentElement, {}, (parentElement) => [
                                    this.text('App.Event')
                                ]),
                                this.text('.')
                                ])
                            ]),
                        this.html(`03643112`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`24eecd94`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`664b8788`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@children')
                                    ]),
                                this.html(`5fa974ec`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Slot')
                                    ])
                                ]),
                            this.html(`57137665`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@children')
                                ]),
                            this.html(`f8f0bb7a`, "p", parentElement, {}, (parentElement) => [
                                this.text('Chỗ đặt nội dung mà bên gọi truyền vào giữa hai thẻ. Nội dung được render lười đúng tại vị trí khai báo và giữ nguyên context của bên gọi — biến trong đó vẫn là biến của view cha, không phải của component.')
                            ]),
                            this.html(`5fc4b06a`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-ex" }] },
                                (parentElement) => [
                                this.html(`58e77aac`, "pre", parentElement, {}, (parentElement) => [
                                    this.html(`5799c363`, "code", parentElement, {}, (parentElement) => [
                                        this.html(`e9aef28e`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "c" }] },
                                            (parentElement) => [
                                            this.text('<!-- card.sao -->')
                                            ]),
                                        this.html(`73479c82`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('<article class="card"><h3>'),
                                            this.html(`0c0f0f8b`, "span", parentElement,
                                                { classes: [{ type: 'static', value: "mustache-token" }] },
                                                (parentElement) => [
                                                this.text('title')
                                                ]),
                                            this.text('</h3>@children</article>')
                                            ]),
                                        this.html(`cca24043`, "span", parentElement, { classes: [{ type: 'static', value: "code-line" }] }),
                                        this.html(`0ba496f3`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "c" }] },
                                            (parentElement) => [
                                            this.text('<!-- bên gọi -->')
                                            ]),
                                        this.html(`22fcc1d7`, "span", parentElement,
                                            { classes: [{ type: 'static', value: "code-line" }] },
                                            (parentElement) => [
                                            this.text('<card title="Ví dụ"><p>Nội dung này đi qua slot</p></card>')
                                            ])
                                    ])
                                ])
                                ])
                            ]),
                        this.html(`1eed14c9`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`e81b37f0`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`6f769607`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@exec')
                                    ]),
                                this.html(`0ebb409c`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Tiện ích')
                                    ])
                                ]),
                            this.html(`d1a338e5`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@exec(biểu_thức)')
                                ]),
                            this.html(`f8067988`, "p", parentElement, {}, (parentElement) => [
                                this.text('Chạy một biểu thức mà không in ra gì. Dùng để gán biến trung gian hoặc gọi hàm phụ ngay trong template.')
                            ])
                            ])
                        ])
                    ]),
                this.html(`1df6b4ad`, "section", parentElement,
                    { classes: [{ type: 'static', value: "dir-group" }], attrs: { "id": { type: 'static', value: "tien-ich" } } },
                    (parentElement) => [
                    this.html(`ed5a3a19`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Quyền, form & tiện ích')
                    ]),
                    this.html(`13a6cc37`, "p", parentElement, {}, (parentElement) => [
                        this.text('Nhóm này giữ nguyên ngữ nghĩa Blade quen thuộc, nên nếu bạn đã viết Laravel thì không phải học lại.')
                    ]),
                    this.html(`1d9ee324`, "div", parentElement,
                        { classes: [{ type: 'static', value: "dir-list" }] },
                        (parentElement) => [
                        this.html(`2f1af9a9`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`e72fdbe1`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`511dd3b2`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@csrf '),
                                    this.html(`225ea8c0`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @method')
                                    ])
                                    ]),
                                this.html(`f8b231cd`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Form')
                                    ])
                                ]),
                            this.html(`10241f7e`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@csrf'),
                                this.text('@method(\'PUT\')')
                                ]),
                            this.html(`05b9d3d1`, "p", parentElement, {}, (parentElement) => [
                                this.text('Chèn ô ẩn chứa token CSRF, và giả lập HTTP method cho form vốn chỉ gửi được GET với POST.')
                            ])
                            ]),
                        this.html(`65b84cc0`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`14407428`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`1c7c91f7`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@auth '),
                                    this.html(`44e990a0`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @guest')
                                    ])
                                    ]),
                                this.html(`2203c7bd`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Quyền')
                                    ])
                                ]),
                            this.html(`467e2c52`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@auth … @endauth'),
                                this.text('@guest … @endguest')
                                ]),
                            this.html(`6eafdb70`, "p", parentElement, {}, (parentElement) => [
                                this.text('Khối hiển thị theo trạng thái đăng nhập, xét ở phía server lúc render.')
                            ])
                            ]),
                        this.html(`9922419a`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`a5bb4e03`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`f015d15e`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@can '),
                                    this.html(`c391dd5f`, "em", parentElement, {}, (parentElement) => [
                                        this.text('· @cannot')
                                    ])
                                    ]),
                                this.html(`b34f9341`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Quyền')
                                    ])
                                ]),
                            this.html(`5b0e64f1`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@can(\'quyền\', $model) … @endcan')
                                ]),
                            this.html(`5f7d0604`, "p", parentElement, {}, (parentElement) => [
                                this.text('Khối theo policy của Laravel. Cùng cách viết, cùng cách phân giải quyền.')
                            ])
                            ]),
                        this.html(`f9fbc0e3`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`136991ba`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`ad0ed4af`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@error')
                                    ]),
                                this.html(`12deb963`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Form')
                                    ])
                                ]),
                            this.html(`abacf0f5`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@error(\'trường\') … @enderror')
                                ]),
                            this.html(`4318de85`, "p", parentElement, {}, (parentElement) => [
                                this.text('Hiện lỗi validation của một trường, với biến '),
                                this.html(`acf2d4eb`, "code", parentElement, {}, (parentElement) => [
                                    this.text('$message')
                                ]),
                                this.text(' sẵn trong khối.')
                            ])
                            ]),
                        this.html(`ce58863a`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`425ce103`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`8205eb8c`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@hasSection')
                                    ]),
                                this.html(`f77d5eb3`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Layout')
                                    ])
                                ]),
                            this.html(`97df675a`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@hasSection(\'tên\') … @endhassection')
                                ]),
                            this.html(`72c6a4d8`, "p", parentElement, {}, (parentElement) => [
                                this.text('Kiểm tra một section đã được trang con định nghĩa chưa, để layout quyết định có dựng khung bao quanh hay không.')
                            ])
                            ]),
                        this.html(`48ff5e10`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`b73c872f`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`d2a24e60`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@verbatim')
                                    ]),
                                this.html(`280c27b3`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Tiện ích')
                                    ])
                                ]),
                            this.html(`083bde20`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@verbatim … @endverbatim')
                                ]),
                            this.html(`9c1d8eaf`, "p", parentElement, {}, (parentElement) => [
                                this.text('Xuất nguyên văn, không biên dịch gì bên trong. Cần khi bạn muốn in ra cú pháp của chính Saola hoặc của một template engine khác.')
                            ])
                            ]),
                        this.html(`cd912944`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`d0102a6a`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`bd1ddb41`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('@register')
                                    ]),
                                this.html(`328870a8`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Tiện ích')
                                    ])
                                ]),
                            this.html(`24c62c3b`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-sig" }] },
                                (parentElement) => [
                                this.text('@register … @endregister')
                                ]),
                            this.html(`d157b0b4`, "p", parentElement, {}, (parentElement) => [
                                this.text('Khối JavaScript thô được đưa thẳng vào view đã biên dịch, không qua preprocessor. Dùng cho đoạn cần chạy nguyên trạng.')
                            ])
                            ])
                        ])
                    ]),
                this.html(`53e64ea9`, "section", parentElement,
                    { classes: [{ type: 'static', value: "dir-group" }], attrs: { "id": { type: 'static', value: "magic" } } },
                    (parentElement) => [
                    this.html(`db3b86f1`, "h2", parentElement, {}, (parentElement) => [
                        this.text('Biến ma thuật')
                    ]),
                    this.html(`51cc8a04`, "p", parentElement, {}, (parentElement) => [
                        this.text('Có sẵn trong mọi view, do render context cấp. Dùng chúng thay vì viết cứng đường dẫn để view còn chuyển được giữa các context.')
                    ]),
                    this.html(`cb3502d0`, "div", parentElement,
                        { classes: [{ type: 'static', value: "dir-list" }] },
                        (parentElement) => [
                        this.html(`7331773a`, "article", parentElement,
                            { classes: [{ type: 'static', value: "dir" }] },
                            (parentElement) => [
                            this.html(`f00fc073`, "div", parentElement,
                                { classes: [{ type: 'static', value: "dir-head" }] },
                                (parentElement) => [
                                this.html(`5f4247e4`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-name" }] },
                                    (parentElement) => [
                                    this.text('Danh sách')
                                    ]),
                                this.html(`08c68f86`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "dir-kind" }] },
                                    (parentElement) => [
                                    this.text('Toàn cục trong view')
                                    ])
                                ]),
                            this.html(`d09c3360`, "table", parentElement,
                                { classes: [{ type: 'static', value: "dir-mini" }] },
                                (parentElement) => [
                                this.html(`a5f0a5d4`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`ee67ec3c`, "td", parentElement, {}, (parentElement) => [
                                        this.text('__layout__')
                                    ]),
                                    this.html(`a497e5c6`, "td", parentElement, {}, (parentElement) => [
                                        this.text('đường dẫn gốc tới thư mục layout của context hiện tại')
                                    ])
                                ]),
                                this.html(`f4a4b0a6`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`b2dd2208`, "td", parentElement, {}, (parentElement) => [
                                        this.text('__template__')
                                    ]),
                                    this.html(`bad48f68`, "td", parentElement, {}, (parentElement) => [
                                        this.text('đường dẫn gốc tới component dùng chung')
                                    ])
                                ]),
                                this.html(`95506989`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`2d95f218`, "td", parentElement, {}, (parentElement) => [
                                        this.text('__VIEW_PATH__')
                                    ]),
                                    this.html(`3b9e87b2`, "td", parentElement, {}, (parentElement) => [
                                        this.text('đường dẫn dạng chấm của chính view này, ví dụ '),
                                        this.html(`cd3483f9`, "code", parentElement, {}, (parentElement) => [
                                            this.text('web.modules.docs.index')
                                        ])
                                    ])
                                ]),
                                this.html(`9c893ce8`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`e52dd93c`, "td", parentElement, {}, (parentElement) => [
                                        this.text('__VIEW_ID__')
                                    ]),
                                    this.html(`77b3e45e`, "td", parentElement, {}, (parentElement) => [
                                        this.text('định danh instance, là tiền tố của mọi class và marker dùng để hydrate')
                                    ])
                                ]),
                                this.html(`4f66e215`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`cc8202ab`, "td", parentElement, {}, (parentElement) => [
                                        this.text('__context__')
                                    ]),
                                    this.html(`117251b4`, "td", parentElement, {}, (parentElement) => [
                                        this.text('context đang phục vụ request: web, admin, api hay mobile')
                                    ])
                                ]),
                                this.html(`1395480d`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`9752c146`, "td", parentElement, {}, (parentElement) => [
                                        this.text('__base__ · __page__'),
                                        this.html(`c5312f83`, "br", parentElement, {}),
                                        this.text('__component__ · __partial__')
                                    ]),
                                    this.html(`1de32490`, "td", parentElement, {}, (parentElement) => [
                                        this.text('đường dẫn gốc theo từng loại view')
                                    ])
                                ]),
                                this.html(`96f34c8d`, "tr", parentElement, {}, (parentElement) => [
                                    this.html(`8d3a2c6b`, "td", parentElement, {}, (parentElement) => [
                                        this.text('__system__')
                                    ]),
                                    this.html(`15e39f19`, "td", parentElement, {}, (parentElement) => [
                                        this.text('khối system data do render context truyền xuống')
                                    ])
                                ])
                                ])
                            ])
                        ])
                    ])
                ]),
            this.html(`ceb15976`, "a", parentElement,
                { classes: [{ type: 'static', value: "doc-next" }], attrs: { "href": { type: 'static', value: "/docs/reactivity" } } },
                (parentElement) => [
                this.html(`60f0ac7a`, "div", parentElement, {}, (parentElement) => [
                    this.html(`b7585c3f`, "span", parentElement, {}, (parentElement) => [
                        this.text('Tiếp theo')
                    ]),
                    this.html(`8767f8f3`, "strong", parentElement, {}, (parentElement) => [
                        this.text('State & reactivity')
                    ])
                ]),
                this.html(`8287de38`, "span", parentElement,
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
