const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./node-express-course/02-express-tutorial/navbar-app/'))

app.get('/',(req,res)=> {
    res.sendFile(path.resolve(__dirname,'./node-express-course/02-express-tutorial/navbar-app/index.html'))
})

app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
})

app.listen(5004,()=>{
    console.log('server is listening to port : 5000');
})




