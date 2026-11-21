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
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
