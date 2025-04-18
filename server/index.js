const express = require("express")
const cors = require('cors');
const {userRouter } = require("./routes/user.route")
const app = express();
app.use(express.json());
app.use(cors());

const {connection} = require("./db")

app.use("/user",userRouter)


app.get("/",(req,res)=>{
   res.send("hello my name is khan")
})


app.listen(8080,async()=>{
    try {
        await connection
        console.log("Connected to the DB");
        console.log("Server is Running on 8080");
    } catch (error) {
        console.log(error);
    }
})