//const User = require("../models/user").User;
var db = require('../mySQLconnect.js');

module.exports = function (req, res, next) {
  res.locals.user = null
  console.log('Проверяем сессию')
  console.log(req.session.user)
  db.query(`SELECT * FROM user WHERE user.id = '${req.session.user}'`, (err,
    users) => {
    if (err)
      return next(err)
    if (users.length > 0) {
      res.locals.user = users[0];
    }
    next()
  })
}

/*module.exports = async function(req, res, next) {
  res.locals.user = null
  try {
    const user = await User.findById(req.session.user).exec();
    if (!user) {
      res.locals.user = null;
    } else {
      res.locals.user = user;
    }
    next();
  } catch (err) {
    next(err);
  }
  next();
};*/