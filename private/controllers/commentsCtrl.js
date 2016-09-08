var app = require('../server.js');
var db = app.get('db');

module.exports = {
  getComments: function(req, res) {
    db.comments.getComments([req.params.post_id], function(err, r) {
      console.log(r);
      res.json(r);
    })
  }
}
