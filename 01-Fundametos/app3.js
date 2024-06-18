const fs = require('fs');

//Leo el archivo
const data = fs.readFileSync('README.md','utf8');

//Cuento cantidad
const wordCount = data.split(' ').length;

// Usando esta expresion regular puedo saber cuantas veces se repite
const reactWord = data.match(/react/gi).length;

console.log('Cantidad=>', wordCount);
console.log('Cantidad React=>', reactWord);