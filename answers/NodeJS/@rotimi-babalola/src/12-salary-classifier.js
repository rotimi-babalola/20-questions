const readlineSync = require('readline-sync');

const BASIC_EARNER = 50000;
const MID_EARNER = 200000;

while (true) {
  const salary = readlineSync.questionFloat('Please enter your salary: ');
  if (salary < BASIC_EARNER) {
    console.log('Basic Earner');
  } else if (salary < MID_EARNER) {
    console.log('Mid Earner');
  } else {
    console.log('High Earner');
  }
}
