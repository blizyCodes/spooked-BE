const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const storiesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    postedBy: {
      type: String,
      required: true,
    },
    votes: {
      type: Number,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    comments: [{ body: String, date: Date, postedBy: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Story", storiesSchema);
