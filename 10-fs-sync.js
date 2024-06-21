const {readFileSync, writeFileSync} = require('fs');
// we can select particular fucntions from modules like above readFileSync is one of the functions of FS
console.log('start');

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first,'\n',second);

writeFileSync(
    './content/result-sync.txt',`Here is the result : ${first} , ${second}`
    ,{flag: 'a'}
)

console.log('done with the task');
console.log('starting with the next one');