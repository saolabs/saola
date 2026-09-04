// @vitest-environment node
import { expect, it } from 'vitest';
import { BASE, launchBrowser, openHydrated, probeServer, waitHydrated } from './support';

const serverUp = await probeServer('/todo-list');

it.skipIf(!serverUp)('persists todos through SSR, hydration, @await navigation and same-URL refresh', { timeout: 60_000 }, async () => {
    const browser = await launchBrowser();
    const { page, errors } = await openHydrated(browser, '/todo-list');
    const text = 'Todo persistence E2E ' + Date.now();
    let id: number | undefined;
    try {
        const created = page.waitForResponse(r => r.url().endsWith('/todo-list') && r.request().method() === 'POST');
        await page.fill('#new-task', text);
        await page.getByRole('button', { name: 'Add task' }).click();
        const response = await created;
        expect(response.status()).toBe(201);
        id = (await response.json()).data.initialTodos.find((todo: any) => todo.text === text).id;
        await page.waitForFunction(t => [...document.querySelectorAll('.todo-row strong')].some(el => el.textContent === t), text);

        const ssr = await (await fetch(`${BASE}/todo-list`)).text();
        expect(ssr).toContain(text);
        let hydrateFetches = 0;
        page.on('request', r => {
            if (r.resourceType() === 'fetch' && new URL(r.url()).pathname === '/todo-list' && r.method() === 'GET') hydrateFetches++;
        });
        await page.reload();
        await waitHydrated(page);
        expect(await page.locator('.todo-row').filter({ hasText: text }).count()).toBe(1);
        expect(hydrateFetches).toBe(0);

        const row = page.locator('.todo-row').filter({ hasText: text });
        await row.getByRole('button', { name: 'Toggle task' }).click();
        await page.waitForFunction(t => [...document.querySelectorAll('.todo-row.completed')].some(el => el.textContent?.includes(t)), text);

        const refreshed = page.waitForResponse(r => new URL(r.url()).pathname === '/todo-list' && r.request().method() === 'GET');
        await page.getByRole('button', { name: 'Refresh list' }).click();
        const refresh = await refreshed;
        expect(refresh.request().headers()['x-sao-response']).toBe('json');
        expect(refresh.headers()['content-type']).toContain('application/json');
        expect(new URL(refresh.url()).search).toBe('');
        await page.waitForLoadState('networkidle');

        // Start elsewhere so the return navigation must use @await, with no cached todo view.
        await page.goto(`${BASE}/about`);
        await waitHydrated(page);
        await page.evaluate(() => ((window as any).__TODO_SPA__ = true));
        const awaited = page.waitForResponse(r => new URL(r.url()).pathname === '/todo-list' && r.request().method() === 'GET');
        await page.locator('a[href="/todo-list"]:visible').first().click();
        const loaded = await awaited;
        expect(loaded.request().resourceType()).toBe('fetch');
        expect(loaded.request().headers()['x-sao-response']).toBe('json');
        await page.waitForFunction(t => [...document.querySelectorAll('.todo-row.completed')].some(el => el.textContent?.includes(t)), text);
        expect(await page.evaluate(() => (window as any).__TODO_SPA__)).toBe(true);

        await page.locator('.todo-row').filter({ hasText: text }).hover();
        const removed = page.waitForResponse(r => r.request().method() === 'DELETE' && r.url().endsWith('/todo-list/' + id));
        await page.locator('.todo-row').filter({ hasText: text }).getByRole('button', { name: 'Delete task' }).click();
        expect((await removed).status()).toBe(200);
        await page.waitForFunction(t => ![...document.querySelectorAll('.todo-row')].some(el => el.textContent?.includes(t)), text);
        id = undefined;
        expect(errors).toEqual([]);
    } finally {
        if (id !== undefined) {
            const token = await page.locator('meta[name="csrf-token"]').getAttribute('content');
            await page.request.delete(`${BASE}/todo-list/${id}`, { headers: { Accept: 'application/json', 'X-CSRF-TOKEN': token || '' } });
        }
        await browser.close();
    }
});
