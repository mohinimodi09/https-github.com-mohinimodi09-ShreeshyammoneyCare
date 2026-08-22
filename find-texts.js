import fs from 'fs';

const code = fs.readFileSync('readdy-page.txt', 'utf8');

// Modern bundler outputs strings inside single quotes, double quotes, and backticks.
// Let's extract any string literal sequence that represents visible text.
const singleQuotes = code.match(/'([^'\\]|\\.)*'/g) || [];
const doubleQuotes = code.match(/"([^"\\]|\\.)*"/g) || [];
const backticks = code.match(/`([^`\\]|\\.)*`/g) || [];

const allRaw = [...singleQuotes, ...doubleQuotes, ...backticks];
const englishText = [];

for (const raw of allRaw) {
  // strip surrounding quotes
  let content = raw.substring(1, raw.length - 1);
  // unescape characters
  content = content.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\n/g, ' ').replace(/\\/g, '');
  content = content.trim();

  // Filter for lines that contain standard English words (at least two space-separated words)
  if (content.length > 10 && /\s/.test(content) && /^[A-Za-z0-9]/.test(content)) {
    // Exclude strings that look like CSS classes, regex patterns, svg paths, or code
    if (!content.includes('class=') && 
        !content.includes('href=') && 
        !content.includes('div') && 
        !content.includes('svg') && 
        !content.includes('span') && 
        !content.includes('px-') && 
        !content.includes('#') && 
        !content.includes(';')) {
      englishText.push(content);
    }
  }
}

// deduplicate
const uniqueTexts = Array.from(new Set(englishText));

fs.writeFileSync('visible-texts.txt', uniqueTexts.join('\n\n'));
console.log('Found', uniqueTexts.length, 'English text blocks. Saved to visible-texts.txt');
