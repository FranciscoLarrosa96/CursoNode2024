"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
let outputMessage = '';
const base = 5;
const headerMessage = `
    ====================
      tabla del ${base}
    ====================
`;
for (let index = 1; index < 10; index++) {
    outputMessage += `${base} x ${index} = ${base * index}\n`;
}
outputMessage = headerMessage + outputMessage;
console.log("🚀 ~ outputMessage:", outputMessage);
const outputPath = 'outputs';
fs_1.default.mkdirSync(outputPath, { recursive: true });
fs_1.default.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
