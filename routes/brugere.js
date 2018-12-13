var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/brugere', function(req, res, next) {
  res.render('brugere', { title: 'BEC-Bank' });
});

module.exports = router;