// @vitest-environment node
/**
 * Cổng parity SSR ↔ CSR — bất biến nền của Saola.
 *
 * Saola có HAI bộ sinh code cho cùng một file `.sao`: sao2blade (server render)
 * và sao2js (client render). Chúng không chia sẻ renderer, chỉ chia sẻ một
 * contract. Mọi lỗi tốn nhiều thời gian nhất của dự án đều là một emitter đánh
 * rơi thứ mà emitter kia giữ: text node khoảng trắng, `@block` tĩnh trên trang
 * `@await`, shortcut marker lệch, foreach index lệch-1. Test dựng cây element
 * bằng tay KHÔNG bắt được lớp lỗi này vì nó bỏ qua chính khâu sinh code.
 *
 * Bất biến được gác ở đây:
 *
 *     mở thẳng trang (SSR + hydrate)  ≡  điều hướng SPA tới trang đó (CSR thuần)
 *
 * Vì sao so hai vế NÀY chứ không phải "HTML thô của server" với CSR: cả hai vế
 * đều chạy client runtime và mọi script sau mount, nên khác biệt do app tự sửa
 * DOM (toggle class, gắn id cho heading) tự triệt tiêu, chỉ còn lại khác biệt
 * do compiler. Đây cũng đúng là điều người dùng thấy: trang phải giống nhau dù
 * họ vào thẳng hay bấm link.
 *
 * Ba tầng, tất cả chạy mặc định: tập marker → cấu trúc DOM → whitespace từng byte.
 *
 * Chạy:  npm run test:e2e   (cần server đang chạy)
 * Không có server → SKIP cả suite, hiện rõ trong output.
 */
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import type { Browser } from 'playwright';
import { BASE, launchBrowser, probeServer, waitHydrated } from './support';

/**
 * Route được gác. Thêm route mới vào đây là cách rẻ nhất để mở rộng vùng phủ.
 *
 * `/roster` CỐ Ý không có mặt: id component của nó nhúng uuid lấy từ DB
 * (`s:c:…-6f1b0f2c-1a4d-…`), nên hai lần render khác nhau về dữ liệu chứ không
 * phải về codegen — gác nó chỉ tạo nhiễu. Muốn gác trang kiểu đó thì phải seed
 * dữ liệu cố định trước.
 */
const ROUTES = [
    '/', '/about', '/docs', '/demo', '/todo-list',
    '/docs/getting-started', '/docs/directives',
    // Hai route có backtick trong văn xuôi — chỗ duy nhất bắt được lỗi escape kép
    // (`.sao` từng hiện ra \`.sao\`). Golden examples không có ca nào như vậy.
    '/docs/architecture', '/docs/sao-file',
    // Hai example phức tạp có dữ liệu TẤT ĐỊNH nên gác được. `/demo/market` và
    // `/demo/stream` cố ý đứng ngoài: giá chạy từng giây và mốc thời gian của
    // backlog lấy từ đồng hồ, hai lần chụp không bao giờ bằng nhau.
    '/demo/grid', '/demo/board',
];

/**
 * Sai lệch ĐÃ BIẾT — cổng bỏ qua đúng những mục này và đỏ với mọi thứ khác.
 *
 * Đây là điểm khác biệt so với 8 cổng `compiler/tests/Parity/` đang đỏ sẵn: một
 * cổng đỏ thường trực dạy người ta bỏ qua màu đỏ. Cổng này XANH ngày đầu tiên,
 * nên hễ đỏ là có hồi quy thật. Sửa xong mục nào thì xoá mục đó khỏi đây —
 * `it('danh sách sai lệch đã biết không phình ra')` bên dưới giữ cho danh sách
 * không âm thầm dài thêm.
 */
const KNOWN: Array<{ id: string; why: string; strip: (s: string) => string }> = [
    // RỖNG. Mục cuối (`is-current`) đã sửa 05/09/2026: layouts/docs.sao đọc
    // `location.pathname` trong MutationObserver, mà router mount DOM TRƯỚC rồi
    // mới pushState — vào docs từ layout khác thì nav mất highlight. Nay cả hai
    // layout nghe `App.Router.afterEach`, và hook đó đã nhận nhiều subscriber.
];

const applyKnown = (s: string) => KNOWN.reduce((acc, k) => k.strip(acc), s);

/**
 * viewId khác nhau theo cấu trúc: server đánh 'v1, v2…', client đánh 'c0, c1…'
 * (ViewManager.generateViewId — tiền tố khác nhau để hai nguồn id không đụng
 * nhau). Ánh xạ theo thứ tự xuất hiện về V0, V1… để so được phần còn lại.
 *
 * Phải neo vào ranh giới token (`"` , khoảng trắng, `:`) — thay chuỗi con trần
 * sẽ ăn nhầm vào giữa từ ("blo**ck**-shell" → "bloV2-shell").
 */
function normalizeViewIds(html: string): string {
    const ids = new Set<string>();
    for (const m of html.matchAll(/<!--s:[a-z]+:([^\s>]+?)-[se]-->/g)) ids.add(m[1].split('-')[0]);
    for (const m of html.matchAll(/class="([^"]*)"/g)) {
        for (const token of m[1].split(/\s+/)) if (token.includes('-')) ids.add(token.split('-')[0]);
    }
    const at = (id: string) => {
        const m = html.match(new RegExp(`(^|[\\s":])${id}-`));
        return m?.index ?? Number.POSITIVE_INFINITY;
    };
    const map = new Map<string, string>();
    [...ids]
        .filter((id) => /^[vc][0-9a-z]{0,3}$/.test(id))
        .map((id) => [at(id), id] as const)
        .sort((a, b) => a[0] - b[0])
        .forEach(([, id], i) => map.set(id, `V${i}`));

    // Thay CHỈ trong class và trong marker. Quét cả chuỗi thì bắt nhầm giá trị
    // khác trông giống viewId — id heading `id="ch-n-m-t-view-kh-c"` có tiền tố
    // `ch` khớp `[vc][0-9a-z]{0,3}` và bị đổi thành `V3-n-m-t-...`, làm cổng đỏ
    // vì lý do sai. Hai ngữ cảnh này là chỗ DUY NHẤT viewId thật xuất hiện.
    const swap = (token: string) => {
        const dash = token.indexOf('-');
        if (dash === -1) return token;
        const to = map.get(token.slice(0, dash));
        return to === undefined ? token : to + token.slice(dash);
    };
    return html
        .replace(/class="([^"]*)"/g, (_, v: string) =>
            `class="${v.split(/(\s+)/).map((t) => (/\s/.test(t) ? t : swap(t))).join('')}"`)
        .replace(/<!--(s:[a-z]+:)([^>]*?)-->/g, (_, head: string, body: string) => `<!--${head}${swap(body)}-->`);
}

/**
 * Bỏ khoảng trắng ở ranh giới thẻ và gộp các chuỗi khoảng trắng — dùng cho cổng
 * cấu trúc, KHÔNG dùng cho cổng whitespace.
 *
 * Phải cắt cả khoảng trắng đầu/cuối TEXT NODE (`> ✓ <` → `>✓<`), không chỉ
 * khoảng trắng giữa hai thẻ: bug đang có sinh ra cả hai dạng, và nếu cổng cấu
 * trúc cũng đỏ vì nó thì nó chỉ lặp lại cổng whitespace bên dưới.
 */
const collapseWs = (s: string) =>
    s.replace(/>\s+/g, '>').replace(/\s+</g, '<').replace(/[ \t\n]+/g, ' ').trim();

const markersOf = (s: string) => [...s.matchAll(/<!--(s:[^>]*?)-->/g)].map((m) => m[1]);

/** Đoạn lệch đầu tiên, kèm ngữ cảnh — thứ duy nhất khiến cổng đỏ có thể hành động được. */
function firstDiff(a: string, b: string): string {
    let i = 0;
    while (i < a.length && i < b.length && a[i] === b[i]) i++;
    const from = Math.max(0, i - 60);
    return `\n  lệch tại ký tự ${i}\n  hydrate: ${JSON.stringify(a.slice(from, i + 140))}`
         + `\n  csr    : ${JSON.stringify(b.slice(from, i + 140))}`;
}

/**
 * Chụp `#app-root` sau khi bỏ mọi element KHÔNG do compiler sinh ra.
 *
 * Mọi element compiler emit đều mang class `{viewId}-{id}` — đó là cách Html
 * claim DOM khi hydrate (HYDRATION.md §2). Element không có class đó chỉ đến từ
 * hai nguồn, và cả hai đều phải nằm ngoài phép so:
 *
 *   - khối `@ssr` — Blade giữ, JS bỏ hẳn (SourceSplitter.php:50). Đây là sai
 *     lệch ĐÚNG THIẾT KẾ, không phải bug, nên không đưa vào KNOWN.
 *   - DOM do script trong `<script setup>` tạo sau mount (span của Prism…).
 *
 * Lọc đối xứng cả hai vế nên vẫn bắt được lỗi thật: nếu compiler quên gắn class
 * cho một element, vế kia vẫn có class → bị lọc lệch nhau → cổng đỏ.
 * Đánh đổi: nội dung `{!! !!}` (HTML thô, không có class) không được so nội
 * dung nữa — ranh giới của nó vẫn do cổng marker `s:o:` gác.
 */
const APP_ROOT = () => {
    const root = document.getElementById('app-root');
    if (!root) return '';
    const clone = root.cloneNode(true) as HTMLElement;
    const owned = (el: Element) =>
        [...el.classList].some((c) => /^[vc][0-9a-z]{0,3}-/.test(c));
    // Gỡ element đã nằm trong subtree vừa gỡ là no-op, nên không cần guard.
    for (const el of [...clone.querySelectorAll('*')]) if (!owned(el)) el.remove();
    return clone.innerHTML;
};

/**
 * Đợi DOM đứng yên thay vì ngủ một khoảng cố định — trang có `@await` còn fetch
 * sau khi networkidle, còn `sleep` đủ dài thì làm cổng chậm mà vẫn flaky.
 */
async function settled(page: import('playwright').Page): Promise<string> {
    await page.waitForLoadState('networkidle');
    let prev = '';
    for (let i = 0; i < 40; i++) {
        const now = await page.evaluate(APP_ROOT);
        if (now && now === prev) return now;
        prev = now;
        await page.waitForTimeout(150);
    }
    return prev;
}

/** Vế A — vào thẳng URL: server render Blade, client hydrate lên chính DOM đó. */
async function snapshotHydrated(browser: Browser, path: string): Promise<string> {
    const page = await browser.newPage();
    try {
        await page.goto(`${BASE}${path}`);
        await waitHydrated(page);
        return await settled(page);
    } finally {
        await page.close();
    }
}

/** Vế B — vào route khác rồi điều hướng SPA: view dựng hoàn toàn bằng JS. */
async function snapshotCsr(browser: Browser, path: string): Promise<string> {
    const page = await browser.newPage();
    try {
        await page.goto(`${BASE}${path === '/' ? '/about' : '/'}`);
        await waitHydrated(page);
        await page.evaluate((p) => (window as any).App.Router.push(p), path);
        await page.waitForURL(`**${path}`, { timeout: 15000 });
        return await settled(page);
    } finally {
        await page.close();
    }
}

const serverUp = await probeServer('/');
let browser: Browser;
const snapshots = new Map<string, { hydrated: string; csr: string }>();

beforeAll(async () => {
    if (!serverUp) return;
    browser = await launchBrowser();
    for (const route of ROUTES) {
        snapshots.set(route, {
            hydrated: normalizeViewIds(await snapshotHydrated(browser, route)),
            csr: normalizeViewIds(await snapshotCsr(browser, route)),
        });
    }
}, 240_000);

afterAll(async () => {
    await browser?.close();
});

describe.skipIf(!serverUp)(`parity SSR↔CSR @ ${BASE}`, { timeout: 60_000 }, () => {
    describe.each(ROUTES)('%s', (route) => {
        it('cùng tập marker', () => {
            const { hydrated, csr } = snapshots.get(route)!;
            const a = markersOf(applyKnown(hydrated));
            const c = markersOf(applyKnown(csr));
            const onlyHydrated = a.filter((m) => !c.includes(m));
            const onlyCsr = c.filter((m) => !a.includes(m));
            expect(
                { onlyHydrated: [...new Set(onlyHydrated)], onlyCsr: [...new Set(onlyCsr)] },
                'marker chỉ có ở một phía → hydrate sẽ không claim được vùng đó',
            ).toEqual({ onlyHydrated: [], onlyCsr: [] });
        });

        it('cùng cấu trúc DOM', () => {
            const { hydrated, csr } = snapshots.get(route)!;
            const a = collapseWs(applyKnown(hydrated));
            const c = collapseWs(applyKnown(csr));
            expect(a === c, `cấu trúc DOM lệch${a === c ? '' : firstDiff(a, c)}`).toBe(true);
        });
    });

    it('mỗi route thật sự render ra nội dung', () => {
        for (const route of ROUTES) {
            const { hydrated, csr } = snapshots.get(route)!;
            // Không có mốc này thì hai vế rỗng cũng "khớp" và cổng xanh vì lý do sai.
            expect(hydrated.length, `${route}: vế hydrate rỗng`).toBeGreaterThan(500);
            expect(csr.length, `${route}: vế CSR rỗng`).toBeGreaterThan(500);
        }
    });

    it('danh sách sai lệch đã biết không phình ra', () => {
        expect(KNOWN.map((k) => k.id)).toEqual([]);
    });
});

/**
 * Cổng whitespace — so TỪNG BYTE, không collapse gì cả.
 *
 * Chạy mặc định (trước đây phải bật bằng SAO_PARITY_WS=1 vì đỏ thường trực):
 * Ast\Parser nay giữ nguyên thụt lề, xuống dòng và dòng trống của file .sao
 * đúng như sao2blade giữ, nên hai vế khớp từng byte. Đây là cổng bắt lại lớp
 * bug "khoảng trắng giữa hai thẻ inline biến mất sau SPA nav".
 */
describe.skipIf(!serverUp)('parity whitespace (từng byte)', { timeout: 60_000 }, () => {
    /**
     * Khoảng đệm quanh marker là thứ DUY NHẤT được bỏ qua.
     *
     * Blade chèn thụt lề của dòng `@useBlock`/`@block`/`@include` vào ngay cạnh
     * marker khi render; phía client marker do BlockManager/Component chèn lúc
     * mount, không có dòng nguồn nào để lấy thụt lề. Bắt client bịa ra khoảng
     * đệm cosmetic đó là thêm phức tạp đổi lấy số 0 — nó nằm giữa hai comment
     * node nên không hiện lên màn hình.
     */
    const dropMarkerPad = (s: string) =>
        s.replace(/\s+(<!--s:[^>]*?-->)/g, '$1').replace(/(<!--s:[^>]*?-->)\s+/g, '$1');

    /**
     * Route chưa byte-exact, kèm lý do. Đều là VÙNG BIÊN của cơ chế bóc nội dung
     * ra khỏi luồng parse thường, không phải whitespace nội dung:
     */
    const EXCLUDED: Record<string, string> = {
        '/demo':
            'khối @ssr chỉ có ở server (SourceSplitter.php:50) nên whitespace bao quanh nó cũng vậy; '
            + 'bộ lọc `owned()` gỡ element @ssr nhưng để lại khoảng trắng hai bên.',
        '/docs/getting-started':
            '@verbatim được bóc thành placeholder TRƯỚC khi parser chạy, nên biên của nó lệch '
            + 'đúng một "\\n" mỗi đầu. Nằm ở cơ chế khác, không phải Ast\\Parser.',
        '/docs/directives': 'cùng biên @verbatim như trên; hai cổng marker + cấu trúc vẫn gác route này.',
        '/docs/architecture': 'cùng biên @verbatim (8 khối); marker + cấu trúc vẫn gác.',
        '/docs/sao-file': 'cùng biên @verbatim; marker + cấu trúc vẫn gác.',
    };

    it.each(ROUTES.filter((r) => !(r in EXCLUDED)))('%s khớp từng byte', (route) => {
        const { hydrated, csr } = snapshots.get(route)!;
        const a = dropMarkerPad(applyKnown(hydrated));
        const c = dropMarkerPad(applyKnown(csr));
        expect(a === c, `whitespace lệch${a === c ? '' : firstDiff(a, c)}`).toBe(true);
    });

    it('danh sách route được miễn không phình ra', () => {
        expect(Object.keys(EXCLUDED)).toEqual([
            '/demo', '/docs/getting-started', '/docs/directives',
            '/docs/architecture', '/docs/sao-file',
        ]);
    });
});
