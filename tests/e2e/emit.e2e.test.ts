// @vitest-environment node
/**
 * Sự kiện con → cha, trên trình duyệt thật.
 *
 * Trang `/demo/emit` dựng CÙNG một view con bằng hai mặt chữ — thẻ component và
 * `@include` với khoá `on$`. Bài này chạy đúng một kịch bản trên từng cột rồi
 * SO HAI KẾT QUẢ: hai cách viết mà lệch nhau thì đỏ, không cần biết vì sao.
 */
import { describe, expect, it } from 'vitest';
import { BASE, launchBrowser, openHydrated, probeServer } from './support';

const serverUp = await probeServer('/demo/emit');

/** Bấm hết một lượt trong một cột rồi đọc toàn bộ readout của cha. */
async function runColumn(page: any, scope: string) {
    await page.evaluate((sel: string) => {
        const rows = document.querySelectorAll(`#${sel} .em-row`);
        const click = (i: number, cls: string) =>
            (rows[i].querySelector(cls) as HTMLElement).click();
        click(0, '.em-pick');     // emit('pick', 1)               → payload đơn
        click(1, '.em-rename');   // emit('rename', 2, '…')        → HAI payload
        click(0, '.em-tag');      // emit('row:tagged', {id, tag}) → @on + gỡ rối
        click(0, '.em-bump');     // emit('bump')                  → tham chiếu trần
        click(1, '.em-bump');
        click(0, '.em-close');    // cha đồng ý  → close(1, …)
        click(2, '.em-close');    // cha từ chối → refused(3, …)
    }, scope);

    await page.waitForTimeout(120);

    return page.evaluate(() => {
        const text = (id: string) => document.querySelector('#' + id)!.textContent!.trim();

        return {
            picked: text('out-picked'),
            note: text('out-note'),
            bumps: text('out-bumps'),
            tags: text('out-tags'),
            // Bỏ nhãn nguồn để so được hai cột với nhau
            log: [...document.querySelectorAll('#out-log li')]
                .map((li) => li.textContent!.replace(/thẻ|include|cháu/g, '·')),
        };
    });
}

describe.skipIf(!serverUp)(`sự kiện con → cha @ ${BASE}/demo/emit`, () => {
    it('mọi dạng handler chạy đúng; ba cột — kể cả qua tầng trung gian — cho CÙNG kết quả', { timeout: 40_000 }, async () => {
        const browser = await launchBrowser();
        try {
            const viaTag = await (async () => {
                const { page, errors } = await openHydrated(browser, '/demo/emit');
                const result = await runColumn(page, 'viaTag');
                expect(errors, 'lỗi console ở cột thẻ').toEqual([]);
                await page.context().close();

                return result;
            })();

            expect(viaTag).toEqual({
                picked: '1',
                // arrow thân khối: setNote(...) rồi write(...)
                note: 'đã đóng #1',
                // tham chiếu trần, emit không payload, gọi hai lần
                bumps: '2',
                // @on('row:tagged', ({id, tag}) => …) — tên có ':', tham số gỡ rối
                tags: '1:nóng',
                log: [
                    // (id, title) => … nhận ĐỦ hai payload
                    'rename(2, Hàng hai (đã sửa))',
                    // emit trả về true  → con đóng
                    'close(1, ·)',
                    // emit trả về false → con dừng và báo lại
                    'refused(3, ·)',
                ],
            });

            for (const scope of ['viaInclude', 'viaGrandchild']) {
                const { page, errors } = await openHydrated(browser, '/demo/emit');
                const result = await runColumn(page, scope);
                expect(errors, `lỗi console ở cột ${scope}`).toEqual([]);
                // viaGrandchild đi qua MỘT tầng trung gian chỉ chuyển tiếp
                // (`@pick($view.emit)`) — kết quả vẫn phải y hệt, kể cả giá trị
                // TRẢ VỀ của `confirm` (hàng #3 bị từ chối đóng).
                expect(result, `${scope} phải cho cùng kết quả với thẻ component`).toEqual(viaTag);
                await page.context().close();
            }
        } finally {
            await browser.close();
        }
    });
});
