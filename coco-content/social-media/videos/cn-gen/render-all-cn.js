const puppeteer = require('/tmp/node_modules/puppeteer-core');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const FPS = 15;
const WIDTH = 1080;
const HEIGHT = 1920;

const videos = [
  { html: 'agent-team-cn.html', output: 'agent-team-video-v4-cn.mp4', duration: 75 },
  { html: 'code-reviewer-cn.html', output: 'code-reviewer-video-cn.mp4', duration: 45 },
  { html: 'auto-report-cn.html', output: 'auto-report-video-cn.mp4', duration: 48 },
  { html: 'competitive-research-cn.html', output: 'competitive-research-video-cn.mp4', duration: 40 },
];

async function renderVideo(browser, videoConfig) {
  const { html, output, duration } = videoConfig;
  const totalFrames = FPS * duration;
  const framesDir = `/tmp/video-frames-${path.basename(html, '.html')}`;

  console.log(`\n=== Rendering ${output} (${duration}s, ${totalFrames} frames) ===`);

  if (fs.existsSync(framesDir)) fs.rmSync(framesDir, { recursive: true });
  fs.mkdirSync(framesDir, { recursive: true });

  const page = await browser.newPage();
  await page.setViewport({ width: WIDTH, height: HEIGHT });

  const htmlPath = path.join(__dirname, html);
  await page.goto('file://' + htmlPath, { waitUntil: 'load' });
  await page.waitForFunction('typeof window.renderFrame === "function"');
  console.log(`Page loaded: ${html}`);

  const startTime = Date.now();
  for (let i = 0; i < totalFrames; i++) {
    const timeMs = (i / FPS) * 1000;
    await page.evaluate((t) => window.renderFrame(t), timeMs);
    await new Promise(r => setTimeout(r, 20));
    const frameNum = String(i).padStart(4, '0');
    await page.screenshot({ path: `${framesDir}/frame-${frameNum}.png` });
    if (i % 75 === 0) {
      const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
      const pct = ((i / totalFrames) * 100).toFixed(0);
      console.log(`  [${output}] Frame ${i}/${totalFrames} (${pct}%, ${elapsed}s elapsed)`);
    }
  }

  await page.close();

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`  Frames rendered in ${elapsed}s`);

  // Combine to MP4
  const outputPath = path.join(__dirname, output);
  const ffmpegCmd = `ffmpeg -y -framerate ${FPS} -i "${framesDir}/frame-%04d.png" -c:v libx264 -pix_fmt yuv420p -crf 23 -preset fast "${outputPath}" 2>&1`;
  console.log(`  Running ffmpeg...`);
  try {
    execSync(ffmpegCmd, { stdio: 'pipe' });
    console.log(`  Video saved: ${outputPath}`);
  } catch (e) {
    console.error(`  ffmpeg error for ${output}:`, e.message);
  }

  // Cleanup frames
  fs.rmSync(framesDir, { recursive: true });
  console.log(`  Cleaned up frames`);

  return outputPath;
}

(async () => {
  let browser;
  try {
    browser = await puppeteer.launch({
      executablePath: '/usr/bin/google-chrome-stable',
      headless: 'new',
      args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', `--window-size=${WIDTH},${HEIGHT}`]
    });
    console.log('Launched headless Chrome');
  } catch (e) {
    console.log('Launch failed, connecting to existing Chrome at port 9222...');
    browser = await puppeteer.connect({ browserURL: 'http://127.0.0.1:9222' });
    console.log('Connected to existing Chrome');
  }

  const totalStart = Date.now();

  for (const video of videos) {
    await renderVideo(browser, video);
  }

  const totalElapsed = ((Date.now() - totalStart) / 1000).toFixed(1);
  console.log(`\n=== All ${videos.length} videos rendered in ${totalElapsed}s ===`);

  if (browser.close) await browser.close();
  else if (browser.disconnect) await browser.disconnect();
})();
