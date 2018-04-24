/* REQUIREMENTS AND PRELIM VARIABLES */
var express = require('express');
var app = express();
var http = require("http");
var fs = require("fs");
var bodyParser = require("body-parser");
var PORT = 3000;
var path = require("path") 

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
})
 



/* BODY PARSER FOR EXPRESS */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/* SERVER LISTEN */
app.listen(PORT, function() {
  console.log("Server listening on port " + PORT)
})


var table1 = [];
var table2 = [];
var table3 = [];
var table4 = [];
var table5 = [];

