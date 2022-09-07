const apiRouter = require("express").Router();
const storiesRouter = require("./stories-router");

apiRouter
  .route("/")
  .get((req, res) => res.send("I'm getting"))
  .post((req, res) => res.send("I'm posting"));

apiRouter.use("/stories", storiesRouter);

module.exports = apiRouter;
