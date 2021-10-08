const Contestant = require("../models/contestant-model");

/*
*  CONTESTANT CONTROLLERS
*/

// READ: display list of all contestants
exports.index = (req, res) => {
  Contestant.find({})
    .exec((err, contestants) => {
      res.status("200").json(contestants)
    })
};

// CREATE: create a new contestant in the DB
exports.contestant_create = (req, res) => {
  const newContestant = new Contestant(req.body);
  newContestant.save((err, saved) => {
    if (!err) {
      Contestant
        .findOneAndUpdate(
          {
            _id: saved._id
          }, {
            $set: {votes: 0}
          }, {
            new: true
          })
        .exec((err, contestant) => {
          res.status("201").send({id: contestant._id})
        });
    } else {
      console.log(err)
    }
  })
};

// READ: find contestant by id #
exports.contestant_detail = (req, res) => {
  Contestant.findById(req.params.id)
  .then((contestant) => {
    if (!contestant) {
      res.status(404).send({status: 'error'})
    } else {
      res.status(200).json(contestant)
    }
  });
};

// UPDATE: update a contestant in the DB
exports.contestant_update = (req, res) => {
  Contestant.findOneAndUpdate(
    { 
      _id: req.params.id 
    }, req.body, 
    { 
      new: true 
    })
    .exec(() => {
      res.status(200).send({status: 'ok'})
    });
};

// UPDATE: upvote contestant by increment of 1
exports.contestant_upvote = (req, res) => {
  Contestant.findOneAndUpdate(
    { 
      _id: req.params.id 
    },{
      $inc: {'votes': 1}
    }, 
    { 
      new: true 
    })
    .exec((contestant) => {
      res.status(200).send({
        status: 'ok',
        votes: contestant.votes
      })
    });
};

// DELETE: remove contestant by id #
exports.contestant_delete = (req, res) => {
  Contestant.findOneAndDelete({ _id: req.params.id })
  .exec(() => {
    res.status(200).send({status: 'ok'})
  });
};