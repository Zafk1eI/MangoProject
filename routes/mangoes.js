var express = require('express');
var router = express.Router();
var db = require('../mySQLconnect.js');
//var Mango = require('../models/mango.js').Mango
var async = require("async");
//var checkAuth = require("../middleware/checkAuth.js")

/* GET cats listing. */
router.get('/', function (req, res, next) {
  res.send('<h1>Это экран для списка котков</h1>');
});

router.get("/:nick", function (req, res, next) {
  db.query(`SELECT * FROM mangos WHERE mangos.nick = '${req.params.nick}'`, (err,
    mangos) => {
    if (err) {
      console.log(err);
      if (err) return next(err)
    } else {
      if (mangos.length == 0) return next(new Error("Нет такого манго"))
      var mango = mangos[0];
      res.render('mango', {
        title: mango.title,
        picture: mango.avatar,
        desc: mango.about
      })
    }
  })
});

/*router.get('/:nick', checkAuth, async function(req, res, next) {
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
*/

module.exports = router;
