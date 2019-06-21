const readline = require('readline');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/read-line-by-line.txt');

const readInterface = readline.createInterface({
  input: fs.createReadStream(filePath),
});

readInterface.on('line', line => {
  console.log(line);
});
