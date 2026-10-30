import assert from 'node:assert/strict';
import test from 'node:test';
import { buildTarget, runBuild } from './vercel-build.mjs';

test('only an explicit production environment selects Convex deployment', () => {
  assert.deepEqual(buildTarget('production'), {
    packageName: 'convex', args: ['deploy', '--cmd', 'next build'],
  });
  for (const environment of ['preview', 'development', undefined, '', 'unknown']) {
    assert.deepEqual(buildTarget(environment), { packageName: 'next', args: ['build'] });
  }
});

test('preview runs the Next CLI directly and propagates its exit code', () => {
  const code = runBuild('preview', (command, args, options) => {
    assert.equal(command, process.execPath);
    assert.match(args[0].replaceAll('\\', '/'), /next\/dist\/bin\/next$/);
    assert.deepEqual(args.slice(1), ['build']);
    assert.deepEqual(options, { stdio: 'inherit' });
    return { status: 7 };
  });
  assert.equal(code, 7);
});

test('production preserves the Convex command without executing a deployment', () => {
  assert.equal(runBuild('production', (_command, args) => {
    assert.match(args[0].replaceAll('\\', '/'), /convex\/bin\/main.js$/);
    assert.deepEqual(args.slice(1), ['deploy', '--cmd', 'next build']);
    return { status: 0 };
  }), 0);
});

test('a terminated child fails the build', () => {
  assert.equal(runBuild('preview', () => ({ status: null, signal: 'SIGTERM' })), 1);
});
