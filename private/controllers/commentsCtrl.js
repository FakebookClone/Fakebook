var app = require('../server.js');
var db = app.get('db');

module.exports = {
  getComments: function(req, res) {
    db.comments.getComments([req.params.post_id], function(err, r) {
      res.json(r);
    })
  },
  getHiddenComments: function(req, res) {
    console.log('Getting hidden comments for profile', req.params.profile_id);
    db.comments.getHiddenComments([req.params.profile_id], function(err, r) {
      var hidden_IDs = [];

      for(var i in r) {
        hidden_IDs.push(r[i].comment_id);
      }
      
      res.json(hidden_IDs);
    });
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
