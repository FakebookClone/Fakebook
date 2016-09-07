var app = require('../server.js');
var db = app.get('db');

module.exports = {
  getFriends: function(req, res) {
    db.friends.getFriends([req.params.profile_id], function(err, r) {
      var friends = [];
      for(var i in r) {
        if(r[i].requested_id !== req.params.profile_id) {
          friends.push(r[i].requested_id);
        } else if(r[i].accepted_id !== req.params.profile_id) {
          friends.push(r[i].accepted_id);
        }
      }
      res.json(friends);
    });
  }
}
