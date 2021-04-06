const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const reviewSchema = new mongoose.Schema({
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  review: {
    type: String,
    min: 6,
    max: 300,
  },
  product: [
    {
      type: Schema.Types.ObjectId,
      ref: "product",
    },
  ],
  stars: {
    type: Number,
    max: 5,
    min: 1,
  },
});

module.exports = mongoose.model("review", reviewSchema);
