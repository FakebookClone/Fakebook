var app = require('../server.js');
var db = app.get('db');
var likeHandler = require('../handlers/likeHandler.js');

module.exports = {
  getPostLikes: function(req, res) {
    db.likes.posts.getPostLikes([req.params.post_id], function(err, r) { res.json(r); })
  },

  likePost: function(req, res) {
    db.likes.posts.getPostLikes([req.params.post_id], function(err, r) {
      var likes = r;
      likeHandler.handleLike(r, req.body.profile_id, 'post', req.params.post_id, res);
    })
  },

  getCommentLikes: function(req, res) {
    db.likes.comments.getCommentLikes([req.params.comment_id], function(err, r) { console.log('SENDING BACK LIKES', r); res.json(r); })
  },

  likeComment: function(req, res) {
    db.likes.comments.getCommentLikes([req.params.comment_id], function(err, r) {
      var likes = r;
      likeHandler.handleLike(r, req.body.profile_id, 'comment', req.params.comment_id, res);
    })
  }
}
