var aws = require('aws-sdk');
var cors = require('cors');
var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config.js');
var massive = require('massive');
var massiveInstance = massive.connectSync({connectionString : config.connectionString});

var app = module.exports = express();
app.set('db', massiveInstance);

app.use(cors(config.corsOptions));
app.use(bodyParser.json());
app.use(express.static('../public'));

app.get('*', function(req, res) {
  res.sendFile('index.html', { root: '../public/' });
});

app.listen(3000, function() { console.log('Server initiated on port 3000'); })
