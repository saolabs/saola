// @vitest-environment node
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import type { Browser } from 'playwright';
import { BASE, collectErrors, launchBrowser, probeServer, waitHydrated } from './support';

const serverUp = await probeServer('/demo/setup');
let browser: Browser;
beforeAll(async () => { if (serverUp) browser = await launchBrowser(); });
afterAll(async () => { await browser?.close(); });

describe.skipIf(!serverUp)('declarations inside setup', () => {
    it('hydrates shared state, computed values and the imported view, then handles events', async () => {
        const page = await browser.newPage();
        const errors = collectErrors(page);
        try {
            // Docker bind mounts can miss Vite's file-change events. Request a
            // fresh transform of the generated fixture, still using the real server.
            await page.route(/\/views\/modules\/demo\/setup\.[jt]s(?:\?.*)?$/, route => {
                const url = new URL(route.request().url());
                url.searchParams.set('setup-e2e', String(Date.now()));
                return route.continue({ url: url.href });
            });
            await page.goto(`${BASE}/demo/setup`);
            await waitHydrated(page);
            await page.waitForSelector('.code-block code .token.keyword');
            expect(await page.locator('#setup-count').innerText()).toBe('0');
            expect(await page.locator('.code-block code .token.keyword').count()).toBeGreaterThan(0);
            expect(await page.locator('.cmp-slot strong').innerText()).toBe('SSR + client');
            await page.locator('#setup-increment').click();
            await page.waitForFunction(() => document.querySelector('#setup-doubled')?.textContent === '2');
            expect(await page.locator('#setup-count').innerText()).toBe('1');
            await page.locator('#setup-stable').click();
            await page.waitForFunction(() => document.querySelector('#setup-status')?.textContent === 'stable');
            await page.locator('#setup-reset').click();
            await page.waitForFunction(() => document.querySelector('#setup-doubled')?.textContent === '0');
            expect(await page.locator('#setup-status').innerText()).toBe('Tất cả');
            expect(errors).toEqual([]);
        } finally { await page.close(); }
    }, 30000);
});
