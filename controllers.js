module.exports = function (app) {
  /*
  * Controllers
  */
  app.use("/contestant/", require("./controllers/contestants"));
};