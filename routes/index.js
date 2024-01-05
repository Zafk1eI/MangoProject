var express = require('express')
var router = express.Router()
var Mango = require("../models/mango").Mango

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const menu = await Mango.find({}, { _id: 0, title: 1, nick: 1 });
    req.session.greeting = "Hi!!!"
    res.render('index', {
      title: 'Express',
      counter:req.session.counter
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;