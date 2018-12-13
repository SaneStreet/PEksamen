var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose');

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'BEC-Bank' });
});

module.exports = router;