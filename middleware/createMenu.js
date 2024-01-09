const Mango = require("../models/mango").Mango;

module.exports = async function(req, res, next) {
  try {
    res.locals.nav = [];
    const result = await Mango.find({}, { _id: 0, title: 1, nick: 1 });
    res.locals.nav = result;
    next();
  } catch (err) {
    throw err;
  }
};