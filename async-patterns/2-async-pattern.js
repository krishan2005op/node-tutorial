const {readFile} = require('fs')

const getText = (path) => {
    return new Promise((resolve,reject) => {
        readFile(path,'utf8',(err,data) => {
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}

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
        const first = await getText('./content/first.txt');
        console.log(first)
    } 
    catch (error) {
        console.log(error);
    }
 }

start()
 