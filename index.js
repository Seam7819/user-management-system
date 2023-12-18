const express = require('express');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json())


const users = [
    {id:1, name: 'sabila', email:'sabila@nur.com'},
    {id:2, name: 'nabila', email:'nabila@nur.com'},
    {id:3, name: 'kabila', email:'kabila@nur.com'},
    {id:4, name: 'labila', email:'labila@nur.com'},
    {id:5, name: 'dabila', email:'dabila@nur.com'}
]

app.get('/', (req,res)=> {
    res.send('Server is running correctly')
})

app.get('/users', (req,res)=> {
    res.send(users)
})

app.post('/users',(req,res)=>{
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)
})

app.listen(port,()=> {
    console.log(`This server is running on port: ${port}`)
})