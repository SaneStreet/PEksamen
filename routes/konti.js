var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/* GET konti page. */
router.get('/konti', function (req, res, next) {

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("BEC-Bank");
    dbo.collection("konti").find({}).toArray(function (err, konti) {
      if (err) throw err;
      //console.log(konti);
      db.close();
      res.render('konti', {
        title: 'BEC-Bank',
        konti: konti
      });
    });
  });
});



module.exports = router;