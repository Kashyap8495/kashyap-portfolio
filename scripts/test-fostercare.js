const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function testScreenshots() {
  const outDir = path.join(__dirname, '../scratch/test_images');

  // Test Foster Care full cover
  await sharp(path.join(__dirname, '../app/assets/images/fostercare.png'))
    .resize(1600, 1000, { fit: 'cover', position: 'top' })
    .toFile(path.join(outDir, 'fostercare_cover_top.png'));

  // Test Foster Care with browser frame
  // 1600x1000 canvas with browser chrome at top
  const browserBarHeight = 50;
  const contentHeight = 1000 - browserBarHeight; // 950
  
  // Resize fostercare to 1600x950 cover top
  const fosterContent = await sharp(path.join(__dirname, '../app/assets/images/fostercare.png'))
    .resize(1600, 950, { fit: 'cover', position: 'top' })
    .toBuffer();

  const browserSvg = Buffer.from(`
    <svg width="1600" height="50" xmlns="http://www.w3.org/2000/svg">
      <rect width="1600" height="50" fill="#F1F5F9" />
      <line x1="0" y1="49" x2="1600" y2="49" stroke="#E2E8F0" stroke-width="1"/>
      <circle cx="30" cy="25" r="6" fill="#EF4444" opacity="0.8"/>
      <circle cx="50" cy="25" r="6" fill="#F59E0B" opacity="0.8"/>
      <circle cx="70" cy="25" r="6" fill="#10B981" opacity="0.8"/>
      <rect x="110" y="10" width="400" height="30" rx="6" fill="#FFFFFF" stroke="#E2E8F0"/>
      <text x="130" y="30" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" fill="#64748B">https://fosterkonnect.com</text>
    </svg>
  `);

  await sharp({
    create: {
      width: 1600,
      height: 1000,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
  .composite([
    { input: browserSvg, top: 0, left: 0 },
    { input: fosterContent, top: 50, left: 0 }
  ])
  .png()
  .toFile(path.join(outDir, 'fostercare_browser.png'));

  console.log('Done testing fostercare');
}

testScreenshots().catch(console.error);
