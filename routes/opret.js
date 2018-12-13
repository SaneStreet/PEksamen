var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/opret', function (req, res, next) {
  res.render('opret', { title: 'BEC-Bank' });

  //Forbind til mongoDB vha. mongoose modulet.
  mongoose.connect('mongodb://localhost:27017/');
  //Fortæller hvilket Model den skal hente og bruge
  var BrugerModel = require('../public/models/brugerModel');
  //Fortæller hvilken collection i MongoDB der skal bruges
  var bruger = mongoose.model('Bruger', BrugerModel.BrugerSchema, 'brugere');

  //Laver en POST forespørgsel på siden, og indsætter indhold i databasen fra sidens indhold
  router.post('/register', function (req, res, next) {
    //lokal variabel til at skabe et objekt, som databasen kan læse fra
    let object = {
      navn: req.body.navn,
      mail: req.body.mail,
      kodeord: req.body.kodeord
    }
    //opret brugeren
    bruger.create(object, function (err) {
      if (err) { return console.log(err) }
    });
    //send mig til opret-siden
    res.redirect('/login');
  });

});


module.exports = router;