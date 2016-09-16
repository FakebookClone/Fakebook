var aws = require('aws-sdk');
var app = require('../server.js');
var db = app.get('db');
var config = require('../config.js');

aws.config.update({
  accessKeyId: config.aws.ACCESS_KEY,
  secretAccessKey: config.aws.SECRET_KEY,
  region: config.aws.REGION
})

const s3 = new aws.S3();

module.exports = {
  upload: function(req, res) {
    const buf = new Buffer(req.body.file.imageBody.replace(/^data:image\/\w+;base64,/, ''), 'base64');
    //replaces that bit with an empty string, and then tells it it's a base64 string
    //bucketName variable below creates a folder for each user
    const bucketName = 'bucket-fakebook/' + req.body.file.userEmail;
    const params = {
      Bucket: bucketName,
      Key: req.body.file.imageName,
      Body: buf,
      ContentType: 'image/' + req.body.file.imageExtension,
      ACL: 'public-read' //what privacy you want
    }

    s3.upload(params, function(err, data) {
      console.log('THIS IS AN ERROR', err, 'THIS IS THE DATA', data);
      if (err) return res.status(500).send(err);
      console.log(data.Location);
      res.status(200).json(data.Location); //save data to database?
    });

  }
}
