const express=require('express')
const app=express();

const route=require("./route/route")
app.use(express.json());
app.use('/api',route)
app.get("/",(req,res)=>{
    res.send("xwerwer")
})
app.listen(3015,()=>{
    console.log("server listening");
})