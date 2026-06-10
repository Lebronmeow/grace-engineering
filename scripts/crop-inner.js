const Jimp = require('jimp');

async function processLogo() {
  const image = await Jimp.read('./public/images/logo.png');
  
  // Upscale to 1024x1024 using bicubic interpolation for sharpness
  image.resize(1024, 1024, Jimp.RESIZE_BICUBIC);
  
  const { width, height } = image.bitmap;
  const cx = width / 2;
  const cy = height / 2;
  const innerRadius = Math.min(cx, cy) * 0.63;

  image.scan(0, 0, width, height, function (x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];

    const dx = x - cx;
    const dy = y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // Outside the inner circle → fully transparent
    if (dist > innerRadius) {
      this.bitmap.data[idx + 3] = 0;
      return;
    }

    // Feather the edge of the circle (smooth anti-alias)
    const edgeWidth = 4;
    if (dist > innerRadius - edgeWidth) {
      const factor = (innerRadius - dist) / edgeWidth;
      this.bitmap.data[idx + 3] = Math.round(this.bitmap.data[idx + 3] * factor);
      return;
    }

    // Remove white and near-white pixels aggressively
    // Check if the pixel is light/grayish-white
    const brightness = (r + g + b) / 3;
    const saturation = Math.max(r, g, b) - Math.min(r, g, b);
    
    if (brightness > 180 && saturation < 40) {
      // Near-white with low saturation → transparent
      this.bitmap.data[idx + 3] = 0;
    } else if (brightness > 150 && saturation < 30) {
      // Slightly less white → fade out
      const alpha = Math.max(0, (255 - brightness) * 3);
      this.bitmap.data[idx + 3] = Math.min(this.bitmap.data[idx + 3], alpha);
    }
  });

  await image.writeAsync('./public/images/logo-inner.png');
  console.log('Saved logo-inner.png (1024x1024, clean edges, no white residue)');
}

processLogo();
