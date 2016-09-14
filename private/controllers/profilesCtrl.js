var app = require('../server.js');
var db = app.get('db');

module.exports = {
  createProfile: function(req, res) {
    db.profiles.getProfile([req.params.facebook_id], function(err, r) {
      if(r.length === 0) {
        db.profiles.createProfile([req.body.name, req.body.first_name, req.body.last_name, req.body.email, req.body.profile_pic, req.params.facebook_id], function(err, r) {
          res.status(200).send('Profile created');
        })
      } else {
        res.status(200).send('Profile already created');
      }
    })
  },
  getProfile: function(req, res) {
    db.profiles.getProfile([req.params.profile_id], function(err, r) { res.json(r) });
  }
}
