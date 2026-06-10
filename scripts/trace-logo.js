const Jimp = require('jimp');
const potrace = require('potrace');
const fs = require('fs');

async function traceLogo() {
  try {
    // Read the logo
    const image = await Jimp.read('./public/images/logo.png');
    
    // Convert to greyscale and increase contrast to make it a clean stencil
    image.greyscale().contrast(0.5);
    
    // Save temp image
    await image.writeAsync('./public/images/temp.png');
    
    // Trace parameters for a clean gear shape
    const params = {
      background: 'transparent',
      color: '#0077B6',
      threshold: 200 // Catch all the blue and yellow
    };

    potrace.trace('./public/images/temp.png', params, function(err, svg) {
      if (err) throw err;
      fs.writeFileSync('./public/images/logo.svg', svg);
      console.log('Successfully traced logo.svg');
      fs.unlinkSync('./public/images/temp.png');
    });
  } catch (err) {
    console.error("Tracing failed:", err);
  }
}

traceLogo();
