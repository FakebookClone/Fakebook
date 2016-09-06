var app = require('../server.js');
var db = app.get('db');

module.exports = {
  createUser: function(req, res) {
    console.log('USER LOGGING IN', req.params);
    db.users.getUser([req.params.facebook_id], function(err, r) {
      if(r.length === 0) {
        db.users.createUser([req.params.facebook_id], function(err, r) { res.status(200).send('ok') })
      } else {
        res.status(200).send('User already in database');
      }
    })
  }
}
