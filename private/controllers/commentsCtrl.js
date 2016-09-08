var app = require('../server.js');
var db = app.get('db');

module.exports = {
  getComments: function(req, res) {
    db.comments.getComments([req.params.post_id], function(err, r) {
      res.json(r);
    })
  },
  postComment: function(req, res) {
    db.comments.postComment([req.params.post_id, req.body.comment], function(err, r) {
      db.comments.getComments([req.params.post_id], function(err, r) { res.json(r); });
    })
  }
}
