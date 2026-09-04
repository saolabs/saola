// @vitest-environment node
/**
 * E2E cho `@foreach + @key` với view con có state riêng, qua refetch server THẬT.
 *
 * `/roster` là chỗ hội tụ đúng ba thứ đã tốn nhiều buổi debug bằng tay
 * (memory foreach-slot-evict-bug, foreach-child-state-survives-refetch):
 *   - loop trên danh sách id ổn định + `@key(id)`
 *   - mỗi hàng `@include` một view con mang `@states` riêng (form sửa)
 *   - bấm "Đồng bộ ngay" ⇒ server trả object ref MỚI mỗi lần
 *
 * Khi ForeachSlotCache miss, hàng bị destroy + tạo lại: bản nháp trong form con
 * bay sạch, node DOM bị thay, view con của `@include` có thể biến mất hẳn. Trước
 * đây pattern này CHỈ được verify bằng tay — đây là lưới tự động cho nó.
 *
 * `.rs-slot` = node của một vòng lặp; `.rs-row` = node gốc của view con.
 * So sánh bằng dấu `data-*` gắn lên chính node: slot tái tạo thì dấu biến mất —
 * chặt hơn nhiều so với đếm số hàng.
 */
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import type { Browser, Page } from 'playwright';
import { BASE, launchBrowser, openHydrated, probeServer } from './support';

const PAGE = '/roster';
const SYNC_BTN = 'Đồng bộ ngay';

const serverUp = await probeServer(PAGE);
let browser: Browser;

/** Danh sách hàng đã render (đợi API trả trước khi assert). */
async function waitRows(page: Page) {
    await page.waitForSelector('.rs-row', { timeout: 15000 });
}

/** Gắn dấu lên node để phát hiện node bị tạo lại. */
const tag = (page: Page, selector: string, attr: string) =>
    page.evaluate(
        ([sel, key]) =>
            document.querySelectorAll(sel).forEach((el, i) => ((el as HTMLElement).dataset[key] = `${key}${i}`)),
        [selector, attr] as const
    );

/** Đọc lại dấu; `<<MỚI>>` nghĩa là node đó vừa bị tạo lại. */
const readTags = (page: Page, selector: string, attr: string) =>
    page.evaluate(
        ([sel, key]) =>
            [...document.querySelectorAll(sel)].map((el) => (el as HTMLElement).dataset[key] ?? '<<MỚI>>'),
        [selector, attr] as const
    );

/** Bấm "Đồng bộ ngay" và đợi response của API roster. */
async function syncNow(page: Page) {
    await Promise.all([
        page.waitForResponse((r) => r.url().includes('/api/api/roster') && r.request().method() === 'GET'),
        page.getByRole('button', { name: SYNC_BTN }).click(),
    ]);
    await page.waitForLoadState('networkidle');
}

beforeAll(async () => {
    if (serverUp) browser = await launchBrowser();
});
afterAll(async () => {
    await browser?.close();
});

describe.skipIf(!serverUp).concurrent(`@foreach @key + state view con @ ${BASE}${PAGE}`, { timeout: 60_000 }, () => {
    it('nạp xong danh sách thì rows hiện và empty-state biến mất', async () => {
        const { page, errors } = await openHydrated(browser, PAGE);
        await waitRows(page);

        expect(await page.locator('.rs-row').count()).toBeGreaterThan(0);
        // Danh sách rỗng render lúc SSR không được nằm lại cạnh các hàng thật.
        expect(await page.locator('.rs-empty').count()).toBe(0);
        expect(errors).toEqual([]);
        await page.close();
    });

    it('bản nháp trong form của view con SỐNG SÓT qua nhiều lần refetch', async () => {
        const { page, errors } = await openHydrated(browser, PAGE);
        await waitRows(page);

        await page.locator('.rs-row').first().getByRole('button', { name: 'Sửa' }).click();
        const draftInput = page.locator('.rs-row--edit input[type="text"]').first();
        await draftInput.waitFor();
        await draftInput.fill('BẢN NHÁP E2E');

        // Ba nhịp: refetch nào cũng trả ref mới, slot phải hit cả ba lần.
        for (let i = 0; i < 3; i++) {
            await syncNow(page);
            expect(await draftInput.inputValue()).toBe('BẢN NHÁP E2E');
        }

        // Form vẫn mở — view con không bị destroy rồi dựng lại ở trạng thái xem.
        expect(await page.locator('.rs-edit-form').count()).toBe(1);
        expect(errors).toEqual([]);
        await page.close();
    });

    it('lưu form sửa KHÔNG nạp lại trang (PUT bằng fetch, không submit gốc)', async () => {
        // Hai đường làm hỏng việc này: `@submit` không preventDefault, và dev
        // server bắn full-reload khi API ghi vào storage/ (xem vite.config.js
        // server.watch.ignored). Cả hai đều hiện ra ở đây: trang nạp lại giữa
        // lúc đang sửa, bản nháp bay sạch.
        const { page, errors } = await openHydrated(browser, PAGE);
        await waitRows(page);

        let navigations = 0;
        page.on('framenavigated', (f) => { if (f === page.mainFrame()) navigations++; });

        const row = page.locator('.rs-row').first();
        await row.getByRole('button', { name: 'Sửa' }).click();
        const nameInput = page.locator('.rs-row--edit input[type="text"]').first();
        await nameInput.waitFor();
        const original = await nameInput.inputValue();
        const edited = `${original} E2E`;
        await nameInput.fill(edited);

        await Promise.all([
            page.waitForResponse((r) => r.url().includes('/api/api/roster/') && r.request().method() === 'PUT'),
            page.getByRole('button', { name: 'Lưu thay đổi' }).first().click(),
        ]);
        await page.waitForSelector('.rs-row--edit', { state: 'detached' });
        // Full-reload của dev server tới SAU response vài trăm ms — assert ngay
        // lúc form đóng thì bắt hụt, test xanh vì lý do sai.
        await page.waitForTimeout(1500);

        const navigationsAfterSave = navigations;
        const textAfterSave = await page.locator('.rs-row').first().innerText();

        // Trả tên về như cũ TRƯỚC khi assert — suite chạy trên dữ liệu thật của
        // dev server, assert hỏng giữa chừng thì tên rác nằm lại trong users.json.
        await row.getByRole('button', { name: 'Sửa' }).click();
        await nameInput.waitFor();
        await nameInput.fill(original);
        await Promise.all([
            page.waitForResponse((r) => r.url().includes('/api/api/roster/') && r.request().method() === 'PUT'),
            page.getByRole('button', { name: 'Lưu thay đổi' }).first().click(),
        ]);
        await page.close();

        expect(navigationsAfterSave).toBe(0);
        expect(textAfterSave).toContain(edited);
        expect(errors).toEqual([]);
    });

    it('refetch KHÔNG tạo lại node DOM của hàng (slot cache hit)', async () => {
        const { page, errors } = await openHydrated(browser, PAGE);
        await waitRows(page);

        await tag(page, '.rs-slot', 'slot');
        await tag(page, '.rs-row', 'row');
        const slotsBefore = await readTags(page, '.rs-slot', 'slot');
        const rowsBefore = await readTags(page, '.rs-row', 'row');
        expect(slotsBefore.length).toBeGreaterThan(0);

        await syncNow(page);
        await syncNow(page);

        // Còn nguyên dấu = đúng node cũ được dùng lại, không destroy + tạo mới.
        expect(await readTags(page, '.rs-slot', 'slot')).toEqual(slotsBefore);
        expect(await readTags(page, '.rs-row', 'row')).toEqual(rowsBefore);
        expect(errors).toEqual([]);
        await page.close();
    });
});
