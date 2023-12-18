var express = require('express'),
app = express()
var session = require('express-session');   
var path = require('path');
var bodyParser = require('body-parser');
var port =  8000
// --------------database

const mongoose = require("mongoose");
const dbConfig = require("./app/database/db_config");
mongoose.connect(dbConfig.dbs, {
  useNewUrlParser: true,
});


var cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine","ejs");
app.set("views","./views");

var routes = require('./app/routes');
app.use(routes)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
}) 

app.listen(port);

console.log('Server run with port =  ' + port);
module.exports = app;