const express = require("express")
const { auth } = require("../middleware/auth.middleware")
const { petitionModel } = require("../model/petition.model")

const petitionRouter = express.Router()



petitionRouter.get("/",async(req,res)=>{
    try {
        const petitions = await petitionModel.find()
        res.status(200).json({petitions})
        
    } catch (error) {
        res.status(400).json({error})
    }

})

petitionRouter.use(auth)



petitionRouter.post("/create",async(req,res)=>{
    console.log("reqbody",req.body);
    try {
        const petition = new petitionModel(req.body)
        await petition.save()
        res.status(200).json({msg:"New petition created!"})
    } catch (error) {
        res.status(400).json({error:error})
    }
    
})


petitionRouter.delete("/delete",(req,res)=>{

})



module.exports = {petitionRouter}