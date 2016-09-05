var aws = require('aws-sdk');
var cors = require('cors');
var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
// var connectionString = "postgres://postgres:password@localhost/fakebook"
var connectionString = "postgres://jameslemire@localhost/fakebook";
// var connectionString = "postgres://michaellecke@localhost/fakebook";
// var connectionString = "postgres://LonnieMcGill@localhost/fakebook";
// Brandon's connectionString here
var massiveInstance = massive.connectSync({connectionString : connectionString});
var config = require('./config.js');

var app = module.exports = express();
app.set('db', massiveInstance);

app.use(cors(config.corsOptions));
app.use(bodyParser.json());
app.use(express.static('../public'));

app.listen(3000, function() { console.log('Server initiated on port 3000'); })
