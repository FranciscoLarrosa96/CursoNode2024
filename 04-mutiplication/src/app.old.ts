import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';

const { b: base, l: limit, s: show } = yarg;

let outputMessage = '';

const headerMessage = `
    ====================
      tabla del ${base}
    ====================
`;

for (let index = 1; index < limit; index++) {
  outputMessage += `${base} x ${index} = ${base * index}\n`
}

outputMessage = headerMessage + outputMessage;
if (show) {
  console.log("🚀 ~ outputMessage:", outputMessage)
}

const outputPath = 'outputs';

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);