const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

const filePath1 = path.join(__dirname, '../data/sample.txt');
const filePath2 = path.join(__dirname, '../data/sample2.txt');

const promiseArray = [
  readFileAsync(filePath1, { encoding: 'utf8' }),
  readFileAsync(filePath2, { encoding: 'utf8' }),
];

Promise.all(promiseArray)
  .then(data => {
    // .filter() removes empty strings from the array
    const foo = data.map(el => el.split('\n').filter(item => item));

    const longerFile = foo[0].length > foo[1].length ? foo[0] : foo[1];
    const shorterFile = foo[1].length < foo[0].length ? foo[1] : foo[0];

    for (let i = 0; i < longerFile.length; i++) {
      console.log(`${longerFile[i]} ${shorterFile[i] || ''}`);
    }
  })
  .catch(err => {
    console.log(`An error occurred ${err.toString()}`);
  });
