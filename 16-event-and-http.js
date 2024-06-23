const http = require('http')

const server = http.createServer()

server.on('request',(req,res)=>{
    res.end('kripanshi chota bacha hai')
})

server.listen(5001)