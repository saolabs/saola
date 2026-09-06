// @vitest-environment node
import { expect, it } from 'vitest';
import { BASE, launchBrowser, openHydrated, probeServer, waitHydrated } from './support';

const serverUp = await probeServer('/demo/board');

it.skipIf(!serverUp)('deletes a board card with JSON and CSRF request options', { timeout: 30_000 }, async () => {
    const browser = await launchBrowser();
    const { page, errors } = await openHydrated(browser, '/demo/board');
    const title = `Board delete regression ${Date.now()}`;
    let id: number | undefined;
    try {
        const created = page.waitForResponse(r => r.url().endsWith('/demo/board/card') && r.request().method() === 'POST');
        await page.getByLabel('Tiêu đề thẻ mới').fill(title);
        await page.locator('.kb-new button').click();
        const response = await created;
        expect(response.ok()).toBe(true);
        const columns = (await response.json()).data.columns;
        id = columns.flatMap((col: any) => col.cards).find((card: any) => card.title === title).id;
        const token = await page.locator('meta[name="csrf-token"]').getAttribute('content');
        expect(token).toBeTruthy();
        const deleted = page.waitForResponse(r => r.url().endsWith(`/demo/board/card/${id}`) && r.request().method() === 'DELETE');
        await page.locator('.kb-card').filter({ hasText: title }).getByRole('button', { name: 'Xoá', exact: true }).click();
        const removed = await deleted;
        expect(removed.request().headers()['x-sao-response']).toBe('json');
        expect(removed.request().headers()['x-csrf-token']).toBe(token);
        expect(removed.status()).toBe(200);
        await page.waitForLoadState('networkidle');
        expect(await page.locator('.kb-card').filter({ hasText: title }).count()).toBe(0);
        id = undefined;
        expect(errors).toEqual([]);
    } finally {
        if (id !== undefined) {
            const token = await page.locator('meta[name="csrf-token"]').getAttribute('content');
            await page.request.delete(`${BASE}/demo/board/card/${id}`, { headers: { Accept: 'application/json', 'X-CSRF-TOKEN': token || '' } });
        }
        await browser.close();
    }
});

it.skipIf(!serverUp)('cleans up slideshow timers and hover listeners across SPA navigation', { timeout: 30_000 }, async () => {
    const browser = await launchBrowser();
    const page = await browser.newPage();
    try {
        await page.addInitScript(() => {
            const active = new Set<number>();
            const schedule = window.setInterval.bind(window);
            const clear = window.clearInterval.bind(window);
            (window as any).__slideshowTimers = active;
            window.setInterval = ((handler: TimerHandler, delay?: number, ...args: any[]) => {
                const id = schedule(handler, delay, ...args);
                if (delay === 10000) active.add(id);
                return id;
            }) as typeof window.setInterval;
            window.clearInterval = (id?: number) => {
                if (id !== undefined) active.delete(id);
                clear(id);
            };
        });
        await page.goto(BASE);
        await waitHydrated(page);
        await page.waitForFunction(() => (window as any).__slideshowTimers.size === 1);
        await page.locator('.usecase-tab-container').dispatchEvent('mouseenter');
        expect(await page.evaluate(() => (window as any).__slideshowTimers.size)).toBe(0);
        await page.locator('.usecase-tab-container').dispatchEvent('mouseleave');
        expect(await page.evaluate(() => (window as any).__slideshowTimers.size)).toBe(1);
        await page.evaluate(() => {
            (window as any).__oldUsecase = document.querySelector('.usecase-tab-container');
        });
        await page.locator('a[href="/about"]:visible').first().click();
        await page.waitForURL(`${BASE}/about`);
        await page.waitForFunction(() => (window as any).__slideshowTimers.size === 0);
        // A detached/cached element must no longer start a timer through its old listener.
        expect(await page.evaluate(() => {
            const previous = (window as any).__oldUsecase;
            if (!previous) return -1; // A full document navigation would lose the sentinel.
            previous.dispatchEvent(new MouseEvent('mouseleave'));
            return (window as any).__slideshowTimers.size;
        })).toBe(0);
        await page.locator('a[href="/"]:visible').first().click();
        await page.waitForURL(`${BASE}/`);
        await page.waitForFunction(() => (window as any).__slideshowTimers.size === 1);
    } finally {
        await browser.close();
    }
});
