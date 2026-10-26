// Responsive audit over CDP: node responsive-audit.mjs <url>. Launches headless Chrome, emulates 12 widths (320–2560),
// reports horizontal overflow, elements outside the viewport, touch targets under 44 px, smallest font, heading axis and mobile menu.
import { spawn } from 'node:child_process';
import fs from 'node:fs';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const URL = process.argv[2] || 'http://127.0.0.1:3604/';
const OUT = process.env.LOCALAPPDATA + '/Temp/resp';
fs.mkdirSync(OUT, { recursive: true });
const sizes = [[320, 568], [360, 740], [390, 844], [414, 896], [600, 960], [768, 1024], [820, 1180], [1024, 768], [1280, 800], [1440, 900], [1920, 1080], [2560, 1440]];

const proc = spawn(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--remote-debugging-port=9333', '--user-data-dir=' + OUT + '/prof', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let targets;
for (let i = 0; i < 40; i++) { try { targets = await (await fetch('http://127.0.0.1:9333/json')).json(); break; } catch { await sleep(250); } }
const ws = new WebSocket(targets.find((t) => t.type === 'page').webSocketDebuggerUrl);
await new Promise((r) => ws.addEventListener('open', r));
let id = 0; const pending = new Map();
ws.addEventListener('message', (e) => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } });
const cdp = (method, params = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const evalJs = async (expr) => (await cdp('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true })).result.result.value;

const probe = `(() => {
  const vw = document.documentElement.clientWidth, issues = [];
  document.querySelectorAll('.sec,.band').forEach(el => el.style.setProperty('--s', 1));
  if (document.documentElement.scrollWidth > vw) issues.push('scrollWidth ' + document.documentElement.scrollWidth + ' > ' + vw);
  const vis = el => { const cs = getComputedStyle(el); return cs.display !== 'none' && cs.visibility !== 'hidden' && el.getClientRects().length; };
  for (const el of document.querySelectorAll('main *, header *, footer *')) {
    if (!vis(el) || el.closest('dialog') || el.closest('.review')) continue;
    const b = el.getBoundingClientRect();
    if (b.width && (b.right > vw + 1 || b.left < -1) && !el.closest('.band')) issues.push('overflow ' + el.tagName.toLowerCase() + '.' + el.className + ' ' + Math.round(b.left) + '..' + Math.round(b.right));
    if (el.scrollWidth > el.clientWidth + 1 && getComputedStyle(el).overflowX === 'visible' && el.clientWidth && /^(H1|H2|H3|P|A|SUMMARY|LI|B|SPAN)$/.test(el.tagName)) issues.push('text wider than box ' + el.tagName + ' "' + el.textContent.trim().slice(0, 30) + '"');
  }
  const small = [];
  for (const el of document.querySelectorAll('a, button, summary')) {
    if (!vis(el) || el.closest('dialog') || el.closest('.review') || el.closest('.qa p, .sos, .lines p')) continue;
    const b = el.getBoundingClientRect(); if (b.height < 44 || b.width < 24) small.push(el.textContent.trim().slice(0, 24) + ' ' + Math.round(b.width) + 'x' + Math.round(b.height));
  }
  let minFont = 99, minEl = '';
  for (const el of document.querySelectorAll('main *, footer *')) { if (!vis(el) || !el.childNodes.length || ![...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())) continue; const f = parseFloat(getComputedStyle(el).fontSize); if (f < minFont) { minFont = f; minEl = el.tagName + ' ' + el.textContent.trim().slice(0, 20); } }
  const axis = [...document.querySelectorAll('.sec h2,.band h2,.hero h1')].map(h => { const b = h.getBoundingClientRect(); return Math.round(b.left + b.width / 2 - vw / 2); });
  const h1 = document.querySelector('.hero h1').getBoundingClientRect(), hero = document.querySelector('.hero').getBoundingClientRect();
  return { vw, issues: [...new Set(issues)].slice(0, 12), small, minFont, minEl, axisOffsets: [...new Set(axis)], heroFits: Math.round(hero.height) + 'px hero, h1 ' + Math.round(h1.width) + 'px wide', menuBtn: vis(document.getElementById('openMenu')) ? 'menu button' : 'full nav', pageH: document.documentElement.scrollHeight };
})()`;

const results = [];
for (const [w, h] of sizes) {
  const mobile = w < 900;
  await cdp('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile });
  await cdp('Page.navigate', { url: URL });
  await sleep(1800);
  const r = await evalJs(probe);
  if (mobile) {
    r.menu = await evalJs(`(async()=>{document.getElementById('openMenu').click();await new Promise(r=>setTimeout(r,300));const d=document.getElementById('menu');const b=d.getBoundingClientRect();const ok=d.open;const links=[...d.querySelectorAll('a')].filter(a=>a.getBoundingClientRect().height<44).length;document.getElementById('closeMenu').click();return {opens:ok,width:Math.round(b.width),smallLinks:links,closes:!d.open}})()`);
  }
  results.push({ size: w + 'x' + h, ...r });
  const shot = await cdp('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(`${OUT}/top-${w}.png`, Buffer.from(shot.result.data, 'base64'));
}
console.log(JSON.stringify(results, null, 1));
ws.close(); proc.kill();
