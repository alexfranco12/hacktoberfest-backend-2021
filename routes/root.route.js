const express = require('express');
const router = new express.Router();

// redirect to contestant catalog
router.get("/", (req, res) => {
  res.send({
      status: '200'
    });
});

module.exports = router;