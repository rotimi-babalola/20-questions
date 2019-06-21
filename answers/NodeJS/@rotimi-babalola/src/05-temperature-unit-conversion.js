const readLineSync = require('readline-sync');

const options = ['Celsius to Fahrenheit', 'Fahrenheit to Celsius'];

const index = readLineSync.keyInSelect(options, 'Enter an option: ');

if (index === 0) {
  console.log('Enter a Celsius value: ');
  const celsiusValue = readLineSync.prompt();
  const value = celsiusValue * (9 / 5) + 32;
  console.log(`The Fahrenheit equivalent is: ${value.toFixed(2)}`);
} else if (index === 1) {
  console.log('Enter a Fahrenheit value: ');
  const fahrenheitValue = readLineSync.prompt();
  const value = (fahrenheitValue - 32) * (5 / 9);
  console.log(`The Celsius equivalent is: ${value.toFixed(2)}`);
} else {
  process.exit();
}
