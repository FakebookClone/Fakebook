var app = require('../server.js');
var db = app.get('db');

module.exports = {
  createPost: function(req, res) {
    res.status(200).send('ok');
  }
}
