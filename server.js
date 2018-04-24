var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 


var http = require("http");
var fs = require("fs");
var bodyParser = require("body-parser")
var path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var PORT = 3000;

app.listen(PORT, function() {
  console.log("Server listening on port " + PORT)
})
