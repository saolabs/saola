// @vitest-environment node
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import type { Browser } from 'playwright';
import { launchBrowser, openHydrated, probeServer } from './support';

const serverUp = await probeServer('/demo/grid');
let browser: Browser;
beforeAll(async () => { if (serverUp) browser = await launchBrowser(); });
afterAll(async () => { await browser?.close(); });

describe.skipIf(!serverUp)('typed Grid: real SSR, hydration and interactions', { timeout: 60000 }, () => {
    it('hydrates the server rows, paginates, sorts, filters and handles an empty search', async () => {
        const { page, errors } = await openHydrated(browser, '/demo/grid');
        try {
            expect(await page.locator('tbody tr').count()).toBe(25);
            expect(await page.locator('.gr-page').innerText()).toBe('Trang 1 / 152');
            expect(await page.getByRole('button', { name: '‹ Trước', exact: true }).isDisabled()).toBe(true);
            await page.getByRole('button', { name: 'Sau ›', exact: true }).click();
            await page.waitForFunction(() => document.querySelector('.gr-page')?.textContent?.includes('Trang 2 /'));
            expect(await page.getByRole('button', { name: '‹ Trước', exact: true }).isEnabled()).toBe(true);
            await page.locator('th button').first().click();
            await page.waitForFunction(() => document.querySelector('th button')?.textContent?.includes('▼'));
            expect(await page.locator('.gr-page').innerText()).toBe('Trang 1 / 152');
            await page.locator('.gr-filters button').nth(1).click();
            await page.waitForFunction(() => Array.from(document.querySelectorAll('tbody .gr-tag')).every(el => el.classList.contains('is-stable')));
            expect(await page.locator('tbody tr').count()).toBeGreaterThan(0);
            await page.getByRole('searchbox', { name: 'Tìm gói' }).fill('saola-no-such-package-xyz');
            await page.waitForSelector('.gr-empty');
            expect(await page.locator('tbody tr').count()).toBe(0);
            expect(await page.getByRole('button', { name: 'Sau ›', exact: true }).isDisabled()).toBe(true);
            expect(await page.getByRole('button', { name: '‹ Trước', exact: true }).isDisabled()).toBe(true);
            expect(errors).toEqual([]);
        } finally { await page.close(); }
    });

    it('rejects malformed JSON without replacing valid rows, then recovers', async () => {
        const { page, errors } = await openHydrated(browser, '/demo/grid');
        try {
            const before = await page.locator('tbody').innerText();
            await page.route('**/demo/grid?**', route => route.fulfill({
                status: 200, contentType: 'application/json', body: JSON.stringify({ data: { rows: 'invalid' } }),
            }));
            await page.getByRole('button', { name: 'Sau ›', exact: true }).click();
            await page.waitForSelector('.gr-error');
            expect(await page.locator('.gr-error').innerText()).toContain('không đúng định dạng');
            expect(await page.locator('tbody').innerText()).toBe(before);
            await page.unroute('**/demo/grid?**');
            await page.getByRole('button', { name: 'Sau ›', exact: true }).click();
            await page.waitForFunction(() => document.querySelector('.gr-page')?.textContent?.includes('Trang 2 /'));
            expect(await page.locator('.gr-error').count()).toBe(0);
            expect(errors).toEqual([]);
        } finally { await page.close(); }
    });

    it('ignores an older response that arrives after the latest search', async () => {
        const { page, errors } = await openHydrated(browser, '/demo/grid');
        let release!: () => void;
        const delayed = new Promise<void>(resolve => { release = resolve; });
        let started!: () => void;
        const intercepted = new Promise<void>(resolve => { started = resolve; });
        let finished!: () => void;
        const fulfilled = new Promise<void>(resolve => { finished = resolve; });
        try {
            await page.route('**/demo/grid?**', async route => {
                if (new URL(route.request().url()).searchParams.get('q') !== 'core') return route.continue();
                const response = await route.fetch();
                started();
                await delayed;
                await route.fulfill({ response });
                finished();
            });
            const input = page.getByRole('searchbox', { name: 'Tìm gói' });
            await input.fill('core');
            await intercepted;
            await input.fill('saola-no-such-package-xyz');
            await page.waitForSelector('.gr-empty');
            release();
            await fulfilled;
            await page.waitForLoadState('networkidle');
            expect(await page.locator('tbody tr').count()).toBe(0);
            expect(await page.locator('.gr-page').innerText()).toBe('Trang 1 / 1');
            expect(await input.inputValue()).toBe('saola-no-such-package-xyz');
            expect(errors).toEqual([]);
        } finally { release(); await page.close(); }
    });
});
