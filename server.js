const express = require("express");

const app_instance = express();

app_instance.get("/",(req,res)=>{
  res.send("Hello World!");
});

app_instance.get("/about",(req,res)=>{
  res.send("We are ASL Deployment Team");
});

module.exports = app_instance;