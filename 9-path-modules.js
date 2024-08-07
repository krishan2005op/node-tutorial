const path = require('path');

console.log(path.sep);

const filepath = path.join('/content','subfolder','test.txt')
console.log(filepath);


const base = path.basename(filepath) //current file name
console.log(base);

const absolute = path.resolve(__filename,'content','subfolder','test.txt')
console.log(absolute);