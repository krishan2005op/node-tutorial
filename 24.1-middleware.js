const express = require('express')
const app = express()

// req => middleware => res 

const log = require('./24.2-logger')
const authorize = require('./24.3-authorise')
const morgan = require('morgan')

app.use(morgan('tiny'))
app.use(log)
// to products and items - '/api' before middleware function

app.get('/',(req,res)=>{
    res.send("Home")
})
app.get('/api/products',(req,res)=>{
    res.send("Products")
})
app.get('/api/Items',(req,res)=>{
    console.log(req.user);
    res.send("Items")
})
app.get('/about',(req,res)=>{
    res.send("About")
})


app.listen(5006,()=>{
    console.log('server is listening to port : 5006');
})