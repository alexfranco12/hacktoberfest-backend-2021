const Contestant = require('../models/contestant-model');

Contestant.deleteMany({})
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  })