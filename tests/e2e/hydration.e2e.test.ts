// @vitest-environment node
/**
 * E2E thật trong Chromium: SSR → hydrate → SPA navigate → back/forward.
 *
 * Vì sao cần: mọi test khác chạy jsdom nên KHÔNG dựng được chuỗi "server render
 * HTML → client hydrate lên chính DOM đó". Đúng chỗ đó là nơi bug ẩn lâu nhất
 * của Saola (marker lệch → node nhân đôi hoặc element mồ côi — xem memory
 * hydration-marker-sync, foreach-output-marker-bug). Ảnh chụp màn hình KHÔNG
 * phân biệt được: trang trông bình thường cho tới lần update kế tiếp.
 *
 * Chạy:  npm run test:e2e                       (cần server đang chạy)
 *        E2E_BASE_URL=http://localhost:8686 npm run test:e2e
 * Không có server → cả suite SKIP (hiện rõ trong output, không im lặng pass).
 *
 * ponytail: nhắm server đang chạy sẵn thay vì tự spawn artisan serve + build.
 * Muốn gác prod bundle thì `npm run build:web`, serve nó, rồi trỏ E2E_BASE_URL.
 */
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import type { Browser, Page } from 'playwright';
import { BASE, collectErrors, launchBrowser, norm, openHydrated, probeServer, textOf, waitHydrated } from './support';

const PAGE_A = '/docs/sao-file';
const PAGE_B = '/docs/directives';
const MAIN = '.docs-main';

const serverUp = await probeServer(PAGE_A);
let browser: Browser;

/** Điều hướng SPA sang `href`, đợi nội dung khác `prev`, trả text mới. */
async function spaNavigate(page: Page, href: string, prev: string): Promise<string> {
    await page.click(`.docs-nav a[href="${href}"]`);
    await page.waitForURL(`**${href}`);
    await page.waitForFunction(`${textOf(MAIN)} !== ${JSON.stringify(prev)}`, null, { timeout: 10000 });
    return norm(await page.locator(MAIN).innerText());
}

beforeAll(async () => {
    if (serverUp) browser = await launchBrowser();
});
afterAll(async () => {
    await browser?.close();
});

// Boot Chromium + hydrate mất vài giây; mặc định 5s của vitest là quá ngắn.
describe.skipIf(!serverUp).concurrent(`SSR → hydrate → SPA nav @ ${BASE}`, { timeout: 60_000 }, () => {
    it('SSR trả HTML có nội dung thật khi CHƯA có JS', async () => {
        const html = await (await fetch(`${BASE}${PAGE_A}`)).text();
        // Không phải shell rỗng chờ JS: nội dung phải nằm sẵn trong HTML.
        expect(html).toContain('docs-main');
        expect(html).toMatch(/<pre[\s>]/);
        expect(html.length).toBeGreaterThan(2000);
    });

    it('asset của view nằm trong <head>/<body>, doctype vẫn đứng đầu, hydrate không nhân đôi thẻ', async () => {
        // `<link>`/`<script src>` khai báo trong .sao từng được in NGAY tại chỗ
        // khai báo. Với trang `@extends`, phần đó echo trước khi layout in
        // `<!DOCTYPE html>` → doctype bị bỏ, cả trang chạy quirks mode. Giờ
        // chúng đi qua `@addCssLink`/`@addScriptSrc` và được in ở <head> /
        // cuối <body>.
        const html = await (await fetch(`${BASE}${PAGE_B}`)).text();
        expect(html.trimStart().startsWith('<!DOCTYPE html>')).toBe(true);

        const { page, errors } = await openHydrated(browser, PAGE_B);
        const assets = await page.evaluate(() => ({
            compat: document.compatMode,
            css: [...document.querySelectorAll('link[rel~="stylesheet"]')].map(l => l.getAttribute('href')),
            scripts: [...document.querySelectorAll('script[src]')].map(s => s.getAttribute('src')),
        }));

        expect(assets.compat).toBe('CSS1Compat');
        // Client adopt node SSR thay vì chèn bản thứ hai — trùng href/src là hỏng.
        expect(new Set(assets.css).size).toBe(assets.css.length);
        expect(new Set(assets.scripts).size).toBe(assets.scripts.length);
        expect(errors).toEqual([]);
        await page.close();
    });

    it('hydrate KHÔNG nhân đôi DOM và KHÔNG ném lỗi', async () => {
        // Mốc so sánh: text do server render. Context riêng tắt hẳn JS —
        // sạch hơn chặn request (abort làm chính console sinh ERR_FAILED giả).
        const noJs = await browser.newContext({ javaScriptEnabled: false });
        const ssrPage = await noJs.newPage();
        // 'load' chứ KHÔNG phải 'domcontentloaded': innerText trả text ĐÃ RENDER,
        // nên nó chịu `text-transform` của stylesheet. Ở mốc domcontentloaded
        // app.css có thể chưa áp, trang no-JS đọc ra 'Single-file component'
        // trong khi trang hydrate đọc 'SINGLE-FILE COMPONENT' — lệch hoa/thường
        // thuần CSS, không liên quan nhân đôi DOM, nhưng vẫn làm test đỏ.
        await ssrPage.goto(`${BASE}${PAGE_A}`, { waitUntil: 'load' });
        const ssrText = norm(await ssrPage.locator(MAIN).innerText());
        await noJs.close();

        const { page, errors } = await openHydrated(browser, PAGE_A);

        // Marker lệch làm node render lần hai → text phình gần gấp đôi.
        expect(norm(await page.locator(MAIN).innerText())).toBe(ssrText);
        expect(errors).toEqual([]);
        await page.close();
    });

    it('điều hướng SPA đổi nội dung mà KHÔNG reload cả trang', async () => {
        const { page, errors } = await openHydrated(browser, PAGE_A);

        // Cờ sống trong window: reload thật sẽ xoá nó.
        await page.evaluate(() => ((window as any).__E2E_SPA__ = 1));
        const textA = norm(await page.locator(MAIN).innerText());

        const textB = await spaNavigate(page, PAGE_B, textA);

        expect(await page.evaluate(() => (window as any).__E2E_SPA__)).toBe(1);
        expect(textB).not.toBe(textA);
        expect(errors).toEqual([]);
        await page.close();
    });

    it('back/forward khôi phục đúng nội dung từng trang', async () => {
        const { page } = await openHydrated(browser, PAGE_A);
        const textA = norm(await page.locator(MAIN).innerText());
        const textB = await spaNavigate(page, PAGE_B, textA);

        await page.goBack();
        await page.waitForURL(`**${PAGE_A}`);
        await page.waitForFunction(`${textOf(MAIN)} === ${JSON.stringify(textA)}`, null, { timeout: 10000 });

        await page.goForward();
        await page.waitForURL(`**${PAGE_B}`);
        await page.waitForFunction(`${textOf(MAIN)} === ${JSON.stringify(textB)}`, null, { timeout: 10000 });
        await page.close();
    });
});
