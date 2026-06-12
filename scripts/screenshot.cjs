/**
 * Homepage Screenshot Script
 * Starts dev server → captures homepage → saves to public/_preview.png
 * Usage: node scripts/screenshot.cjs
 */

const { spawn } = require('child_process');
const path = require('path');
const { setTimeout: sleep } = require('node:timers/promises');
const puppeteer = require('puppeteer');

const PORT = 4321;
const URL = `http://localhost:${PORT}/`;
const OUTPUT = path.join(__dirname, '..', 'public', '_preview.png');
const WIDTH = 1280;

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

  // 1. Start dev server
  console.log('🔧 Starting dev server...');
  const server = spawn('npx', ['astro', 'dev', '--port', String(PORT)], {
    cwd: path.join(__dirname, '..'),
    stdio: ['pipe', 'ignore', 'pipe'], // stdin pipe, ignore stdout, pipe stderr
  });

  server.stderr.on('data', d => process.stderr.write(d));

  try {
    // Wait for server to be ready
    await waitForServer(URL);
    console.log('✅ Dev server ready\n');

    // 2. Launch puppeteer
    console.log('🌐 Launching browser...');
    const browser = await puppeteer.launch({
      defaultViewport: { width: WIDTH, height: 900 },
    });

    const page = await browser.newPage();

    // 3. Navigate & wait for animations to finish
    console.log('📄 Loading homepage...');
    await page.goto(URL, { waitUntil: 'networkidle2' });

    // Wait for opening animation to complete (element removed from DOM when done)
    try {
      await page.waitForFunction(
        () => !document.getElementById('opening-animation'),
        { timeout: 15000 }
      );
    } catch {
      console.log('⚠️  Opening animation did not complete within timeout, proceeding anyway');
    }

    // Extra wait for landing section stagger animation to finish (~500ms max delay)
    await sleep(800);

    // Hide the music player from screenshot (optional, comment out to include)
    // await page.evaluate(() => {
    //   const mp = document.getElementById('music-player');
    //   if (mp) mp.style.display = 'none';
    // });

    // 4. Take full-page screenshot
    console.log('📸 Capturing screenshot...');
    await page.screenshot({
      path: OUTPUT,
      fullPage: true,
    });

    console.log(`✅ Screenshot saved to ${OUTPUT}`);
    console.log(`   Viewport width: ${WIDTH}px (full page)`);

    await browser.close();
  } finally {
    // 5. Cleanup
    console.log('\n🛑 Stopping dev server...');
    server.kill();

    // Force kill after 3s if still alive (cross-platform fallback)
    const forceTimer = setTimeout(() => {
      try { server.kill(); } catch {}
    }, 3000);
    // Don't let this timer keep the process alive
    forceTimer.unref();
  }

  console.log('✨ Done!\n');
}

main().catch(err => {
  console.error('❌ Screenshot failed:', err.message);
  process.exit(1);
});
