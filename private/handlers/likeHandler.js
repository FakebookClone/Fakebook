var app = require('../server.js');
var db = app.get('db');

module.exports = {
  handleLike: function(likes, profile_id, type, id, res) {
    var alreadyLiked = this.checkLikes(likes, profile_id);

    if(alreadyLiked) {
      switch(type) {

        case 'post':
          db.likes.posts.destroyPostLike([profile_id, id], function(err, r) {
            db.likes.posts.getPostLikes([id], function(err, r) { res.json(r); });
          })
          break;

        case 'comment':
          db.likes.comments.destroyCommentLike([profile_id, id], function(err, r) {
            db.likes.comments.getCommentLikes([id], function(err, r) { res.json(r); });
          })
          break;

        default:
          console.log('Unsupported Type');
      }
    } else {
      switch(type) {

        case 'post':
          db.likes.global.like([profile_id, id, null, null], function(err, r) {
            db.likes.posts.getPostLikes([id], function(err, r) { console.log(r); res.json(r); });
          })
          break;

        case 'comment':
          db.likes.global.like([profile_id, null, id, null], function(err, r) {
            db.likes.comments.getCommentLikes([id], function(err, r) { console.log(r); res.json(r); });
          })
          break;

        default:
          console.log('Unsupported Type');
      }
    }
  },

  checkLikes: function(likes, profile_id) {
    for(var i in likes) {
      if(likes[i].profile_id == profile_id) {
        return true;
      }
    }

    return false;
  }

}
