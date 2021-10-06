// import the contestant model
const Contestant = require("../models/contestant-model");
/*
* CONTROLLERS
*/

// Display list of all contestants
exports.index = (req, res, next) => {
  Contestant.find({})
    .then((contestants) => res.json(contestants))
    .catch(next);
};
