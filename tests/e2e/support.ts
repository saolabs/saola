/**
 * Đồ dùng chung cho E2E. Tách ra vì hai chỗ dễ lệch nhất nằm đúng ở đây:
 * cách đọc text (innerText vs textContent) và mốc "đã hydrate xong".
 */
import { chromium, type Browser, type ConsoleMessage, type Page } from 'playwright';

export const BASE = (process.env.E2E_BASE_URL || 'http://localhost:8686').replace(/\/$/, '');

/** Có server không — quyết định skip cả suite (thấy rõ, không im lặng pass). */
export async function probeServer(path = '/'): Promise<boolean> {
    return fetch(`${BASE}${path}`, { signal: AbortSignal.timeout(3000) })
        .then((r) => r.ok)
        .catch(() => false);
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

/** Mở trang và đợi hydrate, kèm mảng lỗi đã gắn sẵn từ trước khi điều hướng. */
export async function openHydrated(browser: Browser, path: string) {
    const page = await browser.newPage();
    const errors = collectErrors(page);
    await page.goto(`${BASE}${path}`);
    await waitHydrated(page);
    return { page, errors };
}
