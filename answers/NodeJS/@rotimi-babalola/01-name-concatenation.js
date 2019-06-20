const readLineSync = require('readline-sync');

const firstName = readLineSync.question('What is your first name? ');

const lastName = readLineSync.question('What is your last name? ');

const age = readLineSync.questionInt('How old are you? ', {
  limitMessage: 'Please input a valid age',
});

// eslint-disable-next-line no-console
console.log(`Welcome, ${firstName} ${lastName} (${age})`);
