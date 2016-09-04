var aws = require('aws-sdk');
var cors = require('cors');
var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var connectionString = "postgres://root@localhost/root"
var massiveInstance = massive.connectSync({connectionString : connectionString});


app.listen(3000, function() { console.log('Server initiated on port 3000'); })
