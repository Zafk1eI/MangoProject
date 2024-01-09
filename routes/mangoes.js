var express = require('express');
var router = express.Router();
var Mango = require('../models/mango.js').Mango
var async = require("async")
var checkAuth = require("../middleware/checkAuth.js")

router.get('/:nick', checkAuth, async function(req, res, next) {
  try {
    const [mango, mangoes] = await Promise.all([
      Mango.findOne({ nick: req.params.nick }),
      Mango.find({}, { _id: 0, title: 1, nick: 1 })
    ]);
  
    if (!mango) {
      throw new Error("Нет такого манго");
    }
    
    res.render('mango', {
        title: mango.title,
        picture: mango.avatar,
        desc: mango.desc,
    });
console.log(mangoes);
} catch (err) {
    next(err);
}
});

module.exports = router;
