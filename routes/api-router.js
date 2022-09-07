const apiRouter = require("express").Router();

apiRouter
  .route("/")
  .get((req, res) => res.send("I'm getting"))
  .post((req, res) => res.send("I'm posting"));




module.exports = apiRouter;
