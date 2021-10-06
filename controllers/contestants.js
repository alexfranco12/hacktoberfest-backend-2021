const express = require("express");
const router = express.Router();

// import the place model
const Contestant = require("../models/contestant-model");

// Index: GET all contestants in database
router.get("/", (req, res, next) => {
  Contestant.find({})
    .populate('reviews')
    .then((contestants) => res.json(contestants))
    .catch(next);
});

module.exports = router;