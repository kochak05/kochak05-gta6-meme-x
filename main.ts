// Entry program for "Post a GTA 6 meme on X" (make.fun competition gta6-meme-x-01).
//
// The entry itself is the X post: the meme picture and its caption. This program
// does the only thing the harness asks of it — it hands the house the post's
// address by writing POST.json into the output directory, where the gate reads it.
//
// It reads POST.json, checks it really names a URL, and writes it back out in a
// fixed format, so two runs of the same repository always write the same bytes.
// Standard library only, no network, no clock, no files outside the repository.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const raw = readFileSync(join(BOT_DIR, 'POST.json'), 'utf8');
const parsed = JSON.parse(raw) as { url: string };

if (
  typeof parsed.url !== 'string' ||
  !parsed.url.startsWith('http') ||
  !parsed.url.includes('/status/')
) {
  throw new Error('POST.json must be an object with an X post url');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(
  join(OUTPUT_DIR, 'POST.json'),
  JSON.stringify(parsed, null, 2) + '\n',
  'utf8',
);
