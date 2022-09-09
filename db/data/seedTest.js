const storiesTestData = require("./storiesTestData.json");
const topicsTestData = require("./topicsTestData.json");
const usersTestData = require("./usersTestData.json");

process.env.NODE_ENV = "test";
const db = require("../connect");
const Story = require("../storiesSchema");
const Topic = require("../topicsSchema");
const User = require("../usersSchema");

const runSeed = async () => {
  try {
    await db;
    await Promise.all([
      Story.collection.drop(),
      Topic.collection.drop(),
      User.collection.drop(),
    ]);
    await Promise.all([
      Story.collection.insertMany(storiesTestData),
      Topic.collection.insertMany(topicsTestData),
      User.collection.insertMany(usersTestData),
    ]);
    console.log("ta evala");
  } catch (error) {
    console.log(error);
  }
};

module.exports = runSeed;
