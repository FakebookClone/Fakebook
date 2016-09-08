var app = require('../server.js');
var db = app.get('db');

module.exports = {
  getLikes: function(req, res) {
    console.log(req.params, req.body);
  },
  likeContent: function(req, res) {
    console.log(req.params, req.body);
  }
}
