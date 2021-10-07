const Contestant = require("../models/contestant-model");
/*
* CONTROLLERS
*/

// Display list of all contestants
exports.index = (req, res, next) => {
  Contestant.find({})
    .then((contestants) => {
      res.status("200").json(contestants)
    })
    .catch(next);
};

// CREATE: create a new contestant in the DB
exports.contestant_create = (req, res, next) => {
  body = req.body
  console.log(body)
  Contestant.create({
    city: body.city,
    costumeImgUrl: body.costumeImgUrl,
    costumeTitle: body.costumeTitle,
    country: body.country,
    name: body.name,
    votes: 0,
  })
  .then((contestant) => {
    res.status("201")
    res.send({id: contestant._id})
  })
  .catch(next);
};

// Find contestant by id #
exports.contestant_detail = (req, res, next) => {
  Contestant.findById(req.params.id)
  .then((contestant) => {
    if (!contestant) {
      res.status(404).send({status: 'error'})
    } else {
      res.send({
        id: contestant._id,
        name: contestant.name,
        costumeTitle: contestant.costumeTitle,
        costumeImgUrl: contestant.costumeImgUrl,
        city: contestant.city,
        country: contestant.country,
        votes: contestant.votes
      })
    }
  })
  .catch(next);
};

// UPDATE: update a contestant in the DB
exports.contestant_update = (req, res, next) => {
  Contestant.findOneAndUpdate(
    { 
      _id: req.params.id 
    }, req.body, 
    { 
      new: true 
    })
    .then(() => {
      res.status(200).send({status: 'ok'})
    })
    .catch(next);
}

exports.contestant_upvote = (req, res, next) => {
  Contestant.findOneAndUpdate(
    { 
      _id: req.params.id 
    },{
      $inc: {'votes': 1}
    }, 
    { 
      new: true 
    })
    .then((contestant) => {
      res.status(200).send({
        status: 'ok',
        votes: contestant.votes
      })
    })
    .catch(next);
};

exports.contestant_delete = (req, res, next) => {
  Contestant.findOneAndDelete({ _id: req.params.id })
  .then(() => {
    res.status(200).send({status: 'ok'})
  })
  .catch(next);
};