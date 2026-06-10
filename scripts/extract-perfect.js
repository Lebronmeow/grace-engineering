const Jimp = require('jimp');
const potrace = require('potrace');
const fs = require('fs');

async function extractPerfect() {
  const image = await Jimp.read('./public/images/logo.png');
  const { width, height } = image.bitmap;

  const silhouetteImg = image.clone();
  const whiteImg = image.clone();
  const yellowImg = image.clone();

  // Enforce bounding box so all SVGs align perfectly in 3D space
  function enforceBounds(img) {
    img.setPixelColor(0x000000FF, 0, 0);
    img.setPixelColor(0x000000FF, width - 1, height - 1);
  }

  // 1. Silhouette (Solid Blue Gear Base)
  // Everything that is not transparent/white background becomes black
  silhouetteImg.scan(0, 0, width, height, function (x, y, idx) {
    const r = this.bitmap.data[idx];
    const g = this.bitmap.data[idx+1];
    const b = this.bitmap.data[idx+2];
    const isWhiteBg = (r > 240 && g > 240 && b > 240);
    
    if (isWhiteBg) {
      this.bitmap.data[idx] = 255; this.bitmap.data[idx+1] = 255; this.bitmap.data[idx+2] = 255; this.bitmap.data[idx+3] = 255;
    } else {
      this.bitmap.data[idx] = 0; this.bitmap.data[idx+1] = 0; this.bitmap.data[idx+2] = 0; this.bitmap.data[idx+3] = 255;
    }
  });
  enforceBounds(silhouetteImg);

  // 2. White Details (The G and the inner arc)
  // Only perfectly white pixels inside the logo become black
  whiteImg.scan(0, 0, width, height, function (x, y, idx) {
    const r = this.bitmap.data[idx];
    const g = this.bitmap.data[idx+1];
    const b = this.bitmap.data[idx+2];
    
    // The white G and arc in the logo are pure white
    // But we must exclude the white background outside the gear!
    // We can do this by checking if it's white AND inside the gear radius
    const cx = width / 2;
    const cy = height / 2;
    const dist = Math.sqrt((x-cx)**2 + (y-cy)**2);
    // The gear teeth extend to ~width/2. The white G is well inside that, radius < width*0.4
    const isInside = dist < width * 0.4;
    const isWhite = (r > 200 && g > 200 && b > 200);

    if (isWhite && isInside) {
      this.bitmap.data[idx] = 0; this.bitmap.data[idx+1] = 0; this.bitmap.data[idx+2] = 0; this.bitmap.data[idx+3] = 255;
    } else {
      this.bitmap.data[idx] = 255; this.bitmap.data[idx+1] = 255; this.bitmap.data[idx+2] = 255; this.bitmap.data[idx+3] = 255;
    }
  });
  enforceBounds(whiteImg);

  // 3. Yellow Details (Dot, Needle, 3 Dashes)
  yellowImg.scan(0, 0, width, height, function (x, y, idx) {
    const r = this.bitmap.data[idx];
    const g = this.bitmap.data[idx+1];
    const b = this.bitmap.data[idx+2];
    
    const isYellow = (r > 150 && g > 150 && b < 100);

    if (isYellow) {
      this.bitmap.data[idx] = 0; this.bitmap.data[idx+1] = 0; this.bitmap.data[idx+2] = 0; this.bitmap.data[idx+3] = 255;
    } else {
      this.bitmap.data[idx] = 255; this.bitmap.data[idx+1] = 255; this.bitmap.data[idx+2] = 255; this.bitmap.data[idx+3] = 255;
    }
  });
  enforceBounds(yellowImg);

  await silhouetteImg.writeAsync('./public/images/temp-base.png');
  await whiteImg.writeAsync('./public/images/temp-white-details.png');
  await yellowImg.writeAsync('./public/images/temp-yellow-details.png');

  const traceParams = { background: 'transparent', color: '#000000', threshold: 128 };

  potrace.trace('./public/images/temp-base.png', traceParams, (err, svg) => {
    fs.writeFileSync('./public/images/base.svg', svg); fs.unlinkSync('./public/images/temp-base.png');
    console.log('Traced base.svg');
  });
  potrace.trace('./public/images/temp-white-details.png', traceParams, (err, svg) => {
    fs.writeFileSync('./public/images/white-details.svg', svg); fs.unlinkSync('./public/images/temp-white-details.png');
    console.log('Traced white-details.svg');
  });
  potrace.trace('./public/images/temp-yellow-details.png', traceParams, (err, svg) => {
    fs.writeFileSync('./public/images/yellow-details.svg', svg); fs.unlinkSync('./public/images/temp-yellow-details.png');
    console.log('Traced yellow-details.svg');
  });
}

extractPerfect();
