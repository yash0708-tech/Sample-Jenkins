const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Hellooooo World");
})

app.listen(8000,()=>console.log("Server is up and running"));
