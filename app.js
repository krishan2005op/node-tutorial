const express = require('express')
const app = express()
const {products} = require('./node-express-course/02-express-tutorial/data.js')
app.get('/',(req,res)=>{
    res.send('<style>*{background-color: black; color: white;}</style><h1>Home page</h1><a href="/api/products">products</a>')
})
app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image}
    })
    res.json(newProducts)
})
app.listen(5005,()=>{
    console.log('server is listening to port : 5000');
})