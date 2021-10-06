const express = require('express');
const router = new express.Router();

var contestantController = require('../controllers/contestantController');

/*
*  CONTESTANT ROUTES
*/

// GET route for all contestants
router.get('/', contestantController.index);

module.exports = router;