export type GridStatus = 'stable' | 'beta' | 'deprecated';
export type GridStatusFilter = '' | GridStatus;
export type GridSort = 'name' | 'downloads' | 'updated' | 'status';
export type GridDirection = 'asc' | 'desc';

export interface GridRow {
    id: number;
    name: string;
    downloads: number;
    downloadsText: string;
    updated: string;
    status: GridStatus;
    statusText: string;
}

export interface GridStatusOption { key: GridStatus; label: string }
export interface GridQuery {
    q: string;
    status: GridStatusFilter;
    sort: GridSort;
    dir: GridDirection;
    page: number;
}

export interface GridPageData {
    rows: GridRow[];
    total: number;
    totalText: string;
    page: number;
    pages: number;
    from: number;
    to: number;
    sort: GridSort;
    dir: GridDirection;
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
    typeof value === 'object' && value !== null && !Array.isArray(value);
const isCount = (value: unknown): value is number =>
    typeof value === 'number' && Number.isSafeInteger(value) && value >= 0;
const isSort = (value: unknown): value is GridSort =>
    value === 'name' || value === 'downloads' || value === 'updated' || value === 'status';
const isStatus = (value: unknown): value is GridStatus =>
    value === 'stable' || value === 'beta' || value === 'deprecated';
const isRow = (value: unknown): value is GridRow => isRecord(value)
    && isCount(value.id) && typeof value.name === 'string'
    && isCount(value.downloads) && typeof value.downloadsText === 'string'
    && typeof value.updated === 'string' && isStatus(value.status)
    && typeof value.statusText === 'string';

/** JSON is unknown until checked; malformed responses must not partially update the table. */
export function parseGridPageData(value: unknown): GridPageData {
    if (!isRecord(value) || !Array.isArray(value.rows) || !value.rows.every(isRow)
        || !isCount(value.total) || typeof value.totalText !== 'string'
        || !isCount(value.page) || value.page < 1 || !isCount(value.pages) || value.pages < value.page
        || !isCount(value.from) || !isCount(value.to) || value.to < value.from
        || !isSort(value.sort)
        || (value.dir !== 'asc' && value.dir !== 'desc')) {
        throw new Error('Phản hồi bảng dữ liệu không đúng định dạng.');
    }
    return {
        rows: value.rows, total: value.total, totalText: value.totalText,
        page: value.page, pages: value.pages, from: value.from, to: value.to,
        sort: value.sort, dir: value.dir,
    };
}
