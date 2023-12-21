const express = require('express')
const app = express()
const users=[{
    name:"ria",
    followers:1000,
    location:"debra"},
    {
    name:"balu",
    followers:120,
    location:"brew"},
    {
    name:"rama",
    followers:100,
    location:"nyu"},    
]

const questions = [
    { questions:"How to install java",
    slug:'how to install jdk',
    votes:3,
    views:10,
    tags:"pip"},
    { questions:"How to install python",
    slug:'how to install jupyter',
    votes:9,
    views:11,
    tags:"pip"},
    { questions:"How to install mocha",
    votes:2,
    slug:'how to install mocha9',
    views:19,
    tags:"pip"},
    { questions:"How to install c#",
    slug:'how to install c#2.9',
    votes:8,
    views:17,
    tags:"pip"},
]
app.get('/',(req,res)=>{
     res.send('Home')
})
app.get('/questions',(req,res)=>{
    res.send(questions)
    
})
app.get('/questions/:slug',(req,res)=>{
    console.log(req.params.slug)
    const slug=req.params.slug
    questions.map(obj=>{
        if (obj.slug === slug){
            res.send(obj)
        }
    })
    res.send("question not found")
})
app.get('/users',(req,res)=>{
    res.send(users)    
})
app.get('/tags',(req,res)=>{
    res.send('Tags')    
})
app.get('/jobs/companies',(req,res)=>{
    res.send('Companies')    
})
app.listen(1234,()=>{
    console.log('Listening....')
})