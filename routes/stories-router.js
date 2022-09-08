const storiesRouter = require("express").Router();
const Story = require("../db/storiesSchema");
// const { getStories } = require("../controllers/stories-controllers");

storiesRouter
  .route("/")
  .get(async (req, res) => {
    console.log("ekana get, ola ok");
    res.status(200).send({ title: "titlos" });
  })
  .post(async (req, res) => {
    const { title, body, postedBy } = req.body;

    try {
      const story = await Story.create({ title, body, postedBy, votes: 0 });
      res.status(200).json(story);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

module.exports = storiesRouter;
