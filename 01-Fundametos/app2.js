const fs = require('fs');

//Leo el archivo
const data = fs.readFileSync('README.md','utf8');

// Lo modifico
const newData = data.replace(/React/ig, 'Angular');

// Creo un nuevo archivo
fs.writeFileSync('README-Angular.md',newData);