const sharp = require('sharp');
const path = require('path');

async function testBrowserCard() {
  const outDir = path.join(__dirname, '../scratch/test_images');

  // Load fostercare (1898x907)
  // Let's scale it to fit comfortably inside 1600x1000 with margins
  // Say width 1460px -> height = 1460 * (907 / 1898) = 697px
  // Plus browser chrome bar 44px -> total card height = 741px
  const winWidth = 1480;
  const chromeHeight = 42;
  const contentWidth = winWidth;
  const contentHeight = Math.round(contentWidth * (907 / 1898)); // 707px
  const totalWinHeight = chromeHeight + contentHeight; // 749px
  const radius = 12;

  const contentBuffer = await sharp(path.join(__dirname, '../app/assets/images/fostercare.png'))
    .resize(contentWidth, contentHeight)
    .toBuffer();

  const chromeSvg = Buffer.from(`
    <svg width="${winWidth}" height="${chromeHeight}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="topCorners">
          <rect width="${winWidth}" height="${chromeHeight + radius}" rx="${radius}" ry="${radius}"/>
        </clipPath>
      </defs>
      <rect width="${winWidth}" height="${chromeHeight + radius}" fill="#F8FAFC" clip-path="url(#topCorners)"/>
      <line x1="0" y1="${chromeHeight - 1}" x2="${winWidth}" y2="${chromeHeight - 1}" stroke="#E2E8F0" stroke-width="1"/>
      <circle cx="24" cy="21" r="5" fill="#EF4444" opacity="0.8"/>
      <circle cx="40" cy="21" r="5" fill="#F59E0B" opacity="0.8"/>
      <circle cx="56" cy="21" r="5" fill="#10B981" opacity="0.8"/>
      <rect x="85" y="8" width="340" height="26" rx="5" fill="#FFFFFF" stroke="#E2E8F0"/>
      <text x="100" y="25" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#64748B">fosterkonnect.com</text>
    </svg>
  `);

  const windowMask = Buffer.from(`
    <svg width="${winWidth}" height="${totalWinHeight}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${winWidth}" height="${totalWinHeight}" rx="${radius}" ry="${radius}" fill="#FFFFFF"/>
    </svg>
  `);

  // Composite chrome + screenshot into window
  const windowComposite = await sharp({
    create: {
      width: winWidth,
      height: totalWinHeight,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
  .composite([
    { input: chromeSvg, top: 0, left: 0 },
    { input: contentBuffer, top: chromeHeight, left: 0 }
  ])
  .png()
  .toBuffer();

  const roundedWindow = await sharp(windowComposite)
    .composite([{ input: windowMask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  const left = Math.round((1600 - winWidth) / 2); // 60px
  const top = Math.round((1000 - totalWinHeight) / 2); // ~125px

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
      <rect x="${left}" y="${top}" width="${winWidth}" height="${totalWinHeight}" rx="${radius}" ry="${radius}" fill="#FFFFFF" filter="url(#shadow)"/>
    </svg>
  `);

  const borderSvg = Buffer.from(`
    <svg width="1600" height="1000" xmlns="http://www.w3.org/2000/svg">
      <rect x="${left}" y="${top}" width="${winWidth}" height="${totalWinHeight}" rx="${radius}" ry="${radius}" fill="none" stroke="#E2E8F0" stroke-width="1.2"/>
    </svg>
  `);

  await sharp(canvasSvg)
    .composite([
      { input: roundedWindow, top, left },
      { input: borderSvg, top: 0, left: 0 }
    ])
    .png()
    .toFile(path.join(outDir, 'fostercare_studio_browser.png'));

  console.log('Done generating fostercare_studio_browser.png');
}

testBrowserCard().catch(console.error);
