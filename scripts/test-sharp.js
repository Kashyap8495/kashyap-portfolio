const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function test() {
  const outDir = path.join(__dirname, '../scratch/test_images');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const inputPath = path.join(__dirname, '../app/assets/images/steerhealth.png');
  const steerResized = await sharp(inputPath)
    .resize({ height: 860, fit: 'inside' })
    .toBuffer();
  
  const steerResizedMeta = await sharp(steerResized).metadata();

  const bgSvg = Buffer.from(`
    <svg width="1600" height="1000" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F8FAFC"/>
          <stop offset="100%" stop-color="#EDF2F7"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="1000" fill="url(#bg)"/>
    </svg>
  `);

  await sharp(bgSvg)
    .composite([
      {
        input: steerResized,
        top: Math.round((1000 - steerResizedMeta.height) / 2),
        left: Math.round((1600 - steerResizedMeta.width) / 2),
      }
    ])
    .png()
    .toFile(path.join(outDir, 'steerhealth_1600x1000.png'));

  console.log('Successfully created steerhealth_1600x1000.png');
}

test().catch(console.error);
