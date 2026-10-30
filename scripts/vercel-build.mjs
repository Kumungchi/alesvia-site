import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const require = createRequire(import.meta.url);

export function buildTarget(environment) {
  return environment === 'production'
    ? { packageName: 'convex', args: ['deploy', '--cmd', 'next build'] }
    : { packageName: 'next', args: ['build'] };
}

export function runBuild(environment, spawn = spawnSync) {
  const { packageName, args } = buildTarget(environment);
  const packagePath = require.resolve(`${packageName}/package.json`);
  const cliPath = resolve(dirname(packagePath), require(packagePath).bin[packageName]);
  console.log(environment === 'production'
    ? 'Production build: deploy Convex and build Next.js.'
    : 'Frontend build: build Next.js without deploying Convex.');
  const result = spawn(process.execPath, [cliPath, ...args], { stdio: 'inherit' });
  if (result.error) console.error(result.error.message);
  return result.status ?? 1;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  process.exitCode = runBuild(process.env.VERCEL_ENV);
}
