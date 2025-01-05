const express = require("express");

const app_instance = express();

// Disable the X-Powered-By header
app_instance.disable("x-powered-by");

app_instance.get("/", (req, res) => {
  res.send("Hello World!");
});

app_instance.get("/about", (req, res) => {
  res.send("We are ASL Deployment Team");
});

module.exports = app_instance;
