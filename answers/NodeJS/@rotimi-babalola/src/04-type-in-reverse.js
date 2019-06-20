const readLineSync = require('readline-sync');
const faker = require('faker');
const chalk = require('chalk');

const reverseString = str =>
  str
    .split('')
    .reverse('')
    .join('');

while (true) {
  const word = faker.lorem.word();
  console.log(`Type ${chalk.bold.red(word)} in reverse`);
  const input = readLineSync.prompt();

  const reversedWord = reverseString(word);

  if (reversedWord === input) {
    console.log('✅');
  } else {
    console.log('❌');
  }
}
