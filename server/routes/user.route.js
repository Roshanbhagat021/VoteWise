const express = require("express")
const bcrypt = require("bcrypt")
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
                 res.status(200).json({msg:"New user has been created!"})
            }
        })

    }catch(err){
            res.status(400).json({err:err})
    }

})


module.exports = {userRouter}