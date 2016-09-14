var app = require('../server.js');
var db = app.get('db');

module.exports = {
  getFriendRequests: function(req, res) {
    db.friendRequests.getFriendRequests([req.params.profile_id], function(err, r) {
      if(r.length !== 0) {
        var request_sender_id = r[0].request_sender_id;
        var requested_id = r[0].requested_id;
        var friendRequests = [];

        for(var i = 0; i < r.length; i++) {
          db.profiles.getProfile([r[i].request_sender_id], function(err, r) {
            friendRequests.push({
              name: r[0].name,
              profile_pic: r[0].profile_pic,
              request_sender_id: request_sender_id,
              requested_id: requested_id
            })
          })
        }

        setTimeout(() => {
          res.json(friendRequests);
        }, 50)
      } else {
        res.json([]);
      }
    })
  },
  deleteFriendRequest: function(req, res) {
    db.friendRequests.deleteFriendRequest([req.body.request_sender_id, req.body.requested_id], function(err, r) { res.json(r); });
  }
}
