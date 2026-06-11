/**
 * Homepage Screenshot Script
 * Starts dev server → captures homepage → saves to public/1.png
 * Usage: node scripts/screenshot.cjs
 */

const { execSync, spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const PORT = 4321;
const URL = `http://localhost:${PORT}/`;
const OUTPUT = path.join(__dirname, '..', 'public', '1.png');
const WIDTH = 1280;
const HEIGHT = 900;

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function waitForServer(url, timeout = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {}
    await sleep(500);
  }
  throw new Error('Server did not start within ' + timeout + 'ms');
}

async function main() {
  console.log('📸 Starting screenshot capture...\n');

  // 1. Kill any existing dev server on the port
  try { execSync(`npx kill-port ${PORT} 2>/dev/null`, { stdio: 'ignore' }); } catch {}

  // 2. Start dev server
  console.log('🔧 Starting dev server...');
  const server = spawn('npx', ['astro', 'dev', '--port', String(PORT)], {
    cwd: path.join(__dirname, '..'),
    stdio: 'pipe',
    shell: true,
  });

  server.stderr.on('data', d => process.stderr.write(d));

  try {
    // Wait for server to be ready
    await waitForServer(URL);
    console.log('✅ Dev server ready\n');

    // 3. Launch puppeteer
    console.log('🌐 Launching browser...');
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch({
      headless: true,
      defaultViewport: { width: WIDTH, height: HEIGHT },
    });

    const page = await browser.newPage();

    // 4. Navigate & wait for animations to finish
    console.log('📄 Loading homepage...');
    await page.goto(URL, { waitUntil: 'networkidle2' });

    // Wait for opening animation + landing sections to appear
    await sleep(6000); // opening animation ~4.8s + landing stagger ~800ms

    // Hide the music player from screenshot (optional, comment out to include)
    // await page.evaluate(() => {
    //   const mp = document.getElementById('music-player');
    //   if (mp) mp.style.display = 'none';
    // });

    // 5. Take full-page screenshot
    console.log('📸 Capturing screenshot...');
    await page.screenshot({
      path: OUTPUT,
      fullPage: true,
    });

    console.log(`✅ Screenshot saved to ${OUTPUT}`);
    console.log(`   Resolution: ${WIDTH}x${HEIGHT} (full page)`);

    await browser.close();
  } finally {
    // 6. Cleanup
    console.log('\n🛑 Stopping dev server...');
    server.kill('SIGTERM');
    // Force kill after 3s
    setTimeout(() => { try { server.kill('SIGKILL'); } catch {} }, 3000);
  }

  console.log('✨ Done!\n');
}

main().catch(err => {
  console.error('❌ Screenshot failed:', err.message);
  process.exit(1);
});
