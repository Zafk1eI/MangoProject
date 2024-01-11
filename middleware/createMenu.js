var db = require('../mySQLconnect.js');

module.exports = function(req, res, next) {
    res.locals.nav = [];
    db.query('SELECT title, nick FROM mangos', function(err, result) {
        if (err) throw err;
        res.locals.nav = result;
        next();
    });
};