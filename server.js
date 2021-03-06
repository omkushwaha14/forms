const express = require('express')
const path= require ('path')
const http = require('http')
const app = express()
const db= require('./db')
const PORT = process.env.PORT || 5432
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set("view engine", "hbs")
app.get('/',(req,res)=>{
    db.getAllPersons()
        .then((akashs)=>{
         res.render('ak',{akashs})
        })
        .catch((err)=>{
         res.send(err)
        })

})
app.get('/add',(req,res) =>{
  res.render('persons_add')
})
app.get('/adds',(req,res) =>{
    res.render('cong')
})
app.post('/add',(req,res)=>{
db.addNewPerson(req.body.name,req.body.emails,req.body.message)
    .then(()=>{
res.redirect('/adds')
    })
    .catch((err)=>{
       res.send(err)
    })
})


app.listen(PORT, () => {
    console.log("Server listening on port");
});
