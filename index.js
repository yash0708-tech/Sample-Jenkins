const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("<h1>New Pipeline</h1>");
})

app.listen(8001,()=>console.log("Server is up and running"));
