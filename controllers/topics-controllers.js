const { findTopics } = require("../models/topics-models");

exports.getTopics = async (req, res, next) => {
  try {
    const topics = await findTopics();
    res.status(200).send(topics);
  } catch (error) {
    console.log(error);
  }
};
