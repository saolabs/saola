// @vitest-environment node
import { expect, it } from 'vitest';
import { createRequire } from 'node:module';
import path from 'node:path';

// The linked client package provides the ecosystem's TypeScript toolchain.
const require = createRequire(import.meta.url);
const ts = require(require.resolve('typescript', { paths: [require.resolve('@saolabs/client')] }));
const root = path.resolve(__dirname, '../..');
const view = path.join(root, 'resources/js/saola/web/views/modules/grid/index.ts');

it('Grid compiles in strict mode and rejects incorrect state, row and query values', () => {
    const config = ts.readConfigFile(path.join(root, 'tsconfig.grid.json'), ts.sys.readFile);
    const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, root);
    const check = (replace?: (source: string) => string) => {
        const host = ts.createCompilerHost(parsed.options);
        const read = host.readFile.bind(host);
        host.readFile = (file: string) => {
            const source = read(file);
            if (file !== view || !replace || source === undefined) return source;
            const changed = replace(source);
            expect(changed).not.toBe(source);
            return changed;
        };
        return ts.getPreEmitDiagnostics(ts.createProgram(parsed.fileNames, parsed.options, host));
    };
    expect(check().map((d: { messageText: unknown }) => ts.flattenDiagnosticMessageText(d.messageText, '\n'))).toEqual([]);
    expect(check(s => s.replace('setPageNo(data.page)', "setPageNo('two')")).length).toBeGreaterThan(0);
    expect(check(s => s.replace('setItems(data.rows)', 'setItems([{ id: 1 }])')).length).toBeGreaterThan(0);
    expect(check(s => s.replace('this.fetch({ sort: key, dir, page: 1 })', "this.fetch({ sort: 'invalid', dir, page: 1 })")).length).toBeGreaterThan(0);
    expect(check(s => s.replace('this.goTo(pageNo - 1)', "this.goTo('two')")).length).toBeGreaterThan(0);
    expect(check(s => s.replace('this._disposed = true', "this._disposed = 'yes'")).length).toBeGreaterThan(0);
    expect(check(s => s.replace('this.goTo(pageNo - 1)', 'this.goToo(pageNo - 1)')).length).toBeGreaterThan(0);
}, 20000);
