import fs from 'node:fs';
const board = fs.readFileSync('docs/design-proposals/board.html', 'utf8');
const faces = [...board.matchAll(/@font-face\{[^}]+\}/g)].map(x=>x[0]).join('\n');
let html = fs.readFileSync('docs/design-proposals/prototype-a.template.html','utf8').replace('/* FONT_FACES */',faces);
html = html.replace('LOGO_ASSET','data:image/svg+xml;base64,'+fs.readFileSync('public/brand/alesvia-lockup-horizontal.svg').toString('base64'));
// Portable file uses a relative asset; inline T3 rendering replaces this with the same absolute local file.
html = html.replace('PROJECT_ASSET','../../public/previews/unplugged-home.png');
fs.writeFileSync('docs/design-proposals/prototype-a.html',html);
console.log('Wrote prototype A; existing logo and embedded fonts, no application changes.');
