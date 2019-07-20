const mongoose = require("mongoose");
const Schedma = mongoose.Schema;

// Create Schema
const ItemSchema = new Schedma({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model("item", ItemSchema);
