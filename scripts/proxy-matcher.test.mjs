import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const testing = require('next/experimental/testing/server');
// This installed Next build still exports the historical helper name.
const matches = testing.unstable_doesProxyMatch ?? testing.unstable_doesMiddlewareMatch;
const source = ts.createSourceFile('proxy.ts', fs.readFileSync(new URL('../proxy.ts', import.meta.url), 'utf8'), ts.ScriptTarget.Latest, true);
let config;
for (const statement of source.statements) {
  if (!ts.isVariableStatement(statement)) continue;
  for (const declaration of statement.declarationList.declarations) {
    if (declaration.name.getText(source) === 'config') config = vm.runInNewContext(`(${declaration.initializer.getText(source)})`);
  }
}
assert.ok(config, 'Test the actual exported proxy config');

test('API routes, generated icons and assets bypass locale routing', () => {
  for (const url of ['/api', '/api/contact', '/api/contact?test=1', '/icon', '/apple-icon', '/icon.svg', '/_next/static/test.js', '/sitemap.xml']) {
    assert.equal(matches({ config, nextConfig: {}, url }), false, url);
  }
});

test('public pages and lookalike prefixes retain locale routing', () => {
  for (const url of ['/', '/cs', '/en/about', '/kontakt', '/apiary', '/iconography']) {
    assert.equal(matches({ config, nextConfig: {}, url }), true, url);
  }
});
