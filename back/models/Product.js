const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const productSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    min: 4,
    max: 120,
  },
  origin: {
    type: String,
    // required: true,
    max: 120,
    min: 4,
  },
  category: [
    {
      type: Schema.Types.ObjectId,
      ref: "category",
    },
  ],

  description: {
    type: String,
    // required: true,
    max: 120,
    min: 4,
  },
  flavour: {
    type: String,
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
  quantity: {
    type: Number,
    // required: true,
    default: 1
  },
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: "tag",
    },
  ],
  //como se hace los tags en sql esta en wikiclon (el razonamiento)

  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "review",
    },

  ],
  img: {
    type: String,
    // required: true,
  },

});

module.exports = mongoose.model("product", productSchema);
