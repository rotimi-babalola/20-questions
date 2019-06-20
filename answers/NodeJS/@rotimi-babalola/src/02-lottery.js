const readLineSync = require('readline-sync');

const LUCKY_NUMBER = 7;

while (true) {
  console.log('Press enter key: ');
  readLineSync.prompt();

  const numbers = [
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
  ];

  console.log(numbers);

  if (numbers.includes(LUCKY_NUMBER)) {
    console.log('Congratulations');
  } else {
    console.log('Better luck next time');
  }
}
