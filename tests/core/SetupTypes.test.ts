// @vitest-environment node
import { expect, it } from 'vitest';
import { createRequire } from 'node:module';
import path from 'node:path';

const require = createRequire(import.meta.url);
const ts = require(require.resolve('typescript', { paths: [require.resolve('@saolabs/client')] }));
const root = path.resolve(__dirname, '../..');
const view = path.join(root, 'resources/js/saola/web/views/modules/demo/setup.ts');

it('setup declarations preserve strict types, including a type imported from another file', () => {
    const config = ts.readConfigFile(path.join(root, 'tsconfig.setup.json'), ts.sys.readFile);
    expect(config.error).toBeUndefined();
    const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, root);
    expect(parsed.errors).toEqual([]);
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
    expect(check(s => s.replace('setCount(count + step)', "setCount('wrong')")).length).toBeGreaterThan(0);
    expect(check(s => s.replace("setStatus('stable')", "setStatus('unknown')")).length).toBeGreaterThan(0);
}, 20000);
