import { chromium } from 'playwright';
const BASE = 'http://localhost:8686';
const PATHS = ['/', '/about', '/docs', '/demo', '/todo-list', '/docs/getting-started'];
const b = await chromium.launch();
const VIEWID = /^[vc][0-9a-z]{0,3}$/;
function normIds(s) {
  const ids = new Set();
  for (const m of s.matchAll(/<!--s:[a-z]+:([^\s>]+?)-[se]-->/g)) ids.add(m[1].split('-')[0]);
  for (const m of s.matchAll(/class="([^"]*)"/g))
    for (const t of m[1].split(/\s+/)) if (t.includes('-')) ids.add(t.split('-')[0]);
  const list = [...ids].filter(x => VIEWID.test(x));
  const at = (id) => { const m = s.match(new RegExp(`(^|[\\s":])${id}-`)); return m ? m.index : Infinity; };
  list.map(id => [at(id), id]).sort((a,b)=>a[0]-b[0])
      .forEach(([, id], i) => { s = s.replace(new RegExp(`(^|[\\s":])${id}-`, 'g'), `$1V${i}-`); });
  return s;
}
const loose = (s) => normIds(s).replace(/>\s+</g, '><').replace(/[ \t]+/g, ' ').trim();
const markers = (s) => [...s.matchAll(/<!--(s:[^>]*?)-->/g)].map(m => m[1]);
const only = (x, y) => x.filter(v => !y.includes(v));
const grab = () => document.getElementById('app-root')?.innerHTML ?? '';
for (const PATH of PATHS) {
  const p1 = await b.newPage();
  await p1.goto(BASE + PATH);
  await p1.waitForFunction(() => Boolean(window.App)); await p1.waitForLoadState('networkidle'); await p1.waitForTimeout(700);
  const hyd = await p1.evaluate(grab); await p1.close();
  const p2 = await b.newPage();
  await p2.goto(BASE + (PATH === '/' ? '/about' : '/'));
  await p2.waitForFunction(() => Boolean(window.App)); await p2.waitForLoadState('networkidle');
  await p2.evaluate((path) => window.App.Router.push(path), PATH);
  await p2.waitForFunction((path) => location.pathname === path, PATH).catch(()=>{});
  await p2.waitForLoadState('networkidle'); await p2.waitForTimeout(700);
  const csr = await p2.evaluate(grab); await p2.close();
  const A = loose(hyd), C = loose(csr);
  const oa = [...new Set(only(markers(A), markers(C)))], oc = [...new Set(only(markers(C), markers(A)))];
  console.log(`\n=== ${PATH}  ${A===C?'KHỚP':'LỆCH'}`);
  if (oa.length) console.log('  marker chỉ hydrate:', oa.slice(0,6));
  if (oc.length) console.log('  marker chỉ CSR:', oc.slice(0,6));
  if (A !== C) { const A2=A.replace(/<!--s:b:[^>]*?-[se]-->/g,''), C2=C.replace(/<!--s:b:[^>]*?-[se]-->/g,'');
    console.log('  bỏ marker block →', A2===C2?'KHỚP':'vẫn lệch');
    if (A2!==C2){ let i=0; while(i<A2.length&&A2[i]===C2[i])i++;
      console.log('   HYD:', JSON.stringify(A2.slice(i,i+120))); console.log('   CSR:', JSON.stringify(C2.slice(i,i+120))); } }
}
await b.close();
