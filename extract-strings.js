import fs from 'fs';

const text = fs.readFileSync('readdy-page.txt', 'utf8');

// Match backtick strings (which are used for template literals in modern bundle output)
const backtickRegex = /`([^`]{2,300})`/g;
const strings = [];
let match;

while ((match = backtickRegex.exec(text)) !== null) {
  const str = match[1].trim();
  if (str && !str.includes('class') && !str.includes('svg') && !str.includes('M ') && str.length > 5) {
    strings.push(str);
  }
}

// Write the first 200 clean strings to a file
fs.writeFileSync('extracted-strings.txt', Array.from(new Set(strings)).join('\n---\n'));
console.log('Saved', strings.length, 'unique template strings into extracted-strings.txt');
