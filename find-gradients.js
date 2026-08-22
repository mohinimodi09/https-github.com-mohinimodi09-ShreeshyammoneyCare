import fs from 'fs';

const code = fs.readFileSync('readdy-page.txt', 'utf8');

// Search for the services list array
// It often looks like an array with objects containing title, description, icon, gradient, link, etc.
const regex = /\{[^{}]*title:[^{}]*description:[^{}]*\}/g;
const matches = code.match(regex);

if (matches) {
  console.log('Matches found:', matches.length);
  matches.forEach((m, idx) => {
    console.log(`Match ${idx + 1}:`);
    console.log(m);
    console.log('---');
  });
} else {
  // Let's do a broader search around "IPO Services"
  const ipoIdx = code.indexOf("IPO Services");
  if (ipoIdx !== -1) {
    console.log("Found IPO Services. Showing nearby code:");
    console.log(code.substring(ipoIdx - 100, ipoIdx + 1100));
  }
}
