const path = require('path');

const files = [
  path.join(__dirname, '../data/sample.txt'),
  path.join(__dirname, '../data/sample2.txt'),
  path.join(__dirname, '../data/student.csv'),
  path.join(__dirname, '../data/index.html'),
  path.join(__dirname, '../data/foo.js'),
];

for (const file of files) {
  console.log(path.extname(file));
}
