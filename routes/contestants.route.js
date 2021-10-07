const express = require('express');
const router = new express.Router();

var contestantController = require('../controllers/contestantController');
const Contestant = require('../models/contestant-model');

/*
*  CONTESTANT ROUTES
*/

// GET route for all contestants
router.get('/', contestantController.index);
router.post('/', contestantController.contestant_create);
router.get('/:id', contestantController.contestant_detail);
router.patch('/:id', contestantController.contestant_update);
router.delete('/:id', contestantController.contestant_delete);
router.patch('/:id/upvote', contestantController.contestant_upvote);


module.exports = router;