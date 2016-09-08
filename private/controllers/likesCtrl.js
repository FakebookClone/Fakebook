var app = require('../server.js');
var db = app.get('db');

module.exports = {
  getPostLikes: function(req, res) {
    db.likes.getPostLikes([req.params.post_id], function(err, r) { res.json(r); })
  },
  likePost: function(req, res) {
    db.likes.getPostLikes([req.params.post_id], function(err, r) {
      var likes = r;
      var alreadyLiked = false;

      for(var i in likes) {
        if(likes[i].profile_id == req.body.profile_id) {
          alreadyLiked = true;
        }
      }

      if(alreadyLiked) {

      } else if ( !(alreadyLiked) ) {
        db.likes.likePost([req.body.profile_id, req.params.post_id], function(err, r) {
          db.likes.getPostLikes([req.params.post_id], function(err, r) { res.json(r); });
        })
      }

    })
  }
}
