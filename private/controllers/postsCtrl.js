var app = require('../server.js');
var db = app.get('db');

module.exports = {
  createPost: function(req, res) {
    db.posts.createPost([req.params.profile_id, req.body.post_text, req.body.post_image], function(err, r) {
      console.log('ERROR MAKING POST', err);
      res.status(200).send('Post created');
    })
  },
  getPosts: function(req, res) {
    if(req.body.friends) {
      var neededPosts = [];

      var profile_ids = [String(req.params.profile_id)];
      for(var i in req.body.friends) {
        profile_ids.push( String(req.body.friends[i]) );
      }

      for(var i in profile_ids) {
        db.posts.getPosts(profile_ids[i], function(err, r) {
          neededPosts = neededPosts.concat(r);
        })
      }

      setTimeout(function() {
        function compare(a,b) {
          if (a.post_id > b.post_id)
            return -1;
          if (a.post_id < b.post_id)
            return 1;
          return 0;
        }

        var x = neededPosts.sort(compare);
        res.json(neededPosts);
      }, 25);
    } else {
      db.posts.getPosts([req.params.profile_id], function(err, r) { res.json(r); })
    }
  },
  deletePost: function(req, res) {
    db.posts.deletePost([req.params.post_id], function(err, r) { res.status(200).send('deleted') })
  },
  editPost: function(req, res) {
    db.posts.editPost([req.body.post, req.params.post_id], function(err, r) { res.status(200).send('edit success'); })
  },
  getProfilePosts: function(req, res) {
    db.posts.getPosts([req.params.profile_id], function(err, r) { res.json(r); });
  }
}
