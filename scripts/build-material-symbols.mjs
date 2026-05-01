#!/usr/bin/env node
/**
 * Regenerates public/fonts/material-symbols-outlined.woff2 as a minimal subset
 * of Google's Material Symbols Outlined **variable** font, containing only the
 * ligatures (icons) actually used in the codebase.
 *
 * The full variable font is ~10 MB TTF (~1,087 KiB as the WOFF2 that Google
 * Fonts serves). The subset produced by this script is ~23 KiB — a ~98%
 * reduction that keeps every icon referenced as
 * `<span className="material-symbols-outlined">NAME</span>` AND preserves the
 * FILL, wght, opsz, and GRAD variation axes so inline
 * `style={{ fontVariationSettings: "'FILL' 1" }}` still renders filled icons.
 *
 * Requirements (one-time):
 *   pip install --user fonttools brotli uharfbuzz
 *
 * Usage:
 *   node scripts/build-material-symbols.mjs
 *
 * How it works:
 *   1. Scans `src/**` for every string that appears as the text content of a
 *      `material-symbols-outlined` span, plus every `icon: "..."` object field
 *      that is forwarded into such a span.
 *   2. Downloads the Material Symbols Outlined variable TTF from the Google
 *      material-design-icons GitHub mirror (the true variable font; Google
 *      Fonts' CSS2 API only serves per-axis static slices).
 *   3. Uses HarfBuzz to shape each icon name into its destination glyph ID.
 *   4. Uses fontTools (pyftsubset) with --gids and --no-layout-closure to keep
 *      only the ~28 icon glyphs plus the source letters needed for ligature
 *      lookup, preserving fvar/gvar/HVAR so FILL/wght continue to work.
 *   5. Writes the result as a WOFF2.
 *
 * If you add an icon to the codebase, just re-run this script and commit the
 * updated public/fonts/material-symbols-outlined.woff2.
 */

import { execFileSync, spawnSync } from "node:child_process";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { readdirSync, statSync } from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const repoRoot = join(__dirname, "..");
const srcDir = join(repoRoot, "src");
const fontsDir = join(repoRoot, "public", "fonts");
const outWoff2 = join(fontsDir, "material-symbols-outlined.woff2");
const tmpDir = join(repoRoot, "node_modules", ".cache", "material-symbols");

// Source: Google's material-design-icons repo. This is the full variable
// TTF with axes FILL (0..1), GRAD (-50..200), opsz (20..48), wght (100..700).
// It tracks the latest master; if Google ever breaks this path we can pin a
// tag in the URL.
const VARIABLE_TTF_URL =
  "https://raw.githubusercontent.com/google/material-design-icons/refs/heads/master/variablefont/MaterialSymbolsOutlined%5BFILL%2CGRAD%2Copsz%2Cwght%5D.ttf";

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (/\.(tsx?|jsx?)$/.test(name)) out.push(p);
  }
  return out;
}

function extractIcons() {
  const icons = new Set();
  for (const f of walk(srcDir)) {
    const src = readFileSync(f, "utf8");
    let from = 0;
    while (true) {
      const idx = src.indexOf("material-symbols-outlined", from);
      if (idx === -1) break;
      const gt = src.indexOf(">", idx);
      if (gt === -1) { from = idx + 1; continue; }
      const lt = src.indexOf("<", gt + 1);
      if (lt === -1) { from = idx + 1; continue; }
      const inner = src.slice(gt + 1, lt).trim();
      if (/^[a-z][a-z_0-9]*$/.test(inner)) icons.add(inner);
      if (inner.startsWith("{") || inner.includes("?")) {
        const re = /"([a-z][a-z_0-9]*)"/g;
        let m;
        while ((m = re.exec(inner)) !== null) icons.add(m[1]);
      }
      from = lt;
    }
    const iconField = /icon:\s*"([a-z][a-z_0-9]*)"/g;
    let m;
    while ((m = iconField.exec(src)) !== null) icons.add(m[1]);
  }
  for (const b of ["true", "false", "null"]) icons.delete(b);
  return [...icons].sort();
}

async function downloadVariableTtf(dest) {
  console.log("• Downloading Material Symbols Outlined variable TTF…");
  const res = await fetch(VARIABLE_TTF_URL);
  if (!res.ok) throw new Error(`Variable TTF fetch failed: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 1_000_000) {
    throw new Error(
      `Downloaded TTF is suspiciously small (${buf.length} bytes). The variable font URL may have changed; check ${VARIABLE_TTF_URL}.`,
    );
  }
  writeFileSync(dest, buf);
  console.log(`• Wrote ${dest} (${(statSync(dest).size / 1024).toFixed(1)} KB)`);
}

function shapeGlyphIds(ttfPath, icons) {
  const py = `
import json, sys
import uharfbuzz as hb
with open(${JSON.stringify(ttfPath)}, 'rb') as f:
    data = f.read()
face = hb.Face(hb.Blob(data))
font = hb.Font(face)
gids = set()
for name in ${JSON.stringify(icons)}:
    buf = hb.Buffer()
    buf.add_str(name)
    buf.guess_segment_properties()
    hb.shape(font, buf, features={'liga': True, 'rlig': True, 'dlig': True, 'calt': True, 'ccmp': True})
    shaped = [i.codepoint for i in buf.glyph_infos]
    if len(shaped) != 1 or shaped[0] == 0:
        sys.stderr.write(f"Ligature did not resolve: {name!r} -> {shaped}\\n")
        sys.exit(2)
    gids.add(shaped[0])
print(json.dumps(sorted(gids)))
`;
  const python = process.env.PYTHON || "python3";
  const result = spawnSync(python, ["-c", py], {
    stdio: ["ignore", "pipe", "inherit"],
    encoding: "utf8",
  });
  if (result.status !== 0) {
    throw new Error("uharfbuzz shaping failed; see stderr above");
  }
  return JSON.parse(result.stdout.trim());
}

function subsetFont(ttfPath, gids, icons, outPath) {
  mkdirSync(dirname(outPath), { recursive: true });
  // Keep only our 28 icon glyphs plus the Latin letters used to spell their
  // ligature names. `--no-layout-closure` stops pyftsubset from expanding the
  // glyph set via every rule in the `rlig` lookup (which would pull in every
  // other icon in the font). We intentionally do NOT drop fvar/gvar/HVAR/
  // STAT/avar — they are what make FILL and wght axes keep working after
  // subsetting, and without them inline `fontVariationSettings` silently
  // becomes a no-op and filled icons render as outlined.
  const args = [
    ttfPath,
    `--gids=${gids.join(",")}`,
    `--text=${icons.join(" ")}`,
    "--layout-features=rlig",
    "--no-layout-closure",
    "--flavor=woff2",
    "--drop-tables+=DSIG,gasp",
    "--no-glyph-names",
    "--name-IDs=",
    `--output-file=${outPath}`,
  ];
  execFileSync("pyftsubset", args, { stdio: "inherit" });
}

(async () => {
  mkdirSync(tmpDir, { recursive: true });
  mkdirSync(fontsDir, { recursive: true });

  const icons = extractIcons();
  console.log(`• Found ${icons.length} unique icons:`, icons.join(", "));

  const ttfPath = join(tmpDir, "MaterialSymbolsOutlined-Variable.ttf");
  await downloadVariableTtf(ttfPath);

  const gids = shapeGlyphIds(ttfPath, icons);
  console.log(`• Resolved ${gids.length} glyph IDs via HarfBuzz shaping.`);

  subsetFont(ttfPath, gids, icons, outWoff2);
  const size = statSync(outWoff2).size;
  console.log(
    `\n✓ Wrote ${relative(repoRoot, outWoff2)} (${size.toLocaleString()} bytes, ${(
      size / 1024
    ).toFixed(1)} KB)`,
  );
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
