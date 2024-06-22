const http = require('http')
const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.end('Kripanshi pagal hai')
    }
    if(req.url === '/about'){
        // blocking code
        for (let index = 0; index < 300; index++) {
            for(let j =0;j<1000;j++){
                console.log(`${index} ${j}`);
            }
        }
        res.end('kripanshi aur zyada pagal hai')
    }
})
server.listen(5000,(req,res) =>{
    console.log('dhund raha hu rukja ');
})