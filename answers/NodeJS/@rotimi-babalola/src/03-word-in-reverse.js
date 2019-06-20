const readLineSync = require('readline-sync');

while (true) {
  const string = readLineSync.question('Please enter a string: ');

  const reversed = string
    .split('')
    .reverse()
    .join('');

  console.log(reversed);
}
