import fs from 'node:fs';
const board = fs.readFileSync('docs/design-proposals/board.html', 'utf8');
const faces = [...board.matchAll(/@font-face\{[^}]+\}/g)].map(x=>x[0]).join('\n');
let html = fs.readFileSync('docs/design-proposals/prototype-a.template.html','utf8').replace('/* FONT_FACES */',faces);
// Soft display candidates (Fraunces, Literata; OFL, latin + latin-ext) for the motto comparison.
const soft = fs.readFileSync('docs/design-proposals/fonts/soft-serifs.css','utf8').replace(/url\(([^)]+\.woff2)\)/g,(_,f)=>'url(data:font/woff2;base64,'+fs.readFileSync('docs/design-proposals/fonts/'+f).toString('base64')+')');
html = html.replace('/* SOFT_FACES */',soft);
// Type-system pairings (Figtree, Onest, Nunito, Source Sans 3; OFL, latin + latin-ext).
const pairs = fs.readFileSync('docs/design-proposals/fonts/system-pairs.css','utf8').replace(/url\(([^)]+\.woff2)\)/g,(_,f)=>'url(data:font/woff2;base64,'+fs.readFileSync('docs/design-proposals/fonts/'+f).toString('base64')+')');
html = html.replace('/* PAIR_FACES */',pairs);
html = html.replace('LOGO_ASSET','data:image/svg+xml;base64,'+fs.readFileSync('public/brand/alesvia-lockup-horizontal.svg').toString('base64'));
// Portable file uses a relative asset; inline T3 rendering replaces this with the same absolute local file.
html = html.replace('PROJECT_ASSET','../../public/previews/unplugged-home.png');
fs.writeFileSync('docs/design-proposals/prototype-a.html',html);
console.log('Wrote prototype A; existing logo and embedded fonts, no application changes.');
