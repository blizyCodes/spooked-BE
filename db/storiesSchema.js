const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const storiesSchema = new Schema(
  {
    title: {
      String,
      required: true,
    },
    body: {
      String,
      required: true,
    },
    postedBy: {
      String,
      required: true,
    },
    votes: {
      Number,
      required: true,
    },
    comments: [{ body: String, date: Date, postedBy: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Story", storiesSchema);

