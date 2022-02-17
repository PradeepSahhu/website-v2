
// --------------- server settings-----------------

// importing modules
const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const mongoose = require("mongoose");
const ejs = require("ejs");
const { append } = require("express/lib/response");

const app = express();




app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req,res){
  res.sendFile(__dirname+ "/index.html")
    // res.render('index',{
    //   pageTitle: 'Home'
    // });
  console.log("Successfully connected to the home route");
});

app.get("/Education", function(req,res){
  res.render("Education",{
    pageTitle: 'Education'
  });
console.log("Successfully connected to the Education route");
});

app.get("/contact", function(req,res){
  res.render("contact",{
    pageTitle: 'contact'
  });
console.log("Successfully connected to the Education route");
});

app.listen(3000, function(req,res){
  console.log("Successful server connection at localport:3000")
});