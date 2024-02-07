const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("<h1>Hellooooo World</h1>");
})

app.listen(8003,()=>console.log("Server is up and running"));
