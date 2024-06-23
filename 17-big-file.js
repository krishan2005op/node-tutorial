const {writeFileSync, write} = require('fs')
for(let i=0;i<1000;i++){
    writeFileSync('./content/big.txt',`hello wrold ${i}\n`,{flag: 'a'})
}