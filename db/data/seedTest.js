const storiesTestData = require("./storiesTestData.json");
const topicsTestData = require("./topicsTestData.json");
process.env.NODE_ENV = "test";
const db = require("../connect");
const Story = require("../storiesSchema");
const Topic = require("../topicsSchema");

const runSeed = async () => {
  try {
    await db;
    await Promise.all([Story.collection.drop(), Topic.collection.drop()]);
    await Promise.all([
      Story.collection.insertMany(storiesTestData),
      Topic.collection.insertMany(topicsTestData),
    ]);
    console.log("ta evala");
  } catch (error) {
    console.log(error);
  }
};

module.exports = runSeed;
