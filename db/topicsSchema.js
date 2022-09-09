const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const topicsSchema = new Schema({
  slug: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Topic", topicsSchema);
