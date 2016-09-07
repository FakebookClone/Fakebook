var app = require('../server.js');
var db = app.get('db');

module.exports = {
  getFriends: function(req, res) {
    db.friends.getFriends([req.params.profile_id], function(err, r) { res.json(r) });
  }
}
