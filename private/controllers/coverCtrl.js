var app = require('../server.js');
var db = app.get('db');

module.exports = {
  getCover: function(req, res, next) {
    console.log("req params", req.params);
    db.cover.getCoverPhoto([req.params.facebook_id], function(err, r) {
      console.log('coverCtrl', r);
      res.json(r);
    });
  },

  getProfilePic: function(req, res, next) {
    console.log("req params", req.params);
    //db call
    db.cover.getProfilePic([req.params.facebook_id], function(err, r) {
      console.log("coverCtrl", r);
      res.json(r);
    })
  }
};
