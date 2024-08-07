const { log } = require('console');
const {readFile, writeFile} = require('fs');
const { first } = require('lodash');

console.log('start');
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log('no such file bund marra');
        return ; 
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,results)=>{
        if(err){
            console.log('no such file ');
            return ; 
        }
        const second = results;
        writeFile(
            './content/result-async.txt',
            'I am a programmer'
            ,(err,resuult)=>{
                if(err){
                    console.log('no such file');
                    return ; 
                }
                console.log('done with this task ');
            },
        console.log(`${first} \n ${second}`));
        
        
    })
})

console.log('starting the next one');