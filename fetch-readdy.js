import fs from 'fs';

async function run() {
  const url = 'https://readdy.cc/preview/f122ba85-21e8-4b7d-af1d-5b6df81e9d87/9161312/assets/page-Dph9fP2l.js';
  try {
    console.log('Fetching', url);
    const response = await fetch(url);
    const text = await response.text();
    console.log('Successfully fetched. Total length:', text.length);

    // Let's clean the text if necessary, or format it to be more readable
    // E.g., inserting line breaks after semi-colons or curly braces to make it readable
    let formattedText = text
      .replaceAll(';', ';\n')
      .replaceAll('{', '{\n')
      .replaceAll('}', '}\n')
      .replaceAll('const ', '\nconst ')
      .replaceAll('function ', '\nfunction ');

    fs.writeFileSync('readdy-page.txt', formattedText);
    console.log('Saved to readdy-page.txt');
  } catch (error) {
    console.error('Error fetching readdy asset:', error);
  }
}

run();
