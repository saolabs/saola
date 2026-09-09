/**
 * Đồ dùng chung cho E2E. Tách ra vì hai chỗ dễ lệch nhất nằm đúng ở đây:
 * cách đọc text (innerText vs textContent) và mốc "đã hydrate xong".
 */
import { chromium, type Browser, type ConsoleMessage, type Page } from 'playwright';

export const BASE = (process.env.E2E_BASE_URL || 'http://localhost:8686').replace(/\/$/, '');

/** Có server không — quyết định skip cả suite (thấy rõ, không im lặng pass). */
export async function probeServer(path = '/'): Promise<boolean> {
    const ready = await fetch(`${BASE}${path}`, { signal: AbortSignal.timeout(3000) })
        .then((r) => r.ok)
        .catch(() => false);
    if (!ready && process.env.E2E_REQUIRED === 'true') {
        throw new Error(`E2E server unavailable: ${BASE}${path}. Start the test server before running the release gate.`);
    }
    return ready;
}

export const launchBrowser = (): Promise<Browser> => chromium.launch();

export const norm = (s: string) => s.replace(/\s+/g, ' ').trim();

/**
 * Biểu thức đọc text của `selector` trong trang, chuẩn hoá GIỐNG HỆT `norm`.
 * PHẢI là `innerText` để khớp `locator.innerText()` phía Node — `textContent`
 * gom cả text ẩn (<style>, node display:none) nên hai bên không bao giờ bằng
 * nhau, và phép so `!==` sẽ luôn đúng ⇒ test xanh vì lý do sai.
 */
export const textOf = (selector: string) =>
    `document.querySelector(${JSON.stringify(selector)})?.innerText?.replace(/\\s+/g,' ').trim()`;

/** Lỗi console không thuộc app (extension, favicon, noise của Vite dev). */
const IGNORED_CONSOLE = [/favicon/i, /\[vite\]/i];

/** Gom lỗi console + uncaught exception. Gắn TRƯỚC `page.goto`. */
export function collectErrors(page: Page): string[] {
    const errors: string[] = [];
    page.on('console', (msg: ConsoleMessage) => {
        if (msg.type() !== 'error') return;
        const text = msg.text();
        if (IGNORED_CONSOLE.some((re) => re.test(text))) return;
        errors.push(text);
    });
    page.on('pageerror', (err) => errors.push(`pageerror: ${err.message}`));
    return errors;
}

/** Đợi client runtime boot xong (App.start() đã chạy) rồi mạng lặng. */
export async function waitHydrated(page: Page): Promise<void> {
    await page.waitForFunction(() => Boolean((window as any).App), null, { timeout: 15000 });
    await page.waitForLoadState('networkidle');
}

/**
 * Đợi DOM NGỪNG đổi (yên `quietMs` liên tiếp).
 *
 * `waitHydrated` chỉ đảm bảo App có mặt và mạng rảnh; việc chạy SAU hydrate thì
 * chưa — rõ nhất là Prism tô màu khối code của trang docs, nó thay nội dung
 * `<code>` một nhịp sau. Chụp DOM ngay lúc đó sẽ bắt được trạng thái nửa chừng
 * và cổng parity đỏ vì lý do thời điểm chứ không phải vì lệch thật.
 */
export async function waitDomSettled(page: Page, quietMs = 250): Promise<void> {
    await page.evaluate(
        (quiet) =>
            new Promise<void>((resolve) => {
                let timer: ReturnType<typeof setTimeout>;
                const done = () => {
                    observer.disconnect();
                    resolve();
                };
                const observer = new MutationObserver(() => {
                    clearTimeout(timer);
                    timer = setTimeout(done, quiet);
                });
                observer.observe(document.body, {
                    childList: true,
                    subtree: true,
                    characterData: true,
                    attributes: true,
                });
                timer = setTimeout(done, quiet);
            }),
        quietMs,
    );
}

/**
 * Đợi mọi render `@await` đang bay kết thúc.
 *
 * Nhánh `@await` có prerender là fire-and-forget: nó mount skeleton rồi mới
 * fetch. Trong lúc chờ, DOM ĐỨNG YÊN y như đã xong — nên mọi heuristic kiểu
 * "hai lượt đọc giống nhau" đều chốt được vào đúng khoảnh khắc block còn rỗng.
 * `App.View.isSettled` là tín hiệu thật, do ViewManager đếm.
 */
export async function waitViewSettled(page: Page): Promise<void> {
    await page.waitForFunction(() => (window as any).App?.View?.isSettled === true, null, { timeout: 15000 });
}

/**
 * Đợi mọi khối code đã được tô màu xong.
 *
 * Prism nạp từ CDN bằng nhiều thẻ <script> rời (lõi rồi mới tới từng grammar),
 * nên thời điểm tô xong KHÔNG suy ra được từ `networkidle` hay từ "DOM đứng
 * yên": có lúc DOM yên đúng lúc grammar chưa về. Chụp lúc đó thì một vế có
 * `<span class="token">` còn vế kia là text thô — cổng parity đỏ vì thời điểm,
 * không phải vì lệch thật, và đỏ ở một trang `/docs/*` khác nhau mỗi lần.
 *
 * Điều kiện ở đây là tất định: mọi khối có ngôn ngữ thật đều đã có token.
 * `HighlightService` bảo đảm điều đó cuối cùng sẽ đúng (nó đợi ĐÚNG grammar
 * mà từng khối cần rồi mới tô).
 */
export async function waitHighlighted(page: Page): Promise<void> {
    const done = await page
        .waitForFunction(
            () => {
                const plain = ['none', 'text', 'plain', 'plaintext'];
                return [...document.querySelectorAll('pre code[class*="language-"]')].every((el) => {
                    const found = [...el.classList].find((c) => c.startsWith('language-'));
                    const lang = found ? found.slice('language-'.length) : '';

                    return plain.includes(lang) || el.querySelector('.token') !== null;
                });
            },
            null,
            { timeout: 8000 },
        )
        .then(() => true)
        .catch(() => false);

    if (!done) throw new Error('Prism chưa tô xong sau 8s — ảnh chụp sẽ không tất định.');
}

/** Mở trang và đợi hydrate, kèm mảng lỗi đã gắn sẵn từ trước khi điều hướng. */
export async function openHydrated(browser: Browser, path: string) {
    const page = await browser.newPage();
    const errors = collectErrors(page);
    await page.goto(`${BASE}${path}`);
    await waitHydrated(page);
    return { page, errors };
}
