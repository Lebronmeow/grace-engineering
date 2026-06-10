const Jimp = require('jimp');
const potrace = require('potrace');
const fs = require('fs');

async function processSeparate() {
  // Read the manually cleaned logo-inner.png (which has transparent background)
  // Wait, I need the original logo, but with the white background removed.
  // Luckily we already made `logo-transparent.png` earlier which has the white bg removed!
  const image = await Jimp.read('./public/images/logo-transparent.png');
  
  const { width, height } = image.bitmap;
  const cx = width / 2;
  const cy = height / 2;
  const innerRadius = Math.min(cx, cy) * 0.62;

  // Clone for outer and inner
  const outerImage = image.clone();
  const innerImage = image.clone();

  // Create solid black silhouettes for POTRACE to capture everything (blue, white, yellow)
  // Potrace traces black, ignores white.
  
  outerImage.scan(0, 0, width, height, function (x, y, idx) {
    const dx = x - cx;
    const dy = y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    // If pixel is transparent or inside the inner radius, make it WHITE (ignored by potrace)
    if (this.bitmap.data[idx + 3] < 128 || dist < innerRadius) {
      this.bitmap.data[idx + 0] = 255;
      this.bitmap.data[idx + 1] = 255;
      this.bitmap.data[idx + 2] = 255;
      this.bitmap.data[idx + 3] = 255;
    } else {
      // Otherwise make it BLACK (traced by potrace)
      this.bitmap.data[idx + 0] = 0;
      this.bitmap.data[idx + 1] = 0;
      this.bitmap.data[idx + 2] = 0;
      this.bitmap.data[idx + 3] = 255;
    }
  });

  innerImage.scan(0, 0, width, height, function (x, y, idx) {
    const dx = x - cx;
    const dy = y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    // If pixel is transparent or outside the inner radius, make it WHITE (ignored)
    if (this.bitmap.data[idx + 3] < 128 || dist >= innerRadius) {
      this.bitmap.data[idx + 0] = 255;
      this.bitmap.data[idx + 1] = 255;
      this.bitmap.data[idx + 2] = 255;
      this.bitmap.data[idx + 3] = 255;
    } else {
      // Otherwise make it BLACK (traced)
      this.bitmap.data[idx + 0] = 0;
      this.bitmap.data[idx + 1] = 0;
      this.bitmap.data[idx + 2] = 0;
      this.bitmap.data[idx + 3] = 255;
    }
  });

  await outerImage.writeAsync('./public/images/temp-outer.png');
  await innerImage.writeAsync('./public/images/temp-inner.png');

  const traceParams = {
    background: 'transparent',
    color: '#000000', // Just need the shape
    threshold: 128,
    optTolerance: 0.2
  };

  potrace.trace('./public/images/temp-outer.png', traceParams, (err, svg) => {
    if (err) throw err;
    fs.writeFileSync('./public/images/outer.svg', svg);
    console.log('Traced outer.svg (silhouette)');
    fs.unlinkSync('./public/images/temp-outer.png');
  });

  potrace.trace('./public/images/temp-inner.png', traceParams, (err, svg) => {
    if (err) throw err;
    fs.writeFileSync('./public/images/inner.svg', svg);
    console.log('Traced inner.svg (silhouette)');
    fs.unlinkSync('./public/images/temp-inner.png');
  });
}

processSeparate();
