const User=require("../models/userModel");


//create Api

const create=async(req,res)=>{
    try {
      const data=req.body;
      //const{name,mobile,city}=data

      const saveData=await User.create(data);
      res.send(201).send({message:"Data created Successfully:",saveData})
        
    } catch (error) {
        res.status(500).send({message:"Internal server Error:",error})
    }
}

module.exports={create}