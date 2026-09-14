import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

// Contracts open the release chain: every other @ofidj package follows this
// version, so a bpInfo left behind here is the first thing to drift.
test('the reported version is the version this package publishes', () => {
  const {version} = JSON.parse(readFileSync(new URL('../package.json', import.meta.url)));
  const source = readFileSync(new URL('../src/bpInfo.ts', import.meta.url), 'utf8');
  assert.match(
    source,
    new RegExp(`version: 'v${version.replace(/\./g, '\\.')}'`),
    'run npm run version:sync after changing the version',
  );
});
