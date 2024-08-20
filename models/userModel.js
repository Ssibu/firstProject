const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
  name:{
    type:String,  
    //required:true
  },
  mobile:{
    type:Number
  },
  city:{
    type:String
  }

},{timestamps:true})


const User=mongoose.model("user",userSchema);
module.exports= User;