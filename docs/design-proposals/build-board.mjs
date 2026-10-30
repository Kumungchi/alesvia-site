// Build a portable design artifact from existing local font assets; no website changes.
import fs from 'node:fs';
import path from 'node:path';
const root = process.cwd();
const cssDirectory = path.join(root, '.next/static/chunks');
const faces = new Set();
for (const file of fs.readdirSync(cssDirectory).filter(file => file.endsWith('.css'))) {
  const css = fs.readFileSync(path.join(cssDirectory, file), 'utf8');
  for (const match of css.matchAll(/@font-face\{[^}]+\}/g)) {
    const face = match[0];
    if (!/font-family:(Newsreader|Inter);/.test(face) || !/unicode-range:U\+(100-2BA|\?\?)/.test(face)) continue;
    faces.add(face.replace(/font-weight:(400|500|600);/, 'font-weight:200 800;').replace(/url\(([^)]+)\)/, (_, url) => {
      const data = fs.readFileSync(path.resolve(cssDirectory, url));
      return `url(data:font/woff2;base64,${data.toString('base64')})`;
    }));
  }
}
if (faces.size < 4) throw new Error('Expected existing Newsreader and Inter Latin/Latin-ext assets. Run the normal project build first.');
const template = fs.readFileSync('docs/design-proposals/board.template.html', 'utf8');
fs.writeFileSync('docs/design-proposals/board.html', template.replace('/* FONT_FACES */', [...faces].join('\n')));
console.log('Wrote portable board with local fonts; no remote font requests.');
