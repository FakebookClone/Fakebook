var app = require('../server.js');
var db = app.get('db');

module.exports = {
  getComments: function(req, res) {
    db.comments.getComments([req.params.post_id], function(err, r) {
      res.json(r);
    })
  },
  postComment: function(req, res) {
    db.comments.postComment([req.params.post_id, req.body.comment, req.body.profile_id], function(err, r) {
      db.comments.getComments([req.params.post_id], function(err, r) { res.json(r); });
    })
  },
  hideComment: function(req, res) {
    console.log('HIDE COMMENT HIT', req.body);
    db.comments.hideComment([req.body.comment_id, req.body.profile_id], function(err, r) {
      db.comments.getComments([req.body.post_id], function(err, r) { res.json(r); })
    })
  },
  unhideComment: function(req, res) {
    console.log('UNHIDE COMMENT HIT', req.body);
    db.comments.unhideComment([req.body.comment_id, req.body.profile_id], function(err, r) {
      db.comments.getComments([req.body.post_id], function(err, r) {
        res.json(r);
      })
    })
  }
}
