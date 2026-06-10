const Jimp = require('jimp');
const potrace = require('potrace');
const fs = require('fs');

async function extractColors() {
  const image = await Jimp.read('./public/images/logo-transparent.png');
  const { width, height } = image.bitmap;
  const cx = width / 2;
  const cy = height / 2;
  const innerRadius = Math.min(cx, cy) * 0.62;

  const whiteImg = image.clone();
  const yellowImg = image.clone();
  
  // Isolate White
  whiteImg.scan(0, 0, width, height, function (x, y, idx) {
    const r = this.bitmap.data[idx];
    const g = this.bitmap.data[idx+1];
    const b = this.bitmap.data[idx+2];
    const a = this.bitmap.data[idx+3];
    const isWhite = (r > 200 && g > 200 && b > 200);
    const dist = Math.sqrt((x-cx)**2 + (y-cy)**2);
    
    if (a === 0 || !isWhite || dist > innerRadius) {
      this.bitmap.data[idx] = 255; this.bitmap.data[idx+1] = 255; this.bitmap.data[idx+2] = 255; this.bitmap.data[idx+3] = 255;
    } else {
      this.bitmap.data[idx] = 0; this.bitmap.data[idx+1] = 0; this.bitmap.data[idx+2] = 0; this.bitmap.data[idx+3] = 255;
    }
  });

  // Isolate Yellow
  yellowImg.scan(0, 0, width, height, function (x, y, idx) {
    const r = this.bitmap.data[idx];
    const g = this.bitmap.data[idx+1];
    const b = this.bitmap.data[idx+2];
    const a = this.bitmap.data[idx+3];
    const isYellow = (r > 200 && g > 200 && b < 150);
    const dist = Math.sqrt((x-cx)**2 + (y-cy)**2);
    
    if (a === 0 || !isYellow || dist > innerRadius) {
      this.bitmap.data[idx] = 255; this.bitmap.data[idx+1] = 255; this.bitmap.data[idx+2] = 255; this.bitmap.data[idx+3] = 255;
    } else {
      this.bitmap.data[idx] = 0; this.bitmap.data[idx+1] = 0; this.bitmap.data[idx+2] = 0; this.bitmap.data[idx+3] = 255;
    }
  });

  await whiteImg.writeAsync('./public/images/temp-white.png');
  await yellowImg.writeAsync('./public/images/temp-yellow.png');

  const traceParams = { background: 'transparent', color: '#000000', threshold: 128, optTolerance: 0.2 };

  potrace.trace('./public/images/temp-white.png', traceParams, (err, svg) => {
    fs.writeFileSync('./public/images/white.svg', svg);
    fs.unlinkSync('./public/images/temp-white.png');
  });

  potrace.trace('./public/images/temp-yellow.png', traceParams, (err, svg) => {
    fs.writeFileSync('./public/images/yellow.svg', svg);
    fs.unlinkSync('./public/images/temp-yellow.png');
  });
}

extractColors();
