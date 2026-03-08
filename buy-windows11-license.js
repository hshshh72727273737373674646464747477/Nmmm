const readline = require('readline');

/**
 * Generate a random Windows 11 product key in the format:
 * XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
 * where each X is an uppercase letter or digit.
 * @returns {string} The generated product key.
 */
function generateProductKey() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const keySegments = [];
  for (let i = 0; i < 5; i++) {
    let segment = '';
    for (let j = 0; j < 5; j++) {
      segment += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    keySegments.push(segment);
  }
  return keySegments.join('-');
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Buy Windows 11 License Key');
rl.question('Enter Windows 11 device name to buy license key: ', (deviceName) => {
  if (!deviceName.trim()) {
    console.log('Device name cannot be empty. Please run the script again.');
    rl.close();
    return;
  }

  const productKey = generateProductKey();

  console.log('\nOrder successful!');
  console.log(`Your Windows 11 product key for device "${deviceName}" is:`);
  console.log(productKey);

  rl.close();
});
