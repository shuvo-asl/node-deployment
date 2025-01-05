const app = require("express");

const server_obj = app();

server_obj.get("/", 
  (req,res)=>{
                    res.send("Hello World!");
}
);

server_obj.get("/about",(req,res)=>{
  res.send("We are ASL Deployment Team");
});

module.exports = server_obj;