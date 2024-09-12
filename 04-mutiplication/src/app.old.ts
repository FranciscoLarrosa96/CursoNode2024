import fs from 'fs';



let outputMessage = '';
const base = 5;
const headerMessage = `
    ====================
      tabla del ${base}
    ====================
`;

for (let index = 1; index < 10; index++) {
    outputMessage += `${base} x ${index} = ${base * index}\n`
}

outputMessage = headerMessage + outputMessage;
console.log("🚀 ~ outputMessage:", outputMessage)

const outputPath = 'outputs';

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);