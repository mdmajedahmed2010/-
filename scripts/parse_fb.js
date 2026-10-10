const fs = require('fs');

const content = fs.readFileSync('C:\\Users\\Majed\\.gemini\\antigravity-ide\\brain\\4a4fd7aa-a257-4614-ab7a-11616f0e68c4\\.system_generated\\steps\\15\\content.md', 'utf8');

const scripts = content.match(/<script\b[^>]*>([\s\S]*?)<\/script>/gi) || [];
console.log('Scripts count:', scripts.length);

for (let i = 0; i < scripts.length; i++) {
  const s = scripts[i];
  if (s.includes('Pulsar') || s.includes('fulbaria') || s.includes('Nagor') || s.includes('Shop') || s.includes('01600911522')) {
    console.log(`Script ${i} matched:`);
    // extract any strings inside that script
    const matches = s.match(/"([^"\\]{5,100})"/g) || [];
    console.log('Strings sample:', matches.slice(0, 30).join(', '));
  }
}
