const express = require('express');
const { people } = require('./node-express-course/02-express-tutorial/data');
const app = express()

//static asset
app.use(express.static('node-express-course/02-express-tutorial/methods-public'))
//parse from data
app.use(express.urlencoded({extended: false})) //in order to get the data on our terminal
app.use(express.json())

app.post('/login',(req,res)=>{
    const {name} = req.body;
    if (name){
        console.log(req.body);
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('name toh daal le ')
})

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


app.put('/api/people/:id', (req,res)=>{
    const { id } = req.params
    const { name } = req.body
    
    const person = people.find((person)=> person.id === Number(id))
    if (!person) {
        return res.status(404).json({success :false,msg:`no person with id ${id}`})
    }
    const newPerson = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success:true,data:newPerson})
})

app.delete('/api/people/:id',(req,res)=>{
    const person = people.find((person)=> person.id === Number(req.params.id))

    if (!person) {
        return res.status(404).json({success :false,msg:`no person with id ${req.params.id}`})
    }

    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({success:true,data:newPeople})
})

app.listen(5009,()=>{
    console.log('server is listening to port : 5009');
})