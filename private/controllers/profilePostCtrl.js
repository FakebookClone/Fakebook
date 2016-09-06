var app = require('../server.js');
var db = app.get('db');

module.exports = {
  createPost: function(req, res) {
    console.log('New post', req.params, req.body);
    db.profiles.createPost([req.params.profile_id, req.body.post_text, req.body.post_image], function(err, r) {
      db.profiles.getPosts([req.params.profile_id], function(err, r) { res.json(r) });
    })
  },
  getPosts: function(req, res) {
    console.log('Get posts', req.params);
    db.profiles.getPosts([req.params.profile_id], function(err, r) { res.json(r) });
  }
}
