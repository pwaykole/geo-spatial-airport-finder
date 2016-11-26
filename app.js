var express = require('express');
var express_geocoding_api = require('express-geocoding-api');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//mongoose connect
mongoose.connect('mongodb://localhost/airfind');
var db = mongoose.connection;

var app = express();
app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send("Please use /api/airports or /api/states");
});

app.listen(3000);
console.log("port running on 3000");