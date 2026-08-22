import fs from 'fs';

const code = fs.readFileSync('readdy-page.txt', 'utf8');
const startIdx = code.indexOf('Happy Clients');
if (startIdx !== -1) {
  console.log(code.substring(startIdx - 200, startIdx + 500));
}
