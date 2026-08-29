import { View, ViewController, app, Application } from '@saolabs/client';


const __VIEW_PATH__ = 'web.modules.home.parts.architecture';
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
export interface ArchitectureProps {
    /** viewId server gán khi hydrate */
    __SSR_VIEW_ID__?: string;
    [key: string]: any;
}



class ArchitectureViewController extends ViewController {
    constructor(view: View) {
        super(view, __VIEW_PATH__, __VIEW_TYPE__);
        if (typeof (this as any).setStaticConfig === 'function') {
            (this as any).setStaticConfig(__VIEW_CONFIG__);
        } else {
            (this as any).config = __VIEW_CONFIG__;
        }
    }
}

class ArchitectureView extends View {
    constructor(__data__: any = {}, systemData: any = {}) {
        super(__VIEW_PATH__, __VIEW_TYPE__, ArchitectureViewController);
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
            name: 'HomeArchitecture'
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
                { classes: [{ type: 'static', value: "ax" }], attrs: { "id": { type: 'static', value: "architecture" } } },
                (parentElement: any) => [
                this.html(`e11`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ax-head" }] },
                    (parentElement: any) => [
                    this.html(`e111`, "div", parentElement, {}, (parentElement: any) => [
                        this.html(`e1111`, "p", parentElement,
                            { classes: [{ type: 'static', value: "ax-label" }] },
                            (parentElement: any) => [
                            this.text('Kiến trúc hệ thống')
                            ]),
                        this.html(`e1112`, "h2", parentElement, {}, (parentElement: any) => [
                            this.text('Bốn mặt tiền,'),
                            this.html(`e11121`, "br", parentElement, {}),
                            this.text('một lõi duy nhất.')
                        ])
                    ]),
                    this.html(`e112`, "p", parentElement,
                        { classes: [{ type: 'static', value: "ax-sub" }] },
                        (parentElement: any) => [
                        this.text('Context là ranh giới thực sự, không chỉ là thư mục. Mỗi context (web, admin, api, mobile) được trang bị prefix, middleware, hệ thống phân quyền, thư mục view và bundle asset riêng. Các module linh hoạt phục vụ cả bốn context mà không lo xung đột route hay resource.')
                        ])
                    ]),
                this.html(`e12`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ax-ctx" }] },
                    (parentElement: any) => [
                    this.html(`e121`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ax-row" }] },
                        (parentElement: any) => [
                        this.html(`e1211`, "code", parentElement, {}, (parentElement: any) => [
                            this.text('web')
                        ]),
                        this.html(`e1212`, "b", parentElement, {}, (parentElement: any) => [
                            this.text('/')
                        ]),
                        this.html(`e1213`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('Website công khai — SSR đầy đủ rồi hydrate thành SPA.')
                        ]),
                        this.html(`e1214`, "em", parentElement, {}, (parentElement: any) => [
                            this.text('bundle web')
                        ])
                        ]),
                    this.html(`e122`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ax-row" }] },
                        (parentElement: any) => [
                        this.html(`e1221`, "code", parentElement, {}, (parentElement: any) => [
                            this.text('admin')
                        ]),
                        this.html(`e1222`, "b", parentElement, {}, (parentElement: any) => [
                            this.text('/admin')
                        ]),
                        this.html(`e1223`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('Khu vực quản trị — tích hợp middleware '),
                            this.html(`e12231`, "i", parentElement, {}, (parentElement: any) => [
                                this.text('auth')
                            ]),
                            this.text(' + '),
                            this.html(`e12232`, "i", parentElement, {}, (parentElement: any) => [
                                this.text('permission')
                            ]),
                            this.text('.')
                        ]),
                        this.html(`e1224`, "em", parentElement, {}, (parentElement: any) => [
                            this.text('bundle admin')
                        ])
                        ]),
                    this.html(`e123`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ax-row" }] },
                        (parentElement: any) => [
                        this.html(`e1231`, "code", parentElement, {}, (parentElement: any) => [
                            this.text('api')
                        ]),
                        this.html(`e1232`, "b", parentElement, {}, (parentElement: any) => [
                            this.text('/api')
                        ]),
                        this.html(`e1233`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('RESTful JSON tốc độ cao, bỏ qua giai đoạn render view.')
                        ]),
                        this.html(`e1234`, "em", parentElement, {}, (parentElement: any) => [
                            this.text('không bundle')
                        ])
                        ]),
                    this.html(`e124`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ax-row" }] },
                        (parentElement: any) => [
                        this.html(`e1241`, "code", parentElement, {}, (parentElement: any) => [
                            this.text('mobile')
                        ]),
                        this.html(`e1242`, "b", parentElement, {}, (parentElement: any) => [
                            this.text('tuỳ cấu hình')
                        ]),
                        this.html(`e1243`, "span", parentElement, {}, (parentElement: any) => [
                            this.text('Webview hoặc PWA, chia sẻ chung cơ chế view và state.')
                        ]),
                        this.html(`e1244`, "em", parentElement, {}, (parentElement: any) => [
                            this.text('bundle mobile')
                        ])
                        ])
                    ]),
                this.html(`e13`, "div", parentElement,
                    { classes: [{ type: 'static', value: "ax-mod" }] },
                    (parentElement: any) => [
                    this.html(`e131`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ax-mod-copy" }] },
                        (parentElement: any) => [
                        this.html(`e1311`, "h3", parentElement, {}, (parentElement: any) => [
                            this.text('Module độc lập, tự động nhận diện.')
                        ]),
                        this.html(`e1312`, "p", parentElement, {}, (parentElement: any) => [
                            this.text('Kiến trúc xoay quanh '),
                            this.html(`e13121`, "code", parentElement, {}, (parentElement: any) => [
                                this.text('app/Modules/')
                            ]),
                            this.text('. Mỗi module sở hữu '),
                            this.html(`e13122`, "code", parentElement, {}, (parentElement: any) => [
                                this.text('ModuleServiceProvider.php')
                            ]),
                            this.text(' được nạp đệ quy tự động — hỗ trợ module lồng nhau không giới hạn. Route, controller nằm gọn trong module thay vì dồn ứ tại '),
                            this.html(`e13123`, "code", parentElement, {}, (parentElement: any) => [
                                this.text('routes/web.php')
                            ]),
                            this.text('.')
                        ]),
                        this.html(`e1313`, "ul", parentElement,
                            { classes: [{ type: 'static', value: "ax-list" }] },
                            (parentElement: any) => [
                            this.html(`e13131`, "li", parentElement, {}, (parentElement: any) => [
                                this.text('Thêm module mới '),
                                this.html(`e131311`, "strong", parentElement, {}, (parentElement: any) => [
                                    this.text('không cần đụng đến file cấu hình trung tâm')
                                ]),
                                this.text('.')
                            ]),
                            this.html(`e13132`, "li", parentElement, {}, (parentElement: any) => [
                                this.text('Sử dụng chung Model, Policy, Service; nhưng tách biệt hoàn toàn Route, Middleware, Bundle.')
                            ]),
                            this.html(`e13133`, "li", parentElement, {}, (parentElement: any) => [
                                this.html(`e131331`, "code", parentElement, {}, (parentElement: any) => [
                                    this.text('ViewContextService')
                                ]),
                                this.text(' cô lập registry '),
                                this.html(`e131332`, "strong", parentElement, {}, (parentElement: any) => [
                                    this.text('theo từng request')
                                ]),
                                this.text(' — loại bỏ triệt để lỗi rò rỉ state khi chạy trên Laravel Octane.')
                            ])
                            ]),
                        this.html(`e1314`, "a", parentElement,
                            { classes: [{ type: 'static', value: "ax-link" }], attrs: { "href": { type: 'static', value: "/docs/contexts" } } },
                            (parentElement: any) => [
                            this.text('Đọc chi tiết về Context & Module '),
                            this.html(`e13141`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('→')
                            ])
                            ])
                        ]),
                    this.html(`e132`, "div", parentElement,
                        { classes: [{ type: 'static', value: "ax-win" }] },
                        (parentElement: any) => [
                        this.html(`e1321`, "div", parentElement,
                            { classes: [{ type: 'static', value: "ax-win-bar" }] },
                            (parentElement: any) => [
                            this.html(`e13211`, "span", parentElement, {}, (parentElement: any) => [
                                this.text('PHP')
                            ]),
                            this.html(`e13212`, "b", parentElement, {}, (parentElement: any) => [
                                this.text('app/Modules/Roster/ModuleServiceProvider.php')
                            ])
                            ]),
                        this.html(`e1322`, "pre", parentElement, {}, (parentElement: any) => [
                            this.html(`e13221`, "code", parentElement, {}, (parentElement: any) => [
                                this.html(`e132211`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }] },
                                    (parentElement: any) => [
                                    this.html(`e1322111`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "ty" }] },
                                        (parentElement: any) => [
                                        this.text('System')
                                        ]),
                                    this.html(`e1322112`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('::')
                                        ]),
                                    this.html(`e1322113`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "fn" }] },
                                        (parentElement: any) => [
                                        this.text('context')
                                        ]),
                                    this.html(`e1322114`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('(')
                                        ]),
                                    this.html(`e1322115`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "st" }] },
                                        (parentElement: any) => [
                                        this.text('\'api\'')
                                        ]),
                                    this.html(`e1322116`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(')->')
                                        ]),
                                    this.html(`e1322117`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "fn" }] },
                                        (parentElement: any) => [
                                        this.text('module')
                                        ]),
                                    this.html(`e1322118`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('(')
                                        ]),
                                    this.html(`e1322119`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "st" }] },
                                        (parentElement: any) => [
                                        this.text('\'roster\'')
                                        ]),
                                    this.html(`e132211e10_`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(', [')
                                        ])
                                    ]),
                                this.html(`e132212`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                    (parentElement: any) => [
                                    this.html(`e1322121`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "st" }] },
                                        (parentElement: any) => [
                                        this.text('\'prefix\'')
                                        ]),
                                    this.html(`e1322122`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(' =>')
                                        ]),
                                    this.html(`e1322123`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "st" }] },
                                        (parentElement: any) => [
                                        this.text(' \'/roster\'')
                                        ]),
                                    this.html(`e1322124`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(',')
                                        ]),
                                    this.html(`e1322125`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "st" }] },
                                        (parentElement: any) => [
                                        this.text(' \'priority\'')
                                        ]),
                                    this.html(`e1322126`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(' =>')
                                        ]),
                                    this.html(`e1322127`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "st" }] },
                                        (parentElement: any) => [
                                        this.text(' 5')
                                        ]),
                                    this.html(`e1322128`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(',')
                                        ])
                                    ]),
                                this.html(`e132213`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }] },
                                    (parentElement: any) => [
                                    this.html(`e1322131`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('])')
                                        ])
                                    ]),
                                this.html(`e132214`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                    (parentElement: any) => [
                                    this.html(`e1322141`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('->')
                                        ]),
                                    this.html(`e1322142`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "fn" }] },
                                        (parentElement: any) => [
                                        this.text('controller')
                                        ]),
                                    this.html(`e1322143`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('(')
                                        ]),
                                    this.html(`e1322144`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "ty" }] },
                                        (parentElement: any) => [
                                        this.text('RosterController')
                                        ]),
                                    this.html(`e1322145`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('::')
                                        ]),
                                    this.html(`e1322146`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "kw" }] },
                                        (parentElement: any) => [
                                        this.text('class')
                                        ]),
                                    this.html(`e1322147`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(')')
                                        ])
                                    ]),
                                this.html(`e132215`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                    (parentElement: any) => [
                                    this.html(`e1322151`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('->')
                                        ]),
                                    this.html(`e1322152`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "fn" }] },
                                        (parentElement: any) => [
                                        this.text('group')
                                        ]),
                                    this.html(`e1322153`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('(')
                                        ]),
                                    this.html(`e1322154`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "kw" }] },
                                        (parentElement: any) => [
                                        this.text('function')
                                        ]),
                                    this.html(`e1322155`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(' (')
                                        ]),
                                    this.html(`e1322156`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "vr" }] },
                                        (parentElement: any) => [
                                        this.text('$module')
                                        ]),
                                    this.html(`e1322157`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(') {')
                                        ])
                                    ]),
                                this.html(`e132216`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                    (parentElement: any) => [
                                    this.html(`e1322161`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "vr" }] },
                                        (parentElement: any) => [
                                        this.text('$module')
                                        ]),
                                    this.html(`e1322162`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('->')
                                        ]),
                                    this.html(`e1322163`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "fn" }] },
                                        (parentElement: any) => [
                                        this.text('get')
                                        ]),
                                    this.html(`e1322164`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('(')
                                        ]),
                                    this.html(`e1322165`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "st" }] },
                                        (parentElement: any) => [
                                        this.text('\'/\'')
                                        ]),
                                    this.html(`e1322166`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(',')
                                        ]),
                                    this.html(`e1322167`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "st" }] },
                                        (parentElement: any) => [
                                        this.text(' \'index\'')
                                        ]),
                                    this.html(`e1322168`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(')->')
                                        ]),
                                    this.html(`e1322169`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "fn" }] },
                                        (parentElement: any) => [
                                        this.text('name')
                                        ]),
                                    this.html(`e132216e10_`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('(')
                                        ]),
                                    this.html(`e132216e11_`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "st" }] },
                                        (parentElement: any) => [
                                        this.text('\'index\'')
                                        ]),
                                    this.html(`e132216e12_`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(');')
                                        ])
                                    ]),
                                this.html(`e132217`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                    (parentElement: any) => [
                                    this.html(`e1322171`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "vr" }] },
                                        (parentElement: any) => [
                                        this.text('$module')
                                        ]),
                                    this.html(`e1322172`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('->')
                                        ]),
                                    this.html(`e1322173`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "fn" }] },
                                        (parentElement: any) => [
                                        this.text('post')
                                        ]),
                                    this.html(`e1322174`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('(')
                                        ]),
                                    this.html(`e1322175`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "st" }] },
                                        (parentElement: any) => [
                                        this.text('\'/\'')
                                        ]),
                                    this.html(`e1322176`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(',')
                                        ]),
                                    this.html(`e1322177`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "st" }] },
                                        (parentElement: any) => [
                                        this.text(' \'store\'')
                                        ]),
                                    this.html(`e1322178`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(')->')
                                        ]),
                                    this.html(`e1322179`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "fn" }] },
                                        (parentElement: any) => [
                                        this.text('name')
                                        ]),
                                    this.html(`e132217e10_`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('(')
                                        ]),
                                    this.html(`e132217e11_`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "st" }] },
                                        (parentElement: any) => [
                                        this.text('\'store\'')
                                        ]),
                                    this.html(`e132217e12_`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(');')
                                        ])
                                    ]),
                                this.html(`e132218`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-2" }] },
                                    (parentElement: any) => [
                                    this.html(`e1322181`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "vr" }] },
                                        (parentElement: any) => [
                                        this.text('$module')
                                        ]),
                                    this.html(`e1322182`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('->')
                                        ]),
                                    this.html(`e1322183`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "fn" }] },
                                        (parentElement: any) => [
                                        this.text('put')
                                        ]),
                                    this.html(`e1322184`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('(')
                                        ]),
                                    this.html(`e1322185`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "st" }] },
                                        (parentElement: any) => [
                                        this.text('\'/{uuid}\'')
                                        ]),
                                    this.html(`e1322186`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(',')
                                        ]),
                                    this.html(`e1322187`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "st" }] },
                                        (parentElement: any) => [
                                        this.text(' \'update\'')
                                        ]),
                                    this.html(`e1322188`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(')->')
                                        ]),
                                    this.html(`e1322189`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "fn" }] },
                                        (parentElement: any) => [
                                        this.text('name')
                                        ]),
                                    this.html(`e132218e10_`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('(')
                                        ]),
                                    this.html(`e132218e11_`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "st" }] },
                                        (parentElement: any) => [
                                        this.text('\'update\'')
                                        ]),
                                    this.html(`e132218e12_`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text(');')
                                        ])
                                    ]),
                                this.html(`e132219`, "span", parentElement,
                                    { classes: [{ type: 'static', value: "code-line" }, { type: 'static', value: "code-indent-1" }] },
                                    (parentElement: any) => [
                                    this.html(`e1322191`, "span", parentElement,
                                        { classes: [{ type: 'static', value: "op" }] },
                                        (parentElement: any) => [
                                        this.text('});')
                                        ])
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
export function WebModulesHomePartsArchitecture(__data__ = {}, systemData = {}): ArchitectureView {
    return new ArchitectureView(__data__, systemData);
}
export default WebModulesHomePartsArchitecture;