var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница манго */
router.get('/karamelka', function(req, res, next) {
  res.send("<h1>Страница первого манго</h1>")
  });

  /* Страница манго */
router.get('/karamelka', function(req, res, next) {
  res.send("<h1>Страница второго манго</h1>")
  });

  /* Страница манго */
router.get('/karamelka', function(req, res, next) {
  res.send("<h1>Страница третьего манго</h1>")
  });

module.exports = router;
