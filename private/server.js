var aws = require('aws-sdk');
var cors = require('cors');
var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config.js');
var massive = require('massive');
var massiveInstance = massive.connectSync({connectionString : config.connectionString});

var app = module.exports = express();
app.set('db', massiveInstance);

var userCtrl = require('./controllers/userCtrl.js');
var postCtrl = require('./controllers/postCtrl.js');
var profileCtrl = require('./controllers/profileCtrl.js');

app.use(cors(config.corsOptions));
app.use(bodyParser.json());
app.use(express.static('../public'));

//User Endpoints
app.post('/api/user/create/:facebook_id', userCtrl.createUser);

//Profile Endpoints
app.post('/api/profile/create/:facebook_id', profileCtrl.createProfile);

//Post Endpoints
app.get('/api/posts/:profile_id', postCtrl.getPosts);
app.post('/api/post/:profile_id', postCtrl.createPost);

app.get('*', function(req, res) {
  res.sendFile('index.html', { root: '../public/' });
});

app.listen(3000, function() { console.log('Server initiated on port 3000'); })
