require("dotenv").config();
const express = require("express");
const ConnectDatabase = require("./database/connectDB");
const app=express();



ConnectDatabase().then(()=>{
    app.listen(3050,()=>{
        console.log("listening port 3050")
    })
})

