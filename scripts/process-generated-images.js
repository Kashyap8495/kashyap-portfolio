const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const generatedFiles = [
  {
    src: 'C:/Users/patel/.gemini/antigravity-ide/brain/4974e0d2-fe4f-4195-9c1a-63c16a964e9f/mercedes_ui_1793021512239.jpg',
    outName: 'mercedes-for-hire.png',
  },
  {
    src: 'C:/Users/patel/.gemini/antigravity-ide/brain/4974e0d2-fe4f-4195-9c1a-63c16a964e9f/lastnightrooms_ui_1793021548885.jpg',
    outName: 'lastnightrooms.png',
  },
  {
    src: 'C:/Users/patel/.gemini/antigravity-ide/brain/4974e0d2-fe4f-4195-9c1a-63c16a964e9f/dharmauday_ui_1793021572726.jpg',
    outName: 'dharmauday.png',
  },
  {
    src: 'C:/Users/patel/.gemini/antigravity-ide/brain/4974e0d2-fe4f-4195-9c1a-63c16a964e9f/antimritual_ui_1793021599558.jpg',
    outName: 'antim-ritual.png',
  },
  {
    src: 'C:/Users/patel/.gemini/antigravity-ide/brain/4974e0d2-fe4f-4195-9c1a-63c16a964e9f/pujapartner_ui_1793021645879.jpg',
    outName: 'puja-partner.png',
  },
  {
    src: 'C:/Users/patel/.gemini/antigravity-ide/brain/4974e0d2-fe4f-4195-9c1a-63c16a964e9f/kouush_ui_1793021681421.jpg',
    outName: 'kouush-pharmaceuticals.png',
  },
];

const outputDir = path.join(__dirname, '../app/assets/images/recreated');

async function processImage(item) {
  const meta = await sharp(item.src).metadata();
  console.log(`Processing ${item.outName}: ${meta.width}x${meta.height}`);

  // The generated image already has full browser UI.
  // We frame it inside a 1600x1000 canvas with rounded corners and subtle shadow.
  // Card width 1480, height = 1480 * (meta.height / meta.width), max height 900
  const winWidth = 1480;
  let winHeight = Math.round(winWidth * (meta.height / meta.width));
  if (winHeight > 900) winHeight = 900;
  const radius = 12;

  const content = await sharp(item.src)
    .resize(winWidth, winHeight, { fit: 'cover', position: 'top' })
    .toBuffer();

  const mask = Buffer.from(`
    <svg width="${winWidth}" height="${winHeight}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${winWidth}" height="${winHeight}" rx="${radius}" ry="${radius}" fill="#FFFFFF"/>
    </svg>
  `);

  const rounded = await sharp(content)
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  const left = Math.round((1600 - winWidth) / 2);
  const top = Math.round((1000 - winHeight) / 2);

  const canvasSvg = Buffer.from(`
    <svg width="1600" height="1000" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="grad" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="100%" stop-color="#EDF2F7"/>
        </radialGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#0F172A" flood-opacity="0.12"/>
          <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#0F172A" flood-opacity="0.06"/>
        </filter>
      </defs>
      <rect width="1600" height="1000" fill="url(#grad)"/>
      <rect x="${left}" y="${top}" width="${winWidth}" height="${winHeight}" rx="${radius}" ry="${radius}" fill="#FFFFFF" filter="url(#shadow)"/>
    </svg>
  `);

  const borderSvg = Buffer.from(`
    <svg width="1600" height="1000" xmlns="http://www.w3.org/2000/svg">
      <rect x="${left}" y="${top}" width="${winWidth}" height="${winHeight}" rx="${radius}" ry="${radius}" fill="none" stroke="#E2E8F0" stroke-width="1.2"/>
    </svg>
  `);

  const outPath = path.join(outputDir, item.outName);
  await sharp(canvasSvg)
    .composite([
      { input: rounded, top, left },
      { input: borderSvg, top: 0, left: 0 }
    ])
    .png({ quality: 95 })
    .toFile(outPath);

  console.log(`Saved ${item.outName} to recreated/`);
}

async function run() {
  for (const item of generatedFiles) {
    await processImage(item);
  }
  console.log('All generated images framed and saved!');
}

run().catch(console.error);
