const {MongoClient}=require("mongodb")//we have imported mongoClient

const url="mongodb://localhost:27017"//localhost database

const mongoClient=new MongoClient(url)
try{
    mongoClient.connect()
    console.log("Server connected with our database");
}
catch(err){
    console.log(err,"error in making the connection to database");
}

//MongoClient
const database=mongoClient.db("Testing_database")
module.exports={database}