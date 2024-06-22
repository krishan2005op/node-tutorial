const {readFile , writeFile} = require('fs')
const util = require('util');
const readFilPromise = util.promisify(readFile)
const writeFilPromise = util.promisify(writeFile)



// const getText = (path) => {
//     return new Promise((resolve,reject) => {
//         readFile(path,'utf8',(err,data) => {
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }

// readFile('./content/result-async.txt','utf8',(err,data) => {
//     if(err){
//         console.log('hai ni aisi koi file');
//         return;
//     }
//     else{
//         console.log(data);
//     }
// }) with call back

// getText('./content/result-async.txt')
//  .then((result) => console.log(result))
//  .catch((err) => console.log(err))

 const start = async() =>{
    try{
        const first = await readFilPromise('./content/first.txt','utf8');
        const second = await readFilPromise('./content/second.txt','utf8');
        await writeFilPromise('./content/result-mind-grenade.txt',`this is awesome : ${first} \n ${second}`
        )
        console.log(first,'\n',second)
    } 
    catch (error) {
        console.log(error);
    }
 }

start()
 