import { describe, expect, it } from 'vitest';
import { parseGridPageData } from '../../resources/saola/web/app/services/GridData';

const page = {
    rows: [{ id: 1, name: '@saola/core', downloads: 100, downloadsText: '100', updated: '2026-09-05', status: 'stable', statusText: 'Ổn định' }],
    total: 1, totalText: '1', page: 1, pages: 1, from: 1, to: 1, sort: 'downloads', dir: 'desc',
};

describe('Grid JSON boundary', () => {
    it('accepts a populated page and the empty search result', () => {
        expect(parseGridPageData(page)).toEqual(page);
        expect(parseGridPageData({ ...page, rows: [], total: 0, totalText: '0', from: 0, to: 0 }).rows).toEqual([]);
    });
    it.each([
        null,
        { ...page, rows: [{ ...page.rows[0], id: '1' }] },
        { ...page, rows: [{ ...page.rows[0], status: 'unknown' }] },
        { ...page, page: 2 },
        { ...page, sort: {} },
        { ...page, dir: 'sideways' },
    ])('rejects malformed data before it reaches typed state', value => {
        expect(() => parseGridPageData(value)).toThrow('không đúng định dạng');
    });
});
