const express = require('express');
const { people } = require('./node-express-course/02-express-tutorial/data');
const app = express()

//static asset
app.use(express.static('node-express-course/02-express-tutorial/methods-public'))
app.use(express.urlencoded({extended: false})) //in order to get the data on our terminal
app.use(express.json())

app.get('/api/people',(req,res)=>{
    res.status(200).json({sucess:true,data:people})
})

app.post('/api/people',(req,res)=>{
    const {name} = req.body;
    if (!name) {
        return res.status(410).json({success :false,msg:'plz provide data'})
    }
    res.status(201).json({success:true,person:name})
})

app.post('/login',(req,res)=>{
    const {name} = req.body;
    if (name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('name toh daal le ')
})

app.listen(5008,()=>{
    console.log('server is listening to port : 5008');
})