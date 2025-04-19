const express = require("express")
const {connection} = require("./db")
const {userRouter } = require("./routes/user.route")
const {petitionRouter} = require("./routes/petitions.route")

const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


app.use("/user",userRouter)
app.use("/petition",petitionRouter)


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