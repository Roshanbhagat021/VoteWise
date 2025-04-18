const express = require("express")

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {UserModal}  = require("../model/user.model")


const userRouter = express.Router()


userRouter.post("/register",(req,res)=>{
    const {name, email, password} = req.body
    try{
        bcrypt.hash(password,8,async(err,hash)=>{
            if(err){
                res.status(200).json({error:err})
            }else{
                 const user =  UserModal({name,email,password:hash})
                 await user.save()
                 res.status(201).json({msg: 'User registered successfully!', user})
            }
        })

    }catch(err){
        console.log(err)
        res.status(400).json({err:err})
    }

})


userRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body
    try {
        const user = await UserModal.findOne({email})
        if(!user){
            res.status(400).json({msg:"User does not exist"})
        }
        bcrypt.compare(password,user.password,(err,result)=>{
             if(result){
                const token = jwt.sign({userID:user._id,user:user.name},"jaiho")
                 res.status(200).json({msg:"Logged In!",token,name:user.name})
            }else{
                 res.status(400).json({msg:"password galat hai ji!"})
             }
        })

    } catch (error) {
        res.status(400).json({error:error})
    }
})


module.exports = {userRouter}