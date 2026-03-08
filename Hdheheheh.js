const readline = require('readline');

/**
 * Generate a random Windows 11 product key in Microsoft style:
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

/**
 * Display instructions to open Windows Settings and check activation.
 */
function displayWindowsInstructions() {
  console.log('\n=== Windows 11 Activation & Settings Instructions ===');
  console.log('To open Windows Settings:');
  console.log(' - Press Windows Key + I');
  console.log(' - Or click Start menu and select Settings ⚙️');

  console.log('\nTo check Windows activation status:');
  console.log(' - Go to Settings > System > Activation');
  console.log(' - Or press Windows Key + R, type "slui.exe" and press Enter');
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('=== Buy Windows 11 License Key ===');

function promptDeviceName() {
  return new Promise((resolve) => {
    rl.question('Enter Windows 11 device name to buy license key: ', (deviceName) => {
      resolve(deviceName.trim());
    });
  });
}

function promptEdition() {
  return new Promise((resolve) => {
    console.log('\nSelect Windows 11 Edition:');
    console.log('1. Windows 11 Pro (Retail)');
    console.log('2. Windows 11 Home');
    rl.question('Enter your choice (1 or 2): ', (choice) => {
      resolve(choice.trim());
    });
  });
}

async function main() {
  try {
    const deviceName = await promptDeviceName();
    if (!deviceName) {
      console.error('Error: Device name cannot be empty. Please run the script again.');
      rl.close();
      return;
    }

    const editionChoice = await promptEdition();
    let edition;
    if (editionChoice === '1') {
      edition = 'Windows 11 Pro (Retail)';
    } else if (editionChoice === '2') {
      edition = 'Windows 11 Home';
    } else {
      console.error('Invalid edition choice. Please run the script again.');
      rl.close();
      return;
    }

    const productKey = generateProductKey();

    console.log('\nOrder successful!');
    console.log(`Device Name: ${deviceName}`);
    console.log(`Edition: ${edition}`);
    console.log(`Your Windows 11 product key is:\n${productKey}`);

    displayWindowsInstructions();
  } catch (error) {
    console.error('An unexpected error occurred:', error);
  } finally {
    rl.close();
  }
}

main();
