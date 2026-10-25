import fs from 'node:fs';
const dir='docs/design-proposals/';
const fontCSS=['system-pairs.css','soft-serifs.css'].flatMap(name=>[...fs.readFileSync(dir+'fonts/'+name,'utf8').matchAll(/@font-face\s*\{[^}]+\}/g)].map(m=>m[0])).filter(face=>/font-family: '(Figtree|Literata)'/.test(face)).join('\n').replace(/url\(([^)]+\.woff2)\)/g,(_,name)=>'url(data:font/woff2;base64,'+fs.readFileSync(dir+'fonts/'+name).toString('base64')+')');
const html=fs.readFileSync(dir+'hero-alternatives.template.html','utf8').replace('/* FONTS */',fontCSS).replace('LOGO','data:image/svg+xml;base64,'+fs.readFileSync('public/brand/alesvia-lockup-horizontal.svg').toString('base64'));
fs.writeFileSync(dir+'hero-alternatives.html',html);
console.log('Built portable hero comparison with original logo and local Figtree/Literata.');
