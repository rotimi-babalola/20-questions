const readLineSync = require('readline-sync');

const BASIC_EARNER = 50000;
const MID_EARNER = 200000;

while (true) {
  const salary = readLineSync.questionFloat('Please enter your salary: ');
  if (salary < 0) {
    console.log('Enter a number greater than zero');
  } else if (salary < BASIC_EARNER) {
    const tax = (5 / 100) * salary;
    console.log(`Tax: ${tax}`);
  } else if (salary < MID_EARNER) {
    const tax = (10 / 100) * salary;
    console.log(`Tax: ${tax}`);
  } else {
    const tax = (15 / 100) * salary;
    console.log(`Tax: ${tax}`);
  }
}
