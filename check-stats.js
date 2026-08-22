import fs from 'fs';

const code = fs.readFileSync('readdy-page.txt', 'utf8');

// Let's search around key phrases to find nearby numbers or strings
const targets = ["Happy Clients", "Success Rate", "Years Experience", "Valuations Done", "Accuracy Rate"];

for (const target of targets) {
  const index = code.indexOf(target);
  if (index !== -1) {
    const around = code.substring(Math.max(0, index - 300), Math.min(code.length, index + 350));
    console.log(`=== AROUND "${target}" ===`);
    console.log(around);
    console.log('\n');
  }
}
