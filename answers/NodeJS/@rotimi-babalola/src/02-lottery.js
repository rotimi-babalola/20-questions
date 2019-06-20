const readLineSync = require('readline-sync');

// eslint-disable-next-line no-constant-condition
while (true) {
  console.log('Press enter key: ');
  readLineSync.prompt();

  const numbers = [
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
  ];

  console.log(numbers);

  if (numbers.includes(7)) {
    console.log('Congratulations');
  } else {
    console.log('Better luck next time');
  }
}
