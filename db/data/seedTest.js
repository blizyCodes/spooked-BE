const testData = require("./testData.json");
process.env.NODE_ENV = "test";
const db = require("../connect");
const Story = require("../storiesSchema");


const runSeed = async () => {
  try {
    await db;
    await Story.collection.drop();
    await Story.collection.insertMany(testData);
    console.log("ta evala");
  } catch (error) {
    console.log(error);
  }
};

module.exports = runSeed;
