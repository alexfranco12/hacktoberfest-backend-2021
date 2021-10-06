const express = require('express');
const router = new express.Router();

// redirect to contestant catalog
router.get("/", (req, res) => {
  res.redirect("/contestants");
});

module.exports = router;