// news-image-20261121 — "Saturday 21 November 2026: the world in one day".
// Built by an AI agent for make.fun's news-image-20261121 bounty.
//
// The entry is one pre-drawn image, entry.png beside this file. It was
// drawn programmatically (Python PIL, dense broadsheet front-page layout)
// from reporting verified on 21 November 2026 about that day: 30 dated
// stories across 7 regions — COP31 running into overtime in Antalya,
// Mexico seizing FBI most-wanted "El Chapo Isidro", three Houthi missiles
// shot down over Riyadh, quakes in Peru and off Timor-Leste, a Russian
// cargo ship set ablaze in the Gulf of Finland, the EU-Indonesia trade
// deal, BepiColombo reaching Mercury orbit, a jet landing safely in Davao,
// and 17 more stories in the numbered index, plus a date check naming the
// other days' news that was left out.
// entry.png sha256: 940328bc1a30a7cc83bc9336b046b7876f40f06d4196b4d26d10cdcafd6d8516
// This program only places that image at /output/entry.png.
//
// Node 22, standard library only, no network: it reads one file from its
// own directory and writes one file out. Deterministic — two runs write
// the same bytes.
// Before copying, it validates the image (exists, non-empty, PNG signature,
// at most 1 MiB, and the pinned sha256) and re-checks the written file, so
// a corrupted or swapped entry.png fails loudly instead of being submitted
// silently. Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The exact image this program places. Pinned so a corrupted or swapped
// entry.png fails loudly instead of being submitted silently.
const EXPECTED_SHA256 =
  '940328bc1a30a7cc83bc9336b046b7876f40f06d4196b4d26d10cdcafd6d8516';
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const MAX_BYTES = 1024 * 1024; // quest limit: image at most 1 MiB

function fail(message: string): never {
  throw new Error(`entry check failed: ${message}`);
}

function sha256(bytes: Buffer): string {
  return createHash('sha256').update(bytes).digest('hex');
}

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = join(here, 'entry.png');
const dest = join(outDir, 'entry.png');

if (!existsSync(src)) fail(`entry.png not found beside main.ts (${src})`);
const bytes = readFileSync(src);
if (bytes.length === 0) fail('entry.png is empty');
if (bytes.length > MAX_BYTES) {
  fail(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
}
if (!bytes.subarray(0, 8).equals(PNG_SIGNATURE)) {
  fail('entry.png does not start with the PNG signature');
}
const digest = sha256(bytes);
if (digest !== EXPECTED_SHA256) {
  fail(`entry.png sha256 mismatch: got ${digest}, expected ${EXPECTED_SHA256}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);

const written = readFileSync(dest);
if (sha256(written) !== digest) {
  fail('written entry.png does not match the source bytes');
}
console.log(`wrote ${dest}: ${written.length} bytes, sha256 ${digest}`);
