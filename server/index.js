const express = require("express")
const {connection} = require("./db")
const {userRouter } = require("./routes/user.route")
const {petitionRouter} = require("./routes/petitions.route")
require("dotenv").config()
const cors = require('cors');
const port = process.env.PORT || 8080
const app = express();

app.use(express.json());
app.use(cors());


app.use("/user",userRouter)
app.use("/petition",petitionRouter)


app.get("/",(req,res)=>{
   res.send("hello my name is khan")
})


app.listen(port,async()=>{
    try {
        await connection
        console.log("Connected to the DB");
        console.log("Server is Running on 8080");
    } catch (error) {
        console.log(error);
    }
})