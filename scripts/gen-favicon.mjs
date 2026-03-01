/**
 * gen-favicon.mjs
 * Generates favicon.ico, icon.png, and apple-icon.png from public/logo.webp.
 * Requires: ffmpeg (brew install ffmpeg)
 * Run: node scripts/gen-favicon.mjs
 */

import { execSync } from "child_process";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const src = join(root, "public", "logo.svg");
const appDir = join(root, "src", "app");
const tmp = "/tmp/favicon-gen";

mkdirSync(tmp, { recursive: true });

const run = (cmd) => execSync(cmd, { stdio: "pipe" });

// 1. Extract embedded PNG from SVG (the SVG wraps a raster PNG as a base64 mask)
console.log("Extracting embedded PNG from SVG…");
const svgText = readFileSync(src, "utf8");
const match = svgText.match(/data:image\/png;base64,([A-Za-z0-9+/=]+)/);
if (!match) throw new Error("No embedded PNG found in SVG");
writeFileSync(`${tmp}/logo_embedded.png`, Buffer.from(match[1], "base64"));

// 2. Crop to square (2048x1536 → center-crop 1536x1536) and convert:
//    The embedded PNG is white-logo on black — invert so logo becomes black,
//    and use luminance as the alpha channel (white→opaque, black→transparent).
console.log("Cropping, inverting, and making background transparent…");
run(
  `ffmpeg -i "${tmp}/logo_embedded.png" \
    -vf "crop=1536:1536:256:0,format=rgba,geq=r='0':g='0':b='0':a='r(X,Y)'" \
    -pix_fmt rgba -update 1 "${tmp}/logo_sq.png" -y`
);

// 2. Resize to needed sizes
const sizes = [512, 180, 32, 16];
for (const size of sizes) {
  console.log(`Resizing to ${size}x${size}…`);
  run(
    `ffmpeg -i "${tmp}/logo_sq.png" -vf "scale=${size}:${size}" -pix_fmt rgba -update 1 "${tmp}/logo_${size}.png" -y`
  );
}

// 3. Build favicon.ico (multi-size: 16 + 32) — ICO with embedded PNGs
console.log("Building favicon.ico…");
const ico = buildIco([
  readFileSync(`${tmp}/logo_16.png`),
  readFileSync(`${tmp}/logo_32.png`),
]);
writeFileSync(join(appDir, "favicon.ico"), ico);

// 4. Copy icon.png (512) and apple-icon.png (180)
writeFileSync(join(appDir, "icon.png"), readFileSync(`${tmp}/logo_512.png`));
writeFileSync(
  join(appDir, "apple-icon.png"),
  readFileSync(`${tmp}/logo_180.png`)
);

console.log("Done! Files written to src/app/");

// ---------------------------------------------------------------------------
// ICO builder — embeds PNG data directly (supported since Windows Vista)
// Format ref: https://en.wikipedia.org/wiki/ICO_(file_format)
// ---------------------------------------------------------------------------
function buildIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = headerSize + count * dirEntrySize;

  // Calculate offsets
  let offset = dirSize;
  const entries = pngBuffers.map((buf) => {
    // Read width/height from PNG IHDR (bytes 16-23)
    const w = buf.readUInt32BE(16);
    const h = buf.readUInt32BE(20);
    const entry = { w, h, buf, offset };
    offset += buf.length;
    return entry;
  });

  const total = offset;
  const out = Buffer.alloc(total);

  // ICO header
  out.writeUInt16LE(0, 0); // reserved
  out.writeUInt16LE(1, 2); // type: 1 = ICO
  out.writeUInt16LE(count, 4); // image count

  // Directory entries
  entries.forEach(({ w, h, buf, offset: imgOffset }, i) => {
    const base = headerSize + i * dirEntrySize;
    out.writeUInt8(w >= 256 ? 0 : w, base + 0); // width (0 = 256)
    out.writeUInt8(h >= 256 ? 0 : h, base + 1); // height
    out.writeUInt8(0, base + 2); // color count (0 = no palette)
    out.writeUInt8(0, base + 3); // reserved
    out.writeUInt16LE(1, base + 4); // color planes
    out.writeUInt16LE(32, base + 6); // bits per pixel
    out.writeUInt32LE(buf.length, base + 8); // image size
    out.writeUInt32LE(imgOffset, base + 12); // offset to image data
  });

  // Image data
  entries.forEach(({ buf, offset: imgOffset }) => {
    buf.copy(out, imgOffset);
  });

  return out;
}
