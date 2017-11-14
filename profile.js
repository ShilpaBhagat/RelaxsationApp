vr express = require('express');
var router = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'Uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
});

var upload = multer({ storage: storage }).single('avatar');



Router.post('/profile', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      
    }

    // Everything went fine
  })
})