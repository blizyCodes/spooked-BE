const Topic = require("../db/topicsSchema");

exports.findTopics = async () => {
  try {
    const topics = await Topic.find({ });
    console.log(topics, "return tou mongo/model");
    return topics;
  } catch (error) {
    console.log(error);
  }
};
