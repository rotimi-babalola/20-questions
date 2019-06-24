const chalk = require('chalk');

const letters = '0123456789ABCDEF';
const sampleText = 'Hello world!';

let hexCode = '#';

for (let i = 0; i < 6; i++) {
  hexCode += letters[Math.floor(Math.random() * 16)];
}

console.log(hexCode);

console.log(chalk.hex(hexCode).underline(sampleText));
