// @vitest-environment node
/**
 * Directive viết trên thẻ, trên trình duyệt thật.
 *
 * Trang `/demo/tag-directives` dựng CÙNG một nội dung bằng hai mặt chữ — cột
 * `#viaBlock` dùng directive khối (`@if`…`@endif`), cột `#viaTag` dùng
 * directive viết trên thẻ (`#if="..."`). Compiler hạ cái sau về cái trước, nên
 * hai cột phải cho CÙNG kết quả ở mọi trạng thái. Lệch là đỏ, không cần biết
 * vì sao.
 *
 * Chỉ so văn bản render ra, không so id: hai cột là hai vị trí khác nhau trong
 * cây nên hydrate id khác nhau là đúng.
 */
import { describe, expect, it } from 'vitest';
import { BASE, launchBrowser, openHydrated, probeServer, waitDomSettled } from './support';

const serverUp = await probeServer('/demo/tag-directives');

/** Chữ nhìn thấy được của một cột, đã chuẩn hoá khoảng trắng. */
async function readColumn(page: any, scope: string): Promise<string> {
    return page.evaluate((sel: string) => {
        const root = document.querySelector(`#${sel}`) as HTMLElement;
        // Bỏ <h2> — nó cố ý khác nhau (tên hai mặt chữ).
        const parts: string[] = [];
        for (const el of Array.from(root.children)) {
            if (el.tagName === 'H2') continue;
            parts.push((el as HTMLElement).innerText.replace(/\s+/g, ' ').trim());
        }
        return parts.join(' | ');
    }, scope);
}

async function bothColumns(page: any): Promise<[string, string]> {
    return [await readColumn(page, 'viaBlock'), await readColumn(page, 'viaTag')];
}

describe.skipIf(!serverUp)(`directive viết trên thẻ @ ${BASE}/demo/tag-directives`, () => {
    it('hai mặt chữ cho cùng kết quả ở mọi trạng thái', { timeout: 40_000 }, async () => {
        const browser = await launchBrowser();
        try {
            const { page, errors } = await openHydrated(browser, '/demo/tag-directives');

            // Trạng thái ban đầu đến từ SSR rồi được hydrate.
            const [block0, tag0] = await bothColumns(page);
            expect(tag0).toBe(block0);
            expect(block0).toContain('nhánh A');
            expect(block0).toContain('tab A');
            expect(block0).toContain('Hàng một');

            // `#if`/`#elseif`/`#else` và `#switch` cùng đổi theo `mode`.
            for (const [id, branch, tab] of [
                ['#btn-b', 'nhánh B', 'tab B'],
                ['#btn-x', 'nhánh khác', 'tab mặc định'],
                ['#btn-a', 'nhánh A', 'tab A'],
            ]) {
                await page.click(id);
                await waitDomSettled(page);
                const [block, tag] = await bothColumns(page);
                expect(tag, `sau ${id}`).toBe(block);
                expect(block).toContain(branch);
                expect(block).toContain(tab);
            }

            // `#for` — số lần lặp phụ thuộc state.
            await page.click('#btn-bump');
            await page.click('#btn-bump');
            await waitDomSettled(page);
            const [block2, tag2] = await bothColumns(page);
            expect(tag2, 'sau hai lần bump').toBe(block2);

            // `#if` LỒNG trong `#foreach` — đảo cờ của hàng đầu.
            await page.click('#btn-toggle');
            await waitDomSettled(page);
            const [block3, tag3] = await bothColumns(page);
            expect(tag3, 'sau khi đảo hàng một').toBe(block3);

            await page.click('#btn-toggle');
            await waitDomSettled(page);
            const [block4, tag4] = await bothColumns(page);
            expect(tag4, 'sau khi đảo lại').toBe(block4);
            // Về đúng trạng thái TRƯỚC khi đảo — không phải trạng thái đầu
            // trang, vì `n` vẫn giữ hai lần bump ở trên.
            expect(block4, 'đảo hai lần thì quay lại như cũ').toBe(block2);

            expect(errors, 'console không được có lỗi').toEqual([]);
        } finally {
            await browser.close();
        }
    });
});
