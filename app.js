const express = require ("express");
const app = express();
const fs = require ("fs")
const path = require("path")
const port = 80;


app.use(express.urlencoded({ extended: true }))
app.use(express.json());   


app.set('view engine', 'pug')
app.set('views', path.join(__dirname,'views'))

app.get("/",(req,res)=>{
    res.status(200).render("index.pug")

})
app.post("/",(req,res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    let outputtowrite = `The name of the client is ${name},${age}years old,${gender},living at ${address}`
    fs.writeFileSync('output.txt',outputtowrite)
    const parms = {'message':'your form is submitted successfully'}
    res.status(200).render("index.pug",parms)

})

app.listen(port,()=>{
    console.log[`the application started on port ${port}`]
})