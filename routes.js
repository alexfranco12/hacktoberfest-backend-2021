module.exports = function (app) {
  /*
  * Routes
  */
  app.use('/', require('./routes/root.route'));
  app.use('/contestants', require('./routes/contestants.route'));
};
