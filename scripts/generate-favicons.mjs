#!/usr/bin/env node
/**
 * Generate favicon files from SVG
 * Run with: node scripts/generate-favicons.mjs
 */

import sharp from 'sharp';
import { writeFileSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

// SVG content for the favicon (cyan-blue gradient with water beaker icon)
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#06b6d4"/>
      <stop offset="100%" style="stop-color:#3b82f6"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="96" fill="url(#bg)"/>
  <g transform="translate(96, 96) scale(13.33)" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
  </g>
</svg>`;

async function generateFavicons() {
  console.log('Generating favicon files...');

  const svgBuffer = Buffer.from(svgContent);

  // Generate favicon-96x96.png
  await sharp(svgBuffer)
    .resize(96, 96)
    .png()
    .toFile(join(publicDir, 'favicon-96x96.png'));
  console.log('Created: favicon-96x96.png');

  // Generate apple-touch-icon.png (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(join(publicDir, 'apple-touch-icon.png'));
  console.log('Created: apple-touch-icon.png');

  // Generate favicon.ico (32x32 PNG, renamed to .ico for basic support)
  // Note: This is a simplified .ico - browsers accept PNG in .ico format
  const ico32 = await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toBuffer();

  const ico16 = await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toBuffer();

  // Create a simple multi-size ICO file
  // ICO header format
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type: 1 = ICO
  header.writeUInt16LE(2, 4); // Number of images

  // ICO directory entries
  const entry1 = Buffer.alloc(16);
  entry1.writeUInt8(16, 0); // Width
  entry1.writeUInt8(16, 1); // Height
  entry1.writeUInt8(0, 2); // Color palette
  entry1.writeUInt8(0, 3); // Reserved
  entry1.writeUInt16LE(1, 4); // Color planes
  entry1.writeUInt16LE(32, 6); // Bits per pixel
  entry1.writeUInt32LE(ico16.length, 8); // Size of image data
  entry1.writeUInt32LE(6 + 32, 12); // Offset to image data

  const entry2 = Buffer.alloc(16);
  entry2.writeUInt8(32, 0); // Width
  entry2.writeUInt8(32, 1); // Height
  entry2.writeUInt8(0, 2); // Color palette
  entry2.writeUInt8(0, 3); // Reserved
  entry2.writeUInt16LE(1, 4); // Color planes
  entry2.writeUInt16LE(32, 6); // Bits per pixel
  entry2.writeUInt32LE(ico32.length, 8); // Size of image data
  entry2.writeUInt32LE(6 + 32 + ico16.length, 12); // Offset to image data

  const icoBuffer = Buffer.concat([header, entry1, entry2, ico16, ico32]);
  writeFileSync(join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('Created: favicon.ico');

  console.log('All favicon files generated successfully!');
}

generateFavicons().catch(console.error);
