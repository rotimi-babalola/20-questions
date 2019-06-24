const readLine = require('readline-sync');
const IntToEnglish = require('../utils/numToWords');

const intToEnglish = new IntToEnglish();

while (true) {
  const number = readLine.questionInt('Enter a number: ');
  const numberWord = intToEnglish.numToWords(number);
  console.log(numberWord);
}
