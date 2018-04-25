/* REQUIREMENTS AND PRELIM VARIABLES */
var express = require('express');
var app = express();
var http = require("http");
var fs = require("fs");
var bodyParser = require("body-parser");
var PORT = 3000;
var path = require("path") 

var table1 = [];
var table2 = [];
var table3 = [];
var table4 = [];
var table5 = [];
var reservations = [];


/* USER ROUTES */
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get('/tables', function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get('/reserve', function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/reservations", function (req, res) {
    return res.json(reservations)
})

app.get("/api/characters/:reservation", function (req, res) {
    for (i = 0; i < reservations.length; i++) {
      return res.json(reservations[i]);
    }
})

app.post("/api/characters", function (req, res) {
  var newReservation = req.body;

  reservations.push(newReservation);

  res.json(newReservation)
})
 



/* BODY PARSER FOR EXPRESS */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/* SERVER LISTEN */
app.listen(PORT, function() {
  console.log("Server listening on port " + PORT)
})




