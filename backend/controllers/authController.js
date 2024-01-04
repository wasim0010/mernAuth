const bcryptjs = require('bcryptjs')
const Usermodels =require('../models/user')
const bcrypt = require('bcryptjs')
 const jwt = require('jsonwebtoken')



const register =async(req,res)=>{
try {
   const {email,username,password} =req.body
const existUser = await Usermodels.findOne({email})
if(existUser){
   return res.status(400).json({
      message:"user already exist with this email"
   })
    
}
const hashPassword = await bcryptjs.hash(password,10)
 const newUser = new Usermodels({email,username,password :hashPassword})
  await newUser.save()
  res.status(200).json({ success:true,
   message: " user succesfull registered", user:newUser
  })

} catch (error) {
     console.log(error)
   
}
}

const login = async (req,res)=>{
    try {
      const {email,password}= req.body
      const user = await Usermodels.findOne({email})
      if (!user){
      return res.status(404).json({success:false , message: " user not found"})
      }
       const ispasswordValid = await bcryptjs.compare(password,user.password)
      // return res.status(404).json({success:false , message: " user not found."})
 if (!ispasswordValid){
    return res.status(404).json({success:false , message: " Invalid password."})
 

 }
  const  token = jwt.sign({userId:user._id,email:user.email},process.env.SECRET_KEY,{expiresIn:'3d'}
   )
 res.status(200).json({success:true , message: " Login Succesfull.",data:{user,token}})
    } catch (error) { 
      console.log(error)
    }

}

 module.exports={
    register,login
 };