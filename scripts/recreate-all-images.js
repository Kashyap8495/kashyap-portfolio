const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const outputDir = path.join(__dirname, '../app/assets/images/recreated');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const inputDir = path.join(__dirname, '../app/assets/images');

// Studio background generator
function makeStudioBackground(width = 1600, height = 1000) {
  return Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="grad" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="100%" stop-color="#EDF2F7"/>
        </radialGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad)"/>
    </svg>
  `);
}

// 1. Process Browser Window Showcase (for desktop screenshots)
async function processBrowserWindow({ filename, outName, url, scaleFactor = 1.0 }) {
  const inputPath = path.join(inputDir, filename);
  if (!fs.existsSync(inputPath)) {
    console.error('File not found:', inputPath);
    return;
  }

  const meta = await sharp(inputPath).metadata();
  
  const winWidth = Math.round(1480 * scaleFactor);
  const chromeHeight = 42;
  const contentWidth = winWidth;
  const contentHeight = Math.round(contentWidth * (meta.height / meta.width));
  const maxContentHeight = 920 - chromeHeight; // keep inside canvas
  const finalContentHeight = Math.min(contentHeight, maxContentHeight);
  const totalWinHeight = chromeHeight + finalContentHeight;
  const radius = 12;

  // Resize content
  const contentBuffer = await sharp(inputPath)
    .resize(contentWidth, finalContentHeight, { fit: 'cover', position: 'top' })
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
      <text x="100" y="25" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="12" fill="#64748B">${url}</text>
    </svg>
  `);

  const windowMask = Buffer.from(`
    <svg width="${winWidth}" height="${totalWinHeight}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${winWidth}" height="${totalWinHeight}" rx="${radius}" ry="${radius}" fill="#FFFFFF"/>
    </svg>
  `);

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

  const left = Math.round((1600 - winWidth) / 2);
  const top = Math.round((1000 - totalWinHeight) / 2);

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

  const outPath = path.join(outputDir, outName);
  await sharp(canvasSvg)
    .composite([
      { input: roundedWindow, top, left },
      { input: borderSvg, top: 0, left: 0 }
    ])
    .png({ quality: 95 })
    .toFile(outPath);

  console.log(`Created browser showcase: ${outName}`);
}

// 2. Process Card Showcase (for vertical cards like steerhealth, gff, doodeo, trooptravel)
async function processCard({ filename, outName, cardHeight = 880 }) {
  const inputPath = path.join(inputDir, filename);
  if (!fs.existsSync(inputPath)) {
    console.error('File not found:', inputPath);
    return;
  }

  const steerResized = await sharp(inputPath)
    .resize({ height: cardHeight, fit: 'inside' })
    .toBuffer();
  
  const meta = await sharp(steerResized).metadata();
  const cardWidth = meta.width;
  const radius = 16;

  const mask = Buffer.from(`
    <svg width="${cardWidth}" height="${cardHeight}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${cardWidth}" height="${cardHeight}" rx="${radius}" ry="${radius}" fill="#FFFFFF"/>
    </svg>
  `);

  const roundedCard = await sharp(steerResized)
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toBuffer();

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

  const borderSvg = Buffer.from(`
    <svg width="1600" height="1000" xmlns="http://www.w3.org/2000/svg">
      <rect x="${left}" y="${top}" width="${cardWidth}" height="${cardHeight}" rx="${radius}" ry="${radius}" fill="none" stroke="#E2E8F0" stroke-width="1.5"/>
    </svg>
  `);

  const outPath = path.join(outputDir, outName);
  await sharp(canvasSvg)
    .composite([
      { input: roundedCard, top, left },
      { input: borderSvg, top: 0, left: 0 }
    ])
    .png({ quality: 95 })
    .toFile(outPath);

  console.log(`Created card showcase: ${outName}`);
}

async function run() {
  console.log('Recreating project images into standardized 1600x1000...');

  // 1. FosterKonnect
  await processBrowserWindow({
    filename: 'fostercare.png',
    outName: 'fosterkonnect.png',
    url: 'fosterkonnect.com'
  });

  // 2. Steer Health (vertical card)
  await processCard({
    filename: 'steerhealth.png',
    outName: 'steerhealth.png',
    cardHeight: 880
  });

  // 3. Vertelier
  await processBrowserWindow({
    filename: 'vertelier.png',
    outName: 'vertelier.png',
    url: 'vertelier.com'
  });

  // 4. Girls First Finance (vertical card)
  await processCard({
    filename: 'gff.png',
    outName: 'gff.png',
    cardHeight: 880
  });

  // 5. MoneyAtlas
  await processBrowserWindow({
    filename: 'moneyatlas.png',
    outName: 'moneyatlas.png',
    url: 'moneyatlas.com'
  });

  // 6. Mega Millions Naija
  await processBrowserWindow({
    filename: 'mmn.png',
    outName: 'mmn.png',
    url: 'megamillionsnaija.com'
  });

  // 7. RentBabe
  await processBrowserWindow({
    filename: 'rentbabe.png',
    outName: 'rentbabe.png',
    url: 'rentbabe.com/en/rent'
  });

  // 8. FinIdeas (from full finideas.png, NOT the cropped finideas1.png!)
  await processBrowserWindow({
    filename: 'finideas.png',
    outName: 'finideas.png',
    url: 'finideas.com'
  });

  // 9. Lead Tree
  await processBrowserWindow({
    filename: 'leadtree.png',
    outName: 'leadtree.png',
    url: 'leadtree.clearanchor.co'
  });

  // 10. DarLink AI
  await processBrowserWindow({
    filename: 'darlink.png',
    outName: 'darlink.png',
    url: 'darlink.ai'
  });

  // 11. CSD (Digital Construction / BIM using architechrender.png)
  await processBrowserWindow({
    filename: 'architechrender.png',
    outName: 'csd.png',
    url: 'app.csdgroup.com.au'
  });

  // 12. DCEWS (Early Warning Monitoring using coddered.jpeg)
  await processBrowserWindow({
    filename: 'coddered.jpeg',
    outName: 'dcews.png',
    url: 'dcews-monitor.internal'
  });

  // 13. MethodLoop (UX SaaS using primax.png)
  await processBrowserWindow({
    filename: 'primax.png',
    outName: 'methodloop.png',
    url: 'methodloop.com'
  });

  // 14. Let's Go Digitals (using doodeo.png or dayviewer)
  await processCard({
    filename: 'doodeo.png',
    outName: 'lets-go-digitals.png',
    cardHeight: 880
  });

  // 15. DayViewer (standalone showcase)
  await processCard({
    filename: 'dayviewer.png',
    outName: 'dayviewer.png',
    cardHeight: 880
  });

  // 16. Troop Travel (standalone showcase)
  await processCard({
    filename: 'trooptravel.png',
    outName: 'trooptravel.png',
    cardHeight: 880
  });

  console.log('All images recreated successfully!');
}

run().catch(console.error);
