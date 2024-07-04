const express = require('express')
const app = express()
let {people} = require('./node-express-course/02-express-tutorial/data')

app.get('/api/people',(req,res)=>{
    res.status(200).json({sucess:true,data:people})
})


app.listen(5007,()=>{
    console.log('server is listening to port : 5007');
})