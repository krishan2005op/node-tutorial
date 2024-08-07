const http = require('http')
const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.end('Hello')
    }
    if(req.url === '/about'){
        // blocking code
        for (let index = 0; index < 300; index++) {
            for(let j =0;j<1000;j++){
                console.log(`${index} ${j}`);
            }
        }
        res.end('Hello Again')
    }
})
server.listen(5000,(req,res) =>{
    console.log(' port ✅ ');
})