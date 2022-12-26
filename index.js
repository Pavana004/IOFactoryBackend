const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000;
const userinfo = require("./router");
const cors = require("cors");









//database connection

mongoose.connect('mongodb+srv://Pavan:fXL4E1GnhABEwjVb@cluster0.khhogzb.mongodb.net/moviedata',{useNewUrlParser:true,useUnifiedTopology:true},()=>{
   console.log("database connected");
})



//middleware
app.use(express.json());
app.use(cors());
app.use("/",userinfo);


app.get("/",(req,res)=>res.send("welcome"));

//server connection

app.listen(port,console.log("sever started"));