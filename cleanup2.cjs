const fs = require('fs');

let content = fs.readFileSync('src/data.ts', 'utf8');

const stepsToRemove = ['step11', 'step12', 'step13', 'step14', 'step15', 'step16', 'step17', 'step18', 'step19', 'step20'];

// We can just replace the definition of newLangsData with a parsed version, but it's a string.
// Let's use a simple regex to remove "step11": { ... } up to the end of the language block.
// Actually, it's easier to just do it via AST or careful string matching.
// Since we know the structure:
// "step11": { ... },
// "step12": { ... },
// ...
// "step20": { ... }
// }

// Let's just find "step11" for each language and remove everything until the end of the language object.
// The languages are "c", "cpp", "csharp".
['"c": {', '"cpp": {', '"csharp": {'].forEach(langKey => {
  const langStart = content.indexOf(langKey);
  if (langStart !== -1) {
    const step11Start = content.indexOf('"step11": {', langStart);
    if (step11Start !== -1) {
      // Find the end of step20. It ends with:
      // "step20": { ... }
      // }
      // So we can find the next language key, or the end of newLangsData.
      let nextLangStart = content.length;
      if (langKey === '"c": {') nextLangStart = content.indexOf('"cpp": {');
      else if (langKey === '"cpp": {') nextLangStart = content.indexOf('"csharp": {');
      else nextLangStart = content.indexOf('};', step11Start); // end of newLangsData

      // We want to remove from step11Start to nextLangStart, but keep the closing brace if it's the end of the language block.
      // Actually, before step11Start, there is a comma for step10.
      const commaBeforeStep11 = content.lastIndexOf(',', step11Start);
      
      // The end of the language block is right before nextLangStart.
      // Let's find the closing brace of the language block.
      const endOfLangBlock = content.lastIndexOf('}', nextLangStart - 1);
      
      content = content.substring(0, commaBeforeStep11) + '\n    }' + content.substring(endOfLangBlock + 1);
    }
  }
});

fs.writeFileSync('src/data.ts', content, 'utf8');
console.log('Done');
