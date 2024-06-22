//starting operating system process
console.log('first');
setTimeout(() => {
    console.log('second');   
}, 0);
console.log('third');
//completed and exited operating system process

setInterval(() => {
    console.log('hello world'); 
}, 2000);
console.log('i will run first');
/* process stays alive unless
   kills process ctrl+c
   unexpected error      */