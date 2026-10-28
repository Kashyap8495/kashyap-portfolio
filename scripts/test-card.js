const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function testCard() {
  const outDir = path.join(__dirname, '../scratch/test_images');

  // Load steerhealth
  const cardHeight = 880;
  const steerResized = await sharp(path.join(__dirname, '../app/assets/images/steerhealth.png'))
    .resize({ height: cardHeight, fit: 'inside' })
    .toBuffer();
  
  const meta = await sharp(steerResized).metadata();
  const cardWidth = meta.width;

  // Create rounded corner mask for the card
  const radius = 16;
  const mask = Buffer.from(`
    <svg width="${cardWidth}" height="${cardHeight}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${cardWidth}" height="${cardHeight}" rx="${radius}" ry="${radius}" fill="#FFFFFF"/>
    </svg>
  `);

  // Apply mask to steerResized
  const roundedCard = await sharp(steerResized)
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Create card with shadow and subtle border in SVG
  const left = Math.round((1600 - cardWidth) / 2);
  const top = Math.round((1000 - cardHeight) / 2);

  const canvasSvg = Buffer.from(`
    <svg width="1600" height="1000" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="grad" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="100%" stop-color="#EDF2F7"/>
        </radialGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="28" flood-color="#0F172A" flood-opacity="0.14"/>
          <feDropShadow dx="0" dy="4" stdDeviation="10" flood-color="#0F172A" flood-opacity="0.08"/>
        </filter>
      </defs>
      <rect width="1600" height="1000" fill="url(#grad)"/>
      <rect x="${left}" y="${top}" width="${cardWidth}" height="${cardHeight}" rx="${radius}" ry="${radius}" fill="#FFFFFF" filter="url(#shadow)"/>
    </svg>
  `);

  // Border overlay
  const borderSvg = Buffer.from(`
    <svg width="1600" height="1000" xmlns="http://www.w3.org/2000/svg">
      <rect x="${left}" y="${top}" width="${cardWidth}" height="${cardHeight}" rx="${radius}" ry="${radius}" fill="none" stroke="#E2E8F0" stroke-width="1.5"/>
    </svg>
  `);

  await sharp(canvasSvg)
    .composite([
      { input: roundedCard, top, left },
      { input: borderSvg, top: 0, left: 0 }
    ])
    .png()
    .toFile(path.join(outDir, 'steerhealth_studio_card.png'));

  console.log('Done generating steerhealth_studio_card.png');
}

testCard().catch(console.error);
