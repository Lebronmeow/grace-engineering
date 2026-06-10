const Jimp = require('jimp');

async function removeWhite() {
  const image = await Jimp.read('./public/images/logo.png');
  const { width, height } = image.bitmap;

  image.scan(0, 0, width, height, function (x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];

    // If pixel is close to white/light gray, make it transparent
    if (r > 220 && g > 220 && b > 220) {
      this.bitmap.data[idx + 3] = 0; // Set alpha to 0
    }
  });

  await image.writeAsync('./public/images/logo-transparent.png');
  console.log('Saved logo-transparent.png with white background removed');
}

removeWhite();
