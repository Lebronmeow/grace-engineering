const Jimp = require('jimp');
const potrace = require('potrace');
const fs = require('fs');

async function extractG() {
  const image = await Jimp.read('./public/images/logo-transparent.png');
  const { width, height } = image.bitmap;
  const cx = width / 2;
  const cy = height / 2;
  
  // The white ring and yellow dial can be filtered out by color.
  // We only want the blue pixels.
  image.scan(0, 0, width, height, function (x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    const a = this.bitmap.data[idx + 3];

    // Is it blue? Blue typically has b > r and b > g
    // Or we can just remove yellow and white.
    const isYellow = (r > 200 && g > 200 && b < 100);
    const isWhite = (r > 200 && g > 200 && b > 200);
    const dist = Math.sqrt((x-cx)**2 + (y-cy)**2);
    
    // The outer gear is also blue, so we must erase everything outside the inner ring
    const innerRadius = Math.min(cx, cy) * 0.62;

    if (a === 0 || dist > innerRadius || isYellow || isWhite) {
      // Make it white (ignored by potrace)
      this.bitmap.data[idx + 0] = 255;
      this.bitmap.data[idx + 1] = 255;
      this.bitmap.data[idx + 2] = 255;
      this.bitmap.data[idx + 3] = 255;
    } else {
      // Make the G black (traced by potrace)
      this.bitmap.data[idx + 0] = 0;
      this.bitmap.data[idx + 1] = 0;
      this.bitmap.data[idx + 2] = 0;
      this.bitmap.data[idx + 3] = 255;
    }
  });

  await image.writeAsync('./public/images/temp-g.png');

  const traceParams = {
    background: 'transparent',
    color: '#000000',
    threshold: 128,
    optTolerance: 0.2
  };

  potrace.trace('./public/images/temp-g.png', traceParams, (err, svg) => {
    if (err) throw err;
    fs.writeFileSync('./public/images/g.svg', svg);
    console.log('Traced g.svg (only the G letter)');
    fs.unlinkSync('./public/images/temp-g.png');
  });
}

extractG();
