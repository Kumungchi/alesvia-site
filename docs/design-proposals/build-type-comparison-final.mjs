import fs from 'node:fs';
// Side-by-side type specimen for choosing the Alesvia heading/body pairing.
// Embeds the same OFL files as prototype A (latin + latin-ext), so it works offline.
const dir = 'docs/design-proposals/fonts/';
const embed = (css) => css.replace(/url\(([^)]+\.woff2)\)/g, (_, f) => 'url(data:font/woff2;base64,' + fs.readFileSync(dir + f).toString('base64') + ')');
const faces = embed(fs.readFileSync(dir + 'system-pairs.css', 'utf8')) + embed(fs.readFileSync(dir + 'soft-serifs.css', 'utf8'));

const systems = [
  { id: "A", name: "Nunito + Source Sans 3", h: "Nunito", b: "'Source Sans 3', sans-serif", hw: 800, note: "Tučné zaoblené nadpisy (800) blízko původnímu webu, klidný bezpatkový text." },
  { id: "B", name: "Figtree + Literata", h: "Figtree", b: "Literata, Georgia, serif", hw: 700, note: "Tučné geometrické nadpisy (700), knižní patkový text s jasným kontrastem." },
];

const column = (s) => `
<section class="col" style="--h:${s.h};--b:${s.b};--hw:${s.hw}">
  <header><span class="num">${s.id}</span><h2>${s.name}</h2><p class="note">${s.note}</p></header>
  <p class="label">Motto</p>
  <p class="motto">Lidská autonomie <span>je základ.</span></p>
  <p class="label">Detail písmen (nadpis)</p>
  <p class="glyphs">agR ěřů</p>
  <p class="label">Nadpis sekce + stav</p>
  <h3>Od otázek ke konkrétní práci.</h3>
  <p class="status">● Aktivní projekt · V přípravě</p>
  <p class="label">Text (17 px)</p>
  <p class="body">Unplugged pomáhá lidem nastavovat zdravé hranice s konverzační AI – srozumitelně a bez moralizování. AI může působit osobně, ale není osobou. Plynulá konverzace není totéž co vztah.</p>
  <p class="label">Dlouhé čtení (článek, 19 px)</p>
  <p class="long">Příliš žluťoučký kůň úpěl ďábelské ódy. Lidská blízkost je pomalejší, náročnější a právě proto skutečná. Empatický tón není důkazem vědomí ani porozumění.</p>
  <p class="label">Tlačítka</p>
  <p class="buttons"><span class="btn">Pro instituce a partnery →</span> <span class="btn ghost">Poznat naše směry</span></p>
</section>`;

const html = `<!doctype html><html lang="cs"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Alesvia — srovnání typografických systémů</title><style>
${faces}
*{box-sizing:border-box}body{margin:0;background:#f9f9f8;color:#221e22;font:15px/1.5 system-ui,sans-serif;padding:28px}
h1{font:600 22px system-ui,sans-serif;margin:0 0 6px}.intro{margin:0 0 22px;color:#595260;max-width:80ch}
.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}
.col{background:#fff;border:1px solid #d9d6dc;border-radius:12px;padding:20px}
.col header{border-bottom:1px solid #e3e0e6;padding-bottom:12px;margin-bottom:6px}
.num{display:inline-block;font:700 13px system-ui;background:#0f2c59;color:#fff;border-radius:6px;padding:2px 8px}
.col h2{font:600 17px system-ui,sans-serif;margin:8px 0 4px}.note{margin:0;font-size:13px;color:#595260}
.label{margin:16px 0 4px;font:600 11px system-ui;letter-spacing:.08em;text-transform:uppercase;color:#8a8390}
.motto{margin:0;font-family:var(--h);font-weight:var(--hw);font-size:64px;line-height:1.04;letter-spacing:-.025em}.motto span{color:#0f2c59}
.glyphs{margin:0;font-family:var(--h);font-weight:var(--hw);font-size:64px;line-height:1.1;letter-spacing:-.01em}
h3{margin:0;font-family:var(--h);font-weight:var(--hw);font-size:26px;line-height:1.15;letter-spacing:-.02em}
.status{margin:8px 0 0;font-family:var(--h);font-size:13px;color:#0f2c59}
.body{margin:0;font-family:var(--b);font-size:17px;line-height:1.6}
.long{margin:0;font-family:var(--b);font-size:19px;line-height:1.65}
.btn{display:inline-block;font-family:var(--h);font-weight:600;font-size:14px;background:#31263e;color:#fff;border-radius:8px;padding:11px 15px;margin:0 6px 6px 0}.btn.ghost{background:transparent;color:#0f2c59;box-shadow:inset 0 0 0 1px #9eaabc}
@media(max-width:1100px){.grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
</style></head><body>
<h1>Typografický systém Alesvie — finální dvojice</h1>
<p class="intro">Stejné texty, stejné velikosti. Nadpisové písmo: motto, detail písmen, nadpis, stav, tlačítka. Textové písmo: odstavec a dlouhé čtení. Všechna písma OFL, s plnou češtinou.</p>
<div class="grid">${systems.map(column).join('')}</div>
</body></html>`;

fs.writeFileSync('docs/design-proposals/type-comparison-final.html', html);
console.log('Wrote type-comparison-final.html');
