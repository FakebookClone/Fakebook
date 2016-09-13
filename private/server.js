var cors = require('cors');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config.js');
var massive = require('massive');
var massiveInstance = massive.connectSync({connectionString : config.connectionString});

var app = module.exports = express();
app.set('db', massiveInstance);

var usersCtrl = require('./controllers/usersCtrl.js');
var postsCtrl = require('./controllers/postsCtrl.js');
var profilesCtrl = require('./controllers/profilesCtrl.js');
var friendsCtrl = require('./controllers/friendsCtrl.js');
var commentsCtrl = require('./controllers/commentsCtrl.js');
var likesCtrl = require('./controllers/likesCtrl.js');
var aws = require('./controllers/AWSctrl.js');

app.use(bodyParser.json({limit: '25mb'})); // default is 100KB;
app.use(bodyParser.urlencoded({limit: '25mb', extended: true}));
app.use(cors(config.corsOptions));
app.use(express.static('../public'));

//User Endpoints
app.post('/api/user/create/:facebook_id', usersCtrl.createUser);

//Profile Endpoints
app.get('/api/profile/:profile_id', profilesCtrl.getProfile);
app.post('/api/profile/create/:facebook_id', profilesCtrl.createProfile);

//Post Endpoints
app.post('/api/posts/:profile_id', postsCtrl.getPosts);
app.post('/api/post/:profile_id', postsCtrl.createPost);
app.put('/api/post/:post_id', postsCtrl.editPost);
app.delete('/api/post/:post_id', postsCtrl.deletePost);

//Friend Endpoints
app.get('/api/friends/:profile_id', friendsCtrl.getFriends);

//Comment Endpoints
app.get('/api/comments/:post_id', commentsCtrl.getComments);
app.post('/api/comment/:post_id', commentsCtrl.postComment);

//Like Endpoints
app.get('/api/likes/post/:post_id', likesCtrl.getPostLikes);
app.post('/api/like/post/:post_id', likesCtrl.likePost);
app.get('/api/likes/comment/:comment_id', likesCtrl.getCommentLikes);
app.post('/api/like/comment/:comment_id', likesCtrl.likeComment);

//Amazon Web Services Endpoints
app.post('/api/aws/upload', aws.upload);

app.get('*', function(req, res) {
  res.sendFile('index.html', { root: '../public' });
})

app.listen(3000, function() { console.log('Server initiated on port 3000'); })
