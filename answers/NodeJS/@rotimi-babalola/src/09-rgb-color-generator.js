const chalk = require('chalk');

const sampleText = 'Hello world!';

const R = Math.floor(Math.random() * 255);
const G = Math.floor(Math.random() * 255);
const B = Math.floor(Math.random() * 255);

const RGB = `R: ${R}, G: ${G}, B: ${B}`;

console.log(RGB);

console.log(chalk.rgb(R, G, B).underline(sampleText));
