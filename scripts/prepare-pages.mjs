import { readdir, readFile, writeFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outputDirectory = fileURLToPath(new URL('../dist/', import.meta.url));
const basePath = '/rosen-research-group';
const textExtensions = new Set(['.css', '.html', '.xml']);

async function rewriteDirectory(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      await rewriteDirectory(path);
      continue;
    }

    if (!textExtensions.has(extname(entry.name))) continue;

    const original = await readFile(path, 'utf8');
    const rewritten = original
      .replace(/(["'])\/(?!\/|rosen-research-group(?:\/|["']))/g, `$1${basePath}/`)
      .replace(/url\(\/(?!\/|rosen-research-group\/)/g, `url(${basePath}/`);

    if (rewritten !== original) await writeFile(path, rewritten);
  }
}

await rewriteDirectory(outputDirectory);
