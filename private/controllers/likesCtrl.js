var app = require('../server.js');
var db = app.get('db');

function checkLikes(likes, profile_id, type) {
  for(var i in likes) {
    if(likes[i].profile_id == profile_id) {
      return true;
    }
  }

  return false;
}

function handleLike(alreadyLiked, type) {
  
}

module.exports = {
  getPostLikes: function(req, res) {
    db.likes.posts.getPostLikes([req.params.post_id], function(err, r) { res.json(r); })
  },

  likePost: function(req, res) {
    db.likes.posts.getPostLikes([req.params.post_id], function(err, r) {
      var likes = r;
      var alreadyLiked = checkLikes(likes, req.body.profile_id);

      if(alreadyLiked) {
        db.likes.posts.destroyPostLike([req.body.profile_id, req.params.post_id], function(err, r) {
          db.likes.posts.getPostLikes([req.params.post_id], function(err, r) { console.log(r); res.json(r); });
        })
      } else {
        db.likes.global.like([req.body.profile_id, req.params.post_id, null, null], function(err, r) {
          db.likes.posts.getPostLikes([req.params.post_id], function(err, r) { console.log(r); res.json(r); });
        });
      }
    })
  },

  getCommentLikes: function(req, res) {
    db.likes.comments.getCommentLikes([req.params.comment_id], function(err, r) { console.log('SENDING BACK LIKES', r); res.json(r); })
  },

  likeComment: function(req, res) {
    db.likes.comments.getCommentLikes([req.params.comment_id], function(err, r) {
      var likes = r;
      var alreadyLiked = checkLikes(likes, req.body.profile_id);

      if(alreadyLiked) {
        db.likes.comments.destroyCommentLike([req.body.profile_id, req.params.comment_id], function(err, r) {
          db.likes.comments.getCommentLikes([req.params.comment_id], function(err, r) { console.log(r); res.json(r); });
        })
      } else {
        db.likes.global.like([req.body.profile_id, null, req.params.comment_id, null], function(err, r) {
          db.likes.comments.getCommentLikes([req.params.comment_id], function(err, r) { console.log(r); res.json(r); });
        })
      }
    })
  }
}
