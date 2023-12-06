var express = require('express');
var router = express.Router();
var Mango = require('../models/mango.js').Mango

router.get('/:nick', async function(req, res, next) {
    try {
        const mymango = await Mango.findOne({ nick: req.params.nick }).exec();
        if (!mymango) {
            throw new Error("такого манго пока нет на сайте");
        }
        res.render('mango', {
            title: mymango.title,
            picture: mymango.avatar,
            desc: mymango.desc,
        });
    } catch (err) {
        return next(err);
    }
});

module.exports = router;
