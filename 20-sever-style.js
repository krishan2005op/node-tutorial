const http = require('http');
const {readFileSync} = require('fs')

//get all files
const homePage = readFileSync('./node-express-course/02-express-tutorial/navbar-app/index.html')
const homeStyle = readFileSync('./node-express-course/02-express-tutorial/navbar-app/styles.css')
const homeImage = readFileSync('./node-express-course/02-express-tutorial/navbar-app/logo.svg')
const homeLogic = readFileSync('./node-express-course/02-express-tutorial/navbar-app/browser-app.js')

const server = http.createServer((req,res)=>{
    const url = req.url;
    // home page
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    //about page
    else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>about page</h1>')
        res.end()
    }
    //styles
    else if(url === '/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyle)
        res.end()
    }
    //image/logo
    else if(url === '/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }
    //logic
    else if(url === '/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    //404
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>error 404</h1>')
        res.end()
    }
})

server.listen(5003)

