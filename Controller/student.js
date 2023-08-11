const {database}=require("../config/db")
const studentcollection= database.collection("studentrecord");


let arr=[];
let adddata=async(req,res)=>{
    const data=req.body;
    const result= await studentcollection.insertOne(data);
res.send({msg:"successfully added ",data:result})
}

let x=(req,res)=>{
    res.send("x is sent")
}
//Add multiple data
let addmultipledata=async(req,res)=>{
    const data=req.body;
    const result=await studentcollection.insertMany(data)
    res.send({msg:"successfully added",data:result})
}
//Query1 .list all the query elements 
let listalldata=async(req,res)=>{
    let data=req.body;
    console.log(data)
    const result =await studentcollection.find().toArray();

    res.send({msg:"succcessfully retrieved",data:result})
}
//Query2.salary more than 30000
let listsalarymoret30k=async(req,res)=>{
    let data=req.body;
    console.log(data)

    const result =await studentcollection.find({"salary":{"$gte":30000}}).toArray();

    res.send({msg:"succcessfully retrieved",data:result})
}
//Query3.experience more than 2years
let listexperiencegt2=async(req,res)=>{
    let data=req.body;
    console.log(data)
    
    const result =await studentcollection.find({"experience":{"$gte":2}}).toArray();

    res.send({msg:"succcessfully retrieved",data:result})
}
//Query4.grad after 2015 and experience more than 1yr
let listexpmthn1ndgradafter15=async(req,res)=>{
   
    const result =await studentcollection.find({"experience":{"$gte":1},"gradyear":{"$gt":2015}}).toArray();

    res.send({msg:"succcessfully retrieved",data:result})
}

//Query5.change the salary of employees whose is greater than 70000 to 65000
let chng70kto65k=async(req,res)=>{
   
    const result =await studentcollection.updateMany({"salary":{"$gte":70000}},{"$set":{"salary":2015}});
    res.send({msg:"succcessfully updated",data:result})
}
//Query6.Delete all the employees whose last company is y
let dellastcompanyy=async(req,res)=>{
   
    const result =await studentcollection.deleteMany({"lastcompany":"y"})
    res.send({msg:"succcessfully deleted",data:result})
}
module.exports={adddata,addmultipledata,x,listalldata,listsalarymoret30k,listexperiencegt2,listexpmthn1ndgradafter15,chng70kto65k,dellastcompanyy}
