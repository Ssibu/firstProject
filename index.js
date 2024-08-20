const express=require("express");
const mongoose=require("mongoose");
const userRoute=require("./routes/route")
const app=express();

//middleware
app.use(express.json())

const Port=5000;

//mongoDb connection 

mongoose.connect("mongodb+srv://shibaexpertsolutions:8639grreJ3e8rT9a@cluster0.v0ne3.mongodb.net/first")
.then(()=>{
    console.log("MongoDb connection Successfully")
})

.catch((error)=>{
    console.log("Connection failed:",error)
})

//connect with route
app.use("/",userRoute)

//server connect

app.listen(Port,()=>{ 
       console.log("Server is connection on Port no:",Port)
})

