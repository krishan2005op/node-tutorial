const {readFile} = require('fs')

readFile('./content/result-async.txt','utf8',(err,data) => {
    if(err){
        console.log('hai ni aisi koi file');
        return;
    }
    else{
        console.log(data);
    }
})