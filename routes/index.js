var express = require('express')
var router = express.Router()
var Mango = require("../models/mango").Mango

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const menu = await Mango.find({}, { _id: 0, title: 1, nick: 1 });
    res.cookie('greeting', 'Hi!!!').render('index', {
      title: 'Express',
      menu: menu
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;