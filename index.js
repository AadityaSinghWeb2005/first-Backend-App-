const express= require("express");
const app = express();
require('dotenv').config()
const port = process.env.PORT;


app.get('/',(req,res)=>{
    return res.send('hello from server')
})

app.get('/snapchat',(req,res)=>{
    return  res.send('hello from snapchat')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Login</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Chai aur code</h2>')
})

app.listen(port,()=>console.log(`server listening at port : ${port}`))