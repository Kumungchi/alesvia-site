import fs from 'node:fs';
// Self-contained clickable homepage proposal built on the original site's structure,
// colours and button roles, with the locked Figtree + Literata pairing.
const dir = 'docs/design-proposals/fonts/';
const embed = (css, families) => css
  .split(/(?=\/\* latin)/)
  .filter((block) => families.some((family) => block.includes(`'${family}'`)))
  .join('')
  .replace(/url\(([^)]+\.woff2)\)/g, (_, f) => 'url(data:font/woff2;base64,' + fs.readFileSync(dir + f).toString('base64') + ')');
const faces = embed(fs.readFileSync(dir + 'system-pairs.css', 'utf8'), ['Figtree'])
  + embed(fs.readFileSync(dir + 'soft-serifs.css', 'utf8'), ['Literata']);
const lockup = fs.readFileSync('public/brand/alesvia-lockup-horizontal.svg', 'utf8').replace('<svg ', '<svg role="img" aria-label="Alesvia" ');
const image = 'data:image/png;base64,' + fs.readFileSync('public/previews/unplugged-home.png').toString('base64');
const html = fs.readFileSync('docs/design-proposals/homepage-refined.template.html', 'utf8')
  .replace('/*FACES*/', faces)
  .replaceAll('LOCKUP_SVG', lockup)
  .replace('UNPLUGGED_IMG', image);
fs.writeFileSync('docs/design-proposals/homepage-refined.html', html);
console.log('Wrote homepage-refined.html', Math.round(html.length / 1024), 'kB');
